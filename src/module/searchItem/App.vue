<template>
  <div class="body-box">
    <div class="backImg">
      <div id="searchItemBox">
        <div calss="search-box">
          <div class="search-top">
            <!-- 面包屑 -->
            <leader-crumbs></leader-crumbs>
            <!-- 下属单位 -->
          </div>
          <!-- 查询条件 -->
          <div class="search-itemBox">
            <div class="search-item">
              <div class="search-leftItem">人员姓名：</div>
              <div class="search-rightITem">
                <input @focus="searchBottom=2" @blur="searchBottom=1" type="text" class="search-input search-inputLong"
                  name="name" id="inameval" placeholder="请输入姓名拼音或汉字">
              </div>
            </div>

            <div class="search-item">
              <div class="search-leftItem">身份证号：</div>
              <div class="search-rightITem">
                <input @focus="searchBottom=2" @blur="searchBottom=1" type="number" class="search-input search-inputLong"
                  name="name" id="sfzh" placeholder="请输入身份证号">
              </div>
            </div>

            <div class="search-item">
              <div class="search-leftItem">职务名称：</div>
              <div class="search-rightITem">
                <input @focus="searchBottom=2" @blur="searchBottom=1" type="text" class="search-input search-inputLong"
                  name="name" id="zwmc" placeholder="请输入职务名称">
              </div>
            </div>


            <div class="search-item">
              <div class="search-leftItem">简历信息：</div>
              <div class="search-rightITem">
                <input @focus="searchBottom=2" @blur="searchBottom=1" type="text" class="search-input search-inputLong"
                  name="name" id="jl" placeholder="请输入简历信息">
              </div>
            </div>

            <div class="search-item">
              <div class="search-leftItem">女少非：</div>
              <div class="search-rightITem">
                <ul>
                  <div v-for="(item) in nvshaofei" class="search-checkItem" @click="checkItem(item.value,$event)">
                    {{item.name}}
                    <input name="checkbox1" value="item.value" type="checkbox">
                  </div>
                </ul>
              </div>
            </div>

            <div class="search-item">
              <div class="search-leftItem">民族：</div>
              <div class="search-rightITem">
                <ul>
                  <div v-for="(item) in national" class="search-checkItem" @click="checkItem(item.value,$event)">
                    {{item.name}}
                    <input name="checkbox1" value="item.value" type="checkbox">
                  </div>
                </ul>
              </div>
            </div>

            <div class="search-item">
              <div class="search-leftItem">学历：</div>
              <div class="search-rightITem">
                <ul>
                  <div v-for="(item) in xueli" class="search-checkItem" @click="checkItem(item.value,$event)">
                    {{item.name}}
                    <input name="checkbox1" value="item.value" type="checkbox">
                  </div>
                </ul>
              </div>
            </div>

            <div class="search-item">
              <div class="search-leftItem">职务层级：</div>
              <div class="search-rightITem">
                <ul>
                  <div v-for="(item) in jobLevel" class="search-checkItem" @click="checkItem(item.value,$event)">
                    {{item.name}}
                    <input name="checkbox1" value="item.value" type="checkbox">
                  </div>
                </ul>
              </div>
            </div>

            <div class="search-item">
              <div class="search-leftItem">年龄：</div>
              <div class="search-rightITem"> 从
                <input @focus="searchBottom=2" @blur="searchBottom=1" type="number" class="search-input" id="minold">
                至
                <input @focus="searchBottom=2" @blur="searchBottom=1" type="number" class="search-input   " id="maxold">
                岁 <span class="bt">任现职务层次年限：</span> 从
                <input @focus="searchBottom=2" @blur="searchBottom=1" type="number" class="search-input   " id="minjobyear">
                至
                <input @focus="searchBottom=2" @blur="searchBottom=1" type="number" class="search-input   " id="maxjobyear">
                年
              </div>

            </div>

            <div class="search-item">
              <div class="search-leftItem">任现职级年限：</div>
              <div class="search-rightITem"> 从
                <input @focus="searchBottom=2" @blur="searchBottom=1" type="number" class="search-input  " id="minzjyear">
                至
                <input @focus="searchBottom=2" @blur="searchBottom=1" type="number" class="search-input  " id="maxzjyear">
                年
              </div>

            </div>

            <div class="search-item">
              <div class="search-leftItem">入党时间：</div>
              <div class="search-rightITem"> 从
                <input @focus="searchBottom=2" @blur="searchBottom=1" type="number" class="search-input" id="minrdyear">
                至
                <input @focus="searchBottom=2" @blur="searchBottom=1" type="number" class="search-input" id="maxrdyear">
                年 <span class="bt">参加工作时间：</span> 从
                <input @focus="searchBottom=2" @blur="searchBottom=1" type="number" class="search-input" id="mincjgzyear">
                至
                <input @focus="searchBottom=2" @blur="searchBottom=1" type="number" class="search-input" id="maxcjgzyear">
                年
              </div>

            </div>

            <div class="search-item">
              <div class="search-leftItem">学位：</div>
              <div class="search-rightITem">
                <ul>
                  <div v-for="(item) in degree" class="search-checkItem" @click="checkItem(item.value,$event)">
                    {{item.name}}
                    <input name="checkbox1" value="item.value" type="checkbox">
                  </div>
                </ul>
              </div>

            </div>

            <div class="search-item">
              <div class="search-leftItem">人员管理状态：</div>
              <div class="search-rightITem">
                <ul>
                  <div v-for="(item) in peopleManageStatus" class="search-checkItem" @click="checkItem(item.value,$event)">
                    {{item.name}}
                    <input name="checkbox1" value="item.value" type="checkbox">
                  </div>
                </ul>
              </div>

            </div>

            <div class="search-item">
              <div class="search-leftItem">任职状态：</div>
              <div class="search-rightITem">
                <ul>
                  <div v-for="(item) in jobStatus" class="search-checkItem" @click="checkItem(item.value,$event)">
                    {{item.name}}
                    <input name="checkbox1" value="item.value" type="checkbox">
                  </div>
                </ul>
              </div>

            </div>

            <div class="search-item">
              <div class="search-leftItem">成员类别：</div>
              <div class="search-rightITem">
                <ul>
                  <div v-for="(item) in memberStatus" class="search-checkItem" @click="checkItem(item.value,$event)">
                    {{item.name}}
                    <input name="checkbox1" value="item.value" type="checkbox">
                  </div>
                </ul>
              </div>

            </div>


            <div class="search-item">
              <div class="search-leftItem">是否领导成员：</div>
              <div class="search-rightITem">
                <ul>
                  <div v-for="(item) in leaderMember" class="search-checkItem" @click="checkItem(item.value,$event)">
                    {{item.name}}
                    <input name="checkbox1" value="item.value" type="checkbox">
                  </div>
                </ul>
              </div>

            </div>

            <div class="search-item">
              <div class="search-leftItem">是否领导职务：</div>
              <div class="search-rightITem">
                <ul>
                  <div v-for="(item) in leaderJop" class="search-checkItem" @click="checkItem(item.value,$event)">
                    {{item.name}}
                    <input name="checkbox1" value="item.value" type="checkbox">
                  </div>
                </ul>
              </div>
            </div>


            <div class="search-item">
              <div class="search-leftItem">年度考核：</div>
              <div class="search-rightITem">
                <ul>
                  <div v-for="(item) in yearAsses" class="search-checkItem" @click="checkItem(item.value,$event)">
                    {{item.name}}
                    <input name="checkbox1" value="item.value" type="checkbox">
                  </div>
                </ul>
              </div>
            </div>
            <div class="search-item">
              <div class="search-leftItem">考核结论类：</div>
              <div class="search-rightITem">
                <ul>
                  <div v-for="(item) in assesConclusion" class="search-checkItem" @click="checkItem(item.value,$event)">

                    {{item.name}}
                    <input name="checkbox1" value="item.value" type="checkbox">
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <footer :style="{'position': searchBottom==1?'fixed':'static'}" class="search-bottom">
          <div class="butt-style">
            <div class="butt-style-butt" style="float: left">确定</div>
            <div class="butt-style-butt" style="float: right" onclick="clearSearchData();">重置</div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
  // 引入组件
  import {
    leaderCrumbs
  } from '../../components/leaderEcharts';
  import {
    domReady,
    plusReady
  } from "../../common/js/ning/index.js";
  import {
    searchData
  } from '../../common/js/searchPage/searchPageData.js';
  export default {
    components: {
      leaderCrumbs
    },
    data() {
      return {

        searchBottom: 1,
        nvshaofei: searchData.nvshaofei, //女少非
        national: searchData.national, //名族
        xueli: searchData.xueli, //学历
        jobLevel: searchData.jobLevel, //职务层级
        degree: searchData.degree, //学位
        peopleManageStatus: searchData.peopleManageStatus, //人员管理状态
        jobStatus: searchData.jobStatus, //任职状态
        memberStatus: searchData.memberStatus, //成员类别
        leaderMember: searchData.leaderMember, //是否领导成员
        leaderJop: searchData.leaderJop, //领导职务
        yearAsses: searchData.yearAsses, //年度考核
        assesConclusion: searchData.assesConclusion, //考核结论类
      };
    },
    created() {

    },
    mounted() {

    },
    methods: {
     
      // 选中的事件
      checkItem(itemId, e) {
        var searchInput = e.currentTarget.firstElementChild
        if (searchInput.checked) {
          //在选中状态时，取消选中
          searchInput.removeAttribute("checked");
          e.currentTarget.classList.remove('search-checkedItem')

        } else {
          //添加选中状态
          searchInput.setAttribute("checked", "checked");
          e.currentTarget.classList.add('search-checkedItem')
        }
      },
      // 重置
      clearSearchData(){}
    }
  };
</script>
<style lang="less" scoped>
  #searchItemBox {
    width: 100%;
    height: calc(100% - 40px);
    overflow: auto;
    position: relative;
  }

  // 查询盒子
  .search-box {
    width: 100%;
    height: 96%;
    overflow: auto;
  }

  .butt-style {
    width: 40%;
    height: 30px;
    line-height: 30px;
    margin: 0 auto;
    font-size: 13px;
    margin-top: 5px;
  }

  .butt-style-butt {
    width: 26%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 4px;
    background-color: #1F3379;
    color: #C7DFF8;
    font-size: 13px;
  }

  .search-bottom {
    width: 100%;
    height: 40px;
    bottom: 0;
    background-color: #0c1a38;
    z-index: 99
  }

  .backImg {
    width: 100%;
    height: 100%;
    background: url(../../../static/image/bac.png) no-repeat 0 0;
    background-size: cover;
  }

  // 查询项
  .search-item:last-child {
    margin-bottom: 0.8rem;
  }

  .search-item {
    display: block;
    color: #FFFFFF;
    overflow: initial;
    margin-top: 0.8rem;
    font-size: 1rem;

    .search-leftItem {
      display: inline-block;
      text-indent: 3rem;
      overflow: initial;
      text-align: right;
      width: 10rem;
      vertical-align: top;
    }

    .search-rightITem {
      display: inline-block;
      text-align: left;
      text-indent: 0.5rem;
      width: calc(100% - 20rem);
      overflow: initial;

      ul {
        overflow: initial;
      }
    }
  }

  // 每个选择项
  .search-checkItem {
    display: inline-block;
    margin-right: 0.5rem;
    overflow: initial;
    margin-bottom: 0.3rem;
    padding: 0.3rem 0.5rem;

    text-indent: 0;

  }

  // 每个输入项
  .search-input {
    display: inline-block;
    width: auto;
    width: 7rem;
    height: 2rem;
    padding: 0px 6px;
    font-size: 1rem;

    line-height: 1.42857143;
    color: #C1C1E4;
    background-color: #0F1D41;
    background-image: none;
    border: 1px solid #113062;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  }

  .search-input:focus {
    border-color: #1456A7;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(0, 51, 204, .6);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(0, 51, 204, .6);
    background-color: #113164;
  }

  .search-inputLong {
    width: 15rem;
  }

  .search-checkItem input[type="checkbox"] {
    display: none;
  }

  //选中的状态
  .search-checkedItem {
    border: 0.1rem solid #5dd314;
  }
</style>
