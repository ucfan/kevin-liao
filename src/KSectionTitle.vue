<template>
  <div class="k-section-title">
    <h1 class="k-section-title__text">{{ value }}</h1>
    <div class="k-section-title__underline"></div>
  </div>
</template>


<script>
export default {
  props: {
    value: {
      type: String
    }
  }
}
</script>


<style lang="scss">
@import 'styles/_variables.scss';

.k-section-title {
  display: inline-block;

  &__text {
    display: inline-block;
    text-transform: capitalize;
    font-variant: small-caps;
    line-height: 66px;
    font-size: 56px;
  }

  &__underline {
    background-color: $secondary-color;
    height: 15px;
    margin-top: -28px;
    margin-left: -8px;
    margin-right: -8px;
  }
}

</style>
