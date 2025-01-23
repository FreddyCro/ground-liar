<script setup>
import LsCityGridImg from './LsCityGridImg.vue';
import LsCityHeading from './LsCityHeading.vue';
import LsCityHighlight from './LsCityHighlight.vue';
import LsPic from './LsPic.vue';
import str from '@/locales/topic4-taichung.json';
</script>

<template>
  <section id="Taichung" class="ls-taichung">
    <!-- heading -->
    <LsCityHeading
      vid="vid/landswindlers_video4_1"
      poster="img/landswindlers_preview4_1"
      :title="str.taichungTitle"
      :subtitle="str.taichungSubTitle"
    ></LsCityHeading>

    <!-- highligh -->
    <LsCityHighlight
      id="kaohsiung-hl"
      :imgs="[
        { src: 'img/landswindlers_pic4_2', bg: 'black' },
        { src: 'img/landswindlers_pic4_3' },
        { src: 'img/landswindlers_pic4_4' },
        { src: 'img/landswindlers_pic4_5' },
      ]"
    >
      <template #content-1>
        <p>{{ str.taichungP1 }}</p>
      </template>
      <template #content-2>
        <p>{{ str.taichungP2 }}</p>
      </template>
      <template #content-3>
        <p>{{ str.taichungP3 }}</p>
      </template>
      <template #content-4>
        <p>{{ str.taichungP4 }}</p>
      </template>
    </LsCityHighlight>

    <!-- grid-img -->
    <LsCityGridImg
      :text="str.taichungGridTitle"
      img-front="img/landswindlers_pic4_6"
      img-back="img/landswindlers_pic4_7"
    />

    <!-- article -->
    <div class="ls-section ls-section--no-pt">
      <div class="ls-container ls-article">
        <div class="ls-subsection ls-subsection--no-mt">
          <h3 class="ls-h3">{{ str.taichungSection1Title }}</h3>
          <p>{{ str.taichungSection1P1 }}</p>
          <p>{{ str.taichungSection1P2 }}</p>
          <p>{{ str.taichungSection1P3 }}</p>
          <p>{{ str.taichungSection1P4 }}</p>
          <p>{{ str.taichungSection1P5 }}</p>
          <p>{{ str.taichungSection1P6 }}</p>
        </div>
        <div class="ls-subsection">
          <figure>
            <LsPic
              src="img/landswindlers_pic4_8"
              :srcset="['mob']"
              :webp="true"
              :alt="str.taichungSection1ImgCaption"
              width="620"
              height="450"
            />
            <figcaption class="ls-caption">
              {{ str.taichungSection1ImgCaption }}
            </figcaption>
          </figure>
        </div>
        <div class="ls-subsection">
          <h3 class="ls-h3">{{ str.taichungSection2Title }}</h3>
          <p>{{ str.taichungSection2P1 }}</p>
          <p>{{ str.taichungSection2P2 }}</p>
          <p>{{ str.taichungSection2P3 }}</p>
          <p>{{ str.taichungSection2P4 }}</p>
          <p>{{ str.taichungSection2P5 }}</p>
        </div>
        <div class="ls-subsection">
          <figure>
            <LsPic
              src="img/landswindlers_pic4_9"
              :srcset="['mob']"
              :webp="true"
              :alt="str.taichungSection1ImgCaption"
              width="620"
              height="450"
            />
            <figcaption class="ls-caption">
              {{ str.taichungSection2ImgCaption }}
            </figcaption>
          </figure>
        </div>
        <div class="ls-subsection">
          <h4 class="ls-h4">{{ str.govTitle }}</h4>
          <p>{{ str.govP1 }}</p>
          <p>{{ str.govP2 }}</p>
          <p>{{ str.govP3 }}</p>
        </div>
        <div class="ls-subsection">
          <h3 class="ls-h3">{{ str.taichungSection3Title }}</h3>
          <p>{{ str.taichungSection3P1 }}</p>
          <p>{{ str.taichungSection3P2 }}</p>
          <p>{{ str.taichungSection3P3 }}</p>
          <p>{{ str.taichungSection3P4 }}</p>
          <p>{{ str.taichungSection3P5 }}</p>
        </div>
        <h4 class="ls-h4">{{ str.taichungSection4Title }}</h4>
      </div>
      <div class="ls-taichung__large-chart-container">
        <div class="ls-subsection ls-subsection--no-mt">
          <figure>
            <div
              class="flourish-embed flourish-chart"
              data-src="visualisation/20500450"
            ></div>
            <figcaption class="ls-container ls-caption">
              {{ str.taichungSection4ImgCaption }}
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="ls-container ls-article">
        <div class="ls-subsection ls-subsection--no-mb">
          <h4 class="ls-h4">{{ str.taichungSection5Title }}</h4>
          <figure>
            <div
              class="flourish-embed flourish-chart"
              data-src="visualisation/20500490"
            ></div>
            <figcaption class="ls-caption">
              <div>{{ str.taichungSection5ImgCaption1 }}</div>
              <div>{{ str.taichungSection5ImgCaption2 }}</div>
              <div>{{ str.taichungSection5ImgCaption3 }}</div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.ls-taichung {
  &__large-chart-container {
    max-width: 1060px;
    width: 100%;
    margin: 0 auto;
  }

  .ls-citygi__text {
    top: calc(50% - 48px);
    width: 100%;

    @include min-pad {
      top: 53.5%;
    }

    @include min-pc {
      top: calc(50% - 16px);
      width: calc(50% - 8px);
    }
  }
}
</style>
