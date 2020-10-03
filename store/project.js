const projects = [
  {title: 'post 1', date: new Date(), view: 22, _id: 'id1'},
  {title: 'post 2', date: new Date(), view: 22, _id: 'id2'},
  {title: 'post 3', date: new Date(), view: 22, _id: 'id3'}
]

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
  async create({commit}, {title, text, image, autor, linkProject, linkGithub}) {

    try {
      const fd = new FormData()

      fd.append('title', title)
      fd.append('text', text)
      fd.append('autor', autor)
      fd.append('linkProject', linkProject)
      fd.append('linkGithub', linkGithub)
      fd.append('image', image, image.name)

      console.log('На клиенте запрос пошел', fd.title)
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
}
