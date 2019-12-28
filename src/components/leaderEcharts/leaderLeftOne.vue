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
      <div class="gwybl texioneline"><span id="place_name">全国公务员</span><span class=""></span></div>
      <div class="gwybl"><span id="all_num">651651人</span></div>
      <div class="nvsfdiv">
        <ul>
          <li v-for="(item,index) in  leaderData.leftOneData" class="percentLine-item"><span :class="item.tipsItemClass"></span>{{item.itemName}}：
            <u class="people-number">{{item.number}}人</u>
            <u class="people-percent">{{item.percent}}</u>
            <div class="baift" :class="item.percentClass">
              <em :style="item.percentLineLength" class="percent-line"></em>
            </div>
          </li>

        </ul>
      </div>
    </div>

  </div>
</template>
<script>
  import {
    leaderData
  } from '../../common/js/leaderEcharts/leaderDataConfig.js';
  export default {
    name: 'hello',
    data() {
      return {
        leaderData: leaderData
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    background: url(../../../static/image/k_c_left.png) repeat-y left;
    background: url(../../../static/image/k_c_left.png) repeat-y left;
  }

  .centerleft .cen_right {
    float: right;
    width: 50%;
    #width: 49%;
    height: 100%;
    background: url(../../../static/image/k_c_right.png) repeat-y right;
  }
   .bj {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
  }
  
   .bj .topleft_l {
    float: left;
    width: 74px;
    height: 147px;
    background: url(../../../static/image/k_t_left.png) no-repeat left top;
  }
  
   .bj .topright_l {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 49px;
    height: 147px;
    background: url(../../../static/image/k_t_right.png) no-repeat right top;
  }
  
   .bj .topcenter_l {
    margin-left: 74px;
    width: auto;
    margin-right: 49px;
    height: 147px;
    background: url(../../../static/image/k_t_center.png) repeat-x top;
  }
  
   .bj .botleft_l {
    float: left;
    width: 74px;
    height: 43px;
    background: url(../../../static/image/k_b_left.png) no-repeat left bottom;
  }
  
    .bj .botright_l {
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 49px;
    height: 43px;
    background: url(../../../static/image/k_b_right.png) no-repeat right bottom;
  }
  
   .bj .botcenter_l {
    margin-left: 74px;
    width: auto;
    margin-right: 49px;
    height: 43px;
    background: url(../../../static/image/k_b_center.png) repeat-x bottom;
  }
  
  .bj .footleft {
    position: absolute;
    bottom: 0px;
    height: 43px;
    width: 100%;
  }
</style>
