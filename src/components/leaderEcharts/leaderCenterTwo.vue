<template>
  <div class="body-box">
    <div class="center_kb">
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
        <div class="div_xueli">
          <h1>各职务层次分布情况</h1>

          <!-- echarts -->
          <div v-show="leaderData.tabSwitch.centerTwo==1" id="container1" class="boeder-style" style="height: 100%;width: 100%;padding-bottom: 15px"
            ondblclick="clickcontainer()">
          </div>
          <div v-show="leaderData.tabSwitch.centerTwo==2" id="container2" class="boeder-style" style="height: 100%;width: 100%;padding-bottom: 15px"
            ondblclick="clickcontainer()">
          </div>
          <div v-show="leaderData.tabSwitch.centerTwo==3" id="container3" class="boeder-style" style="height: 100%;width: 100%;padding-bottom: 15px"
            ondblclick="clickcontainer()">
          </div>
        </div>
        <div class="tab-echarts">
          <div class="tab-itemBox" :class="leaderData.tabSwitch.centerTwo==1?'tab-tips':''" @click="leaderData.tabSwitch.centerTwo=1">
            综合
          </div>
          <div class="tab-itemBox  " :class="leaderData.tabSwitch.centerTwo==2?'tab-tips':''" @click="leaderData.tabSwitch.centerTwo=2">
            警察
          </div>
          <div class="tab-itemBox  " :class="leaderData.tabSwitch.centerTwo==3?'tab-tips':''" @click="leaderData.tabSwitch.centerTwo=3">
            法检
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
  .center_kb {
    width: 100%;
    height: 100%;
    padding-bottom: 0px;
    position: relative;
    z-index: 1;
  }

  .center_kb .bj {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
  }

  .center_kb .bj .topleft_l {
    float: left;
    width: 42px;
    height: 42px;
    background: url(../../../static/image/kc_t_left.png) no-repeat left top;
  }

  .center_kb .bj .topright_l {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 42px;
    height: 42px;
    background: url(../../../static/image/kc_t_right.png) no-repeat right top;
  }

  .center_kb .bj .topcenter_l {
    margin-left: 42px;
    width: auto;
    margin-right: 42px;
    height: 42px;
    background: url(../../../static/image/k_c_center.png) repeat-x top;
  }

  .center_kb .bj .botleft_l {
    float: left;
    width: 125px;
    height: 46px;
    background: url(../../../static/image/kc_b_left.png) no-repeat left bottom;
  }

  .center_kb .bj .botright_l {
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 46px;
    height: 46px;
    background: url(../../../static/image/kc_b_right.png) no-repeat right bottom;
  }

  .center_kb .bj .botcenter_l {
    margin-left: 125px;
    width: auto;
    margin-right: 46px;
    height: 46px;
    background: url(../../../static/image/kc_b_center.png) repeat-x bottom;
  }

  .center_kb .bj .footleft {
    position: absolute;
    bottom: 0px;
    height: 46px;
    width: 100%;
  }

  .center_kb .centerleft {
    width: 100%;
    height: 100%;
    padding: 42px 0px 46px 0px;
    position: absolute;
    z-index: -1;
    #padding: 0px 0px 0px 0px;
  }

  .center_kb .centerleft .cen_left {
    float: left;
    width: 50%;
    height: 100%;
    background: url(../../../static/image/kc_c_left.png) repeat-y left;
  }

  .center_kb .centerleft .cen_right {
    float: right;
    width: 50%;
    #width: 49%;
    height: 100%;
    background: url(../../../static/image/kc_c_right.png) repeat-y right;
  }
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
  .center_kb .cengdiv h1{
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
