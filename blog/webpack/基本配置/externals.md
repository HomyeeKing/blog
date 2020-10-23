# externals 外部扩展

**作用：** 如果你在开发一个库，里面用到了其他库，而你不希望在打包的时候打包这个库，那么你可以把它配置成外部依赖，默认用户安装，将控制权交给用户

**sample:**

```js
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'webpack-numbers.js'
	},
	externals: {
		lodash: {
			commonjs: 'lodash',
			commonjs2: 'lodash',
			amd: 'lodash',
			root: '_' // 全局访问方式，也就是通过script标签引用的方式
		}
	}
};
```

上面就意味着你的 library 依赖`lodash`这个库，用户环境中必须存在`lodash`这个库且可用,且用户可以通过 es6 import\commonjs\amd 在这三种不同的模块系统中均可通过`lodash`来引用，全局变量中通过`_`来访问

[如何创建自己的 library](https://webpack.docschina.org/guides/author-libraries/)
