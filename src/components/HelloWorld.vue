<template>
  <div>
  hello world
  </div>
</template>

<script>
import { ref,onMounted } from "vue"
import axios from 'axios'
export default {
  setup () {
    
    const list = ref('test')


    onMounted(() => {
      axios.get("https://gateway.marvel.com/v1/public/characters?ts=thesoer&apikey=8883d6939bade2a1903d84ee45e717c2&hash=a0b1a49669b4db59c067419443f56c0f")
        .then(res => {
          console.log('marvels',res.data);
        })
      // console.log('');
    })
    return {
      list
    }
  }
}
</script>

<style lang="scss" scoped>

</style>