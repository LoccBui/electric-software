<script setup lang="ts">
import AvailableInput from '@/components/AvailableInput.vue'
import ReverseInputOne from '@/views/ReverseInputOne.vue'
import ReverseInputTwo from '@/views/ReverseInputTwo.vue'
import ReverseInputThree from '@/views/ReverseInputThree.vue'

import { useCounterStore } from '@/stores/counter'
import { useGuiStore } from '@/stores/gui'

import router from '@/router'


const idTopic = Number(router.currentRoute.value.params.id)
const guiStore = useGuiStore()
const counterStore = useCounterStore()
</script>

<template>
<div>
    <el-page-header title="Quay lại" class="mb-sm" @back="guiStore.navigateTo('/optional')">
      <template #content>
        <span class="ml-sm"> Bài toán ngược | {{ guiStore.titleTopic }} </span>
      </template>
    </el-page-header>
    
    <el-form
        ref="ruleFormRef"
        label-position="top"
      > 
        <AvailableInput />
        <ReverseInputOne v-if="idTopic === 1" />
        <ReverseInputTwo v-else-if="idTopic === 2" />
        <ReverseInputThree v-else-if="idTopic === 3" />
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
