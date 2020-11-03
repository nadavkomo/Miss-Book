import { bookService } from '../../services/book-service.js'

export default {
    template: `
    <section class="book-add">
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
            books: null
        }
    },
    methods: {
        addBook(currBook) {
            bookService.add(currBook)
                // .then(() => {
                //     const msg = {
                //         txt: 'Car Saved Successffully',
                //         type: 'success'
                //     }
                //     eventBus.$emit('show-msg', msg)
                // })
                // .catch(err => {
                //     console.log('ERR:', err);
                //     const msg = {
                //         txt: 'Couldnt save your car',
                //         type: 'danger'
                //     }
                //     eventBus.$emit('show-msg', msg)
                // })

        }
    },
    created() {
        this.books = bookService.getBooksApi()
    }
}