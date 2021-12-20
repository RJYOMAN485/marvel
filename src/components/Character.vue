<template>
    <div class="fluid">
      <div class="row justify-content-center">
        <button @click="router.back()" class="col-4 mb-4 btn btn-secondary">
          Go Back
        </button>
        <div class="col-12">
          <div class="card">
            <img
              class="img-char"
              width="600"
              height="600"
              :src="id?.thumbnail?.path + '/portrait_xlarge.jpg'"
            />
            <div class="card-body h4">
              <p class="h4">
                {{ id?.name }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-start">
        <!-- <div class="col-12"> -->
        <span class="col-12 lead bg-light p-3">Comics</span>

        <div
          v-for="item in id?.comics?.items"
          :key="item"
          class="m-2 col-lg-2 col-sm-4 col-md-3"
        >
          <div class="card p-2">
            <div class="card-body">
              {{ item?.name }}
            </div>
          </div>
        </div>
        <!-- </div> -->
      </div>

      <div class="row justify-content-start">
        <!-- <div class="col-12"> -->
        <span class="col-12 lead bg-light p-3"> Stories </span>

        <div
          v-for="item in id.stories?.items"
          :key="item"
          class="m-2 col-lg-2 col-sm-3"
        >
          <div class="card p-2">
            <div class="card-body">
              {{ item.name }}
            </div>
          </div>
        </div>
        <!-- </div> -->
      </div>

      <div class="row justify-content-start">
        <!-- <div class="col-12"> -->
        <span class="col-12 lead bg-light p-3"> Events </span>

        <div
          v-for="item in id.events?.items"
          :key="item"
          class="m-2 col-lg-2 col-sm-3"
        >
          <div class="card p-2">
            <div class="card-body">
              {{ item.name }}
            </div>
          </div>
        </div>
        <!-- </div> -->
      </div>

      <div class="row justify-content-start">
        <!-- <div class="col-12"> -->
        <span class="col-12 lead bg-light p-3"> Series </span>

        <div
          v-for="item in id.series?.items"
          :key="item"
          class="m-2 col-lg-2 col-sm-3"
        >
          <div class="card p-2">
            <div class="card-body">
              {{ item.name }}
            </div>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>
</template>

<script>
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    const lists = ref([]);

    const id = ref({});

    onMounted(() => {
      console.log("teest", store.state.characters);
      const data = store.state.characters;
      // lists.value = store.state.characters

      const result = data.filter((list) => {
        // console.log('id',id);
        return list.id == route.params.id;
      });

      id.value = result[0];

      console.log("final name", id.value);

      //   console.log("lists", lists.value);

      //   lists
    });
    return {
      // id: computed(() => store.state.character),
      id,
      //   lists: computed(() => store.state.characters),

      router,
      //   list
    };
  },
};
</script>

<style scoped>
.fluid {
  width: 80%;
  margin: 0 auto;
}

.img-char {
  width: 100%;
  align-self: center;
  /* max-width: 400px; */
}

@media (min-width: 1400px) {
  .img-char {
    width: 80% !important;
    /* max-width: 400px; */
  }
}
</style>
