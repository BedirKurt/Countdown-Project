<script setup>
import TimerFooter from '../layout/TimerFooter.vue';
import TimerHeader from '../layout/TimerHeader.vue';
import CountdownTimer from './CountdownTimer.vue';

import { defineEmits } from 'vue';
const emit = defineEmits()
function backMain(activeComp) {
    emit('standart-countdown', activeComp)
}

</script>


<template>
    <div class="min-h-screen bg-stars bg-cover bg-no-repeat overflow-hidden">
        <TimerHeader @back-main="backMain" />
        <CountdownTimer />
        <TimerFooter />
    </div>
</template>


<style scoped></style>