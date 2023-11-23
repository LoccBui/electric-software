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
/* Scroll bar css*/
::-webkit-scrollbar {
   width: 8px;
 }

::-webkit-scrollbar-track {
  background: #f1f1f1;

}

::-webkit-scrollbar-thumb {
  background: #1565C0;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.section::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

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
       height: auto;
       max-height: 90%;
       overflow-y: auto;
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
 
  