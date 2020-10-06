<template>
  <section class="resume">
    <h2 class="resume__title title title--page">Resume</h2>
    <div class="resume__wrapper">
      <div class="resume__inner">
        <app-timeLine/>
        <app-timeLine/>
      </div>
      <div class="resume__inner">
        <app-skills/>
      </div>
    </div>
    <app-certificats/>
  </section>
</template>
<script>
import AppTimeLine from '@/components/main/resume_page/TimeLine'
import AppSkills from '@/components/main/resume_page/Skills'
import AppCertificats from '@/components/main/resume_page/Certificats'

export default {
  components: {
    AppTimeLine,
    AppSkills,
    AppCertificats
  },
  head: {
    title: `Резюме | ${process.env.appName}`
  }
}
</script>
<style lang="scss">
.resume {
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  box-sizing: border-box;

  &__wrapper {
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1120px) {
      flex-direction: column;
    }
  }

  &__inner {
    width: 48%;
    margin-bottom: 35px;

    @media screen and (max-width: 1120px) {
      width: 100%;
    }
  }
}

</style>
