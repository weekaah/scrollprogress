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

  var Scroller = function(selector, settings) {
    this.container = document.querySelector(selector);
    this.progress;

    this.defaults = {
      height: '4px',
      backgroundColor: '#6deabb',
      glow: true,
      glowLevel: '4px',
      transparency: false,
      transparencyLevel: .75
    };

    this.options = (settings && typeof settings === 'object') ? extendDefaults(this.defaults, settings) : this.defaults;

    this.init();
  };

  Scroller.prototype = {
    init: function() {
      build.call(this);
      style.call(this);
      updateProgress.call(this);
      initEvents.call(this);
    }
  };

  function build() {
    this.container.classList.add('sp-container');
    this.container.style.position = 'relative';

    this.progress = document.createElement('div');
    this.progress.classList.add('sp-progress');
    this.progress.style.position = 'fixed';
    this.progress.style.zIndex = '999999';
    this.progress.style.top = '0';
    this.container.insertBefore(this.progress, this.container.firstChild);
  }

  function style() {
    this.progress.style.height = this.options.height;
    this.progress.style.backgroundColor = this.options.backgroundColor;
    if (this.options.glow) this.progress.style.boxShadow = '0 0 ' + this.options.glowLevel + ' ' + this.options.backgroundColor;
    if (this .options.transparency) this.progress.style.opacity = this.options.transparencyLevel;
  }

  function updateProgress() {
    var width = Math.round((window.pageYOffset / (this.container.scrollHeight - window.innerHeight)) * 100);

    this.progress.style.width = width + '%';
  }

  function initEvents() {
    window.addEventListener('scroll', updateProgress.bind(this));
  }

  function extendDefaults(source, properties) {
    var property;
    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }
    return source;
  }

  window.scrollprogress = function(selector, settings) {
    return new Scroller(selector, settings);
  };

}));
