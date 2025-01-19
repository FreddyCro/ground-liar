<script setup>
import LsPic from './LsPic.vue';
import str from '@/locales/topic6-solutions.json';
</script>

<template>
  <section id="solutions" class="ls-section ls-section--no-pt ls-solutions">
    <div class="ls-heading">
      <!-- bg image -->
      <LsPic
        src="img/landswindlers_pic6_1"
        :webp="true"
        :alt="str.solutionsTitle1"
      />
      <h2 class="ls-h3 ls-heading-title">{{ str.solutionsTitle1 }}</h2>
    </div>

    <div class="ls-container ls-article">
      <div class="ls-subsection">
        <p>{{ str.solutionsP1 }}</p>
        <p>{{ str.solutionsP2 }}</p>
        <p>{{ str.solutionsP3 }}</p>
      </div>

      <div class="ls-subsection">
        <figure>
          <LsPic
            src="img/landswindlers_pic6_2"
            :srcset="['mob']"
            :webp="true"
            :alt="str.solutionsImgDesc1"
          />
          <figcaption class="ls-caption">
            {{ str.solutionsImgDesc1 }}
          </figcaption>
        </figure>
      </div>

      <div class="ls-subsection">
        <p>{{ str.solutionsP4 }}</p>
        <p>{{ str.solutionsP5 }}</p>
      </div>

      <div class="ls-subsection">
        <h3 class="ls-h3">{{ str.solutionsSection1Title }}</h3>
        <p>{{ str.solutionsSection1P1 }}</p>
        <p>{{ str.solutionsSection1P2 }}</p>
        <p>{{ str.solutionsSection1P3 }}</p>
      </div>
      <div class="ls-subsection">
        <figure>
          <LsPic
            src="img/landswindlers_pic6_3"
            :srcset="['mob']"
            :webp="true"
            :alt="str.solutionsImgDesc2"
          />
          <figcaption class="ls-caption">
            {{ str.solutionsImgDesc2 }}
          </figcaption>
        </figure>
      </div>
      <p>{{ str.solutionsSection1P4 }}</p>
      <p>{{ str.solutionsSection1P5 }}</p>
      <div class="ls-subsection ls-subsection--no-mb">
        <h4 class="ls-h4">{{ str.govTitle }}</h4>
        <p>{{ str.govP1 }}</p>
        <p>{{ str.govP2 }}</p>
        <p>{{ str.govP3 }}</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.ls-solutions {
}
</style>
