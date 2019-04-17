<template>
  <div :class="wrapClass">
    <img :class="imgClass" :src="imgPath" @error="errorHandle" :style="imgStyle">
  </div>
</template>

<script>
const imgHostDef = 'https://static2.evente.cn/static/img/';
const imgTypeDef = 'gif';
const imgNameDef = 'loading201904171';
const imgVersionDef = '';

export default {
  name: 'w-loading-wap',
  data() {
    return {
      imgPath: '',
      imgHostDef,
      imgTypeDef,
      imgNameDef,
      imgVersionDef,
    };
  },
  props: {
    imgStyle: Object,
    imgType: {
      type: String,
      default: imgTypeDef,
    },
    imgHost: {
      type: String,
      default: imgHostDef,
    },
    imgName: {
      type: String,
      default: imgNameDef,
    },
    imgVersion: {
      type: String,
      default: imgVersionDef,
    },
    mode: {
      type: String,
      default: 'fixed', // fixed | mask
    },
    orgId: [Number, String],
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
  mounted() {
    const name = this.orgId || this.imgName;
    this.imgPath = `${this.imgHost}${name}${this.imgVersion}.${this.imgType}`;
  },
  methods: {
    errorHandle() {
      this.imgPath = `${this.imgHostDef}${this.imgNameDef}${this.imgVersionDef}.${this.imgTypeDef}`;
    },
  },
};
</script>

<style scoped lang="scss">
@import './cloadingwap.scss';
</style>
