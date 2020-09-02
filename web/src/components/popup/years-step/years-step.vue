<script>
  export default {
    name: "years-step",
    data: () => ({
      yearCount: null,
    }),
    methods: {
      submitForm() {
        if (this.yearCount) {
          this.$emit('input', {
            yearCount: this.yearCount,
          });
        }
      }
    }
  }
</script>

<template>
  <form
    class="land-years-step"
    @submit.prevent="submitForm"
  >
    <h3 class="typo-h3">Как давно средства были утеряны?</h3>
    <label class="checkbox-wrapper">
      <input
        type="radio"
        v-model="yearCount"
        value="more than 180 days"
      />
      Более 180 дней
    </label>
    <label class="checkbox-wrapper">
      <input
        type="radio"
        v-model="yearCount"
        value="less than 180 days"
      />
      Менее 180 дней
    </label>
    <button
      type="submit"
      class="btn-default btn-primary"
    >
      Следующий шаг
    </button>
  </form>
</template>

<style lang="scss" scoped>
@import 'years-step.scss';
</style>
