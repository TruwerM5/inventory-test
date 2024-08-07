<script lang="ts" setup>
import { ref } from 'vue';

const blocks = ref([
    {
        id: 1,
        width: 190,
        height: 26
    },{
        id: 2,
        width: 155,
        height: 10
    },{
        id: 3,
        width: 190,
        height: 10
    },{
        id: 4,
        width: 170,
        height: 10
    },{
        id: 5,
        width: 160,
        height: 10
    },{
        id: 6,
        width: 140,
        height: 10
    },{
        id: 7,
        width: 80,
        height: 26
    },
])

</script>

<template>
    <div class="skeleton">
        <div v-for="block in blocks" 
        :key="block.id" 
        class="skeleton__block skeleton-block transition-background"
        :style="{height: `${block.height}px`, width: `${block.width}px`}">

        </div>
    </div>
</template>

<style lang="sass" scoped>
.skeleton
    display: flex
    flex-direction: column
    gap: 16px
    justify-content: center
    align-items: center
    // &__block
    //     border-radius: 8px
    //     background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%)
    //     background-size: 200% 200%
    //     animation: skeleton-loading 1s linear infinite none
</style>