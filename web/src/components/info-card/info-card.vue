<template>
  <div
    class="land-info-card"
    :class="{
      'land-info-card_left' : type === 'left',
      'land-info-card_right' : type === 'right',
    }"
  >
    <h2 class="land-info-card__title typo-h2 custome-title">{{ title }}</h2>
    <div class="land-info-card__card">
      <div class="land-info-card__card-wrapper">
        <p class="typo-primary" v-if="text">
          {{ text }}
        </p>
        <p class="typo-primary" v-if="isContact">
          Наши контакты для консультаций:<br>
          Viber, Whatsapp, Telegram:
        </p>
        <a class="link typo-primary" v-if="isContact" href="tel:+79009651662">+7 900 965 16 62</a>
        <br>
        <a class="link typo-primary" v-if="isContact" href="tel:+79912791386">+7 991 279 13 86</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'left',
    },
    isContact: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'info-card.scss';
</style>
