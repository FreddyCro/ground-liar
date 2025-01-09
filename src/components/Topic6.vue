<script setup lang="ts">
import { NmdContainer } from '@udn-digital-center/common-components';
import str from '@/locales/topic6-experts.json';
</script>

<template>
  <section id="experts" class="ls-experts">
    <NmdContainer>
      <p>{{ str.expertTitle1 }}</p>
      <p>{{ str.expertTitle2 }}</p>
      <p>{{ str.expertP1 }}</p>
      <p>{{ str.expertP2 }}</p>
      <p>{{ str.expertImgDesc1 }}</p>
      <p>{{ str.expertSection1Title }}</p>
      <p>{{ str.expertSection1P1 }}</p>
      <p>{{ str.expertSection1P2 }}</p>
      <p>{{ str.expertSection1P3 }}</p>
      <p>{{ str.expertSection1P4 }}</p>
      <p>{{ str.expertSection1P5 }}</p>
      <p>{{ str.expertImgDesc2 }}</p>
      <p>{{ str.expertSection2Title }}</p>
      <p>{{ str.expertSection2P1 }}</p>
      <p>{{ str.expertSection2P2 }}</p>
      <p>{{ str.expertSection2P3 }}</p>
      <p>{{ str.expertSection2P4 }}</p>
      <p>{{ str.expertSection2P5 }}</p>
    </NmdContainer>
  </section>
</template>

<style lang="scss">
.ls-experts {
}
</style>
