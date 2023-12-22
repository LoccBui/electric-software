<script setup lang="ts">
import { ref } from 'vue'

import AvailableInput from '@/components/AvailableInput.vue'
import NonReverseInputOne from '@/views/NonReverseInputOne.vue'
import NonReverseInputTwo from '@/views/NonReverseInputTwo.vue'
import NonReverseInputThree from '@/views/NonReverseInputThree.vue'

import { useCounterStore } from '@/stores/counter'
import { useGuiStore } from '@/stores/gui'
import router from '@/router'

const idTopic = Number(router.currentRoute.value.params.id)
const guiStore = useGuiStore()
const counterStore = useCounterStore()
const isHasInputData = ref(counterStore.inputA && counterStore.inputB ? true : false)
</script>

<template>
<div>
  <el-page-header title="Quay lại" class="mb-sm" @back="guiStore.navigateTo('/inputing')">
    <template #content>
      <span class="ml-sm"> Bài toán thuận | {{ guiStore.titleTopic }} </span>
    </template>
  </el-page-header>
  
  <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-position="top"
    > 
      <AvailableInput v-if="isHasInputData" />
      <NonReverseInputOne v-if="idTopic === 1" />
      <NonReverseInputTwo v-else-if="idTopic === 2" />
      <NonReverseInputThree v-else-if="idTopic === 3" />
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
