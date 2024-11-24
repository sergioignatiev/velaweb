<template>
  <div>
 
  
<h1>{{ name }}</h1>
<button v-show="children" class="btn btn-info" @click="openclose=!openclose">Открыть Все В группе</button>
<button class="btn btn-danger" @click="showId(id)">OK</button>
<div v-show="openclose">
<div v-for="child in children" :key="child.id" >
    <h3>{{ child.name }}</h3>
    <h4>{{ child.id }}</h4>
    <button class="btn btn-danger" @click="showId(child.id)">OK</button>
    </div>
</div>
 
 

   
  </div>
</template>

<script lang="ts" setup>
import type { Props } from '~/interfaces/interfaces';
const openclose=ref(false)
function showId(x: unknown){
    alert(x)
  emit('submitAll')
}

defineProps<Props>()
  const emit = defineEmits([ 'submitAll'])

</script>

<style>

</style>