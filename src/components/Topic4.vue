<script setup lang="ts">
import { NmdContainer } from '@udn-digital-center/common-components';
import LsCityCover from './LsCityCover.vue';
import LsCityGridImg from './LsCityGridImg.vue';
import LsCityHighlight from './LsCityHighlight.vue';
import str from '@/locales/topic4-taichung.json';
</script>

<template>
  <section id="taichung" class="ls-section ls-taichung">
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
        <p>{{ str.taichungP1 }}</p>
        <p>{{ str.taichungP2 }}</p>
        <p>{{ str.taichungP3 }}</p>
        <p>{{ str.taichungP4 }}</p>
        <p>{{ str.taichungGridTitle }}</p>
        <p>{{ str.taichungSection1Title }}</p>
        <p>{{ str.taichungSection1P1 }}</p>
        <p>{{ str.tainanP4 }}</p>
        <p>{{ str.taichungSection1P2 }}</p>
        <p>{{ str.tainanP5_2 }}</p>
        <p>{{ str.taichungSection1P3 }}</p>
        <p>{{ str.tainanSection1Title }}</p>
        <p>{{ str.taichungSection1P4 }}</p>
        <p>{{ str.taichungSection1P5 }}</p>
        <p>{{ str.taichungSection2Title }}</p>
        <p>{{ str.taichungSection2P1 }}</p>
        <p>{{ str.taichungSection2P2 }}</p>
        <p>{{ str.taichungSection3Title }}</p>
        <p>{{ str.taichungSection3ImgDesc }}</p>
      </NmdContainer>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
