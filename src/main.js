import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 导入全局样式表
import "./assets/css/global.css";

//导入字体图标
import "./assets/fonts/iconfont.css";

//导入插件
import TreeTable from "vue-table-with-tree-grid";

//引入富文本编辑器
import VueQuillEditor from "vue-quill-editor";

import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1";
axios.interceptors.request.use((config) => {
  config.headers.Authorization = window.sessionStorage.getItem("token");
  return config;
});
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

Vue.component("tree-table", TreeTable);

Vue.use(VueQuillEditor)

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
