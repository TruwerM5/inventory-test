<script lang="ts" setup>
import { useItemsStore } from '@/stores/items';
import SkeletonVue from '@/components/SkeletonVue.vue';
import CloseButtonVue from './CloseButtonVue.vue';
import { ref } from 'vue';


const itemsStore = useItemsStore();

const isDeleting = ref(false);
const onDeleteCount = ref(0);
function switchDeleteBlock() {
    isDeleting.value = !isDeleting.value;
}

function deleteItem() {
    const currentCount = itemsStore.currentItem.count;
    if(currentCount < onDeleteCount.value) {
        alert("Error");
        return;
    }
    itemsStore.items.forEach((item) => {
        if(item.color == itemsStore.currentItem.color) {
            item.count = item.count - onDeleteCount.value;
            itemsStore.buildGrid();
        }
    })
}

</script>

<template>
    <div :class="['item-options', {'opened': itemsStore.optionsOpened}]">
        <CloseButtonVue @click="itemsStore.closeOptions" />
        <div class="item-option__image-wrapper">
            <img :src="`/images/${itemsStore.currentItem.color}-item.png`" 
            :alt="`${itemsStore.currentItem.color}-item`"
            class="item-options__image">
        </div>
        <SkeletonVue class="item-options__skeleton" />
        <div v-if="isDeleting" class="item-options__delete-block">
            <input 
            v-model="onDeleteCount"
            type="number" 
            name="count" 
            id="count" 
            placeholder="Введите количество"
            class="item-options__input">
            <div class="item-options__buttons">
                <button @click="switchDeleteBlock" 
                    class="item-options__cancel-button">
                    Отмена
                </button>
                <button @click="deleteItem" class="item-options__delete-button primary-button">Подтвердить</button>
            </div>
        </div>
        <button @click="switchDeleteBlock" v-else class="primary-button">Удалить предмет</button>
        
    </div>
</template>

<style lang="sass" scoped>
.item-options
    position: absolute
    right: -100%
    top: 0
    width: 250px
    height: 500px
    padding-inline: 15px
    display: grid
    grid-template-columns: 1fr
    justify-content: center
    align-items: center
    transition: all .2s
    backdrop-filter: blur(10px)
    background-color: rgba(38, 38, 38, 0.5)
    z-index: 1
    border-left: 1px solid #4D4D4D
    &.opened
        right: 0
    &__image
        display: block
        width: 130px
        margin: 0 auto
    &__skeleton
        position: relative
        &::before,
        &::after
            content: ''
            position: absolute
            width: 100%
            height: 1px
            background-color: #4D4D4D
        &::before
            top: -16px
        &::after
            bottom: -16px  
    &__input
        padding: 12px
        margin-bottom: 20px
        border: 1px solid #4D4D4D
        border-radius: 4px
        background-color: #262626
        color: #fff
        &:focus
          outline: none  
    &__buttons
        display: flex
        gap: 10px
    &__cancel-button
        padding: 8px 19px
        background-color: #fff
        color: #2D2D2D
        border-radius: 8px
</style>