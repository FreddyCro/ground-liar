<script setup>
import { onMounted, ref } from 'vue';
import LsPic from './LsPic.vue';

defineProps({
  text: String,
  imgFront: String,
  imgBack: String,
});

const emptyContent = ref();
const isFrontImgShow = ref(false);
const isFloatingTextShow = ref(false);

onMounted(handleEmptyContent);

function handleEmptyContent() {
  const entries = (entries) => {
    entries.forEach((entry) => {
      if (entry.target === emptyContent.value[0] && entry.isIntersecting) {
        isFrontImgShow.value = true;
        isFloatingTextShow.value = false;
      } else if (
        entry.target === emptyContent.value[2] &&
        entry.isIntersecting
      ) {
        isFrontImgShow.value = false;
        isFloatingTextShow.value = true;
      }
    });
  };

  const observer = new IntersectionObserver(entries, {
    threshold: 0.5,
  });

  emptyContent.value.forEach((empty) => observer.observe(empty));
}
</script>

<template>
  <div class="ls-citygi">
    <!-- grid -->
    <div class="topic2_gridCard_container">
      <div class="topic2_gridCard_content">
        <div class="topic2_gridCard_image">
          <LsPic
            v-if="isFrontImgShow"
            :src="imgFront"
            classname="image"
            :webp="true"
            :alt="text"
          />
          <LsPic
            :src="imgBack"
            classname="image"
            :webp="true"
            role="presentation"
          />
        </div>
        <div v-if="isFloatingTextShow" class="floating-text">
          {{ text }}
        </div>
      </div>
      <div class="topic2_gridCard_box">
        <div
          v-for="item in 3"
          :key="`empty-${item}`"
          ref="emptyContent"
          class="topic2_gridCard_empty"
        ></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.ls-citygi {
  .topic2_gridCard_container {
    position: relative;
    max-width: 1060px;
    margin: 0 auto;
    height: 300vh;
  }

  .topic2_gridCard_content {
    position: sticky;
    top: 0;
    height: calc(100vh - 80px); /* 一次顯示一張圖片 */
    padding: 40px 0;
  }

  .topic2_gridCard_image {
    display: grid;
    height: 100%;

    .image:nth-of-type(1) {
      position: relative;
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    .image:nth-of-type(2) {
      position: relative;
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      z-index: -1;
    }
  }

  .topic2_gridCard_box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .topic2_gridCard_empty {
    height: 100vh;
    padding: 40px 0;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.8s ease; /* 圖片切換效果 */
  }

  .floating-text {
    position: absolute;
    bottom: 50%;
    right: 0;
    width: 45%;
    padding: 0 20px;
    animation: floatUp 0.5s ease-in forwards; /* 浮現動畫 */
    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
    color: #fafafa;
  }

  @keyframes floatUp {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
}
</style>
