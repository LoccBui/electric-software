<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { computed, onMounted, ref } from 'vue'

import { useGuiStore } from '@/stores/gui'
import AvailableInput from '@/components/AvailableInput.vue'
import router from '@/router'
import { useCounterStore } from '@/stores/counter'


const guiStore = useGuiStore()
const counterStore = useCounterStore()


const idTopic = Number(router.currentRoute.value.params.id)
const ruleFormRef = ref(null)

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
    inputU2: counterStore.dataInput.U2 || '',
    inputAFe: counterStore.dataInput.aFe || '',
    inputBFe: counterStore.dataInput.bFe || '',
    material: '',
    selectedJ: ''
  }
)


// using prop in form item to validate
const rules = ref(
  {
    inputU1: [{ required: true, message: 'Bạn cần nhập giá trị U1', trigger: 'change'}],
    inputU2: [{ required: true, message: 'Bạn cần nhập giá trị U2', trigger: 'change'}],
    inputAFe: [{ required: true, message: 'Bạn cần nhập giá trị a', trigger: 'change'}],
    inputBFe: [{ required: true, message: 'Bạn cần nhập giá trị b', trigger: 'change'}],
    material: [{ required: true, message: 'Bạn cần chọn giá trị', trigger: 'change'}],
    selectedJ: [{ required: true, message: 'Bạn cần chọn giá trị', trigger: 'change'}],
  }      
)


// Funtions
const assignValueToStore = () => {
  counterStore.dataInput.U1 = ruleForm.value.inputU1
  counterStore.dataInput.U2 = ruleForm.value.inputU2
  counterStore.dataInput.aFe = ruleForm.value.inputAFe
  counterStore.dataInput.bFe = ruleForm.value.inputBFe
  counterStore.dataInput.k = ruleForm.value.material.valueK
  counterStore.dataInput.n = ruleForm.value.material.valueN
  counterStore.dataInput.J = ruleForm.value.selectedJ
}


const confirm = async () => {
  await  ruleFormRef.value.validate((valid) => {
    if (valid) {
      assignValueToStore()
      router.push('/result-reverse')
    } else {
      return false
    }
  })
}
</script>

<template>
<div v-if="counterStore.inputA && counterStore.inputB">
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-position="top"
    > 
        <el-form-item prop="inputU1" label="Điện áp vào U1(Vol)"> 
            <el-input
              type="number"
              placeholder="Giá trị U1 (Cm)"
              autofocus 
              v-model="ruleForm.inputU1" 
              clearable  
            />  
        </el-form-item>
        
        <el-form-item prop="inputU2" label="Điện áp ra U2(Vol)"> 
            <el-input
              type="number"
              placeholder="Giá trị U2 (Cm)"
              v-model="ruleForm.inputU2" 
              clearable   
            />  
        </el-form-item>
        
        
        <el-form-item prop="inputAFe" label="Diện tích a của Fe"> 
            <el-input
                type="number"
                placeholder="Giá trị S2 (Cm)"
                v-model="ruleForm.inputAFe" 
                clearable   
                @keyup.enter="confirm()"
            />  
        </el-form-item>
        
        <el-form-item prop="inputBFe" label="Diện tích b của Fe"> 
            <el-input
                type="number"
                placeholder="Giá trị S2 (Cm)"
                v-model="ruleForm.inputBFe" 
                clearable   
                @keyup.enter="confirm()"
            />  
        </el-form-item>
        
        
        <el-form-item prop="material" label="Diện tích b của Fe">
          <el-select 
              v-model="ruleForm.material" 
              class="content__action"
              placeholder="Chọn vật liệu tấm lõi" 
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
            placeholder="Hệ số mật độ J(A/mm)" 
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
        
        <el-button 
            class="content__action"
            type="primary" 
            size="large"
            @click="confirm()"> Tính toán
        </el-button>
    </el-form>
</div>


<!-- No data -->
<el-empty v-else :image-size="200"  :description="'Không có dữ liệu'"/>
</template>

<style lang="scss" scoped>
.content {
 $seft: &;
   
  &__action {
    width: 100%;
  }
}
</style>
