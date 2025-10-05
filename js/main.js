new Vue({
    el: '#app',
    data: {
        currentPage: 'page1'
    },
    computed: {
        currentPageComponent: function() {
            return this.currentPage;
        }
    }
});
