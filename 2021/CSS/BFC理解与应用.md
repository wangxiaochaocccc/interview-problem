## 什么是BFC

1.Block Format Context,块级格式化上下文
2.形成一块独立的渲染区域，其内部元素的渲染不会影响到外部的元素
### 行程BFC条件

1. float不是none
2. position是absolute或fixed
3. overflow不是visible
4. display 是flex inline-block
## BFC的应用

1. 清楚浮动