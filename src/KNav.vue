<template>
  <div ref="nav" class="k-nav" :class="{ fixed: fixed }">
    <div class="k-container">
      <ul>
        <li class="col-md-2 k-nav__item" :class="{ selected: isSelected('about') }" @click="scrollTo('about')">ABOUT</li>
        <li class="col-md-2 k-nav__item" :class="{ selected: isSelected('skills') }" @click="scrollTo('skills')">SKILLS</li>
        <li class="col-md-2 k-nav__item" :class="{ selected: isSelected('works') }" @click="scrollTo('works')">WORKS</li>
        <li class="col-md-2 k-nav__item" :class="{ selected: isSelected('music') }" @click="scrollTo('music')">MUSIC</li>
        <li class="col-md-2 k-nav__item" :class="{ selected: isSelected('contact') }" @click="scrollTo('contact')">CONTACT</li>
      </ul>
    </div>
  </div>
</template>


<script>

function isTop(elem) {
  return elem >= 200
}

export default {
  data() {
    return {
      fixed: isTop(document.body.scrollTop),
      selected: null,
    }
  },

  methods: {
    isSelected(element) {
      return this.selected === element
    },

    scrollTo(element) {
      $('html, body').animate({
        scrollTop: $('#' + element).offset().top
      }, 1000)
      this.selected = element
    }
  },

  mounted() {
    $(window).scroll(() => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.srollTop || 0;

      this.fixed = isTop(scrollTop)

      const list = ['about', 'skills', 'works', 'music', 'contact']

      // 如果捲軸在最底端時，直接選擇最後一個項目
      if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        this.selected = list[list.length - 1]
        return
      }

      const pos = scrollTop + 1

      // 判斷目前捲軸在哪個區塊
      const result = list.reduce((result, id, i) => {
        if (!result) { // 已有結果就不必判斷
          if (i !== list.length - 1) {
            const curr_pos = $('#' + id).offset().top
            const next_pos = $('#' + list[i + 1]).offset().top
            if ((pos < next_pos) && (pos >= curr_pos)) {
              result = id
            }
          } else {
            const curr_pos = $('#' + id).offset().top
            if (pos >= curr_pos) {
              result = id
            }
          }
        }
        return result
      }, null)

      this.selected = result
    })
  },

}
</script>

<style lang="scss">
@import './styles/_variables.scss';

.k-nav {
  z-index: 10002;
  position: fixed;
  top: 0;

  background-color: $primary-color;
  width: 100%;
  margin-bottom: -200px;
  transition: opacity 0.6s ease-in;
  opacity: 0;

  &.fixed {
    transition: opacity 0.6s ease-out;
    opacity: 1 !important;

    & .k-nav__item {
      padding: 20px 22px;
    }
  }

  ul {
    margin: 0;
  }

  &__item {
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    display: inline-block;
    color: $secondary-font-color;
    padding-top: 36px;
    padding-bottom: 36px;
    cursor: pointer;
    transition: all 0.3s linear;

    &.selected {
      color: $secondary-color;
      transition: all 0.3s linear;
    }
  }
}


@media screen and (max-width: 768px) {
  .k-nav {
    ul {
      padding: 0;
    }
    &__item {
      font-size: 15px;
    }
  }
}

</style>
