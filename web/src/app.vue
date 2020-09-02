<template>
  <div id="app" class="app">
    <top-bar />
    <preview />
    <div class="land-wrapper" id="company">
      <div class="container">
        <info-card
          v-for="(card, index) in infoList"
          :key="index"
          :title="card.title"
          :text="card.text"
          :id="card.id"
          :data-aos="`fade-${calcCardType(index)}`"
          :is-contact="card.isContact"
          data-aos-duration="1000"
          :type="calcCardType(index)"
        />
      </div>
    </div>
    <budge-list />
    <div class="land-wrapper land-wrapper_building" id="giveAway">
      <info-list />
    </div>
    <div class="land-wrapper land-wrapper_femida">
      <user-form />
    </div>
    <transition name="fade">
      <popup
        v-if="isShown"
      />
    </transition>
    <button
      @click="togglePopup"
      class="btn-default land-sticker"
      data-aos="fade-left"
      data-aos-duration="2000"
    >
      <font-awesome-icon :icon="['fas', 'suitcase']" />
      Проверить брокера
    </button>
    <l-map :center="center" :zoom="zoom" :options="mapOptions" style="height: 400px;">
      <l-tile-layer
          :url="url"
          :attribution="attribution"
      />
      <l-marker :lat-lng="center">
        <l-tooltip :options="{ permanent: true, interactive: true }">
          195220: город Санкт-Петербург,<br>
          Гражднский проспект, дом 22 литер а, офис 301
        </l-tooltip>
      </l-marker>
    </l-map>
    <FooterComponent />
  </div>
</template>

<script>
const infoList = [
  {
    title: 'О компании',
    id: 'about-company',
    text: 'Адвекон- предоставляет юридические услуги, с целью возврата средств от недобросовестных брокеров.\n Юридическая компания «Адвекон» создана при помощи юристов, специализирующихся в различных отраслях права, имеющих опыт от 5 лет в работе с инвестициями, ценными бумагами, торговлей, производством, консалтингом и прочим.',
    },
  {
    title: 'Наш приоритет',
    id: 'our-prior',
    text: 'Основной приоритет в нашей работе - интересы клиента.\n Начиная с 2015 года наша компания начала стремительно расти в профессиональном плане, благодаря чему мы достаточно быстро заняли свою нишу на рынке и на данный момент у нас уже больше десяти тысяч клиентов, которым мы помогли вернуть свои деньги!\n Помните , что своевременное обращение к юристам позволяет сформулировать четкий план действий по возврату средств, что предоставит Вам возможность, существенно повысить свои шансы в успешном завершении дела.',
  },
  {
    title: 'Наша команда',
    id: 'our-team',
    text: 'За 7 лет практики нашей командой были выработаны собственные алгоритмы работы с банками, платежными системами и брокерскими службами, чтобы гарантировать возврат средств в 90% случаев.',
  },
  {
    title: 'Связь с нами',
    id: 'connection',
    isContact: true,
  },
]

import TopBar from './components/top-bar';
import InfoCard from './components/info-card';
import Preview from './components/preview';
import BudgeList from './components/budge-list';
import InfoList from './components/info-list';
import UserForm from './components/user-form';
import FooterComponent from './components/footer-component';
import {
  LMap,
  LTileLayer,
  LMarker,
  LTooltip,
} from 'vue2-leaflet';

export default {
  name: 'App',
  components: {
    InfoCard,
    TopBar,
    Preview,
    BudgeList,
    InfoList,
    UserForm,
    FooterComponent,
    Popup: () => import('./components/popup'),
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
  },
  data() {
    return {
      infoList,
      isShown: false,
      zoom: 15,
      center: [60.004031, 30.387197],
      mapOptions: {
        zoomSnap: 0.5
      },
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    };
  },
  methods: {
    calcCardType(index) {
      return index % 2 === 0 ? 'left' : 'right';
    },
    togglePopup(value = true) {
      this.isShown = value;
      if (value) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    },
    openPopup() {
      if (!this.isShown) {
        this.togglePopup();
      }
    }
  },
  created() {
    this.$Bus.$on('popup', (value) => this.togglePopup(value));
    setTimeout(() => this.openPopup(), 10000)
    setInterval(() => this.openPopup(), 30000)
  },
}
</script>

<style lang="scss">
  .app {
    height: 100vh;
  }
  @import 'assets/styles/index.scss';
  .land-wrapper {
    background: $jacob;
    padding-bottom: 50px;
    &_light {
      background: $jason;
    }
    &_building {
      background-image: linear-gradient(to right, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('assets/img/building.jpg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
    &_femida {
      background-image: linear-gradient(to right, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('assets/img/femida.jpg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
  }
  .land-sticker {
    background-color: $jacob;
    position: fixed;
    right: 0;
    top: 50%;
    color: $jesus;
    padding: $spacer-huge $spacer-big;
    border: 1px solid $neo;
    z-index: 123123123;
    @media (max-width: 1100px) {
      top: unset;
      bottom: 100px;
    }
    svg {
      margin-right: 10px;
      font-size: 20px;
    }
    &:hover {
      color: $neo;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
</style>
