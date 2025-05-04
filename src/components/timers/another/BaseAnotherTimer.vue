<script setup lang="ts">
import AnotherTimerHeader from '../../layout/AnotherTimerHeader.vue';
import AnotherTimer from './AnotherTimer.vue';
import AnotherTimerFooter from '../../layout/AnotherTimerFooter.vue';

import { defineEmits } from 'vue';
const emit = defineEmits()
function backMain(activeComp: any) {
    emit('back-main', activeComp)
}

</script>


<template>
    <div class="min-h-screen bg-stars bg-cover bg-no-repeat overflow-hidden">
        <AnotherTimerHeader @back-main="backMain" />
        <AnotherTimer />
        <AnotherTimerFooter />
    </div>
</template>


<style scoped></style>