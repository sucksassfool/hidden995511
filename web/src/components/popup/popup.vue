<script>
import axios from 'axios';
export default {
  name: "popup",
  components: {
    companyStep: () => import('./company-step/company-step.vue'),
    yearsStep: () => import('./years-step/years-step.vue'),
    sumStep: () => import('./sum-step/sum-step.vue'),
    userFormStep: () => import('./user-form-step/user-form-step.vue'),
  },
  data: () => ({
    extraInformation: {},
  }),
  computed: {
    activeComponent() {
      if (!this.extraInformation.companyName) return 'company-step';
      if (!this.extraInformation.yearCount) return 'years-step';
      if (!this.extraInformation.sum) return 'sum-step';
      return 'user-form-step';
    }
  },
  methods: {
    closePopup() {
      this.$Bus.$emit('popup', false);
    },
    updateExtraInformation(extraInfo) {
      this.extraInformation = {
        ...this.extraInformation,
        ...extraInfo,
      }
    },
    async submitInformation(extraInfo) {
      this.updateExtraInformation(extraInfo);
      const res = await axios.post('/user-form', this.extraInformation);
      console.log(res);
      this.closePopup();
    }
  }
}
</script>

<template>
  <div class="land-popup">
    <div class="land-popup__wrapper">
      <div class="land-popup__control">
        <h1 class="typo-h2">
          Проверка брокера
        </h1>
        <button
          @click="closePopup"
          class="btn-default land-popup__cross"
        />
      </div>
      <component
        :is="activeComponent"
        @input="updateExtraInformation"
        @submit="submitInformation"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'popup.scss';
</style>
