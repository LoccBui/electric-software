<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { computed, onMounted, ref } from 'vue'
import router from '@/router'

import { useGuiStore } from '@/stores/gui'


const guiStore = useGuiStore()

const idTopic = router.currentRoute.value.params.id
const material = ref(null)
const selectedJ = ref(null)

const materialList = ref(
  [
    {id: 1, value: 'Lá thép E có bề dày là 0.35mm'},
    {id: 2, value: 'Lá thép E có bề dày là 0.5mm'},
    {id: 3, value: 'Lá thép bị han rỉ và lồi lõm'}
  ]
)

const JList = ref(
  [
    {id: 1, value: 'Công suất từ (0 - 50 VA) - J = 4(A/mm2)'},
    {id: 2, value: 'Công suất từ ( 50 - 100VA) - J = 3.5 (A/mm2)'},
    {id: 3, value: 'Công suất từ (100 - 200VA) - J = 3 (A/mm2)'},
    {id: 4, value: 'Công suất từ ( 200 - 250VA) - J = 2.5 (A/mm2)'},
    {id: 5, value: 'Công suất từ ( 500 - 1000VA) - J = 2 (A/mm2)'},
  ]
)

const ruleForm = ref(
  {
    inputU1: '',
    inputU2: '',
    inputS2: '',
  }
)

const rules = ref(
  {
    inputU1: [{ required: true, message: 'Bạn cần nhập giá trị U1', trigger: 'change'}],
    inputU2: [{ required: true, message: 'Bạn cần nhập giá trị U2', trigger: 'change'}],
    inputS2: [{ required: true, message: 'Bạn cần nhập giá trị S2', trigger: 'change'}],
  }      
)

</script>

<template>
<div>
    <el-page-header title="Quay lại" class="mb-sm" @back="guiStore.goBack('/optional')">
      <template #content>
        <span> Dạng bài toán thuận </span>
      </template>
    </el-page-header>

    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-position="top"
    >
        
        <h3> Nhập giá trị đầu vào </h3>
        
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
        
        <el-form-item prop="inputB" label="Công suất MBA (S2) (VA)"> 
            <el-input
                type="number"
                placeholder="Giá trị S2 (Cm)"
                v-model="ruleForm.inputS2" 
                clearable   
                @keyup.enter="confirm()"
            />  
        </el-form-item>
        
        <h3> Chọn vật liệu tấm lõi </h3>
        
        <el-select 
          v-model="material" 
          class="content__action"
          placeholder="Chọn vật liệu tấm lõi" 
          size="large">
          <el-option
            v-for="item in materialList"
            :key="item.value"
            :label="item.value"
            :value="item.value"
          />
        </el-select>
        
        <el-select 
          v-model="selectedJ" 
          class="content__action"
          placeholder="Hệ số mật độ J(A/mm)" 
          size="large">
          <el-option
            v-for="item in JList"
            :key="item.value"
            :label="item.value"
            :value="item.value"
          />
        </el-select>

        
        <el-button 
            class="content__action"
            v-show="!isChooseOptions" 
            type="primary" 
            size="large"
            @click="confirm()"> Tính toán
        </el-button>
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
