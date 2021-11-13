const app = Vue.createApp({
    data() {
        return {
            counter : 1
        }
    },

    methods: {
        plusButton() {
            // console.log('tombol tambah')
            this.counter++
        },
        minusButton() {
            this.counter--
        }
    } 
})

app.mount('#app')