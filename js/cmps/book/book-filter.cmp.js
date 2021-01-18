export default {
    template: `
        <section class="book-filter">
            <h3>Filter those books</h3>
            <input type="text" v-model="filterBy.byTitle" placeholder="Search by name" @input="emitFilter" />
            <section class="extra-filters">
                <label>From price
                <input type="number" v-model="filterBy.fromPrice" @input="emitFilter" /> 
                </label>
                <label> To price
                <input type="number" v-model="filterBy.toPrice" @input="emitFilter" />
                </label>
                </section>
                <section>
                <label>
                <input type="checkbox" v-model="filterBy.isActive" @input="emitFilter" /> 
                Active Filter
                </label>
                </section>
        </section>
    `,
    data() {
        return {
            filterBy: { byTitle: '', fromPrice: 0, toPrice: null, isActive: false }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('doFilter', this.filterBy);
        }
    }
}