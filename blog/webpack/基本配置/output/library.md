# library

有以下几种方式暴露 library：

- 变量：作为一个全局变量，通过 script 标签来访问（libraryTarget:'var'）。
- this：通过 this 对象访问（libraryTarget:'this'）。
- window：在浏览器中通过 window 对象访问（libraryTarget:'window'）。
- UMD：在 AMD 或 CommonJS require 之后可访问（libraryTarget:'umd'）
