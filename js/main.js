import headerCmp from './cmps/header.cmp.js';
import footerCmp from './cmps/footer.cmp.js';
import userMsg from './cmps/user-msg.cmp.js'
import { myRouter } from './routes.js'

const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section class="app main-container">
            <header class="full">
                <header-cmp />
            </header>

            <main>
                <router-view></router-view>
            </main>

            <user-msg />

            <footer class="full">
                <footer-cmp />
            </footer>

        </section>
    `,
    components: {
        userMsg,
        headerCmp,
        footerCmp
    },

}



const app = new Vue(options);