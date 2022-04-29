<template>
  <div class="firstpage">
    <header id="title">
      <h1>{{ msg }}</h1>
    </header>
    <div id="components-button-demo-button-group">
      <a-button-group>
        <a-input placeholder="输入仓库名搜索" v-model="info" @keyup.enter="gotolink"/>
        <a-button type="primary" @click="gotolink">
            <a-icon type="search" />
        </a-button>
      </a-button-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'Github 仓库搜索 - vuejs',
      info: ''
    }
  },
  methods: {
    gotolink () {
      this.$router.push({
        name: 'WareHouse',
        params: {info: this.info}
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: bold;
  font-family:Microsoft YaHei;
}
.firstpage{
  position:absolute;
  width:100%;
  height:100%;
  background: linear-gradient(#fff,#999);
}
#title{
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%,-40%);
}
#components-button-demo-button-group{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
 }

</style>
