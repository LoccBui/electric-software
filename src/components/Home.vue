<script setup lang="ts">
import router from '@/router'
import { computed, onMounted, ref } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { useGuiStore } from '@/stores/gui'

const guiStore = useGuiStore()
const ruleFormRef = ref(null)
const isChooseOptions = ref(false)
const counterStore = useCounterStore()

const ruleForm = ref(
    {
        inputA: counterStore.inputA || '',
        inputB: counterStore.inputB || '',
    }
)

const rules = ref(
    {
        inputA: [{ required: true, message: 'Bạn cần nhập giá trị A', trigger: 'change' }],
        inputB: [{ required: true, message: 'Bạn cần nhập giá trị B', trigger: 'change'}],
    }      
)

const inputAt = computed(() => {
    return Number(ruleForm.value.inputA) * Number(ruleForm.value.inputB)
})

// Funtions
const confirm = async () => {
    await  ruleFormRef.value.validate((valid) => {
        if (valid) {
            counterStore.inputA = ruleForm.value.inputA
            counterStore.inputB = ruleForm.value.inputB
            router.push(`${guiStore.mathPath}/${guiStore.numberTopic}`)
        } else {
            return false
        }
    })
}

onMounted(() => {
    document.title = 'Phần mềm tính toán điện áp'
})
</script>
  

<template>
<div class="dashboard__container">

    <el-page-header title="Quay lại" class="mb-sm" @back="guiStore.navigateTo('/optional')">
        <template #content>
          <span style="margin-left: 8px;"> Chọn dạng bài </span>
        </template>
    </el-page-header>
        

    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-position="top"
    >
        
        <h1> Nhập giá trị theo đề bài </h1>
        
        <el-form-item prop="inputA" class="box__input__cover" label="Nhập giá trị A (Cm)"> 
            <el-input
                type="number"
                placeholder="Giá trị A (Cm)"
                autofocus 
                v-model="ruleForm.inputA" 
                clearable
                @change="confirm()"
            />  
        </el-form-item>
        
        <el-form-item prop="inputB" class="box__input__cover" label="Nhập giá trị B (Cm)"> 
            <el-input
                type="number"
                placeholder="Giá trị B (Cm)"
                v-model="ruleForm.inputB" 
                clearable   
                @keyup.enter="confirm()"
                @change="confirm()"
            />  
        </el-form-item>
        
        <el-form-item label="Giá trị At =  1.423 * Căn bậc 2 của S2 (Cm2)"> 
            <el-input
                v-model="inputAt" 
                disabled   
            />  
        </el-form-item>
        
        <el-button 
            class="dashboard__action"
            v-show="!isChooseOptions" 
            type="primary" 
            size="large"
            @click="confirm()">
           Bắt đầu
        </el-button>
    </el-form>
</div>
</template>
  
<style lang="scss" scoped>
.dashboard {
 $seft: &;
  
  &__action {
    width: 100%;
  }
}
</style>
 
  