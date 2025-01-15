<script setup lang="ts">
import { computed, onUnmounted, ref } from 'vue';
import { getDeviceType } from '@/utils/get-device';

interface Props {
  src: {
    mob: string;
    pad: string;
    pc: string;
  };
  poster?: {
    mob: string;
    pad: string;
    pc: string;
  };
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  preload?: string;
  classname?: string;
  ariaLabel?: string;
}

withDefaults(defineProps<Props>(), {
  autoplay: true,
  loop: true,
  muted: true,
  preload: 'auto',
  ariaLabel: 'Udn newmeida center',
});

const deviceType = ref(getDeviceType());
const { VITE_ASSETS_PATH } = import.meta.env as any;

window.addEventListener('resize', onResize);

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
});

function onResize() {
  deviceType.value = getDeviceType();
}
</script>

<template>
  <video
    class="ls-vid"
    :class="classname || ''"
    playsinline
    :autoplay="autoplay"
    :loop="loop"
    type="video/mp4"
    :muted="muted"
    :poster="poster ? `${VITE_ASSETS_PATH}${poster[deviceType]}.jpg` : ''"
    :preload="preload"
    :aria-label="ariaLabel"
  >
    <source
      :src="`${VITE_ASSETS_PATH}${src[deviceType]}.mp4`"
      type="video/mp4"
    />
  </video>
</template>

<style lang="scss">
.ls-vid {
  width: 100%;
  max-width: 100%;
}
</style>
