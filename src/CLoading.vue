<template>
  <div :class="wrapClass">
    <img :class="imgClass" src="https://static2.evente.cn/static/img/loading201904021.gif" :style="imgStyle">
  </div>
</template>

<script>
export default {
  name: 'w-loading-wap',
  props: {
    imgStyle: Object,
    mode: {
      type: String,
      default: 'fixed', // fixed | mask
    },
    classWrapName: [Object, String],
    classImgName: [Object, String],
  },
  computed: {
    wrapClass() {
      return [`w-loading-wap-${this.mode}`, this.className];
    },
    imgClass() {
      return [`w-loading-wap-${this.mode}-img`, this.classImgName];
    },
  },
};
</script>

<style scoped lang="scss">
@import './cloading.scss';
</style>
