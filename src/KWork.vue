<template>
  <div class="row k-work">
    <div class="col-sm-12 col-md-7 k-work__thumbnail" :class="{ left: !reverse, right: reverse }">
      <img class="k-work__thumbnail-img" :src="getImgUrl(thumbnail)" :alt="title">
    </div>
    <div class="col-sm-12 col-md-6 k-work__content" :class="{ left: reverse, right: !reverse }">
      <div class="k-work__content-container" :class="{ reverse: reverse }">
        <h3 class="k-work__title">{{ title }}</h3>
        <div class="k-work__intro intro">
          <p>{{ intro }}</p>
        </div>
        <ul class="k-work__tag-list">
          <li v-for="tag in tags" class="k-work__tag">{{ tag }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    reverse: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    intro: {
      type: String
    },
    tags: {
      type: Array
    },
    thumbnail: {
      type: String
    },
  },
  methods: {
    getImgUrl(img) {
      const images = require.context('./assets/', false, /\.png$/)
      return images('./' + img)
    }
  }
}
</script>

<style lang="scss">
@import 'styles/_variables.scss';

.k-work {
  display: flex;
  margin-top: 120px;
  padding: 10px;

  &__thumbnail, &__content {
    align-self: center;

    &.left {
      order: 0;
    }

    &.right {
      order: 1;
      margin-left: -9%;
    }
  }

  &__thumbnail-img {
    width: 100%;
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }
  }

  &__content {
    z-index: 10000;
  }

  &__content-container.reverse {
    text-align: right;
  }


  &__title {
    font-size: 18px;
    color: #000000;
  }

  &__intro {
    margin: 20px 0;
  }

  &__tag-list {
    padding: 0px;
  }

  &__tag {
    display: inline-block;
    background-color: $primary-color;
    color: $secondary-font-color;
    padding: 3px 10px;
    margin-right: 6px;
  }
}


@media screen and (max-width: 768px) {
  .k-work {
    flex-direction: column;

    &__thumbnail, &__content {
      align-self: center;

      &.left, &.right {
        order: 0;
        margin: 0px !important;
      }
    }

    &__content-container.reverse {
      text-align: left;
    }

  }
}

</style>
