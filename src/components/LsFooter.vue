<script setup>
import {
  NmdAuthor,
  NmdContainer,
  NmdFooter,
  NmdSeries,
  NmdSeriesItem,
  NmdShare,
  NmdToTop,
} from '@udn-digital-center/common-components';
import LsPic from './LsPic.vue';
import strFooter from '@/locales/footer.json';

const CURRENT_YEAR = new Date().getFullYear();
</script>

<template>
  <div class="ls-footer">
    <div class="ls-footer__info">
      <NmdContainer>
        <NmdSeries>
          <template #context>{{ strFooter.seriesTitle }}</template>
          <NmdSeriesItem
            v-for="item in [
              {
                title: strFooter.series1Title,
                to: strFooter.series1Link,
                ga: 'relatednews_1',
                img: 'img/landswindlers_pic7_1',
              },
              {
                title: strFooter.series2Title,
                to: strFooter.series2Link,
                ga: 'relatednews_2',
                img: 'img/landswindlers_pic7_2',
              },
              {
                title: strFooter.series3Title,
                to: strFooter.series3Link,
                ga: 'relatednews_3',
                img: 'img/landswindlers_pic7_3',
              },
            ]"
            :key="item"
            :data-ga="item.ga"
            :to="item.to"
          >
            {{ item.title }}
            <template #image>
              <LsPic
                :src="item.img"
                :srcset="['mob']"
                :webp="true"
                :alt="item.title"
              />
            </template>
          </NmdSeriesItem>
        </NmdSeries>
      </NmdContainer>
      <NmdAuthor>
        <template #採訪撰稿>{{ strFooter.editor1 }}</template>
        <template #統籌製作>{{ strFooter.editor2 }}</template>
        <template #視覺設計>{{ strFooter.editor3 }}</template>
        <template #工程>{{ strFooter.editor4 }}</template>
        <template #影像>{{ strFooter.editor5 }}</template>
        <template #監製>{{ strFooter.editor6 }}</template>
        <template #製作單位>{{ strFooter.editor7 }}</template>
        <template #上線日期>{{ strFooter.editor8 }}</template>
      </NmdAuthor>
      <NmdShare
        :facebook="{ href: shareURL_fb }"
        :line="{ href: shareURL_line, target: '_blank' }"
        :twitter="{ href: shareURL_twitter }"
        twitter-icon="x"
      />
    </div>
    <NmdToTop />
    <NmdFooter :year="CURRENT_YEAR" />
  </div>
</template>

<style lang="scss">
.ls-footer {
  &__info {
    padding: 80px 0;
    background-color: #f1f1f1;
  }

  .author-grid {
    --maxWidth: 160px;
  }

  .nmd-to-top {
    z-index: 1001;
  }
}
</style>
