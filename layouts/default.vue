<template>
  <div class="page">
    <div class="background"></div>
    <div class="container" >
      <app-menuBtn />
      <app-header />
      <main class="content">
        <Nuxt />
      </main>
      <app-navigationBtn/>
    </div>
  </div>
</template>
<script>
import AppHeader from '@/components/main/Header'
import AppNavigationBtn from '@/components/main/NavigationBtn'
import AppMenuBtn from '@/components/main/MenuBtn'

export default {
  components: {
    AppHeader,
    AppNavigationBtn,
    AppMenuBtn
  },
}
</script>
<style lang="scss">
.page {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 100%;
  padding: 0 100px;
  overflow: hidden;
  box-sizing: border-box;

  @media screen and (max-width: 1440px) {
    padding-left: 20px;
  }

  @media screen and (max-width: 1120px) {
    padding: 0;
  }
}

.container {
  position: relative;
  display: flex;
  width: 100%;
  max-width: 1280px;
  min-height: 80vh;
  margin: 10vh auto;
  padding: 0;
  background-color: #444;
  box-shadow: 0 0 100px -5px rgba(0,0,0,.25);
  border-radius: 32px;
  backface-visibility: hidden;

  @media screen and (max-width: 1120px) {
    margin: 0;
    border-radius: 0;
    min-height: 100vh;
  }
}

.content {
  width: calc(100% - 380px);
  border-radius: 30px;
  background-color: #222;
  padding: 60px;
  height: 80vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 11px;
  }

  &::-webkit-scrollbar-track {
    margin-top: 2vw;
    margin-bottom: 2vw;
    background-color: transparent;
    border-radius: 7px;
  }

  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: #b5b6b7;
    border-radius: 7px;
    border: 3px solid #222;
  }

  @media screen and (max-width: 1120px) {
    width: 100%;
    min-height: 100%;
    height: auto;
    border-radius: 0;
    padding: 10px;
    padding-top: 30px;
  }

  &--project {
    position: absolute;
    width: 100%;
    z-index: 10;

    @media screen and (max-width: 1120px) {
      position: static;
    }
  }
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  background-image: url('../assets/img/main_bg.png');
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 1120px) {
    background: none;
  }
}

.button-cv {
  padding: 10px 15px;
  background-color: transparent;
  color: #f5f5f5;
  border: solid 2px ;
  border-color: #f5f5f5;
  border-radius: 50px;
  font-size: 2em;
  text-decoration: none;
  transition: .5s ease;
  outline: none;

  &:hover,
  &:focus,
  &:active {
    color: #5050f5;
    background-color: #fff;
    border-color: #fff;
  }

  @media screen and (max-width: 1120px) {
    font-size: 1.5em;
  }
}
</style>
