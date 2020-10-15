module.exports = {
   
    outputDir: "dist",
    
    configureWebpack: {
        output: {
          filename: '[name].js',
          chunkFilename: '[name].js',
        }
    },

    chainWebpack: config => {
        config.externals(
            [   'vue',
                'vue-router', 
                'vuetify',
                '@mdi/font/css/materialdesignicons.css',
                'saas'
            ]
        );
    },

    devServer: {
        port: 8871
    }

}