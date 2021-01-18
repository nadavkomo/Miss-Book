import { bookService } from '../services/book-service.js'
import longText from '../cmps/book/long-text.cmp.js'
import reviewAdd from '../cmps/book/review-add.cmp.js'
import bookReviews from '../cmps/book/book-reviews.cmp.js';


export default {
    name: 'book-details',
    template: `
        <section v-if="book" class="details-class">
            <section class="nav-btn">
                <button @click="toPrevBook">Prev</button>
                <button @click="toNextBook">Next</button>
            </section>
           <!-- <button @click="$emit('back')">back</button> -->
           <h2>{{book.title}}</h2>
           <h4>{{book.subtitle}}</h4>
           <ul class="authors-list" > Author/s:
                <li v-for="author in book.authors"><h4> {{author}}</h4></li>
            </ul>
           <img :src="book.thumbnail" />
           <h3 v-if=book.listPrice.isOnSale>For Sale!</h3>
           <h4 :class="{ 'red': checkIfExpensive, 'green': checkIfChip }">Price: {{book.listPrice.amount}}{{book.listPrice.currencyCode}}</h4>
           <long-text v-bind:txt="book.description" />
           <span v-if="pageCount">{{pageCount}}</span>
           <span class="publishedDate" v-if="publishedDate">{{publishedDate}}</span>
           <button v-if="!isReviewing" class="review-open-btn" @click="toggleReview">Review this book!</button>
            <review-add v-if="book && isReviewing" :book="book" @submitted="toggleReview"/>
            
            <book-reviews v-if="book && !isReviewing" :book="book" />


        </section>
    `,
    data() {
        return {
            book: null,
            isReviewing: false,
        }
    },
    methods: {
        toPrevBook() {
            const id = this.$route.params.bookId
            bookService.getConsBookIdById(id, -1)
                .then(consId => {
                    this.$router.push(`${consId}`)
                })
        },
        toNextBook() {
            const id = this.$route.params.bookId
            bookService.getConsBookIdById(id, 1)
                .then(consId => {
                    this.$router.push(`${consId}`)
                })
        },
        loadBook() {
            const id = this.$route.params.bookId
            bookService.getById(id)
                .then(book => this.book = book)
        },
        toggleReview() {
            this.isReviewing = !this.isReviewing;
        },
    },
    computed: {
        pageCount() {
            if (this.book.pageCount > 500) return 'Long Reading'
            else if (this.book.pageCount > 200) return 'Decent Reading'
            else if (this.book.pageCount < 100) return 'Light reading'
        },
        publishedDate() {
            if (this.book.publishedDate + 10 < new Date().getFullYear()) return 'Veteran Book';
            if (this.book.publishedDate === new Date().getFullYear()) return 'New!'
        },
        checkIfExpensive() {
            if (this.book.listPrice.amount > 150) return true
        },
        checkIfChip() {
            if (this.book.listPrice.amount < 20) return true
        }
    },
    created() {
        this.loadBook();
    },
    watch: {
        // whenever question changes, this function will run
        '$route.params.bookId' (to, from) {
            // console.log(`ROUTE CHANGED FROM ${from} TO ${to}`)
            this.loadBook();
        }
    },
    components: {
        longText,
        reviewAdd,
        bookReviews
    }
}