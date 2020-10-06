<template>
  <el-table
    :data="projects"
    style="width: 100%">
    <el-table-column
      prop="title"
      label="Название проекта"
    />
    <el-table-column label="Дата">
      <template slot-scope="{row: {date}}">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ new Date(date).toLocaleDateString() }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Просмотров">
      <template slot-scope="{row: {views}}">
        <i class="el-icon-view"></i>
        <span style="margin-left: 10px">{{ views }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Действия">
      <template slot-scope="{row}">
        <el-tooltip effect="dark" content="Редактировать пост" placement="top">
          <el-button
          icon="el-icon-edit"
          type="primary"
          circle
          @click="open(row._id)"
          />
        </el-tooltip>
        <el-tooltip effect="dark" content="Удалить пост" placement="top">
          <el-button
          icon="el-icon-delete"
          type="danger"
          circle
          @click="remove(row._id)"
          />
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  head: {
    title: `Все проекты | ${process.env.appName}`
  },
  async asyncData({store}) {
    const projects = await store.dispatch('project/fetchAdmin')
    return {projects}
  },
  methods: {
    open(id) {
      this.$router.push(`/admin/project/${id}`)
    },
    async remove(id) {
      try {
        await this.$confirm('Удалить пост?', 'Внимание!!!', {
          confirmButtonText: 'Ok',
          cancelButtonText: 'Отмена',
          type: 'warning'
        })
        await this.$store.dispatch('project/remove', id)
        this.projects = this.projects.filter(project => project._id != id)
        this.$message.success('Пост удален')
      } catch(e) {

      }

    }
  },
}
</script>
