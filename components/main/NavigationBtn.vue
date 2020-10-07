<template>
  <div class="navigation">
    <button class="navigation__btn navigation__btn--prev" @click="onPrevUrlHandler">
      <svg-icon name="back-btn" />
    </button>
    <button class="navigation__btn navigation__btn--next"  @click="onNextUrlHandler">
      <svg-icon name="back-btn" />
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    onPrevUrlHandler() {
      this.$router.go(-1)
    },
    onNextUrlHandler() {
      this.$router.go(1)
    }
  }
}
</script>
<style lang="scss">
.navigation {
  position: absolute;
  bottom: 0;
  right: -90px;
  display: flex;
  flex-direction: column;
  background-color: #444;
  border-radius: 35px;
  z-index: 15;

  &__btn {
    padding: 15px 10px;
    border: none;
    background-color: transparent;
    border-radius: 50%;
    cursor: pointer;
    outline: none;

    &--next {
      transform: rotate(180deg);
    }

    & svg {
      width: 50px;
      height: 40px;
      fill: #b5b6b7;
      transition: fill .5s ease;
    }

    &:hover,
    &:active,
    &:focus {
      svg {
        fill: #5050f5;
      }
    }

    @media screen and (max-width: 1120px) {
      padding: 10px 5px;

      & svg {
        width: 40px;
        height: 30px;
      }
    }

    @media screen and (max-width: 640px) {
      padding: 7px 3px;

      & svg {
        width: 30px;
        height: 20px;
      }
    }
  }

  @media screen and (max-width: 1120px) {
    position: fixed;
    right: 10px;
    bottom: 10px;
    border: 2px solid #5050f5;
  }
}
</style>
