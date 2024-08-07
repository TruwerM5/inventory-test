<script lang="ts" setup>
import type { Cell, Item } from '@/components/InventoryVue.vue';
import ItemVue from '@/components/ItemVue.vue';
import { useItemsStore } from '@/stores/items';
import { watchEffect } from 'vue';
const itemsStore = useItemsStore();

const props = defineProps<{item?: Item, id: number}>();

function onDrop(event: any, cellPosition: number) {
    const ItemPosition = event.dataTransfer.getData('ItemPosition');
    const item = itemsStore.items.find(item => item.position == ItemPosition);
    
    if(item) {
        item.position = cellPosition;
        itemsStore.buildGrid();
    }
}
</script>

<template>
    <div class="cell transition-background"
    @drop="onDrop($event, id)"
    @dragenter.prevent
    @dragover.prevent>
        <ItemVue v-if="item && item.count> 0" :item="item" />
    </div>
</template>

<style lang="sass" scoped>
.cell
    position: relative
    max-width: 105px
    max-height: 100px
    background-color: #262626
    cursor: pointer
    &:hover
        background-color: #2F2F2F
</style>