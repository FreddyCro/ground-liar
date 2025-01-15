<script setup>
import {
  NmdHamburger,
  NmdHeader,
  NmdHeaderShare,
  NmdMenu,
  NmdMenuItem,
  NmdProgressbar,
} from '@udn-digital-center/common-components';
import { shareURL_fb, shareURL_line, shareURL_twitter } from '@/utils/share';
import strHeader from '@/locales/header.json';
</script>

<template>
  <div class="ls-header">
    <NmdProgressbar />
    <NmdHeader>
      <NmdHeaderShare
        :facebook="{ href: shareURL_fb }"
        :line="{ href: shareURL_line, target: '_blank' }"
        :twitter="{ href: shareURL_twitter }"
      ></NmdHeaderShare>
      <NmdHamburger />
    </NmdHeader>
    <NmdMenu>
      <NmdMenuItem
        v-for="(item, index) in [
          '#Kaohsiung',
          '#problems',
          '#Taichung',
          '#Tainan',
          '#solutions',
          strHeader.menuItem6Link,
        ]"
        :key="item"
        :is-current="index === 0 ? true : false"
        :to="item"
      >
        {{ strHeader[`menuItem${index + 1}Title`] }}
      </NmdMenuItem>
    </NmdMenu>
  </div>
</template>

<style lang="scss"></style>
