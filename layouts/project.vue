<template>
  <div class="page">
    <div class="background"></div>
    <div class="container">
      <app-menuBtn/>
      <app-header/>
      <main class="content content--project">
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
