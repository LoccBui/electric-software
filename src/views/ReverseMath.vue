<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { computed, onMounted, ref } from 'vue'

import AvailableInput from '@/components/AvailableInput.vue'
import ReverseInputOne from '@/views/ReverseInputOne.vue'
import NonReverseInputTwo from '@/views/NonReverseInputTwo.vue'
import NonReverseInputThree from '@/views/NonReverseInputThree.vue'

import { useCounterStore } from '@/stores/counter'
import { useGuiStore } from '@/stores/gui'

import router from '@/router'


const idTopic = Number(router.currentRoute.value.params.id)

const guiStore = useGuiStore()
const counterStore = useCounterStore()
</script>

<template>
<div v-if="counterStore.inputA && counterStore.inputB">
    <el-page-header title="Quay lại" class="mb-sm" @back="guiStore.navigateTo('/optional')">
      <template #content>
        <span> Bài toán ngược | {{ guiStore.titleTopic }} </span>
      </template>
    </el-page-header>
    
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-position="top"
      > 
        <AvailableInput />
        <ReverseInputOne v-if="idTopic === 1" />
        <NonReverseInputTwo v-else-if="idTopic === 2" />
        <NonReverseInputThree v-else-if="idTopic === 3" />
    </el-form>
</div>


<!-- No data -->
<!-- <el-empty v-else :image-size="200"  :description="'Không có dữ liệu'"/> -->
</template>

<style lang="scss" scoped>
.content {
 $seft: &;
   
  &__action {
    width: 100%;
  }
}
</style>
