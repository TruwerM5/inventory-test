import { defineStore } from "pinia";
type Theme = 'dark' | 'light'
export const useThemeStore = defineStore('theme', {
    state: () => {
        return {
            currentTheme: <Theme>('dark')
        }
    },
    actions: {
        setTheme() {
            this.currentTheme = this.currentTheme == 'light' ? 'dark' : 'light';
        }
    }
})