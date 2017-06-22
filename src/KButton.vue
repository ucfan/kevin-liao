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

.k-button {
  background-color: transparent;
  color: white;
  border: 3px solid white;
  padding: 10px 20px 10px 20px;
  letter-spacing: 2px;
}

</style>
