<template>
  <div class="body-box">
    <div class="backImg">
      <!--顶部的填报单位 -->
      <div class="unit-top">
        <!--面包屑 -->
       <leader-crumbs></leader-crumbs>
      </div>
      <!--图标区域 -->
      <div class="unit-echartsBox">
        <!-- 左边 -->
        <div class="unit-echartsLeft">
          <!-- 左一 -->
          <div class="unit-leftOne">
            <leader-left-one :echartsShow="1"></leader-left-one>
          </div>
          <!-- 左二 -->
          <div class="unit-leftTwo">
            <leader-left-two></leader-left-two>
          </div>
        </div>
        <div class="unit-echartsCenter">
          <!-- 中间一 -->
          <div class="unit-cneterOne">
            <unit-center-one></unit-center-one>
          </div>
          <!-- 中间二 -->
          <div class="unit-centerTwo">
            <leader-center-two></leader-center-two>
          </div>
        </div>
        <div class="unit-echartsRight">
          <!-- 右边一 -->
          <div class="unit-rightOne">
            <leader-right-one></leader-right-one>
          </div>
          <!--右边二 -->
          <div class="unit-rightTwo">
            <leader-right-two></leader-right-two>
          </div>
        </div>
      </div>
      <!-- 表格区域 -->
      <div class="unit-tableBox" style="padding-top: 5.8px;">
         <unit-table-list></unit-table-list>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    domReady,
    plusReady
  } from 'common/js/ning/index.js';
  // 引入组件
  import {
    leaderLeftOne,
    leaderLeftTwo,
    leaderCenterTwo,
    leaderRightOne,
    leaderRightTwo,
    unitCenterOne,
    unitTableList,
    leaderCrumbs
  } from '../../components/leaderEcharts';

  export default {
    components: {
      leaderLeftOne,
      leaderLeftTwo,
      leaderCenterTwo,
      leaderRightOne,
      leaderRightTwo,
      unitCenterOne,
      unitTableList,
      leaderCrumbs
    },
    data() {
      return {}
    },
    created() {

    },
    methods: {

    }

  }
</script>
<style lang="less">
  @import url("../../common/css/leaderEcharts.css");
  @import url("../../common/css/unitInformation.less");

  .backImg {
    overflow-y: auto;
  }
</style>
