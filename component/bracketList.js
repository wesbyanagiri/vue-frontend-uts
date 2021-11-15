app.component("brackets-list", {
  template:
    /*html*/
    `<table class="brackets-list" align="center">
      <tr class="attributs">
        <th width="20px">No</th>
        <th width="200px">Nama Produk</th>
        <th width="50px">Harga</th>
        <th width="40px">Diskon</th>
        <th width="90px">Total</th>
      </tr>

      <tr class="contents">
        <td align="center">1</td>
        <td>Nama</td>
        <td align="center">Harga</td>
        <td align="center">-</td>
        <td align="center">Total</td>
      </tr>
      <tr>
        <button class="plus">Tambah</button>
        <button class="buy">Bayar</button>
      </tr>
    </table>`,
});
