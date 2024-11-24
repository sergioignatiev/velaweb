<template>
  <div>
  
    <button class="btn btn-success" @click="open=true">Открыть</button>
   <TheModalWindow
   :modal="mockFolders"
   :open="open" @pass-submit="open=false"/>

  </div>
</template>

<script lang="ts" setup>
import { mockFolders } from '~/assets/data';

const open=ref(false)

</script>

<style>

</style>