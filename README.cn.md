# [LandscapeSimulator](https://www.github.com/theajack/landscape-simulator)

<p>
    <a href="https://www.github.com/theajack/landscape-simulator"><img src="https://img.shields.io/github/stars/theajack/landscape-simulator.svg?style=social" alt="star"></a>
    <a href="https://theajack.gitee.io"><img src="https://img.shields.io/badge/author-theajack-blue.svg?style=social" alt="Author"></a>
</p> 

<p>
    <a href="https://www.npmjs.com/package/landscape-simulator"><img src="https://img.shields.io/npm/v/landscape-simulator.svg" alt="Version"></a>
    <a href="https://npmcharts.com/compare/landscape-simulator?minimal=true"><img src="https://img.shields.io/npm/dm/landscape-simulator.svg" alt="Downloads"></a>
    <a href="https://cdn.jsdelivr.net/npm/landscape-simulator/landscape-simulator.min.js"><img src="https://img.shields.io/bundlephobia/minzip/landscape-simulator.svg" alt="Size"></a>
    <a href="https://github.com/theajack/landscape-simulator/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/landscape-simulator.svg" alt="License"></a>
    <a href="https://github.com/theajack/landscape-simulator/search?l=typescript"><img src="https://img.shields.io/github/languages/top/theajack/landscape-simulator.svg" alt="TopLang"></a>
    <a href="https://github.com/theajack/landscape-simulator/issues"><img src="https://img.shields.io/github/issues-closed/theajack/landscape-simulator.svg" alt="issue"></a>
</p>

<h3>🚀 横屏模拟器-在无法横屏的场景模拟横屏</h3>

**[在线体验](https://theajack.gitee.io/landscape-simulator) | [English](https://github.com/theajack/landscape-simulator/blob/master/README.md) | [更新日志](https://github.com/theajack/landscape-simulator/blob/master/helper/version.md) | [Issue](https://github.com/theajack/landscape-simulator/issues/new) | [Gitee](https://gitee.com/theajack/landscape-simulator)**

--------

<details>
    <summary>展开目录</summary>

<!-- toc -->

- [1. 特性](#1-%E7%89%B9%E6%80%A7)
- [2. 快速使用](#2-%E5%BF%AB%E9%80%9F%E4%BD%BF%E7%94%A8)
  * [1.1 npm 方式](#11-npm-%E6%96%B9%E5%BC%8F)
  * [1.2 cdn](#12-cdn)
- [2 API](#2-api)
  * [2.1 init](#21-init)
  * [2.2 appendChild](#22-appendchild)
  * [2.3 getSimulateSize](#23-getsimulatesize)
  * [2.4 isSimulateLandscape](#24-issimulatelandscape)
  * [2.5 onSimulateChange](#25-onsimulatechange)

<!-- tocstop -->

</details>

--------

## 1. 特性

1. typescript 编写
2. 支持移动端竖屏旋转模拟横屏
3. 获取模拟横屏状态与长宽

## 2. 快速使用

### 1.1 npm 方式

```
npm i landscape-simulator
```

```js
import LandscapeSimulator from 'landscape-simulator';

LandscapeSimulator.init({
  disablePc: false, // 默认为true
})
```

推荐将上述初始化代码置于head中执行

### 1.2 cdn

使用cdn方式时，可将script标签放置在head中

```html
<script src="https://cdn.jsdelivr.net/npm/landscape-simulator/landscape-simulator.min.js"></script>
```

可以使用属性 `auto-simulate=false` 来控制不要使用自动开启模拟，默认为自动开启。

可以使用属性 `disable-pc=false` 来控制在pc端也开启模拟，默认为在pc端不开启。

使用cdn方式引用时，会在window上挂载 `LandscapeSimulator` 对象

## 2 API

### 2.1 init

初始化模拟器，使用cdn方式引用时会自动初始化

```js
LandscapeSimulator.init({
  disablePc: false, // 默认为true
})
```

### 2.2 appendChild

往旋转容器中添加子元素

```js
LandscapeSimulator.appendChild(htmlElement);
```

### 2.3 getSimulateSize

获取模拟的过后的屏幕尺寸

```js
const size = LandscapeSimulator.getSimulateSize();
```

### 2.4 isSimulateLandscape

获取当前是否处于模拟横屏的状态

```js
const bool = LandscapeSimulator.isSimulateLandscape();
```

### 2.5 onSimulateChange

监听模拟横屏状态改变

```js
LandscapeSimulator.onSimulateChange(isSimulate => {
  
});
```

