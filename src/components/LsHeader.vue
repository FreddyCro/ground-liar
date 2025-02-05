<script setup>
import { ref } from 'vue';
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

const header = ref();
const menu = ref();

// workaround for menu anchor
function onClick(e) {
  if (!e.target.closest('.nmd-menu__link')) return;

  // remove target="_blank" in MndMenuItem
  const items = header.value?.querySelectorAll('.nmd-menu__link');
  const close = header.value?.querySelector('.nmd-menu__button');

  if (items && close) {
    items.forEach((item) => {
      const href = item.getAttribute('href');
      if (href && href[0] === '#') {
        // set target _self
        item.setAttribute('target', '_self');

        // callback to close menu
        close.click();
      }
    });
  }
}
</script>

<template>
  <div ref="header" class="ls-header" @click="onClick">
    <NmdProgressbar />
    <NmdHeader>
      <NmdHeaderShare
        :facebook="{ href: shareURL_fb }"
        :line="{ href: shareURL_line, target: '_blank' }"
        :twitter="{ href: shareURL_twitter }"
      ></NmdHeaderShare>
      <NmdHamburger />
    </NmdHeader>
    <NmdMenu ref="menu">
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
        :is-current="false"
        :to="item"
      >
        {{ strHeader[`menuItem${index + 1}Title`] }}
      </NmdMenuItem>
    </NmdMenu>
  </div>
</template>

<style lang="scss"></style>
