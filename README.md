# 原生微信小程序开发经验总结

## 全局样式

app.wxss中的样式会对所有页面生效，对组件不生效。因此，可以在app.wxss中放一些常用的预定义样式类，可以新建一个global.wxss然后在app.wxss中引入，这样如果组件需要预定义样式也可以自主引入。

## 自定义标题栏

使用自定义标题栏，除了可以自定义标题栏的样式外，还可以对页面路由进行更细粒度的控制，类似于路由钩子，而且在一些从诸如分享进入小程序的场景，默认的标题栏是无法回到首页的，如果是自定义标题栏就可以添加一个回到首页的按钮。

下面是一个标题栏自定义组件，其中`button=wx.getMenuButtonBoundingClientRect()`是右上角胶囊按钮的布局信息，`statusBarHeight=wx.getSystemInfoSync().statusBarHeight`是系统状态栏的高度。

```wxml
<view class="container c-nav" style="padding:{{button.top}}px calc(100% - {{button.left}}px) {{button.top-statusBarHeight}}px 0;">
  <act back="{{back}}" home="{{home}}" onBack="{{onBack}}" onHome="{{onHome}}"
    bind:back="onBack" bind:home="onHome"
  />
  <view class="title c-title" style="height:{{button.height}}px;line-height:{{button.height}}px;">{{title}}</view>
</view>
<view class="placeholder" style="height:{{button.height + 2*(button.top-statusBarHeight) + statusBarHeight}}px;" />
```

- 抽象节点和slot插槽

中间的`<act ... />`是一个自定义组件，它占据了抽象节点的默认位置，在调用的时候可以指定一个组件覆盖`act`组件，当然也可以不传就以`act`显示。

本来最好的方式是像下面这样用使用插槽。但是小程序不支持这种使用默认插槽的方式，抽象节点的方式虽然也能实现类似功能，但写起来很繁琐而且在指定抽象节点使用的组件时无法向组件传参。

```wxml
<view class="container c-nav" style="padding:{{button.top}}px calc(100% - {{button.left}}px) {{button.top-statusBarHeight}}px 0;">
  <slot>
    <-- act组件的内容 -->
    <view class="act {{(back || home)?'':'hidden'}} {{(!back && home)?'center':''}}" style="width:{{button.width}}px;height:{{button.height}}px;margin-left:calc(100vw - {{button.right}}px);">
      <image wx:if="{{back}}" bind:tap="back" class="img back" src="/images/left.svg" />
      <image wx:if="{{home}}" bind:tap="home" class="img home" src="/images/home.svg" />
    </view>
  </slot>
  <view class="title c-title" style="height:{{button.height}}px;line-height:{{button.height}}px;">{{title}}</view>
</view>
<view class="placeholder" style="height:{{button.height + 2*(button.top-statusBarHeight) + statusBarHeight}}px;" />
```

- 外部样式类

`c-nav`和`c-title`是预定义的2个外部样式类，需要在js中声明`externalClass`，在调用的时候可以指定一个外部类名覆盖组件内样式，但需要注意样式权重问题。

## 使用Promise

小程原生API不会返回promise，而是通过传递回调函数的方式处理结果。可以定义一个promisify方法，让原生API返回promise，类似于node.js中的util.promisify()方法。

```javascript
const promisify = function (func) {
  return function (param={}) {
    return new Promise((resolve, reject)=>{
      param.success = (res) => {
        resolve(res)
      }
      param.fail = (err) => {
        reject(err)
      }
      func(param)
    })
  }
}
```

### 定义全局异常处理

对wx.request()方法，除了要封装成promise外，还可以在顶层对请求结果做一次全局的异常处理（当然需要与后端定义好异常），以后的请求就可以不用考虑异常了。

## 一些少见但可能很有用的特性

### WXS函数绑定事件

### 互斥事件绑定 mut-bind

### 事件的捕获阶段

### mark 可以使用 mark 来识别具体触发事件的 target 节点

### 除继承样式外， app.wxss 中的样式、组件所在页面的的样式对自定义组件无效（除非更改组件样式隔离选项）

### 组件可以指定它所在节点的默认样式，使用 :host 选择器

### styleIsolation addGlobalClass

### 在同一个节点上使用普通样式类和外部样式类时，两个类的优先级是未定义的，因此最好避免这种情况

### 引用页面或父组件的样式

### 数据监听器

### 纯数据字段

### 抽象节点 componentGenerics

### 自定义组件扩展 修改自定义组件定义段的能力 Behavior computed watched

### 周期性更新
