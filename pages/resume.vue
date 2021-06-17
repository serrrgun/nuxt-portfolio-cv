<template>
  <section class="resume">
    <h2 class="resume__title title title--page">Resume</h2>
    <div class="resume__wrapper">
      <div class="resume__inner">
        <app-timeLine v-bind:title="experienceTitle" v-bind:data="experience"/>
        <app-timeLine v-bind:title="educationTitle" v-bind:data="education"/>
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
  },
  data() {
    return {
      experienceTitle: 'Experience',
      educationTitle: 'Education',
      experience: [
        {
          id: 1,
          year: 'August 2019',
          name: 'Self-educated',
          description: 'Now I am engaged in self-education. Learning JavaScript and everything related to it.',
          link: 'https://portfolio-st-web.herokuapp.com/',
        },
        {
          id: 2,
          year: 'June 2019',
          name: 'Web Studio qlab.by',
          description: 'Creating a site layout. Using advanced technology. Adaptively and cross-browser.',
          link: 'https://qlab.by/'
        },
        {
          id: 3,
          year: 'February 2019',
          name: 'Web Studio narisuemvse.by',
          description: 'Creating a site layout. Using advanced technology. Adaptively and cross-browser. Work with a proprietary PHP CMS engine. Work with WordPress.',
          link: 'https://narisuemvse.by/'
        },
        {
          id: 4,
          year: 'May 2018',
          name: 'Outsourcing company Лига А',
          description: 'Creating a site layout. Using advanced technology. Adaptively and cross-browser.',
          link: 'https://ligaa.agency/'
        },
      ],
      education: [
        {
          id: 1,
          year: 'August 2017',
          name: 'Html-Academy',
          description: 'Graduated from the HTML Academy course “front-end developer” profession',
          link: 'https://htmlacademy.ru/study',
        },
        {
          id: 2,
          year: 'June 2013',
          name: 'Polotsk State University',
          description: 'Faculty of Finance and Economics',
          link: 'https://www.psu.by/en/'
        },
      ]
    }
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
