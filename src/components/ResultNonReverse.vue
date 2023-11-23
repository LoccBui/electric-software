<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
import { computed, onMounted, ref } from 'vue'

import InformationCalculation from '@/views/InformationCalculation.vue'


import { useGuiStore } from '@/stores/gui'
const guiStore = useGuiStore()

const counterStore = useCounterStore()
import router from '@/router'

const tabPosition = ref('top')

const activeTab = ref('soCap')

const handleClick = (tab) => {
  if (tab.index == 0) {
    activeTab.value = 'soCap'
  } else if (tab.index == 1) {
    activeTab.value = 'thuCap'
  } else {
    activeTab.value = 'MBA'
  }
}
</script>

<template>
<div v-if="counterStore.inputA && counterStore.inputB" class="content__container">
  <el-page-header title="Quay lại" class="mb-sm" @back="router.back()">
    <template #content>
      <span> Kết quả đầu ra </span>
    </template>    
  </el-page-header>
  
  
  <el-tabs v-model="activeTab" :tab-position="tabPosition" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane name="soCap" label="Phía sơ cấp">
        <el-descriptions
          :column="1"
          border
        >
          <el-descriptions-item  label="Điện áp vào U1"> {{ counterStore.dataInput.U1 }}</el-descriptions-item>
          <el-descriptions-item  label="Dòng điện ra I1"> {{ counterStore.handleCalcI1() }} </el-descriptions-item>
          <el-descriptions-item  label="Số vòng dây N1"> {{ counterStore.handleN1() }}</el-descriptions-item>
          <el-descriptions-item  label="Đường kính dây d1">{{ counterStore.handleD1() }}</el-descriptions-item>
        </el-descriptions>
    </el-tab-pane>
    
    <el-tab-pane name="thuCap" label="Phía thứ cấp">
      <el-descriptions
          :column="1"
          border
        >
          <div v-if="guiStore.numberTopic === 1">
            <el-descriptions-item  label="Điện áp vào U2"> {{ counterStore.dataInput.U2 }}</el-descriptions-item>
            <el-descriptions-item  label="Dòng điện ra I2"> {{ counterStore.handleI2() }} </el-descriptions-item>
            <el-descriptions-item  label="Số vòng dây N1"> {{ counterStore.handleN1TC() }}</el-descriptions-item>
            <el-descriptions-item  label="Đường kính dây d2">{{ counterStore.handleD2() }}</el-descriptions-item>
          </div>
          
          
          <div v-else-if="guiStore.numberTopic === 2">
            <el-descriptions-item label="Điện áp vào U2-1"> {{ counterStore.dataInput.U2_1 }} </el-descriptions-item>
            <el-descriptions-item label="Điện áp vào U2-2"> {{ counterStore.dataInput.U2_2 }} </el-descriptions-item>
            <el-descriptions-item label="Dòng điện ra I2"> {{ counterStore.handleI2TypeTwo() }} </el-descriptions-item>
            <el-descriptions-item label="Số vòng dây N2-1"> {{ counterStore.handleN21() }} </el-descriptions-item>
            <el-descriptions-item label="Số vòng dây N2-2"> {{ counterStore.handleN22() }} </el-descriptions-item>
            <el-descriptions-item label=" Đường kính dây d2"> {{ counterStore.handleD2() }} </el-descriptions-item>
          </div>
          
          
          <div v-else-if="guiStore.numberTopic === 3">
            <el-descriptions-item  label="Điện áp vào U2-1"> {{ counterStore.dataInput.U2_1 }} </el-descriptions-item>
            <el-descriptions-item  label="Điện áp vào U2-2"> {{ counterStore.dataInput.U2_2 }} </el-descriptions-item>
            <el-descriptions-item  label="Điện áp vào U2-3"> {{ counterStore.dataInput.U2_3 }} </el-descriptions-item>
            <el-descriptions-item  label="Dòng điện ra I2"> {{ counterStore.handleI2TypeThree() }} </el-descriptions-item>
            <el-descriptions-item  label="Số vòng dây N2-1"> {{ counterStore.handleN21() }} </el-descriptions-item>
            <el-descriptions-item  label="Số vòng dây N2-2"> {{ counterStore.handleN22() }} </el-descriptions-item>
            <el-descriptions-item  label="Số vòng dây N2-3"> {{ counterStore.handleN23() }} </el-descriptions-item>
            <el-descriptions-item  label=" Đường kính dây d2"> {{ counterStore.handleD2() }} </el-descriptions-item>
          </div>
          
        </el-descriptions>
    </el-tab-pane>
    
    <el-tab-pane name="MBA" label="Công suất MBA">
      <el-descriptions
          :column="1"
          border
        >
          <el-descriptions-item  label="Công suất S1"> {{ counterStore.handleS1() }}</el-descriptions-item>
          <el-descriptions-item  label="Công suất S2"> {{ counterStore.dataInput.S2 }} </el-descriptions-item>
      </el-descriptions>
    </el-tab-pane>
  </el-tabs>
  
  <InformationCalculation :type="activeTab" />
  
  <el-button style="width: 100%;" size="large" type="primary" @click="guiStore.navigateTo('/')">Quay về trang chủ</el-button>
</div>

<!-- No data -->
<el-empty v-else :image-size="200"  :description="'Không có dữ liệu'"/>
</template>

<style lang="scss" scoped>
.content {
 $seft: &;
 

 
  &__tab {
  
    &__item {
      padding: 20px 0;
    }  
  }   
}
</style>
