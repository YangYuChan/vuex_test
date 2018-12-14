<template>
  <div class="wrapper">
    <h1>Shooping Cart</h1>
    <hr>
    <h2>Products</h2>
    <ProductList></ProductList>
    <!--<hr>-->
    <!--<ShoppingCart></ShoppingCart>-->
  </div>

</template>

<script>
  import ProductList from '../components/ProductList'
  import ShoppingCart from '../components/ShoppingCart'
    export default {
        name: "ShoppingCart",
        components:{
          ProductList,
          ShoppingCart
        }
    }
</script>

<style scoped>

</style>
