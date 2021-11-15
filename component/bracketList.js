app.component("brackets-list", {
  template:
    /*html*/
    `<table class="brackets-list" align="center">
      <tr class="attributs">
        <th width="10px">No</th>
        <th width="400px">Nama Produk</th>
        <th width="50px">Harga</th>
        <th width="40px">Diskon</th>
        <th width="90px">Total</th>
      </tr>
      <tr class="contents">
        <td align="center">{{ no }}</td>
        <td>{{ name }}</td>
        <td align="center">{{ price }}</td>
        <td align="center">{{ diskon }}</td>
        <td align="center">{{ total }}</td>
      </tr>
      <tr>
        <td><button class="plus" @click="backToIndex()">Tambah</button></td>
        <td><button class="buy">Bayar</button></td>
    </tr>  
    </table>`,
  data() {
    return {
      no: 1,
      name: "Lidah Buaya",
      diskon: 0,
      price: 5000,
      total: 5000,
    };
  },
  methods: {
    backToIndex: function () {
      window.location.href = "./index.html";
    },
  },
});
