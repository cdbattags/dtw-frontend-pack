import React from 'react'
import ReactDOM from 'react-dom'
import Vue from 'vue'

import HelloVue from './hello-vue.vue'
import HelloReact from './hello-react'

const VueApp = new Vue({
    render: (h) => h(HelloVue),
}).$mount('#app-vue')

const ReactApp = ReactDOM.render(
    (<HelloReact greeting={'Hello'} />),
    document.getElementById('app-react'),
)

export default {
    vue: VueApp,
    react: ReactApp,
}
