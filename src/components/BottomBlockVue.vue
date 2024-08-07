<script lang="ts" setup>
import CloseButtonVue from './CloseButtonVue.vue';

</script>

<template>
    <div class="bottom-block bordered transition-background">
        <CloseButtonVue class="bottom-block__close-button" />
        <div class="bottom-block__skeleton-block skeleton-block">

        </div>
    </div>
</template>

<style lang="sass" scoped>
.bottom-block
    position: relative
    padding: 18px
    grid-column: 1/3
    height: fit-content
    background-color: #262626
    &__skeleton-block
        height: 36px
        width: 700px

</style>