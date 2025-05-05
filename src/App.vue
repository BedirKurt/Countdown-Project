<script setup lang="ts">
import { shallowRef, type Component } from "vue";
import Stopwatch from "./components/timers/Stopwatch.vue";
import Countdown from "./components/timers/Countdown.vue";

// Düzenlenecek !
// import BaseTimer from "./components/timers/BaseTimer.vue";
const currentComponent = shallowRef<null | any>(null);

const setComponent = (activeComp: Component) => {
  currentComponent.value = activeComp;
};
</script>

<template>
  <component :is="currentComponent" :setComponent="setComponent" />
  <!--Not (1)** Sorun Çıkarırsa min-h-screen geri al  [1.div]-->
  <div
    v-if="currentComponent === null"
    class="min-h-[40vw] bg-stars bg-cover bg-no-repeat overflow-hidden"
  >
    <!-- Header -->
    <header class="overflow-hidden flex flex-col items-center justify-center">
      <h1
        class="text-center text-pColor uppercase tracking-[1vw] sm:tracking-[0.5vw] max-w-screen text-2xl pt-40 font-redhatFont"
      >
        Select Countdown Section
      </h1>
    </header>

    <!-- Main -->
    <main>
      <div
        class="flex justify-center text-center gap-4 sm:gap-16 mt-14 sm:mt-36 font-redhatFont"
      >
        <div class="">
          <!-- Css ile geliştirilecek  [h2] ! -->
          <h2 class="text-md">Stopwatch</h2>
          <!--  svg veya başka iconlar ile gösterilecek [Button] ! // kronometre sayfasına yönlendirecek !  -->
          <button
            class="px-10 mt-5 rounded-md text-md text-pColor bg-countdownP transition-transform duration-500 hover:scale-110 tracking-widest hover:text-white"
            @click="setComponent(Stopwatch)"
          >
            Select
          </button>
        </div>
        <div class="">
          <!-- Css ile geliştirilecek  [h2] ! -->
          <h2 class="text-md">Countdown</h2>
          <!--  svg veya başka iconlar ile gösterilecek [Button] ! // kronometre sayfasına yönlendirecek !  -->
          <button
            class="px-10 mt-5 rounded-md text-md text-pColor bg-countdownP transition-transform duration-500 hover:scale-110 tracking-widest hover:text-white"
            @click="setComponent(Countdown)"
          >
            Select
          </button>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer>
      <div
        class="socials bg-hills bg-cover bg-no-repeat overflow-hidden fixed bottom-0 w-full min-h-36 lg:min-h-60 md:min-h-40"
      ></div>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
