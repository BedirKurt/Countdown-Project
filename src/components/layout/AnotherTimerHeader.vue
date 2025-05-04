<script setup lang="ts">
import BaseMain from '../main/BaseMain.vue';
import { defineEmits } from 'vue';
const emit = defineEmits();

function backMain() {
    emit('back-main', BaseMain)
}
</script>

<template>
    <header class="overflow-hidden flex flex-col items-center justify-center">
        <button @click="backMain()"
            class="text-sm font-medium text-white bg-countdownP hover:bg-gray-700 px-10 py-1 hover:px-16 rounded-xl transition-[padding]  duration-500 rounded-b-full hover:text-pColor">
            Back
        </button>
        <h1
            class="text-center text-white uppercase tracking-[1vw] sm:tracking-[0.5vw] max-w-screen text-2xl pt-28 sm:pt-40 font-redhatFont">
            Coming Soon in Development
        </h1>
    </header>
</template>


<style scoped></style>