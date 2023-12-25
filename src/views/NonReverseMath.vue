<script setup lang="ts">
import AvailableInput from '@/components/AvailableInput.vue'
import NonReverseInputOne from '@/views/NonReverseInputOne.vue'
import NonReverseInputTwo from '@/views/NonReverseInputTwo.vue'
import NonReverseInputThree from '@/views/NonReverseInputThree.vue'

import { useGuiStore } from '@/stores/gui'
import router from '@/router'

const idTopic = Number(router.currentRoute.value.params.id)
const guiStore = useGuiStore()
</script>

<template>
<div>
  <el-page-header title="Quay lại" class="mb-sm" @back="guiStore.navigateTo('/optional')">
    <template #content>
      <span class="ml-sm"> Bài toán thuận | {{ guiStore.titleTopic }} </span>
    </template>
  </el-page-header>
  
  <el-form
      label-position="top"
    > 
      <AvailableInput />
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
