<script setup>
import {
  NmdAuthor,
  NmdContainer,
  NmdFooter,
  NmdHamburger,
  NmdHeader,
  NmdHeaderShare,
  NmdMenu,
  NmdMenuItem,
  NmdProgressbar,
  NmdSeries,
  NmdSeriesItem,
  NmdShare,
  NmdToTop,
} from "@udn-digital-center/common-components";
import { shareURL_fb, shareURL_line, shareURL_twitter } from "./utils/share";

// import Topic1 from "./components/Topic1.vue";
import Topic2 from "./components/Topic2.vue";

// import Topic3 from "./components/Topic3.vue";
// import Topic4 from "./components/Topic4.vue";
// import Topic5 from "./components/Topic5.vue";
// import Topic6 from "./components/Topic6.vue";
</script>

<template>
  <NmdProgressbar></NmdProgressbar>
  <NmdHeader>
    <NmdHeaderShare
      :facebook="{ href: shareURL_fb }"
      :line="{ href: shareURL_line, target: '_blank' }"
      :twitter="{ href: shareURL_twitter }"
    ></NmdHeaderShare>
    <NmdHamburger></NmdHamburger>
  </NmdHeader>
  <NmdMenu>
    <NmdMenuItem :is-current="true" to="#Kaohsiung">
      【高雄】魔術切割虛灌地主
    </NmdMenuItem>
    <NmdMenuItem to="#problems"> 【亂象】多數暴力黑箱分配 </NmdMenuItem>
    <NmdMenuItem to="#Taichung"> 【台中】取得抵費地賺暴利 </NmdMenuItem>
    <NmdMenuItem to="#Tainan"> 【台南】居民泣訴祖厝不保 </NmdMenuItem>
    <NmdMenuItem to="#solutions"> 【解方】政府失職應設專法 </NmdMenuItem>
    <NmdMenuItem to="https://udn.com/newmedia/office/">
      更多數位專題
    </NmdMenuItem>
  </NmdMenu>

  <!-- <Topic1></Topic1> -->
  <Topic2></Topic2>
  <!-- <Topic3></Topic3> -->
  <!-- <Topic4></Topic4> -->
  <!-- <Topic5></Topic5> -->
  <!-- <Topic6></Topic6> -->

  <section style="padding: 80px 0; background-color: #f1f1f1">
    <NmdContainer>
      <NmdSeries>
        <template #context>延伸閱讀</template>
        <NmdSeriesItem data-ga="relatednews_1" to="https://vip.udn.com/">
          政府無為而治 佛系管理 放任自辦重劃亂象
          <template #image>
            <img
              src="https://vip.udn.com/newmedia/2025/landswindlers/images/landswindlers_pic7_1_pcpadmob.jpg"
            />
          </template>
        </NmdSeriesItem>
        <NmdSeriesItem data-ga="relatednews_2" to="https://vip.udn.com/">
          自辦重劃案多 地政專家：應全面廢止
          <template #image>
            <img
              src="https://vip.udn.com/newmedia/2025/landswindlers/images/landswindlers_pic7_2_pcpadmob.jpg"
            />
          </template>
        </NmdSeriesItem>
        <NmdSeriesItem data-ga="relatednews_3" to="https://vip.udn.com/">
          地主心聲 一世人都住這裡了 為什麼要重劃
          <template #image>
            <img
              src="https://vip.udn.com/newmedia/2025/landswindlers/images/landswindlers_pic7_3_pcpadmob.jpg"
            />
          </template>
        </NmdSeriesItem>
      </NmdSeries>
    </NmdContainer>
    <NmdAuthor style="--maxWidth: 160px">
      <template #採訪撰稿>林奐成</template>
      <template #統籌製作>林奐成、洪欣慈</template>
      <template #視覺設計>陳志儒、蘇韋豪</template>
      <template #工程>于以琳、周融聖</template>
      <template #影像>劉學聖、黃仲裕、林奐成、聯合報系資料照</template>
      <template #監製>范凌嘉、林秀姿、董谷音、潘如瑩</template>
      <template #製作單位>聯合報新聞部</template>
      <template #上線日期>2025.1.14</template>
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
</template>

<style scoped lang="scss"></style>
