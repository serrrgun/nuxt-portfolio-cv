<template>
  <header class="header" :class="{'header--open': openMenu}">
    <div class="header__photo">
      <img src="@/assets/img/main_photo.jpg" alt="main-photo">
    </div>
    <h2 class="header__title">Sergey Turishchev</h2>
    <h4 class="header__subtitle">Frontend Developer</h4>
    <app-navigation />
    <app-socialLinks/>
    <a href="#" class="button-cv">Download CV</a>
  </header>
</template>
<script>
import AppNavigation from '@/components/main/Navigation'
import AppSocialLinks from '@/components/main/SocialLinks'

export default {
  components: {
    AppNavigation,
    AppSocialLinks,
  },
  props: {
    openMenu: {
      type: Boolean,
      required: true
    }
  },
}
</script>
<style lang="scss">
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 100%;
  padding: 70px 30px 45px;
  transition: transform .4s ease-in;

  &__photo {
    position: relative;
    width: 180px;
    margin: 0 auto 30px;
    z-index: 1;

    & img {
      border: 3px solid #fff;
      border-radius: 300px;
    }

    &::after {
      position: absolute;
      opacity: 0.3;
      top: 7%;
      left: 7%;
      border-radius: 300px;
      content: '';
      height: calc(100% + 0px);
      width: calc(100% + 0px);
      background-image: -webkit-repeating-radial-gradient(center center, #fff, #fff 1px, transparent 0px, transparent 100%);
      background-image: -moz-repeating-radial-gradient(center center, #fff, #fff 1px, transparent 0px, transparent 100%);
      background-image: -ms-repeating-radial-gradient(center center, #fff, #fff 1px, transparent 0px, transparent 100%);
      -webkit-background-size: 6px 6px;
      -moz-background-size: 6px 6px;
      background-size: 6px 6px;
      z-index: -1;
    }
  }

  &__title {
    font-size: 34px;
    font-weight: 600;
    color: #f5f5f5;
    margin: 5px 0 7px;
    line-height: 1.2em;

    @media screen and (max-width: 640px) {
      font-size: 28px;
    }
  }

  &__subtitle {
    font-size: 18px;
    font-weight: 300;
    color: #bbb;
    margin: 5px 0;
    line-height: 1.2em;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 1120px) {
    position: fixed;
    right: 0;
    top: 0;
    height: 100%;
    background-color: #444;
    z-index: 10;
    transform: translateX(100%);
    overflow: scroll;

    &--open {
      transform: translateX(0);
    }
  }

  @media screen and (max-width: 640px) {
    justify-content: flex-start;
    width: 100%;
    padding: 30px;
    z-index: 11;
  }
}
</style>
