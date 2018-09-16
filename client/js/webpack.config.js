"use strict";

const NODE_ENV = process.env.NODE_ENV || "development";
const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: "./main",
	output: {
		path:__dirname,
		filename: "build.js",
		library: "float"
	},

	watch: NODE_ENV == "development",

	watchOptions: {
		aggregateTimeout: 100
	},

	mode: NODE_ENV == "development" ? "development" : "production",

	devtool: NODE_ENV == "development" ? 
		"cheap-inline-module-source-map" : false,

	plugins: [
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV)
		})
	],

	resolveLoader: {
		moduleExtensions: ["-loader"]
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel",
					options: {
						presets: ["@babel/preset-env"],
						plugins: ["@babel/plugin-transform-runtime"]
					}
				}
			}
		]
	}

};


if (NODE_ENV == "production") {
	module.exports.optimization = {
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					compress: {
						drop_console: false,
						unsafe_proto: true
					}
				}
			})
		]
	}
}
