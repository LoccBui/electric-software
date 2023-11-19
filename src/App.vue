<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<div class="box__container">
  <div class="box__cover">
    <RouterView />
  </div>
</div>
</template>

<style lang="scss" scoped>
.box {
 $seft: &;
 
    &__container {
       background-color: #284F9E;
       position: fixed;
       top: 0;
       left: 0;
       bottom: 0;
       right: 0;
    }
    
    &__cover {
       min-width: 50%;
       min-height: 50%;
       max-height: 90%;
       overflow-y: scroll;
       position: fixed;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
       border-radius: var(--lg-radius-border);
       padding: 3%;
       background-color: white;
       box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
       
       @media (min-width: 300px) { 
          width: 90%;
       }
       
       @media (min-width: 640px) { 
          width: 60%;
       }
    }
}
</style>
 
  