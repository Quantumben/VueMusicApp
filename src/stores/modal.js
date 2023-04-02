import { defineStore } from 'pinia'

/*
 This is where state is been defined using pinia
 "modal" in the defineStore method serves as the id of the state
 */
export default defineStore('modal', {
    state: () => ({
        isOpen: false
    }),
    getters: {
        /*
        Getters
        Think of them as computed properties for yor store  
        and it's accessible in all components
        */
        hiddenClass(state) {
            return !state.isOpen ? 'hidden' : '';
        },
    },
})