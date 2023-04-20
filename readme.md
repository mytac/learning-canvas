# basic

## appying styles and colors

### tips

1. 如果你的网页上需要绘制 canvas 作为装饰性元素，需要在` <canvas>`上加`role="presentation"`
2. 如果有描述性的文字，需要在属性`aria-label `中加，或者用`<canvas>`对其包裹。
3. canvas 中的内容不是 DOM，而`<canvas>`中包裹的内容是。

### color

1. 和人画画一样，设置了颜色之后，画新的 path 仍旧是这个颜色。
2. 颜色可写为：

```js
ctx.fillStyle = 'orange'
ctx.fillStyle = '#FFA500'
ctx.fillStyle = 'rgb(255, 165, 0)'
ctx.fillStyle = 'rgba(255, 165, 0, 1)'
```

### Transparency

可以设置全局透明度`ctx。globalAlpha=0.5`或者

### Line Styles

#### LineWidth

![demo](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors/canvas-grid.png)
如果你想要绘制一条从 (3,1) 到 (3,5)，宽度是 1.0 的线条，你会得到像第二幅图一样的结果。实际填充区域（深蓝色部分）仅仅延伸至路径两旁各一半像素。而这半个像素又会以近似的方式进行渲染，这意味着那些像素只是部分着色，结果就是以实际笔触颜色一半色调的颜色来填充整个区域（浅蓝和深蓝的部分）。这就是上例中为何宽度为 1.0 的线并不准确的原因。

要解决这个问题，你必须对路径施以更加精确的控制。已知粗 1.0 的线条会在路径两边各延伸半像素，那么像第三幅图那样绘制从 (3.5,1) 到 (3.5,5) 的线条，其边缘正好落在像素边界，填充出来就是准确的宽为 1.0 的线条。

### lineCap

线段端点形态，默认：butt，和辅助线平齐；round 辅助线多出个半圆；square 端点处加上了等宽且高度为一半线宽的方块。

```
butt round square
```

### lineJoin
