import { bookService } from '../../services/book-service.js'

export default {
    template: `
    <section class="book-add">
        <ul>
            <li v-for="book in books" :key="book.id">
                <ul>
                    <li class="book-name">{{book.volumeInfo.title}}</li>
                    <li class="add-btn">+</li>
                </ul>           
            </li>
        </ul>
    </section>
    `,
    data() {
        return {
            books: null
        }
    },
    created() {
        this.books = bookService.getBooksApi()
    }
}