"use strict";

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const I18nPlugin = require('i18n-webpack-plugin');

// Will be moved to separate json file in the next iteration
const locale = {
	en: {
			animals: {
					hedgehog: 'hedgehog is a bunny',
					walrus: 'walrus'
			}
	},
	pl: {
			animals: {
					hedgehog: 'jeż',
					walrus: 'mors'
			}
	}
}

module.exports = {
	entry: './src/js/app.js',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: "app.js"
	},
	target: 'node',
	module: {
		rules: [

		// Babel	
			{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
			}
		},
		// Eslint
		{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'eslint-loader',
				options: {
					fix: true,
				  }, 
			},
		},
		// Css
		{
			test: /\.scss$/,
			use: [ 'style-loader', 
			MiniCssExtractPlugin.loader, 
			{
			  loader: 'css-loader',
			  options: {
				url: false,
			  },
			},
			'postcss-loader',
			'sass-loader']
		  }
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebPackPlugin({
			template: __dirname + '/src/index.html'
	}),
		new MiniCssExtractPlugin({
		  filename: 'styles.css',
		}),
		new I18nPlugin(locale, {
			nested: true //allows for nesting locale keys
		})
	  ]
};

