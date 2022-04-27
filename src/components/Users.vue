<template>
  <div class="content">
    <ul :style="{display:showType}">

    </ul>

  </div>
</template>

<script>
export default{
  name: 'users',
  showType: 'none',
  data () {
    return {
      msg: [],
      showType: 'none',
      inputVal: ''
    }
  }

}
</script>

<style scoped>
  .content{
    margin-top:80px;
    border: 1px red solid;
    width:100%;
    height:100%;
  }
</style>
