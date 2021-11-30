## margin 纵向重叠问题
```
p {
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 20px;
}

<p>AAAA</p>
<p></p>
<p></p>
<p>BBB</p>

请问AAAA和BBB之间的距离是多少
```


答案：15px

1.相邻元素的margin-top和margin-bottom会发生重叠
2.空内容的p也会重叠
