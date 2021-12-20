<template>
  <div class="flex-container">
    <div
      @click="handleClick(list)"
      v-for="list in lists"
      :key="list.id"
      style="cursor: pointer"
      class="column"
    >
      <!-- {{ list.name }}  -->
      <!-- <router-link :to="{ name: 'character',params: {id: '2'} }"> -->
      <img
        style="width: 100%"
        width="200"
        height="200"
        :src="list.thumbnail.path + '/portrait_xlarge.jpg'"
        alt=""
      />
      <p class="name">{{ list.name }}</p>
      <!-- </router-link> -->
    </div>
    <!-- <character/> -->
    <!-- PAGINATE -->

    <!-- <jw-pagination :items="lists" @changePage="onChangePage"></jw-pagination> -->
    <!-- <div class="column">a</div>
    <div class="column">c</div> -->
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import JwPagination from "jw-vue-pagination";
import Character from "../components/Character.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  components: {
    JwPagination,
    Character,
  },
  setup() {
    const lists = ref([]);

    const store = useStore();

    const router = useRouter();

    // store.commit("setCharacter");

    onMounted(() => {
      axios
        .get(
          "https://gateway.marvel.com/v1/public/characters?ts=thesoer&apikey=8883d6939bade2a1903d84ee45e717c2&hash=a0b1a49669b4db59c067419443f56c0f"
        )
        .then((res) => {
          lists.value = res.data.data.results;
          console.log("marvels", lists.value);
          store.commit("setCharacters", lists.value);
        });
      // console.log('');
    });
    return {
      lists,
      handleClick(list) {
        store.commit("setCharacter", list);

        router.push({
          name: "character",
          params: {
            id: list.id,
          },
        });
      },
      // onChangePage(lists) {
      //   // update page of items
      //   lists.value = lists.value;
      // },

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
