const path  = require('path')

module.exports = {
    //Javascript entry
    entry:'./main.js',
    output:{
        //
        filename:'chunk.js',
        path:path.resolve(__dirname,'./dist')
    },
    module:{
        rules:[
            {
                //use RegExr to transfer css
                test:/\.css$/,
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
    }
};