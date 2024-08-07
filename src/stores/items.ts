import type { Cell } from "@/components/InventoryVue.vue";
import { defineStore } from "pinia";
import type { Item } from "@/components/InventoryVue.vue";

export const useItemsStore = defineStore('items', {
    state: () => {
        return {
            currentItem: <Item>({}),
            items:[
                {
                    id: 1,
                    color: 'green',
                    count: 4,
                    position: 0,
                },{
                    id: 2,
                    color: 'yellow',
                    count: 2,
                    position: 1
                },{
                    id: 3,
                    color: 'purple',
                    count: 5,
                    position: 2
                }
            ],
            cells: <Cell[]>([]),
            size: 25,
            optionsOpened: false,
        }
    },
    actions: {
        buildGrid() {
            this.cells = [];
            for(let i = 0; i < this.size; i++) {

                let item:any = {};
            
                for(let j = 0; j < this.items.length; j++) {
                    
                    if(i == this.items[j].position) {
                        item.position = i;
                        item.color = this.items[j].color;
                        item.count = this.items[j].count;
                    }
                }
                if(item.position || item.position == 0) {
                        this.cells.push({id: i, item})
                } else {
                    this.cells.push({id: i});
                }
            }
            this.saveToLocalStorage();
        },
        setCurrentItem(item: Item) {
            this.currentItem = item;

            this.openOptions();
            console.log(this.currentItem);
        },
        openOptions() {
            this.optionsOpened = true
        },
        closeOptions() {
            this.optionsOpened = false;
        },
        saveToLocalStorage() {
            localStorage.setItem('items', JSON.stringify(this.items));
        },
        getFromLocaleStorage() {
            let storage = localStorage.getItem('items');
            if(storage) {
                let items: Item[] = JSON.parse(storage);
                this.items = items;
                
            }
        }
        
    }
})