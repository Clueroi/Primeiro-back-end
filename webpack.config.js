const NodemonPlugin = require('nodemon-webpack-plugin')
const path = require('path')
const NodeExternals = require('webpack-node-externals')

module.exports = {
    entry:'./src/index.js',
    target:'node',
    mode:'development',
    output:{
        filename:'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve:{
        extensions:['.js']
    },
    plugins:[
        new NodemonPlugin()
    ],
    externals:[
        NodeExternals()
    ]
}