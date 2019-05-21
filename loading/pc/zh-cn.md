# Loading 组件
> 手机端进入之前的 Loading 组件

## 基本用法
> 默认大小通用是 25 px

[在线预览](https://jsbin.com/fujase)

<br>

<p>
  <w-loading :style="{position: 'static', transform: 'none'}" />
</p>
<br>
<br>

## 遮罩
> 默认大小通用是 25 px

[普通遮罩在线预览](https://output.jsbin.com/roduxen) | [已知主办(orgId)定制遮罩在线预览](https://output.jsbin.com/dojere)

<br>

<p>
  <button style="width: 100px;height: 20px;background:#1995f9;color: #fff;font-size: 14px;line-height: 20px; padding: 0;" @click=" statusWta = true ">{{statusWta ? '显示wta':'隐藏wta'}}</button>
  <button style="width: 100px;height: 20px;background:#1995f9;color: #fff;font-size: 14px;line-height: 20px; padding: 0;" @click=" status = true ">{{status ? '显示':'隐藏'}}</button>
  <br>
  <w-loading mode="mask" :style="{zIndex: 999}" v-if="status" @click.native=" status = false " />
  <w-loading mode="mask" orgId="100213" textColor="#201547" imgVersion="1" :style="{zIndex: 999, background: 'rgba(0, 0, 0, 0.3)'}" v-if="statusWta" @click.native=" statusWta = false " />
</p>
<br>
<br>

## 通过主办id(orgId)定制图片

[在线预览](https://output.jsbin.com/benaler)

<br>

<p>
  <w-loading orgId="100213" textColor="#201547" imgVersion="1" :style="{position: 'static', transform: 'none'}" />
</p>
<br>
<br>

## 定义图片

[在线预览](https://output.jsbin.com/qipuzom)

<br>

<p>
  <w-loading imgName="loading" :style="{position: 'static', transform: 'none'}" />
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
|classTextClass|loading 文案的 class 名|Object, String|否|无|
|imgType|loading 图片的 类型|String|否|gif|
|imgStyle|loading 图片的 样式|Object|否|无|
|imgHost|loading 图片的 路径|String|否|https://static2.evente.cn/static/img/|
|imgName|loading 图片的 名字|String|否|loading201904171|
|imgVersion|loading 图片的 版本|String|否|无|
|orgId|loading 图片的 特定版本，与 imgName 互斥|String|否|无|
|text|loading 文案|String|否|正在加载中…|
|textColor|loading 文案颜色|String|否|#0297fe|

<script>
import WLoading from './LoadingPc';

export default {
  data() {
    return {
      status: false,
      statusWta: false,
    };
  },
  components: {
    WLoading,
  },
};
</script>
