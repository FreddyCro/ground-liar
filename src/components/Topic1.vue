<script setup lang="ts">
import { onMounted, ref } from 'vue';
import LsPic from './LsPic.vue';
import LsVid from './LsVid.vue';
import str from '@/locales/topic1-intro.json';

const root = ref<HTMLElement | null>(null);
const heroIndicator = ref<HTMLElement | null>(null);
const isParagraph1Show = ref(false);
const innerHeight = window.innerHeight;

onMounted(() => {
  handleObserver();
  handleStyle();
});

function onAnchorClick(link: string) {
  // scroll to anchor smoothly
  document.querySelector(link)?.scrollIntoView({
    behavior: 'smooth',
  });
}

function handleObserver() {
  if (!heroIndicator.value) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isParagraph1Show.value = false;
      } else {
        isParagraph1Show.value = true;
      }
    });
  });

  observer.observe(heroIndicator.value);
}

function handleStyle() {
  if (root.value) {
    root.value.style.setProperty('--ls-intro-vid-height', `${innerHeight}px`);
  }
}
</script>

<template>
  <section id="intro" ref="root" class="ls-intro">
    <div class="ls-intro-hero">
      <div class="ls-intro-hero__content">
        <!-- bg vid -->
        <div class="ls-intro-hero__bg-vid">
          <LsVid
            :src="{
              mob: 'vid/landswindlers_video_bg_mob',
              pad: 'vid/landswindlers_video_bg_pad',
              pc: 'vid/landswindlers_video_bg_pc',
            }"
            :poster="{
              mob: 'img/landswindlers_preview_bg_mob',
              pad: 'img/landswindlers_preview_bg_pad',
              pc: 'img/landswindlers_preview_bg_pc',
            }"
          />
        </div>

        <!-- title -->
        <div class="ls-intro-hero__title">
          <h1>
            <span class="ls-intro-hero__title-first">{{ str.introTitle }}</span>
            <span class="ls-intro-hero__title-second">{{ str.introDesc }}</span>
          </h1>
        </div>

        <!-- p1 -->
        <div class="ls-intro-hero__p-container">
          <div
            class="ls-intro-hero__p-wrap"
            :class="{
              'ls-intro-hero__p-wrap--show': isParagraph1Show,
            }"
          >
            <p class="ls-intro-hero__p">
              {{ str.introP1 }}
            </p>
          </div>
          <div
            class="ls-intro-hero__p-wrap"
            :class="{
              'ls-intro-hero__p-wrap--show': !isParagraph1Show,
            }"
          >
            <p class="ls-intro-hero__p">
              {{ str.introP2 }}
            </p>
          </div>
        </div>
      </div>

      <!-- indicator for paragraph -->
      <div
        ref="heroIndicator"
        class="ls-intro-hero__indicator"
        role="presentation"
      />
    </div>

    <div class="ls-intro-anchor">
      <h2 class="ls-intro-anchor__title">
        <span class="ls-h3 ls-intro-anchor__title-first">
          {{ str.introAnchorTitle }}
        </span>
        <span class="ls-intro-anchor__title-second">
          {{ str.introAnchorSubTitle }}
        </span>
      </h2>
      <div class="ls-intro-anchor__container">
        <div class="ls-intro-anchor__list">
          <button
            v-for="item in [
              {
                img: 'img/landswindlers_pic1_1',
                title: str.introAnchor1Title,
                desc: str.introAnchor1Desc,
                link: '#Kaohsiung',
              },
              {
                img: 'img/landswindlers_pic1_2',
                title: str.introAnchor2Title,
                desc: str.introAnchor2Desc,
                link: '#Taichung',
              },
              {
                img: 'img/landswindlers_pic1_3',
                title: str.introAnchor3Title,
                desc: str.introAnchor3Desc,
                link: '#Tainan',
              },
            ]"
            :key="item.title"
            class="ls-intro-anchor__item"
            @click="onAnchorClick(item.link)"
          >
            <div class="ls-intro-anchor__item-header">
              <LsPic
                :src="item.img"
                ext="jpg"
                :srcset="['mob', 'pad']"
                :use2x="true"
                :webp="true"
              />
            </div>
            <h3 class="ls-h4 ls-intro-anchor__item-title">
              {{ item.title }}
            </h3>
            <div class="ls-intro-anchor__item-subtitle">
              {{ item.desc }}
            </div>
            <div class="ls-intro-anchor__item-arrow">
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.619965 1.15179L5.99971 6.53154L11.3795 1.15179" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.ls-intro {
  --ls-intro-vid-height: 100vh;
}

.ls-intro-hero {
  position: relative;

  /* control scroll depth */
  height: 200vh;

  &__indicator {
    position: absolute;
    bottom: 0;
    height: 40%;
  }

  &__bg-vid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: gray;

    video {
      width: 100%;
      /* height: var(--ls-intro-vid-height); */
      height: 100vh;
      object-fit: cover;
    }
  }

  &__content {
    position: sticky;
    top: 0;
    width: 100%;
    height: 100vh;
  }

  &__title {
    display: flex;
    justify-content: center;
    margin-top: 90px;
  }

  &__title-first,
  &__title-second {
    display: block;
    font-weight: 700;
    text-align: center;
  }

  &__title-first {
    margin: 10px;
    font-size: 36px;
    line-height: 46px;
    color: #fff;

    @include min-pad {
      font-size: 50px;
      line-height: 60px;
    }
  }

  &__title-second {
    padding: 4px 12px;
    background-color: $Y1;

    @include min-pad {
      font-size: 20px;
      line-height: 32px;
    }
  }

  &__title,
  &__p-container {
    position: absolute;
    width: 100%;
    height: 100vh;
  }

  &__p-container {
    pointer-events: none;
  }

  &__p-wrap {
    position: absolute;
    left: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    bottom: 60px;
    padding: 10px 20px;
    opacity: 0;
    pointer-events: none;
    background-color: rgba($color: #000000, $alpha: 0.85);
    backdrop-filter: blur(10px);
    transform: translateX(-50%);

    &--show {
      opacity: 1;
      pointer-events: auto;
    }

    @include min-pad {
      width: 470px;
    }
  }

  &__p {
    text-align: center;
    color: #fff;
    transition: opacity 0.15s ease-in-out;
  }
}

.ls-intro-anchor {
  background-color: #000;
  color: $B6;
  padding: 60px 20px;

  @include min-pad {
    padding: 60px 40px;
  }

  @include min-pc {
    padding: 80px 40px;
  }

  &__container {
    margin: 0 auto;
    width: 100%;
    max-width: 362px;

    @include min-pad {
      max-width: 654px;
    }

    @include min-pc {
      max-width: 880px;
    }
  }

  &__title {
    margin-bottom: 40px;
    text-align: center;
  }

  &__title-first,
  &__title-second {
    display: block;
    font-weight: 700;
  }

  &__title-first {
    color: $Y1;
  }

  &__title-second,
  &__item-subtitle {
    font-size: 18px;
    line-height: 30px;

    @include min-pad {
      font-size: 20px;
      line-height: 32px;
    }
  }

  &__list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;

    @include min-pad {
      flex-direction: row;
      gap: 15px;
    }

    @include min-pc {
      gap: 20px;
    }
  }

  &__item {
    width: 100%;
    padding: 0;
    text-align: center;
    color: $B6;
    background-color: transparent;
    border: 0;
    cursor: pointer;

    path {
      stroke: $B6;
      transition: 0.15s ease-in-out;
    }

    &:hover {
      .ls-intro-anchor__item-header img {
        transform: scale(1.2);
      }

      .ls-intro-anchor__item-arrow {
        background-color: $Y1;
      }

      path {
        stroke: #000;
      }
    }
  }

  &__item-header {
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    background-color: lightgray;
    margin-bottom: 10px;
    overflow: hidden;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.15s ease-in-out;
    }
  }

  &__item-arrow {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid 1px $B6;
    border-radius: 50%;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    transition: 0.15s ease-in-out;
  }
}
</style>
