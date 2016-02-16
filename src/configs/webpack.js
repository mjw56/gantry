const config = {
  webpack: {
    webpack: 'webpack',
    webpackDevServer: 'webpack-dev-server'
  },
  angular: {
    dependencies: {
      babel: {

      }, 
      typescript: {
        
      }
    }
  },
  angular2: {
    dependencies: {
      babel: {

      },
      typescript: {

      }
    }
  },
  react: {
    dependencies: {
      babel: {
        babelCore: 'babel-core',
        babelLoader: 'babel-loader',
        babelPluginReactTransform: 'babel-plugin-react-transform',
        babelPresetEs2015: 'babel-preset-es2015',
        babelPresetReact: 'babel-preset-es2015',
        babelPresetReactHmre: 'babel-preset-react-hmre'
      },
      typescript: {
        typescript: 'typescript',
        tsLoader: 'ts-loader'
      }
    },
    config: {
      babel: {
        resolve: {
          extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
        },
        loaders: [
          {
            test: /\.js$/,
            loaders: [ 'babel' ],
            exclude: /node_modules/,
            include: __dirname
          }
        ]
      },
      typescript: {
        resolve: {
          extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
        },
        loaders: [
          { 
            test: /\.tsx?$/, 
            loader: 'ts-loader',
            exclude: /node_modules/,
            include: __dirname 
          }
        ]
      }
    }
  }
}

export default config;