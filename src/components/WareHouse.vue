<template>
<div class="div1">
  <div class="navigation">
      <div id="components-button-demo-button-group">
          <a-button-group>
            <a-input placeholder="输入仓库名搜索"   v-model="inputVal"  @blur="showList" @focus="showList" />
            <a-button type="primary"  @click="queryInfo"  >
                <a-icon type="search" />
            </a-button>
          </a-button-group>
      </div>
      <div id="userinfo">
          <a-avatar :size="54" v-if="message[0]" :src="message[0].avatar_url" />
          <span v-if="message[0]" v-bind:style="{ fontSize: fontSize + 'px' }" >{{message[0].login}}</span>
      </div>
      <div id="list" v-if="isShowList">
        <ul id="ul1" v-for="(f,index) of filWareHouse" :key="index">
              <li><span>{{f.name}}</span></li>
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
      fontSize: 30,
      // 用来存储axios获取、map后的数据
      message: [],
      filWareHouse: [],
      isShowList: false,
      inputVal: ''
    }
  },
  created () {
    this.inputVal = this.$route.params.info ? this.$route.params.info : ' '
  },
  watch: {
    inputVal (newQuestion) {
      console.log(newQuestion)
      let timer = null
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        this.queryInfo.apply(this, arguments)
        timer = null
      }, 500)
    }
  },
  mounted () {
    this.queryInfo()
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
          }
          return obj
        })
        console.log(this.message)
      })
  },
  methods: {

    // 通过input框进行查询
    queryInfo () {
      let arr = this.message.filter(f => f.name.indexOf(this.inputVal) > 0)
      this.filWareHouse = arr
      console.log(this.inputVal)
    },
    // 只展示list
    showList () {
      if (this.isShowList === true) {
        this.isShowList = false
      } else {
        this.isShowList = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.div1{
  position:fixed;
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
     /* 设置元素的堆叠顺序 */
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
    top: 15%;
  }
   .content{
    margin-top:80px;
    border: 0px red solid;
    /* position:fixed; */
    overflow:hidden;
    overflow-y:scroll;
    /* position:absolute; */
    width:100%;
    height:100%;
    z-index:-1;
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
    /* z-index: 999; */
    /* max-height: 80%; */

  }

</style>
