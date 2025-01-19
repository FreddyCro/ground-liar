<script setup lang="ts">
import LsPic from './LsPic.vue';
import str from '@/locales/topic3-problems.json';
</script>

<template>
  <section id="problems" class="ls-section ls-section--no-pt ls-problems">
    <div class="ls-heading">
      <!-- bg image -->
      <LsPic src="img/landswindlers_pic3_1" :webp="true" :alt="str.bboxTitle" />
      <h2 class="ls-h3 ls-heading-title">{{ str.bboxTitle }}</h2>
    </div>

    <div class="ls-container ls-article">
      <div class="ls-subsection">
        <h3 class="ls-h3">{{ str.gameTitle }}</h3>
        <h4 class="ls-h5">{{ str.gameQ1 }}</h4>
        <div class="ls-paragraphs">
          <p>{{ str.gameQ1A1 }}</p>
          <p>{{ str.gameQ1A2 }}</p>
          <p>{{ str.gameQ1A3 }}</p>
        </div>
        <h4 class="ls-h5">{{ str.gameQ2 }}</h4>
        <div class="ls-paragraphs">
          <p>{{ str.gameQ2A1 }}</p>
          <p>{{ str.gameQ2A2 }}</p>
          <p>{{ str.gameQ2A3 }}</p>
        </div>
        <h4 class="ls-h5">{{ str.gameQ3 }}</h4>
        <div class="ls-paragraphs">
          <p>{{ str.gameQ3A1 }}</p>
          <p>{{ str.gameQ3A2 }}</p>
          <p>{{ str.gameQ3A3 }}</p>
          <p>{{ str.gameQ3A4 }}</p>
        </div>
      </div>

      <LsPic
        src="img/landswindlers_pic3_2"
        :srcset="['mob']"
        :webp="true"
        :alt="str.roomTitle"
      />

      <div class="ls-subsection">
        <h3 class="ls-h3">{{ str.roomTitle }}</h3>
        <h4 class="ls-h5">{{ str.roomSection1Title }}</h4>
        <p>{{ str.roomSection1P1 }}</p>
        <p>{{ str.roomSection1P2 }}</p>
        <p>{{ str.roomSection1P3 }}</p>
      </div>

      <LsPic
        src="img/landswindlers_pic3_3"
        :srcset="['mob']"
        :webp="true"
        :alt="str.roomTitle"
      />

      <div class="ls-subsection">
        <h4 class="ls-h5">{{ str.roomSection2Title }}</h4>
        <p>{{ str.roomSection2P1 }}</p>
        <p>{{ str.roomSection2P2 }}</p>
        <p>{{ str.roomSection2P3 }}</p>
      </div>
      <div class="ls-subsection">
        <h4 class="ls-h5">{{ str.roomSection3Title }}</h4>
        <p>{{ str.roomSection3P1 }}</p>
        <p>{{ str.roomSection3P2 }}</p>
      </div>
      <div class="ls-subsection">
        <h3 class="ls-h3">{{ str.flowTitle }}</h3>
        <h4 class="ls-h5">{{ str.flowSubTitle }}</h4>
        <div class="ls-subsection ls-subsection--no-mt">
          <figure>
            <LsPic
              src="img/landswindlers_pic3_4"
              :webp="true"
              :alt="str.roomTitle"
            />
            <figcaption class="ls-caption">
              {{ str.flowImgDesc }}
            </figcaption>
          </figure>
        </div>
      </div>
      <div class="ls-subsection">
        <h3 class="ls-h3">{{ str.govTitle }}</h3>
        <p>{{ str.govP1 }}</p>
        <p>{{ str.govP2 }}</p>
        <p>{{ str.govP3 }}</p>
      </div>
      <div
        class="flourish-embed flourish-chart"
        data-src="visualisation/20500359"
      ></div>
      <div class="ls-subsection">
        <h3 class="ls-h3">{{ str.taichungTitle }}</h3>
        <p>{{ str.taichungP1 }}</p>
        <p>{{ str.taichungP2 }}</p>
        <p>{{ str.taichungP3 }}</p>
        <p>{{ str.taichungP4 }}</p>
      </div>
      <div class="ls-subsection ls-subsection--no-mb">
        <div
          class="flourish-embed flourish-chart"
          data-src="visualisation/20500382"
        ></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.ls-problems {
}
</style>
