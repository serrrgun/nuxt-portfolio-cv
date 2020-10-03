<template>
  <section class="portfolio">
    <h2 class="portfolio__title title title--page">Portfolio</h2>
    <ul class="portfolio__filter">
      <li class="portfolio__filter-item portfolio__filter-item--active"><a href="#">All</a></li>
      <li class="portfolio__filter-item"><a href="#">html/css</a></li>
      <li class="portfolio__filter-item"><a href="#">native JS</a></li>
      <li class="portfolio__filter-item"><a href="#">vue.js</a></li>
      <li class="portfolio__filter-item"><a href="#">react</a></li>
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
    margin-bottom: 30px;
    list-style: none;

    &-item {
      margin-right: 20px;

      a {
        color: #aaa;
        font-size: 13px;
        text-decoration: none;
        transition: .5s ease-in-out;

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
    }
  }

  &__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}

</style>
