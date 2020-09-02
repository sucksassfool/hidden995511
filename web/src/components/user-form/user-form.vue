<script>
  import axios from 'axios';
  export default {
    name: 'UserForm',
    data: () => ({
      fio: '',
      phone: '',
      email: '',
    }),
    methods: {
      submitForm() {
        axios.post('/user-form', {
          email: this.email,
          name: this.fio,
          phone: this.phone,
        })
      }
    }
  }
</script>

<template>
  <div class="container land-user-form" id="user-form">
    <h2 class="land-user-form__title typo-h2 custome-title">
      Получите консультацию
    </h2>
    <form class="land-user-form__form" @submit.prevent="submitForm">
      <label class="input-label land-user-form__form-field">
        ФИО:
        <input
          class="input"
          type="text"
          v-model="fio"
          placeholder="Иван Иванов"
        >
      </label>
      <label class="input-label land-user-form__form-field">
        Email:
        <input
          class="input"
          type="email"
          v-model="email"
          placeholder="example@gmail.com"
        >
      </label>
      <label class="input-label land-user-form__form-field">
        Мобильный телефон:
        <input
            class="input"
            type="tel"
            v-model="phone"
            placeholder="+7 900 000 00 00"
        >
      </label>
      <button
        type="submit"
        class="btn-default btn-primary land-user-form__form-button"
      >
        получить констультацию
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
@import 'user-form.scss';
</style>
