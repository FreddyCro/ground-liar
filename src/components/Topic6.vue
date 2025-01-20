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
      <h2 class="ls-h4 ls-heading-title ls-solutions__title">
        <span class="ls-solutions__title-text">
          {{ str.solutionsTitle1 }}
        </span>
      </h2>
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
  &__title {
    max-width: 260px;
    color: $B3;
    text-align: center;
    text-shadow: none;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 6px 20px;
      transform: translate(-20px, -6px);
      background-color: $Y1;
    }
  }

  &__title-text {
    position: relative;
  }
}
</style>
