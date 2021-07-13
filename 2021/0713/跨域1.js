// 跨域解决方式

// jsonp 
// 通过动态创建script标签实现 只能用于get方法  JSON Padding 填充一个页面到HTML中，存在安全隐患

// document.domain 仅限主域相同 子域不同的跨域场景
// 两个页面都通过JS强制设置document.domain为基础主域

// location.hash
// a页面想和b页面相互通信，通过页面c来实现。三个页面，利用iframe的location.hash来传值，相同域之间直接通过JS访问来通信

// window.name 
// name值在不同页面加载后依旧存在，并且可以支持非常长的name值
// 通过iframe的src属性由外域转向本地域，跨域数据即通过从iframe的window.name从外域传递到本地域。巧妙地避开了浏览器的跨域访问限制
