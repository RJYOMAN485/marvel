<template>
  <div class="flex-container">
    <nav class="col-12 navbar navbar-light bg-light">
      <div class="container-fluid text-center">
        <a class="navbar-brand text-center">Marvel</a>
        <!-- <form class="d-flex"> -->
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button @click="search" class="btn btn-outline-success" >Search</button>
        <!-- </form> -->
      </div>
    </nav>
    <div
      @click="handleClick(list)"
      v-for="list in lists"
      :key="list?.id"
      style="cursor: pointer"
      class="column"
    >
      <!-- {{ list.name }}  -->
      <!-- <router-link :to="{ name: 'character',params: {id: '2'} }"> -->
      <img
        style="width: 100%"
        width="200"
        height="200"
        :src="list?.thumbnail?.path + '/portrait_xlarge.jpg'"
        alt=""
      />
      <p class="name">{{ list?.name }}</p>
      <p style="line-height: normal">{{ list?.description }}</p>
      <!-- </router-link> -->
    </div>
    <!-- <b-pagination
      v-model="lists"
      :total-rows="17"
      :per-page="3"
      aria-controls="itemList"
      align="center"
    ></b-pagination> -->
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
// import JwPagination from "jw-vue-pagination";
import Character from "../components/Character.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  components: {
    // JwPagination,
    Character,
  },
  setup() {
    // const lists = ref([]);

    const store = useStore();

    const router = useRouter();

    const search = () => {
      // return console.log('hh');
      const data = store.state.characters;

      const search = "Avengers: The Initiative (2007) #14";

      const results = [];


      var flag = false;

      // console.log('data',data);

      data.forEach((item) => {
        // const test = {};
        // console.log('name',item.name);
        flag = false
        if (item?.name == search) {
          console.log('element',item.name);
          flag = true
        }

        if (!flag) {
          item?.comics?.items.forEach((e) => {
            if (e.name == search) {
              flag = true
              // break
            }
          });
        }

        if(flag) results.push(item)

        // results.push(element)
      });


      console.log('searh term',results);
    };

    // store.commit("setCharacter");

    return {
      lists: computed(() => store.state.characters),
      handleClick(list) {
        store.commit("setCharacter", list);

        router.push({
          name: "character",
          params: {
            id: list.id,
          },
        });
      },

      search,

      clickCallback(pageNum) {
        console.log(pageNum);
      },
    };
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* background: blue; */
  text-align: center;
  /* vertical-align: middle; */
  /* line-height: 90px; */

  /* text; */
}

.column {
  flex: 0 32%;
  border: 1px solid green;
  border-radius: 10px;
  /* height:200px; */
  width: 50%;
  /* padding: 30px; */
  margin: 5px;
  justify-content: center;

  text-align: center;
  vertical-align: middle;
  line-height: 40px;

  background: rgb(155, 141, 141);
}

.name {
  font-weight: bold;
}

@media (max-width: 910px) {
  .column {
    /* background: green !important; */
    flex: 0 46% !important;
  }
}
</style>
