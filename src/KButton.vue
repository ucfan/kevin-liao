<template lang="html">
  <button class="k-button" type="button" name="button">{{ value }}</button>
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
@import './styles/_variables.scss';

.k-button {
  background-color: transparent;
  color: $secondary-font-color;
  border: 3px solid $secondary-font-color;
  padding: 10px 20px 10px 20px;
  letter-spacing: 2px;

  &:hover {
    background-color: $secondary-font-color;
    color: $primary-font-color;
  }
}

</style>
