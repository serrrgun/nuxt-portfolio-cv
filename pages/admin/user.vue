<template>
  <el-form
    :model="controls"
    :rules="rules"
    ref="form"
    @submit.native.prevent="onSubmit"
  >
    <h1>Создать пользователя</h1>

    <el-form-item label="Логин" prop="login" :style="{color: '#ffffff'}">
      <el-input v-model.trim="controls.login" />
    </el-form-item>
    <div class="mb-2">
      <el-form-item label="Пароль" prop="password">
        <el-input v-model.trim="controls.password" type="password"/>
      </el-form-item>
    </div>
    <el-form-item>
      <el-button
        type="primary"
        native-type="submit"
        round
        :loading="loading"
        >
        Создать
      </el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  head: {
    title: `Создать пользователя | ${process.env.appName}`
  },
  data() {
    return {
      loading: false,
      controls: {
        login: '',
        password: ''
      },
      rules: {
        login: [
          { required: true, message: 'Введите логин', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Введите пароль', trigger: 'blur' },
          { min: 6, message: "Пароль должен быть не менее 6 символов", trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true

          try {
            const formData = {
              login: this.controls.login,
              password: this.controls.password
            }
            await this.$store.dispatch('auth/createUser', formData)
            this.$message.success('Пользователь успешно создан')
            this.controls.login = ''
            this.controls.password = ''
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
<style lang="scss" scoped>
form {
  width: 500px;
}
.el-form-item__content {
  color: #eee;
}
</style>
