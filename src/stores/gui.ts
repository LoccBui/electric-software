import { acceptHMRUpdate, defineStore } from 'pinia'
import router from '@/router'
import { ElMessage } from 'element-plus'

export type GuiRootState = {
  titleTopic: string,
  typeTopic: string,
  numberTopic: number,
  mathPath: string,
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
    {
      key: 'mathPath',
      paths: ['mathPath'],
      storage: sessionStorage,
    }
  ],
  state: () =>
  ({
    titleTopic: '',
    typeTopic: '',
    mathPath: '',
    numberTopic: 0,
  }) as GuiRootState,
  actions: {
    navigateTo(path: string) {
      router.push(path)
    },
    showMessage: (message: string, type?: string) => {
      ElMessage({
        message: message,
        type: type || 'success',
      })
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGuiStore, import.meta.hot))
}