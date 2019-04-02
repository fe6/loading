# Loading 组件
> 手机端进入之前的 Loading 组件

## 基本用法
> 默认大小通用是 25 px

<br>

<p>
  <w-loading-wap :style="{position: 'static', transform: 'none'}" />
</p>
<br>
<br>

## 遮罩
> 默认大小通用是 25 px

<br>

<p>
  <button style="width: 100px;height: 20px;background:#1995f9;color: #fff;font-size: 14px;line-height: 20px; padding: 0;" @click=" status = true ">{{status ? '显示':'隐藏'}}</button>
  <br>
  <w-loading-wap mode="mask" :style="{zIndex: 999}" v-if="status" @click.native=" status = false " />
</p>
<br>
<br>

## API

### 属性

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|mode|loading 的模式，可选模式: fixed(没有遮罩，固定居中)， mask(外层一个充满视觉的透明无颜色遮罩，并固定居中)|String|否|fixed|
|classWrapName|loading 外层的 class 名|Object, String|否|无|
|classImgName|loading 图片的 class 名|Object, String|否|无|

<script>
import WLoadingWap from '../src/CLoading';

export default {
  data() {
    return {
      status: false,
    };
  },
  components: {
    WLoadingWap,
  },
};
</script>
