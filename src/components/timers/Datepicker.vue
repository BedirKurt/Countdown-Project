<!-- <script setup lang="ts">
import { onMounted, ref, onUnmounted } from "vue";
import BaseCount from "./UI/BaseCount.vue";

const props = defineProps<{
  setComponent: (value: null) => void,
}>()

const Days = ref<number | string | null>(null);
const Hours = ref<number | string | null>(null);
const Minutes = ref<number | string | null>(null);
const Seconds = ref<number | string | null>(null);
let intervalId: number;



const handleDate = ref<string | number>('');
console.log(handleDate.value)
const nowDate = new Date().toISOString().split('T')[0];

function calculationDate() {

  const date: string | number = new Date(handleDate.value).getTime();

  if (!Number.isNaN(date)) {
    const nowDate = new Date().getTime();
    const dateDifference = date - nowDate;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    let timeDays = Math.floor(dateDifference / days);
    let timeHours: string | number = Math.floor((dateDifference % days) / hours);
    let timeMinutes: string | number = Math.floor(
      (dateDifference % hours) / minutes
    );
    let timeSeconds: string | number = Math.floor(
      (dateDifference % minutes) / seconds
    );

    if (timeHours < 10) {
      timeHours = "0" + timeHours;
    }
    if (timeMinutes < 10) {
      timeMinutes = "0" + timeMinutes;
    }
    if (timeSeconds < 10) {
      timeSeconds = "0" + timeSeconds;
    }
    Days.value = timeDays;
    Hours.value = timeHours;
    Minutes.value = timeMinutes;
    Seconds.value = timeSeconds;
  } else {
    Days.value = '00';
    Hours.value = '00';
    Minutes.value = '00';
    Seconds.value = '00';
  }
}

onMounted(() => {
  calculationDate();
  intervalId = setInterval(calculationDate, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div class="min-h-screen bg-stars bg-cover bg-no-repeat overflow-hidden">

    <header class="overflow-hidden flex flex-col items-center justify-center">
      <button
        class="text-sm font-medium text-white bg-countdownP hover:bg-gray-700 px-10 py-1 hover:px-16 transition-[padding] rounded-xl duration-500 rounded-b-full hover:text-pColor"
        @click="props.setComponent(null)">
        Back
      </button>
      <h1
        class="text-center text-[#FF2849] uppercase tracking-[1vw] sm:tracking-[0.5vw] max-w-screen text-2xl pt-40 font-redhatFont">
        Countdown
      </h1>
    </header>
    <section v-if="!handleDate">
      <div class="flex justify-center mt-24 lg:mt-36 ">
        <input type="date" v-model="handleDate" :min="nowDate"
          class="lg:w-[40vw] w-[80vw] text-center rounded-2xl text-pColor p-2 font-redhatFont border-[#FF2849] border-2 bg-countdownP">
      </div>
      <span class="flex justify-center font-redhatFont mt-3 text-sm"> > Please select the date you want to countdown to
        < </span>
    </section>
    <main v-if="handleDate">
      <div class="countdown flex justify-center text-center gap-2 sm:gap-16 mt-14 sm:mt-36 overflow-hidden">
        <BaseCount :count="Days" label="Days" />
        <BaseCount :count="Hours" label="Hours" />
        <BaseCount :count="Minutes" label="Minutes" />
        <BaseCount :count="Seconds" label="Seconds" />
      </div>
    </main>
  </div>
  <footer
    class="socials bg-hills bg-cover bg-no-repeat overflow-hidden fixed bottom-0 w-full min-h-36 lg:min-h-44  md:min-h-40">
  </footer>
</template> -->

