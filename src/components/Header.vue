<template>
  <div>
    <div class="navigation">
      <div id="components-button-demo-button-group">
          <a-button-group>
            <a-input placeholder="输入仓库名搜索"   v-model="inputVal"  />
            <a-button type="primary" >
                <a-icon type="search" />
            </a-button>
          </a-button-group>
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
export default{
  name: 'app-header',
  data () {
    return {
      // 用来存储axios获取的数据
      message: [],
      // 用来储存根据文档格式map后的数据
      newmessage: [],
      // 模糊查询后的新数组
      // text: [],
      inputVal: ''
    }
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
            owner: {avatar_url: item.owner.avatar_url}
          }
          return obj
        })
        console.log(this.message)
      })
  },
  computed: {
    filWareHouse () {
      let arr = this.message.filter(f => f.name.indexOf(this.inputVal) > -1)
      // console.log(arr)
      return arr
    }
  }
}

</script>

<style scoped>
  .navigation{
    width:100%;
    height:80px;
    /* border: black 0px solid; */
    box-shadow: 0px 20px 20px -20px #D1D1D1;
    position:fixed;
    top:0;
  }
  #components-button-demo-button-group{
    position: absolute;
    left: 0%;
    top: 20%;
    transform: translate(10%,20%);
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
</style>
