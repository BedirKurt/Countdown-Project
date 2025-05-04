<script setup lang="ts">
import TimerFooter from './components/layout/TimerFooter.vue';
import TimerHeader from './components/layout/TimerHeader.vue';
import CountdownTimer from './components/CountdownTimer.vue';

</script>


<template>
  <div class="min-h-screen bg-stars bg-cover bg-no-repeat overflow-hidden">
    <TimerHeader />
    <CountdownTimer />
    <TimerFooter />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
