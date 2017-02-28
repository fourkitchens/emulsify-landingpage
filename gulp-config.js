/* globals module */

(function () {
  'use strict'

  const workingDir = '.'
  const paths = {
    js: workingDir + '/js',
    sass: workingDir + '/sass',
    twig: workingDir + '/twig',
    img: workingDir + '/img',
    dist: 'dist',
    dist_fonts: workingDir + '/dist/fonts',
    dist_js: workingDir + '/dist/js',
    dist_css: workingDir + '/dist/css',
    dist_html: workingDir + '/dist/',
    dist_img: workingDir + '/dist/img',
    morgue: 'morgue',
    dist_morgue: workingDir + '/dist'
  }

  module.exports = {
    server: './dist',
    workingDir: workingDir,
    paths: paths,
    sassOptions: {
      outputStyle: 'expanded',
      eyeglass: {
        enableImportOnce: false
      }
    }
  }
})()

