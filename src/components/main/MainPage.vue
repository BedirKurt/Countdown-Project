<script setup lang="ts">
import BaseTimer from '../timers/BaseTimer.vue';
import BaseAnotherTimer from '../timers/another/BaseAnotherTimer.vue';

import { defineEmits } from 'vue';
const emit = defineEmits();

const standartCountdown = () => {
    emit('set-countdown', BaseTimer); // Üst bileşene 'startCountdown' event'ini gönderiyoruz
}
function anotherCountdown() {
    emit('set-countdown', BaseAnotherTimer);
}


</script>

<template>
    <div class="flex justify-center text-center gap-4 sm:gap-16 mt-14 sm:mt-36  font-redhatFont">
        <div>
            <h2 class="text-md">Standart Countdown</h2>
            <button
                class=" px-10 mt-5 rounded-md text-md text-pColor bg-countdownP transition-transform duration-500 hover:scale-110 tracking-widest hover:text-white"
                @click="standartCountdown()">Select</button>
        </div>
        <div>
            <h2 class="text-md">Another Countdown</h2>
            <button
                class=" px-10 mt-5 rounded-md text-md text-pColor bg-countdownP transition-transform duration-500 hover:scale-110 tracking-widest hover:text-white"
                @click="anotherCountdown()">Select</button>
        </div>
    </div>
</template>


<style scoped></style>