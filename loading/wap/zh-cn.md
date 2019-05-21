# LoadingWap 组件
> 手机端进入之前的 Loading 组件

## 基本用法

[浏览器手机模式在线预览](https://output.jsbin.com/tisusuk)

<br>

<p>
  <w-loading-wap :style="{position: 'static', transform: 'none'}" />
</p>
<br>
<br>

## 遮罩

[浏览器手机模式在线预览](https://output.jsbin.com/bemezav)

<br>

<p>
  <button style="width: 100px;height: 20px;background:#1995f9;color: #fff;font-size: 14px;line-height: 20px; padding: 0;" @click=" status = true ">{{status ? '显示':'隐藏'}}</button>
  <br>
  <w-loading-wap mode="mask" orgId="100213" imgVersion="1" :style="{zIndex: 999}" v-if="status" @click.native=" status = false " />
</p>
<br>
<br>

## 通过主办id(orgId)定制图片

[浏览器手机模式在线预览](https://output.jsbin.com/cudaden)

<br>

<p>
  <w-loading-wap orgId="100213" imgVersion="1" :style="{position: 'static', transform: 'none'}" />
</p>
<br>
<br>

## 定义图片

[浏览器手机模式在线预览](https://output.jsbin.com/yujeguh)

<br>

<p>
  <w-loading-wap imgName="loading" :style="{position: 'static', transform: 'none'}" />
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
|imgType|loading 图片的 类型|String|否|gif|
|imgStyle|loading 图片的 样式|Object|否|无|
|imgHost|loading 图片的 路径|String|否|https://static2.evente.cn/static/img/|
|imgName|loading 图片的 名字|String|否|loading201904171|
|imgVersion|loading 图片的 版本|String|否|无|
|orgId|loading 图片的 特定版本，与 imgName 互斥|String|否|无|

<script>
import WLoadingWap from './LoadingWap';

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
