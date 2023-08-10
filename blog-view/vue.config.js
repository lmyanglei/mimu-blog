module.exports = {
	publicPath:'/blog/',
	configureWebpack: {
		resolve: {
			alias: {
				'assets': '@/assets',
				'common': '@/common',
				'components': '@/components',
				'api': '@/api',
				'views': '@/views',
				'plugins': '@/plugins'
			}
		}
	}
}