<template>
  <app-project :project="project"/>
</template>
<script>
import AppProject from '@/components/main/portfolio_page/Project'
export default {
  layout: 'project',
  components: {
    AppProject
  },
  async asyncData({store, params}) {
    const project = await store.dispatch('project/fetchById', params.id)
    console.log('проект', project)
    return {project}
  },
  validate({params}) {
    return Boolean(params.id)
  }
}
</script>
<style lang="scss">

</style>
