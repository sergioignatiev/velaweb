<template>
  <div v-show="open">
    
    <div >
     <div v-for="mock in modal" :key=mock.id>
      <TheFirstChild
      :id="mock.id"
      :name="mock.name"
      :children="mock.children"
      @submit-all="$emit('passSubmit')"
      />
      
     </div>
    </div>
  </div>
</template>

<script  setup>
defineEmits(['passSubmit'])

defineProps({
    modal:{type:Object,required:true},
    open:{type:Boolean,default:true},
  
})


</script>

<style>

</style>