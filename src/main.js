import Vue from 'vue'
import App from './App.vue'

const app = new Vue({
    // el: '#app',
    render: h => h(App),
    data() {
        return {
            x: '1',
            y: '2',
            z: '3'
        }
    }
}).$mount('#app')
console.log(Vue.config, "全局配置", app);
