import Operator from '../../utils/model/operator/index';

import BookModel from '../../models/book/user.model';
import 	BookService from '../../services/book/user.service';

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
	mounted() {
		this.bindBooks();
	},
	methods: {
		bindBooks() {
			this.bookConfig.loading = true;
			this.bookConfig.error = false;

			BookService.fetch(this)
			.then(
				 res => {
					this.books = Operator.map(BookModel, res.body.data);
					this.bookConfig.loading = false;
				},
				 err => {
					this.bookConfig.loading = false;
					this.bookConfig.error = true;
				}
			);
		},
		storeBook() {
			BookService.store(this, this.book)
			.then(
				res => {
					this.books.push(Operator.single(BookModel, res.body.data));
					this.book = Operator.reset(BookModel);
				},
				err => {
					this.$refs.toast.setMessage('Error store book,check your input again');
					this.$refs.toast.show();
				}
			)
		},
		deleteBook(book) {
			BookService.delete(this, book.id)
			.then(
				res => {
					this.books.splice(this.books.indexOf(book), 1);
				},
				err => {
					this.$refs.toast.setMessage('Error delete book');
					this.$refs.toast.show();
				}
			)
		},
		editBook(book) {
			this.books[this.books.indexOf(book)].onedit = true;
		},
		updateBook(book) {
			BookService.update(this, book.id, book)
			.then(
				res => {
					this.books[this.books.indexOf(book)].onedit = false;
				},
				err => {
					this.$refs.toast.setMessage('Error update book');
					this.$refs.toast.show();
				}
			);
		}
	}
}