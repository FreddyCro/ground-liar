<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import { useElementBounding } from '@vueuse/core';

const baseVideoUrl = 'https://vip.udn.com/newmedia/2025/landswindlers/videos';
const baseImageUrl = 'https://vip.udn.com/newmedia/2025/landswindlers/images';

// 畫面寬度(不包含滾動軸)
const containerWidth = ref(document.body.clientWidth);
const containerHeight = ref(window.innerHeight);
const keyVisual_img = ref();
const keyVisual_words = ref();
const opacity1 = ref(1);
const opacity2 = ref(0);
const opacity3 = ref(0);
const opacity4 = ref(0);
const opacity5 = ref(0);
const scrollCount = ref(1); // 紀錄滾動次數
const currentImage = ref(7); // 當前圖片索引
const floatingText = ref();
const firstImage = ref();
const secondImage = ref();
const { top: wordsTop } = useElementBounding(keyVisual_words);
const deviceType = computed(() => {
  if (containerWidth.value <= 767) return 'mob';
  if (containerWidth.value <= 1023) return 'pad';
  return 'pc';
});

watch(wordsTop, handleWordsTopUpdate);

// 畫面大小變化時偵測畫面寬度(不包含滾動軸)
window.addEventListener('resize', onResize);

onMounted(() => {
  // 載入時偵測畫面寬度(不包含滾動軸)
  onResize();

  handleEmptyContent();
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
});

function onResize() {
  containerWidth.value = document.body.clientWidth;
}

function handleEmptyContent() {
  const emptyContent = document.querySelectorAll('.topic2_gridCard_empty');
  const entries = (entries) => {
    entries.forEach((entry) => {
      if (entry.target === emptyContent[0] && entry.isIntersecting) {
        firstImage.value.style.opacity = 1;
        floatingText.value.style.display = 'none';
      } else if (entry.target === emptyContent[1] && entry.isIntersecting) {
        firstImage.value.style.opacity = 0;
        floatingText.value.style.display = 'none';
      } else if (entry.target === emptyContent[2] && entry.isIntersecting) {
        firstImage.value.style.opacity = 0;
        floatingText.value.style.display = 'block';
      }
    });
  };

  const observer = new IntersectionObserver(entries, {
    threshold: 0.5,
  });

  emptyContent.forEach((empty) => observer.observe(empty));
}

function handleWordsTopUpdate(newWordsTop) {
  if (
    newWordsTop <= -containerHeight.value / 2 &&
    newWordsTop >= -containerHeight.value
  ) {
    opacity1.value = 0;
    opacity2.value = 1;
    opacity3.value = 0;
    opacity4.value = 0;
    opacity5.value = 0;
    keyVisual_img.value.src = `${baseImageUrl}/${deviceType.value}/landswindlers_pic2_3_${deviceType.value}.jpg`;
  } else if (
    newWordsTop <= -containerHeight.value &&
    newWordsTop >= -containerHeight.value * 2
  ) {
    opacity1.value = 0;
    opacity2.value = 0;
    opacity3.value = 1;
    opacity4.value = 0;
    opacity5.value = 0;
    keyVisual_img.value.src = `${baseImageUrl}/${deviceType.value}/landswindlers_pic2_4_${deviceType.value}.jpg`;
  } else if (
    newWordsTop <= -containerHeight.value * 2 &&
    newWordsTop >= -containerHeight.value * 3
  ) {
    opacity1.value = 0;
    opacity2.value = 0;
    opacity3.value = 0;
    opacity4.value = 1;
    opacity5.value = 0;
    keyVisual_img.value.src = `${baseImageUrl}/${deviceType.value}/landswindlers_pic2_5_${deviceType.value}.jpg`;
  } else if (newWordsTop <= -containerHeight.value * 3) {
    opacity1.value = 0;
    opacity2.value = 0;
    opacity3.value = 0;
    opacity4.value = 0;
    opacity5.value = 1;
    keyVisual_img.value.src = `${baseImageUrl}/${deviceType.value}/landswindlers_pic2_6_${deviceType.value}.jpg`;
  } else {
    opacity1.value = 1;
    opacity2.value = 0;
    opacity3.value = 0;
    opacity4.value = 0;
    opacity5.value = 0;
    keyVisual_img.value.src = `${baseImageUrl}/${deviceType.value}/landswindlers_pic2_2_${deviceType.value}.jpg`;
  }
}

// 螢幕畫面高度
// 不給捲動
// function preventScroll(event) {
//   event.preventDefault();
//   event.stopPropagation();

//   return false;
// }

// function handleScroll(event) {
//   const direction = event.deltaY > 0 ? 'down' : 'up';
//   console.log(direction, scrollCount.value);

//   // 向下滾動邏輯
//   if (direction === 'down') {
//     if (scrollCount.value >= 1 && scrollCount.value <= 3) {
//       scrollCount.value++;
//       console.log(scrollCount);
//       window.addEventListener('wheel', preventScroll, { passive: false });
//       if (scrollCount.value === 2) {
//         currentImage.value = 8;
//       } else if (scrollCount.value === 3) {
//         // window.removeEventListener("wheel", preventScroll);
//       }
//     }
//   }

//   // 向上滾動邏輯
//   if (direction === 'up') {
//     if (scrollCount.value > 1) {
//       scrollCount.value--;
//       window.addEventListener('wheel', preventScroll, { passive: false });
//       if (scrollCount.value === 1) {
//         currentImage.value = 7;
//         window.removeEventListener('wheel', preventScroll);
//       }
//     }
//   }
// }

// const gridCard = ref();
// const { top: gridCardTop } = useElementBounding(gridCard);

// watch(gridCardTop, (newGridCardTop) => {
//   console.log(newGridCardTop);
//   if (newGridCardTop <= 0 && scrollCount.value > 0) {
//     window.addEventListener("wheel", preventScroll, { passive: false });
//   } else if (newGridCardTop <= 0 && scrollCount.value < 2) {
//     window.addEventListener("wheel", preventScroll, { passive: false });
//   } else {
//     window.removeEventListener("wheel", preventScroll);
//   }
// });
/////////////
</script>

<template>
  <section id="Kaohsiung" class="topic2_section">
    <div class="topic2_logo_container">
      <div class="topic2_logo_content">
        <video
          autoplay
          muted
          loop
          playsinline
          style="width: 100%; height: 100vh"
        >
          <source
            :src="`${baseVideoUrl}/${deviceType}/landswindlers_video2_1_${deviceType}.mp4`"
          />
        </video>
        <div class="topic2_logo_title">
          <div>高雄</div>
          <div>以人頭地主 掌控重劃會</div>
        </div>
      </div>
    </div>

    <div class="topic2_keyVisual_container">
      <div class="topic2_keyVisual_bg">
        <img
          ref="keyVisual_img"
          :src="`${baseImageUrl}/${deviceType}/landswindlers_pic2_2_${deviceType}.jpg`"
        />
      </div>

      <div class="topic2_keyVisual_contents">
        <div
          ref="keyVisual_words"
          class="topic2_keyVisual_content"
          :style="`opacity: ${opacity1}; transition: 0.1s;`"
        >
          <div class="topic2_keyVisual_content_word">
            立埕工程顧問公司負責人廖堅志2019年主導成立湖底重劃會，2023年遭檢方查出偽造文書、虛增人頭地主並起訴，市府勒令停工。廖也涉入台南佃西重劃和台南市議會前議長郭信良收賄案。記者調查，該集團透過湖底案可套利至少1.6億元，以下是其玩弄人頭和土地的手法。
          </div>
        </div>
        <div
          class="topic2_keyVisual_content"
          :style="`opacity: ${opacity2}; transition: 0.1s;`"
        >
          <div class="topic2_keyVisual_content_word">
            據法規，重劃區地主持有土地，需達「最小建築基地面積」，才能參與重劃會投票表決，因此集團先購買一塊土地，再切割為24塊當地最小面積「49.6平方公尺」，以利之後「配地」。
          </div>
        </div>
        <div
          class="topic2_keyVisual_content"
          :style="`opacity: ${opacity3}; transition: 0.1s;`"
        >
          <div class="topic2_keyVisual_content_word">
            <div>
              <div>
                接著，重劃集團將24塊土地的所有權，移轉給24名他們掌控的「人頭地主」。
              </div>
              <div>
                <img
                  :src="`${baseImageUrl}/landswindlers_card_icon_pcpadmob.svg`"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="topic2_keyVisual_content"
          :style="`opacity: ${opacity4}; transition: 0.1s;`"
        >
          <div class="topic2_keyVisual_content_word">
            2019年7月，重劃會成立大會召開，廖指派員工代理人頭地主出席並擔任投票部隊，選出內定人選擔任理、監事，推選廖擔任理事長，全面掌控重劃會，主導配地方式及利益龐大的抵費地。
          </div>
        </div>
        <div
          class="topic2_keyVisual_content"
          :style="`opacity: ${opacity5}; transition: 0.1s;`"
        >
          <div class="topic2_keyVisual_content_word">
            此後，理事會主導重劃，疑似壓低「重劃後地價」以增加自身能取得的抵費地，損害地主權益，更將重劃工程包給自己的公司立埕營造，堪稱「球員兼裁判」，重劃會喪失監督功能。
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="topic2_gridCard_container">
      <div>
        <img
          :src="`${baseImageUrl}/${deviceType}/landswindlers_pic2_7_${deviceType}.jpg`"
        />
      </div>
    </div> -->

    <div class="topic2_gridCard_container">
      <div class="topic2_gridCard_content">
        <div class="topic2_gridCard_image">
          <img
            ref="firstImage"
            src="https://vip.udn.com/newmedia/2025/landswindlers/images/pc/landswindlers_pic2_7_pc.jpg"
            class="image"
            alt=""
          />
          <img
            ref="secondImage"
            src="https://vip.udn.com/newmedia/2025/landswindlers/images/pc/landswindlers_pic2_8_pc.jpg"
            class="image"
            alt=""
          />
        </div>
        <div ref="floatingText" class="floating-text">
          「每一個自辦市地重劃，靠的都是偽造文書和詐欺，那臺灣不是詐騙之島嗎？」
        </div>
      </div>
      <div class="topic2_gridCard_box">
        <div class="topic2_gridCard_empty"></div>
        <div class="topic2_gridCard_empty"></div>
        <div class="topic2_gridCard_empty"></div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.topic2_section {
  width: 100%;
  font-family: Noto Sans TC;

  .topic2_logo_container {
    position: relative;
    height: 200vh;

    .topic2_logo_content {
      position: sticky;
      top: 0;
      display: grid;
      width: 100%;
      height: 100vh;
    }

    video {
      grid-area: 1/1/2/2;
      max-width: 100%;
      object-fit: cover; /* 確保影片充滿區域 */
    }

    .topic2_logo_title {
      grid-area: 1/1/2/2;

      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: center;
      align-items: center;

      :nth-child(1) {
        font-size: 180px;
        font-weight: 700;
        line-height: 200px;
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

        padding: 0 30px;
        background-color: $Y1;
      }
    }
  }

  .topic2_keyVisual_container {
    position: relative;
    height: 650vh;

    .topic2_keyVisual_bg {
      position: sticky;
      top: 0;

      width: 100%;
      // height: 100vh;
      // overflow: hidden;

      img {
        width: 100%;
        height: auto;
        // object-fit: cover;
      }
    }

    .topic2_keyVisual_contents {
      position: absolute;
      width: 100%;

      .topic2_keyVisual_content {
        width: 100%;
        height: 100vh;

        font-size: 20px;
        font-weight: 700;
        line-height: 32px;
        color: $color-font-white;

        @include mob {
        }

        .topic2_keyVisual_content_word {
          width: 470px;
          padding: 10px 26px;
          margin: 0 auto;
          background-color: #000000d9;

          @include pc {
            padding: 10px 20px;
          }
          @include pad {
            padding: 10px 20px;
          }

          div {
            display: flex;
            flex-direction: column;
            gap: 10px;

            div {
              width: 100%;
              height: fit-content;

              img {
                width: 100%;
                height: auto;
                object-fit: cover;
              }
            }
          }
        }
      }
    }
  }

  // .topic2_gridCard_container {
  //   height: 100vh;
  //   padding: 40px 110px;

  //   div {
  //     width: 100%;
  //     height: 100%;
  //     overflow: hidden;

  //     img {
  //       width: 100%;
  //       height: auto;
  //       object-fit: cover;
  //     }
  //   }
  // }

  .topic2_gridCard_container {
    position: relative;
    max-width: 1060px;
    margin: 0 auto;
    height: 300vh;
  }

  .topic2_gridCard_content {
    position: sticky;
    top: 0;
    height: calc(100vh - 80px); /* 一次顯示一張圖片 */
    padding: 40px 0;
  }

  .topic2_gridCard_image {
    display: grid;
    height: 100%;

    .image:nth-of-type(1) {
      position: relative;
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    .image:nth-of-type(2) {
      position: relative;
      grid-column: 1 / 2;
      grid-row: 1 / 2;
      z-index: -1;
    }
  }

  .topic2_gridCard_box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .topic2_gridCard_empty {
    height: 100vh;
    padding: 40px 0;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.8s ease; /* 圖片切換效果 */
  }

  .floating-text {
    position: absolute;
    bottom: 50%;
    right: 0;

    display: none;

    width: 45%;
    padding: 0 20px;
    animation: floatUp 0.5s ease-in forwards; /* 浮現動畫 */

    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
    color: #fafafa;
  }

  @keyframes floatUp {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
}
</style>
