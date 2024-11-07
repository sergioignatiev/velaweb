<template>
  <div class="nav">
    <h2 v-show="basket.length>0">{{ basket.length }}</h2>
   <nav>
    <NuxtLink class="app-link" to="/">home</NuxtLink>
    <NuxtLink class="app-link" to="/basket">Корзина</NuxtLink>
   </nav>
 <main>
    <NuxtPage/>
    </main>
  </div>
</template>

<script  setup>



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { useProductsStore } from '~/stores/products';
import { storeToRefs } from 'pinia';
const store=useProductsStore()
const {basket}=storeToRefs(store)
</script>

<style>
main{
  padding:100px;
}
</style>