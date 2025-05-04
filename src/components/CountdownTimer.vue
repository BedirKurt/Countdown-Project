<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'

const Days = ref<number | string | null>(null);
const Hours = ref<number | string | null>(null);
const Minutes = ref<number | string | null>(null);
const Seconds = ref<number | string | null>(null);
let intervalId: number

function calculationTime() {
    const date = new Date('May 17,2025,00:00:00').getTime()
    const nowDate = new Date().getTime()
    const dateDifference = date - nowDate;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    let timeDays = Math.floor(dateDifference / days)
    let timeHours: string | number = Math.floor((dateDifference % days) / hours)
    let timeMinutes: string | number = Math.floor((dateDifference % hours) / minutes)
    let timeSeconds: string | number = Math.floor((dateDifference % minutes) / seconds)

    if (timeHours < 10) {
        timeHours = '0' + timeHours
    } if (timeMinutes < 10) {
        timeMinutes = '0' + timeMinutes
    } if (timeSeconds < 10) {
        timeSeconds = '0' + timeSeconds
    }
    Days.value = timeDays
    Hours.value = timeHours
    Minutes.value = timeMinutes
    Seconds.value = timeSeconds

}

onMounted(() => {
    calculationTime();
    intervalId = setInterval(calculationTime, 1000)
})

onUnmounted(() => {
    clearInterval(intervalId)
})
</script>



<template>

    <div class="countdown flex justify-center text-center gap-2 sm:gap-16 mt-14 sm:mt-36 overflow-hidden">
        <div class="time-box">
            <p
                class="w-20 sm:w-28 h-20 sm:h-28 flex items-center justify-center text-3xl sm:text-7xl rounded-md font-redhatFont bg-countdownP text-pColor">
                {{ Days }}</p>
            <h3 class="uppercase tracking-widest text-xs font-redhatFont pt-2 text-cdh3Color">Days</h3>
        </div>
        <div class="time-box">
            <p
                class="w-20 sm:w-28 h-20 sm:h-28 flex items-center justify-center text-3xl sm:text-7xl rounded-md font-redhatFont bg-countdownP text-pColor">
                {{ Hours }}</p>
            <h3 class="uppercase tracking-widest text-xs font-redhatFont pt-2 text-cdh3Color">Hours</h3>
        </div>
        <div class="time-box">
            <p
                class="w-20 sm:w-28 h-20 sm:h-28 flex items-center justify-center text-3xl sm:text-7xl rounded-md font-redhatFont bg-countdownP text-pColor">
                {{ Minutes }}</p>
            <h3 class="uppercase tracking-widest text-xs font-redhatFont pt-2 text-cdh3Color">Minutes</h3>
        </div>
        <div class="time-box">
            <p
                class="w-20 sm:w-28 h-20 sm:h-28 flex items-center justify-center text-3xl sm:text-7xl rounded-md font-redhatFont bg-countdownP text-pColor">
                {{ Seconds }}</p>
            <h3 class="uppercase tracking-widest text-xs font-redhatFont pt-2 text-cdh3Color">Seconds</h3>
        </div>
    </div>

</template>


<style scoped></style>