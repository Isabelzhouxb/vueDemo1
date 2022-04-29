<template>
<div class="div1">
  <div class="navigation">
      <div id="components-button-demo-button-group">
          <a-button-group>
            <a-input placeholder="输入仓库名搜索"   v-model="inputVal"  />
            <a-button type="primary" >
                <a-icon type="search" />
            </a-button>
          </a-button-group>
      </div>
      <div id="userinfo">
          <a-avatar :size="54"  :src="message[0].avatar_url" />
          <span>{{message[0].login}}</span>
      </div>
      <div id="list">
        <ul id="ul1" v-for="(f,index) of filWareHouse" :key="index">
              <li><a :href="f.html_url" target="_blank" >{{f.name}}</a></li>
            </ul>
      </div>
  </div>
  <div class="content">
      <ul  v-for="(f,index) of filWareHouse" :key="index" >
        <!-- 三目运算符加序号 -->
        <li><a :href="f.html_url" target="_blank" >{{ index+1>9?index+1:(index+1) }}、&nbsp;&nbsp;{{f.name}}</a></li>
        <li>{{f.description}}</li>
      </ul>
  </div>
</div>
</template>

<script>

export default {
  name: 'WareHouse',
  data () {
    return {
      // 用来存储axios获取、map后的数据
      message: [],
      inputVal: ''
    }
  },
  created () {
    this.inputVal = this.$route.params.info ? this.$route.params.info : ' '
  },
  mounted () {
    this.axios({
      method: 'GET',
      url: 'https://api.github.com/users/vuejs/repos'
    })
      .then(res => {
        this.message = res.data.map(function (item) {
          let obj = {
            name: item.name,
            html_url: item.html_url,
            description: item.description,
            avatar_url: item.owner.avatar_url,
            login: item.owner.login
            // owner: {avatar_url: item.owner.avatar_url, login: item.owner.login}
          }
          return obj
        })
        console.log(this.message)
      })
  },
  computed: {
    filWareHouse () {
      let arr = this.message.filter(f => f.name.indexOf(this.inputVal) > 0)
      console.log(this.inputVal)
      return arr
    }
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
  .navigation{
    width:100%;
    height:80px;
    /* border: black 0px solid; */
    box-shadow: 0px 20px 20px -20px #D1D1D1;
    position:fixed;
    top:0;
  }
  #components-button-demo-button-group{
    height:40px;
    width:300px;
    border:0px red solid;
    position: absolute;
    left: 0%;
    top: 20%;
    transform: translate(10%,20%);
    float:left;
  }
  #userinfo{
    float:left;
    height:60px;
    width:150px;
    border:0px red solid;
    position: absolute;
    left: 80%;
    top: 20%;
  }
   .content{
    margin-top:80px;
    border: 0px red solid;
    width:100%;
    height:100%;
  }
  ul{
    list-style-type:none
  }
  a{
    text-decoration:underline;
  }
  #list{
    border: 0px red solid;
    position:absolute;
    overflow: hidden;
    width:200px;
    margin-top:60px;
    margin-left:10px;
    background: white;

  }

</style>
