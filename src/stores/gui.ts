import { ref, computed } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import router from '@/router'

export type GuiRootState = {
  inputA: string,
  inputB: string,
}

export const useGuiStore = defineStore({
  id: 'gui',
  state: () =>
  ({
  }) as GuiRootState,
  actions: {
    goBack(path: string) {
        router.push(path)
    }
  }
})


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGuiStore, import.meta.hot))
}