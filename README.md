JavaScript SystemJS Demo
========================

SystemJS在0.x升级到2.x时，有了破坏性变化：https://guybedford.com/systemjs-2.0

这个Demo是为新版本而设。

一些比较重要的改变：

1. `SystemJS` -> `System`
2. amd的支持放到了`extras/`下面
3. 不再支持commonjs

文档写得奇难懂无比，现在还没搞懂es module怎么引入。

```
npm install
npm run demo
```

Resources
---------

- <https://github.com/systemjs/systemjs/blob/master/docs/getting-started.md>
