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
    <el-form-item label="Введите список технологий" prop="listTehnology">
      <el-input
        v-model="controls.listTehnology"
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
    <h3>Превью картинка</h3>
    <el-upload
      drag
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-change="handleImageChangePrev"
      :auto-upload="false"
      multiple
      class="mb">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">Перетащите картинку <em>или нажмите</em></div>
      <div class="el-upload__tip" slot="tip">файлы с расширением jpeg/png</div>
    </el-upload>
    <h3>Десктоп картинка</h3>
    <el-upload
      drag
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-change="handleImageChangeDesktop"
      :auto-upload="false"
      multiple
      class="mb">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">Перетащите картинку <em>или нажмите</em></div>
      <div class="el-upload__tip" slot="tip">файлы с расширением jpeg/png</div>
    </el-upload>
    <h3>Мобильная картинка</h3>
    <el-upload
      drag
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-change="handleImageChangeMobile"
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
  head: {
    title: `Новый проект | ${process.env.appName}`
  },
  data() {
    return {
      prevImage: null,
      desktopImage: null,
      mobileImage:  null,
      previewDialog: false,
      loading: false,
      controls: {
        title: '',
        text: '',
        autor: '',
        linkProject: '',
        linkGithub: '',
        listTehnology: '',
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
        ],
        listTehnology: [
          {required: true, message: 'Укажите ссылку Github репозиторий', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        //&& this.image
        if(valid) {
          this.loading = true
          const formData = {
            title: this.controls.title,
            text: this.controls.text,
            autor: this.controls.autor,
            linkProject: this.controls.linkProject,
            linkGithub: this.controls.linkGithub,
            listTehnology: this.controls.listTehnology,
            prevImage: this.prevImage,
            desktopImage: this.desktopImage,
            mobileImage:  this.mobileImage,
          }

          try {
            console.log(formData)
            await this.$store.dispatch('project/create', formData)
            this.controls.text = ''
            this.controls.title = ''
            this.prevImage = null,
            this.desktopImage = null,
            this.mobileImage =  null,
            this.listTehnology = '',
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
    handleImageChangePrev(file, fileList) {
      this.prevImage =  file.raw
      console.log(this.prevImage)
    },
    handleImageChangeDesktop(file, fileList) {
      this.desktopImage = file.raw
      console.log(this.desktopImage)
    },
    handleImageChangeMobile(file, fileList) {
      this.mobileImage = file.raw
      console.log(this.desktopImage)
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
