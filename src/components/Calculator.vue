<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useGuiStore } from '@/stores/gui'

const guiStore = useGuiStore()
const contentSelection:any = ref(null)
const mathTypeName:any = ref(null)

const noneReverseList = ref(
  [
    {id: 1, type: 'non-reverse',name: 'Dạng đầu ra 1 cấp điện áp'},
    {id: 2, type: 'non-reverse',name: 'Dạng đầu ra 2 cấp điện áp'},
    {id: 3, type: 'non-reverse',name: 'Dạng đầu ra 3 cấp điện áp'},
  ]
)

const reverseList = ref(
  [
    {id: 1, type: 'reverse',name: 'Dạng đầu ra 1 cấp điện áp'},
    {id: 2, type: 'reverse',name: 'Dạng đầu ra 2 cấp điện áp'},
    {id: 3, type: 'reverse',name: 'Dạng đầu ra 3 cấp điện áp'},
  ]
)

//Funtions
const chooseItem = (item: {type: string}) => {
  item.type === 'reverse' ? chooseReverseItem(item) : chooseNonReverseItem(item)
}

const chooseReverseItem = (item: Object) => {
  guiStore.titleTopic = item.name
  guiStore.typeTopic = `TC`
  guiStore.numberTopic = item.id
  guiStore.mathPath = 'reverse'
  
  guiStore.navigateTo('/inputing')
}

const chooseNonReverseItem = (item: Object) => {
  guiStore.titleTopic = item.name
  guiStore.typeTopic = `SC` + item.id
  guiStore.numberTopic = item.id
  guiStore.mathPath = 'non-reverse'
  
  guiStore.navigateTo('/inputing')
}


const handleCommand = (command: string) => {
  if (command === 'nonReverse') {
    contentSelection.value = noneReverseList.value
    mathTypeName.value = 'Dạng bài toán thuận'
    guiStore.showMessage('Bạn đã chọn dạng bài toán thuận', 'success')
  }
  else {
    contentSelection.value = reverseList.value
    mathTypeName.value = 'Dạng bài toán ngược'
    guiStore.showMessage('Bạn đã chọn dạng bài toán ngược', 'success')
  }
}

const handleDataSelection = () => {
  if (guiStore.mathPath === 'reverse') {
    contentSelection.value = reverseList.value
    mathTypeName.value = 'Dạng bài toán ngược'
  } else if (guiStore.mathPath === 'non-reverse') {
    contentSelection.value = noneReverseList.value
    mathTypeName.value = 'Dạng bài toán thuận'
  }
}

onMounted(() => {
  handleDataSelection()
})
</script>

<template>
<div class="box__content__cover">
  
  <el-page-header title="Quay lại" class="mb-sm" @back="guiStore.navigateTo('/')">
    <template #content>
      <span style="margin-left: 8px;"> Chọn dạng bài </span>
    </template>
  </el-page-header>
  
  
  <el-descriptions>
    <el-descriptions-item>
      <span>Bạn đang chọn: </span>
      <el-tag size="large">{{ mathTypeName || 'Vui lòng chọn dạng toán' }}</el-tag>
    </el-descriptions-item>
  </el-descriptions>
  
  <el-dropdown @command="handleCommand">
    <el-button type="primary">
      Dạng bài toán
      <img style="width: 10px; margin-left: 5px;" src="../assets/icons/icons_dropdown.png" alt="Dropdown Icon">
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="nonReverse">Dạng bài toán thuận</el-dropdown-item>
        <el-dropdown-item command="reverse">Dạng bài toán ngược</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  
  <el-card v-if="contentSelection" style="margin-top: 10px;">
    <div v-for="(item, index) in contentSelection" :key="index">
      <el-button 
        @click="chooseItem(item)"
        style="margin-top: 10px; 
        width: 100%;" 
        type="primary"> 
        {{ item.name }} 
      </el-button>         
    </div>
  </el-card>
  
  <el-empty v-else :image-size="200" description="Không có dữ liệu. Vui lòng chọn dạng bài toán để tiếp tục" />
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
 