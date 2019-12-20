# 原生微信小程序开发经验总结

## 全局样式

app.wxss中的样式会对所有页面生效，对组件不生效。因此，可以在app.wxss中放一些常用的预定义样式类，建议可以新建一个global.wxss然后在app.wxss中引入，这样如果组件需要预定义样式也可以自主引入。

WXS函数绑定事件
互斥事件绑定 mut-bind
事件的捕获阶段
mark 可以使用 mark 来识别具体触发事件的 target 节点
除继承样式外， app.wxss 中的样式、组件所在页面的的样式对自定义组件无效（除非更改组件样式隔离选项）
组件可以指定它所在节点的默认样式，使用 :host 选择器
styleIsolation addGlobalClass
在同一个节点上使用普通样式类和外部样式类时，两个类的优先级是未定义的，因此最好避免这种情况
引用页面或父组件的样式
数据监听器
纯数据字段
抽象节点 componentGenerics
自定义组件扩展 修改自定义组件定义段的能力 Behavior computed watched
