<template>
  <div class="body-box">
    <!-- <img src="image/startBack.gif" style="height: 100%;width: 100%;" v-show="indexImg==1" > -->
    <header id="header" class="bg-top" @click="openLeader()">
      <img src="../../../static/image/logo.png" class="index-logo" />
      <nav id="tab" class="index-menu">
        <a v-for="(item,index) in tabs" class="meun-item" :class="clickMenu== index ?'tips':''" @click="urlMenuItem(index,item.src)">
          {{item.title}}</a>
      </nav>
    </header>
    <div style="height: calc(100% - 3rem);background: #555555;"></div>
  </div>
</template>

<script>
  import {
    plusReady
  } from 'common/js/ning/index.js'

  import Broadcast from 'common/js/ning/Broadcast.js'
  import webviewGroup from 'common/js/ning/WebviewGroup.js'
  export default {
    data() {
      return {
        tabs: [{
            title: '首页',

            src: 'leaderEcharts.html'
          },
          {
            title: '单位信息',

            src: 'unitInformation.html'
          },
          {
            title: '人员信息',

            src: 'searchItem.html'
          }
        ],
        menuItemStyle: { //打开的窗口样式
          top: '0px',
          bottom: '0px',
          hardwareAccelerated: true
        },
        clickMenu: 0,
        activeTab: 'leaderEcharts.html', //激活的导航项
      }
    },
    created() {
      plusReady(this.plusReady)
    },
    methods: {
      urlMenuItem(index, webid) {
        this.clickMenu = index;
        if (this.activeTab == webid) {} else {
          plus.webview.show(webid, 'zoom-fade-out');
          plus.webview.hide(this.activeTab);
          this.activeTab = webid;
        }
      },
      plusReady() {
        plus.screen.lockOrientation('landscape-primary'); //强制横屏展示
        plus.navigator.setFullscreen(true); //应用全屏显示
        var that = this;
        // setTimeout(function() {
        //   console.log(that.indexImg)
        //   that.indexImg = 2;
        //   plus.webview.show("leaderEcharts", "fade-in", 200)
        // }, 2000)
        // //创建子页面，首个选项卡页面显示，其它均隐藏；
        var menuHtml = plus.webview.currentWebview(); //获取当前的窗口
        var header = document.getElementById("header");
        that.menuItemStyle['top'] = header.clientHeight + "px";
        for (var i = 0; i < 3; i++) {
          var temp = {};
          var sub = plus.webview.create(that.tabs[i]['src'],
            that.tabs[i]['src'],
            that.menuItemStyle);
          // plus.webview.show(that.menuItem[i]['id']);
          if (i > 0) {
            sub.hide();
          }
          menuHtml.append(sub);
        }
      },
    }

  }
</script>
<style scoped>
  .bodyBox {
    width: 100%;
  }

  /* 顶部背景图 */
  .bg-top {
    width: 100%;
    height: 3rem;
    background: url('../../../static/image/top.png') no-repeat 0 0;
    background-size: cover;
  }

  /* 左边logo */
  .index-logo {
    float: left;
    height: 2.5rem;
    margin-left: 0.4rem;
  }

  .index-menu .tips {
    border-bottom: 3px solid #004aee;
    color: #FFFFFF;
  }

  /* 导航项的盒子 */
  .index-menu {
    color: white;
    /* width:20rem; */
    text-align: center;
    width: 100%;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    justify-content: center;
    height: 3rem;
  }

  .meun-item {
    display: inline-block;
    font-size: 1.2rem;
    margin-right: 2rem;
    width: 7rem;
    height: 100%;
    line-height: 3rem;
    text-align: center;
    color: #c7dff8;
  }
</style>
