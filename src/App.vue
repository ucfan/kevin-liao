<template>
  <div id="app">

    <k-nav></k-nav>

    <k-header></k-header>

    <k-section id="about" class="about-me" title="About Me">
      <div class="row about-me__self-intro intro">
        <div class="col-md-8">
          <p>
            目前就讀雲科大資管系三年級，熱衷學習網頁技術，且特別對前端抱有熱忱。有和他人合作開發網頁的經驗，了解如何使用 Git 進行多人共同開發，能夠按照開發需求進行流程自動化。
          </p>
          <p>
            平日會主動閱讀國內外的網頁技術文章，並將學習筆記和心得紀錄在 Evernote。此外，在學校擔任助教的經驗造就了我樂於分享的個性，因此經常和夥伴分享最近看到的新技術，也曾在地方技術社群分享過。
          </p>
          <p>
            解決問題的同時提供友好的操作介面是我的目標，希望透過累積實戰經驗，讓自己朝目標更加邁進。
          </p>
        </div>
        <div class="col-md-4 about-me__picture">
          <i class="icon ion-arrow-graph-up-right"></i>
        </div>
      </div>
    </k-section>

    <k-section id="skills" class="skill" title="Skills" :fill="COLOR['thirdary-color']">
      <k-slash slot="top-slash" :v-reverse="true" :fill="COLOR['thirdary-color']" />
      <k-slash slot="bottom-slash" :fill="COLOR['thirdary-color']"  />

      <div class="row skill__icon-list">
        <div class="col-md-4 skill__icon">
          <i class="icon-screen-desktop"></i><br />
          <span class="skill__name">網頁應用開發</span>
        </div>
        <div class="col-md-4 skill__icon">
          <i class="icon-screen-smartphone"></i><br />
          <span class="skill__name">行動應用開發</span>
        </div>
        <div class="col-md-4 skill__icon">
          <i class="icon-cloud-upload"></i><br />
          <span class="skill__name">伺服器環境建置</span>
        </div>
      </div>

      <div class="row skill__intro intro">
        <div class="col-md-12">
          <p>
            能夠使用標準網頁語言進行切版，認為按圖施工是前端的基本素養。平常使用 ES6/ES7 作為主要開發語言，並且擅長使用 Vue 處理介面邏輯，能夠搭配 Vuex 建構 SPA 應用。熟悉 Node 生態系，擁有 Express/Sails 的後端/全端開發經驗。開發工具的部分，能夠使用 Grunt 和 Webpack 建立工作流程自動化，也能按需求調整配置。
          </p>
          <p>
            除了網頁開發以外，也有利用 React Native 開發 App 的經驗。能夠利用 AWS 和 Docker 建置開發及部署環境。
          </p>
        </div>
      </div>
    </k-section>

    <div class="clearfix"></div>

    <k-section id="works" title="Works">
      <k-work v-for="(work, i) in works" :key="i"
        :reverse="i % 2 === 1"
        :title="work.title"
        :intro="work.intro"
        :tags="work.tags"
        :thumbnail="work.thumbnail"
      ></k-work>

      <!-- <k-button value="MORE"></k-button> -->
    </k-section>

    <k-section id="music" title="Music">

      <div class="row k-video">
        <div class="col-md-offset-1 col-md-10">
          <iframe class="k-video__content" src="https://www.youtube.com/embed/a367lebRPu0" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>

    </k-section>


    <k-section id="contact" title="Contact" :fill="COLOR['primary-color']" :reverse="true">
      <k-slash slot="top-slash" :v-reverse="true" :h-reverse="true" :fill="COLOR['primary-color']" />

      <div class="contact__content">
        <k-button value="EMAIL ME"></k-button>

        <div class="contact__icon-list">
          <div class="contact__icon">
            <a href="#"><i class="icon-envelope"></i></a>
          </div>

          <div class="contact__icon">
            <a href="https://www.instagram.com/kevin_liao_____/"><i class="icon-social-instagram"></i></a>
          </div>

          <div class="contact__icon">
            <a href="https://www.facebook.com/ucfan1784"><i class="icon-social-facebook"></i></a>
          </div>

          <div class="contact__icon">
            <a href="https://twitter.com/ucfan1784"><i class="icon-social-twitter"></i></a>
          </div>

          <div class="contact__icon">
            <a href="https://github.com/ucfan/"><i class="icon-social-github"></i></a>
          </div>
        </div>
      </div>
    </k-section>


  </div>
</template>


<script>
import KNav from './KNav.vue'
import KHeader from './KHeader.vue'
import KSection from './KSection.vue'
import KSlash from './KSlash.vue'
import KWork from './KWork.vue'
import KButton from './KButton.vue'

import COLOR from '@/constants/color'
import Data from './data.js'

export default {
  name: 'app',
  components: {
    KNav,
    KHeader,
    KSection,
    KSlash,
    KWork,
    KButton,
  },

  data() {
    return {
      COLOR,
      works: Data.works,
    }
  },

  mounted() {
    window.sr = ScrollReveal()
    sr.reveal('.i-hello')
    sr.reveal('.i-whoami', { delay: 100 })
    sr.reveal('.hashtag', { delay: 200 })
    sr.reveal('.skill__icon')
    sr.reveal('.about-me__self-intro')
    sr.reveal('.about-me__picture')
    sr.reveal('.k-work__thumbnail')
    sr.reveal('.k-work__content', { delay: 100 })
    sr.reveal('.k-video')
    sr.reveal('.contact__icon-list')
  },

}
</script>


<style lang="scss">
@import './styles/_variables.scss';

.clearfix {
  clear: both;
}

body {
  color: $primary-font-color;
  font-family: 'Open Sans', sans-serif;
}

.k-container {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}

.center {
  text-align: center;
}

.highlight {
  color: $secondary-color;
}

.hashtag {
  margin-top: 31px;
  font-size: 24px;
  color: $secondary-font-color;
}

.intro {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    color: #3A4750;
    line-height: 26px;
}


/* components */


.about-me {
  &__self-intro {
    margin-top: 60px;
    padding-left: 12px;
    padding-right: 12px;
  }

  &__picture {
    color: $primary-font-color;
    font-size: 130px;
    text-align: center;
  }
}

.skill {
  &__icon-list {
    padding: 60px 0;

  }

  &__icon {
    text-align: center;
    i {
      font-size: 72px;
    }
  }

  &__name {
    font-size: 18px;
    line-height: 50px;
  }

  &__intro {
    padding-left: 12px;
    padding-right: 12px;
  }
}

.k-video {
  &__content {
    width: 100%;
    height: 478px;
    margin: 100px 0;
  }
}

.contact {
  &__content {
    text-align: center;
    padding: 60px 0;
  }

  &__icon-list {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 50px 0;
  }

  &__icon {
    color: $thirdary-color;
    font-size: 48px;
    padding: 0 30px;

    a {
      color: inherit !important;
      text-decoration: none;
    }
  }
}

@media screen and (max-width: 768px) {
  .contact {
    &__icon {
      font-size: 38px;
      padding: 0 20px;
    }
  }
}

</style>
