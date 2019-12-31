<template>
  <div class="body-box">
    <div class="backImg">
      <div class="indexwapper">
        <!-- 左侧部分 -->
        <div class="left" id="leftBox">
          <!--  左一 -->
          <div class="left_k" id="leftOne">
            <leader-left-one></leader-left-one>
          </div>
          <!--  左二-->
          <div class="left_kb" id="leftTwo">
            <leader-left-two></leader-left-two>
          </div>
        </div>
        <!--左侧结束-->
        <!--中间部分-->
        <div class="center" id="centerBox">
          <!-- 中间的上部分 -->
          <div class="mapwapper" id="cente
          rOne">
            <leader-center-one></leader-center-one>
          </div>

          <!-- 中间的下部分 -->
          <div class="mapfoot" id="centerTwo">
            <leader-center-two></leader-center-two>
          </div>
        </div>
        <!--中间部分结束-->
        <!--右侧开始-->
        <div class="right" id="rightBox">
          <div class="right_k" id="rightOne">
            <leader-right-one></leader-right-one>

          </div>
          <div class="right_kb" id="rightTwo">
            <leader-right-two></leader-right-two>
          </div>
        </div>
        <!--右侧结束-->
      </div>
    </div>
  </div>
  </div>

</template>
<script>
  // 按需引入组件

  import {
    leaderLeftOne,
    leaderLeftTwo,
    leaderCenterOne,
    leaderCenterTwo,
    leaderRightOne,
    leaderRightTwo
  } from '../../components/leaderEcharts';

  import {
    domReady,
    plusReady
  } from 'common/js/ning/index.js';
  import {
    leaderData
  } from '../../common/js/leaderEcharts/leaderDataConfig.js';
  export default {
    components: {
      leaderLeftOne,
      leaderLeftTwo,
      leaderCenterOne,
      leaderCenterTwo,
      leaderRightOne,
      leaderRightTwo
    },
    data() {
      return {
        leaderData: leaderData
      }
    },
    created() {
      plusReady(this.plusReady)
    },
    methods: {
      plusReady() {

      }
    }

  }
</script>
<style>
  @import url("../../common/css/leaderEcharts.css");
</style>
