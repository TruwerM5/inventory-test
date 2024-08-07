<script lang="ts" setup>

import CellVue from '@/components/CellVue.vue';
import { ref } from 'vue';
import { useItemsStore } from '@/stores/items';
import ItemOptions from '@/components/ItemOptions.vue';
const itemsStore = useItemsStore();

export interface Item {
    id: number;
    color: string;
    count: number;
    position: number;
}
export interface Cell {
    id: number;
    item?: Item;
}




itemsStore.buildGrid();

</script>

<template>
    <div class="inventory">
        <CellVue v-for="cell, index in itemsStore.cells" :item="cell.item" :id="cell.id" :key="index" />
        <ItemOptions />
    </div>
</template>

<style lang="sass" scoped>
.inventory
    position: relative
    display: grid
    grid-template-columns: repeat(5,1fr)
    grid-template-rows: repeat(5, 1fr)
    width: 525px
    height: 500px
    gap: 1px
    border: 1px solid #4D4D4D
    background-color: #4D4D4D
    border-radius: 12px
    overflow: hidden
    
</style>