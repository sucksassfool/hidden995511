<template>
  <form
    class="land-company-step"
    @submit.prevent="submitForm"
  >
    <h3 class="typo-h3">Введите название компании, в которой Вы лишились денег</h3>
    <input
      class="input land-company-step__input"
      v-model="companyName"
      placeholder="Введите ответ"
    >
    <button
      type="submit"
      class="btn-default btn-primary"
    >
      Следующий шаг
    </button>
  </form>
</template>

<script>
  export default {
    name: "input-step",
    data: () => ({
      companyName: '',
    }),
    methods: {
      submitForm() {
        if (this.companyName) {
          this.$emit('input', {
            companyName: this.companyName,
          });
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
@import 'company-step.scss';
</style>
