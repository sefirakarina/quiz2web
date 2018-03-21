

import Operator from '../../utils/model/operator/index';

import BookModel from '../../models/book/login.model';
import 	BookService from '../../services/book/login.service';



//import config from '../../services/config.js';

import LoadingPanel from '../commons/loading-pannel/loading-panel.common.vue';
import ErrorPanel  from '../commons/error-pannel/error-pannel.common.vue';
import Toast from '../commons/toast/toast.common.vue';

export default {
	components: {
		'loading-panel': LoadingPanel,
		'error-panel': ErrorPanel,
		'toast': Toast
	},
	data() {
		return {
			message: 'Add book',
			description: 'Create new books at this page',
			bookConfig: {
				loading: true,
				error: false
			},
			book: BookModel,
			books: []
		}
	},
	
	methods: {
		
		storeBook() {
			BookService.store(this, this.book)
			.then(
				res => {
					this.books.push(Operator.single(BookModel, res.body.data ));
					localStorage.setItem('accessToken','Bearer '+ res.body.data.token);
					this.book = Operator.reset(BookModel);
					this.$router.push({ path:'/' });
					//window.localStorage.setItem('token',JSON.stringify(localStorage.getItem('JWTtoken')));
					/*const authUser={};
					authUser.token=res.body.data.token;
					window.localStorage.setItem('authUser',JSON.stringify(authUser));

					this.$http.get(config.userUrl,{headers:config.getHeader})
						.then(
							res=>{
								
							}
						)*/
					//window.location.href = 'https://contoh.gamelabnetwork.com/api/item';
					//this.$route.router.go('/item');
					//next('/user');
					//Router.push('/item');
					
				},
				err => {
					this.$refs.toast.setMessage('Error store book,check your input again');
					this.$refs.toast.show();
				}
			)
		},
		
		
		
	}
}
/*

export default {
	components: {
		'loading-panel': LoadingPanel,
		'error-panel': ErrorPanel,
		'toast': Toast
	},
	data() {
		return {
			message: 'Add book',
			description: 'Create new books at this page',
			bookConfig: {
				loading: true,
				error: false
			},
			book: BookModel,
			books: [],

			bookk:BookkModel,
			bookks:[]
		}
	},
	
	methods: {
		
		storeBook() {
			BookService.store(this, this.book)
			.then(

				res => {
					this.books.push(Operator.single(BookModel, res.body.data ));
					localStorage.setItem('accessToken','Bearer '+ res.body.data.token);
					this.book = Operator.reset(BookModel);
					this.$router.push({ path:'/item' });
					//window.localStorage.setItem('token',JSON.stringify(localStorage.getItem('JWTtoken')));
					/*const authUser={};
					authUser.token=res.body.data.token;
					window.localStorage.setItem('authUser',JSON.stringify(authUser));

					this.$http.get(config.userUrl,{headers:config.getHeader})
						.then(
							res=>{
								
							}
						)*/
					//window.location.href = 'https://contoh.gamelabnetwork.com/api/item';
					//this.$route.router.go('/item');
					//next('/user');
					//Router.push('/item');
					
		/*		},

				err => {
					this.$refs.toast.setMessage('Error store book,check your input again');
					this.$refs.toast.show();
				}
			)
		},	
	}
}
*/