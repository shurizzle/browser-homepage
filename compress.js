const mkdirp = require('mkdirp').sync;
const minify = require('@node-minify/core');
const htmlMinifier = require('@node-minify/html-minifier');

mkdirp('build');
 
minify({
  compressor: htmlMinifier,
  input: 'index.html',
  output: 'build/index.html',
  callback: function(err, min) {
    if (err) {
      throw err;
    }
  }
});
