<script setup lang="ts">
defineProps<{
  type: string,
}>()
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
                <el-descriptions-item  label="U2-1"> Giá trị nhập vào (U2-1) phía sơ cấp</el-descriptions-item>
                <el-descriptions-item  label="U2-2"> Giá trị nhập vào (U2-1) phía sơ cấp </el-descriptions-item>
                <el-descriptions-item  label="U2-3"> Giá trị nhập vào (U2-1) phía sơ cấp </el-descriptions-item>
                <el-descriptions-item  label="I2"> I2= (S2/U2) (A) với U2 = (U2-1)+ (U2-2)+(U2-3)</el-descriptions-item>
                <el-descriptions-item  label="N2-1"> N2 = Nv*U2-1 mà Nv =(45/B*At)</el-descriptions-item>
                <el-descriptions-item  label="N2-2"> N2 = Nv*U2-2 mà Nv =(45/B*At)</el-descriptions-item>
                <el-descriptions-item  label="N2-3"> N2 = Nv*U2-3 mà Nv =(45/B*At)</el-descriptions-item>
                <el-descriptions-item  label="d2"> d2 = 1.128* căn bậc 2(I2/J)</el-descriptions-item>
              </div>
              
              <div v-else>
                <el-descriptions-item  label="S1"> U1*I1(VA)</el-descriptions-item>
                <el-descriptions-item  label="S2"> Giá trị nhập vào S2 </el-descriptions-item>
              </div>
        </el-descriptions>
         </el-collapse-item>
    </el-collapse>
</div>
</template>
