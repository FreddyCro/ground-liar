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
    <div class="ls-section topic2_gridCard_container">
      <div class="topic2_gridCard_content">
        <div class="ls-citygi__img-container">
          <div class="ls-citygi__img-wrap">
            <LsPic :src="imgFront" classname="image" :webp="true" :alt="text" />
          </div>
          <div
            class="ls-citygi__img-wrap ls-citygi__img-wrap-back"
            :class="{
              'ls-citygi__img-wrap-back--show': !isFrontImgShow,
            }"
          >
            <LsPic
              :src="imgBack"
              classname="image"
              :webp="true"
              role="presentation"
            />
          </div>
          <div v-if="isFloatingTextShow" class="ls-h5 ls-citygi__text">
            {{ text }}
          </div>
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
  &__text {
    position: absolute;
    top: 0;
    left: 0;
    width: 45%;
    padding: 0 20px;
    font-weight: 700;
    color: $B6;
    animation: floatUp 0.5s ease-in forwards; /* 浮現動畫 */
  }

  &__img-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__img-wrap {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: auto;
    }
  }

  &__img-wrap-back {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: 0.15s ease-in-out;

    &--show {
      opacity: 1;
    }
  }

  .topic2_gridCard_container {
    position: relative;
    max-width: 1060px;
    margin: 0 auto;
    height: 300vh;
  }

  .topic2_gridCard_content {
    position: sticky;
    top: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .topic2_gridCard_box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .topic2_gridCard_empty {
    height: 70vh;
    pointer-events: none;
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
