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
        <div id="container-right-bottom" class="tubiaocont" style="overflow:visible;">

        </div>
      </div>
      <div class="tab-echarts" style="margin-top: 18px;">
        <div class="tab-itemBox" :class="leaderData.tabSwitch.rightTwo==1?'tab-tips':''" @click="leaderData.tabSwitch.rightTwo=1">
          综合
        </div>
        <div class="tab-itemBox" :class="leaderData.tabSwitch.rightTwo==2?'tab-tips':''" @click="leaderData.tabSwitch.rightTwo=2">
          警察
        </div>
        <div class="tab-itemBox" :class="leaderData.tabSwitch.rightTwo==3?'tab-tips':''" @click="leaderData.tabSwitch.rightTwo=3">
          法检
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  let echarts = require('echarts/lib/echarts');
  // 引入柱状图组件
  require('echarts/lib/chart/bar');
  require("echarts/lib/component/legend");
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');
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
      drawLine(legendArry,itemId,itemColorArry,xDataArry,yDataArry,echartsDataArry) {
        echartsDataArry=[['100', "33.33", "11.47", '20.17', "27.97", '11.32'],['0', "0", "4.91", '8.01', "6.21", '28.30'],['0', "0", "4.91", '8.01', "6.21", '28.30'],['0', "0", "4.91", '8.01', "6.21", '28.30'],['0', "0", "4.91", '8.01', "6.21", '28.30'],['0', "0", "4.91", '8.01', "6.21", '28.30']]
        
        echartsDataArry.forEach()
        
        var legend_array = ['不满2年', '2年至不满3年', '3年至不满4年', '4年至不满5年', '5年至不满6年', '6年及以上']
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('container-right-bottom'))
        // 绘制图表
        myChart.setOption({
          color: ['#7F11C1', '#A820C6', '#C95AE4', '#0083C1', '#3270FF', '#0045DF'],
          tooltip: { //提示框组件，当
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            show: true,
            confine: false
          },
          legend: { //图例对象
            data: legend_array,
            itemGap: 3,
            left: '8%',
            right: '10%',
            top:  0,
            itemHeight: 8, //图例图形高度
            itemWidth: 12, //图例图形宽度
            textStyle: {
              color: '#C1C1E4',
              fontSize: 8
            }
          },
          grid: { //边距
            top: 40, //距离容器上边界40像素
            bottom: 0, //距离容器下边界30像素
            left: 0,
            right: 10,
            containLabel: true
          },
          xAxis: {
            type: 'value',
            nameTextStyle: {
              fontSize: 8
            },
            axisLine: {
              lineStyle: {
                color: '#0087ED',
                width: 1
              }
            },
            min: 0,
            max: 100,
            axisLabel: { //坐标轴刻度标签的相关设置
              interval: 'auto', //刻度标签的间隔
              formatter: '{value}%', //刻度标签的内容格式
              fontSize: 8 //控制x轴字体的大小
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: true,
              length: 3,
              lineStyle: {
                opacity: 0.5
              }
            },
            show: true
          },
          yAxis: {
            type: 'category',
            data: ["科员及其他", "副科", "正科", "副处", "正处", "副厅"],
            axisLine: {
              lineStyle: {
                color: '#0087ED',
                width: 1
              }
            },
            axisTick: {
              show: true,
              length: 3,
              lineStyle: {
                opacity: 0.5
              }
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              interval: 0,
              rotate: 0, //字体倾斜角度
              fontSize: 8 // 让字体变大
            }
          },
          series: [{
              name: legend_array[0],
              type: 'bar',
              stack: '总量',
              barWidth: 12,
              label: {
                normal: {
                  position: 'insideRight'
                }
              },
              data: ['100', "33.33", "11.47", '20.17', "27.97", '11.32'],
              z: 10
            },
            {
              name: legend_array[1],
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  position: 'insideRight'
                }
              },
              data: ['0', "0", "4.91", '8.01', "6.21", '28.30'],
              z: 10
            },
            {
              name: legend_array[2],
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  position: 'insideRight'
                }
              },
              data: ['0', "11.11", "3.27", '19.58', "53.88", '16.98'],
              z: 10
            },
            {
              name: legend_array[3],
              type: 'bar',
              stack: '总量',
              label: {
                normal: {
                  position: 'insideRight'
                }
              },
              data: ['0', "0", "1.67", '4.15', "4.55", '3.77'],
              z: 10
            },
            {
              name: legend_array[4],
              type: 'bar',
              stack: '总量',
              label: {
                normal: {

                  position: 'insideRight'
                }
              },
              data: ['0', "0", "1.67", '4.15', "4.55", '3.77'],
              z: 10

            },
            {
              name: legend_array[5],
              type: 'bar',
              stack: '总量',
              label: {
                normal: {

                  position: 'insideRight'
                }
              },
              data: ['0', "0", "1.67", '4.15', "4.55", '3.77'],
              z: 10

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
    z-index: 1;
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
    height: calc(100% - 1rem);
  }
</style>
