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
      key: 'inputAt',
      paths: ['inputAt'],
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
    inputAt: '',
    dataInput: {
      U1: '',
      U2: '',
      I2: '',
      S2: '',
      k: '',
      n: '',
      J: '',
      
      // others
      U2_1: '',
      U2_2: '',
      U2_3: '',
      I2_1: '',
      I2_2: '',
      I2_3: '',
      
      // thu cap
      aFe: '',
      bFe: '',
    },
  }) as CounterRootState,
  
  actions: {
    formatNumber (number: any) {
      let formattedString = number.toFixed(1);
      return formattedString
    },
  
    // socap
    handleCalcI1 () {
      // I1= (S2/η*U1) (A)
      const s2 = Number(this.dataInput.U2) * Number(this.dataInput.I2)
      const n = Number(this.dataInput.n)
      const U1 = Number(this.dataInput.U1)
      const res = s2 / ( n * U1)
      
      return this.formatNumber(res)
    },
    
    handleNonI1Topic2() {
      // I1= (S2/η*U1) (A)
      const U2_1 = this.dataInput.U2_1
      const U2_2 = this.dataInput.U2_2
      const I2_1 = this.dataInput.I2_1
      const I2_2 = this.dataInput.I2_2
      
      const S2 = (Number(U2_1) * Number(I2_1) ) + (Number(U2_2) * Number(I2_2) )
      const n = Number(this.dataInput.n)
      const U1 = Number(this.dataInput.U1)
      const res = S2 / ( n * U1)
      
      return this.formatNumber(res)
    },
    
    handleNonD1Topic3() {
      // d1 = 1.128* căn bậc 2(I1/J)
      // I1= (S2/η*U1) 
      const U1 = Number(this.dataInput.U1)
      const n = Number(this.dataInput.n)
      
      const U2_1 = Number(this.dataInput.U2_1)
      const U2_2 = Number(this.dataInput.U2_2)
      const I2_1 = Number(this.dataInput.I2_1)
      const I2_2 = Number(this.dataInput.I2_2)
      
      const S2 = (U2_1 * I2_1) + (U2_2 * I2_2)
      const I1 = (S2/n * U1)
      
      const data = (I1 / this.dataInput.J)
      const res = 1.128 * Math.sqrt(data)
      
      return this.formatNumber(res)
    },
    
    handleNonI1Topic3() {
      const s2 = this.handleS2NonTopic3()
      const n = Number(this.dataInput.n)
      const res = s2 / ( n * this.dataInput.U1)
      
      return this.formatNumber(res)
    },
    
    handleN1() {
      // N1 = Nv*U1 mà Nv =(45/B*At)
      const Nv = 45 / (this.inputB * this.inputAt)
      const res = Nv * this.dataInput.U1
      
      return this.formatNumber(res)
    },
    
    handleD1() {
      // 1.128 * căn bậc 2(I1/J)
      const I1 = this.handleCalcI1()
      const data = (I1 / this.dataInput.J)
      const res = 1.128 * Math.sqrt(data)
      
      return this.formatNumber(res)    
    },
    
    handleS2() {
      const S2 = Number(this.dataInput.U2) * Number(this.dataInput.I2)
      return this.formatNumber(S2)
    },
    
    //thu cap
    handleI2() {
      // I2= (S2/U2) (A)
      const s2 = this.handleS2()
      const res = (s2 / this.dataInput.U2)
      return this.formatNumber(res)
    },
    
    handleNonN2Topic1() {
      // N2 = Nv*U2 mà Nv =(45/B*At)
      const At = this.inputAt
      const Nv = 45 / (this.inputB * At)
      const res = Nv * this.dataInput.U2
      
      return this.formatNumber(res)
    },
    
    handleNonD2Topic1() {
      // d2 = 1.128* căn bậc 2(I2/J)
      // I2 = S2 / U2
      const I2 = this.handleS2NonTopic1() / this.dataInput.U2
      const data = (I2 / this.dataInput.J)
      const res = 1.128 * Math.sqrt(data)
      
      return this.formatNumber(res)
    },
    
    handleD2() {
      // d2 = 1.128* căn bậc 2(I2/J)
      const I2 = this.handleI2()
      const data = (I2 / this.dataInput.J)
      const res = 1.128 * Math.sqrt(data)
      
      return this.formatNumber(res)
    },
    
    handleD21NonTopic2() {
      // d2 = 1.128* căn bậc 2(I2-1/J)
      const I2_1 = Number(this.dataInput.I2_1)
      const data = (I2_1 / this.dataInput.J)
      const res = 1.128 * Math.sqrt(data)
      
      return this.formatNumber(res)
    },
    
    handleD22NonTopic2() {
      // d2 = 1.128* căn bậc 2(I2-2/J)
      const I2_2 = Number(this.dataInput.I2_2)
      const data = (I2_2 / this.dataInput.J)
      const res = 1.128 * Math.sqrt(data)
      
      return this.formatNumber(res)
    },
    
    handleS1NonTopic1() {
      // S1 =  S2*1,11
      const S2 = this.handleS2NonTopic1()
      const res = S2 * 1.11
      
      return this.formatNumber(res)
    },
    
    handleS1NonTopic2() {
      return this.handleS1NonTopic1()
    },
    
    handleS1NonTopic3() {
      // S1 = S2*1.11
      const S2 = this.handleS2NonTopic3()
      const res = S2 * 1.11
      
      return this.formatNumber(res)
    },
    
    
    handleS2NonTopic1() {
      // S2 = U2 * I2 (VA)
      const res = this.dataInput.U2 * this.dataInput.I2
      
      return this.formatNumber(res)
    },
    
    handleS2NonTopic2() {
      // S2 = ((U2-1) * (I2-1))+ ((U2-2) * (I2-2))
      const U2_1 = Number(this.dataInput.U2_1)
      const U2_2 = Number(this.dataInput.U2_2)
      const I2_1 = Number(this.dataInput.I2_1)
      const I2_2 = Number(this.dataInput.I2_2)
      
      const res = (U2_1 * I2_1) + (U2_2 * I2_2)
      
      return this.formatNumber(res)
    },
    
    handleS2NonTopic3() {
      // S2 = ((U2-1) * (I2-1))+ ((U2-2) * (I2-2))
      const U2_1 = Number(this.dataInput.U2_1)
      const U2_2 = Number(this.dataInput.U2_2)
      const I2_1 = Number(this.dataInput.I2_1)
      const I2_2 = Number(this.dataInput.I2_2)
      
      const res = (U2_1 * I2_1) + (U2_2 * I2_2)
      
      return this.formatNumber(res)
    },
    
    handleS2Reverse() {
      // S2 = U2*I2
      const I2 = this.handleI2()
      const res = this.dataInput.U2 * I2
      
      return this.formatNumber(res)
    },
    
    
    // type 2 (NonReverse)
    handleI2TypeTwo() {
      // I2= (S2/U2) (A)
      // Mà U2 = (U2-1)+ (U2-2)
      const u2 = this.dataInput.U2_1 + this.dataInput.U2_2
      const res = this.dataInput.S2 / u2
      
      return this.formatNumber(res)
    },
    handleNDataNonTopic2(NIndex: number) {
      let Nv;
      let res;
      const At = this.inputAt
      
      switch (NIndex) {
        case 1: 
          // N2-1 = Nv*U2-1 mà Nv =(45/B*At)
          Nv = 45 / (this.inputB * At)
          res = Nv * this.dataInput.U2_1
          return this.formatNumber(res)
        
        case 2:
          Nv = 45 / (this.inputB * At)
          res = Nv * this.dataInput.U2_2
          return this.formatNumber(res)
        
        case 3:
          Nv = 45 / (this.inputB * At)
          res = Nv * this.dataInput.U2_3
          return this.formatNumber(res)
      }
    },
    
    handleN21() {
      // N2 = Nv*U2-1 mà Nv =(45/B*At)
      const At = this.inputAt
      
      const Nv = 45 / (this.inputB * At)
      const res = Nv * this.dataInput.U2_1
      
      return this.formatNumber(res)
    },
    handleN22() {
      // N2 = Nv*U2-2  mà Nv =(45/B*At)
      const At = this.inputAt
      
      const Nv = 45 / (this.inputB * At)
      const res = Nv * this.dataInput.U2_2
      
      return this.formatNumber(res)
    },
    handleN23() {
      // N2 = Nv*U2-3mà Nv =(45/B*At)
      const At = this.inputA * this.inputB
      
      const Nv = 45 / (this.inputB * At)
      const res = Nv * this.dataInput.U2_3
      
      return this.formatNumber(res)
    },
    
    handleI2TypeThree() {
      // I2= (S2/U2) (A)
      // Mà U2 = (U2-1)+ (U2-2)+(U2-3)
      const u2 = this.dataInput.U2_1 + this.dataInput.U2_2 + this.dataInput.U2_3
      const res = this.dataInput.S2 / u2
      
      return this.formatNumber(res)
    },
    
    
    handleCalcI1Reverse() {
     // I1= (S2/η*U1) (A)
      const S2 = this.handleS2ReverseType1()
      console.log('handleCalcI1Reverse');
      console.log('handleCalcI1Reverse', S2);
      
      
      const n = Number(this.dataInput.n)
      const U1 = Number(this.dataInput.U1)
      const I1 = S2 / (n * U1)

      return this.formatNumber(I1)
    },
    
    
    handleS2ReverseType1() {
      // S2 = U2*I2 Mà U2 = (U2-1)+(U2-2)
      const U2 = this.dataInput.U2_1 + this.dataInput.U2_2
      const I2 = this.handleI2TypeTwo()
      const S2 = U2 * I2
      
      return this.formatNumber(S2)
    },
    
    handleDTopic3(numberD: number) {
      // d2-1 = 1.128* căn bậc 2(I2-1/J)
      let data;
      let res;
      const I2_1 = Number(this.dataInput.I2_1)
      const I2_2 = Number(this.dataInput.I2_2)
      const I2_3 = Number(this.dataInput.I2_3)
      
      switch (numberD) { 
        case 1: 
          data = (I2_1 / this.dataInput.J)
          res = 1.128 * Math.sqrt(data)
          
          return this.formatNumber(res)
          
        case 2: 
          data = (I2_2 / this.dataInput.J)
          res = 1.128 * Math.sqrt(data)
          
          return this.formatNumber(res)
          
        case 3: 
          data = (I2_3 / this.dataInput.J)
          res = 1.128 * Math.sqrt(data)
          
          return this.formatNumber(res)
      }
    },
    
    
    handleD1ReverseType1() {
      // d1 = 1.128* căn bậc 2(I1/J)
      // const I2 = this.handleI2()
      // const data = (I2 / this.dataInput.J)
      // const d1 = 1.128 * Math.sqrt(data)
      return this.formatNumber(123)
    },
    
    
    
    
    // thu cap
    handleReverseI1Topic1() {
      // I1= (S2/η*U1) (A)
      // S2 = U2*I2
      // I2= (S2/U2) 
      const s2 = Number(this.dataInput.U2) * Number(this.dataInput.I2)
      
      const n = Number(this.dataInput.n)
      const U1 = Number(this.dataInput.U1)
      const res = s2 / ( n * U1)
      
      return this.formatNumber(res)
    },
    
  }
})


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
}