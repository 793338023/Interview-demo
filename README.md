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

```
   A． <div align="center"><img  src="image.gif"></div>
   B. <img  src="image.png"  align="center">
   C. <img  src="image.jpg"  align="middle">
   D. <img  src="image.jpg"  verticalAlign="center">
```

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

——————————————————————————————————————————————————————————————————————————————

1. 前端模块化有哪些? ABCD
   A. AMD
   B. CommonJS
   C. CMD
   D. UMD

2. ES6 模块与 CommonJS 模块描述正确的是? A
   A. CommonJS 模块输出的是值的拷贝
   B. ES6 Modules 的运行机制与 CommonJS 是类似的
   C. ES6 模块导出的值，在外部进行改变了，也不会影响到这个值
   D. CommonJS 导出的值，模块内部的变化会影响到这个值

3. 删除数组中的最后一个元素，需要调用哪个方法? D
   A.sort 方法
   B.push () 方法
   C.unshift () 方法
   D.pop () 方法

4. 以下哪个选项可以对元素定义不同的过渡动画效果? A
   A.animations 属性
   B.transform 属性
   C.position 属性
   D.transitions 属性

5. 将删除指定元素的子节点，并返回被删除的节点对象，使用哪个方法? D
   A.spliceChild 方法
   B.remove 方法
   C.appendChild 方法
   D.removeChild 方法

6. 下列关于 SVG 的说法，不正确的是？ ACD
   A.SVG 图像可通过文本编辑器来创建和修改
   B.SVG 是可伸缩的
   C.SVG 可在图像质量不下降的情况下被放大
   D.SVG 不能被压缩

7. 页面上有 10 个类名为 list 的 div 节点根据以下代码，代码输出正确的是? B

```
var oEls = document.querySelectorAll(".list");
for(var i=0;i<oEls.length;i++){
   oEls[i].onclick = function(){
      console.log(i);
   }
}
```

A. 当点击第一个节点时输入为 1
B. 当点击每个节点时都输入为 10
C. 当点击每个节点时都输入为 9
D. 当点击最后一个节点时输入为 9

8. 以下描述事件委托正确的是? B
   A. 事件委托是利用事件的捕获原理来实现的
   B. 动态绑定事件
   C. focus 与 click 可以使用事件委托
   D. currentTarget 当前触发事件的元素

9. 哪些事件不能使用事件委托? AC
   A. focus
   B. mouseout
   C. blur
   D. keypress

10. promise 的状态与 catch 描述正确的是? B
    A. promise 有三种状态，分别为 pending、resolve、reject
    B. 当状态为 rejected 时，会进入 catch
    C. 当 promise 状态为 fulfilled 时，还可以变为 rejected
    D. promise 有两种状态，分别为 resolve、reject

11. Promise 中 reject 和 catch 处理上描述不正确的是? C
    A. reject 是用来抛出异常，catch 是用来处理异常
    B. reject 是 Promise 的方法，而 catch 是 Promise 实例的方法
    C. reject 后的会进入 then 中的第二个回调，然后再进入 catch
    D. 网络异常（比如断网），会直接进入 catch 而不会进入 then 的第二个回调

12. forEach、for in、for of 三者的描述正确的是? B
    A. forEach 执行遍历后可以使用 return 中断遍历
    B. for in 可以遍历对象，并且可以获取到遍历原型链上的所有属性
    C. for of 也可以直接遍历对象
    D. for of 不能遍历 Map 对象

13. npm 描述正确的是? ABCD
    A. 允许用户从 NPM 服务器下载别人编写的第三方包到本地使用
    B. NPM 是随同 NodeJS 一起安装的包管理工具
    C. 全局安装为 npm install <Module Name> -g
    D. 更新模块为 npm up <Module Name>

14. Webpack 描述正确的是? A
    A. Webpack 的工作方式是：把你的项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack 将从这个文件开始找到你的项目的所有依赖文件，使用 loaders 处理它们，最后打包为一个浏览器可识别的 JavaScript 文件。
    B. Webpack 的工作方式是：在一个配置文件中，指明对某些文件进行类似编译，组合，压缩等任务的具体步骤，这个工具之后可以自动替你完成这些任务。
    C. webpack 之 loader 加载顺序为从左到右
    D. webpack 的 externals 配置后可以不在项目进行 import 也可以使用已配置的包

15. react 中如何更新状态? C
    A. 对 state 进行赋值
    B. 对 props 的属性进行赋值
    C. 使用 setState 设置值
    D. 使用 setData 设置值
