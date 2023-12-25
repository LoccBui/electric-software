<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'

import router from '@/router'

const counterStore = useCounterStore()
const ruleFormRef = ref(null)
const isStepOne  = ref(true)

const materialList = ref(
  [
    {
      id: 1, 
      title: 'Lá thép E có bề dày là 0.35mm', 
      value: {
        valueK: 0.93, valueN: 0.84
      }
    },
    {
      id: 2, 
      title: 'Lá thép E có bề dày là 0.5mm', 
      value: {
        valueK: 0.9, valueN: 0.82
      }
    },
    {
      id: 3,
      title: 'Lá thép bị han rỉ và lồi lõm',
      value: {
        valueK: 0.8, valueN: 0.8
      }  
    },
  ]
)

const JList = ref(
  [
    {id: 1, title: 'Công suất từ (0 - 50 VA) - J = 4(A/mm2)' , valueJ: 4},
    {id: 2, title: 'Công suất từ ( 50 - 100VA) - J = 3.5 (A/mm2)', valueJ: 3.5 },
    {id: 3, title: 'Công suất từ (100 - 200VA) - J = 3 (A/mm2)', valueJ: 3 },
    {id: 4, title: 'Công suất từ ( 200 - 250VA) - J = 2.5 (A/mm2)', valueJ: 2.5 },
    {id: 5, title: 'Công suất từ ( 500 - 1000VA) - J = 2 (A/mm2)', valueJ: 2 },
  ]
)

const ruleForm = ref(
  {
    inputU1: counterStore.dataInput.U1  || '',
    inputS2: counterStore.dataInput.S2 || '',
    inputU2_1: counterStore.dataInput.U2_1 || '',
    inputU2_2: counterStore.dataInput.U2_2 || '',
    inputU2_3: counterStore.dataInput.U2_3 || '',
    inputI2_1: counterStore.dataInput.I2_1 || '',
    inputI2_2: counterStore.dataInput.I2_2 || '',
    inputI2_3: counterStore.dataInput.I2_3 || '',
    inputA: counterStore.inputA || '',
    material: '',
    selectedJ: ''
  }
)


// using prop in form item to validate
const rules = ref(
  {
    inputU1: [{ required: true, message: 'Bạn cần nhập giá trị U1', trigger: 'change'}],
    inputS2: [{ required: true, message: 'Bạn cần nhập giá trị S2', trigger: 'change'}],
    inputU2_1: [{ required: true, message: 'Bạn cần nhập giá trị U2-1', trigger: 'change'}],
    inputU2_2: [{ required: true, message: 'Bạn cần nhập giá trị U2-2', trigger: 'change'}],
    inputU2_3: [{ required: true, message: 'Bạn cần nhập giá trị U2-3', trigger: 'change'}],
    inputI2_1: [{ required: true, message: 'Bạn cần nhập giá trị I2-1', trigger: 'change'}],
    inputI2_2: [{ required: true, message: 'Bạn cần nhập giá trị I2-2', trigger: 'change'}],
    inputI2_3: [{ required: true, message: 'Bạn cần nhập giá trị I2-3', trigger: 'change'}],
    inputA: [{ required: true, message: 'Bạn cần nhập giá trị a', trigger: 'change'}],
    material: [{ required: true, message: 'Bạn cần chọn giá trị', trigger: 'change'}],
    selectedJ: [{ required: true, message: 'Bạn cần chọn giá trị', trigger: 'change'}],
  }      
)

const aList = ref(
  [
    {id: 1, value: 1.5 },
    {id: 2, value: 1.8 },
    {id: 3, value: 2.2 },
    {id: 4, value: 2.8 },
    {id: 5, value: 3.5 },
    {id: 6, value: 3.9 },
  ]
)


const calcAtData = () => {
  // 1.423 * Căn bậc 2 của S2 
  // S2 = ((U2-1) * (I2-1))+ ((U2-2) * (I2-2))(VA)
  const U2_1 = counterStore.dataInput.U2_1
  const U2_2 = counterStore.dataInput.U2_2
  const I2_1 = counterStore.dataInput.I2_1
  const I2_2 = counterStore.dataInput.I2_2
  
  const S2 = (Number(U2_1) * Number(I2_1) ) + (Number(U2_2) * Number(I2_2) )
  const res = 1.423 * Math.sqrt(S2)
  
  return counterStore.formatNumber(res)
}


// Funtions
const assignValueToStore = () => {
  counterStore.dataInput.U1 = ruleForm.value.inputU1
  counterStore.dataInput.S2 = ruleForm.value.inputS2
  counterStore.dataInput.k = ruleForm.value.material.valueK
  counterStore.dataInput.n = ruleForm.value.material.valueN
  counterStore.dataInput.J = ruleForm.value.selectedJ
  counterStore.dataInput.U2_1 = ruleForm.value.inputU2_1
  counterStore.dataInput.U2_2 = ruleForm.value.inputU2_2
  counterStore.dataInput.U2_3 = ruleForm.value.inputU2_3
  counterStore.dataInput.I2_1 = ruleForm.value.inputI2_1
  counterStore.dataInput.I2_2 = ruleForm.value.inputI2_2
  counterStore.dataInput.I2_3 = ruleForm.value.inputI2_3
  
  counterStore.inputA = ruleForm.value.inputA
  counterStore.inputB = (1 - 1.5) * Number(counterStore.inputA)
  counterStore.inputAt = calcAtData()
}


const confirm = async () => {
  await  ruleFormRef.value.validate((valid) => {
  
    if (valid) {
      assignValueToStore()
      router.push('/result-non-reverse')
    } else {
      return false
    }
  })
}

const handleStepOne = async () => {
  await ruleFormRef.value.validate((valid) => {
    if (valid) {
      isStepOne.value = false
    } else {
      isStepOne.value = true
    }
  })
}
</script>

<template>
<div>
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-position="top"
    > 
        <div v-if="isStepOne">
          <el-form-item prop="inputU1" label="Điện áp vào U1"> 
              <el-input
                type="number"
                placeholder="Giá trị U1 (Cm)"
                autofocus 
                v-model="ruleForm.inputU1" 
                clearable  
                @input="assignValueToStore()"
              />  
          </el-form-item>
          
          <!-- Others -->
          <el-form-item prop="inputU2_1" label="Điện áp ra U2-1"> 
              <el-input
                  type="number"
                  placeholder="Giá trị U2-1 (Vol)"
                  v-model="ruleForm.inputU2_1" 
                  clearable   
                  @keyup.enter="confirm()"
                  @input="assignValueToStore()"
              />  
          </el-form-item>
          
          <el-form-item prop="inputU2_2" label="Điện áp ra U2-2"> 
              <el-input
                  type="number"
                  placeholder="Giá trị U2-2 (Vol)"
                  v-model="ruleForm.inputU2_2" 
                  clearable   
                  @keyup.enter="confirm()"
                  @input="assignValueToStore()"
              />  
          </el-form-item>
          
          <el-form-item prop="inputU2_3" label="Điện áp ra U2-3"> 
              <el-input
                  type="number"
                  placeholder="Giá trị U2-3 (Vol)"
                  v-model="ruleForm.inputU2_3" 
                  clearable   
                  @keyup.enter="confirm()"
                  @input="assignValueToStore()"
              />  
          </el-form-item>
          
          <el-form-item prop="inputI2_1" label="Dòng điện I2-1"> 
              <el-input
                  type="number"
                  placeholder="Giá trị I2-1 (A)"
                  v-model="ruleForm.inputI2_1" 
                  clearable   
                  @keyup.enter="confirm()"
                  @input="assignValueToStore()"
              />  
          </el-form-item>
          
          
          <el-form-item prop="inputI2_2" label="Dòng điện I2-2"> 
              <el-input
                  type="number"
                  placeholder="Giá trị I2-2 (A)"
                  v-model="ruleForm.inputI2_2" 
                  clearable   
                  @keyup.enter="confirm()"
                  @input="assignValueToStore()"
              />  
          </el-form-item>
          
          <el-form-item prop="inputI2_2" label="Dòng điện I2-3"> 
              <el-input
                  type="number"
                  placeholder="Giá trị I2-3 (A)"
                  v-model="ruleForm.inputI2_3" 
                  clearable   
                  @keyup.enter="confirm()"
                  @input="assignValueToStore()"
              />  
          </el-form-item>
          
                    
          <el-button 
            class="content__action"
            type="primary" 
            size="large"
            @click="handleStepOne()"> Tiếp theo
          </el-button>
        </div>
        
        <div v-else>
          <el-form-item prop="material" label="Chọn lá thép">
            <el-select 
                v-model="ruleForm.material" 
                class="content__action"
                placeholder="Chọn lá thép" 
                size="large"
                @change="assignValueToStore()"
                >
              <el-option
                v-for="item in materialList"
                :key="item.value"
                :label="item.title"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          
          
          <el-form-item prop="selectedJ" label="Chọn hệ số mật độ">
            <el-select 
              v-model="ruleForm.selectedJ" 
              class="content__action"
              placeholder="Hệ số mật độ J (A/mm)" 
              size="large"
              @change="assignValueToStore()"
              >
            <el-option
              v-for="item in JList"
              :key="item.value"
              :label="item.title"
              :value="item.valueJ"
            />
            </el-select>
          </el-form-item>
          
          <el-form-item prop="inputA" label="Chọn giá trị a:"> 
            <el-select v-model="ruleForm.inputA" @change="assignValueToStore()" style="width: 100%;" placeholder="Chọn giá trị a" size="large">
              <el-option
                v-for="item in aList"
                :key="item.value"
                :label="item.value"
                :value="item.value"
              />
            </el-select>
          </el-form-item>


          <el-button 
            class="content__action"
            type="primary" 
            size="large"
            @click="confirm()"> Tính toán
          </el-button>
        </div>
    </el-form>
</div>
</template>

<style lang="scss" scoped>
.content {
 $seft: &;
   
  &__action {
    width: 100%;
  }
}
</style>
