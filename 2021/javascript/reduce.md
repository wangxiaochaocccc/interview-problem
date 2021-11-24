## 数组求和

```
const arr = [1,2,3]
const res = arr.reduce((sum,cur)=> sum+cur,0)

```
## 计数

```
const arr = [1,2,3,2,2]

const count = arr.reduce((count,cur)=>{
    return cur === 2 ? count++ : count
},0)

```
## 输出字符串

```
const arr = [
    {name: '张三', age: 20},
    {name: '李四', age: 22},
    {name: '王二麻子', age: 30}
]

const str = arr.reduce((s,cur)=>{
    return `${s}${cur.name}-${cur.age}\n`
},'')

```