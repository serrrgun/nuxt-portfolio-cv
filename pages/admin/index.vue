<template>
  <div>
    <h1>Аналитика по проектам</h1>
    <app-analytics-chart
      title="Количество просмотров"
      :labels="views.labels"
      :data="views.data"
    />
  </div>
</template>
<script>
import AppAnalyticsChart from '@/components/admin/AnalyticsChart'
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  components: {
    AppAnalyticsChart
  },
  head: {
    title: `Аналитика | ${process.env.appName}`
  },
  async asyncData({store}) {
    const {views} = await store.dispatch('project/getAnalytics')
    return {views}
  },
}
</script>
