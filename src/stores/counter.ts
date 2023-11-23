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
      storage: sessionStorage,
    },
    {
      key: 'inputB',
      paths: ['inputB'],
      storage: sessionStorage,
    },
    {
      key: 'dataInput',
      paths: ['dataInput'],
      storage: sessionStorage,
    },
  ],
  state: () =>
  ({
    inputA: '',
    inputB: '',
    
    dataInput: {
      U1: '',
      U2: '',
      S2: '',
      k: '',
      n: '',
      J: '',
      
      // others
      U2_1: '',
      U2_2: '',
      U2_3: '',
      
      // thu cap
      aFe: '',
      bFe: '',
    },
  }) as CounterRootState,
  
  
  getters: {
    
  },
  
  actions: {
    // socap
  
    handleCalcI1 () {
      // I1= (S2/η*U1) (A)
      const s2 = Number(this.dataInput.S2)
      const n = Number(this.dataInput.n)
      const U1 = Number(this.dataInput.U1)
      const res = s2 / ( n * U1)

      return res
    },
    
    handleN1() {
      // N1 = Nv*U1 mà Nv =(45/B*At)
      const At = Number(this.inputA * this.inputB)
      const Nv = 45 / (this.inputB * At)
      const res = Nv * this.dataInput.U1
      
      return res
    },
    
    handleD1() {
      // 1.128* căn bậc 2(I1/J)
      const I1 = this.handleCalcI1()
      const data = (I1 / this.dataInput.J)
      const res = 1.128 * Math.sqrt(data)
      
      return res    
    },
    
    
    //thu cap
    handleI2() {
      // I2= (S2/U2) (A)
      // S2 = U2*I2
      const S2 = 
      
      console.log('this.dataInput.S2', this.dataInput.S2);
      console.log('this.dataInput.U2', this.dataInput.U2);
      
      const res = (this.dataInput.S2 / this.dataInput.U2)
      return res
    },
    
    handleN1TC() {
      // N2 = Nv*U2 mà Nv =(45/B*At)
      const At = Number(this.inputA * this.inputB)
      const Nv = 45 / (this.inputB * At)
      const res = Nv * this.dataInput.U2
      
      return res
    },
    
    handleD2() {
      // d2 = 1.128* căn bậc 2(I2/J)
      const I2 = this.handleI2()
      const data = (I2 / this.dataInput.J)
      const res = 1.128 * Math.sqrt(data)
      
      return res
    },
    
    handleS1() {
      // S1 = U1*I1(VA)
      const U1 = Number(this.dataInput.U1)
      const I1 = this.handleCalcI1()
      const res = U1 * I1
      
      return res
    },
    
    handleS2Reverse() {
      // S2 = U2*I2
      const I2 = this.handleI2()
      console.log(I2);
      const res = this.dataInput.U2 * I2
      
      return res
    },
    
    
    // type 2 (NonReverse)
    handleI2TypeTwo() {
      // I2= (S2/U2) (A)
      // Mà U2 = (U2-1)+ (U2-2)
      const u2 = this.dataInput.U2_1 + this.dataInput.U2_2
      const res = this.dataInput.S2 / u2
      
      return res
    },
    
    handleN21() {
      // N2 = Nv*U2-1 mà Nv =(45/B*At)
      const At = this.inputA * this.inputB
      
      const Nv = 45 / (this.inputB * At)
      const res = Nv * this.dataInput.U2_1
      
      return res
    },
    handleN22() {
      // N2 = Nv*U2-2  mà Nv =(45/B*At)
      const At = this.inputA * this.inputB
      
      const Nv = 45 / (this.inputB * At)
      const res = Nv * this.dataInput.U2_2
      
      return res
    },
    handleN23() {
      // N2 = Nv*U2-3mà Nv =(45/B*At)
      const At = this.inputA * this.inputB
      
      const Nv = 45 / (this.inputB * At)
      const res = Nv * this.dataInput.U2_3
      
      return res
    },
    
    handleI2TypeThree() {
      // I2= (S2/U2) (A)
      // Mà U2 = (U2-1)+ (U2-2)+(U2-3)
      const u2 = this.dataInput.U2_1 + this.dataInput.U2_2 + this.dataInput.U2_3
      const res = this.dataInput.S2 / u2
      
      return res
    },
    
    
    handleCalcI1Reverse() {
     // I1= (S2/η*U1) (A)
      const S2 = this.handleS2ReverseType1()
      console.log('handleCalcI1Reverse');
      console.log('handleCalcI1Reverse', S2);
      
      
      const n = Number(this.dataInput.n)
      const U1 = Number(this.dataInput.U1)
      const I1 = S2 / (n * U1)

      return I1
    },
    
    
    handleS2ReverseType1() {
      // S2 = U2*I2 Mà U2 = (U2-1)+(U2-2)
      const U2 = this.dataInput.U2_1 + this.dataInput.U2_2
      const I2 = this.handleI2TypeTwo()
      const S2 = U2 * I2
      
      return S2
    },
    
    
    handleD1ReverseType1() {
      // d1 = 1.128* căn bậc 2(I1/J)
      // const I2 = this.handleI2()
      // const data = (I2 / this.dataInput.J)
      // const d1 = 1.128 * Math.sqrt(data)
      return 123
    }
  }
})


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
}