import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';

Vue.use(Router);
Vue.use(Resource);

import AppComponent from './components/app.component.vue';
import HomeComponent from './components/home/home.component.vue';
import BookComponent from './components/book/book.component.vue';
import UserComponent from './components/book/user.component.vue';
import LoginComponent from './components/book/login.component.vue';
import CategoryComponent from './components/book/category.component.vue';

Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', localStorage.getItem('accessToken'))
  request.headers.set('Accept', 'application/json')
  next()
})

const routes = [
	{
		path : '/',
		component: HomeComponent
	},
	{
		path : '/category',
		component: CategoryComponent
	},
	{
		path: '/item',
		component: BookComponent
	},

	{
		path: '/register',
		component: UserComponent
	},
	{
		path: '/login',
		component: LoginComponent
	}

];

const router = new Router({
	routes: routes
});

new Vue({
	router: router,
	render: h => h(AppComponent)
}).$mount('#app');