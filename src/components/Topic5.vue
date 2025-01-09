<script setup lang="ts">
import { NmdContainer } from '@udn-digital-center/common-components';
import LsCityCover from './LsCityCover.vue';
import LsCityGridImg from './LsCityGridImg.vue';
import LsCityHighlight from './LsCityHighlight.vue';
import str from '@/locales/topic5-tainan.json';
</script>

<template>
  <section id="tainan" class="ls-section ls-tainan">
    <!-- cover -->
    <LsCityCover></LsCityCover>

    <!-- highlight -->
    <LsCityHighlight></LsCityHighlight>

    <!-- grid-img -->
    <LsCityGridImg></LsCityGridImg>

    <!-- article -->
    <div class="ls-city-article">
      <NmdContainer>
        <p>{{ str.tainanTitle }}</p>
        <p>{{ str.tainanSubTitle }}</p>
        <p>{{ str.tainanP1 }}</p>
        <p>{{ str.tainanP2_1 }}</p>
        <p>{{ str.tainanP2_2 }}</p>
        <p>{{ str.tainanP2_3 }}</p>
        <p>{{ str.tainanP2_4 }}</p>
        <p>{{ str.tainanP3_1 }}</p>
        <p>{{ str.tainanP3_2 }}</p>
        <p>{{ str.tainanP4 }}</p>
        <p>{{ str.tainanP5_1 }}</p>
        <p>{{ str.tainanP5_2 }}</p>
        <p>{{ str.tainanGridTitle }}</p>
        <p>{{ str.tainanSection1Title }}</p>
        <p>{{ str.tainanSection1P1 }}</p>
        <p>{{ str.tainanSection1P2 }}</p>
        <p>{{ str.tainanSection1P3 }}</p>
      </NmdContainer>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
