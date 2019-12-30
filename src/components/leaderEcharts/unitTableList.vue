<template>
  <div class="body-box">
   <div class="cony_fot" style="height: 132px;">
      <div id="listheight" class="center_c_kb">
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
          <h1><span id="table_place_name">填报机构</span>及人员概况</h1>
          <div class="tubiaocont conyliest">
            <table border="0" class="table_rylb conytb">
              <thead>
                <tr>
                  <th style="width: 4%">序号</th>
                  <th style="width: 17%">单位名称</th>
                  <th style="width: 12%">
                    下级单位个数
                    <br><span style="font-size: 9px">（法人单位/内设机构）</span>
                  </th>
                  <th style="width: 11%">
                    正职领导职数
                    <br><span style="font-size: 9px">（应配）</span>
                  </th>
                  <th style="width: 11%">
                    副职领导职数
                    <br><span style="font-size: 9px">（应配）</span>
                  </th>
                  <th style="width: 12%">
                    行政编制个数
                  </th>
                  <th style="width: 12%">
                    事业编制个数
                    <br><span style="font-size: 9px">（参照）</span>
                  </th>
                  <th style="width: 5%">总人数</th>
                  <th style="width: 5%">女干部</th>
                  <th style="width: 6%">少数民族</th>
                  <th style="width: 5%">非党员</th>
                </tr>
              </thead>
              <tbody id="danwei-message-content">
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'hello',
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  .cony_fot {
  	width: 100%;
  	padding: 0 .3rem;
  }
  .center_c_kb {
  	width: 100%;
  	height: 100%;
  	padding-bottom: 5px;
  	position: relative;
  	z-index: 1;
  }

  .center_c_kb .bj {
  	position: relative;
  	z-index: 2;
  	width: 100%;
  	height: 100%;
  }

  .center_c_kb .bj .topleft_l {
  	float: left;
  	width: 41px;
  	height: 42px;
  	background: url(../../../static/image/kb_t_left.png) no-repeat -1px top;
  }

  .center_c_kb .bj .topright_l {
  	position: absolute;
  	right: 0px;
  	top: 0px;
  	width: 42px;
  	height: 42px;
  	background: url(../../../static/image/krb_t_right.png) no-repeat right top;
  }

  .center_c_kb .bj .topcenter_l {
  	margin-left: 41px;
  	width: auto;
  	margin-right: 42px;
  	height: 42px;
  	background: url(../../../static/image/k_t_center.png) repeat-x top;
  }

  .center_c_kb .bj .botleft_l {
  	float: left;
  	width: 49px;
  	height: 43px;
  	background: url(../../../static/image/kr_b_left.png) no-repeat left bottom;
  }

  .center_c_kb .bj .botright_l {
  	position: absolute;
  	right: 0px;
  	bottom: 0px;
  	width: 49px;
  	height: 43px;
  	background: url(../../../static/image/k_b_right.png) no-repeat right bottom;
  }

  .center_c_kb .bj .botcenter_l {
  	margin-left: 49px;
  	width: auto;
  	margin-right: 49px;
  	height: 43px;
  	background: url(../../../static/image/k_b_center.png) repeat-x bottom;
  }

  .center_c_kb .bj .footleft {
  	position: absolute;
  	bottom: 0px;
  	height: 43px;
  	width: 100%;
  }

  .center_c_kb .centerleft {
  	width: 100%;
  	height: 100%;
  	padding: 42px 0px 48px 0px;
  	position: absolute;
  	z-index: -1;
  	#padding: 0px 0px 0px 0px;
  }

  .center_c_kb .centerleft .cen_left {
  	float: left;
  	width: 50%;
  	height: 100%;
  	background: url(../../../static/image/kc_c_left.png) repeat-y left;
  }

  .center_c_kb .centerleft .cen_right {
  	float: right;
  	width: 50%;
  	#width: 49%;
  	height: 100%;
  	background: url(../../../static/image/kc_c_right.png) repeat-y right;
  }
  /*标题字*/
  .cengdiv {
  	width: 100%;
  	height: 100%;
  	padding: 10px 10px 20px;
  	position: absolute;
  	top: 0px;
  	left: 0px;
  	z-index: 13;


  	background: url(../../../static/image/tophbj.png) no-repeat center -1px;
  	display: block;
  }
  .center_c_kb .cengdiv h1 {
  	position: relative;
  	z-index: 30;
  	text-align: center;
  	width: 95%;
  	margin: 0 auto;
  	font-size: 1rem;
  	color: #A8CEF4;
  }
  .tubiaocont {
  	width: 100%;
  	height: 100%;
  	padding: 1.5rem 0px 10px 10px;
  	position: absolute;
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
  .conyliest {
  	padding: 45px 22px 32px;
  }
  .table_rylb {
  	border: 1px solid #11234F;
  	margin: 0px auto;
  	width: 100%;
  	color: #C1C1E4;
  	font-size: 1.1rem;
  	background: #0C1A38;
  }

  .table_rylb td,
  .table_rylb th {
  	color: #C1C1E4;
  	line-height: 1rem;
  	border-right: 1px solid #11234F;
  	border-bottom: 1px solid #11234F;
  	text-align: center;
    font-size: 0.75rem;
  	padding: 0.1rem 3px;
  }

  .table_rylb th {
  	background: #0C1A38;
  	font-weight: 400;
  	height: 34px;
  	color: #518FCE;
  }

  .table_rylb td {
  	height: 40px;
  }

  .table_rylb tr.bj,
  .table_rylb tr.odd {
  	background: #0C1B3D;
  }

  .table_rylb tr:hover {
  	background: #113164;
  }

  .table_rylb td.aleft,
  .table_rylb th.aleft {
  	text-align: left;
  	padding-left: 8px;
  }

  .table_rylb td.aright {
  	text-align: right;
  	padding-right: 8px;
  }

  .table_rylb td input.ted {
  	background: #003;
  	border: 1px solid #036;
  }
  .conytb {
  	padding: 10px 10px;
  }
</style>
