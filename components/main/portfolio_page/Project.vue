<template>
  <section class="project">
    <h2 class="portfolio__title title title--page">{{project.title}}</h2>
    <div class="project__wrapper">
      <div class="project__slider">
        <app-slider :project="project"/>
      </div>
      <div class="project__description">
        <h3 class="title title--block">Description</h3>
        <ul class="project__description-list">
          <li class="project__description-item project__description-item--name">{{ project.autor }}</li>
          <li class="project__description-item project__description-item--link"><a :href="project.linkProject" target="blank">www.project-site.com</a></li>
          <li class="project__description-item project__description-item--github"><a :href="project.linkGithub" target="blank">link-github</a></li>
          <li class="project__description-item project__description-item--date">{{new Date(project.date).toLocaleString()}}</li>
        </ul>
        <p class="project__description-paragrahp">{{project.text}}</p>
        <h3 class="title title--block">Technology</h3>
        <ul class="project__description-tech">
          <li class="project__description-tech-item">html5</li>
          <li class="project__description-tech-item">css</li>
          <li class="project__description-tech-item">js</li>
          <li class="project__description-tech-item">ajax</li>
          <li class="project__description-tech-item">php</li>
        </ul>
        <h3 class="title title--block">Share</h3>
      </div>
    </div>
  </section>
</template>
<script>
import AppSlider from '@/components/main/portfolio_page/Slider'
export default {
  components: {
    AppSlider
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
}
</script>
<style lang="scss">
.project {
  &__wrapper {
    display: flex;
    flex-direction: column;
  }

  &__slider {
    width: 100%;
    margin-bottom: 30px;

    @media screen and (max-width: 1120px) {
      width: 100%;
      height: auto;
    }
  }

  &__description {
    width: 100%;
    position: relative;
    padding: 20px 25px 25px;
    background-color: #333;
    color: #d5d5d5;
    font-weight: 600;

    &-list {
      list-style: none;
      padding: 0;
      margin: 0;
      margin-bottom: 30px;

    }

    &-item {
      padding-left: 30px;
      padding-top: 3px;
      padding-bottom: 3px;
      margin-bottom: 15px;
      background-repeat: no-repeat;
      background-position: left 2px;
      background-size: 20px;
      line-height: 1.7;

      &--name {
        background-image: url('~@/assets/img/user.png');
      }

      &--link {
        background-image: url('~@/assets/img/globe.png');
      }

      &--github {
        background-image: url('~@/assets/img/github.png');
      }

      &--date {
        background-image: url('~@/assets/img/calendar.png');
      }

      a {
        text-decoration: none;
        color: #0bb5ee;
        transition: color .3s;

        &:hover,
        &:active,
        &:focus {
          color: #2b91b3;
        }
      }
    }

    &-paragrahp {
      margin: 0;
      margin-bottom: 30px;
      line-height: 1.6em;
    }

    &-tech {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      padding: 0;
      margin: 0;
      margin-bottom: 30px;

      &-item {
        font-size: 12px;
        line-height: 1.5em;
        color: #e5e5e5;
        padding: 2px 7px;
        background-color: #444;
        border-radius: 3px;
        border: 1px solid #444;
        margin: 3px 2px 2px;
      }
    }

    @media screen and (max-width: 1120px) {
      width: 100%;
    }
  }
}
</style>
