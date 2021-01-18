import { bookService } from '../../services/book-service.js'

export default {
    name: 'book-add',
    template: `
    <section class="book-add">
            <h3>Add any book from you like from our list</h3>
            <form @submit.prevent="search">
                <input type="text" name="search-book" v-model="searchBook" placeholder="Search book">
                <button>🔍</button>
            </form>
        <ul>
            <li v-for="currBook in books" :key="currBook.id">
                <span class="book-name">{{currBook.volumeInfo.title}}</span>
                <button class="add-btn" @click="addBook(currBook)">+</button>
            </li>
        </ul>
    </section>
    `,
    data() {
        return {
            books: null,
            searchBook: null
        }
    },
    methods: {
        search() {
            console.log(this.searchBook);
            bookService.loadBooks(this.searchBook)
                .then((res) => this.books = res.items)
        },
        addBook(currBook) {
            bookService.add(currBook)
        }
    },
    created() {}
}