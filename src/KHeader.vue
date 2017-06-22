<template>

  <div class="k-header">

    <div class="k-header__main">
      <div class="k-container">
        <div class="k-header__title">
          <h1 class="k-header__title-text">
            <span class="i-hello">Hello,</span><br />
            <span class="i-whoami">I'm <span class="highlight">Kevin Liao</span></span>
          </h1>
          <div class="hashtag">#fullstack #developer</div>
        </div>

        <div class="clearfix"></div>
      </div>
    </div>

    <k-slash fill='#3A4750'></k-slash>
  </div>

</template>

<script>
import KSlash from './KSlash.vue'

export default {
  components: {
    KSlash,
  },
  props: {
  }
}

</script>


<style lang="scss">

@import './styles/_variables.scss';

.k-header {

  &__main {
    color: $secondary-font-color;
    background-color: $primary-color;
    height: 575px;
  }

  &__title {
    padding-top: 238px;
    padding-right: 10px;
    float: right;
    text-align: right;
  }

  &__title-text {
    display: inline-block;
    text-transform: capitalize;
    font-variant: small-caps;
    line-height: 66px;
    font-size: 56px;
  }
}

</style>
