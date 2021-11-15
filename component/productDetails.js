app.component("product-details", {
  template:
    /*html*/
    `<div class="product-details">
      <h1>Detail Produk</h1>
      <div class="container-details">
        <div class="con-header">
          <table>
            <tr>
              <td>
                <img
                  src="https://assets.pikiran-rakyat.com/crop/0x318:1920x1687/x/photo/2020/10/21/3057328143.jpg"
                  alt="sirih gading"
                />
              </td>
              <td valign="top" class="info">
                <div class="con-header">
                  <h2>Judul Produk</h2>
                  <h3>Harga</h3>
                  <p>Deskripsi</p>
                </div>

                <div class="quantity">
                  <button>- {{ minusButton }}</button>
                  <p>{{ counter }}</p>
                  <button>+ {{ plusButton }}</button>
                  <p>Stok {{ stock }}</p>
                </div>
                
                <div class="price">
                  <p>Subtotal</p>
                  <h3>{{ price }}</h3>
                  <button>Beli Langsung</button>
                  <button>Keranjang</button>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>`,
    data() {
      return {
        stock: 200,
        counter: 0,
        price: 5.000
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
