<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { useElementBounding } from '@vueuse/core';
import LsPic from './LsPic.vue';
import { getDeviceType } from '@/utils/get-device';

const props = defineProps({
  id: String,
  imgs: Array,
});

const root = ref();
const containerHeight = ref(window.innerHeight);
const keyVisualWords = ref();
const activeList = ref(props.imgs ? props.imgs.map(() => 1) : []);

// 畫面寬度(不包含滾動軸)
const { top: wordsTop } = useElementBounding(keyVisualWords);
const deviceType = ref(getDeviceType());
const initialDeviceScreenHeight = ref(window.innerHeight);

watch(wordsTop, handleWordsTopUpdate);

// 畫面大小變化時偵測畫面寬度(不包含滾動軸)
window.addEventListener('resize', onResize);

onMounted(() => {
  // 載入時偵測畫面寬度(不包含滾動軸)
  onResize();
  handleInitialStyle();
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
});

function onResize() {
  containerHeight.value = window.innerHeight;
  deviceType.value = getDeviceType();
}

function handleInitialStyle() {
  if (root.value && props.imgs) {
    // add offset for last img
    // const offset = 0.5;
    const offset = 1;

    root.value.style.setProperty(
      '--ls-city-hl-init-screen-height',
      window.matchMedia('(min-width: 1024px)').matches
        ? '100vh'
        : `${initialDeviceScreenHeight.value}px`,
    );
    root.value.style.setProperty(
      '--ls-city-hl-container-height',
      `${(props.imgs.length + offset) * 150}vh`,
    );
    root.value.style.setProperty(
      '--ls-city-hl-container-max-height',
      `${(props.imgs.length + offset) * initialDeviceScreenHeight.value * 1.5}px`,
    );
  }
}

function handleWordsTopUpdate(newWordsTop) {
  const gap = containerHeight.value * 1.5;
  // const offset = 0.5;
  const offset = 0.75;

  // step: 1~n
  const steps = props.imgs.slice(1).map((_, index) => {
    const start = -gap * (index + 1 - offset);
    const end = -gap * (index + 2 - offset);
    const endOffset =
      props.imgs.length - 2 === index ? window.innerHeight * 2 : 0;

    return newWordsTop <= start && newWordsTop >= end - endOffset;
  });

  // if step is not in 1~n, set to 0
  const trueStep = steps.includes(true) ? steps.indexOf(true) + 1 : 0;

  // update data
  activeList.value = activeList.value.map((value, index) => index === trueStep);
}
</script>

<template>
  <div v-if="imgs" ref="root" class="ls-city-hl">
    <!-- content -->
    <div class="ls-city-hl__container">
      <div class="ls-city-hl__key-visual-bg">
        <!-- TODO -->
        <!-- imgs[activeList.findIndex((active) => active)]   -->
        <!-- 'ls-city-hl__key-visual-pic-wrap--active': activeList[index], -->
        <div
          v-for="(img, index) in imgs"
          v-show="activeList[index]"
          :key="img"
          class="ls-city-hl__key-visual-pic-wrap"
          :class="{
            'ls-city-hl__key-visual-pic-wrap--bg-white': img.bg === 'white',
            'ls-city-hl__key-visual-pic-wrap--bg-gray': img.bg === 'gray',
            'ls-city-hl__key-visual-pic-wrap--bg-black': img.bg === 'black',
          }"
        >
          <LsPic
            :src="img.src"
            :webp="true"
            :altby="`${id}-${activeList.findIndex((active) => active)}`"
            :width="img.w"
            :height="img.h"
          />
        </div>
      </div>

      <div ref="keyVisualWords" class="ls-city-hl__key-visual-contents">
        <div
          v-for="(img, index) in imgs"
          :key="img"
          class="ls-city-hl__key-visual-content"
          :class="{
            'ls-city-hl__key-visual-content--active': activeList[index],
          }"
        >
          <div
            :id="`${id}-${index}`"
            class="ls-city-hl__key-visual-content-word"
          >
            <slot :name="`content-${index + 1}`" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.ls-city-hl {
  &__key-visual-bg {
    position: sticky;
    top: 0;
    width: 100%;

    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;

      @media screen and (max-width: 1023px) {
        max-height: var(--ls-city-hl-init-screen-height);
      }
    }
  }

  &__key-visual-pic-wrap {
    width: 100%;
    height: 100vh;
    transition: 0.15s ease-in-out;

    @media screen and (max-width: 1023px) {
      max-height: var(--ls-city-hl-init-screen-height);

      &--bg-white,
      &--bg-gray,
      &--bg-black {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          height: auto;
          max-height: 100vh;
          object-fit: initial;
        }
      }
    }

    /* &--active {
      opacity: 1;
    } */

    &--bg-white {
      background-color: #fff;
    }

    &--bg-gray {
      background-color: #f6f6f6;
    }

    &--bg-black {
      background-color: #000;
    }
  }

  &__container {
    position: relative;
    height: var(--ls-city-hl-container-height);

    @media screen and (max-width: 1023px) {
      max-height: var(--ls-city-hl-container-max-height);
    }
  }

  &__key-visual-contents {
    position: absolute;
    width: 100%;
  }

  &__key-visual-content {
    height: 150vh;
    max-height: calc(var(--ls-city-hl-container-height) * 1.5);
    font-size: 20px;
    font-weight: 600;
    line-height: 39px;
    color: $color-font-white;
    opacity: 0;
    transition: 0.15s ease-in-out;

    &--active {
      opacity: 1;
    }

    &:last-child {
      height: 250vh;
      max-height: calc(var(--ls-city-hl-container-height) * 2.5);
    }
  }

  &__key-visual-content-word {
    max-width: 470px;
    padding: 10px 26px;
    margin: 0 auto;
    background-color: #000000d9;

    @include pc {
      padding: 10px 20px;
    }
    @include pad {
      padding: 10px 20px;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 10px;

      div {
        width: 100%;
        height: fit-content;

        img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
