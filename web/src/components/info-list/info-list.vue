<script>
import InfoListItem from './info-list-item';
const infoList = [
  'Ознакамливаемся с Вашей проблемой, собираем доказательную базу.',
  'Подготавливаем Ваши документы и отправляем их на проверку в инспекцию банка России.',
  'Получаем ответ от инспекции банка России, подаём соответсвующие заявление для возврата ваших средств.',
  'Заключаем с Вами договор, на основании которого будем продолжать рабочий процесс.',
  'Вы оплачиваете от 5 до 15% в зависимости от сложности дела и срока его давности уже по факту вывода Ваших денег на карту.',
  'Получаете официальный документ о том, что Вам вернули Ваши средства на карту, в результате работы с недобросовестным брокером.',
];
export default {
  name: 'info-list',
  components: {
    InfoListItem,
  },
  data: () => ({
    infoList,
  }),
}
</script>

<template>
  <ul class="land-info-list container">
    <li class="land-info-list__title typo-h2 custome-title">
      Процедура возврата
    </li>
    <info-list-item
      v-for="(card, index) in infoList"
      :key="index"
      :order="index"
      :text="card"
    />
  </ul>
</template>

<style lang="scss" scoped>
@import 'info-list.scss';
</style>
