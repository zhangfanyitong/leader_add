<template>
  <div class="body-box">
    <!--面包屑 -->
    <ul class="unit-crumbsBox">
      <li class="unit-crumbsItem">
        <a id="top-name-message-content">填报单位</a>
      </li>
      <li class="unit-crumbsItem">
        <a id="top-name-message-content">公安机关</a>
      </li>
      <li class="unit-crumbsItem">
        <a id="top-name-message-content">检查为机关</a>
      </li>
    </ul>
    <!-- 底部的区别线 -->
    <div class="unit-line">
      <div class="unit-leftj"></div>
      <div class="unit-xuanzj"></div>
      <div class="unit-rightj"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },

  }
</script>

<style lang="less" scoped>
  .body-box {


    .unit-crumbsBox {
      width: 100%;
      height: 100%;
      padding: 0.5rem 0 0 0.5rem;
      font-size: 1rem;
    }

    /* 分别线 */
    .unit-line {
      width: 100%;
      position: relative;
      height: 0.6rem;
    }

    .unit-leftj {
      border-radius: 50px;
      background: #1C3884;
      position: absolute;
      left: 2px;
      height: 0.6rem;
      width: 0.6rem;
      top: 0;
    }

    .unit-xuanzj {
      position: absolute;
      width: calc(100% - 1.2rem);
      top: 0.3rem;
      left: 0.6rem;
      height: 1px;
      background: #1C3884;
    }

    .unit-rightj {
      border-radius: 50px;
      background: #1C3884;
      position: absolute;
      right: 2px;
      height: 0.6rem;
      width: 0.6rem;
      top: 0;
    }

    /* 面包屑的每一项 */
    .unit-crumbsItem {
      width: auto;
      display: inline-block;
      padding-right: 1.5rem;
      color: #c7dff8;
      background: url(../../../static/img/indexImages/ren/jiantou.png) no-repeat right center;
    }
  }
</style>
