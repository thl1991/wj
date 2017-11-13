<template>
  <el-row :gutter="20" class="home-row">
    <el-col :span="24" class="home-col">
      <div class="banner"></div>
    </el-col>
    <el-row :gutter="20" class="home-row">
      <el-col :span="6" class="home-col">
        <div class="home-item">
          <h2 class="home-item-title">易用</h2>
        </div>
      </el-col>
      <el-col :span="6" class="home-col">
        <div class="home-item"><h2 class="home-item-title">简洁</h2></div>
      </el-col>
      <el-col :span="6" class="home-col">
        <div class="home-item"><h2 class="home-item-title">高效</h2></div>
      </el-col>
      <el-col :span="6" class="home-col">
        <div class="home-item"><h2 class="home-item-title">透彻</h2></div>
      </el-col>
    </el-row>
  </el-row>
</template>
<style>
  .home-row {
    margin: 0px !important;
  }

  .home-col {
    margin: 0px !important;
    padding: 0 !important;
    text-align: center;
  }

  .banner {
    width: 100%;
    height: 350px;
    background-color: #409EFF;
  }

  .home-item {
    margin-left: 25%;
    margin-top: 100px;
    height: 200px;
    width: 200px;
    border-radius: 3px;
    box-shadow: grey 0 1px 1px 1px;
  }

  .home-item-title{
    padding: 3px 0;
    font-size: 2rem;
  }
</style>
<script>
  export default {
    name: 'banner',
    data () {
      return {
        images: [
          {title: '图1', src: '../../../static/images/1.jpg'},
          {title: '图2', src: '../../../static/images/2.jpg'},
          {
            title: '图3',
            src: '../../../static/images/3.jpg'
          }
        ]
      }
    },
    methods: {
      getImage: function (src) {
        return {background: 'url(' + src + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}
      }
    }
  }
</script>

