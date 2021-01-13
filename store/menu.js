export const state = () => ({
  menu: false,
})

export const mutations = {
  toggleMenu(state) {
    state.menu = !state.menu
    console.log(state.menu)
  },
}

export const getters = {
  menu:  state => state.menu
}
