<template>
  <div class="k-section">
    <div>
      <slot name="top-slash"></slot>
    </div>

    <div class="k-section__main" :style="{ backgroundColor: fill }">
      <div class="k-container">
        <div v-if="title" class="k-section__title" :class="{ reverse: reverse }">
          <k-section-title :value="title" :reverse="reverse"></k-section-title>
        </div>

        <div class="k-section__content">
          <slot></slot>
        </div>
      </div>
    </div>

    <div>
      <slot name="bottom-slash"></slot>
    </div>

  </div>
</template>


<script>
import KSectionTitle from './KSectionTitle.vue'

export default {
  components: {
    KSectionTitle,
  },

  props: {
    title: {
      type: String,
    },

    fill: {
      type: String,
    },

    reverse: {
      type: Boolean,
    }
  }
}
</script>


<style lang="scss">
@import './styles/_variables.scss';

.k-section {

  &__main {
    padding: 100px 0;
  }

  &__title {
    text-align: center;
    font-family: LucidaGrande;
    font-size: 56px;
  }

  &__content {
  }
}

</style>
