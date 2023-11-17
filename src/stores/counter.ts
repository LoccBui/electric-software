import { ref, computed } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'

export type CounterRootState = {
  inputA: string,
  inputB: string,
}

export const useCounterStore = defineStore({
  id: 'counter',
  persist: [
    {
      key: 'inputA',
      paths: ['inputA'],
      storage: localStorage,
    },
    {
      key: 'inputB',
      paths: ['inputB'],
      storage: localStorage,
    },
  ],
  state: () =>
  ({
    inputA: '',
    inputB: '',
  }) as CounterRootState,
  
  
  getters: {
    
  },
  
  actions: {
  }
})


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
}