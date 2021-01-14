<template>
  <section class="portfolio">
    <h2 class="portfolio__title title title--page">Portfolio</h2>
    <ul class="portfolio__filter">
      <li class="portfolio__filter-item portfolio__filter-item--active">
        <svg-icon name="check" />
        <a href="#">all</a>
      </li>
      <li class="portfolio__filter-item">
        <svg-icon name="html-5" />
        <a href="#">html/css</a>
      </li>
      <li class="portfolio__filter-item">
        <svg-icon name="js" />
        <a href="#">native JS</a>
      </li>
      <li class="portfolio__filter-item">
        <svg-icon name="vue" />
        <a href="#">vue.js</a>
      </li>
      <li class="portfolio__filter-item">
        <svg-icon name="atom" />
        <a href="#">react</a>
      </li>
    </ul>
    <div class="portfolio__list">
      <app-portfoliItem v-for="project in projects"
                        :key="project._id"
                        :project="project"
      />
    </div>
  </section>
</template>
<script>
import AppPortfoliItem from '@/components/main/portfolio_page/PortfolioItem'

export default {
  components: {
    AppPortfoliItem
  },
  head: {
    title: `Портфолио | ${process.env.appName}`
  },
  async asyncData({store}) {
    const projects = await store.dispatch('project/fetch')
    return {projects}
  }
}
</script>
<style lang="scss">
.portfolio {
  &__filter {
    display: flex;
    padding: 0;
    margin: 0;
    margin-bottom: 15px;
    padding-bottom: 15px;
    list-style: none;
    overflow-x: auto;

    &-item {
      display: flex;
      align-items: center;
      margin-right: 20px;
      border: 1px solid #5050f5;
      border-radius: 10px;
      padding: 7px 10px 5px;
      transition: .5s ease-in-out;
      cursor: pointer;

      svg {
        width: 20px;
        height: 20px;
        margin-right: 7px;
      }

      a {
        color: #aaa;
        font-size: 13px;
        text-decoration: none;
        transition: .5s ease-in-out;
        white-space: nowrap;

        &:hover,
        &:active,
        &:focus {
          color: #eee;
        }
      }

      &--active {
        a {
          color: #eee;
        }
      }

      &:hover,
      &:active,
      &:focus {
        background-color: #5050f5;
      }
    }
  }

  &__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}

</style>
