<script setup lang="ts">
import { ref } from 'vue'

const seconds = ref(0)
const minutes = ref(0)
const hours = ref(0)
const isRunning = ref(false)

let timer: number | null = null

function startTimer() {
    if (isRunning.value) return
    isRunning.value = true
    timer = setInterval(() => {
        seconds.value++
        if (seconds.value >= 60) {
            seconds.value = 0
            minutes.value++
        }
        if (minutes.value >= 60) {
            minutes.value = 0
            hours.value++
        }
    }, 1000)
}

function stopTimer() {
    isRunning.value = false
    if (timer !== null) {
        clearInterval(timer)
        timer = null
    }
}

function resetTimer() {
    stopTimer()
    seconds.value = 0
    minutes.value = 0
    hours.value = 0
}

function formatNumber(num: number): string {
    return num < 10 ? '0' + num : num.toString()
}


</script>

<template>
    <div class="countdown flex justify-center text-center gap-6 sm:gap-16 mt-14 sm:mt-36 overflow-hidden">
        <div class="time-box">
            <p
                class="w-20 sm:w-28 h-20 sm:h-28 flex items-center justify-center text-3xl sm:text-6xl rounded-full font-redhatFont bg-countdownP text-pColor">
                {{ formatNumber(hours) }}</p>
            <h3 class="uppercase tracking-widest text-xs font-redhatFont pt-2 text-cdh3Color">Hours</h3>
        </div>
        <div class="time-box">
            <p
                class="w-20 sm:w-28 h-20 sm:h-28 flex items-center justify-center text-3xl sm:text-6xl rounded-full  font-redhatFont bg-countdownP text-pColor">
                {{ formatNumber(minutes) }}</p>
            <h3 class="uppercase tracking-widest text-xs font-redhatFont pt-2 text-cdh3Color">Minutes</h3>
        </div>
        <div class="time-box">
            <p
                class="w-20 sm:w-28 h-20 sm:h-28 flex items-center justify-center text-3xl sm:text-6xl rounded-full  font-redhatFont bg-countdownP text-pColor">
                {{ formatNumber(seconds) }}</p>
            <h3 class="uppercase tracking-widest text-xs font-redhatFont pt-2 text-cdh3Color">Seconds</h3>
        </div>
    </div>

    <div class="flex flex-col items-center gap-4 p-6">
        <div class="flex gap-4">
            <button @click="startTimer" :disabled="isRunning" class="px-5 mt-5 rounded-md text-md text-pColor bg-countdownP transition-transform duration-500 hover:scale-110 tracking-widest hover:text-white font-redhatFont">
                Start
            </button>
            <button @click="stopTimer" :disabled="!isRunning" class="px-5 mt-5 rounded-md text-md text-pColor bg-countdownP transition-transform duration-500 hover:scale-110 tracking-widest hover:text-white font-redhatFont">
                Stop
            </button>
            <button @click="resetTimer" class="px-5 mt-5 rounded-md text-md text-pColor bg-countdownP transition-transform duration-500 hover:scale-110 tracking-widest hover:text-white font-redhatFont">
                Reset
            </button>
        </div>
    </div>
</template>


<style scoped></style>