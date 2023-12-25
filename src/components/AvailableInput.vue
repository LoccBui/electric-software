<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { useGuiStore } from '@/stores/gui'

const counterStore = useCounterStore()
const guiStore = useGuiStore()
</script>

<template>
<div class="content__container">

  <el-descriptions title="Giá trị đã có">
  
  <!-- Input A -->
    <el-descriptions-item v-if="counterStore.inputA" label="Giá trị A:">
      <el-tag effect="dark" size="large"> {{ counterStore.inputA }} </el-tag>
    </el-descriptions-item>
    
    <!-- Input B -->
    <el-descriptions-item v-if="counterStore.inputB" label="Giá trị B:">
      <el-tag effect="dark" size="large"> {{ counterStore.inputB }}</el-tag>
    </el-descriptions-item>
    
    
    <!-- Input At -->
    <div>
      
      <el-descriptions-item 
        v-if="counterStore.inputA && counterStore.inputB && guiStore.mathPath === 'reverse'" 
        label="Giá trị At:">
        <el-tag effect="dark" size="large"> {{ Number(counterStore.inputA) * Number(counterStore.inputB) }}</el-tag>
      </el-descriptions-item>
      
      <el-descriptions-item 
        v-else-if="counterStore.inputAt && guiStore.mathPath === 'non-reverse'" 
        label="Giá trị At:">
        <el-tag effect="dark" size="large"> {{ counterStore.inputAt }}</el-tag>
      </el-descriptions-item>
      
    </div>
    
    
    <!-- a of Fe-->
    <el-descriptions-item v-if="counterStore.dataInput.aFe" label="Diện tích a của Fe (Cm):">
      <el-tag effect="dark" size="large"> {{ counterStore.dataInput.aFe }}</el-tag>
    </el-descriptions-item>
    
    <!-- b of Fe-->
    <el-descriptions-item v-if="counterStore.dataInput.bFe" label="Diện tích b của Fe (Cm):">
      <el-tag effect="dark" size="large"> {{ counterStore.dataInput.bFe }}</el-tag>
    </el-descriptions-item>
    
  </el-descriptions>
  
  <el-divider style="margin: 10px 0;" />
  
  <el-descriptions>
    <!-- Input K -->
    <el-descriptions-item v-if="counterStore.dataInput.k" label="Hệ số hở (K):">
      <el-tag effect="dark" size="large"> {{ counterStore.dataInput.k }}</el-tag>
    </el-descriptions-item>
    
    <!-- Input N -->
    <el-descriptions-item v-if="counterStore.dataInput.n" label="Hệ số hiệu suất (η):">
      <el-tag effect="dark" size="large"> {{ counterStore.dataInput.n }}</el-tag>
    </el-descriptions-item>
    
    <!-- Input J -->
    <el-descriptions-item v-if="counterStore.dataInput.J" label="Giá trị J (A/mm2):">
      <el-tag effect="dark" size="large"> {{ counterStore.dataInput.J }}</el-tag>
    </el-descriptions-item>
    
    <!-- Input A -->
    <el-descriptions-item v-if="counterStore.dataInput.inputA" label="Giá trị a(Cm):">
      <el-tag effect="dark" size="large"> {{ counterStore.dataInput.inputA }}</el-tag>
    </el-descriptions-item>
    
  </el-descriptions>
</div>
</template>

<style lang="scss" scoped>
.content {
 $seft: &;
   
  &__container {
    width: 100%;
    padding: 1%;
    margin-bottom: 1%;
    border: thin solid #409eff;
    border-radius: var(--sm-radius-border);
  }
  
  .el-descriptions__body {
    background-color: var(--primary-color) !important;
  }
}

.el-descriptions__body {
    background-color: red($color: #000000) !important;
}
</style>
