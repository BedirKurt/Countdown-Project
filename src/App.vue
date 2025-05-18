<script setup lang="ts">
import { shallowRef, } from "vue";
import Stopwatch from "./components/timers/Stopwatch.vue";
import BaseButton from "./components/timers/UI/BaseButton.vue";
import Countdown from "./components/timers/Countdown.vue";


const currentComponent = shallowRef<any>(null);

const setComponent = (activeComp: any) => {
  currentComponent.value = activeComp;
};

import { onMounted, ref } from 'vue'
import { useParticles } from './composables/useParticles.ts'

const canvasRef = ref<HTMLCanvasElement | null>(null)

onMounted(() => {
  if (canvasRef.value) {
    useParticles(canvasRef.value)
  }
})
</script>

<template>

  <canvas ref="canvasRef" aria-hidden="true" class="fixed top-0 left-0 w-full h-full z-0"></canvas>
  <component :is="currentComponent" :setComponent="setComponent" />
  <div v-if="currentComponent === null">

    <header class="overflow-hidden flex flex-col items-center justify-center">
      <h1
        class="countdown__title text-center text-[#FF2849] uppercase tracking-[1vw] sm:tracking-[0.5vw] text-2xl pt-40 font-redhatFont">
        Select Countdown Section
      </h1>
    </header>
    <main>
      <div class="flex  justify-center text-center gap-4 sm:gap-16 mt-24 sm:mt-36 font-redhatFont">
        <div>
          <button @click="setComponent(Stopwatch)">
            <BaseButton btn-name="Stopwatch" />
          </button>
        </div>
        <!-- <div>
          <button @click="setComponent(Countdown)">
            <BaseButton btn-name="Countdown" />
          </button>
        </div> -->
        <div>
          <button @click="setComponent(Countdown)">
            <BaseButton btn-name="Countdown" />
          </button>
        </div>
      </div>
    </main>

    <footer>
      <div
        class="socials bg-hills bg-cover bg-no-repeat overflow-hidden fixed bottom-0 w-full min-h-36 lg:min-h-44 md:min-h-40">
      </div>
    </footer>
  </div>

</template>

<style></style>
