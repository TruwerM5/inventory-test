<script setup lang="ts">
import SideBannerVue from './components/SideBannerVue.vue';
import InventoryVue from './components/InventoryVue.vue';
import { useItemsStore } from './stores/items';
import BottomBlockVue from './components/BottomBlockVue.vue';
import ThemeButtonVue from './components/ThemeButtonVue.vue';
import { useThemeStore } from './stores/theme';

const themeStore = useThemeStore();
const itemsStore = useItemsStore();

itemsStore.getFromLocaleStorage();

</script>

<template>
  <div :class="['wrapper transition-background', {'light': themeStore.currentTheme == 'light'}]">
    <ThemeButtonVue />
    <SideBannerVue />
    <InventoryVue />
    <BottomBlockVue />
  </div>
</template>

<style lang="sass" scoped>
.wrapper
  padding: 32px
  display: grid
  grid-template-columns: 236px 525px
  gap: 24px
</style>
