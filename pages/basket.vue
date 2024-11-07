<template>
  <div>
   {{ basket }}
  </div>
</template>

<script setup>
import { useProductsStore } from '~/stores/products';
import { storeToRefs } from 'pinia';
const store=useProductsStore()
const {basket}=storeToRefs(store)
</script>

<style>

</style>