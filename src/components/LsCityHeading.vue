<script setup>
import LsVid from './LsVid.vue';

defineProps({
  vid: String,
  poster: String,
  title: String,
  subtitle: String,
});
</script>

<template>
  <div class="ls-city-heading">
    <!-- heading -->
    <div class="topic2_logo_container">
      <div class="topic2_logo_content">
        <LsVid
          :src="{
            mob: `${vid}_mob`,
            pad: `${vid}_pad`,
            pc: `${vid}_pc`,
          }"
          :poster="{
            mob: `${poster}_mob`,
            pad: `${poster}_pad`,
            pc: `${poster}_pc`,
          }"
        />
        <div class="topic2_logo_title">
          <div>{{ title }}</div>
          <div class="ls-h3">{{ subtitle }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.ls-city-heading {
  .topic2_logo_container {
    position: relative;
    height: 200vh;
    max-height: calc(var(--init-screen-height) * 2);

    .topic2_logo_content {
      position: sticky;
      top: 0;
      display: grid;
      width: 100%;
      height: 100vh;
      max-height: var(--init-screen-height);
    }

    video {
      height: 100%;
      max-width: 100%;
      object-fit: cover; /* 確保影片充滿區域 */
    }

    .topic2_logo_title {
      --title-size: 120px;
      --title-line-height: 120px;
      --subtitle-px: 36px;

      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      max-width: 240px;
      display: flex;
      gap: 20px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transform: translate(-50%, -50%);

      :nth-child(1) {
        font-size: var(--title-size);
        font-weight: 700;
        line-height: var(--title-line-height);
        text-align: center;
        color: #f1f1f1;
        opacity: 50%;
      }

      :nth-child(2) {
        font-size: 32px;
        font-weight: 700;
        line-height: 48px;
        text-align: center;
        color: #404040;
        padding: 0 var(--subtitle-px);
        background-color: $Y1;
      }

      @include min-pad {
        --title-size: 180px;
        --title-line-height: 180px;
        --subtitle-px: 20px;

        max-width: 408px;
      }

      @include min-pc {
        --title-size: 180px;
        --title-line-height: 200px;
      }
    }
  }
}
</style>
