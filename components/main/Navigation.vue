<template>
  <nav class="main-nav">
    <ul class="main-nav__list" v-on:click="openMenuHandler">
      <li class="main-nav__item">
        <nuxt-link no-prefetch exact to="/" class="main-nav__link" active-class="main-nav__link--active">
          <svg-icon name="home" />
          <span class="main-nav__text">Home</span>
        </nuxt-link>
      </li>
      <li class="main-nav__item">
        <nuxt-link  no-prefetch to="/about" class="main-nav__link" active-class="main-nav__link--active">
          <svg-icon name="patient" />
          <span class="main-nav__text">About Me</span>
        </nuxt-link>
      </li>
      <li class="main-nav__item">
        <nuxt-link  no-prefetch to="/resume" class="main-nav__link" active-class="main-nav__link--active">
          <svg-icon name="training" />
          <span class="main-nav__text">Resume</span>
        </nuxt-link>
      </li>
      <li class="main-nav__item">
        <nuxt-link  no-prefetch to="/portfolio" class="main-nav__link" active-class="main-nav__link--active">
          <svg-icon name="briefcase" />
          <span class="main-nav__text">Portfolio</span>
        </nuxt-link>
      </li>
      <li class="main-nav__item">
        <nuxt-link no-prefetch to="/storybook" class="main-nav__link" active-class="main-nav__link--active">
          <svg-icon name="blog" />
          <span class="main-nav__text">Storybook</span>
        </nuxt-link>
      </li>
      <li class="main-nav__item">
        <nuxt-link  no-prefetch to="/contact" class="main-nav__link" active-class="main-nav__link--active">
          <svg-icon name="contact" />
          <span class="main-nav__text">Contact</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  methods: {
    openMenuHandler() {
      this.$store.commit('menu/toggleMenu')
    }
  },
}
</script>
<style lang="scss">
.main-nav {
  position: absolute;
  right: -90px;
  top: 0;
  z-index: 100;

  &__list {
    background-color: #444;
    border-radius: 35px;
    z-index: 999;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    display: flex;
    flex-direction: column;
  }

  &__item svg {
    width: 40px;
    height: 40px;
    fill: #b5b6b7;
    transition: .5s ease;
  }

  &__link {
    position: relative;
    display: block;
    text-decoration: none;
    padding: 15px;
    outline: none;

    &--active {
      svg {
        fill: #5050f5;
      }

      @media screen and (max-width: 1120px) {
        .main-nav__text {
          color: #fff;
        }
      }
    }

    &:hover,
    &:active,
    &:focus {
      .main-nav__text {
        right: 110%;
        visibility: visible;
        opacity: 1;
      }

      svg {
        fill: #5050f5;
      }

      @media screen and (max-width: 1120px) {
        .main-nav__text {
          color: #fff;
        }
      }
    }

    @media screen and (max-width: 1120px) {
      padding: 5px;

      svg {
        display: none;
      }
    }
  }

  &__text {
    position: absolute;
    width: auto;
    visibility: hidden;
    opacity: 0;
    color: #fff;
    font-size: 18px;
    padding: 2px 10px;
    background-color: #5050f5;
    white-space: nowrap;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.3s ease-in-out;
    z-index: 0;
    box-shadow: 0px 10px 10px -8px rgba(0,0,0,.22);

    @media screen and (max-width: 1120px) {
      position: static;
      display: block;
      opacity: 1;
      text-align: center;
      visibility: visible;
      background-color: transparent;
      box-shadow: none;
      transform: translateX(0);
      color: #d5d5d5;
    }
  }

  @media screen and (max-width: 1120px) {
    position: static;
  }

  @media screen and (max-width: 640px) {
    margin-bottom: 20px;
  }
}
</style>
