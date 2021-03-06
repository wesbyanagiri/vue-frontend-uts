app.component("product-list", {
  template:
    /*html*/
    `<div class="product-list">
      <div class="header-product">
          <h1>List Produk</h1>
      </div>
      <div class="container-product" v-for="item in items" :key="item.message">
          <div class="con-product hvr-float">
              <div class="con-head">
                  <img src="https://assets.pikiran-rakyat.com/crop/0x318:1920x1687/x/photo/2020/10/21/3057328143.jpg"
                      alt="sirih gading">
              </div>
              <div class="con-body">
                  <h1>{{ price }}</h1>
                  <h4>{{ item.message }}</h4>
                  <a href="./productDetails.html" class="btn">Pesan</a>
              </div>
          </div>
          <div class="con-product hvr-float">
              <div class="con-head">
                  <img src="https://images.unsplash.com/photo-1504575749324-47f312846203?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=883&q=80"
                      alt="aglaonema">
              </div>
              <div class="con-body">
                  <h1>{{ price }}</h1>
                  <h4>{{ item.message }}</h4>
                  <a href="./productDetails.html" class="btn">Pesan</a>
              </div>
          </div>
          <div class="con-product hvr-float">
              <div class="con-head">
                  <img src="https://assets.pikiran-rakyat.com/crop/0x144:1080x1056/x/photo/2020/09/01/1407739651.jpg"
                      alt="keladi hias">
              </div>
              <div class="con-body">
                  <h1>{{ price }}</h1>
                  <h4>{{ item.message }}</h4>
                  <a href="./productDetails.html" class="btn">Pesan</a>
              </div>
          </div>
          <div class="con-product hvr-float">
              <div class="con-head">
                  <img src="https://ngopidw.com/wp-content/uploads/2019/12/lidah-mertua.jpeg" alt="lidah mertua">
              </div>
              <div class="con-body">
                  <h1>{{ price }}</h1>
                  <h4>{{ item.message }}</h4>
                  <a href="./productDetails.html" class="btn">Pesan</a>
              </div>
          </div>
      </div>
  </div>`,
  data() {
    return {
      stock: 1,
      counter: 0,
      price: 5000,
      items: [
        { message: "Sirih Gading" },
        { message: "Aglaonema" },
        { message: "Keladi Hias" },
        { message: "Lidah Mertua" },
      ],
    };
  },
  methods: {
    plusButton() {
      this.counter++;
    },
    minusButton() {
      this.counter--;
    },
    stocksPayments: function () {
      if (this.stock <= 0) {
        alert("Tanaman tidak tersedia !");
      } else if (this.stock > 0) {
        this.stock = this.stock - this.counter;
        window.location.href = "./donePage.html";
      }
    },
    stocksBuckets: function () {
      if (this.stock <= 0) {
        alert("Tanaman tidak tersedia !");
      } else if (this.stock > 0) {
        this.stock = this.stock - this.counter;
        window.location.href = "./bracketsList.html";
      }
    },
  },
});
