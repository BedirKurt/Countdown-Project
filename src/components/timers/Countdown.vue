<script setup lang="ts">
import { ref, watch, onBeforeUnmount } from 'vue';
import BasePlayButton from "./UI/BasePlayButton.vue"
import BaseCount from "./UI/BaseCount.vue";
import BasePauseButton from './UI/BasePauseButton.vue';
import BaseResetButton from './UI/BaseResetButton.vue';

const props = defineProps<{
    setComponent: (value: null) => void,

}>()

const showModal = ref(false)


function openModal() {
    showModal.value = true
}


const inputHours = ref('')
const inputMinutes = ref('')
const inputSeconds = ref('')

const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

const counting = ref(false)
const isRunning = ref(false)
let timer: number | null = null


function formatNumber(num: number): string {
    return num < 10 ? "0" + num : num.toString();
}

watch([inputHours, inputMinutes, inputSeconds], () => {
    if (Number(inputHours.value) > 23) inputHours.value = '23'
    if (Number(inputMinutes.value) > 59) inputMinutes.value = '59'
    if (Number(inputSeconds.value) > 59) inputSeconds.value = '59'
})



function startCountdown() {

    if (inputHours.value === '' && inputMinutes.value === '' && inputSeconds.value === '') {
        openModal()
        return counting.value = false
    }

    if (!counting.value) {
        hours.value = Number(inputHours.value) || 0
        minutes.value = Number(inputMinutes.value) || 0
        seconds.value = Number(inputSeconds.value) || 0
        counting.value = true
    }

    isRunning.value = true
    timer = setInterval(countdown, 1000)
}

function pauseCountdown() {
    isRunning.value = false
    if (timer) clearInterval(timer)
    timer = null
}

function resetCountdown() {
    pauseCountdown()
    counting.value = false

    inputHours.value = ''
    inputMinutes.value = ''
    inputSeconds.value = ''

    hours.value = 0
    minutes.value = 0
    seconds.value = 0
}

function countdown() {
    if (!isRunning.value) return

    if (hours.value === 0 && minutes.value === 0 && seconds.value === 0) {
        resetCountdown()
        return
    }

    if (seconds.value > 0) {
        seconds.value--
    } else if (minutes.value > 0) {
        minutes.value--
        seconds.value = 59
    } else if (hours.value > 0) {
        hours.value--
        minutes.value = 59
        seconds.value = 59
    }
}

onBeforeUnmount(() => {
    if (timer) clearInterval(timer)
})

</script>


<template>
    <div class="min-h-screen bg-stars bg-cover bg-no-repeat overflow-hidden">

        <header class="overflow-hidden flex flex-col items-center justify-center">
            <button
                class="text-sm font-medium text-white bg-countdownP hover:bg-gray-700 px-10 py-1 hover:px-16 rounded-xl transition-[padding] duration-500 rounded-b-full hover:text-pColor"
                @click="props.setComponent(null)">
                Back
            </button>
            <h1
                class="text-center text-[#FF2849] uppercase tracking-[1vw] sm:tracking-[0.5vw] max-w-screen text-2xl pt-28 sm:pt-36 md:pt-32 lg:pt-44 font-redhatFont">
                Countdown
            </h1>
        </header>

        <main>

            <div v-if="!counting"
                class="countdown flex justify-center text-center gap-12 sm:gap-32 mt-14 sm:mt-20 overflow-hidden">

                <div class="time-box">
                    <p
                        class="w-20 sm:w-28 h-20 sm:h-28 flex items-center justify-center text-3xl sm:text-6xl rounded-full font-redhatFont bg-countdownP text-pColor ">
                        <input type="text" maxlength="2" v-model="inputHours"
                            class="focus:outline-none focus:ring-0 w-20 sm:w-28 h-20 sm:h-28 flex text-center items-center justify-center text-3xl sm:text-6xl rounded-full font-redhatFont bg-countdownP text-orange-400"
                            required />
                    </p>
                    <h3 class="uppercase tracking-widest text-xs font-redhatFont pt-2 text-cdh3Color">
                        Hours
                    </h3>
                </div>
                <div class="time-box">
                    <p
                        class="w-20 sm:w-28 h-20 sm:h-28 flex items-center justify-center text-3xl sm:text-6xl rounded-full font-redhatFont bg-countdownP text-pColor ">
                        <input type="text" maxlength="2" v-model="inputMinutes"
                            class="focus:outline-none focus:ring-0 w-20 sm:w-28 h-20 sm:h-28 flex text-center items-center justify-center text-3xl sm:text-6xl rounded-full font-redhatFont bg-countdownP text-orange-400"
                            required />
                    </p>
                    <h3 class="uppercase tracking-widest text-xs font-redhatFont pt-2 text-cdh3Color">
                        Minutes
                    </h3>
                </div>
                <div class="time-box">
                    <p
                        class="w-20 sm:w-28 h-20 sm:h-28 flex items-center justify-center text-3xl sm:text-6xl rounded-full font-redhatFont bg-countdownP text-pColor ">
                        <input type="text" maxlength="2" v-model="inputSeconds"
                            class="focus:outline-none focus:ring-0 w-20 sm:w-28 h-20 sm:h-28 flex text-center items-center justify-center text-3xl sm:text-6xl rounded-full font-redhatFont bg-countdownP text-orange-400"
                            required />
                    </p>
                    <h3 class="uppercase tracking-widest text-xs font-redhatFont pt-2 text-cdh3Color">
                        Seconds
                    </h3>
                </div>
            </div>


            <div v-else
                class="countdown flex justify-center text-center gap-12 2xl:gap-32 mt-14 sm:mt-20 overflow-hidden shadow-inner">
                <BaseCount :count="formatNumber(hours)" label='Hours' />
                <BaseCount :count="formatNumber(minutes)" label='Minutes' />
                <BaseCount :count="formatNumber(seconds)" label='Seconds' />
            </div>


            <div class="relative flex justify-center items-center pt-6 h-12 mx-auto container ">
                <div>
                    <transition name="fade">
                        <button @click="startCountdown" :disabled="isRunning"
                            class="absolute transition-all duration-500 button w-28 h-7 p-4 flex justify-center items-center bg-[#ff284818] rounded-2xl border-none cursor-pointer hover:bg-[#ff284839]"
                            :class="isRunning ? 'left-[calc(40%-9rem)] xl:left-[calc(40%-9rem)]' : 'left-1/2 -translate-x-1/2'">
                            <BasePlayButton />
                        </button>
                    </transition>
                    <transition name="fade">
                        <button v-if="isRunning" @click="pauseCountdown"
                            class="absolute left-1/2 -translate-x-1/2 transition-opacity duration-500 button w-32 h-7 p-5 flex justify-center items-center bg-[#ff284818] rounded-2xl border-none cursor-pointer hover:bg-[#ff284839]">
                            <BasePauseButton />
                        </button>
                    </transition>
                    <transition name="fade">
                        <button v-if="isRunning" @click="resetCountdown"
                            class="absolute transition-opacity duration-500 button w-28 h-7 p-4 mt-1 lg:mt-1 flex justify-center items-center bg-[#ff284818] rounded-2xl border-none cursor-pointer hover:bg-[#ff284839] custom-button-position">
                            <BaseResetButton />
                        </button>
                    </transition>
                </div>
            </div>
            <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div
                    class="bg-countdownP rounded-2xl p-6 shadow-lg max-w-56  md:max-w-96 w-full text-center hover:scale-125 transform ease-in-out duration-700">
                    <h2 class="text-xl font-semibold text- mb-2 text-[#FF2849]">Warning</h2>
                    <p class="text-white mb-4 font-redhatFont">
                        Please enter an <em class="text-[#FF2849]">hour</em>, <em class="text-[#FF2849]">minute</em>, or
                        <em class="text-[#FF2849]">second</em> value to start the timer.
                    </p>
                    <button @click="showModal = false"
                        class="mt-2 px-9 font-redhatFont bg-countdownP border button  hover:bg-gray-800 text-[#FF2849] rounded-lg transition">
                        OK
                    </button>
                </div>
            </div>
        </main>

        <footer
            class="socials bg-hills bg-cover bg-no-repeat overflow-hidden fixed bottom-0 w-full min-h-36 lg:min-h-44 md:min-h-40 ">
        </footer>
    </div>
</template>
