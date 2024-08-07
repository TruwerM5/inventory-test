<script lang="ts" setup>

import type { Item } from '@/components/InventoryVue.vue';
import { useItemsStore } from '@/stores/items';
const itemsStore = useItemsStore();

const props = defineProps<{item: Item }>()
function startDrag(event:any, item: Item) {
    
    event.dataTransfer.dropEffect = 'move';
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('ItemPosition', item.position);
}

// function openOptions() {
//     itemsStore.setCurrentItem(props.item);

// }

</script>

<template>
    <div
    class="item" 
    @click="itemsStore.setCurrentItem(item);"
    draggable="true" 
    @dragstart="startDrag($event, item)">
        <img :src="`images/${item.color}-item.png`" :alt="`${item.color}-item`">
        <div class="item__quantity">
            {{ item.count }}
        </div>
    </div>
</template>

<style lang="sass" scoped>
.item
    padding: 24px
    height: fit-content
    &__quantity
        font-size: 10px
        position: absolute
        right: 0
        bottom: 0
        padding: 2px 4px
        color: #FFF
        opacity: .4
        border-top: 2px solid #4D4D4D
        border-left: 2px solid #4D4D4D
        border-top-left-radius: 8px
</style>