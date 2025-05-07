<script setup lang="ts">
import { ref, onUnmounted, watch } from 'vue';
import BasePlayButton from "./timers/UI/BasePlayButton.vue"
import BaseCount from "./timers/UI/BaseCount.vue";


const props = defineProps<{
    setComponent: (value: null) => void,

}>()

const inputHours = ref(0)
const inputMinutes = ref(0)
const inputSeconds = ref(0)

const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

const counting = ref(false)
let timer: number

const startCountdown = () => {
    // Sayımı sıfırla ve input değerleriyle başlat
    hours.value = inputHours.value
    minutes.value = inputMinutes.value
    seconds.value = inputSeconds.value
    counting.value = true

    clearInterval(timer) // varsa önceki sayaç iptal

    timer = setInterval(() => {
        if (hours.value === 0 && minutes.value === 0 && seconds.value === 0) {
            clearInterval(timer)
            counting.value = false
            return
        }

        if (seconds.value > 0) {
            seconds.value--
        } else {
            if (minutes.value > 0) {
                minutes.value--
                seconds.value = 59
            } else if (hours.value > 0) {
                hours.value--
                minutes.value = 59
                seconds.value = 59
            }
        }
    }, 1000)

    inputHours.value = 0;
    inputMinutes.value = 0;
    inputSeconds.value = 0;

}

onUnmounted(() => {
    clearInterval(timer)
})

const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`
}

watch([inputHours, inputMinutes, inputSeconds], () => {

    if (inputHours.value > 23) {
        inputHours.value = 0;
    }
    if (inputMinutes.value > 59) {
        inputMinutes.value = 0;
    }
    if (inputSeconds.value > 59) {
        inputSeconds.value = 0;
    }

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
                Chronometer
            </h1>
        </header>

        <main>


            <div v-if="counting"
                class="countdown flex justify-center text-center gap-12 sm:gap-32 mt-14 sm:mt-20 overflow-hidden">
                <BaseCount :count="formatNumber(hours)" label='Hours' />
                <BaseCount :count="formatNumber(minutes)" label='Minutes' />
                <BaseCount :count="formatNumber(seconds)" label='Seconds' />
            </div>

            <!-- <div class="flex justify-center items-center pt-6 gap-1 lg:gap-32"> -->
            <!-- <hr> -->

            <!-- <label class="block text-sm mb-1 text-center ">Hours:</label>
                    <input type="text" v-model="inputHours" min="0" max="24"
                        class=" text-pColor text-center rounded px-10 sm:px-5 font-redhatFont outline-none border border-[#FF2849]" /> -->


            <!-- <label class="block mb-2 text-sm font-medium text-white dark:text-white">Select a
                        number:</label>
                    <input type="number"
                        class="bg-gray-50 border border-gray-300 py-5 px-0 text-center  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Hours" required /> -->



            <!-- <label class="block text-sm mb-1 text-center  mr-4">Minutes:</label>
                    <input type="number" v-model="inputMinutes" min="0" max="60"
                        class=" text-pColor text-center rounded px-10 sm:px-20 font-redhatFont outline-none border border-[#FF2849]" /> -->


            <!-- <label for="number-input" class="block mb-2 text-sm font-medium text-white dark:text-white">Select a
                        number:</label>
                    <input type="number" id="number-input" aria-describedby="helper-text-explanation"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Hours" required /> -->




            <!-- <label class="block text-sm mb-1 text-center mr-4">Seconds:</label>
                    <input type="number" v-model="inputSeconds" min="0" max="60"
                        class=" text-pColor text-center rounded px-10 sm:px-20 font-redhatFont outline-none border border-[#FF2849] " /> -->


            <!-- <label for="number-input" class="block mb-2 text-sm font-medium text-white dark:text-white">Select a
                        number:</label>
                    <input type="number" id="number-input" aria-describedby="helper-text-explanation"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Hours" required /> -->
            <!-- </div> -->
            <hr>
            <div class="flex justify-center items-center pt-6 gap-1 lg:gap-52">
                <div>
                    <label for="code-1" class="sr-only">First code</label>
                    <input type="text" maxlength="2"
                        class="block w-9 h-9 py-3 text-sm font-redhatFont text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required />
                </div>
                <div>
                    <label for="code-1" class="sr-only">First code</label>
                    <input type="text" maxlength="2"
                        class="block w-9 h-9 py-3 text-sm font-redhatFont text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required />
                </div>
                <div>
                    <label for="code-1" class="sr-only">First code</label>
                    <input type="text" maxlength="2"
                        class="block w-9 h-9 py-3 text-sm font-redhatFont text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        required />
                </div>
            </div>




            <div class="flex justify-center items-center pt-6 gap-1 lg:gap-32">
                <button @click="startCountdown"
                    class="button w-28 h-7 p-4 flex justify-center items-center bg-[#ff284818] rounded-2xl border-none cursor-pointer hover:bg-[#ff284839]">
                    <BasePlayButton />
                </button>
            </div>


        </main>
        <footer
            class="socials bg-hills bg-cover bg-no-repeat overflow-hidden fixed bottom-0 w-full min-h-36 lg:min-h-44 md:min-h-40 ">
        </footer>
    </div>
</template>
