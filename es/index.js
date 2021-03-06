var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  flex: 1;\n  display: flex;\n'], ['\n  flex: 1;\n  display: flex;\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  flex: 1;\n  display: flex;\n\n  > iframe {\n    flex: 1;\n    width: 100%;\n    height: 100%;\n    min-height: ', ' !important;\n    display: flex;\n    border: 0px;\n  }\n'], ['\n  flex: 1;\n  display: flex;\n\n  > iframe {\n    flex: 1;\n    width: 100%;\n    height: 100%;\n    min-height: ', ' !important;\n    display: flex;\n    border: 0px;\n  }\n']);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React, { Component } from 'react';
import Script from 'react-load-script';
import styled from 'styled-components';

var Wrapper = styled.div(_templateObject);

var Editor = styled.div(_templateObject2, function (props) {
  return props.minHeight || '500px';
});

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _temp, _this, _ret;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.unlayerReady = function () {
      var options = _this.props.options || {};

      if (_this.props.projectId) {
        options.projectId = _this.props.projectId;
      }

      if (_this.props.tools) {
        options.tools = _this.props.tools;
      }

      if (_this.props.locale) {
        options.locale = _this.props.locale;
      }

      unlayer.init(_extends({}, options, {
        id: 'editor',
        displayMode: 'email'
      }));

      // All properties starting with on[Name] are registered as event listeners.
      for (var _iterator = Object.entries(_this.props), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref2 = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref2 = _i.value;
        }

        var _ref = _ref2;
        var key = _ref[0];
        var value = _ref[1];

        if (/^on/.test(key) && key != 'onLoad') {
          _this.addEventListener(key, value);
        }
      }

      var onLoad = _this.props.onLoad;

      onLoad && onLoad();
    }, _this.registerCallback = function (type, callback) {
      unlayer.registerCallback(type, callback);
    }, _this.addEventListener = function (type, callback) {
      unlayer.addEventListener(type, callback);
    }, _this.loadDesign = function (design) {
      unlayer.loadDesign(design);
    }, _this.saveDesign = function (callback) {
      unlayer.saveDesign(callback);
    }, _this.exportHtml = function (callback) {
      unlayer.exportHtml(callback);
    }, _this.setMergeTags = function (mergeTags) {
      unlayer.setMergeTags(mergeTags);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _default.prototype.render = function render() {
    return React.createElement(
      Wrapper,
      null,
      React.createElement(Script, {
        url: 'https://editor.unlayer.com/embed.js',
        onLoad: this.unlayerReady
      }),
      React.createElement(Editor, {
        id: 'editor',
        style: this.props.style,
        minHeight: this.props.minHeight
      })
    );
  };

  return _default;
}(Component);

export { _default as default };