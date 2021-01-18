export default {
    template: `
            <section class="main-header">
                <button class="logo" @click="toHome()">Miss Book</button>
                <nav>
                  <router-link to='/book' exact>Book App</router-link>
                  <router-link to='/about' exact>About Us</router-link>
                </nav>
            </section>
    `,
    methods: {
        toHome() {
            this.$router.push('/')
        }
    },
}