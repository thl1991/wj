<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content grid-content-left foo" @click="gotoPath('Home')">
          <span class="letter" data-letter="E">E</span>
          <span class="letter" data-letter="卷">卷</span>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content grid-content-right">
          <el-button type="primary" @click="gotoPath('Home')">首页</el-button>
          <el-button type="primary">公开问卷</el-button>
          <el-button @click="gotoPath('UserCenter',1)" type="primary">个人中心</el-button>
          <el-button @click="gotoPath('Contact')">联系我</el-button>
          <el-button type="primary" @click="gotoPath('Login')">登录</el-button>
        </div>
      </el-col>
    </el-row>
    <router-view/>
  </div>
</template>
<script>
  import router from './router'
  export default {
    name: 'app',
    methods: {
      gotoPath: function (name, id) {
        const params = {}
        if (id) {
          params.id = id
        }
        router.push({
          name: name,
          params
        })
      }
    }
  }
</script>

<style>
  .el-row {
    margin-bottom: 5px;
    margin-top: 3px;
    width: 100%;
  }

  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 40px;
  }

  .grid-content-left {
    font-family: "Arial Narrow";
    font-size: 40px;
    font-weight: 600;
    text-align: left;
    padding-left: 20px;
    color: #409EFF;
  }

  .grid-content-right {
    text-align: right;
    padding-top: 30px;
    padding-right: 30px;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato', sans-serif;
  }

  div.foo {
    margin: 0 auto;
    cursor: pointer;
  }

  .letter {
    display: inline-block;
    font-weight: 900;
    font-size: 6rem;
    position: relative;
    color: #00B4F1;
    transform-style: preserve-3d;
    perspective: 400;
    -webkit-perspective: 400;
    z-index: 1;
  }

  .letter:before, .letter:after {
    position: absolute;
    content: attr(data-letter);
    transform-origin: top left;
    top: 0;
    left: 0;
  }

  .letter, .letter:before, .letter:after {
    transition: all 0.3s ease-in-out;
  }

  .letter:before {

    text-shadow: -1px 0px 1px rgba(255, 255, 255, .8),
    1px 0px 1px rgba(0, 0, 0, .8);
    z-index: 3;
    transform: rotateX(0deg) rotateY(-15deg) rotateZ(0deg);
  }

  .letter:after {
    color: rgba(0, 0, 0, .11);
    z-index: 2;
    transform: scale(1.08, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 1deg);
  }

  .letter:hover:before {
    color: #fafafa;
    transform: rotateX(0deg) rotateY(-40deg) rotateZ(0deg);
  }

  .letter:hover:after {
    transform: scale(1.08, 1) rotateX(0deg) rotateY(40deg) rotateZ(0deg) skew(0deg, 22deg);
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
