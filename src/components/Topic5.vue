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
        { src: 'img/landswindlers_pic5_2' },
        { src: 'img/landswindlers_pic5_3' },
        { src: 'img/landswindlers_pic5_4_1' },
        { src: 'img/landswindlers_pic5_4' },
        { src: 'img/landswindlers_pic5_5' },
      ]"
    >
      <template #content-1>
        <p>{{ str.tainanP1 }}</p>
      </template>
      <template #content-2>
        <p class="ls-tainan__hl-date">{{ str.tainanP2_1 }}</p>
        <p class="ls-tainan__hl-text">{{ str.tainanP2_2 }}</p>
        <p class="ls-tainan__hl-date">{{ str.tainanP2_3 }}</p>
        <p class="ls-tainan__hl-text">{{ str.tainanP2_4 }}</p>
        <p class="ls-tainan__hl-date">{{ str.tainanP2_5 }}</p>
        <p class="ls-tainan__hl-text">{{ str.tainanP2_6 }}</p>
      </template>
      <template #content-3>
        <p class="ls-tainan__hl-date ls-tainan__hl-date--mb-large">
          {{ str.tainanP3_1 }}
        </p>
        <p>{{ str.tainanP3_2 }}</p>
      </template>
      <template #content-4>
        <p>{{ str.tainanP4 }}</p>
      </template>
      <template #content-5>
        <p class="ls-tainan__hl-date ls-tainan__hl-date--mb-large">
          {{ str.tainanP5_1 }}
        </p>
        <p>{{ str.tainanP5_2 }}</p>
      </template>
    </LsCityHighlight>

    <!-- grid-img -->
    <LsCityGridImg
      :text="str.tainanGridTitle"
      img-front="img/landswindlers_pic5_6"
      img-back="img/landswindlers_pic5_7"
    />

    <!-- article -->
    <div class="ls-section ls-section--no-pt">
      <div class="ls-container ls-article">
        <div class="ls-subsection ls-subsection--no-mt">
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
        <div class="ls-subsection">
          <p>{{ str.tainanSection2P3 }}</p>
          <p>{{ str.tainanSection2P4 }}</p>
        </div>
        <div class="ls-subsection ls-subsection--no-mb">
          <h4 class="ls-h4">{{ str.govTitle }}</h4>
          <p>{{ str.govP1 }}</p>
          <p>{{ str.govP2 }}</p>
          <p>{{ str.govP3 }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.ls-tainan {
  &__hl-date {
    margin-top: 5px;
    margin-bottom: 5px;
    color: $Y1;

    &:first-child {
      margin-top: 0;
    }

    &--mb-large {
      margin-bottom: 10px;
    }
  }

  .ls-citygi__text {
    top: calc(44% - 48px);
    width: 100%;

    @include min-pad {
      top: 41.5%;
    }

    @include min-pc {
      top: 31.5%;
      left: auto;
      right: 0;
      width: calc(76% - 10px);
    }
  }
}
</style>
