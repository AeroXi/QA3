// import Vue from 'vue'
import {createRouter,createWebHashHistory} from "vue-router";
import QuestionFeed from "./view/QuestionFeed.vue"
// Vue.use( Router )
const router = createRouter( {
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			component: QuestionFeed,
			name: 'QuestionFeed'
		},
        
		// {
		// 	path: '/question',
		// 	component: question,
		// 	name: 'question'
		// },
		
	]
} )
export default router