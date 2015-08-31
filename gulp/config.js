var dest = './dist';
var src = './src';

var samples_dest = './samples';
var samples_src = './samples_src';

module.exports = {
  dest: dest,

  js: {
    dest: dest
  },

  webpack: {
    entry: src + '/index.js',
    output: {
      filename: 'ng-colorpicker.js'
    },
    resolve: {
      extensions: ['', '.js']
    },
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  },

  samples: {

    js: {
      dest: samples_dest + '/js'
    },

    webpack: {
      entry: samples_src + '/js/index.js',
      output: {
        filename: 'samples.js'
      },
      resolve: {
        extensions: ['', '.js']
      },
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel'
        }
      ]
    },

    html: {
      dest: samples_dest
    },

    jade: {
      src: samples_src + '/*.jade'
    },

    css: {
      dest: samples_dest + '/css'
    },

    cssnext: {
      src: samples_src + '/css/style.css',
      compress: true
    }

  }
};
