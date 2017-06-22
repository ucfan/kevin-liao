<template>
  <svg class="k-slash" :class="{ 'r-h': hReverse, 'r-v': vReverse, 'r-v-h': (hReverse && vReverse) }" viewBox="0 0 1440 92" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 42 (36781) - http://www.bohemiancoding.com/sketch -->
    <title>斜角</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="Home-Page" transform="translate(0.000000, -573.000000)" :fill="fill">
        <g id="Header">
          <g id="BG">
            <polygon id="斜角" points="1440 573.707947 1440 664.391155 0 573.707947"></polygon>
          </g>
        </g>
      </g>
    </g>
  </svg>

</template>

<script>
export default {
  props: {
    fill: {
      type: String,
    },

    vReverse: {
      type: Boolean,
    },

    hReverse: {
      type: Boolean,
    },
  }
}
</script>

<style lang="scss">
.k-slash {
  display: block;
  width: 100%;
  height: 10%;
  margin-top: -1px;
  margin-bottom: -2px;
}

.r-h {
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH;
  -ms-filter: "FlipH";
}

.r-v {
  -moz-transform: scaleY(-1);
  -o-transform: scaleY(-1);
  -webkit-transform: scaleY(-1);
  transform: scaleY(-1);
  filter: FlipV;
  -ms-filter: "FlipV";
}

.r-v-h {
  -moz-transform: scale(-1, -1);
  -o-transform: scale(-1, -1);
  -webkit-transform: scale(-1, -1);
  transform: scale(-1, -1);
}



</style>
