<!--
 * @Author: tackchen
 * @Date: 2022-03-27 23:04:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-06-05 11:39:11
 * @FilePath: /landscape-simulator/helper/version.md
 * @Description: Coding something
-->

## 0.0.2

1. 增加 isEnabled、getContainer 方法
2. init方法增加Promise返回值
3. onSimulateChange监听首次也会触发
4. 增加一个dom层级，以适配document.body 全屏
5. 优化script加载逻辑。默认不自动执行，需要带上auto-simulate='true'
6. 增加ignore-simulate属性，用于忽略dom元素模拟横屏

## 0.0.1
1. 完成初版功能