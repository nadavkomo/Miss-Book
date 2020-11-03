export default {
    name: 'about-page',
    template: `
     <section class="about-page">
        <h1>about us...</h1>
        <nav>
            <router-link to="/about/team">Our Team</router-link> | 
            <router-link to="/about/services">Our Services</router-link>
        </nav>
        <router-view></router-view>
        <img src="./img/homePage.png">
    </section>
    `,
}