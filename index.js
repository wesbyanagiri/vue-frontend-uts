const app = Vue.createApp({
  data() {
    return {
      stock: 200,
      counter: 1,
    };
  },

  methods: {
    plusButton() {
      // console.log('tombol tambah')
      this.counter++;
    },
    minusButton() {
      this.counter--;
    },
  },
});
