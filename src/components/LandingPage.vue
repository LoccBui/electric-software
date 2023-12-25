<script setup lang="ts">
import { useGuiStore } from '@/stores/gui'
const guiStore = useGuiStore()
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
    <h2> Giới thiệu </h2>
  
    <p>
      Phần mềm <span class="hightlight">Trans_Cal</span>, được phát triển bởi nhóm tác giả gồm TS. Lê Phương Trường và Ths. Thiên Khương Tùng, là một ứng dụng tính toán chuyên sâu nhằm hỗ trợ sinh viên các trường đại học, cao đẳng và trung cấp trong quá trình thiết kế và tính toán máy biến áp cách lý 1 pha.
    </p>
    
    <p>
      Với mục tiêu chính là cung cấp giải pháp nhanh chóng và chính xác cho quá trình tính toán phức tạp của máy biến áp, <span class="hightlight">Trans_Cal</span> được tạo ra để giảm bớt gánh nặng tính toán cho người sử dụng. Đặc biệt, ứng dụng này nhằm hỗ trợ sinh viên trong các ngành học liên quan đến điện công nghiệp và điện dân dụng, bao gồm đào tạo Cao đẳng, Trung cấp, và các chương trình học Vừa làm vừa học.
    </p>
    
    <p>
      Với giao diện thân thiện và dễ sử dụng, <span class="hightlight">Trans_Cal</span> cho phép người dùng một cách thuận lợi nhập thông số cần thiết và tự động thực hiện các bước tính toán phức tạp, giúp họ tiết kiệm thời gian và nỗ lực trong việc nghiên cứu và thiết kế máy biến áp cách lý 1 pha. Điều này không chỉ nâng cao hiệu suất làm việc mà còn tạo điều kiện thuận lợi cho sự phát triển chuyên sâu trong lĩnh vực công nghiệp và khoa học kỹ thuật.
    </p>
    
    <el-divider />
    
    <div class="mb-sm">
      <h2>Thông tin liên hệ:</h2>
      <p>
        Thiên Khương Tùng: <br>
        SĐT: 0902859832    <br>
        Email: 
          <a href="mailto:khuongtung1980@gmai.com">
            khuongtung1980@gmai.com   <br>
          </a> 
        
        Lê Phương Trường   <br>
        SĐT: 0984821007    <br>
        Email: 
          <a href="mailto:letruonglhu@gmail.com">
            letruonglhu@gmail.com 
          </a> 
          <span>hoặc</span>
          <a href="mailto:lephuongtruong@lhu.edu.vn">
            lephuongtruong@lhu.edu.vn
          </a>
      </p>
    </div>
    
    
    <el-button 
      style="width: 100%;" 
      size="large" 
      type="primary"
      @click="guiStore.navigateTo('/optional')"
      >Bắt đầu
    </el-button>
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


.hightlight {
  color: var(--primary-color);
  font-weight: bolder;
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