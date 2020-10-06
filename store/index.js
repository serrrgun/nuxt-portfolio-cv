
export const state = () => ({
  error: null,
  menu: false
})

export const mutations = {
  setError(state, error) {
    state.error = error
  },
  clearError(state) {
    state.error = null
  },
  // openMenu() {
  //   state.menu = true
  // }
}

export const getters = {

  error:  state => state.error

}
