<script setup>
import LsCityGridImg from './LsCityGridImg.vue';
import LsCityHeading from './LsCityHeading.vue';
import LsCityHighlight from './LsCityHighlight.vue';
import LsPic from './LsPic.vue';
import str from '@/locales/topic5-tainan.json';
</script>

<template>
  <section id="Tainan" class="ls-tainan">
    <!-- heading -->
    <LsCityHeading
      vid="vid/landswindlers_video5_1"
      poster="img/landswindlers_preview5_1"
      :title="str.tainanTitle"
      :subtitle="str.tainanSubTitle"
    ></LsCityHeading>

    <!-- highligh -->
    <LsCityHighlight
      id="kaohsiung-hl"
      :imgs="[
        'img/landswindlers_pic5_2',
        'img/landswindlers_pic5_3',
        'img/landswindlers_pic5_4_1',
        'img/landswindlers_pic5_4',
        'img/landswindlers_pic5_5',
      ]"
    >
      <template #content-1>
        <p>{{ str.tainanP1 }}</p>
      </template>
      <template #content-2>
        <p>{{ str.tainanP2_1 }}</p>
        <p>{{ str.tainanP2_2 }}</p>
        <p>{{ str.tainanP2_3 }}</p>
        <p>{{ str.tainanP2_4 }}</p>
      </template>
      <template #content-3>
        <p>{{ str.tainanP3_1 }}</p>
        <p>{{ str.tainanP3_2 }}</p>
      </template>
      <template #content-4>
        <p>{{ str.tainanP4 }}</p>
      </template>
      <template #content-5>
        <p>{{ str.tainanP5_1 }}</p>
        <p>{{ str.tainanP5_2 }}</p>
      </template>
    </LsCityHighlight>

    <!-- grid-img -->
    <LsCityGridImg
      :text="str.tainanGridTitle"
      img-front="img/landswindlers_pic5_6"
      img-back="img/landswindlers_pic5_7"
    />
    F
    <!-- article -->
    <div class="ls-section">
      <div class="ls-container ls-article">
        <div class="ls-subsection">
          <h3 class="ls-h3">{{ str.tainanSection1Title }}</h3>
          <p>{{ str.tainanSection1P1 }}</p>
          <p>{{ str.tainanSection1P2 }}</p>
          <p>{{ str.tainanSection1P3 }}</p>
        </div>
        <div class="ls-subsection">
          <figure>
            <LsPic
              src="img/landswindlers_pic5_8"
              :srcset="['mob']"
              :webp="true"
              :alt="str.tainanSection1ImgDesc1"
            />
            <figcaption class="ls-caption">
              {{ str.tainanSection1ImgDesc1 }}
            </figcaption>
          </figure>
        </div>
        <div class="ls-subsection">
          <p>{{ str.tainanSection1P4 }}</p>
          <p>{{ str.tainanSection1P5 }}</p>
        </div>
        <div class="ls-subsection">
          <figure>
            <LsPic
              src="img/landswindlers_pic5_9"
              :srcset="['mob']"
              :webp="true"
              :alt="str.tainanSection1ImgDesc2"
            />
            <figcaption class="ls-caption">
              {{ str.tainanSection1ImgDesc2 }}
            </figcaption>
          </figure>
        </div>
        <div class="ls-subsection">
          <h3 class="ls-h3">{{ str.tainanSection2Title }}</h3>
          <p>{{ str.tainanSection2P1 }}</p>
          <p>{{ str.tainanSection2P2 }}</p>
        </div>
        <div class="ls-subsection">
          <figure>
            <LsPic
              src="img/landswindlers_pic5_10"
              :srcset="['mob']"
              :webp="true"
              :alt="str.tainanSection2ImgDesc1"
            />
            <figcaption class="ls-caption">
              {{ str.tainanSection2ImgDesc1 }}
            </figcaption>
          </figure>
        </div>
        <div class="ls-subsection ls-subsection--no-mb">
          <p>{{ str.tainanSection2P3 }}</p>
          <p>{{ str.tainanSection2P4 }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
