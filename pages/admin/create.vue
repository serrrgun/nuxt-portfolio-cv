<template>
  <el-form
    :model="controls"
    :rules="rules"
    ref="form"
    @submit.native.prevent="onSubmit"
  >
    <h1 class="mb">Создать новый проект</h1>
    <el-form-item label="Введите название поста" prop="title">
      <el-input
        v-model="controls.title"
      />
    </el-form-item>

    <el-form-item label="Введите автора" prop="autor">
      <el-input
        v-model="controls.autor"
      />
    </el-form-item>

    <el-form-item label="Введите ссылку на проект" prop="linkProject">
      <el-input
        v-model="controls.linkProject"
      />
    </el-form-item>

    <el-form-item label="Введите ссылку на Github репозиторий" prop="linkGithub">
      <el-input
        v-model="controls.linkGithub"
      />
    </el-form-item>

    <el-form-item label="Описание проекта в формате .md или .html" prop="text">
      <el-input
        v-model="controls.text"
        type="textarea"
        resize="none"
        :rows="10"
      />
    </el-form-item>
    <el-button class="mb" type="success" plain @click="previewDialog = true">
      Предпросмотр
    </el-button>
    <el-dialog
      title="Предпросмотр"
      :visible.sync="previewDialog"
    >
      <div :key="controls.text">
        <vue-markdown>{{controls.text}}</vue-markdown>
      </div>

    </el-dialog>
    <el-upload
      drag
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-change="handleImageChange"
      :auto-upload="false"
      multiple
      class="mb">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">Перетащите картинку <em>или нажмите</em></div>
      <div class="el-upload__tip" slot="tip">файлы с расширением jpeg/png</div>
    </el-upload>

    <el-form-item>
      <el-button
        type="primary"
        native-type="submit"
        round
        :loading="loading"
        >
        Создать проект
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  data() {
    return {
      image: null,
      previewDialog: false,
      loading: false,
      controls: {
        title: '',
        text: '',
        autor: '',
        linkProject: '',
        linkGithub: '',
      },
      rules: {
        title: [
          { required: true, message: 'Назовите проект!', trigger: 'blur' }
        ],
        text: [
          { required: true, message: 'Текст не должен быть пустым', trigger: 'blur' }
        ],
        autor: [
            {required: true, message: 'Укажите автора', trigger: 'blur' }
        ],
        linkProject: [
          {required: true, message: 'Укажите ссылку на проект', trigger: 'blur' }
        ],
        linkGithub: [
          {required: true, message: 'Укажите ссылку Github репозиторий', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if(valid && this.image) {
          this.loading = true
          const formData = {
            title: this.controls.title,
            text: this.controls.text,
            autor: this.controls.autor,
            linkProject: this.controls.linkProject,
            linkGithub: this.controls.linkGithub,
            image: this.image,
          }

          try {
            console.log(formData)
            await this.$store.dispatch('project/create', formData)
            this.controls.text = ''
            this.controls.title = ''
            this.image = null
            this.$refs.upload.clearFiles()
            this.$message.success('Новый проект создан')

          } catch (e) {

          } finally {
            this.loading = false
          }
        } else {
          this.$message.warning('Форма не валидна')
        }
      })
    },
    handleImageChange(file, fileList) {
      this.image = file.raw
    }
  },

}
</script>
<style lang="scss" scoped>
  h1 {
    color: #000;
  }
  form {
    width: 600px;
  }
</style>
