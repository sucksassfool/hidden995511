<template>
  <form
      class="land-sum-step"
      @submit.prevent="submitForm"
  >
    <h3 class="typo-h3">
      Введите примерную потерянную сумму
    </h3>
    <input
        class="input land-sum-step__input"
        v-model="sumValue"
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
    sumValue: '',
  }),
  methods: {
    submitForm() {
      if (this.sumValue) {
        this.$emit('input', {
          sum: this.sumValue,
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'sum-step.scss';
</style>
