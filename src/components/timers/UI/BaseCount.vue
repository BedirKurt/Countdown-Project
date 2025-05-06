<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps<{
    count: string | number | null,
    label: string,
}>()
</script>

<template>
    <div class="time-box">
        <p
            class="w-20 sm:w-28 h-20 sm:h-28 flex items-center justify-center text-3xl sm:text-6xl rounded-full font-redhatFont bg-countdownP text-pColor">
            {{ props.count }}
        </p>
        <h3 class="uppercase tracking-widest text-xs font-redhatFont pt-2 text-cdh3Color">
            {{ label }}
        </h3>
    </div>
</template>