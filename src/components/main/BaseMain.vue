<script setup lang="ts">
import MainFooter from '../layout/MainFooter.vue';
import MainHeader from '../layout/MainHeader.vue';
import MainPage from './MainPage.vue';

const emit = defineEmits();

function handleCountdownComp(activeComponent: any) {
    emit('countdown-comp', activeComponent)
}
</script>


<template>
    <div class="min-h-screen bg-stars bg-cover bg-no-repeat overflow-hidden">
        <MainHeader />
        <MainPage @set-countdown="handleCountdownComp" />
        <MainFooter />
    </div>
</template>


<style scoped></style>