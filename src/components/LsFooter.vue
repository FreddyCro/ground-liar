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
import strFooter from '@/locales/footer.json';
</script>

<template>
  <div class="ls-footer">
    <section style="padding: 80px 0; background-color: #f1f1f1">
      <NmdContainer>
        <NmdSeries>
          <template #context>{{ strFooter.seriesTitle }}</template>
          <NmdSeriesItem
            v-for="item in [
              {
                title: strFooter.series1Title,
                to: strFooter.series1Link,
                ga: 'relatednews_1',
                img: 'landswindlers_pic7_1_pcpadmob',
              },
              {
                title: strFooter.series2Title,
                to: strFooter.series2Link,
                ga: 'relatednews_2',
                img: 'landswindlers_pic7_2_pcpadmob',
              },
              {
                title: strFooter.series3Title,
                to: strFooter.series3Link,
                ga: 'relatednews_3',
                img: 'landswindlers_pic7_3_pcpadmob',
              },
            ]"
            :key="item"
            :data-ga="item.ga"
            :to="item.to"
          >
            {{ item.title }}
            <template #image>
              <img :src="item.img" />
            </template>
          </NmdSeriesItem>
        </NmdSeries>
      </NmdContainer>
      <NmdAuthor style="--maxWidth: 160px">
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
      ></NmdShare>
    </section>
    <NmdToTop style="z-index: 1001"></NmdToTop>
    <NmdFooter :year="2025"></NmdFooter>
  </div>
</template>

<style lang="scss"></style>
