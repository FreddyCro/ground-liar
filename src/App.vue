<script setup>
import { onMounted, ref } from 'vue';
import LsHeader from './components/LsHeader.vue';
import LsFooter from './components/LsFooter.vue';
import Topic1 from './components/Topic1.vue';
import Topic2 from './components/Topic2.vue';
import Topic3 from './components/Topic3.vue';
import Topic4 from './components/Topic4.vue';
import Topic5 from './components/Topic5.vue';
import Topic6 from './components/Topic6.vue';

const initialDeviceScreenHeight = ref(window.innerHeight);
const root = ref();

onMounted(() => {
  root.value.style.setProperty(
    '--init-screen-height',
    window.matchMedia('(min-width: 1024px)').matches
      ? '100vh'
      : `${initialDeviceScreenHeight.value}px`,
  );
});
</script>

<template>
  <div ref="root" class="ls-root">
    <LsHeader />
    <main>
      <!-- intro -->
      <Topic1 />

      <!-- Kaohsiung -->
      <Topic2 />

      <!-- problems -->
      <Topic3 />

      <!-- taichung -->
      <Topic4 />

      <!-- tainan -->
      <Topic5 />

      <!-- solutions -->
      <Topic6 />
    </main>
    <LsFooter />
  </div>
</template>

<style lang="scss"></style>
