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

<h3>🚀 Landscape Simulator-Simulate landscape in scenes that cannot be landscaped</h3>

**[Online Use](https://theajack.gitee.io/landscape-simulator) | [中文](https://github.com/theajack/landscape-simulator/blob/master/README.cn.md) | [Changelog](https://github.com/theajack/landscape-simulator/blob/master/helper/version.md) | [Issue](https://github.com/theajack/landscape-simulator/issues/new) | [Gitee](https://gitee.com/theajack/landscape-simulator)**

--------

<details>
    <summary>Expand directory</summary>

<!-- toc -->

- [1. Features](#1-features)
- [2. Quick use](#2-quick-use)
  * [1.1 npm way](#11-npm-way)
  * [1.2 cdn](#12-cdn)
- [2 APIs](#2-apis)
  * [2.1 init](#21-init)
  * [2.2 appendChild](#22-appendchild)
  * [2.3 getSimulateSize](#23-getsimulatesize)
  * [2.4 isSimulateLandscape](#24-issimulatelandscape)
  * [2.5 onSimulateChange](#25-onsimulatechange)

<!-- tocstop -->

</details>

--------

## 1. Features

1. Typescript writing
2. Support mobile vertical screen rotation to simulate horizontal screen
3. Get the simulated landscape state and length and width

## 2. Quick use

### 1.1 npm way

````
npm i landscape-simulator
````

````js
import LandscapeSimulator from 'landscape-simulator';

LandscapeSimulator.init({
  disablePc: false, // default is true
})
````

It is recommended to place the above initialization code in the head for execution

### 1.2 cdn

When using the cdn method, the script tag can be placed in the head

```html
<script src="https://cdn.jsdelivr.net/npm/landscape-simulator/landscape-simulator.min.js"></script>
````

You can use the property `auto-simulate=false` to control not to use auto-on simulation, the default is auto-on.

You can use the attribute `disable-pc=false` to control the simulation to be enabled on the pc side. The default is not to enable it on the pc side.

When referenced by cdn, the `LandscapeSimulator` object will be mounted on the window

## 2 APIs

### 2.1 init

Initialize the simulator, which will be automatically initialized when referenced by cdn

````js
LandscapeSimulator.init({
  disablePc: false, // default is true
})
````

### 2.2 appendChild

Add child elements to a rotating container

````js
LandscapeSimulator.appendChild(htmlElement);
````

### 2.3 getSimulateSize

Get the emulated later screen size

````js
const size = LandscapeSimulator.getSimulateSize();
````

### 2.4 isSimulateLandscape

Get whether it is currently in a state of simulating a landscape screen

````js
const bool = LandscapeSimulator.isSimulateLandscape();
````

### 2.5 onSimulateChange

Listen for changes in the state of the simulated horizontal screen

````js
LandscapeSimulator.onSimulateChange(isSimulate => {
  
});
````