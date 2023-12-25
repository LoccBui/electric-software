<script setup lang="ts">
import { useGuiStore } from '@/stores/gui'

defineProps<{
  type: string,
}>()

const guiStore = useGuiStore()
</script>

<template>
<div style="margin-top: 20px;">
    <el-collapse>
        <el-collapse-item title="Thông tin tính toán" name="2">
            <el-descriptions
            :column="1"
            border
            >
              <div v-if="type === 'soCap'">
                <el-descriptions-item  label="U1"> Giá trị nhập vào (U1) phía sơ cấp</el-descriptions-item>
                <el-descriptions-item  label="I1"> (S2/η*U1) </el-descriptions-item>
                <el-descriptions-item  label="N1"> Nv*U1 biết Nv =(45/B*At) </el-descriptions-item>
                <el-descriptions-item  label="d1"> 1.128* căn bậc 2(I1/J)</el-descriptions-item>
              </div>
              
              <div v-else-if="type === 'thuCap'">
                
                <div v-if="guiStore.numberTopic === 1 && guiStore.mathPath === 'non-reverse'">
                  <el-descriptions-item  label="U2"> Giá trị nhập vào U2 phía thứ cấp</el-descriptions-item>
                  <el-descriptions-item  label="I2"> I2 = (S2/U2) (A) </el-descriptions-item>
                  <el-descriptions-item  label="N2"> N2 = Nv * U2 mà Nv =(45/B*At)</el-descriptions-item>
                  <el-descriptions-item  label="d2"> d2 = 1.128 * căn bậc 2(I2/J)</el-descriptions-item>
                </div>
                
                <div v-if="guiStore.numberTopic === 2 && guiStore.mathPath === 'non-reverse'">
                  <el-descriptions-item  label="U2-1"> Giá trị nhập vào (U2-1) phía thứ cấp</el-descriptions-item>
                  <el-descriptions-item  label="U2-2"> Giá trị nhập vào (U2-2) phía thứ cấp</el-descriptions-item>
                  <el-descriptions-item  label="I2-1"> Giá trị nhập vào (I2-1) </el-descriptions-item>
                  <el-descriptions-item  label="I2-2"> Giá trị nhập vào (I2-2) </el-descriptions-item>
                  <el-descriptions-item  label="N2-1"> Nv*U2-1 mà Nv =(45/B*At)</el-descriptions-item>
                  <el-descriptions-item  label="N2-2"> Nv*U2-2 mà Nv =(45/B*At)</el-descriptions-item>
                  <el-descriptions-item  label="d2-1"> 1.128* căn bậc 2(I2-1/J) </el-descriptions-item>
                  <el-descriptions-item  label="d2-2"> 1.128* căn bậc 2(I2-2/J) </el-descriptions-item>
                </div>
                
                <div v-if="guiStore.numberTopic === 3 && guiStore.mathPath === 'non-reverse'">
                  <el-descriptions-item  label="U2-1"> Giá trị nhập vào (U2-1) phía thứ cấp</el-descriptions-item>
                  <el-descriptions-item  label="U2-2"> Giá trị nhập vào (U2-2) phía thứ cấp</el-descriptions-item>
                  <el-descriptions-item  label="U2-3"> Giá trị nhập vào (U2-3) phía thứ cấp</el-descriptions-item>
                  <el-descriptions-item  label="I2-1"> Giá trị nhập vào (I2-1) </el-descriptions-item>
                  <el-descriptions-item  label="I2-2"> Giá trị nhập vào (I2-2) </el-descriptions-item>
                  <el-descriptions-item  label="I2-3"> Giá trị nhập vào (I2-3) </el-descriptions-item>
                  <el-descriptions-item  label="N2-1"> Nv * U2-1 mà Nv =(45/B*At)</el-descriptions-item>
                  <el-descriptions-item  label="N2-2"> Nv * U2-2 mà Nv =(45/B*At)</el-descriptions-item>
                  <el-descriptions-item  label="N2-3"> Nv * U2-3 mà Nv =(45/B*At)</el-descriptions-item>
                  <el-descriptions-item  label="d2-1"> 1.128 * căn bậc 2(I2-1/J) </el-descriptions-item>
                  <el-descriptions-item  label="d2-2"> 1.128 * căn bậc 2(I2-2/J) </el-descriptions-item>
                  <el-descriptions-item  label="d2-3"> 1.128 * căn bậc 2(I2-3/J) </el-descriptions-item>
                </div>
              </div>
              
              <div v-else>
                <!-- non-reverse: 1 -->
                <div v-if="guiStore.numberTopic === 1 && guiStore.mathPath === 'non-reverse'">
                  <el-descriptions-item  label="S1"> S2 * 1,11  </el-descriptions-item>
                  <el-descriptions-item  label="S2"> U2 * I2  </el-descriptions-item>
                </div>
                
                <!-- non-reverse: 2 -->
                <div v-if="guiStore.numberTopic === 2 && guiStore.mathPath === 'non-reverse'">
                  <el-descriptions-item  label="S1"> S2 * 1.11  </el-descriptions-item>
                  <el-descriptions-item  label="S2"> ((U2-1) * (I2-1))+ ((U2-2) * (I2-2)) </el-descriptions-item>
                </div>
                
                <div v-if="guiStore.numberTopic === 3 && guiStore.mathPath === 'non-reverse'">
                  <el-descriptions-item  label="S1"> S2 * 1.11  </el-descriptions-item>
                  <el-descriptions-item  label="S2"> ((U2-1) * (I2-1))+ ((U2-2) * (I2-2)) </el-descriptions-item>
                </div>
                
                
              </div>
        </el-descriptions>
         </el-collapse-item>
    </el-collapse>
</div>
</template>
