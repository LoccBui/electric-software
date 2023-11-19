<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { computed, onMounted, ref } from 'vue'
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
const ruleForm = ref(
    {
        inputA: counterStore.inputA || '',
        inputB: counterStore.inputB || '',
    }
)
</script>

<template>
<div class="content__container">
    <el-descriptions title="Giá trị đã có">
      <el-descriptions-item label="Giá trị A:">
        <el-tag effect="dark" size="medium"> {{ counterStore.inputA }} </el-tag>
      </el-descriptions-item>
      
      <el-descriptions-item label="Giá trị B:">
        <el-tag effect="dark" size="medium"> {{ counterStore.inputB }}</el-tag>
      </el-descriptions-item>
      
      <el-descriptions-item label="Giá trị At (A*B):">
        <el-tag effect="dark" size="medium"> {{ Number(counterStore.inputA) * Number(counterStore.inputB) }}</el-tag>
      </el-descriptions-item>
    </el-descriptions>
    
    <el-divider style="margin: 10px 0;" />
    
    <el-descriptions>
      <el-descriptions-item v-if="counterStore.dataInput.k" label="Hệ số hở (K):">
        <el-tag effect="dark" size="medium"> {{ counterStore.dataInput.k }}</el-tag>
      </el-descriptions-item>
      
      <el-descriptions-item v-if="counterStore.dataInput.n" label="Hệ số hiệu suất (η):">
        <el-tag effect="dark" size="medium"> {{ counterStore.dataInput.n }}</el-tag>
      </el-descriptions-item>
      
      <el-descriptions-item v-if="counterStore.dataInput.J" label="Giá trị J (A/mm2):">
        <el-tag effect="dark" size="medium"> {{ counterStore.dataInput.J }}</el-tag>
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
