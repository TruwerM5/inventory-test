<script lang="ts" setup>
import { useThemeStore } from '@/stores/theme';


const themeStore = useThemeStore();

const lightIconPath = '/images/theme-light-icon.png';
const darkIconPath = '/images/theme-dark-icon.png';

function getIcon() {
    return themeStore.currentTheme == 'light' ? darkIconPath : lightIconPath;
}

</script>

<template>
    <button @click="themeStore.setTheme" class="theme-button">
        <img :src="getIcon()" alt="theme" class="theme-button__icon">
    </button>
</template>

<style lang="sass" scoped>
.theme-button
    position: absolute
    top: 20px
    right: 20px
    width: 30px
    height: 30px
    background-color: transparent
</style>