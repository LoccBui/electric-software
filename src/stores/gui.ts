import { ref, computed } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import router from '@/router'

export type GuiRootState = {
  titleTopic: string,
  typeTopic: string,
  numberTopic: number
}

export const useGuiStore = defineStore({
  id: 'gui',
  persist: [
    {
      key: 'titleTopic',
      paths: ['titleTopic'],
      storage: sessionStorage,
    },
    {
      key: 'typeTopic',
      paths: ['typeTopic'],
      storage: sessionStorage,
    },
    {
      key: 'numberTopic',
      paths: ['numberTopic'],
      storage: sessionStorage,
    },
  ],
  state: () =>
  ({
    titleTopic: '',
    typeTopic: '',
    numberTopic: 0
  }) as GuiRootState,
  actions: {
    navigateTo(path: string) {
      router.push(path)
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGuiStore, import.meta.hot))
}