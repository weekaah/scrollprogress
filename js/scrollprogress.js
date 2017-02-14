(function (root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.Scroller = factory();
  }
}(this, function() {

  var Scroller = function(selector) {
    this.container = document.querySelector(selector);
    this.progress;

    this.init();
  };

  Scroller.prototype = {
    init: function() {
      build.call(this);
    }
  };

  function build() {
    this.container.classList.add('sp-container');

    this.progress = document.createElement('div');
    this.progress.classList.add('sp-progress');
    this.container.insertBefore(this.progress, this.container.firstChild);
  }

  window.scrollprogress = function(selector) {
    return new Scroller(selector);
  };

}));
