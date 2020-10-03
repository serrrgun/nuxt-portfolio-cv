<template>
  <div class="menu-btn" @click="openMenu">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>
<script>
export default {
  methods: {
    openMenu() {
      console.log('Меню открывайся')
    }
  }
}
</script>
<style lang="scss">
.menu-btn {
  position: fixed;
  top: 10px;
  right: 10px;
  display: none;
  width: 48px;
  height: 48px;
  line-height: 46px;
  text-align: center;
  background-color: #5050f5;
  border-radius: 30px;
  transition: .5s ease-in-out;
  z-index: 15;
  cursor: pointer;

  & span {
    position: absolute;
    left: 25%;
    display: block;
    height: 3px;
    width: 50%;
    background: #fff;
    border-radius: 5px;
    opacity: 1;
    transform-origin: left center;
    transform: rotate(0deg);
    transition: .25s ease-in-out;

    &:nth-child(1) {
      top: 16px;
    }

    &:nth-child(2) {
      top: 22px
    }

    &:nth-child(3) {
      top: 28px;
    }
  }

  &--active {
    & span {
      &:nth-child(1) {
        top: 13px;
        left: 15px;
        transform: rotate(45deg);
      }

      &:nth-child(2) {
        width: 0%;
        opacity: 0;
      }

      &:nth-child(3) {
        transform: rotate(-45deg);
        top: 30px;
        left: 15px;
      }
    }
  }

  @media screen and (max-width: 1120px) {
    display: block;
  }
}
</style>
