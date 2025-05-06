<script setup lang="ts">
import { ref } from "vue";
import BasePauseButton from "./UI/BasePauseButton.vue";
import BasePlayButton from "./UI/BasePlayButton.vue";
import BaseResetButton from "./UI/BaseResetButton.vue";

const props = defineProps<{
  setComponent: (value: null) => void,

}>()

const seconds = ref(0);
const minutes = ref(0);
const hours = ref(0);
const isRunning = ref(false);

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
  <div class="min-h-screen bg-stars bg-cover bg-no-repeat overflow-hidden">
    <!-- Header-->
    <header class="overflow-hidden flex flex-col items-center justify-center">
      <button
        class="text-sm font-medium text-white bg-countdownP hover:bg-gray-700 px-10 py-1 hover:px-16 rounded-xl transition-[padding] duration-500 rounded-b-full hover:text-pColor"
        @click="props.setComponent(null)">
        Back
      </button>
      <h1
        class="text-center text-[#FF2849] uppercase tracking-[1vw] sm:tracking-[0.5vw] max-w-screen text-2xl pt-24 sm:pt-36 font-redhatFont">
        Stopwatch
      </h1>
    </header>

    <!-- Main -->
    <main>
      <div class="countdown flex justify-center text-center gap-12 sm:gap-32 mt-14 sm:mt-20 overflow-hidden">
        <div class="time-box">
          <p
            class="w-20 sm:w-28 h-20 sm:h-28 flex items-center justify-center text-3xl sm:text-6xl rounded-full font-redhatFont bg-countdownP text-pColor">
            {{ formatNumber(hours) }}
          </p>
          <h3 class="uppercase tracking-widest text-xs font-redhatFont pt-2 text-cdh3Color">
            Hours
          </h3>
        </div>

        <div class="time-box">
          <p
            class="w-20 sm:w-28 h-20 sm:h-28 flex items-center justify-center text-3xl sm:text-6xl rounded-full font-redhatFont bg-countdownP text-pColor">
            {{ formatNumber(minutes) }}
          </p>
          <h3 class="uppercase tracking-widest text-xs font-redhatFont pt-2 text-cdh3Color">
            Minutes
          </h3>
        </div>

        <div class="time-box">
          <p
            class="w-20 sm:w-28 h-20 sm:h-28 flex items-center justify-center text-3xl sm:text-6xl rounded-full font-redhatFont bg-countdownP text-pColor ">
            {{ formatNumber(seconds) }}
          </p>
          <h3 class="uppercase tracking-widest text-xs font-redhatFont pt-2 text-cdh3Color">
            Seconds
          </h3>
        </div>
      </div>

      <div class="flex flex-col items-center pt-6">
        <div class="flex gap-1 lg:gap-32">
          <button @click="startTimer" :disabled="isRunning">
            <BasePlayButton />
          </button>
          <button @click="stopTimer" :disabled="!isRunning">
            <BasePauseButton />
          </button>
          <button @click="resetTimer">
            <BaseResetButton />
          </button>
        </div>
      </div>

    </main>

    <!-- Footer -->
    <footer
      class="socials bg-hills bg-cover bg-no-repeat overflow-hidden fixed bottom-0 w-full min-h-36 lg:min-h-60 md:min-h-40">
    </footer>
  </div>
</template>

<style scoped></style>
