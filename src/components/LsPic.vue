<script setup>
const config = useRuntimeConfig();
const props = defineProps({
  id: {
    type: String,
  },
  classname: {
    type: String,
  },
  src: {
    type: String,
    required: true,
  },
  srcset: {
    type: Array,
    default: () => ['mob', 'pad', 'pc'],
  },
  default: {
    type: String,
    default: 'pc',
  },
  ext: {
    type: String,
    default: 'jpg',
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  alt: {
    type: String,
  },
  loading: {
    type: String,
    default: 'lazy',
  },
  use2x: {
    type: Boolean,
    default: true,
  },
  usePrefix: {
    type: Boolean,
    default: true,
  },
  webp: {
    type: Boolean,
    default: false,
  },
});

// const device = useState('device');
const APP_ASSETS_PATH = config.public.APP_ASSETS_PATH;

const parsedMedia = computed(() => {
  if (!props.srcset) return;
  if (props.srcset.length === 0) return;

  const media = [];

  if (props.srcset.includes('pc')) {
    media.push('(min-width: 1024px)');
  }

  if (props.srcset.includes('pad')) {
    media.push('(min-width: 768px)');
  }

  if (props.srcset.includes('mob')) {
    media.push('');
  }

  return media;
});

const parsedSrcset = computed(() => {
  if (!props.srcset) return;
  if (props.srcset.length === 0) return;

  return handleImage({
    src: props.src,
    srcset: props.srcset,
    ext: props.ext,
    use2x: props.use2x,
    usePrefix: props.usePrefix,
  });
});

const parsedWebpSrcset = computed(() => {
  if (!props.webp) return;
  if (!props.srcset) return;
  if (props.srcset.length === 0) return;

  return handleImage({
    src: props.src,
    srcset: props.srcset,
    ext: 'webp',
    use2x: props.use2x,
    usePrefix: props.usePrefix,
  });
});

const parsedDefault = computed(() => {
  if (props.default === 'pc')
    return `${APP_ASSETS_PATH}${props.src}_pc.${props.ext}`;
  if (props.default === 'pad')
    return `${APP_ASSETS_PATH}${props.src}_pad.${props.ext}`;
  if (props.default === 'mob')
    return `${APP_ASSETS_PATH}${props.src}_mob.${props.ext}`;
  return `${APP_ASSETS_PATH}${props.src}.${props.ext}`;
});

function handleImage({ src, srcset, ext, use2x, usePrefix }) {
  // console.log(src, srcset, ext);
  if (!srcset) return;
  if (srcset.length === 0) return;

  const srcsetList = [];

  if (srcset.includes('pc')) {
    let pc = `${APP_ASSETS_PATH}${src}${usePrefix ? '_pc' : ''}.${ext} 1x`;

    if (use2x) {
      pc += `, ${APP_ASSETS_PATH}${src}${usePrefix ? '_pc' : ''}@2x.${ext} 2x`;
    }

    srcsetList.push(pc);
  }

  if (srcset.includes('pad')) {
    let pad = `${APP_ASSETS_PATH}${src}${usePrefix ? '_pad' : ''}.${ext} 1x`;

    if (use2x) {
      pad += `, ${APP_ASSETS_PATH}${src}${
        usePrefix ? '_pad' : ''
      }@2x.${ext} 2x`;
    }

    srcsetList.push(pad);
  }

  if (srcset.includes('mob')) {
    let mob = `${APP_ASSETS_PATH}${src}${usePrefix ? '_mob' : ''}.${ext} 1x`;

    if (use2x) {
      mob += `, ${APP_ASSETS_PATH}${src}${
        usePrefix ? '_mob' : ''
      }@2x.${ext} 2x`;
    }

    srcsetList.push(mob);
  }

  return srcsetList;
}
</script>

<template>
  <picture class="ls-pic">
    <template v-for="(media, index) in parsedMedia">
      <source
        v-if="webp"
        :media="media"
        :srcset="parsedWebpSrcset[index]"
        type="image/webp"
        :key="`webp-${media}`"
      />
      <source
        v-if="srcset.length > 0"
        :media="media"
        :srcset="parsedSrcset[index]"
        :key="`normal-${media}`"
      />
    </template>
    <img
      :class="classname || ''"
      :src="parsedDefault"
      :alt="alt"
      :loading="loading"
    />
  </picture>
</template>
