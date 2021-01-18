export const actions = {
  async fetchAdmin({commit}) {
    try {
      return await this.$axios.$get('/api/project/admin')
    } catch(e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async remove({commit}, id) {
    try {
      return await this.$axios.$delete(`/api/project/admin/${id}`)
    } catch(e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async update({commit}, {id, text}) {
    try {
      return await this.$axios.$put(`/api/project/admin/${id}`, {text})
    } catch(e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async create({commit}, {title, text, autor, linkProject, linkGithub, prevImage, desktopImage, mobileImage, listTehnology}) {
    try {
      const fd = new FormData()

      fd.append('title', title)
      fd.append('text', text)
      fd.append('autor', autor)
      fd.append('linkProject', linkProject)
      fd.append('linkGithub', linkGithub)
      fd.append('listTehnology', listTehnology)
      fd.append('prevImage', prevImage, prevImage.name)
      fd.append('desktopImage', desktopImage, desktopImage.name)
      fd.append('mobileImage', mobileImage, mobileImage.name)


      console.log('На клиенте запрос пошел', fd.get('desktopImage').name)
      return await this.$axios.$post('/api/project/admin', fd)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchAdminById({commit}, id) {
    try {
      return await this.$axios.$get(`/api/project/admin/${id}`)
    } catch(e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetch({commit}) {
    try {
      return await this.$axios.$get('/api/project')
    } catch(e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async fetchById({commit}, id) {
    try {
      return await this.$axios.$get(`/api/project/${id}`)
    } catch(e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async addView({commit}, {views, _id}) {
    try {
      console.log(views)
      return await this.$axios.$put(`/api/project/add/view/${_id}`, {views})
      onsole.log(views)
    } catch(e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
  async getAnalytics({commit}) {
    try {
      return await this.$axios.$get(`/api/project/admin/get/analytics`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  }
}
