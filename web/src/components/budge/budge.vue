<template>
  <li class="land-budge">
    <font-awesome-icon :icon="['fas', imageUrl]" class="land-budge__image" alt="image" />
    <h3 class="typo-h3 land-budge__title">
      {{ title }}
    </h3>
    <p class="typo-secondary">
      {{ text }}
    </p>
  </li>
</template>

<script>
export default {
  name: 'Budge',
  props: {
    title: {
      type: String,
      default: 'title',
    },
    text: {
      type: String,
      default: 'text',
    },
    imageUrl: {
      type: String,
      default: 'https://via.placeholder.com/100x100',
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'budge.scss';
</style>
