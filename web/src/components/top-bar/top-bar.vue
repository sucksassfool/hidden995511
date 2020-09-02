<script>
  export default {
    name: 'TopBar',
    data: () => ({
      isActive: false,
    }),
    methods: {
      changeNavigationState() {
        this.isActive = !this.isActive;
        if (this.isActive) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'unset';
        }
      },
      scrollToElement(id) {
        this.isActive = false;
        document.body.style.overflow = 'unset';
        const el = document.getElementById(id);
        el.scrollIntoView();
      },
    }
  }
</script>

<template>
  <header class="land-top-bar">
    <div class="container land-top-bar__wrapper">
<!--      <div class="land-top-bar__logo">-->
<!--        <font-awesome-icon :icon="['fas', 'balance-scale']" />-->
<!--        Legal Pro-->
<!--      </div>-->
      <a href="/" class="land-top-bar__logo" />
      <button
          class="land-top-bar__button btn-default"
          :class="{ 'land-top-bar__button_active' : isActive }"
          @click="changeNavigationState"
      />
      <nav
          class="land-top-bar__navigation"
          :class="{ 'land-top-bar__navigation_active' : isActive }"
      >
        <ul class="land-top-bar__navigation-list">
          <li
              class="land-top-bar__navigation-item"
              @click="scrollToElement('preview')"
          >
            Главная
          </li>
          <li
              class="land-top-bar__navigation-item"
              @click="scrollToElement('company')"
          >
            О компании
          </li>
          <li
              class="land-top-bar__navigation-item"
              @click="scrollToElement('giveAway')"
          >
            Процедура возврата
          </li>
          <li
              class="land-top-bar__navigation-item"
              @click="scrollToElement('our-team')"
          >
            Наша команда
          </li>
          <li
              class="land-top-bar__navigation-item"
              @click="scrollToElement('company')"
          >
            FAQ
          </li>
          <li
              class="land-top-bar__navigation-item"
              @click="scrollToElement('company')"
          >
            Контакты
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
@import 'top-bar.scss';
</style>
