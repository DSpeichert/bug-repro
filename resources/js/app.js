require('./bootstrap');

require('alpinejs');

const test = () => import(/* webpackChunkName: "test-chunk" */  'vue');
