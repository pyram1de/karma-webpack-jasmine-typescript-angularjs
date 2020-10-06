module.exports = function (config) {
    config.set({
        mime: { 'text/x-typescript': ['ts','tsx'] },
        basePath: '',
        frameworks: ['jasmine'],
        files: ['src/**/*.spec.ts'],
        preprocessors: {
            'spec/main.spec.ts': ['webpack', 'sourcemap'],
        },
        webpack: {
            resolve: {
                extensions: ['.ts', '.js']
            },
            module: {
                rules: [{
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                }]
            },
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        //concurrency: Infinity
    })
}