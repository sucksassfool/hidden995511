<template>
  <div class="land-preview" id="preview">
    <carousel
        paginationEnabled
        :perPage="1"
        autoplay
        :autoplayHoverPause="false"
        :autoplayTimeout="5000"
        loop
        paginationPosition="bottom-overlay"
    >
      <slide>
        <div class="land-preview__wrapper land-preview__wrapper_hand-shacking">
          <div class="container">
          <h1
              class="typo-h1"
              data-aos="fade-left"
              data-aos-delay="1000"
          >Вас обманул брокер?</h1>
          <h2
              class="typo-h2"
              data-aos="fade-left"
              data-aos-delay="1500"
          >Оставте заявку для бесплатной регистрации и наш сотрудник с Вами свяжется.</h2>
          <button
              @click="scrollToForm"
              class="btn-default btn-primary"
              data-aos="fade-left"
              data-aos-anchor="land-preview"
              data-aos-delay="2000"
          >бесплатная консультация</button>
        </div>
        </div>
      </slide>
      <slide>
        <div class="land-preview__wrapper land-preview__wrapper_success">
          <div class="container">
          <h1
              class="typo-h1"
              data-aos="fade-left"
              data-aos-delay="1000"
          >МЫ — НАДЕЖНОСТЬ!</h1>
          <h2
              class="typo-h2"
              data-aos="fade-left"
              data-aos-delay="1500"
          >Гарантируемый результат! Можете быть уверены, что не останетесь у «разбитого корыта».</h2>
          <button
              @click="scrollToForm"
              class="btn-default btn-primary"
              data-aos="fade-left"
              data-aos-anchor="land-preview"
              data-aos-delay="2000"
          >бесплатная консультация</button>
        </div>
        </div>
      </slide>
      <slide>
        <div class="land-preview__wrapper land-preview__wrapper_freedom">
          <div class="container">
          <h1
              class="typo-h1"
              data-aos="fade-left"
              data-aos-delay="1000"
          >ВЕРНËМ ВАШИ ДЕНЬГИ!</h1>
          <h2
              class="typo-h2"
              data-aos="fade-left"
              data-aos-delay="1500"
          >С помощью программного обеспечения «NC3», сможем отследить любую транзакцию- VISA, MasterCard, Qiwi, криптовалюта.</h2>
          <button
              @click="scrollToForm"
              class="btn-default btn-primary"
              data-aos="fade-left"
              data-aos-anchor="land-preview"
              data-aos-delay="2000"
          >бесплатная консультация</button>
        </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import {
  Carousel,
  Slide,
} from 'vue-carousel';

  export default {
    name: 'Preview',
    components: {
      Carousel,
      Slide,
    },
    methods: {
      scrollToForm() {
        const el = document.getElementById('user-form');
        el.scrollIntoView();
      }
    }
  }
</script>

<style lang="scss" scoped>
@import 'preview.scss';
</style>
