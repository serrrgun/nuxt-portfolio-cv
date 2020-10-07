<template>
  <app-project :project="project"/>
</template>
<script>
import AppProject from '@/components/main/portfolio_page/Project'
export default {
  //layout: 'project',
  components: {
    AppProject
  },
  head() {
    return {
      title: `${this.project.title} | ${process.env.appName}`
    }
  },
  async asyncData({store, params}) {
    const project = await store.dispatch('project/fetchById', params.id)
    await store.dispatch('project/addView', project)
    return {
      project: {...project, views: ++project.views}
    }
  },
  validate({params}) {
    return Boolean(params.id)
  }
}
</script>
<style lang="scss">

</style>
