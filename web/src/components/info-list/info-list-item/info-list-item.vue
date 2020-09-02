<script>
export default {
  name: 'info-list-item',
  props: {
    text: {
      type: String,
      default: 'text',
    },
    order: {
      type: [String, Number],
      default: 1,
    }
  },
  methods: {
    calcCardType(index) {
      return index % 2 !== 0 ? 'right' : 'left';
    },
  }
}
</script>

<template>
  <li
    class="land-info-list-item"
    :class="`land-info-list-item_${calcCardType(order)}`"
    :data-aos="`fade-${calcCardType(order)}`"
  >
    <h2 class="typo-h2 land-info-list-item__headline">
      {{ `0${order + 1}.` }}
    </h2>
    <span
      class="typo-primary land-info-list-item__content"
    >
      {{ text }}
    </span>
  </li>
</template>

<style lang="scss" scoped>
@import 'info-list-item.scss';
</style>
