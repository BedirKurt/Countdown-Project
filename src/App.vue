<script setup lang="ts">
import { shallowRef } from 'vue';
import BaseMain from './components/main/BaseMain.vue';


const currentComponent = shallowRef(BaseMain);
function newComp(activeComponent: any) {
  currentComponent.value = activeComponent
}

</script>


<template>
  <component :is="currentComponent" @countdown-comp="newComp" @back-main="newComp" @standart-countdown="newComp" />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
