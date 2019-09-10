const webpackConfig = require('./webpack.config.babel.js')

module.exports = config => {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'jasmine-matchers'],
        files: [
          'src/js/modules/*.js',
          'src/js/specs/*spec.js'
        ],
        webpack: webpackConfig,
        exclude: [
        ],
        preprocessors: {
          'src/*.js': ['webpack', 'sourcemap'],
          'spec/*spec.js': ['webpack', 'sourcemap']
        },
        plugins: [
          'karma-jquery',
          'karma-webpack',
          'karma-jasmine',
          'karma-jasmine-matchers',
          'karma-chrome-launcher',
          'karma-jasmine-html-reporter',
          'karma-sourcemap-loader'
        ],
        reporters: ['dots', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity
      })
}