<template>
  <div>

    <div v-for="brand in brands" :key="brand.id">
<label for="brand">{{ brand.title }}</label>
<input type="checkbox">
</div>

    <div v-for="nav in products" :key="nav.id" >
       <button @click="pushToTheBasket(nav)">+</button>
       <button @click="pushOutOfTheBasket(nav)">-</button>
       {{ nav.type }} {{ nav.regular_price.value }} РУБ</div>
<p v-for="b in basket" :key="b">{{ b.id }}</p>
  </div>
</template>

<script  setup>
import { useProductsStore } from '~/stores/products';
import { storeToRefs } from 'pinia';
const store=useProductsStore()
const {products,basket,brands}=storeToRefs(store)

function pushToTheBasket(x){
basket.value.push(x)
}
function pushOutOfTheBasket(x){
const index=computed(()=>{
  return basket.value.filter(i=>i==x)
})
if(index.value.length>0){
  basket.value.splice(basket.value.lastIndexOf(x),1)
}
  
  }
</script>

<style>

</style>