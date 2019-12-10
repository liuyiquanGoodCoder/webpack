const path  = require('path')

module.exports = {
    //Javascript entry
    entry:'./main.js',
    output:{
        //
        filename:'chunk.js',
        path:path.resolve(__dirname,'./dist')
    }
};