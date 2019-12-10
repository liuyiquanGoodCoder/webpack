const path  = require('path')
const ExtractText = require('extract-text-webpack-plugin')

module.exports = {
    //Javascript entry
    entry:'./main.js',
    output:{
        //
        filename:'chunk.js',
        path:path.resolve(__dirname,'./dist')
    },
    // devServer: {
    //     contentBase: path.join(__dirname, 'dist'),
    //     compress: true,
    //     port: 9000
    // },
    module:{
        rules:[
            {
                //use RegExr to transfer css
                test:/\.css$/,
                // use:ExtractText.extract({
                //     use:['css-loader']
                // })
                use:['style-loader','css-loader']
                // use:[
                //     'style-loader',
                //     {
                //         loader:'css-loader',
                //         options:{
            
                //         }
                //     }
                // ]
            }
        ]
    },
    plugins:[
        new ExtractText({
            filename:`[name].css`
        }),
    ]

};