<template>
  <app-about></app-about>
</template>
<script>
import AppAbout from '@/components/main/about_page/About'

export default {
  components: {
    AppAbout
  },
  head: {
    title: `Обо мне | ${process.env.appName}`
  }
}
</script>
<style lang="scss">

</style>
