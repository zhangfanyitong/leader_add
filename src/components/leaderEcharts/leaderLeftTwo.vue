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
      <div class="cengdiv">
        <!-- echarts -->
        <div class="xueliceng div_xueli">

          <h2 v-show="leaderData.tabSwitch.leftTwo ==1">学历信息</h2>
          <h2 v-show="leaderData.tabSwitch.leftTwo ==2">学位信息</h2>
          <div v-show="leaderData.tabSwitch.leftTwo ==1" id="container-left1" style="height: 100%;width: 100%;margin-top: -25px">
          </div>
          <div v-show="leaderData.tabSwitch.leftTwo ==2" id="container-left2" style="height: 100%;width: 100%;margin-top: -25px">
          </div>
        </div>
        <div class="tab-echarts">
          <div class="tab-itemBox" :class="leaderData.tabSwitch.leftTwo ==1 ?'tab-tips':''" @click="leaderData.tabSwitch.leftTwo =1">
            学历
          </div>
          <div class="tab-itemBox" :class="leaderData.tabSwitch.leftTwo ==2 ?'tab-tips':''" @click="leaderData.tabSwitch.leftTwo =2">
            学位
          </div>
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
    .centerleft {
    width: 100%;
    height: 100%;
    padding: 42px 0px 42px 0px;
    position: absolute;
    z-index: -1;
    #padding: 0px 0px 0px 0px;
  }

    .centerleft .cen_left {
    float: left;
    width: 50%;
    height: 100%;
    background: url(../../../static/image/k_c_left.png) repeat-y left;
  }

    .centerleft .cen_right {
    float: right;
    width: 50%;
    #width: 49%;
    height: 100%;
    background: url(../../../static/image/k_c_right.png) repeat-y right;
  }
    .bj .topleft_l {
    float: left;
    width: 42px;
    height: 42px;
    background: url(../../../static/image/kb_t_left.png) no-repeat left top;
  }

    .bj .topright_l {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 49px;
    height: 42px;
    background: url(../../../static/image/kb_t_right.png) no-repeat right top;
  }

    .bj .topcenter_l {
    margin-left: 42px;
    width: auto;
    margin-right: 49px;
    height: 42px;
    background: url(../../../static/image/k_t_center.png) repeat-x top;
  }

    .bj .botleft_l {
    float: left;
    width: 42px;
    height: 43px;
    background: url(../../../static/image/kb_b_left.png) no-repeat left bottom;
  }

    .bj .botright_l {
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 125px;
    height: 42px;
    background: url(../../../static/image/kb_b_right.png) no-repeat right bottom;
  }

    .bj .botcenter_l {
    margin-left: 42px;
    width: auto;
    margin-right: 125px;
    height: 43px;
    background: url(../../../static/image/k_b_center.png) repeat-x bottom;
  }

    .bj .footleft {
    position: absolute;
    bottom: 0px;
    height: 42px;
    width: 100%;
  }

  /*标题字*/
  .cengdiv {
    width: 100%;
    height: 100%;
    padding: 1rem 1rem 2rem;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 13;
    text-indent: 0.5rem;
    color: #FFFFFF;
    #height: 96%;
    #padding: 2%;
    background: url(../../../static/image/tophbj.png) no-repeat center -1px;
    display: block;
  }
    .cengdiv h1 {
    position: relative;
    z-index: 30;
    text-align: center;
    width: 95%;
    margin: 0 auto;
    height: 23px;
    font-size: 1rem;
    line-height: 23px;
    color: #A8CEF4;
    padding-bottom: 5px
  }
  .xueliceng {
    width: 100%;
    position: relative;
  }

  .xueliceng h2 {
    width: 95%;
    margin: 0 auto;
    height: 30px;
    font-size: 1rem;
    line-height: 28px;
    text-align: center;
    color: #A8CEF4;
  }

  .xueliceng .tu_xuli {
    width: 100%;
    height: 100%;
    padding: 1.3rem 0px 0px;
    position: absolute;
    top: 0px;
    z-index: 13;
    left: 0px;
  }

  .xueliceng .tu_xuli_2 {
    width: 100%;
    height: 100%;
    padding: 0 0px 0px;
    position: absolute;
    top: 0px;
    z-index: 13;
    left: 0px;
  }

  .xueliceng .tu_xuli img {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 90%;
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
</style>
