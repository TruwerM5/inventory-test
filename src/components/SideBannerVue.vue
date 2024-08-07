<script lang="ts" setup>

import SkeletonVue from '@/components/SkeletonVue.vue';


</script>

<template>
    <div class="banner bordered transition-background">
        <div class="banner__image">
            <img src="/images/banner-img.png" alt="banner">
        </div>
        <div class="banner__skeleton">
            <SkeletonVue />
        </div>
    </div>
</template>

<style lang="sass" scoped>
.banner
    height: 500px
    width: 236px
    padding: 18px 14px 24px 14px
    display: grid
    grid-template-columns: 1fr
    grid-template-rows: 240px 198px
    row-gap: 20px
    background-color: #262626

</style>