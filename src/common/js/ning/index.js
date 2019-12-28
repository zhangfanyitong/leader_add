
import 'common/css/font-css.css'
import 'muse-ui/dist/muse-ui.css'
import 'common/css/reset.css'
import Vue from 'vue'
import MuseUI from 'muse-ui'
// 引入公共样式
Vue.use(MuseUI)

import VueResource from 'vue-resource'
Vue.use(VueResource)



//默认domReady事件
 
//默认plusReady事件
import plusReady from './plusReady.js'
import remconfig from'./remconfig.js'
remconfig()
module.exports = {
    
    plusReady
}
