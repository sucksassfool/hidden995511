<template>
  <div class="land-budge-list">
    <div class="land-budge-list__wrapper container">
      <h2 class="land-budge-list__title typo-h2 custome-title">
        Почему мы?
        <br>
        <br>
        АДВЕКОН - это прежде всего:
      </h2>
      <ul class="land-budge-list__content">
        <budge
          v-for="(budge, index) in BUDGE_LIST"
          :key="index"
          :title="budge.title"
          :text="budge.text"
          :image-url="budge.imageUrl"
          data-aos="fade-left"
          :data-aos-delay="`${index}00`"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import Budge from '../budge';

const BUDGE_LIST = [
  {
    title: 'Профессионализм',
    text: 'За 5 лет существования компании, наши сотрудники смогли добиться справедливости и вернули свыше 200 миллионов рублей обманутым клиентам.',
    imageUrl: 'american-sign-language-interpreting',
  },
  {
    title: 'Добропорядочность',
    text: 'Наши условия - это 5-15% по факту вывода денежных средств и является действительным с момента первой встречи до успешного завершения сделки.',
    imageUrl: 'balance-scale',
  },
  {
    title: 'Результативность',
    text: 'За период нашей работы на рынке, мы имеем более 10 000 довольных клиентов. И это не просто слова, ведь каждый результат подкреплён реальным отзывом.',
    imageUrl: 'business-time',
  },
  {
    title: 'Надежность',
    text: 'Наша команда несёт ответственность за каждое действие и гарантирует Вам безопасность и надёжность.',
    imageUrl: 'user-shield',
  }

]

export default {
  name: 'BudgeList',
  components: {
    Budge,
  },
  data() {
    return {
      BUDGE_LIST,
    };
  },
}
</script>

<style lang="scss" scoped>
@import 'budge-list.scss';
</style>
