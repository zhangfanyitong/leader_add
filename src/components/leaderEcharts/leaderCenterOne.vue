<template>
  <div class="body-box">
    <div class="lefttab">
      <div class="middle_tab" :class="leaderData.tabSwitch.centerOneSwitch==1?'tips':''" @click="leaderData.tabSwitch.centerOneSwitch=1">全
        国</div>
      <div class="middle_tab" :class="leaderData.tabSwitch.centerOneSwitch==2?'tips':''" @click="leaderData.tabSwitch.centerOneSwitch=2">中央单位</div>
      <div class="middle_tab" :class="leaderData.tabSwitch.centerOneSwitch==3?'tips':''" @click="leaderData.tabSwitch.centerOneSwitch=3">行政单位</div>
    </div>
    <!--行政单位-->
    <div v-show="leaderData.tabSwitch.centerOneSwitch==3" class="setTabDiv">
      <div class="xuanzetab weixzh " id="xuanzetab" style="z-index: 99">
        <span>人员总数</span><em id="tanktuli">&nbsp;</em>
      </div>
      <div class="xuanzetank" style="margin-top: 30px;z-index: 81">
        <div class="tanktop">
          <div class="topleft_tab">
            <div class="topright_tab">
              <a href="#">&nbsp;</a>
            </div>
          </div>
        </div>
        <div class="centercont">
          <div class="tucan nomg">
            <ul id="xuanze_item">
              <li id="first" data-type="a ll" class="tips">人员总数</li>
              <li data-type="age_gt_35">35岁以上</li>
              <li data-type="xueli_gt_benke">本科及以上</li>
              <li data-type="jibie_gt_xianchuji">县处级及以上</li>
              <li data-type="cengci_gt_5">任现职务层次5年以上</li>
              <li data-type="zhiji_gt_3">任现职务职级3年以上</li>
              <li data-type="jibie_gt_xianchuji_with_nv">处级以上女干部</li>
              <li data-type="shao">少数民族</li>
              <li data-type="fei">非党员</li>
              <li data-type="age_avg">平均年龄</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mapbj" id="sixthPlot">
        <!--地图位置-->
        <div id="container-mid-top" style="  height:100%;padding-left: 18px;z-index: 80">
            <chinaMap></chinaMap>
        </div>
      </div>

    </div>
    <!--中央单位-->
    <div v-show="leaderData.tabSwitch.centerOneSwitch==2" class="setTabDiv">
      <div class="top_ygdanwei">
        <div class="renxuanze">
          <ul id="dw-top-content" class="myxx">
            <li>
              <a href="#"> 中央单位:</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="danweihz1">
        <ul>
          <li v-for="(item) in leaderData.allCountry " :class="item.liClass">
            <p>
              <i>{{item.liTitle}}</i><em>{{item.liNumber}}</em>
            </p>
          </li>
        </ul>
      </div>
      <!-- <div id="sixthH1" class="bubiaoh"></div> -->
      <div class="buchbiao">
        <div class="neicon" ondblclick="clicksixthPlot1()"></div>

      </div>
    </div>
    <!-- 全国 -->
    <div v-show="leaderData.tabSwitch.centerOneSwitch==1" style="position: relative; height: 100%;">
      <div class="danweihz1 danweihz3">
        <ul>
          <li v-for="(item) in leaderData.allCountry " :class="item.liClass">
            <p>
              <i>{{item.liTitle}}</i><em>{{item.liNumber}}</em>
            </p>
          </li>

        </ul>
      </div>
      <div class="buchbiao buchbiao3">
        <!-- echarts -->
        <div class="neicon" id="sixthPlot2" style=" "></div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    leaderData
  } from '../../common/js/leaderEcharts/leaderDataConfig.js';
  import chinaMap from '../chinaMap.vue';
  export default {
	components:{
    chinaMap
  },
    data() {

      return {
        leaderData: leaderData
      }
    }
  }
</script>

<style scoped>
  .lefttab {
    position: absolute;
    top: 0.4rem;
    left: 0.4rem;
    height: 97%;
    width: 2.5rem;
    z-index: 90;
  }

  .lefttab div {
    width: 100%;
    height: auto;
    padding: 1.9rem 0.5rem;
    display: block;
    text-align: center;
    color: #7DA3D2;
    font-size: 1rem;
    display: block;
    line-height: 1.2rem;
  }

  .lefttab div:hover {
    cursor: pointer;
  }

  .lefttab div.tips {
    background: url(../../../static/image/taptips.png) no-repeat right center;
    background-size: 100% 100%;
    color: #FFF;
    display: block;
  }

  #centerOne .middle_tab {
    z-index: 99;
  }

  .xuanzetab {
    position: absolute;
    top: 4px;
    left: 40px;
    height: 36px;
    z-index: 60;
  }


  .weixzh span {
    display: inline-block;
    height: 36px;
    padding: 0 4px 0px 15px;
    line-height: 32px;
    font-size: .6rem;
  }

  .weixzh em {
    display: inline-block;
    height: 36px;
    background: url(../../../static/image/tabrw.png) no-repeat right top;
    width: 22px;
    line-height: 32px;
  }

  .xuanzetank {
    display: none;
    position: absolute;
    top: -2px;
    width: 100%;
    height: 400px;
    z-index: 99;
    padding-left: 50px;
  }

  .xuanzetank .tanktop {
    width: 100%;
    padding-right: 5px;
  }

  .xuanzetank .tanktop .topleft_tab {
    float: left;
    width: 100%;
    height: 26px;
    background: url(../../../static/image/tabttop.png) no-repeat left top;
  }

  .xuanzetank .tanktop .topright_tab {
    margin-left: 108px;
    width: auto;
    height: 26px;
    background: url(../../../static/image/tankatopr.png) no-repeat right top;
    text-align: right;
  }

  .xuanzetank .centercont {
    border: 1px solid #3270FF;
    border-top: 0px;
    background: #0F1D41 url(../../../static/image/tabbj.png) repeat;
    height: auto;
    padding: 0 10px 10px;
    width: auto;
    overflow: hidden;
    margin-right: 14px;
  }

  .tucan ul {
    margin: 0px;
    padding: 0px;
  }

  .tucan ul li {
    display: inline-block;
    width: 50%;
    float: left;
    /* background:url(../../../static/image/danxuan.png) no-repeat left -36px;*/
    padding-left: 25px;
    color: #C1C1E4;
    margin: 0px;
    height: 30px;
    font-size: 12px;
    list-style: none;
  }

  .tucan ul li.tips,
  .tucan ul li:hover.tips {
    background-position: left -3px;
    color: #3270FF;
  }

  .tucan ul li:hover {
    background-position: left -73px;
    color: #fff;
    cursor: pointer;
  }

  .nomg {
    margin: 0px;
  }

  .mapwapper .mapbj {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 1px 15px 15px;
  }

  .mapwapper .mapbj img {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 100%;
  }

  .top_ygdanwei {
    width: 100%;
    height: 36px;
    padding: 0px .3rem 15px 50px;
    display: block;
    position: absolute;
    z-index: 93;
    font-size: .6rem;
  }

  .renxuanze {
    margin: 4px auto 8px;
    width: 100%;
    height: 2.4rem;
    line-height: 2.4rem;
    font-size: 1rem;
    position: relative;
  }
  .renxuanze ul {
    width: 100%;
    padding: 0 10px;
    height: 100%;
    margin: 0px;
  }

  .renxuanze ul li {
    float: left;
    display: inline-block;
    width: auto;

    padding: 0 15px 0 0px;
    margin: 0 1px;
    background: url(../../../static/image/ren/jiantou.png) no-repeat right center;
  }

  .renxuanze ul li a {
    display: block;
    padding: 0px 3px;
    width: auto;
  }

  .renxuanze ul li.last {
    background: none;
    padding: 0 15px 0 2px;
  }

  .renxuanze ul li.fist {

    width: 30px;
    display: inline-block;
  }

  .danweihz1 {
    width: 100%;
    position: relative;
    padding: 2.4rem .3rem 15px 50px;
    height: auto;
    overflow: hidden;
    z-index: 33;
  }

  .danweihz1 ul {
    padding: 0px;
    margin: 0px;
  }

  .danweihz1 ul li {
    float: left;
    width: 33.3%;
    position: relative;
    margin: .2rem auto;
    height: 5rem;
  }

  .danweihz1 ul li.one,
  .danweihz1 ul li.four {
    padding-right: .2rem;
  }

  .danweihz1 ul li.two,
  .danweihz1 ul li.five {
    padding: 0px .2rem;
  }

  .danweihz1 ul li.three,
  .danweihz1 ul li.six {
    padding-left: .2rem;
  }

  .danweihz1 ul li p {
    display: inline-block;
    width: 100%;
    height: 100%;
    line-height: 18px;
    font-size: .5rem;
    text-align: center;
    padding-top: 0.4rem;
    margin: 0px;
    border-radius: 6px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(32, 62, 171, 0.8);
  }

  .danweihz1 ul li.one p {
    background-color: rgba(1, 25, 91, 0.7);
  }

  .danweihz1 ul li.two p {
    background-color: rgba(1, 25, 91, 0.7);
  }

  .danweihz1 ul li.three p {
    background-color: rgba(1, 25, 91, 0.7);
  }

  .danweihz1 ul li.four p {
    background-color: rgba(1, 25, 91, 0.7);
  }

  .danweihz1 ul li.five p {
    background-color: rgba(1, 25, 91, 0.7);
  }

  .danweihz1 ul li.six p {
    background-color: rgba(1, 25, 91, 0.7);
  }

  .danweihz1 ul li p i {
    position: relative;
    text-align: left;
    text-indent: .6rem;
    font-size: 0.8rem;

    display: block;
    top: 0px;
    margin: 0px;
    padding: 0px;
    color: #A8CEF4;
    /*text-indent:10px;*/
  }

  .danweihz1 ul li p em {
    font-style: normal;
    color: #00CECE;
    font-weight: 600px;
    line-height: 25px;
    display: block;
    /* text-indent:10px;*/
    font-size: 1rem !important;
  }

  .danweihz3 {
    width: 100%;
    position: relative;
    padding: 0rem .38rem 15px 50px;
    height: auto;
    overflow: hidden;
    z-index: 33;
  }

  .buchbiao {
    width: 100%;
    height: 100%;
    padding-left: 50px;
    top: 0px;
    padding-top: 13.5rem;
    z-index: 2;
    text-align: center;
    position: absolute;
    padding-right: 8px;
    padding-bottom: 8px;
  }

  .neicon {
    width: 100%;
    height: 100%;
    padding: 10px;
    position: relative;
    z-index: 1;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(32, 62, 171, 0.8);
    background-color: rgba(1, 25, 91, 0.5);
  }

  .buchbiao3 {
    padding-top: 11.2rem;
  }
</style>
