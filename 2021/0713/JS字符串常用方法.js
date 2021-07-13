// 思路
// 1.可以将字符串的方法按增、删、改、查分别叙述

// 增
// concat 用于将一个或多个字符串拼接位新的字符串
const s1='hello'
let r1=s1.concat('world')
console.log(r1); //helloworld

// 删
// slice substring 返回原字符串的子字符串   接收两个参数，从第几个开始到第几个结束截取字符串 [start, end)
// substr 是从第几个开始 截取几个
const s2 = 'hello world'
const r2 = s2.slice(3)
const r3 = s2.substr(3, 7)
const r4 = s2.substring(3, 7)
const r5 = s2.slice(3, 7)
console.log(r2) //lo world
console.log(r3) //lo worl
console.log(r4) //lo w
console.log(r5) //lo w

// 改
// trim trimLeft trimRight 去掉字符串前后、前、后的空格

// repeat 将字符串复制几次
const s6 = 'nm'
const r6 = s6.repeat(2)
console.log(r6); //nmnm

// padEnd padStart  在指定位置补全字符串
const s7 = 'foo'
const r7 =s7.padEnd(6, '.')
console.log(r7); //foo...

// toLowerCase toUpperCase 大小写转化

// 查
// charAt 返回指定索引未知的字符
const s8 = 'abcdefg'
const r8 = s8.charAt(4)
console.log(r8); //e

// indexOf 从字符串开始位置去找指定元素 找到则返回其位置 没找到返回-1
const s9 = 'abcdefg'
const r9 = s9.indexOf('de')
console.log(r9); //3

// startWith 是否以xx开头 返回布尔值
const s10 = 'abcdefg'
const r10 = s10.startsWith('abc')
console.log(r10);  //true

// includes 是否包含xx 返回布尔值
const s11 = 'abcdefg'
const r11 = s11.includes('g')
console.log(r11);  //true

// 转换方法
// split 把字符串按照指定的分割符 拆成数组的每一项
const s12 = 'ab+cd+ef'
const r12 = s12.split('+')
console.log(r12);  //["ab", "cd", "ef"]

// 模板匹配方法
// match 接收一个参数 可以是一个正则表达式字符串，也可以是一个RegExp对象，返回数组

// search 接收一个参数 可以是一个正则表达式字符串，也可以是一个RegExp对象 找到则返回索引 否则返回-1

// replace 接收两个参数 第一个参数为匹配的内容 第二个参数为替换后的内容
const s13 = 'abcdefg'
const r13 = s13.replace('ab','11')
console.log(r13); //11cdefg