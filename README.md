JavaScript SystemJS Demo
========================

SystemJS跟RequireJS有点像，可以在前端load使用不同模块类型(`commonjs`, `AMD`等)的js文件。

不过对ES6的支持有问题（文档一上来就给了[一个ES6模块的例子](https://github.com/systemjs/systemjs/blob/master/docs/getting-started.md)，结果死活跑不起来），用户也很少，基本上不用考虑。

在SystemJS之上，还有一个jspm（作者是同一个），提供了更强大的功能（比如ES6代码转换等等），不过跟webpack比起来，基本上看不出有什么优势，生态也很弱。

这个例子也是我费了九牛二虎之力才弄出来的，还是用webpack吧。

```
npm install
npm run demo
```

![demo](./images/demo.jpg)

Resources
---------

- <https://github.com/systemjs/systemjs/blob/master/docs/getting-started.md>