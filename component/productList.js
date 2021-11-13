app.component("product-list", {
  template:
    /*html*/
    `<div class="test">
      <button v-on:click="minusButton">-</button>
      <h1>{{ counter }}</h1>
      <button v-on:click="plusButton">+</button>
    </div>`
})