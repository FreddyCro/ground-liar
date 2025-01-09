<script setup lang="ts">
import str from '@/locales/topic1-intro.json';
</script>

<template>
  <section id="intro" class="ls-intro">
    <p>{{ str.introTitle }}</p>
    <p>{{ str.introDesc }}</p>
    <p>{{ str.introP1 }}</p>
    <p>{{ str.introP2 }}</p>
    <p>{{ str.introAnchor1Title }}</p>
    <p>{{ str.introAnchor1Desc }}</p>
    <p>{{ str.introAnchor2Title }}</p>
    <p>{{ str.introAnchor2Desc }}</p>
    <p>{{ str.introAnchor3Title }}</p>
    <p>{{ str.introAnchor3Desc }}</p>
  </section>
</template>

<style lang="scss">
.ls-intro {
}
</style>
