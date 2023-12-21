<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
<div class="box__container hero">
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>

  <div class="box__cover">
    <RouterView />
  </div>
</div>
</template>


<style lang="scss" scoped>
a {
  text-decoration: none;
}

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
     max-height: 95%;
     overflow-y: auto;
     position: fixed;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     border-radius: var(--lg-radius-border);
     padding: 3%;
     background-color: white;
     box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
     font-family: 'Afacad', sans-serif;
     
     p {
      line-height: 2;
     }
     
     @media (min-width: 300px) { 
        width: 90%;
     }
     
     @media (min-width: 640px) { 
        width: 60%;
     }
  }
}

// Animation
.hero {
  background-color: #0040C1;
}

.hero__title {
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  z-index: 1;
}

.cube {
  position: absolute;
  top: 80vh;
  left: 45vw;
  width: 10px;
  height: 10px;
  border: solid 1px #003298;
  transform-origin: top left;
  transform: scale(0) rotate(0deg) translate(-50%, -50%);
  -webkit-animation: cube 12s ease-in forwards infinite;
  animation: cube 12s ease-in forwards infinite;
}
.cube:nth-child(2n) {
  border-color: #0051f4;
}
.cube:nth-child(2) {
  -webkit-animation-delay: 2s;
          animation-delay: 2s;
  left: 25vw;
  top: 40vh;
}
.cube:nth-child(3) {
  -webkit-animation-delay: 4s;
          animation-delay: 4s;
  left: 75vw;
  top: 50vh;
}
.cube:nth-child(4) {
  -webkit-animation-delay: 6s;
          animation-delay: 6s;
  left: 90vw;
  top: 10vh;
}
.cube:nth-child(5) {
  -webkit-animation-delay: 8s;
          animation-delay: 8s;
  left: 10vw;
  top: 85vh;
}
.cube:nth-child(6) {
  -webkit-animation-delay: 10s;
          animation-delay: 10s;
  left: 50vw;
  top: 10vh;
}

@-webkit-keyframes cube {
  from {
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    opacity: 1;
  }
  to {
    transform: scale(20) rotate(960deg) translate(-50%, -50%);
    opacity: 0;
  }
}

@keyframes cube {
  from {
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    opacity: 1;
  }
  to {
    transform: scale(20) rotate(960deg) translate(-50%, -50%);
    opacity: 0;
  }
}
</style>