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
      <div class="div_xueli">
        <h1>任现职层次年限信息</h1>
        <!--  echarts -->
        <div id="container-right-bottom" class="tubiaocont">

        </div>
      </div>
      <div class="tab-echarts" style="margin-top: 18px;">
        <div class="tab-itemBox" :class="leaderData.tabSwitch.rightTwo==1?'tab-tips':''" @click="leaderData.tabSwitch.rightTwo=1">
          综合
        </div>
        <div class="tab-itemBox  " :class="leaderData.tabSwitch.rightTwo==2?'tab-tips':''" @click="leaderData.tabSwitch.rightTwo=2">
          警察
        </div>
        <div class="tab-itemBox  " :class="leaderData.tabSwitch.rightTwo==3?'tab-tips':''" @click="leaderData.tabSwitch.rightTwo=3">
          法检
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  let echarts = require('echarts/lib/echarts');
  // 引入柱状图组件
  require('echarts/lib/chart/bar')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  import {
    leaderData
  } from '../../common/js/leaderEcharts/leaderDataConfig.js';
  export default {
    name: 'hello',
    data() {
      return {
        leaderData: leaderData
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('container-right-bottom'))
        // 绘制图表
        myChart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
            top: "20%",
            left: "10%",
            right: '10%',
            textStyle: {
              fontSize: 5
            }
          },
          grid: {
            left: '10%',
            right: '10%',
            bottom: '15%',
            containLabel: true
          },
          xAxis: {
            type: 'value'
          },
          yAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          },
          series: [{
              name: '直接访问',
              type: 'bar',
              barWidth: '15',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
              name: '邮件营销',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '联盟广告',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '视频广告',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [150, 212, 201, 154, 190, 330, 410]
            },
            {
              name: '搜索引擎',
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  show: true,
                  position: 'insideRight'
                }
              },
              data: [820, 832, 901, 934, 1290, 1330, 1320]
            }
          ]
        });
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
    width: 42px;
    height: 42px;
    background: url(../../../static/image/krb_t_left.png) no-repeat left top;
  }

  .bj .topright_l {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 42px;
    height: 42px;
    background: url(../../../static/image/krb_t_right.png) no-repeat right top;
  }

  .bj .topcenter_l {
    margin-left: 42px;
    width: auto;
    margin-right: 42px;
    height: 42px;
    background: url(../../../static/image/k_t_center.png) repeat-x top;
  }

  .bj .botleft_l {
    float: left;
    width: 125px;
    height: 43px;
    background: url(../../../static/image/krb_b_left.png) no-repeat left bottom;
  }

  .bj .botright_l {
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 42px;
    height: 42px;
    background: url(../../../static/image/krb_b_right.png) no-repeat right bottom;
  }

  .bj .botcenter_l {
    margin-left: 125px;
    width: auto;
    margin-right: 42px;
    height: 43px;
    background: url(../../../static/image/k_b_center.png) repeat-x bottom;
  }

  .bj .footleft {
    position: absolute;
    bottom: 0px;
    height: 42px;
    width: 100%;
  }

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
    background: url(../../../static/image/kr_c_left.png) repeat-y left;
  }

  .centerleft .cen_right {
    float: right;
    width: 50%;
    #width: 49%;
    height: 100%;
    background: url(../../../static/image/k_c_right.png) repeat-y right;
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
    padding-top: 1rem;
    /* padding: 30px 12px 22px; */
    position: absolute;
    top: 0px;
    z-index: 13;
    left: 0px;
  }
</style>
