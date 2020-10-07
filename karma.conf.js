module.exports = function (config) {
    config.set({
        mime: { 'text/x-typescript': ['ts','tsx'] },
        basePath: '',
        frameworks: ['jasmine'],
        files: ['src/main.test.ts','src/**/*.spec.ts'],
        preprocessors: {
            'src/**/*.ts': ['webpack', 'sourcemap'],
        },
        webpack: require('./webpack-test.config'),
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: [
            'Chrome',
            //'PhantomJS',
        ],
        singleRun: false,
        karmaTypescriptConfig: {
            bundlerOptions: {
                transforms: [
                    require('karma-typescript-es6-transform')(),
                ]
            }
        }
        //concurrency: Infinity
    })
}