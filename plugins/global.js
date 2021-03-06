import Vue from 'vue'

import VueMarkdown from 'vue-markdown'

import Element from 'element-ui'
import local from 'element-ui/lib/locale/lang/ru-RU'

import VueAwesomeSwiper from 'vue-awesome-swiper'

import DateFilter from '@/common/date.filter'

Vue.use(Element, {local})
Vue.use(VueAwesomeSwiper)
Vue.component('vue-markdown', VueMarkdown)
Vue.filter('date', DateFilter)
