const {override, fixBabelImports, addLessLoader} = require('customize-cra');

module.exports = override(
	//針對antd 按需打包, 根據import 打包, 使用babel-plugin-import
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: true,  //自動打包相關component
	}),
	addLessLoader({
		              lessOptions: {
			              javascriptEnabled: true,
			              modifyVars: { '@primary-color': '#0000CC' },
		              },
	              }),

);