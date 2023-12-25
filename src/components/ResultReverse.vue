<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { ref } from 'vue'

import InformationCalculation from '@/views/InformationCalculation.vue'
import { useGuiStore } from '@/stores/gui'

const guiStore = useGuiStore()
const counterStore = useCounterStore()
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
<div class="content__container">
  <span> Kết quả đầu ra </span>
  
  <el-tabs v-model="activeTab" :tab-position="tabPosition" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane name="soCap" label="Phía sơ cấp">
        <el-descriptions
          :column="1"
          border
        >
          <div v-if="guiStore.mathPath === 'reverse'">
            <div v-if="guiStore.numberTopic === 1">
              <el-descriptions-item  label="Điện áp vào U1 (Vol)"> {{ counterStore.dataInput.U1 }}</el-descriptions-item>
              <el-descriptions-item  label="Dòng điện ra I1 (A)"> {{ counterStore.handleCalcI1() }} </el-descriptions-item>
              <el-descriptions-item  label="Số vòng dây N1 (Vg)"> {{ counterStore.handleN1() }}</el-descriptions-item>
              <el-descriptions-item  label="Đường kính dây d1 (mm)">{{ counterStore.handleD1() }}</el-descriptions-item>
            </div>
            
            <div v-if="guiStore.numberTopic === 2">
              <el-descriptions-item  label="Điện áp vào U1 (Vol)"> {{ counterStore.dataInput.U1 }}</el-descriptions-item>
              <el-descriptions-item  label="Dòng điện ra I1 (A)"> {{ counterStore.handleNonI1Topic2() }} </el-descriptions-item>
              <el-descriptions-item  label="Số vòng dây N1 (Vg)"> {{ counterStore.handleN1() }}</el-descriptions-item>
              <el-descriptions-item  label="Đường kính dây d1 (mm)">{{ counterStore.handleD1() }}</el-descriptions-item>
            </div>
            
            <div v-if="guiStore.numberTopic === 3">
              <el-descriptions-item  label="Điện áp vào U1 (Vol)"> {{ counterStore.dataInput.U1 }}</el-descriptions-item>
              <el-descriptions-item  label="Dòng điện ra I1 (A)"> {{ counterStore.handleNonI1Topic3() }} </el-descriptions-item>
              <el-descriptions-item  label="Số vòng dây N1 (Vg)"> {{ counterStore.handleN1() }}</el-descriptions-item>
              <el-descriptions-item  label="Đường kính dây d1 (mm)">{{ counterStore.handleNonD1Topic3() }}</el-descriptions-item>
            </div>
          </div>
       
        </el-descriptions>
    </el-tab-pane>
    
    <el-tab-pane name="thuCap" label="Phía thứ cấp">
      <el-descriptions
          :column="1"
          border
        >
          <div v-if="guiStore.numberTopic === 1">
            <el-descriptions-item  label="Điện áp vào U2 (Vol)"> {{ counterStore.dataInput.U2 }}</el-descriptions-item>
            <el-descriptions-item  label="Dòng điện ra I2 (A)"> {{ counterStore.handleI2() }} </el-descriptions-item>
            <el-descriptions-item  label="Số vòng dây N2 (Vg)"> {{ counterStore.handleNonN2Topic1() }}</el-descriptions-item>
            <el-descriptions-item  label="Đường kính dây d2 (mm)">{{ counterStore.handleNonD2Topic1() }}</el-descriptions-item>
          </div>
          
          
          <div v-else-if="guiStore.numberTopic === 2">
            <el-descriptions-item label="Điện áp vào U2-1"> {{ counterStore.dataInput.U2_1 }} </el-descriptions-item>
            <el-descriptions-item label="Điện áp vào U2-2"> {{ counterStore.dataInput.U2_2 }} </el-descriptions-item>
            <el-descriptions-item label="Dòng điện ra I2-1"> {{ counterStore.dataInput.I2_1 }} </el-descriptions-item>
            <el-descriptions-item label="Dòng điện ra I2-2"> {{ counterStore.dataInput.I2_2 }} </el-descriptions-item>
            <el-descriptions-item label="Số vòng dây N2-1"> {{ counterStore.handleN21() }} </el-descriptions-item>
            <el-descriptions-item label="Số vòng dây N2-2"> {{ counterStore.handleN22() }} </el-descriptions-item>
            <el-descriptions-item label=" Đường kính dây d2-1"> {{ counterStore.handleD21NonTopic2() }} </el-descriptions-item>
            <el-descriptions-item label=" Đường kính dây d2-2"> {{ counterStore.handleD22NonTopic2() }} </el-descriptions-item>
          </div>
          
          
          <div v-else-if="guiStore.numberTopic === 3">
            <el-descriptions-item  label="Điện áp vào U2-1"> {{ counterStore.dataInput.U2_1 }} </el-descriptions-item>
            <el-descriptions-item  label="Điện áp vào U2-2"> {{ counterStore.dataInput.U2_2 }} </el-descriptions-item>
            <el-descriptions-item  label="Điện áp vào U2-3"> {{ counterStore.dataInput.U2_3 }} </el-descriptions-item>
            <el-descriptions-item  label="Dòng điện ra I2-1"> {{ counterStore.dataInput.I2_1 }} </el-descriptions-item>
            <el-descriptions-item  label="Dòng điện ra I2-2"> {{ counterStore.dataInput.I2_2 }} </el-descriptions-item>
            <el-descriptions-item  label="Dòng điện ra I2-3"> {{ counterStore.dataInput.I2_3 }} </el-descriptions-item>
            
            
            <el-descriptions-item  label="Số vòng dây N2-1"> {{ counterStore.handleNDataNonTopic2(1) }} </el-descriptions-item>
            <el-descriptions-item  label="Số vòng dây N2-2"> {{ counterStore.handleNDataNonTopic2(2) }} </el-descriptions-item>
            <el-descriptions-item  label="Số vòng dây N2-3"> {{ counterStore.handleNDataNonTopic2(3) }} </el-descriptions-item>
            
            
            <el-descriptions-item  label="Đường kính dây d2-1"> {{ counterStore.handleDTopic3(1) }} </el-descriptions-item>
            <el-descriptions-item  label="Đường kính dây d2-2"> {{ counterStore.handleDTopic3(2) }} </el-descriptions-item>
            <el-descriptions-item  label="Đường kính dây d2-3"> {{ counterStore.handleDTopic3(3) }} </el-descriptions-item>
          </div>
          
        </el-descriptions>
    </el-tab-pane>
    
    <el-tab-pane name="MBA" label="Công suất MBA">
      <el-descriptions
          :column="1"
          border
        >
          <div v-if="guiStore.numberTopic === 1">
            <el-descriptions-item  label="Công suất S1 (VA)"> {{ counterStore.handleS1NonTopic1() }}</el-descriptions-item>
            <el-descriptions-item  label="Công suất S2 (VA)"> {{ counterStore.handleS2NonTopic1() }}</el-descriptions-item>
          </div>
          
          <div v-else-if="guiStore.numberTopic === 2">
            <el-descriptions-item  label="Công suất S1 (VA)"> {{ counterStore.handleS1NonTopic2() }}</el-descriptions-item>
            <el-descriptions-item  label="Công suất S2 (VA)"> {{ counterStore.handleS2NonTopic2() }}</el-descriptions-item>
          </div>
          
          <div v-else-if="guiStore.numberTopic === 3">
            <el-descriptions-item  label="Công suất S1 (VA)"> {{ counterStore.handleS1NonTopic3() }}</el-descriptions-item>
            <el-descriptions-item  label="Công suất S2 (VA)"> {{ counterStore.handleS2NonTopic3() }}</el-descriptions-item>
          </div>
          
      </el-descriptions>
    </el-tab-pane>
  </el-tabs>
  
  <InformationCalculation :type="activeTab" />
  
  <el-button style="width: 100%;" size="large" type="primary" @click="guiStore.navigateTo('/')">Quay về trang chủ</el-button>
</div>
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
