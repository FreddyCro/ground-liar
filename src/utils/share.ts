export function detectMob() {
  return Boolean(
    navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i),
  );
}

// 以下三行，請根據每個專案的meta自行調整
const metaTitle = "自辦重劃發財夢：拆解一場圍繞土地的金錢遊戲 | 專題 | 聯合報";
const metaDescription =
  "即使內政部已修正辦法，自辦市地重劃仍亂象叢生，包括開發公司虛灌人頭地主及轉賣抵費地套利百億。聯合報盤點三個重劃區，拆解這場圍繞土地的金錢遊戲。";
const metaURL = "https://vip.udn.com/newmedia/2025/landswindlers/";

const encodeTitle = encodeURI(metaTitle);
const encodeDescription = encodeURI(metaDescription);
const encodeUrl = encodeURI(metaURL);
const shareText = `${encodeTitle}%0D%0A%0D%0A${encodeDescription}`;

export const shareURL_line = detectMob()
  ? `https://line.naver.jp/R/msg/text/?${encodeUrl}`
  : `https://social-plugins.line.me/lineit/share?url=${encodeUrl}`;

export const shareURL_fb = `https://www.facebook.com/dialog/share?app_id=1010324812347164&display=popup&href=${encodeUrl}&redirect_uri=${encodeUrl}`;

export const shareURL_twitter = `https://twitter.com/intent/tweet/?text=${shareText}%0D%0A%0D%0A${encodeUrl}`;

export default {
  detectMob,
  shareURL_fb,
  shareURL_line,
  shareURL_twitter,
};
