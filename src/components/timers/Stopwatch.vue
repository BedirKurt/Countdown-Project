<script setup lang="ts">
import { ref, } from "vue";
import BasePauseButton from "./UI/BasePauseButton.vue";
import BasePlayButton from "./UI/BasePlayButton.vue";
import BaseResetButton from "./UI/BaseResetButton.vue";
import BaseCount from "./UI/BaseCount.vue";

const props = defineProps<{
  setComponent: (value: null) => void,

}>()

const seconds = ref<any>(0);
const minutes = ref<any>(0);
const hours = ref<any>(0);
const isRunning = ref<boolean>(false);


let timer: number | null = null;

function startTimer() {
  if (isRunning.value) return;
  isRunning.value = true;
  timer = setInterval(() => {
    seconds.value++;
    if (seconds.value >= 60) {
      seconds.value = 0;
      minutes.value++;
    }
    if (minutes.value >= 60) {
      minutes.value = 0;
      hours.value++;
    }
  }, 1000);
}

function stopTimer() {
  isRunning.value = false;
  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }
}

function resetTimer() {
  stopTimer();
  seconds.value = 0;
  minutes.value = 0;
  hours.value = 0;
}


function formatNumber(num: number): string {
  return num < 10 ? "0" + num : num.toString();
}

</script>

<template>
  <header class="overflow-hidden flex flex-col items-center justify-center">
    <button
      class="text-sm font-medium text-white bg-countdownP hover:bg-gray-700 px-10 py-1 hover:px-16 rounded-xl transition-[padding] duration-500 rounded-b-full hover:text-pColor"
      @click="props.setComponent(null)">
      Back
    </button>
    <h1
      class="text-center text-[#FF2849] uppercase tracking-[1vw] sm:tracking-[0.5vw] max-w-screen text-2xl pt-28 sm:pt-36 md:pt-32 lg:pt-36 font-redhatFont">
      Stopwatch
    </h1>
  </header>
  <main>
    <div class="countdown flex justify-center text-center gap-12 sm:gap-32 mt-14 sm:mt-20 overflow-hidden">
      <BaseCount :count="formatNumber(hours)" label='Hours' />
      <BaseCount :count="formatNumber(minutes)" label='Minutes' />
      <BaseCount :count="formatNumber(seconds)" label='Seconds' />
    </div>

    <div
      class="relative flex justify-center items-center pt-6 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 mx-auto container mt-11">

      <!-- PAUSE BUTTON -->
      <transition name="fade-slide-left">
        <button v-if="isRunning" @click="stopTimer" class="absolute top-0 sm:left-[calc(50%-9rem)] left-[calc(50%-8rem)] -translate-x-1/2
           transition-transform duration-150
           flex justify-center items-center
           bg-[#ff284818] rounded-2xl border-none cursor-pointer hover:bg-[#ff284839]
           text-sm sm:text-base md:text-lg
           w-24 sm:w-28 md:w-32 h-8 sm:h-9 md:h-10 px-3 sm:px-4 md:px-5
           active:scale-95 active:brightness-90">
          <BasePauseButton />
        </button>
      </transition>

      <!-- PLAY BUTTON -->
      <button @click="startTimer" :disabled="isRunning" class="absolute top-0 left-1/2 -translate-x-1/2
         transition-transform duration-150
         flex justify-center items-center
         bg-[#ff284818] rounded-2xl border-none cursor-pointer hover:bg-[#ff284839]
         text-sm sm:text-base md:text-lg
         w-24 sm:w-28 md:w-32 h-8 sm:h-9 md:h-10 px-3 sm:px-4 md:px-5
         active:scale-95 active:brightness-90">
        <BasePlayButton />
      </button>

      <!-- RESET BUTTON -->
      <transition name="fade-slide-right">
        <button v-if="isRunning" @click="resetTimer" class="absolute top-0 sm:left-[calc(50%+9rem)] left-[calc(50%+8rem)] -translate-x-1/2
           transition-transform duration-150
           flex justify-center items-center
           bg-[#ff284818] rounded-2xl border-none cursor-pointer hover:bg-[#ff284839]
           text-sm sm:text-base md:text-lg
           w-24 sm:w-28 md:w-32 h-8 sm:h-9 md:h-10 px-3 sm:px-4 md:px-5
           active:scale-95 active:brightness-90">
          <BaseResetButton />
        </button>
      </transition>

    </div>


  </main>
  <footer
    class="socials bg-hills bg-cover bg-no-repeat overflow-hidden fixed bottom-0 w-full min-h-36 lg:min-h-44 md:min-h-40 ">
  </footer>
</template>
