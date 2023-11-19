<script setup lang="ts">
import router from '@/router'
import { ref } from 'vue'

import { useGuiStore } from '@/stores/gui'
const guiStore = useGuiStore()

const noneReverseList = ref(
  [
    {id: 1, name: 'Dạng đầu ra 1 cấp điện áp'},
    {id: 2, name: 'Dạng đầu ra 2 cấp điện áp'},
    {id: 3, name: 'Dạng đầu ra 3 cấp điện áp'},
  ]
)

const reverseList = ref(
  [
    {id: 1, name: 'Dạng đầu ra 1 cấp điện áp'},
    {id: 2, name: 'Dạng đầu ra 2 cấp điện áp'},
    {id: 3, name: 'Dạng đầu ra 3 cấp điện áp'},
  ]
)

//Funtions
const chooseReverseItem = (item: Object) => {
  guiStore.titleTopic = item.name
  guiStore.typeTopic = `SC`
  guiStore.numberTopic = item.id

  router.push(`/reverse/${item.id}`)
}

const chooseNonReverseItem = (item: Object) => {
  guiStore.titleTopic = item.name
  guiStore.typeTopic = `SC` + item.id
  guiStore.numberTopic = item.id
  
  router.push(`/non-reverse/${item.id}`)
}
</script>

<template>
<div class="box__content__cover">
  
  <el-page-header title="Quay lại" class="mb-sm" @back="guiStore.navigateTo('/')">
    <template #content>
      <span> Chọn dạng bài </span>
    </template>
  </el-page-header>
  
  <!-- Bài toán thuận -->
  <el-divider content-position="left">Dạng bài toán thuận</el-divider>
  
  <div class="box__options__cover">
      <div 
          @click="chooseNonReverseItem(item)"
          class="box__options__item" 
          v-for="(item, index) in noneReverseList" 
          :key="index"
      >
          <el-button type="primary"> {{ item.name }} </el-button>                
      </div> 
  </div>
  
  
  <!-- Bài toán ngược -->
  <el-divider content-position="left">Dạng bài toán ngược</el-divider>
  
  <div class="box__options__cover">
      <div 
          class="box__options__item" 
          v-for="(item, index) in reverseList" 
          :key="index" 
          @click="chooseReverseItem(item)"
      >
          <el-button type="primary"> {{ item.name }}</el-button>                
      </div> 
  </div>
</div>
</template>

<style lang="scss" scoped>
.box {
 $seft: &;
 
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
 