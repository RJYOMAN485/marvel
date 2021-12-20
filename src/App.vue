<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  <router-view />
</template>

<script>
import { onMounted } from "vue";
import axios from "axios";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    onMounted(async () => {
      console.log('appfirst');
      await axios
        .get(
          "https://gateway.marvel.com/v1/public/characters?ts=thesoer&apikey=8883d6939bade2a1903d84ee45e717c2&hash=a0b1a49669b4db59c067419443f56c0f"
        )
        .then((res) => {
          console.log("then app");
          store.commit("setCharacters", res.data.data.results);
          console.log("setting", store.state.characters);
        });
    });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
