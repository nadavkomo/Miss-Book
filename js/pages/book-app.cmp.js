import { bookService } from '../services/book-service.js'
import bookFilter from '../cmps/book/book-filter.cmp.js';
import bookList from '../cmps/book/book-list.cmp.js';
import bookAdd from '../cmps/book/book-add.cpm.js'

export default {
    name: 'book-app',
    template: `
        <section class="book-app">
            <h2 >Our Books</h2>
            <book-add v-if="books" />
            <book-filter @doFilter="setFilter" />
            <book-list v-if="books" @remove="removeBook" @clicked="bookClicked" :books="booksToShow" />
            <!-- <book-details :book="currBook" v-else @back="backToList"  /> -->

        </section>
    `,
    data() {
        return {
            filterBy: null,
            books: null,
            // bookDetailsShow: false,
            currBook: ''
        }
    },
    computed: {
        booksToShow() {
            if (!this.filterBy || (!this.filterBy.isActive)) {
                return this.books;
            }
            var booksFilter = []
            const txt = this.filterBy.byTitle.toLowerCase();
            booksFilter = this.books.filter(book => book.title.toLowerCase().includes(txt))

            if (!this.filterBy.fromPrice && !this.filterBy.toPrice) {
                return booksFilter
            }
            booksFilter = booksFilter.filter(book => book.listPrice.amount >= this.filterBy.fromPrice)
            if (this.filterBy.toPrice) {
                return booksFilter.filter(book => book.listPrice.amount <= this.filterBy.toPrice)
            }
            return booksFilter
        }
    },
    methods: {
        getBooksAfterPromise() {
            bookService.getBooks().then((books) => this.books = books)
        },
        // backToList() {
        //     this.bookDetailsShow = !this.bookDetailsShow
        // },
        bookClicked(currBook) {
            console.log('check');
            console.log(currBook);
            this.currBook = currBook
            this.bookDetailsShow = !this.bookDetailsShow
        },
        removeBook(bookId) {
            bookService.remove(bookId);
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        }
    },
    created() {
        this.getBooksAfterPromise()
    },
    components: {
        bookList,
        bookFilter,
        bookAdd
    }
}