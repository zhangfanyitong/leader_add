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
    <div class="cengdiv" id="lxstyle-message-content">
      <h1>填报机构及人员概况</h1>
    </div>

  </div>
</template>

<script>
</script>

<style scoped>
  {
    width: 100%;
    height: 100%;
    padding-bottom: 5px;
    position: relative;
    z-index: 1;
  }

  .bj {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
  }

  .bj .topleft_l {
    float: left;
    width: 41px;
    height: 42px;
    background: url(../../../static/image/kb_t_left.png) no-repeat -1px top;
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
    margin-left: 41px;
    width: auto;
    margin-right: 42px;
    height: 42px;
    background: url(../../../static/image/k_t_center.png) repeat-x top;
  }

  .bj .botleft_l {
    float: left;
    width: 49px;
    height: 43px;
    background: url(../../../static/image/kr_b_left.png) no-repeat left bottom;
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
    margin-left: 49px;
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

  .centerleft {
    width: 100%;
    height: 100%;
    padding: 42px 0px 43px 0px;
    position: absolute;
    z-index: 0;
    #padding: 0px 0px 0px 0px;
  }

  .centerleft .cen_left {
    float: left;
    width: 50%;
    height: 100%;
    background: url(../../../static/image/kc_c_left.png) repeat-y left;
  }

  .centerleft .cen_right {
    float: left;
    width: 48.4%;
    #width: 49%;
    height: 100%;
    background: url(../../../static/image/kc_c_right.png) repeat-y right;
  }

  .cengdiv {
    width: 100%;
    height: 100%;
    padding: 10px 10px 20px;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 13;
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

    font-size: 1rem;
   
    color: #A8CEF4;
  }
</style>
