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
      updateProgress.call(this);
      initEvents.call(this);
    }
  };

  function build() {
    this.container.classList.add('sp-container');

    this.progress = document.createElement('div');
    this.progress.classList.add('sp-progress');
    this.container.insertBefore(this.progress, this.container.firstChild);
  }

  function updateProgress() {
    var width = Math.round((this.container.scrollTop / (this.container.scrollHeight - window.innerHeight)) * 100);

    this.progress.style.width = width + '%';
  }

  function initEvents() {
    var self = this;
    window.addEventListener('scroll', updateProgress.bind(this));
  }

  window.scrollprogress = function(selector) {
    return new Scroller(selector);
  };

}));
