<template>
  <client-only>
    <swiper
      ref="carousel"
      class="swiper"
      :options="swiperOption"
      @ready="onSwiperRedied"
      @clickSlide="onSwiperClickSlide"
      @slideChangeTransitionStart="onSwiperSlideChangeTransitionStart"
    >
      <swiper-slide>
        <div class="swiper-slide project-slider__item">
          <div class="project-slider__item-wrapper">
            <img src="@/assets/img/mac.png" alt="mac">
            <div class="project-slider__item-bg project-slider__item-bg--mac"></div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-slide project-slider__item">
          <div class="project-slider__item-wrapper">
            <img src="@/assets/img/macbook.png" alt="mac">
            <div class="project-slider__item-bg project-slider__item-bg--macbook"></div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-slide project-slider__item">
          <div class="project-slider__item-wrapper">
            <img src="@/assets/img/iphone.png" alt="mac">
            <div class="project-slider__item-bg project-slider__item-bg--iphone"></div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </client-only>
</template>
<script>
export default {
    name: 'swiper-nuxt',
    data () {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          }
        }
      }
    },
    methods: {
      onSwiperRedied(swiper) {
        console.log('Swiper redied!', swiper)
      },
      onSwiperSlideChangeTransitionStart() {
        console.log('SwiperSlideChangeTransitionStart!')
      },
      onSwiperClickSlide(index, reallyIndex) {
        console.log('Swiper click slide!', reallyIndex)
      }
    }
  }

</script>
<style lang="scss">

.project-slider {
  padding-bottom: 30px;

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;

    &-wrapper {
      position: relative;
    }

    &-bg {
      position: absolute;
      background-color: #fff;
      background-position: top;
      background-size: 100%;
      transition: 15s;
      cursor: pointer;

      &--mac {
        top: 4.9%;
        left: 4%;
        width: 92%;
        height: 64%;
        background-image: url('~@/assets/img/desktopWebsite.jpg');
      }

      &--macbook {
        top: 6%;
        left: 12%;
        width: 76%;
        height: 80%;
        background-image: url('~@/assets/img/desktopWebsite.jpg');
      }

      &--iphone {
        top: 11.5%;
        left: 16.5%;
        width: 66.9%;
        height: 74.7%;
        background-image: url('~@/assets/img/mobileWebsite.jpg');
      }

      &:hover,
      &:focus {
        background-position: bottom;
      }
    }
  }
}
</style>
