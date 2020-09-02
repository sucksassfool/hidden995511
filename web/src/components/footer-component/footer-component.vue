<template>
  <footer class="land-footer">
    <div class="container land-footer__wrapper">
      <div class="land-footer__content">
        <div class="land-footer__col">
          <h3 class="land-footer__title">О нас</h3>
          <span class="land-footer__text">Адвекон- предоставляет юридические услуги, с целью возврата средств от недобросовестных брокеров.</span>
          <span class="land-footer__text">
            ИНН: 7804523251
          </span>
          <span class="land-footer__text">
            ОГРН: 1147847002192
          </span>
          <span class="land-footer__text">
            КПП: 780401001
          </span>
          <span class="land-footer__text">
            Адрес:<br>195220: город Санкт-Петербург, Гражднский проспект, дом 22 литер а, офис 301
          </span>
        </div>
        <div class="land-footer__col">
          <h3 class="land-footer__title">Контакты</h3>
          <span class="land-footer__text">
            Viber, WhatsApp, Telegram:<br>
            <span>+7 900 965 16 62</span>
            <br>
            <span>+7 991 279 13 86</span>
          </span>
        </div>
        <div class="land-footer__col">
          <h3 class="land-footer__title">Ссылки</h3>
          <a href="#preview" @click="scrollToElement('preview')" class="land-footer__text link-default">Главная</a>
          <a class="land-footer__text link-default" @click="scrollToElement('company')">О компании</a>
          <a class="land-footer__text link-default" @click="scrollToElement('giveAway')">Процедура возврата</a>
          <a class="land-footer__text link-default" @click="scrollToElement('our-team')">Наша команда</a>
          <a class="land-footer__text link-default" @click="scrollToElement('company')">FAQ</a>
          <a class="land-footer__text link-default" @click="scrollToElement('company')">Контакты</a>
        </div>
        <div class="land-footer__col">
          <h3 class="land-footer__title">Деятельность</h3>
          <span class="land-footer__text">Возврат средств</span>
          <span class="land-footer__text">Юридическая констультация</span>
          <span class="land-footer__text">Оформление CHARGEBACK</span>
        </div>
      </div>
      <span>
        © 2020 Все права защищены
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer",
  methods: {
    scrollToElement(id) {
      this.isActive = false;
      document.body.style.overflow = 'unset';
      const el = document.getElementById(id);
      el.scrollIntoView();
    },
  }
}
</script>

<style lang="scss" scoped>
@import 'footer-component';
</style>