## css

### 单选

1. A
2. C
3. A
4. B
5. C
6. B
7. D

### 多选

1. ABCD
2. ABCD
3. BC
4. ABD
5. ACE
6. ABCD

### 答题

1. 写一个 5 列等宽响应式布局，各列之间的间隙为 8px（考虑兼容性）？

浮动和清除浮动
margin 负值的作用（可参考 Bootstrap 3 中栅格容器.container 的样式）

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <style>
      * {
        margin: 0px;
        padding: 0px;
      }

      .container {
        margin-right: -8px;
      }

      .row {
        box-sizing: border-box;
        padding-right: 8px;
        width: 20%;
        height: 100px;
        float: left;
      }

      .container::before {
        display: table;
        content: '';
      }

      .container::after {
        display: table;
        content: '';
        clear: both;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="row">第一列</div>
      <div class="row">第二列</div>
      <div class="row">第三列</div>
      <div class="row">第四列</div>
      <div class="row">第五列</div>
    </div>
  </body>
</html>
```

## JS

### 多选

1. ABCDEFI

### 答题

1. 浅拷贝和深拷贝的区别

浅拷贝：一般指的是把对象的第一层拷贝到一个新对象上去

```
var a = { count: 1, deep: { count: 2 } }
var b = Object.assign({}, a)
// 或者
var b = {...a}
```

深拷贝：一般需要借助递归实现，如果对象的值还是个对象，要进一步的深入拷贝，完全替换掉每一个复杂类型的引用。

```
var deepCopy = (obj) => {
    var ret = {}
    for (var key in obj) {
        var value = obj[key]
        ret[key] = typeof value === 'object' ? deepCopy(value) : value
    }
    return ret
}

或

var ret = JSON.parse(JSON.stringify(obj));

```

2. 讲讲你对 cookie 的理解？包括 SameSite 属性。

   为了解决 HTTP 无状态导致的问题，后来出现了 Cookie。而 Cookie 的存在也不是为了解决通讯协议无状态的问题，只是为了解决客户端与服务端会话状态的问题，这个状态是指后端服务的状态而非通讯协议的状态。

   Cookie 的缺点:可以从大小、安全、增加请求大小等方面回答。

   [SameSite](https://segmentfault.com/a/1190000022210375/) 属性可以让 Cookie 在跨站请求时不会被发送，从而可以阻止跨站请求伪造攻击（CSRF）。

3. 简述事件代理的原理?
   简单的说就是将事件交由别人来执行，就是将子元素的事件通过冒泡的形式交由父元素来执行。

4. 箭头函数和普通函数的区别

普通函数：
(1).this 总是代表它的直接调用者
(2).在默认情况下，没找到直接调用者，this 指向 window
(3).在严格模式下，没有直接调用者的函数中的 this 是 undefined
(4).使用 call，apply，bind 绑定，this 指的是绑定的对象
箭头函数：
(1).在使用 => 定义函数的时候，this 的指向是定义时所在的对象，而不是使用时所在的对象，bind()、call()、apply()均无法改变指向
(2).不能用做构造函数，也就是说不能使用 new 命令，否则就会抛出一个错误
(3).不能使用 arguments 对象，但是可以使用…rest 参数
(4).不能使用 yield 命令
(5).没有原型属性

5. 通过解构赋值，怎么交换 a 与 b 两个变量的值

```
let a = 3;
let b = 5;

[a, b] = [b, a];
```

6. let 和 var 的区别
   (1).let 没有变量提升，存在暂时性死区，必须等 let 声明完以后，变量才能使用
   (2).let 变量不能重复声明
   (3).let 声明的变量只在 let 代码块有效

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

undefined "1"
undefined "2"

因为函数作用域与声明提升，而声明提升默认赋值为 undefined，showTitle 函数内 title 赋值条件为否。

8. 如何让 1+1 等于 3?

对象类型的转换规则
从 valueOf\toString 下手

```
var a = new Number(1);
var b = new Number(1);

a.valueOf = function (a) {
  return 2;
};

console.log(a + b);

```

9. typescript 中 type 和 interface 的区别

type 可以声明基本类型别名，联合类型，元组等类型

```
// 基本类型别名
type Name = string

// 联合类型
interface Dog {
 wong();
}
interface Cat {
 miao();
}

type Pet = Dog | Cat

// 具体定义数组每个位置的类型
type PetList = [Dog, Pet]
```

type 语句中还可以使用 typeof 获取实例的 类型进行赋值

```
let div = document.createElement('div');
type B = typeof div
```

interface 能够声明合并

```
interface User {
 name: string
 age: number
}

interface User {
 sex: string
}

等价于=>
interface User {
 name: string
 age: number
 sex: string
}

```

10. http 请求跨域问题，你都知道哪些解决跨域的方法

(1). 使用标签的 src，src 属性是没有同源的限制的
(2). jsonp,通过 script 标签的 src 属性引入跨域文件从而携带数据实现了数据的跨域访问。
(3). CORS 实现跨域，服务器端设置允许接受的源 header
(4). 代理，客户端有同源策略，服务器没有同源策略，可以使用服务器作为代理去跨域请求。

11. 实现 curry 函数达到以下效果

```
function accumulate(a, b) {
    return a + " " + b;
}

var accumulateCurry = curry(add);

console.log(accumulateCurry("hello")("world")); // hello world
console.log(accumulateCurry("hello", "world")); // hello world
```

```
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}
```

## React

1. React 中 keys 的作用是什么？

在 React 中，key 不是给用户使用的，而是给 React 自己使用的，一般来说，当我们动态创建 React 的元素，并且 React 元素内包含数量或顺序不确定的子元素时，我们就需要提供 key 这个特殊的属性。

key 在组件上的作用:
key 值相同，组件属性发生变化，React 只更新对应组件的属性
key 值不同，React 先销毁原来的组件，然后在重新创建新的组件

2. 为什么使用 class 组件，调用 super(props) 的目的是什么

先创建父类的实例对象 this（所以必须先调用父类的 super()方法，然后在用子类的构造函数修改 this），通过 class 关键字定义类，类之间通过 extends 关键字实现继承，子类必须在 constructor 方法中调用 super 方法。因为子类没有自己的 this 对象，而是继承了父类的 this 对象，然后对其加工，如果不调用 super 方法，子类得不到 this 对象。

3. 你对受控组件和非受控组件了解多少？

受控组件: 没有维持自己的状态,数据由父组件控制, 通过 props 获取当前值，然后通过回调通知更改
非受控组件: 保持着自己的状态,数据由 DOM 控制, Refs 用于获取其当前值
