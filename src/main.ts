import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import BrowseAll from './pages/BrowseAll.vue'
import DefaultPage from './pages/DefaultPage.vue'
import './global.css'

interface Route {
	path: string
	name: string
	component: any
}

const routes: Route[] = [
	{
		path: '/',
		name: 'BrowseAll',
		component: BrowseAll,
	},
	// Temporary route
	{
		path: '/:id',
		name: 'Default',
		component: DefaultPage,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		// always scroll to top
		return { top: 0 }
	},
})

router.beforeEach((toRoute, _, next) => {
	const metaTitle = toRoute?.meta?.title as string
	const metaDesc = toRoute?.meta?.description as string

	window.document.title = metaTitle || 'Visie-vue-test'
	if (metaDesc) {
		addMetaTag(metaDesc)
	}
	next()
})

const addMetaTag = (value: string) => {
	const element = document.querySelector(`meta[name='description']`)
	if (element) {
		element.setAttribute('content', value)
	}
}

createApp(App).use(router).mount('#app')

export default router
