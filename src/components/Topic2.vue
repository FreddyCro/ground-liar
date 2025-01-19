<script setup>
import LsCityGridImg from './LsCityGridImg.vue';
import LsCityHeading from './LsCityHeading.vue';
import LsCityHighlight from './LsCityHighlight.vue';
import LsPic from './LsPic.vue';
import str from '@/locales/topic2-kaohsiung.json';
</script>

<template>
  <section id="Kaohsiung" class="ls-kaohsiung">
    <!-- heading -->
    <LsCityHeading
      vid="vid/landswindlers_video2_1"
      poster="img/landswindlers_preview2_1"
      :title="str.kaoTitle"
      :subtitle="str.kaoSubtitle"
    ></LsCityHeading>

    <!-- highligh -->
    <LsCityHighlight
      id="kaohsiung-hl"
      :imgs="[
        { src: 'img/landswindlers_pic2_2', bg: 'black' },
        { src: 'img/landswindlers_pic2_3' },
        { src: 'img/landswindlers_pic2_4' },
        { src: 'img/landswindlers_pic2_5', bg: 'white' },
        { src: 'img/landswindlers_pic2_6', bg: 'white' },
      ]"
    >
      <template #content-1>
        <p>{{ str.kaoP1 }}</p>
      </template>
      <template #content-2>
        <p>{{ str.kaoP2 }}</p>
      </template>
      <template #content-3>
        <p class="ls-kaohsiung__hl-text-above-img">{{ str.kaoP3 }}</p>
        <LsPic
          src="img/landswindlers_card_icon"
          :srcset="['mob']"
          ext="svg"
          :use2x="false"
          :alt="str.kaoP3"
        />
      </template>
      <template #content-4>
        <p>{{ str.kaoP4 }}</p>
      </template>
      <template #content-5>
        <p>{{ str.kaoP5 }}</p>
      </template>
    </LsCityHighlight>

    <!-- grid-img -->
    <LsCityGridImg
      :text="str.kaoGridText"
      img-front="img/landswindlers_pic2_7"
      img-back="img/landswindlers_pic2_8"
    />

    <!-- article -->
    <div class="ls-section ls-section--no-pt">
      <div class="ls-container ls-article">
        <div class="ls-subsection">
          <h3 class="ls-h3">{{ str.landlordTitle }}</h3>
          <p>{{ str.landlordP1 }}</p>
          <p>{{ str.landlordP2 }}</p>
          <p>{{ str.landlordP3 }}</p>
          <p>{{ str.landlordP4 }}</p>
          <p>{{ str.landlordP5 }}</p>
          <p>{{ str.landlordP6 }}</p>
          <p>{{ str.landlordP7 }}</p>
          <p>{{ str.landlordP8 }}</p>
          <p>{{ str.landlordP9 }}</p>
        </div>
        <div class="ls-subsection ls-subsection--no-mb">
          <h4 class="ls-h4">{{ str.govTitle }}</h4>
          <p>{{ str.govP1 }}</p>
          <p>{{ str.govP2 }}</p>
          <p>{{ str.govP3 }}</p>
          <p>{{ str.govP4 }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.ls-kaohsiung {
  width: 100%;
  font-family: Noto Sans TC;

  &__hl-text-above-img {
    margin-bottom: 10px;
  }

  .ls-citygi__text {
    top: 90px;
    width: 100%;

    @include min-pad {
      top: 18.5%;
    }

    @include min-pc {
      top: calc(50% - 16px);
      left: auto;
      right: 0;
      width: calc(50% - 8px);
    }
  }
}
</style>
