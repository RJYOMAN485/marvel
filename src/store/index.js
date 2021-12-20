import { createStore } from 'vuex'

export default createStore({
  state: {
    character: {},
    characters: []
  },
  mutations: {
    setCharacter(state,data) {
      state.character = data
      console.log('commited',state.character);
    },

    setCharacters(state,data) {
      state.characters = data
      console.log('characters list',state.characters);
    }
  },
  actions: {
  },
  modules: {
  }
})
