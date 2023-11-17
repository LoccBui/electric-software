<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import router from '@/router'

import Calculator from '@/components/Calculator.vue'

const inputA = ref(null)
const inputB = ref(null)
const type = ref('')
const isChooseOptions = ref(false)


const ruleForm = ref(
    {
        inputA: '',
        inputB: '',
    }
)

const rules = ref(
    {
        inputA: [{ required: true, message: 'Bạn cần nhập giá trị A', trigger: 'change' }],
        inputB: [{ required: true, message: 'Bạn cần nhập giá trị B', trigger: 'change'}],
    }      
)

// Funtions
const start = () => {
    isChooseOptions.value = true
    router.push('/optional')
}


onMounted(() => {
    document.title = 'Trang chủ'
})
</script>
  

<template>
    <div class="box__container">
    
        
        <el-form class="box__cover" 
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            label-position="top"
        >
            
            <h1> Nhập giá trị theo đề bài Optional </h1>
            
            <el-form-item prop="inputA" class="box__input__cover" label="Nhập giá trị A (Cm)"> 
                <el-input
                    autofocus 
                    v-model="ruleForm.inputA" 
                    clearable  
                />  
            </el-form-item>
            
            <el-form-item prop="inputB" class="box__input__cover" label="Nhập giá trị B (Cm)"> 
                <el-input
                    v-model="ruleForm.inputB" 
                    clearable   
                    @keyup.enter="start()"
                />  
            </el-form-item>
            
            
            <el-button v-show="!isChooseOptions" type="primary" @click="start()">
               Bắt đầu
            </el-button>
            
            <!-- <el-empty description="Cần nhập giá trị A và B"></el-empty> -->
        </el-form>
        
    </div>
</template>
  

<style lang="scss" scoped>
.box {
 $seft: &;
 
    &__container {
        background-color: rebeccapurple;
       position: fixed;
       top: 0;
       left: 0;
       bottom: 0;
       right: 0;
    }
    
    &__content {
        &__cover {
           width: 100%;
       }
    }
    
    &__cover {
       width: 50%;
       min-height: 50%;
       position: fixed;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
       border-radius: 20px;
       box-shadow: var(--primary-box-shadow);
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       padding: 40px;
       background-color: white;
    }
    
    
    
    &__input  {
    
        &__cover {
            width: 100%;
        }
    }
    
    
    &__options {
        &__cover {
            width: 100%;
            
            button {
                width: 100%;
            }
        }
        
        &__item {
            margin: 15px 0;
            width: 100%;
        }
    } 
}
</style>
 
  