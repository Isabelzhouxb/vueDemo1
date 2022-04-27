<template>
<div class="div1">
  <app-header></app-header>
</div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'WareHouse',
  components: {
    'app-header': Header
  },
  methods: {
    // getMessage () {
    //   this.axios({
    //     method: 'GET',
    //     url: 'https://api.github.com/users/vuejs/repos'
    //   }).then(res => { console.log(res) })
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.div1{
  position:absolute;
  width:100%;
  height:100%;
}

</style>
