## css

### 单选

1. div 与 span 标签的区别有（）
   A． div 属于块级元素，span 属于行内元素
   B. 他们后面的元素都会自动换行
   C． 没有任何实质意义。
   D．独立出各个区块。

2. CSS Sprites 技术是指（）
   A. 把多张图片文件合并
   B. 把背景图片变成图片文件
   C. 把多张背景图片合并成一张图片文件
   D. 把多张图片合并成一张背景图片

3. 如果要使一幅图像在网页中居中显示，应使用一下语句
   A． <div align="center"><img  src="image.gif"></div>
   B. <img  src="image.png"  align="center">
   C. <img  src="image.jpg"  align="middle">
   D. <img  src="image.jpg"  verticalAlign="center">

4. 以下哪个是对的?

```
// html
<div class="wrapper">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
</div>

// css
html,
body {
  width: 100%;
  height: 100%;
}
.wrapper {
  width: 100%;
  height: 100px;
  display: flex;
}
.item {
  flex: 1;
  height: 100%;
  width: 100px;
}
.item:first-child {
  background: #000;
}
.item:last-child {
  background: #666;
}

```

A．div.item 的每个宽度为 100px
B. div.item 每个的宽度为 div.wrapper 的 1/3
C. div.item 每个的宽度为 div.wrapper 的 1/3，当 div.wrapper 小于 300px 时 div.item 每个为 100px
D. div.item 每个的宽度为 div.wrapper 的 1/3，当 div.wrapper 小于 100px 时 div.item 每个为 100px

5. Flexbox 如何实现垂直居中?
   A. align-items: middle;
   B．justify-content: center;
   C．align-self: center;
   D．justify-items: center;

6. 如果要为网页链接一个外部样式表文件，应使用一下（）标记符。
   A． meta
   B． Link
   C． style
   D． script

7. line-height:2、line-height:200%,以下 line-height 分别为多少?

```
// html
<div class="father">
    <div class="son">
    我的font-size为40px
    </div>
</div>

// line-height:200%
.father {
  height: 100px;
  width: 100px;
  font-size: 15px;
  line-height: 200%;
}

.son {
  height: 100px;
  width: 100px;
  font-size: 40px;
}

// line-height:2
.father {
  height: 100px;
  width: 100px;
  font-size: 15px;
  line-height: 2;
}

.son {
  height: 100px;
  width: 100px;
  font-size: 40px;
}
```

A．line-height:2 时.son line-height 为 30px，line-height:200%时.son line-height 为 80px
B．line-height:2 时.son line-height 为 80px，line-height:200%时.son line-height 为 80px
C．line-height:2 时.son line-height 为 30px，line-height:200%时.son line-height 为 30px
D．line-height:2 时.son line-height 为 80px，line-height:200%时.son line-height 为 30px

### 多选

1. 下面情况中，哪些会发生 margin 属性的叠加（）
   A. 元素的顶边界与前面元素的底边界发生叠加
   B． 元素的顶边界于父元素的顶边界发生叠加
   C． 元素的顶边界与底边界发生叠加
   D．空元素中已经叠加的边界与另一个空元素的边界发生叠加

2. 盒子模型包括哪些？
   A．border
   B．margin
   C. padding
   D．content

3. 在 HTML 中，input 元素的 type 属性用户制定表单元素的类型，下列不可用的类型有（）
   A. image
   B. textarea
   C. select
   D. hidden

4. 以下哪些不能直接在 html 引入有效的外部样式表的文件扩展名是
   A. .sass
   B. .stylus
   C. .css
   D. .less
   E. .xss

5. 如何触发 BFC?
   A. overflow: hidden
   B. position: relative
   C. display: table-cell
   D. clear: both
   E. float: left

6. 盒子模型包括哪些？
   A．border
   B．margin
   C. padding
   D．content

### 答题

1. 写一个 5 列等宽响应式布局，各列之间的间隙为 8px（考虑兼容性）？

## js

### 多选

1. 以下是 JS 的数据类型的是?
   A．Boolean
   B. Null
   C．Undefined
   D．Number
   E．String
   F．Symbol
   G. Map
   H. Set
   I. Object

### 答题

1. 浅拷贝和深拷贝的区别

2. 讲讲你对 cookie 的理解？包括 SameSite 属性。

3. 简述事件代理的原理?

4. 箭头函数和普通函数的区别

5. 通过解构赋值，怎么交换 a 与 b 两个变量的值

```
let a = 3;
let b = 5;
```

6. let 和 var 的区别

7. 请写出下面代码输出结果以及原因

```
var title = "ABC";
function showTitle(){
  console.log(title,"1");
  if(0){ var title = "EFG" }
  console.log(title,"2");
}
showName();

```

8. 如何让 1+1 等于 3?

9. typescript 中 type 和 interface 的区别

10. http 请求跨域问题，你都知道哪些解决跨域的方法

11. 实现 curry 函数达到以下效果

```
function accumulate(a, b) {
    return a + " " + b;
}

var accumulateCurry = curry(add);

console.log(accumulateCurry("hello")("world")); // hello world
console.log(accumulateCurry("hello", "world")); // hello world
```

## React

1. React 中 keys 的作用是什么？

2. 为什么使用 class 组件，调用 super(props) 的目的是什么?

3. 你对受控组件和非受控组件了解多少？
