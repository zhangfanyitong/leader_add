<template>
  <div class="body-box">
    <div class="centerleft">
      <div class="cen_left"></div>
      <div class="cen_right"></div>
    </div>
    <div class="bj">
      <div class="topleft_l"></div>
      <div class="topcenter_l"></div>
      <div class="topright_l"></div>
      <div class="footleft">
        <div class="botleft_l"></div>
        <div class="botcenter_l"></div>
        <div class="botright_l"></div>
      </div>
    </div>
    <div class="cengdiv">
      <!--<h1>近三年考核情况</h1>-->
      <!--<div id="container-right-top" class="tubiaocont" ondblclick="clickcontainerrighttop()"></div>-->
      <div class="div_xueli">
        <h1 v-show="leaderData.tabSwitch.rightOne==1">各职务层次分布</h1>
        <h1 v-show="leaderData.tabSwitch.rightOne==2">各职务层次年龄占比</h1>
        <!-- echarts -->
        <div v-show="leaderData.tabSwitch.rightOne==1" id="cont_gzwccnlzb" class="cont_one tubiaocont" style="">

        </div>
        <div v-show="leaderData.tabSwitch.rightOne==2" id="cont_gzwccnlzb1" class="cont_one tubiaocont" style="">

        </div>
      </div>
      <div class="tab-echarts">
        <div class="tab-itemBox" :class="leaderData.tabSwitch.rightOne==1?'tab-tips':''" @click="leaderData.tabSwitch.rightOne=1">
          职务层次分布
        </div>
        <div class="tab-itemBox" :class="leaderData.tabSwitch.rightOne==2?'tab-tips':''" @click="leaderData.tabSwitch.rightOne=2">
          职务层次年龄占比
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {leaderData} from '../../common/js/leaderEcharts/leaderDataConfig.js';
  export default {
    name: 'hello',
    data() {
      return {
      leaderData:leaderData
      }
    }
  }
</script>

<style scoped>
    .bj {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
  }

    .bj .topleft_l {
    float: left;
    width: 49px;
    height: 147px;
    background: url(../../../static/image/kr_t_left.png) no-repeat left top;
  }

    .bj .topright_l {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 74px;
    height: 147px;
    background: url(../../../static/image/kr_t_right.png) no-repeat right top;
  }

    .bj .topcenter_l {
    margin-left: 49px;
    width: auto;
    margin-right: 74px;
    height: 147px;
    background: url(../../../static/image/k_t_center.png) repeat-x top;
  }

    .bj .botleft_l {
    float: left;
    width: 49px;
    height: 43px;
    background: url(../../../static/image/kr_b_left.png) no-repeat left bottom;
  }

    .bj .botright_l {
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 74px;
    height: 43px;
    background: url(../../../static/image/kr_b_right.png) no-repeat right bottom;
  }

    .bj .botcenter_l {
    margin-left: 49px;
    width: auto;
    margin-right: 74px;
    height: 43px;
    background: url(../../../static/image/k_b_center.png) repeat-x bottom;
  }

    .bj .footleft {
    position: absolute;
    bottom: 0px;
    height: 43px;
    width: 100%;
  }

    .centerleft {
    width: 100%;
    height: 100%;
    padding: 147px 0px 48px 0px;
    position: absolute;
    z-index: -1;
    #padding: 0px 0px 0px 0px;
  }

    .centerleft .cen_left {
    float: left;
    width: 50%;
    height: 100%;
    background: url(../../../static/image/kr_c_left.png) repeat-y left;
  }

    .centerleft .cen_right {
    float: right;
    width: 50%;
    #width: 49%;
    height: 100%;
    background: url(../../../static/image/kr_c_right.png) repeat-y right;
  }
  .cengdiv h1 {
    position: relative;
    z-index: 30;
    text-align: center;
    width: 95%;
    margin: 0 auto;
    
    font-size: 1rem;
    
    color: #A8CEF4;
    padding-bottom: 5px
  }
  .div_xueli {
    height: 88%;
  }
  /* 图标切换向 */
  .tab-echarts {
    position: absolute;
    bottom: 4px;
    width: 90%;
    text-align: center;

  }

  .tab-echarts .tab-itemBox {
    display: inline-block;
    border: 1px solid #007FC6;
    background: #007FC6;
    padding: 0.2rem 0.3rem 0.1rem;
    border-radius: 5px;
    color: #FFFFFF;
    margin-right: 0.5rem;
    font-size: 0.8rem;
  }

  .tab-echarts .tab-tips {
    border-color: #F49802;
    color: #F49802;
    background: none;

  }
  .tubiaocont {
    width: 100%;
    height: 100%;
    /* padding: 30px 12px 22px; */
    /* position: absolute; */
    top: 0px;
    z-index: 13;
    left: 0px;
  }

  .tubiaocont img {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 100%;
  }
</style>
