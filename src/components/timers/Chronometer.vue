<!-- 

<template>
    <div class="max-w-md mx-auto p-4 space-y-6 text-center text-white">
   
        <div class="flex justify-center gap-4">
            <div>
                <label class="block text-sm mb-1">Saat</label>
                <input type="number" v-model="inputHours" min="0"
                    class="w-20 text-black text-center rounded px-2 py-1" />
            </div>
            <div>
                <label class="block text-sm mb-1">Dakika</label>
                <input type="number" v-model="inputMinutes" min="0" max="59"
                    class="w-20 text-black text-center rounded px-2 py-1" />
            </div>
            <div>
                <label class="block text-sm mb-1">Saniye</label>
                <input type="number" v-model="inputSeconds" min="0" max="59"
                    class="w-20 text-black text-center rounded px-2 py-1" />
            </div>
        </div>

      
        <button @click="startCountdown"
            class="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white font-semibold">
            Başlat
        </button>

       
        <div v-if="counting" class="flex justify-center gap-6 text-4xl font-bold mt-6">
            <div class="flex flex-col items-center">
                <span>{{ formatNumber(hours) }}</span>
                <span class="text-sm text-gray-400">Saat</span>
            </div>
            <div class="flex flex-col items-center">
                <span>{{ formatNumber(minutes) }}</span>
                <span class="text-sm text-gray-400">Dakika</span>
            </div>
            <div class="flex flex-col items-center">
                <span>{{ formatNumber(seconds) }}</span>
                <span class="text-sm text-gray-400">Saniye</span>
            </div>
        </div>
    </div>

    
</template>



<style scoped></style> -->
