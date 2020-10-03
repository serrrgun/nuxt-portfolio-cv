<template>
  <div>
    <el-breadcrumb separator="/" class="mb">
      <el-breadcrumb-item to="/admin/list">Проекты</el-breadcrumb-item>
      <el-breadcrumb-item>{{ project.title }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form
      :model="controls"
      :rules="rules"
      ref="form"
      @submit.native.prevent="onSubmit"
    >


      <el-form-item label="Текст  формате .md или .html" prop="text">
        <el-input
          v-model="controls.text"
          type="textarea"
          resize="none"
          :rows="10"
        />
      </el-form-item>
      <div class="mb" :style="{color: '#000'}">
        <small>
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ new Date(project.date).toLocaleDateString() }}</span>
        </small>
        <small style="margin-left: 10px; color: #000">
          <i class="el-icon-view"></i>
          <span>{{ project.views }}</span>
        </small>
      </div>

      <el-form-item>
        <el-button
          type="primary"
          native-type="submit"
          round
          :loading="loading"
          >
          Обновить
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  head() {
    return {
      title: `Проект | ${this.project.title}`
    }
  },
  validate({params}) {
    return Boolean(params.id)
  },
  async asyncData({store, params}) {
    const project = await store.dispatch('project/fetchAdminById', params.id)
    return {project}
  },
  data() {
    return {
      loading: false,
      controls: {
        text: ''
      },
      rules: {
        text: [
          { required: true, message: 'Текст не должен быть пустым', trigger: 'blur' }
        ],
      }
    }
  },
  mounted() {
    this.controls.text = this.project.text
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true

          const formData = {
            text: this.controls.text,
            id: this.project._id
          }
          try {
            console.log(formData)
            await this.$store.dispatch('project/update', formData)
            this.$message.success('Данные успешно обновлены')
            this.loading = false
          } catch (e) {
            this.loading = false
          }

        }
      })
    }
  }
}
</script>
