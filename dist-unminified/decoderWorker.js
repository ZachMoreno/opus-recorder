// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = typeof Module !== 'undefined' ? Module : {};

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["DecoderWorker"] = factory();
	else
		root["DecoderWorker"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/decoderWorker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\r\n} catch (e) {\r\n\t// This works if the window reference is available\r\n\tif (typeof window === \"object\") g = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0RlY29kZXJXb3JrZXIvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzP2NkMDAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsIGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaCAoZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/webpack/buildin/global.js\n");

/***/ }),

/***/ "./src/decoderWorker.js":
/*!******************************!*\
  !*** ./src/decoderWorker.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar decoder;\nvar mainReadyResolve;\nvar mainReady = new Promise(function(resolve){ mainReadyResolve = resolve; });\n\nglobal['onmessage'] = function( e ){\n  mainReady.then(function(){\n    switch( e['data']['command'] ){\n\n      case 'decode':\n        if (decoder){\n          decoder.decode( e['data']['pages'] );\n        }\n        break;\n\n      case 'done':\n        if (decoder) {\n          decoder.sendLastBuffer();\n          global['close']();\n        }\n        break;\n\n      case 'init':\n        decoder = new OggOpusDecoder( e['data'], Module );\n        break;\n\n      default:\n        // Ignore any unknown commands and continue recieving commands\n    }\n  });\n};\n\nvar OggOpusDecoder = function( config, Module ){\n\n  if ( !Module ) {\n    throw new Error('Module with exports required to initialize a decoder instance');\n  }\n\n  this.mainReady = mainReady; // Expose for unit testing\n  this.config = Object.assign({ \n    bufferLength: 4096, // Define size of outgoing buffer\n    decoderSampleRate: 48000, // Desired decoder sample rate.\n    outputBufferSampleRate: 48000, // Desired output sample rate. Audio will be resampled\n    resampleQuality: 3, // Value between 0 and 10 inclusive. 10 being highest quality.\n  }, config );\n\n  this._opus_decoder_create = Module._opus_decoder_create;\n  this._opus_decoder_destroy = Module._opus_decoder_destroy;\n  this._speex_resampler_process_interleaved_float = Module._speex_resampler_process_interleaved_float;\n  this._speex_resampler_init = Module._speex_resampler_init;\n  this._speex_resampler_destroy = Module._speex_resampler_destroy;\n  this._opus_decode_float = Module._opus_decode_float;\n  this._free = Module._free;\n  this._malloc = Module._malloc;\n  this.HEAPU8 = Module.HEAPU8;\n  this.HEAP32 = Module.HEAP32;\n  this.HEAPF32 = Module.HEAPF32;\n\n  this.outputBuffers = [];\n};\n\n\nOggOpusDecoder.prototype.decode = function( typedArray ) {\n  var dataView = new DataView( typedArray.buffer );\n  this.getPageBoundaries( dataView ).map( function( pageStart ) {\n    var headerType = dataView.getUint8( pageStart + 5, true );\n    var pageIndex = dataView.getUint32( pageStart + 18, true );\n\n    // Beginning of stream\n    if ( headerType & 2 ) {\n      this.numberOfChannels = dataView.getUint8( pageStart + 37, true );\n      this.init();\n    }\n\n    // Decode page\n    if ( pageIndex > 1 ) {\n      var segmentTableLength = dataView.getUint8( pageStart + 26, true );\n      var segmentTableIndex = pageStart + 27 + segmentTableLength;\n\n      for ( var i = 0; i < segmentTableLength; i++ ) {\n        var packetLength = dataView.getUint8( pageStart + 27 + i, true );\n        this.decoderBuffer.set( typedArray.subarray( segmentTableIndex, segmentTableIndex += packetLength ), this.decoderBufferIndex );\n        this.decoderBufferIndex += packetLength;\n\n        if ( packetLength < 255 ) {\n          var outputSampleLength = this._opus_decode_float( this.decoder, this.decoderBufferPointer, this.decoderBufferIndex, this.decoderOutputPointer, this.decoderOutputMaxLength, 0);\n          var resampledLength = Math.ceil( outputSampleLength * this.config.outputBufferSampleRate / this.config.decoderSampleRate );\n          this.HEAP32[ this.decoderOutputLengthPointer >> 2 ] = outputSampleLength;\n          this.HEAP32[ this.resampleOutputLengthPointer >> 2 ] = resampledLength;\n          this._speex_resampler_process_interleaved_float( this.resampler, this.decoderOutputPointer, this.decoderOutputLengthPointer, this.resampleOutputBufferPointer, this.resampleOutputLengthPointer );\n          this.sendToOutputBuffers( this.HEAPF32.subarray( this.resampleOutputBufferPointer >> 2, (this.resampleOutputBufferPointer >> 2) + resampledLength * this.numberOfChannels ) );\n          this.decoderBufferIndex = 0;\n        }\n      }\n\n      // End of stream\n      if ( headerType & 4 ) {\n        this.sendLastBuffer();\n      }\n    }\n  }, this );\n};\n\nOggOpusDecoder.prototype.getPageBoundaries = function( dataView ){\n  var pageBoundaries = [];\n\n  for ( var i = 0; i < dataView.byteLength - 32; i++ ) {\n    if ( dataView.getUint32( i, true ) == 1399285583 ) {\n      pageBoundaries.push( i );\n    }\n  }\n\n  return pageBoundaries;\n};\n\nOggOpusDecoder.prototype.init = function(){\n  this.resetOutputBuffers();\n  this.initCodec();\n  this.initResampler();\n};\n\nOggOpusDecoder.prototype.initCodec = function() {\n\n  if ( this.decoder ) {\n    this._opus_decoder_destroy( this.decoder );\n    this._free( this.decoderBufferPointer );\n    this._free( this.decoderOutputLengthPointer );\n    this._free( this.decoderOutputPointer );\n  }\n\n  var errReference = this._malloc( 4 );\n  this.decoder = this._opus_decoder_create( this.config.decoderSampleRate, this.numberOfChannels, errReference );\n  this._free( errReference );\n\n  this.decoderBufferMaxLength = 4000;\n  this.decoderBufferPointer = this._malloc( this.decoderBufferMaxLength );\n  this.decoderBuffer = this.HEAPU8.subarray( this.decoderBufferPointer, this.decoderBufferPointer + this.decoderBufferMaxLength );\n  this.decoderBufferIndex = 0;\n\n  this.decoderOutputLengthPointer = this._malloc( 4 );\n  this.decoderOutputMaxLength = this.config.decoderSampleRate * this.numberOfChannels * 120 / 1000; // Max 120ms frame size\n  this.decoderOutputPointer = this._malloc( this.decoderOutputMaxLength * 4 ); // 4 bytes per sample\n};\n\nOggOpusDecoder.prototype.initResampler = function() {\n\n  if ( this.resampler ) {\n    this._speex_resampler_destroy( this.resampler );\n    this._free( this.resampleOutputLengthPointer );\n    this._free( this.resampleOutputBufferPointer );\n  }\n\n  var errLocation = this._malloc( 4 );\n  this.resampler = this._speex_resampler_init( this.numberOfChannels, this.config.decoderSampleRate, this.config.outputBufferSampleRate, this.config.resampleQuality, errLocation );\n  this._free( errLocation );\n\n  this.resampleOutputLengthPointer = this._malloc( 4 );\n  this.resampleOutputMaxLength = Math.ceil( this.decoderOutputMaxLength * this.config.outputBufferSampleRate / this.config.decoderSampleRate );\n  this.resampleOutputBufferPointer = this._malloc( this.resampleOutputMaxLength * 4 ); // 4 bytes per sample\n};\n\nOggOpusDecoder.prototype.resetOutputBuffers = function(){\n  this.outputBuffers = [];\n  this.outputBufferArrayBuffers = [];\n  this.outputBufferIndex = 0;\n\n  for ( var i = 0; i < this.numberOfChannels; i++ ) {\n    this.outputBuffers.push( new Float32Array( this.config.bufferLength ) );\n    this.outputBufferArrayBuffers.push( this.outputBuffers[i].buffer );\n  }\n};\n\nOggOpusDecoder.prototype.sendLastBuffer = function(){\n  this.sendToOutputBuffers( new Float32Array( ( this.config.bufferLength - this.outputBufferIndex ) * this.numberOfChannels ) );\n  global['postMessage'](null);\n};\n\nOggOpusDecoder.prototype.sendToOutputBuffers = function( mergedBuffers ){\n  var dataIndex = 0;\n  var mergedBufferLength = mergedBuffers.length / this.numberOfChannels;\n\n  while ( dataIndex < mergedBufferLength ) {\n    var amountToCopy = Math.min( mergedBufferLength - dataIndex, this.config.bufferLength - this.outputBufferIndex );\n\n    if (this.numberOfChannels === 1) {\n      this.outputBuffers[0].set( mergedBuffers.subarray( dataIndex, dataIndex + amountToCopy ), this.outputBufferIndex );\n    }\n\n    // Deinterleave\n    else {\n      for ( var i = 0; i < amountToCopy; i++ ) {\n        this.outputBuffers.forEach( function( buffer, channelIndex ) {\n          buffer[ this.outputBufferIndex + i ] = mergedBuffers[ ( dataIndex + i ) * this.numberOfChannels + channelIndex ];\n        }, this);\n      }\n    }\n\n    dataIndex += amountToCopy;\n    this.outputBufferIndex += amountToCopy;\n\n    if ( this.outputBufferIndex == this.config.bufferLength ) {\n      global['postMessage']( this.outputBuffers, this.outputBufferArrayBuffers );\n      this.resetOutputBuffers();\n    }\n  }\n};\n\n\nif (!Module) {\n  Module = {};\n}\n\nModule['mainReady'] = mainReady;\nModule['OggOpusDecoder'] = OggOpusDecoder;\nModule['onRuntimeInitialized'] = mainReadyResolve;\n\nmodule.exports = Module;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGVjb2Rlcldvcmtlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0RlY29kZXJXb3JrZXIvLi9zcmMvZGVjb2Rlcldvcmtlci5qcz8wYzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZGVjb2RlcjtcbnZhciBtYWluUmVhZHlSZXNvbHZlO1xudmFyIG1haW5SZWFkeSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpeyBtYWluUmVhZHlSZXNvbHZlID0gcmVzb2x2ZTsgfSk7XG5cbmdsb2JhbFsnb25tZXNzYWdlJ10gPSBmdW5jdGlvbiggZSApe1xuICBtYWluUmVhZHkudGhlbihmdW5jdGlvbigpe1xuICAgIHN3aXRjaCggZVsnZGF0YSddWydjb21tYW5kJ10gKXtcblxuICAgICAgY2FzZSAnZGVjb2RlJzpcbiAgICAgICAgaWYgKGRlY29kZXIpe1xuICAgICAgICAgIGRlY29kZXIuZGVjb2RlKCBlWydkYXRhJ11bJ3BhZ2VzJ10gKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZG9uZSc6XG4gICAgICAgIGlmIChkZWNvZGVyKSB7XG4gICAgICAgICAgZGVjb2Rlci5zZW5kTGFzdEJ1ZmZlcigpO1xuICAgICAgICAgIGdsb2JhbFsnY2xvc2UnXSgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdpbml0JzpcbiAgICAgICAgZGVjb2RlciA9IG5ldyBPZ2dPcHVzRGVjb2RlciggZVsnZGF0YSddLCBNb2R1bGUgKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIElnbm9yZSBhbnkgdW5rbm93biBjb21tYW5kcyBhbmQgY29udGludWUgcmVjaWV2aW5nIGNvbW1hbmRzXG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBPZ2dPcHVzRGVjb2RlciA9IGZ1bmN0aW9uKCBjb25maWcsIE1vZHVsZSApe1xuXG4gIGlmICggIU1vZHVsZSApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01vZHVsZSB3aXRoIGV4cG9ydHMgcmVxdWlyZWQgdG8gaW5pdGlhbGl6ZSBhIGRlY29kZXIgaW5zdGFuY2UnKTtcbiAgfVxuXG4gIHRoaXMubWFpblJlYWR5ID0gbWFpblJlYWR5OyAvLyBFeHBvc2UgZm9yIHVuaXQgdGVzdGluZ1xuICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oeyBcbiAgICBidWZmZXJMZW5ndGg6IDQwOTYsIC8vIERlZmluZSBzaXplIG9mIG91dGdvaW5nIGJ1ZmZlclxuICAgIGRlY29kZXJTYW1wbGVSYXRlOiA0ODAwMCwgLy8gRGVzaXJlZCBkZWNvZGVyIHNhbXBsZSByYXRlLlxuICAgIG91dHB1dEJ1ZmZlclNhbXBsZVJhdGU6IDQ4MDAwLCAvLyBEZXNpcmVkIG91dHB1dCBzYW1wbGUgcmF0ZS4gQXVkaW8gd2lsbCBiZSByZXNhbXBsZWRcbiAgICByZXNhbXBsZVF1YWxpdHk6IDMsIC8vIFZhbHVlIGJldHdlZW4gMCBhbmQgMTAgaW5jbHVzaXZlLiAxMCBiZWluZyBoaWdoZXN0IHF1YWxpdHkuXG4gIH0sIGNvbmZpZyApO1xuXG4gIHRoaXMuX29wdXNfZGVjb2Rlcl9jcmVhdGUgPSBNb2R1bGUuX29wdXNfZGVjb2Rlcl9jcmVhdGU7XG4gIHRoaXMuX29wdXNfZGVjb2Rlcl9kZXN0cm95ID0gTW9kdWxlLl9vcHVzX2RlY29kZXJfZGVzdHJveTtcbiAgdGhpcy5fc3BlZXhfcmVzYW1wbGVyX3Byb2Nlc3NfaW50ZXJsZWF2ZWRfZmxvYXQgPSBNb2R1bGUuX3NwZWV4X3Jlc2FtcGxlcl9wcm9jZXNzX2ludGVybGVhdmVkX2Zsb2F0O1xuICB0aGlzLl9zcGVleF9yZXNhbXBsZXJfaW5pdCA9IE1vZHVsZS5fc3BlZXhfcmVzYW1wbGVyX2luaXQ7XG4gIHRoaXMuX3NwZWV4X3Jlc2FtcGxlcl9kZXN0cm95ID0gTW9kdWxlLl9zcGVleF9yZXNhbXBsZXJfZGVzdHJveTtcbiAgdGhpcy5fb3B1c19kZWNvZGVfZmxvYXQgPSBNb2R1bGUuX29wdXNfZGVjb2RlX2Zsb2F0O1xuICB0aGlzLl9mcmVlID0gTW9kdWxlLl9mcmVlO1xuICB0aGlzLl9tYWxsb2MgPSBNb2R1bGUuX21hbGxvYztcbiAgdGhpcy5IRUFQVTggPSBNb2R1bGUuSEVBUFU4O1xuICB0aGlzLkhFQVAzMiA9IE1vZHVsZS5IRUFQMzI7XG4gIHRoaXMuSEVBUEYzMiA9IE1vZHVsZS5IRUFQRjMyO1xuXG4gIHRoaXMub3V0cHV0QnVmZmVycyA9IFtdO1xufTtcblxuXG5PZ2dPcHVzRGVjb2Rlci5wcm90b3R5cGUuZGVjb2RlID0gZnVuY3Rpb24oIHR5cGVkQXJyYXkgKSB7XG4gIHZhciBkYXRhVmlldyA9IG5ldyBEYXRhVmlldyggdHlwZWRBcnJheS5idWZmZXIgKTtcbiAgdGhpcy5nZXRQYWdlQm91bmRhcmllcyggZGF0YVZpZXcgKS5tYXAoIGZ1bmN0aW9uKCBwYWdlU3RhcnQgKSB7XG4gICAgdmFyIGhlYWRlclR5cGUgPSBkYXRhVmlldy5nZXRVaW50OCggcGFnZVN0YXJ0ICsgNSwgdHJ1ZSApO1xuICAgIHZhciBwYWdlSW5kZXggPSBkYXRhVmlldy5nZXRVaW50MzIoIHBhZ2VTdGFydCArIDE4LCB0cnVlICk7XG5cbiAgICAvLyBCZWdpbm5pbmcgb2Ygc3RyZWFtXG4gICAgaWYgKCBoZWFkZXJUeXBlICYgMiApIHtcbiAgICAgIHRoaXMubnVtYmVyT2ZDaGFubmVscyA9IGRhdGFWaWV3LmdldFVpbnQ4KCBwYWdlU3RhcnQgKyAzNywgdHJ1ZSApO1xuICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgLy8gRGVjb2RlIHBhZ2VcbiAgICBpZiAoIHBhZ2VJbmRleCA+IDEgKSB7XG4gICAgICB2YXIgc2VnbWVudFRhYmxlTGVuZ3RoID0gZGF0YVZpZXcuZ2V0VWludDgoIHBhZ2VTdGFydCArIDI2LCB0cnVlICk7XG4gICAgICB2YXIgc2VnbWVudFRhYmxlSW5kZXggPSBwYWdlU3RhcnQgKyAyNyArIHNlZ21lbnRUYWJsZUxlbmd0aDtcblxuICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgc2VnbWVudFRhYmxlTGVuZ3RoOyBpKysgKSB7XG4gICAgICAgIHZhciBwYWNrZXRMZW5ndGggPSBkYXRhVmlldy5nZXRVaW50OCggcGFnZVN0YXJ0ICsgMjcgKyBpLCB0cnVlICk7XG4gICAgICAgIHRoaXMuZGVjb2RlckJ1ZmZlci5zZXQoIHR5cGVkQXJyYXkuc3ViYXJyYXkoIHNlZ21lbnRUYWJsZUluZGV4LCBzZWdtZW50VGFibGVJbmRleCArPSBwYWNrZXRMZW5ndGggKSwgdGhpcy5kZWNvZGVyQnVmZmVySW5kZXggKTtcbiAgICAgICAgdGhpcy5kZWNvZGVyQnVmZmVySW5kZXggKz0gcGFja2V0TGVuZ3RoO1xuXG4gICAgICAgIGlmICggcGFja2V0TGVuZ3RoIDwgMjU1ICkge1xuICAgICAgICAgIHZhciBvdXRwdXRTYW1wbGVMZW5ndGggPSB0aGlzLl9vcHVzX2RlY29kZV9mbG9hdCggdGhpcy5kZWNvZGVyLCB0aGlzLmRlY29kZXJCdWZmZXJQb2ludGVyLCB0aGlzLmRlY29kZXJCdWZmZXJJbmRleCwgdGhpcy5kZWNvZGVyT3V0cHV0UG9pbnRlciwgdGhpcy5kZWNvZGVyT3V0cHV0TWF4TGVuZ3RoLCAwKTtcbiAgICAgICAgICB2YXIgcmVzYW1wbGVkTGVuZ3RoID0gTWF0aC5jZWlsKCBvdXRwdXRTYW1wbGVMZW5ndGggKiB0aGlzLmNvbmZpZy5vdXRwdXRCdWZmZXJTYW1wbGVSYXRlIC8gdGhpcy5jb25maWcuZGVjb2RlclNhbXBsZVJhdGUgKTtcbiAgICAgICAgICB0aGlzLkhFQVAzMlsgdGhpcy5kZWNvZGVyT3V0cHV0TGVuZ3RoUG9pbnRlciA+PiAyIF0gPSBvdXRwdXRTYW1wbGVMZW5ndGg7XG4gICAgICAgICAgdGhpcy5IRUFQMzJbIHRoaXMucmVzYW1wbGVPdXRwdXRMZW5ndGhQb2ludGVyID4+IDIgXSA9IHJlc2FtcGxlZExlbmd0aDtcbiAgICAgICAgICB0aGlzLl9zcGVleF9yZXNhbXBsZXJfcHJvY2Vzc19pbnRlcmxlYXZlZF9mbG9hdCggdGhpcy5yZXNhbXBsZXIsIHRoaXMuZGVjb2Rlck91dHB1dFBvaW50ZXIsIHRoaXMuZGVjb2Rlck91dHB1dExlbmd0aFBvaW50ZXIsIHRoaXMucmVzYW1wbGVPdXRwdXRCdWZmZXJQb2ludGVyLCB0aGlzLnJlc2FtcGxlT3V0cHV0TGVuZ3RoUG9pbnRlciApO1xuICAgICAgICAgIHRoaXMuc2VuZFRvT3V0cHV0QnVmZmVycyggdGhpcy5IRUFQRjMyLnN1YmFycmF5KCB0aGlzLnJlc2FtcGxlT3V0cHV0QnVmZmVyUG9pbnRlciA+PiAyLCAodGhpcy5yZXNhbXBsZU91dHB1dEJ1ZmZlclBvaW50ZXIgPj4gMikgKyByZXNhbXBsZWRMZW5ndGggKiB0aGlzLm51bWJlck9mQ2hhbm5lbHMgKSApO1xuICAgICAgICAgIHRoaXMuZGVjb2RlckJ1ZmZlckluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBFbmQgb2Ygc3RyZWFtXG4gICAgICBpZiAoIGhlYWRlclR5cGUgJiA0ICkge1xuICAgICAgICB0aGlzLnNlbmRMYXN0QnVmZmVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB0aGlzICk7XG59O1xuXG5PZ2dPcHVzRGVjb2Rlci5wcm90b3R5cGUuZ2V0UGFnZUJvdW5kYXJpZXMgPSBmdW5jdGlvbiggZGF0YVZpZXcgKXtcbiAgdmFyIHBhZ2VCb3VuZGFyaWVzID0gW107XG5cbiAgZm9yICggdmFyIGkgPSAwOyBpIDwgZGF0YVZpZXcuYnl0ZUxlbmd0aCAtIDMyOyBpKysgKSB7XG4gICAgaWYgKCBkYXRhVmlldy5nZXRVaW50MzIoIGksIHRydWUgKSA9PSAxMzk5Mjg1NTgzICkge1xuICAgICAgcGFnZUJvdW5kYXJpZXMucHVzaCggaSApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYWdlQm91bmRhcmllcztcbn07XG5cbk9nZ09wdXNEZWNvZGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5yZXNldE91dHB1dEJ1ZmZlcnMoKTtcbiAgdGhpcy5pbml0Q29kZWMoKTtcbiAgdGhpcy5pbml0UmVzYW1wbGVyKCk7XG59O1xuXG5PZ2dPcHVzRGVjb2Rlci5wcm90b3R5cGUuaW5pdENvZGVjID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKCB0aGlzLmRlY29kZXIgKSB7XG4gICAgdGhpcy5fb3B1c19kZWNvZGVyX2Rlc3Ryb3koIHRoaXMuZGVjb2RlciApO1xuICAgIHRoaXMuX2ZyZWUoIHRoaXMuZGVjb2RlckJ1ZmZlclBvaW50ZXIgKTtcbiAgICB0aGlzLl9mcmVlKCB0aGlzLmRlY29kZXJPdXRwdXRMZW5ndGhQb2ludGVyICk7XG4gICAgdGhpcy5fZnJlZSggdGhpcy5kZWNvZGVyT3V0cHV0UG9pbnRlciApO1xuICB9XG5cbiAgdmFyIGVyclJlZmVyZW5jZSA9IHRoaXMuX21hbGxvYyggNCApO1xuICB0aGlzLmRlY29kZXIgPSB0aGlzLl9vcHVzX2RlY29kZXJfY3JlYXRlKCB0aGlzLmNvbmZpZy5kZWNvZGVyU2FtcGxlUmF0ZSwgdGhpcy5udW1iZXJPZkNoYW5uZWxzLCBlcnJSZWZlcmVuY2UgKTtcbiAgdGhpcy5fZnJlZSggZXJyUmVmZXJlbmNlICk7XG5cbiAgdGhpcy5kZWNvZGVyQnVmZmVyTWF4TGVuZ3RoID0gNDAwMDtcbiAgdGhpcy5kZWNvZGVyQnVmZmVyUG9pbnRlciA9IHRoaXMuX21hbGxvYyggdGhpcy5kZWNvZGVyQnVmZmVyTWF4TGVuZ3RoICk7XG4gIHRoaXMuZGVjb2RlckJ1ZmZlciA9IHRoaXMuSEVBUFU4LnN1YmFycmF5KCB0aGlzLmRlY29kZXJCdWZmZXJQb2ludGVyLCB0aGlzLmRlY29kZXJCdWZmZXJQb2ludGVyICsgdGhpcy5kZWNvZGVyQnVmZmVyTWF4TGVuZ3RoICk7XG4gIHRoaXMuZGVjb2RlckJ1ZmZlckluZGV4ID0gMDtcblxuICB0aGlzLmRlY29kZXJPdXRwdXRMZW5ndGhQb2ludGVyID0gdGhpcy5fbWFsbG9jKCA0ICk7XG4gIHRoaXMuZGVjb2Rlck91dHB1dE1heExlbmd0aCA9IHRoaXMuY29uZmlnLmRlY29kZXJTYW1wbGVSYXRlICogdGhpcy5udW1iZXJPZkNoYW5uZWxzICogMTIwIC8gMTAwMDsgLy8gTWF4IDEyMG1zIGZyYW1lIHNpemVcbiAgdGhpcy5kZWNvZGVyT3V0cHV0UG9pbnRlciA9IHRoaXMuX21hbGxvYyggdGhpcy5kZWNvZGVyT3V0cHV0TWF4TGVuZ3RoICogNCApOyAvLyA0IGJ5dGVzIHBlciBzYW1wbGVcbn07XG5cbk9nZ09wdXNEZWNvZGVyLnByb3RvdHlwZS5pbml0UmVzYW1wbGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKCB0aGlzLnJlc2FtcGxlciApIHtcbiAgICB0aGlzLl9zcGVleF9yZXNhbXBsZXJfZGVzdHJveSggdGhpcy5yZXNhbXBsZXIgKTtcbiAgICB0aGlzLl9mcmVlKCB0aGlzLnJlc2FtcGxlT3V0cHV0TGVuZ3RoUG9pbnRlciApO1xuICAgIHRoaXMuX2ZyZWUoIHRoaXMucmVzYW1wbGVPdXRwdXRCdWZmZXJQb2ludGVyICk7XG4gIH1cblxuICB2YXIgZXJyTG9jYXRpb24gPSB0aGlzLl9tYWxsb2MoIDQgKTtcbiAgdGhpcy5yZXNhbXBsZXIgPSB0aGlzLl9zcGVleF9yZXNhbXBsZXJfaW5pdCggdGhpcy5udW1iZXJPZkNoYW5uZWxzLCB0aGlzLmNvbmZpZy5kZWNvZGVyU2FtcGxlUmF0ZSwgdGhpcy5jb25maWcub3V0cHV0QnVmZmVyU2FtcGxlUmF0ZSwgdGhpcy5jb25maWcucmVzYW1wbGVRdWFsaXR5LCBlcnJMb2NhdGlvbiApO1xuICB0aGlzLl9mcmVlKCBlcnJMb2NhdGlvbiApO1xuXG4gIHRoaXMucmVzYW1wbGVPdXRwdXRMZW5ndGhQb2ludGVyID0gdGhpcy5fbWFsbG9jKCA0ICk7XG4gIHRoaXMucmVzYW1wbGVPdXRwdXRNYXhMZW5ndGggPSBNYXRoLmNlaWwoIHRoaXMuZGVjb2Rlck91dHB1dE1heExlbmd0aCAqIHRoaXMuY29uZmlnLm91dHB1dEJ1ZmZlclNhbXBsZVJhdGUgLyB0aGlzLmNvbmZpZy5kZWNvZGVyU2FtcGxlUmF0ZSApO1xuICB0aGlzLnJlc2FtcGxlT3V0cHV0QnVmZmVyUG9pbnRlciA9IHRoaXMuX21hbGxvYyggdGhpcy5yZXNhbXBsZU91dHB1dE1heExlbmd0aCAqIDQgKTsgLy8gNCBieXRlcyBwZXIgc2FtcGxlXG59O1xuXG5PZ2dPcHVzRGVjb2Rlci5wcm90b3R5cGUucmVzZXRPdXRwdXRCdWZmZXJzID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5vdXRwdXRCdWZmZXJzID0gW107XG4gIHRoaXMub3V0cHV0QnVmZmVyQXJyYXlCdWZmZXJzID0gW107XG4gIHRoaXMub3V0cHV0QnVmZmVySW5kZXggPSAwO1xuXG4gIGZvciAoIHZhciBpID0gMDsgaSA8IHRoaXMubnVtYmVyT2ZDaGFubmVsczsgaSsrICkge1xuICAgIHRoaXMub3V0cHV0QnVmZmVycy5wdXNoKCBuZXcgRmxvYXQzMkFycmF5KCB0aGlzLmNvbmZpZy5idWZmZXJMZW5ndGggKSApO1xuICAgIHRoaXMub3V0cHV0QnVmZmVyQXJyYXlCdWZmZXJzLnB1c2goIHRoaXMub3V0cHV0QnVmZmVyc1tpXS5idWZmZXIgKTtcbiAgfVxufTtcblxuT2dnT3B1c0RlY29kZXIucHJvdG90eXBlLnNlbmRMYXN0QnVmZmVyID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5zZW5kVG9PdXRwdXRCdWZmZXJzKCBuZXcgRmxvYXQzMkFycmF5KCAoIHRoaXMuY29uZmlnLmJ1ZmZlckxlbmd0aCAtIHRoaXMub3V0cHV0QnVmZmVySW5kZXggKSAqIHRoaXMubnVtYmVyT2ZDaGFubmVscyApICk7XG4gIGdsb2JhbFsncG9zdE1lc3NhZ2UnXShudWxsKTtcbn07XG5cbk9nZ09wdXNEZWNvZGVyLnByb3RvdHlwZS5zZW5kVG9PdXRwdXRCdWZmZXJzID0gZnVuY3Rpb24oIG1lcmdlZEJ1ZmZlcnMgKXtcbiAgdmFyIGRhdGFJbmRleCA9IDA7XG4gIHZhciBtZXJnZWRCdWZmZXJMZW5ndGggPSBtZXJnZWRCdWZmZXJzLmxlbmd0aCAvIHRoaXMubnVtYmVyT2ZDaGFubmVscztcblxuICB3aGlsZSAoIGRhdGFJbmRleCA8IG1lcmdlZEJ1ZmZlckxlbmd0aCApIHtcbiAgICB2YXIgYW1vdW50VG9Db3B5ID0gTWF0aC5taW4oIG1lcmdlZEJ1ZmZlckxlbmd0aCAtIGRhdGFJbmRleCwgdGhpcy5jb25maWcuYnVmZmVyTGVuZ3RoIC0gdGhpcy5vdXRwdXRCdWZmZXJJbmRleCApO1xuXG4gICAgaWYgKHRoaXMubnVtYmVyT2ZDaGFubmVscyA9PT0gMSkge1xuICAgICAgdGhpcy5vdXRwdXRCdWZmZXJzWzBdLnNldCggbWVyZ2VkQnVmZmVycy5zdWJhcnJheSggZGF0YUluZGV4LCBkYXRhSW5kZXggKyBhbW91bnRUb0NvcHkgKSwgdGhpcy5vdXRwdXRCdWZmZXJJbmRleCApO1xuICAgIH1cblxuICAgIC8vIERlaW50ZXJsZWF2ZVxuICAgIGVsc2Uge1xuICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgYW1vdW50VG9Db3B5OyBpKysgKSB7XG4gICAgICAgIHRoaXMub3V0cHV0QnVmZmVycy5mb3JFYWNoKCBmdW5jdGlvbiggYnVmZmVyLCBjaGFubmVsSW5kZXggKSB7XG4gICAgICAgICAgYnVmZmVyWyB0aGlzLm91dHB1dEJ1ZmZlckluZGV4ICsgaSBdID0gbWVyZ2VkQnVmZmVyc1sgKCBkYXRhSW5kZXggKyBpICkgKiB0aGlzLm51bWJlck9mQ2hhbm5lbHMgKyBjaGFubmVsSW5kZXggXTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZGF0YUluZGV4ICs9IGFtb3VudFRvQ29weTtcbiAgICB0aGlzLm91dHB1dEJ1ZmZlckluZGV4ICs9IGFtb3VudFRvQ29weTtcblxuICAgIGlmICggdGhpcy5vdXRwdXRCdWZmZXJJbmRleCA9PSB0aGlzLmNvbmZpZy5idWZmZXJMZW5ndGggKSB7XG4gICAgICBnbG9iYWxbJ3Bvc3RNZXNzYWdlJ10oIHRoaXMub3V0cHV0QnVmZmVycywgdGhpcy5vdXRwdXRCdWZmZXJBcnJheUJ1ZmZlcnMgKTtcbiAgICAgIHRoaXMucmVzZXRPdXRwdXRCdWZmZXJzKCk7XG4gICAgfVxuICB9XG59O1xuXG5cbmlmICghTW9kdWxlKSB7XG4gIE1vZHVsZSA9IHt9O1xufVxuXG5Nb2R1bGVbJ21haW5SZWFkeSddID0gbWFpblJlYWR5O1xuTW9kdWxlWydPZ2dPcHVzRGVjb2RlciddID0gT2dnT3B1c0RlY29kZXI7XG5Nb2R1bGVbJ29uUnVudGltZUluaXRpYWxpemVkJ10gPSBtYWluUmVhZHlSZXNvbHZlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZHVsZTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/decoderWorker.js\n");

/***/ })

/******/ });
});


// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
var key;
for (key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

// The environment setup code below is customized to use Module.
// *** Environment setup code ***
var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;

// Three configurations we can be running in:
// 1) We could be the application main() thread running in the main JS UI thread. (ENVIRONMENT_IS_WORKER == false and ENVIRONMENT_IS_PTHREAD == false)
// 2) We could be the application main() thread proxied to worker. (with Emscripten -s PROXY_TO_WORKER=1) (ENVIRONMENT_IS_WORKER == true, ENVIRONMENT_IS_PTHREAD == false)
// 3) We could be an application pthread running in a worker. (ENVIRONMENT_IS_WORKER == true and ENVIRONMENT_IS_PTHREAD == true)

if (Module['ENVIRONMENT']) {
  if (Module['ENVIRONMENT'] === 'WEB') {
    ENVIRONMENT_IS_WEB = true;
  } else if (Module['ENVIRONMENT'] === 'WORKER') {
    ENVIRONMENT_IS_WORKER = true;
  } else if (Module['ENVIRONMENT'] === 'NODE') {
    ENVIRONMENT_IS_NODE = true;
  } else if (Module['ENVIRONMENT'] === 'SHELL') {
    ENVIRONMENT_IS_SHELL = true;
  } else {
    throw new Error('The provided Module[\'ENVIRONMENT\'] value is not valid. It must be one of: WEB|WORKER|NODE|SHELL.');
  }
} else {
  ENVIRONMENT_IS_WEB = typeof window === 'object';
  ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
  ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof require === 'function' && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER;
  ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
}


if (ENVIRONMENT_IS_NODE) {
  // Expose functionality in the same simple way that the shells work
  // Note that we pollute the global namespace here, otherwise we break in node
  if (!Module['print']) Module['print'] = console.log;
  if (!Module['printErr']) Module['printErr'] = console.warn;

  var nodeFS;
  var nodePath;

  Module['read'] = function shell_read(filename, binary) {
    var ret;
      if (!nodeFS) nodeFS = require('fs');
      if (!nodePath) nodePath = require('path');
      filename = nodePath['normalize'](filename);
      ret = nodeFS['readFileSync'](filename);
    return binary ? ret : ret.toString();
  };

  Module['readBinary'] = function readBinary(filename) {
    var ret = Module['read'](filename, true);
    if (!ret.buffer) {
      ret = new Uint8Array(ret);
    }
    assert(ret.buffer);
    return ret;
  };

  if (!Module['thisProgram']) {
    if (process['argv'].length > 1) {
      Module['thisProgram'] = process['argv'][1].replace(/\\/g, '/');
    } else {
      Module['thisProgram'] = 'unknown-program';
    }
  }

  Module['arguments'] = process['argv'].slice(2);

  if (typeof module !== 'undefined') {
    module['exports'] = Module;
  }

  process['on']('uncaughtException', function(ex) {
    // suppress ExitStatus exceptions from showing an error
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });
  // Currently node will swallow unhandled rejections, but this behavior is
  // deprecated, and in the future it will exit with error status.
  process['on']('unhandledRejection', function(reason, p) {
    process['exit'](1);
  });

  Module['inspect'] = function () { return '[Emscripten Module object]'; };
}
else if (ENVIRONMENT_IS_SHELL) {
  if (!Module['print']) Module['print'] = print;
  if (typeof printErr != 'undefined') Module['printErr'] = printErr; // not present in v8 or older sm

  if (typeof read != 'undefined') {
    Module['read'] = function shell_read(f) {
      return read(f);
    };
  } else {
    Module['read'] = function shell_read() { throw 'no read() available' };
  }

  Module['readBinary'] = function readBinary(f) {
    var data;
    if (typeof readbuffer === 'function') {
      return new Uint8Array(readbuffer(f));
    }
    data = read(f, 'binary');
    assert(typeof data === 'object');
    return data;
  };

  if (typeof scriptArgs != 'undefined') {
    Module['arguments'] = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    Module['arguments'] = arguments;
  }

  if (typeof quit === 'function') {
    Module['quit'] = function(status, toThrow) {
      quit(status);
    }
  }
}
else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  Module['read'] = function shell_read(url) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send(null);
      return xhr.responseText;
  };

  if (ENVIRONMENT_IS_WORKER) {
    Module['readBinary'] = function readBinary(url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.responseType = 'arraybuffer';
        xhr.send(null);
        return new Uint8Array(xhr.response);
    };
  }

  Module['readAsync'] = function readAsync(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function xhr_onload() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };

  if (typeof arguments != 'undefined') {
    Module['arguments'] = arguments;
  }

  if (typeof console !== 'undefined') {
    if (!Module['print']) Module['print'] = function shell_print(x) {
      console.log(x);
    };
    if (!Module['printErr']) Module['printErr'] = function shell_printErr(x) {
      console.warn(x);
    };
  } else {
    // Probably a worker, and without console.log. We can do very little here...
    var TRY_USE_DUMP = false;
    if (!Module['print']) Module['print'] = (TRY_USE_DUMP && (typeof(dump) !== "undefined") ? (function(x) {
      dump(x);
    }) : (function(x) {
      // self.postMessage(x); // enable this if you want stdout to be sent as messages
    }));
  }

  if (typeof Module['setWindowTitle'] === 'undefined') {
    Module['setWindowTitle'] = function(title) { document.title = title };
  }
}
else {
  // Unreachable because SHELL is dependent on the others
  throw new Error('Unknown runtime environment. Where are we?');
}

if (!Module['print']) {
  Module['print'] = function(){};
}
if (!Module['printErr']) {
  Module['printErr'] = Module['print'];
}
if (!Module['arguments']) {
  Module['arguments'] = [];
}
if (!Module['thisProgram']) {
  Module['thisProgram'] = './this.program';
}
if (!Module['quit']) {
  Module['quit'] = function(status, toThrow) {
    throw toThrow;
  }
}

// *** Environment setup code ***

// Closure helpers
Module.print = Module['print'];
Module.printErr = Module['printErr'];

// Callbacks
Module['preRun'] = [];
Module['postRun'] = [];

// Merge back in the overrides
for (key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = undefined;



// {{PREAMBLE_ADDITIONS}}

var STACK_ALIGN = 16;


function staticAlloc(size) {
  assert(!staticSealed);
  var ret = STATICTOP;
  STATICTOP = (STATICTOP + size + 15) & -16;
  return ret;
}

function dynamicAlloc(size) {
  assert(DYNAMICTOP_PTR);
  var ret = HEAP32[DYNAMICTOP_PTR>>2];
  var end = (ret + size + 15) & -16;
  HEAP32[DYNAMICTOP_PTR>>2] = end;
  if (end >= TOTAL_MEMORY) {
    var success = enlargeMemory();
    if (!success) {
      HEAP32[DYNAMICTOP_PTR>>2] = ret;
      return 0;
    }
  }
  return ret;
}

function alignMemory(size, factor) {
  if (!factor) factor = STACK_ALIGN; // stack alignment (16-byte) by default
  var ret = size = Math.ceil(size / factor) * factor;
  return ret;
}

function getNativeTypeSize(type) {
  switch (type) {
    case 'i1': case 'i8': return 1;
    case 'i16': return 2;
    case 'i32': return 4;
    case 'i64': return 8;
    case 'float': return 4;
    case 'double': return 8;
    default: {
      if (type[type.length-1] === '*') {
        return 4; // A pointer
      } else if (type[0] === 'i') {
        var bits = parseInt(type.substr(1));
        assert(bits % 8 === 0);
        return bits / 8;
      } else {
        return 0;
      }
    }
  }
}

function warnOnce(text) {
  if (!warnOnce.shown) warnOnce.shown = {};
  if (!warnOnce.shown[text]) {
    warnOnce.shown[text] = 1;
    Module.printErr(text);
  }
}



var functionPointers = new Array(0);

function addFunction(func) {
  for (var i = 0; i < functionPointers.length; i++) {
    if (!functionPointers[i]) {
      functionPointers[i] = func;
      return 2*(1 + i);
    }
  }
  throw 'Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.';
}

function removeFunction(index) {
  functionPointers[(index-2)/2] = null;
}

var funcWrappers = {};

function getFuncWrapper(func, sig) {
  if (!func) return; // on null pointer, return undefined
  assert(sig);
  if (!funcWrappers[sig]) {
    funcWrappers[sig] = {};
  }
  var sigCache = funcWrappers[sig];
  if (!sigCache[func]) {
    // optimize away arguments usage in common cases
    if (sig.length === 1) {
      sigCache[func] = function dynCall_wrapper() {
        return dynCall(sig, func);
      };
    } else if (sig.length === 2) {
      sigCache[func] = function dynCall_wrapper(arg) {
        return dynCall(sig, func, [arg]);
      };
    } else {
      // general case
      sigCache[func] = function dynCall_wrapper() {
        return dynCall(sig, func, Array.prototype.slice.call(arguments));
      };
    }
  }
  return sigCache[func];
}


function makeBigInt(low, high, unsigned) {
  return unsigned ? ((+((low>>>0)))+((+((high>>>0)))*4294967296.0)) : ((+((low>>>0)))+((+((high|0)))*4294967296.0));
}

function dynCall(sig, ptr, args) {
  if (args && args.length) {
    return Module['dynCall_' + sig].apply(null, [ptr].concat(args));
  } else {
    return Module['dynCall_' + sig].call(null, ptr);
  }
}



var Runtime = {
  // FIXME backwards compatibility layer for ports. Support some Runtime.*
  //       for now, fix it there, then remove it from here. That way we
  //       can minimize any period of breakage.
  dynCall: dynCall, // for SDL2 port
};

// The address globals begin at. Very low in memory, for code size and optimization opportunities.
// Above 0 is static memory, starting with globals.
// Then the stack.
// Then 'dynamic' memory for sbrk.
var GLOBAL_BASE = 8;



// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html



//========================================
// Runtime essentials
//========================================

var ABORT = 0; // whether we are quitting the application. no code should run after this. set in exit() and abort()
var EXITSTATUS = 0;

/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

var globalScope = this;

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  assert(func, 'Cannot call unknown function ' + ident + ', make sure it is exported');
  return func;
}

var JSfuncs = {
  // Helpers for cwrap -- it can't refer to Runtime directly because it might
  // be renamed by closure, instead it calls JSfuncs['stackSave'].body to find
  // out what the minified function name is.
  'stackSave': function() {
    stackSave()
  },
  'stackRestore': function() {
    stackRestore()
  },
  // type conversion from js to c
  'arrayToC' : function(arr) {
    var ret = stackAlloc(arr.length);
    writeArrayToMemory(arr, ret);
    return ret;
  },
  'stringToC' : function(str) {
    var ret = 0;
    if (str !== null && str !== undefined && str !== 0) { // null string
      // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
      var len = (str.length << 2) + 1;
      ret = stackAlloc(len);
      stringToUTF8(str, ret, len);
    }
    return ret;
  }
};
// For fast lookup of conversion functions
var toC = {'string' : JSfuncs['stringToC'], 'array' : JSfuncs['arrayToC']};

// C calling interface.
function ccall (ident, returnType, argTypes, args, opts) {
  var func = getCFunc(ident);
  var cArgs = [];
  var stack = 0;
  if (args) {
    for (var i = 0; i < args.length; i++) {
      var converter = toC[argTypes[i]];
      if (converter) {
        if (stack === 0) stack = stackSave();
        cArgs[i] = converter(args[i]);
      } else {
        cArgs[i] = args[i];
      }
    }
  }
  var ret = func.apply(null, cArgs);
  if (returnType === 'string') ret = Pointer_stringify(ret);
  if (stack !== 0) {
    stackRestore(stack);
  }
  return ret;
}

function cwrap (ident, returnType, argTypes) {
  argTypes = argTypes || [];
  var cfunc = getCFunc(ident);
  // When the function takes numbers and returns a number, we can just return
  // the original function
  var numericArgs = argTypes.every(function(type){ return type === 'number'});
  var numericRet = returnType !== 'string';
  if (numericRet && numericArgs) {
    return cfunc;
  }
  return function() {
    return ccall(ident, returnType, argTypes, arguments);
  }
}

/** @type {function(number, number, string, boolean=)} */
function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': HEAP8[((ptr)>>0)]=value; break;
      case 'i8': HEAP8[((ptr)>>0)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math_abs(tempDouble))) >= (+1) ? (tempDouble > (+0) ? ((Math_min((+(Math_floor((tempDouble)/(+4294967296)))), (+4294967295)))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/(+4294967296))))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
}

/** @type {function(number, string, boolean=)} */
function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
    switch(type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for getValue: ' + type);
    }
  return null;
}

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call
var ALLOC_STATIC = 2; // Cannot be freed
var ALLOC_DYNAMIC = 3; // Cannot be freed except through sbrk
var ALLOC_NONE = 4; // Do not allocate

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data, or a number. If a number, then the size of the block to allocate,
//        in *bytes* (note that this is sometimes confusing: the next parameter does not
//        affect this!)
// @types: Either an array of types, one for each byte (or 0 if no type at that position),
//         or a single type which is used for the entire block. This only matters if there
//         is initial data - if @slab is a number, then this does not matter at all and is
//         ignored.
// @allocator: How to allocate memory, see ALLOC_*
/** @type {function((TypedArray|Array<number>|number), string, number, number=)} */
function allocate(slab, types, allocator, ptr) {
  var zeroinit, size;
  if (typeof slab === 'number') {
    zeroinit = true;
    size = slab;
  } else {
    zeroinit = false;
    size = slab.length;
  }

  var singleType = typeof types === 'string' ? types : null;

  var ret;
  if (allocator == ALLOC_NONE) {
    ret = ptr;
  } else {
    ret = [typeof _malloc === 'function' ? _malloc : staticAlloc, stackAlloc, staticAlloc, dynamicAlloc][allocator === undefined ? ALLOC_STATIC : allocator](Math.max(size, singleType ? 1 : types.length));
  }

  if (zeroinit) {
    var stop;
    ptr = ret;
    assert((ret & 3) == 0);
    stop = ret + (size & ~3);
    for (; ptr < stop; ptr += 4) {
      HEAP32[((ptr)>>2)]=0;
    }
    stop = ret + size;
    while (ptr < stop) {
      HEAP8[((ptr++)>>0)]=0;
    }
    return ret;
  }

  if (singleType === 'i8') {
    if (slab.subarray || slab.slice) {
      HEAPU8.set(/** @type {!Uint8Array} */ (slab), ret);
    } else {
      HEAPU8.set(new Uint8Array(slab), ret);
    }
    return ret;
  }

  var i = 0, type, typeSize, previousType;
  while (i < size) {
    var curr = slab[i];

    type = singleType || types[i];
    if (type === 0) {
      i++;
      continue;
    }

    if (type == 'i64') type = 'i32'; // special case: we have one i32 here, and one i32 later

    setValue(ret+i, curr, type);

    // no need to look up size unless type changes, so cache it
    if (previousType !== type) {
      typeSize = getNativeTypeSize(type);
      previousType = type;
    }
    i += typeSize;
  }

  return ret;
}

// Allocate memory during any stage of startup - static memory early on, dynamic memory later, malloc when ready
function getMemory(size) {
  if (!staticSealed) return staticAlloc(size);
  if (!runtimeInitialized) return dynamicAlloc(size);
  return _malloc(size);
}

/** @type {function(number, number=)} */
function Pointer_stringify(ptr, length) {
  if (length === 0 || !ptr) return '';
  // TODO: use TextDecoder
  // Find the length, and check for UTF while doing so
  var hasUtf = 0;
  var t;
  var i = 0;
  while (1) {
    t = HEAPU8[(((ptr)+(i))>>0)];
    hasUtf |= t;
    if (t == 0 && !length) break;
    i++;
    if (length && i == length) break;
  }
  if (!length) length = i;

  var ret = '';

  if (hasUtf < 128) {
    var MAX_CHUNK = 1024; // split up into chunks, because .apply on a huge string can overflow the stack
    var curr;
    while (length > 0) {
      curr = String.fromCharCode.apply(String, HEAPU8.subarray(ptr, ptr + Math.min(length, MAX_CHUNK)));
      ret = ret ? ret + curr : curr;
      ptr += MAX_CHUNK;
      length -= MAX_CHUNK;
    }
    return ret;
  }
  return UTF8ToString(ptr);
}

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = HEAP8[((ptr++)>>0)];
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;
function UTF8ArrayToString(u8Array, idx) {
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  while (u8Array[endPtr]) ++endPtr;

  if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
  } else {
    var u0, u1, u2, u3, u4, u5;

    var str = '';
    while (1) {
      // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
      u0 = u8Array[idx++];
      if (!u0) return str;
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      u1 = u8Array[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      u2 = u8Array[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        u3 = u8Array[idx++] & 63;
        if ((u0 & 0xF8) == 0xF0) {
          u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | u3;
        } else {
          u4 = u8Array[idx++] & 63;
          if ((u0 & 0xFC) == 0xF8) {
            u0 = ((u0 & 3) << 24) | (u1 << 18) | (u2 << 12) | (u3 << 6) | u4;
          } else {
            u5 = u8Array[idx++] & 63;
            u0 = ((u0 & 1) << 30) | (u1 << 24) | (u2 << 18) | (u3 << 12) | (u4 << 6) | u5;
          }
        }
      }
      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
}

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function UTF8ToString(ptr) {
  return UTF8ArrayToString(HEAPU8,ptr);
}

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outU8Array: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      outU8Array[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      outU8Array[outIdx++] = 0xC0 | (u >> 6);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      outU8Array[outIdx++] = 0xE0 | (u >> 12);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0x1FFFFF) {
      if (outIdx + 3 >= endIdx) break;
      outU8Array[outIdx++] = 0xF0 | (u >> 18);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0x3FFFFFF) {
      if (outIdx + 4 >= endIdx) break;
      outU8Array[outIdx++] = 0xF8 | (u >> 24);
      outU8Array[outIdx++] = 0x80 | ((u >> 18) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 5 >= endIdx) break;
      outU8Array[outIdx++] = 0xFC | (u >> 30);
      outU8Array[outIdx++] = 0x80 | ((u >> 24) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 18) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  outU8Array[outIdx] = 0;
  return outIdx - startIdx;
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) {
      ++len;
    } else if (u <= 0x7FF) {
      len += 2;
    } else if (u <= 0xFFFF) {
      len += 3;
    } else if (u <= 0x1FFFFF) {
      len += 4;
    } else if (u <= 0x3FFFFFF) {
      len += 5;
    } else {
      len += 6;
    }
  }
  return len;
}

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;
function UTF16ToString(ptr) {
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  while (HEAP16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var i = 0;

    var str = '';
    while (1) {
      var codeUnit = HEAP16[(((ptr)+(i*2))>>1)];
      if (codeUnit == 0) return str;
      ++i;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    HEAP16[((outPtr)>>1)]=codeUnit;
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP16[((outPtr)>>1)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}

function UTF32ToString(ptr) {
  var i = 0;

  var str = '';
  while (1) {
    var utf32 = HEAP32[(((ptr)+(i*4))>>2)];
    if (utf32 == 0)
      return str;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
}

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    HEAP32[((outPtr)>>2)]=codeUnit;
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  HEAP32[((outPtr)>>2)]=0;
  return outPtr - startPtr;
}

// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}

// Allocate heap space for a JS string, and write it there.
// It is the responsibility of the caller to free() that memory.
function allocateUTF8(str) {
  var size = lengthBytesUTF8(str) + 1;
  var ret = _malloc(size);
  if (ret) stringToUTF8Array(str, HEAP8, ret, size);
  return ret;
}

function demangle(func) {
  return func;
}

function demangleAll(text) {
  var regex =
    /__Z[\w\d_]+/g;
  return text.replace(regex,
    function(x) {
      var y = demangle(x);
      return x === y ? x : (x + ' [' + y + ']');
    });
}

function jsStackTrace() {
  var err = new Error();
  if (!err.stack) {
    // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
    // so try that as a special-case.
    try {
      throw new Error(0);
    } catch(e) {
      err = e;
    }
    if (!err.stack) {
      return '(no stack trace available)';
    }
  }
  return err.stack.toString();
}

function stackTrace() {
  var js = jsStackTrace();
  if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
  return demangleAll(js);
}

// Memory management

var PAGE_SIZE = 16384;
var WASM_PAGE_SIZE = 65536;
var ASMJS_PAGE_SIZE = 16777216;
var MIN_TOTAL_MEMORY = 16777216;

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP,
/** @type {ArrayBuffer} */
  buffer,
/** @type {Int8Array} */
  HEAP8,
/** @type {Uint8Array} */
  HEAPU8,
/** @type {Int16Array} */
  HEAP16,
/** @type {Uint16Array} */
  HEAPU16,
/** @type {Int32Array} */
  HEAP32,
/** @type {Uint32Array} */
  HEAPU32,
/** @type {Float32Array} */
  HEAPF32,
/** @type {Float64Array} */
  HEAPF64;

function updateGlobalBuffer(buf) {
  Module['buffer'] = buffer = buf;
}

function updateGlobalBufferViews() {
  Module['HEAP8'] = HEAP8 = new Int8Array(buffer);
  Module['HEAP16'] = HEAP16 = new Int16Array(buffer);
  Module['HEAP32'] = HEAP32 = new Int32Array(buffer);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buffer);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buffer);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buffer);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buffer);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buffer);
}

var STATIC_BASE, STATICTOP, staticSealed; // static area
var STACK_BASE, STACKTOP, STACK_MAX; // stack area
var DYNAMIC_BASE, DYNAMICTOP_PTR; // dynamic area handled by sbrk

  STATIC_BASE = STATICTOP = STACK_BASE = STACKTOP = STACK_MAX = DYNAMIC_BASE = DYNAMICTOP_PTR = 0;
  staticSealed = false;



function abortOnCannotGrowMemory() {
  abort('Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value ' + TOTAL_MEMORY + ', (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or (4) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ');
}


function enlargeMemory() {
  abortOnCannotGrowMemory();
}


var TOTAL_STACK = Module['TOTAL_STACK'] || 5242880;
var TOTAL_MEMORY = Module['TOTAL_MEMORY'] || 16777216;
if (TOTAL_MEMORY < TOTAL_STACK) Module.printErr('TOTAL_MEMORY should be larger than TOTAL_STACK, was ' + TOTAL_MEMORY + '! (TOTAL_STACK=' + TOTAL_STACK + ')');

// Initialize the runtime's memory



// Use a provided buffer, if there is one, or else allocate a new one
if (Module['buffer']) {
  buffer = Module['buffer'];
} else {
  // Use a WebAssembly memory where available
  {
    buffer = new ArrayBuffer(TOTAL_MEMORY);
  }
  Module['buffer'] = buffer;
}
updateGlobalBufferViews();


function getTotalMemory() {
  return TOTAL_MEMORY;
}

// Endianness check (note: assumes compiler arch was little-endian)
  HEAP32[0] = 0x63736d65; /* 'emsc' */
HEAP16[1] = 0x6373;
if (HEAPU8[2] !== 0x73 || HEAPU8[3] !== 0x63) throw 'Runtime error: expected the system to be little-endian!';

function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.shift();
    if (typeof callback == 'function') {
      callback();
      continue;
    }
    var func = callback.func;
    if (typeof func === 'number') {
      if (callback.arg === undefined) {
        Module['dynCall_v'](func);
      } else {
        Module['dynCall_vi'](func, callback.arg);
      }
    } else {
      func(callback.arg === undefined ? null : callback.arg);
    }
  }
}

var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the runtime has exited

var runtimeInitialized = false;
var runtimeExited = false;


function preRun() {
  // compatibility - merge in anything from Module['preRun'] at this time
  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPRERUN__);
}

function ensureInitRuntime() {
  if (runtimeInitialized) return;
  runtimeInitialized = true;
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  callRuntimeCallbacks(__ATEXIT__);
  runtimeExited = true;
}

function postRun() {
  // compatibility - merge in anything from Module['postRun'] at this time
  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}

function addOnExit(cb) {
  __ATEXIT__.unshift(cb);
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
/** @deprecated */
function writeStringToMemory(string, buffer, dontAddNull) {
  warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var /** @type {number} */ lastChar, /** @type {number} */ end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}

function writeArrayToMemory(array, buffer) {
  HEAP8.set(array, buffer);
}

function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    HEAP8[((buffer++)>>0)]=str.charCodeAt(i);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) HEAP8[((buffer)>>0)]=0;
}

function unSign(value, bits, ignore) {
  if (value >= 0) {
    return value;
  }
  return bits <= 32 ? 2*Math.abs(1 << (bits-1)) + value // Need some trickery, since if bits == 32, we are right at the limit of the bits JS uses in bitshifts
                    : Math.pow(2, bits)         + value;
}
function reSign(value, bits, ignore) {
  if (value <= 0) {
    return value;
  }
  var half = bits <= 32 ? Math.abs(1 << (bits-1)) // abs is needed if bits == 32
                        : Math.pow(2, bits-1);
  if (value >= half && (bits <= 32 || value > half)) { // for huge values, we can hit the precision limit and always get true here. so don't do that
                                                       // but, in general there is no perfect solution here. With 64-bit ints, we get rounding and errors
                                                       // TODO: In i64 mode 1, resign the two parts separately and safely
    value = -2*half + value; // Cannot bitshift half, as it may be at the limit of the bits JS uses in bitshifts
  }
  return value;
}


var Math_abs = Math.abs;
var Math_cos = Math.cos;
var Math_sin = Math.sin;
var Math_tan = Math.tan;
var Math_acos = Math.acos;
var Math_asin = Math.asin;
var Math_atan = Math.atan;
var Math_atan2 = Math.atan2;
var Math_exp = Math.exp;
var Math_log = Math.log;
var Math_sqrt = Math.sqrt;
var Math_ceil = Math.ceil;
var Math_floor = Math.floor;
var Math_pow = Math.pow;
var Math_imul = Math.imul;
var Math_fround = Math.fround;
var Math_round = Math.round;
var Math_min = Math.min;
var Math_max = Math.max;
var Math_clz32 = Math.clz32;
var Math_trunc = Math.trunc;

// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// PRE_RUN_ADDITIONS (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled

function getUniqueRunDependency(id) {
  return id;
}

function addRunDependency(id) {
  runDependencies++;
  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }
}

function removeRunDependency(id) {
  runDependencies--;
  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data



var memoryInitializer = null;






// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

// Indicates whether filename is a base64 data URI.
function isDataURI(filename) {
  return String.prototype.startsWith ?
      filename.startsWith(dataURIPrefix) :
      filename.indexOf(dataURIPrefix) === 0;
}





// === Body ===

var ASM_CONSTS = [];




STATIC_BASE = GLOBAL_BASE;

STATICTOP = STATIC_BASE + 28784;
/* global initializers */  __ATINIT__.push();


memoryInitializer = "decoderWorker.js.mem";





/* no memory initializer */
var tempDoublePtr = STATICTOP; STATICTOP += 16;

function copyTempFloat(ptr) { // functions, because inlining this code increases code size too much

  HEAP8[tempDoublePtr] = HEAP8[ptr];

  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];

  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];

  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];

}

function copyTempDouble(ptr) {

  HEAP8[tempDoublePtr] = HEAP8[ptr];

  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];

  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];

  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];

  HEAP8[tempDoublePtr+4] = HEAP8[ptr+4];

  HEAP8[tempDoublePtr+5] = HEAP8[ptr+5];

  HEAP8[tempDoublePtr+6] = HEAP8[ptr+6];

  HEAP8[tempDoublePtr+7] = HEAP8[ptr+7];

}

// {{PRE_LIBRARY}}


  
    

  function _abort() {
      Module['abort']();
    }

   

   

   

  var _llvm_ctlz_i32=true;

  function _llvm_stackrestore(p) {
      var self = _llvm_stacksave;
      var ret = self.LLVM_SAVEDSTACKS[p];
      self.LLVM_SAVEDSTACKS.splice(p, 1);
      stackRestore(ret);
    }

  function _llvm_stacksave() {
      var self = _llvm_stacksave;
      if (!self.LLVM_SAVEDSTACKS) {
        self.LLVM_SAVEDSTACKS = [];
      }
      self.LLVM_SAVEDSTACKS.push(stackSave());
      return self.LLVM_SAVEDSTACKS.length-1;
    }

  
  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.set(HEAPU8.subarray(src, src+num), dest);
      return dest;
    } 

   

   

  
  function ___setErrNo(value) {
      if (Module['___errno_location']) HEAP32[((Module['___errno_location']())>>2)]=value;
      return value;
    } 
DYNAMICTOP_PTR = staticAlloc(4);

STACK_BASE = STACKTOP = alignMemory(STATICTOP);

STACK_MAX = STACK_BASE + TOTAL_STACK;

DYNAMIC_BASE = alignMemory(STACK_MAX);

HEAP32[DYNAMICTOP_PTR>>2] = DYNAMIC_BASE;

staticSealed = true; // seal the static portion of memory

var ASSERTIONS = false;

/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}



function invoke_iiiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    return Module["dynCall_iiiiiii"](index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

Module.asmGlobalArg = { "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array, "NaN": NaN, "Infinity": Infinity };

Module.asmLibraryArg = { "abort": abort, "assert": assert, "enlargeMemory": enlargeMemory, "getTotalMemory": getTotalMemory, "abortOnCannotGrowMemory": abortOnCannotGrowMemory, "invoke_iiiiiii": invoke_iiiiiii, "___setErrNo": ___setErrNo, "_abort": _abort, "_emscripten_memcpy_big": _emscripten_memcpy_big, "_llvm_stackrestore": _llvm_stackrestore, "_llvm_stacksave": _llvm_stacksave, "DYNAMICTOP_PTR": DYNAMICTOP_PTR, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX };
// EMSCRIPTEN_START_ASM
var asm = (/** @suppress {uselessCode} */ function(global, env, buffer) {
'use asm';


  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);

  var DYNAMICTOP_PTR=env.DYNAMICTOP_PTR|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;

  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var nan = global.NaN, inf = global.Infinity;
  var tempInt = 0, tempBigInt = 0, tempBigIntS = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;

  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var Math_min=global.Math.min;
  var Math_max=global.Math.max;
  var Math_clz32=global.Math.clz32;
  var abort=env.abort;
  var assert=env.assert;
  var enlargeMemory=env.enlargeMemory;
  var getTotalMemory=env.getTotalMemory;
  var abortOnCannotGrowMemory=env.abortOnCannotGrowMemory;
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var ___setErrNo=env.___setErrNo;
  var _abort=env._abort;
  var _emscripten_memcpy_big=env._emscripten_memcpy_big;
  var _llvm_stackrestore=env._llvm_stackrestore;
  var _llvm_stacksave=env._llvm_stacksave;
  var tempFloat = 0.0;

// EMSCRIPTEN_START_FUNCS

function _malloc($0) {
 $0 = $0 | 0;
 var $$$0192$i = 0, $$$0193$i = 0, $$$4351$i = 0, $$$i = 0, $$0 = 0, $$0$i$i = 0, $$0$i$i$i = 0, $$0$i18$i = 0, $$01$i$i = 0, $$0189$i = 0, $$0192$lcssa$i = 0, $$01928$i = 0, $$0193$lcssa$i = 0, $$01937$i = 0, $$0197 = 0, $$0199 = 0, $$0206$i$i = 0, $$0207$i$i = 0, $$0211$i$i = 0, $$0212$i$i = 0, $$024371$i = 0, $$0287$i$i = 0, $$0288$i$i = 0, $$0289$i$i = 0, $$0295$i$i = 0, $$0296$i$i = 0, $$0342$i = 0, $$0344$i = 0, $$0345$i = 0, $$0347$i = 0, $$0353$i = 0, $$0358$i = 0, $$0359$i = 0, $$0361$i = 0, $$0362$i = 0, $$0368$i = 0, $$1196$i = 0, $$1198$i = 0, $$124470$i = 0, $$1291$i$i = 0, $$1293$i$i = 0, $$1343$i = 0, $$1348$i = 0, $$1363$i = 0, $$1370$i = 0, $$1374$i = 0, $$2234253237$i = 0, $$2247$ph$i = 0, $$2253$ph$i = 0, $$2355$i = 0, $$3$i = 0, $$3$i$i = 0, $$3$i201 = 0, $$3350$i = 0, $$3372$i = 0, $$4$lcssa$i = 0, $$4$ph$i = 0, $$415$i = 0, $$4236$i = 0, $$4351$lcssa$i = 0, $$435114$i = 0, $$4357$$4$i = 0, $$4357$ph$i = 0, $$435713$i = 0, $$723948$i = 0, $$749$i = 0, $$pre$phi$i$iZ2D = 0, $$pre$phi$i20$iZ2D = 0, $$pre$phi$i211Z2D = 0, $$pre$phi$iZ2D = 0, $$pre$phi11$i$iZ2D = 0, $$pre$phiZ2D = 0, $1 = 0, $1001 = 0, $1007 = 0, $101 = 0, $1010 = 0, $1011 = 0, $102 = 0, $1029 = 0, $1031 = 0, $1038 = 0, $1039 = 0, $1040 = 0, $1048 = 0, $1050 = 0, $1051 = 0, $1052 = 0, $108 = 0, $112 = 0, $114 = 0, $115 = 0, $117 = 0, $119 = 0, $121 = 0, $123 = 0, $125 = 0, $127 = 0, $129 = 0, $134 = 0, $138 = 0, $14 = 0, $142 = 0, $145 = 0, $148 = 0, $149 = 0, $155 = 0, $157 = 0, $16 = 0, $160 = 0, $162 = 0, $165 = 0, $167 = 0, $17 = 0, $170 = 0, $173 = 0, $174 = 0, $176 = 0, $177 = 0, $179 = 0, $18 = 0, $180 = 0, $182 = 0, $183 = 0, $188 = 0, $189 = 0, $19 = 0, $20 = 0, $201 = 0, $205 = 0, $211 = 0, $218 = 0, $222 = 0, $231 = 0, $232 = 0, $234 = 0, $235 = 0, $239 = 0, $240 = 0, $248 = 0, $249 = 0, $250 = 0, $252 = 0, $253 = 0, $258 = 0, $259 = 0, $262 = 0, $264 = 0, $267 = 0, $27 = 0, $272 = 0, $279 = 0, $289 = 0, $293 = 0, $299 = 0, $30 = 0, $303 = 0, $306 = 0, $310 = 0, $312 = 0, $313 = 0, $315 = 0, $317 = 0, $319 = 0, $321 = 0, $323 = 0, $325 = 0, $327 = 0, $337 = 0, $338 = 0, $34 = 0, $348 = 0, $350 = 0, $353 = 0, $355 = 0, $358 = 0, $360 = 0, $363 = 0, $366 = 0, $367 = 0, $369 = 0, $37 = 0, $370 = 0, $372 = 0, $373 = 0, $375 = 0, $376 = 0, $381 = 0, $382 = 0, $387 = 0, $394 = 0, $398 = 0, $404 = 0, $41 = 0, $411 = 0, $415 = 0, $423 = 0, $426 = 0, $427 = 0, $428 = 0, $432 = 0, $433 = 0, $439 = 0, $44 = 0, $444 = 0, $445 = 0, $448 = 0, $450 = 0, $453 = 0, $458 = 0, $464 = 0, $466 = 0, $468 = 0, $47 = 0, $470 = 0, $487 = 0, $489 = 0, $49 = 0, $496 = 0, $497 = 0, $498 = 0, $50 = 0, $506 = 0, $508 = 0, $509 = 0, $511 = 0, $52 = 0, $520 = 0, $524 = 0, $526 = 0, $527 = 0, $528 = 0, $538 = 0, $539 = 0, $54 = 0, $540 = 0, $541 = 0, $542 = 0, $543 = 0, $544 = 0, $546 = 0, $548 = 0, $549 = 0, $555 = 0, $557 = 0, $559 = 0, $56 = 0, $564 = 0, $566 = 0, $568 = 0, $569 = 0, $570 = 0, $578 = 0, $579 = 0, $58 = 0, $582 = 0, $586 = 0, $589 = 0, $591 = 0, $597 = 0, $6 = 0, $60 = 0, $601 = 0, $605 = 0, $614 = 0, $615 = 0, $62 = 0, $621 = 0, $623 = 0, $627 = 0, $630 = 0, $632 = 0, $637 = 0, $64 = 0, $643 = 0, $648 = 0, $649 = 0, $650 = 0, $656 = 0, $657 = 0, $658 = 0, $662 = 0, $67 = 0, $673 = 0, $678 = 0, $679 = 0, $681 = 0, $687 = 0, $689 = 0, $69 = 0, $693 = 0, $699 = 0, $7 = 0, $70 = 0, $703 = 0, $709 = 0, $71 = 0, $711 = 0, $717 = 0, $72 = 0, $721 = 0, $722 = 0, $727 = 0, $73 = 0, $733 = 0, $738 = 0, $741 = 0, $742 = 0, $745 = 0, $747 = 0, $749 = 0, $752 = 0, $763 = 0, $768 = 0, $77 = 0, $770 = 0, $773 = 0, $775 = 0, $778 = 0, $781 = 0, $782 = 0, $783 = 0, $785 = 0, $787 = 0, $788 = 0, $790 = 0, $791 = 0, $796 = 0, $797 = 0, $8 = 0, $80 = 0, $810 = 0, $813 = 0, $814 = 0, $820 = 0, $828 = 0, $834 = 0, $837 = 0, $838 = 0, $839 = 0, $84 = 0, $843 = 0, $844 = 0, $850 = 0, $855 = 0, $856 = 0, $859 = 0, $861 = 0, $864 = 0, $869 = 0, $87 = 0, $875 = 0, $877 = 0, $879 = 0, $880 = 0, $898 = 0, $9 = 0, $900 = 0, $907 = 0, $908 = 0, $909 = 0, $916 = 0, $92 = 0, $920 = 0, $924 = 0, $926 = 0, $93 = 0, $932 = 0, $933 = 0, $935 = 0, $936 = 0, $940 = 0, $945 = 0, $946 = 0, $947 = 0, $95 = 0, $953 = 0, $955 = 0, $96 = 0, $961 = 0, $966 = 0, $969 = 0, $970 = 0, $971 = 0, $975 = 0, $976 = 0, $98 = 0, $982 = 0, $987 = 0, $988 = 0, $991 = 0, $993 = 0, $996 = 0, label = 0, sp = 0, $955$looptemp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 $1 = sp;
 do if ($0 >>> 0 < 245) {
  $6 = $0 >>> 0 < 11 ? 16 : $0 + 11 & -8;
  $7 = $6 >>> 3;
  $8 = HEAP32[7072] | 0;
  $9 = $8 >>> $7;
  if ($9 & 3 | 0) {
   $14 = ($9 & 1 ^ 1) + $7 | 0;
   $16 = 28328 + ($14 << 1 << 2) | 0;
   $17 = $16 + 8 | 0;
   $18 = HEAP32[$17 >> 2] | 0;
   $19 = $18 + 8 | 0;
   $20 = HEAP32[$19 >> 2] | 0;
   do if (($16 | 0) == ($20 | 0)) HEAP32[7072] = $8 & ~(1 << $14); else {
    if ($20 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort();
    $27 = $20 + 12 | 0;
    if ((HEAP32[$27 >> 2] | 0) == ($18 | 0)) {
     HEAP32[$27 >> 2] = $16;
     HEAP32[$17 >> 2] = $20;
     break;
    } else _abort();
   } while (0);
   $30 = $14 << 3;
   HEAP32[$18 + 4 >> 2] = $30 | 3;
   $34 = $18 + $30 + 4 | 0;
   HEAP32[$34 >> 2] = HEAP32[$34 >> 2] | 1;
   $$0 = $19;
   STACKTOP = sp;
   return $$0 | 0;
  }
  $37 = HEAP32[7074] | 0;
  if ($6 >>> 0 > $37 >>> 0) {
   if ($9 | 0) {
    $41 = 2 << $7;
    $44 = $9 << $7 & ($41 | 0 - $41);
    $47 = ($44 & 0 - $44) + -1 | 0;
    $49 = $47 >>> 12 & 16;
    $50 = $47 >>> $49;
    $52 = $50 >>> 5 & 8;
    $54 = $50 >>> $52;
    $56 = $54 >>> 2 & 4;
    $58 = $54 >>> $56;
    $60 = $58 >>> 1 & 2;
    $62 = $58 >>> $60;
    $64 = $62 >>> 1 & 1;
    $67 = ($52 | $49 | $56 | $60 | $64) + ($62 >>> $64) | 0;
    $69 = 28328 + ($67 << 1 << 2) | 0;
    $70 = $69 + 8 | 0;
    $71 = HEAP32[$70 >> 2] | 0;
    $72 = $71 + 8 | 0;
    $73 = HEAP32[$72 >> 2] | 0;
    do if (($69 | 0) == ($73 | 0)) {
     $77 = $8 & ~(1 << $67);
     HEAP32[7072] = $77;
     $98 = $77;
    } else {
     if ($73 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort();
     $80 = $73 + 12 | 0;
     if ((HEAP32[$80 >> 2] | 0) == ($71 | 0)) {
      HEAP32[$80 >> 2] = $69;
      HEAP32[$70 >> 2] = $73;
      $98 = $8;
      break;
     } else _abort();
    } while (0);
    $84 = ($67 << 3) - $6 | 0;
    HEAP32[$71 + 4 >> 2] = $6 | 3;
    $87 = $71 + $6 | 0;
    HEAP32[$87 + 4 >> 2] = $84 | 1;
    HEAP32[$87 + $84 >> 2] = $84;
    if ($37 | 0) {
     $92 = HEAP32[7077] | 0;
     $93 = $37 >>> 3;
     $95 = 28328 + ($93 << 1 << 2) | 0;
     $96 = 1 << $93;
     if (!($98 & $96)) {
      HEAP32[7072] = $98 | $96;
      $$0199 = $95;
      $$pre$phiZ2D = $95 + 8 | 0;
     } else {
      $101 = $95 + 8 | 0;
      $102 = HEAP32[$101 >> 2] | 0;
      if ($102 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort(); else {
       $$0199 = $102;
       $$pre$phiZ2D = $101;
      }
     }
     HEAP32[$$pre$phiZ2D >> 2] = $92;
     HEAP32[$$0199 + 12 >> 2] = $92;
     HEAP32[$92 + 8 >> 2] = $$0199;
     HEAP32[$92 + 12 >> 2] = $95;
    }
    HEAP32[7074] = $84;
    HEAP32[7077] = $87;
    $$0 = $72;
    STACKTOP = sp;
    return $$0 | 0;
   }
   $108 = HEAP32[7073] | 0;
   if (!$108) $$0197 = $6; else {
    $112 = ($108 & 0 - $108) + -1 | 0;
    $114 = $112 >>> 12 & 16;
    $115 = $112 >>> $114;
    $117 = $115 >>> 5 & 8;
    $119 = $115 >>> $117;
    $121 = $119 >>> 2 & 4;
    $123 = $119 >>> $121;
    $125 = $123 >>> 1 & 2;
    $127 = $123 >>> $125;
    $129 = $127 >>> 1 & 1;
    $134 = HEAP32[28592 + (($117 | $114 | $121 | $125 | $129) + ($127 >>> $129) << 2) >> 2] | 0;
    $138 = (HEAP32[$134 + 4 >> 2] & -8) - $6 | 0;
    $142 = HEAP32[$134 + 16 + (((HEAP32[$134 + 16 >> 2] | 0) == 0 & 1) << 2) >> 2] | 0;
    if (!$142) {
     $$0192$lcssa$i = $134;
     $$0193$lcssa$i = $138;
    } else {
     $$01928$i = $134;
     $$01937$i = $138;
     $145 = $142;
     while (1) {
      $148 = (HEAP32[$145 + 4 >> 2] & -8) - $6 | 0;
      $149 = $148 >>> 0 < $$01937$i >>> 0;
      $$$0193$i = $149 ? $148 : $$01937$i;
      $$$0192$i = $149 ? $145 : $$01928$i;
      $145 = HEAP32[$145 + 16 + (((HEAP32[$145 + 16 >> 2] | 0) == 0 & 1) << 2) >> 2] | 0;
      if (!$145) {
       $$0192$lcssa$i = $$$0192$i;
       $$0193$lcssa$i = $$$0193$i;
       break;
      } else {
       $$01928$i = $$$0192$i;
       $$01937$i = $$$0193$i;
      }
     }
    }
    $155 = HEAP32[7076] | 0;
    if ($$0192$lcssa$i >>> 0 < $155 >>> 0) _abort();
    $157 = $$0192$lcssa$i + $6 | 0;
    if ($$0192$lcssa$i >>> 0 >= $157 >>> 0) _abort();
    $160 = HEAP32[$$0192$lcssa$i + 24 >> 2] | 0;
    $162 = HEAP32[$$0192$lcssa$i + 12 >> 2] | 0;
    do if (($162 | 0) == ($$0192$lcssa$i | 0)) {
     $173 = $$0192$lcssa$i + 20 | 0;
     $174 = HEAP32[$173 >> 2] | 0;
     if (!$174) {
      $176 = $$0192$lcssa$i + 16 | 0;
      $177 = HEAP32[$176 >> 2] | 0;
      if (!$177) {
       $$3$i = 0;
       break;
      } else {
       $$1196$i = $177;
       $$1198$i = $176;
      }
     } else {
      $$1196$i = $174;
      $$1198$i = $173;
     }
     while (1) {
      $179 = $$1196$i + 20 | 0;
      $180 = HEAP32[$179 >> 2] | 0;
      if ($180 | 0) {
       $$1196$i = $180;
       $$1198$i = $179;
       continue;
      }
      $182 = $$1196$i + 16 | 0;
      $183 = HEAP32[$182 >> 2] | 0;
      if (!$183) break; else {
       $$1196$i = $183;
       $$1198$i = $182;
      }
     }
     if ($$1198$i >>> 0 < $155 >>> 0) _abort(); else {
      HEAP32[$$1198$i >> 2] = 0;
      $$3$i = $$1196$i;
      break;
     }
    } else {
     $165 = HEAP32[$$0192$lcssa$i + 8 >> 2] | 0;
     if ($165 >>> 0 < $155 >>> 0) _abort();
     $167 = $165 + 12 | 0;
     if ((HEAP32[$167 >> 2] | 0) != ($$0192$lcssa$i | 0)) _abort();
     $170 = $162 + 8 | 0;
     if ((HEAP32[$170 >> 2] | 0) == ($$0192$lcssa$i | 0)) {
      HEAP32[$167 >> 2] = $162;
      HEAP32[$170 >> 2] = $165;
      $$3$i = $162;
      break;
     } else _abort();
    } while (0);
    L73 : do if ($160 | 0) {
     $188 = HEAP32[$$0192$lcssa$i + 28 >> 2] | 0;
     $189 = 28592 + ($188 << 2) | 0;
     do if (($$0192$lcssa$i | 0) == (HEAP32[$189 >> 2] | 0)) {
      HEAP32[$189 >> 2] = $$3$i;
      if (!$$3$i) {
       HEAP32[7073] = $108 & ~(1 << $188);
       break L73;
      }
     } else if ($160 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort(); else {
      HEAP32[$160 + 16 + (((HEAP32[$160 + 16 >> 2] | 0) != ($$0192$lcssa$i | 0) & 1) << 2) >> 2] = $$3$i;
      if (!$$3$i) break L73; else break;
     } while (0);
     $201 = HEAP32[7076] | 0;
     if ($$3$i >>> 0 < $201 >>> 0) _abort();
     HEAP32[$$3$i + 24 >> 2] = $160;
     $205 = HEAP32[$$0192$lcssa$i + 16 >> 2] | 0;
     do if ($205 | 0) if ($205 >>> 0 < $201 >>> 0) _abort(); else {
      HEAP32[$$3$i + 16 >> 2] = $205;
      HEAP32[$205 + 24 >> 2] = $$3$i;
      break;
     } while (0);
     $211 = HEAP32[$$0192$lcssa$i + 20 >> 2] | 0;
     if ($211 | 0) if ($211 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort(); else {
      HEAP32[$$3$i + 20 >> 2] = $211;
      HEAP32[$211 + 24 >> 2] = $$3$i;
      break;
     }
    } while (0);
    if ($$0193$lcssa$i >>> 0 < 16) {
     $218 = $$0193$lcssa$i + $6 | 0;
     HEAP32[$$0192$lcssa$i + 4 >> 2] = $218 | 3;
     $222 = $$0192$lcssa$i + $218 + 4 | 0;
     HEAP32[$222 >> 2] = HEAP32[$222 >> 2] | 1;
    } else {
     HEAP32[$$0192$lcssa$i + 4 >> 2] = $6 | 3;
     HEAP32[$157 + 4 >> 2] = $$0193$lcssa$i | 1;
     HEAP32[$157 + $$0193$lcssa$i >> 2] = $$0193$lcssa$i;
     if ($37 | 0) {
      $231 = HEAP32[7077] | 0;
      $232 = $37 >>> 3;
      $234 = 28328 + ($232 << 1 << 2) | 0;
      $235 = 1 << $232;
      if (!($8 & $235)) {
       HEAP32[7072] = $8 | $235;
       $$0189$i = $234;
       $$pre$phi$iZ2D = $234 + 8 | 0;
      } else {
       $239 = $234 + 8 | 0;
       $240 = HEAP32[$239 >> 2] | 0;
       if ($240 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort(); else {
        $$0189$i = $240;
        $$pre$phi$iZ2D = $239;
       }
      }
      HEAP32[$$pre$phi$iZ2D >> 2] = $231;
      HEAP32[$$0189$i + 12 >> 2] = $231;
      HEAP32[$231 + 8 >> 2] = $$0189$i;
      HEAP32[$231 + 12 >> 2] = $234;
     }
     HEAP32[7074] = $$0193$lcssa$i;
     HEAP32[7077] = $157;
    }
    $$0 = $$0192$lcssa$i + 8 | 0;
    STACKTOP = sp;
    return $$0 | 0;
   }
  } else $$0197 = $6;
 } else if ($0 >>> 0 > 4294967231) $$0197 = -1; else {
  $248 = $0 + 11 | 0;
  $249 = $248 & -8;
  $250 = HEAP32[7073] | 0;
  if (!$250) $$0197 = $249; else {
   $252 = 0 - $249 | 0;
   $253 = $248 >>> 8;
   if (!$253) $$0358$i = 0; else if ($249 >>> 0 > 16777215) $$0358$i = 31; else {
    $258 = ($253 + 1048320 | 0) >>> 16 & 8;
    $259 = $253 << $258;
    $262 = ($259 + 520192 | 0) >>> 16 & 4;
    $264 = $259 << $262;
    $267 = ($264 + 245760 | 0) >>> 16 & 2;
    $272 = 14 - ($262 | $258 | $267) + ($264 << $267 >>> 15) | 0;
    $$0358$i = $249 >>> ($272 + 7 | 0) & 1 | $272 << 1;
   }
   $279 = HEAP32[28592 + ($$0358$i << 2) >> 2] | 0;
   L117 : do if (!$279) {
    $$2355$i = 0;
    $$3$i201 = 0;
    $$3350$i = $252;
    label = 81;
   } else {
    $$0342$i = 0;
    $$0347$i = $252;
    $$0353$i = $279;
    $$0359$i = $249 << (($$0358$i | 0) == 31 ? 0 : 25 - ($$0358$i >>> 1) | 0);
    $$0362$i = 0;
    while (1) {
     $289 = (HEAP32[$$0353$i + 4 >> 2] & -8) - $249 | 0;
     if ($289 >>> 0 < $$0347$i >>> 0) if (!$289) {
      $$415$i = $$0353$i;
      $$435114$i = 0;
      $$435713$i = $$0353$i;
      label = 85;
      break L117;
     } else {
      $$1343$i = $$0353$i;
      $$1348$i = $289;
     } else {
      $$1343$i = $$0342$i;
      $$1348$i = $$0347$i;
     }
     $293 = HEAP32[$$0353$i + 20 >> 2] | 0;
     $$0353$i = HEAP32[$$0353$i + 16 + ($$0359$i >>> 31 << 2) >> 2] | 0;
     $$1363$i = ($293 | 0) == 0 | ($293 | 0) == ($$0353$i | 0) ? $$0362$i : $293;
     $299 = ($$0353$i | 0) == 0;
     if ($299) {
      $$2355$i = $$1363$i;
      $$3$i201 = $$1343$i;
      $$3350$i = $$1348$i;
      label = 81;
      break;
     } else {
      $$0342$i = $$1343$i;
      $$0347$i = $$1348$i;
      $$0359$i = $$0359$i << (($299 ^ 1) & 1);
      $$0362$i = $$1363$i;
     }
    }
   } while (0);
   if ((label | 0) == 81) {
    if (($$2355$i | 0) == 0 & ($$3$i201 | 0) == 0) {
     $303 = 2 << $$0358$i;
     $306 = $250 & ($303 | 0 - $303);
     if (!$306) {
      $$0197 = $249;
      break;
     }
     $310 = ($306 & 0 - $306) + -1 | 0;
     $312 = $310 >>> 12 & 16;
     $313 = $310 >>> $312;
     $315 = $313 >>> 5 & 8;
     $317 = $313 >>> $315;
     $319 = $317 >>> 2 & 4;
     $321 = $317 >>> $319;
     $323 = $321 >>> 1 & 2;
     $325 = $321 >>> $323;
     $327 = $325 >>> 1 & 1;
     $$4$ph$i = 0;
     $$4357$ph$i = HEAP32[28592 + (($315 | $312 | $319 | $323 | $327) + ($325 >>> $327) << 2) >> 2] | 0;
    } else {
     $$4$ph$i = $$3$i201;
     $$4357$ph$i = $$2355$i;
    }
    if (!$$4357$ph$i) {
     $$4$lcssa$i = $$4$ph$i;
     $$4351$lcssa$i = $$3350$i;
    } else {
     $$415$i = $$4$ph$i;
     $$435114$i = $$3350$i;
     $$435713$i = $$4357$ph$i;
     label = 85;
    }
   }
   if ((label | 0) == 85) while (1) {
    label = 0;
    $337 = (HEAP32[$$435713$i + 4 >> 2] & -8) - $249 | 0;
    $338 = $337 >>> 0 < $$435114$i >>> 0;
    $$$4351$i = $338 ? $337 : $$435114$i;
    $$4357$$4$i = $338 ? $$435713$i : $$415$i;
    $$435713$i = HEAP32[$$435713$i + 16 + (((HEAP32[$$435713$i + 16 >> 2] | 0) == 0 & 1) << 2) >> 2] | 0;
    if (!$$435713$i) {
     $$4$lcssa$i = $$4357$$4$i;
     $$4351$lcssa$i = $$$4351$i;
     break;
    } else {
     $$415$i = $$4357$$4$i;
     $$435114$i = $$$4351$i;
     label = 85;
    }
   }
   if (!$$4$lcssa$i) $$0197 = $249; else if ($$4351$lcssa$i >>> 0 < ((HEAP32[7074] | 0) - $249 | 0) >>> 0) {
    $348 = HEAP32[7076] | 0;
    if ($$4$lcssa$i >>> 0 < $348 >>> 0) _abort();
    $350 = $$4$lcssa$i + $249 | 0;
    if ($$4$lcssa$i >>> 0 >= $350 >>> 0) _abort();
    $353 = HEAP32[$$4$lcssa$i + 24 >> 2] | 0;
    $355 = HEAP32[$$4$lcssa$i + 12 >> 2] | 0;
    do if (($355 | 0) == ($$4$lcssa$i | 0)) {
     $366 = $$4$lcssa$i + 20 | 0;
     $367 = HEAP32[$366 >> 2] | 0;
     if (!$367) {
      $369 = $$4$lcssa$i + 16 | 0;
      $370 = HEAP32[$369 >> 2] | 0;
      if (!$370) {
       $$3372$i = 0;
       break;
      } else {
       $$1370$i = $370;
       $$1374$i = $369;
      }
     } else {
      $$1370$i = $367;
      $$1374$i = $366;
     }
     while (1) {
      $372 = $$1370$i + 20 | 0;
      $373 = HEAP32[$372 >> 2] | 0;
      if ($373 | 0) {
       $$1370$i = $373;
       $$1374$i = $372;
       continue;
      }
      $375 = $$1370$i + 16 | 0;
      $376 = HEAP32[$375 >> 2] | 0;
      if (!$376) break; else {
       $$1370$i = $376;
       $$1374$i = $375;
      }
     }
     if ($$1374$i >>> 0 < $348 >>> 0) _abort(); else {
      HEAP32[$$1374$i >> 2] = 0;
      $$3372$i = $$1370$i;
      break;
     }
    } else {
     $358 = HEAP32[$$4$lcssa$i + 8 >> 2] | 0;
     if ($358 >>> 0 < $348 >>> 0) _abort();
     $360 = $358 + 12 | 0;
     if ((HEAP32[$360 >> 2] | 0) != ($$4$lcssa$i | 0)) _abort();
     $363 = $355 + 8 | 0;
     if ((HEAP32[$363 >> 2] | 0) == ($$4$lcssa$i | 0)) {
      HEAP32[$360 >> 2] = $355;
      HEAP32[$363 >> 2] = $358;
      $$3372$i = $355;
      break;
     } else _abort();
    } while (0);
    L164 : do if (!$353) $470 = $250; else {
     $381 = HEAP32[$$4$lcssa$i + 28 >> 2] | 0;
     $382 = 28592 + ($381 << 2) | 0;
     do if (($$4$lcssa$i | 0) == (HEAP32[$382 >> 2] | 0)) {
      HEAP32[$382 >> 2] = $$3372$i;
      if (!$$3372$i) {
       $387 = $250 & ~(1 << $381);
       HEAP32[7073] = $387;
       $470 = $387;
       break L164;
      }
     } else if ($353 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort(); else {
      HEAP32[$353 + 16 + (((HEAP32[$353 + 16 >> 2] | 0) != ($$4$lcssa$i | 0) & 1) << 2) >> 2] = $$3372$i;
      if (!$$3372$i) {
       $470 = $250;
       break L164;
      } else break;
     } while (0);
     $394 = HEAP32[7076] | 0;
     if ($$3372$i >>> 0 < $394 >>> 0) _abort();
     HEAP32[$$3372$i + 24 >> 2] = $353;
     $398 = HEAP32[$$4$lcssa$i + 16 >> 2] | 0;
     do if ($398 | 0) if ($398 >>> 0 < $394 >>> 0) _abort(); else {
      HEAP32[$$3372$i + 16 >> 2] = $398;
      HEAP32[$398 + 24 >> 2] = $$3372$i;
      break;
     } while (0);
     $404 = HEAP32[$$4$lcssa$i + 20 >> 2] | 0;
     if (!$404) $470 = $250; else if ($404 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort(); else {
      HEAP32[$$3372$i + 20 >> 2] = $404;
      HEAP32[$404 + 24 >> 2] = $$3372$i;
      $470 = $250;
      break;
     }
    } while (0);
    do if ($$4351$lcssa$i >>> 0 < 16) {
     $411 = $$4351$lcssa$i + $249 | 0;
     HEAP32[$$4$lcssa$i + 4 >> 2] = $411 | 3;
     $415 = $$4$lcssa$i + $411 + 4 | 0;
     HEAP32[$415 >> 2] = HEAP32[$415 >> 2] | 1;
    } else {
     HEAP32[$$4$lcssa$i + 4 >> 2] = $249 | 3;
     HEAP32[$350 + 4 >> 2] = $$4351$lcssa$i | 1;
     HEAP32[$350 + $$4351$lcssa$i >> 2] = $$4351$lcssa$i;
     $423 = $$4351$lcssa$i >>> 3;
     if ($$4351$lcssa$i >>> 0 < 256) {
      $426 = 28328 + ($423 << 1 << 2) | 0;
      $427 = HEAP32[7072] | 0;
      $428 = 1 << $423;
      if (!($427 & $428)) {
       HEAP32[7072] = $427 | $428;
       $$0368$i = $426;
       $$pre$phi$i211Z2D = $426 + 8 | 0;
      } else {
       $432 = $426 + 8 | 0;
       $433 = HEAP32[$432 >> 2] | 0;
       if ($433 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort(); else {
        $$0368$i = $433;
        $$pre$phi$i211Z2D = $432;
       }
      }
      HEAP32[$$pre$phi$i211Z2D >> 2] = $350;
      HEAP32[$$0368$i + 12 >> 2] = $350;
      HEAP32[$350 + 8 >> 2] = $$0368$i;
      HEAP32[$350 + 12 >> 2] = $426;
      break;
     }
     $439 = $$4351$lcssa$i >>> 8;
     if (!$439) $$0361$i = 0; else if ($$4351$lcssa$i >>> 0 > 16777215) $$0361$i = 31; else {
      $444 = ($439 + 1048320 | 0) >>> 16 & 8;
      $445 = $439 << $444;
      $448 = ($445 + 520192 | 0) >>> 16 & 4;
      $450 = $445 << $448;
      $453 = ($450 + 245760 | 0) >>> 16 & 2;
      $458 = 14 - ($448 | $444 | $453) + ($450 << $453 >>> 15) | 0;
      $$0361$i = $$4351$lcssa$i >>> ($458 + 7 | 0) & 1 | $458 << 1;
     }
     $464 = 28592 + ($$0361$i << 2) | 0;
     HEAP32[$350 + 28 >> 2] = $$0361$i;
     $466 = $350 + 16 | 0;
     HEAP32[$466 + 4 >> 2] = 0;
     HEAP32[$466 >> 2] = 0;
     $468 = 1 << $$0361$i;
     if (!($470 & $468)) {
      HEAP32[7073] = $470 | $468;
      HEAP32[$464 >> 2] = $350;
      HEAP32[$350 + 24 >> 2] = $464;
      HEAP32[$350 + 12 >> 2] = $350;
      HEAP32[$350 + 8 >> 2] = $350;
      break;
     }
     $$0344$i = $$4351$lcssa$i << (($$0361$i | 0) == 31 ? 0 : 25 - ($$0361$i >>> 1) | 0);
     $$0345$i = HEAP32[$464 >> 2] | 0;
     while (1) {
      if ((HEAP32[$$0345$i + 4 >> 2] & -8 | 0) == ($$4351$lcssa$i | 0)) {
       label = 139;
       break;
      }
      $487 = $$0345$i + 16 + ($$0344$i >>> 31 << 2) | 0;
      $489 = HEAP32[$487 >> 2] | 0;
      if (!$489) {
       label = 136;
       break;
      } else {
       $$0344$i = $$0344$i << 1;
       $$0345$i = $489;
      }
     }
     if ((label | 0) == 136) if ($487 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort(); else {
      HEAP32[$487 >> 2] = $350;
      HEAP32[$350 + 24 >> 2] = $$0345$i;
      HEAP32[$350 + 12 >> 2] = $350;
      HEAP32[$350 + 8 >> 2] = $350;
      break;
     } else if ((label | 0) == 139) {
      $496 = $$0345$i + 8 | 0;
      $497 = HEAP32[$496 >> 2] | 0;
      $498 = HEAP32[7076] | 0;
      if ($497 >>> 0 >= $498 >>> 0 & $$0345$i >>> 0 >= $498 >>> 0) {
       HEAP32[$497 + 12 >> 2] = $350;
       HEAP32[$496 >> 2] = $350;
       HEAP32[$350 + 8 >> 2] = $497;
       HEAP32[$350 + 12 >> 2] = $$0345$i;
       HEAP32[$350 + 24 >> 2] = 0;
       break;
      } else _abort();
     }
    } while (0);
    $$0 = $$4$lcssa$i + 8 | 0;
    STACKTOP = sp;
    return $$0 | 0;
   } else $$0197 = $249;
  }
 } while (0);
 $506 = HEAP32[7074] | 0;
 if ($506 >>> 0 >= $$0197 >>> 0) {
  $508 = $506 - $$0197 | 0;
  $509 = HEAP32[7077] | 0;
  if ($508 >>> 0 > 15) {
   $511 = $509 + $$0197 | 0;
   HEAP32[7077] = $511;
   HEAP32[7074] = $508;
   HEAP32[$511 + 4 >> 2] = $508 | 1;
   HEAP32[$511 + $508 >> 2] = $508;
   HEAP32[$509 + 4 >> 2] = $$0197 | 3;
  } else {
   HEAP32[7074] = 0;
   HEAP32[7077] = 0;
   HEAP32[$509 + 4 >> 2] = $506 | 3;
   $520 = $509 + $506 + 4 | 0;
   HEAP32[$520 >> 2] = HEAP32[$520 >> 2] | 1;
  }
  $$0 = $509 + 8 | 0;
  STACKTOP = sp;
  return $$0 | 0;
 }
 $524 = HEAP32[7075] | 0;
 if ($524 >>> 0 > $$0197 >>> 0) {
  $526 = $524 - $$0197 | 0;
  HEAP32[7075] = $526;
  $527 = HEAP32[7078] | 0;
  $528 = $527 + $$0197 | 0;
  HEAP32[7078] = $528;
  HEAP32[$528 + 4 >> 2] = $526 | 1;
  HEAP32[$527 + 4 >> 2] = $$0197 | 3;
  $$0 = $527 + 8 | 0;
  STACKTOP = sp;
  return $$0 | 0;
 }
 if (!(HEAP32[7190] | 0)) {
  HEAP32[7192] = 4096;
  HEAP32[7191] = 4096;
  HEAP32[7193] = -1;
  HEAP32[7194] = -1;
  HEAP32[7195] = 0;
  HEAP32[7183] = 0;
  $538 = $1 & -16 ^ 1431655768;
  HEAP32[$1 >> 2] = $538;
  HEAP32[7190] = $538;
  $542 = 4096;
 } else $542 = HEAP32[7192] | 0;
 $539 = $$0197 + 48 | 0;
 $540 = $$0197 + 47 | 0;
 $541 = $542 + $540 | 0;
 $543 = 0 - $542 | 0;
 $544 = $541 & $543;
 if ($544 >>> 0 <= $$0197 >>> 0) {
  $$0 = 0;
  STACKTOP = sp;
  return $$0 | 0;
 }
 $546 = HEAP32[7182] | 0;
 if ($546 | 0) {
  $548 = HEAP32[7180] | 0;
  $549 = $548 + $544 | 0;
  if ($549 >>> 0 <= $548 >>> 0 | $549 >>> 0 > $546 >>> 0) {
   $$0 = 0;
   STACKTOP = sp;
   return $$0 | 0;
  }
 }
 L244 : do if (!(HEAP32[7183] & 4)) {
  $555 = HEAP32[7078] | 0;
  L246 : do if (!$555) label = 163; else {
   $$0$i$i = 28736;
   while (1) {
    $557 = HEAP32[$$0$i$i >> 2] | 0;
    if ($557 >>> 0 <= $555 >>> 0) {
     $559 = $$0$i$i + 4 | 0;
     if (($557 + (HEAP32[$559 >> 2] | 0) | 0) >>> 0 > $555 >>> 0) break;
    }
    $564 = HEAP32[$$0$i$i + 8 >> 2] | 0;
    if (!$564) {
     label = 163;
     break L246;
    } else $$0$i$i = $564;
   }
   $589 = $541 - $524 & $543;
   if ($589 >>> 0 < 2147483647) {
    $591 = _sbrk($589 | 0) | 0;
    if (($591 | 0) == ((HEAP32[$$0$i$i >> 2] | 0) + (HEAP32[$559 >> 2] | 0) | 0)) if (($591 | 0) == (-1 | 0)) $$2234253237$i = $589; else {
     $$723948$i = $589;
     $$749$i = $591;
     break L244;
    } else {
     $$2247$ph$i = $591;
     $$2253$ph$i = $589;
     label = 171;
    }
   } else $$2234253237$i = 0;
  } while (0);
  do if ((label | 0) == 163) {
   $566 = _sbrk(0) | 0;
   if (($566 | 0) == (-1 | 0)) $$2234253237$i = 0; else {
    $568 = $566;
    $569 = HEAP32[7191] | 0;
    $570 = $569 + -1 | 0;
    $$$i = (($570 & $568 | 0) == 0 ? 0 : ($570 + $568 & 0 - $569) - $568 | 0) + $544 | 0;
    $578 = HEAP32[7180] | 0;
    $579 = $$$i + $578 | 0;
    if ($$$i >>> 0 > $$0197 >>> 0 & $$$i >>> 0 < 2147483647) {
     $582 = HEAP32[7182] | 0;
     if ($582 | 0) if ($579 >>> 0 <= $578 >>> 0 | $579 >>> 0 > $582 >>> 0) {
      $$2234253237$i = 0;
      break;
     }
     $586 = _sbrk($$$i | 0) | 0;
     if (($586 | 0) == ($566 | 0)) {
      $$723948$i = $$$i;
      $$749$i = $566;
      break L244;
     } else {
      $$2247$ph$i = $586;
      $$2253$ph$i = $$$i;
      label = 171;
     }
    } else $$2234253237$i = 0;
   }
  } while (0);
  do if ((label | 0) == 171) {
   $597 = 0 - $$2253$ph$i | 0;
   if (!($539 >>> 0 > $$2253$ph$i >>> 0 & ($$2253$ph$i >>> 0 < 2147483647 & ($$2247$ph$i | 0) != (-1 | 0)))) if (($$2247$ph$i | 0) == (-1 | 0)) {
    $$2234253237$i = 0;
    break;
   } else {
    $$723948$i = $$2253$ph$i;
    $$749$i = $$2247$ph$i;
    break L244;
   }
   $601 = HEAP32[7192] | 0;
   $605 = $540 - $$2253$ph$i + $601 & 0 - $601;
   if ($605 >>> 0 >= 2147483647) {
    $$723948$i = $$2253$ph$i;
    $$749$i = $$2247$ph$i;
    break L244;
   }
   if ((_sbrk($605 | 0) | 0) == (-1 | 0)) {
    _sbrk($597 | 0) | 0;
    $$2234253237$i = 0;
    break;
   } else {
    $$723948$i = $605 + $$2253$ph$i | 0;
    $$749$i = $$2247$ph$i;
    break L244;
   }
  } while (0);
  HEAP32[7183] = HEAP32[7183] | 4;
  $$4236$i = $$2234253237$i;
  label = 178;
 } else {
  $$4236$i = 0;
  label = 178;
 } while (0);
 if ((label | 0) == 178) {
  if ($544 >>> 0 >= 2147483647) {
   $$0 = 0;
   STACKTOP = sp;
   return $$0 | 0;
  }
  $614 = _sbrk($544 | 0) | 0;
  $615 = _sbrk(0) | 0;
  $621 = $615 - $614 | 0;
  $623 = $621 >>> 0 > ($$0197 + 40 | 0) >>> 0;
  if (($614 | 0) == (-1 | 0) | $623 ^ 1 | $614 >>> 0 < $615 >>> 0 & (($614 | 0) != (-1 | 0) & ($615 | 0) != (-1 | 0)) ^ 1) {
   $$0 = 0;
   STACKTOP = sp;
   return $$0 | 0;
  } else {
   $$723948$i = $623 ? $621 : $$4236$i;
   $$749$i = $614;
  }
 }
 $627 = (HEAP32[7180] | 0) + $$723948$i | 0;
 HEAP32[7180] = $627;
 if ($627 >>> 0 > (HEAP32[7181] | 0) >>> 0) HEAP32[7181] = $627;
 $630 = HEAP32[7078] | 0;
 do if (!$630) {
  $632 = HEAP32[7076] | 0;
  if (($632 | 0) == 0 | $$749$i >>> 0 < $632 >>> 0) HEAP32[7076] = $$749$i;
  HEAP32[7184] = $$749$i;
  HEAP32[7185] = $$723948$i;
  HEAP32[7187] = 0;
  HEAP32[7081] = HEAP32[7190];
  HEAP32[7080] = -1;
  $$01$i$i = 0;
  do {
   $637 = 28328 + ($$01$i$i << 1 << 2) | 0;
   HEAP32[$637 + 12 >> 2] = $637;
   HEAP32[$637 + 8 >> 2] = $637;
   $$01$i$i = $$01$i$i + 1 | 0;
  } while (($$01$i$i | 0) != 32);
  $643 = $$749$i + 8 | 0;
  $648 = ($643 & 7 | 0) == 0 ? 0 : 0 - $643 & 7;
  $649 = $$749$i + $648 | 0;
  $650 = $$723948$i + -40 - $648 | 0;
  HEAP32[7078] = $649;
  HEAP32[7075] = $650;
  HEAP32[$649 + 4 >> 2] = $650 | 1;
  HEAP32[$649 + $650 + 4 >> 2] = 40;
  HEAP32[7079] = HEAP32[7194];
 } else {
  $$024371$i = 28736;
  while (1) {
   $656 = HEAP32[$$024371$i >> 2] | 0;
   $657 = $$024371$i + 4 | 0;
   $658 = HEAP32[$657 >> 2] | 0;
   if (($$749$i | 0) == ($656 + $658 | 0)) {
    label = 190;
    break;
   }
   $662 = HEAP32[$$024371$i + 8 >> 2] | 0;
   if (!$662) break; else $$024371$i = $662;
  }
  if ((label | 0) == 190) if (!(HEAP32[$$024371$i + 12 >> 2] & 8)) if ($630 >>> 0 < $$749$i >>> 0 & $630 >>> 0 >= $656 >>> 0) {
   HEAP32[$657 >> 2] = $658 + $$723948$i;
   $673 = $630 + 8 | 0;
   $678 = ($673 & 7 | 0) == 0 ? 0 : 0 - $673 & 7;
   $679 = $630 + $678 | 0;
   $681 = (HEAP32[7075] | 0) + ($$723948$i - $678) | 0;
   HEAP32[7078] = $679;
   HEAP32[7075] = $681;
   HEAP32[$679 + 4 >> 2] = $681 | 1;
   HEAP32[$679 + $681 + 4 >> 2] = 40;
   HEAP32[7079] = HEAP32[7194];
   break;
  }
  $687 = HEAP32[7076] | 0;
  if ($$749$i >>> 0 < $687 >>> 0) {
   HEAP32[7076] = $$749$i;
   $752 = $$749$i;
  } else $752 = $687;
  $689 = $$749$i + $$723948$i | 0;
  $$124470$i = 28736;
  while (1) {
   if ((HEAP32[$$124470$i >> 2] | 0) == ($689 | 0)) {
    label = 198;
    break;
   }
   $693 = HEAP32[$$124470$i + 8 >> 2] | 0;
   if (!$693) break; else $$124470$i = $693;
  }
  if ((label | 0) == 198) if (!(HEAP32[$$124470$i + 12 >> 2] & 8)) {
   HEAP32[$$124470$i >> 2] = $$749$i;
   $699 = $$124470$i + 4 | 0;
   HEAP32[$699 >> 2] = (HEAP32[$699 >> 2] | 0) + $$723948$i;
   $703 = $$749$i + 8 | 0;
   $709 = $$749$i + (($703 & 7 | 0) == 0 ? 0 : 0 - $703 & 7) | 0;
   $711 = $689 + 8 | 0;
   $717 = $689 + (($711 & 7 | 0) == 0 ? 0 : 0 - $711 & 7) | 0;
   $721 = $709 + $$0197 | 0;
   $722 = $717 - $709 - $$0197 | 0;
   HEAP32[$709 + 4 >> 2] = $$0197 | 3;
   do if (($717 | 0) == ($630 | 0)) {
    $727 = (HEAP32[7075] | 0) + $722 | 0;
    HEAP32[7075] = $727;
    HEAP32[7078] = $721;
    HEAP32[$721 + 4 >> 2] = $727 | 1;
   } else {
    if (($717 | 0) == (HEAP32[7077] | 0)) {
     $733 = (HEAP32[7074] | 0) + $722 | 0;
     HEAP32[7074] = $733;
     HEAP32[7077] = $721;
     HEAP32[$721 + 4 >> 2] = $733 | 1;
     HEAP32[$721 + $733 >> 2] = $733;
     break;
    }
    $738 = HEAP32[$717 + 4 >> 2] | 0;
    if (($738 & 3 | 0) == 1) {
     $741 = $738 & -8;
     $742 = $738 >>> 3;
     L316 : do if ($738 >>> 0 < 256) {
      $745 = HEAP32[$717 + 8 >> 2] | 0;
      $747 = HEAP32[$717 + 12 >> 2] | 0;
      $749 = 28328 + ($742 << 1 << 2) | 0;
      do if (($745 | 0) != ($749 | 0)) {
       if ($745 >>> 0 < $752 >>> 0) _abort();
       if ((HEAP32[$745 + 12 >> 2] | 0) == ($717 | 0)) break;
       _abort();
      } while (0);
      if (($747 | 0) == ($745 | 0)) {
       HEAP32[7072] = HEAP32[7072] & ~(1 << $742);
       break;
      }
      do if (($747 | 0) == ($749 | 0)) $$pre$phi11$i$iZ2D = $747 + 8 | 0; else {
       if ($747 >>> 0 < $752 >>> 0) _abort();
       $763 = $747 + 8 | 0;
       if ((HEAP32[$763 >> 2] | 0) == ($717 | 0)) {
        $$pre$phi11$i$iZ2D = $763;
        break;
       }
       _abort();
      } while (0);
      HEAP32[$745 + 12 >> 2] = $747;
      HEAP32[$$pre$phi11$i$iZ2D >> 2] = $745;
     } else {
      $768 = HEAP32[$717 + 24 >> 2] | 0;
      $770 = HEAP32[$717 + 12 >> 2] | 0;
      do if (($770 | 0) == ($717 | 0)) {
       $781 = $717 + 16 | 0;
       $782 = $781 + 4 | 0;
       $783 = HEAP32[$782 >> 2] | 0;
       if (!$783) {
        $785 = HEAP32[$781 >> 2] | 0;
        if (!$785) {
         $$3$i$i = 0;
         break;
        } else {
         $$1291$i$i = $785;
         $$1293$i$i = $781;
        }
       } else {
        $$1291$i$i = $783;
        $$1293$i$i = $782;
       }
       while (1) {
        $787 = $$1291$i$i + 20 | 0;
        $788 = HEAP32[$787 >> 2] | 0;
        if ($788 | 0) {
         $$1291$i$i = $788;
         $$1293$i$i = $787;
         continue;
        }
        $790 = $$1291$i$i + 16 | 0;
        $791 = HEAP32[$790 >> 2] | 0;
        if (!$791) break; else {
         $$1291$i$i = $791;
         $$1293$i$i = $790;
        }
       }
       if ($$1293$i$i >>> 0 < $752 >>> 0) _abort(); else {
        HEAP32[$$1293$i$i >> 2] = 0;
        $$3$i$i = $$1291$i$i;
        break;
       }
      } else {
       $773 = HEAP32[$717 + 8 >> 2] | 0;
       if ($773 >>> 0 < $752 >>> 0) _abort();
       $775 = $773 + 12 | 0;
       if ((HEAP32[$775 >> 2] | 0) != ($717 | 0)) _abort();
       $778 = $770 + 8 | 0;
       if ((HEAP32[$778 >> 2] | 0) == ($717 | 0)) {
        HEAP32[$775 >> 2] = $770;
        HEAP32[$778 >> 2] = $773;
        $$3$i$i = $770;
        break;
       } else _abort();
      } while (0);
      if (!$768) break;
      $796 = HEAP32[$717 + 28 >> 2] | 0;
      $797 = 28592 + ($796 << 2) | 0;
      do if (($717 | 0) == (HEAP32[$797 >> 2] | 0)) {
       HEAP32[$797 >> 2] = $$3$i$i;
       if ($$3$i$i | 0) break;
       HEAP32[7073] = HEAP32[7073] & ~(1 << $796);
       break L316;
      } else if ($768 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort(); else {
       HEAP32[$768 + 16 + (((HEAP32[$768 + 16 >> 2] | 0) != ($717 | 0) & 1) << 2) >> 2] = $$3$i$i;
       if (!$$3$i$i) break L316; else break;
      } while (0);
      $810 = HEAP32[7076] | 0;
      if ($$3$i$i >>> 0 < $810 >>> 0) _abort();
      HEAP32[$$3$i$i + 24 >> 2] = $768;
      $813 = $717 + 16 | 0;
      $814 = HEAP32[$813 >> 2] | 0;
      do if ($814 | 0) if ($814 >>> 0 < $810 >>> 0) _abort(); else {
       HEAP32[$$3$i$i + 16 >> 2] = $814;
       HEAP32[$814 + 24 >> 2] = $$3$i$i;
       break;
      } while (0);
      $820 = HEAP32[$813 + 4 >> 2] | 0;
      if (!$820) break;
      if ($820 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort(); else {
       HEAP32[$$3$i$i + 20 >> 2] = $820;
       HEAP32[$820 + 24 >> 2] = $$3$i$i;
       break;
      }
     } while (0);
     $$0$i18$i = $717 + $741 | 0;
     $$0287$i$i = $741 + $722 | 0;
    } else {
     $$0$i18$i = $717;
     $$0287$i$i = $722;
    }
    $828 = $$0$i18$i + 4 | 0;
    HEAP32[$828 >> 2] = HEAP32[$828 >> 2] & -2;
    HEAP32[$721 + 4 >> 2] = $$0287$i$i | 1;
    HEAP32[$721 + $$0287$i$i >> 2] = $$0287$i$i;
    $834 = $$0287$i$i >>> 3;
    if ($$0287$i$i >>> 0 < 256) {
     $837 = 28328 + ($834 << 1 << 2) | 0;
     $838 = HEAP32[7072] | 0;
     $839 = 1 << $834;
     do if (!($838 & $839)) {
      HEAP32[7072] = $838 | $839;
      $$0295$i$i = $837;
      $$pre$phi$i20$iZ2D = $837 + 8 | 0;
     } else {
      $843 = $837 + 8 | 0;
      $844 = HEAP32[$843 >> 2] | 0;
      if ($844 >>> 0 >= (HEAP32[7076] | 0) >>> 0) {
       $$0295$i$i = $844;
       $$pre$phi$i20$iZ2D = $843;
       break;
      }
      _abort();
     } while (0);
     HEAP32[$$pre$phi$i20$iZ2D >> 2] = $721;
     HEAP32[$$0295$i$i + 12 >> 2] = $721;
     HEAP32[$721 + 8 >> 2] = $$0295$i$i;
     HEAP32[$721 + 12 >> 2] = $837;
     break;
    }
    $850 = $$0287$i$i >>> 8;
    do if (!$850) $$0296$i$i = 0; else {
     if ($$0287$i$i >>> 0 > 16777215) {
      $$0296$i$i = 31;
      break;
     }
     $855 = ($850 + 1048320 | 0) >>> 16 & 8;
     $856 = $850 << $855;
     $859 = ($856 + 520192 | 0) >>> 16 & 4;
     $861 = $856 << $859;
     $864 = ($861 + 245760 | 0) >>> 16 & 2;
     $869 = 14 - ($859 | $855 | $864) + ($861 << $864 >>> 15) | 0;
     $$0296$i$i = $$0287$i$i >>> ($869 + 7 | 0) & 1 | $869 << 1;
    } while (0);
    $875 = 28592 + ($$0296$i$i << 2) | 0;
    HEAP32[$721 + 28 >> 2] = $$0296$i$i;
    $877 = $721 + 16 | 0;
    HEAP32[$877 + 4 >> 2] = 0;
    HEAP32[$877 >> 2] = 0;
    $879 = HEAP32[7073] | 0;
    $880 = 1 << $$0296$i$i;
    if (!($879 & $880)) {
     HEAP32[7073] = $879 | $880;
     HEAP32[$875 >> 2] = $721;
     HEAP32[$721 + 24 >> 2] = $875;
     HEAP32[$721 + 12 >> 2] = $721;
     HEAP32[$721 + 8 >> 2] = $721;
     break;
    }
    $$0288$i$i = $$0287$i$i << (($$0296$i$i | 0) == 31 ? 0 : 25 - ($$0296$i$i >>> 1) | 0);
    $$0289$i$i = HEAP32[$875 >> 2] | 0;
    while (1) {
     if ((HEAP32[$$0289$i$i + 4 >> 2] & -8 | 0) == ($$0287$i$i | 0)) {
      label = 265;
      break;
     }
     $898 = $$0289$i$i + 16 + ($$0288$i$i >>> 31 << 2) | 0;
     $900 = HEAP32[$898 >> 2] | 0;
     if (!$900) {
      label = 262;
      break;
     } else {
      $$0288$i$i = $$0288$i$i << 1;
      $$0289$i$i = $900;
     }
    }
    if ((label | 0) == 262) if ($898 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort(); else {
     HEAP32[$898 >> 2] = $721;
     HEAP32[$721 + 24 >> 2] = $$0289$i$i;
     HEAP32[$721 + 12 >> 2] = $721;
     HEAP32[$721 + 8 >> 2] = $721;
     break;
    } else if ((label | 0) == 265) {
     $907 = $$0289$i$i + 8 | 0;
     $908 = HEAP32[$907 >> 2] | 0;
     $909 = HEAP32[7076] | 0;
     if ($908 >>> 0 >= $909 >>> 0 & $$0289$i$i >>> 0 >= $909 >>> 0) {
      HEAP32[$908 + 12 >> 2] = $721;
      HEAP32[$907 >> 2] = $721;
      HEAP32[$721 + 8 >> 2] = $908;
      HEAP32[$721 + 12 >> 2] = $$0289$i$i;
      HEAP32[$721 + 24 >> 2] = 0;
      break;
     } else _abort();
    }
   } while (0);
   $$0 = $709 + 8 | 0;
   STACKTOP = sp;
   return $$0 | 0;
  }
  $$0$i$i$i = 28736;
  while (1) {
   $916 = HEAP32[$$0$i$i$i >> 2] | 0;
   if ($916 >>> 0 <= $630 >>> 0) {
    $920 = $916 + (HEAP32[$$0$i$i$i + 4 >> 2] | 0) | 0;
    if ($920 >>> 0 > $630 >>> 0) break;
   }
   $$0$i$i$i = HEAP32[$$0$i$i$i + 8 >> 2] | 0;
  }
  $924 = $920 + -47 | 0;
  $926 = $924 + 8 | 0;
  $932 = $924 + (($926 & 7 | 0) == 0 ? 0 : 0 - $926 & 7) | 0;
  $933 = $630 + 16 | 0;
  $935 = $932 >>> 0 < $933 >>> 0 ? $630 : $932;
  $936 = $935 + 8 | 0;
  $940 = $$749$i + 8 | 0;
  $945 = ($940 & 7 | 0) == 0 ? 0 : 0 - $940 & 7;
  $946 = $$749$i + $945 | 0;
  $947 = $$723948$i + -40 - $945 | 0;
  HEAP32[7078] = $946;
  HEAP32[7075] = $947;
  HEAP32[$946 + 4 >> 2] = $947 | 1;
  HEAP32[$946 + $947 + 4 >> 2] = 40;
  HEAP32[7079] = HEAP32[7194];
  $953 = $935 + 4 | 0;
  HEAP32[$953 >> 2] = 27;
  HEAP32[$936 >> 2] = HEAP32[7184];
  HEAP32[$936 + 4 >> 2] = HEAP32[7185];
  HEAP32[$936 + 8 >> 2] = HEAP32[7186];
  HEAP32[$936 + 12 >> 2] = HEAP32[7187];
  HEAP32[7184] = $$749$i;
  HEAP32[7185] = $$723948$i;
  HEAP32[7187] = 0;
  HEAP32[7186] = $936;
  $955 = $935 + 24 | 0;
  do {
   $955$looptemp = $955;
   $955 = $955 + 4 | 0;
   HEAP32[$955 >> 2] = 7;
  } while (($955$looptemp + 8 | 0) >>> 0 < $920 >>> 0);
  if (($935 | 0) != ($630 | 0)) {
   $961 = $935 - $630 | 0;
   HEAP32[$953 >> 2] = HEAP32[$953 >> 2] & -2;
   HEAP32[$630 + 4 >> 2] = $961 | 1;
   HEAP32[$935 >> 2] = $961;
   $966 = $961 >>> 3;
   if ($961 >>> 0 < 256) {
    $969 = 28328 + ($966 << 1 << 2) | 0;
    $970 = HEAP32[7072] | 0;
    $971 = 1 << $966;
    if (!($970 & $971)) {
     HEAP32[7072] = $970 | $971;
     $$0211$i$i = $969;
     $$pre$phi$i$iZ2D = $969 + 8 | 0;
    } else {
     $975 = $969 + 8 | 0;
     $976 = HEAP32[$975 >> 2] | 0;
     if ($976 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort(); else {
      $$0211$i$i = $976;
      $$pre$phi$i$iZ2D = $975;
     }
    }
    HEAP32[$$pre$phi$i$iZ2D >> 2] = $630;
    HEAP32[$$0211$i$i + 12 >> 2] = $630;
    HEAP32[$630 + 8 >> 2] = $$0211$i$i;
    HEAP32[$630 + 12 >> 2] = $969;
    break;
   }
   $982 = $961 >>> 8;
   if (!$982) $$0212$i$i = 0; else if ($961 >>> 0 > 16777215) $$0212$i$i = 31; else {
    $987 = ($982 + 1048320 | 0) >>> 16 & 8;
    $988 = $982 << $987;
    $991 = ($988 + 520192 | 0) >>> 16 & 4;
    $993 = $988 << $991;
    $996 = ($993 + 245760 | 0) >>> 16 & 2;
    $1001 = 14 - ($991 | $987 | $996) + ($993 << $996 >>> 15) | 0;
    $$0212$i$i = $961 >>> ($1001 + 7 | 0) & 1 | $1001 << 1;
   }
   $1007 = 28592 + ($$0212$i$i << 2) | 0;
   HEAP32[$630 + 28 >> 2] = $$0212$i$i;
   HEAP32[$630 + 20 >> 2] = 0;
   HEAP32[$933 >> 2] = 0;
   $1010 = HEAP32[7073] | 0;
   $1011 = 1 << $$0212$i$i;
   if (!($1010 & $1011)) {
    HEAP32[7073] = $1010 | $1011;
    HEAP32[$1007 >> 2] = $630;
    HEAP32[$630 + 24 >> 2] = $1007;
    HEAP32[$630 + 12 >> 2] = $630;
    HEAP32[$630 + 8 >> 2] = $630;
    break;
   }
   $$0206$i$i = $961 << (($$0212$i$i | 0) == 31 ? 0 : 25 - ($$0212$i$i >>> 1) | 0);
   $$0207$i$i = HEAP32[$1007 >> 2] | 0;
   while (1) {
    if ((HEAP32[$$0207$i$i + 4 >> 2] & -8 | 0) == ($961 | 0)) {
     label = 292;
     break;
    }
    $1029 = $$0207$i$i + 16 + ($$0206$i$i >>> 31 << 2) | 0;
    $1031 = HEAP32[$1029 >> 2] | 0;
    if (!$1031) {
     label = 289;
     break;
    } else {
     $$0206$i$i = $$0206$i$i << 1;
     $$0207$i$i = $1031;
    }
   }
   if ((label | 0) == 289) if ($1029 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort(); else {
    HEAP32[$1029 >> 2] = $630;
    HEAP32[$630 + 24 >> 2] = $$0207$i$i;
    HEAP32[$630 + 12 >> 2] = $630;
    HEAP32[$630 + 8 >> 2] = $630;
    break;
   } else if ((label | 0) == 292) {
    $1038 = $$0207$i$i + 8 | 0;
    $1039 = HEAP32[$1038 >> 2] | 0;
    $1040 = HEAP32[7076] | 0;
    if ($1039 >>> 0 >= $1040 >>> 0 & $$0207$i$i >>> 0 >= $1040 >>> 0) {
     HEAP32[$1039 + 12 >> 2] = $630;
     HEAP32[$1038 >> 2] = $630;
     HEAP32[$630 + 8 >> 2] = $1039;
     HEAP32[$630 + 12 >> 2] = $$0207$i$i;
     HEAP32[$630 + 24 >> 2] = 0;
     break;
    } else _abort();
   }
  }
 } while (0);
 $1048 = HEAP32[7075] | 0;
 if ($1048 >>> 0 <= $$0197 >>> 0) {
  $$0 = 0;
  STACKTOP = sp;
  return $$0 | 0;
 }
 $1050 = $1048 - $$0197 | 0;
 HEAP32[7075] = $1050;
 $1051 = HEAP32[7078] | 0;
 $1052 = $1051 + $$0197 | 0;
 HEAP32[7078] = $1052;
 HEAP32[$1052 + 4 >> 2] = $1050 | 1;
 HEAP32[$1051 + 4 >> 2] = $$0197 | 3;
 $$0 = $1051 + 8 | 0;
 STACKTOP = sp;
 return $$0 | 0;
}

function _opus_decode_frame($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$ = 0, $$$4275767 = 0, $$0 = 0, $$01 = 0, $$012149 = 0, $$012150 = 0, $$013 = 0, $$019 = 0, $$023 = 0, $$024651$ph = 0, $$02465170 = 0, $$02854$ph = 0, $$0285468 = 0, $$02855 = 0, $$02856147 = 0, $$02856148 = 0, $$02971 = 0, $$031 = 0, $$0328587 = 0, $$05 = 0, $$064452$ph = 0, $$06445269 = 0, $$0645 = 0, $$07 = 0, $$08 = 0, $$09 = 0, $$1 = 0, $$110 = 0, $$11572 = 0, $$120107$ph = 0, $$120107115 = 0, $$12295 = 0, $$12296 = 0, $$130102105116 = 0, $$140 = 0, $$211 = 0, $$23891 = 0, $$23892 = 0, $$297 = 0, $$298 = 0, $$3 = 0, $$33593 = 0, $$33594 = 0, $$4 = 0, $$42757$ph = 0, $$4275767 = 0, $$5 = 0, $$6 = 0, $$alloca_mul35 = 0, $$alloca_mul37 = 0, $$alloca_mul42 = 0, $$idx$val = 0, $$idx39$val = 0, $$idx40$val = 0, $$idx41$val = 0, $$idx42 = 0, $$idx43 = 0, $$sink = 0, $$sink138 = 0, $10 = 0, $105 = 0, $106 = 0, $107 = 0, $112 = 0, $117 = 0, $120 = 0, $123 = 0, $124 = 0, $127 = 0, $13 = 0, $136 = 0, $138 = 0, $140 = 0, $141 = 0, $146 = 0, $147 = 0, $15 = 0, $150 = 0, $151 = 0, $158 = 0, $159 = 0, $16 = 0, $163 = 0, $167 = 0, $17 = 0, $173 = 0, $179 = 0, $18 = 0, $19 = 0, $192 = 0, $194 = 0, $198 = 0, $20 = 0, $201 = 0, $209 = 0, $21 = 0, $211 = 0, $213 = 0, $215 = 0, $218 = 0, $220 = 0, $222 = 0, $227 = 0, $233 = 0, $235 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $248 = 0, $253 = 0, $260 = 0.0, $261 = 0, $265 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $32 = 0, $34 = 0, $41 = 0, $43 = 0, $56 = 0, $58 = 0, $6 = 0, $60 = 0, $63 = 0, $7 = 0, $70 = 0, $74 = 0, $75 = 0, $76 = 0, $8 = 0, $80 = 0, $82 = 0, $83 = 0, $85 = 0, $87 = 0, $9 = 0, $93 = 0, $vararg_buffer = 0, $vararg_buffer1 = 0, $vararg_buffer10 = 0, $vararg_buffer13 = 0, $vararg_buffer15 = 0, $vararg_buffer18 = 0, $vararg_buffer21 = 0, $vararg_buffer23 = 0, $vararg_buffer26 = 0, $vararg_buffer4 = 0, $vararg_buffer7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 $vararg_buffer26 = sp + 80 | 0;
 $vararg_buffer23 = sp + 72 | 0;
 $vararg_buffer21 = sp + 64 | 0;
 $vararg_buffer18 = sp + 56 | 0;
 $vararg_buffer15 = sp + 48 | 0;
 $vararg_buffer13 = sp + 40 | 0;
 $vararg_buffer10 = sp + 32 | 0;
 $vararg_buffer7 = sp + 24 | 0;
 $vararg_buffer4 = sp + 16 | 0;
 $vararg_buffer1 = sp + 8 | 0;
 $vararg_buffer = sp;
 $6 = sp + 96 | 0;
 $7 = sp + 92 | 0;
 $8 = sp + 88 | 0;
 $9 = sp + 144 | 0;
 $10 = sp + 84 | 0;
 HEAP32[$8 >> 2] = 0;
 $13 = $0 + (HEAP32[$0 + 4 >> 2] | 0) | 0;
 $15 = $0 + (HEAP32[$0 >> 2] | 0) | 0;
 $16 = $0 + 12 | 0;
 $17 = HEAP32[$16 >> 2] | 0;
 $18 = ($17 | 0) / 50 | 0;
 $19 = $18 >> 1;
 $20 = $18 >> 2;
 $21 = $18 >> 3;
 if (($21 | 0) > ($4 | 0)) {
  $$1 = -2;
  STACKTOP = sp;
  return $$1 | 0;
 }
 $24 = (($17 | 0) / 25 | 0) * 3 | 0;
 $$ = ($24 | 0) > ($4 | 0) ? $4 : $24;
 do if (($2 | 0) < 2) {
  $28 = HEAP32[$0 + 64 >> 2] | 0;
  $$0645 = ($$ | 0) < ($28 | 0) ? $$ : $28;
  label = 5;
 } else if (!$1) {
  $$0645 = $$;
  label = 5;
 } else {
  $56 = HEAP32[$0 + 64 >> 2] | 0;
  $58 = HEAP32[$0 + 56 >> 2] | 0;
  _ec_dec_init($6, $1, $2);
  $60 = HEAP32[$0 + 60 >> 2] | 0;
  if (($60 | 0) > 0) {
   $63 = ($60 | 0) == 1002;
   if (($58 | 0) != 1002) {
    if (!$63) {
     $$024651$ph = $1;
     $$02854$ph = $58;
     $$064452$ph = $$;
     $$42757$ph = $56;
     label = 22;
     break;
    }
    $70 = Math_imul($20, HEAP32[$0 + 8 >> 2] | 0) | 0;
    $$019 = 0;
    $$02465170 = $1;
    $$0285468 = $58;
    $$02971 = 1;
    $$06445269 = $$;
    $$11572 = $70;
    $$4275767 = $56;
    $280 = _llvm_stacksave() | 0;
    break;
   }
   if ($63) {
    $$024651$ph = $1;
    $$02854$ph = 1002;
    $$064452$ph = $$;
    $$42757$ph = $56;
    label = 22;
   } else if (!(HEAP32[$0 + 68 >> 2] | 0)) {
    $74 = Math_imul($20, HEAP32[$0 + 8 >> 2] | 0) | 0;
    $75 = _llvm_stacksave() | 0;
    $76 = STACKTOP;
    STACKTOP = STACKTOP + ((1 * ($74 << 2) | 0) + 15 & -16) | 0;
    _opus_decode_frame($0, 0, 0, $76, ($20 | 0) < ($56 | 0) ? $20 : $56, 0) | 0;
    $$019 = $76;
    $$02465170 = $1;
    $$0285468 = 1002;
    $$02971 = 1;
    $$06445269 = $$;
    $$11572 = 1;
    $$4275767 = $56;
    $280 = $75;
   } else {
    $$024651$ph = $1;
    $$02854$ph = 1002;
    $$064452$ph = $$;
    $$42757$ph = $56;
    label = 22;
   }
  } else {
   $$024651$ph = $1;
   $$02854$ph = $58;
   $$064452$ph = $$;
   $$42757$ph = $56;
   label = 22;
  }
 } while (0);
 do if ((label | 0) == 5) {
  $32 = HEAP32[$0 + 60 >> 2] | 0;
  if (!$32) {
   $34 = $0 + 8 | 0;
   $$09 = 0;
   while (1) {
    if (($$09 | 0) >= (Math_imul($$0645, HEAP32[$34 >> 2] | 0) | 0)) {
     $$1 = $$0645;
     break;
    }
    HEAPF32[$3 + ($$09 << 2) >> 2] = 0.0;
    $$09 = $$09 + 1 | 0;
   }
   STACKTOP = sp;
   return $$1 | 0;
  }
  if (($$0645 | 0) <= ($18 | 0)) {
   if (($$0645 | 0) >= ($18 | 0)) {
    $$024651$ph = 0;
    $$02854$ph = $32;
    $$064452$ph = $$0645;
    $$42757$ph = $$0645;
    label = 22;
    break;
   }
   if (($$0645 | 0) > ($19 | 0)) {
    $$024651$ph = 0;
    $$02854$ph = $32;
    $$064452$ph = $$0645;
    $$42757$ph = $19;
    label = 22;
    break;
   }
   if (($32 | 0) == 1e3) {
    $$024651$ph = 0;
    $$02854$ph = 1e3;
    $$064452$ph = $$0645;
    $$42757$ph = $$0645;
    label = 22;
    break;
   }
   $$024651$ph = 0;
   $$02854$ph = $32;
   $$064452$ph = $$0645;
   $$42757$ph = ($$0645 | 0) > ($20 | 0) & ($$0645 | 0) < ($19 | 0) ? $20 : $$0645;
   label = 22;
   break;
  }
  $41 = $0 + 8 | 0;
  $$023 = $$0645;
  $$05 = $3;
  while (1) {
   $43 = _opus_decode_frame($0, 0, 0, $$05, ($$023 | 0) < ($18 | 0) ? $$023 : $18, 0) | 0;
   if (($43 | 0) < 0) {
    $$1 = $43;
    label = 109;
    break;
   }
   $$023 = $$023 - $43 | 0;
   $$05 = $$05 + ((Math_imul($43, HEAP32[$41 >> 2] | 0) | 0) << 2) | 0;
   if (($$023 | 0) <= 0) {
    $$1 = $$0645;
    label = 109;
    break;
   }
  }
  if ((label | 0) == 109) {
   STACKTOP = sp;
   return $$1 | 0;
  }
 } while (0);
 if ((label | 0) == 22) {
  $$019 = 0;
  $$02465170 = $$024651$ph;
  $$0285468 = $$02854$ph;
  $$02971 = 0;
  $$06445269 = $$064452$ph;
  $$11572 = 1;
  $$4275767 = $$42757$ph;
  $280 = _llvm_stacksave() | 0;
 }
 L39 : do if (($$4275767 | 0) > ($$06445269 | 0)) $$0 = -1; else {
  if (($$0285468 | 0) == 1002) {
   $80 = STACKTOP;
   STACKTOP = STACKTOP + 16 | 0;
   $$02855 = 1002;
   $201 = $80;
  } else {
   $82 = $0 + 8 | 0;
   $83 = HEAP32[$82 >> 2] | 0;
   if (($19 | 0) > ($$4275767 | 0)) {
    $$alloca_mul35 = (Math_imul($19, $83) | 0) << 1;
    $85 = STACKTOP;
    STACKTOP = STACKTOP + ((1 * $$alloca_mul35 | 0) + 15 & -16) | 0;
    $281 = $85;
   } else {
    $$alloca_mul37 = (Math_imul($$4275767, $83) | 0) << 1;
    $87 = STACKTOP;
    STACKTOP = STACKTOP + ((1 * $$alloca_mul37 | 0) + 15 & -16) | 0;
    $281 = $87;
   }
   if ((HEAP32[$0 + 60 >> 2] | 0) == 1002) _silk_InitDecoder($13) | 0;
   $93 = ($$4275767 * 1e3 | 0) / (HEAP32[$16 >> 2] | 0) | 0;
   HEAP32[$0 + 32 >> 2] = ($93 | 0) > 10 ? $93 : 10;
   if (!$$02465170) $107 = 1; else {
    HEAP32[$0 + 20 >> 2] = HEAP32[$0 + 48 >> 2];
    L53 : do if (($$0285468 | 0) == 1e3) switch (HEAP32[$0 + 52 >> 2] | 0) {
    case 1102:
     {
      $$sink138 = 12e3;
      break L53;
      break;
     }
    case 1101:
     {
      $$sink138 = 8e3;
      break L53;
      break;
     }
    case 1103:
     {
      $$sink138 = 16e3;
      break L53;
      break;
     }
    default:
     {
      $$sink138 = 16e3;
      break L53;
     }
    } else $$sink138 = 16e3; while (0);
    HEAP32[$0 + 28 >> 2] = $$sink138;
    $107 = $5 << 1;
   }
   $105 = $0 + 16 | 0;
   $106 = ($107 | 0) == 0;
   $$07 = $281;
   $$08 = 0;
   while (1) {
    L63 : do if (!(_silk_Decode($13, $105, $107, ($$08 | 0) == 0 & 1, $6, $$07, $7) | 0)) $120 = HEAP32[$82 >> 2] | 0; else {
     if ($106) {
      $$0 = -3;
      break L39;
     }
     HEAP32[$7 >> 2] = $$4275767;
     $$110 = 0;
     while (1) {
      $112 = HEAP32[$82 >> 2] | 0;
      if (($$110 | 0) >= (Math_imul($$4275767, $112) | 0)) {
       $120 = $112;
       break L63;
      }
      HEAP16[$$07 + ($$110 << 1) >> 1] = 0;
      $$110 = $$110 + 1 | 0;
     }
    } while (0);
    $117 = HEAP32[$7 >> 2] | 0;
    $$08 = $$08 + $117 | 0;
    $$07 = $$07 + ((Math_imul($117, $120) | 0) << 1) | 0;
    if (($$08 | 0) >= ($$4275767 | 0)) {
     $$02855 = $$0285468;
     $201 = $281;
     break;
    }
   }
  }
  $123 = ($5 | 0) == 0;
  $124 = ($$02855 | 0) == 1002;
  do if ($123) if ($124) {
   $$031 = 0;
   $$12296 = 0;
   $$23892 = 0;
   $$298 = $2;
   $$33594 = 0;
  } else if (!$$02465170) {
   $$12295 = 0;
   $$23891 = 0;
   $$297 = $2;
   $$33593 = 0;
   label = 58;
  } else {
   $$idx42 = $6 + 20 | 0;
   $$idx43 = $6 + 28 | 0;
   $127 = (_ec_tell_420(HEAP32[$$idx42 >> 2] | 0, HEAP32[$$idx43 >> 2] | 0) | 0) + 17 | 0;
   if (($127 + ((HEAP32[$0 + 56 >> 2] | 0) == 1001 ? 20 : 0) | 0) > ($2 << 3 | 0)) {
    $$12295 = 0;
    $$23891 = 0;
    $$297 = $2;
    $$33593 = 0;
    label = 58;
   } else {
    if (($$02855 | 0) == 1001) {
     $136 = _ec_dec_bit_logp($6, 12) | 0;
     if (!$136) {
      $$12295 = 0;
      $$23891 = 0;
      $$297 = $2;
      $$33593 = 0;
      label = 58;
      break;
     }
     $138 = _ec_dec_bit_logp($6, 1) | 0;
     $140 = (_ec_dec_uint($6, 256) | 0) + 2 | 0;
     $$0328587 = $136;
     $$idx$val = HEAP32[$$idx42 >> 2] | 0;
     $$idx39$val = HEAP32[$$idx43 >> 2] | 0;
     $147 = $140;
     $282 = $138;
    } else {
     $141 = _ec_dec_bit_logp($6, 1) | 0;
     $$idx40$val = HEAP32[$$idx42 >> 2] | 0;
     $$idx41$val = HEAP32[$$idx43 >> 2] | 0;
     $$0328587 = 1;
     $$idx$val = $$idx40$val;
     $$idx39$val = $$idx41$val;
     $147 = $2 - ((_ec_tell_420($$idx40$val, $$idx41$val) | 0) + 7 >> 3) | 0;
     $282 = $141;
    }
    $146 = $2 - $147 | 0;
    $150 = ($146 << 3 | 0) < (_ec_tell_420($$idx$val, $$idx39$val) | 0);
    $$140 = $150 ? 0 : $147;
    $151 = $6 + 4 | 0;
    HEAP32[$151 >> 2] = (HEAP32[$151 >> 2] | 0) - $$140;
    $$12295 = $282;
    $$23891 = $$140;
    $$297 = $150 ? 0 : $146;
    $$33593 = $150 ? 0 : $$0328587;
    label = 58;
   }
  } else if ($124) {
   $$031 = 0;
   $$12296 = 0;
   $$23892 = 0;
   $$298 = $2;
   $$33594 = 0;
  } else {
   $$12295 = 0;
   $$23891 = 0;
   $$297 = $2;
   $$33593 = 0;
   label = 58;
  } while (0);
  if ((label | 0) == 58) {
   $$031 = 17;
   $$12296 = $$12295;
   $$23892 = $$23891;
   $$298 = $$297;
   $$33594 = $$33593;
  }
  switch (HEAP32[$0 + 52 >> 2] | 0) {
  case 1101:
   {
    $$01 = 13;
    break;
   }
  case 1103:
  case 1102:
   {
    $$01 = 17;
    break;
   }
  case 1104:
   {
    $$01 = 19;
    break;
   }
  default:
   $$01 = 21;
  }
  HEAP32[$vararg_buffer >> 2] = $$01;
  _opus_custom_decoder_ctl($15, 10012, $vararg_buffer);
  HEAP32[$vararg_buffer1 >> 2] = HEAP32[$0 + 48 >> 2];
  _opus_custom_decoder_ctl($15, 10008, $vararg_buffer1);
  $158 = ($$33594 | 0) == 0;
  if ($158) {
   $159 = STACKTOP;
   STACKTOP = STACKTOP + ((1 * ($$11572 << 2) | 0) + 15 & -16) | 0;
   do if (($$02971 | 0) == 0 | ($$02855 | 0) == 1002) $$120107$ph = $$019; else if (($20 | 0) < ($$4275767 | 0)) {
    _opus_decode_frame($0, 0, 0, $159, $20, 0) | 0;
    $$120107$ph = $159;
    break;
   } else {
    _opus_decode_frame($0, 0, 0, $159, $$4275767, 0) | 0;
    $$120107$ph = $159;
    break;
   } while (0);
   $163 = STACKTOP;
   STACKTOP = STACKTOP + 16 | 0;
   $$120107115 = $$120107$ph;
   $$130102105116 = $$02971;
   $213 = $163;
  } else {
   $$alloca_mul42 = (Math_imul($20, HEAP32[$0 + 8 >> 2] | 0) | 0) << 2;
   $167 = STACKTOP;
   STACKTOP = STACKTOP + ((1 * $$alloca_mul42 | 0) + 15 & -16) | 0;
   if (!$$12296) {
    $$120107115 = $$019;
    $$130102105116 = 0;
    $213 = $167;
   } else {
    HEAP32[$vararg_buffer4 >> 2] = 0;
    _opus_custom_decoder_ctl($15, 10010, $vararg_buffer4);
    _celt_decode_with_ec($15, $$02465170 + $$298 | 0, $$23892, $167, $20, 0, 0) | 0;
    HEAP32[$vararg_buffer7 >> 2] = $8;
    _opus_custom_decoder_ctl($15, 4031, $vararg_buffer7);
    $$120107115 = $$019;
    $$130102105116 = 0;
    $213 = $167;
   }
  }
  HEAP32[$vararg_buffer10 >> 2] = $$031;
  _opus_custom_decoder_ctl($15, 10010, $vararg_buffer10);
  do if (($$02855 | 0) == 1e3) {
   HEAP16[$9 >> 1] = -1;
   $179 = $0 + 8 | 0;
   $$211 = 0;
   while (1) {
    if (($$211 | 0) >= (Math_imul($$4275767, HEAP32[$179 >> 2] | 0) | 0)) break;
    HEAPF32[$3 + ($$211 << 2) >> 2] = 0.0;
    $$211 = $$211 + 1 | 0;
   }
   if ((HEAP32[$0 + 60 >> 2] | 0) == 1001) {
    if (!($158 | ($$12296 | 0) == 0)) if (HEAP32[$0 + 68 >> 2] | 0) {
     $$012149 = 0;
     $$02856147 = 1e3;
     label = 83;
     break;
    }
    HEAP32[$vararg_buffer15 >> 2] = 0;
    _opus_custom_decoder_ctl($15, 10010, $vararg_buffer15);
    _celt_decode_with_ec($15, $9, 2, $3, $21, 0, 0) | 0;
    $$012149 = 0;
    $$02856147 = 1e3;
    label = 83;
   } else {
    $$012149 = 0;
    $$02856147 = 1e3;
    label = 83;
   }
  } else {
   $$$4275767 = ($18 | 0) < ($$4275767 | 0) ? $18 : $$4275767;
   $173 = HEAP32[$0 + 60 >> 2] | 0;
   if (($$02855 | 0) != ($173 | 0) & ($173 | 0) > 0) if (!(HEAP32[$0 + 68 >> 2] | 0)) _opus_custom_decoder_ctl($15, 4028, $vararg_buffer13);
   $192 = _celt_decode_with_ec($15, $123 ? $$02465170 : 0, $$298, $3, $$$4275767, $6, 0) | 0;
   if (($$02855 | 0) == 1002) {
    $$012150 = $192;
    $$02856148 = $$02855;
   } else {
    $$012149 = $192;
    $$02856147 = $$02855;
    label = 83;
   }
  } while (0);
  L117 : do if ((label | 0) == 83) {
   $194 = $0 + 8 | 0;
   $$3 = 0;
   while (1) {
    if (($$3 | 0) >= (Math_imul($$4275767, HEAP32[$194 >> 2] | 0) | 0)) {
     $$012150 = $$012149;
     $$02856148 = $$02856147;
     break L117;
    }
    $198 = $3 + ($$3 << 2) | 0;
    HEAPF32[$198 >> 2] = +HEAPF32[$198 >> 2] + +(HEAP16[$201 + ($$3 << 1) >> 1] | 0) * .000030517578125;
    $$3 = $$3 + 1 | 0;
   }
  } while (0);
  HEAP32[$vararg_buffer18 >> 2] = $10;
  _opus_custom_decoder_ctl($15, 10015, $vararg_buffer18);
  $209 = HEAP32[(HEAP32[$10 >> 2] | 0) + 60 >> 2] | 0;
  do if (!$158) {
   if (!$$12296) {
    _opus_custom_decoder_ctl($15, 4028, $vararg_buffer21);
    HEAP32[$vararg_buffer23 >> 2] = 0;
    _opus_custom_decoder_ctl($15, 10010, $vararg_buffer23);
    _celt_decode_with_ec($15, $$02465170 + $$298 | 0, $$23892, $213, $20, 0, 0) | 0;
    HEAP32[$vararg_buffer26 >> 2] = $8;
    _opus_custom_decoder_ctl($15, 4031, $vararg_buffer26);
    $215 = HEAP32[$0 + 8 >> 2] | 0;
    $218 = $3 + ((Math_imul($215, $$4275767 - $21 | 0) | 0) << 2) | 0;
    $220 = $213 + ((Math_imul($215, $21) | 0) << 2) | 0;
    _smooth_fade($218, $220, $218, $21, $215, $209, HEAP32[$16 >> 2] | 0);
    break;
   }
   $211 = $0 + 8 | 0;
   $$013 = 0;
   while (1) {
    $222 = HEAP32[$211 >> 2] | 0;
    if (($$013 | 0) < ($222 | 0)) $$4 = 0; else break;
    while (1) {
     if (($$4 | 0) >= ($21 | 0)) break;
     $227 = (Math_imul(HEAP32[$211 >> 2] | 0, $$4) | 0) + $$013 | 0;
     HEAP32[$3 + ($227 << 2) >> 2] = HEAP32[$213 + ($227 << 2) >> 2];
     $$4 = $$4 + 1 | 0;
    }
    $$013 = $$013 + 1 | 0;
   }
   $233 = Math_imul($222, $21) | 0;
   $235 = $3 + ($233 << 2) | 0;
   _smooth_fade($213 + ($233 << 2) | 0, $235, $235, $21, $222, $209, HEAP32[$16 >> 2] | 0);
  } while (0);
  do if ($$130102105116 | 0) {
   $239 = $0 + 8 | 0;
   if (($$4275767 | 0) < ($20 | 0)) {
    _smooth_fade($$120107115, $3, $3, $21, HEAP32[$239 >> 2] | 0, $209, HEAP32[$16 >> 2] | 0);
    break;
   } else $$5 = 0;
   while (1) {
    $240 = HEAP32[$239 >> 2] | 0;
    $241 = Math_imul($240, $21) | 0;
    if (($$5 | 0) >= ($241 | 0)) break;
    HEAP32[$3 + ($$5 << 2) >> 2] = HEAP32[$$120107115 + ($$5 << 2) >> 2];
    $$5 = $$5 + 1 | 0;
   }
   $248 = $3 + ($241 << 2) | 0;
   _smooth_fade($$120107115 + ($241 << 2) | 0, $248, $248, $21, $240, $209, HEAP32[$16 >> 2] | 0);
  } while (0);
  $253 = HEAP32[$0 + 40 >> 2] | 0;
  L145 : do if ($253 | 0) {
   $260 = +Math_exp(+(+($253 | 0) * 6.488140788860619e-04 * .6931471805599453));
   $261 = $0 + 8 | 0;
   $$6 = 0;
   while (1) {
    if (($$6 | 0) >= (Math_imul($$4275767, HEAP32[$261 >> 2] | 0) | 0)) break L145;
    $265 = $3 + ($$6 << 2) | 0;
    HEAPF32[$265 >> 2] = +HEAPF32[$265 >> 2] * $260;
    $$6 = $$6 + 1 | 0;
   }
  } while (0);
  if (($$298 | 0) < 2) $$sink = 0; else $$sink = HEAP32[$6 + 28 >> 2] ^ HEAP32[$8 >> 2];
  HEAP32[$0 + 84 >> 2] = $$sink;
  HEAP32[$0 + 60 >> 2] = $$02856148;
  HEAP32[$0 + 68 >> 2] = ($$12296 | 0) == 0 & ($158 ^ 1) & 1;
  $$0 = ($$012150 | 0) < 0 ? $$012150 : $$4275767;
 } while (0);
 _llvm_stackrestore($280 | 0);
 $$1 = $$0;
 STACKTOP = sp;
 return $$1 | 0;
}

function _celt_decode_with_ec($0, $1, $2, $3, $4, $5, $6) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 var $$ = 0, $$0 = 0, $$01 = 0.0, $$013 = 0, $$014 = 0, $$015 = 0, $$018 = 0, $$02 = 0, $$020 = 0, $$026 = 0, $$028 = 0.0, $$03 = 0, $$030 = 0, $$03164 = 0, $$032 = 0, $$035 = 0, $$04 = 0, $$04$idx49$val = 0, $$04$idx50$val = 0, $$04$idx51 = 0, $$04$idx51$val = 0, $$04$idx52 = 0, $$04$idx52$val = 0, $$04$idx53$val = 0, $$04$idx54$val = 0, $$04$idx55$val = 0, $$04$idx56$val = 0, $$04$idx57$val = 0, $$04$idx57$val78 = 0, $$04$idx57$val79 = 0, $$04$idx57$val80 = 0, $$04$idx58$val = 0, $$04$idx58$val82 = 0, $$04$idx58$val83 = 0, $$04$idx58$val84 = 0, $$07 = 0, $$09 = 0, $$1 = 0, $$110 = 0, $$116 = 0, $$121 = 0, $$127 = 0, $$129 = 0.0, $$1660 = 0, $$1662 = 0, $$18 = 0, $$2 = 0, $$211 = 0, $$22266 = 0, $$22267 = 0, $$312 = 0, $$323 = 0, $$4 = 0, $$424 = 0, $$5 = 0, $$5$1 = 0, $$525 = 0, $$6 = 0, $$6$1 = 0, $$99 = 0, $$alloca_mul19 = 0, $10 = 0, $101 = 0, $106 = 0, $107 = 0, $11 = 0, $119 = 0, $12 = 0, $120 = 0, $125 = 0, $126 = 0, $127 = 0, $132 = 0, $133 = 0, $134 = 0, $137 = 0, $14 = 0, $146 = 0, $147 = 0, $148 = 0, $150 = 0, $151 = 0, $157 = 0, $158 = 0, $16 = 0, $166 = 0, $169 = 0, $17 = 0, $172 = 0, $173 = 0, $178 = 0, $179 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $188 = 0, $19 = 0, $190 = 0, $194 = 0, $195 = 0, $197 = 0, $204 = 0, $21 = 0, $219 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $229 = 0, $23 = 0, $231 = 0, $233 = 0, $240 = 0, $241 = 0, $247 = 0, $248 = 0, $25 = 0, $256 = 0, $262 = 0, $264 = 0.0, $266 = 0.0, $27 = 0, $270 = 0, $271 = 0.0, $273 = 0.0, $28 = 0, $299 = 0, $30 = 0, $304 = 0, $31 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $42 = 0, $48 = 0, $52 = 0, $53 = 0, $55 = 0, $63 = 0, $7 = 0, $72 = 0, $78 = 0, $8 = 0, $80 = 0, $81 = 0.0, $84 = 0.0, $87 = 0, $88 = 0, $9 = 0, $91 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 $7 = sp + 32 | 0;
 $8 = sp + 24 | 0;
 $9 = sp + 16 | 0;
 $10 = sp + 8 | 0;
 $11 = sp + 4 | 0;
 $12 = sp;
 $14 = HEAP32[$0 + 8 >> 2] | 0;
 HEAP32[$10 >> 2] = 0;
 HEAP32[$11 >> 2] = 0;
 $16 = HEAP32[$0 + 12 >> 2] | 0;
 $17 = HEAP32[$0 >> 2] | 0;
 $19 = HEAP32[$17 + 8 >> 2] | 0;
 $21 = HEAP32[$17 + 4 >> 2] | 0;
 $23 = HEAP32[$17 + 32 >> 2] | 0;
 $25 = HEAP32[$0 + 20 >> 2] | 0;
 $27 = HEAP32[$0 + 24 >> 2] | 0;
 $28 = $0 + 16 | 0;
 $30 = Math_imul(HEAP32[$28 >> 2] | 0, $4) | 0;
 $31 = $21 + 2048 | 0;
 $35 = $0 + 92 + ((Math_imul($31, $14) | 0) << 2) + ($14 * 24 << 2) | 0;
 $36 = $19 << 1;
 $37 = $35 + ($36 << 2) | 0;
 $38 = $37 + ($36 << 2) | 0;
 $39 = $38 + ($36 << 2) | 0;
 $40 = $17 + 44 | 0;
 $42 = HEAP32[$17 + 36 >> 2] | 0;
 $$035 = 0;
 while (1) {
  if (($$035 | 0) > ($42 | 0)) {
   $$1 = -1;
   label = 77;
   break;
  }
  if ((HEAP32[$40 >> 2] << $$035 | 0) == ($30 | 0)) break;
  $$035 = $$035 + 1 | 0;
 }
 if ((label | 0) == 77) {
  STACKTOP = sp;
  return $$1 | 0;
 }
 $48 = 1 << $$035;
 if ($2 >>> 0 > 1275 | ($3 | 0) == 0) {
  $$1 = -1;
  STACKTOP = sp;
  return $$1 | 0;
 }
 $52 = HEAP32[$40 >> 2] << $$035;
 $53 = 0 - $52 | 0;
 $$07 = 0;
 do {
  $55 = $0 + 92 + ((Math_imul($$07, $31) | 0) << 2) | 0;
  HEAP32[$8 + ($$07 << 2) >> 2] = $55;
  HEAP32[$9 + ($$07 << 2) >> 2] = $55 + 8192 + ($53 << 2);
  $$07 = $$07 + 1 | 0;
 } while (($$07 | 0) < ($14 | 0));
 $63 = HEAP32[$17 + 12 >> 2] | 0;
 $$ = ($27 | 0) > ($63 | 0) ? $63 : $27;
 if (($1 | 0) == 0 | ($2 | 0) < 2) {
  _celt_decode_lost($0, $52, $$035);
  _deemphasis($9, $3, $52, $14, HEAP32[$28 >> 2] | 0, $17 + 16 | 0, $0 + 84 | 0, $6);
  $$1 = ($30 | 0) / (HEAP32[$28 >> 2] | 0) | 0;
  STACKTOP = sp;
  return $$1 | 0;
 }
 $72 = $0 + 52 | 0;
 HEAP32[$0 + 56 >> 2] = (HEAP32[$72 >> 2] | 0) != 0 & 1;
 if (!$5) {
  _ec_dec_init($7, $1, $2);
  $$04 = $7;
 } else $$04 = $5;
 $78 = ($16 | 0) == 1;
 L21 : do if ($78) {
  $$09 = 0;
  while (1) {
   if (($$09 | 0) >= ($19 | 0)) break L21;
   $80 = $35 + ($$09 << 2) | 0;
   $81 = +HEAPF32[$80 >> 2];
   $84 = +HEAPF32[$35 + ($19 + $$09 << 2) >> 2];
   HEAPF32[$80 >> 2] = $81 > $84 ? $81 : $84;
   $$09 = $$09 + 1 | 0;
  }
 } while (0);
 $87 = $2 << 3;
 $$04$idx51 = $$04 + 20 | 0;
 $$04$idx51$val = HEAP32[$$04$idx51 >> 2] | 0;
 $$04$idx52 = $$04 + 28 | 0;
 $$04$idx52$val = HEAP32[$$04$idx52 >> 2] | 0;
 $88 = _ec_tell_2($$04$idx51$val, $$04$idx52$val) | 0;
 if (($88 | 0) < ($87 | 0)) if (($88 | 0) == 1) {
  $91 = _ec_dec_bit_logp($$04, 15) | 0;
  if (!$91) {
   $$020 = 1;
   $$1660 = 0;
  } else {
   $$04$idx49$val = HEAP32[$$04$idx51 >> 2] | 0;
   $$04$idx50$val = HEAP32[$$04$idx52 >> 2] | 0;
   $$1662 = $91;
   label = 19;
  }
 } else {
  $$020 = $88;
  $$1660 = 0;
 } else {
  $$04$idx49$val = $$04$idx51$val;
  $$04$idx50$val = $$04$idx52$val;
  $$1662 = 1;
  label = 19;
 }
 if ((label | 0) == 19) {
  HEAP32[$$04$idx51 >> 2] = $$04$idx49$val + ($87 - (_ec_tell_2($$04$idx49$val, $$04$idx50$val) | 0));
  $$020 = $87;
  $$1660 = $$1662;
 }
 if (($25 | 0) != 0 | ($$020 + 16 | 0) > ($87 | 0)) {
  $$121 = $$020;
  $$129 = 0.0;
  $247 = 0;
  $248 = 0;
 } else {
  if (!(_ec_dec_bit_logp($$04, 1) | 0)) {
   $$028 = 0.0;
   $$032 = 0;
   $$116 = 0;
  } else {
   $101 = _ec_dec_uint($$04, 6) | 0;
   $106 = (16 << $101) + (_ec_dec_bits($$04, $101 + 4 | 0) | 0) + -1 | 0;
   $107 = _ec_dec_bits($$04, 3) | 0;
   if (((_ec_tell_2(HEAP32[$$04$idx51 >> 2] | 0, HEAP32[$$04$idx52 >> 2] | 0) | 0) + 2 | 0) > ($87 | 0)) $$015 = 0; else $$015 = _ec_dec_icdf($$04, 23678, 2) | 0;
   $$028 = +($107 + 1 | 0) * .09375;
   $$032 = $106;
   $$116 = $$015;
  }
  $$121 = _ec_tell_2(HEAP32[$$04$idx51 >> 2] | 0, HEAP32[$$04$idx52 >> 2] | 0) | 0;
  $$129 = $$028;
  $247 = $$032;
  $248 = $$116;
 }
 if (($$035 | 0) < 1 | ($$121 + 3 | 0) > ($87 | 0)) {
  $$22267 = $$121;
  label = 28;
 } else {
  $119 = _ec_dec_bit_logp($$04, 3) | 0;
  $120 = _ec_tell_2(HEAP32[$$04$idx51 >> 2] | 0, HEAP32[$$04$idx52 >> 2] | 0) | 0;
  if (!$119) {
   $$22267 = $120;
   label = 28;
  } else {
   $$030 = $48;
   $$03164 = $119;
   $$22266 = $120;
  }
 }
 if ((label | 0) == 28) {
  $$030 = 0;
  $$03164 = 0;
  $$22266 = $$22267;
 }
 if (($$22266 + 3 | 0) > ($87 | 0)) $125 = 0; else $125 = _ec_dec_bit_logp($$04, 3) | 0;
 _unquant_coarse_energy($17, $25, $27, $35, $125, $$04, $16, $$035);
 $126 = _llvm_stacksave() | 0;
 $127 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($19 << 2) | 0) + 15 & -16) | 0;
 _tf_decode($25, $27, $$03164, $127, $$035, $$04);
 if (((_ec_tell_2(HEAP32[$$04$idx51 >> 2] | 0, HEAP32[$$04$idx52 >> 2] | 0) | 0) + 4 | 0) > ($87 | 0)) $$014 = 2; else $$014 = _ec_dec_icdf($$04, 23681, 5) | 0;
 $132 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($19 << 2) | 0) + 15 & -16) | 0;
 _init_caps($17, $132, $$035, $16);
 $133 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($19 << 2) | 0) + 15 & -16) | 0;
 $134 = $2 << 6;
 $$04$idx53$val = HEAP32[$$04$idx51 >> 2] | 0;
 $$04$idx54$val = HEAP32[$$04$idx52 >> 2] | 0;
 $$018 = 6;
 $$026 = $134;
 $$04$idx57$val80 = $$04$idx53$val;
 $$04$idx58$val84 = $$04$idx54$val;
 $$110 = $25;
 $$323 = _ec_tell_frac($$04$idx53$val, $$04$idx54$val) | 0;
 while (1) {
  if (($$110 | 0) >= ($27 | 0)) break;
  $137 = $$110 + 1 | 0;
  $146 = (Math_imul($16, (HEAP16[$23 + ($137 << 1) >> 1] | 0) - (HEAP16[$23 + ($$110 << 1) >> 1] | 0) | 0) | 0) << $$035;
  $147 = $146 << 3;
  $148 = ($146 | 0) < 48;
  $150 = ($147 | 0) < (($148 ? 48 : $146) | 0) ? $147 : $148 ? 48 : $146;
  $151 = $132 + ($$110 << 2) | 0;
  $$02 = 0;
  $$03 = $$018;
  $$04$idx57$val79 = $$04$idx57$val80;
  $$04$idx58$val83 = $$04$idx58$val84;
  $$127 = $$026;
  $$424 = $$323;
  while (1) {
   if (($$424 + ($$03 << 3) | 0) >= ($$127 | 0)) {
    $$04$idx57$val78 = $$04$idx57$val79;
    $$04$idx58$val82 = $$04$idx58$val83;
    $$525 = $$424;
    break;
   }
   if (($$02 | 0) >= (HEAP32[$151 >> 2] | 0)) {
    $$04$idx57$val78 = $$04$idx57$val79;
    $$04$idx58$val82 = $$04$idx58$val83;
    $$525 = $$424;
    break;
   }
   $157 = _ec_dec_bit_logp($$04, $$03) | 0;
   $$04$idx55$val = HEAP32[$$04$idx51 >> 2] | 0;
   $$04$idx56$val = HEAP32[$$04$idx52 >> 2] | 0;
   $158 = _ec_tell_frac($$04$idx55$val, $$04$idx56$val) | 0;
   if (!$157) {
    $$04$idx57$val78 = $$04$idx55$val;
    $$04$idx58$val82 = $$04$idx56$val;
    $$525 = $158;
    break;
   }
   $$02 = $$02 + $150 | 0;
   $$03 = 1;
   $$04$idx57$val79 = $$04$idx55$val;
   $$04$idx58$val83 = $$04$idx56$val;
   $$127 = $$127 - $150 | 0;
   $$424 = $158;
  }
  HEAP32[$133 + ($$110 << 2) >> 2] = $$02;
  if (($$02 | 0) <= 0) {
   $$026 = $$127;
   $$04$idx57$val80 = $$04$idx57$val78;
   $$04$idx58$val84 = $$04$idx58$val82;
   $$110 = $137;
   $$323 = $$525;
   continue;
  }
  $$018 = ($$018 | 0) < 3 ? 2 : $$018 + -1 | 0;
  $$026 = $$127;
  $$04$idx57$val80 = $$04$idx57$val78;
  $$04$idx58$val84 = $$04$idx58$val82;
  $$110 = $137;
  $$323 = $$525;
 }
 $166 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($19 << 2) | 0) + 15 & -16) | 0;
 if (($$323 + 48 | 0) > ($$026 | 0)) {
  $$04$idx57$val = $$04$idx57$val80;
  $$04$idx58$val = $$04$idx58$val84;
  $183 = 5;
 } else {
  $169 = _ec_dec_icdf($$04, 23685, 7) | 0;
  $$04$idx57$val = HEAP32[$$04$idx51 >> 2] | 0;
  $$04$idx58$val = HEAP32[$$04$idx52 >> 2] | 0;
  $183 = $169;
 }
 $172 = $134 - (_ec_tell_frac($$04$idx57$val, $$04$idx58$val) | 0) + -1 | 0;
 $173 = ($$03164 | 0) == 0;
 if (($$035 | 0) > 1 & ($173 ^ 1)) $179 = ($172 | 0) >= (($$035 << 3) + 16 | 0); else $179 = 0;
 $178 = $179 ? 8 : 0;
 $181 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($19 << 2) | 0) + 15 & -16) | 0;
 $182 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($19 << 2) | 0) + 15 & -16) | 0;
 $184 = _compute_allocation($17, $25, $27, $133, $132, $183, $10, $11, $172 - $178 | 0, $12, $181, $166, $182, $16, $$035, $$04) | 0;
 _unquant_fine_energy($17, $25, $27, $35, $166, $$04, $16);
 $188 = 2048 - $52 + (($21 | 0) / 2 | 0) << 2;
 $$18 = 0;
 do {
  $190 = HEAP32[$8 + ($$18 << 2) >> 2] | 0;
  _memmove($190 | 0, $190 + ($52 << 2) | 0, $188 | 0) | 0;
  $$18 = $$18 + 1 | 0;
 } while (($$18 | 0) < ($14 | 0));
 $194 = Math_imul($16, $19) | 0;
 $195 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * $194 | 0) + 15 & -16) | 0;
 $$alloca_mul19 = (Math_imul($16, $52) | 0) << 2;
 $197 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * $$alloca_mul19 | 0) + 15 & -16) | 0;
 $204 = $0 + 40 | 0;
 _quant_all_bands($17, $25, $27, $197, ($16 | 0) == 2 ? $197 + ($52 << 2) | 0 : 0, $195, $181, $$030, $$014, HEAP32[$11 >> 2] | 0, HEAP32[$10 >> 2] | 0, $127, $134 - $178 | 0, HEAP32[$12 >> 2] | 0, $$04, $$035, $184, $204, HEAP32[$0 + 36 >> 2] | 0, HEAP32[$0 + 32 >> 2] | 0);
 if ($179) $$013 = _ec_dec_bits($$04, 1) | 0; else $$013 = 0;
 _unquant_energy_finalise($17, $25, $27, $35, $166, $182, $87 - (_ec_tell_2(HEAP32[$$04$idx51 >> 2] | 0, HEAP32[$$04$idx52 >> 2] | 0) | 0) | 0, $$04, $16);
 if ($$013 | 0) _anti_collapse($17, $197, $195, $$035, $16, $52, $25, $27, $35, $37, $38, $181, HEAP32[$204 >> 2] | 0);
 L79 : do if ($$1660 | 0) {
  $$211 = 0;
  while (1) {
   if (($$211 | 0) >= ($194 | 0)) break L79;
   HEAPF32[$35 + ($$211 << 2) >> 2] = -28.0;
   $$211 = $$211 + 1 | 0;
  }
 } while (0);
 _celt_synthesis($17, $197, $9, $35, $25, $$, $16, $14, $$03164, $$035, HEAP32[$28 >> 2] | 0, $$1660);
 $219 = $0 + 60 | 0;
 $220 = $0 + 64 | 0;
 $221 = $0 + 72 | 0;
 $222 = $0 + 68 | 0;
 $223 = $0 + 80 | 0;
 $224 = $0 + 76 | 0;
 $225 = $17 + 60 | 0;
 $226 = ($$035 | 0) == 0;
 $$2 = 0;
 do {
  $227 = HEAP32[$219 >> 2] | 0;
  $$99 = ($227 | 0) > 15 ? $227 : 15;
  HEAP32[$219 >> 2] = $$99;
  $229 = HEAP32[$220 >> 2] | 0;
  $231 = ($229 | 0) > 15 ? $229 : 15;
  HEAP32[$220 >> 2] = $231;
  $233 = HEAP32[$9 + ($$2 << 2) >> 2] | 0;
  _comb_filter($233, $233, $231, $$99, HEAP32[$40 >> 2] | 0, +HEAPF32[$221 >> 2], +HEAPF32[$222 >> 2], HEAP32[$223 >> 2] | 0, HEAP32[$224 >> 2] | 0, HEAP32[$225 >> 2] | 0, $21);
  if (!$226) {
   $240 = HEAP32[$40 >> 2] | 0;
   $241 = $233 + ($240 << 2) | 0;
   _comb_filter($241, $241, HEAP32[$219 >> 2] | 0, $247, $52 - $240 | 0, +HEAPF32[$222 >> 2], $$129, HEAP32[$224 >> 2] | 0, $248, HEAP32[$225 >> 2] | 0, $21);
  }
  $$2 = $$2 + 1 | 0;
 } while (($$2 | 0) < ($14 | 0));
 HEAP32[$220 >> 2] = HEAP32[$219 >> 2];
 HEAP32[$221 >> 2] = HEAP32[$222 >> 2];
 HEAP32[$223 >> 2] = HEAP32[$224 >> 2];
 HEAP32[$219 >> 2] = $247;
 HEAPF32[$222 >> 2] = $$129;
 HEAP32[$224 >> 2] = $248;
 if (!$226) {
  HEAP32[$220 >> 2] = $247;
  HEAPF32[$221 >> 2] = $$129;
  HEAP32[$223 >> 2] = $248;
 }
 if ($78) _memcpy($35 + ($19 << 2) | 0, $35 | 0, $19 << 2 | 0) | 0;
 L96 : do if ($173) {
  $256 = $19 << 3;
  _memcpy($38 | 0, $37 | 0, $256 | 0) | 0;
  _memcpy($37 | 0, $35 | 0, $256 | 0) | 0;
  $$01 = (HEAP32[$72 >> 2] | 0) < 10 ? +($48 | 0) * 1.0000000474974513e-03 : 1.0;
  $$312 = 0;
  while (1) {
   if (($$312 | 0) >= ($36 | 0)) {
    $$5 = 0;
    break L96;
   }
   $262 = $39 + ($$312 << 2) | 0;
   $264 = +HEAPF32[$262 >> 2] + $$01;
   $266 = +HEAPF32[$35 + ($$312 << 2) >> 2];
   HEAPF32[$262 >> 2] = $264 < $266 ? $264 : $266;
   $$312 = $$312 + 1 | 0;
  }
 } else {
  $$4 = 0;
  while (1) {
   if (($$4 | 0) >= ($36 | 0)) {
    $$5 = 0;
    break L96;
   }
   $270 = $37 + ($$4 << 2) | 0;
   $271 = +HEAPF32[$270 >> 2];
   $273 = +HEAPF32[$35 + ($$4 << 2) >> 2];
   HEAPF32[$270 >> 2] = $271 < $273 ? $271 : $273;
   $$4 = $$4 + 1 | 0;
  }
 } while (0);
 while (1) {
  if (($$5 | 0) >= ($25 | 0)) {
   $$6 = $27;
   break;
  }
  HEAPF32[$35 + ($$5 << 2) >> 2] = 0.0;
  HEAPF32[$38 + ($$5 << 2) >> 2] = -28.0;
  HEAPF32[$37 + ($$5 << 2) >> 2] = -28.0;
  $$5 = $$5 + 1 | 0;
 }
 while (1) {
  if (($$6 | 0) >= ($19 | 0)) {
   $$5$1 = 0;
   break;
  }
  HEAPF32[$35 + ($$6 << 2) >> 2] = 0.0;
  HEAPF32[$38 + ($$6 << 2) >> 2] = -28.0;
  HEAPF32[$37 + ($$6 << 2) >> 2] = -28.0;
  $$6 = $$6 + 1 | 0;
 }
 while (1) {
  if (($$5$1 | 0) >= ($25 | 0)) {
   $$6$1 = $27;
   break;
  }
  $304 = $19 + $$5$1 | 0;
  HEAPF32[$35 + ($304 << 2) >> 2] = 0.0;
  HEAPF32[$38 + ($304 << 2) >> 2] = -28.0;
  HEAPF32[$37 + ($304 << 2) >> 2] = -28.0;
  $$5$1 = $$5$1 + 1 | 0;
 }
 while (1) {
  if (($$6$1 | 0) >= ($19 | 0)) break;
  $299 = $19 + $$6$1 | 0;
  HEAPF32[$35 + ($299 << 2) >> 2] = 0.0;
  HEAPF32[$38 + ($299 << 2) >> 2] = -28.0;
  HEAPF32[$37 + ($299 << 2) >> 2] = -28.0;
  $$6$1 = $$6$1 + 1 | 0;
 }
 HEAP32[$204 >> 2] = HEAP32[$$04$idx52 >> 2];
 _deemphasis($9, $3, $52, $14, HEAP32[$28 >> 2] | 0, $17 + 16 | 0, $0 + 84 | 0, $6);
 HEAP32[$72 >> 2] = 0;
 if ((_ec_tell_2(HEAP32[$$04$idx51 >> 2] | 0, HEAP32[$$04$idx52 >> 2] | 0) | 0) > ($87 | 0)) $$0 = -3; else {
  if (_ec_get_error_6(HEAP32[$$04 + 44 >> 2] | 0) | 0) HEAP32[$0 + 44 >> 2] = 1;
  $$0 = ($30 | 0) / (HEAP32[$28 >> 2] | 0) | 0;
 }
 _llvm_stackrestore($126 | 0);
 $$1 = $$0;
 STACKTOP = sp;
 return $$1 | 0;
}

function _silk_decode_core($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $$01 = 0, $$010 = 0, $$015 = 0, $$016 = 0, $$02 = 0, $$03 = 0, $$04 = 0, $$05 = 0, $$06 = 0, $$09 = 0, $$1 = 0, $$10$sroa_idx = 0, $$111 = 0, $$12$sroa_idx = 0, $$14$sroa_idx = 0, $$16$sroa_idx35 = 0, $$18$sroa_idx = 0, $$2 = 0, $$2$sroa_idx = 0, $$20$sroa_idx = 0, $$212 = 0, $$22$sroa_idx = 0, $$24$sroa_idx = 0, $$26$sroa_idx = 0, $$28$sroa_idx = 0, $$3 = 0, $$30$sroa_idx = 0, $$4 = 0, $$4$sroa_idx = 0, $$5 = 0, $$6$sroa_idx = 0, $$8$sroa_idx = 0, $$pre56 = 0, $$sink = 0, $100 = 0, $103 = 0, $104 = 0, $106 = 0, $107 = 0, $11 = 0, $110 = 0, $112 = 0, $114 = 0, $12 = 0, $120 = 0, $126 = 0, $127 = 0, $13 = 0, $130 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $146 = 0, $156 = 0, $157 = 0, $158 = 0, $16 = 0, $162 = 0, $163 = 0, $164 = 0, $17 = 0, $178 = 0, $179 = 0, $180 = 0, $181 = 0, $183 = 0, $186 = 0, $192 = 0, $194 = 0, $197 = 0, $203 = 0, $205 = 0, $208 = 0, $214 = 0, $216 = 0, $219 = 0, $225 = 0, $227 = 0, $230 = 0, $236 = 0, $240 = 0, $247 = 0, $250 = 0, $251 = 0, $257 = 0, $259 = 0, $265 = 0, $268 = 0, $270 = 0, $276 = 0, $279 = 0, $28 = 0, $281 = 0, $287 = 0, $290 = 0, $292 = 0, $298 = 0, $301 = 0, $303 = 0, $309 = 0, $312 = 0, $314 = 0, $32 = 0, $320 = 0, $323 = 0, $325 = 0, $331 = 0, $334 = 0, $336 = 0, $34 = 0, $342 = 0, $345 = 0, $347 = 0, $353 = 0, $356 = 0, $358 = 0, $36 = 0, $364 = 0, $369 = 0, $37 = 0, $371 = 0, $377 = 0, $38 = 0, $380 = 0, $382 = 0, $388 = 0, $391 = 0, $393 = 0, $399 = 0, $4 = 0, $40 = 0, $402 = 0, $404 = 0, $41 = 0, $410 = 0, $413 = 0, $415 = 0, $421 = 0, $423 = 0, $425 = 0, $433 = 0, $434 = 0, $440 = 0, $453 = 0, $46 = 0, $464 = 0, $47 = 0, $5 = 0, $54 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $67 = 0, $7 = 0, $71 = 0, $72 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $9 = 0, dest = 0, label = 0, sp = 0, src = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 $4 = sp;
 $5 = $0 + 2336 | 0;
 $6 = HEAP32[$5 >> 2] | 0;
 $7 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($6 << 1) | 0) + 15 & -16) | 0;
 $8 = $0 + 2328 | 0;
 $9 = HEAP32[$8 >> 2] | 0;
 $11 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($6 + $9 << 2) | 0) + 15 & -16) | 0;
 $12 = $0 + 2332 | 0;
 $13 = HEAP32[$12 >> 2] | 0;
 $14 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($13 << 2) | 0) + 15 & -16) | 0;
 $16 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($13 + 16 << 2) | 0) + 15 & -16) | 0;
 $17 = $0 + 2765 | 0;
 $28 = HEAP8[$0 + 2767 >> 0] | 0;
 $32 = HEAP16[23e3 + (HEAP8[$17 >> 0] >> 1 << 2) + (HEAP8[$0 + 2766 >> 0] << 1) >> 1] << 4;
 $$03 = HEAP8[$0 + 2770 >> 0] | 0;
 $$05 = 0;
 $34 = $9;
 while (1) {
  if (($$05 | 0) >= ($34 | 0)) break;
  $36 = (Math_imul($$03, 196314165) | 0) + 907633515 | 0;
  $37 = $3 + ($$05 << 1) | 0;
  $38 = HEAP16[$37 >> 1] | 0;
  $40 = $38 << 16 >> 16 << 14;
  $41 = $0 + 4 + ($$05 << 2) | 0;
  HEAP32[$41 >> 2] = $40;
  if ($38 << 16 >> 16 > 0) {
   $$sink = $40 + -1280 | 0;
   label = 7;
  } else if ($38 << 16 >> 16 < 0) {
   $$sink = $40 | 1280;
   label = 7;
  } else $47 = $40;
  if ((label | 0) == 7) {
   label = 0;
   HEAP32[$41 >> 2] = $$sink;
   $47 = $$sink;
  }
  $46 = $47 + $32 | 0;
  HEAP32[$41 >> 2] = ($36 | 0) < 0 ? 0 - $46 | 0 : $46;
  $$03 = $36 + (HEAP16[$37 >> 1] | 0) | 0;
  $$05 = $$05 + 1 | 0;
  $34 = HEAP32[$8 >> 2] | 0;
 }
 $54 = $0 + 1284 | 0;
 dest = $16;
 src = $54;
 stop = dest + 64 | 0;
 do {
  HEAP32[dest >> 2] = HEAP32[src >> 2];
  dest = dest + 4 | 0;
  src = src + 4 | 0;
 } while ((dest | 0) < (stop | 0));
 $57 = $0 + 2324 | 0;
 $58 = $0 + 2340 | 0;
 $59 = $0 + 4160 | 0;
 $60 = $1 + 136 | 0;
 $61 = $28 << 24 >> 24 > 3;
 $$2$sroa_idx = $4 + 2 | 0;
 $$4$sroa_idx = $4 + 4 | 0;
 $$6$sroa_idx = $4 + 6 | 0;
 $$8$sroa_idx = $4 + 8 | 0;
 $$10$sroa_idx = $4 + 10 | 0;
 $$12$sroa_idx = $4 + 12 | 0;
 $$14$sroa_idx = $4 + 14 | 0;
 $$16$sroa_idx35 = $4 + 16 | 0;
 $$18$sroa_idx = $4 + 18 | 0;
 $$20$sroa_idx = $4 + 20 | 0;
 $$22$sroa_idx = $4 + 22 | 0;
 $$24$sroa_idx = $4 + 24 | 0;
 $$26$sroa_idx = $4 + 26 | 0;
 $$28$sroa_idx = $4 + 28 | 0;
 $$30$sroa_idx = $4 + 30 | 0;
 $62 = $0 + 4164 | 0;
 $63 = $0 + 2308 | 0;
 $$01 = $0 + 4 | 0;
 $$010 = HEAP32[$5 >> 2] | 0;
 $$016 = $2;
 $$06 = 0;
 while (1) {
  if (($$06 | 0) >= (HEAP32[$57 >> 2] | 0)) break;
  $67 = $1 + 32 + ($$06 >> 1 << 5) | 0;
  _memcpy($4 | 0, $67 | 0, HEAP32[$58 >> 2] << 1 | 0) | 0;
  $71 = $1 + 96 + ($$06 * 5 << 1) | 0;
  $72 = HEAP8[$17 >> 0] | 0;
  $74 = HEAP32[$1 + 16 + ($$06 << 2) >> 2] | 0;
  $75 = $74 >>> 6;
  $76 = _silk_INVERSE32_varQ($74) | 0;
  $77 = HEAP32[$0 >> 2] | 0;
  L15 : do if (($74 | 0) == ($77 | 0)) $$04 = 65536; else {
   $79 = _silk_DIV32_varQ($77, $74) | 0;
   $80 = $79 >> 16;
   $81 = $79 & 65535;
   $$1 = 0;
   while (1) {
    if (($$1 | 0) == 16) {
     $$04 = $79;
     break L15;
    }
    $82 = $16 + ($$1 << 2) | 0;
    $83 = HEAP32[$82 >> 2] | 0;
    $84 = $83 << 16 >> 16;
    HEAP32[$82 >> 2] = (Math_imul($80, $84) | 0) + ((Math_imul($81, $84) | 0) >> 16) + (Math_imul($79, ($83 >> 15) + 1 >> 1) | 0);
    $$1 = $$1 + 1 | 0;
   }
  } while (0);
  HEAP32[$0 >> 2] = $74;
  if (!(HEAP32[$59 >> 2] | 0)) label = 18; else if ($72 << 24 >> 24 != 2 & (HEAP32[$62 >> 2] | 0) == 2 & ($$06 | 0) < 2) {
   HEAP16[$71 >> 1] = 0;
   HEAP16[$71 + 2 >> 1] = 0;
   HEAP16[$71 + 4 >> 1] = 0;
   HEAP16[$71 + 6 >> 1] = 0;
   HEAP16[$71 + 8 >> 1] = 0;
   HEAP16[$71 + 4 >> 1] = 4096;
   $100 = HEAP32[$63 >> 2] | 0;
   HEAP32[$1 + ($$06 << 2) >> 2] = $100;
   $106 = $100;
   label = 20;
  } else label = 18;
  if ((label | 0) == 18) {
   label = 0;
   if ($72 << 24 >> 24 == 2) {
    $106 = HEAP32[$1 + ($$06 << 2) >> 2] | 0;
    label = 20;
   } else {
    $$0 = $$01;
    $$212 = $$010;
   }
  }
  L27 : do if ((label | 0) == 20) {
   label = 0;
   $103 = ($$06 | 0) == 0;
   L29 : do if ($103) {
    $104 = HEAP32[$5 >> 2] | 0;
    $107 = HEAP32[$58 >> 2] | 0;
    $120 = $104 - $106 - $107 + -2 | 0;
    $126 = $104;
    $127 = $107;
    label = 25;
   } else {
    if (!(($$06 | 0) != 2 | $61)) {
     $110 = HEAP32[$5 >> 2] | 0;
     $112 = HEAP32[$58 >> 2] | 0;
     $114 = $110 - $106 - $112 + -2 | 0;
     if (($$06 | 0) != 2) {
      $120 = $114;
      $126 = $110;
      $127 = $112;
      label = 25;
      break;
     }
     _memcpy($0 + 1348 + ($110 << 1) | 0, $2 | 0, HEAP32[$12 >> 2] << 2 | 0) | 0;
     $120 = $114;
     $126 = HEAP32[$5 >> 2] | 0;
     $127 = HEAP32[$58 >> 2] | 0;
     label = 25;
     break;
    }
    if (($$04 | 0) != 65536) {
     $156 = $106 + 2 | 0;
     $157 = $$04 >> 16;
     $158 = $$04 & 65535;
     $$3 = 0;
     while (1) {
      if (($$3 | 0) >= ($156 | 0)) break L29;
      $162 = $11 + ($$010 - $$3 + -1 << 2) | 0;
      $163 = HEAP32[$162 >> 2] | 0;
      $164 = $163 << 16 >> 16;
      HEAP32[$162 >> 2] = (Math_imul($157, $164) | 0) + ((Math_imul($158, $164) | 0) >> 16) + (Math_imul($$04, ($163 >> 15) + 1 >> 1) | 0);
      $$3 = $$3 + 1 | 0;
     }
    }
   } while (0);
   L40 : do if ((label | 0) == 25) {
    label = 0;
    _silk_LPC_analysis_filter($7 + ($120 << 1) | 0, $0 + 1348 + ($120 + (Math_imul($$06, HEAP32[$12 >> 2] | 0) | 0) << 1) | 0, $67, $126 - $120 | 0, $127);
    if ($103) {
     $130 = HEAP32[$60 >> 2] << 16 >> 16;
     $$09 = (Math_imul($76 >> 16, $130) | 0) + ((Math_imul($76 & 65535, $130) | 0) >> 16) << 2;
    } else $$09 = $76;
    $137 = $106 + 2 | 0;
    $138 = $$09 >> 16;
    $139 = $$09 & 65535;
    $$2 = 0;
    while (1) {
     if (($$2 | 0) >= ($137 | 0)) break L40;
     $146 = HEAP16[$7 + ((HEAP32[$5 >> 2] | 0) - $$2 + -1 << 1) >> 1] | 0;
     HEAP32[$11 + ($$010 - $$2 + -1 << 2) >> 2] = (Math_imul($138, $146) | 0) + ((Math_imul($139, $146) | 0) >> 16);
     $$2 = $$2 + 1 | 0;
    }
   } while (0);
   $178 = $71 + 2 | 0;
   $179 = $71 + 4 | 0;
   $180 = $71 + 6 | 0;
   $181 = $71 + 8 | 0;
   $$pre56 = HEAP32[$12 >> 2] | 0;
   $$02 = $11 + ($$010 - $106 + 2 << 2) | 0;
   $$111 = $$010;
   $$4 = 0;
   while (1) {
    if (($$4 | 0) >= ($$pre56 | 0)) {
     $$0 = $14;
     $$212 = $$111;
     break L27;
    }
    $183 = HEAP32[$$02 >> 2] | 0;
    $186 = HEAP16[$71 >> 1] | 0;
    $192 = (Math_imul($183 >> 16, $186) | 0) + ((Math_imul($183 & 65535, $186) | 0) >> 16) + 2 | 0;
    $194 = HEAP32[$$02 + -4 >> 2] | 0;
    $197 = HEAP16[$178 >> 1] | 0;
    $203 = $192 + ((Math_imul($194 >> 16, $197) | 0) + ((Math_imul($194 & 65535, $197) | 0) >> 16)) | 0;
    $205 = HEAP32[$$02 + -8 >> 2] | 0;
    $208 = HEAP16[$179 >> 1] | 0;
    $214 = $203 + ((Math_imul($205 >> 16, $208) | 0) + ((Math_imul($205 & 65535, $208) | 0) >> 16)) | 0;
    $216 = HEAP32[$$02 + -12 >> 2] | 0;
    $219 = HEAP16[$180 >> 1] | 0;
    $225 = $214 + ((Math_imul($216 >> 16, $219) | 0) + ((Math_imul($216 & 65535, $219) | 0) >> 16)) | 0;
    $227 = HEAP32[$$02 + -16 >> 2] | 0;
    $230 = HEAP16[$181 >> 1] | 0;
    $236 = $225 + ((Math_imul($227 >> 16, $230) | 0) + ((Math_imul($227 & 65535, $230) | 0) >> 16)) | 0;
    $240 = (HEAP32[$$01 + ($$4 << 2) >> 2] | 0) + ($236 << 1) | 0;
    HEAP32[$14 + ($$4 << 2) >> 2] = $240;
    HEAP32[$11 + ($$111 << 2) >> 2] = $240 << 1;
    $$02 = $$02 + 4 | 0;
    $$111 = $$111 + 1 | 0;
    $$4 = $$4 + 1 | 0;
   }
  } while (0);
  $247 = $75 << 16 >> 16;
  $250 = ($74 >> 21) + 1 >> 1;
  $$5 = 0;
  while (1) {
   $251 = HEAP32[$12 >> 2] | 0;
   if (($$5 | 0) >= ($251 | 0)) break;
   $257 = HEAP32[$16 + ($$5 + 15 << 2) >> 2] | 0;
   $259 = HEAP16[$4 >> 1] | 0;
   $265 = (HEAP32[$58 >> 2] >> 1) + ((Math_imul($257 >> 16, $259) | 0) + ((Math_imul($257 & 65535, $259) | 0) >> 16)) | 0;
   $268 = HEAP32[$16 + ($$5 + 14 << 2) >> 2] | 0;
   $270 = HEAP16[$$2$sroa_idx >> 1] | 0;
   $276 = $265 + ((Math_imul($268 >> 16, $270) | 0) + ((Math_imul($268 & 65535, $270) | 0) >> 16)) | 0;
   $279 = HEAP32[$16 + ($$5 + 13 << 2) >> 2] | 0;
   $281 = HEAP16[$$4$sroa_idx >> 1] | 0;
   $287 = $276 + ((Math_imul($279 >> 16, $281) | 0) + ((Math_imul($279 & 65535, $281) | 0) >> 16)) | 0;
   $290 = HEAP32[$16 + ($$5 + 12 << 2) >> 2] | 0;
   $292 = HEAP16[$$6$sroa_idx >> 1] | 0;
   $298 = $287 + ((Math_imul($290 >> 16, $292) | 0) + ((Math_imul($290 & 65535, $292) | 0) >> 16)) | 0;
   $301 = HEAP32[$16 + ($$5 + 11 << 2) >> 2] | 0;
   $303 = HEAP16[$$8$sroa_idx >> 1] | 0;
   $309 = $298 + ((Math_imul($301 >> 16, $303) | 0) + ((Math_imul($301 & 65535, $303) | 0) >> 16)) | 0;
   $312 = HEAP32[$16 + ($$5 + 10 << 2) >> 2] | 0;
   $314 = HEAP16[$$10$sroa_idx >> 1] | 0;
   $320 = $309 + ((Math_imul($312 >> 16, $314) | 0) + ((Math_imul($312 & 65535, $314) | 0) >> 16)) | 0;
   $323 = HEAP32[$16 + ($$5 + 9 << 2) >> 2] | 0;
   $325 = HEAP16[$$12$sroa_idx >> 1] | 0;
   $331 = $320 + ((Math_imul($323 >> 16, $325) | 0) + ((Math_imul($323 & 65535, $325) | 0) >> 16)) | 0;
   $334 = HEAP32[$16 + ($$5 + 8 << 2) >> 2] | 0;
   $336 = HEAP16[$$14$sroa_idx >> 1] | 0;
   $342 = $331 + ((Math_imul($334 >> 16, $336) | 0) + ((Math_imul($334 & 65535, $336) | 0) >> 16)) | 0;
   $345 = HEAP32[$16 + ($$5 + 7 << 2) >> 2] | 0;
   $347 = HEAP16[$$16$sroa_idx35 >> 1] | 0;
   $353 = $342 + ((Math_imul($345 >> 16, $347) | 0) + ((Math_imul($345 & 65535, $347) | 0) >> 16)) | 0;
   $356 = HEAP32[$16 + ($$5 + 6 << 2) >> 2] | 0;
   $358 = HEAP16[$$18$sroa_idx >> 1] | 0;
   $364 = $353 + ((Math_imul($356 >> 16, $358) | 0) + ((Math_imul($356 & 65535, $358) | 0) >> 16)) | 0;
   if ((HEAP32[$58 >> 2] | 0) == 16) {
    $369 = HEAP32[$16 + ($$5 + 5 << 2) >> 2] | 0;
    $371 = HEAP16[$$20$sroa_idx >> 1] | 0;
    $377 = $364 + ((Math_imul($369 >> 16, $371) | 0) + ((Math_imul($369 & 65535, $371) | 0) >> 16)) | 0;
    $380 = HEAP32[$16 + ($$5 + 4 << 2) >> 2] | 0;
    $382 = HEAP16[$$22$sroa_idx >> 1] | 0;
    $388 = $377 + ((Math_imul($380 >> 16, $382) | 0) + ((Math_imul($380 & 65535, $382) | 0) >> 16)) | 0;
    $391 = HEAP32[$16 + ($$5 + 3 << 2) >> 2] | 0;
    $393 = HEAP16[$$24$sroa_idx >> 1] | 0;
    $399 = $388 + ((Math_imul($391 >> 16, $393) | 0) + ((Math_imul($391 & 65535, $393) | 0) >> 16)) | 0;
    $402 = HEAP32[$16 + ($$5 + 2 << 2) >> 2] | 0;
    $404 = HEAP16[$$26$sroa_idx >> 1] | 0;
    $410 = $399 + ((Math_imul($402 >> 16, $404) | 0) + ((Math_imul($402 & 65535, $404) | 0) >> 16)) | 0;
    $413 = HEAP32[$16 + ($$5 + 1 << 2) >> 2] | 0;
    $415 = HEAP16[$$28$sroa_idx >> 1] | 0;
    $421 = $410 + ((Math_imul($413 >> 16, $415) | 0) + ((Math_imul($413 & 65535, $415) | 0) >> 16)) | 0;
    $423 = HEAP32[$16 + ($$5 << 2) >> 2] | 0;
    $425 = HEAP16[$$30$sroa_idx >> 1] | 0;
    $$015 = $421 + ((Math_imul($423 >> 16, $425) | 0) + ((Math_imul($423 & 65535, $425) | 0) >> 16)) | 0;
   } else $$015 = $364;
   $433 = HEAP32[$$0 + ($$5 << 2) >> 2] | 0;
   $434 = ($$015 | 0) > 134217727;
   $440 = $434 ? 2147483632 : (($$015 | 0) > -134217728 ? $$015 : -134217728) << 4;
   if (($433 + ($434 ? 2147483632 : (($$015 | 0) > -134217728 ? $$015 : -134217728) << 4) | 0) > -1) if (($433 & $440 | 0) < 0) $453 = -2147483648; else $453 = $433 + ($434 ? 2147483632 : (($$015 | 0) > -134217728 ? $$015 : -134217728) << 4) | 0; else if (($433 | $440 | 0) > -1) $453 = 2147483647; else $453 = $433 + ($434 ? 2147483632 : (($$015 | 0) > -134217728 ? $$015 : -134217728) << 4) | 0;
   HEAP32[$16 + ($$5 + 16 << 2) >> 2] = $453;
   $464 = ((Math_imul($453 >> 16, $247) | 0) + ((Math_imul($453 & 65535, $247) | 0) >> 16) + (Math_imul($453, $250) | 0) >> 7) + 1 >> 1;
   HEAP16[$$016 + ($$5 << 1) >> 1] = ($464 | 0) > 32767 ? 32767 : (($464 | 0) > -32768 ? $464 : -32768) & 65535;
   $$5 = $$5 + 1 | 0;
  }
  dest = $16;
  src = $16 + ($251 << 2) | 0;
  stop = dest + 64 | 0;
  do {
   HEAP32[dest >> 2] = HEAP32[src >> 2];
   dest = dest + 4 | 0;
   src = src + 4 | 0;
  } while ((dest | 0) < (stop | 0));
  $$01 = $$01 + ($251 << 2) | 0;
  $$010 = $$212;
  $$016 = $$016 + ($251 << 1) | 0;
  $$06 = $$06 + 1 | 0;
 }
 dest = $54;
 src = $16;
 stop = dest + 64 | 0;
 do {
  HEAP32[dest >> 2] = HEAP32[src >> 2];
  dest = dest + 4 | 0;
  src = src + 4 | 0;
 } while ((dest | 0) < (stop | 0));
 STACKTOP = sp;
 return;
}

function _silk_resampler_private_down_FIR_INTERPOL($0, $1, $2, $3, $4, $5, $6) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 var $$0 = 0, $$01 = 0, $$1 = 0, $$12 = 0, $$2 = 0, $$23 = 0, $$3 = 0, $10 = 0, $101 = 0, $103 = 0, $107 = 0, $11 = 0, $113 = 0, $115 = 0, $119 = 0, $12 = 0, $125 = 0, $127 = 0, $13 = 0, $131 = 0, $137 = 0, $139 = 0, $14 = 0, $143 = 0, $149 = 0, $15 = 0, $152 = 0, $154 = 0, $157 = 0, $16 = 0, $163 = 0, $165 = 0, $169 = 0, $17 = 0, $175 = 0, $177 = 0, $18 = 0, $181 = 0, $187 = 0, $189 = 0, $19 = 0, $193 = 0, $199 = 0, $20 = 0, $201 = 0, $205 = 0, $21 = 0, $211 = 0, $213 = 0, $217 = 0, $22 = 0, $223 = 0, $225 = 0, $229 = 0, $23 = 0, $235 = 0, $237 = 0, $24 = 0, $241 = 0, $247 = 0, $249 = 0, $25 = 0, $253 = 0, $26 = 0, $262 = 0, $27 = 0, $271 = 0, $275 = 0, $278 = 0, $28 = 0, $283 = 0, $288 = 0, $29 = 0, $291 = 0, $297 = 0, $30 = 0, $302 = 0, $305 = 0, $31 = 0, $311 = 0, $316 = 0, $319 = 0, $32 = 0, $325 = 0, $33 = 0, $330 = 0, $333 = 0, $339 = 0, $34 = 0, $344 = 0, $347 = 0, $35 = 0, $353 = 0, $358 = 0, $36 = 0, $361 = 0, $367 = 0, $372 = 0, $375 = 0, $381 = 0, $386 = 0, $389 = 0, $39 = 0, $395 = 0, $400 = 0, $403 = 0, $409 = 0, $414 = 0, $417 = 0, $42 = 0, $423 = 0, $428 = 0, $431 = 0, $44 = 0, $440 = 0, $449 = 0, $45 = 0, $453 = 0, $456 = 0, $461 = 0, $466 = 0, $469 = 0, $475 = 0, $48 = 0, $480 = 0, $483 = 0, $489 = 0, $494 = 0, $497 = 0, $503 = 0, $508 = 0, $511 = 0, $517 = 0, $522 = 0, $525 = 0, $53 = 0, $531 = 0, $536 = 0, $539 = 0, $545 = 0, $55 = 0, $550 = 0, $553 = 0, $559 = 0, $564 = 0, $567 = 0, $573 = 0, $578 = 0, $581 = 0, $587 = 0, $59 = 0, $592 = 0, $595 = 0, $601 = 0, $606 = 0, $609 = 0, $615 = 0, $620 = 0, $623 = 0, $629 = 0, $634 = 0, $637 = 0, $643 = 0, $648 = 0, $65 = 0, $651 = 0, $657 = 0, $662 = 0, $665 = 0, $67 = 0, $671 = 0, $676 = 0, $679 = 0, $685 = 0, $690 = 0, $693 = 0, $7 = 0, $702 = 0, $71 = 0, $77 = 0, $79 = 0, $8 = 0, $83 = 0, $89 = 0, $9 = 0, $91 = 0, $95 = 0;
 switch ($3 | 0) {
 case 18:
  {
   $35 = $4 << 16 >> 16;
   $36 = $4 + -1 | 0;
   $$0 = $0;
   $$01 = 0;
   while (1) {
    if (($$01 | 0) >= ($5 | 0)) {
     $$3 = $$0;
     break;
    }
    $39 = $1 + ($$01 >> 16 << 2) | 0;
    $42 = (Math_imul($$01 & 65535, $35) | 0) >> 16;
    $44 = $2 + ($42 * 9 << 1) | 0;
    $45 = HEAP32[$39 >> 2] | 0;
    $48 = HEAP16[$44 >> 1] | 0;
    $53 = (Math_imul($45 >> 16, $48) | 0) + ((Math_imul($45 & 65535, $48) | 0) >> 16) | 0;
    $55 = HEAP32[$39 + 4 >> 2] | 0;
    $59 = HEAP16[$44 + 2 >> 1] | 0;
    $65 = $53 + ((Math_imul($55 >> 16, $59) | 0) + ((Math_imul($55 & 65535, $59) | 0) >> 16)) | 0;
    $67 = HEAP32[$39 + 8 >> 2] | 0;
    $71 = HEAP16[$44 + 4 >> 1] | 0;
    $77 = $65 + ((Math_imul($67 >> 16, $71) | 0) + ((Math_imul($67 & 65535, $71) | 0) >> 16)) | 0;
    $79 = HEAP32[$39 + 12 >> 2] | 0;
    $83 = HEAP16[$44 + 6 >> 1] | 0;
    $89 = $77 + ((Math_imul($79 >> 16, $83) | 0) + ((Math_imul($79 & 65535, $83) | 0) >> 16)) | 0;
    $91 = HEAP32[$39 + 16 >> 2] | 0;
    $95 = HEAP16[$44 + 8 >> 1] | 0;
    $101 = $89 + ((Math_imul($91 >> 16, $95) | 0) + ((Math_imul($91 & 65535, $95) | 0) >> 16)) | 0;
    $103 = HEAP32[$39 + 20 >> 2] | 0;
    $107 = HEAP16[$44 + 10 >> 1] | 0;
    $113 = $101 + ((Math_imul($103 >> 16, $107) | 0) + ((Math_imul($103 & 65535, $107) | 0) >> 16)) | 0;
    $115 = HEAP32[$39 + 24 >> 2] | 0;
    $119 = HEAP16[$44 + 12 >> 1] | 0;
    $125 = $113 + ((Math_imul($115 >> 16, $119) | 0) + ((Math_imul($115 & 65535, $119) | 0) >> 16)) | 0;
    $127 = HEAP32[$39 + 28 >> 2] | 0;
    $131 = HEAP16[$44 + 14 >> 1] | 0;
    $137 = $125 + ((Math_imul($127 >> 16, $131) | 0) + ((Math_imul($127 & 65535, $131) | 0) >> 16)) | 0;
    $139 = HEAP32[$39 + 32 >> 2] | 0;
    $143 = HEAP16[$44 + 16 >> 1] | 0;
    $149 = $137 + ((Math_imul($139 >> 16, $143) | 0) + ((Math_imul($139 & 65535, $143) | 0) >> 16)) | 0;
    $152 = $2 + (($36 - $42 | 0) * 9 << 1) | 0;
    $154 = HEAP32[$39 + 68 >> 2] | 0;
    $157 = HEAP16[$152 >> 1] | 0;
    $163 = $149 + ((Math_imul($154 >> 16, $157) | 0) + ((Math_imul($154 & 65535, $157) | 0) >> 16)) | 0;
    $165 = HEAP32[$39 + 64 >> 2] | 0;
    $169 = HEAP16[$152 + 2 >> 1] | 0;
    $175 = $163 + ((Math_imul($165 >> 16, $169) | 0) + ((Math_imul($165 & 65535, $169) | 0) >> 16)) | 0;
    $177 = HEAP32[$39 + 60 >> 2] | 0;
    $181 = HEAP16[$152 + 4 >> 1] | 0;
    $187 = $175 + ((Math_imul($177 >> 16, $181) | 0) + ((Math_imul($177 & 65535, $181) | 0) >> 16)) | 0;
    $189 = HEAP32[$39 + 56 >> 2] | 0;
    $193 = HEAP16[$152 + 6 >> 1] | 0;
    $199 = $187 + ((Math_imul($189 >> 16, $193) | 0) + ((Math_imul($189 & 65535, $193) | 0) >> 16)) | 0;
    $201 = HEAP32[$39 + 52 >> 2] | 0;
    $205 = HEAP16[$152 + 8 >> 1] | 0;
    $211 = $199 + ((Math_imul($201 >> 16, $205) | 0) + ((Math_imul($201 & 65535, $205) | 0) >> 16)) | 0;
    $213 = HEAP32[$39 + 48 >> 2] | 0;
    $217 = HEAP16[$152 + 10 >> 1] | 0;
    $223 = $211 + ((Math_imul($213 >> 16, $217) | 0) + ((Math_imul($213 & 65535, $217) | 0) >> 16)) | 0;
    $225 = HEAP32[$39 + 44 >> 2] | 0;
    $229 = HEAP16[$152 + 12 >> 1] | 0;
    $235 = $223 + ((Math_imul($225 >> 16, $229) | 0) + ((Math_imul($225 & 65535, $229) | 0) >> 16)) | 0;
    $237 = HEAP32[$39 + 40 >> 2] | 0;
    $241 = HEAP16[$152 + 14 >> 1] | 0;
    $247 = $235 + ((Math_imul($237 >> 16, $241) | 0) + ((Math_imul($237 & 65535, $241) | 0) >> 16)) | 0;
    $249 = HEAP32[$39 + 36 >> 2] | 0;
    $253 = HEAP16[$152 + 16 >> 1] | 0;
    $262 = ($247 + ((Math_imul($249 >> 16, $253) | 0) + ((Math_imul($249 & 65535, $253) | 0) >> 16)) >> 5) + 1 >> 1;
    HEAP16[$$0 >> 1] = ($262 | 0) > 32767 ? 32767 : (($262 | 0) > -32768 ? $262 : -32768) & 65535;
    $$0 = $$0 + 2 | 0;
    $$01 = $$01 + $6 | 0;
   }
   return $$3 | 0;
  }
 case 24:
  {
   $24 = $2 + 2 | 0;
   $25 = $2 + 4 | 0;
   $26 = $2 + 6 | 0;
   $27 = $2 + 8 | 0;
   $28 = $2 + 10 | 0;
   $29 = $2 + 12 | 0;
   $30 = $2 + 14 | 0;
   $31 = $2 + 16 | 0;
   $32 = $2 + 18 | 0;
   $33 = $2 + 20 | 0;
   $34 = $2 + 22 | 0;
   $$1 = $0;
   $$12 = 0;
   while (1) {
    if (($$12 | 0) >= ($5 | 0)) {
     $$3 = $$1;
     break;
    }
    $271 = $1 + ($$12 >> 16 << 2) | 0;
    $275 = (HEAP32[$271 >> 2] | 0) + (HEAP32[$271 + 92 >> 2] | 0) | 0;
    $278 = HEAP16[$2 >> 1] | 0;
    $283 = (Math_imul($275 >> 16, $278) | 0) + ((Math_imul($275 & 65535, $278) | 0) >> 16) | 0;
    $288 = (HEAP32[$271 + 4 >> 2] | 0) + (HEAP32[$271 + 88 >> 2] | 0) | 0;
    $291 = HEAP16[$24 >> 1] | 0;
    $297 = $283 + ((Math_imul($288 >> 16, $291) | 0) + ((Math_imul($288 & 65535, $291) | 0) >> 16)) | 0;
    $302 = (HEAP32[$271 + 8 >> 2] | 0) + (HEAP32[$271 + 84 >> 2] | 0) | 0;
    $305 = HEAP16[$25 >> 1] | 0;
    $311 = $297 + ((Math_imul($302 >> 16, $305) | 0) + ((Math_imul($302 & 65535, $305) | 0) >> 16)) | 0;
    $316 = (HEAP32[$271 + 12 >> 2] | 0) + (HEAP32[$271 + 80 >> 2] | 0) | 0;
    $319 = HEAP16[$26 >> 1] | 0;
    $325 = $311 + ((Math_imul($316 >> 16, $319) | 0) + ((Math_imul($316 & 65535, $319) | 0) >> 16)) | 0;
    $330 = (HEAP32[$271 + 16 >> 2] | 0) + (HEAP32[$271 + 76 >> 2] | 0) | 0;
    $333 = HEAP16[$27 >> 1] | 0;
    $339 = $325 + ((Math_imul($330 >> 16, $333) | 0) + ((Math_imul($330 & 65535, $333) | 0) >> 16)) | 0;
    $344 = (HEAP32[$271 + 20 >> 2] | 0) + (HEAP32[$271 + 72 >> 2] | 0) | 0;
    $347 = HEAP16[$28 >> 1] | 0;
    $353 = $339 + ((Math_imul($344 >> 16, $347) | 0) + ((Math_imul($344 & 65535, $347) | 0) >> 16)) | 0;
    $358 = (HEAP32[$271 + 24 >> 2] | 0) + (HEAP32[$271 + 68 >> 2] | 0) | 0;
    $361 = HEAP16[$29 >> 1] | 0;
    $367 = $353 + ((Math_imul($358 >> 16, $361) | 0) + ((Math_imul($358 & 65535, $361) | 0) >> 16)) | 0;
    $372 = (HEAP32[$271 + 28 >> 2] | 0) + (HEAP32[$271 + 64 >> 2] | 0) | 0;
    $375 = HEAP16[$30 >> 1] | 0;
    $381 = $367 + ((Math_imul($372 >> 16, $375) | 0) + ((Math_imul($372 & 65535, $375) | 0) >> 16)) | 0;
    $386 = (HEAP32[$271 + 32 >> 2] | 0) + (HEAP32[$271 + 60 >> 2] | 0) | 0;
    $389 = HEAP16[$31 >> 1] | 0;
    $395 = $381 + ((Math_imul($386 >> 16, $389) | 0) + ((Math_imul($386 & 65535, $389) | 0) >> 16)) | 0;
    $400 = (HEAP32[$271 + 36 >> 2] | 0) + (HEAP32[$271 + 56 >> 2] | 0) | 0;
    $403 = HEAP16[$32 >> 1] | 0;
    $409 = $395 + ((Math_imul($400 >> 16, $403) | 0) + ((Math_imul($400 & 65535, $403) | 0) >> 16)) | 0;
    $414 = (HEAP32[$271 + 40 >> 2] | 0) + (HEAP32[$271 + 52 >> 2] | 0) | 0;
    $417 = HEAP16[$33 >> 1] | 0;
    $423 = $409 + ((Math_imul($414 >> 16, $417) | 0) + ((Math_imul($414 & 65535, $417) | 0) >> 16)) | 0;
    $428 = (HEAP32[$271 + 44 >> 2] | 0) + (HEAP32[$271 + 48 >> 2] | 0) | 0;
    $431 = HEAP16[$34 >> 1] | 0;
    $440 = ($423 + ((Math_imul($428 >> 16, $431) | 0) + ((Math_imul($428 & 65535, $431) | 0) >> 16)) >> 5) + 1 >> 1;
    HEAP16[$$1 >> 1] = ($440 | 0) > 32767 ? 32767 : (($440 | 0) > -32768 ? $440 : -32768) & 65535;
    $$1 = $$1 + 2 | 0;
    $$12 = $$12 + $6 | 0;
   }
   return $$3 | 0;
  }
 case 36:
  {
   $7 = $2 + 2 | 0;
   $8 = $2 + 4 | 0;
   $9 = $2 + 6 | 0;
   $10 = $2 + 8 | 0;
   $11 = $2 + 10 | 0;
   $12 = $2 + 12 | 0;
   $13 = $2 + 14 | 0;
   $14 = $2 + 16 | 0;
   $15 = $2 + 18 | 0;
   $16 = $2 + 20 | 0;
   $17 = $2 + 22 | 0;
   $18 = $2 + 24 | 0;
   $19 = $2 + 26 | 0;
   $20 = $2 + 28 | 0;
   $21 = $2 + 30 | 0;
   $22 = $2 + 32 | 0;
   $23 = $2 + 34 | 0;
   $$2 = $0;
   $$23 = 0;
   while (1) {
    if (($$23 | 0) >= ($5 | 0)) {
     $$3 = $$2;
     break;
    }
    $449 = $1 + ($$23 >> 16 << 2) | 0;
    $453 = (HEAP32[$449 >> 2] | 0) + (HEAP32[$449 + 140 >> 2] | 0) | 0;
    $456 = HEAP16[$2 >> 1] | 0;
    $461 = (Math_imul($453 >> 16, $456) | 0) + ((Math_imul($453 & 65535, $456) | 0) >> 16) | 0;
    $466 = (HEAP32[$449 + 4 >> 2] | 0) + (HEAP32[$449 + 136 >> 2] | 0) | 0;
    $469 = HEAP16[$7 >> 1] | 0;
    $475 = $461 + ((Math_imul($466 >> 16, $469) | 0) + ((Math_imul($466 & 65535, $469) | 0) >> 16)) | 0;
    $480 = (HEAP32[$449 + 8 >> 2] | 0) + (HEAP32[$449 + 132 >> 2] | 0) | 0;
    $483 = HEAP16[$8 >> 1] | 0;
    $489 = $475 + ((Math_imul($480 >> 16, $483) | 0) + ((Math_imul($480 & 65535, $483) | 0) >> 16)) | 0;
    $494 = (HEAP32[$449 + 12 >> 2] | 0) + (HEAP32[$449 + 128 >> 2] | 0) | 0;
    $497 = HEAP16[$9 >> 1] | 0;
    $503 = $489 + ((Math_imul($494 >> 16, $497) | 0) + ((Math_imul($494 & 65535, $497) | 0) >> 16)) | 0;
    $508 = (HEAP32[$449 + 16 >> 2] | 0) + (HEAP32[$449 + 124 >> 2] | 0) | 0;
    $511 = HEAP16[$10 >> 1] | 0;
    $517 = $503 + ((Math_imul($508 >> 16, $511) | 0) + ((Math_imul($508 & 65535, $511) | 0) >> 16)) | 0;
    $522 = (HEAP32[$449 + 20 >> 2] | 0) + (HEAP32[$449 + 120 >> 2] | 0) | 0;
    $525 = HEAP16[$11 >> 1] | 0;
    $531 = $517 + ((Math_imul($522 >> 16, $525) | 0) + ((Math_imul($522 & 65535, $525) | 0) >> 16)) | 0;
    $536 = (HEAP32[$449 + 24 >> 2] | 0) + (HEAP32[$449 + 116 >> 2] | 0) | 0;
    $539 = HEAP16[$12 >> 1] | 0;
    $545 = $531 + ((Math_imul($536 >> 16, $539) | 0) + ((Math_imul($536 & 65535, $539) | 0) >> 16)) | 0;
    $550 = (HEAP32[$449 + 28 >> 2] | 0) + (HEAP32[$449 + 112 >> 2] | 0) | 0;
    $553 = HEAP16[$13 >> 1] | 0;
    $559 = $545 + ((Math_imul($550 >> 16, $553) | 0) + ((Math_imul($550 & 65535, $553) | 0) >> 16)) | 0;
    $564 = (HEAP32[$449 + 32 >> 2] | 0) + (HEAP32[$449 + 108 >> 2] | 0) | 0;
    $567 = HEAP16[$14 >> 1] | 0;
    $573 = $559 + ((Math_imul($564 >> 16, $567) | 0) + ((Math_imul($564 & 65535, $567) | 0) >> 16)) | 0;
    $578 = (HEAP32[$449 + 36 >> 2] | 0) + (HEAP32[$449 + 104 >> 2] | 0) | 0;
    $581 = HEAP16[$15 >> 1] | 0;
    $587 = $573 + ((Math_imul($578 >> 16, $581) | 0) + ((Math_imul($578 & 65535, $581) | 0) >> 16)) | 0;
    $592 = (HEAP32[$449 + 40 >> 2] | 0) + (HEAP32[$449 + 100 >> 2] | 0) | 0;
    $595 = HEAP16[$16 >> 1] | 0;
    $601 = $587 + ((Math_imul($592 >> 16, $595) | 0) + ((Math_imul($592 & 65535, $595) | 0) >> 16)) | 0;
    $606 = (HEAP32[$449 + 44 >> 2] | 0) + (HEAP32[$449 + 96 >> 2] | 0) | 0;
    $609 = HEAP16[$17 >> 1] | 0;
    $615 = $601 + ((Math_imul($606 >> 16, $609) | 0) + ((Math_imul($606 & 65535, $609) | 0) >> 16)) | 0;
    $620 = (HEAP32[$449 + 48 >> 2] | 0) + (HEAP32[$449 + 92 >> 2] | 0) | 0;
    $623 = HEAP16[$18 >> 1] | 0;
    $629 = $615 + ((Math_imul($620 >> 16, $623) | 0) + ((Math_imul($620 & 65535, $623) | 0) >> 16)) | 0;
    $634 = (HEAP32[$449 + 52 >> 2] | 0) + (HEAP32[$449 + 88 >> 2] | 0) | 0;
    $637 = HEAP16[$19 >> 1] | 0;
    $643 = $629 + ((Math_imul($634 >> 16, $637) | 0) + ((Math_imul($634 & 65535, $637) | 0) >> 16)) | 0;
    $648 = (HEAP32[$449 + 56 >> 2] | 0) + (HEAP32[$449 + 84 >> 2] | 0) | 0;
    $651 = HEAP16[$20 >> 1] | 0;
    $657 = $643 + ((Math_imul($648 >> 16, $651) | 0) + ((Math_imul($648 & 65535, $651) | 0) >> 16)) | 0;
    $662 = (HEAP32[$449 + 60 >> 2] | 0) + (HEAP32[$449 + 80 >> 2] | 0) | 0;
    $665 = HEAP16[$21 >> 1] | 0;
    $671 = $657 + ((Math_imul($662 >> 16, $665) | 0) + ((Math_imul($662 & 65535, $665) | 0) >> 16)) | 0;
    $676 = (HEAP32[$449 + 64 >> 2] | 0) + (HEAP32[$449 + 76 >> 2] | 0) | 0;
    $679 = HEAP16[$22 >> 1] | 0;
    $685 = $671 + ((Math_imul($676 >> 16, $679) | 0) + ((Math_imul($676 & 65535, $679) | 0) >> 16)) | 0;
    $690 = (HEAP32[$449 + 68 >> 2] | 0) + (HEAP32[$449 + 72 >> 2] | 0) | 0;
    $693 = HEAP16[$23 >> 1] | 0;
    $702 = ($685 + ((Math_imul($690 >> 16, $693) | 0) + ((Math_imul($690 & 65535, $693) | 0) >> 16)) >> 5) + 1 >> 1;
    HEAP16[$$2 >> 1] = ($702 | 0) > 32767 ? 32767 : (($702 | 0) > -32768 ? $702 : -32768) & 65535;
    $$2 = $$2 + 2 | 0;
    $$23 = $$23 + $6 | 0;
   }
   return $$3 | 0;
  }
 default:
  {
   $$3 = $0;
   return $$3 | 0;
  }
 }
 return 0;
}

function _silk_Decode($0, $1, $2, $3, $4, $5, $6) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 var $$0 = 0, $$016 = 0, $$02 = 0, $$03 = 0, $$04 = 0, $$08 = 0, $$117 = 0, $$16 = 0, $$19 = 0, $$2 = 0, $$210 = 0, $$218 = 0, $$27 = 0, $$3 = 0, $$311 = 0, $$319 = 0, $$4 = 0, $$412 = 0, $$420 = 0, $$513 = 0, $$521 = 0, $$614 = 0, $$622 = 0, $$715 = 0, $$phi$trans$insert = 0, $$pr = 0, $$pre$phi37Z2D = 0, $$pre$phi41Z2D = 0, $$pre28 = 0, $$pre31 = 0, $$pre32 = 0, $$sink = 0, $$sink23 = 0, $$sink51 = 0, $$sink54 = 0, $$sink56 = 0, $10 = 0, $100 = 0, $109 = 0, $11 = 0, $110 = 0, $113 = 0, $114 = 0, $115 = 0, $117 = 0, $12 = 0, $139 = 0, $141 = 0, $17 = 0, $175 = 0, $176 = 0, $180 = 0, $183 = 0, $186 = 0, $187 = 0, $188 = 0, $191 = 0, $192 = 0, $197 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $216 = 0, $237 = 0, $24 = 0, $245 = 0, $247 = 0, $248 = 0, $249 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $255 = 0, $256 = 0, $260 = 0, $261 = 0, $263 = 0, $266 = 0, $268 = 0, $269 = 0, $27 = 0, $273 = 0, $280 = 0, $295 = 0, $306 = 0, $329 = 0, $330 = 0, $331 = 0, $332 = 0, $36 = 0, $39 = 0, $40 = 0, $41 = 0, $43 = 0, $48 = 0, $53 = 0, $55 = 0, $58 = 0, $69 = 0, $7 = 0, $71 = 0, $74 = 0, $77 = 0, $79 = 0, $8 = 0, $81 = 0, $82 = 0, $88 = 0, $89 = 0, $9 = 0, $93 = 0, $94 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 672 | 0;
 $7 = sp + 20 | 0;
 $8 = sp + 16 | 0;
 $9 = sp + 8 | 0;
 $10 = sp;
 $11 = sp + 24 | 0;
 HEAP32[$7 >> 2] = 0;
 $12 = $10;
 HEAP32[$12 >> 2] = 0;
 HEAP32[$12 + 4 >> 2] = 0;
 $$phi$trans$insert = $1 + 4 | 0;
 L1 : do if (!$3) $24 = HEAP32[$$phi$trans$insert >> 2] | 0; else {
  $$08 = 0;
  while (1) {
   $17 = HEAP32[$$phi$trans$insert >> 2] | 0;
   if (($$08 | 0) >= ($17 | 0)) {
    $24 = $17;
    break L1;
   }
   HEAP32[$0 + ($$08 * 4264 | 0) + 2388 >> 2] = 0;
   $$08 = $$08 + 1 | 0;
  }
 } while (0);
 $21 = $0 + 8544 | 0;
 if (($24 | 0) > (HEAP32[$21 >> 2] | 0)) {
  _silk_init_decoder($0 + 4264 | 0);
  $27 = HEAP32[$$phi$trans$insert >> 2] | 0;
 } else $27 = $24;
 if (($27 | 0) == 1) if ((HEAP32[$21 >> 2] | 0) == 2) $330 = (HEAP32[$1 + 12 >> 2] | 0) == ((HEAP32[$0 + 2316 >> 2] | 0) * 1e3 | 0); else $330 = 0; else $330 = 0;
 $36 = $0 + 2388 | 0;
 L14 : do if (!(HEAP32[$36 >> 2] | 0)) {
  $39 = $1 + 16 | 0;
  $40 = $1 + 12 | 0;
  $41 = $1 + 8 | 0;
  $$16 = 0;
  $$19 = 0;
  $43 = $27;
  L16 : while (1) {
   if (($$19 | 0) >= ($43 | 0)) {
    $$27 = $$16;
    $58 = $43;
    break L14;
   }
   switch (HEAP32[$39 >> 2] | 0) {
   case 10:
   case 0:
    {
     $$sink = 2;
     $$sink51 = 1;
     break;
    }
   case 20:
    {
     $$sink = 4;
     $$sink51 = 1;
     break;
    }
   case 40:
    {
     $$sink = 4;
     $$sink51 = 2;
     break;
    }
   case 60:
    {
     $$sink = 4;
     $$sink51 = 3;
     break;
    }
   default:
    {
     $$0 = -203;
     label = 119;
     break L16;
    }
   }
   HEAP32[$0 + ($$19 * 4264 | 0) + 2392 >> 2] = $$sink51;
   HEAP32[$0 + ($$19 * 4264 | 0) + 2324 >> 2] = $$sink;
   $48 = HEAP32[$40 >> 2] >> 10;
   switch ($48 | 0) {
   case 15:
   case 11:
   case 7:
    break;
   default:
    {
     $$0 = -200;
     label = 119;
     break L16;
    }
   }
   $53 = $$16 + (_silk_decoder_set_fs($0 + ($$19 * 4264 | 0) | 0, $48 + 1 | 0, HEAP32[$41 >> 2] | 0) | 0) | 0;
   $$16 = $53;
   $$19 = $$19 + 1 | 0;
   $43 = HEAP32[$$phi$trans$insert >> 2] | 0;
  }
  if ((label | 0) == 119) {
   STACKTOP = sp;
   return $$0 | 0;
  }
 } else {
  $$27 = 0;
  $58 = $27;
 } while (0);
 $55 = HEAP32[$1 >> 2] | 0;
 do if (($55 | 0) == 2) if (($58 | 0) == 2) {
  if ((HEAP32[$0 + 8540 >> 2] | 0) != 1) if ((HEAP32[$21 >> 2] | 0) != 1) {
   $69 = 2;
   break;
  }
  HEAP32[$0 + 8528 >> 2] = 0;
  HEAP32[$0 + 8536 >> 2] = 0;
  _memcpy($0 + 6696 | 0, $0 + 2432 | 0, 300) | 0;
  $69 = HEAP32[$1 >> 2] | 0;
 } else $69 = 2; else $69 = $55; while (0);
 HEAP32[$0 + 8540 >> 2] = $69;
 HEAP32[$21 >> 2] = HEAP32[$$phi$trans$insert >> 2];
 $71 = $1 + 8 | 0;
 if (((HEAP32[$71 >> 2] | 0) + -8e3 | 0) >>> 0 > 4e4) {
  $$0 = -200;
  STACKTOP = sp;
  return $$0 | 0;
 }
 $74 = ($2 | 0) == 1;
 L39 : do if (!$74) if (!(HEAP32[$36 >> 2] | 0)) {
  $$210 = 0;
  while (1) {
   $77 = HEAP32[$$phi$trans$insert >> 2] | 0;
   if (($$210 | 0) >= ($77 | 0)) {
    $$311 = 0;
    $88 = $77;
    break;
   }
   $79 = $0 + ($$210 * 4264 | 0) + 2392 | 0;
   $$016 = 0;
   while (1) {
    $81 = ($$016 | 0) < (HEAP32[$79 >> 2] | 0);
    $82 = _ec_dec_bit_logp($4, 1) | 0;
    if (!$81) break;
    HEAP32[$0 + ($$210 * 4264 | 0) + 2404 + ($$016 << 2) >> 2] = $82;
    $$016 = $$016 + 1 | 0;
   }
   HEAP32[$0 + ($$210 * 4264 | 0) + 2416 >> 2] = $82;
   $$210 = $$210 + 1 | 0;
  }
  while (1) {
   if (($$311 | 0) >= ($88 | 0)) break;
   $89 = $0 + ($$311 * 4264 | 0) + 2420 | 0;
   HEAP32[$89 >> 2] = 0;
   HEAP32[$89 + 4 >> 2] = 0;
   HEAP32[$89 + 8 >> 2] = 0;
   L51 : do if (HEAP32[$0 + ($$311 * 4264 | 0) + 2416 >> 2] | 0) {
    $93 = $0 + ($$311 * 4264 | 0) + 2392 | 0;
    $94 = HEAP32[$93 >> 2] | 0;
    if (($94 | 0) == 1) {
     HEAP32[$89 >> 2] = 1;
     break;
    }
    $100 = (_ec_dec_icdf($4, HEAP32[18864 + ($94 + -2 << 2) >> 2] | 0, 8) | 0) + 1 | 0;
    $$117 = 0;
    while (1) {
     if (($$117 | 0) >= (HEAP32[$93 >> 2] | 0)) break L51;
     HEAP32[$0 + ($$311 * 4264 | 0) + 2420 + ($$117 << 2) >> 2] = $100 >>> $$117 & 1;
     $$117 = $$117 + 1 | 0;
    }
   } while (0);
   $$311 = $$311 + 1 | 0;
   $88 = HEAP32[$$phi$trans$insert >> 2] | 0;
  }
  if (!$2) {
   $109 = $0 + 2392 | 0;
   $110 = $0 + 6684 | 0;
   $$218 = 0;
   $331 = $88;
   while (1) {
    if (($$218 | 0) >= (HEAP32[$109 >> 2] | 0)) break L39;
    $113 = $110 + ($$218 << 2) | 0;
    $114 = ($$218 | 0) > 0;
    $115 = $$218 + -1 | 0;
    $$412 = 0;
    $117 = $331;
    while (1) {
     if (($$412 | 0) >= ($117 | 0)) break;
     if (!(HEAP32[$0 + ($$412 * 4264 | 0) + 2420 + ($$218 << 2) >> 2] | 0)) $$pre28 = $117; else {
      if (($117 | 0) == 2 & ($$412 | 0) == 0) {
       _silk_stereo_decode_pred($4, $10);
       if (!(HEAP32[$113 >> 2] | 0)) _silk_stereo_decode_mid_only($4, $7);
      }
      if ($114) if (!(HEAP32[$0 + ($$412 * 4264 | 0) + 2420 + ($115 << 2) >> 2] | 0)) label = 51; else $$02 = 2; else label = 51;
      if ((label | 0) == 51) {
       label = 0;
       $$02 = 0;
      }
      _silk_decode_indices($0 + ($$412 * 4264 | 0) | 0, $4, $$218, 1, $$02);
      _silk_decode_pulses($4, $11, HEAP8[$0 + ($$412 * 4264 | 0) + 2765 >> 0] | 0, HEAP8[$0 + ($$412 * 4264 | 0) + 2766 >> 0] | 0, HEAP32[$0 + ($$412 * 4264 | 0) + 2328 >> 2] | 0);
      $$pre28 = HEAP32[$$phi$trans$insert >> 2] | 0;
     }
     $$412 = $$412 + 1 | 0;
     $117 = $$pre28;
    }
    $$218 = $$218 + 1 | 0;
    $331 = $117;
   }
  }
 } while (0);
 $139 = HEAP32[$$phi$trans$insert >> 2] | 0;
 if (($139 | 0) == 2) {
  switch ($2 | 0) {
  case 0:
   {
    _silk_stereo_decode_pred($4, $10);
    if (!(HEAP32[$0 + 6668 + (HEAP32[$36 >> 2] << 2) >> 2] | 0)) label = 61; else label = 62;
    break;
   }
  case 2:
   {
    if ((HEAP32[$0 + 2420 + (HEAP32[$36 >> 2] << 2) >> 2] | 0) == 1) {
     _silk_stereo_decode_pred($4, $10);
     if (!(HEAP32[$0 + 6684 + (HEAP32[$36 >> 2] << 2) >> 2] | 0)) label = 61; else label = 62;
    } else label = 57;
    break;
   }
  default:
   label = 57;
  }
  L88 : do if ((label | 0) == 57) {
   $141 = $0 + 8528 | 0;
   $$513 = 0;
   while (1) {
    if (($$513 | 0) == 2) break L88;
    HEAP32[$10 + ($$513 << 2) >> 2] = HEAP16[$141 + ($$513 << 1) >> 1];
    $$513 = $$513 + 1 | 0;
   }
  } else if ((label | 0) == 61) _silk_stereo_decode_mid_only($4, $7); else if ((label | 0) == 62) HEAP32[$7 >> 2] = 0; while (0);
  $$pr = HEAP32[$$phi$trans$insert >> 2] | 0;
  if (($$pr | 0) == 2) if (!(HEAP32[$7 >> 2] | 0)) if ((HEAP32[$0 + 8548 >> 2] | 0) == 1) {
   _memset($0 + 5548 | 0, 0, 1024) | 0;
   HEAP32[$0 + 6572 >> 2] = 100;
   HEAP8[$0 + 6576 >> 0] = 10;
   HEAP32[$0 + 8428 >> 2] = 0;
   HEAP32[$0 + 6640 >> 2] = 1;
   $176 = HEAP32[$$phi$trans$insert >> 2] | 0;
  } else $176 = 2; else $176 = 2; else $176 = $$pr;
 } else $176 = $139;
 $175 = Math_imul(HEAP32[$1 + 12 >> 2] | 0, $176) | 0;
 $180 = ($175 | 0) < (Math_imul(HEAP32[$71 >> 2] | 0, HEAP32[$1 >> 2] | 0) | 0);
 if ($180) {
  $$sink54 = $5;
  $$sink56 = $0 + 2328 | 0;
  $329 = _llvm_stacksave() | 0;
 } else {
  $183 = $0 + 2328 | 0;
  $186 = Math_imul($176, (HEAP32[$183 >> 2] | 0) + 2 | 0) | 0;
  $187 = _llvm_stacksave() | 0;
  $188 = STACKTOP;
  STACKTOP = STACKTOP + ((1 * ($186 << 1) | 0) + 15 & -16) | 0;
  $$sink54 = $188;
  $$sink56 = $183;
  $329 = $187;
 }
 $191 = $$sink54 + (HEAP32[$$sink56 >> 2] << 1) + 4 | 0;
 HEAP32[$9 >> 2] = $$sink54;
 $192 = $9 + 4 | 0;
 HEAP32[$192 >> 2] = $191;
 if (!$2) {
  $$03 = (HEAP32[$7 >> 2] | 0) == 0 & 1;
  $$pre$phi37Z2D = $0 + 8548 | 0;
 } else {
  $197 = $0 + 8548 | 0;
  if (!(HEAP32[$197 >> 2] | 0)) $210 = 1; else if ((HEAP32[$$phi$trans$insert >> 2] | 0) == 2 & ($2 | 0) == 2) $210 = (HEAP32[$0 + 6684 + (HEAP32[$0 + 6652 >> 2] << 2) >> 2] | 0) == 1; else $210 = 0;
  $$03 = $210 & 1;
  $$pre$phi37Z2D = $197;
 }
 $211 = ($2 | 0) == 2;
 $$3 = $$27;
 $$614 = 0;
 while (1) {
  $212 = HEAP32[$$phi$trans$insert >> 2] | 0;
  if (($$614 | 0) >= ($212 | 0)) break;
  if (($$614 | 0) == 0 | ($$03 | 0) != 0) {
   $216 = (HEAP32[$36 >> 2] | 0) - $$614 | 0;
   do if (($216 | 0) < 1) $$2 = 0; else {
    if ($211) {
     $$2 = HEAP32[$0 + ($$614 * 4264 | 0) + 2420 + ($216 + -1 << 2) >> 2] | 0 ? 2 : 0;
     break;
    }
    if (($$614 | 0) > 0) if (HEAP32[$$pre$phi37Z2D >> 2] | 0) {
     $$2 = 1;
     break;
    }
    $$2 = 2;
   } while (0);
   $$4 = $$3 + (_silk_decode_frame($0 + ($$614 * 4264 | 0) | 0, $4, (HEAP32[$9 + ($$614 << 2) >> 2] | 0) + 4 | 0, $8, $2, $$2) | 0) | 0;
  } else {
   _memset((HEAP32[$9 + ($$614 << 2) >> 2] | 0) + 4 | 0, 0, HEAP32[$8 >> 2] << 1 | 0) | 0;
   $$4 = $$3;
  }
  $237 = $0 + ($$614 * 4264 | 0) + 2388 | 0;
  HEAP32[$237 >> 2] = (HEAP32[$237 >> 2] | 0) + 1;
  $$3 = $$4;
  $$614 = $$614 + 1 | 0;
 }
 if ((HEAP32[$1 >> 2] | 0) == 2 & ($212 | 0) == 2) {
  $245 = $0 + 2316 | 0;
  $247 = HEAP32[$8 >> 2] | 0;
  _silk_stereo_MS_to_LR($0 + 8528 | 0, $$sink54, $191, $10, HEAP32[$245 >> 2] | 0, $247);
  $$pre$phi41Z2D = $245;
  $256 = $247;
  $332 = $$sink54;
 } else {
  $248 = $0 + 8532 | 0;
  $249 = HEAPU16[$248 >> 1] | HEAPU16[$248 + 2 >> 1] << 16;
  HEAP16[$$sink54 >> 1] = $249;
  HEAP16[$$sink54 + 2 >> 1] = $249 >>> 16;
  $250 = HEAP32[$9 >> 2] | 0;
  $251 = HEAP32[$8 >> 2] | 0;
  $252 = $250 + ($251 << 1) | 0;
  $253 = HEAPU16[$252 >> 1] | HEAPU16[$252 + 2 >> 1] << 16;
  HEAP16[$248 >> 1] = $253;
  HEAP16[$248 + 2 >> 1] = $253 >>> 16;
  $$pre$phi41Z2D = $0 + 2316 | 0;
  $256 = $251;
  $332 = $250;
 }
 $255 = Math_imul($256, HEAP32[$71 >> 2] | 0) | 0;
 $260 = ($255 | 0) / ((HEAP32[$$pre$phi41Z2D >> 2] << 16 >> 16) * 1e3 | 0) | 0;
 HEAP32[$6 >> 2] = $260;
 $261 = HEAP32[$1 >> 2] | 0;
 if (($261 | 0) == 2) {
  $263 = STACKTOP;
  STACKTOP = STACKTOP + ((1 * ($260 << 1) | 0) + 15 & -16) | 0;
  $$04 = $263;
 } else $$04 = $5;
 if ($180) {
  $266 = HEAP32[$0 + 2328 >> 2] | 0;
  $268 = Math_imul(HEAP32[$$phi$trans$insert >> 2] | 0, $266 + 2 | 0) | 0;
  $269 = STACKTOP;
  STACKTOP = STACKTOP + ((1 * ($268 << 1) | 0) + 15 & -16) | 0;
  _memcpy($269 | 0, $5 | 0, $268 << 1 | 0) | 0;
  HEAP32[$9 >> 2] = $269;
  HEAP32[$192 >> 2] = $269 + ($266 << 1) + 4;
  $295 = $269;
 } else $295 = $332;
 $$715 = 0;
 $$pre32 = $261;
 while (1) {
  $273 = HEAP32[$$phi$trans$insert >> 2] | 0;
  if (($$715 | 0) >= ((($$pre32 | 0) < ($273 | 0) ? $$pre32 : $273) | 0)) break;
  _silk_resampler($0 + ($$715 * 4264 | 0) + 2432 | 0, $$04, (HEAP32[$9 + ($$715 << 2) >> 2] | 0) + 2 | 0, $256);
  $280 = HEAP32[$1 >> 2] | 0;
  if (($280 | 0) == 2) {
   $$319 = 0;
   while (1) {
    if (($$319 | 0) >= (HEAP32[$6 >> 2] | 0)) break;
    HEAP16[$5 + ($$715 + ($$319 << 1) << 1) >> 1] = HEAP16[$$04 + ($$319 << 1) >> 1] | 0;
    $$319 = $$319 + 1 | 0;
   }
   $$pre31 = HEAP32[$1 >> 2] | 0;
  } else $$pre31 = $280;
  $$715 = $$715 + 1 | 0;
  $$pre32 = $$pre31;
 }
 L149 : do if (($$pre32 | 0) == 2 & ($273 | 0) == 1) {
  if (!$330) {
   $$521 = 0;
   while (1) {
    if (($$521 | 0) >= (HEAP32[$6 >> 2] | 0)) break L149;
    $306 = $$521 << 1;
    HEAP16[$5 + (($306 | 1) << 1) >> 1] = HEAP16[$5 + ($306 << 1) >> 1] | 0;
    $$521 = $$521 + 1 | 0;
   }
  }
  _silk_resampler($0 + 6696 | 0, $$04, $295 + 2 | 0, $256);
  $$420 = 0;
  while (1) {
   if (($$420 | 0) >= (HEAP32[$6 >> 2] | 0)) break L149;
   HEAP16[$5 + (($$420 << 1 | 1) << 1) >> 1] = HEAP16[$$04 + ($$420 << 1) >> 1] | 0;
   $$420 = $$420 + 1 | 0;
  }
 } while (0);
 if ((HEAP32[$0 + 4164 >> 2] | 0) == 2) $$sink23 = Math_imul(HEAP32[$0 + 2308 >> 2] | 0, HEAP32[18748 + ((HEAP32[$$pre$phi41Z2D >> 2] | 0) + -8 >> 2 << 2) >> 2] | 0) | 0; else $$sink23 = 0;
 HEAP32[$1 + 20 >> 2] = $$sink23;
 L163 : do if ($74) {
  $$622 = 0;
  while (1) {
   if (($$622 | 0) >= (HEAP32[$21 >> 2] | 0)) break L163;
   HEAP8[$0 + ($$622 * 4264 | 0) + 2312 >> 0] = 10;
   $$622 = $$622 + 1 | 0;
  }
 } else HEAP32[$$pre$phi37Z2D >> 2] = HEAP32[$7 >> 2]; while (0);
 _llvm_stackrestore($329 | 0);
 $$0 = $$3;
 STACKTOP = sp;
 return $$0 | 0;
}

function _free($0) {
 $0 = $0 | 0;
 var $$0212$i = 0, $$0212$in$i = 0, $$0383 = 0, $$0384 = 0, $$0396 = 0, $$0403 = 0, $$1 = 0, $$1382 = 0, $$1387 = 0, $$1390 = 0, $$1398 = 0, $$1402 = 0, $$2 = 0, $$3 = 0, $$3400 = 0, $$pre$phi443Z2D = 0, $$pre$phi445Z2D = 0, $$pre$phiZ2D = 0, $10 = 0, $104 = 0, $105 = 0, $113 = 0, $114 = 0, $115 = 0, $122 = 0, $124 = 0, $13 = 0, $130 = 0, $135 = 0, $136 = 0, $139 = 0, $141 = 0, $143 = 0, $158 = 0, $16 = 0, $163 = 0, $165 = 0, $168 = 0, $17 = 0, $171 = 0, $174 = 0, $177 = 0, $178 = 0, $179 = 0, $181 = 0, $183 = 0, $184 = 0, $186 = 0, $187 = 0, $193 = 0, $194 = 0, $2 = 0, $207 = 0, $21 = 0, $210 = 0, $211 = 0, $217 = 0, $232 = 0, $235 = 0, $236 = 0, $237 = 0, $24 = 0, $241 = 0, $242 = 0, $248 = 0, $253 = 0, $254 = 0, $257 = 0, $259 = 0, $26 = 0, $262 = 0, $267 = 0, $273 = 0, $277 = 0, $278 = 0, $28 = 0, $296 = 0, $298 = 0, $3 = 0, $305 = 0, $306 = 0, $307 = 0, $315 = 0, $41 = 0, $46 = 0, $48 = 0, $51 = 0, $53 = 0, $56 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $63 = 0, $65 = 0, $66 = 0, $68 = 0, $69 = 0, $7 = 0, $74 = 0, $75 = 0, $88 = 0, $9 = 0, $91 = 0, $92 = 0, $98 = 0, label = 0;
 if (!$0) return;
 $2 = $0 + -8 | 0;
 $3 = HEAP32[7076] | 0;
 if ($2 >>> 0 < $3 >>> 0) _abort();
 $6 = HEAP32[$0 + -4 >> 2] | 0;
 $7 = $6 & 3;
 if (($7 | 0) == 1) _abort();
 $9 = $6 & -8;
 $10 = $2 + $9 | 0;
 L10 : do if (!($6 & 1)) {
  $13 = HEAP32[$2 >> 2] | 0;
  if (!$7) return;
  $16 = $2 + (0 - $13) | 0;
  $17 = $13 + $9 | 0;
  if ($16 >>> 0 < $3 >>> 0) _abort();
  if (($16 | 0) == (HEAP32[7077] | 0)) {
   $104 = $10 + 4 | 0;
   $105 = HEAP32[$104 >> 2] | 0;
   if (($105 & 3 | 0) != 3) {
    $$1 = $16;
    $$1382 = $17;
    $113 = $16;
    break;
   }
   HEAP32[7074] = $17;
   HEAP32[$104 >> 2] = $105 & -2;
   HEAP32[$16 + 4 >> 2] = $17 | 1;
   HEAP32[$16 + $17 >> 2] = $17;
   return;
  }
  $21 = $13 >>> 3;
  if ($13 >>> 0 < 256) {
   $24 = HEAP32[$16 + 8 >> 2] | 0;
   $26 = HEAP32[$16 + 12 >> 2] | 0;
   $28 = 28328 + ($21 << 1 << 2) | 0;
   if (($24 | 0) != ($28 | 0)) {
    if ($24 >>> 0 < $3 >>> 0) _abort();
    if ((HEAP32[$24 + 12 >> 2] | 0) != ($16 | 0)) _abort();
   }
   if (($26 | 0) == ($24 | 0)) {
    HEAP32[7072] = HEAP32[7072] & ~(1 << $21);
    $$1 = $16;
    $$1382 = $17;
    $113 = $16;
    break;
   }
   if (($26 | 0) == ($28 | 0)) $$pre$phi445Z2D = $26 + 8 | 0; else {
    if ($26 >>> 0 < $3 >>> 0) _abort();
    $41 = $26 + 8 | 0;
    if ((HEAP32[$41 >> 2] | 0) == ($16 | 0)) $$pre$phi445Z2D = $41; else _abort();
   }
   HEAP32[$24 + 12 >> 2] = $26;
   HEAP32[$$pre$phi445Z2D >> 2] = $24;
   $$1 = $16;
   $$1382 = $17;
   $113 = $16;
   break;
  }
  $46 = HEAP32[$16 + 24 >> 2] | 0;
  $48 = HEAP32[$16 + 12 >> 2] | 0;
  do if (($48 | 0) == ($16 | 0)) {
   $59 = $16 + 16 | 0;
   $60 = $59 + 4 | 0;
   $61 = HEAP32[$60 >> 2] | 0;
   if (!$61) {
    $63 = HEAP32[$59 >> 2] | 0;
    if (!$63) {
     $$3 = 0;
     break;
    } else {
     $$1387 = $63;
     $$1390 = $59;
    }
   } else {
    $$1387 = $61;
    $$1390 = $60;
   }
   while (1) {
    $65 = $$1387 + 20 | 0;
    $66 = HEAP32[$65 >> 2] | 0;
    if ($66 | 0) {
     $$1387 = $66;
     $$1390 = $65;
     continue;
    }
    $68 = $$1387 + 16 | 0;
    $69 = HEAP32[$68 >> 2] | 0;
    if (!$69) break; else {
     $$1387 = $69;
     $$1390 = $68;
    }
   }
   if ($$1390 >>> 0 < $3 >>> 0) _abort(); else {
    HEAP32[$$1390 >> 2] = 0;
    $$3 = $$1387;
    break;
   }
  } else {
   $51 = HEAP32[$16 + 8 >> 2] | 0;
   if ($51 >>> 0 < $3 >>> 0) _abort();
   $53 = $51 + 12 | 0;
   if ((HEAP32[$53 >> 2] | 0) != ($16 | 0)) _abort();
   $56 = $48 + 8 | 0;
   if ((HEAP32[$56 >> 2] | 0) == ($16 | 0)) {
    HEAP32[$53 >> 2] = $48;
    HEAP32[$56 >> 2] = $51;
    $$3 = $48;
    break;
   } else _abort();
  } while (0);
  if (!$46) {
   $$1 = $16;
   $$1382 = $17;
   $113 = $16;
  } else {
   $74 = HEAP32[$16 + 28 >> 2] | 0;
   $75 = 28592 + ($74 << 2) | 0;
   do if (($16 | 0) == (HEAP32[$75 >> 2] | 0)) {
    HEAP32[$75 >> 2] = $$3;
    if (!$$3) {
     HEAP32[7073] = HEAP32[7073] & ~(1 << $74);
     $$1 = $16;
     $$1382 = $17;
     $113 = $16;
     break L10;
    }
   } else if ($46 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort(); else {
    HEAP32[$46 + 16 + (((HEAP32[$46 + 16 >> 2] | 0) != ($16 | 0) & 1) << 2) >> 2] = $$3;
    if (!$$3) {
     $$1 = $16;
     $$1382 = $17;
     $113 = $16;
     break L10;
    } else break;
   } while (0);
   $88 = HEAP32[7076] | 0;
   if ($$3 >>> 0 < $88 >>> 0) _abort();
   HEAP32[$$3 + 24 >> 2] = $46;
   $91 = $16 + 16 | 0;
   $92 = HEAP32[$91 >> 2] | 0;
   do if ($92 | 0) if ($92 >>> 0 < $88 >>> 0) _abort(); else {
    HEAP32[$$3 + 16 >> 2] = $92;
    HEAP32[$92 + 24 >> 2] = $$3;
    break;
   } while (0);
   $98 = HEAP32[$91 + 4 >> 2] | 0;
   if (!$98) {
    $$1 = $16;
    $$1382 = $17;
    $113 = $16;
   } else if ($98 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort(); else {
    HEAP32[$$3 + 20 >> 2] = $98;
    HEAP32[$98 + 24 >> 2] = $$3;
    $$1 = $16;
    $$1382 = $17;
    $113 = $16;
    break;
   }
  }
 } else {
  $$1 = $2;
  $$1382 = $9;
  $113 = $2;
 } while (0);
 if ($113 >>> 0 >= $10 >>> 0) _abort();
 $114 = $10 + 4 | 0;
 $115 = HEAP32[$114 >> 2] | 0;
 if (!($115 & 1)) _abort();
 if (!($115 & 2)) {
  $122 = HEAP32[7077] | 0;
  if (($10 | 0) == (HEAP32[7078] | 0)) {
   $124 = (HEAP32[7075] | 0) + $$1382 | 0;
   HEAP32[7075] = $124;
   HEAP32[7078] = $$1;
   HEAP32[$$1 + 4 >> 2] = $124 | 1;
   if (($$1 | 0) != ($122 | 0)) return;
   HEAP32[7077] = 0;
   HEAP32[7074] = 0;
   return;
  }
  if (($10 | 0) == ($122 | 0)) {
   $130 = (HEAP32[7074] | 0) + $$1382 | 0;
   HEAP32[7074] = $130;
   HEAP32[7077] = $113;
   HEAP32[$$1 + 4 >> 2] = $130 | 1;
   HEAP32[$113 + $130 >> 2] = $130;
   return;
  }
  $135 = ($115 & -8) + $$1382 | 0;
  $136 = $115 >>> 3;
  L108 : do if ($115 >>> 0 < 256) {
   $139 = HEAP32[$10 + 8 >> 2] | 0;
   $141 = HEAP32[$10 + 12 >> 2] | 0;
   $143 = 28328 + ($136 << 1 << 2) | 0;
   if (($139 | 0) != ($143 | 0)) {
    if ($139 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort();
    if ((HEAP32[$139 + 12 >> 2] | 0) != ($10 | 0)) _abort();
   }
   if (($141 | 0) == ($139 | 0)) {
    HEAP32[7072] = HEAP32[7072] & ~(1 << $136);
    break;
   }
   if (($141 | 0) == ($143 | 0)) $$pre$phi443Z2D = $141 + 8 | 0; else {
    if ($141 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort();
    $158 = $141 + 8 | 0;
    if ((HEAP32[$158 >> 2] | 0) == ($10 | 0)) $$pre$phi443Z2D = $158; else _abort();
   }
   HEAP32[$139 + 12 >> 2] = $141;
   HEAP32[$$pre$phi443Z2D >> 2] = $139;
  } else {
   $163 = HEAP32[$10 + 24 >> 2] | 0;
   $165 = HEAP32[$10 + 12 >> 2] | 0;
   do if (($165 | 0) == ($10 | 0)) {
    $177 = $10 + 16 | 0;
    $178 = $177 + 4 | 0;
    $179 = HEAP32[$178 >> 2] | 0;
    if (!$179) {
     $181 = HEAP32[$177 >> 2] | 0;
     if (!$181) {
      $$3400 = 0;
      break;
     } else {
      $$1398 = $181;
      $$1402 = $177;
     }
    } else {
     $$1398 = $179;
     $$1402 = $178;
    }
    while (1) {
     $183 = $$1398 + 20 | 0;
     $184 = HEAP32[$183 >> 2] | 0;
     if ($184 | 0) {
      $$1398 = $184;
      $$1402 = $183;
      continue;
     }
     $186 = $$1398 + 16 | 0;
     $187 = HEAP32[$186 >> 2] | 0;
     if (!$187) break; else {
      $$1398 = $187;
      $$1402 = $186;
     }
    }
    if ($$1402 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort(); else {
     HEAP32[$$1402 >> 2] = 0;
     $$3400 = $$1398;
     break;
    }
   } else {
    $168 = HEAP32[$10 + 8 >> 2] | 0;
    if ($168 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort();
    $171 = $168 + 12 | 0;
    if ((HEAP32[$171 >> 2] | 0) != ($10 | 0)) _abort();
    $174 = $165 + 8 | 0;
    if ((HEAP32[$174 >> 2] | 0) == ($10 | 0)) {
     HEAP32[$171 >> 2] = $165;
     HEAP32[$174 >> 2] = $168;
     $$3400 = $165;
     break;
    } else _abort();
   } while (0);
   if ($163 | 0) {
    $193 = HEAP32[$10 + 28 >> 2] | 0;
    $194 = 28592 + ($193 << 2) | 0;
    do if (($10 | 0) == (HEAP32[$194 >> 2] | 0)) {
     HEAP32[$194 >> 2] = $$3400;
     if (!$$3400) {
      HEAP32[7073] = HEAP32[7073] & ~(1 << $193);
      break L108;
     }
    } else if ($163 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort(); else {
     HEAP32[$163 + 16 + (((HEAP32[$163 + 16 >> 2] | 0) != ($10 | 0) & 1) << 2) >> 2] = $$3400;
     if (!$$3400) break L108; else break;
    } while (0);
    $207 = HEAP32[7076] | 0;
    if ($$3400 >>> 0 < $207 >>> 0) _abort();
    HEAP32[$$3400 + 24 >> 2] = $163;
    $210 = $10 + 16 | 0;
    $211 = HEAP32[$210 >> 2] | 0;
    do if ($211 | 0) if ($211 >>> 0 < $207 >>> 0) _abort(); else {
     HEAP32[$$3400 + 16 >> 2] = $211;
     HEAP32[$211 + 24 >> 2] = $$3400;
     break;
    } while (0);
    $217 = HEAP32[$210 + 4 >> 2] | 0;
    if ($217 | 0) if ($217 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort(); else {
     HEAP32[$$3400 + 20 >> 2] = $217;
     HEAP32[$217 + 24 >> 2] = $$3400;
     break;
    }
   }
  } while (0);
  HEAP32[$$1 + 4 >> 2] = $135 | 1;
  HEAP32[$113 + $135 >> 2] = $135;
  if (($$1 | 0) == (HEAP32[7077] | 0)) {
   HEAP32[7074] = $135;
   return;
  } else $$2 = $135;
 } else {
  HEAP32[$114 >> 2] = $115 & -2;
  HEAP32[$$1 + 4 >> 2] = $$1382 | 1;
  HEAP32[$113 + $$1382 >> 2] = $$1382;
  $$2 = $$1382;
 }
 $232 = $$2 >>> 3;
 if ($$2 >>> 0 < 256) {
  $235 = 28328 + ($232 << 1 << 2) | 0;
  $236 = HEAP32[7072] | 0;
  $237 = 1 << $232;
  if (!($236 & $237)) {
   HEAP32[7072] = $236 | $237;
   $$0403 = $235;
   $$pre$phiZ2D = $235 + 8 | 0;
  } else {
   $241 = $235 + 8 | 0;
   $242 = HEAP32[$241 >> 2] | 0;
   if ($242 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort(); else {
    $$0403 = $242;
    $$pre$phiZ2D = $241;
   }
  }
  HEAP32[$$pre$phiZ2D >> 2] = $$1;
  HEAP32[$$0403 + 12 >> 2] = $$1;
  HEAP32[$$1 + 8 >> 2] = $$0403;
  HEAP32[$$1 + 12 >> 2] = $235;
  return;
 }
 $248 = $$2 >>> 8;
 if (!$248) $$0396 = 0; else if ($$2 >>> 0 > 16777215) $$0396 = 31; else {
  $253 = ($248 + 1048320 | 0) >>> 16 & 8;
  $254 = $248 << $253;
  $257 = ($254 + 520192 | 0) >>> 16 & 4;
  $259 = $254 << $257;
  $262 = ($259 + 245760 | 0) >>> 16 & 2;
  $267 = 14 - ($257 | $253 | $262) + ($259 << $262 >>> 15) | 0;
  $$0396 = $$2 >>> ($267 + 7 | 0) & 1 | $267 << 1;
 }
 $273 = 28592 + ($$0396 << 2) | 0;
 HEAP32[$$1 + 28 >> 2] = $$0396;
 HEAP32[$$1 + 20 >> 2] = 0;
 HEAP32[$$1 + 16 >> 2] = 0;
 $277 = HEAP32[7073] | 0;
 $278 = 1 << $$0396;
 do if (!($277 & $278)) {
  HEAP32[7073] = $277 | $278;
  HEAP32[$273 >> 2] = $$1;
  HEAP32[$$1 + 24 >> 2] = $273;
  HEAP32[$$1 + 12 >> 2] = $$1;
  HEAP32[$$1 + 8 >> 2] = $$1;
 } else {
  $$0383 = $$2 << (($$0396 | 0) == 31 ? 0 : 25 - ($$0396 >>> 1) | 0);
  $$0384 = HEAP32[$273 >> 2] | 0;
  while (1) {
   if ((HEAP32[$$0384 + 4 >> 2] & -8 | 0) == ($$2 | 0)) {
    label = 124;
    break;
   }
   $296 = $$0384 + 16 + ($$0383 >>> 31 << 2) | 0;
   $298 = HEAP32[$296 >> 2] | 0;
   if (!$298) {
    label = 121;
    break;
   } else {
    $$0383 = $$0383 << 1;
    $$0384 = $298;
   }
  }
  if ((label | 0) == 121) if ($296 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort(); else {
   HEAP32[$296 >> 2] = $$1;
   HEAP32[$$1 + 24 >> 2] = $$0384;
   HEAP32[$$1 + 12 >> 2] = $$1;
   HEAP32[$$1 + 8 >> 2] = $$1;
   break;
  } else if ((label | 0) == 124) {
   $305 = $$0384 + 8 | 0;
   $306 = HEAP32[$305 >> 2] | 0;
   $307 = HEAP32[7076] | 0;
   if ($306 >>> 0 >= $307 >>> 0 & $$0384 >>> 0 >= $307 >>> 0) {
    HEAP32[$306 + 12 >> 2] = $$1;
    HEAP32[$305 >> 2] = $$1;
    HEAP32[$$1 + 8 >> 2] = $306;
    HEAP32[$$1 + 12 >> 2] = $$0384;
    HEAP32[$$1 + 24 >> 2] = 0;
    break;
   } else _abort();
  }
 } while (0);
 $315 = (HEAP32[7080] | 0) + -1 | 0;
 HEAP32[7080] = $315;
 if (!$315) $$0212$in$i = 28744; else return;
 while (1) {
  $$0212$i = HEAP32[$$0212$in$i >> 2] | 0;
  if (!$$0212$i) break; else $$0212$in$i = $$0212$i + 8 | 0;
 }
 HEAP32[7080] = -1;
 return;
}

function _dispose_chunk($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$0419 = 0, $$0420 = 0, $$0431 = 0, $$0438 = 0, $$1 = 0, $$1418 = 0, $$1426 = 0, $$1429 = 0, $$1433 = 0, $$1437 = 0, $$2 = 0, $$3 = 0, $$3435 = 0, $$pre$phi24Z2D = 0, $$pre$phi26Z2D = 0, $$pre$phiZ2D = 0, $100 = 0, $101 = 0, $108 = 0, $11 = 0, $110 = 0, $111 = 0, $116 = 0, $118 = 0, $12 = 0, $124 = 0, $129 = 0, $13 = 0, $130 = 0, $133 = 0, $135 = 0, $137 = 0, $150 = 0, $155 = 0, $157 = 0, $160 = 0, $162 = 0, $165 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $172 = 0, $174 = 0, $175 = 0, $177 = 0, $178 = 0, $183 = 0, $184 = 0, $197 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $207 = 0, $22 = 0, $222 = 0, $225 = 0, $226 = 0, $227 = 0, $231 = 0, $232 = 0, $238 = 0, $24 = 0, $243 = 0, $244 = 0, $247 = 0, $249 = 0, $252 = 0, $257 = 0, $263 = 0, $267 = 0, $268 = 0, $286 = 0, $288 = 0, $295 = 0, $296 = 0, $297 = 0, $37 = 0, $4 = 0, $42 = 0, $44 = 0, $47 = 0, $49 = 0, $52 = 0, $55 = 0, $56 = 0, $57 = 0, $59 = 0, $61 = 0, $62 = 0, $64 = 0, $65 = 0, $7 = 0, $70 = 0, $71 = 0, $84 = 0, $87 = 0, $88 = 0, $94 = 0, label = 0;
 $2 = $0 + $1 | 0;
 $4 = HEAP32[$0 + 4 >> 2] | 0;
 L1 : do if (!($4 & 1)) {
  $7 = HEAP32[$0 >> 2] | 0;
  if (!($4 & 3)) return;
  $11 = $0 + (0 - $7) | 0;
  $12 = $7 + $1 | 0;
  $13 = HEAP32[7076] | 0;
  if ($11 >>> 0 < $13 >>> 0) _abort();
  if (($11 | 0) == (HEAP32[7077] | 0)) {
   $100 = $2 + 4 | 0;
   $101 = HEAP32[$100 >> 2] | 0;
   if (($101 & 3 | 0) != 3) {
    $$1 = $11;
    $$1418 = $12;
    break;
   }
   HEAP32[7074] = $12;
   HEAP32[$100 >> 2] = $101 & -2;
   HEAP32[$11 + 4 >> 2] = $12 | 1;
   HEAP32[$11 + $12 >> 2] = $12;
   return;
  }
  $17 = $7 >>> 3;
  if ($7 >>> 0 < 256) {
   $20 = HEAP32[$11 + 8 >> 2] | 0;
   $22 = HEAP32[$11 + 12 >> 2] | 0;
   $24 = 28328 + ($17 << 1 << 2) | 0;
   if (($20 | 0) != ($24 | 0)) {
    if ($20 >>> 0 < $13 >>> 0) _abort();
    if ((HEAP32[$20 + 12 >> 2] | 0) != ($11 | 0)) _abort();
   }
   if (($22 | 0) == ($20 | 0)) {
    HEAP32[7072] = HEAP32[7072] & ~(1 << $17);
    $$1 = $11;
    $$1418 = $12;
    break;
   }
   if (($22 | 0) == ($24 | 0)) $$pre$phi26Z2D = $22 + 8 | 0; else {
    if ($22 >>> 0 < $13 >>> 0) _abort();
    $37 = $22 + 8 | 0;
    if ((HEAP32[$37 >> 2] | 0) == ($11 | 0)) $$pre$phi26Z2D = $37; else _abort();
   }
   HEAP32[$20 + 12 >> 2] = $22;
   HEAP32[$$pre$phi26Z2D >> 2] = $20;
   $$1 = $11;
   $$1418 = $12;
   break;
  }
  $42 = HEAP32[$11 + 24 >> 2] | 0;
  $44 = HEAP32[$11 + 12 >> 2] | 0;
  do if (($44 | 0) == ($11 | 0)) {
   $55 = $11 + 16 | 0;
   $56 = $55 + 4 | 0;
   $57 = HEAP32[$56 >> 2] | 0;
   if (!$57) {
    $59 = HEAP32[$55 >> 2] | 0;
    if (!$59) {
     $$3 = 0;
     break;
    } else {
     $$1426 = $59;
     $$1429 = $55;
    }
   } else {
    $$1426 = $57;
    $$1429 = $56;
   }
   while (1) {
    $61 = $$1426 + 20 | 0;
    $62 = HEAP32[$61 >> 2] | 0;
    if ($62 | 0) {
     $$1426 = $62;
     $$1429 = $61;
     continue;
    }
    $64 = $$1426 + 16 | 0;
    $65 = HEAP32[$64 >> 2] | 0;
    if (!$65) break; else {
     $$1426 = $65;
     $$1429 = $64;
    }
   }
   if ($$1429 >>> 0 < $13 >>> 0) _abort(); else {
    HEAP32[$$1429 >> 2] = 0;
    $$3 = $$1426;
    break;
   }
  } else {
   $47 = HEAP32[$11 + 8 >> 2] | 0;
   if ($47 >>> 0 < $13 >>> 0) _abort();
   $49 = $47 + 12 | 0;
   if ((HEAP32[$49 >> 2] | 0) != ($11 | 0)) _abort();
   $52 = $44 + 8 | 0;
   if ((HEAP32[$52 >> 2] | 0) == ($11 | 0)) {
    HEAP32[$49 >> 2] = $44;
    HEAP32[$52 >> 2] = $47;
    $$3 = $44;
    break;
   } else _abort();
  } while (0);
  if (!$42) {
   $$1 = $11;
   $$1418 = $12;
  } else {
   $70 = HEAP32[$11 + 28 >> 2] | 0;
   $71 = 28592 + ($70 << 2) | 0;
   do if (($11 | 0) == (HEAP32[$71 >> 2] | 0)) {
    HEAP32[$71 >> 2] = $$3;
    if (!$$3) {
     HEAP32[7073] = HEAP32[7073] & ~(1 << $70);
     $$1 = $11;
     $$1418 = $12;
     break L1;
    }
   } else if ($42 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort(); else {
    HEAP32[$42 + 16 + (((HEAP32[$42 + 16 >> 2] | 0) != ($11 | 0) & 1) << 2) >> 2] = $$3;
    if (!$$3) {
     $$1 = $11;
     $$1418 = $12;
     break L1;
    } else break;
   } while (0);
   $84 = HEAP32[7076] | 0;
   if ($$3 >>> 0 < $84 >>> 0) _abort();
   HEAP32[$$3 + 24 >> 2] = $42;
   $87 = $11 + 16 | 0;
   $88 = HEAP32[$87 >> 2] | 0;
   do if ($88 | 0) if ($88 >>> 0 < $84 >>> 0) _abort(); else {
    HEAP32[$$3 + 16 >> 2] = $88;
    HEAP32[$88 + 24 >> 2] = $$3;
    break;
   } while (0);
   $94 = HEAP32[$87 + 4 >> 2] | 0;
   if (!$94) {
    $$1 = $11;
    $$1418 = $12;
   } else if ($94 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort(); else {
    HEAP32[$$3 + 20 >> 2] = $94;
    HEAP32[$94 + 24 >> 2] = $$3;
    $$1 = $11;
    $$1418 = $12;
    break;
   }
  }
 } else {
  $$1 = $0;
  $$1418 = $1;
 } while (0);
 $108 = HEAP32[7076] | 0;
 if ($2 >>> 0 < $108 >>> 0) _abort();
 $110 = $2 + 4 | 0;
 $111 = HEAP32[$110 >> 2] | 0;
 if (!($111 & 2)) {
  $116 = HEAP32[7077] | 0;
  if (($2 | 0) == (HEAP32[7078] | 0)) {
   $118 = (HEAP32[7075] | 0) + $$1418 | 0;
   HEAP32[7075] = $118;
   HEAP32[7078] = $$1;
   HEAP32[$$1 + 4 >> 2] = $118 | 1;
   if (($$1 | 0) != ($116 | 0)) return;
   HEAP32[7077] = 0;
   HEAP32[7074] = 0;
   return;
  }
  if (($2 | 0) == ($116 | 0)) {
   $124 = (HEAP32[7074] | 0) + $$1418 | 0;
   HEAP32[7074] = $124;
   HEAP32[7077] = $$1;
   HEAP32[$$1 + 4 >> 2] = $124 | 1;
   HEAP32[$$1 + $124 >> 2] = $124;
   return;
  }
  $129 = ($111 & -8) + $$1418 | 0;
  $130 = $111 >>> 3;
  L96 : do if ($111 >>> 0 < 256) {
   $133 = HEAP32[$2 + 8 >> 2] | 0;
   $135 = HEAP32[$2 + 12 >> 2] | 0;
   $137 = 28328 + ($130 << 1 << 2) | 0;
   if (($133 | 0) != ($137 | 0)) {
    if ($133 >>> 0 < $108 >>> 0) _abort();
    if ((HEAP32[$133 + 12 >> 2] | 0) != ($2 | 0)) _abort();
   }
   if (($135 | 0) == ($133 | 0)) {
    HEAP32[7072] = HEAP32[7072] & ~(1 << $130);
    break;
   }
   if (($135 | 0) == ($137 | 0)) $$pre$phi24Z2D = $135 + 8 | 0; else {
    if ($135 >>> 0 < $108 >>> 0) _abort();
    $150 = $135 + 8 | 0;
    if ((HEAP32[$150 >> 2] | 0) == ($2 | 0)) $$pre$phi24Z2D = $150; else _abort();
   }
   HEAP32[$133 + 12 >> 2] = $135;
   HEAP32[$$pre$phi24Z2D >> 2] = $133;
  } else {
   $155 = HEAP32[$2 + 24 >> 2] | 0;
   $157 = HEAP32[$2 + 12 >> 2] | 0;
   do if (($157 | 0) == ($2 | 0)) {
    $168 = $2 + 16 | 0;
    $169 = $168 + 4 | 0;
    $170 = HEAP32[$169 >> 2] | 0;
    if (!$170) {
     $172 = HEAP32[$168 >> 2] | 0;
     if (!$172) {
      $$3435 = 0;
      break;
     } else {
      $$1433 = $172;
      $$1437 = $168;
     }
    } else {
     $$1433 = $170;
     $$1437 = $169;
    }
    while (1) {
     $174 = $$1433 + 20 | 0;
     $175 = HEAP32[$174 >> 2] | 0;
     if ($175 | 0) {
      $$1433 = $175;
      $$1437 = $174;
      continue;
     }
     $177 = $$1433 + 16 | 0;
     $178 = HEAP32[$177 >> 2] | 0;
     if (!$178) break; else {
      $$1433 = $178;
      $$1437 = $177;
     }
    }
    if ($$1437 >>> 0 < $108 >>> 0) _abort(); else {
     HEAP32[$$1437 >> 2] = 0;
     $$3435 = $$1433;
     break;
    }
   } else {
    $160 = HEAP32[$2 + 8 >> 2] | 0;
    if ($160 >>> 0 < $108 >>> 0) _abort();
    $162 = $160 + 12 | 0;
    if ((HEAP32[$162 >> 2] | 0) != ($2 | 0)) _abort();
    $165 = $157 + 8 | 0;
    if ((HEAP32[$165 >> 2] | 0) == ($2 | 0)) {
     HEAP32[$162 >> 2] = $157;
     HEAP32[$165 >> 2] = $160;
     $$3435 = $157;
     break;
    } else _abort();
   } while (0);
   if ($155 | 0) {
    $183 = HEAP32[$2 + 28 >> 2] | 0;
    $184 = 28592 + ($183 << 2) | 0;
    do if (($2 | 0) == (HEAP32[$184 >> 2] | 0)) {
     HEAP32[$184 >> 2] = $$3435;
     if (!$$3435) {
      HEAP32[7073] = HEAP32[7073] & ~(1 << $183);
      break L96;
     }
    } else if ($155 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort(); else {
     HEAP32[$155 + 16 + (((HEAP32[$155 + 16 >> 2] | 0) != ($2 | 0) & 1) << 2) >> 2] = $$3435;
     if (!$$3435) break L96; else break;
    } while (0);
    $197 = HEAP32[7076] | 0;
    if ($$3435 >>> 0 < $197 >>> 0) _abort();
    HEAP32[$$3435 + 24 >> 2] = $155;
    $200 = $2 + 16 | 0;
    $201 = HEAP32[$200 >> 2] | 0;
    do if ($201 | 0) if ($201 >>> 0 < $197 >>> 0) _abort(); else {
     HEAP32[$$3435 + 16 >> 2] = $201;
     HEAP32[$201 + 24 >> 2] = $$3435;
     break;
    } while (0);
    $207 = HEAP32[$200 + 4 >> 2] | 0;
    if ($207 | 0) if ($207 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort(); else {
     HEAP32[$$3435 + 20 >> 2] = $207;
     HEAP32[$207 + 24 >> 2] = $$3435;
     break;
    }
   }
  } while (0);
  HEAP32[$$1 + 4 >> 2] = $129 | 1;
  HEAP32[$$1 + $129 >> 2] = $129;
  if (($$1 | 0) == (HEAP32[7077] | 0)) {
   HEAP32[7074] = $129;
   return;
  } else $$2 = $129;
 } else {
  HEAP32[$110 >> 2] = $111 & -2;
  HEAP32[$$1 + 4 >> 2] = $$1418 | 1;
  HEAP32[$$1 + $$1418 >> 2] = $$1418;
  $$2 = $$1418;
 }
 $222 = $$2 >>> 3;
 if ($$2 >>> 0 < 256) {
  $225 = 28328 + ($222 << 1 << 2) | 0;
  $226 = HEAP32[7072] | 0;
  $227 = 1 << $222;
  if (!($226 & $227)) {
   HEAP32[7072] = $226 | $227;
   $$0438 = $225;
   $$pre$phiZ2D = $225 + 8 | 0;
  } else {
   $231 = $225 + 8 | 0;
   $232 = HEAP32[$231 >> 2] | 0;
   if ($232 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort(); else {
    $$0438 = $232;
    $$pre$phiZ2D = $231;
   }
  }
  HEAP32[$$pre$phiZ2D >> 2] = $$1;
  HEAP32[$$0438 + 12 >> 2] = $$1;
  HEAP32[$$1 + 8 >> 2] = $$0438;
  HEAP32[$$1 + 12 >> 2] = $225;
  return;
 }
 $238 = $$2 >>> 8;
 if (!$238) $$0431 = 0; else if ($$2 >>> 0 > 16777215) $$0431 = 31; else {
  $243 = ($238 + 1048320 | 0) >>> 16 & 8;
  $244 = $238 << $243;
  $247 = ($244 + 520192 | 0) >>> 16 & 4;
  $249 = $244 << $247;
  $252 = ($249 + 245760 | 0) >>> 16 & 2;
  $257 = 14 - ($247 | $243 | $252) + ($249 << $252 >>> 15) | 0;
  $$0431 = $$2 >>> ($257 + 7 | 0) & 1 | $257 << 1;
 }
 $263 = 28592 + ($$0431 << 2) | 0;
 HEAP32[$$1 + 28 >> 2] = $$0431;
 HEAP32[$$1 + 20 >> 2] = 0;
 HEAP32[$$1 + 16 >> 2] = 0;
 $267 = HEAP32[7073] | 0;
 $268 = 1 << $$0431;
 if (!($267 & $268)) {
  HEAP32[7073] = $267 | $268;
  HEAP32[$263 >> 2] = $$1;
  HEAP32[$$1 + 24 >> 2] = $263;
  HEAP32[$$1 + 12 >> 2] = $$1;
  HEAP32[$$1 + 8 >> 2] = $$1;
  return;
 }
 $$0419 = $$2 << (($$0431 | 0) == 31 ? 0 : 25 - ($$0431 >>> 1) | 0);
 $$0420 = HEAP32[$263 >> 2] | 0;
 while (1) {
  if ((HEAP32[$$0420 + 4 >> 2] & -8 | 0) == ($$2 | 0)) {
   label = 121;
   break;
  }
  $286 = $$0420 + 16 + ($$0419 >>> 31 << 2) | 0;
  $288 = HEAP32[$286 >> 2] | 0;
  if (!$288) {
   label = 118;
   break;
  } else {
   $$0419 = $$0419 << 1;
   $$0420 = $288;
  }
 }
 if ((label | 0) == 118) {
  if ($286 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort();
  HEAP32[$286 >> 2] = $$1;
  HEAP32[$$1 + 24 >> 2] = $$0420;
  HEAP32[$$1 + 12 >> 2] = $$1;
  HEAP32[$$1 + 8 >> 2] = $$1;
  return;
 } else if ((label | 0) == 121) {
  $295 = $$0420 + 8 | 0;
  $296 = HEAP32[$295 >> 2] | 0;
  $297 = HEAP32[7076] | 0;
  if (!($296 >>> 0 >= $297 >>> 0 & $$0420 >>> 0 >= $297 >>> 0)) _abort();
  HEAP32[$296 + 12 >> 2] = $$1;
  HEAP32[$295 >> 2] = $$1;
  HEAP32[$$1 + 8 >> 2] = $296;
  HEAP32[$$1 + 12 >> 2] = $$0420;
  HEAP32[$$1 + 24 >> 2] = 0;
  return;
 }
}

function _silk_PLC_conceal($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$ = 0, $$0 = 0, $$01 = 0, $$011 = 0, $$012 = 0, $$013 = 0, $$015 = 0, $$02 = 0, $$03 = 0, $$04 = 0, $$09 = 0, $$110 = 0, $$114 = 0, $$116 = 0, $$15 = 0, $$2 = 0, $$219 = 0, $$26 = 0, $$3 = 0, $$37 = 0, $$4 = 0, $$48 = 0, $$pre25 = 0, $10 = 0, $102 = 0, $103 = 0, $106 = 0, $107 = 0, $11 = 0, $112 = 0, $116 = 0, $117 = 0, $118 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $130 = 0, $14 = 0, $142 = 0, $144 = 0, $147 = 0, $15 = 0, $153 = 0, $155 = 0, $158 = 0, $164 = 0, $166 = 0, $169 = 0, $175 = 0, $177 = 0, $180 = 0, $186 = 0, $188 = 0, $19 = 0, $191 = 0, $197 = 0, $199 = 0, $20 = 0, $202 = 0, $21 = 0, $215 = 0, $227 = 0, $238 = 0, $245 = 0, $246 = 0, $248 = 0, $251 = 0, $254 = 0, $257 = 0, $260 = 0, $263 = 0, $266 = 0, $269 = 0, $272 = 0, $275 = 0, $276 = 0, $279 = 0, $28 = 0, $280 = 0, $286 = 0, $293 = 0, $296 = 0, $3 = 0, $30 = 0, $303 = 0, $306 = 0, $313 = 0, $316 = 0, $323 = 0, $326 = 0, $333 = 0, $336 = 0, $343 = 0, $346 = 0, $353 = 0, $356 = 0, $363 = 0, $366 = 0, $373 = 0, $376 = 0, $383 = 0, $384 = 0, $385 = 0, $390 = 0, $394 = 0, $4 = 0, $402 = 0, $403 = 0, $404 = 0, $410 = 0, $421 = 0, $432 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $52 = 0, $54 = 0, $55 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $64 = 0, $7 = 0, $78 = 0, $8 = 0, $88 = 0, $9 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, dest = 0, sp = 0, src = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 $3 = sp + 20 | 0;
 $4 = sp + 16 | 0;
 $5 = sp + 12 | 0;
 $6 = sp + 8 | 0;
 $7 = sp + 24 | 0;
 $8 = sp;
 $9 = $0 + 2336 | 0;
 $10 = HEAP32[$9 >> 2] | 0;
 $11 = $0 + 2328 | 0;
 $14 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($10 + (HEAP32[$11 >> 2] | 0) << 2) | 0) + 15 & -16) | 0;
 $15 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($10 << 1) | 0) + 15 & -16) | 0;
 HEAP32[$8 >> 2] = HEAP32[$0 + 4244 >> 2] >> 6;
 $19 = $0 + 4248 | 0;
 $20 = HEAP32[$19 >> 2] | 0;
 $21 = $20 >> 6;
 HEAP32[$8 + 4 >> 2] = $21;
 if (HEAP32[$0 + 2376 >> 2] | 0) {
  dest = $0 + 4186 | 0;
  stop = dest + 32 | 0;
  do {
   HEAP16[dest >> 1] = 0;
   dest = dest + 2 | 0;
  } while ((dest | 0) < (stop | 0));
 }
 $28 = $0 + 2332 | 0;
 $30 = $0 + 2324 | 0;
 _silk_PLC_energy($5, $3, $6, $4, $0 + 4 | 0, $8, HEAP32[$28 >> 2] | 0, HEAP32[$30 >> 2] | 0);
 $$03 = $0 + 4 + ((_silk_max_int_126((Math_imul((HEAP32[$0 + 4256 >> 2] | 0) + (((HEAP32[$5 >> 2] >> HEAP32[$4 >> 2] | 0) < (HEAP32[$6 >> 2] >> HEAP32[$3 >> 2] | 0)) << 31 >> 31) | 0, HEAP32[$0 + 4260 >> 2] | 0) | 0) + -128 | 0) | 0) << 2) | 0;
 $47 = $0 + 4176 | 0;
 $48 = $0 + 4228 | 0;
 $49 = HEAP16[$48 >> 1] | 0;
 $50 = $0 + 4160 | 0;
 $52 = _silk_min_int_127(HEAP32[$50 >> 2] | 0) | 0;
 $54 = HEAP16[21236 + ($52 << 1) >> 1] | 0;
 $55 = $0 + 4164 | 0;
 $60 = HEAP16[((HEAP32[$55 >> 2] | 0) == 2 ? 21240 : 21244) + ($52 << 1) >> 1] | 0;
 $61 = $0 + 4186 | 0;
 $62 = $0 + 2340 | 0;
 _silk_bwexpander($61, HEAP32[$62 >> 2] | 0, 64881);
 $64 = HEAP32[$62 >> 2] | 0;
 _memcpy($7 | 0, $61 | 0, $64 << 1 | 0) | 0;
 do if (!(HEAP32[$50 >> 2] | 0)) {
  if ((HEAP32[$55 >> 2] | 0) == 2) {
   $$0 = 16384;
   $$04 = 0;
  } else {
   $88 = (_silk_max_32(4194304, _silk_min_32_128(134217728, _silk_LPC_inverse_pred_gain_c($61, $64) | 0) | 0) | 0) << 3;
   $95 = (Math_imul($88 >> 16, $60) | 0) + ((Math_imul($88 & 65528, $60) | 0) >> 16) >> 14;
   $$2 = 16384;
   $$219 = $95;
   $106 = HEAP32[$62 >> 2] | 0;
   break;
  }
  while (1) {
   if (($$04 | 0) == 5) break;
   $$0 = ($$0 & 65535) - (HEAPU16[$0 + 4176 + ($$04 << 1) >> 1] | 0) & 65535;
   $$04 = $$04 + 1 | 0;
  }
  $78 = (_silk_max_16($$0) | 0) << 16 >> 16;
  $$2 = (Math_imul($78, HEAP16[$0 + 4240 >> 1] | 0) | 0) >>> 14 & 65535;
  $$219 = $60;
  $106 = $64;
 } else {
  $$2 = $49;
  $$219 = $60;
  $106 = $64;
 } while (0);
 $96 = $0 + 4224 | 0;
 $97 = HEAP32[$96 >> 2] | 0;
 $98 = $0 + 4172 | 0;
 $102 = (HEAP32[$98 >> 2] >> 7) + 1 >> 1;
 $103 = HEAP32[$9 >> 2] | 0;
 $107 = $103 - $102 - $106 + -2 | 0;
 _silk_LPC_analysis_filter($15 + ($107 << 1) | 0, $0 + 1348 + ($107 << 1) | 0, $7, $103 - $107 | 0, $106);
 $112 = _silk_INVERSE32_varQ_129(HEAP32[$19 >> 2] | 0) | 0;
 $$ = ($112 | 0) < 1073741823 ? $112 : 1073741823;
 $116 = HEAP32[$9 >> 2] | 0;
 $117 = $$ >> 16;
 $118 = $$ & 65535;
 $$15 = $107 + (HEAP32[$62 >> 2] | 0) | 0;
 while (1) {
  if (($$15 | 0) >= ($116 | 0)) break;
  $130 = HEAP16[$15 + ($$15 << 1) >> 1] | 0;
  HEAP32[$14 + ($$15 << 2) >> 2] = (Math_imul($117, $130) | 0) + ((Math_imul($118, $130) | 0) >> 16);
  $$15 = $$15 + 1 | 0;
 }
 $120 = $0 + 4178 | 0;
 $121 = $0 + 4180 | 0;
 $122 = $0 + 4182 | 0;
 $123 = $0 + 4184 | 0;
 $124 = $54 << 16 >> 16;
 $125 = $0 + 2765 | 0;
 $126 = $0 + 2316 | 0;
 $127 = $$219 << 16 >> 16;
 $$011 = 0;
 $$012 = $102;
 $$013 = $103;
 $$015 = $97;
 $$3 = $$2;
 while (1) {
  if (($$011 | 0) >= (HEAP32[$30 >> 2] | 0)) break;
  $142 = $$3 << 16 >> 16;
  $$pre25 = HEAP32[$28 >> 2] | 0;
  $$02 = $14 + ($$013 - $$012 + 2 << 2) | 0;
  $$114 = $$013;
  $$116 = $$015;
  $$26 = 0;
  while (1) {
   if (($$26 | 0) >= ($$pre25 | 0)) {
    $$09 = 0;
    break;
   }
   $144 = HEAP32[$$02 >> 2] | 0;
   $147 = HEAP16[$47 >> 1] | 0;
   $153 = (Math_imul($144 >> 16, $147) | 0) + ((Math_imul($144 & 65535, $147) | 0) >> 16) + 2 | 0;
   $155 = HEAP32[$$02 + -4 >> 2] | 0;
   $158 = HEAP16[$120 >> 1] | 0;
   $164 = $153 + ((Math_imul($155 >> 16, $158) | 0) + ((Math_imul($155 & 65535, $158) | 0) >> 16)) | 0;
   $166 = HEAP32[$$02 + -8 >> 2] | 0;
   $169 = HEAP16[$121 >> 1] | 0;
   $175 = $164 + ((Math_imul($166 >> 16, $169) | 0) + ((Math_imul($166 & 65535, $169) | 0) >> 16)) | 0;
   $177 = HEAP32[$$02 + -12 >> 2] | 0;
   $180 = HEAP16[$122 >> 1] | 0;
   $186 = $175 + ((Math_imul($177 >> 16, $180) | 0) + ((Math_imul($177 & 65535, $180) | 0) >> 16)) | 0;
   $188 = HEAP32[$$02 + -16 >> 2] | 0;
   $191 = HEAP16[$123 >> 1] | 0;
   $197 = $186 + ((Math_imul($188 >> 16, $191) | 0) + ((Math_imul($188 & 65535, $191) | 0) >> 16)) | 0;
   $199 = (Math_imul($$116, 196314165) | 0) + 907633515 | 0;
   $202 = HEAP32[$$03 + ($199 >>> 25 << 2) >> 2] | 0;
   HEAP32[$14 + ($$114 << 2) >> 2] = $197 + ((Math_imul($202 >> 16, $142) | 0) + ((Math_imul($202 & 65535, $142) | 0) >> 16)) << 2;
   $$02 = $$02 + 4 | 0;
   $$114 = $$114 + 1 | 0;
   $$116 = $199;
   $$26 = $$26 + 1 | 0;
  }
  while (1) {
   if (($$09 | 0) == 5) break;
   $215 = $0 + 4176 + ($$09 << 1) | 0;
   HEAP16[$215 >> 1] = (Math_imul($124, HEAP16[$215 >> 1] | 0) | 0) >>> 15;
   $$09 = $$09 + 1 | 0;
  }
  if (!(HEAP8[$125 >> 0] | 0)) $$4 = $$3; else $$4 = (Math_imul($142, $127) | 0) >>> 15 & 65535;
  $227 = HEAP32[$98 >> 2] | 0;
  $238 = _silk_min_32_128($227 + ((($227 >> 16) * 655 | 0) + ((($227 & 65535) * 655 | 0) >>> 16)) | 0, (HEAP32[$126 >> 2] << 16 >> 16) * 4608 | 0) | 0;
  HEAP32[$98 >> 2] = $238;
  $$011 = $$011 + 1 | 0;
  $$012 = ($238 >> 7) + 1 >> 1;
  $$013 = $$114;
  $$015 = $$116;
  $$3 = $$4;
 }
 $245 = $14 + ((HEAP32[$9 >> 2] | 0) + -16 << 2) | 0;
 $246 = $0 + 1284 | 0;
 dest = $245;
 src = $246;
 stop = dest + 64 | 0;
 do {
  HEAP32[dest >> 2] = HEAP32[src >> 2];
  dest = dest + 4 | 0;
  src = src + 4 | 0;
 } while ((dest | 0) < (stop | 0));
 $248 = HEAP16[$7 >> 1] | 0;
 $251 = HEAP16[$7 + 2 >> 1] | 0;
 $254 = HEAP16[$7 + 4 >> 1] | 0;
 $257 = HEAP16[$7 + 6 >> 1] | 0;
 $260 = HEAP16[$7 + 8 >> 1] | 0;
 $263 = HEAP16[$7 + 10 >> 1] | 0;
 $266 = HEAP16[$7 + 12 >> 1] | 0;
 $269 = HEAP16[$7 + 14 >> 1] | 0;
 $272 = HEAP16[$7 + 16 >> 1] | 0;
 $275 = HEAP16[$7 + 18 >> 1] | 0;
 $276 = $21 << 16 >> 16;
 $279 = ($20 >> 21) + 1 >> 1;
 $$37 = 0;
 while (1) {
  $280 = HEAP32[$11 >> 2] | 0;
  if (($$37 | 0) >= ($280 | 0)) break;
  $286 = HEAP32[$245 + ($$37 + 15 << 2) >> 2] | 0;
  $293 = (HEAP32[$62 >> 2] >> 1) + ((Math_imul($286 >> 16, $248) | 0) + ((Math_imul($286 & 65535, $248) | 0) >> 16)) | 0;
  $296 = HEAP32[$245 + ($$37 + 14 << 2) >> 2] | 0;
  $303 = $293 + ((Math_imul($296 >> 16, $251) | 0) + ((Math_imul($296 & 65535, $251) | 0) >> 16)) | 0;
  $306 = HEAP32[$245 + ($$37 + 13 << 2) >> 2] | 0;
  $313 = $303 + ((Math_imul($306 >> 16, $254) | 0) + ((Math_imul($306 & 65535, $254) | 0) >> 16)) | 0;
  $316 = HEAP32[$245 + ($$37 + 12 << 2) >> 2] | 0;
  $323 = $313 + ((Math_imul($316 >> 16, $257) | 0) + ((Math_imul($316 & 65535, $257) | 0) >> 16)) | 0;
  $326 = HEAP32[$245 + ($$37 + 11 << 2) >> 2] | 0;
  $333 = $323 + ((Math_imul($326 >> 16, $260) | 0) + ((Math_imul($326 & 65535, $260) | 0) >> 16)) | 0;
  $336 = HEAP32[$245 + ($$37 + 10 << 2) >> 2] | 0;
  $343 = $333 + ((Math_imul($336 >> 16, $263) | 0) + ((Math_imul($336 & 65535, $263) | 0) >> 16)) | 0;
  $346 = HEAP32[$245 + ($$37 + 9 << 2) >> 2] | 0;
  $353 = $343 + ((Math_imul($346 >> 16, $266) | 0) + ((Math_imul($346 & 65535, $266) | 0) >> 16)) | 0;
  $356 = HEAP32[$245 + ($$37 + 8 << 2) >> 2] | 0;
  $363 = $353 + ((Math_imul($356 >> 16, $269) | 0) + ((Math_imul($356 & 65535, $269) | 0) >> 16)) | 0;
  $366 = HEAP32[$245 + ($$37 + 7 << 2) >> 2] | 0;
  $373 = $363 + ((Math_imul($366 >> 16, $272) | 0) + ((Math_imul($366 & 65535, $272) | 0) >> 16)) | 0;
  $376 = HEAP32[$245 + ($$37 + 6 << 2) >> 2] | 0;
  $383 = $373 + ((Math_imul($376 >> 16, $275) | 0) + ((Math_imul($376 & 65535, $275) | 0) >> 16)) | 0;
  $384 = HEAP32[$62 >> 2] | 0;
  $385 = $$37 + 16 | 0;
  $$01 = $383;
  $$110 = 10;
  while (1) {
   if (($$110 | 0) >= ($384 | 0)) break;
   $390 = HEAP32[$245 + ($385 - $$110 + -1 << 2) >> 2] | 0;
   $394 = HEAP16[$7 + ($$110 << 1) >> 1] | 0;
   $$01 = $$01 + ((Math_imul($390 >> 16, $394) | 0) + ((Math_imul($390 & 65535, $394) | 0) >> 16)) | 0;
   $$110 = $$110 + 1 | 0;
  }
  $402 = $245 + ($385 << 2) | 0;
  $403 = HEAP32[$402 >> 2] | 0;
  $404 = ($$01 | 0) > 134217727;
  $410 = $404 ? 2147483632 : (($$01 | 0) > -134217728 ? $$01 : -134217728) << 4;
  if (($403 + ($404 ? 2147483632 : (($$01 | 0) > -134217728 ? $$01 : -134217728) << 4) | 0) > -1) if (($403 & $410 | 0) < 0) $421 = -2147483648; else $421 = $403 + ($404 ? 2147483632 : (($$01 | 0) > -134217728 ? $$01 : -134217728) << 4) | 0; else if (($403 | $410 | 0) > -1) $421 = 2147483647; else $421 = $403 + ($404 ? 2147483632 : (($$01 | 0) > -134217728 ? $$01 : -134217728) << 4) | 0;
  HEAP32[$402 >> 2] = $421;
  $432 = ((Math_imul($421 >> 16, $276) | 0) + ((Math_imul($421 & 65535, $276) | 0) >> 16) + (Math_imul($421, $279) | 0) >> 7) + 1 >> 1;
  HEAP16[$2 + ($$37 << 1) >> 1] = ($432 | 0) > 32767 ? 32767 : (($432 | 0) > -32768 ? $432 : -32768) & 65535;
  $$37 = $$37 + 1 | 0;
 }
 dest = $246;
 src = $245 + ($280 << 2) | 0;
 stop = dest + 64 | 0;
 do {
  HEAP32[dest >> 2] = HEAP32[src >> 2];
  dest = dest + 4 | 0;
  src = src + 4 | 0;
 } while ((dest | 0) < (stop | 0));
 HEAP32[$96 >> 2] = $$015;
 HEAP16[$48 >> 1] = $$3;
 $$48 = 0;
 while (1) {
  if (($$48 | 0) == 4) break;
  HEAP32[$1 + ($$48 << 2) >> 2] = $$012;
  $$48 = $$48 + 1 | 0;
 }
 STACKTOP = sp;
 return;
}

function _interp_bits2pulses($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 $7 = $7 | 0;
 $8 = $8 | 0;
 $9 = $9 | 0;
 $10 = $10 | 0;
 $11 = $11 | 0;
 $12 = $12 | 0;
 $13 = $13 | 0;
 $14 = $14 | 0;
 $15 = $15 | 0;
 $16 = $16 | 0;
 $17 = $17 | 0;
 $18 = $18 | 0;
 $19 = $19 | 0;
 $20 = $20 | 0;
 $21 = $21 | 0;
 $22 = $22 | 0;
 $23 = $23 | 0;
 var $$$014 = 0, $$0 = 0, $$01 = 0, $$011 = 0, $$013 = 0, $$013$ = 0, $$014 = 0, $$015 = 0, $$015$ph = 0, $$015$ph$ph = 0, $$019 = 0, $$021 = 0, $$023 = 0, $$025 = 0, $$027$ph = 0, $$027$ph$ph = 0, $$04 = 0, $$07 = 0, $$08$ph$ph = 0, $$11233 = 0, $$11234 = 0, $$116 = 0, $$120 = 0, $$16 = 0, $$16$ = 0, $$2 = 0, $$210 = 0, $$217 = 0, $$318 = 0, $$330 = 0, $$4 = 0, $$431 = 0, $$5 = 0, $$532 = 0, $$6 = 0, $$70 = 0, $$73 = 0, $$74 = 0, $$75 = 0, $100 = 0, $119 = 0, $127 = 0, $130 = 0, $138 = 0, $140 = 0, $145 = 0, $146 = 0, $153 = 0, $154 = 0, $155 = 0, $158 = 0, $159 = 0, $167 = 0, $168 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $183 = 0, $185 = 0, $190 = 0, $191 = 0, $199 = 0, $200 = 0, $202 = 0, $205 = 0, $208 = 0, $209 = 0, $216 = 0, $217 = 0, $223 = 0, $226 = 0, $231 = 0, $24 = 0, $242 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $25 = 0, $252 = 0, $254 = 0, $256 = 0, $26 = 0, $264 = 0, $27 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $280 = 0, $287 = 0, $29 = 0, $291 = 0, $38 = 0, $42 = 0, $47 = 0, $49 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $61 = 0, $64 = 0, $65 = 0, $68 = 0, $72 = 0, $75 = 0, $76 = 0, $79 = 0, $82 = 0, $83 = 0, $84 = 0, $86 = 0, $89 = 0, $91 = 0, $93 = 0, $94 = 0, $95 = 0, $98 = 0, label = 0, $$015$looptemp = 0;
 $24 = $18 << 3;
 $25 = ($18 | 0) > 1;
 $26 = $25 & 1;
 $$021 = 0;
 $$023 = 64;
 $$025 = 0;
 while (1) {
  if (($$021 | 0) == 6) break;
  $29 = $$025 + $$023 >> 1;
  $$015$ph$ph = $2;
  $$027$ph$ph = 0;
  $$08$ph$ph = 0;
  L4 : while (1) {
   $$015$ph = $$015$ph$ph;
   $$027$ph = $$027$ph$ph;
   L6 : while (1) {
    $$015 = $$015$ph;
    do {
     $$015$looptemp = $$015;
     $$015 = $$015 + -1 | 0;
     if (($$015$looptemp | 0) <= ($1 | 0)) break L4;
     $38 = (HEAP32[$4 + ($$015 << 2) >> 2] | 0) + ((Math_imul($29, HEAP32[$5 + ($$015 << 2) >> 2] | 0) | 0) >> 6) | 0;
     if (($38 | 0) >= (HEAP32[$6 + ($$015 << 2) >> 2] | 0) | $$08$ph$ph) break L6;
    } while (($38 | 0) < ($24 | 0));
    $$015$ph = $$015;
    $$027$ph = $$027$ph + $24 | 0;
   }
   $42 = HEAP32[$7 + ($$015 << 2) >> 2] | 0;
   $$015$ph$ph = $$015;
   $$027$ph$ph = $$027$ph + (($38 | 0) < ($42 | 0) ? $38 : $42) | 0;
   $$08$ph$ph = 1;
  }
  $47 = ($$027$ph | 0) > ($8 | 0);
  $$021 = $$021 + 1 | 0;
  $$023 = $47 ? $29 : $$023;
  $$025 = $47 ? $$025 : $29;
 }
 $27 = $19 << 3;
 $$116 = $2;
 $$210 = 0;
 $$330 = 0;
 while (1) {
  $49 = $$116 + -1 | 0;
  if (($$116 | 0) <= ($1 | 0)) break;
  $61 = (HEAP32[$4 + ($49 << 2) >> 2] | 0) + ((Math_imul($$025, HEAP32[$5 + ($49 << 2) >> 2] | 0) | 0) >> 6) | 0;
  $64 = ($61 | 0) < (HEAP32[$6 + ($49 << 2) >> 2] | 0);
  $65 = ($$210 | 0) == 0;
  $$16 = $64 & $65 ? (($61 | 0) < ($24 | 0) ? 0 : $24) : $61;
  $68 = HEAP32[$7 + ($49 << 2) >> 2] | 0;
  $$16$ = ($$16 | 0) < ($68 | 0) ? $$16 : $68;
  HEAP32[$15 + ($49 << 2) >> 2] = $$16$;
  $$116 = $49;
  $$210 = ($64 & $65 ^ 1) & 1;
  $$330 = $$330 + $$16$ | 0;
 }
 $51 = $0 + 32 | 0;
 $52 = $24 + 8 | 0;
 $53 = ($21 | 0) == 0;
 $54 = $1 + 2 | 0;
 $$014 = $2;
 $$019 = $12;
 $$431 = $$330;
 while (1) {
  $72 = $$014 + -1 | 0;
  if (($72 | 0) <= ($3 | 0)) {
   label = 17;
   break;
  }
  $75 = $8 - $$431 | 0;
  $76 = HEAP32[$51 >> 2] | 0;
  $79 = HEAP16[$76 + ($$014 << 1) >> 1] | 0;
  $82 = HEAP16[$76 + ($1 << 1) >> 1] | 0;
  $83 = $79 - $82 | 0;
  $84 = _celt_udiv_86($75, $83) | 0;
  $86 = $75 - (Math_imul($83, $84) | 0) | 0;
  $89 = HEAP16[$76 + ($72 << 1) >> 1] | 0;
  $91 = $86 + ($82 - $89) | 0;
  $93 = $79 - $89 | 0;
  $94 = $15 + ($72 << 2) | 0;
  $95 = HEAP32[$94 >> 2] | 0;
  $98 = $95 + (Math_imul($84, $93) | 0) + (($91 | 0) > 0 ? $91 : 0) | 0;
  $100 = HEAP32[$6 + ($72 << 2) >> 2] | 0;
  if (($98 | 0) < ((($100 | 0) > ($52 | 0) ? $100 : $52) | 0)) {
   $$04 = $98;
   $$532 = $$431;
   $119 = $95;
  } else {
   if ($53) {
    if (_ec_dec_bit_logp($20, 1) | 0) {
     $$011 = $8;
     break;
    }
   } else {
    if (($$014 | 0) <= ($54 | 0)) {
     label = 22;
     break;
    }
    if (!(($72 | 0) > ($23 | 0) ? 1 : ($98 | 0) <= ((Math_imul(($$014 | 0) > 17 ? (($$014 | 0) <= ($22 | 0) ? 7 : 9) : 0, $93) | 0) << $19 << 3 >> 4 | 0))) {
     label = 22;
     break;
    }
    _ec_enc_bit_logp($20, 0, 1);
   }
   $$04 = $98 + -8 | 0;
   $$532 = $$431 + 8 | 0;
   $119 = HEAP32[$94 >> 2] | 0;
  }
  if (($$019 | 0) > 0) $$120 = HEAPU8[24826 + ($72 - $1) >> 0] | 0; else $$120 = $$019;
  $127 = ($$04 | 0) < ($24 | 0);
  $$6 = $$532 - ($119 + $$019) + $$120 + ($127 ? 0 : $24) | 0;
  HEAP32[$94 >> 2] = $127 ? 0 : $24;
  $$014 = $72;
  $$019 = $$120;
  $$431 = $$6;
 }
 if ((label | 0) == 17) $$011 = $8 + $10 | 0; else if ((label | 0) == 22) {
  _ec_enc_bit_logp($20, 1, 1);
  $$011 = $8;
 }
 do if (($$019 | 0) > 0) if ($53) {
  $138 = (_ec_dec_uint($20, $$014 + 1 - $1 | 0) | 0) + $1 | 0;
  HEAP32[$11 >> 2] = $138;
  $140 = $138;
  break;
 } else {
  $130 = HEAP32[$11 >> 2] | 0;
  $$$014 = ($130 | 0) < ($$014 | 0) ? $130 : $$014;
  HEAP32[$11 >> 2] = $$$014;
  _ec_enc_uint($20, $$$014 - $1 | 0, $$014 + 1 - $1 | 0);
  $140 = HEAP32[$11 >> 2] | 0;
  break;
 } else {
  HEAP32[$11 >> 2] = 0;
  $140 = 0;
 } while (0);
 do if (($140 | 0) > ($1 | 0)) if (($14 | 0) > 0) if ($53) {
  HEAP32[$13 >> 2] = _ec_dec_bit_logp($20, 1) | 0;
  $$11233 = $$011;
  break;
 } else {
  _ec_enc_bit_logp($20, HEAP32[$13 >> 2] | 0, 1);
  $$11233 = $$011;
  break;
 } else {
  $$11234 = $$011;
  label = 40;
 } else {
  $$11234 = $$011 + $14 | 0;
  label = 40;
 } while (0);
 if ((label | 0) == 40) {
  HEAP32[$13 >> 2] = 0;
  $$11233 = $$11234;
 }
 $145 = $$11233 - $$431 | 0;
 $146 = HEAP32[$51 >> 2] | 0;
 $153 = (HEAP16[$146 + ($$014 << 1) >> 1] | 0) - (HEAP16[$146 + ($1 << 1) >> 1] | 0) | 0;
 $154 = _celt_udiv_86($145, $153) | 0;
 $155 = Math_imul($153, $154) | 0;
 $$217 = $1;
 while (1) {
  if (($$217 | 0) >= ($$014 | 0)) break;
  $158 = HEAP32[$51 >> 2] | 0;
  $159 = $$217 + 1 | 0;
  $167 = Math_imul($154, (HEAP16[$158 + ($159 << 1) >> 1] | 0) - (HEAP16[$158 + ($$217 << 1) >> 1] | 0) | 0) | 0;
  $168 = $15 + ($$217 << 2) | 0;
  HEAP32[$168 >> 2] = (HEAP32[$168 >> 2] | 0) + $167;
  $$217 = $159;
 }
 $$013 = $145 - $155 | 0;
 $$318 = $1;
 while (1) {
  if (($$318 | 0) >= ($$014 | 0)) break;
  $175 = HEAP32[$51 >> 2] | 0;
  $176 = $$318 + 1 | 0;
  $183 = (HEAP16[$175 + ($176 << 1) >> 1] | 0) - (HEAP16[$175 + ($$318 << 1) >> 1] | 0) | 0;
  $$013$ = ($$013 | 0) < ($183 | 0) ? $$013 : $183;
  $185 = $15 + ($$318 << 2) | 0;
  HEAP32[$185 >> 2] = (HEAP32[$185 >> 2] | 0) + $$013$;
  $$013 = $$013 - $$013$ | 0;
  $$318 = $176;
 }
 $172 = ($18 | 0) == 2;
 $173 = $0 + 56 | 0;
 $174 = $25 ? 4 : 3;
 $$07 = 0;
 $$4 = $1;
 while (1) {
  if (($$4 | 0) >= ($$014 | 0)) break;
  $190 = HEAP32[$51 >> 2] | 0;
  $191 = $$4 + 1 | 0;
  $199 = (HEAP16[$190 + ($191 << 1) >> 1] | 0) - (HEAP16[$190 + ($$4 << 1) >> 1] | 0) << $19;
  $200 = $15 + ($$4 << 2) | 0;
  $202 = (HEAP32[$200 >> 2] | 0) + $$07 | 0;
  if (($199 | 0) > 1) {
   $205 = HEAP32[$7 + ($$4 << 2) >> 2] | 0;
   $$70 = ($202 | 0) > ($205 | 0) ? $202 - $205 | 0 : 0;
   $208 = $202 - $$70 | 0;
   HEAP32[$200 >> 2] = $208;
   $209 = Math_imul($199, $18) | 0;
   if ($172 & ($199 | 0) != 2) if (!(HEAP32[$13 >> 2] | 0)) $216 = ($$4 | 0) < (HEAP32[$11 >> 2] | 0); else $216 = 0; else $216 = 0;
   $217 = $209 + ($216 & 1) | 0;
   $223 = Math_imul($217, (HEAP16[(HEAP32[$173 >> 2] | 0) + ($$4 << 1) >> 1] | 0) + $27 | 0) | 0;
   $226 = ($223 >> 1) + (Math_imul($217, -21) | 0) | 0;
   if (($199 | 0) == 2) $$01 = $226 + ($217 << 3 >> 2) | 0; else $$01 = $226;
   $231 = $208 + $$01 | 0;
   if (($231 | 0) < ($217 << 4 | 0)) $$2 = $$01 + ($223 >> 2) | 0; else if (($231 | 0) < ($217 * 24 | 0)) $$2 = $$01 + ($223 >> 3) | 0; else $$2 = $$01;
   $242 = $208 + $$2 + ($217 << 2) | 0;
   $245 = (_celt_udiv_86(($242 | 0) > 0 ? $242 : 0, $217) | 0) >>> 3;
   $246 = $16 + ($$4 << 2) | 0;
   HEAP32[$246 >> 2] = $245;
   $247 = Math_imul($245, $18) | 0;
   $248 = HEAP32[$200 >> 2] | 0;
   if (($247 | 0) > ($248 >> 3 | 0)) {
    $252 = $248 >> $26 >> 3;
    HEAP32[$246 >> 2] = $252;
    $254 = $252;
   } else $254 = $245;
   $$73 = ($254 | 0) < 8 ? $254 : 8;
   HEAP32[$246 >> 2] = $$73;
   $256 = Math_imul($$73, $217 << 3) | 0;
   HEAP32[$17 + ($$4 << 2) >> 2] = ($256 | 0) >= ((HEAP32[$200 >> 2] | 0) + $$2 | 0) & 1;
   $264 = (Math_imul(HEAP32[$246 >> 2] | 0, $18) | 0) << 3;
   HEAP32[$200 >> 2] = (HEAP32[$200 >> 2] | 0) - $264;
   $$0 = $$70;
  } else {
   $$74 = ($202 | 0) < ($24 | 0) ? 0 : $202 - $24 | 0;
   HEAP32[$200 >> 2] = $202 - $$74;
   HEAP32[$16 + ($$4 << 2) >> 2] = 0;
   HEAP32[$17 + ($$4 << 2) >> 2] = 1;
   $$0 = $$74;
  }
  if (!$$0) {
   $$07 = $$0;
   $$4 = $191;
   continue;
  }
  $273 = $$0 >>> $174;
  $274 = $16 + ($$4 << 2) | 0;
  $275 = HEAP32[$274 >> 2] | 0;
  $276 = 8 - $275 | 0;
  $$75 = ($273 | 0) < ($276 | 0) ? $273 : $276;
  HEAP32[$274 >> 2] = $275 + $$75;
  $280 = (Math_imul($$75, $18) | 0) << 3;
  HEAP32[$17 + ($$4 << 2) >> 2] = ($280 | 0) >= ($$0 - $$07 | 0) & 1;
  $$07 = $$0 - $280 | 0;
  $$4 = $191;
 }
 HEAP32[$9 >> 2] = $$07;
 $$5 = $$4;
 while (1) {
  if (($$5 | 0) >= ($2 | 0)) break;
  $287 = $15 + ($$5 << 2) | 0;
  $291 = $16 + ($$5 << 2) | 0;
  HEAP32[$291 >> 2] = HEAP32[$287 >> 2] >> $26 >> 3;
  HEAP32[$287 >> 2] = 0;
  HEAP32[$17 + ($$5 << 2) >> 2] = (HEAP32[$291 >> 2] | 0) < 1 & 1;
  $$5 = $$5 + 1 | 0;
 }
 return $$014 | 0;
}

function _silk_CNG($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$01 = 0, $$02 = 0, $$03 = 0, $$05 = 0, $$16 = 0, $$2 = 0, $$3 = 0, $$pre = 0, $$pre32 = 0, $$sink = 0, $$sink33 = 0, $$sink36 = 0, $110 = 0, $12 = 0, $124 = 0, $128 = 0, $130 = 0, $132 = 0, $135 = 0, $138 = 0, $141 = 0, $144 = 0, $147 = 0, $150 = 0, $153 = 0, $156 = 0, $159 = 0, $162 = 0, $165 = 0, $168 = 0, $171 = 0, $174 = 0, $177 = 0, $178 = 0, $18 = 0, $181 = 0, $187 = 0, $194 = 0, $197 = 0, $204 = 0, $207 = 0, $21 = 0, $214 = 0, $217 = 0, $22 = 0, $224 = 0, $227 = 0, $234 = 0, $237 = 0, $24 = 0, $244 = 0, $247 = 0, $254 = 0, $257 = 0, $26 = 0, $264 = 0, $267 = 0, $27 = 0, $274 = 0, $277 = 0, $284 = 0, $289 = 0, $296 = 0, $299 = 0, $306 = 0, $309 = 0, $316 = 0, $319 = 0, $326 = 0, $329 = 0, $33 = 0, $336 = 0, $338 = 0, $347 = 0, $348 = 0, $349 = 0, $355 = 0, $366 = 0, $367 = 0, $369 = 0, $380 = 0, $381 = 0, $394 = 0, $4 = 0, $44 = 0, $45 = 0, $47 = 0, $48 = 0, $5 = 0, $53 = 0, $57 = 0, $6 = 0, $61 = 0, $62 = 0, $73 = 0, $74 = 0, $76 = 0, $77 = 0, $8 = 0, $80 = 0, $81 = 0, $91 = 0, $94 = 0, $96 = 0, $98 = 0, dest = 0, sp = 0, src = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 $4 = sp;
 $5 = $0 + 2772 | 0;
 $6 = $0 + 2316 | 0;
 $8 = $0 + 4156 | 0;
 if ((HEAP32[$6 >> 2] | 0) != (HEAP32[$8 >> 2] | 0)) {
  _silk_CNG_Reset($0);
  HEAP32[$8 >> 2] = HEAP32[$6 >> 2];
 }
 $12 = $0 + 4160 | 0;
 do if (!(HEAP32[$12 >> 2] | 0)) {
  if (!(HEAP32[$0 + 4164 >> 2] | 0)) {
   $18 = $0 + 2340 | 0;
   $$05 = 0;
   while (1) {
    if (($$05 | 0) >= (HEAP32[$18 >> 2] | 0)) break;
    $24 = HEAP16[$0 + 2344 + ($$05 << 1) >> 1] | 0;
    $26 = $0 + 4052 + ($$05 << 1) | 0;
    $27 = HEAP16[$26 >> 1] | 0;
    $33 = $27 & 65535;
    HEAP16[$26 >> 1] = $33 + (((($24 << 16 >> 16) - ($27 << 16 >> 16) >> 16) * 16348 | 0) + (((($24 & 65535) - $33 & 65535) * 16348 | 0) >>> 16));
    $$05 = $$05 + 1 | 0;
   }
   $21 = $0 + 2324 | 0;
   $22 = HEAP32[$21 >> 2] | 0;
   $$01 = 0;
   $$03 = 0;
   $$16 = 0;
   while (1) {
    if (($$16 | 0) >= ($22 | 0)) break;
    $44 = HEAP32[$1 + 16 + ($$16 << 2) >> 2] | 0;
    $45 = ($44 | 0) > ($$01 | 0);
    $$01 = $45 ? $44 : $$01;
    $$03 = $45 ? $$16 : $$03;
    $$16 = $$16 + 1 | 0;
   }
   $47 = $0 + 2332 | 0;
   $48 = HEAP32[$47 >> 2] | 0;
   _memmove($0 + 2772 + ($48 << 2) | 0, $5 | 0, (Math_imul($22 + -1 | 0, $48) | 0) << 2 | 0) | 0;
   $53 = HEAP32[$47 >> 2] | 0;
   _memcpy($5 | 0, $0 + 4 + ((Math_imul($$03, $53) | 0) << 2) | 0, $53 << 2 | 0) | 0;
   $57 = $0 + 4148 | 0;
   $$pre = HEAP32[$21 >> 2] | 0;
   $$2 = 0;
   while (1) {
    if (($$2 | 0) >= ($$pre | 0)) break;
    $61 = HEAP32[$57 >> 2] | 0;
    $62 = (HEAP32[$1 + 16 + ($$2 << 2) >> 2] | 0) - $61 | 0;
    HEAP32[$57 >> 2] = $61 + ((($62 >> 16) * 4634 | 0) + ((($62 & 65535) * 4634 | 0) >>> 16));
    $$2 = $$2 + 1 | 0;
   }
   if (HEAP32[$12 >> 2] | 0) break;
  }
  _memset($0 + 4084 | 0, 0, HEAP32[$0 + 2340 >> 2] << 2 | 0) | 0;
  STACKTOP = sp;
  return;
 } while (0);
 $73 = _llvm_stacksave() | 0;
 $74 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($3 + 16 << 2) | 0) + 15 & -16) | 0;
 $76 = HEAP16[$0 + 4228 >> 1] | 0;
 $77 = $76 << 16 >> 16;
 $80 = HEAP32[$0 + 4248 >> 2] | 0;
 $81 = $80 << 16 >> 16;
 $91 = (Math_imul($77 >> 16, $81) | 0) + ((Math_imul($76 & 65535, $81) | 0) >> 16) + (Math_imul($77, ($80 >> 15) + 1 >> 1) | 0) | 0;
 $$pre32 = HEAP32[$0 + 4148 >> 2] | 0;
 $94 = $91 >> 16;
 if (($91 | 0) > 2097151 | ($$pre32 | 0) > 8388608) {
  $96 = $$pre32 >> 16;
  $$sink = Math_imul($96, $96) | 0;
  $$sink33 = 16;
  $$sink36 = Math_imul($94, $94) | 0;
 } else {
  $98 = $91 << 16 >> 16;
  $110 = $$pre32 << 16 >> 16;
  $$sink = (Math_imul($$pre32 >> 16, $110) | 0) + ((Math_imul($$pre32 & 65535, $110) | 0) >> 16) + (Math_imul($$pre32, ($$pre32 >> 15) + 1 >> 1) | 0) | 0;
  $$sink33 = 8;
  $$sink36 = (Math_imul($94, $98) | 0) + ((Math_imul($91 & 65535, $98) | 0) >> 16) + (Math_imul($91, ($91 >> 15) + 1 >> 1) | 0) | 0;
 }
 $124 = (_silk_SQRT_APPROX($$sink - ($$sink36 << 5) | 0) | 0) << $$sink33;
 _silk_CNG_exc($74 + 64 | 0, $5, $3, $0 + 4152 | 0);
 $128 = $0 + 2340 | 0;
 _silk_NLSF2A($4, $0 + 4052 | 0, HEAP32[$128 >> 2] | 0);
 $130 = $0 + 4084 | 0;
 dest = $74;
 src = $130;
 stop = dest + 64 | 0;
 do {
  HEAP32[dest >> 2] = HEAP32[src >> 2];
  dest = dest + 4 | 0;
  src = src + 4 | 0;
 } while ((dest | 0) < (stop | 0));
 $132 = HEAP16[$4 >> 1] | 0;
 $135 = HEAP16[$4 + 2 >> 1] | 0;
 $138 = HEAP16[$4 + 4 >> 1] | 0;
 $141 = HEAP16[$4 + 6 >> 1] | 0;
 $144 = HEAP16[$4 + 8 >> 1] | 0;
 $147 = HEAP16[$4 + 10 >> 1] | 0;
 $150 = HEAP16[$4 + 12 >> 1] | 0;
 $153 = HEAP16[$4 + 14 >> 1] | 0;
 $156 = HEAP16[$4 + 16 >> 1] | 0;
 $159 = HEAP16[$4 + 18 >> 1] | 0;
 $162 = HEAP16[$4 + 20 >> 1] | 0;
 $165 = HEAP16[$4 + 22 >> 1] | 0;
 $168 = HEAP16[$4 + 24 >> 1] | 0;
 $171 = HEAP16[$4 + 26 >> 1] | 0;
 $174 = HEAP16[$4 + 28 >> 1] | 0;
 $177 = HEAP16[$4 + 30 >> 1] | 0;
 $178 = $124 << 10 >> 16;
 $181 = ($124 >> 21) + 1 >> 1;
 $$3 = 0;
 while (1) {
  if (($$3 | 0) >= ($3 | 0)) break;
  $187 = HEAP32[$74 + ($$3 + 15 << 2) >> 2] | 0;
  $194 = (HEAP32[$128 >> 2] >> 1) + ((Math_imul($187 >> 16, $132) | 0) + ((Math_imul($187 & 65535, $132) | 0) >> 16)) | 0;
  $197 = HEAP32[$74 + ($$3 + 14 << 2) >> 2] | 0;
  $204 = $194 + ((Math_imul($197 >> 16, $135) | 0) + ((Math_imul($197 & 65535, $135) | 0) >> 16)) | 0;
  $207 = HEAP32[$74 + ($$3 + 13 << 2) >> 2] | 0;
  $214 = $204 + ((Math_imul($207 >> 16, $138) | 0) + ((Math_imul($207 & 65535, $138) | 0) >> 16)) | 0;
  $217 = HEAP32[$74 + ($$3 + 12 << 2) >> 2] | 0;
  $224 = $214 + ((Math_imul($217 >> 16, $141) | 0) + ((Math_imul($217 & 65535, $141) | 0) >> 16)) | 0;
  $227 = HEAP32[$74 + ($$3 + 11 << 2) >> 2] | 0;
  $234 = $224 + ((Math_imul($227 >> 16, $144) | 0) + ((Math_imul($227 & 65535, $144) | 0) >> 16)) | 0;
  $237 = HEAP32[$74 + ($$3 + 10 << 2) >> 2] | 0;
  $244 = $234 + ((Math_imul($237 >> 16, $147) | 0) + ((Math_imul($237 & 65535, $147) | 0) >> 16)) | 0;
  $247 = HEAP32[$74 + ($$3 + 9 << 2) >> 2] | 0;
  $254 = $244 + ((Math_imul($247 >> 16, $150) | 0) + ((Math_imul($247 & 65535, $150) | 0) >> 16)) | 0;
  $257 = HEAP32[$74 + ($$3 + 8 << 2) >> 2] | 0;
  $264 = $254 + ((Math_imul($257 >> 16, $153) | 0) + ((Math_imul($257 & 65535, $153) | 0) >> 16)) | 0;
  $267 = HEAP32[$74 + ($$3 + 7 << 2) >> 2] | 0;
  $274 = $264 + ((Math_imul($267 >> 16, $156) | 0) + ((Math_imul($267 & 65535, $156) | 0) >> 16)) | 0;
  $277 = HEAP32[$74 + ($$3 + 6 << 2) >> 2] | 0;
  $284 = $274 + ((Math_imul($277 >> 16, $159) | 0) + ((Math_imul($277 & 65535, $159) | 0) >> 16)) | 0;
  if ((HEAP32[$128 >> 2] | 0) == 16) {
   $289 = HEAP32[$74 + ($$3 + 5 << 2) >> 2] | 0;
   $296 = $284 + ((Math_imul($289 >> 16, $162) | 0) + ((Math_imul($289 & 65535, $162) | 0) >> 16)) | 0;
   $299 = HEAP32[$74 + ($$3 + 4 << 2) >> 2] | 0;
   $306 = $296 + ((Math_imul($299 >> 16, $165) | 0) + ((Math_imul($299 & 65535, $165) | 0) >> 16)) | 0;
   $309 = HEAP32[$74 + ($$3 + 3 << 2) >> 2] | 0;
   $316 = $306 + ((Math_imul($309 >> 16, $168) | 0) + ((Math_imul($309 & 65535, $168) | 0) >> 16)) | 0;
   $319 = HEAP32[$74 + ($$3 + 2 << 2) >> 2] | 0;
   $326 = $316 + ((Math_imul($319 >> 16, $171) | 0) + ((Math_imul($319 & 65535, $171) | 0) >> 16)) | 0;
   $329 = HEAP32[$74 + ($$3 + 1 << 2) >> 2] | 0;
   $336 = $326 + ((Math_imul($329 >> 16, $174) | 0) + ((Math_imul($329 & 65535, $174) | 0) >> 16)) | 0;
   $338 = HEAP32[$74 + ($$3 << 2) >> 2] | 0;
   $$02 = $336 + ((Math_imul($338 >> 16, $177) | 0) + ((Math_imul($338 & 65535, $177) | 0) >> 16)) | 0;
  } else $$02 = $284;
  $347 = $74 + ($$3 + 16 << 2) | 0;
  $348 = HEAP32[$347 >> 2] | 0;
  $349 = ($$02 | 0) > 134217727;
  $355 = $349 ? 2147483632 : (($$02 | 0) > -134217728 ? $$02 : -134217728) << 4;
  if (($348 + ($349 ? 2147483632 : (($$02 | 0) > -134217728 ? $$02 : -134217728) << 4) | 0) > -1) if (($348 & $355 | 0) < 0) $366 = -2147483648; else $366 = $348 + ($349 ? 2147483632 : (($$02 | 0) > -134217728 ? $$02 : -134217728) << 4) | 0; else if (($348 | $355 | 0) > -1) $366 = 2147483647; else $366 = $348 + ($349 ? 2147483632 : (($$02 | 0) > -134217728 ? $$02 : -134217728) << 4) | 0;
  HEAP32[$347 >> 2] = $366;
  $367 = $2 + ($$3 << 1) | 0;
  $369 = HEAP16[$367 >> 1] | 0;
  $380 = ((Math_imul($366 >> 16, $178) | 0) + ((Math_imul($366 & 65535, $178) | 0) >> 16) + (Math_imul($366, $181) | 0) >> 7) + 1 >> 1;
  $381 = ($380 | 0) > 32767;
  if (($369 + ($381 ? 32767 : ($380 | 0) > -32768 ? $380 : -32768) | 0) > 32767) $394 = 32767; else if (($369 + ($381 ? 32767 : ($380 | 0) > -32768 ? $380 : -32768) | 0) < -32768) $394 = -32768; else $394 = $369 + ($381 ? 32767 : ($380 | 0) > -32768 ? $380 : -32768) | 0;
  HEAP16[$367 >> 1] = $394;
  $$3 = $$3 + 1 | 0;
 }
 dest = $130;
 src = $74 + ($3 << 2) | 0;
 stop = dest + 64 | 0;
 do {
  HEAP32[dest >> 2] = HEAP32[src >> 2];
  dest = dest + 4 | 0;
  src = src + 4 | 0;
 } while ((dest | 0) < (stop | 0));
 _llvm_stackrestore($73 | 0);
 STACKTOP = sp;
 return;
}

function _compute_theta($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 $7 = $7 | 0;
 $8 = $8 | 0;
 $9 = $9 | 0;
 $10 = $10 | 0;
 var $$0 = 0, $$01 = 0, $$011 = 0, $$017 = 0, $$02 = 0, $$03 = 0, $$04 = 0, $$110 = 0, $$12$ph = 0, $$14 = 0, $$1450 = 0, $$1451 = 0, $$16 = 0, $$18 = 0, $$2 = 0, $$5 = 0, $$5$ph = 0, $$552 = 0, $$553 = 0, $$6 = 0, $$628 = 0, $$62846 = 0, $$630 = 0, $$9 = 0, $$idx = 0, $$idx21 = 0, $100 = 0, $103 = 0, $109 = 0, $11 = 0, $119 = 0, $121 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $13 = 0, $142 = 0, $145 = 0, $15 = 0, $153 = 0, $154 = 0, $164 = 0, $166 = 0, $17 = 0, $176 = 0, $178 = 0, $182 = 0, $183 = 0, $185 = 0, $19 = 0, $190 = 0, $199 = 0, $203 = 0, $21 = 0, $217 = 0, $221 = 0, $229 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $28 = 0, $30 = 0, $34 = 0, $35 = 0, $37 = 0, $39 = 0, $42 = 0, $49 = 0, $56 = 0, $59 = 0, $70 = 0, $77 = 0, $78 = 0, $86 = 0, $88 = 0, $89 = 0, $90 = 0, label = 0;
 $11 = HEAP32[$0 >> 2] | 0;
 $13 = HEAP32[$0 + 8 >> 2] | 0;
 $15 = HEAP32[$0 + 12 >> 2] | 0;
 $17 = HEAP32[$0 + 16 >> 2] | 0;
 $19 = HEAP32[$0 + 28 >> 2] | 0;
 $21 = HEAP32[$0 + 36 >> 2] | 0;
 $28 = (HEAP16[(HEAP32[$13 + 56 >> 2] | 0) + ($15 << 1) >> 1] | 0) + ($8 << 3) | 0;
 $30 = ($9 | 0) == 0;
 $34 = HEAP32[$5 >> 2] | 0;
 $35 = _compute_qn($4, $34, ($28 >> 1) - (($4 | 0) == 2 & ($30 ^ 1) ? 16 : 4) | 0, $28, $9) | 0;
 $$017 = $30 | ($15 | 0) < ($17 | 0) ? $35 : 1;
 $37 = ($11 | 0) == 0;
 if ($37) $$011 = 0; else $$011 = _stereo_itheta($2, $3, $9, $4) | 0;
 $$idx = $19 + 20 | 0;
 $$idx21 = $19 + 28 | 0;
 $39 = _ec_tell_frac(HEAP32[$$idx >> 2] | 0, HEAP32[$$idx21 >> 2] | 0) | 0;
 L4 : do if (($$017 | 0) == 1) if ($30) {
  $$14 = $$011;
  $$5 = 0;
  label = 57;
 } else {
  if ($37) {
   $$04 = 0;
   $190 = $34;
  } else {
   L9 : do if (($$011 | 0) > 8192) {
    $182 = (HEAP32[$0 + 52 >> 2] | 0) == 0;
    $183 = $182 & 1;
    if ($182) {
     $$0 = 0;
     while (1) {
      if (($$0 | 0) >= ($4 | 0)) {
       $235 = $183;
       break L9;
      }
      $185 = $3 + ($$0 << 2) | 0;
      HEAPF32[$185 >> 2] = -+HEAPF32[$185 >> 2];
      $$0 = $$0 + 1 | 0;
     }
    } else $235 = $183;
   } else $235 = 0; while (0);
   _intensity_stereo(HEAP32[$13 + 8 >> 2] | 0, $2, $3, $21, $15, $4);
   $$04 = $235;
   $190 = HEAP32[$5 >> 2] | 0;
  }
  do if (($190 | 0) > 16) if ((HEAP32[$0 + 32 >> 2] | 0) > 16) if ($37) {
   $$2 = _ec_dec_bit_logp($19, 2) | 0;
   break;
  } else {
   _ec_enc_bit_logp($19, $$04, 2);
   $$2 = $$04;
   break;
  } else $$2 = 0; else $$2 = 0; while (0);
  $$5$ph = (HEAP32[$0 + 52 >> 2] | 0) == 0 ? $$2 : 0;
  label = 56;
 } else {
  do if ($37) {
   $$6 = $$011;
   if ($30) {
    $$628 = $$6;
    label = 26;
   } else {
    $$630 = $$6;
    label = 13;
   }
  } else if ($30) {
   $49 = (Math_imul($$011, $$017) | 0) + 8192 >> 14;
   if (!((HEAP32[$0 + 56 >> 2] | 0) != 0 & ($49 | 0) > 0 & ($49 | 0) < ($$017 | 0))) {
    $$628 = $49;
    label = 26;
    break;
   }
   $56 = _celt_udiv($49 << 14, $$017) | 0;
   $59 = (_bitexact_cos($56 & 65535) | 0) << 16 >> 16;
   $70 = (Math_imul(($4 << 23) + -8388608 >> 16, (_bitexact_log2tan((_bitexact_cos(16384 - $56 & 65535) | 0) << 16 >> 16, $59) | 0) << 16 >> 16) | 0) + 16384 >> 15;
   if (($70 | 0) > ($34 | 0)) {
    $$628 = $$017;
    label = 26;
    break;
   }
   $$628 = ($70 | 0) < (0 - $34 | 0) ? 0 : $49;
   label = 26;
   break;
  } else {
   $42 = HEAP32[$0 + 48 >> 2] | 0;
   if (!$42) {
    $$630 = (Math_imul($$011, $$017) | 0) + 8192 >> 14;
    label = 13;
    break;
   } else {
    $77 = (Math_imul($$011, $$017) | 0) + (((($$011 | 0) > 8192 ? 32767 : -32767) | 0) / ($$017 | 0) | 0) | 0;
    $78 = ($77 | 0) < 0;
    $$630 = (($$017 | 0) > (($78 ? 0 : $77 >> 14) | 0) ? ($78 ? 0 : $77 >> 14) : $$017 + -1 | 0) + ($42 >>> 31 ^ 1) | 0;
    label = 13;
    break;
   }
  } while (0);
  do if ((label | 0) == 13) if (($4 | 0) > 2) {
   $86 = ($$017 | 0) / 2 | 0;
   $88 = ($86 * 3 | 0) + 3 | 0;
   $89 = $88 + $86 | 0;
   if (!$37) {
    $90 = ($$630 | 0) > ($86 | 0);
    if ($90) $100 = $$630 + -1 - $86 + $88 | 0; else $100 = $$630 * 3 | 0;
    _ec_encode($19, $100, $90 ? $$630 - $86 + $88 | 0 : ($$630 * 3 | 0) + 3 | 0, $89);
    $178 = _celt_udiv($$630 << 14, $$017) | 0;
    break;
   }
   $103 = _ec_decode($19, $89) | 0;
   if (($103 | 0) < ($88 | 0)) $$03 = ($103 | 0) / 3 | 0; else $$03 = $86 + 1 + ($103 - $88) | 0;
   $109 = ($$03 | 0) > ($86 | 0);
   if ($109) $119 = $$03 + -1 - $86 + $88 | 0; else $119 = $$03 * 3 | 0;
   _ec_dec_update($19, $119, $109 ? $$03 - $86 + $88 | 0 : ($$03 * 3 | 0) + 3 | 0, $89);
   $$12$ph = $$03;
   label = 38;
  } else {
   $$62846 = $$630;
   label = 27;
  } else if ((label | 0) == 26) if (($7 | 0) > 1 | $30 ^ 1) {
   $$62846 = $$628;
   label = 27;
  } else {
   $123 = $$017 >> 1;
   $124 = $123 + 1 | 0;
   $125 = Math_imul($124, $124) | 0;
   if ($37) {
    $145 = _ec_decode($19, $125) | 0;
    if (($145 | 0) < ((Math_imul($123, $124) | 0) >> 1 | 0)) {
     $153 = ((_isqrt32($145 << 3 | 1) | 0) + -1 | 0) >>> 1;
     $154 = $153 + 1 | 0;
     $$01 = (Math_imul($153, $154) | 0) >>> 1;
     $$02 = $154;
     $$9 = $153;
    } else {
     $164 = (($$017 << 1) + 2 - (_isqrt32(($125 - $145 << 3) + -7 | 0) | 0) | 0) >>> 1;
     $166 = $$017 + 1 - $164 | 0;
     $$01 = $125 - ((Math_imul($166, $$017 + 2 - $164 | 0) | 0) >> 1) | 0;
     $$02 = $166;
     $$9 = $164;
    }
    _ec_dec_update($19, $$01, $$01 + $$02 | 0, $125);
    $$12$ph = $$9;
    label = 38;
    break;
   } else {
    $126 = ($$628 | 0) > ($123 | 0);
    if ($126) $142 = $125 - ((Math_imul($$017 + 1 - $$628 | 0, $$017 + 2 - $$628 | 0) | 0) >> 1) | 0; else $142 = (Math_imul($$628, $$628 + 1 | 0) | 0) >> 1;
    _ec_encode($19, $142, $142 + ($126 ? $$017 + 1 - $$628 | 0 : $$628 + 1 | 0) | 0, $125);
    $$14 = _celt_udiv($$628 << 14, $$017) | 0;
    $$5 = 0;
    label = 57;
    break L4;
   }
  } while (0);
  do if ((label | 0) == 27) {
   $121 = $$017 + 1 | 0;
   if ($37) {
    $$12$ph = _ec_dec_uint($19, $121) | 0;
    label = 38;
    break;
   } else {
    _ec_enc_uint($19, $$62846, $121);
    $176 = _celt_udiv($$62846 << 14, $$017) | 0;
    if ($30) {
     $$14 = $176;
     $$5 = 0;
     label = 57;
     break L4;
    } else {
     $178 = $176;
     break;
    }
   }
  } while (0);
  if ((label | 0) == 38) {
   $$14 = _celt_udiv($$12$ph << 14, $$017) | 0;
   $$5 = 0;
   label = 57;
   break;
  }
  if (!$178) {
   _intensity_stereo(HEAP32[$13 + 8 >> 2] | 0, $2, $3, $21, $15, $4);
   $$5$ph = 0;
   label = 56;
   break;
  } else {
   _stereo_split($2, $3, $4);
   $$14 = $178;
   $$5 = 0;
   label = 57;
   break;
  }
 } while (0);
 L77 : do if ((label | 0) == 56) {
  $199 = (_ec_tell_frac(HEAP32[$$idx >> 2] | 0, HEAP32[$$idx21 >> 2] | 0) | 0) - $39 | 0;
  HEAP32[$5 >> 2] = (HEAP32[$5 >> 2] | 0) - $199;
  $$1451 = 0;
  $$553 = $$5$ph;
  $236 = $199;
 } else if ((label | 0) == 57) {
  $203 = (_ec_tell_frac(HEAP32[$$idx >> 2] | 0, HEAP32[$$idx21 >> 2] | 0) | 0) - $39 | 0;
  HEAP32[$5 >> 2] = (HEAP32[$5 >> 2] | 0) - $203;
  L79 : do if (($$14 | 0) < 16384) switch ($$14 | 0) {
  case 0:
   {
    $$1451 = $$14;
    $$553 = $$5;
    $236 = $203;
    break L77;
    break;
   }
  default:
   {}
  } else {
   switch ($$14 | 0) {
   case 16384:
    break;
   default:
    break L79;
   }
   HEAP32[$10 >> 2] = HEAP32[$10 >> 2] & (1 << $6) + -1 << $6;
   $$110 = 16384;
   $$1450 = $$14;
   $$16 = 32767;
   $$18 = 0;
   $$552 = $$5;
   $234 = $203;
   HEAP32[$1 >> 2] = $$552;
   $229 = $1 + 4 | 0;
   HEAP32[$229 >> 2] = $$18;
   $230 = $1 + 8 | 0;
   HEAP32[$230 >> 2] = $$16;
   $231 = $1 + 12 | 0;
   HEAP32[$231 >> 2] = $$110;
   $232 = $1 + 16 | 0;
   HEAP32[$232 >> 2] = $$1450;
   $233 = $1 + 20 | 0;
   HEAP32[$233 >> 2] = $234;
   return;
  } while (0);
  $217 = (_bitexact_cos($$14 & 65535) | 0) << 16 >> 16;
  $221 = (_bitexact_cos(16384 - $$14 & 65535) | 0) << 16 >> 16;
  $$110 = (Math_imul(($4 << 23) + -8388608 >> 16, (_bitexact_log2tan($221, $217) | 0) << 16 >> 16) | 0) + 16384 >> 15;
  $$1450 = $$14;
  $$16 = $221;
  $$18 = $217;
  $$552 = $$5;
  $234 = $203;
  HEAP32[$1 >> 2] = $$552;
  $229 = $1 + 4 | 0;
  HEAP32[$229 >> 2] = $$18;
  $230 = $1 + 8 | 0;
  HEAP32[$230 >> 2] = $$16;
  $231 = $1 + 12 | 0;
  HEAP32[$231 >> 2] = $$110;
  $232 = $1 + 16 | 0;
  HEAP32[$232 >> 2] = $$1450;
  $233 = $1 + 20 | 0;
  HEAP32[$233 >> 2] = $234;
  return;
 } while (0);
 HEAP32[$10 >> 2] = HEAP32[$10 >> 2] & (1 << $6) + -1;
 $$110 = -16384;
 $$1450 = $$1451;
 $$16 = 0;
 $$18 = 32767;
 $$552 = $$553;
 $234 = $236;
 HEAP32[$1 >> 2] = $$552;
 $229 = $1 + 4 | 0;
 HEAP32[$229 >> 2] = $$18;
 $230 = $1 + 8 | 0;
 HEAP32[$230 >> 2] = $$16;
 $231 = $1 + 12 | 0;
 HEAP32[$231 >> 2] = $$110;
 $232 = $1 + 16 | 0;
 HEAP32[$232 >> 2] = $$1450;
 $233 = $1 + 20 | 0;
 HEAP32[$233 >> 2] = $234;
 return;
}

function _celt_decode_lost($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0.0, $$01 = 0.0, $$011 = 0.0, $$012 = 0.0, $$014 = 0, $$015 = 0.0, $$016 = 0, $$017 = 0, $$02 = 0.0, $$03 = 0, $$04 = 0, $$09 = 0, $$1 = 0, $$10 = 0, $$11 = 0, $$110 = 0, $$113 = 0.0, $$118 = 0, $$12 = 0, $$15 = 0, $$2 = 0, $$219 = 0, $$26 = 0, $$3 = 0, $$31 = 0, $$37 = 0, $$4 = 0, $$48 = 0, $$5 = 0, $$6 = 0, $$7 = 0, $$8 = 0, $$9 = 0, $10 = 0, $104 = 0, $105 = 0, $109 = 0, $110 = 0, $111 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $130 = 0, $138 = 0, $139 = 0.0, $14 = 0, $141 = 0.0, $149 = 0, $150 = 0, $151 = 0, $159 = 0, $16 = 0, $161 = 0, $162 = 0, $163 = 0, $167 = 0.0, $17 = 0, $170 = 0.0, $18 = 0, $182 = 0, $193 = 0.0, $20 = 0, $203 = 0, $204 = 0, $208 = 0.0, $222 = 0.0, $229 = 0, $235 = 0, $239 = 0, $241 = 0.0, $242 = 0, $263 = 0, $28 = 0, $3 = 0, $30 = 0, $31 = 0, $34 = 0, $35 = 0, $36 = 0, $38 = 0, $4 = 0, $45 = 0, $47 = 0, $48 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $55 = 0.0, $56 = 0, $58 = 0, $6 = 0, $60 = 0.0, $61 = 0, $63 = 0.0, $68 = 0, $7 = 0, $71 = 0, $75 = 0, $77 = 0, $78 = 0, $83 = 0, $85 = 0, $9 = 0, $96 = 0, $98 = 0, $sqrtf = 0.0, $sqrtf20 = 0.0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 4416 | 0;
 $3 = sp + 4400 | 0;
 $4 = sp + 4392 | 0;
 $5 = sp + 200 | 0;
 $6 = sp + 96 | 0;
 $7 = sp;
 $9 = HEAP32[$0 + 8 >> 2] | 0;
 $10 = HEAP32[$0 >> 2] | 0;
 $12 = HEAP32[$10 + 8 >> 2] | 0;
 $14 = HEAP32[$10 + 4 >> 2] | 0;
 $16 = HEAP32[$10 + 32 >> 2] | 0;
 $17 = $14 + 2048 | 0;
 $18 = 0 - $1 | 0;
 $$03 = 0;
 do {
  $20 = $0 + 92 + ((Math_imul($$03, $17) | 0) << 2) | 0;
  HEAP32[$3 + ($$03 << 2) >> 2] = $20;
  HEAP32[$4 + ($$03 << 2) >> 2] = $20 + 8192 + ($18 << 2);
  $$03 = $$03 + 1 | 0;
 } while (($$03 | 0) < ($9 | 0));
 $28 = $0 + 92 + ((Math_imul($17, $9) | 0) << 2) | 0;
 $30 = $28 + ($9 * 24 << 2) | 0;
 $31 = $12 << 1;
 $34 = $30 + ($31 << 2) + ($31 << 2) + ($31 << 2) | 0;
 $35 = $0 + 52 | 0;
 $36 = HEAP32[$35 >> 2] | 0;
 $38 = HEAP32[$0 + 20 >> 2] | 0;
 if (($36 | 0) < 5 & ($38 | 0) == 0) if (!(HEAP32[$0 + 56 >> 2] | 0)) {
  $104 = ($36 | 0) == 0;
  if ($104) {
   $105 = _celt_plc_pitch_search($3, $9) | 0;
   HEAP32[$0 + 48 >> 2] = $105;
   $$014 = $105;
   $$015 = 1.0;
  } else {
   $$014 = HEAP32[$0 + 48 >> 2] | 0;
   $$015 = .800000011920929;
  }
  $109 = _llvm_stacksave() | 0;
  $110 = STACKTOP;
  STACKTOP = STACKTOP + ((1 * ($14 << 2) | 0) + 15 & -16) | 0;
  $111 = $5 + 96 | 0;
  $113 = HEAP32[$10 + 60 >> 2] | 0;
  $114 = $$014 << 1;
  $115 = ($114 | 0) < 1024;
  $116 = $5 + 4192 | 0;
  $117 = 2048 - $1 | 0;
  $118 = $117 << 2;
  $119 = 1024 - $$014 | 0;
  $120 = $14 + $1 | 0;
  $122 = 1024 - $1 + $119 | 0;
  $123 = $117 + -1 | 0;
  $124 = $0 + 60 | 0;
  $125 = $0 + 68 | 0;
  $126 = $0 + 76 | 0;
  $127 = ($14 | 0) / 2 | 0;
  $128 = $14 + -1 | 0;
  $$4 = 0;
  do {
   $130 = HEAP32[$3 + ($$4 << 2) >> 2] | 0;
   $$26 = 0;
   while (1) {
    if (($$26 | 0) == 1024) break;
    HEAP32[$111 + ($$26 << 2) >> 2] = HEAP32[$130 + ($$26 + 1024 << 2) >> 2];
    $$26 = $$26 + 1 | 0;
   }
   if ($104) {
    __celt_autocorr($111, $6, $113, $14, 24, 1024);
    HEAPF32[$6 >> 2] = +HEAPF32[$6 >> 2] * 1.000100016593933;
    $$37 = 1;
    while (1) {
     if (($$37 | 0) == 25) break;
     $138 = $6 + ($$37 << 2) | 0;
     $139 = +HEAPF32[$138 >> 2];
     $141 = +($$37 | 0);
     HEAPF32[$138 >> 2] = $139 - $139 * 6.400000711437315e-05 * $141 * $141;
     $$37 = $$37 + 1 | 0;
    }
    __celt_lpc($28 + ($$4 * 24 << 2) | 0, $6, 24);
   }
   $$31 = $115 ? $114 : 1024;
   $149 = 2048 - $$31 + -24 | 0;
   $150 = 1024 - $$31 | 0;
   $151 = $150 + -24 | 0;
   $$48 = 0;
   while (1) {
    if (($$48 | 0) == 24) break;
    HEAP32[$111 + ($151 + $$48 << 2) >> 2] = HEAP32[$130 + ($149 + $$48 << 2) >> 2];
    $$48 = $$48 + 1 | 0;
   }
   $159 = $116 + (0 - $$31 << 2) | 0;
   $161 = $28 + ($$4 * 24 << 2) | 0;
   _celt_fir_c($159, $161, $159, $$31);
   $162 = $$31 >> 1;
   $163 = 1024 - $162 | 0;
   $$01 = 1.0;
   $$02 = 1.0;
   $$5 = 0;
   while (1) {
    if (($$5 | 0) >= ($162 | 0)) break;
    $167 = +HEAPF32[$111 + ($163 + $$5 << 2) >> 2];
    $170 = +HEAPF32[$111 + ($150 + $$5 << 2) >> 2];
    $$01 = $$01 + $170 * $170;
    $$02 = $$02 + $167 * $167;
    $$5 = $$5 + 1 | 0;
   }
   $sqrtf = +Math_sqrt(+(($$02 < $$01 ? $$02 : $$01) / $$01));
   _memmove($130 | 0, $130 + ($1 << 2) | 0, $118 | 0) | 0;
   $$011 = 0.0;
   $$012 = $$015 * $sqrtf;
   $$09 = 0;
   $$6 = 0;
   while (1) {
    if (($$6 | 0) >= ($120 | 0)) {
     $$7 = 0;
     break;
    }
    $182 = ($$09 | 0) < ($$014 | 0);
    $$113 = $182 ? $$012 : $$012 * $sqrtf;
    $$110 = $$09 - ($182 ? 0 : $$014) | 0;
    HEAPF32[$130 + ($117 + $$6 << 2) >> 2] = $$113 * +HEAPF32[$111 + ($119 + $$110 << 2) >> 2];
    $193 = +HEAPF32[$130 + ($122 + $$110 << 2) >> 2];
    $$011 = $$011 + $193 * $193;
    $$012 = $$113;
    $$09 = $$110 + 1 | 0;
    $$6 = $$6 + 1 | 0;
   }
   while (1) {
    if (($$7 | 0) == 24) break;
    HEAP32[$7 + ($$7 << 2) >> 2] = HEAP32[$130 + ($123 - $$7 << 2) >> 2];
    $$7 = $$7 + 1 | 0;
   }
   $203 = $130 + 8192 | 0;
   $204 = $203 + ($18 << 2) | 0;
   _celt_iir($204, $161, $204, $120, $7);
   $$0 = 0.0;
   $$8 = 0;
   while (1) {
    if (($$8 | 0) >= ($120 | 0)) break;
    $208 = +HEAPF32[$130 + ($117 + $$8 << 2) >> 2];
    $$0 = $$0 + $208 * $208;
    $$8 = $$8 + 1 | 0;
   }
   L43 : do if ($$011 > $$0 * .20000000298023224) {
    if ($$011 < $$0) {
     $sqrtf20 = +Math_sqrt(+(($$011 + 1.0) / ($$0 + 1.0)));
     $222 = 1.0 - $sqrtf20;
     $$10 = 0;
     while (1) {
      if (($$10 | 0) >= ($14 | 0)) {
       $$11 = $14;
       break;
      }
      $229 = $130 + ($117 + $$10 << 2) | 0;
      HEAPF32[$229 >> 2] = (1.0 - +HEAPF32[$113 + ($$10 << 2) >> 2] * $222) * +HEAPF32[$229 >> 2];
      $$10 = $$10 + 1 | 0;
     }
     while (1) {
      if (($$11 | 0) >= ($120 | 0)) break L43;
      $235 = $130 + ($117 + $$11 << 2) | 0;
      HEAPF32[$235 >> 2] = $sqrtf20 * +HEAPF32[$235 >> 2];
      $$11 = $$11 + 1 | 0;
     }
    }
   } else {
    $$9 = 0;
    while (1) {
     if (($$9 | 0) >= ($120 | 0)) break L43;
     HEAPF32[$130 + ($117 + $$9 << 2) >> 2] = 0.0;
     $$9 = $$9 + 1 | 0;
    }
   } while (0);
   $239 = HEAP32[$124 >> 2] | 0;
   $241 = -+HEAPF32[$125 >> 2];
   $242 = HEAP32[$126 >> 2] | 0;
   _comb_filter($110, $203, $239, $239, $14, $241, $241, $242, $242, 0, 0);
   $$12 = 0;
   while (1) {
    if (($$12 | 0) >= ($127 | 0)) break;
    HEAPF32[$130 + ($$12 + 2048 << 2) >> 2] = +HEAPF32[$113 + ($$12 << 2) >> 2] * +HEAPF32[$110 + ($128 - $$12 << 2) >> 2] + +HEAPF32[$113 + ($14 - $$12 + -1 << 2) >> 2] * +HEAPF32[$110 + ($$12 << 2) >> 2];
    $$12 = $$12 + 1 | 0;
   }
   $$4 = $$4 + 1 | 0;
  } while (($$4 | 0) < ($9 | 0));
  _llvm_stackrestore($109 | 0);
  $263 = $36 + 1 | 0;
  HEAP32[$35 >> 2] = $263;
  STACKTOP = sp;
  return;
 }
 $45 = HEAP32[$0 + 24 >> 2] | 0;
 $47 = HEAP32[$10 + 12 >> 2] | 0;
 $48 = ($45 | 0) < ($47 | 0);
 $50 = ($38 | 0) > (($48 ? $45 : $47) | 0) ? $38 : $48 ? $45 : $47;
 $51 = Math_imul($9, $1) | 0;
 $52 = _llvm_stacksave() | 0;
 $53 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($51 << 2) | 0) + 15 & -16) | 0;
 $55 = ($36 | 0) == 0 ? 1.5 : .5;
 $$1 = 0;
 do {
  $56 = Math_imul($$1, $12) | 0;
  $$04 = $38;
  while (1) {
   if (($$04 | 0) >= ($45 | 0)) break;
   $58 = $56 + $$04 | 0;
   $60 = +HEAPF32[$34 + ($58 << 2) >> 2];
   $61 = $30 + ($58 << 2) | 0;
   $63 = +HEAPF32[$61 >> 2] - $55;
   HEAPF32[$61 >> 2] = $60 > $63 ? $60 : $63;
   $$04 = $$04 + 1 | 0;
  }
  $$1 = $$1 + 1 | 0;
 } while (($$1 | 0) < ($9 | 0));
 $68 = $0 + 40 | 0;
 $$017 = HEAP32[$68 >> 2] | 0;
 $$2 = 0;
 while (1) {
  if (($$2 | 0) >= ($9 | 0)) break;
  $71 = Math_imul($$2, $1) | 0;
  $$118 = $$017;
  $$15 = $38;
  while (1) {
   if (($$15 | 0) >= ($50 | 0)) break;
   $75 = HEAP16[$16 + ($$15 << 1) >> 1] | 0;
   $77 = $71 + ($75 << $2) | 0;
   $78 = $$15 + 1 | 0;
   $83 = (HEAP16[$16 + ($78 << 1) >> 1] | 0) - $75 << $2;
   $$016 = 0;
   $$219 = $$118;
   while (1) {
    if (($$016 | 0) >= ($83 | 0)) break;
    $85 = _celt_lcg_rand($$219) | 0;
    HEAPF32[$53 + ($77 + $$016 << 2) >> 2] = +($85 >> 20 | 0);
    $$016 = $$016 + 1 | 0;
    $$219 = $85;
   }
   _renormalise_vector($53 + ($77 << 2) | 0, $83, 1.0);
   $$118 = $$219;
   $$15 = $78;
  }
  $$017 = $$118;
  $$2 = $$2 + 1 | 0;
 }
 HEAP32[$68 >> 2] = $$017;
 $96 = 2048 - $1 + ($14 >>> 1) << 2;
 $$3 = 0;
 do {
  $98 = HEAP32[$3 + ($$3 << 2) >> 2] | 0;
  _memmove($98 | 0, $98 + ($1 << 2) | 0, $96 | 0) | 0;
  $$3 = $$3 + 1 | 0;
 } while (($$3 | 0) < ($9 | 0));
 _celt_synthesis($10, $53, $4, $30, $38, $50, $9, $9, 0, $2, HEAP32[$0 + 16 >> 2] | 0, 0);
 _llvm_stackrestore($52 | 0);
 $263 = $36 + 1 | 0;
 HEAP32[$35 >> 2] = $263;
 STACKTOP = sp;
 return;
}

function _update_filter($0) {
 $0 = $0 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $$03 = 0, $$04 = 0, $$05 = 0, $$06 = 0, $$07 = 0, $$08 = 0, $$09 = 0, $$1 = 0, $$2 = 0, $$3 = 0, $$4 = 0, $1 = 0, $100 = 0, $114 = 0.0, $121 = 0, $126 = 0, $127 = 0, $13 = 0, $130 = 0, $133 = 0, $137 = 0, $14 = 0, $142 = 0, $143 = 0, $146 = 0, $151 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $163 = 0, $164 = 0, $166 = 0, $167 = 0, $169 = 0, $17 = 0, $175 = 0, $182 = 0, $19 = 0, $191 = 0, $192 = 0, $194 = 0, $195 = 0, $196 = 0, $198 = 0, $2 = 0, $209 = 0, $223 = 0, $234 = 0, $237 = 0, $240 = 0, $247 = 0, $248 = 0, $249 = 0, $253 = 0, $254 = 0, $261 = 0, $262 = 0, $266 = 0, $269 = 0, $278 = 0, $279 = 0, $3 = 0, $31 = 0, $34 = 0, $37 = 0, $38 = 0, $4 = 0, $41 = 0, $42 = 0, $45 = 0, $46 = 0, $48 = 0, $52 = 0, $53 = 0, $55 = 0, $56 = 0, $6 = 0, $62 = 0, $65 = 0, $68 = 0, $7 = 0, $70 = 0, $71 = 0, $74 = 0.0, $75 = 0, $8 = 0, $89 = 0.0, $98 = 0, $99 = 0, label = 0;
 $1 = $0 + 24 | 0;
 $2 = HEAP32[$1 >> 2] | 0;
 $3 = $0 + 28 | 0;
 $4 = HEAP32[$3 >> 2] | 0;
 $6 = HEAP32[$0 + 8 >> 2] | 0;
 $7 = $0 + 12 | 0;
 $8 = HEAP32[$7 >> 2] | 0;
 HEAP32[$0 + 36 >> 2] = ($6 >>> 0) / ($8 >>> 0) | 0;
 HEAP32[$0 + 40 >> 2] = ($6 >>> 0) % ($8 >>> 0) | 0;
 $13 = $0 + 16 | 0;
 $14 = HEAP32[$13 >> 2] | 0;
 $16 = HEAP32[18872 + ($14 * 20 | 0) + 4 >> 2] | 0;
 $17 = $0 + 48 | 0;
 HEAP32[$17 >> 2] = $16;
 $19 = HEAP32[18872 + ($14 * 20 | 0) >> 2] | 0;
 HEAP32[$1 >> 2] = $19;
 if ($6 >>> 0 > $8 >>> 0) {
  HEAPF32[$0 + 44 >> 2] = +HEAPF32[18872 + ($14 * 20 | 0) + 8 >> 2] * +($8 >>> 0) / +($6 >>> 0);
  $31 = (((Math_imul($19, $6) | 0) >>> 0) / ($8 >>> 0) | 0) + 7 & -8;
  HEAP32[$1 >> 2] = $31;
  if ($8 << 1 >>> 0 < $6 >>> 0) {
   $34 = $16 >>> 1;
   HEAP32[$17 >> 2] = $34;
   $38 = $34;
  } else $38 = $16;
  if ($8 << 2 >>> 0 < $6 >>> 0) {
   $37 = $38 >>> 1;
   HEAP32[$17 >> 2] = $37;
   $42 = $37;
  } else $42 = $38;
  if ($8 << 3 >>> 0 < $6 >>> 0) {
   $41 = $42 >>> 1;
   HEAP32[$17 >> 2] = $41;
   $46 = $41;
  } else $46 = $42;
  if ($8 << 4 >>> 0 < $6 >>> 0) {
   $45 = $46 >>> 1;
   HEAP32[$17 >> 2] = $45;
   $48 = $45;
  } else $48 = $46;
  if (!$48) {
   HEAP32[$17 >> 2] = 1;
   $53 = $31;
   $55 = 1;
  } else {
   $53 = $31;
   $55 = $48;
  }
 } else {
  HEAP32[$0 + 44 >> 2] = HEAP32[18872 + ($14 * 20 | 0) + 12 >> 2];
  $53 = $19;
  $55 = $16;
 }
 $52 = Math_imul($53, $8) | 0;
 $56 = (Math_imul($53, $55) | 0) + 8 | 0;
 if ($52 >>> 0 > $56 >>> 0) label = 15; else if ((536870911 / ($8 >>> 0) | 0) >>> 0 < $53 >>> 0) label = 15; else {
  $$04 = $52;
  $278 = 1;
  label = 16;
 }
 if ((label | 0) == 15) if ((536870903 / ($55 >>> 0) | 0) >>> 0 >= $53 >>> 0) {
  $$04 = $56;
  $278 = 0;
  label = 16;
 }
 do if ((label | 0) == 16) {
  $62 = $0 + 80 | 0;
  if ((HEAP32[$62 >> 2] | 0) >>> 0 < $$04 >>> 0) {
   $65 = $0 + 76 | 0;
   $68 = _speex_realloc(HEAP32[$65 >> 2] | 0, $$04 << 2) | 0;
   if (!$68) break;
   HEAP32[$65 >> 2] = $68;
   HEAP32[$62 >> 2] = $$04;
  }
  $70 = $0 + 44 | 0;
  $71 = $0 + 76 | 0;
  do if ($278) {
   $$07 = 0;
   while (1) {
    if ($$07 >>> 0 >= (HEAP32[$7 >> 2] | 0) >>> 0) break;
    $74 = +($$07 >>> 0);
    $$08 = 0;
    while (1) {
     $75 = HEAP32[$1 >> 2] | 0;
     if ($$08 >>> 0 >= $75 >>> 0) break;
     $89 = +_sinc(+HEAPF32[$70 >> 2], +($$08 - (($75 | 0) / 2 | 0) + 1 | 0) - $74 / +((HEAP32[$7 >> 2] | 0) >>> 0), $75, HEAP32[18872 + ((HEAP32[$13 >> 2] | 0) * 20 | 0) + 16 >> 2] | 0);
     HEAPF32[(HEAP32[$71 >> 2] | 0) + ((Math_imul($$07, $75) | 0) + $$08 << 2) >> 2] = $89;
     $$08 = $$08 + 1 | 0;
    }
    $$07 = $$07 + 1 | 0;
   }
   $98 = $0 + 84 | 0;
   if ((HEAP32[$13 >> 2] | 0) > 8) {
    HEAP32[$98 >> 2] = 1;
    break;
   } else {
    HEAP32[$98 >> 2] = 2;
    break;
   }
  } else {
   $$09 = -4;
   while (1) {
    $99 = HEAP32[$17 >> 2] | 0;
    $100 = HEAP32[$1 >> 2] | 0;
    if (($$09 | 0) >= ((Math_imul($99, $100) | 0) + 4 | 0)) break;
    $114 = +_sinc(+HEAPF32[$70 >> 2], +($$09 | 0) / +($99 >>> 0) - +($100 >>> 1 >>> 0), $100, HEAP32[18872 + ((HEAP32[$13 >> 2] | 0) * 20 | 0) + 16 >> 2] | 0);
    HEAPF32[(HEAP32[$71 >> 2] | 0) + ($$09 + 4 << 2) >> 2] = $114;
    $$09 = $$09 + 1 | 0;
   }
   $121 = $0 + 84 | 0;
   if ((HEAP32[$13 >> 2] | 0) > 8) {
    HEAP32[$121 >> 2] = 3;
    break;
   } else {
    HEAP32[$121 >> 2] = 4;
    break;
   }
  } while (0);
  $126 = (HEAP32[$1 >> 2] | 0) + -1 + (HEAP32[$0 + 32 >> 2] | 0) | 0;
  $127 = HEAP32[$3 >> 2] | 0;
  if ($126 >>> 0 > $127 >>> 0) {
   $130 = HEAP32[$0 + 20 >> 2] | 0;
   if ((536870911 / ($130 >>> 0) | 0) >>> 0 < $126 >>> 0) break;
   $133 = $0 + 72 | 0;
   $137 = _speex_realloc(HEAP32[$133 >> 2] | 0, (Math_imul($130, $126) | 0) << 2) | 0;
   if (!$137) break;
   HEAP32[$133 >> 2] = $137;
   HEAP32[$3 >> 2] = $126;
   $279 = $126;
  } else $279 = $127;
  if (!(HEAP32[$0 + 56 >> 2] | 0)) {
   $142 = $0 + 20 | 0;
   $143 = $0 + 72 | 0;
   $$06 = 0;
   $146 = $279;
   while (1) {
    if ($$06 >>> 0 >= (Math_imul(HEAP32[$142 >> 2] | 0, $146) | 0) >>> 0) {
     $$0 = 0;
     break;
    }
    HEAPF32[(HEAP32[$143 >> 2] | 0) + ($$06 << 2) >> 2] = 0.0;
    $$06 = $$06 + 1 | 0;
    $146 = HEAP32[$3 >> 2] | 0;
   }
   return $$0 | 0;
  }
  $151 = HEAP32[$1 >> 2] | 0;
  if ($151 >>> 0 <= $2 >>> 0) {
   if ($151 >>> 0 >= $2 >>> 0) {
    $$0 = 0;
    return $$0 | 0;
   }
   $247 = $0 + 20 | 0;
   $248 = $0 + 68 | 0;
   $249 = $0 + 72 | 0;
   $$02 = 0;
   while (1) {
    if ($$02 >>> 0 >= (HEAP32[$247 >> 2] | 0) >>> 0) {
     $$0 = 0;
     break;
    }
    $253 = (HEAP32[$248 >> 2] | 0) + ($$02 << 2) | 0;
    $254 = HEAP32[$253 >> 2] | 0;
    HEAP32[$253 >> 2] = ($2 - (HEAP32[$1 >> 2] | 0) | 0) >>> 1;
    $$01 = 0;
    while (1) {
     $261 = (HEAP32[$248 >> 2] | 0) + ($$02 << 2) | 0;
     $262 = HEAP32[$261 >> 2] | 0;
     if ($$01 >>> 0 >= ((HEAP32[$1 >> 2] | 0) + -1 + $262 + $254 | 0) >>> 0) break;
     $266 = HEAP32[$249 >> 2] | 0;
     $269 = (Math_imul($$02, HEAP32[$3 >> 2] | 0) | 0) + $$01 | 0;
     HEAP32[$266 + ($269 << 2) >> 2] = HEAP32[$266 + ($269 + $262 << 2) >> 2];
     $$01 = $$01 + 1 | 0;
    }
    HEAP32[$261 >> 2] = $262 + $254;
    $$02 = $$02 + 1 | 0;
   }
   return $$0 | 0;
  }
  $155 = $0 + 68 | 0;
  $156 = $2 + -1 | 0;
  $157 = $0 + 72 | 0;
  $158 = $0 + 60 | 0;
  $$05 = HEAP32[$0 + 20 >> 2] | 0;
  L74 : while (1) {
   $159 = $$05 + -1 | 0;
   if (!$$05) {
    $$0 = 0;
    break;
   }
   $163 = HEAP32[(HEAP32[$155 >> 2] | 0) + ($159 << 2) >> 2] | 0;
   $164 = $163 << 1;
   $166 = Math_imul($159, $4) | 0;
   $$03 = $156 + $163 | 0;
   while (1) {
    $167 = $$03 + -1 | 0;
    if (!$$03) {
     $$1 = 0;
     break;
    }
    $169 = HEAP32[$157 >> 2] | 0;
    $175 = (Math_imul($159, HEAP32[$3 >> 2] | 0) | 0) + $167 | 0;
    HEAP32[$169 + ($175 + (HEAP32[(HEAP32[$155 >> 2] | 0) + ($159 << 2) >> 2] | 0) << 2) >> 2] = HEAP32[$169 + ($166 + $167 << 2) >> 2];
    $$03 = $167;
   }
   while (1) {
    $182 = (HEAP32[$155 >> 2] | 0) + ($159 << 2) | 0;
    if ($$1 >>> 0 >= (HEAP32[$182 >> 2] | 0) >>> 0) break;
    HEAPF32[(HEAP32[$157 >> 2] | 0) + ((Math_imul($159, HEAP32[$3 >> 2] | 0) | 0) + $$1 << 2) >> 2] = 0.0;
    $$1 = $$1 + 1 | 0;
   }
   $191 = $2 + $164 | 0;
   HEAP32[$182 >> 2] = 0;
   $192 = HEAP32[$1 >> 2] | 0;
   if ($191 >>> 0 >= $192 >>> 0) {
    HEAP32[(HEAP32[$155 >> 2] | 0) + ($159 << 2) >> 2] = ($191 - $192 | 0) >>> 1;
    $$4 = 0;
    while (1) {
     $234 = HEAP32[(HEAP32[$155 >> 2] | 0) + ($159 << 2) >> 2] | 0;
     if ($$4 >>> 0 >= ((HEAP32[$1 >> 2] | 0) + -1 + $234 | 0) >>> 0) {
      $$05 = $159;
      continue L74;
     }
     $237 = HEAP32[$157 >> 2] | 0;
     $240 = (Math_imul($159, HEAP32[$3 >> 2] | 0) | 0) + $$4 | 0;
     HEAP32[$237 + ($240 << 2) >> 2] = HEAP32[$237 + ($240 + $234 << 2) >> 2];
     $$4 = $$4 + 1 | 0;
    }
   }
   $194 = $191 + -1 | 0;
   $195 = $191 + -2 | 0;
   $$2 = 0;
   while (1) {
    if (($$2 | 0) == ($194 | 0)) {
     $$3 = $194;
     break;
    }
    $196 = HEAP32[$157 >> 2] | 0;
    $198 = Math_imul($159, HEAP32[$3 >> 2] | 0) | 0;
    HEAP32[$196 + ($198 + ((HEAP32[$1 >> 2] | 0) + -2 - $$2) << 2) >> 2] = HEAP32[$196 + ($198 + ($195 - $$2) << 2) >> 2];
    $$2 = $$2 + 1 | 0;
   }
   while (1) {
    $209 = HEAP32[$1 >> 2] | 0;
    if ($$3 >>> 0 >= ($209 + -1 | 0) >>> 0) break;
    HEAPF32[(HEAP32[$157 >> 2] | 0) + ((Math_imul($159, HEAP32[$3 >> 2] | 0) | 0) + ($209 + -2 - $$3) << 2) >> 2] = 0.0;
    $$3 = $$3 + 1 | 0;
   }
   $223 = (HEAP32[$158 >> 2] | 0) + ($159 << 2) | 0;
   HEAP32[$223 >> 2] = (HEAP32[$223 >> 2] | 0) + (($209 - $191 | 0) >>> 1);
   $$05 = $159;
  }
  return $$0 | 0;
 } while (0);
 HEAP32[$0 + 84 >> 2] = 5;
 HEAP32[$1 >> 2] = $2;
 $$0 = 1;
 return $$0 | 0;
}

function _quant_all_bands($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 $7 = $7 | 0;
 $8 = $8 | 0;
 $9 = $9 | 0;
 $10 = $10 | 0;
 $11 = $11 | 0;
 $12 = $12 | 0;
 $13 = $13 | 0;
 $14 = $14 | 0;
 $15 = $15 | 0;
 $16 = $16 | 0;
 $17 = $17 | 0;
 $18 = $18 | 0;
 $19 = $19 | 0;
 var $$ = 0, $$$221 = 0, $$0 = 0, $$01 = 0, $$011 = 0, $$012 = 0, $$013 = 0, $$014 = 0, $$016 = 0, $$017 = 0, $$02 = 0, $$023 = 0, $$026 = 0, $$03 = 0, $$04 = 0, $$05 = 0, $$1 = 0, $$11 = 0, $$1153 = 0, $$118 = 0, $$120 = 0, $$124 = 0, $$16 = 0, $$17 = 0, $$18 = 0, $$1926 = 0, $$2 = 0, $$210 = 0, $$5 = 0, $$alloca_mul = 0, $$idx = 0, $$idx1 = 0, $109 = 0, $111 = 0, $118 = 0, $121 = 0, $129 = 0, $130 = 0, $136 = 0, $140 = 0, $146 = 0, $151 = 0, $157 = 0, $164 = 0, $165 = 0, $167 = 0, $174 = 0, $181 = 0, $192 = 0, $193 = 0, $20 = 0, $202 = 0, $203 = 0, $205 = 0, $212 = 0, $219 = 0, $22 = 0, $24 = 0, $27 = 0, $30 = 0, $37 = 0, $40 = 0, $42 = 0, $43 = 0, $50 = 0, $55 = 0, $56 = 0, $58 = 0, $59 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $66 = 0, $68 = 0, $69 = 0, $72 = 0, $73 = 0, $75 = 0, $80 = 0, $81 = 0, $84 = 0, $87 = 0, $89 = 0, $92 = 0, $93 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 $20 = sp;
 $22 = HEAP32[$0 + 32 >> 2] | 0;
 $24 = $4 | 0 ? 2 : 1;
 $$ = ($7 | 0) == 0 ? 1 : 1 << $15;
 $27 = $22 + ($1 << 1) | 0;
 $30 = HEAP16[$27 >> 1] << $15;
 $37 = HEAP16[$22 + ((HEAP32[$0 + 8 >> 2] | 0) + -1 << 1) >> 1] << $15;
 $$alloca_mul = (Math_imul($24, $37 - $30 | 0) | 0) << 2;
 $40 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * $$alloca_mul | 0) + 15 & -16) | 0;
 $42 = 0 - $30 | 0;
 $43 = $40 + ($37 << 2) + ($42 << 2) | 0;
 HEAP32[$20 + 36 >> 2] = 0;
 HEAP32[$20 + 28 >> 2] = $14;
 HEAP32[$20 >> 2] = 0;
 HEAP32[$20 + 16 >> 2] = $10;
 HEAP32[$20 + 8 >> 2] = $0;
 $50 = $20 + 40 | 0;
 HEAP32[$50 >> 2] = HEAP32[$17 >> 2];
 HEAP32[$20 + 20 >> 2] = $8;
 HEAP32[$20 + 44 >> 2] = $18;
 HEAP32[$20 + 52 >> 2] = $19;
 HEAP32[$20 + 4 >> 2] = 1;
 $55 = $20 + 48 | 0;
 HEAP32[$55 >> 2] = 0;
 $56 = ($$ | 0) > 1;
 $58 = $20 + 56 | 0;
 HEAP32[$58 >> 2] = $56 & 1;
 $59 = $20 + 12 | 0;
 $60 = $2 + -1 | 0;
 $61 = ($4 | 0) == 0;
 $$idx = $14 + 20 | 0;
 $$idx1 = $14 + 28 | 0;
 $62 = $20 + 32 | 0;
 $63 = $20 + 24 | 0;
 $64 = $0 + 12 | 0;
 $66 = (1 << $$) + -1 | 0;
 $$014 = $9;
 $$016 = 1;
 $$017 = 0;
 $$023 = $13;
 $$026 = $1;
 $$120 = $3 + ($37 << 2) | 0;
 while (1) {
  if (($$026 | 0) >= ($2 | 0)) break;
  HEAP32[$59 >> 2] = $$026;
  $68 = ($$026 | 0) == ($60 | 0);
  $69 = $22 + ($$026 << 1) | 0;
  $72 = HEAP16[$69 >> 1] << $15;
  $73 = $3 + ($72 << 2) | 0;
  $$11 = $61 ? 0 : $4 + ($72 << 2) | 0;
  $75 = $$026 + 1 | 0;
  $80 = (HEAP16[$22 + ($75 << 1) >> 1] << $15) - $72 | 0;
  $81 = _ec_tell_frac(HEAP32[$$idx >> 2] | 0, HEAP32[$$idx1 >> 2] | 0) | 0;
  $$124 = $$023 - (($$026 | 0) == ($1 | 0) ? 0 : $81) | 0;
  $84 = $12 - $81 | 0;
  HEAP32[$62 >> 2] = $84 + -1;
  if (($$026 | 0) < ($16 | 0)) {
   $87 = $16 - $$026 | 0;
   $89 = _celt_sudiv($$124, ($87 | 0) < 3 ? $87 : 3) | 0;
   $92 = (HEAP32[$6 + ($$026 << 2) >> 2] | 0) + $89 | 0;
   $93 = ($84 | 0) < ($92 | 0);
   if ((($93 ? $84 : $92) | 0) < 16384 & (($93 ? $84 : $92) | 0) < 0) $$013 = 0; else $$013 = (($93 ? $84 : $92) | 0) > 16383 ? 16383 : $93 ? $84 : $92;
  } else $$013 = 0;
  if (((HEAP16[$69 >> 1] << $15) - $80 | 0) < (HEAP16[$27 >> 1] << $15 | 0)) $$118 = $$017; else $$118 = ($$016 | 0) != 0 | ($$017 | 0) == 0 ? $$026 : $$017;
  $109 = HEAP32[$11 + ($$026 << 2) >> 2] | 0;
  HEAP32[$63 >> 2] = $109;
  $111 = ($$026 | 0) < (HEAP32[$64 >> 2] | 0);
  $$011 = $111 ? $73 : $40;
  $$210 = $111 ? $$11 : $61 ? 0 : $40;
  $$$221 = $68 ? 0 : $111 ? $$120 : 0;
  if (!$$118) {
   $$012 = -1;
   $$1 = $66;
   $$16 = $66;
  } else if (($8 | 0) != 3 | $56 | ($109 | 0) < 0) {
   $118 = (HEAP16[$22 + ($$118 << 1) >> 1] << $15) - $30 | 0;
   $$17 = ($118 | 0) < ($80 | 0) ? 0 : $118 - $80 | 0;
   $121 = $$17 + $30 | 0;
   $$03 = $$118;
   do $$03 = $$03 + -1 | 0; while ((HEAP16[$22 + ($$03 << 1) >> 1] << $15 | 0) > ($121 | 0));
   $129 = $121 + $80 | 0;
   $$02 = $$118 + -1 | 0;
   while (1) {
    $130 = $$02 + 1 | 0;
    if ((HEAP16[$22 + ($130 << 1) >> 1] << $15 | 0) < ($129 | 0)) $$02 = $130; else {
     $$01 = $$03;
     $$04 = 0;
     $$05 = 0;
     break;
    }
   }
   while (1) {
    $136 = Math_imul($$01, $24) | 0;
    $140 = $$05 | HEAPU8[$5 + $136 >> 0];
    $146 = $$04 | HEAPU8[$5 + ($136 + $24 + -1) >> 0];
    if (($$01 | 0) < ($$02 | 0)) {
     $$01 = $$01 + 1 | 0;
     $$04 = $146;
     $$05 = $140;
    } else {
     $$012 = $$17;
     $$1 = $146;
     $$16 = $140;
     break;
    }
   }
  } else {
   $$012 = -1;
   $$1 = $66;
   $$16 = $66;
  }
  L22 : do if (!$$014) label = 24; else {
   if (($$026 | 0) == ($10 | 0)) {
    $151 = $22 + ($10 << 1) | 0;
    $$0 = 0;
    while (1) {
     if (($$0 | 0) >= ((HEAP16[$151 >> 1] << $15) - $30 | 0)) {
      label = 24;
      break L22;
     }
     $157 = $40 + ($$0 << 2) | 0;
     HEAPF32[$157 >> 2] = (+HEAPF32[$157 >> 2] + +HEAPF32[$43 + ($$0 << 2) >> 2]) * .5;
     $$0 = $$0 + 1 | 0;
    }
   }
   $164 = ($$013 | 0) / 2 | 0;
   $165 = ($$012 | 0) == -1;
   $$18 = $165 ? 0 : $40 + ($$012 << 2) | 0;
   if ($68) {
    $167 = _quant_band($20, $$011, $80, $164, $$, $$18, $15, 0, 1.0, $$$221, $$16) | 0;
    $$1926 = $165 ? 0 : $43 + ($$012 << 2) | 0;
    $181 = 0;
    $219 = $167;
   } else {
    $174 = _quant_band($20, $$011, $80, $164, $$, $$18, $15, $40 + (HEAP16[$69 >> 1] << $15 << 2) + ($42 << 2) | 0, 1.0, $$$221, $$16) | 0;
    $$1926 = $165 ? 0 : $43 + ($$012 << 2) | 0;
    $181 = $43 + (HEAP16[$69 >> 1] << $15 << 2) + ($42 << 2) | 0;
    $219 = $174;
   }
   $$1153 = $$014;
   $$2 = _quant_band($20, $$210, $80, $164, $$, $$1926, $15, $181, 1.0, $$$221, $$1) | 0;
   $$5 = $219;
  } while (0);
  do if ((label | 0) == 24) {
   label = 0;
   if (!$$210) {
    if ($68) $202 = 0; else $202 = $40 + (HEAP16[$69 >> 1] << $15 << 2) + ($42 << 2) | 0;
    $203 = _quant_band($20, $$011, $80, $$013, $$, ($$012 | 0) == -1 ? 0 : $40 + ($$012 << 2) | 0, $15, $202, 1.0, $$$221, $$16 | $$1) | 0;
    $$1153 = 0;
    $$2 = $203;
    $$5 = $203;
    break;
   } else {
    HEAP32[$55 >> 2] = 0;
    if ($68) $192 = 0; else $192 = $40 + (HEAP16[$69 >> 1] << $15 << 2) + ($42 << 2) | 0;
    $193 = _quant_band_stereo($20, $$011, $$210, $80, $$013, $$, ($$012 | 0) == -1 ? 0 : $40 + ($$012 << 2) | 0, $15, $192, $$$221, $$16 | $$1) | 0;
    $$1153 = 0;
    $$2 = $193;
    $$5 = $193;
    break;
   }
  } while (0);
  $205 = Math_imul($$026, $24) | 0;
  HEAP8[$5 + $205 >> 0] = $$5;
  HEAP8[$5 + ($205 + $24 + -1) >> 0] = $$2;
  $212 = HEAP32[$6 + ($$026 << 2) >> 2] | 0;
  HEAP32[$58 >> 2] = 0;
  $$014 = $$1153;
  $$016 = ($$013 | 0) > ($80 << 3 | 0) & 1;
  $$017 = $$118;
  $$023 = $$124 + ($212 + $81) | 0;
  $$026 = $75;
  $$120 = $$$221;
 }
 HEAP32[$17 >> 2] = HEAP32[$50 >> 2];
 STACKTOP = sp;
 return;
}

function _speex_realloc($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$1$i = 0, $$1272$i$i = 0, $$1275$i$i = 0, $$3$i$i = 0, $$pre$phi$i$iZ2D = 0, $$ptr = 0, $$ptr1 = 0, $10 = 0, $101 = 0, $106 = 0, $108 = 0, $11 = 0, $111 = 0, $113 = 0, $116 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $123 = 0, $125 = 0, $126 = 0, $128 = 0, $129 = 0, $13 = 0, $134 = 0, $135 = 0, $148 = 0, $151 = 0, $152 = 0, $158 = 0, $16 = 0, $165 = 0, $169 = 0, $172 = 0, $178 = 0, $181 = 0, $183 = 0, $188 = 0, $28 = 0, $30 = 0, $37 = 0, $43 = 0, $45 = 0, $46 = 0, $55 = 0, $57 = 0, $59 = 0, $60 = 0, $61 = 0, $66 = 0, $72 = 0, $78 = 0, $8 = 0, $80 = 0, $81 = 0, $84 = 0, $86 = 0, $88 = 0, $9 = 0, $storemerge$i$i = 0, $storemerge1$i$i = 0;
 if (!$0) {
  $$1$i = _malloc($1) | 0;
  return $$1$i | 0;
 }
 if ($1 >>> 0 > 4294967231) {
  $$1$i = 0;
  return $$1$i | 0;
 }
 $8 = $1 >>> 0 < 11 ? 16 : $1 + 11 & -8;
 $$ptr = $0 + -8 | 0;
 $9 = $0 + -4 | 0;
 $10 = HEAP32[$9 >> 2] | 0;
 $11 = $10 & -8;
 $$ptr1 = $0 + ($11 + -8) | 0;
 $12 = HEAP32[7076] | 0;
 $13 = $10 & 3;
 if (!(($13 | 0) != 1 & $$ptr >>> 0 >= $12 >>> 0 & ($11 | 0) > 0)) _abort();
 $16 = HEAP32[$$ptr1 + 4 >> 2] | 0;
 if (!($16 & 1)) _abort();
 do if (!$13) {
  if (!($8 >>> 0 < 256 | $11 >>> 0 < ($8 | 4) >>> 0)) if (($11 - $8 | 0) >>> 0 <= HEAP32[7192] << 1 >>> 0) {
   $$1$i = $0;
   return $$1$i | 0;
  }
 } else {
  if ($11 >>> 0 >= $8 >>> 0) {
   $28 = $11 - $8 | 0;
   if ($28 >>> 0 <= 15) {
    $$1$i = $0;
    return $$1$i | 0;
   }
   $30 = $$ptr + $8 | 0;
   HEAP32[$9 >> 2] = $10 & 1 | $8 | 2;
   HEAP32[$30 + 4 >> 2] = $28 | 3;
   $37 = $30 + $28 + 4 | 0;
   HEAP32[$37 >> 2] = HEAP32[$37 >> 2] | 1;
   _dispose_chunk($30, $28);
   $$1$i = $0;
   return $$1$i | 0;
  }
  if (($$ptr1 | 0) == (HEAP32[7078] | 0)) {
   $43 = (HEAP32[7075] | 0) + $11 | 0;
   $45 = $43 - $8 | 0;
   $46 = $$ptr + $8 | 0;
   if ($43 >>> 0 <= $8 >>> 0) break;
   HEAP32[$9 >> 2] = $10 & 1 | $8 | 2;
   HEAP32[$46 + 4 >> 2] = $45 | 1;
   HEAP32[7078] = $46;
   HEAP32[7075] = $45;
   $$1$i = $0;
   return $$1$i | 0;
  }
  if (($$ptr1 | 0) == (HEAP32[7077] | 0)) {
   $55 = (HEAP32[7074] | 0) + $11 | 0;
   if ($55 >>> 0 < $8 >>> 0) break;
   $57 = $55 - $8 | 0;
   $59 = $10 & 1;
   if ($57 >>> 0 > 15) {
    $60 = $$ptr + $8 | 0;
    $61 = $60 + $57 | 0;
    HEAP32[$9 >> 2] = $59 | $8 | 2;
    HEAP32[$60 + 4 >> 2] = $57 | 1;
    HEAP32[$61 >> 2] = $57;
    $66 = $61 + 4 | 0;
    HEAP32[$66 >> 2] = HEAP32[$66 >> 2] & -2;
    $storemerge$i$i = $60;
    $storemerge1$i$i = $57;
   } else {
    HEAP32[$9 >> 2] = $59 | $55 | 2;
    $72 = $$ptr + $55 + 4 | 0;
    HEAP32[$72 >> 2] = HEAP32[$72 >> 2] | 1;
    $storemerge$i$i = 0;
    $storemerge1$i$i = 0;
   }
   HEAP32[7074] = $storemerge1$i$i;
   HEAP32[7077] = $storemerge$i$i;
   $$1$i = $0;
   return $$1$i | 0;
  }
  if (!($16 & 2)) {
   $78 = ($16 & -8) + $11 | 0;
   if ($78 >>> 0 >= $8 >>> 0) {
    $80 = $78 - $8 | 0;
    $81 = $16 >>> 3;
    L42 : do if ($16 >>> 0 < 256) {
     $84 = HEAP32[$$ptr1 + 8 >> 2] | 0;
     $86 = HEAP32[$$ptr1 + 12 >> 2] | 0;
     $88 = 28328 + ($81 << 1 << 2) | 0;
     if (($84 | 0) != ($88 | 0)) {
      if ($84 >>> 0 < $12 >>> 0) _abort();
      if ((HEAP32[$84 + 12 >> 2] | 0) != ($$ptr1 | 0)) _abort();
     }
     if (($86 | 0) == ($84 | 0)) {
      HEAP32[7072] = HEAP32[7072] & ~(1 << $81);
      break;
     }
     if (($86 | 0) == ($88 | 0)) $$pre$phi$i$iZ2D = $86 + 8 | 0; else {
      if ($86 >>> 0 < $12 >>> 0) _abort();
      $101 = $86 + 8 | 0;
      if ((HEAP32[$101 >> 2] | 0) == ($$ptr1 | 0)) $$pre$phi$i$iZ2D = $101; else _abort();
     }
     HEAP32[$84 + 12 >> 2] = $86;
     HEAP32[$$pre$phi$i$iZ2D >> 2] = $84;
    } else {
     $106 = HEAP32[$$ptr1 + 24 >> 2] | 0;
     $108 = HEAP32[$$ptr1 + 12 >> 2] | 0;
     do if (($108 | 0) == ($$ptr1 | 0)) {
      $119 = $$ptr1 + 16 | 0;
      $120 = $119 + 4 | 0;
      $121 = HEAP32[$120 >> 2] | 0;
      if (!$121) {
       $123 = HEAP32[$119 >> 2] | 0;
       if (!$123) {
        $$3$i$i = 0;
        break;
       } else {
        $$1272$i$i = $123;
        $$1275$i$i = $119;
       }
      } else {
       $$1272$i$i = $121;
       $$1275$i$i = $120;
      }
      while (1) {
       $125 = $$1272$i$i + 20 | 0;
       $126 = HEAP32[$125 >> 2] | 0;
       if ($126 | 0) {
        $$1272$i$i = $126;
        $$1275$i$i = $125;
        continue;
       }
       $128 = $$1272$i$i + 16 | 0;
       $129 = HEAP32[$128 >> 2] | 0;
       if (!$129) break; else {
        $$1272$i$i = $129;
        $$1275$i$i = $128;
       }
      }
      if ($$1275$i$i >>> 0 < $12 >>> 0) _abort(); else {
       HEAP32[$$1275$i$i >> 2] = 0;
       $$3$i$i = $$1272$i$i;
       break;
      }
     } else {
      $111 = HEAP32[$$ptr1 + 8 >> 2] | 0;
      if ($111 >>> 0 < $12 >>> 0) _abort();
      $113 = $111 + 12 | 0;
      if ((HEAP32[$113 >> 2] | 0) != ($$ptr1 | 0)) _abort();
      $116 = $108 + 8 | 0;
      if ((HEAP32[$116 >> 2] | 0) == ($$ptr1 | 0)) {
       HEAP32[$113 >> 2] = $108;
       HEAP32[$116 >> 2] = $111;
       $$3$i$i = $108;
       break;
      } else _abort();
     } while (0);
     if ($106 | 0) {
      $134 = HEAP32[$$ptr1 + 28 >> 2] | 0;
      $135 = 28592 + ($134 << 2) | 0;
      do if (($$ptr1 | 0) == (HEAP32[$135 >> 2] | 0)) {
       HEAP32[$135 >> 2] = $$3$i$i;
       if (!$$3$i$i) {
        HEAP32[7073] = HEAP32[7073] & ~(1 << $134);
        break L42;
       }
      } else if ($106 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort(); else {
       HEAP32[$106 + 16 + (((HEAP32[$106 + 16 >> 2] | 0) != ($$ptr1 | 0) & 1) << 2) >> 2] = $$3$i$i;
       if (!$$3$i$i) break L42; else break;
      } while (0);
      $148 = HEAP32[7076] | 0;
      if ($$3$i$i >>> 0 < $148 >>> 0) _abort();
      HEAP32[$$3$i$i + 24 >> 2] = $106;
      $151 = $$ptr1 + 16 | 0;
      $152 = HEAP32[$151 >> 2] | 0;
      do if ($152 | 0) if ($152 >>> 0 < $148 >>> 0) _abort(); else {
       HEAP32[$$3$i$i + 16 >> 2] = $152;
       HEAP32[$152 + 24 >> 2] = $$3$i$i;
       break;
      } while (0);
      $158 = HEAP32[$151 + 4 >> 2] | 0;
      if ($158 | 0) if ($158 >>> 0 < (HEAP32[7076] | 0) >>> 0) _abort(); else {
       HEAP32[$$3$i$i + 20 >> 2] = $158;
       HEAP32[$158 + 24 >> 2] = $$3$i$i;
       break;
      }
     }
    } while (0);
    $165 = $10 & 1;
    if ($80 >>> 0 < 16) {
     HEAP32[$9 >> 2] = $78 | $165 | 2;
     $169 = $$ptr + $78 + 4 | 0;
     HEAP32[$169 >> 2] = HEAP32[$169 >> 2] | 1;
     $$1$i = $0;
     return $$1$i | 0;
    } else {
     $172 = $$ptr + $8 | 0;
     HEAP32[$9 >> 2] = $165 | $8 | 2;
     HEAP32[$172 + 4 >> 2] = $80 | 3;
     $178 = $172 + $80 + 4 | 0;
     HEAP32[$178 >> 2] = HEAP32[$178 >> 2] | 1;
     _dispose_chunk($172, $80);
     $$1$i = $0;
     return $$1$i | 0;
    }
   }
  }
 } while (0);
 $181 = _malloc($1) | 0;
 if (!$181) {
  $$1$i = 0;
  return $$1$i | 0;
 }
 $183 = HEAP32[$9 >> 2] | 0;
 $188 = ($183 & -8) - (($183 & 3 | 0) == 0 ? 8 : 4) | 0;
 _memcpy($181 | 0, $0 | 0, ($188 >>> 0 < $1 >>> 0 ? $188 : $1) | 0) | 0;
 _free($0);
 $$1$i = $181;
 return $$1$i | 0;
}
function _opus_packet_parse_impl($0, $1, $2, $3, $4, $5, $6) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 var $$0 = 0, $$01 = 0, $$015 = 0, $$0158 = 0, $$016 = 0, $$01615 = 0, $$0166 = 0, $$0167 = 0, $$017 = 0, $$02 = 0, $$07 = 0, $$111 = 0, $$118 = 0, $$133 = 0, $$14 = 0, $$182 = 0, $$2 = 0, $$219 = 0, $$24 = 0, $$29 = 0, $$2910 = 0, $$2911 = 0, $$2917 = 0, $$320 = 0, $$4 = 0, $$413 = 0, $$414 = 0, $$41416 = 0, $$4149 = 0, $$418 = 0, $$46 = 0, $$4612 = 0, $$5 = 0, $$6 = 0, $$not = 0, $10 = 0, $106 = 0, $11 = 0, $12 = 0, $16 = 0, $18 = 0, $19 = 0, $20 = 0, $22 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $34 = 0, $38 = 0, $39 = 0, $44 = 0, $45 = 0, $48 = 0, $50 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $57 = 0, $65 = 0, $68 = 0, $69 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $80 = 0, $82 = 0, $84 = 0, $trunc = 0, label = 0;
 if (($4 | 0) == 0 | ($1 | 0) < 0) {
  $$0 = -1;
  return $$0 | 0;
 }
 if (!$1) {
  $$0 = -4;
  return $$0 | 0;
 }
 $trunc = HEAP8[$0 >> 0] | 0;
 $10 = _opus_packet_get_samples_per_frame($trunc, 48e3) | 0;
 $11 = $0 + 1 | 0;
 $12 = $1 + -1 | 0;
 L7 : do switch ($trunc & 3) {
 case 0:
  {
   $$015 = 0;
   $$016 = 1;
   $$29 = 0;
   $$4 = $11;
   $$414 = $12;
   $$46 = $12;
   label = 29;
   break;
  }
 case 1:
  {
   if (!$2) if (!($12 & 1)) {
    $16 = ($12 | 0) / 2 | 0;
    HEAP16[$4 >> 1] = $16;
    $$01615 = 2;
    $$2917 = 0;
    $$41416 = $16;
    $$418 = $11;
    label = 37;
    break L7;
   } else {
    $$0 = -4;
    return $$0 | 0;
   } else {
    $$0158 = 1;
    $$0166 = 2;
    $$2911 = 0;
    $$413 = $11;
    $$4149 = $12;
    $$4612 = $12;
    label = 30;
   }
   break;
  }
 case 2:
  {
   $18 = _parse_size($11, $12, $4) | 0;
   $19 = $12 - $18 | 0;
   $20 = HEAP16[$4 >> 1] | 0;
   if ($20 << 16 >> 16 < 0) {
    $$0 = -4;
    return $$0 | 0;
   }
   $22 = $20 << 16 >> 16;
   if (($19 | 0) < ($22 | 0)) {
    $$0 = -4;
    return $$0 | 0;
   } else {
    $$015 = 0;
    $$016 = 2;
    $$29 = 0;
    $$4 = $11 + $18 | 0;
    $$414 = $19 - $22 | 0;
    $$46 = $19;
    label = 29;
    break L7;
   }
   break;
  }
 default:
  {
   if (($1 | 0) < 2) {
    $$0 = -4;
    return $$0 | 0;
   }
   $27 = $0 + 2 | 0;
   $28 = HEAP8[$11 >> 0] | 0;
   $29 = $28 & 63;
   $30 = $29 & 255;
   if ($29 << 24 >> 24 == 0 | (Math_imul($10, $30) | 0) > 5760) {
    $$0 = -4;
    return $$0 | 0;
   }
   $34 = $1 + -2 | 0;
   if (!($28 & 64)) {
    $$133 = $34;
    $$14 = $27;
    $$182 = 0;
   } else {
    $$01 = $27;
    $$02 = $34;
    $$07 = 0;
    while (1) {
     if (($$02 | 0) < 1) {
      $$0 = -4;
      label = 47;
      break;
     }
     $38 = $$01 + 1 | 0;
     $39 = HEAP8[$$01 >> 0] | 0;
     if ($39 << 24 >> 24 != -1) break;
     $$01 = $38;
     $$02 = $$02 + -255 | 0;
     $$07 = $$07 + 254 | 0;
    }
    if ((label | 0) == 47) return $$0 | 0;
    $44 = $39 & 255;
    $45 = $$02 + -1 - $44 | 0;
    if (($45 | 0) < 0) {
     $$0 = -4;
     return $$0 | 0;
    } else {
     $$133 = $45;
     $$14 = $38;
     $$182 = $$07 + $44 | 0;
    }
   }
   $48 = ($28 & 255) >>> 7 ^ 1;
   $$not = $48 & 255;
   if ($48 << 24 >> 24) {
    if ($2 | 0) {
     $$0158 = $$not;
     $$0166 = $30;
     $$2911 = $$182;
     $$413 = $$14;
     $$4149 = $12;
     $$4612 = $$133;
     label = 30;
     break L7;
    }
    $65 = ($$133 | 0) / ($30 | 0) | 0;
    if ((Math_imul($65, $30) | 0) != ($$133 | 0)) {
     $$0 = -4;
     return $$0 | 0;
    }
    $68 = $30 + -1 | 0;
    $69 = $65 & 65535;
    $$118 = 0;
    while (1) {
     if (($$118 | 0) >= ($68 | 0)) {
      $$015 = $$not;
      $$016 = $30;
      $$29 = $$182;
      $$4 = $$14;
      $$414 = $65;
      $$46 = $$133;
      label = 29;
      break L7;
     }
     HEAP16[$4 + ($$118 << 1) >> 1] = $69;
     $$118 = $$118 + 1 | 0;
    }
   }
   $50 = $30 + -1 | 0;
   $$017 = 0;
   $$111 = $$133;
   $$2 = $$14;
   $$24 = $$133;
   while (1) {
    if (($$017 | 0) >= ($50 | 0)) {
     label = 23;
     break;
    }
    $52 = $4 + ($$017 << 1) | 0;
    $53 = _parse_size($$2, $$24, $52) | 0;
    $54 = $$24 - $53 | 0;
    $55 = HEAP16[$52 >> 1] | 0;
    if ($55 << 16 >> 16 < 0) {
     $$0 = -4;
     label = 47;
     break;
    }
    $57 = $55 << 16 >> 16;
    if (($57 | 0) > ($54 | 0)) {
     $$0 = -4;
     label = 47;
     break;
    }
    $$017 = $$017 + 1 | 0;
    $$111 = $$111 - ($53 + $57) | 0;
    $$2 = $$2 + $53 | 0;
    $$24 = $54;
   }
   if ((label | 0) == 23) {
    if (($$111 | 0) < 0) $$0 = -4; else {
     $$015 = $$not;
     $$016 = $30;
     $$29 = $$182;
     $$4 = $$2;
     $$414 = $$111;
     $$46 = $$24;
     label = 29;
     break L7;
    }
    return $$0 | 0;
   } else if ((label | 0) == 47) return $$0 | 0;
  }
 } while (0);
 if ((label | 0) == 29) if (!$2) {
  $$01615 = $$016;
  $$2917 = $$29;
  $$41416 = $$414;
  $$418 = $$4;
  label = 37;
 } else {
  $$0158 = $$015;
  $$0166 = $$016;
  $$2911 = $$29;
  $$413 = $$4;
  $$4149 = $$414;
  $$4612 = $$46;
  label = 30;
 }
 L59 : do if ((label | 0) == 30) {
  $76 = _parse_size($$413, $$4612, $4 + ($$0166 << 1) + -2 | 0) | 0;
  $77 = $$4612 - $76 | 0;
  $78 = $$0166 + -1 | 0;
  $79 = $4 + ($78 << 1) | 0;
  $80 = HEAP16[$79 >> 1] | 0;
  if ($80 << 16 >> 16 < 0) {
   $$0 = -4;
   return $$0 | 0;
  }
  $82 = $80 << 16 >> 16;
  if (($82 | 0) > ($77 | 0)) {
   $$0 = -4;
   return $$0 | 0;
  }
  $84 = $$413 + $76 | 0;
  if (!$$0158) {
   if (($76 + $82 | 0) > ($$4149 | 0)) $$0 = -4; else {
    $$0167 = $$0166;
    $$2910 = $$2911;
    $$5 = $84;
    break;
   }
   return $$0 | 0;
  }
  if ((Math_imul($82, $$0166) | 0) > ($77 | 0)) {
   $$0 = -4;
   return $$0 | 0;
  } else $$219 = 0;
  while (1) {
   if (($$219 | 0) >= ($78 | 0)) {
    $$0167 = $$0166;
    $$2910 = $$2911;
    $$5 = $84;
    break L59;
   }
   HEAP16[$4 + ($$219 << 1) >> 1] = HEAP16[$79 >> 1] | 0;
   $$219 = $$219 + 1 | 0;
  }
 } else if ((label | 0) == 37) if (($$41416 | 0) > 1275) {
  $$0 = -4;
  return $$0 | 0;
 } else {
  HEAP16[$4 + ($$01615 + -1 << 1) >> 1] = $$41416;
  $$0167 = $$01615;
  $$2910 = $$2917;
  $$5 = $$418;
  break;
 } while (0);
 if (!$5) {
  $$320 = 0;
  $$6 = $$5;
 } else {
  HEAP32[$5 >> 2] = $$5 - $0;
  $$320 = 0;
  $$6 = $$5;
 }
 while (1) {
  if (($$320 | 0) >= ($$0167 | 0)) break;
  $106 = $$6 + (HEAP16[$4 + ($$320 << 1) >> 1] | 0) | 0;
  $$320 = $$320 + 1 | 0;
  $$6 = $106;
 }
 if ($6 | 0) HEAP32[$6 >> 2] = $$2910 + ($$6 - $0);
 if (!$3) {
  $$0 = $$0167;
  return $$0 | 0;
 }
 HEAP8[$3 >> 0] = $trunc;
 $$0 = $$0167;
 return $$0 | 0;
}

function _compute_allocation($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 $7 = $7 | 0;
 $8 = $8 | 0;
 $9 = $9 | 0;
 $10 = $10 | 0;
 $11 = $11 | 0;
 $12 = $12 | 0;
 $13 = $13 | 0;
 $14 = $14 | 0;
 $15 = $15 | 0;
 var $$ = 0, $$0 = 0, $$01 = 0, $$011 = 0, $$015 = 0, $$018 = 0, $$02 = 0, $$020 = 0, $$03$ph = 0, $$03$ph3 = 0, $$05$ph = 0, $$1 = 0, $$110 = 0, $$114 = 0, $$116 = 0, $$116$ph = 0, $$116$ph2 = 0, $$18 = 0, $$217 = 0, $101 = 0, $105 = 0, $110 = 0, $115 = 0, $116 = 0, $117 = 0, $119 = 0, $120 = 0, $128 = 0, $129 = 0, $136 = 0, $150 = 0, $153 = 0, $156 = 0, $159 = 0, $161 = 0, $168 = 0, $18 = 0, $20 = 0, $21 = 0, $26 = 0, $28 = 0, $30 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $39 = 0, $40 = 0, $42 = 0, $43 = 0, $50 = 0, $54 = 0, $63 = 0, $69 = 0, $71 = 0, $73 = 0, $74 = 0, $77 = 0, $85 = 0, $93 = 0, $97 = 0, sp = 0, $$116$looptemp = 0;
 sp = STACKTOP;
 $$ = ($8 | 0) > 0 ? $8 : 0;
 $18 = HEAP32[$0 + 8 >> 2] | 0;
 $20 = ($$ | 0) > 7 ? 8 : 0;
 $21 = $$ - $20 | 0;
 if (($13 | 0) == 2) {
  $26 = HEAPU8[24826 + ($2 - $1) >> 0] | 0;
  if (($21 | 0) < ($26 | 0)) {
   $$110 = 0;
   $$114 = $21;
   $$18 = 0;
  } else {
   $28 = $21 - $26 | 0;
   $30 = ($28 | 0) > 7 ? 8 : 0;
   $$110 = $26;
   $$114 = $28 - $30 | 0;
   $$18 = $30;
  }
 } else {
  $$110 = 0;
  $$114 = $21;
  $$18 = 0;
 }
 $32 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($18 << 2) | 0) + 15 & -16) | 0;
 $33 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($18 << 2) | 0) + 15 & -16) | 0;
 $34 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($18 << 2) | 0) + 15 & -16) | 0;
 $35 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($18 << 2) | 0) + 15 & -16) | 0;
 $36 = $13 << 3;
 $37 = $0 + 32 | 0;
 $39 = $5 + -5 - $14 | 0;
 $40 = $14 + 3 | 0;
 $$015 = $1;
 while (1) {
  if (($$015 | 0) >= ($2 | 0)) break;
  $42 = HEAP32[$37 >> 2] | 0;
  $43 = $$015 + 1 | 0;
  $50 = (HEAP16[$42 + ($43 << 1) >> 1] | 0) - (HEAP16[$42 + ($$015 << 1) >> 1] | 0) | 0;
  $54 = $50 * 3 << $14 << 3 >> 4;
  HEAP32[$34 + ($$015 << 2) >> 2] = ($36 | 0) > ($54 | 0) ? $36 : $54;
  $63 = (Math_imul(Math_imul(Math_imul($50, $13) | 0, $39) | 0, $2 - $$015 + -1 | 0) | 0) << $40 >> 6;
  HEAP32[$35 + ($$015 << 2) >> 2] = $63 - (($50 << $14 | 0) == 1 ? $36 : 0);
  $$015 = $43;
 }
 $69 = HEAP32[$0 + 48 >> 2] | 0;
 $71 = $0 + 52 | 0;
 $$018 = $69 + -1 | 0;
 $$020 = 1;
 do {
  $73 = $$020 + $$018 >> 1;
  $74 = Math_imul($73, $18) | 0;
  $$03$ph = 0;
  $$05$ph = 0;
  $$116$ph = $2;
  L11 : while (1) {
   $$03$ph3 = $$03$ph;
   $$116$ph2 = $$116$ph;
   L13 : while (1) {
    $$116 = $$116$ph2;
    do {
     $$116$looptemp = $$116;
     $$116 = $$116 + -1 | 0;
     if (($$116$looptemp | 0) <= ($1 | 0)) break L11;
     $77 = HEAP32[$37 >> 2] | 0;
     $85 = Math_imul((HEAP16[$77 + ($$116$looptemp << 1) >> 1] | 0) - (HEAP16[$77 + ($$116 << 1) >> 1] | 0) | 0, $13) | 0;
     $93 = (Math_imul($85, HEAPU8[(HEAP32[$71 >> 2] | 0) + ($74 + $$116) >> 0] | 0) | 0) << $14 >> 2;
     if (($93 | 0) > 0) {
      $97 = $93 + (HEAP32[$35 + ($$116 << 2) >> 2] | 0) | 0;
      $$02 = ($97 | 0) > 0 ? $97 : 0;
     } else $$02 = $93;
     $101 = $$02 + (HEAP32[$3 + ($$116 << 2) >> 2] | 0) | 0;
     if (($101 | 0) >= (HEAP32[$34 + ($$116 << 2) >> 2] | 0) | $$05$ph) break L13;
    } while (($101 | 0) < ($36 | 0));
    $$03$ph3 = $$03$ph3 + $36 | 0;
    $$116$ph2 = $$116;
   }
   $105 = HEAP32[$4 + ($$116 << 2) >> 2] | 0;
   $$03$ph = $$03$ph3 + (($101 | 0) < ($105 | 0) ? $101 : $105) | 0;
   $$05$ph = 1;
   $$116$ph = $$116;
  }
  $110 = ($$03$ph3 | 0) > ($$114 | 0);
  $$020 = $110 ? $$020 : $73 + 1 | 0;
  $$018 = $110 ? $73 + -1 | 0 : $$018;
 } while (($$020 | 0) <= ($$018 | 0));
 $115 = Math_imul($$020 + -1 | 0, $18) | 0;
 $116 = Math_imul($$020, $18) | 0;
 $117 = ($$020 | 0) > 1;
 $$011 = $1;
 $$217 = $1;
 while (1) {
  if (($$217 | 0) >= ($2 | 0)) break;
  $119 = HEAP32[$37 >> 2] | 0;
  $120 = $$217 + 1 | 0;
  $128 = Math_imul((HEAP16[$119 + ($120 << 1) >> 1] | 0) - (HEAP16[$119 + ($$217 << 1) >> 1] | 0) | 0, $13) | 0;
  $129 = HEAP32[$71 >> 2] | 0;
  $136 = (Math_imul($128, HEAPU8[$129 + ($115 + $$217) >> 0] | 0) | 0) << $14 >> 2;
  if (($$020 | 0) < ($69 | 0)) $153 = (Math_imul($128, HEAPU8[$129 + ($116 + $$217) >> 0] | 0) | 0) << $14 >> 2; else $153 = HEAP32[$4 + ($$217 << 2) >> 2] | 0;
  if (($136 | 0) > 0) {
   $150 = $136 + (HEAP32[$35 + ($$217 << 2) >> 2] | 0) | 0;
   $$01 = ($150 | 0) > 0 ? $150 : 0;
  } else $$01 = $136;
  if (($153 | 0) > 0) {
   $156 = $153 + (HEAP32[$35 + ($$217 << 2) >> 2] | 0) | 0;
   $$0 = ($156 | 0) > 0 ? $156 : 0;
  } else $$0 = $153;
  $159 = HEAP32[$3 + ($$217 << 2) >> 2] | 0;
  $$1 = $$01 + ($117 ? $159 : 0) | 0;
  $161 = $$0 + $159 | 0;
  HEAP32[$32 + ($$217 << 2) >> 2] = $$1;
  HEAP32[$33 + ($$217 << 2) >> 2] = ($161 | 0) < ($$1 | 0) ? 0 : $161 - $$1 | 0;
  $$011 = ($159 | 0) > 0 ? $$217 : $$011;
  $$217 = $120;
 }
 $168 = _interp_bits2pulses($0, $1, $2, $$011, $32, $33, $34, $4, $$114, $9, $20, $6, $$110, $7, $$18, $10, $11, $12, $13, $14, $15, 0, 0, 0) | 0;
 STACKTOP = sp;
 return $168 | 0;
}

function _LPC_inverse_pred_gain_QA_c($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$01 = 0, $$01$in = 0, $$02 = 0, $$14 = 0, $$16 = 0, $$21 = 0, $$23 = 0, $100 = 0, $102 = 0, $103 = 0, $11 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $124 = 0, $127 = 0, $129 = 0, $131 = 0, $133 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $14 = 0, $149 = 0, $15 = 0, $151 = 0, $153 = 0, $156 = 0, $158 = 0, $16 = 0, $160 = 0, $18 = 0, $20 = 0, $25 = 0, $27 = 0, $28 = 0, $29 = 0, $31 = 0, $32 = 0, $34 = 0, $35 = 0, $38 = 0, $39 = 0, $4 = 0, $42 = 0, $44 = 0, $46 = 0, $48 = 0, $5 = 0, $50 = 0, $51 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $7 = 0, $72 = 0, $75 = 0, $77 = 0, $79 = 0, $81 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $9 = 0, $94 = 0, $96 = 0, $98 = 0, label = 0;
 $$01$in = $1;
 $14 = 1073741824;
 $15 = 0;
 L1 : while (1) {
  $$01 = $$01$in + -1 | 0;
  $4 = HEAP32[$0 + ($$01 << 2) >> 2] | 0;
  $5 = ($4 + 16773022 | 0) >>> 0 > 33546044;
  if (($$01$in | 0) <= 1) {
   label = 17;
   break;
  }
  if ($5) {
   label = 19;
   break;
  }
  $7 = 0 - ($4 << 7) | 0;
  $9 = (($7 | 0) < 0) << 31 >> 31;
  ___muldi3($7 | 0, $9 | 0, $7 | 0, $9 | 0) | 0;
  $11 = 1073741824 - tempRet0 | 0;
  $16 = ___muldi3($14 | 0, $15 | 0, $11 | 0, (($11 | 0) < 0) << 31 >> 31 | 0) | 0;
  $18 = _bitshift64Lshr($16 | 0, tempRet0 | 0, 30) | 0;
  $20 = $18 & -4;
  if (($20 | 0) < 107374) {
   label = 19;
   break;
  }
  $25 = 32 - (_silk_CLZ32_274(($11 | 0) > 0 ? $11 : 0 - $11 | 0) | 0) | 0;
  $27 = _silk_INVERSE32_varQ_275($11, $25 + 30 | 0) | 0;
  $28 = $$01$in >> 1;
  $29 = ($25 | 0) == 1;
  $31 = (($27 | 0) < 0) << 31 >> 31;
  $32 = $25 + -1 | 0;
  $$02 = 0;
  while (1) {
   if (($$02 | 0) >= ($28 | 0)) break;
   $34 = $0 + ($$02 << 2) | 0;
   $35 = HEAP32[$34 >> 2] | 0;
   $38 = $0 + ($$01 - $$02 + -1 << 2) | 0;
   $39 = HEAP32[$38 >> 2] | 0;
   $42 = ___muldi3($39 | 0, (($39 | 0) < 0) << 31 >> 31 | 0, $7 | 0, $9 | 0) | 0;
   $44 = _bitshift64Lshr($42 | 0, tempRet0 | 0, 30) | 0;
   $46 = _i64Add($44 | 0, tempRet0 | 0, 1, 0) | 0;
   $48 = _bitshift64Lshr($46 | 0, tempRet0 | 0, 1) | 0;
   $50 = $35 - $48 | 0;
   $51 = ($50 | 0) > -1;
   $$14 = (($51 ? $35 : $35 ^ -2147483648) & ($51 ? $48 ^ -2147483648 : $48) | 0) < 0 ? $50 >> 31 ^ -2147483648 : $50;
   $60 = ___muldi3($$14 | 0, (($$14 | 0) < 0) << 31 >> 31 | 0, $27 | 0, $31 | 0) | 0;
   $61 = tempRet0;
   if ($29) {
    $62 = _bitshift64Ashr($60 | 0, $61 | 0, 1) | 0;
    $63 = tempRet0;
    $$16 = (($51 ? $35 : $35 ^ -2147483648) & ($51 ? $48 ^ -2147483648 : $48) | 0) < 0 ? $50 >> 31 ^ -2147483648 : $50;
    $72 = ___muldi3($$16 | 0, (($$16 | 0) < 0) << 31 >> 31 | 0, $27 | 0, $31 | 0) | 0;
    $75 = _i64Add($62 | 0, $63 | 0, $72 & 1 | 0, 0) | 0;
    $83 = $75;
    $84 = tempRet0;
   } else {
    $77 = _bitshift64Ashr($60 | 0, $61 | 0, $32 | 0) | 0;
    $79 = _i64Add($77 | 0, tempRet0 | 0, 1, 0) | 0;
    $81 = _bitshift64Ashr($79 | 0, tempRet0 | 0, 1) | 0;
    $83 = $81;
    $84 = tempRet0;
   }
   $85 = _i64Add($83 | 0, $84 | 0, -2147483648, 0) | 0;
   $86 = tempRet0;
   if ($86 >>> 0 > 0 | ($86 | 0) == 0 & $85 >>> 0 > 4294967295) {
    label = 19;
    break L1;
   }
   HEAP32[$34 >> 2] = $83;
   $94 = ___muldi3($35 | 0, (($35 | 0) < 0) << 31 >> 31 | 0, $7 | 0, $9 | 0) | 0;
   $96 = _bitshift64Lshr($94 | 0, tempRet0 | 0, 30) | 0;
   $98 = _i64Add($96 | 0, tempRet0 | 0, 1, 0) | 0;
   $100 = _bitshift64Lshr($98 | 0, tempRet0 | 0, 1) | 0;
   $102 = $39 - $100 | 0;
   $103 = ($102 | 0) > -1;
   $$21 = (($103 ? $39 : $39 ^ -2147483648) & ($103 ? $100 ^ -2147483648 : $100) | 0) < 0 ? $102 >> 31 ^ -2147483648 : $102;
   $112 = ___muldi3($$21 | 0, (($$21 | 0) < 0) << 31 >> 31 | 0, $27 | 0, $31 | 0) | 0;
   $113 = tempRet0;
   if ($29) {
    $114 = _bitshift64Ashr($112 | 0, $113 | 0, 1) | 0;
    $115 = tempRet0;
    $$23 = (($103 ? $39 : $39 ^ -2147483648) & ($103 ? $100 ^ -2147483648 : $100) | 0) < 0 ? $102 >> 31 ^ -2147483648 : $102;
    $124 = ___muldi3($$23 | 0, (($$23 | 0) < 0) << 31 >> 31 | 0, $27 | 0, $31 | 0) | 0;
    $127 = _i64Add($114 | 0, $115 | 0, $124 & 1 | 0, 0) | 0;
    $135 = $127;
    $136 = tempRet0;
   } else {
    $129 = _bitshift64Ashr($112 | 0, $113 | 0, $32 | 0) | 0;
    $131 = _i64Add($129 | 0, tempRet0 | 0, 1, 0) | 0;
    $133 = _bitshift64Ashr($131 | 0, tempRet0 | 0, 1) | 0;
    $135 = $133;
    $136 = tempRet0;
   }
   $137 = _i64Add($135 | 0, $136 | 0, -2147483648, 0) | 0;
   $138 = tempRet0;
   if ($138 >>> 0 > 0 | ($138 | 0) == 0 & $137 >>> 0 > 4294967295) {
    label = 19;
    break L1;
   }
   HEAP32[$38 >> 2] = $135;
   $$02 = $$02 + 1 | 0;
  }
  $$01$in = $$01;
  $14 = $20;
  $15 = (($20 | 0) < 0) << 31 >> 31;
 }
 if ((label | 0) == 17) if ($5) return 0; else {
  $149 = 0 - (HEAP32[$0 >> 2] << 7) | 0;
  $151 = (($149 | 0) < 0) << 31 >> 31;
  ___muldi3($149 | 0, $151 | 0, $149 | 0, $151 | 0) | 0;
  $153 = 1073741824 - tempRet0 | 0;
  $156 = ___muldi3($14 | 0, $15 | 0, $153 | 0, (($153 | 0) < 0) << 31 >> 31 | 0) | 0;
  $158 = _bitshift64Lshr($156 | 0, tempRet0 | 0, 30) | 0;
  $160 = $158 & -4;
  return (($160 | 0) < 107374 ? 0 : $160) | 0;
 } else if ((label | 0) == 19) return 0;
 return 0;
}

function _quant_partition($0, $1, $2, $3, $4, $5, $6, $7, $8) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 $7 = +$7;
 $8 = $8 | 0;
 var $$0 = 0, $$04 = 0, $$05 = 0, $$1 = 0, $$13 = 0, $$18 = 0, $$2 = 0, $$6 = 0, $10 = 0, $108 = 0, $11 = 0, $112 = 0, $115 = 0, $12 = 0, $123 = 0, $124 = 0, $125 = 0, $130 = 0, $131 = 0, $132 = 0, $135 = 0, $14 = 0, $145 = 0, $146 = 0, $150 = 0, $153 = 0, $16 = 0, $160 = 0, $18 = 0, $20 = 0, $22 = 0, $24 = 0, $27 = 0, $33 = 0, $43 = 0, $44 = 0, $45 = 0, $51 = 0, $57 = 0, $59 = 0, $61 = 0, $63 = 0.0, $65 = 0.0, $76 = 0, $78 = 0, $80 = 0, $81 = 0, $83 = 0, $84 = 0, $85 = 0, $87 = 0, $9 = 0, $92 = 0, $93 = 0, $96 = 0, $storemerge = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 $9 = sp + 28 | 0;
 $10 = sp + 24 | 0;
 $11 = sp;
 HEAP32[$9 >> 2] = $3;
 HEAP32[$10 >> 2] = $8;
 $12 = HEAP32[$0 >> 2] | 0;
 $14 = HEAP32[$0 + 8 >> 2] | 0;
 $16 = HEAP32[$0 + 12 >> 2] | 0;
 $18 = HEAP32[$0 + 20 >> 2] | 0;
 $20 = HEAP32[$0 + 28 >> 2] | 0;
 $22 = HEAP32[$14 + 100 >> 2] | 0;
 $24 = HEAP32[$14 + 96 >> 2] | 0;
 $27 = HEAP32[$14 + 8 >> 2] | 0;
 $33 = $22 + (HEAP16[$24 + ((Math_imul($6 + 1 | 0, $27) | 0) + $16 << 1) >> 1] | 0) | 0;
 if (($6 | 0) != -1) if (($2 | 0) > 2 ? ((HEAPU8[$33 + (HEAPU8[$33 >> 0] | 0) >> 0] | 0) + 12 | 0) < ($3 | 0) : 0) {
  $43 = $2 >> 1;
  $44 = $1 + ($43 << 2) | 0;
  $45 = $6 + -1 | 0;
  if (($4 | 0) == 1) HEAP32[$10 >> 2] = $8 & 1 | $8 << 1;
  $51 = $4 + 1 >> 1;
  _compute_theta($0, $11, $1, $44, $43, $9, $51, $4, $45, 0, $10);
  $57 = HEAP32[$11 + 12 >> 2] | 0;
  $59 = HEAP32[$11 + 16 >> 2] | 0;
  $61 = HEAP32[$11 + 20 >> 2] | 0;
  $63 = +(HEAP32[$11 + 4 >> 2] | 0) * .000030517578125;
  $65 = +(HEAP32[$11 + 8 >> 2] | 0) * .000030517578125;
  do if (($4 | 0) < 2 | ($59 & 16383 | 0) == 0) $$13 = $57; else if (($59 | 0) > 8192) {
   $$13 = $57 - ($57 >> 5 - $6) | 0;
   break;
  } else {
   $76 = $57 + ($43 << 3 >> 6 - $6) | 0;
   $$13 = ($76 | 0) < 0 ? $76 : 0;
   break;
  } while (0);
  $78 = HEAP32[$9 >> 2] | 0;
  $80 = ($78 - $$13 | 0) / 2 | 0;
  $81 = ($78 | 0) < ($80 | 0);
  $83 = (($81 ? $78 : $80) | 0) < 0 ? 0 : $81 ? $78 : $80;
  $84 = $78 - $83 | 0;
  $85 = $0 + 32 | 0;
  $87 = (HEAP32[$85 >> 2] | 0) - $61 | 0;
  HEAP32[$85 >> 2] = $87;
  $$18 = ($5 | 0) == 0 ? 0 : $5 + ($43 << 2) | 0;
  if (($83 | 0) < ($84 | 0)) {
   $108 = HEAP32[$10 >> 2] | 0;
   $112 = (_quant_partition($0, $44, $43, $84, $51, $$18, $45, $65 * $7, $108 >> $51) | 0) << ($4 >> 1);
   $115 = $84 + ((HEAP32[$85 >> 2] | 0) - $87) | 0;
   $$6 = $112 | (_quant_partition($0, $1, $43, $83 + (($115 | 0) < 25 | ($59 | 0) == 16384 ? 0 : $115 + -24 | 0) | 0, $51, $5, $45, $63 * $7, $108) | 0);
   STACKTOP = sp;
   return $$6 | 0;
  } else {
   $92 = HEAP32[$10 >> 2] | 0;
   $93 = _quant_partition($0, $1, $43, $83, $51, $5, $45, $63 * $7, $92) | 0;
   $96 = $83 + ((HEAP32[$85 >> 2] | 0) - $87) | 0;
   $$6 = $93 | (_quant_partition($0, $44, $43, $84 + (($96 | 0) < 25 | ($59 | 0) == 0 ? 0 : $96 + -24 | 0) | 0, $51, $$18, $45, $65 * $7, $92 >> $51) | 0) << ($4 >> 1);
   STACKTOP = sp;
   return $$6 | 0;
  }
 }
 $123 = _bits2pulses($27, $24, $22, $16, $6, $3) | 0;
 $124 = _pulses2bits($14, $16, $6, $123) | 0;
 $125 = $0 + 32 | 0;
 $$04 = $123;
 $$05 = $124;
 $storemerge = (HEAP32[$125 >> 2] | 0) - $124 | 0;
 while (1) {
  HEAP32[$125 >> 2] = $storemerge;
  if (!(($storemerge | 0) < 0 & ($$04 | 0) > 0)) break;
  $130 = $storemerge + $$05 | 0;
  HEAP32[$125 >> 2] = $130;
  $131 = $$04 + -1 | 0;
  $132 = _pulses2bits($14, $16, $6, $131) | 0;
  $$04 = $131;
  $$05 = $132;
  $storemerge = $130 - $132 | 0;
 }
 if ($$04 | 0) {
  $135 = _get_pulses($$04) | 0;
  if (!$12) {
   $$6 = _alg_unquant($1, $2, $135, $18, $4, $20, $7) | 0;
   STACKTOP = sp;
   return $$6 | 0;
  } else {
   $$6 = _alg_quant($1, $2, $135, $18, $4, $20, $7, HEAP32[$0 + 4 >> 2] | 0) | 0;
   STACKTOP = sp;
   return $$6 | 0;
  }
 }
 if (!(HEAP32[$0 + 4 >> 2] | 0)) {
  $$6 = 0;
  STACKTOP = sp;
  return $$6 | 0;
 }
 $145 = (1 << $4) + -1 | 0;
 $146 = $145 & $8;
 HEAP32[$10 >> 2] = $146;
 if (!$146) {
  _memset($1 | 0, 0, $2 << 2 | 0) | 0;
  $$6 = 0;
  STACKTOP = sp;
  return $$6 | 0;
 }
 $150 = $0 + 40 | 0;
 L38 : do if (!$5) {
  $$0 = 0;
  while (1) {
   if (($$0 | 0) >= ($2 | 0)) {
    $$2 = $145;
    break L38;
   }
   $153 = _celt_lcg_rand(HEAP32[$150 >> 2] | 0) | 0;
   HEAP32[$150 >> 2] = $153;
   HEAPF32[$1 + ($$0 << 2) >> 2] = +($153 >> 20 | 0);
   $$0 = $$0 + 1 | 0;
  }
 } else {
  $$1 = 0;
  while (1) {
   if (($$1 | 0) >= ($2 | 0)) {
    $$2 = $146;
    break L38;
   }
   $160 = _celt_lcg_rand(HEAP32[$150 >> 2] | 0) | 0;
   HEAP32[$150 >> 2] = $160;
   HEAPF32[$1 + ($$1 << 2) >> 2] = +HEAPF32[$5 + ($$1 << 2) >> 2] + (($160 & 32768 | 0) == 0 ? -.00390625 : .00390625);
   $$1 = $$1 + 1 | 0;
  }
 } while (0);
 _renormalise_vector($1, $2, $7);
 $$6 = $$2;
 STACKTOP = sp;
 return $$6 | 0;
}

function _opus_custom_decoder_ctl($0, $1, $varargs) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $varargs = $varargs | 0;
 var $$01 = 0, $103 = 0, $104 = 0, $112 = 0, $113 = 0, $120 = 0, $121 = 0, $130 = 0, $131 = 0, $139 = 0, $140 = 0, $2 = 0, $21 = 0, $22 = 0, $34 = 0, $35 = 0, $43 = 0, $44 = 0, $46 = 0, $53 = 0, $54 = 0, $65 = 0, $69 = 0, $70 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $8 = 0, $80 = 0, $9 = 0, $93 = 0, $94 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 $2 = sp;
 HEAP32[$2 >> 2] = $varargs;
 do switch ($1 | 0) {
 case 10010:
  {
   $8 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $9 = HEAP32[$8 >> 2] | 0;
   HEAP32[$2 >> 2] = $8 + 4;
   if (($9 | 0) < 0) label = 30; else if (($9 | 0) < (HEAP32[(HEAP32[$0 >> 2] | 0) + 8 >> 2] | 0)) {
    HEAP32[$0 + 20 >> 2] = $9;
    label = 29;
   } else label = 30;
   break;
  }
 case 10012:
  {
   $21 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $22 = HEAP32[$21 >> 2] | 0;
   HEAP32[$2 >> 2] = $21 + 4;
   if (($22 | 0) < 1) label = 30; else if (($22 | 0) > (HEAP32[(HEAP32[$0 >> 2] | 0) + 8 >> 2] | 0)) label = 30; else {
    HEAP32[$0 + 24 >> 2] = $22;
    label = 29;
   }
   break;
  }
 case 10008:
  {
   $34 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $35 = HEAP32[$34 >> 2] | 0;
   HEAP32[$2 >> 2] = $34 + 4;
   if (($35 + -1 | 0) >>> 0 > 1) label = 30; else {
    HEAP32[$0 + 12 >> 2] = $35;
    label = 29;
   }
   break;
  }
 case 10007:
  {
   $43 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $44 = HEAP32[$43 >> 2] | 0;
   HEAP32[$2 >> 2] = $43 + 4;
   if (!$44) label = 30; else {
    $46 = $0 + 44 | 0;
    HEAP32[$44 >> 2] = HEAP32[$46 >> 2];
    HEAP32[$46 >> 2] = 0;
    label = 29;
   }
   break;
  }
 case 4027:
  {
   $53 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $54 = HEAP32[$53 >> 2] | 0;
   HEAP32[$2 >> 2] = $53 + 4;
   if (!$54) label = 30; else {
    HEAP32[$54 >> 2] = (HEAP32[$0 + 4 >> 2] | 0) / (HEAP32[$0 + 16 >> 2] | 0) | 0;
    label = 29;
   }
   break;
  }
 case 4028:
  {
   $65 = HEAP32[$0 + 8 >> 2] | 0;
   $69 = $0 + 92 + ((Math_imul((HEAP32[$0 + 4 >> 2] | 0) + 2048 | 0, $65) | 0) << 2) + ($65 * 24 << 2) | 0;
   $70 = HEAP32[$0 >> 2] | 0;
   $72 = HEAP32[$70 + 8 >> 2] | 0;
   $73 = $72 << 1;
   $74 = $69 + ($73 << 2) | 0;
   $75 = $74 + ($73 << 2) | 0;
   _memset($0 + 40 | 0, 0, (_opus_custom_decoder_get_size(HEAP32[$70 + 4 >> 2] | 0, $72, $65) | 0) + -40 | 0) | 0;
   $$01 = 0;
   $80 = $70;
   while (1) {
    if (($$01 | 0) >= (HEAP32[$80 + 8 >> 2] << 1 | 0)) break;
    HEAPF32[$75 + ($$01 << 2) >> 2] = -28.0;
    HEAPF32[$74 + ($$01 << 2) >> 2] = -28.0;
    $$01 = $$01 + 1 | 0;
    $80 = HEAP32[$0 >> 2] | 0;
   }
   HEAP32[$0 + 56 >> 2] = 1;
   label = 29;
   break;
  }
 case 4033:
  {
   $93 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $94 = HEAP32[$93 >> 2] | 0;
   HEAP32[$2 >> 2] = $93 + 4;
   if (!$94) label = 30; else {
    HEAP32[$94 >> 2] = HEAP32[$0 + 60 >> 2];
    label = 29;
   }
   break;
  }
 case 10015:
  {
   $103 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $104 = HEAP32[$103 >> 2] | 0;
   HEAP32[$2 >> 2] = $103 + 4;
   if (!$104) label = 30; else {
    HEAP32[$104 >> 2] = HEAP32[$0 >> 2];
    label = 29;
   }
   break;
  }
 case 10016:
  {
   $112 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $113 = HEAP32[$112 >> 2] | 0;
   HEAP32[$2 >> 2] = $112 + 4;
   HEAP32[$0 + 28 >> 2] = $113;
   label = 29;
   break;
  }
 case 4031:
  {
   $120 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $121 = HEAP32[$120 >> 2] | 0;
   HEAP32[$2 >> 2] = $120 + 4;
   if (!$121) label = 30; else {
    HEAP32[$121 >> 2] = HEAP32[$0 + 40 >> 2];
    label = 29;
   }
   break;
  }
 case 4046:
  {
   $130 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $131 = HEAP32[$130 >> 2] | 0;
   HEAP32[$2 >> 2] = $130 + 4;
   if ($131 >>> 0 > 1) label = 30; else {
    HEAP32[$0 + 32 >> 2] = $131;
    label = 29;
   }
   break;
  }
 case 4047:
  {
   $139 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $140 = HEAP32[$139 >> 2] | 0;
   HEAP32[$2 >> 2] = $139 + 4;
   if (!$140) label = 30; else {
    HEAP32[$140 >> 2] = HEAP32[$0 + 32 >> 2];
    label = 29;
   }
   break;
  }
 default:
  {
   STACKTOP = sp;
   return;
  }
 } while (0);
 if ((label | 0) == 29) {
  STACKTOP = sp;
  return;
 } else if ((label | 0) == 30) {
  STACKTOP = sp;
  return;
 }
}

function _quant_band_stereo($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 $7 = $7 | 0;
 $8 = $8 | 0;
 $9 = $9 | 0;
 $10 = $10 | 0;
 var $$ = 0, $$0 = 0, $$01 = 0, $$03 = 0, $$1 = 0, $$17 = 0, $$8 = 0, $100 = 0, $101 = 0, $104 = 0, $11 = 0, $113 = 0, $116 = 0, $12 = 0, $128 = 0, $13 = 0, $14 = 0, $16 = 0, $18 = 0, $24 = 0, $26 = 0, $28 = 0.0, $30 = 0.0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $36 = 0, $51 = 0, $54 = 0, $55 = 0, $70 = 0, $74 = 0.0, $75 = 0, $78 = 0.0, $82 = 0.0, $89 = 0, $91 = 0, $92 = 0, $94 = 0, $95 = 0, $96 = 0, $98 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 $11 = sp + 28 | 0;
 $12 = sp + 24 | 0;
 $13 = sp;
 HEAP32[$11 >> 2] = $4;
 HEAP32[$12 >> 2] = $10;
 $14 = HEAP32[$0 >> 2] | 0;
 $16 = HEAP32[$0 + 28 >> 2] | 0;
 if (($3 | 0) == 1) {
  _quant_band_n1($0, $1, $2, $4, $8);
  $$0 = 1;
  STACKTOP = sp;
  return $$0 | 0;
 }
 _compute_theta($0, $13, $1, $2, $3, $11, $5, $5, $7, 1, $12);
 $18 = HEAP32[$13 >> 2] | 0;
 $24 = HEAP32[$13 + 16 >> 2] | 0;
 $26 = HEAP32[$13 + 20 >> 2] | 0;
 $28 = +(HEAP32[$13 + 4 >> 2] | 0) * .000030517578125;
 $30 = +(HEAP32[$13 + 8 >> 2] | 0) * .000030517578125;
 $31 = ($3 | 0) == 2;
 do if ($31) {
  $32 = HEAP32[$11 >> 2] | 0;
  if (($24 | 0) < 16384) switch ($24 | 0) {
  case 0:
   {
    $$03 = 0;
    break;
   }
  default:
   label = 5;
  } else switch ($24 | 0) {
  case 16384:
   {
    $$03 = 0;
    break;
   }
  default:
   label = 5;
  }
  if ((label | 0) == 5) $$03 = 8;
  $33 = $32 - $$03 | 0;
  $34 = ($24 | 0) > 8192;
  $36 = $0 + 32 | 0;
  HEAP32[$36 >> 2] = (HEAP32[$36 >> 2] | 0) - ($26 + $$03);
  $$ = $34 ? $2 : $1;
  $$8 = $34 ? $1 : $2;
  do if (!$$03) $$1 = 0; else if (!$14) {
   $$1 = _ec_dec_bits($16, 1) | 0;
   break;
  } else {
   $51 = +HEAPF32[$$ >> 2] * +HEAPF32[$$8 + 4 >> 2] - +HEAPF32[$$ + 4 >> 2] * +HEAPF32[$$8 >> 2] < 0.0 & 1;
   _ec_enc_bits($16, $51, 1);
   $$1 = $51;
   break;
  } while (0);
  $54 = 1 - ($$1 << 1) | 0;
  $55 = _quant_band($0, $$, 2, $33, $5, $6, $7, $8, 1.0, $9, $10) | 0;
  HEAPF32[$$8 >> 2] = +(0 - $54 | 0) * +HEAPF32[$$ + 4 >> 2];
  HEAPF32[$$8 + 4 >> 2] = +($54 | 0) * +HEAPF32[$$ >> 2];
  if (!(HEAP32[$0 + 4 >> 2] | 0)) $$17 = $55; else {
   HEAPF32[$1 >> 2] = $28 * +HEAPF32[$1 >> 2];
   $70 = $1 + 4 | 0;
   HEAPF32[$70 >> 2] = $28 * +HEAPF32[$70 >> 2];
   $74 = $30 * +HEAPF32[$2 >> 2];
   HEAPF32[$2 >> 2] = $74;
   $75 = $2 + 4 | 0;
   HEAPF32[$75 >> 2] = $30 * +HEAPF32[$75 >> 2];
   $78 = +HEAPF32[$1 >> 2];
   HEAPF32[$1 >> 2] = $78 - $74;
   HEAPF32[$2 >> 2] = $78 + +HEAPF32[$2 >> 2];
   $82 = +HEAPF32[$70 >> 2];
   HEAPF32[$70 >> 2] = $82 - +HEAPF32[$75 >> 2];
   HEAPF32[$75 >> 2] = $82 + +HEAPF32[$75 >> 2];
   $$17 = $55;
  }
 } else {
  $89 = HEAP32[$11 >> 2] | 0;
  $91 = ($89 - (HEAP32[$13 + 12 >> 2] | 0) | 0) / 2 | 0;
  $92 = ($89 | 0) < ($91 | 0);
  $94 = (($92 ? $89 : $91) | 0) < 0 ? 0 : $92 ? $89 : $91;
  $95 = $89 - $94 | 0;
  $96 = $0 + 32 | 0;
  $98 = (HEAP32[$96 >> 2] | 0) - $26 | 0;
  HEAP32[$96 >> 2] = $98;
  $100 = HEAP32[$12 >> 2] | 0;
  if (($94 | 0) < ($95 | 0)) {
   $113 = _quant_band($0, $2, $3, $95, $5, 0, $7, 0, $30, 0, $100 >> $5) | 0;
   $116 = $95 + ((HEAP32[$96 >> 2] | 0) - $98) | 0;
   $$17 = $113 | (_quant_band($0, $1, $3, $94 + (($116 | 0) < 25 | ($24 | 0) == 16384 ? 0 : $116 + -24 | 0) | 0, $5, $6, $7, $8, 1.0, $9, $100) | 0);
   break;
  } else {
   $101 = _quant_band($0, $1, $3, $94, $5, $6, $7, $8, 1.0, $9, $100) | 0;
   $104 = $94 + ((HEAP32[$96 >> 2] | 0) - $98) | 0;
   $$17 = $101 | (_quant_band($0, $2, $3, $95 + (($104 | 0) < 25 | ($24 | 0) == 0 ? 0 : $104 + -24 | 0) | 0, $5, 0, $7, 0, $30, 0, $100 >> $5) | 0);
   break;
  }
 } while (0);
 if (!(HEAP32[$0 + 4 >> 2] | 0)) {
  $$0 = $$17;
  STACKTOP = sp;
  return $$0 | 0;
 }
 if (!$31) _stereo_merge($1, $2, $28, $3);
 if (!$18) {
  $$0 = $$17;
  STACKTOP = sp;
  return $$0 | 0;
 } else $$01 = 0;
 while (1) {
  if (($$01 | 0) >= ($3 | 0)) {
   $$0 = $$17;
   break;
  }
  $128 = $2 + ($$01 << 2) | 0;
  HEAPF32[$128 >> 2] = -+HEAPF32[$128 >> 2];
  $$01 = $$01 + 1 | 0;
 }
 STACKTOP = sp;
 return $$0 | 0;
}

function _silk_decode_indices($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $$01 = 0, $$03 = 0, $$04 = 0, $$15 = 0, $$2 = 0, $$pre$phi10Z2D = 0, $$sink = 0, $$sink11 = 0, $104 = 0, $107 = 0, $111 = 0, $112 = 0, $120 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $16 = 0, $20 = 0, $29 = 0, $30 = 0, $35 = 0, $42 = 0, $43 = 0, $5 = 0, $53 = 0, $58 = 0, $6 = 0, $69 = 0, $76 = 0, $88 = 0, $91 = 0, $95 = 0, $98 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 $5 = sp;
 $6 = sp + 32 | 0;
 if (!$3) if (!(HEAP32[$0 + 2404 + ($2 << 2) >> 2] | 0)) $$01 = _ec_dec_icdf($1, 27012, 8) | 0; else label = 3; else label = 3;
 if ((label | 0) == 3) $$01 = (_ec_dec_icdf($1, 27008, 8) | 0) + 2 | 0;
 $14 = $$01 >>> 1;
 $16 = $0 + 2765 | 0;
 HEAP8[$16 >> 0] = $14;
 HEAP8[$0 + 2766 >> 0] = $$01 & 1;
 $20 = ($4 | 0) == 2;
 if ($20) HEAP8[$0 + 2736 >> 0] = _ec_dec_icdf($1, 24874, 8) | 0; else {
  $29 = $0 + 2736 | 0;
  HEAP8[$29 >> 0] = (_ec_dec_icdf($1, 24850 + ($14 << 24 >> 24 << 3) | 0, 8) | 0) << 3;
  $30 = _ec_dec_icdf($1, 27037, 8) | 0;
  HEAP8[$29 >> 0] = (HEAPU8[$29 >> 0] | 0) + $30;
 }
 $35 = $0 + 2324 | 0;
 $$04 = 1;
 while (1) {
  if (($$04 | 0) >= (HEAP32[$35 >> 2] | 0)) break;
  HEAP8[$0 + 2736 + $$04 >> 0] = _ec_dec_icdf($1, 24874, 8) | 0;
  $$04 = $$04 + 1 | 0;
 }
 $42 = $0 + 2732 | 0;
 $43 = HEAP32[$42 >> 2] | 0;
 $53 = _ec_dec_icdf($1, (HEAP32[$43 + 16 >> 2] | 0) + (Math_imul(HEAP8[$16 >> 0] >> 1, HEAP16[$43 >> 1] | 0) | 0) | 0, 8) | 0;
 HEAP8[$0 + 2744 >> 0] = $53;
 _silk_NLSF_unpack($5, $6, HEAP32[$42 >> 2] | 0, $53 << 24 >> 24);
 $$15 = 0;
 while (1) {
  $58 = HEAP32[$42 >> 2] | 0;
  if (($$15 | 0) >= (HEAP16[$58 + 2 >> 1] | 0)) break;
  $69 = _ec_dec_icdf($1, (HEAP32[$58 + 28 >> 2] | 0) + (HEAP16[$5 + ($$15 << 1) >> 1] | 0) | 0, 8) | 0;
  switch ($69 | 0) {
  case 0:
   {
    $$2 = 0 - (_ec_dec_icdf($1, 27045, 8) | 0) | 0;
    break;
   }
  case 8:
   {
    $$2 = (_ec_dec_icdf($1, 27045, 8) | 0) + 8 | 0;
    break;
   }
  default:
   $$2 = $69;
  }
  $76 = $$15 + 1 | 0;
  HEAP8[$0 + 2744 + $76 >> 0] = $$2 + 252;
  $$15 = $76;
 }
 if ((HEAP32[$35 >> 2] | 0) == 4) $$sink = (_ec_dec_icdf($1, 27014, 8) | 0) & 255; else $$sink = 4;
 HEAP8[$0 + 2767 >> 0] = $$sink;
 if ((HEAP8[$16 >> 0] | 0) != 2) {
  $135 = HEAP8[$16 >> 0] | 0;
  $136 = $135 << 24 >> 24;
  $137 = $0 + 2396 | 0;
  HEAP32[$137 >> 2] = $136;
  $138 = _ec_dec_icdf($1, 27022, 8) | 0;
  $139 = $138 & 255;
  $140 = $0 + 2770 | 0;
  HEAP8[$140 >> 0] = $139;
  STACKTOP = sp;
  return;
 }
 if ($20) if ((HEAP32[$0 + 2396 >> 2] | 0) == 2) {
  $88 = _ec_dec_icdf($1, 27084, 8) | 0;
  if (($88 << 16 | 0) > 0) {
   $91 = $0 + 2400 | 0;
   $95 = (HEAPU16[$91 >> 1] | 0) + ($88 + 65527) & 65535;
   HEAP16[$0 + 2762 >> 1] = $95;
   $$pre$phi10Z2D = $91;
   $112 = $95;
  } else label = 24;
 } else label = 24; else label = 24;
 if ((label | 0) == 24) {
  $98 = (_ec_dec_icdf($1, 27052, 8) | 0) << 16 >> 16;
  $104 = $0 + 2762 | 0;
  HEAP16[$104 >> 1] = Math_imul($98, HEAP32[$0 + 2316 >> 2] >> 1) | 0;
  $107 = _ec_dec_icdf($1, HEAP32[$0 + 2380 >> 2] | 0, 8) | 0;
  $111 = (HEAPU16[$104 >> 1] | 0) + $107 & 65535;
  HEAP16[$104 >> 1] = $111;
  $$pre$phi10Z2D = $0 + 2400 | 0;
  $112 = $111;
 }
 HEAP16[$$pre$phi10Z2D >> 1] = $112;
 HEAP8[$0 + 2764 >> 0] = _ec_dec_icdf($1, HEAP32[$0 + 2384 >> 2] | 0, 8) | 0;
 $120 = $0 + 2768 | 0;
 HEAP8[$120 >> 0] = _ec_dec_icdf($1, 24915, 8) | 0;
 $$03 = 0;
 while (1) {
  if (($$03 | 0) >= (HEAP32[$35 >> 2] | 0)) break;
  HEAP8[$0 + 2740 + $$03 >> 0] = _ec_dec_icdf($1, HEAP32[18760 + (HEAP8[$120 >> 0] << 2) >> 2] | 0, 8) | 0;
  $$03 = $$03 + 1 | 0;
 }
 if (!$4) $$sink11 = (_ec_dec_icdf($1, 27005, 8) | 0) & 255; else $$sink11 = 0;
 HEAP8[$0 + 2769 >> 0] = $$sink11;
 $135 = HEAP8[$16 >> 0] | 0;
 $136 = $135 << 24 >> 24;
 $137 = $0 + 2396 | 0;
 HEAP32[$137 >> 2] = $136;
 $138 = _ec_dec_icdf($1, 27022, 8) | 0;
 $139 = $138 & 255;
 $140 = $0 + 2770 | 0;
 HEAP8[$140 >> 0] = $139;
 STACKTOP = sp;
 return;
}

function _opus_decode_native($0, $1, $2, $3, $4, $5, $6) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $$03 = 0, $$04 = 0, $$pre = 0, $$val = 0, $11 = 0, $21 = 0, $26 = 0, $32 = 0, $33 = 0, $36 = 0, $37 = 0, $38 = 0, $41 = 0, $44 = 0, $48 = 0, $49 = 0, $51 = 0, $62 = 0, $7 = 0, $70 = 0, $72 = 0, $79 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 $7 = sp;
 $8 = sp + 104 | 0;
 $9 = sp + 8 | 0;
 if ($5 >>> 0 > 1) {
  $$0 = -1;
  STACKTOP = sp;
  return $$0 | 0;
 }
 $11 = ($5 | 0) == 0;
 if (($2 | 0) == 0 | $11 ^ 1 | ($1 | 0) == 0) {
  if (($4 | 0) % ((HEAP32[$0 + 12 >> 2] | 0) / 400 | 0 | 0) | 0 | 0) {
   $$0 = -1;
   STACKTOP = sp;
   return $$0 | 0;
  }
  if (($2 | 0) == 0 | ($1 | 0) == 0) {
   $21 = $0 + 8 | 0;
   $$02 = 0;
   do {
    $26 = _opus_decode_frame($0, 0, 0, $3 + ((Math_imul($$02, HEAP32[$21 >> 2] | 0) | 0) << 2) | 0, $4 - $$02 | 0, 0) | 0;
    if (($26 | 0) < 0) {
     $$0 = $26;
     label = 28;
     break;
    }
    $$02 = $$02 + $26 | 0;
   } while (($$02 | 0) < ($4 | 0));
   if ((label | 0) == 28) {
    STACKTOP = sp;
    return $$0 | 0;
   }
   HEAP32[$0 + 72 >> 2] = $$02;
   $$0 = $$02;
   STACKTOP = sp;
   return $$0 | 0;
  }
 }
 if (($2 | 0) < 0) {
  $$0 = -1;
  STACKTOP = sp;
  return $$0 | 0;
 }
 $$val = HEAP8[$1 >> 0] | 0;
 $32 = _opus_packet_get_mode($$val) | 0;
 $33 = _opus_packet_get_bandwidth($$val) | 0;
 $36 = _opus_packet_get_samples_per_frame($$val, HEAP32[$0 + 12 >> 2] | 0) | 0;
 $37 = _opus_packet_get_nb_channels($$val) | 0;
 $38 = _opus_packet_parse_impl($1, $2, 0, $8, $9, $7, 0) | 0;
 if (($38 | 0) < 0) {
  $$0 = $38;
  STACKTOP = sp;
  return $$0 | 0;
 }
 $41 = $1 + (HEAP32[$7 >> 2] | 0) | 0;
 if ($11) {
  if ((Math_imul($38, $36) | 0) > ($4 | 0)) {
   $$0 = -2;
   STACKTOP = sp;
   return $$0 | 0;
  }
  HEAP32[$0 + 56 >> 2] = $32;
  HEAP32[$0 + 52 >> 2] = $33;
  HEAP32[$0 + 64 >> 2] = $36;
  HEAP32[$0 + 48 >> 2] = $37;
  $70 = $0 + 8 | 0;
  $$01 = $41;
  $$03 = 0;
  $$04 = 0;
  while (1) {
   if (($$04 | 0) >= ($38 | 0)) break;
   $72 = $9 + ($$04 << 1) | 0;
   $79 = _opus_decode_frame($0, $$01, HEAP16[$72 >> 1] | 0, $3 + ((Math_imul($$03, HEAP32[$70 >> 2] | 0) | 0) << 2) | 0, $4 - $$03 | 0, 0) | 0;
   if (($79 | 0) < 0) {
    $$0 = $79;
    label = 28;
    break;
   }
   $$01 = $$01 + (HEAP16[$72 >> 1] | 0) | 0;
   $$03 = $$03 + $79 | 0;
   $$04 = $$04 + 1 | 0;
  }
  if ((label | 0) == 28) {
   STACKTOP = sp;
   return $$0 | 0;
  }
  HEAP32[$0 + 72 >> 2] = $$03;
  if (!$6) {
   HEAPF32[$0 + 80 >> 2] = 0.0;
   HEAPF32[$0 + 76 >> 2] = 0.0;
   $$0 = $$03;
   STACKTOP = sp;
   return $$0 | 0;
  } else {
   _opus_pcm_soft_clip($3, $$03, HEAP32[$70 >> 2] | 0, $0 + 76 | 0);
   $$0 = $$03;
   STACKTOP = sp;
   return $$0 | 0;
  }
 } else {
  if (!(($36 | 0) > ($4 | 0) | ($32 | 0) == 1002)) {
   $44 = $0 + 56 | 0;
   if ((HEAP32[$44 >> 2] | 0) != 1002) {
    $48 = $0 + 72 | 0;
    $49 = HEAP32[$48 >> 2] | 0;
    $$pre = $4 - $36 | 0;
    if (($36 | 0) != ($4 | 0)) {
     $51 = _opus_decode_native($0, 0, 0, $3, $$pre, 0, $6) | 0;
     if (($51 | 0) < 0) {
      HEAP32[$48 >> 2] = $49;
      $$0 = $51;
      STACKTOP = sp;
      return $$0 | 0;
     }
    }
    HEAP32[$44 >> 2] = $32;
    HEAP32[$0 + 52 >> 2] = $33;
    HEAP32[$0 + 64 >> 2] = $36;
    HEAP32[$0 + 48 >> 2] = $37;
    $62 = _opus_decode_frame($0, $41, HEAP16[$9 >> 1] | 0, $3 + ((Math_imul(HEAP32[$0 + 8 >> 2] | 0, $$pre) | 0) << 2) | 0, $36, 1) | 0;
    if (($62 | 0) < 0) {
     $$0 = $62;
     STACKTOP = sp;
     return $$0 | 0;
    }
    HEAP32[$48 >> 2] = $4;
    $$0 = $4;
    STACKTOP = sp;
    return $$0 | 0;
   }
  }
  $$0 = _opus_decode_native($0, 0, 0, $3, $4, 0, $6) | 0;
  STACKTOP = sp;
  return $$0 | 0;
 }
 return 0;
}

function _kf_bfly4($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $$03 = 0, $$04 = 0, $$05 = 0, $$1 = 0, $$16 = 0, $10 = 0.0, $100 = 0.0, $11 = 0.0, $12 = 0, $13 = 0.0, $14 = 0, $15 = 0.0, $16 = 0.0, $17 = 0.0, $18 = 0.0, $19 = 0, $20 = 0.0, $21 = 0, $22 = 0.0, $23 = 0.0, $24 = 0, $25 = 0.0, $26 = 0, $27 = 0.0, $28 = 0.0, $33 = 0.0, $34 = 0.0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $48 = 0, $49 = 0, $51 = 0, $52 = 0.0, $53 = 0.0, $55 = 0, $56 = 0.0, $58 = 0.0, $60 = 0.0, $63 = 0.0, $64 = 0, $65 = 0.0, $66 = 0.0, $68 = 0, $69 = 0.0, $71 = 0.0, $73 = 0.0, $76 = 0.0, $77 = 0, $78 = 0.0, $79 = 0.0, $8 = 0.0, $81 = 0, $82 = 0.0, $84 = 0.0, $86 = 0.0, $89 = 0.0, $9 = 0, $90 = 0.0, $91 = 0.0, $92 = 0, $93 = 0.0, $94 = 0.0, $95 = 0.0, $96 = 0.0, $97 = 0.0, $98 = 0.0, $99 = 0.0;
 if (($3 | 0) == 1) {
  $$0 = $0;
  $$05 = 0;
  while (1) {
   if (($$05 | 0) >= ($4 | 0)) break;
   $8 = +HEAPF32[$$0 >> 2];
   $9 = $$0 + 16 | 0;
   $10 = +HEAPF32[$9 >> 2];
   $11 = $8 - $10;
   $12 = $$0 + 4 | 0;
   $13 = +HEAPF32[$12 >> 2];
   $14 = $$0 + 20 | 0;
   $15 = +HEAPF32[$14 >> 2];
   $16 = $13 - $15;
   $17 = $8 + $10;
   $18 = $13 + $15;
   $19 = $$0 + 8 | 0;
   $20 = +HEAPF32[$19 >> 2];
   $21 = $$0 + 24 | 0;
   $22 = +HEAPF32[$21 >> 2];
   $23 = $20 + $22;
   $24 = $$0 + 12 | 0;
   $25 = +HEAPF32[$24 >> 2];
   $26 = $$0 + 28 | 0;
   $27 = +HEAPF32[$26 >> 2];
   $28 = $25 + $27;
   HEAPF32[$9 >> 2] = $17 - $23;
   HEAPF32[$14 >> 2] = $18 - $28;
   HEAPF32[$$0 >> 2] = $17 + $23;
   HEAPF32[$12 >> 2] = $18 + $28;
   $33 = $20 - $22;
   $34 = $25 - $27;
   HEAPF32[$19 >> 2] = $11 + $34;
   HEAPF32[$24 >> 2] = $16 - $33;
   HEAPF32[$21 >> 2] = $11 - $34;
   HEAPF32[$26 >> 2] = $16 + $33;
   $$0 = $$0 + 32 | 0;
   $$05 = $$05 + 1 | 0;
  }
  return;
 }
 $41 = $3 << 1;
 $42 = $3 * 3 | 0;
 $43 = $2 + 48 | 0;
 $44 = $1 << 1;
 $45 = $1 * 3 | 0;
 $$16 = 0;
 while (1) {
  if (($$16 | 0) >= ($4 | 0)) break;
  $48 = $0 + ((Math_imul($$16, $5) | 0) << 3) | 0;
  $49 = HEAP32[$43 >> 2] | 0;
  $$01 = $49;
  $$02 = $49;
  $$03 = $49;
  $$04 = 0;
  $$1 = $48;
  while (1) {
   if (($$04 | 0) >= ($3 | 0)) break;
   $51 = $$1 + ($3 << 3) | 0;
   $52 = +HEAPF32[$51 >> 2];
   $53 = +HEAPF32[$$03 >> 2];
   $55 = $$1 + ($3 << 3) + 4 | 0;
   $56 = +HEAPF32[$55 >> 2];
   $58 = +HEAPF32[$$03 + 4 >> 2];
   $60 = $52 * $53 - $56 * $58;
   $63 = $52 * $58 + $56 * $53;
   $64 = $$1 + ($41 << 3) | 0;
   $65 = +HEAPF32[$64 >> 2];
   $66 = +HEAPF32[$$02 >> 2];
   $68 = $$1 + ($41 << 3) + 4 | 0;
   $69 = +HEAPF32[$68 >> 2];
   $71 = +HEAPF32[$$02 + 4 >> 2];
   $73 = $65 * $66 - $69 * $71;
   $76 = $65 * $71 + $69 * $66;
   $77 = $$1 + ($42 << 3) | 0;
   $78 = +HEAPF32[$77 >> 2];
   $79 = +HEAPF32[$$01 >> 2];
   $81 = $$1 + ($42 << 3) + 4 | 0;
   $82 = +HEAPF32[$81 >> 2];
   $84 = +HEAPF32[$$01 + 4 >> 2];
   $86 = $78 * $79 - $82 * $84;
   $89 = $78 * $84 + $82 * $79;
   $90 = +HEAPF32[$$1 >> 2];
   $91 = $90 - $73;
   $92 = $$1 + 4 | 0;
   $93 = +HEAPF32[$92 >> 2];
   $94 = $93 - $76;
   $95 = $90 + $73;
   HEAPF32[$$1 >> 2] = $95;
   $96 = $93 + $76;
   HEAPF32[$92 >> 2] = $96;
   $97 = $60 + $86;
   $98 = $63 + $89;
   $99 = $60 - $86;
   $100 = $63 - $89;
   HEAPF32[$64 >> 2] = $95 - $97;
   HEAPF32[$68 >> 2] = $96 - $98;
   HEAPF32[$$1 >> 2] = +HEAPF32[$$1 >> 2] + $97;
   HEAPF32[$92 >> 2] = +HEAPF32[$92 >> 2] + $98;
   HEAPF32[$51 >> 2] = $91 + $100;
   HEAPF32[$55 >> 2] = $94 - $99;
   HEAPF32[$77 >> 2] = $91 - $100;
   HEAPF32[$81 >> 2] = $94 + $99;
   $$01 = $$01 + ($45 << 3) | 0;
   $$02 = $$02 + ($44 << 3) | 0;
   $$03 = $$03 + ($1 << 3) | 0;
   $$04 = $$04 + 1 | 0;
   $$1 = $$1 + 8 | 0;
  }
  $$16 = $$16 + 1 | 0;
 }
 return;
}

function _kf_bfly5($0, $1, $$0$5$val, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $$0$5$val = $$0$5$val | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $$03 = 0, $$04 = 0, $$05 = 0, $$06 = 0, $$sroa_idx25 = 0, $10 = 0, $101 = 0.0, $105 = 0.0, $108 = 0.0, $111 = 0.0, $119 = 0.0, $12 = 0.0, $123 = 0.0, $126 = 0.0, $129 = 0.0, $13 = 0.0, $14 = 0, $15 = 0, $16 = 0, $19 = 0, $25 = 0.0, $26 = 0.0, $27 = 0.0, $28 = 0, $30 = 0.0, $32 = 0, $33 = 0.0, $35 = 0.0, $37 = 0.0, $40 = 0.0, $41 = 0.0, $43 = 0, $45 = 0.0, $47 = 0, $48 = 0.0, $5 = 0, $50 = 0.0, $52 = 0.0, $55 = 0.0, $56 = 0.0, $58 = 0, $60 = 0.0, $62 = 0, $63 = 0.0, $65 = 0.0, $67 = 0.0, $7 = 0.0, $70 = 0.0, $71 = 0.0, $73 = 0, $75 = 0.0, $77 = 0, $78 = 0.0, $8 = 0.0, $80 = 0.0, $82 = 0.0, $85 = 0.0, $86 = 0.0, $87 = 0.0, $88 = 0.0, $89 = 0.0, $90 = 0.0, $91 = 0.0, $92 = 0.0, $93 = 0.0;
 $5 = Math_imul($1, $2) | 0;
 $7 = +HEAPF32[$$0$5$val + ($5 << 3) >> 2];
 $8 = +HEAPF32[$$0$5$val + ($5 << 3) + 4 >> 2];
 $10 = Math_imul($1 << 1, $2) | 0;
 $12 = +HEAPF32[$$0$5$val + ($10 << 3) >> 2];
 $13 = +HEAPF32[$$0$5$val + ($10 << 3) + 4 >> 2];
 $14 = $2 << 1;
 $15 = $2 * 3 | 0;
 $16 = $2 << 2;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) >= ($3 | 0)) break;
  $19 = $0 + ((Math_imul($$01, $4) | 0) << 3) | 0;
  $$0 = 0;
  $$02 = $19 + ($16 << 3) | 0;
  $$03 = $19 + ($15 << 3) | 0;
  $$04 = $19 + ($14 << 3) | 0;
  $$05 = $19;
  $$06 = $19 + ($2 << 3) | 0;
  while (1) {
   if (($$0 | 0) >= ($2 | 0)) break;
   $25 = +HEAPF32[$$05 >> 2];
   $$sroa_idx25 = $$05 + 4 | 0;
   $26 = +HEAPF32[$$sroa_idx25 >> 2];
   $27 = +HEAPF32[$$06 >> 2];
   $28 = Math_imul($$0, $1) | 0;
   $30 = +HEAPF32[$$0$5$val + ($28 << 3) >> 2];
   $32 = $$06 + 4 | 0;
   $33 = +HEAPF32[$32 >> 2];
   $35 = +HEAPF32[$$0$5$val + ($28 << 3) + 4 >> 2];
   $37 = $27 * $30 - $33 * $35;
   $40 = $27 * $35 + $33 * $30;
   $41 = +HEAPF32[$$04 >> 2];
   $43 = Math_imul($$0 << 1, $1) | 0;
   $45 = +HEAPF32[$$0$5$val + ($43 << 3) >> 2];
   $47 = $$04 + 4 | 0;
   $48 = +HEAPF32[$47 >> 2];
   $50 = +HEAPF32[$$0$5$val + ($43 << 3) + 4 >> 2];
   $52 = $41 * $45 - $48 * $50;
   $55 = $41 * $50 + $48 * $45;
   $56 = +HEAPF32[$$03 >> 2];
   $58 = Math_imul($$0 * 3 | 0, $1) | 0;
   $60 = +HEAPF32[$$0$5$val + ($58 << 3) >> 2];
   $62 = $$03 + 4 | 0;
   $63 = +HEAPF32[$62 >> 2];
   $65 = +HEAPF32[$$0$5$val + ($58 << 3) + 4 >> 2];
   $67 = $56 * $60 - $63 * $65;
   $70 = $56 * $65 + $63 * $60;
   $71 = +HEAPF32[$$02 >> 2];
   $73 = Math_imul($$0 << 2, $1) | 0;
   $75 = +HEAPF32[$$0$5$val + ($73 << 3) >> 2];
   $77 = $$02 + 4 | 0;
   $78 = +HEAPF32[$77 >> 2];
   $80 = +HEAPF32[$$0$5$val + ($73 << 3) + 4 >> 2];
   $82 = $71 * $75 - $78 * $80;
   $85 = $71 * $80 + $78 * $75;
   $86 = $37 + $82;
   $87 = $40 + $85;
   $88 = $37 - $82;
   $89 = $40 - $85;
   $90 = $52 + $67;
   $91 = $55 + $70;
   $92 = $52 - $67;
   $93 = $55 - $70;
   HEAPF32[$$05 >> 2] = $25 + ($86 + $90);
   HEAPF32[$$sroa_idx25 >> 2] = $26 + ($87 + $91);
   $101 = $25 + ($86 * $7 + $90 * $12);
   $105 = $26 + ($87 * $7 + $91 * $12);
   $108 = $89 * $8 + $93 * $13;
   $111 = $88 * $8 + $92 * $13;
   HEAPF32[$$06 >> 2] = $101 - $108;
   HEAPF32[$32 >> 2] = $105 + $111;
   HEAPF32[$$02 >> 2] = $101 + $108;
   HEAPF32[$77 >> 2] = $105 - $111;
   $119 = $25 + ($86 * $12 + $90 * $7);
   $123 = $26 + ($87 * $12 + $91 * $7);
   $126 = $93 * $8 - $89 * $13;
   $129 = $88 * $13 - $92 * $8;
   HEAPF32[$$04 >> 2] = $119 + $126;
   HEAPF32[$47 >> 2] = $123 + $129;
   HEAPF32[$$03 >> 2] = $119 - $126;
   HEAPF32[$62 >> 2] = $123 - $129;
   $$0 = $$0 + 1 | 0;
   $$02 = $$02 + 8 | 0;
   $$03 = $$03 + 8 | 0;
   $$04 = $$04 + 8 | 0;
   $$05 = $$05 + 8 | 0;
   $$06 = $$06 + 8 | 0;
  }
  $$01 = $$01 + 1 | 0;
 }
 return;
}

function _cwrsi($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $$01 = 0, $$011 = 0.0, $$02 = 0, $$06 = 0, $$09 = 0, $$1 = 0, $$110 = 0, $$2 = 0, $$213 = 0.0, $$24 = 0, $$3 = 0, $$35 = 0, $$4 = 0, $$6 = 0, $10 = 0, $11 = 0, $12 = 0, $14 = 0, $18 = 0, $22 = 0, $29 = 0, $32 = 0.0, $38 = 0, $43 = 0, $47 = 0, $49 = 0, $54 = 0, $56 = 0, $60 = 0, $63 = 0.0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $72 = 0, $74 = 0, $79 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0.0, $86 = 0.0, $87 = 0.0, $88 = 0, $89 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0.0, $94 = 0.0, $95 = 0.0, $sext = 0, $sext14 = 0;
 $$0 = $0;
 $$01 = $1;
 $$011 = 0.0;
 $$02 = $2;
 $$06 = $3;
 while (1) {
  if (($$0 | 0) <= 2) break;
  do if (($$01 | 0) < ($$0 | 0)) {
   $38 = HEAP32[(HEAP32[1572 + ($$01 << 2) >> 2] | 0) + ($$0 << 2) >> 2] | 0;
   $43 = HEAP32[(HEAP32[1572 + ($$01 + 1 << 2) >> 2] | 0) + ($$0 << 2) >> 2] | 0;
   if ($$02 >>> 0 >= $38 >>> 0 & $$02 >>> 0 < $43 >>> 0) {
    HEAP32[$$06 >> 2] = 0;
    $$213 = $$011;
    $$24 = $$02 - $38 | 0;
    $$6 = $$01;
    break;
   }
   $47 = $$02 >>> 0 >= $43 >>> 0;
   $49 = $$02 - ($47 ? $43 : 0) | 0;
   $$4 = $$01;
   do {
    $$4 = $$4 + -1 | 0;
    $54 = HEAP32[(HEAP32[1572 + ($$4 << 2) >> 2] | 0) + ($$0 << 2) >> 2] | 0;
   } while ($49 >>> 0 < $54 >>> 0);
   $56 = $47 << 31 >> 31;
   $60 = $$01 - $$4 + $56 ^ $56;
   HEAP32[$$06 >> 2] = $60 << 16 >> 16;
   $63 = +(($60 & 65535) << 16 >> 16);
   $$213 = $$011 + $63 * $63;
   $$24 = $49 - $54 | 0;
   $$6 = $$4;
  } else {
   $7 = HEAP32[1572 + ($$0 << 2) >> 2] | 0;
   $10 = HEAP32[$7 + ($$01 + 1 << 2) >> 2] | 0;
   $11 = $$02 >>> 0 >= $10 >>> 0;
   $12 = $11 << 31 >> 31;
   $14 = $$02 - ($11 ? $10 : 0) | 0;
   L13 : do if ((HEAP32[$7 + ($$0 << 2) >> 2] | 0) >>> 0 > $14 >>> 0) {
    $$1 = $$0;
    while (1) {
     $18 = $$1 + -1 | 0;
     $22 = HEAP32[(HEAP32[1572 + ($18 << 2) >> 2] | 0) + ($$0 << 2) >> 2] | 0;
     if ($22 >>> 0 > $14 >>> 0) $$1 = $18; else {
      $$110 = $22;
      $$3 = $18;
      break;
     }
    }
   } else {
    $$2 = $$01;
    while (1) {
     $$09 = HEAP32[$7 + ($$2 << 2) >> 2] | 0;
     if ($$09 >>> 0 <= $14 >>> 0) {
      $$110 = $$09;
      $$3 = $$2;
      break L13;
     }
     $$2 = $$2 + -1 | 0;
    }
   } while (0);
   $29 = $$01 - $$3 + $12 ^ $12;
   HEAP32[$$06 >> 2] = $29 << 16 >> 16;
   $32 = +(($29 & 65535) << 16 >> 16);
   $$213 = $$011 + $32 * $32;
   $$24 = $14 - $$110 | 0;
   $$6 = $$3;
  } while (0);
  $$0 = $$0 + -1 | 0;
  $$01 = $$6;
  $$011 = $$213;
  $$02 = $$24;
  $$06 = $$06 + 4 | 0;
 }
 $68 = $$01 << 1 | 1;
 $69 = $$02 >>> 0 >= $68 >>> 0;
 $70 = $69 << 31 >> 31;
 $72 = $$02 - ($69 ? $68 : 0) | 0;
 $74 = ($72 + 1 | 0) >>> 1;
 if (!$74) {
  $$35 = $72;
  $79 = $$01 - $74 | 0;
  $80 = $79 + $70 | 0;
  $81 = $80 ^ $70;
  $82 = $81 & 65535;
  $sext = $81 << 16;
  $83 = $sext >> 16;
  $84 = $$06 + 4 | 0;
  HEAP32[$$06 >> 2] = $83;
  $85 = +($82 << 16 >> 16);
  $86 = $85 * $85;
  $87 = $$011 + $86;
  $88 = 0 - $$35 | 0;
  $89 = $74 - $$35 | 0;
  $90 = $89 ^ $88;
  $91 = $90 & 65535;
  $sext14 = $90 << 16;
  $92 = $sext14 >> 16;
  HEAP32[$84 >> 2] = $92;
  $93 = +($91 << 16 >> 16);
  $94 = $93 * $93;
  $95 = $87 + $94;
  return +$95;
 }
 $$35 = $72 - (($74 << 1) + -1) | 0;
 $79 = $$01 - $74 | 0;
 $80 = $79 + $70 | 0;
 $81 = $80 ^ $70;
 $82 = $81 & 65535;
 $sext = $81 << 16;
 $83 = $sext >> 16;
 $84 = $$06 + 4 | 0;
 HEAP32[$$06 >> 2] = $83;
 $85 = +($82 << 16 >> 16);
 $86 = $85 * $85;
 $87 = $$011 + $86;
 $88 = 0 - $$35 | 0;
 $89 = $74 - $$35 | 0;
 $90 = $89 ^ $88;
 $91 = $90 & 65535;
 $sext14 = $90 << 16;
 $92 = $sext14 >> 16;
 HEAP32[$84 >> 2] = $92;
 $93 = +($91 << 16 >> 16);
 $94 = $93 * $93;
 $95 = $87 + $94;
 return +$95;
}

function _celt_synthesis($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 $7 = $7 | 0;
 $8 = $8 | 0;
 $9 = $9 | 0;
 $10 = $10 | 0;
 $11 = $11 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $$03 = 0, $$04 = 0, $$06 = 0, $$1 = 0, $$2 = 0, $$3 = 0, $$idx = 0, $$idx1$val = 0, $$idx4 = 0, $13 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $26 = 0, $27 = 0, $28 = 0, $31 = 0, $33 = 0, $34 = 0, $39 = 0, $46 = 0, $52 = 0, $56 = 0, $57 = 0, $58 = 0, $70 = 0, $74 = 0, $76 = 0, $77 = 0, $82 = 0, $85 = 0, sp = 0;
 sp = STACKTOP;
 $13 = HEAP32[$0 + 4 >> 2] | 0;
 $15 = HEAP32[$0 + 8 >> 2] | 0;
 $16 = $0 + 44 | 0;
 $17 = HEAP32[$16 >> 2] | 0;
 $18 = $17 << $9;
 $19 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($18 << 2) | 0) + 15 & -16) | 0;
 $20 = 1 << $9;
 $21 = ($8 | 0) == 0;
 $$02 = $21 ? 1 : $20;
 $$01 = $21 ? $18 : $17;
 $$0 = (HEAP32[$0 + 36 >> 2] | 0) - ($21 ? $9 : 0) | 0;
 switch ($7 | 0) {
 case 2:
  {
   if (($6 | 0) == 1) {
    _denormalise_bands(HEAP32[$0 + 32 >> 2] | 0, $17, $1, $19, $3, $4, $5, $20, $10, $11);
    $28 = $2 + 4 | 0;
    $31 = (HEAP32[$28 >> 2] | 0) + ((($13 | 0) / 2 | 0) << 2) | 0;
    _memcpy($31 | 0, $19 | 0, $18 << 2 | 0) | 0;
    $33 = $0 + 64 | 0;
    $34 = $0 + 60 | 0;
    $$03 = 0;
    while (1) {
     if (($$03 | 0) >= ($$02 | 0)) {
      $$1 = 0;
      break;
     }
     $39 = (HEAP32[$2 >> 2] | 0) + ((Math_imul($$01, $$03) | 0) << 2) | 0;
     _clt_mdct_backward_c($33, $31 + ($$03 << 2) | 0, $39, HEAP32[$34 >> 2] | 0, $13, $$0, $$02);
     $$03 = $$03 + 1 | 0;
    }
    while (1) {
     if (($$1 | 0) >= ($$02 | 0)) break;
     $46 = (HEAP32[$28 >> 2] | 0) + ((Math_imul($$01, $$1) | 0) << 2) | 0;
     _clt_mdct_backward_c($33, $19 + ($$1 << 2) | 0, $46, HEAP32[$34 >> 2] | 0, $13, $$0, $$02);
     $$1 = $$1 + 1 | 0;
    }
    STACKTOP = sp;
    return;
   }
   break;
  }
 case 1:
  {
   if (($6 | 0) == 2) {
    $52 = (HEAP32[$2 >> 2] | 0) + ((($13 | 0) / 2 | 0) << 2) | 0;
    $$idx4 = $0 + 32 | 0;
    _denormalise_bands(HEAP32[$$idx4 >> 2] | 0, $17, $1, $19, $3, $4, $5, $20, $10, $11);
    _denormalise_bands(HEAP32[$$idx4 >> 2] | 0, HEAP32[$16 >> 2] | 0, $1 + ($18 << 2) | 0, $52, $3 + ($15 << 2) | 0, $4, $5, $20, $10, $11);
    $$04 = 0;
    while (1) {
     if (($$04 | 0) >= ($18 | 0)) break;
     $58 = $19 + ($$04 << 2) | 0;
     HEAPF32[$58 >> 2] = +HEAPF32[$58 >> 2] * .5 + +HEAPF32[$52 + ($$04 << 2) >> 2] * .5;
     $$04 = $$04 + 1 | 0;
    }
    $56 = $0 + 64 | 0;
    $57 = $0 + 60 | 0;
    $$2 = 0;
    while (1) {
     if (($$2 | 0) >= ($$02 | 0)) break;
     $70 = (HEAP32[$2 >> 2] | 0) + ((Math_imul($$01, $$2) | 0) << 2) | 0;
     _clt_mdct_backward_c($56, $19 + ($$2 << 2) | 0, $70, HEAP32[$57 >> 2] | 0, $13, $$0, $$02);
     $$2 = $$2 + 1 | 0;
    }
    STACKTOP = sp;
    return;
   }
   break;
  }
 default:
  {}
 }
 $$idx = $0 + 32 | 0;
 $26 = $0 + 64 | 0;
 $27 = $0 + 60 | 0;
 $$06 = 0;
 $$idx1$val = $17;
 while (1) {
  $74 = $1 + ((Math_imul($$06, $18) | 0) << 2) | 0;
  $76 = $3 + ((Math_imul($$06, $15) | 0) << 2) | 0;
  _denormalise_bands(HEAP32[$$idx >> 2] | 0, $$idx1$val, $74, $19, $76, $4, $5, $20, $10, $11);
  $77 = $2 + ($$06 << 2) | 0;
  $$3 = 0;
  while (1) {
   if (($$3 | 0) >= ($$02 | 0)) break;
   $82 = (HEAP32[$77 >> 2] | 0) + ((Math_imul($$01, $$3) | 0) << 2) | 0;
   _clt_mdct_backward_c($26, $19 + ($$3 << 2) | 0, $82, HEAP32[$27 >> 2] | 0, $13, $$0, $$02);
   $$3 = $$3 + 1 | 0;
  }
  $85 = $$06 + 1 | 0;
  if (($85 | 0) >= ($7 | 0)) break;
  $$06 = $85;
  $$idx1$val = HEAP32[$16 >> 2] | 0;
 }
 STACKTOP = sp;
 return;
}

function _silk_stereo_MS_to_LR($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $$1 = 0, $$2 = 0, $$sink15 = 0, $$sink16 = 0, $10 = 0, $101 = 0, $103 = 0, $105 = 0, $11 = 0, $12 = 0, $126 = 0, $13 = 0, $136 = 0, $137 = 0, $139 = 0, $14 = 0, $140 = 0, $142 = 0, $143 = 0, $144 = 0, $16 = 0, $17 = 0, $19 = 0, $25 = 0, $29 = 0, $30 = 0, $38 = 0, $40 = 0, $41 = 0, $50 = 0, $53 = 0, $55 = 0, $57 = 0, $6 = 0, $62 = 0, $7 = 0, $70 = 0, $8 = 0, $80 = 0, $87 = 0, $88 = 0, $9 = 0, $98 = 0;
 $6 = $0 + 4 | 0;
 $7 = HEAPU16[$6 >> 1] | HEAPU16[$6 + 2 >> 1] << 16;
 HEAP16[$1 >> 1] = $7;
 HEAP16[$1 + 2 >> 1] = $7 >>> 16;
 $8 = $0 + 8 | 0;
 $9 = HEAPU16[$8 >> 1] | HEAPU16[$8 + 2 >> 1] << 16;
 HEAP16[$2 >> 1] = $9;
 HEAP16[$2 + 2 >> 1] = $9 >>> 16;
 $10 = $1 + ($5 << 1) | 0;
 $11 = HEAPU16[$10 >> 1] | HEAPU16[$10 + 2 >> 1] << 16;
 HEAP16[$6 >> 1] = $11;
 HEAP16[$6 + 2 >> 1] = $11 >>> 16;
 $12 = $2 + ($5 << 1) | 0;
 $13 = HEAPU16[$12 >> 1] | HEAPU16[$12 + 2 >> 1] << 16;
 HEAP16[$8 >> 1] = $13;
 HEAP16[$8 + 2 >> 1] = $13 >>> 16;
 $14 = HEAP16[$0 >> 1] | 0;
 $16 = $0 + 2 | 0;
 $17 = HEAP16[$16 >> 1] | 0;
 $19 = $4 << 3;
 $25 = (65536 / ($19 | 0) | 0) << 16 >> 16;
 $29 = ((Math_imul((HEAP32[$3 >> 2] | 0) - ($14 & 65535) << 16 >> 16, $25) | 0) >> 15) + 1 >> 1;
 $30 = $3 + 4 | 0;
 $38 = ((Math_imul((HEAP32[$30 >> 2] | 0) - ($17 & 65535) << 16 >> 16, $25) | 0) >> 15) + 1 >> 1;
 $$0 = $17 << 16 >> 16;
 $$01 = $14 << 16 >> 16;
 $$02 = 0;
 while (1) {
  if (($$02 | 0) >= ($19 | 0)) break;
  $40 = $$01 + $29 | 0;
  $41 = $$0 + $38 | 0;
  $50 = $$02 + 1 | 0;
  $53 = HEAP16[$1 + ($50 << 1) >> 1] | 0;
  $55 = (HEAP16[$1 + ($$02 << 1) >> 1] | 0) + (HEAP16[$1 + ($$02 + 2 << 1) >> 1] | 0) + ($53 << 1) | 0;
  $57 = $2 + ($50 << 1) | 0;
  $62 = $40 << 16 >> 16;
  $70 = $41 << 16 >> 16;
  $80 = ((HEAP16[$57 >> 1] << 8) + ((Math_imul($55 >> 7, $62) | 0) + ((Math_imul($55 << 9 & 65024, $62) | 0) >> 16)) + ((Math_imul($53 >> 5, $70) | 0) + ((Math_imul($53 << 11 & 63488, $70) | 0) >> 16)) >> 7) + 1 >> 1;
  HEAP16[$57 >> 1] = ($80 | 0) > 32767 ? 32767 : (($80 | 0) > -32768 ? $80 : -32768) & 65535;
  $$0 = $41;
  $$01 = $40;
  $$02 = $50;
 }
 $87 = HEAP32[$3 >> 2] << 16 >> 16;
 $88 = HEAP32[$30 >> 2] << 16 >> 16;
 $$1 = $19;
 while (1) {
  if (($$1 | 0) >= ($5 | 0)) break;
  $98 = $$1 + 1 | 0;
  $101 = HEAP16[$1 + ($98 << 1) >> 1] | 0;
  $103 = (HEAP16[$1 + ($$1 << 1) >> 1] | 0) + (HEAP16[$1 + ($$1 + 2 << 1) >> 1] | 0) + ($101 << 1) | 0;
  $105 = $2 + ($98 << 1) | 0;
  $126 = ((HEAP16[$105 >> 1] << 8) + ((Math_imul($103 >> 7, $87) | 0) + ((Math_imul($103 << 9 & 65024, $87) | 0) >> 16)) + ((Math_imul($101 >> 5, $88) | 0) + ((Math_imul($101 << 11 & 63488, $88) | 0) >> 16)) >> 7) + 1 >> 1;
  HEAP16[$105 >> 1] = ($126 | 0) > 32767 ? 32767 : (($126 | 0) > -32768 ? $126 : -32768) & 65535;
  $$1 = $98;
 }
 HEAP16[$0 >> 1] = HEAP32[$3 >> 2];
 $$2 = 0;
 $$sink15 = $16;
 $$sink16 = HEAP32[$30 >> 2] | 0;
 while (1) {
  HEAP16[$$sink15 >> 1] = $$sink16;
  if (($$2 | 0) >= ($5 | 0)) break;
  $136 = $$2 + 1 | 0;
  $137 = $1 + ($136 << 1) | 0;
  $139 = HEAP16[$137 >> 1] | 0;
  $140 = $2 + ($136 << 1) | 0;
  $142 = HEAP16[$140 >> 1] | 0;
  $143 = $139 + $142 | 0;
  $144 = $139 - $142 | 0;
  HEAP16[$137 >> 1] = ($143 | 0) > 32767 ? 32767 : (($143 | 0) > -32768 ? $143 : -32768) & 65535;
  if (($144 | 0) > 32767) {
   $$2 = $136;
   $$sink15 = $140;
   $$sink16 = 32767;
   continue;
  }
  $$2 = $136;
  $$sink15 = $140;
  $$sink16 = ($144 | 0) > -32768 ? $144 : -32768;
 }
 return;
}

function _silk_resampler_init($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $$1 = 0, $23 = 0, $32 = 0, $34 = 0, $35 = 0, $41 = 0, $68 = 0, $69 = 0, $70 = 0, $73 = 0, $74 = 0, $76 = 0, $85 = 0;
 _memset($0 | 0, 0, 300) | 0;
 L1 : do if (($1 | 0) < 12e3) {
  switch ($1 | 0) {
  case 8e3:
   {
    break L1;
    break;
   }
  default:
   $$0 = -1;
  }
  return $$0 | 0;
 } else if (($1 | 0) < 16e3) {
  switch ($1 | 0) {
  case 12e3:
   {
    break L1;
    break;
   }
  default:
   $$0 = -1;
  }
  return $$0 | 0;
 } else {
  switch ($1 | 0) {
  case 16e3:
   {
    break L1;
    break;
   }
  default:
   $$0 = -1;
  }
  return $$0 | 0;
 } while (0);
 L11 : do if (($2 | 0) < 16e3) if (($2 | 0) < 12e3) {
  switch ($2 | 0) {
  case 8e3:
   {
    break L11;
    break;
   }
  default:
   $$0 = -1;
  }
  return $$0 | 0;
 } else {
  switch ($2 | 0) {
  case 12e3:
   {
    break L11;
    break;
   }
  default:
   $$0 = -1;
  }
  return $$0 | 0;
 } else {
  if (($2 | 0) < 24e3) {
   switch ($2 | 0) {
   case 16e3:
    {
     break L11;
     break;
    }
   default:
    $$0 = -1;
   }
   return $$0 | 0;
  }
  if (($2 | 0) < 48e3) {
   switch ($2 | 0) {
   case 24e3:
    {
     break L11;
     break;
    }
   default:
    $$0 = -1;
   }
   return $$0 | 0;
  } else {
   switch ($2 | 0) {
   case 48e3:
    {
     break L11;
     break;
    }
   default:
    $$0 = -1;
   }
   return $$0 | 0;
  }
 } while (0);
 HEAP32[$0 + 292 >> 2] = HEAP8[(($2 >> 12) - (($2 | 0) > 16e3 & 1) >> (($2 | 0) > 24e3 & 1)) + -1 + (28266 + (((($1 >> 12) - (($1 | 0) > 16e3 & 1) >> (($1 | 0) > 24e3 & 1)) + -1 | 0) * 5 | 0)) >> 0];
 $23 = ($1 | 0) / 1e3 | 0;
 HEAP32[$0 + 284 >> 2] = $23;
 HEAP32[$0 + 288 >> 2] = ($2 | 0) / 1e3 | 0;
 HEAP32[$0 + 268 >> 2] = $23 * 10;
 do if (($2 | 0) > ($1 | 0)) {
  $32 = $0 + 264 | 0;
  if (($1 << 1 | 0) == ($2 | 0)) {
   HEAP32[$32 >> 2] = 1;
   $$1 = 0;
   break;
  } else {
   HEAP32[$32 >> 2] = 2;
   $$1 = 1;
   break;
  }
 } else {
  $34 = $0 + 264 | 0;
  if (($2 | 0) >= ($1 | 0)) {
   HEAP32[$34 >> 2] = 0;
   $$1 = 0;
   break;
  }
  HEAP32[$34 >> 2] = 3;
  $35 = $2 << 2;
  if (($35 | 0) == ($1 * 3 | 0)) {
   HEAP32[$0 + 280 >> 2] = 3;
   HEAP32[$0 + 276 >> 2] = 18;
   HEAP32[$0 + 296 >> 2] = 23272;
   $$1 = 0;
   break;
  }
  $41 = $2 * 3 | 0;
  if (($41 | 0) == ($1 << 1 | 0)) {
   HEAP32[$0 + 280 >> 2] = 2;
   HEAP32[$0 + 276 >> 2] = 18;
   HEAP32[$0 + 296 >> 2] = 23330;
   $$1 = 0;
   break;
  }
  if (($2 << 1 | 0) == ($1 | 0)) {
   HEAP32[$0 + 280 >> 2] = 1;
   HEAP32[$0 + 276 >> 2] = 24;
   HEAP32[$0 + 296 >> 2] = 23370;
   $$1 = 0;
   break;
  }
  if (($41 | 0) == ($1 | 0)) {
   HEAP32[$0 + 280 >> 2] = 1;
   HEAP32[$0 + 276 >> 2] = 36;
   HEAP32[$0 + 296 >> 2] = 23398;
   $$1 = 0;
   break;
  }
  if (($35 | 0) == ($1 | 0)) {
   HEAP32[$0 + 280 >> 2] = 1;
   HEAP32[$0 + 276 >> 2] = 36;
   HEAP32[$0 + 296 >> 2] = 23438;
   $$1 = 0;
   break;
  }
  if (($2 * 6 | 0) == ($1 | 0)) {
   HEAP32[$0 + 280 >> 2] = 1;
   HEAP32[$0 + 276 >> 2] = 36;
   HEAP32[$0 + 296 >> 2] = 23478;
   $$1 = 0;
   break;
  } else {
   $$0 = -1;
   return $$0 | 0;
  }
 } while (0);
 $68 = (($1 << ($$1 | 14) | 0) / ($2 | 0) | 0) << 2;
 $69 = $0 + 272 | 0;
 HEAP32[$69 >> 2] = $68;
 $70 = $2 << 16 >> 16;
 $73 = ($2 >> 15) + 1 >> 1;
 $74 = $1 << $$1;
 $76 = $68;
 while (1) {
  if (((Math_imul($76 >> 16, $70) | 0) + ((Math_imul($76 & 65535, $70) | 0) >> 16) + (Math_imul($76, $73) | 0) | 0) >= ($74 | 0)) {
   $$0 = 0;
   break;
  }
  $85 = $76 + 1 | 0;
  HEAP32[$69 >> 2] = $85;
  $76 = $85;
 }
 return $$0 | 0;
}

function _silk_NLSF_stabilize($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$$06 = 0, $$0 = 0, $$01 = 0, $$011 = 0, $$02 = 0, $$03 = 0, $$03$$06 = 0, $$06 = 0, $$09 = 0, $$110 = 0, $$14 = 0, $$25 = 0, $101 = 0, $105 = 0, $113 = 0, $117 = 0, $121 = 0, $127 = 0, $14 = 0, $17 = 0, $22 = 0, $23 = 0, $30 = 0, $31 = 0, $4 = 0, $45 = 0, $47 = 0, $48 = 0, $5 = 0, $55 = 0, $56 = 0, $59 = 0, $60 = 0, $62 = 0, $63 = 0, $7 = 0, $71 = 0, $77 = 0, $78 = 0, $9 = 0, $90 = 0, $93 = 0, $96 = 0, label = 0;
 $4 = $0 + ($2 + -1 << 1) | 0;
 $5 = $1 + ($2 << 1) | 0;
 $$011 = 0;
 while (1) {
  if (($$011 | 0) >= 20) break;
  $7 = HEAP16[$0 >> 1] | 0;
  $9 = HEAP16[$1 >> 1] | 0;
  $$02 = ($7 << 16 >> 16) - ($9 << 16 >> 16) | 0;
  $$03 = 1;
  $$06 = 0;
  $17 = $7;
  while (1) {
   if (($$03 | 0) >= ($2 | 0)) break;
   $14 = HEAP16[$0 + ($$03 << 1) >> 1] | 0;
   $22 = ($14 << 16 >> 16) - (($17 << 16 >> 16) + (HEAP16[$1 + ($$03 << 1) >> 1] | 0)) | 0;
   $23 = ($22 | 0) < ($$02 | 0);
   $$03$$06 = $23 ? $$03 : $$06;
   $$02 = $23 ? $22 : $$02;
   $$03 = $$03 + 1 | 0;
   $$06 = $$03$$06;
   $17 = $14;
  }
  $30 = 32768 - ((HEAP16[$4 >> 1] | 0) + (HEAP16[$5 >> 1] | 0)) | 0;
  $31 = ($30 | 0) < ($$02 | 0);
  $$$06 = $31 ? $2 : $$06;
  if ((($31 ? $30 : $$02) | 0) > -1) {
   label = 30;
   break;
  }
  do if (!$$$06) HEAP16[$0 >> 1] = $9; else {
   if (($$$06 | 0) == ($2 | 0)) {
    HEAP16[$4 >> 1] = 32768 - (HEAPU16[$5 >> 1] | 0);
    break;
   } else {
    $$01 = 0;
    $$09 = 0;
   }
   while (1) {
    if (($$09 | 0) >= ($$$06 | 0)) break;
    $$01 = $$01 + (HEAP16[$1 + ($$09 << 1) >> 1] | 0) | 0;
    $$09 = $$09 + 1 | 0;
   }
   $45 = $1 + ($$$06 << 1) | 0;
   $47 = HEAP16[$45 >> 1] | 0;
   $48 = $47 >> 1;
   $$0 = 32768;
   $$110 = $2;
   while (1) {
    if (($$110 | 0) <= ($$$06 | 0)) break;
    $$0 = $$0 - (HEAP16[$1 + ($$110 << 1) >> 1] | 0) | 0;
    $$110 = $$110 + -1 | 0;
   }
   $55 = $$01 + $48 | 0;
   $56 = $$0 - $48 | 0;
   $59 = $0 + ($$$06 + -1 << 1) | 0;
   $60 = HEAP16[$59 >> 1] | 0;
   $62 = $0 + ($$$06 << 1) | 0;
   $63 = HEAP16[$62 >> 1] | 0;
   $71 = (($60 << 16 >> 16) + ($63 << 16 >> 16) >> 1) + (($60 & 65535) + ($63 & 65535) & 1) | 0;
   if (($55 | 0) > ($56 | 0)) if (($71 | 0) > ($55 | 0)) $78 = $55; else $78 = ($71 | 0) < ($56 | 0) ? $56 : $71; else if (($71 | 0) > ($56 | 0)) $78 = $56; else $78 = ($71 | 0) < ($55 | 0) ? $55 : $71;
   $77 = $78 - ($47 >>> 1) | 0;
   HEAP16[$59 >> 1] = $77;
   HEAP16[$62 >> 1] = $77 + (HEAPU16[$45 >> 1] | 0);
  } while (0);
  $$011 = $$011 + 1 | 0;
 }
 if ((label | 0) == 30) return;
 if (($$011 | 0) != 20) return;
 _silk_insertion_sort_increasing_all_values_int16($0, $2);
 $90 = _silk_max_int_282(HEAP16[$0 >> 1] | 0, HEAP16[$1 >> 1] | 0) | 0;
 HEAP16[$0 >> 1] = $90;
 $$14 = 1;
 $96 = $90;
 while (1) {
  if (($$14 | 0) >= ($2 | 0)) break;
  $93 = $0 + ($$14 << 1) | 0;
  $101 = ($96 << 16 >> 16) + (HEAP16[$1 + ($$14 << 1) >> 1] | 0) | 0;
  $105 = _silk_max_int_282(HEAP16[$93 >> 1] | 0, ($101 | 0) > 32767 ? 32767 : (($101 | 0) > -32768 ? $101 : -32768) << 16 >> 16) | 0;
  HEAP16[$93 >> 1] = $105;
  $$14 = $$14 + 1 | 0;
  $96 = $105;
 }
 $113 = _silk_min_int_283(HEAP16[$4 >> 1] | 0, 32768 - (HEAP16[$5 >> 1] | 0) | 0) | 0;
 HEAP16[$4 >> 1] = $113;
 $$25 = $2 + -2 | 0;
 $121 = $113;
 while (1) {
  if (($$25 | 0) <= -1) break;
  $117 = $0 + ($$25 << 1) | 0;
  $127 = _silk_min_int_283(HEAP16[$117 >> 1] | 0, ($121 << 16 >> 16) - (HEAP16[$1 + ($$25 + 1 << 1) >> 1] | 0) | 0) | 0;
  HEAP16[$117 >> 1] = $127;
  $$25 = $$25 + -1 | 0;
  $121 = $127;
 }
 return;
}

function _opus_pcm_soft_clip($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0.0, $$01 = 0, $$010 = 0, $$011 = 0, $$02 = 0.0, $$04 = 0, $$05 = 0, $$07 = 0, $$08 = 0.0, $$16 = 0, $$19 = 0.0, $$2 = 0, $$3 = 0, $$4 = 0, $10 = 0, $11 = 0.0, $12 = 0, $16 = 0, $17 = 0, $18 = 0.0, $21 = 0, $22 = 0.0, $23 = 0.0, $28 = 0.0, $32 = 0.0, $39 = 0.0, $41 = 0, $50 = 0.0, $53 = 0, $61 = 0.0, $63 = 0.0, $68 = 0, $69 = 0.0, $75 = 0, $77 = 0.0, $79 = 0.0, $8 = 0, $81 = 0.0, $83 = 0, $85 = 0.0, $86 = 0, $fabsf = 0.0, $fabsf12 = 0.0, $or$cond22 = 0, $or$cond25 = 0;
 if (($2 | 0) < 1 | ($1 | 0) < 1 | ($0 | 0) == 0 | ($3 | 0) == 0) return;
 $8 = Math_imul($1, $2) | 0;
 $$05 = 0;
 while (1) {
  if (($$05 | 0) >= ($8 | 0)) {
   $$04 = 0;
   break;
  }
  $10 = $0 + ($$05 << 2) | 0;
  $11 = +HEAPF32[$10 >> 2];
  $12 = $11 > 2.0;
  $or$cond22 = $11 < -2.0 & ($12 ^ 1);
  HEAPF32[$10 >> 2] = $or$cond22 | $12 ? ($or$cond22 ? -2.0 : 2.0) : $11;
  $$05 = $$05 + 1 | 0;
 }
 while (1) {
  if (($$04 | 0) == ($2 | 0)) break;
  $16 = $0 + ($$04 << 2) | 0;
  $17 = $3 + ($$04 << 2) | 0;
  $18 = +HEAPF32[$17 >> 2];
  $$16 = 0;
  while (1) {
   if (($$16 | 0) >= ($1 | 0)) break;
   $21 = $16 + ((Math_imul($$16, $2) | 0) << 2) | 0;
   $22 = +HEAPF32[$21 >> 2];
   $23 = $22 * $18;
   if ($23 >= 0.0) break;
   HEAPF32[$21 >> 2] = $22 + $23 * $22;
   $$16 = $$16 + 1 | 0;
  }
  $28 = +HEAPF32[$16 >> 2];
  $$011 = 0;
  while (1) {
   $$2 = $$011;
   while (1) {
    if (($$2 | 0) >= ($1 | 0)) break;
    $32 = +HEAPF32[$16 + ((Math_imul($$2, $2) | 0) << 2) >> 2];
    if ($32 > 1.0 | $32 < -1.0) break;
    $$2 = $$2 + 1 | 0;
   }
   if (($$2 | 0) == ($1 | 0)) {
    $$19 = 0.0;
    break;
   }
   $39 = +HEAPF32[$16 + ((Math_imul($$2, $2) | 0) << 2) >> 2];
   $fabsf = +Math_abs(+$39);
   $$010 = $$2;
   while (1) {
    if (($$010 | 0) <= 0) {
     $$01 = $$2;
     $$02 = $fabsf;
     $$07 = $$2;
     break;
    }
    $41 = $$010 + -1 | 0;
    if (!($39 * +HEAPF32[$16 + ((Math_imul($41, $2) | 0) << 2) >> 2] >= 0.0)) {
     $$01 = $$2;
     $$02 = $fabsf;
     $$07 = $$2;
     break;
    } else $$010 = $41;
   }
   while (1) {
    if (($$07 | 0) >= ($1 | 0)) break;
    $50 = +HEAPF32[$16 + ((Math_imul($$07, $2) | 0) << 2) >> 2];
    if (!($39 * $50 >= 0.0)) break;
    $fabsf12 = +Math_abs(+$50);
    $53 = $fabsf12 > $$02;
    $$01 = $53 ? $$07 : $$01;
    $$02 = $53 ? $fabsf12 : $$02;
    $$07 = $$07 + 1 | 0;
   }
   if (!$$010) $75 = $39 * +HEAPF32[$16 >> 2] >= 0.0; else $75 = 0;
   $61 = ($$02 + -1.0) / ($$02 * $$02);
   $63 = $61 + $61 * 2.399999914359796e-07;
   $$08 = $39 > 0.0 ? -$63 : $63;
   $$3 = $$010;
   while (1) {
    if (($$3 | 0) >= ($$07 | 0)) break;
    $68 = $16 + ((Math_imul($$3, $2) | 0) << 2) | 0;
    $69 = +HEAPF32[$68 >> 2];
    HEAPF32[$68 >> 2] = $69 + $$08 * $69 * $69;
    $$3 = $$3 + 1 | 0;
   }
   L38 : do if ($75 & ($$01 | 0) > 1) {
    $77 = $28 - +HEAPF32[$16 >> 2];
    $79 = $77 / +($$01 | 0);
    $$0 = $77;
    $$4 = $$011;
    while (1) {
     if (($$4 | 0) >= ($$01 | 0)) break L38;
     $81 = $$0 - $79;
     $83 = $16 + ((Math_imul($$4, $2) | 0) << 2) | 0;
     $85 = +HEAPF32[$83 >> 2] + $81;
     HEAPF32[$83 >> 2] = $85;
     $86 = $85 > 1.0;
     $or$cond25 = $85 < -1.0 & ($86 ^ 1);
     HEAPF32[$83 >> 2] = $or$cond25 | $86 ? ($or$cond25 ? -1.0 : 1.0) : $85;
     $$0 = $81;
     $$4 = $$4 + 1 | 0;
    }
   } while (0);
   if (($$07 | 0) == ($1 | 0)) {
    $$19 = $$08;
    break;
   } else $$011 = $$07;
  }
  HEAPF32[$17 >> 2] = $$19;
  $$04 = $$04 + 1 | 0;
 }
 return;
}

function _xcorr_kernel_c_62($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $$01 = 0, $$010 = 0.0, $$04 = 0.0, $$06 = 0.0, $$07 = 0, $$08 = 0.0, $$1 = 0, $$12 = 0, $$15 = 0.0, $$19 = 0.0, $$2 = 0, $$23 = 0, $10 = 0, $109 = 0.0, $11 = 0, $110 = 0.0, $12 = 0, $13 = 0, $15 = 0, $16 = 0, $20 = 0.0, $22 = 0.0, $25 = 0.0, $28 = 0.0, $31 = 0.0, $34 = 0.0, $36 = 0.0, $38 = 0.0, $40 = 0.0, $42 = 0.0, $44 = 0.0, $46 = 0.0, $48 = 0.0, $50 = 0.0, $52 = 0.0, $54 = 0.0, $56 = 0.0, $58 = 0.0, $59 = 0.0, $60 = 0.0, $72 = 0, $75 = 0.0, $77 = 0.0, $93 = 0.0, $95 = 0.0, $scevgep = 0, $scevgep11 = 0;
 $10 = $3 + -3 | 0;
 $11 = $2 + 4 | 0;
 $12 = $2 + 8 | 0;
 $13 = $2 + 12 | 0;
 $15 = (($10 | 0) > 0 ? $10 : 0) + 3 | 0;
 $16 = $15 & -4;
 $scevgep = $1 + (($15 | 3) << 2) | 0;
 $$0 = $0;
 $$01 = $1 + 12 | 0;
 $$010 = +HEAPF32[$1 + 4 >> 2];
 $$04 = 0.0;
 $$06 = +HEAPF32[$1 + 8 >> 2];
 $$07 = 0;
 $$08 = +HEAPF32[$1 >> 2];
 while (1) {
  if (($$07 | 0) >= ($10 | 0)) break;
  $20 = +HEAPF32[$$0 >> 2];
  $22 = +HEAPF32[$$01 >> 2];
  $25 = +HEAPF32[$2 >> 2] + $20 * $$08;
  HEAPF32[$2 >> 2] = $25;
  $28 = +HEAPF32[$11 >> 2] + $20 * $$010;
  HEAPF32[$11 >> 2] = $28;
  $31 = +HEAPF32[$12 >> 2] + $20 * $$06;
  HEAPF32[$12 >> 2] = $31;
  $34 = +HEAPF32[$13 >> 2] + $20 * $22;
  HEAPF32[$13 >> 2] = $34;
  $36 = +HEAPF32[$$0 + 4 >> 2];
  $38 = +HEAPF32[$$01 + 4 >> 2];
  $40 = $25 + $36 * $$010;
  HEAPF32[$2 >> 2] = $40;
  $42 = $28 + $36 * $$06;
  HEAPF32[$11 >> 2] = $42;
  $44 = $31 + $36 * $22;
  HEAPF32[$12 >> 2] = $44;
  $46 = $34 + $36 * $38;
  HEAPF32[$13 >> 2] = $46;
  $48 = +HEAPF32[$$0 + 8 >> 2];
  $50 = +HEAPF32[$$01 + 8 >> 2];
  $52 = $40 + $48 * $$06;
  HEAPF32[$2 >> 2] = $52;
  $54 = $42 + $48 * $22;
  HEAPF32[$11 >> 2] = $54;
  $56 = $44 + $48 * $38;
  HEAPF32[$12 >> 2] = $56;
  $58 = $46 + $48 * $50;
  HEAPF32[$13 >> 2] = $58;
  $59 = +HEAPF32[$$0 + 12 >> 2];
  $60 = +HEAPF32[$$01 + 12 >> 2];
  HEAPF32[$2 >> 2] = $52 + $59 * $22;
  HEAPF32[$11 >> 2] = $54 + $59 * $38;
  HEAPF32[$12 >> 2] = $56 + $59 * $50;
  HEAPF32[$13 >> 2] = $58 + $59 * $60;
  $$0 = $$0 + 16 | 0;
  $$01 = $$01 + 16 | 0;
  $$010 = $50;
  $$04 = $22;
  $$06 = $60;
  $$07 = $$07 + 4 | 0;
  $$08 = $38;
 }
 $scevgep11 = $0 + ($16 << 2) | 0;
 $72 = $16 | 1;
 if (($16 | 0) < ($3 | 0)) {
  $75 = +HEAPF32[$scevgep11 >> 2];
  $77 = +HEAPF32[$scevgep >> 2];
  HEAPF32[$2 >> 2] = +HEAPF32[$2 >> 2] + $75 * $$08;
  HEAPF32[$11 >> 2] = +HEAPF32[$11 >> 2] + $75 * $$010;
  HEAPF32[$12 >> 2] = +HEAPF32[$12 >> 2] + $75 * $$06;
  HEAPF32[$13 >> 2] = +HEAPF32[$13 >> 2] + $75 * $77;
  $$1 = $scevgep11 + 4 | 0;
  $$12 = $scevgep + 4 | 0;
  $$15 = $77;
 } else {
  $$1 = $scevgep11;
  $$12 = $scevgep;
  $$15 = $$04;
 }
 if (($72 | 0) < ($3 | 0)) {
  $93 = +HEAPF32[$$1 >> 2];
  $95 = +HEAPF32[$$12 >> 2];
  HEAPF32[$2 >> 2] = +HEAPF32[$2 >> 2] + $93 * $$010;
  HEAPF32[$11 >> 2] = +HEAPF32[$11 >> 2] + $93 * $$06;
  HEAPF32[$12 >> 2] = +HEAPF32[$12 >> 2] + $93 * $$15;
  HEAPF32[$13 >> 2] = +HEAPF32[$13 >> 2] + $93 * $95;
  $$19 = $95;
  $$2 = $$1 + 4 | 0;
  $$23 = $$12 + 4 | 0;
 } else {
  $$19 = $$08;
  $$2 = $$1;
  $$23 = $$12;
 }
 if (($72 + 1 | 0) >= ($3 | 0)) return;
 $109 = +HEAPF32[$$2 >> 2];
 $110 = +HEAPF32[$$23 >> 2];
 HEAPF32[$2 >> 2] = +HEAPF32[$2 >> 2] + $109 * $$06;
 HEAPF32[$11 >> 2] = +HEAPF32[$11 >> 2] + $109 * $$15;
 HEAPF32[$12 >> 2] = +HEAPF32[$12 >> 2] + $109 * $$19;
 HEAPF32[$13 >> 2] = +HEAPF32[$13 >> 2] + $109 * $110;
 return;
}

function _xcorr_kernel_c($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $$01 = 0, $$010 = 0.0, $$04 = 0.0, $$06 = 0.0, $$07 = 0, $$08 = 0.0, $$1 = 0, $$12 = 0, $$15 = 0.0, $$19 = 0.0, $$2 = 0, $$23 = 0, $10 = 0, $109 = 0.0, $11 = 0, $110 = 0.0, $12 = 0, $13 = 0, $15 = 0, $16 = 0, $20 = 0.0, $22 = 0.0, $25 = 0.0, $28 = 0.0, $31 = 0.0, $34 = 0.0, $36 = 0.0, $38 = 0.0, $40 = 0.0, $42 = 0.0, $44 = 0.0, $46 = 0.0, $48 = 0.0, $50 = 0.0, $52 = 0.0, $54 = 0.0, $56 = 0.0, $58 = 0.0, $59 = 0.0, $60 = 0.0, $72 = 0, $75 = 0.0, $77 = 0.0, $93 = 0.0, $95 = 0.0, $scevgep = 0, $scevgep11 = 0;
 $10 = $3 + -3 | 0;
 $11 = $2 + 4 | 0;
 $12 = $2 + 8 | 0;
 $13 = $2 + 12 | 0;
 $15 = (($10 | 0) > 0 ? $10 : 0) + 3 | 0;
 $16 = $15 & -4;
 $scevgep = $1 + (($15 | 3) << 2) | 0;
 $$0 = $0;
 $$01 = $1 + 12 | 0;
 $$010 = +HEAPF32[$1 + 4 >> 2];
 $$04 = 0.0;
 $$06 = +HEAPF32[$1 + 8 >> 2];
 $$07 = 0;
 $$08 = +HEAPF32[$1 >> 2];
 while (1) {
  if (($$07 | 0) >= ($10 | 0)) break;
  $20 = +HEAPF32[$$0 >> 2];
  $22 = +HEAPF32[$$01 >> 2];
  $25 = +HEAPF32[$2 >> 2] + $20 * $$08;
  HEAPF32[$2 >> 2] = $25;
  $28 = +HEAPF32[$11 >> 2] + $20 * $$010;
  HEAPF32[$11 >> 2] = $28;
  $31 = +HEAPF32[$12 >> 2] + $20 * $$06;
  HEAPF32[$12 >> 2] = $31;
  $34 = +HEAPF32[$13 >> 2] + $20 * $22;
  HEAPF32[$13 >> 2] = $34;
  $36 = +HEAPF32[$$0 + 4 >> 2];
  $38 = +HEAPF32[$$01 + 4 >> 2];
  $40 = $25 + $36 * $$010;
  HEAPF32[$2 >> 2] = $40;
  $42 = $28 + $36 * $$06;
  HEAPF32[$11 >> 2] = $42;
  $44 = $31 + $36 * $22;
  HEAPF32[$12 >> 2] = $44;
  $46 = $34 + $36 * $38;
  HEAPF32[$13 >> 2] = $46;
  $48 = +HEAPF32[$$0 + 8 >> 2];
  $50 = +HEAPF32[$$01 + 8 >> 2];
  $52 = $40 + $48 * $$06;
  HEAPF32[$2 >> 2] = $52;
  $54 = $42 + $48 * $22;
  HEAPF32[$11 >> 2] = $54;
  $56 = $44 + $48 * $38;
  HEAPF32[$12 >> 2] = $56;
  $58 = $46 + $48 * $50;
  HEAPF32[$13 >> 2] = $58;
  $59 = +HEAPF32[$$0 + 12 >> 2];
  $60 = +HEAPF32[$$01 + 12 >> 2];
  HEAPF32[$2 >> 2] = $52 + $59 * $22;
  HEAPF32[$11 >> 2] = $54 + $59 * $38;
  HEAPF32[$12 >> 2] = $56 + $59 * $50;
  HEAPF32[$13 >> 2] = $58 + $59 * $60;
  $$0 = $$0 + 16 | 0;
  $$01 = $$01 + 16 | 0;
  $$010 = $50;
  $$04 = $22;
  $$06 = $60;
  $$07 = $$07 + 4 | 0;
  $$08 = $38;
 }
 $scevgep11 = $0 + ($16 << 2) | 0;
 $72 = $16 | 1;
 if (($16 | 0) < ($3 | 0)) {
  $75 = +HEAPF32[$scevgep11 >> 2];
  $77 = +HEAPF32[$scevgep >> 2];
  HEAPF32[$2 >> 2] = +HEAPF32[$2 >> 2] + $75 * $$08;
  HEAPF32[$11 >> 2] = +HEAPF32[$11 >> 2] + $75 * $$010;
  HEAPF32[$12 >> 2] = +HEAPF32[$12 >> 2] + $75 * $$06;
  HEAPF32[$13 >> 2] = +HEAPF32[$13 >> 2] + $75 * $77;
  $$1 = $scevgep11 + 4 | 0;
  $$12 = $scevgep + 4 | 0;
  $$15 = $77;
 } else {
  $$1 = $scevgep11;
  $$12 = $scevgep;
  $$15 = $$04;
 }
 if (($72 | 0) < ($3 | 0)) {
  $93 = +HEAPF32[$$1 >> 2];
  $95 = +HEAPF32[$$12 >> 2];
  HEAPF32[$2 >> 2] = +HEAPF32[$2 >> 2] + $93 * $$010;
  HEAPF32[$11 >> 2] = +HEAPF32[$11 >> 2] + $93 * $$06;
  HEAPF32[$12 >> 2] = +HEAPF32[$12 >> 2] + $93 * $$15;
  HEAPF32[$13 >> 2] = +HEAPF32[$13 >> 2] + $93 * $95;
  $$19 = $95;
  $$2 = $$1 + 4 | 0;
  $$23 = $$12 + 4 | 0;
 } else {
  $$19 = $$08;
  $$2 = $$1;
  $$23 = $$12;
 }
 if (($72 + 1 | 0) >= ($3 | 0)) return;
 $109 = +HEAPF32[$$2 >> 2];
 $110 = +HEAPF32[$$23 >> 2];
 HEAPF32[$2 >> 2] = +HEAPF32[$2 >> 2] + $109 * $$06;
 HEAPF32[$11 >> 2] = +HEAPF32[$11 >> 2] + $109 * $$15;
 HEAPF32[$12 >> 2] = +HEAPF32[$12 >> 2] + $109 * $$19;
 HEAPF32[$13 >> 2] = +HEAPF32[$13 >> 2] + $109 * $110;
 return;
}

function _op_pvq_search_c($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0.0, $$01 = 0.0, $$011 = 0.0, $$013 = 0.0, $$016 = 0.0, $$03 = 0, $$05 = 0, $$06 = 0, $$08 = 0, $$112 = 0.0, $$114 = 0.0, $$117 = 0.0, $$17 = 0, $$19 = 0, $$2 = 0, $$210 = 0, $$215 = 0.0, $$218 = 0.0, $$3 = 0, $$319 = 0.0, $$4 = 0, $$5 = 0, $30 = 0.0, $31 = 0, $34 = 0, $36 = 0.0, $39 = 0.0, $4 = 0, $42 = 0.0, $44 = 0, $49 = 0.0, $5 = 0, $54 = 0.0, $58 = 0.0, $6 = 0, $60 = 0.0, $66 = 0.0, $69 = 0.0, $7 = 0.0, $70 = 0.0, $73 = 0, $77 = 0.0, $78 = 0, $79 = 0.0, $81 = 0, $87 = 0, $90 = 0, sp = 0;
 sp = STACKTOP;
 $4 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($3 << 2) | 0) + 15 & -16) | 0;
 $5 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($3 << 2) | 0) + 15 & -16) | 0;
 $$06 = 0;
 do {
  $6 = $0 + ($$06 << 2) | 0;
  $7 = +HEAPF32[$6 >> 2];
  HEAP32[$5 + ($$06 << 2) >> 2] = $7 < 0.0 & 1;
  HEAPF32[$6 >> 2] = +Math_abs(+$7);
  HEAP32[$1 + ($$06 << 2) >> 2] = 0;
  HEAPF32[$4 + ($$06 << 2) >> 2] = 0.0;
  $$06 = $$06 + 1 | 0;
 } while (($$06 | 0) < ($3 | 0));
 if (($3 >> 1 | 0) < ($2 | 0)) {
  $$011 = 0.0;
  $$17 = 0;
  do {
   $$011 = $$011 + +HEAPF32[$0 + ($$17 << 2) >> 2];
   $$17 = $$17 + 1 | 0;
  } while (($$17 | 0) < ($3 | 0));
  if ($$011 > 1.0000000036274937e-15 & $$011 < 64.0) $$112 = $$011; else {
   HEAPF32[$0 >> 2] = 1.0;
   $$2 = 1;
   do {
    HEAPF32[$0 + ($$2 << 2) >> 2] = 0.0;
    $$2 = $$2 + 1 | 0;
   } while (($$2 | 0) < ($3 | 0));
   $$112 = 1.0;
  }
  $30 = (+($2 | 0) + .800000011920929) * (1.0 / $$112);
  $$013 = 0.0;
  $$016 = 0.0;
  $$08 = $2;
  $$3 = 0;
  while (1) {
   $31 = $0 + ($$3 << 2) | 0;
   $34 = ~~+Math_floor(+($30 * +HEAPF32[$31 >> 2]));
   HEAP32[$1 + ($$3 << 2) >> 2] = $34;
   $36 = +($34 | 0);
   $39 = $$016 + $36 * $36;
   $42 = $$013 + +HEAPF32[$31 >> 2] * $36;
   HEAPF32[$4 + ($$3 << 2) >> 2] = $36 * 2.0;
   $44 = $$08 - $34 | 0;
   $$3 = $$3 + 1 | 0;
   if (($$3 | 0) >= ($3 | 0)) {
    $$114 = $42;
    $$117 = $39;
    $$19 = $44;
    break;
   } else {
    $$013 = $42;
    $$016 = $39;
    $$08 = $44;
   }
  }
 } else {
  $$114 = 0.0;
  $$117 = 0.0;
  $$19 = $2;
 }
 if (($$19 | 0) > ($3 + 3 | 0)) {
  $49 = +($$19 | 0);
  $54 = $$117 + $49 * $49 + $49 * +HEAPF32[$4 >> 2];
  HEAP32[$1 >> 2] = (HEAP32[$1 >> 2] | 0) + $$19;
  $$210 = 0;
  $$218 = $54;
 } else {
  $$210 = $$19;
  $$218 = $$117;
 }
 $$05 = 0;
 $$215 = $$114;
 $$319 = $$218;
 while (1) {
  if (($$05 | 0) >= ($$210 | 0)) {
   $$5 = 0;
   break;
  }
  $58 = $$319 + 1.0;
  $60 = $$215 + +HEAPF32[$0 >> 2];
  $$0 = $58 + +HEAPF32[$4 >> 2];
  $$01 = $60 * $60;
  $$03 = 0;
  $$4 = 1;
  while (1) {
   $66 = $$215 + +HEAPF32[$0 + ($$4 << 2) >> 2];
   $69 = $58 + +HEAPF32[$4 + ($$4 << 2) >> 2];
   $70 = $66 * $66;
   $73 = $$0 * $70 > $69 * $$01;
   $$03 = $73 ? $$4 : $$03;
   $$4 = $$4 + 1 | 0;
   if (($$4 | 0) >= ($3 | 0)) break; else {
    $$0 = $73 ? $69 : $$0;
    $$01 = $73 ? $70 : $$01;
   }
  }
  $77 = +HEAPF32[$0 + ($$03 << 2) >> 2];
  $78 = $4 + ($$03 << 2) | 0;
  $79 = +HEAPF32[$78 >> 2];
  HEAPF32[$78 >> 2] = $79 + 2.0;
  $81 = $1 + ($$03 << 2) | 0;
  HEAP32[$81 >> 2] = (HEAP32[$81 >> 2] | 0) + 1;
  $$05 = $$05 + 1 | 0;
  $$215 = $$215 + $77;
  $$319 = $58 + $79;
 }
 do {
  $87 = $1 + ($$5 << 2) | 0;
  $90 = HEAP32[$5 + ($$5 << 2) >> 2] | 0;
  HEAP32[$87 >> 2] = (HEAP32[$87 >> 2] ^ 0 - $90) + $90;
  $$5 = $$5 + 1 | 0;
 } while (($$5 | 0) < ($3 | 0));
 STACKTOP = sp;
 return +$$319;
}

function _silk_PLC_update($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $$04 = 0, $$1 = 0, $$13 = 0, $$2 = 0, $$pre = 0, $$pre$phi13Z2D = 0, $$pre$phiZ2D = 0, $$pre10 = 0, $10 = 0, $11 = 0, $12 = 0, $2 = 0, $23 = 0, $30 = 0, $4 = 0, $41 = 0, $42 = 0, $51 = 0, $52 = 0, $63 = 0, $74 = 0, $77 = 0, $8 = 0, $82 = 0, $83 = 0, $9 = 0;
 $2 = $0 + 4172 | 0;
 $4 = HEAP8[$0 + 2765 >> 0] | 0;
 HEAP32[$0 + 4164 >> 2] = $4 << 24 >> 24;
 L1 : do if ($4 << 24 >> 24 == 2) {
  $8 = $0 + 2324 | 0;
  $9 = $0 + 2332 | 0;
  $10 = $0 + 4176 | 0;
  $$pre = HEAP32[$9 >> 2] | 0;
  $$pre10 = HEAP32[$8 >> 2] | 0;
  $$0 = 0;
  $$02 = 0;
  while (1) {
   $11 = Math_imul($$0, $$pre) | 0;
   $12 = $$pre10 + -1 | 0;
   if (($$0 | 0) == ($$pre10 | 0) ? 1 : ($11 | 0) >= (HEAP32[$1 + ($12 << 2) >> 2] | 0)) break; else {
    $$01 = 0;
    $$04 = 0;
   }
   while (1) {
    if (($$01 | 0) == 5) break;
    $23 = $$04 + (HEAP16[$1 + 96 + ((($12 - $$0 | 0) * 5 | 0) + $$01 << 1) >> 1] | 0) | 0;
    $$01 = $$01 + 1 | 0;
    $$04 = $23;
   }
   if (($$04 | 0) > ($$02 | 0)) {
    $30 = $1 + 96 + (($$pre10 + 65535 - $$0 << 16 >> 16) * 5 << 1) | 0;
    HEAP16[$10 >> 1] = HEAP16[$30 >> 1] | 0;
    HEAP16[$10 + 2 >> 1] = HEAP16[$30 + 2 >> 1] | 0;
    HEAP16[$10 + 4 >> 1] = HEAP16[$30 + 4 >> 1] | 0;
    HEAP16[$10 + 6 >> 1] = HEAP16[$30 + 6 >> 1] | 0;
    HEAP16[$10 + 8 >> 1] = HEAP16[$30 + 8 >> 1] | 0;
    HEAP32[$2 >> 2] = HEAP32[$1 + ($12 - $$0 << 2) >> 2] << 8;
    $$13 = $$04;
   } else $$13 = $$02;
   $$0 = $$0 + 1 | 0;
   $$02 = $$13;
  }
  HEAP32[$10 >> 2] = 0;
  HEAP32[$10 + 4 >> 2] = 0;
  HEAP16[$10 + 8 >> 1] = 0;
  HEAP16[$0 + 4180 >> 1] = $$02;
  if (($$02 | 0) < 11469) {
   $41 = (11744256 / ((($$02 | 0) > 1 ? $$02 : 1) >>> 0) | 0) << 16 >> 16;
   $$1 = 0;
   while (1) {
    if (($$1 | 0) == 5) {
     $$pre$phi13Z2D = $9;
     $$pre$phiZ2D = $8;
     break L1;
    }
    $42 = $0 + 4176 + ($$1 << 1) | 0;
    HEAP16[$42 >> 1] = (Math_imul(HEAP16[$42 >> 1] | 0, $41) | 0) >>> 10;
    $$1 = $$1 + 1 | 0;
   }
  }
  if (($$02 | 0) > 15565) {
   $51 = (255016960 / ($$02 | 0) | 0) << 16 >> 16;
   $$2 = 0;
   while (1) {
    if (($$2 | 0) == 5) {
     $$pre$phi13Z2D = $9;
     $$pre$phiZ2D = $8;
     break L1;
    }
    $52 = $0 + 4176 + ($$2 << 1) | 0;
    HEAP16[$52 >> 1] = (Math_imul(HEAP16[$52 >> 1] | 0, $51) | 0) >>> 14;
    $$2 = $$2 + 1 | 0;
   }
  } else {
   $$pre$phi13Z2D = $9;
   $$pre$phiZ2D = $8;
  }
 } else {
  HEAP32[$2 >> 2] = (HEAP32[$0 + 2316 >> 2] << 16 >> 16) * 4608;
  $63 = $0 + 4176 | 0;
  HEAP32[$63 >> 2] = 0;
  HEAP32[$63 + 4 >> 2] = 0;
  HEAP16[$63 + 8 >> 1] = 0;
  $$pre$phi13Z2D = $0 + 2332 | 0;
  $$pre$phiZ2D = $0 + 2324 | 0;
 } while (0);
 _memcpy($0 + 4186 | 0, $1 + 64 | 0, HEAP32[$0 + 2340 >> 2] << 1 | 0) | 0;
 HEAP16[$0 + 4240 >> 1] = HEAP32[$1 + 136 >> 2];
 $74 = HEAP32[$$pre$phiZ2D >> 2] | 0;
 $77 = $1 + 16 + ($74 + -2 << 2) | 0;
 $82 = HEAP32[$77 + 4 >> 2] | 0;
 $83 = $0 + 4244 | 0;
 HEAP32[$83 >> 2] = HEAP32[$77 >> 2];
 HEAP32[$83 + 4 >> 2] = $82;
 HEAP32[$0 + 4260 >> 2] = HEAP32[$$pre$phi13Z2D >> 2];
 HEAP32[$0 + 4256 >> 2] = $74;
 return;
}

function _anti_collapse($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 $7 = $7 | 0;
 $8 = $8 | 0;
 $9 = $9 | 0;
 $10 = $10 | 0;
 $11 = $11 | 0;
 $12 = $12 | 0;
 var $$ = 0.0, $$0 = 0, $$02 = 0.0, $$03 = 0.0, $$04 = 0, $$05 = 0, $$06 = 0, $$07 = 0, $$08 = 0, $$1 = 0, $$19 = 0, $$2 = 0, $$3 = 0, $$4 = 0, $105 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $19 = 0, $20 = 0, $27 = 0, $39 = 0.0, $40 = 0, $44 = 0.0, $45 = 0, $46 = 0, $48 = 0, $50 = 0.0, $52 = 0.0, $53 = 0, $55 = 0.0, $57 = 0.0, $59 = 0.0, $65 = 0.0, $73 = 0.0, $77 = 0.0, $79 = 0, $85 = 0, $87 = 0, $88 = 0.0, $96 = 0;
 $13 = $0 + 32 | 0;
 $14 = $0 + 8 | 0;
 $15 = ($4 | 0) == 1;
 $16 = ($3 | 0) == 3;
 $17 = 1 << $3;
 $$06 = $6;
 $$08 = $12;
 L1 : while (1) {
  if (($$06 | 0) >= ($7 | 0)) break;
  $19 = HEAP32[$13 >> 2] | 0;
  $20 = $$06 + 1 | 0;
  $27 = (HEAP16[$19 + ($20 << 1) >> 1] | 0) - (HEAP16[$19 + ($$06 << 1) >> 1] | 0) | 0;
  $39 = +Math_exp(+(+((_celt_udiv((HEAP32[$11 + ($$06 << 2) >> 2] | 0) + 1 | 0, $27) | 0) >>> $3 | 0) * -.125 * .6931471805599453)) * .5;
  $40 = $27 << $3;
  $44 = 1.0 / +Math_sqrt(+(+($40 | 0)));
  $45 = Math_imul($$06, $4) | 0;
  $$07 = 0;
  $$19 = $$08;
  while (1) {
   $46 = HEAP32[$14 >> 2] | 0;
   $48 = (Math_imul($$07, $46) | 0) + $$06 | 0;
   $50 = +HEAPF32[$9 + ($48 << 2) >> 2];
   $52 = +HEAPF32[$10 + ($48 << 2) >> 2];
   if ($15) {
    $53 = $46 + $$06 | 0;
    $55 = +HEAPF32[$9 + ($53 << 2) >> 2];
    $57 = $50 > $55 ? $50 : $55;
    $59 = +HEAPF32[$10 + ($53 << 2) >> 2];
    if ($52 > $59) {
     $$02 = $52;
     $$03 = $57;
    } else {
     $$02 = $59;
     $$03 = $57;
    }
   } else {
    $$02 = $52;
    $$03 = $50;
   }
   $65 = +HEAPF32[$8 + ($48 << 2) >> 2] - ($$03 < $$02 ? $$03 : $$02);
   $73 = +Math_exp(+(-($65 < 0.0 ? 0.0 : $65) * .6931471805599453)) * 2.0;
   $$ = $16 ? $73 * 1.4142135381698608 : $73;
   $77 = ($39 < $$ ? $39 : $$) * $44;
   $79 = $1 + ((Math_imul($$07, $5) | 0) << 2) | 0;
   $85 = $79 + (HEAP16[(HEAP32[$13 >> 2] | 0) + ($$06 << 1) >> 1] << $3 << 2) | 0;
   $87 = $2 + ($45 + $$07) | 0;
   $88 = -$77;
   $$0 = 0;
   $$04 = 0;
   $$2 = $$19;
   while (1) {
    if (($$04 | 0) >= ($17 | 0)) break;
    L13 : do if (!(HEAPU8[$87 >> 0] & 1 << $$04)) {
     $$05 = 0;
     $$3 = $$2;
     while (1) {
      if (($$05 | 0) >= ($27 | 0)) {
       $$1 = 1;
       $$4 = $$3;
       break L13;
      }
      $96 = _celt_lcg_rand($$3) | 0;
      HEAPF32[$85 + (($$05 << $3) + $$04 << 2) >> 2] = ($96 & 32768 | 0) == 0 ? $88 : $77;
      $$05 = $$05 + 1 | 0;
      $$3 = $96;
     }
    } else {
     $$1 = $$0;
     $$4 = $$2;
    } while (0);
    $$0 = $$1;
    $$04 = $$04 + 1 | 0;
    $$2 = $$4;
   }
   if ($$0 | 0) _renormalise_vector($85, $40, 1.0);
   $105 = $$07 + 1 | 0;
   if (($105 | 0) < ($4 | 0)) {
    $$07 = $105;
    $$19 = $$2;
   } else {
    $$06 = $20;
    $$08 = $$2;
    continue L1;
   }
  }
 }
 return;
}

function _quant_band($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 $7 = $7 | 0;
 $8 = +$8;
 $9 = $9 | 0;
 $10 = $10 | 0;
 var $$ = 0, $$0 = 0, $$01 = 0, $$011 = 0, $$012 = 0, $$014 = 0, $$02 = 0, $$03 = 0, $$04 = 0, $$07 = 0, $$09 = 0, $$1 = 0, $$113 = 0, $$115 = 0, $$15 = 0, $$18 = 0, $$2 = 0, $11 = 0, $13 = 0, $15 = 0, $16 = 0, $27 = 0, $28 = 0, $51 = 0, $56 = 0, $61 = 0, $68 = 0, $69 = 0, $75 = 0, $80 = 0, $84 = 0.0;
 $11 = HEAP32[$0 >> 2] | 0;
 $13 = HEAP32[$0 + 24 >> 2] | 0;
 $15 = ($4 | 0) == 1 & 1;
 $16 = _celt_udiv($2, $4) | 0;
 if (($2 | 0) == 1) {
  _quant_band_n1($0, $1, 0, $3, $7);
  $$0 = 1;
  return $$0 | 0;
 }
 $$ = ($13 | 0) > 0 ? $13 : 0;
 do if (!$9) $$09 = $5; else if (!$5) $$09 = 0; else {
  if (($13 | 0) < 1) if (!(($16 & 1 | 0) == 0 & ($13 | 0) != 0 | ($4 | 0) > 1)) {
   $$09 = $5;
   break;
  }
  _memcpy($9 | 0, $5 | 0, $2 << 2 | 0) | 0;
  $$09 = $9;
 } while (0);
 $27 = ($11 | 0) == 0;
 $28 = ($$09 | 0) == 0;
 $$014 = $10;
 $$03 = 0;
 while (1) {
  if (($$03 | 0) >= ($$ | 0)) break;
  if (!$27) _haar1($1, $2 >> $$03, 1 << $$03);
  if (!$28) _haar1($$09, $2 >> $$03, 1 << $$03);
  $$014 = HEAPU8[23614 + ($$014 & 15) >> 0] | 0 | (HEAPU8[23614 + ($$014 >> 4) >> 0] | 0) << 2;
  $$03 = $$03 + 1 | 0;
 }
 $$011 = 0;
 $$012 = $16 << $$;
 $$02 = $13;
 $$07 = $4 >> $$;
 $$115 = $$014;
 while (1) {
  if (!(($$012 & 1 | 0) == 0 & ($$02 | 0) < 0)) break;
  if (!$27) _haar1($1, $$012, $$07);
  if (!$28) _haar1($$09, $$012, $$07);
  $51 = $$115 | $$115 << $$07;
  $$011 = $$011 + 1 | 0;
  $$012 = $$012 >> 1;
  $$02 = $$02 + 1 | 0;
  $$07 = $$07 << 1;
  $$115 = $51;
 }
 $56 = ($$07 | 0) > 1;
 if ($56) {
  if (!$27) _deinterleave_hadamard($1, $$012 >> $$, $$07 << $$, $15);
  if (!$28) _deinterleave_hadamard($$09, $$012 >> $$, $$07 << $$, $15);
 }
 $61 = _quant_partition($0, $1, $2, $3, $$07, $$09, $6, $8, $$115) | 0;
 if (!(HEAP32[$0 + 4 >> 2] | 0)) {
  $$0 = $61;
  return $$0 | 0;
 }
 if ($56) {
  _interleave_hadamard($1, $$012 >> $$, $$07 << $$, $15);
  $$04 = $61;
  $$1 = 0;
  $$113 = $$012;
  $$18 = $$07;
 } else {
  $$04 = $61;
  $$1 = 0;
  $$113 = $$012;
  $$18 = $$07;
 }
 while (1) {
  if (($$1 | 0) >= ($$011 | 0)) {
   $$15 = $$04;
   $$2 = 0;
   break;
  }
  $68 = $$18 >> 1;
  $69 = $$113 << 1;
  _haar1($1, $69, $68);
  $$04 = $$04 | $$04 >>> $68;
  $$1 = $$1 + 1 | 0;
  $$113 = $69;
  $$18 = $68;
 }
 while (1) {
  if (($$2 | 0) >= ($$ | 0)) break;
  $75 = HEAP8[23630 + $$15 >> 0] | 0;
  _haar1($1, $2 >> $$2, 1 << $$2);
  $$15 = $75 & 255;
  $$2 = $$2 + 1 | 0;
 }
 $80 = $$18 << $$;
 L51 : do if ($7 | 0) {
  $84 = +Math_sqrt(+(+($2 | 0)));
  $$01 = 0;
  while (1) {
   if (($$01 | 0) >= ($2 | 0)) break L51;
   HEAPF32[$7 + ($$01 << 2) >> 2] = $84 * +HEAPF32[$1 + ($$01 << 2) >> 2];
   $$01 = $$01 + 1 | 0;
  }
 } while (0);
 $$0 = $$15 & (1 << $80) + -1;
 return $$0 | 0;
}

function _clt_mdct_backward_c($0, $1, $2, $3, $4, $5, $6) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 var $$0 = 0, $$01 = 0, $$010 = 0, $$011 = 0, $$02 = 0, $$03 = 0, $$04 = 0, $$05 = 0, $$06 = 0, $$07 = 0, $$08 = 0, $$09 = 0, $$1 = 0, $$2 = 0, $$3 = 0, $$pn = 0, $$pn1 = 0, $$pn2 = 0, $11 = 0, $14 = 0, $17 = 0, $19 = 0, $21 = 0, $24 = 0, $25 = 0, $29 = 0.0, $31 = 0.0, $33 = 0.0, $36 = 0.0, $42 = 0, $52 = 0, $54 = 0, $55 = 0.0, $56 = 0.0, $58 = 0.0, $61 = 0.0, $68 = 0, $69 = 0.0, $70 = 0.0, $74 = 0.0, $78 = 0.0, $89 = 0, $91 = 0.0, $92 = 0.0, $93 = 0.0, $95 = 0.0;
 $$011 = HEAP32[$0 + 24 >> 2] | 0;
 $$08 = 0;
 $$09 = HEAP32[$0 >> 2] | 0;
 while (1) {
  $11 = $$09 >> 1;
  if (($$08 | 0) >= ($5 | 0)) break;
  $$011 = $$011 + ($11 << 2) | 0;
  $$08 = $$08 + 1 | 0;
  $$09 = $11;
 }
 $14 = $$09 >> 2;
 $17 = $1 + ((Math_imul($11 + -1 | 0, $6) | 0) << 2) | 0;
 $19 = $2 + ($4 >> 1 << 2) | 0;
 $21 = HEAP32[$0 + 8 + ($5 << 2) >> 2] | 0;
 $24 = $6 << 1;
 $25 = 0 - $24 | 0;
 $$010 = $1;
 $$06 = HEAP32[$21 + 44 >> 2] | 0;
 $$07 = $17;
 $$1 = 0;
 while (1) {
  if (($$1 | 0) >= ($14 | 0)) break;
  $29 = +HEAPF32[$$07 >> 2];
  $31 = +HEAPF32[$$011 + ($$1 << 2) >> 2];
  $33 = +HEAPF32[$$010 >> 2];
  $36 = +HEAPF32[$$011 + ($14 + $$1 << 2) >> 2];
  $42 = HEAP16[$$06 >> 1] << 1;
  HEAPF32[$19 + (($42 | 1) << 2) >> 2] = $29 * $31 + $33 * $36;
  HEAPF32[$19 + ($42 << 2) >> 2] = $33 * $31 - $29 * $36;
  $$010 = $$010 + ($24 << 2) | 0;
  $$06 = $$06 + 2 | 0;
  $$07 = $$07 + ($25 << 2) | 0;
  $$1 = $$1 + 1 | 0;
 }
 _opus_fft_impl($21, $19);
 $52 = $14 + 1 >> 1;
 $$05 = $19;
 $$2 = 0;
 $$pn = $19 + ($11 << 2) | 0;
 while (1) {
  $$04 = $$pn + -8 | 0;
  if (($$2 | 0) >= ($52 | 0)) break;
  $54 = $$05 + 4 | 0;
  $55 = +HEAPF32[$54 >> 2];
  $56 = +HEAPF32[$$05 >> 2];
  $58 = +HEAPF32[$$011 + ($$2 << 2) >> 2];
  $61 = +HEAPF32[$$011 + ($14 + $$2 << 2) >> 2];
  $68 = $$pn + -4 | 0;
  $69 = +HEAPF32[$68 >> 2];
  $70 = +HEAPF32[$$04 >> 2];
  HEAPF32[$$05 >> 2] = $55 * $58 + $56 * $61;
  HEAPF32[$68 >> 2] = $55 * $61 - $56 * $58;
  $74 = +HEAPF32[$$011 + ($14 - $$2 + -1 << 2) >> 2];
  $78 = +HEAPF32[$$011 + ($11 - $$2 + -1 << 2) >> 2];
  HEAPF32[$$04 >> 2] = $69 * $74 + $70 * $78;
  HEAPF32[$54 >> 2] = $69 * $78 - $70 * $74;
  $$05 = $$05 + 8 | 0;
  $$2 = $$2 + 1 | 0;
  $$pn = $$04;
 }
 $89 = ($4 | 0) / 2 | 0;
 $$01 = $3;
 $$02 = $2;
 $$3 = 0;
 $$pn1 = $2 + ($4 << 2) | 0;
 $$pn2 = $3 + ($4 << 2) | 0;
 while (1) {
  $$0 = $$pn2 + -4 | 0;
  $$03 = $$pn1 + -4 | 0;
  if (($$3 | 0) >= ($89 | 0)) break;
  $91 = +HEAPF32[$$03 >> 2];
  $92 = +HEAPF32[$$02 >> 2];
  $93 = +HEAPF32[$$0 >> 2];
  $95 = +HEAPF32[$$01 >> 2];
  HEAPF32[$$02 >> 2] = $93 * $92 - $95 * $91;
  HEAPF32[$$03 >> 2] = $95 * $92 + $93 * $91;
  $$01 = $$01 + 4 | 0;
  $$02 = $$02 + 4 | 0;
  $$3 = $$3 + 1 | 0;
  $$pn1 = $$03;
  $$pn2 = $$0;
 }
 return;
}

function _celt_iir($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $$0 = 0.0, $$01 = 0, $$02 = 0, $$1 = 0, $$2 = 0, $$3 = 0, $$4 = 0, $$5 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $31 = 0, $37 = 0, $40 = 0, $43 = 0, $47 = 0.0, $48 = 0.0, $5 = 0, $55 = 0.0, $56 = 0.0, $6 = 0, $66 = 0.0, $67 = 0.0, $7 = 0, $8 = 0, $80 = 0.0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 $5 = sp + 96 | 0;
 $6 = sp;
 $7 = $3 + 24 | 0;
 $8 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($7 << 2) | 0) + 15 & -16) | 0;
 $$02 = 0;
 while (1) {
  if (($$02 | 0) == 24) break;
  HEAP32[$6 + ($$02 << 2) >> 2] = HEAP32[$1 + (24 - $$02 + -1 << 2) >> 2];
  $$02 = $$02 + 1 | 0;
 }
 $$1 = 0;
 while (1) {
  if (($$1 | 0) == 24) {
   $$2 = 24;
   break;
  }
  HEAPF32[$8 + ($$1 << 2) >> 2] = -+HEAPF32[$4 + (24 - $$1 + -1 << 2) >> 2];
  $$1 = $$1 + 1 | 0;
 }
 while (1) {
  if (($$2 | 0) >= ($7 | 0)) break;
  HEAPF32[$8 + ($$2 << 2) >> 2] = 0.0;
  $$2 = $$2 + 1 | 0;
 }
 $23 = $3 + -3 | 0;
 $24 = $5 + 4 | 0;
 $25 = $5 + 8 | 0;
 $26 = $5 + 12 | 0;
 $27 = $1 + 4 | 0;
 $28 = $1 + 8 | 0;
 $31 = (($23 | 0) > 0 ? $23 : 0) + 3 & -4;
 $$3 = 0;
 while (1) {
  if (($$3 | 0) >= ($23 | 0)) {
   $$4 = $31;
   break;
  }
  HEAP32[$5 >> 2] = HEAP32[$0 + ($$3 << 2) >> 2];
  $37 = $$3 | 1;
  HEAP32[$24 >> 2] = HEAP32[$0 + ($37 << 2) >> 2];
  $40 = $$3 | 2;
  HEAP32[$25 >> 2] = HEAP32[$0 + ($40 << 2) >> 2];
  $43 = $$3 | 3;
  HEAP32[$26 >> 2] = HEAP32[$0 + ($43 << 2) >> 2];
  _xcorr_kernel_c_62($6, $8 + ($$3 << 2) | 0, $5, 24);
  $47 = +HEAPF32[$5 >> 2];
  $48 = -$47;
  HEAPF32[$8 + ($$3 + 24 << 2) >> 2] = $48;
  HEAPF32[$2 + ($$3 << 2) >> 2] = $47;
  $55 = +HEAPF32[$24 >> 2] + +HEAPF32[$1 >> 2] * $48;
  HEAPF32[$24 >> 2] = $55;
  $56 = -$55;
  HEAPF32[$8 + ($$3 + 25 << 2) >> 2] = $56;
  HEAPF32[$2 + ($37 << 2) >> 2] = $55;
  $66 = +HEAPF32[$25 >> 2] + +HEAPF32[$1 >> 2] * $56 + +HEAPF32[$27 >> 2] * $48;
  HEAPF32[$25 >> 2] = $66;
  $67 = -$66;
  HEAPF32[$8 + ($$3 + 26 << 2) >> 2] = $67;
  HEAPF32[$2 + ($40 << 2) >> 2] = $66;
  $80 = +HEAPF32[$26 >> 2] + +HEAPF32[$1 >> 2] * $67 + +HEAPF32[$27 >> 2] * $56 + +HEAPF32[$28 >> 2] * $48;
  HEAPF32[$26 >> 2] = $80;
  HEAPF32[$8 + ($$3 + 27 << 2) >> 2] = -$80;
  HEAPF32[$2 + ($43 << 2) >> 2] = $80;
  $$3 = $$3 + 4 | 0;
 }
 while (1) {
  if (($$4 | 0) >= ($3 | 0)) {
   $$5 = 0;
   break;
  }
  $$0 = +HEAPF32[$0 + ($$4 << 2) >> 2];
  $$01 = 0;
  while (1) {
   if (($$01 | 0) == 24) break;
   $$0 = $$0 - +HEAPF32[$6 + ($$01 << 2) >> 2] * +HEAPF32[$8 + ($$4 + $$01 << 2) >> 2];
   $$01 = $$01 + 1 | 0;
  }
  HEAPF32[$8 + ($$4 + 24 << 2) >> 2] = $$0;
  HEAPF32[$2 + ($$4 << 2) >> 2] = $$0;
  $$4 = $$4 + 1 | 0;
 }
 while (1) {
  if (($$5 | 0) == 24) break;
  HEAP32[$4 + ($$5 << 2) >> 2] = HEAP32[$2 + ($3 - $$5 + -1 << 2) >> 2];
  $$5 = $$5 + 1 | 0;
 }
 STACKTOP = sp;
 return;
}

function _speex_resampler_process_float($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$$01 = 0, $$01 = 0, $$01$ph = 0, $$015 = 0, $$03$ph = 0, $$05 = 0, $$1 = 0, $$1$ph = 0, $$12 = 0, $$16 = 0, $$2 = 0, $10 = 0, $14 = 0, $16 = 0, $19 = 0, $20 = 0, $22 = 0, $23 = 0, $29 = 0, $30 = 0, $31 = 0, $36 = 0, $44 = 0, $48 = 0, $49 = 0, $51 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $7 = 0, $8 = 0, $9 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 $6 = sp + 8 | 0;
 $7 = sp + 4 | 0;
 $8 = sp;
 HEAP32[$6 >> 2] = $4;
 $9 = HEAP32[$3 >> 2] | 0;
 $10 = HEAP32[$5 >> 2] | 0;
 $14 = HEAP32[$0 + 28 >> 2] | 0;
 $16 = (HEAP32[$0 + 72 >> 2] | 0) + ((Math_imul($14, $1) | 0) << 2) | 0;
 $19 = (HEAP32[$0 + 24 >> 2] | 0) + -1 | 0;
 $20 = $14 - $19 | 0;
 $22 = HEAP32[$0 + 88 >> 2] | 0;
 $23 = $0 + 68 | 0;
 if (!(HEAP32[(HEAP32[$23 >> 2] | 0) + ($1 << 2) >> 2] | 0)) $$015 = $10; else {
  $29 = $10 - (_speex_resampler_magic($0, $1, $6, $10) | 0) | 0;
  if (!(HEAP32[(HEAP32[$23 >> 2] | 0) + ($1 << 2) >> 2] | 0)) $$015 = $29; else {
   $$12 = $9;
   $$2 = $29;
   $58 = HEAP32[$3 >> 2] | 0;
   $59 = $58 - $$12 | 0;
   HEAP32[$3 >> 2] = $59;
   $60 = HEAP32[$5 >> 2] | 0;
   $61 = $60 - $$2 | 0;
   HEAP32[$5 >> 2] = $61;
   STACKTOP = sp;
   return;
  }
 }
 $30 = $0 + 92 | 0;
 $$01$ph = $9;
 $$03$ph = $2;
 $$1$ph = $$015;
 L5 : while (1) {
  $31 = ($$03$ph | 0) == 0;
  $$01 = $$01$ph;
  $$1 = $$1$ph;
  do {
   if (!(($$01 | 0) != 0 & ($$1 | 0) != 0)) {
    $$12 = $$01;
    $$2 = $$1;
    break L5;
   }
   $$$01 = $$01 >>> 0 > $20 >>> 0 ? $20 : $$01;
   HEAP32[$7 >> 2] = $$$01;
   HEAP32[$8 >> 2] = $$1;
   L10 : do if ($31) {
    $$16 = 0;
    $44 = $$$01;
    while (1) {
     if ($$16 >>> 0 >= $44 >>> 0) break L10;
     HEAPF32[$16 + ($$16 + $19 << 2) >> 2] = 0.0;
     $$16 = $$16 + 1 | 0;
     $44 = HEAP32[$7 >> 2] | 0;
    }
   } else {
    $$05 = 0;
    $36 = $$$01;
    while (1) {
     if ($$05 >>> 0 >= $36 >>> 0) break L10;
     HEAP32[$16 + ($$05 + $19 << 2) >> 2] = HEAP32[$$03$ph + ((Math_imul($$05, $22) | 0) << 2) >> 2];
     $$05 = $$05 + 1 | 0;
     $36 = HEAP32[$7 >> 2] | 0;
    }
   } while (0);
   $48 = HEAP32[$6 >> 2] | 0;
   _speex_resampler_process_native($0, $1, $7, $48, $8);
   $49 = HEAP32[$7 >> 2] | 0;
   $$01 = $$01 - $49 | 0;
   $51 = HEAP32[$8 >> 2] | 0;
   $$1 = $$1 - $51 | 0;
   HEAP32[$6 >> 2] = $48 + ((Math_imul($51, HEAP32[$30 >> 2] | 0) | 0) << 2);
  } while ($31);
  $$01$ph = $$01;
  $$03$ph = $$03$ph + ((Math_imul($49, $22) | 0) << 2) | 0;
  $$1$ph = $$1;
 }
 $58 = HEAP32[$3 >> 2] | 0;
 $59 = $58 - $$12 | 0;
 HEAP32[$3 >> 2] = $59;
 $60 = HEAP32[$5 >> 2] | 0;
 $61 = $60 - $$2 | 0;
 HEAP32[$5 >> 2] = $61;
 STACKTOP = sp;
 return;
}

function _resampler_basic_interpolate_single($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $$04 = 0, $$sroa$0$0 = 0.0, $$sroa$10$1 = 0.0, $$sroa$4$0 = 0.0, $$sroa$7$0 = 0.0, $13 = 0, $18 = 0, $20 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0.0, $43 = 0.0, $44 = 0, $45 = 0, $48 = 0, $6 = 0, $8 = 0, $85 = 0, $86 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 $6 = sp;
 $8 = HEAP32[$0 + 24 >> 2] | 0;
 $9 = $0 + 60 | 0;
 $13 = $0 + 64 | 0;
 $18 = HEAP32[$0 + 92 >> 2] | 0;
 $20 = HEAP32[$0 + 36 >> 2] | 0;
 $22 = HEAP32[$0 + 40 >> 2] | 0;
 $23 = $0 + 12 | 0;
 $24 = HEAP32[$23 >> 2] | 0;
 $25 = $0 + 48 | 0;
 $26 = $0 + 76 | 0;
 $27 = $6 + 4 | 0;
 $28 = $6 + 8 | 0;
 $29 = $6 + 12 | 0;
 $$01 = HEAP32[(HEAP32[$13 >> 2] | 0) + ($1 << 2) >> 2] | 0;
 $$02 = HEAP32[(HEAP32[$9 >> 2] | 0) + ($1 << 2) >> 2] | 0;
 $$04 = 0;
 while (1) {
  if (($$02 | 0) >= (HEAP32[$3 >> 2] | 0)) {
   label = 8;
   break;
  }
  if (($$04 | 0) >= (HEAP32[$5 >> 2] | 0)) {
   label = 8;
   break;
  }
  $34 = $2 + ($$02 << 2) | 0;
  $35 = HEAP32[$25 >> 2] | 0;
  $36 = Math_imul($$01, $35) | 0;
  $37 = HEAP32[$23 >> 2] | 0;
  $38 = ($36 >>> 0) / ($37 >>> 0) | 0;
  $39 = ($36 >>> 0) % ($37 >>> 0) | 0;
  $40 = +($37 >>> 0);
  $$0 = 0;
  $$sroa$0$0 = 0.0;
  $$sroa$10$1 = 0.0;
  $$sroa$4$0 = 0.0;
  $$sroa$7$0 = 0.0;
  while (1) {
   if (($$0 | 0) >= ($8 | 0)) break;
   $43 = +HEAPF32[$34 + ($$0 << 2) >> 2];
   $44 = HEAP32[$26 >> 2] | 0;
   $45 = $$0 + 1 | 0;
   $48 = (Math_imul($45, $35) | 0) + 4 - $38 | 0;
   $$0 = $45;
   $$sroa$0$0 = $$sroa$0$0 + $43 * +HEAPF32[$44 + ($48 + -2 << 2) >> 2];
   $$sroa$10$1 = $$sroa$10$1 + $43 * +HEAPF32[$44 + ($48 + 1 << 2) >> 2];
   $$sroa$4$0 = $$sroa$4$0 + $43 * +HEAPF32[$44 + ($48 + -1 << 2) >> 2];
   $$sroa$7$0 = $$sroa$7$0 + $43 * +HEAPF32[$44 + ($48 << 2) >> 2];
  }
  _cubic_coef(+($39 >>> 0) / $40, $6);
  HEAPF32[$4 + ((Math_imul($18, $$04) | 0) << 2) >> 2] = +HEAPF32[$6 >> 2] * $$sroa$0$0 + +HEAPF32[$27 >> 2] * $$sroa$4$0 + +HEAPF32[$28 >> 2] * $$sroa$7$0 + +HEAPF32[$29 >> 2] * $$sroa$10$1;
  $85 = $$01 + $22 | 0;
  $86 = $85 >>> 0 < $24 >>> 0;
  $$01 = $85 - ($86 ? 0 : $24) | 0;
  $$02 = $$02 + $20 + (($86 ^ 1) & 1) | 0;
  $$04 = $$04 + 1 | 0;
 }
 if ((label | 0) == 8) {
  HEAP32[(HEAP32[$9 >> 2] | 0) + ($1 << 2) >> 2] = $$02;
  HEAP32[(HEAP32[$13 >> 2] | 0) + ($1 << 2) >> 2] = $$01;
  STACKTOP = sp;
  return $$04 | 0;
 }
 return 0;
}

function _resampler_basic_interpolate_double($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $$04 = 0, $$sroa$0$1 = 0.0, $$sroa$10$1 = 0.0, $$sroa$4$1 = 0.0, $$sroa$7$1 = 0.0, $13 = 0, $18 = 0, $20 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0.0, $43 = 0.0, $44 = 0, $45 = 0, $48 = 0, $6 = 0, $8 = 0, $9 = 0, $94 = 0, $95 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 $6 = sp;
 $8 = HEAP32[$0 + 24 >> 2] | 0;
 $9 = $0 + 60 | 0;
 $13 = $0 + 64 | 0;
 $18 = HEAP32[$0 + 92 >> 2] | 0;
 $20 = HEAP32[$0 + 36 >> 2] | 0;
 $22 = HEAP32[$0 + 40 >> 2] | 0;
 $23 = $0 + 12 | 0;
 $24 = HEAP32[$23 >> 2] | 0;
 $25 = $0 + 48 | 0;
 $26 = $0 + 76 | 0;
 $27 = $6 + 4 | 0;
 $28 = $6 + 8 | 0;
 $29 = $6 + 12 | 0;
 $$01 = HEAP32[(HEAP32[$13 >> 2] | 0) + ($1 << 2) >> 2] | 0;
 $$02 = HEAP32[(HEAP32[$9 >> 2] | 0) + ($1 << 2) >> 2] | 0;
 $$04 = 0;
 while (1) {
  if (($$02 | 0) >= (HEAP32[$3 >> 2] | 0)) {
   label = 8;
   break;
  }
  if (($$04 | 0) >= (HEAP32[$5 >> 2] | 0)) {
   label = 8;
   break;
  }
  $34 = $2 + ($$02 << 2) | 0;
  $35 = HEAP32[$25 >> 2] | 0;
  $36 = Math_imul($$01, $35) | 0;
  $37 = HEAP32[$23 >> 2] | 0;
  $38 = ($36 >>> 0) / ($37 >>> 0) | 0;
  $39 = ($36 >>> 0) % ($37 >>> 0) | 0;
  $40 = +($37 >>> 0);
  $$0 = 0;
  $$sroa$0$1 = 0.0;
  $$sroa$10$1 = 0.0;
  $$sroa$4$1 = 0.0;
  $$sroa$7$1 = 0.0;
  while (1) {
   if (($$0 | 0) >= ($8 | 0)) break;
   $43 = +HEAPF32[$34 + ($$0 << 2) >> 2];
   $44 = HEAP32[$26 >> 2] | 0;
   $45 = $$0 + 1 | 0;
   $48 = (Math_imul($45, $35) | 0) + 4 - $38 | 0;
   $$0 = $45;
   $$sroa$0$1 = $$sroa$0$1 + $43 * +HEAPF32[$44 + ($48 + -2 << 2) >> 2];
   $$sroa$10$1 = $$sroa$10$1 + $43 * +HEAPF32[$44 + ($48 + 1 << 2) >> 2];
   $$sroa$4$1 = $$sroa$4$1 + $43 * +HEAPF32[$44 + ($48 + -1 << 2) >> 2];
   $$sroa$7$1 = $$sroa$7$1 + $43 * +HEAPF32[$44 + ($48 << 2) >> 2];
  }
  _cubic_coef(+($39 >>> 0) / $40, $6);
  HEAPF32[$4 + ((Math_imul($18, $$04) | 0) << 2) >> 2] = +HEAPF32[$6 >> 2] * $$sroa$0$1 + +HEAPF32[$27 >> 2] * $$sroa$4$1 + +HEAPF32[$28 >> 2] * $$sroa$7$1 + +HEAPF32[$29 >> 2] * $$sroa$10$1;
  $94 = $$01 + $22 | 0;
  $95 = $94 >>> 0 < $24 >>> 0;
  $$01 = $94 - ($95 ? 0 : $24) | 0;
  $$02 = $$02 + $20 + (($95 ^ 1) & 1) | 0;
  $$04 = $$04 + 1 | 0;
 }
 if ((label | 0) == 8) {
  HEAP32[(HEAP32[$9 >> 2] | 0) + ($1 << 2) >> 2] = $$02;
  HEAP32[(HEAP32[$13 >> 2] | 0) + ($1 << 2) >> 2] = $$01;
  STACKTOP = sp;
  return $$04 | 0;
 }
 return 0;
}

function _silk_decode_parameters($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $$01 = 0, $$1 = 0, $$pre = 0, $$sink = 0, $10 = 0, $15 = 0, $16 = 0, $21 = 0, $23 = 0, $26 = 0, $3 = 0, $4 = 0, $45 = 0, $66 = 0, $72 = 0, $73 = 0, $96 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 $3 = sp + 32 | 0;
 $4 = sp;
 $10 = $0 + 2324 | 0;
 _silk_gains_dequant($1 + 16 | 0, $0 + 2736 | 0, $0 + 2312 | 0, ($2 | 0) == 2 & 1, HEAP32[$10 >> 2] | 0);
 _silk_NLSF_decode($3, $0 + 2744 | 0, HEAP32[$0 + 2732 >> 2] | 0);
 $15 = $1 + 64 | 0;
 $16 = $0 + 2340 | 0;
 _silk_NLSF2A($15, $3, HEAP32[$16 >> 2] | 0);
 $21 = $0 + 2767 | 0;
 if ((HEAP32[$0 + 2376 >> 2] | 0) == 1) {
  HEAP8[$21 >> 0] = 4;
  label = 8;
 } else {
  $$pre = HEAP8[$21 >> 0] | 0;
  if ($$pre << 24 >> 24 < 4) {
   $23 = HEAP32[$16 >> 2] | 0;
   $$01 = 0;
   while (1) {
    if (($$01 | 0) >= ($23 | 0)) break;
    $26 = HEAP16[$0 + 2344 + ($$01 << 1) >> 1] | 0;
    HEAP16[$4 + ($$01 << 1) >> 1] = ($26 & 65535) + ((Math_imul($$pre << 24 >> 24, (HEAP16[$3 + ($$01 << 1) >> 1] | 0) - ($26 << 16 >> 16) | 0) | 0) >>> 2);
    $$01 = $$01 + 1 | 0;
   }
   _silk_NLSF2A($1 + 32 | 0, $4, $23);
  } else label = 8;
 }
 if ((label | 0) == 8) _memcpy($1 + 32 | 0, $15 | 0, HEAP32[$16 >> 2] << 1 | 0) | 0;
 $45 = HEAP32[$16 >> 2] | 0;
 _memcpy($0 + 2344 | 0, $3 | 0, $45 << 1 | 0) | 0;
 if (HEAP32[$0 + 4160 >> 2] | 0) {
  _silk_bwexpander($1 + 32 | 0, $45, 63570);
  _silk_bwexpander($15, HEAP32[$16 >> 2] | 0, 63570);
 }
 if ((HEAP8[$0 + 2765 >> 0] | 0) != 2) {
  _memset($1 | 0, 0, HEAP32[$10 >> 2] << 2 | 0) | 0;
  _memset($1 + 96 | 0, 0, (HEAP32[$10 >> 2] | 0) * 10 | 0) | 0;
  HEAP8[$0 + 2768 >> 0] = 0;
  $$sink = 0;
  $96 = $1 + 136 | 0;
  HEAP32[$96 >> 2] = $$sink;
  STACKTOP = sp;
  return;
 }
 _silk_decode_pitch(HEAP16[$0 + 2762 >> 1] | 0, HEAP8[$0 + 2764 >> 0] | 0, $1, HEAP32[$0 + 2316 >> 2] | 0, HEAP32[$10 >> 2] | 0);
 $66 = HEAP32[18772 + (HEAP8[$0 + 2768 >> 0] << 2) >> 2] | 0;
 $$0 = 0;
 while (1) {
  if (($$0 | 0) >= (HEAP32[$10 >> 2] | 0)) break;
  $72 = (HEAP8[$0 + 2740 + $$0 >> 0] | 0) * 5 | 0;
  $73 = $$0 * 5 | 0;
  $$1 = 0;
  while (1) {
   if (($$1 | 0) == 5) break;
   HEAP16[$1 + 96 + ($73 + $$1 << 1) >> 1] = HEAP8[$66 + ($72 + $$1) >> 0] << 7;
   $$1 = $$1 + 1 | 0;
  }
  $$0 = $$0 + 1 | 0;
 }
 $$sink = HEAP16[23008 + (HEAP8[$0 + 2769 >> 0] << 1) >> 1] | 0;
 $96 = $1 + 136 | 0;
 HEAP32[$96 >> 2] = $$sink;
 STACKTOP = sp;
 return;
}

function _pitch_downsample($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0.0, $$01 = 0, $$1 = 0, $$2 = 0, $$3 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $4 = 0, $45 = 0, $5 = 0, $59 = 0, $6 = 0, $60 = 0.0, $62 = 0.0, $67 = 0.0, $68 = 0, $7 = 0, $72 = 0.0, $75 = 0.0, $8 = 0, $80 = 0.0, $85 = 0.0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 $3 = sp + 56 | 0;
 $4 = sp + 40 | 0;
 $5 = sp + 20 | 0;
 $6 = sp;
 HEAP32[$5 >> 2] = 0;
 HEAP32[$5 + 4 >> 2] = 0;
 HEAP32[$5 + 8 >> 2] = 0;
 HEAP32[$5 + 12 >> 2] = 0;
 HEAP32[$5 + 16 >> 2] = 0;
 $$01 = 1;
 while (1) {
  $7 = HEAP32[$0 >> 2] | 0;
  if (($$01 | 0) == 1024) break;
  $8 = $$01 << 1;
  HEAPF32[$1 + ($$01 << 2) >> 2] = ((+HEAPF32[$7 + ($8 + -1 << 2) >> 2] + +HEAPF32[$7 + (($8 | 1) << 2) >> 2]) * .5 + +HEAPF32[$7 + ($8 << 2) >> 2]) * .5;
  $$01 = $$01 + 1 | 0;
 }
 HEAPF32[$1 >> 2] = (+HEAPF32[$7 + 4 >> 2] * .5 + +HEAPF32[$7 >> 2]) * .5;
 if (($2 | 0) == 2) {
  $30 = $0 + 4 | 0;
  $$1 = 1;
  while (1) {
   $31 = HEAP32[$30 >> 2] | 0;
   if (($$1 | 0) == 1024) break;
   $32 = $$1 << 1;
   $45 = $1 + ($$1 << 2) | 0;
   HEAPF32[$45 >> 2] = +HEAPF32[$45 >> 2] + ((+HEAPF32[$31 + ($32 + -1 << 2) >> 2] + +HEAPF32[$31 + (($32 | 1) << 2) >> 2]) * .5 + +HEAPF32[$31 + ($32 << 2) >> 2]) * .5;
   $$1 = $$1 + 1 | 0;
  }
  HEAPF32[$1 >> 2] = +HEAPF32[$1 >> 2] + (+HEAPF32[$31 + 4 >> 2] * .5 + +HEAPF32[$31 >> 2]) * .5;
 }
 __celt_autocorr($1, $3, 0, 0, 4, 1024);
 HEAPF32[$3 >> 2] = +HEAPF32[$3 >> 2] * 1.000100016593933;
 $$2 = 1;
 while (1) {
  if (($$2 | 0) == 5) break;
  $59 = $3 + ($$2 << 2) | 0;
  $60 = +HEAPF32[$59 >> 2];
  $62 = +($$2 | 0) * .00800000037997961;
  HEAPF32[$59 >> 2] = $60 - $60 * $62 * $62;
  $$2 = $$2 + 1 | 0;
 }
 __celt_lpc($4, $3, 4);
 $$0 = 1.0;
 $$3 = 0;
 while (1) {
  if (($$3 | 0) == 4) break;
  $67 = $$0 * .8999999761581421;
  $68 = $4 + ($$3 << 2) | 0;
  HEAPF32[$68 >> 2] = +HEAPF32[$68 >> 2] * $67;
  $$0 = $67;
  $$3 = $$3 + 1 | 0;
 }
 $72 = +HEAPF32[$4 >> 2];
 HEAPF32[$6 >> 2] = $72 + .800000011920929;
 $75 = +HEAPF32[$4 + 4 >> 2];
 HEAPF32[$6 + 4 >> 2] = $75 + $72 * .800000011920929;
 $80 = +HEAPF32[$4 + 8 >> 2];
 HEAPF32[$6 + 8 >> 2] = $80 + $75 * .800000011920929;
 $85 = +HEAPF32[$4 + 12 >> 2];
 HEAPF32[$6 + 12 >> 2] = $85 + $80 * .800000011920929;
 HEAPF32[$6 + 16 >> 2] = $85 * .800000011920929;
 _celt_fir5($1, $6, $1, 1024, $5);
 STACKTOP = sp;
 return;
}

function _silk_decoder_set_fs($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$013 = 0, $$014 = 0, $$015 = 0, $$016 = 0, $$sink = 0, $10 = 0, $11 = 0, $14 = 0, $19 = 0, $20 = 0, $26 = 0, $3 = 0, $30 = 0, $46 = 0, $6 = 0, label = 0;
 $3 = $1 << 16 >> 16;
 HEAP32[$0 + 2332 >> 2] = $3 * 5;
 $6 = $0 + 2324 | 0;
 $10 = Math_imul(HEAP32[$6 >> 2] << 16 >> 16, $3 * 327680 >> 16) | 0;
 $11 = $0 + 2316 | 0;
 $14 = $0 + 2320 | 0;
 if ((HEAP32[$11 >> 2] | 0) == ($1 | 0)) if ((HEAP32[$14 >> 2] | 0) == ($2 | 0)) {
  $$016 = 0;
  $46 = 1;
  label = 4;
 } else label = 3; else label = 3;
 if ((label | 0) == 3) {
  $19 = _silk_resampler_init($0 + 2432 | 0, $3 * 1e3 | 0, $2) | 0;
  HEAP32[$14 >> 2] = $2;
  $20 = (HEAP32[$11 >> 2] | 0) == ($1 | 0);
  if ($20) {
   $$016 = $19;
   $46 = $20;
   label = 4;
  } else {
   $30 = (HEAP32[$6 >> 2] | 0) == 4;
   HEAP32[$0 + 2384 >> 2] = ($1 | 0) == 8 ? ($30 ? 27139 : 27162) : $30 ? 27105 : 27150;
   $$015 = $19;
   label = 7;
  }
 }
 do if ((label | 0) == 4) if (($10 | 0) == (HEAP32[$0 + 2328 >> 2] | 0)) {
  $$013 = $$016;
  return $$013 | 0;
 } else {
  $26 = (HEAP32[$6 >> 2] | 0) == 4;
  HEAP32[$0 + 2384 >> 2] = ($1 | 0) == 8 ? ($26 ? 27139 : 27162) : $26 ? 27105 : 27150;
  if ($46) {
   $$014 = $$016;
   break;
  } else {
   $$015 = $$016;
   label = 7;
   break;
  }
 } while (0);
 if ((label | 0) == 7) {
  HEAP32[$0 + 2336 >> 2] = $3 * 20;
  switch ($1 | 0) {
  case 8:
  case 12:
   {
    HEAP32[$0 + 2340 >> 2] = 10;
    HEAP32[$0 + 2732 >> 2] = 18784;
    switch ($1 | 0) {
    case 8:
    case 12:
     {
      $$sink = ($1 | 0) == 12 ? 27031 : 27022;
      label = 10;
      break;
     }
    default:
     {}
    }
    break;
   }
  default:
   {
    HEAP32[$0 + 2340 >> 2] = 16;
    HEAP32[$0 + 2732 >> 2] = 18824;
    if (($1 | 0) == 16) {
     $$sink = ($1 | 0) == 16 ? 27037 : 27022;
     label = 10;
    }
   }
  }
  if ((label | 0) == 10) HEAP32[$0 + 2380 >> 2] = $$sink;
  HEAP32[$0 + 2376 >> 2] = 1;
  HEAP32[$0 + 2308 >> 2] = 100;
  HEAP8[$0 + 2312 >> 0] = 10;
  HEAP32[$0 + 4164 >> 2] = 0;
  _memset($0 + 1284 | 0, 0, 1024) | 0;
  $$014 = $$015;
 }
 HEAP32[$11 >> 2] = $1;
 HEAP32[$0 + 2328 >> 2] = $10;
 $$013 = $$014;
 return $$013 | 0;
}

function _comb_filter($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = +$5;
 $6 = +$6;
 $7 = $7 | 0;
 $8 = $8 | 0;
 $9 = $9 | 0;
 $10 = $10 | 0;
 var $$ = 0, $$0 = 0.0, $$0$phi = 0.0, $$01 = 0.0, $$01$phi = 0.0, $$02 = 0.0, $$02$phi = 0.0, $$03 = 0.0, $$04 = 0, $$05 = 0, $17 = 0, $20 = 0.0, $23 = 0.0, $26 = 0.0, $29 = 0.0, $32 = 0.0, $35 = 0.0, $55 = 0.0, $57 = 0.0, $58 = 0.0, $61 = 0.0, $63 = 0;
 if ($5 == 0.0 & $6 == 0.0) {
  if (($1 | 0) == ($0 | 0)) return;
  _memmove($0 | 0, $1 | 0, $4 << 2 | 0) | 0;
  return;
 }
 $$ = ($2 | 0) > 15 ? $2 : 15;
 $17 = ($3 | 0) > 15 ? $3 : 15;
 $20 = +HEAPF32[1536 + ($7 * 12 | 0) >> 2] * $5;
 $23 = +HEAPF32[1536 + ($7 * 12 | 0) + 4 >> 2] * $5;
 $26 = +HEAPF32[1536 + ($7 * 12 | 0) + 8 >> 2] * $5;
 $29 = +HEAPF32[1536 + ($8 * 12 | 0) >> 2] * $6;
 $32 = +HEAPF32[1536 + ($8 * 12 | 0) + 4 >> 2] * $6;
 $35 = +HEAPF32[1536 + ($8 * 12 | 0) + 8 >> 2] * $6;
 $$05 = $5 == $6 & ($$ | 0) == ($17 | 0) & ($7 | 0) == ($8 | 0) ? 0 : $10;
 $$0 = +HEAPF32[$1 + (-2 - $17 << 2) >> 2];
 $$01 = +HEAPF32[$1 + (~$17 << 2) >> 2];
 $$02 = +HEAPF32[$1 + (0 - $17 << 2) >> 2];
 $$03 = +HEAPF32[$1 + (1 - $17 << 2) >> 2];
 $$04 = 0;
 while (1) {
  if (($$04 | 0) >= ($$05 | 0)) break;
  $55 = +HEAPF32[$1 + ($$04 - $17 + 2 << 2) >> 2];
  $57 = +HEAPF32[$9 + ($$04 << 2) >> 2];
  $58 = $57 * $57;
  $61 = 1.0 - $58;
  $63 = $$04 - $$ | 0;
  HEAPF32[$0 + ($$04 << 2) >> 2] = +HEAPF32[$1 + ($$04 << 2) >> 2] + $61 * $20 * +HEAPF32[$1 + ($63 << 2) >> 2] + $61 * $23 * (+HEAPF32[$1 + ($63 + 1 << 2) >> 2] + +HEAPF32[$1 + ($63 + -1 << 2) >> 2]) + $61 * $26 * (+HEAPF32[$1 + ($63 + 2 << 2) >> 2] + +HEAPF32[$1 + ($63 + -2 << 2) >> 2]) + $58 * $29 * $$02 + $58 * $32 * ($$03 + $$01) + $58 * $35 * ($55 + $$0);
  $$02$phi = $$03;
  $$01$phi = $$02;
  $$0$phi = $$01;
  $$03 = $55;
  $$04 = $$04 + 1 | 0;
  $$02 = $$02$phi;
  $$01 = $$01$phi;
  $$0 = $$0$phi;
 }
 if (!($6 == 0.0)) {
  _comb_filter_const_c($0 + ($$04 << 2) | 0, $1 + ($$04 << 2) | 0, $17, $4 - $$04 | 0, $29, $32, $35);
  return;
 }
 if (($1 | 0) == ($0 | 0)) return;
 _memmove($0 + ($$05 << 2) | 0, $1 + ($$05 << 2) | 0, $4 - $$05 << 2 | 0) | 0;
 return;
}

function _pitch_search($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$01 = 0, $$03 = 0, $$12 = 0, $$2 = 0, $10 = 0, $22 = 0, $25 = 0, $26 = 0, $27 = 0, $3 = 0, $30 = 0, $34 = 0.0, $38 = 0, $4 = 0, $42 = 0.0, $44 = 0.0, $47 = 0.0, $56 = 0, $57 = 0, $8 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 4528 | 0;
 $3 = sp;
 $4 = $3;
 HEAP32[$4 >> 2] = 0;
 HEAP32[$4 + 4 >> 2] = 0;
 $8 = sp + 3200 | 0;
 $9 = sp + 1248 | 0;
 $10 = sp + 8 | 0;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) == 332) break;
  HEAP32[$8 + ($$01 << 2) >> 2] = HEAP32[$0 + ($$01 << 1 << 2) >> 2];
  $$01 = $$01 + 1 | 0;
 }
 $$12 = 0;
 while (1) {
  if (($$12 | 0) == 487) break;
  HEAP32[$9 + ($$12 << 2) >> 2] = HEAP32[$1 + ($$12 << 1 << 2) >> 2];
  $$12 = $$12 + 1 | 0;
 }
 _celt_pitch_xcorr_c($8, $9, $10, 332, 155);
 _find_best_pitch($10, $9, 332, 155, $3);
 $22 = HEAP32[$3 >> 2] << 1;
 $25 = HEAP32[$3 + 4 >> 2] << 1;
 $$03 = 0;
 while (1) {
  if (($$03 | 0) == 310) break;
  $26 = $10 + ($$03 << 2) | 0;
  HEAPF32[$26 >> 2] = 0.0;
  $27 = $$03 - $22 | 0;
  if (((($27 | 0) > -1 ? $27 : 0 - $27 | 0) | 0) > 2) {
   $30 = $$03 - $25 | 0;
   if (((($30 | 0) > -1 ? $30 : 0 - $30 | 0) | 0) <= 2) label = 11;
  } else label = 11;
  if ((label | 0) == 11) {
   label = 0;
   $34 = +_celt_inner_prod_c_51($0, $1 + ($$03 << 2) | 0, 664);
   HEAPF32[$26 >> 2] = $34 < -1.0 ? -1.0 : $34;
  }
  $$03 = $$03 + 1 | 0;
 }
 _find_best_pitch($10, $1, 664, 310, $3);
 $38 = HEAP32[$3 >> 2] | 0;
 if (($38 + -1 | 0) >>> 0 >= 308) {
  $$2 = 0;
  $56 = $38 << 1;
  $57 = $56 - $$2 | 0;
  HEAP32[$2 >> 2] = $57;
  STACKTOP = sp;
  return;
 }
 $42 = +HEAPF32[$10 + ($38 + -1 << 2) >> 2];
 $44 = +HEAPF32[$10 + ($38 << 2) >> 2];
 $47 = +HEAPF32[$10 + ($38 + 1 << 2) >> 2];
 if ($47 - $42 > ($44 - $42) * .699999988079071) {
  $$2 = 1;
  $56 = $38 << 1;
  $57 = $56 - $$2 | 0;
  HEAP32[$2 >> 2] = $57;
  STACKTOP = sp;
  return;
 }
 if ($42 - $47 > ($44 - $47) * .699999988079071) {
  $$2 = -1;
  $56 = $38 << 1;
  $57 = $56 - $$2 | 0;
  HEAP32[$2 >> 2] = $57;
  STACKTOP = sp;
  return;
 }
 $$2 = 0;
 $56 = $38 << 1;
 $57 = $56 - $$2 | 0;
 HEAP32[$2 >> 2] = $57;
 STACKTOP = sp;
 return;
}

function _silk_decode_pulses($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $$ = 0, $$0 = 0, $$02 = 0, $$03 = 0, $$04 = 0, $$1 = 0, $$2 = 0, $10 = 0, $14 = 0, $16 = 0, $17 = 0, $18 = 0, $20 = 0, $21 = 0, $22 = 0, $30 = 0, $33 = 0, $37 = 0, $40 = 0, $41 = 0, $5 = 0, $51 = 0, $6 = 0, dest = 0, sp = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 $5 = sp + 80 | 0;
 $6 = sp;
 $10 = $4 >> 4;
 $$ = $10 + (($10 << 4 | 0) < ($4 | 0) & 1) | 0;
 $14 = 27165 + ((_ec_dec_icdf($0, 27345 + (($2 >> 1) * 9 | 0) | 0, 8) | 0) * 18 | 0) | 0;
 $$04 = 0;
 while (1) {
  if (($$04 | 0) >= ($$ | 0)) {
   $$1 = 0;
   break;
  }
  $16 = $6 + ($$04 << 2) | 0;
  HEAP32[$16 >> 2] = 0;
  $17 = _ec_dec_icdf($0, $14, 8) | 0;
  $18 = $5 + ($$04 << 2) | 0;
  HEAP32[$18 >> 2] = $17;
  $20 = $17;
  $22 = 0;
  while (1) {
   if (($20 | 0) != 17) break;
   $21 = $22 + 1 | 0;
   HEAP32[$16 >> 2] = $21;
   $20 = _ec_dec_icdf($0, 27327 + (($21 | 0) == 10 & 1) | 0, 8) | 0;
   $22 = $21;
  }
  HEAP32[$18 >> 2] = $20;
  $$04 = $$04 + 1 | 0;
 }
 while (1) {
  if (($$1 | 0) >= ($$ | 0)) {
   $$2 = 0;
   break;
  }
  $30 = HEAP32[$5 + ($$1 << 2) >> 2] | 0;
  $33 = $1 + ($$1 << 16 >> 12 << 1) | 0;
  if (($30 | 0) > 0) _silk_shell_decoder($33, $0, $30); else {
   dest = $33;
   stop = dest + 32 | 0;
   do {
    HEAP16[dest >> 1] = 0;
    dest = dest + 2 | 0;
   } while ((dest | 0) < (stop | 0));
  }
  $$1 = $$1 + 1 | 0;
 }
 while (1) {
  if (($$2 | 0) >= ($$ | 0)) break;
  $37 = HEAP32[$6 + ($$2 << 2) >> 2] | 0;
  if (($37 | 0) > 0) {
   $40 = $1 + ($$2 << 16 >> 12 << 1) | 0;
   $$02 = 0;
   while (1) {
    if (($$02 | 0) == 16) break;
    $41 = $40 + ($$02 << 1) | 0;
    $$0 = HEAP16[$41 >> 1] | 0;
    $$03 = 0;
    while (1) {
     if (($$03 | 0) == ($37 | 0)) break;
     $$0 = ($$0 << 1) + (_ec_dec_icdf($0, 27003, 8) | 0) | 0;
     $$03 = $$03 + 1 | 0;
    }
    HEAP16[$41 >> 1] = $$0;
    $$02 = $$02 + 1 | 0;
   }
   $51 = $5 + ($$2 << 2) | 0;
   HEAP32[$51 >> 2] = HEAP32[$51 >> 2] | $37 << 5;
  }
  $$2 = $$2 + 1 | 0;
 }
 _silk_decode_signs($0, $1, $4, $2, $3, $5);
 STACKTOP = sp;
 return;
}

function _deemphasis($0, $1, $2, $3, $4, $5, $6, $7) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 $7 = $7 | 0;
 var $$0 = 0.0, $$01 = 0, $$04 = 0, $$06 = 0, $$1 = 0.0, $$12 = 0, $$157 = 0, $$158 = 0, $$23 = 0, $12 = 0, $13 = 0, $14 = 0.0, $15 = 0, $16 = 0, $17 = 0, $18 = 0.0, $20 = 0, $21 = 0, $26 = 0.0, $34 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 if (($4 | 0) == 1 & ($3 | 0) == 2 & ($7 | 0) == 0) {
  _deemphasis_stereo_simple(HEAP32[$0 >> 2] | 0, HEAP32[$0 + 4 >> 2] | 0, $1, $2, +HEAPF32[$5 >> 2], $6);
  STACKTOP = sp;
  return;
 }
 $12 = _llvm_stacksave() | 0;
 $13 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($2 << 2) | 0) + 15 & -16) | 0;
 $14 = +HEAPF32[$5 >> 2];
 $15 = ($2 | 0) / ($4 | 0) | 0;
 $16 = ($4 | 0) > 1;
 $$04 = 0;
 $$06 = 0;
 while (1) {
  $17 = $6 + ($$06 << 2) | 0;
  $18 = +HEAPF32[$17 >> 2];
  $20 = HEAP32[$0 + ($$06 << 2) >> 2] | 0;
  $21 = $1 + ($$06 << 2) | 0;
  if ($16) {
   $$0 = $18;
   $$01 = 0;
   while (1) {
    if (($$01 | 0) >= ($2 | 0)) break;
    $26 = +HEAPF32[$20 + ($$01 << 2) >> 2] + 1.0000000031710769e-30 + $$0;
    HEAPF32[$13 + ($$01 << 2) >> 2] = $26;
    $$0 = $14 * $26;
    $$01 = $$01 + 1 | 0;
   }
   HEAPF32[$17 >> 2] = $$0;
   $$157 = 1;
   label = 11;
  } else {
   $$1 = $18;
   $$12 = 0;
   while (1) {
    if (($$12 | 0) >= ($2 | 0)) break;
    $34 = +HEAPF32[$20 + ($$12 << 2) >> 2] + 1.0000000031710769e-30 + $$1;
    HEAPF32[$21 + ((Math_imul($$12, $3) | 0) << 2) >> 2] = $34 * .000030517578125;
    $$1 = $14 * $34;
    $$12 = $$12 + 1 | 0;
   }
   HEAPF32[$17 >> 2] = $$1;
   if (!$$04) $$158 = 0; else {
    $$157 = $$04;
    label = 11;
   }
  }
  L16 : do if ((label | 0) == 11) {
   label = 0;
   $$23 = 0;
   while (1) {
    if (($$23 | 0) >= ($15 | 0)) {
     $$158 = $$157;
     break L16;
    }
    HEAPF32[$21 + ((Math_imul($$23, $3) | 0) << 2) >> 2] = +HEAPF32[$13 + ((Math_imul($$23, $4) | 0) << 2) >> 2] * .000030517578125;
    $$23 = $$23 + 1 | 0;
   }
  } while (0);
  $$06 = $$06 + 1 | 0;
  if (($$06 | 0) >= ($3 | 0)) break; else $$04 = $$158;
 }
 _llvm_stackrestore($12 | 0);
 STACKTOP = sp;
 return;
}

function _silk_resampler_private_IIR_FIR($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $$0$ = 0, $$01 = 0, $$02 = 0, $11 = 0, $12 = 0, $14 = 0, $16 = 0, $17 = 0, $21 = 0, $23 = 0, $4 = 0, $5 = 0, $8 = 0, $9 = 0, sp = 0;
 sp = STACKTOP;
 $4 = $0 + 268 | 0;
 $5 = HEAP32[$4 >> 2] | 0;
 $8 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * (($5 << 1) + 8 << 1) | 0) + 15 & -16) | 0;
 $9 = $0 + 24 | 0;
 HEAP16[$8 >> 1] = HEAP16[$9 >> 1] | 0;
 HEAP16[$8 + 2 >> 1] = HEAP16[$9 + 2 >> 1] | 0;
 HEAP16[$8 + 4 >> 1] = HEAP16[$9 + 4 >> 1] | 0;
 HEAP16[$8 + 6 >> 1] = HEAP16[$9 + 6 >> 1] | 0;
 HEAP16[$8 + 8 >> 1] = HEAP16[$9 + 8 >> 1] | 0;
 HEAP16[$8 + 10 >> 1] = HEAP16[$9 + 10 >> 1] | 0;
 HEAP16[$8 + 12 >> 1] = HEAP16[$9 + 12 >> 1] | 0;
 HEAP16[$8 + 14 >> 1] = HEAP16[$9 + 14 >> 1] | 0;
 $11 = HEAP32[$0 + 272 >> 2] | 0;
 $12 = $8 + 16 | 0;
 $$0 = $3;
 $$01 = $1;
 $$02 = $2;
 $14 = $5;
 while (1) {
  $$0$ = ($$0 | 0) < ($14 | 0) ? $$0 : $14;
  _silk_resampler_private_up2_HQ($0, $12, $$02, $$0$);
  $16 = _silk_resampler_private_IIR_FIR_INTERPOL($$01, $8, $$0$ << 17, $11) | 0;
  $17 = $$0 - $$0$ | 0;
  if (($17 | 0) <= 0) break;
  $21 = $8 + ($$0$ << 1 << 1) | 0;
  HEAP16[$8 >> 1] = HEAP16[$21 >> 1] | 0;
  HEAP16[$8 + 2 >> 1] = HEAP16[$21 + 2 >> 1] | 0;
  HEAP16[$8 + 4 >> 1] = HEAP16[$21 + 4 >> 1] | 0;
  HEAP16[$8 + 6 >> 1] = HEAP16[$21 + 6 >> 1] | 0;
  HEAP16[$8 + 8 >> 1] = HEAP16[$21 + 8 >> 1] | 0;
  HEAP16[$8 + 10 >> 1] = HEAP16[$21 + 10 >> 1] | 0;
  HEAP16[$8 + 12 >> 1] = HEAP16[$21 + 12 >> 1] | 0;
  HEAP16[$8 + 14 >> 1] = HEAP16[$21 + 14 >> 1] | 0;
  $$0 = $17;
  $$01 = $16;
  $$02 = $$02 + ($$0$ << 1) | 0;
  $14 = HEAP32[$4 >> 2] | 0;
 }
 $23 = $8 + ($$0$ << 1 << 1) | 0;
 HEAP16[$9 >> 1] = HEAP16[$23 >> 1] | 0;
 HEAP16[$9 + 2 >> 1] = HEAP16[$23 + 2 >> 1] | 0;
 HEAP16[$9 + 4 >> 1] = HEAP16[$23 + 4 >> 1] | 0;
 HEAP16[$9 + 6 >> 1] = HEAP16[$23 + 6 >> 1] | 0;
 HEAP16[$9 + 8 >> 1] = HEAP16[$23 + 8 >> 1] | 0;
 HEAP16[$9 + 10 >> 1] = HEAP16[$23 + 10 >> 1] | 0;
 HEAP16[$9 + 12 >> 1] = HEAP16[$23 + 12 >> 1] | 0;
 HEAP16[$9 + 14 >> 1] = HEAP16[$23 + 14 >> 1] | 0;
 STACKTOP = sp;
 return;
}

function _memcpy(dest, src, num) {
 dest = dest | 0;
 src = src | 0;
 num = num | 0;
 var ret = 0, aligned_dest_end = 0, block_aligned_dest_end = 0, dest_end = 0;
 if ((num | 0) >= 8192) return _emscripten_memcpy_big(dest | 0, src | 0, num | 0) | 0;
 ret = dest | 0;
 dest_end = dest + num | 0;
 if ((dest & 3) == (src & 3)) {
  while (dest & 3) {
   if (!num) return ret | 0;
   HEAP8[dest >> 0] = HEAP8[src >> 0] | 0;
   dest = dest + 1 | 0;
   src = src + 1 | 0;
   num = num - 1 | 0;
  }
  aligned_dest_end = dest_end & -4 | 0;
  block_aligned_dest_end = aligned_dest_end - 64 | 0;
  while ((dest | 0) <= (block_aligned_dest_end | 0)) {
   HEAP32[dest >> 2] = HEAP32[src >> 2];
   HEAP32[dest + 4 >> 2] = HEAP32[src + 4 >> 2];
   HEAP32[dest + 8 >> 2] = HEAP32[src + 8 >> 2];
   HEAP32[dest + 12 >> 2] = HEAP32[src + 12 >> 2];
   HEAP32[dest + 16 >> 2] = HEAP32[src + 16 >> 2];
   HEAP32[dest + 20 >> 2] = HEAP32[src + 20 >> 2];
   HEAP32[dest + 24 >> 2] = HEAP32[src + 24 >> 2];
   HEAP32[dest + 28 >> 2] = HEAP32[src + 28 >> 2];
   HEAP32[dest + 32 >> 2] = HEAP32[src + 32 >> 2];
   HEAP32[dest + 36 >> 2] = HEAP32[src + 36 >> 2];
   HEAP32[dest + 40 >> 2] = HEAP32[src + 40 >> 2];
   HEAP32[dest + 44 >> 2] = HEAP32[src + 44 >> 2];
   HEAP32[dest + 48 >> 2] = HEAP32[src + 48 >> 2];
   HEAP32[dest + 52 >> 2] = HEAP32[src + 52 >> 2];
   HEAP32[dest + 56 >> 2] = HEAP32[src + 56 >> 2];
   HEAP32[dest + 60 >> 2] = HEAP32[src + 60 >> 2];
   dest = dest + 64 | 0;
   src = src + 64 | 0;
  }
  while ((dest | 0) < (aligned_dest_end | 0)) {
   HEAP32[dest >> 2] = HEAP32[src >> 2];
   dest = dest + 4 | 0;
   src = src + 4 | 0;
  }
 } else {
  aligned_dest_end = dest_end - 4 | 0;
  while ((dest | 0) < (aligned_dest_end | 0)) {
   HEAP8[dest >> 0] = HEAP8[src >> 0] | 0;
   HEAP8[dest + 1 >> 0] = HEAP8[src + 1 >> 0] | 0;
   HEAP8[dest + 2 >> 0] = HEAP8[src + 2 >> 0] | 0;
   HEAP8[dest + 3 >> 0] = HEAP8[src + 3 >> 0] | 0;
   dest = dest + 4 | 0;
   src = src + 4 | 0;
  }
 }
 while ((dest | 0) < (dest_end | 0)) {
  HEAP8[dest >> 0] = HEAP8[src >> 0] | 0;
  dest = dest + 1 | 0;
  src = src + 1 | 0;
 }
 return ret | 0;
}

function _resampler_basic_direct_double($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $$04 = 0, $$sroa$0$1 = 0.0, $$sroa$10$1 = 0.0, $$sroa$4$1 = 0.0, $$sroa$7$1 = 0.0, $12 = 0, $17 = 0, $19 = 0, $21 = 0, $23 = 0, $25 = 0, $31 = 0, $32 = 0, $40 = 0.0, $41 = 0, $49 = 0, $57 = 0, $7 = 0, $74 = 0, $75 = 0, $8 = 0, label = 0;
 $7 = HEAP32[$0 + 24 >> 2] | 0;
 $8 = $0 + 60 | 0;
 $12 = $0 + 64 | 0;
 $17 = HEAP32[$0 + 76 >> 2] | 0;
 $19 = HEAP32[$0 + 92 >> 2] | 0;
 $21 = HEAP32[$0 + 36 >> 2] | 0;
 $23 = HEAP32[$0 + 40 >> 2] | 0;
 $25 = HEAP32[$0 + 12 >> 2] | 0;
 $$01 = HEAP32[(HEAP32[$12 >> 2] | 0) + ($1 << 2) >> 2] | 0;
 $$02 = HEAP32[(HEAP32[$8 >> 2] | 0) + ($1 << 2) >> 2] | 0;
 $$04 = 0;
 while (1) {
  if (($$02 | 0) >= (HEAP32[$3 >> 2] | 0)) {
   label = 8;
   break;
  }
  if (($$04 | 0) >= (HEAP32[$5 >> 2] | 0)) {
   label = 8;
   break;
  }
  $31 = $17 + ((Math_imul($$01, $7) | 0) << 2) | 0;
  $32 = $2 + ($$02 << 2) | 0;
  $$0 = 0;
  $$sroa$0$1 = 0.0;
  $$sroa$10$1 = 0.0;
  $$sroa$4$1 = 0.0;
  $$sroa$7$1 = 0.0;
  while (1) {
   if (($$0 | 0) >= ($7 | 0)) break;
   $40 = $$sroa$0$1 + +HEAPF32[$31 + ($$0 << 2) >> 2] * +HEAPF32[$32 + ($$0 << 2) >> 2];
   $41 = $$0 | 1;
   $49 = $$0 | 2;
   $57 = $$0 | 3;
   $$0 = $$0 + 4 | 0;
   $$sroa$0$1 = $40;
   $$sroa$10$1 = $$sroa$10$1 + +HEAPF32[$31 + ($57 << 2) >> 2] * +HEAPF32[$32 + ($57 << 2) >> 2];
   $$sroa$4$1 = $$sroa$4$1 + +HEAPF32[$31 + ($41 << 2) >> 2] * +HEAPF32[$32 + ($41 << 2) >> 2];
   $$sroa$7$1 = $$sroa$7$1 + +HEAPF32[$31 + ($49 << 2) >> 2] * +HEAPF32[$32 + ($49 << 2) >> 2];
  }
  HEAPF32[$4 + ((Math_imul($19, $$04) | 0) << 2) >> 2] = $$sroa$0$1 + $$sroa$4$1 + $$sroa$7$1 + $$sroa$10$1;
  $74 = $$01 + $23 | 0;
  $75 = $74 >>> 0 < $25 >>> 0;
  $$01 = $74 - ($75 ? 0 : $25) | 0;
  $$02 = $$02 + $21 + (($75 ^ 1) & 1) | 0;
  $$04 = $$04 + 1 | 0;
 }
 if ((label | 0) == 8) {
  HEAP32[(HEAP32[$8 >> 2] | 0) + ($1 << 2) >> 2] = $$02;
  HEAP32[(HEAP32[$12 >> 2] | 0) + ($1 << 2) >> 2] = $$01;
  return $$04 | 0;
 }
 return 0;
}

function _kf_bfly2($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$0 = 0, $$01 = 0, $$sroa_idx2 = 0, $13 = 0, $14 = 0.0, $15 = 0, $16 = 0.0, $18 = 0.0, $20 = 0.0, $21 = 0, $22 = 0.0, $24 = 0, $25 = 0.0, $29 = 0, $3 = 0, $30 = 0.0, $31 = 0, $32 = 0.0, $33 = 0, $34 = 0.0, $36 = 0, $37 = 0.0, $4 = 0.0, $41 = 0, $42 = 0.0, $43 = 0, $44 = 0.0, $46 = 0.0, $48 = 0.0, $49 = 0, $5 = 0.0, $50 = 0.0, $52 = 0, $53 = 0.0, $6 = 0.0, $8 = 0, $9 = 0.0;
 $$0 = $0;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) >= ($1 | 0)) break;
  $3 = $$0 + 32 | 0;
  $4 = +HEAPF32[$3 >> 2];
  $$sroa_idx2 = $$0 + 36 | 0;
  $5 = +HEAPF32[$$sroa_idx2 >> 2];
  $6 = +HEAPF32[$$0 >> 2];
  HEAPF32[$3 >> 2] = $6 - $4;
  $8 = $$0 + 4 | 0;
  $9 = +HEAPF32[$8 >> 2];
  HEAPF32[$$sroa_idx2 >> 2] = $9 - $5;
  HEAPF32[$$0 >> 2] = $6 + $4;
  HEAPF32[$8 >> 2] = $9 + $5;
  $13 = $$0 + 40 | 0;
  $14 = +HEAPF32[$13 >> 2];
  $15 = $$0 + 44 | 0;
  $16 = +HEAPF32[$15 >> 2];
  $18 = ($14 + $16) * .7071067690849304;
  $20 = ($16 - $14) * .7071067690849304;
  $21 = $$0 + 8 | 0;
  $22 = +HEAPF32[$21 >> 2];
  HEAPF32[$13 >> 2] = $22 - $18;
  $24 = $$0 + 12 | 0;
  $25 = +HEAPF32[$24 >> 2];
  HEAPF32[$15 >> 2] = $25 - $20;
  HEAPF32[$21 >> 2] = $22 + $18;
  HEAPF32[$24 >> 2] = $25 + $20;
  $29 = $$0 + 52 | 0;
  $30 = +HEAPF32[$29 >> 2];
  $31 = $$0 + 48 | 0;
  $32 = +HEAPF32[$31 >> 2];
  $33 = $$0 + 16 | 0;
  $34 = +HEAPF32[$33 >> 2];
  HEAPF32[$31 >> 2] = $34 - $30;
  $36 = $$0 + 20 | 0;
  $37 = +HEAPF32[$36 >> 2];
  HEAPF32[$29 >> 2] = $37 + $32;
  HEAPF32[$33 >> 2] = $34 + $30;
  HEAPF32[$36 >> 2] = $37 - $32;
  $41 = $$0 + 60 | 0;
  $42 = +HEAPF32[$41 >> 2];
  $43 = $$0 + 56 | 0;
  $44 = +HEAPF32[$43 >> 2];
  $46 = ($42 - $44) * .7071067690849304;
  $48 = ($42 + $44) * -.7071067690849304;
  $49 = $$0 + 24 | 0;
  $50 = +HEAPF32[$49 >> 2];
  HEAPF32[$43 >> 2] = $50 - $46;
  $52 = $$0 + 28 | 0;
  $53 = +HEAPF32[$52 >> 2];
  HEAPF32[$41 >> 2] = $53 - $48;
  HEAPF32[$49 >> 2] = $50 + $46;
  HEAPF32[$52 >> 2] = $53 + $48;
  $$0 = $$0 + 64 | 0;
  $$01 = $$01 + 1 | 0;
 }
 return;
}

function _kf_bfly3($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $$03 = 0, $$04 = 0, $10 = 0.0, $11 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0.0, $18 = 0.0, $20 = 0, $21 = 0.0, $23 = 0.0, $25 = 0.0, $28 = 0.0, $29 = 0, $30 = 0.0, $31 = 0.0, $33 = 0, $34 = 0.0, $36 = 0.0, $38 = 0.0, $41 = 0.0, $42 = 0.0, $43 = 0.0, $51 = 0, $55 = 0.0, $56 = 0.0, $6 = 0, $7 = 0;
 $6 = $3 << 1;
 $7 = $2 + 48 | 0;
 $10 = +HEAPF32[(HEAP32[$7 >> 2] | 0) + ((Math_imul($1, $3) | 0) << 3) + 4 >> 2];
 $11 = $1 << 1;
 $$04 = 0;
 while (1) {
  if (($$04 | 0) >= ($4 | 0)) break;
  $14 = $0 + ((Math_imul($$04, $5) | 0) << 3) | 0;
  $15 = HEAP32[$7 >> 2] | 0;
  $$0 = $14;
  $$01 = $15;
  $$02 = $15;
  $$03 = $3;
  while (1) {
   $16 = $$0 + ($3 << 3) | 0;
   $17 = +HEAPF32[$16 >> 2];
   $18 = +HEAPF32[$$02 >> 2];
   $20 = $$0 + ($3 << 3) + 4 | 0;
   $21 = +HEAPF32[$20 >> 2];
   $23 = +HEAPF32[$$02 + 4 >> 2];
   $25 = $17 * $18 - $21 * $23;
   $28 = $17 * $23 + $21 * $18;
   $29 = $$0 + ($6 << 3) | 0;
   $30 = +HEAPF32[$29 >> 2];
   $31 = +HEAPF32[$$01 >> 2];
   $33 = $$0 + ($6 << 3) + 4 | 0;
   $34 = +HEAPF32[$33 >> 2];
   $36 = +HEAPF32[$$01 + 4 >> 2];
   $38 = $30 * $31 - $34 * $36;
   $41 = $30 * $36 + $34 * $31;
   $42 = $25 + $38;
   $43 = $28 + $41;
   HEAPF32[$16 >> 2] = +HEAPF32[$$0 >> 2] - $42 * .5;
   $51 = $$0 + 4 | 0;
   HEAPF32[$20 >> 2] = +HEAPF32[$51 >> 2] - $43 * .5;
   $55 = ($25 - $38) * $10;
   $56 = ($28 - $41) * $10;
   HEAPF32[$$0 >> 2] = +HEAPF32[$$0 >> 2] + $42;
   HEAPF32[$51 >> 2] = +HEAPF32[$51 >> 2] + $43;
   HEAPF32[$29 >> 2] = +HEAPF32[$16 >> 2] + $56;
   HEAPF32[$33 >> 2] = +HEAPF32[$20 >> 2] - $55;
   HEAPF32[$16 >> 2] = +HEAPF32[$16 >> 2] - $56;
   HEAPF32[$20 >> 2] = +HEAPF32[$20 >> 2] + $55;
   $$03 = $$03 + -1 | 0;
   if (!$$03) break; else {
    $$0 = $$0 + 8 | 0;
    $$01 = $$01 + ($11 << 3) | 0;
    $$02 = $$02 + ($1 << 3) | 0;
   }
  }
  $$04 = $$04 + 1 | 0;
 }
 return;
}

function _silk_resampler_private_up2_HQ($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $13 = 0, $14 = 0, $15 = 0, $21 = 0, $22 = 0, $24 = 0, $25 = 0, $31 = 0, $32 = 0, $35 = 0, $4 = 0, $41 = 0, $47 = 0, $5 = 0, $52 = 0, $54 = 0, $55 = 0, $6 = 0, $61 = 0, $62 = 0, $64 = 0, $65 = 0, $7 = 0, $71 = 0, $72 = 0, $75 = 0, $8 = 0, $81 = 0, $87 = 0;
 $4 = $0 + 4 | 0;
 $5 = $0 + 8 | 0;
 $6 = $0 + 12 | 0;
 $7 = $0 + 16 | 0;
 $8 = $0 + 20 | 0;
 $$0 = 0;
 while (1) {
  if (($$0 | 0) >= ($3 | 0)) break;
  $13 = HEAP16[$2 + ($$0 << 1) >> 1] << 10;
  $14 = HEAP32[$0 >> 2] | 0;
  $15 = $13 - $14 | 0;
  $21 = (($15 >> 16) * 1746 | 0) + ((($15 & 65535) * 1746 | 0) >>> 16) | 0;
  $22 = $14 + $21 | 0;
  HEAP32[$0 >> 2] = $13 + $21;
  $24 = HEAP32[$4 >> 2] | 0;
  $25 = $22 - $24 | 0;
  $31 = (($25 >> 16) * 14986 | 0) + ((($25 & 65535) * 14986 | 0) >>> 16) | 0;
  $32 = $24 + $31 | 0;
  HEAP32[$4 >> 2] = $22 + $31;
  $35 = $32 - (HEAP32[$5 >> 2] | 0) | 0;
  $41 = (Math_imul($35 >> 16, -26453) | 0) + ((Math_imul($35 & 65535, -26453) | 0) >> 16) | 0;
  HEAP32[$5 >> 2] = $32 + ($35 + $41);
  $47 = ($32 + $41 >> 9) + 1 >> 1;
  $52 = $$0 << 1;
  HEAP16[$1 + ($52 << 1) >> 1] = ($47 | 0) > 32767 ? 32767 : (($47 | 0) > -32768 ? $47 : -32768) & 65535;
  $54 = HEAP32[$6 >> 2] | 0;
  $55 = $13 - $54 | 0;
  $61 = (($55 >> 16) * 6854 | 0) + ((($55 & 65535) * 6854 | 0) >>> 16) | 0;
  $62 = $54 + $61 | 0;
  HEAP32[$6 >> 2] = $13 + $61;
  $64 = HEAP32[$7 >> 2] | 0;
  $65 = $62 - $64 | 0;
  $71 = (($65 >> 16) * 25769 | 0) + ((($65 & 65535) * 25769 | 0) >>> 16) | 0;
  $72 = $64 + $71 | 0;
  HEAP32[$7 >> 2] = $62 + $71;
  $75 = $72 - (HEAP32[$8 >> 2] | 0) | 0;
  $81 = (Math_imul($75 >> 16, -9994) | 0) + ((Math_imul($75 & 65535, -9994) | 0) >> 16) | 0;
  HEAP32[$8 >> 2] = $72 + ($75 + $81);
  $87 = ($72 + $81 >> 9) + 1 >> 1;
  HEAP16[$1 + (($52 | 1) << 1) >> 1] = ($87 | 0) > 32767 ? 32767 : (($87 | 0) > -32768 ? $87 : -32768) & 65535;
  $$0 = $$0 + 1 | 0;
 }
 return;
}

function _unquant_coarse_energy($0, $1, $2, $3, $4, $5, $6, $7) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 $7 = $7 | 0;
 var $$01 = 0.0, $$02 = 0.0, $$03 = 0, $$04 = 0, $$2 = 0, $$idx = 0, $$idx5 = 0, $20 = 0, $21 = 0, $23 = 0, $24 = 0, $25 = 0, $27 = 0, $39 = 0, $47 = 0.0, $51 = 0, $52 = 0.0, $58 = 0, $61 = 0, $62 = 0.0, $8 = 0, $9 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 $8 = sp;
 $9 = $8;
 HEAP32[$9 >> 2] = 0;
 HEAP32[$9 + 4 >> 2] = 0;
 if (!$4) {
  $$01 = +HEAPF32[18720 + ($7 << 2) >> 2];
  $$02 = +HEAPF32[18704 + ($7 << 2) >> 2];
 } else {
  $$01 = .149993896484375;
  $$02 = 0.0;
 }
 $20 = HEAP32[$5 + 4 >> 2] << 3;
 $$idx = $5 + 20 | 0;
 $$idx5 = $5 + 28 | 0;
 $21 = $0 + 8 | 0;
 $$04 = $1;
 while (1) {
  if (($$04 | 0) >= ($2 | 0)) break;
  $23 = ($$04 | 0) < 20;
  $$03 = 0;
  do {
   $24 = _ec_tell_71(HEAP32[$$idx >> 2] | 0, HEAP32[$$idx5 >> 2] | 0) | 0;
   $25 = $20 - $24 | 0;
   do if (($25 | 0) > 14) {
    $27 = ($23 ? $$04 : 20) << 1;
    $$2 = _ec_laplace_decode($5, (HEAPU8[24487 + ($7 * 84 | 0) + ($4 * 42 | 0) + $27 >> 0] | 0) << 7, (HEAPU8[($27 | 1) + (24487 + ($7 * 84 | 0) + ($4 * 42 | 0)) >> 0] | 0) << 6) | 0;
   } else {
    if (($25 | 0) > 1) {
     $39 = _ec_dec_icdf($5, 24823, 2) | 0;
     $$2 = $39 >> 1 ^ 0 - ($39 & 1);
     break;
    }
    if (($20 | 0) > ($24 | 0)) $$2 = 0 - (_ec_dec_bit_logp($5, 1) | 0) | 0; else $$2 = -1;
   } while (0);
   $47 = +($$2 | 0);
   $51 = $3 + ($$04 + (Math_imul($$03, HEAP32[$21 >> 2] | 0) | 0) << 2) | 0;
   $52 = +HEAPF32[$51 >> 2];
   HEAPF32[$51 >> 2] = $52 < -9.0 ? -9.0 : $52;
   $58 = $3 + ($$04 + (Math_imul($$03, HEAP32[$21 >> 2] | 0) | 0) << 2) | 0;
   $61 = $8 + ($$03 << 2) | 0;
   $62 = +HEAPF32[$61 >> 2];
   HEAPF32[$58 >> 2] = $$02 * +HEAPF32[$58 >> 2] + $62 + $47;
   HEAPF32[$61 >> 2] = $62 + $47 - $$01 * $47;
   $$03 = $$03 + 1 | 0;
  } while (($$03 | 0) < ($6 | 0));
  $$04 = $$04 + 1 | 0;
 }
 STACKTOP = sp;
 return;
}

function _denormalise_bands($$0$5$val, $$0$8$val, $0, $1, $2, $3, $4, $5, $6, $7) {
 $$0$5$val = $$0$5$val | 0;
 $$0$8$val = $$0$8$val | 0;
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 $7 = $7 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $$04 = 0, $$04$ = 0, $$08 = 0, $$1 = 0, $$13 = 0, $$19 = 0, $$2 = 0, $$4 = 0, $$5 = 0, $12 = 0, $14 = 0, $16 = 0, $17 = 0, $18 = 0, $20 = 0, $22 = 0, $32 = 0, $33 = 0, $37 = 0, $42 = 0.0, $48 = 0.0, $49 = 0, $52 = 0, $53 = 0, $8 = 0;
 $8 = Math_imul($$0$8$val, $5) | 0;
 $12 = Math_imul(HEAP16[$$0$5$val + ($4 << 1) >> 1] | 0, $5) | 0;
 if (($6 | 0) == 1) $$04 = $12; else {
  $14 = ($8 | 0) / ($6 | 0) | 0;
  $$04 = ($12 | 0) < ($14 | 0) ? $12 : $14;
 }
 $16 = ($7 | 0) == 0;
 $$4 = $16 ? $4 : 0;
 $$5 = $16 ? $3 : 0;
 $$04$ = $16 ? $$04 : 0;
 $17 = $$0$5$val + ($$5 << 1) | 0;
 $18 = HEAP16[$17 >> 1] | 0;
 $20 = Math_imul($18 << 16 >> 16, $5) | 0;
 $$02 = $1;
 $$08 = 0;
 $22 = $18;
 while (1) {
  if (($$08 | 0) >= (Math_imul($22 << 16 >> 16, $5) | 0)) break;
  HEAPF32[$$02 >> 2] = 0.0;
  $$02 = $$02 + 4 | 0;
  $$08 = $$08 + 1 | 0;
  $22 = HEAP16[$17 >> 1] | 0;
 }
 $$01 = $0 + ($20 << 2) | 0;
 $$13 = $$02;
 $$19 = $$5;
 L8 : while (1) {
  if (($$19 | 0) >= ($$4 | 0)) break;
  $32 = Math_imul(HEAP16[$$0$5$val + ($$19 << 1) >> 1] | 0, $5) | 0;
  $33 = $$19 + 1 | 0;
  $37 = Math_imul(HEAP16[$$0$5$val + ($33 << 1) >> 1] | 0, $5) | 0;
  $42 = +HEAPF32[$2 + ($$19 << 2) >> 2] + +HEAPF32[18604 + ($$19 << 2) >> 2];
  $48 = +Math_exp(+(($42 > 32.0 ? 32.0 : $42) * .6931471805599453));
  $$0 = $32;
  $$1 = $$01;
  $$2 = $$13;
  while (1) {
   $49 = $$1 + 4 | 0;
   $52 = $$2 + 4 | 0;
   HEAPF32[$$2 >> 2] = +HEAPF32[$$1 >> 2] * $48;
   $53 = $$0 + 1 | 0;
   if (($53 | 0) < ($37 | 0)) {
    $$0 = $53;
    $$1 = $49;
    $$2 = $52;
   } else {
    $$01 = $49;
    $$13 = $52;
    $$19 = $33;
    continue L8;
   }
  }
 }
 _memset($1 + ($$04$ << 2) | 0, 0, $8 - $$04$ << 2 | 0) | 0;
 return;
}

function _opus_decoder_init($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $11 = 0, $13 = 0, $3 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 $vararg_buffer = sp;
 $3 = sp + 4 | 0;
 L1 : do if (($1 | 0) < 16e3) if (($1 | 0) < 12e3) switch ($1 | 0) {
 case 8e3:
  {
   label = 2;
   break L1;
   break;
  }
 default:
  {
   $$0 = -1;
   break L1;
  }
 } else switch ($1 | 0) {
 case 12e3:
  {
   label = 2;
   break L1;
   break;
  }
 default:
  {
   $$0 = -1;
   break L1;
  }
 } else {
  if (($1 | 0) < 24e3) switch ($1 | 0) {
  case 16e3:
   {
    label = 2;
    break L1;
    break;
   }
  default:
   {
    $$0 = -1;
    break L1;
   }
  }
  if (($1 | 0) < 48e3) switch ($1 | 0) {
  case 24e3:
   {
    label = 2;
    break L1;
    break;
   }
  default:
   {
    $$0 = -1;
    break L1;
   }
  } else switch ($1 | 0) {
  case 48e3:
   {
    label = 2;
    break L1;
    break;
   }
  default:
   {
    $$0 = -1;
    break L1;
   }
  }
 } while (0);
 if ((label | 0) == 2) if (($2 + -1 | 0) >>> 0 < 2) {
  _memset($0 | 0, 0, _opus_decoder_get_size($2) | 0) | 0;
  if (!(_silk_Get_Decoder_Size($3) | 0)) {
   $8 = _align(HEAP32[$3 >> 2] | 0) | 0;
   HEAP32[$3 >> 2] = $8;
   $9 = _align(88) | 0;
   HEAP32[$0 + 4 >> 2] = $9;
   $11 = $9 + $8 | 0;
   HEAP32[$0 >> 2] = $11;
   $13 = $0 + $11 | 0;
   HEAP32[$0 + 8 >> 2] = $2;
   HEAP32[$0 + 48 >> 2] = $2;
   HEAP32[$0 + 12 >> 2] = $1;
   HEAP32[$0 + 24 >> 2] = $1;
   HEAP32[$0 + 16 >> 2] = $2;
   if (!(_silk_InitDecoder($0 + $9 | 0) | 0)) if (!(_celt_decoder_init($13, $1, $2) | 0)) {
    HEAP32[$vararg_buffer >> 2] = 0;
    _opus_custom_decoder_ctl($13, 10016, $vararg_buffer);
    HEAP32[$0 + 60 >> 2] = 0;
    HEAP32[$0 + 64 >> 2] = ($1 | 0) / 400 | 0;
    HEAP32[$0 + 44 >> 2] = 0;
    $$0 = 0;
   } else $$0 = -3; else $$0 = -3;
  } else $$0 = -3;
 } else $$0 = -1;
 STACKTOP = sp;
 return $$0 | 0;
}

function _silk_decode_frame($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$pre$phi1Z2D = 0, $$pre$phiZ2D = 0, $10 = 0, $17 = 0, $18 = 0, $20 = 0, $38 = 0, $39 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 $6 = sp;
 $7 = $0 + 2328 | 0;
 $8 = HEAP32[$7 >> 2] | 0;
 HEAP32[$6 + 136 >> 2] = 0;
 switch ($4 | 0) {
 case 0:
  {
   $$pre$phi1Z2D = $0 + 2388 | 0;
   label = 4;
   break;
  }
 case 2:
  {
   $10 = $0 + 2388 | 0;
   if ((HEAP32[$0 + 2420 + (HEAP32[$10 >> 2] << 2) >> 2] | 0) == 1) {
    $$pre$phi1Z2D = $10;
    label = 4;
   } else label = 5;
   break;
  }
 default:
  label = 5;
 }
 if ((label | 0) == 4) {
  $17 = _llvm_stacksave() | 0;
  $18 = STACKTOP;
  STACKTOP = STACKTOP + ((1 * (($8 + 15 & -16) << 1) | 0) + 15 & -16) | 0;
  _silk_decode_indices($0, $1, HEAP32[$$pre$phi1Z2D >> 2] | 0, $4, $5);
  $20 = $0 + 2765 | 0;
  _silk_decode_pulses($1, $18, HEAP8[$20 >> 0] | 0, HEAP8[$0 + 2766 >> 0] | 0, HEAP32[$7 >> 2] | 0);
  _silk_decode_parameters($0, $6, $5);
  _silk_decode_core($0, $6, $2, $18);
  _silk_PLC($0, $6, $2, 0);
  HEAP32[$0 + 4160 >> 2] = 0;
  HEAP32[$0 + 4164 >> 2] = HEAP8[$20 >> 0];
  HEAP32[$0 + 2376 >> 2] = 0;
  _llvm_stackrestore($17 | 0);
  $$pre$phiZ2D = $6;
 } else if ((label | 0) == 5) {
  HEAP8[$0 + 2765 >> 0] = HEAP32[$0 + 4164 >> 2];
  _silk_PLC($0, $6, $2, 1);
  $$pre$phiZ2D = $6;
 }
 $38 = HEAP32[$7 >> 2] | 0;
 $39 = (HEAP32[$0 + 2336 >> 2] | 0) - $38 | 0;
 _memmove($0 + 1348 | 0, $0 + 1348 + ($38 << 1) | 0, $39 << 1 | 0) | 0;
 _memcpy($0 + 1348 + ($39 << 1) | 0, $2 | 0, HEAP32[$7 >> 2] << 1 | 0) | 0;
 _silk_CNG($0, $$pre$phiZ2D, $2, $8);
 _silk_PLC_glue_frames($0, $2, $8);
 HEAP32[$0 + 2308 >> 2] = HEAP32[$6 + ((HEAP32[$0 + 2324 >> 2] | 0) + -1 << 2) >> 2];
 HEAP32[$3 >> 2] = $8;
 STACKTOP = sp;
 return 0;
}

function _speex_resampler_set_rate_frac($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $$01 = 0, $$02 = 0, $16 = 0, $17 = 0, $18 = 0, $20 = 0, $21 = 0, $25 = 0, $27 = 0, $30 = 0, $31 = 0, $34 = 0, $35 = 0, $39 = 0, $45 = 0, $47 = 0, $54 = 0, $55 = 0, $7 = 0;
 $7 = $0 + 4 | 0;
 if ((HEAP32[$0 >> 2] | 0) == ($3 | 0)) if ((HEAP32[$7 >> 2] | 0) == ($4 | 0)) if ((HEAP32[$0 + 8 >> 2] | 0) == ($1 | 0)) if ((HEAP32[$0 + 12 >> 2] | 0) == ($2 | 0)) return;
 $16 = $0 + 12 | 0;
 $17 = HEAP32[$16 >> 2] | 0;
 HEAP32[$0 >> 2] = $3;
 HEAP32[$7 >> 2] = $4;
 $18 = $0 + 8 | 0;
 HEAP32[$18 >> 2] = $1;
 HEAP32[$16 >> 2] = $2;
 $$02 = 2;
 $20 = $1;
 $21 = $2;
 while (1) {
  if ($$02 >>> 0 > (HEAP32[($20 >>> 0 < $21 >>> 0 ? $18 : $16) >> 2] | 0) >>> 0) break;
  $25 = HEAP32[$18 >> 2] | 0;
  $54 = $21;
  while (1) {
   if (($25 >>> 0) % ($$02 >>> 0) | 0 | 0) {
    $55 = $54;
    break;
   }
   $27 = HEAP32[$16 >> 2] | 0;
   if (($27 >>> 0) % ($$02 >>> 0) | 0 | 0) {
    $55 = $27;
    break;
   }
   $30 = ($25 >>> 0) / ($$02 >>> 0) | 0;
   HEAP32[$18 >> 2] = $30;
   $31 = ($27 >>> 0) / ($$02 >>> 0) | 0;
   HEAP32[$16 >> 2] = $31;
   $25 = $30;
   $54 = $31;
  }
  $$02 = $$02 + 1 | 0;
  $20 = $25;
  $21 = $55;
 }
 L16 : do if ($17 | 0) {
  $34 = $0 + 20 | 0;
  $35 = $0 + 64 | 0;
  $$01 = 0;
  while (1) {
   if ($$01 >>> 0 >= (HEAP32[$34 >> 2] | 0) >>> 0) break L16;
   $39 = (HEAP32[$35 >> 2] | 0) + ($$01 << 2) | 0;
   HEAP32[$39 >> 2] = ((Math_imul(HEAP32[$39 >> 2] | 0, HEAP32[$16 >> 2] | 0) | 0) >>> 0) / ($17 >>> 0) | 0;
   $45 = (HEAP32[$35 >> 2] | 0) + ($$01 << 2) | 0;
   $47 = HEAP32[$16 >> 2] | 0;
   if ((HEAP32[$45 >> 2] | 0) >>> 0 >= $47 >>> 0) HEAP32[$45 >> 2] = $47 + -1;
   $$01 = $$01 + 1 | 0;
  }
 } while (0);
 if (!(HEAP32[$0 + 52 >> 2] | 0)) return;
 _update_filter($0) | 0;
 return;
}

function _find_best_pitch($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $$0 = 0.0, $$01 = 0, $$02 = 0, $$1 = 0.0, $14 = 0.0, $16 = 0.0, $17 = 0.0, $19 = 0.0, $21 = 0.0, $24 = 0.0, $26 = 0.0, $28 = 0, $31 = 0.0, $34 = 0.0, $37 = 0.0, $41 = 0.0, $42 = 0.0, $43 = 0, $44 = 0.0, $45 = 0.0, $46 = 0.0, $47 = 0.0, $48 = 0.0, $49 = 0.0, $5 = 0, $8 = 0.0;
 HEAP32[$4 >> 2] = 0;
 $5 = $4 + 4 | 0;
 HEAP32[$5 >> 2] = 1;
 $$0 = 1.0;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) >= ($2 | 0)) {
   $$02 = 0;
   $$1 = $$0;
   $19 = 0.0;
   $21 = -1.0;
   $24 = 0.0;
   $26 = -1.0;
   $28 = 0;
   $41 = -1.0;
   $42 = 0.0;
   break;
  }
  $8 = +HEAPF32[$1 + ($$01 << 2) >> 2];
  $$0 = $$0 + $8 * $8;
  $$01 = $$01 + 1 | 0;
 }
 while (1) {
  if (($$02 | 0) >= ($3 | 0)) break;
  $14 = +HEAPF32[$0 + ($$02 << 2) >> 2];
  do if ($14 > 0.0) {
   $16 = $14 * 9.999999960041972e-13;
   $17 = $16 * $16;
   if ($17 * $19 > $21 * $$1) if ($17 * $24 > $26 * $$1) {
    HEAP32[$5 >> 2] = $28;
    HEAP32[$4 >> 2] = $$02;
    $43 = $$02;
    $44 = $41;
    $45 = $17;
    $46 = $17;
    $47 = $42;
    $48 = $$1;
    $49 = $$1;
    break;
   } else {
    HEAP32[$5 >> 2] = $$02;
    $43 = $28;
    $44 = $17;
    $45 = $41;
    $46 = $26;
    $47 = $$1;
    $48 = $42;
    $49 = $24;
    break;
   } else {
    $43 = $28;
    $44 = $21;
    $45 = $41;
    $46 = $26;
    $47 = $19;
    $48 = $42;
    $49 = $24;
   }
  } else {
   $43 = $28;
   $44 = $21;
   $45 = $41;
   $46 = $26;
   $47 = $19;
   $48 = $42;
   $49 = $24;
  } while (0);
  $31 = +HEAPF32[$1 + ($$02 + $2 << 2) >> 2];
  $34 = +HEAPF32[$1 + ($$02 << 2) >> 2];
  $37 = $$1 + ($31 * $31 - $34 * $34);
  $$02 = $$02 + 1 | 0;
  $$1 = $37 < 1.0 ? 1.0 : $37;
  $19 = $47;
  $21 = $44;
  $24 = $49;
  $26 = $46;
  $28 = $43;
  $41 = $45;
  $42 = $48;
 }
 return;
}

function _silk_PLC_glue_frames($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $$01 = 0, $11 = 0, $14 = 0, $16 = 0, $18 = 0, $26 = 0, $27 = 0, $28 = 0, $3 = 0, $30 = 0, $32 = 0, $35 = 0, $39 = 0, $4 = 0, $42 = 0, $45 = 0, $47 = 0, $54 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 $3 = sp + 4 | 0;
 $4 = sp;
 if (HEAP32[$0 + 4160 >> 2] | 0) {
  _silk_sum_sqr_shift($0 + 4232 | 0, $0 + 4236 | 0, $1, $2);
  HEAP32[$0 + 4220 >> 2] = 1;
  STACKTOP = sp;
  return;
 }
 $11 = $0 + 4220 | 0;
 L5 : do if (HEAP32[$11 >> 2] | 0) {
  _silk_sum_sqr_shift($4, $3, $1, $2);
  $14 = HEAP32[$3 >> 2] | 0;
  $16 = HEAP32[$0 + 4236 >> 2] | 0;
  if (($14 | 0) > ($16 | 0)) {
   $18 = $0 + 4232 | 0;
   HEAP32[$18 >> 2] = HEAP32[$18 >> 2] >> $14 - $16;
  } else if (($14 | 0) < ($16 | 0)) HEAP32[$4 >> 2] = HEAP32[$4 >> 2] >> $16 - $14;
  $26 = HEAP32[$4 >> 2] | 0;
  $27 = $0 + 4232 | 0;
  $28 = HEAP32[$27 >> 2] | 0;
  if (($26 | 0) > ($28 | 0)) {
   $30 = _silk_CLZ32_130($28) | 0;
   $32 = $28 << $30 + -1;
   HEAP32[$27 >> 2] = $32;
   $35 = $26 >> (_silk_max_32(25 - $30 | 0, 0) | 0);
   HEAP32[$4 >> 2] = $35;
   $39 = (_silk_SQRT_APPROX_133(($32 | 0) / ((($35 | 0) > 1 ? $35 : 1) | 0) | 0) | 0) << 4;
   $42 = ((65536 - $39 | 0) / ($2 | 0) | 0) << 2;
   $$0 = $39;
   $$01 = 0;
   while (1) {
    if (($$01 | 0) >= ($2 | 0)) break L5;
    $45 = $1 + ($$01 << 1) | 0;
    $47 = HEAP16[$45 >> 1] | 0;
    HEAP16[$45 >> 1] = (Math_imul($$0 >> 16, $47) | 0) + ((Math_imul($$0 & 65532, $47) | 0) >>> 16);
    $54 = $$0 + $42 | 0;
    if (($54 | 0) > 65536) break L5;
    $$0 = $54;
    $$01 = $$01 + 1 | 0;
   }
  }
 } while (0);
 HEAP32[$11 >> 2] = 0;
 STACKTOP = sp;
 return;
}

function _speex_resampler_init_frac($0, $1, $2, $3, $4, $5, $6) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $10 = 0, $23 = 0, $25 = 0, $27 = 0, $29 = 0, $37 = 0, $9 = 0;
 if ($5 >>> 0 > 10) {
  if (!$6) {
   $$0 = 0;
   return $$0 | 0;
  }
  HEAP32[$6 >> 2] = 3;
  $$0 = 0;
  return $$0 | 0;
 }
 $9 = _speex_alloc_515(96) | 0;
 $10 = $9 + 52 | 0;
 HEAP32[$10 >> 2] = 0;
 HEAP32[$9 + 56 >> 2] = 0;
 HEAP32[$9 >> 2] = 0;
 HEAP32[$9 + 4 >> 2] = 0;
 HEAP32[$9 + 8 >> 2] = 0;
 HEAP32[$9 + 12 >> 2] = 0;
 HEAP32[$9 + 16 >> 2] = -1;
 HEAP32[$9 + 80 >> 2] = 0;
 HEAP32[$9 + 28 >> 2] = 0;
 HEAP32[$9 + 24 >> 2] = 0;
 HEAP32[$9 + 72 >> 2] = 0;
 HEAP32[$9 + 84 >> 2] = 0;
 HEAPF32[$9 + 44 >> 2] = 1.0;
 HEAP32[$9 + 20 >> 2] = $0;
 HEAP32[$9 + 88 >> 2] = 1;
 HEAP32[$9 + 92 >> 2] = 1;
 HEAP32[$9 + 32 >> 2] = 160;
 $23 = $0 << 2;
 $25 = $9 + 60 | 0;
 HEAP32[$25 >> 2] = _speex_alloc_515($23) | 0;
 $27 = $9 + 68 | 0;
 HEAP32[$27 >> 2] = _speex_alloc_515($23) | 0;
 $29 = $9 + 64 | 0;
 HEAP32[$29 >> 2] = _speex_alloc_515($23) | 0;
 $$02 = 0;
 while (1) {
  if (($$02 | 0) == ($0 | 0)) break;
  HEAP32[(HEAP32[$25 >> 2] | 0) + ($$02 << 2) >> 2] = 0;
  HEAP32[(HEAP32[$27 >> 2] | 0) + ($$02 << 2) >> 2] = 0;
  HEAP32[(HEAP32[$29 >> 2] | 0) + ($$02 << 2) >> 2] = 0;
  $$02 = $$02 + 1 | 0;
 }
 _speex_resampler_set_quality($9, $5);
 _speex_resampler_set_rate_frac($9, $1, $2, $3, $4);
 $37 = _update_filter($9) | 0;
 if (!$37) {
  HEAP32[$10 >> 2] = 1;
  $$01 = $9;
 } else {
  _speex_resampler_destroy($9);
  $$01 = 0;
 }
 if (!$6) {
  $$0 = $$01;
  return $$0 | 0;
 }
 HEAP32[$6 >> 2] = $37;
 $$0 = $$01;
 return $$0 | 0;
}

function _silk_NLSF2A($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $$01 = 0, $$1 = 0, $$2 = 0, $12 = 0, $13 = 0, $18 = 0, $29 = 0, $3 = 0, $35 = 0, $38 = 0, $4 = 0, $43 = 0, $48 = 0, $5 = 0, $6 = 0, $8 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 304 | 0;
 $3 = sp + 200 | 0;
 $4 = sp + 148 | 0;
 $5 = sp + 96 | 0;
 $6 = sp;
 $8 = ($2 | 0) == 16 ? 28030 : 28046;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) >= ($2 | 0)) break;
  $12 = HEAP16[$1 + ($$01 << 1) >> 1] | 0;
  $13 = $12 >> 8;
  $18 = HEAP16[23014 + ($13 << 1) >> 1] | 0;
  $29 = (($18 << 8) + (Math_imul((HEAP16[23014 + ($13 + 1 << 1) >> 1] | 0) - $18 | 0, $12 - ($13 << 8) | 0) | 0) >> 3) + 1 >> 1;
  HEAP32[$3 + (HEAPU8[$8 + $$01 >> 0] << 2) >> 2] = $29;
  $$01 = $$01 + 1 | 0;
 }
 $35 = $2 >> 1;
 _silk_NLSF2A_find_poly($4, $3, $35);
 _silk_NLSF2A_find_poly($5, $3 + 4 | 0, $35);
 $$1 = 0;
 while (1) {
  if (($$1 | 0) >= ($35 | 0)) break;
  $38 = $$1 + 1 | 0;
  $43 = (HEAP32[$4 + ($38 << 2) >> 2] | 0) + (HEAP32[$4 + ($$1 << 2) >> 2] | 0) | 0;
  $48 = (HEAP32[$5 + ($38 << 2) >> 2] | 0) - (HEAP32[$5 + ($$1 << 2) >> 2] | 0) | 0;
  HEAP32[$6 + ($$1 << 2) >> 2] = 0 - $48 - $43;
  HEAP32[$6 + ($2 - $$1 + -1 << 2) >> 2] = $48 - $43;
  $$1 = $38;
 }
 _silk_LPC_fit($0, $6, $2);
 $$0 = 0;
 while (1) {
  if (!((_silk_LPC_inverse_pred_gain_c($0, $2) | 0) == 0 & ($$0 | 0) < 16)) break;
  _silk_bwexpander_32($6, $2, 65536 - (2 << $$0) | 0);
  $$2 = 0;
  while (1) {
   if (($$2 | 0) >= ($2 | 0)) break;
   HEAP16[$0 + ($$2 << 1) >> 1] = (((HEAP32[$6 + ($$2 << 2) >> 2] | 0) >>> 4) + 1 | 0) >>> 1;
   $$2 = $$2 + 1 | 0;
  }
  $$0 = $$0 + 1 | 0;
 }
 STACKTOP = sp;
 return;
}

function _tf_decode($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $$04 = 0, $$05 = 0, $$07 = 0, $$1 = 0, $$13 = 0, $$16 = 0, $$18 = 0, $$idx10 = 0, $$idx11 = 0, $10 = 0, $11 = 0, $17 = 0, $18 = 0, $19 = 0, $24 = 0, $29 = 0, $39 = 0, $41 = 0, $8 = 0, $9 = 0;
 $8 = HEAP32[$5 + 4 >> 2] << 3;
 $$idx10 = $5 + 20 | 0;
 $$idx11 = $5 + 28 | 0;
 $9 = _ec_tell_2(HEAP32[$$idx10 >> 2] | 0, HEAP32[$$idx11 >> 2] | 0) | 0;
 $10 = ($2 | 0) != 0;
 $11 = $10 ? 2 : 4;
 if (($4 | 0) > 0) $17 = ($9 + $11 + 1 | 0) >>> 0 <= $8 >>> 0; else $17 = 0;
 $18 = $8 - ($17 & 1) | 0;
 $19 = $10 ? 4 : 5;
 $$0 = $9;
 $$01 = $11;
 $$02 = 0;
 $$05 = 0;
 $$07 = $0;
 while (1) {
  if (($$07 | 0) >= ($1 | 0)) break;
  if (($$0 + $$01 | 0) >>> 0 > $18 >>> 0) {
   $$1 = $$0;
   $$13 = $$02;
   $$16 = $$05;
  } else {
   $24 = $$05 ^ (_ec_dec_bit_logp($5, $$01) | 0);
   $$1 = _ec_tell_2(HEAP32[$$idx10 >> 2] | 0, HEAP32[$$idx11 >> 2] | 0) | 0;
   $$13 = $$02 | $24;
   $$16 = $24;
  }
  HEAP32[$3 + ($$07 << 2) >> 2] = $$16;
  $$0 = $$1;
  $$01 = $19;
  $$02 = $$13;
  $$05 = $$16;
  $$07 = $$07 + 1 | 0;
 }
 $29 = $2 << 2;
 if ($17) if ((HEAP8[$29 + $$02 + (23646 + ($4 << 3)) >> 0] | 0) == (HEAP8[($29 | 2) + $$02 + (23646 + ($4 << 3)) >> 0] | 0)) $$04 = 0; else $$04 = (_ec_dec_bit_logp($5, 1) | 0) << 1; else $$04 = 0;
 $39 = $29 + $$04 | 0;
 $$18 = $0;
 while (1) {
  if (($$18 | 0) >= ($1 | 0)) break;
  $41 = $3 + ($$18 << 2) | 0;
  HEAP32[$41 >> 2] = HEAP8[$39 + (HEAP32[$41 >> 2] | 0) + (23646 + ($4 << 3)) >> 0];
  $$18 = $$18 + 1 | 0;
 }
 return;
}

function _silk_resampler($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$pre$phiZ2D = 0, $13 = 0, $21 = 0, $29 = 0, $37 = 0, $4 = 0, $47 = 0, $6 = 0, $7 = 0, $8 = 0;
 $4 = $0 + 284 | 0;
 $6 = $0 + 292 | 0;
 $7 = HEAP32[$6 >> 2] | 0;
 $8 = (HEAP32[$4 >> 2] | 0) - $7 | 0;
 _memcpy($0 + 168 + ($7 << 1) | 0, $2 | 0, $8 << 1 | 0) | 0;
 switch (HEAP32[$0 + 264 >> 2] | 0) {
 case 1:
  {
   $13 = $0 + 168 | 0;
   _silk_resampler_private_up2_HQ_wrapper($0, $1, $13, HEAP32[$4 >> 2] | 0);
   _silk_resampler_private_up2_HQ_wrapper($0, $1 + (HEAP32[$0 + 288 >> 2] << 1) | 0, $2 + ($8 << 1) | 0, $3 - (HEAP32[$4 >> 2] | 0) | 0);
   $$pre$phiZ2D = $13;
   break;
  }
 case 2:
  {
   $21 = $0 + 168 | 0;
   _silk_resampler_private_IIR_FIR($0, $1, $21, HEAP32[$4 >> 2] | 0);
   _silk_resampler_private_IIR_FIR($0, $1 + (HEAP32[$0 + 288 >> 2] << 1) | 0, $2 + ($8 << 1) | 0, $3 - (HEAP32[$4 >> 2] | 0) | 0);
   $$pre$phiZ2D = $21;
   break;
  }
 case 3:
  {
   $29 = $0 + 168 | 0;
   _silk_resampler_private_down_FIR($0, $1, $29, HEAP32[$4 >> 2] | 0);
   _silk_resampler_private_down_FIR($0, $1 + (HEAP32[$0 + 288 >> 2] << 1) | 0, $2 + ($8 << 1) | 0, $3 - (HEAP32[$4 >> 2] | 0) | 0);
   $$pre$phiZ2D = $29;
   break;
  }
 default:
  {
   $37 = $0 + 168 | 0;
   _memcpy($1 | 0, $37 | 0, HEAP32[$4 >> 2] << 1 | 0) | 0;
   _memcpy($1 + (HEAP32[$0 + 288 >> 2] << 1) | 0, $2 + ($8 << 1) | 0, $3 - (HEAP32[$4 >> 2] | 0) << 1 | 0) | 0;
   $$pre$phiZ2D = $37;
  }
 }
 $47 = HEAP32[$6 >> 2] | 0;
 _memcpy($$pre$phiZ2D | 0, $2 + ($3 - $47 << 1) | 0, $47 << 1 | 0) | 0;
 return;
}

function _speex_resampler_magic($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $15 = 0, $17 = 0, $21 = 0, $26 = 0, $28 = 0, $30 = 0, $31 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $5 = 0, $6 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 $4 = sp + 4 | 0;
 $5 = sp;
 HEAP32[$4 >> 2] = $3;
 $6 = $0 + 68 | 0;
 HEAP32[$5 >> 2] = HEAP32[(HEAP32[$6 >> 2] | 0) + ($1 << 2) >> 2];
 $15 = (HEAP32[$0 + 72 >> 2] | 0) + ((Math_imul(HEAP32[$0 + 28 >> 2] | 0, $1) | 0) << 2) | 0;
 $17 = HEAP32[$0 + 24 >> 2] | 0;
 _speex_resampler_process_native($0, $1, $5, HEAP32[$2 >> 2] | 0, $4);
 $21 = (HEAP32[$6 >> 2] | 0) + ($1 << 2) | 0;
 HEAP32[$21 >> 2] = (HEAP32[$21 >> 2] | 0) - (HEAP32[$5 >> 2] | 0);
 $26 = HEAP32[(HEAP32[$6 >> 2] | 0) + ($1 << 2) >> 2] | 0;
 if (!$26) {
  $38 = HEAP32[$4 >> 2] | 0;
  $39 = $0 + 92 | 0;
  $40 = HEAP32[$39 >> 2] | 0;
  $41 = Math_imul($38, $40) | 0;
  $42 = HEAP32[$2 >> 2] | 0;
  $43 = $42 + ($41 << 2) | 0;
  HEAP32[$2 >> 2] = $43;
  STACKTOP = sp;
  return $38 | 0;
 }
 $28 = $17 + -1 | 0;
 $$0 = 0;
 $30 = $26;
 while (1) {
  if ($$0 >>> 0 >= $30 >>> 0) break;
  $31 = $28 + $$0 | 0;
  HEAP32[$15 + ($31 << 2) >> 2] = HEAP32[$15 + ($31 + (HEAP32[$5 >> 2] | 0) << 2) >> 2];
  $$0 = $$0 + 1 | 0;
  $30 = HEAP32[(HEAP32[$6 >> 2] | 0) + ($1 << 2) >> 2] | 0;
 }
 $38 = HEAP32[$4 >> 2] | 0;
 $39 = $0 + 92 | 0;
 $40 = HEAP32[$39 >> 2] | 0;
 $41 = Math_imul($38, $40) | 0;
 $42 = HEAP32[$2 >> 2] | 0;
 $43 = $42 + ($41 << 2) | 0;
 HEAP32[$2 >> 2] = $43;
 STACKTOP = sp;
 return $38 | 0;
}

function _celt_fir_c($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0.0, $$01 = 0, $$02 = 0, $$1 = 0, $$2 = 0, $12 = 0, $20 = 0, $22 = 0, $25 = 0, $28 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 $4 = sp + 96 | 0;
 $5 = sp;
 $$02 = 0;
 while (1) {
  if (($$02 | 0) == 24) break;
  HEAP32[$5 + ($$02 << 2) >> 2] = HEAP32[$1 + (24 - $$02 + -1 << 2) >> 2];
  $$02 = $$02 + 1 | 0;
 }
 $6 = $3 + -3 | 0;
 $7 = $4 + 4 | 0;
 $8 = $4 + 8 | 0;
 $9 = $4 + 12 | 0;
 $12 = (($6 | 0) > 0 ? $6 : 0) + 3 & -4;
 $$1 = 0;
 while (1) {
  if (($$1 | 0) >= ($6 | 0)) {
   $$2 = $12;
   break;
  }
  $20 = $0 + ($$1 << 2) | 0;
  HEAP32[$4 >> 2] = HEAP32[$20 >> 2];
  $22 = $$1 | 1;
  HEAP32[$7 >> 2] = HEAP32[$0 + ($22 << 2) >> 2];
  $25 = $$1 | 2;
  HEAP32[$8 >> 2] = HEAP32[$0 + ($25 << 2) >> 2];
  $28 = $$1 | 3;
  HEAP32[$9 >> 2] = HEAP32[$0 + ($28 << 2) >> 2];
  _xcorr_kernel_c_62($5, $20 + -96 | 0, $4, 24);
  HEAP32[$2 + ($$1 << 2) >> 2] = HEAP32[$4 >> 2];
  HEAP32[$2 + ($22 << 2) >> 2] = HEAP32[$7 >> 2];
  HEAP32[$2 + ($25 << 2) >> 2] = HEAP32[$8 >> 2];
  HEAP32[$2 + ($28 << 2) >> 2] = HEAP32[$9 >> 2];
  $$1 = $$1 + 4 | 0;
 }
 while (1) {
  if (($$2 | 0) >= ($3 | 0)) break;
  $$0 = +HEAPF32[$0 + ($$2 << 2) >> 2];
  $$01 = 0;
  while (1) {
   if (($$01 | 0) == 24) break;
   $$0 = $$0 + +HEAPF32[$5 + ($$01 << 2) >> 2] * +HEAPF32[$0 + ($$2 + $$01 + -24 << 2) >> 2];
   $$01 = $$01 + 1 | 0;
  }
  HEAPF32[$2 + ($$2 << 2) >> 2] = $$0;
  $$2 = $$2 + 1 | 0;
 }
 STACKTOP = sp;
 return;
}

function _resampler_basic_direct_single($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$0 = 0, $$01 = 0.0, $$02 = 0, $$03 = 0, $$05 = 0, $12 = 0, $17 = 0, $19 = 0, $21 = 0, $23 = 0, $25 = 0, $31 = 0, $32 = 0, $39 = 0.0, $45 = 0, $46 = 0, $7 = 0, $8 = 0, label = 0;
 $7 = HEAP32[$0 + 24 >> 2] | 0;
 $8 = $0 + 60 | 0;
 $12 = $0 + 64 | 0;
 $17 = HEAP32[$0 + 76 >> 2] | 0;
 $19 = HEAP32[$0 + 92 >> 2] | 0;
 $21 = HEAP32[$0 + 36 >> 2] | 0;
 $23 = HEAP32[$0 + 40 >> 2] | 0;
 $25 = HEAP32[$0 + 12 >> 2] | 0;
 $$02 = HEAP32[(HEAP32[$12 >> 2] | 0) + ($1 << 2) >> 2] | 0;
 $$03 = HEAP32[(HEAP32[$8 >> 2] | 0) + ($1 << 2) >> 2] | 0;
 $$05 = 0;
 while (1) {
  if (($$03 | 0) >= (HEAP32[$3 >> 2] | 0)) {
   label = 8;
   break;
  }
  if (($$05 | 0) >= (HEAP32[$5 >> 2] | 0)) {
   label = 8;
   break;
  }
  $31 = $17 + ((Math_imul($$02, $7) | 0) << 2) | 0;
  $32 = $2 + ($$03 << 2) | 0;
  $$0 = 0;
  $$01 = 0.0;
  while (1) {
   if (($$0 | 0) >= ($7 | 0)) break;
   $39 = $$01 + +HEAPF32[$31 + ($$0 << 2) >> 2] * +HEAPF32[$32 + ($$0 << 2) >> 2];
   $$0 = $$0 + 1 | 0;
   $$01 = $39;
  }
  HEAPF32[$4 + ((Math_imul($19, $$05) | 0) << 2) >> 2] = $$01;
  $45 = $$02 + $23 | 0;
  $46 = $45 >>> 0 < $25 >>> 0;
  $$02 = $45 - ($46 ? 0 : $25) | 0;
  $$03 = $$03 + $21 + (($46 ^ 1) & 1) | 0;
  $$05 = $$05 + 1 | 0;
 }
 if ((label | 0) == 8) {
  HEAP32[(HEAP32[$8 >> 2] | 0) + ($1 << 2) >> 2] = $$03;
  HEAP32[(HEAP32[$12 >> 2] | 0) + ($1 << 2) >> 2] = $$02;
  return $$05 | 0;
 }
 return 0;
}

function _silk_NLSF2A_find_poly($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $$01 = 0, $12 = 0, $15 = 0, $17 = 0, $20 = 0, $22 = 0, $24 = 0, $26 = 0, $29 = 0, $34 = 0, $37 = 0, $39 = 0, $41 = 0, $43 = 0, $45 = 0, $48 = 0, $5 = 0, $9 = 0, $storemerge = 0;
 HEAP32[$0 >> 2] = 65536;
 $5 = $0 + 4 | 0;
 $$01 = 1;
 $storemerge = 0 - (HEAP32[$1 >> 2] | 0) | 0;
 while (1) {
  HEAP32[$5 >> 2] = $storemerge;
  if (($$01 | 0) >= ($2 | 0)) break;
  $9 = HEAP32[$1 + ($$01 << 1 << 2) >> 2] | 0;
  $12 = HEAP32[$0 + ($$01 + -1 << 2) >> 2] | 0;
  $15 = (($9 | 0) < 0) << 31 >> 31;
  $17 = HEAP32[$0 + ($$01 << 2) >> 2] | 0;
  $20 = ___muldi3($9 | 0, $15 | 0, $17 | 0, (($17 | 0) < 0) << 31 >> 31 | 0) | 0;
  $22 = _bitshift64Lshr($20 | 0, tempRet0 | 0, 15) | 0;
  $24 = _i64Add($22 | 0, tempRet0 | 0, 1, 0) | 0;
  $26 = _bitshift64Lshr($24 | 0, tempRet0 | 0, 1) | 0;
  $29 = $$01 + 1 | 0;
  HEAP32[$0 + ($29 << 2) >> 2] = ($12 << 1) - $26;
  $$0 = $$01;
  $37 = $12;
  while (1) {
   if (($$0 | 0) <= 1) break;
   $34 = HEAP32[$0 + ($$0 + -2 << 2) >> 2] | 0;
   $39 = ___muldi3($9 | 0, $15 | 0, $37 | 0, (($37 | 0) < 0) << 31 >> 31 | 0) | 0;
   $41 = _bitshift64Lshr($39 | 0, tempRet0 | 0, 15) | 0;
   $43 = _i64Add($41 | 0, tempRet0 | 0, 1, 0) | 0;
   $45 = _bitshift64Lshr($43 | 0, tempRet0 | 0, 1) | 0;
   $48 = $0 + ($$0 << 2) | 0;
   HEAP32[$48 >> 2] = (HEAP32[$48 >> 2] | 0) + ($34 - $45);
   $$0 = $$0 + -1 | 0;
   $37 = $34;
  }
  $$01 = $29;
  $storemerge = (HEAP32[$5 >> 2] | 0) - $9 | 0;
 }
 return;
}

function _silk_shell_decoder($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $10 = 0, $20 = 0, $21 = 0, $3 = 0, $32 = 0, $33 = 0, $36 = 0, $37 = 0, $4 = 0, $48 = 0, $49 = 0, $5 = 0, $6 = 0, $7 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 $3 = sp + 24 | 0;
 $4 = sp + 16 | 0;
 $5 = sp;
 $6 = $3 + 2 | 0;
 _decode_split($3, $6, $1, $2, 27819);
 $7 = $4 + 2 | 0;
 _decode_split($4, $7, $1, HEAP16[$3 >> 1] | 0, 27667);
 $10 = $5 + 2 | 0;
 _decode_split($5, $10, $1, HEAP16[$4 >> 1] | 0, 27515);
 _decode_split($0, $0 + 2 | 0, $1, HEAP16[$5 >> 1] | 0, 27363);
 _decode_split($0 + 4 | 0, $0 + 6 | 0, $1, HEAP16[$10 >> 1] | 0, 27363);
 $20 = $5 + 4 | 0;
 $21 = $5 + 6 | 0;
 _decode_split($20, $21, $1, HEAP16[$7 >> 1] | 0, 27515);
 _decode_split($0 + 8 | 0, $0 + 10 | 0, $1, HEAP16[$20 >> 1] | 0, 27363);
 _decode_split($0 + 12 | 0, $0 + 14 | 0, $1, HEAP16[$21 >> 1] | 0, 27363);
 $32 = $4 + 4 | 0;
 $33 = $4 + 6 | 0;
 _decode_split($32, $33, $1, HEAP16[$6 >> 1] | 0, 27667);
 $36 = $5 + 8 | 0;
 $37 = $5 + 10 | 0;
 _decode_split($36, $37, $1, HEAP16[$32 >> 1] | 0, 27515);
 _decode_split($0 + 16 | 0, $0 + 18 | 0, $1, HEAP16[$36 >> 1] | 0, 27363);
 _decode_split($0 + 20 | 0, $0 + 22 | 0, $1, HEAP16[$37 >> 1] | 0, 27363);
 $48 = $5 + 12 | 0;
 $49 = $5 + 14 | 0;
 _decode_split($48, $49, $1, HEAP16[$33 >> 1] | 0, 27515);
 _decode_split($0 + 24 | 0, $0 + 26 | 0, $1, HEAP16[$48 >> 1] | 0, 27363);
 _decode_split($0 + 28 | 0, $0 + 30 | 0, $1, HEAP16[$49 >> 1] | 0, 27363);
 STACKTOP = sp;
 return;
}

function _opus_fft_impl($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$ = 0, $$0 = 0, $$01 = 0, $$02 = 0, $$03 = 0, $$idx = 0, $$pre = 0, $12 = 0, $14 = 0, $15 = 0, $2 = 0, $35 = 0, $38 = 0, $4 = 0, $41 = 0, $6 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 $2 = sp;
 $4 = HEAP32[$0 + 8 >> 2] | 0;
 $$ = ($4 | 0) > 0 ? $4 : 0;
 HEAP32[$2 >> 2] = 1;
 $$01 = 0;
 $14 = 1;
 while (1) {
  $6 = $$01 << 1;
  $12 = HEAP16[$0 + 12 + (($6 | 1) << 1) >> 1] | 0;
  $14 = Math_imul($14, HEAP16[$0 + 12 + ($6 << 1) >> 1] | 0) | 0;
  $15 = $$01 + 1 | 0;
  HEAP32[$2 + ($15 << 2) >> 2] = $14;
  if ($12 << 16 >> 16 == 1) break; else $$01 = $15;
 }
 $$idx = $0 + 48 | 0;
 $$0 = $$01;
 $$03 = HEAP16[$0 + 12 + (($15 << 1) + -1 << 1) >> 1] | 0;
 while (1) {
  if (($$0 | 0) <= -1) break;
  $$pre = $$0 << 1;
  if (!$$0) $$02 = 1; else $$02 = HEAP16[$0 + 12 + ($$pre + -1 << 1) >> 1] | 0;
  switch (HEAP16[$0 + 12 + ($$pre << 1) >> 1] | 0) {
  case 2:
   {
    _kf_bfly2($1, HEAP32[$2 + ($$0 << 2) >> 2] | 0);
    break;
   }
  case 4:
   {
    $35 = HEAP32[$2 + ($$0 << 2) >> 2] | 0;
    _kf_bfly4($1, $35 << $$, $0, $$03, $35, $$02);
    break;
   }
  case 3:
   {
    $38 = HEAP32[$2 + ($$0 << 2) >> 2] | 0;
    _kf_bfly3($1, $38 << $$, $0, $$03, $38, $$02);
    break;
   }
  case 5:
   {
    $41 = HEAP32[$2 + ($$0 << 2) >> 2] | 0;
    _kf_bfly5($1, $41 << $$, HEAP32[$$idx >> 2] | 0, $$03, $41, $$02);
    break;
   }
  default:
   {}
  }
  $$0 = $$0 + -1 | 0;
  $$03 = $$02;
 }
 STACKTOP = sp;
 return;
}

function _silk_LPC_analysis_filter($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $12 = 0, $17 = 0, $24 = 0, $31 = 0, $38 = 0, $45 = 0, $5 = 0, $6 = 0, $62 = 0, $7 = 0, $8 = 0, $81 = 0, $9 = 0;
 $5 = $2 + 2 | 0;
 $6 = $2 + 4 | 0;
 $7 = $2 + 6 | 0;
 $8 = $2 + 8 | 0;
 $9 = $2 + 10 | 0;
 $$01 = $4;
 while (1) {
  if (($$01 | 0) >= ($3 | 0)) break;
  $12 = $1 + ($$01 + -1 << 1) | 0;
  $17 = Math_imul(HEAP16[$12 >> 1] | 0, HEAP16[$2 >> 1] | 0) | 0;
  $24 = $17 + (Math_imul(HEAP16[$12 + -2 >> 1] | 0, HEAP16[$5 >> 1] | 0) | 0) | 0;
  $31 = $24 + (Math_imul(HEAP16[$12 + -4 >> 1] | 0, HEAP16[$6 >> 1] | 0) | 0) | 0;
  $38 = $31 + (Math_imul(HEAP16[$12 + -6 >> 1] | 0, HEAP16[$7 >> 1] | 0) | 0) | 0;
  $45 = $38 + (Math_imul(HEAP16[$12 + -8 >> 1] | 0, HEAP16[$8 >> 1] | 0) | 0) | 0;
  $$0 = $45 + (Math_imul(HEAP16[$12 + -10 >> 1] | 0, HEAP16[$9 >> 1] | 0) | 0) | 0;
  $$02 = 6;
  while (1) {
   if (($$02 | 0) >= ($4 | 0)) break;
   $62 = $$0 + (Math_imul(HEAP16[$12 + (0 - $$02 << 1) >> 1] | 0, HEAP16[$2 + ($$02 << 1) >> 1] | 0) | 0) | 0;
   $$0 = $62 + (Math_imul(HEAP16[$12 + (~$$02 << 1) >> 1] | 0, HEAP16[$2 + (($$02 | 1) << 1) >> 1] | 0) | 0) | 0;
   $$02 = $$02 + 2 | 0;
  }
  $81 = ((HEAP16[$12 + 2 >> 1] << 12) - $$0 >> 11) + 1 >> 1;
  HEAP16[$0 + ($$01 << 1) >> 1] = ($81 | 0) > 32767 ? 32767 : (($81 | 0) > -32768 ? $81 : -32768) & 65535;
  $$01 = $$01 + 1 | 0;
 }
 _memset($0 | 0, 0, $4 << 1 | 0) | 0;
 return;
}

function _silk_sum_sqr_shift($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $$01 = 0, $$1 = 0, $$12 = 0, $$2 = 0, $$3 = 0, $13 = 0, $14 = 0, $18 = 0, $27 = 0, $34 = 0, $37 = 0, $41 = 0, $42 = 0, $46 = 0, $5 = 0, $55 = 0, $6 = 0, $9 = 0;
 $5 = 31 - (_silk_CLZ32_334($3) | 0) | 0;
 $6 = $3 + -1 | 0;
 $9 = (($6 | 0) > 0 ? $6 : 0) + 1 & -2;
 $$0 = $3;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) >= ($6 | 0)) break;
  $13 = HEAP16[$2 + ($$01 << 1) >> 1] | 0;
  $14 = Math_imul($13, $13) | 0;
  $18 = HEAP16[$2 + (($$01 | 1) << 1) >> 1] | 0;
  $$0 = $$0 + (($14 + (Math_imul($18, $18) | 0) | 0) >>> $5) | 0;
  $$01 = $$01 + 2 | 0;
 }
 if (($9 | 0) < ($3 | 0)) {
  $27 = HEAP16[$2 + ($9 << 1) >> 1] | 0;
  $$1 = $$0 + ((Math_imul($27, $27) | 0) >>> $5) | 0;
 } else $$1 = $$0;
 $34 = _silk_max_32_335($5 + 3 - (_silk_CLZ32_334($$1) | 0) | 0) | 0;
 $37 = (($6 | 0) > 0 ? $6 : 0) + 1 & -2;
 $$12 = 0;
 $$2 = 0;
 while (1) {
  if (($$12 | 0) >= ($6 | 0)) break;
  $41 = HEAP16[$2 + ($$12 << 1) >> 1] | 0;
  $42 = Math_imul($41, $41) | 0;
  $46 = HEAP16[$2 + (($$12 | 1) << 1) >> 1] | 0;
  $$12 = $$12 + 2 | 0;
  $$2 = $$2 + (($42 + (Math_imul($46, $46) | 0) | 0) >>> $34) | 0;
 }
 if (($37 | 0) >= ($3 | 0)) {
  $$3 = $$2;
  HEAP32[$1 >> 2] = $34;
  HEAP32[$0 >> 2] = $$3;
  return;
 }
 $55 = HEAP16[$2 + ($37 << 1) >> 1] | 0;
 $$3 = $$2 + ((Math_imul($55, $55) | 0) >>> $34) | 0;
 HEAP32[$1 >> 2] = $34;
 HEAP32[$0 >> 2] = $$3;
 return;
}

function _silk_LPC_fit($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$ = 0, $$0 = 0, $$01 = 0, $$03 = 0, $$03$$12 = 0, $$06 = 0, $$12 = 0, $$14 = 0, $$25 = 0, $10 = 0, $14 = 0, $27 = 0, $31 = 0, $34 = 0, $6 = 0, $9 = 0;
 $$01 = 0;
 $$06 = 0;
 while (1) {
  if (($$06 | 0) < 10) {
   $$0 = 0;
   $$03 = 0;
   $$12 = $$01;
  } else break;
  while (1) {
   if (($$03 | 0) >= ($2 | 0)) break;
   $6 = HEAP32[$1 + ($$03 << 2) >> 2] | 0;
   $9 = ($6 | 0) > 0 ? $6 : 0 - $6 | 0;
   $10 = ($9 | 0) > ($$0 | 0);
   $$03$$12 = $10 ? $$03 : $$12;
   $$0 = $10 ? $9 : $$0;
   $$03 = $$03 + 1 | 0;
   $$12 = $$03$$12;
  }
  $14 = ($$0 >> 4) + 1 >> 1;
  if (($14 | 0) <= 32767) break;
  $$ = ($14 | 0) < 163838 ? $14 : 163838;
  _silk_bwexpander_32($1, $2, 65470 - ((($$ << 14) + -536854528 | 0) / ((Math_imul($$, $$12 + 1 | 0) | 0) >> 2 | 0) | 0) | 0);
  $$01 = $$12;
  $$06 = $$06 + 1 | 0;
 }
 if (($$06 | 0) == 10) {
  $$14 = 0;
  while (1) {
   if (($$14 | 0) >= ($2 | 0)) break;
   $27 = $1 + ($$14 << 2) | 0;
   $31 = (HEAP32[$27 >> 2] >> 4) + 1 >> 1;
   $34 = ($31 | 0) > 32767 ? 32767 : ($31 | 0) > -32768 ? $31 : -32768;
   HEAP16[$0 + ($$14 << 1) >> 1] = $34;
   HEAP32[$27 >> 2] = $34 << 16 >> 11;
   $$14 = $$14 + 1 | 0;
  }
  return;
 } else {
  $$25 = 0;
  while (1) {
   if (($$25 | 0) >= ($2 | 0)) break;
   HEAP16[$0 + ($$25 << 1) >> 1] = (((HEAP32[$1 + ($$25 << 2) >> 2] | 0) >>> 4) + 1 | 0) >>> 1;
   $$25 = $$25 + 1 | 0;
  }
  return;
 }
}

function __celt_lpc($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0.0, $$01 = 0.0, $$02 = 0, $$1 = 0, $19 = 0.0, $20 = 0.0, $22 = 0, $23 = 0, $25 = 0, $26 = 0.0, $28 = 0, $29 = 0.0, $3 = 0.0, $indvars$iv = 0, label = 0, $indvars$iv$looptemp = 0;
 $3 = +HEAPF32[$1 >> 2];
 _memset($0 | 0, 0, $2 << 2 | 0) | 0;
 if (+HEAPF32[$1 >> 2] != 0.0) {
  $$01 = $3;
  $indvars$iv = 0;
 } else return;
 while (1) {
  if (($indvars$iv | 0) < ($2 | 0)) {
   $$0 = 0.0;
   $$02 = 0;
  } else {
   label = 9;
   break;
  }
  while (1) {
   if (($indvars$iv | 0) == ($$02 | 0)) break;
   $$0 = $$0 + +HEAPF32[$0 + ($$02 << 2) >> 2] * +HEAPF32[$1 + ($indvars$iv - $$02 << 2) >> 2];
   $$02 = $$02 + 1 | 0;
  }
  $indvars$iv$looptemp = $indvars$iv;
  $indvars$iv = $indvars$iv + 1 | 0;
  $19 = ($$0 + +HEAPF32[$1 + ($indvars$iv << 2) >> 2]) / $$01;
  $20 = -$19;
  HEAPF32[$0 + ($indvars$iv$looptemp << 2) >> 2] = $20;
  $22 = $indvars$iv >> 1;
  $23 = $indvars$iv$looptemp + -1 | 0;
  $$1 = 0;
  while (1) {
   if (($$1 | 0) >= ($22 | 0)) break;
   $25 = $0 + ($$1 << 2) | 0;
   $26 = +HEAPF32[$25 >> 2];
   $28 = $0 + ($23 - $$1 << 2) | 0;
   $29 = +HEAPF32[$28 >> 2];
   HEAPF32[$25 >> 2] = $26 + $29 * $20;
   HEAPF32[$28 >> 2] = $29 + $26 * $20;
   $$1 = $$1 + 1 | 0;
  }
  $$01 = $$01 - $19 * $19 * $$01;
  if ($$01 < +HEAPF32[$1 >> 2] * 1.0000000474974513e-03) {
   label = 9;
   break;
  }
 }
 if ((label | 0) == 9) return;
}

function _silk_DIV32_varQ($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $11 = 0, $12 = 0, $16 = 0, $21 = 0, $26 = 0, $28 = 0, $31 = 0, $38 = 0, $4 = 0, $40 = 0, $41 = 0, $43 = 0, $44 = 0, $45 = 0, $51 = 0, $52 = 0, $6 = 0;
 $4 = _silk_CLZ32_98(($0 | 0) > 0 ? $0 : 0 - $0 | 0) | 0;
 $6 = $0 << $4 + -1;
 $11 = (_silk_CLZ32_98(($1 | 0) > 0 ? $1 : 0 - $1 | 0) | 0) + -1 | 0;
 $12 = $1 << $11;
 $16 = (536870911 / ($12 >> 16 | 0) | 0) << 16 >> 16;
 $21 = (Math_imul($6 >> 16, $16) | 0) + ((Math_imul($6 & 65535, $16) | 0) >> 16) | 0;
 $26 = ___muldi3($12 | 0, (($12 | 0) < 0) << 31 >> 31 | 0, $21 | 0, (($21 | 0) < 0) << 31 >> 31 | 0) | 0;
 $28 = _bitshift64Lshr($26 | 0, tempRet0 | 0, 29) | 0;
 $31 = $6 - ($28 & -8) | 0;
 $38 = $21 + ((Math_imul($31 >> 16, $16) | 0) + ((Math_imul($31 & 65535, $16) | 0) >> 16)) | 0;
 $40 = $4 + 28 - $11 | 0;
 $41 = $40 + -16 | 0;
 if (($40 | 0) >= 16) return (($41 | 0) < 32 ? $38 >> $41 : 0) | 0;
 $43 = 16 - $40 | 0;
 $44 = -2147483648 >> $43;
 $45 = 2147483647 >>> $43;
 if (($44 | 0) > ($45 | 0)) {
  if (($38 | 0) > ($44 | 0)) {
   $52 = $44;
   $51 = $52 << $43;
   return $51 | 0;
  }
  $52 = ($38 | 0) < ($45 | 0) ? $45 : $38;
  $51 = $52 << $43;
  return $51 | 0;
 } else {
  if (($38 | 0) > ($45 | 0)) {
   $52 = $45;
   $51 = $52 << $43;
   return $51 | 0;
  }
  $52 = ($38 | 0) < ($44 | 0) ? $44 : $38;
  $51 = $52 << $43;
  return $51 | 0;
 }
 return 0;
}

function _silk_resampler_private_IIR_FIR_INTERPOL($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $$01 = 0, $15 = 0, $23 = 0, $31 = 0, $39 = 0, $43 = 0, $48 = 0, $56 = 0, $64 = 0, $7 = 0, $75 = 0, $9 = 0;
 $$0 = $0;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) >= ($2 | 0)) break;
  $7 = (($$01 & 65535) * 12 | 0) >>> 16;
  $9 = $1 + ($$01 >> 16 << 1) | 0;
  $15 = Math_imul(HEAP16[$9 >> 1] | 0, HEAP16[23518 + ($7 << 3) >> 1] | 0) | 0;
  $23 = $15 + (Math_imul(HEAP16[$9 + 2 >> 1] | 0, HEAP16[23518 + ($7 << 3) + 2 >> 1] | 0) | 0) | 0;
  $31 = $23 + (Math_imul(HEAP16[$9 + 4 >> 1] | 0, HEAP16[23518 + ($7 << 3) + 4 >> 1] | 0) | 0) | 0;
  $39 = $31 + (Math_imul(HEAP16[$9 + 6 >> 1] | 0, HEAP16[23518 + ($7 << 3) + 6 >> 1] | 0) | 0) | 0;
  $43 = 11 - $7 | 0;
  $48 = $39 + (Math_imul(HEAP16[$9 + 8 >> 1] | 0, HEAP16[23518 + ($43 << 3) + 6 >> 1] | 0) | 0) | 0;
  $56 = $48 + (Math_imul(HEAP16[$9 + 10 >> 1] | 0, HEAP16[23518 + ($43 << 3) + 4 >> 1] | 0) | 0) | 0;
  $64 = $56 + (Math_imul(HEAP16[$9 + 12 >> 1] | 0, HEAP16[23518 + ($43 << 3) + 2 >> 1] | 0) | 0) | 0;
  $75 = ($64 + (Math_imul(HEAP16[$9 + 14 >> 1] | 0, HEAP16[23518 + ($43 << 3) >> 1] | 0) | 0) >> 14) + 1 >> 1;
  HEAP16[$$0 >> 1] = ($75 | 0) > 32767 ? 32767 : (($75 | 0) > -32768 ? $75 : -32768) & 65535;
  $$0 = $$0 + 2 | 0;
  $$01 = $$01 + $3 | 0;
 }
 return $$0 | 0;
}

function __celt_autocorr($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $$03 = 0.0, $$1 = 0, $$2 = 0, $18 = 0.0, $22 = 0, $40 = 0, $6 = 0, $7 = 0, sp = 0;
 sp = STACKTOP;
 $6 = $5 - $4 | 0;
 $7 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($5 << 2) | 0) + 15 & -16) | 0;
 L1 : do if (!$3) $$0 = $0; else {
  $$02 = 0;
  while (1) {
   if (($$02 | 0) >= ($5 | 0)) {
    $$1 = 0;
    break;
   }
   HEAP32[$7 + ($$02 << 2) >> 2] = HEAP32[$0 + ($$02 << 2) >> 2];
   $$02 = $$02 + 1 | 0;
  }
  while (1) {
   if (($$1 | 0) >= ($3 | 0)) {
    $$0 = $7;
    break L1;
   }
   $18 = +HEAPF32[$2 + ($$1 << 2) >> 2];
   HEAPF32[$7 + ($$1 << 2) >> 2] = +HEAPF32[$0 + ($$1 << 2) >> 2] * $18;
   $22 = $5 - $$1 + -1 | 0;
   HEAPF32[$7 + ($22 << 2) >> 2] = +HEAPF32[$0 + ($22 << 2) >> 2] * $18;
   $$1 = $$1 + 1 | 0;
  }
 } while (0);
 _celt_pitch_xcorr_c($$0, $$0, $1, $6, $4 + 1 | 0);
 $$01 = 0;
 while (1) {
  if (($$01 | 0) > ($4 | 0)) break;
  $$03 = 0.0;
  $$2 = $$01 + $6 | 0;
  while (1) {
   if (($$2 | 0) >= ($5 | 0)) break;
   $$03 = $$03 + +HEAPF32[$$0 + ($$2 << 2) >> 2] * +HEAPF32[$$0 + ($$2 - $$01 << 2) >> 2];
   $$2 = $$2 + 1 | 0;
  }
  $40 = $1 + ($$01 << 2) | 0;
  HEAPF32[$40 >> 2] = +HEAPF32[$40 >> 2] + $$03;
  $$01 = $$01 + 1 | 0;
 }
 STACKTOP = sp;
 return;
}

function _silk_resampler_private_down_FIR($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $$0$ = 0, $$01 = 0, $$02 = 0, $10 = 0, $12 = 0, $14 = 0, $16 = 0, $17 = 0, $19 = 0, $21 = 0, $26 = 0, $27 = 0, $31 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $9 = 0, sp = 0;
 sp = STACKTOP;
 $4 = $0 + 268 | 0;
 $5 = HEAP32[$4 >> 2] | 0;
 $6 = $0 + 276 | 0;
 $7 = HEAP32[$6 >> 2] | 0;
 $9 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($5 + $7 << 2) | 0) + 15 & -16) | 0;
 $10 = $0 + 24 | 0;
 _memcpy($9 | 0, $10 | 0, $7 << 2 | 0) | 0;
 $12 = $0 + 296 | 0;
 $14 = (HEAP32[$12 >> 2] | 0) + 4 | 0;
 $16 = HEAP32[$0 + 272 >> 2] | 0;
 $17 = $0 + 280 | 0;
 $$0 = $3;
 $$01 = $1;
 $$02 = $2;
 $19 = $5;
 $21 = $7;
 while (1) {
  $$0$ = ($$0 | 0) < ($19 | 0) ? $$0 : $19;
  _silk_resampler_private_AR2($0, $9 + ($21 << 2) | 0, $$02, HEAP32[$12 >> 2] | 0, $$0$);
  $26 = _silk_resampler_private_down_FIR_INTERPOL($$01, $9, $14, HEAP32[$6 >> 2] | 0, HEAP32[$17 >> 2] | 0, $$0$ << 16, $16) | 0;
  $27 = $$0 - $$0$ | 0;
  if (($27 | 0) <= 1) break;
  $31 = HEAP32[$6 >> 2] | 0;
  _memcpy($9 | 0, $9 + ($$0$ << 2) | 0, $31 << 2 | 0) | 0;
  $$0 = $27;
  $$01 = $26;
  $$02 = $$02 + ($$0$ << 1) | 0;
  $19 = HEAP32[$4 >> 2] | 0;
  $21 = $31;
 }
 _memcpy($10 | 0, $9 + ($$0$ << 2) | 0, HEAP32[$6 >> 2] << 2 | 0) | 0;
 STACKTOP = sp;
 return;
}

function _exp_rotation($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$0 = 0, $$01 = 0, $$1 = 0, $$pre3 = 0, $16 = 0.0, $18 = 0.0, $22 = 0.0, $27 = 0.0, $30 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0.0, $41 = 0.0;
 if (($4 << 1 | 0) >= ($1 | 0) | ($5 | 0) == 0) return;
 $16 = +($1 | 0) / +((Math_imul(HEAP32[18736 + ($5 + -1 << 2) >> 2] | 0, $4) | 0) + $1 | 0);
 $18 = $16 * $16 * .5;
 $22 = +Math_cos(+($18 * 1.5707963705062866));
 $27 = +Math_cos(+((1.0 - $18) * 1.5707963705062866));
 L4 : do if (($3 << 3 | 0) > ($1 | 0)) $$1 = 0; else {
  $30 = $3 >> 2;
  $$0 = 1;
  while (1) {
   if (((Math_imul((Math_imul($$0, $$0) | 0) + $$0 | 0, $3) | 0) + $30 | 0) >= ($1 | 0)) {
    $$1 = $$0;
    break L4;
   }
   $$0 = $$0 + 1 | 0;
  }
 } while (0);
 $37 = _celt_udiv_87($1, $3) | 0;
 $38 = ($2 | 0) < 0;
 $39 = ($$1 | 0) == 0;
 $40 = -$27;
 $41 = -$22;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) >= ($3 | 0)) break;
  $$pre3 = $0 + ((Math_imul($$01, $37) | 0) << 2) | 0;
  if ($38) {
   if (!$39) _exp_rotation1($$pre3, $37, $$1, $27, $22);
   _exp_rotation1($$pre3, $37, 1, $22, $27);
  } else {
   _exp_rotation1($$pre3, $37, 1, $22, $40);
   if (!$39) _exp_rotation1($$pre3, $37, $$1, $27, $41);
  }
  $$01 = $$01 + 1 | 0;
 }
 return;
}

function _opus_decoder_create($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $5 = 0, $8 = 0, label = 0;
 L1 : do if (($0 | 0) < 16e3) if (($0 | 0) < 12e3) switch ($0 | 0) {
 case 8e3:
  {
   label = 2;
   break L1;
   break;
  }
 default:
  break L1;
 } else switch ($0 | 0) {
 case 12e3:
  {
   label = 2;
   break L1;
   break;
  }
 default:
  break L1;
 } else {
  if (($0 | 0) < 24e3) switch ($0 | 0) {
  case 16e3:
   {
    label = 2;
    break L1;
    break;
   }
  default:
   break L1;
  }
  if (($0 | 0) < 48e3) switch ($0 | 0) {
  case 24e3:
   {
    label = 2;
    break L1;
    break;
   }
  default:
   break L1;
  } else switch ($0 | 0) {
  case 48e3:
   {
    label = 2;
    break L1;
    break;
   }
  default:
   break L1;
  }
 } while (0);
 if ((label | 0) == 2) if (($1 + -1 | 0) >>> 0 < 2) {
  $5 = _opus_alloc(_opus_decoder_get_size($1) | 0) | 0;
  if (!$5) {
   if (!$2) {
    $$0 = 0;
    return $$0 | 0;
   }
   HEAP32[$2 >> 2] = -7;
   $$0 = 0;
   return $$0 | 0;
  }
  $8 = _opus_decoder_init($5, $0, $1) | 0;
  if ($2 | 0) HEAP32[$2 >> 2] = $8;
  if (!$8) {
   $$0 = $5;
   return $$0 | 0;
  }
  _opus_free($5);
  $$0 = 0;
  return $$0 | 0;
 }
 if (!$2) {
  $$0 = 0;
  return $$0 | 0;
 }
 HEAP32[$2 >> 2] = -1;
 $$0 = 0;
 return $$0 | 0;
}

function _memset(ptr, value, num) {
 ptr = ptr | 0;
 value = value | 0;
 num = num | 0;
 var end = 0, aligned_end = 0, block_aligned_end = 0, value4 = 0;
 end = ptr + num | 0;
 value = value & 255;
 if ((num | 0) >= 67) {
  while (ptr & 3) {
   HEAP8[ptr >> 0] = value;
   ptr = ptr + 1 | 0;
  }
  aligned_end = end & -4 | 0;
  block_aligned_end = aligned_end - 64 | 0;
  value4 = value | value << 8 | value << 16 | value << 24;
  while ((ptr | 0) <= (block_aligned_end | 0)) {
   HEAP32[ptr >> 2] = value4;
   HEAP32[ptr + 4 >> 2] = value4;
   HEAP32[ptr + 8 >> 2] = value4;
   HEAP32[ptr + 12 >> 2] = value4;
   HEAP32[ptr + 16 >> 2] = value4;
   HEAP32[ptr + 20 >> 2] = value4;
   HEAP32[ptr + 24 >> 2] = value4;
   HEAP32[ptr + 28 >> 2] = value4;
   HEAP32[ptr + 32 >> 2] = value4;
   HEAP32[ptr + 36 >> 2] = value4;
   HEAP32[ptr + 40 >> 2] = value4;
   HEAP32[ptr + 44 >> 2] = value4;
   HEAP32[ptr + 48 >> 2] = value4;
   HEAP32[ptr + 52 >> 2] = value4;
   HEAP32[ptr + 56 >> 2] = value4;
   HEAP32[ptr + 60 >> 2] = value4;
   ptr = ptr + 64 | 0;
  }
  while ((ptr | 0) < (aligned_end | 0)) {
   HEAP32[ptr >> 2] = value4;
   ptr = ptr + 4 | 0;
  }
 }
 while ((ptr | 0) < (end | 0)) {
  HEAP8[ptr >> 0] = value;
  ptr = ptr + 1 | 0;
 }
 return end - num | 0;
}

function _silk_stereo_decode_pred($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$0 = 0, $$1 = 0, $17 = 0, $19 = 0, $2 = 0, $22 = 0, $25 = 0, $3 = 0, $4 = 0, $sext = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 $2 = sp;
 $3 = _ec_dec_icdf($0, 26966, 8) | 0;
 $4 = ($3 | 0) / 5 | 0;
 HEAP32[$2 + 8 >> 2] = $4;
 HEAP32[$2 + 20 >> 2] = $3 + (Math_imul($4, -5) | 0);
 $$0 = 0;
 while (1) {
  if (($$0 | 0) == 2) {
   $$1 = 0;
   break;
  }
  HEAP32[$2 + ($$0 * 12 | 0) >> 2] = _ec_dec_icdf($0, 27019, 8) | 0;
  HEAP32[$2 + ($$0 * 12 | 0) + 4 >> 2] = _ec_dec_icdf($0, 27026, 8) | 0;
  $$0 = $$0 + 1 | 0;
 }
 while (1) {
  if (($$1 | 0) == 2) break;
  $17 = $2 + ($$1 * 12 | 0) | 0;
  $19 = (HEAP32[$17 >> 2] | 0) + ((HEAP32[$2 + ($$1 * 12 | 0) + 8 >> 2] | 0) * 3 | 0) | 0;
  HEAP32[$17 >> 2] = $19;
  $22 = HEAP16[22968 + ($19 << 1) >> 1] | 0;
  $25 = HEAP16[22968 + ($19 + 1 << 1) >> 1] | 0;
  $sext = (Math_imul(($25 << 16 >> 16) - $22 >> 16, 429522944) | 0) + ((($25 & 65535) - $22 & 65535) * 6554 | 0) >> 16;
  HEAP32[$1 + ($$1 << 2) >> 2] = $22 + (Math_imul($sext, HEAP32[$2 + ($$1 * 12 | 0) + 4 >> 2] << 17 >> 16 | 1) | 0);
  $$1 = $$1 + 1 | 0;
 }
 HEAP32[$1 >> 2] = (HEAP32[$1 >> 2] | 0) - (HEAP32[$1 + 4 >> 2] | 0);
 STACKTOP = sp;
 return;
}

function _celt_fir5($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $$0 = 0.0, $$0$phi = 0.0, $$01 = 0.0, $$01$phi = 0.0, $$02 = 0.0, $$02$phi = 0.0, $$03 = 0.0, $$03$phi = 0.0, $$04 = 0.0, $$05 = 0, $11 = 0.0, $13 = 0.0, $15 = 0, $17 = 0, $19 = 0, $21 = 0, $25 = 0.0, $5 = 0.0, $7 = 0.0, $9 = 0.0;
 $5 = +HEAPF32[$1 >> 2];
 $7 = +HEAPF32[$1 + 4 >> 2];
 $9 = +HEAPF32[$1 + 8 >> 2];
 $11 = +HEAPF32[$1 + 12 >> 2];
 $13 = +HEAPF32[$1 + 16 >> 2];
 $15 = $4 + 4 | 0;
 $17 = $4 + 8 | 0;
 $19 = $4 + 12 | 0;
 $21 = $4 + 16 | 0;
 $$0 = +HEAPF32[$21 >> 2];
 $$01 = +HEAPF32[$19 >> 2];
 $$02 = +HEAPF32[$17 >> 2];
 $$03 = +HEAPF32[$15 >> 2];
 $$04 = +HEAPF32[$4 >> 2];
 $$05 = 0;
 while (1) {
  if (($$05 | 0) >= ($3 | 0)) break;
  $25 = +HEAPF32[$0 + ($$05 << 2) >> 2];
  HEAPF32[$2 + ($$05 << 2) >> 2] = $25 + $5 * $$04 + $7 * $$03 + $9 * $$02 + $11 * $$01 + $13 * $$0;
  $$03$phi = $$04;
  $$02$phi = $$03;
  $$01$phi = $$02;
  $$0$phi = $$01;
  $$04 = $25;
  $$05 = $$05 + 1 | 0;
  $$03 = $$03$phi;
  $$02 = $$02$phi;
  $$01 = $$01$phi;
  $$0 = $$0$phi;
 }
 HEAPF32[$4 >> 2] = $$04;
 HEAPF32[$15 >> 2] = $$03;
 HEAPF32[$17 >> 2] = $$02;
 HEAPF32[$19 >> 2] = $$01;
 HEAPF32[$21 >> 2] = $$0;
 return;
}

function _ec_laplace_decode($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$ = 0, $$0 = 0, $$01 = 0, $$01$in = 0, $$03 = 0, $$1 = 0, $$12 = 0, $$14 = 0, $$3 = 0, $$36 = 0, $15 = 0, $19 = 0, $20 = 0, $22 = 0, $23 = 0, $3 = 0, $7 = 0, $8 = 0, label = 0;
 $3 = _ec_decode_bin($0) | 0;
 if ($3 >>> 0 < $1 >>> 0) {
  $$12 = $1;
  $$3 = 0;
  $$36 = 0;
  $22 = $$3 + $$12 | 0;
  $23 = $22 >>> 0 < 32768;
  $$ = $23 ? $22 : 32768;
  _ec_dec_update($0, $$3, $$, 32768);
  return $$36 | 0;
 }
 $$0 = $1;
 $$01$in = _ec_laplace_get_freq1($1, $2) | 0;
 $$03 = 1;
 while (1) {
  $$01 = $$01$in + 1 | 0;
  if ($$01 >>> 0 <= 1) {
   label = 6;
   break;
  }
  $7 = $$01 << 1;
  $8 = $$0 + $7 | 0;
  if ($3 >>> 0 < $8 >>> 0) {
   $$1 = $$0;
   $$14 = $$03;
   break;
  }
  $$0 = $8;
  $$01$in = (Math_imul($7 + -2 | 0, $2) | 0) >>> 15;
  $$03 = $$03 + 1 | 0;
 }
 if ((label | 0) == 6) {
  $15 = ($3 - $$0 | 0) >>> 1;
  $$1 = $$0 + ($15 << 1) | 0;
  $$14 = $$03 + $15 | 0;
 }
 $19 = $$1 + $$01 | 0;
 $20 = $3 >>> 0 < $19 >>> 0;
 $$12 = $$01;
 $$3 = $20 ? $$1 : $19;
 $$36 = $20 ? 0 - $$14 | 0 : $$14;
 $22 = $$3 + $$12 | 0;
 $23 = $22 >>> 0 < 32768;
 $$ = $23 ? $22 : 32768;
 _ec_dec_update($0, $$3, $$, 32768);
 return $$36 | 0;
}

function _deinterleave_hadamard($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $$01 = 0, $$1 = 0, $$12 = 0, $10 = 0, $15 = 0, $23 = 0, $33 = 0, $4 = 0, $5 = 0, $8 = 0, sp = 0;
 sp = STACKTOP;
 $4 = Math_imul($1, $2) | 0;
 $5 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($4 << 2) | 0) + 15 & -16) | 0;
 if (!$3) {
  $$12 = 0;
  while (1) {
   if (($$12 | 0) >= ($2 | 0)) break;
   $23 = Math_imul($$12, $1) | 0;
   $$1 = 0;
   while (1) {
    if (($$1 | 0) >= ($1 | 0)) break;
    HEAP32[$5 + ($23 + $$1 << 2) >> 2] = HEAP32[$0 + ((Math_imul($$1, $2) | 0) + $$12 << 2) >> 2];
    $$1 = $$1 + 1 | 0;
   }
   $$12 = $$12 + 1 | 0;
  }
  $33 = $4 << 2;
  _memcpy($0 | 0, $5 | 0, $33 | 0) | 0;
  STACKTOP = sp;
  return;
 }
 $8 = 1416 + ($2 << 2) + -8 | 0;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) >= ($2 | 0)) break;
  $10 = $8 + ($$01 << 2) | 0;
  $$0 = 0;
  while (1) {
   if (($$0 | 0) >= ($1 | 0)) break;
   $15 = HEAP32[$0 + ((Math_imul($$0, $2) | 0) + $$01 << 2) >> 2] | 0;
   HEAP32[$5 + ((Math_imul(HEAP32[$10 >> 2] | 0, $1) | 0) + $$0 << 2) >> 2] = $15;
   $$0 = $$0 + 1 | 0;
  }
  $$01 = $$01 + 1 | 0;
 }
 $33 = $4 << 2;
 _memcpy($0 | 0, $5 | 0, $33 | 0) | 0;
 STACKTOP = sp;
 return;
}

function _interleave_hadamard($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $$01 = 0, $$1 = 0, $$12 = 0, $10 = 0, $23 = 0, $33 = 0, $4 = 0, $5 = 0, $8 = 0, sp = 0;
 sp = STACKTOP;
 $4 = Math_imul($1, $2) | 0;
 $5 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($4 << 2) | 0) + 15 & -16) | 0;
 if (!$3) {
  $$12 = 0;
  while (1) {
   if (($$12 | 0) >= ($2 | 0)) break;
   $23 = Math_imul($$12, $1) | 0;
   $$1 = 0;
   while (1) {
    if (($$1 | 0) >= ($1 | 0)) break;
    HEAP32[$5 + ((Math_imul($$1, $2) | 0) + $$12 << 2) >> 2] = HEAP32[$0 + ($23 + $$1 << 2) >> 2];
    $$1 = $$1 + 1 | 0;
   }
   $$12 = $$12 + 1 | 0;
  }
  $33 = $4 << 2;
  _memcpy($0 | 0, $5 | 0, $33 | 0) | 0;
  STACKTOP = sp;
  return;
 }
 $8 = 1416 + ($2 << 2) + -8 | 0;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) >= ($2 | 0)) break;
  $10 = $8 + ($$01 << 2) | 0;
  $$0 = 0;
  while (1) {
   if (($$0 | 0) >= ($1 | 0)) break;
   HEAP32[$5 + ((Math_imul($$0, $2) | 0) + $$01 << 2) >> 2] = HEAP32[$0 + ((Math_imul(HEAP32[$10 >> 2] | 0, $1) | 0) + $$0 << 2) >> 2];
   $$0 = $$0 + 1 | 0;
  }
  $$01 = $$01 + 1 | 0;
 }
 $33 = $4 << 2;
 _memcpy($0 | 0, $5 | 0, $33 | 0) | 0;
 STACKTOP = sp;
 return;
}

function _unquant_energy_finalise($0, $1, $2, $3, $4, $5, $6, $7, $8) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 $7 = $7 | 0;
 $8 = $8 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $$03 = 0, $$1 = 0, $$2 = 0, $$3 = 0, $12 = 0, $20 = 0.0, $31 = 0, $34 = 0, $9 = 0;
 $9 = $0 + 8 | 0;
 $$01 = 0;
 $$03 = $6;
 while (1) {
  if (($$01 | 0) == 2) break; else {
   $$02 = $1;
   $$1 = $$03;
  }
  while (1) {
   if (!(($$02 | 0) < ($2 | 0) & ($$1 | 0) >= ($8 | 0))) break;
   $12 = $4 + ($$02 << 2) | 0;
   if ((HEAP32[$12 >> 2] | 0) > 7) $$3 = $$1; else if ((HEAP32[$5 + ($$02 << 2) >> 2] | 0) == ($$01 | 0)) {
    $$0 = 0;
    $$2 = $$1;
    while (1) {
     $20 = +(_ec_dec_bits($7, 1) | 0) + -.5;
     $31 = $3 + ($$02 + (Math_imul($$0, HEAP32[$9 >> 2] | 0) | 0) << 2) | 0;
     HEAPF32[$31 >> 2] = +HEAPF32[$31 >> 2] + $20 * +(1 << 14 - (HEAP32[$12 >> 2] | 0) + -1 | 0) * .00006103515625;
     $34 = $$2 + -1 | 0;
     $$0 = $$0 + 1 | 0;
     if (($$0 | 0) >= ($8 | 0)) {
      $$3 = $34;
      break;
     } else $$2 = $34;
    }
   } else $$3 = $$1;
   $$02 = $$02 + 1 | 0;
   $$1 = $$3;
  }
  $$01 = $$01 + 1 | 0;
  $$03 = $$1;
 }
 return;
}

function _silk_INVERSE32_varQ_129($0) {
 $0 = $0 | 0;
 var $16 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $32 = 0, $33 = 0, $34 = 0, $40 = 0, $41 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 $3 = _silk_CLZ32_130(($0 | 0) > 0 ? $0 : 0 - $0 | 0) | 0;
 $5 = $0 << $3 + -1;
 $6 = $5 >> 16;
 $7 = 536870911 / ($6 | 0) | 0;
 $8 = $7 << 16;
 $9 = $8 >> 16;
 $16 = 536870912 - ((Math_imul($6, $9) | 0) + ((Math_imul($5 & 65535, $9) | 0) >> 16)) << 3;
 $28 = $8 + ((Math_imul($16 >> 16, $9) | 0) + ((Math_imul($16 & 65528, $9) | 0) >> 16)) + (Math_imul($16, ($7 >> 15) + 1 >> 1) | 0) | 0;
 $29 = 62 - $3 | 0;
 $30 = $29 + -46 | 0;
 if (($30 | 0) >= 1) return (($30 | 0) < 32 ? $28 >> $30 : 0) | 0;
 $32 = 46 - $29 | 0;
 $33 = -2147483648 >> $32;
 $34 = 2147483647 >>> $32;
 if (($33 | 0) > ($34 | 0)) {
  if (($28 | 0) > ($33 | 0)) {
   $41 = $33;
   $40 = $41 << $32;
   return $40 | 0;
  }
  $41 = ($28 | 0) < ($34 | 0) ? $34 : $28;
  $40 = $41 << $32;
  return $40 | 0;
 } else {
  if (($28 | 0) > ($34 | 0)) {
   $41 = $34;
   $40 = $41 << $32;
   return $40 | 0;
  }
  $41 = ($28 | 0) < ($33 | 0) ? $33 : $28;
  $40 = $41 << $32;
  return $40 | 0;
 }
 return 0;
}

function _silk_INVERSE32_varQ_275($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $10 = 0, $17 = 0, $29 = 0, $31 = 0, $33 = 0, $34 = 0, $35 = 0, $4 = 0, $41 = 0, $42 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 $4 = _silk_CLZ32_274(($0 | 0) > 0 ? $0 : 0 - $0 | 0) | 0;
 $6 = $0 << $4 + -1;
 $7 = $6 >> 16;
 $8 = 536870911 / ($7 | 0) | 0;
 $9 = $8 << 16;
 $10 = $9 >> 16;
 $17 = 536870912 - ((Math_imul($7, $10) | 0) + ((Math_imul($6 & 65535, $10) | 0) >> 16)) << 3;
 $29 = $9 + ((Math_imul($17 >> 16, $10) | 0) + ((Math_imul($17 & 65528, $10) | 0) >> 16)) + (Math_imul($17, ($8 >> 15) + 1 >> 1) | 0) | 0;
 $31 = 62 - $4 - $1 | 0;
 if (($31 | 0) >= 1) return (($31 | 0) < 32 ? $29 >> $31 : 0) | 0;
 $33 = 0 - $31 | 0;
 $34 = -2147483648 >> $33;
 $35 = 2147483647 >>> $33;
 if (($34 | 0) > ($35 | 0)) {
  if (($29 | 0) > ($34 | 0)) {
   $42 = $34;
   $41 = $42 << $33;
   return $41 | 0;
  }
  $42 = ($29 | 0) < ($35 | 0) ? $35 : $29;
  $41 = $42 << $33;
  return $41 | 0;
 } else {
  if (($29 | 0) > ($35 | 0)) {
   $42 = $35;
   $41 = $42 << $33;
   return $41 | 0;
  }
  $42 = ($29 | 0) < ($34 | 0) ? $34 : $29;
  $41 = $42 << $33;
  return $41 | 0;
 }
 return 0;
}

function _silk_INVERSE32_varQ($0) {
 $0 = $0 | 0;
 var $16 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $32 = 0, $33 = 0, $34 = 0, $40 = 0, $41 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 $3 = _silk_CLZ32_98(($0 | 0) > 0 ? $0 : 0 - $0 | 0) | 0;
 $5 = $0 << $3 + -1;
 $6 = $5 >> 16;
 $7 = 536870911 / ($6 | 0) | 0;
 $8 = $7 << 16;
 $9 = $8 >> 16;
 $16 = 536870912 - ((Math_imul($6, $9) | 0) + ((Math_imul($5 & 65535, $9) | 0) >> 16)) << 3;
 $28 = $8 + ((Math_imul($16 >> 16, $9) | 0) + ((Math_imul($16 & 65528, $9) | 0) >> 16)) + (Math_imul($16, ($7 >> 15) + 1 >> 1) | 0) | 0;
 $29 = 62 - $3 | 0;
 $30 = $29 + -47 | 0;
 if (($30 | 0) >= 1) return (($30 | 0) < 32 ? $28 >> $30 : 0) | 0;
 $32 = 47 - $29 | 0;
 $33 = -2147483648 >> $32;
 $34 = 2147483647 >>> $32;
 if (($33 | 0) > ($34 | 0)) {
  if (($28 | 0) > ($33 | 0)) {
   $41 = $33;
   $40 = $41 << $32;
   return $40 | 0;
  }
  $41 = ($28 | 0) < ($34 | 0) ? $34 : $28;
  $40 = $41 << $32;
  return $40 | 0;
 } else {
  if (($28 | 0) > ($34 | 0)) {
   $41 = $34;
   $40 = $41 << $32;
   return $40 | 0;
  }
  $41 = ($28 | 0) < ($33 | 0) ? $33 : $28;
  $40 = $41 << $32;
  return $40 | 0;
 }
 return 0;
}

function _silk_PLC_energy($0, $1, $2, $3, $4, $5, $6, $7) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 $7 = $7 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $12 = 0, $13 = 0, $17 = 0, $19 = 0, $20 = 0, $31 = 0, $9 = 0, sp = 0;
 sp = STACKTOP;
 $9 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($6 << 1 << 1) | 0) + 15 & -16) | 0;
 $$0 = $9;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) == 2) break;
  $12 = Math_imul($$01 + $7 + -2 | 0, $6) | 0;
  $13 = $5 + ($$01 << 2) | 0;
  $$02 = 0;
  while (1) {
   if (($$02 | 0) >= ($6 | 0)) break;
   $17 = HEAP32[$4 + ($$02 + $12 << 2) >> 2] | 0;
   $19 = HEAP32[$13 >> 2] | 0;
   $20 = $19 << 16 >> 16;
   $31 = (Math_imul($17 >> 16, $20) | 0) + ((Math_imul($17 & 65535, $20) | 0) >> 16) + (Math_imul($17, ($19 >> 15) + 1 >> 1) | 0) >> 8;
   HEAP16[$$0 + ($$02 << 1) >> 1] = ($31 | 0) > 32767 ? 32767 : (($31 | 0) > -32768 ? $31 : -32768) & 65535;
   $$02 = $$02 + 1 | 0;
  }
  $$0 = $$0 + ($6 << 1) | 0;
  $$01 = $$01 + 1 | 0;
 }
 _silk_sum_sqr_shift($0, $1, $9, $6);
 _silk_sum_sqr_shift($2, $3, $9 + ($6 << 1) | 0, $6);
 STACKTOP = sp;
 return;
}

function _resampler_basic_zero($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$0 = 0, $$01 = 0, $$03 = 0, $10 = 0, $15 = 0, $17 = 0, $19 = 0, $21 = 0, $30 = 0, $31 = 0, $6 = 0, label = 0;
 $6 = $0 + 60 | 0;
 $10 = $0 + 64 | 0;
 $15 = HEAP32[$0 + 92 >> 2] | 0;
 $17 = HEAP32[$0 + 36 >> 2] | 0;
 $19 = HEAP32[$0 + 40 >> 2] | 0;
 $21 = HEAP32[$0 + 12 >> 2] | 0;
 $$0 = HEAP32[(HEAP32[$10 >> 2] | 0) + ($1 << 2) >> 2] | 0;
 $$01 = HEAP32[(HEAP32[$6 >> 2] | 0) + ($1 << 2) >> 2] | 0;
 $$03 = 0;
 while (1) {
  if (($$01 | 0) >= (HEAP32[$3 >> 2] | 0)) {
   label = 5;
   break;
  }
  if (($$03 | 0) >= (HEAP32[$5 >> 2] | 0)) {
   label = 5;
   break;
  }
  HEAPF32[$4 + ((Math_imul($15, $$03) | 0) << 2) >> 2] = 0.0;
  $30 = $$0 + $19 | 0;
  $31 = $30 >>> 0 < $21 >>> 0;
  $$0 = $30 - ($31 ? 0 : $21) | 0;
  $$01 = $$01 + $17 + (($31 ^ 1) & 1) | 0;
  $$03 = $$03 + 1 | 0;
 }
 if ((label | 0) == 5) {
  HEAP32[(HEAP32[$6 >> 2] | 0) + ($1 << 2) >> 2] = $$01;
  HEAP32[(HEAP32[$10 >> 2] | 0) + ($1 << 2) >> 2] = $$0;
  return $$03 | 0;
 }
 return 0;
}

function _silk_gains_dequant($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $$0 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $31 = 0, $storemerge1 = 0, $storemerge1$in = 0;
 $$0 = 0;
 while (1) {
  if (($$0 | 0) >= ($4 | 0)) break;
  do if (!($$0 | $3)) $storemerge1$in = _silk_max_int(HEAP8[$1 >> 0] | 0, (HEAP8[$2 >> 0] | 0) + -16 | 0) | 0; else {
   $17 = (HEAP8[$1 + $$0 >> 0] | 0) + -4 | 0;
   $18 = HEAP8[$2 >> 0] | 0;
   $19 = $18 << 24 >> 24;
   $20 = $19 + 8 | 0;
   if (($17 | 0) > ($20 | 0)) {
    $storemerge1$in = $19 + (($17 << 1) - $20) | 0;
    break;
   } else {
    $storemerge1$in = ($18 & 255) + $17 | 0;
    break;
   }
  } while (0);
  $storemerge1 = $storemerge1$in & 255;
  HEAP8[$2 >> 0] = $storemerge1;
  if (($storemerge1$in << 24 | 0) > 1056964608) $31 = 63; else if ($storemerge1 << 24 >> 24 < 0) $31 = 0; else $31 = $storemerge1$in << 24 >> 24;
  HEAP8[$2 >> 0] = $31;
  HEAP32[$0 + ($$0 << 2) >> 2] = _silk_log2lin(_silk_min_32(($31 * 29 | 0) + ($31 * 7281 >> 16) + 2090 | 0) | 0) | 0;
  $$0 = $$0 + 1 | 0;
 }
 return;
}

function _silk_NLSF_decode($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $12 = 0, $18 = 0, $20 = 0, $21 = 0, $24 = 0, $25 = 0, $26 = 0, $3 = 0, $40 = 0, $5 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 $3 = sp + 64 | 0;
 $5 = sp;
 _silk_NLSF_unpack(sp + 32 | 0, $3, $2, HEAP8[$1 >> 0] | 0);
 $12 = $2 + 2 | 0;
 _silk_NLSF_residual_dequant($5, $1 + 1 | 0, $3, HEAP16[$2 + 4 >> 1] | 0, HEAP16[$12 >> 1] | 0);
 $18 = HEAP16[$12 >> 1] | 0;
 $20 = Math_imul(HEAP8[$1 >> 0] | 0, $18 << 16 >> 16) | 0;
 $21 = (HEAP32[$2 + 8 >> 2] | 0) + $20 | 0;
 $24 = (HEAP32[$2 + 12 >> 2] | 0) + ($20 << 1) | 0;
 $$0 = 0;
 $26 = $18;
 while (1) {
  $25 = $26 << 16 >> 16;
  if (($$0 | 0) >= ($25 | 0)) break;
  $40 = ((HEAP16[$5 + ($$0 << 1) >> 1] << 14 | 0) / (HEAP16[$24 + ($$0 << 1) >> 1] | 0) | 0) + (HEAPU8[$21 + $$0 >> 0] << 7) | 0;
  HEAP16[$0 + ($$0 << 1) >> 1] = ($40 | 0) > 32767 ? 32767 : (($40 | 0) > 0 ? $40 : 0) & 65535;
  $$0 = $$0 + 1 | 0;
  $26 = HEAP16[$12 >> 1] | 0;
 }
 _silk_NLSF_stabilize($0, HEAP32[$2 + 36 >> 2] | 0, $25);
 STACKTOP = sp;
 return;
}

function _stereo_merge($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = +$2;
 $3 = $3 | 0;
 var $$0 = 0, $10 = 0.0, $11 = 0.0, $12 = 0.0, $13 = 0.0, $17 = 0.0, $18 = 0.0, $20 = 0, $22 = 0.0, $23 = 0, $24 = 0.0, $4 = 0, $5 = 0, $7 = 0.0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 $4 = sp + 4 | 0;
 $5 = sp;
 HEAPF32[$4 >> 2] = 0.0;
 HEAPF32[$5 >> 2] = 0.0;
 _dual_inner_prod_c($1, $0, $1, $3, $4, $5);
 $7 = +HEAPF32[$4 >> 2] * $2;
 HEAPF32[$4 >> 2] = $7;
 $10 = $2 * $2 + +HEAPF32[$5 >> 2];
 $11 = $7 * 2.0;
 $12 = $10 - $11;
 $13 = $10 + $11;
 if ($13 < 6.000000284984708e-04 | $12 < 6.000000284984708e-04) {
  _memcpy($1 | 0, $0 | 0, $3 << 2 | 0) | 0;
  STACKTOP = sp;
  return;
 }
 $17 = 1.0 / +Math_sqrt(+$12);
 $18 = 1.0 / +Math_sqrt(+$13);
 $$0 = 0;
 while (1) {
  if (($$0 | 0) >= ($3 | 0)) break;
  $20 = $0 + ($$0 << 2) | 0;
  $22 = +HEAPF32[$20 >> 2] * $2;
  $23 = $1 + ($$0 << 2) | 0;
  $24 = +HEAPF32[$23 >> 2];
  HEAPF32[$20 >> 2] = $17 * ($22 - $24);
  HEAPF32[$23 >> 2] = $18 * ($22 + $24);
  $$0 = $$0 + 1 | 0;
 }
 STACKTOP = sp;
 return;
}

function _celt_pitch_xcorr_c($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $$0 = 0, $$1 = 0, $12 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 $5 = sp;
 $6 = $4 + -3 | 0;
 $7 = $5 + 4 | 0;
 $8 = $5 + 8 | 0;
 $9 = $5 + 12 | 0;
 $12 = (($6 | 0) > 0 ? $6 : 0) + 3 & -4;
 $$0 = 0;
 while (1) {
  if (($$0 | 0) >= ($6 | 0)) {
   $$1 = $12;
   break;
  };
  HEAP32[$5 >> 2] = 0;
  HEAP32[$5 + 4 >> 2] = 0;
  HEAP32[$5 + 8 >> 2] = 0;
  HEAP32[$5 + 12 >> 2] = 0;
  _xcorr_kernel_c($0, $1 + ($$0 << 2) | 0, $5, $3);
  HEAP32[$2 + ($$0 << 2) >> 2] = HEAP32[$5 >> 2];
  HEAP32[$2 + (($$0 | 1) << 2) >> 2] = HEAP32[$7 >> 2];
  HEAP32[$2 + (($$0 | 2) << 2) >> 2] = HEAP32[$8 >> 2];
  HEAP32[$2 + (($$0 | 3) << 2) >> 2] = HEAP32[$9 >> 2];
  $$0 = $$0 + 4 | 0;
 }
 while (1) {
  if (($$1 | 0) >= ($4 | 0)) break;
  HEAPF32[$2 + ($$1 << 2) >> 2] = +_celt_inner_prod_c_51($0, $1 + ($$1 << 2) | 0, $3);
  $$1 = $$1 + 1 | 0;
 }
 STACKTOP = sp;
 return;
}

function _silk_decode_signs($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $12 = 0, $14 = 0, $17 = 0, $24 = 0, $29 = 0, $6 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 $6 = sp;
 HEAP8[$6 + 1 >> 0] = 0;
 $12 = 27988 + ((($3 << 1) + $4 << 16 >> 16) * 7 | 0) | 0;
 $14 = $2 + 8 >> 4;
 $$0 = $1;
 $$02 = 0;
 while (1) {
  if (($$02 | 0) >= ($14 | 0)) break;
  $17 = HEAP32[$5 + ($$02 << 2) >> 2] | 0;
  L4 : do if (($17 | 0) > 0) {
   HEAP8[$6 >> 0] = HEAP8[$12 + (($17 & 30) >>> 0 < 6 ? $17 & 31 : 6) >> 0] | 0;
   $$01 = 0;
   while (1) {
    if (($$01 | 0) == 16) break L4;
    $24 = $$0 + ($$01 << 1) | 0;
    if ((HEAP16[$24 >> 1] | 0) > 0) {
     $29 = ((_ec_dec_icdf($0, $6, 8) | 0) << 1) + -1 | 0;
     HEAP16[$24 >> 1] = Math_imul(HEAP16[$24 >> 1] | 0, $29) | 0;
    }
    $$01 = $$01 + 1 | 0;
   }
  } while (0);
  $$0 = $$0 + 32 | 0;
  $$02 = $$02 + 1 | 0;
 }
 STACKTOP = sp;
 return;
}

function _silk_decode_pitch($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $$04 = 0, $$2 = 0, $$23 = 0, $11 = 0, $12 = 0, $13 = 0, $20 = 0, $21 = 0, $26 = 0, $5 = 0, $6 = 0, $7 = 0, $9 = 0, $sext = 0;
 $5 = ($3 | 0) == 8;
 $6 = ($4 | 0) == 4;
 $$23 = $5 ? ($6 ? 11 : 3) : $6 ? 34 : 12;
 $$2 = $5 ? ($6 ? 28086 : 28056) : $6 ? 28130 : 28062;
 $sext = $3 << 16;
 $7 = $sext >> 15;
 $9 = ($sext >> 16) * 18 | 0;
 $11 = $7 + ($0 << 16 >> 16) | 0;
 $12 = $1 << 24 >> 24;
 $13 = ($7 | 0) > ($9 | 0);
 $$04 = 0;
 while (1) {
  if (($$04 | 0) >= ($4 | 0)) break;
  $20 = $11 + (HEAP8[$$2 + ((Math_imul($$04, $$23) | 0) + $12) >> 0] | 0) | 0;
  $21 = $2 + ($$04 << 2) | 0;
  HEAP32[$21 >> 2] = $20;
  if ($13) if (($20 | 0) > ($7 | 0)) $26 = $7; else $26 = ($20 | 0) < ($9 | 0) ? $9 : $20; else if (($20 | 0) > ($9 | 0)) $26 = $9; else $26 = ($20 | 0) < ($7 | 0) ? $7 : $20;
  HEAP32[$21 >> 2] = $26;
  $$04 = $$04 + 1 | 0;
 }
 return;
}

function _speex_resampler_process_interleaved_float($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $15 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 $5 = HEAP32[$4 >> 2] | 0;
 $6 = HEAP32[$2 >> 2] | 0;
 $7 = $0 + 88 | 0;
 $8 = HEAP32[$7 >> 2] | 0;
 $9 = $0 + 92 | 0;
 $10 = HEAP32[$9 >> 2] | 0;
 $11 = $0 + 20 | 0;
 $12 = HEAP32[$11 >> 2] | 0;
 HEAP32[$9 >> 2] = $12;
 HEAP32[$7 >> 2] = $12;
 $13 = ($1 | 0) == 0;
 $$0 = 0;
 $15 = $12;
 while (1) {
  if ($$0 >>> 0 >= $15 >>> 0) break;
  HEAP32[$4 >> 2] = $5;
  HEAP32[$2 >> 2] = $6;
  if ($13) _speex_resampler_process_float($0, $$0, 0, $2, $3 + ($$0 << 2) | 0, $4); else _speex_resampler_process_float($0, $$0, $1 + ($$0 << 2) | 0, $2, $3 + ($$0 << 2) | 0, $4);
  $$0 = $$0 + 1 | 0;
  $15 = HEAP32[$11 >> 2] | 0;
 }
 HEAP32[$7 >> 2] = $8;
 HEAP32[$9 >> 2] = $10;
 return (HEAP32[$0 + 84 >> 2] | 0) == 5 | 0;
}

function _speex_resampler_process_native($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $$0 = 0, $12 = 0, $16 = 0, $17 = 0, $20 = 0, $25 = 0, $28 = 0, $29 = 0, $6 = 0;
 $6 = HEAP32[$0 + 24 >> 2] | 0;
 $12 = (HEAP32[$0 + 72 >> 2] | 0) + ((Math_imul(HEAP32[$0 + 28 >> 2] | 0, $1) | 0) << 2) | 0;
 HEAP32[$0 + 56 >> 2] = 1;
 $16 = FUNCTION_TABLE_iiiiiii[HEAP32[$0 + 84 >> 2] & 7]($0, $1, $12, $2, $3, $4) | 0;
 $17 = $0 + 60 | 0;
 $20 = HEAP32[(HEAP32[$17 >> 2] | 0) + ($1 << 2) >> 2] | 0;
 if (($20 | 0) < (HEAP32[$2 >> 2] | 0)) HEAP32[$2 >> 2] = $20;
 HEAP32[$4 >> 2] = $16;
 $25 = (HEAP32[$17 >> 2] | 0) + ($1 << 2) | 0;
 HEAP32[$25 >> 2] = (HEAP32[$25 >> 2] | 0) - (HEAP32[$2 >> 2] | 0);
 $28 = HEAP32[$2 >> 2] | 0;
 $29 = $6 + -1 | 0;
 $$0 = 0;
 while (1) {
  if (($$0 | 0) >= ($29 | 0)) break;
  HEAP32[$12 + ($$0 << 2) >> 2] = HEAP32[$12 + ($$0 + $28 << 2) >> 2];
  $$0 = $$0 + 1 | 0;
 }
 return;
}

function _silk_NLSF_unpack($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $$01 = 0, $12 = 0, $14 = 0, $16 = 0, $17 = 0, $37 = 0, $6 = 0, $7 = 0;
 $6 = $2 + 2 | 0;
 $7 = HEAP16[$6 >> 1] | 0;
 $12 = $2 + 20 | 0;
 $$0 = (HEAP32[$2 + 24 >> 2] | 0) + ((Math_imul($7 << 16 >> 16, $3) | 0) / 2 | 0) | 0;
 $$01 = 0;
 $14 = $7;
 while (1) {
  if (($$01 | 0) >= ($14 << 16 >> 16 | 0)) break;
  $16 = HEAP8[$$0 >> 0] | 0;
  $17 = $16 & 255;
  HEAP16[$0 + ($$01 << 1) >> 1] = ($17 >>> 1 & 7) * 9;
  HEAP8[$1 + $$01 >> 0] = HEAP8[(HEAP32[$12 >> 2] | 0) + ($$01 + ((HEAP16[$6 >> 1] | 0) + -1 & 0 - ($16 & 1))) >> 0] | 0;
  $37 = $$01 | 1;
  HEAP16[$0 + ($37 << 1) >> 1] = (($16 & 255) >>> 5) * 9 & 255;
  HEAP8[$1 + $37 >> 0] = HEAP8[(HEAP32[$12 >> 2] | 0) + ($$01 + ((HEAP16[$6 >> 1] | 0) + -1 & 0 - ($17 >>> 4 & 1)) + 1) >> 0] | 0;
  $$0 = $$0 + 1 | 0;
  $$01 = $$01 + 2 | 0;
  $14 = HEAP16[$6 >> 1] | 0;
 }
 return;
}

function _icwrs($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $$1 = 0, $15 = 0, $17 = 0, $2 = 0, $22 = 0, $4 = 0, $7 = 0, $$01$looptemp = 0;
 $2 = $0 + -1 | 0;
 $4 = HEAP32[$1 + ($2 << 2) >> 2] | 0;
 $$0 = ($4 | 0) > -1 ? $4 : 0 - $4 | 0;
 $$01 = $2;
 $$02 = $4 >>> 31;
 while (1) {
  $$01$looptemp = $$01;
  $$01 = $$01 + -1 | 0;
  $7 = $0 - $$01 | 0;
  $15 = $$02 + (HEAP32[(HEAP32[1572 + ((($7 | 0) < ($$0 | 0) ? $7 : $$0) << 2) >> 2] | 0) + ((($7 | 0) > ($$0 | 0) ? $7 : $$0) << 2) >> 2] | 0) | 0;
  $17 = HEAP32[$1 + ($$01 << 2) >> 2] | 0;
  $$0 = $$0 + (($17 | 0) > -1 ? $17 : 0 - $17 | 0) | 0;
  if (($17 | 0) < 0) {
   $22 = $$0 + 1 | 0;
   $$1 = $15 + (HEAP32[(HEAP32[1572 + ((($7 | 0) > ($$0 | 0) ? $22 : $7) << 2) >> 2] | 0) + ((($7 | 0) > ($22 | 0) ? $7 : $22) << 2) >> 2] | 0) | 0;
  } else $$1 = $15;
  if (($$01$looptemp | 0) <= 1) break; else $$02 = $$1;
 }
 return $$1 | 0;
}

function _exp_rotation1($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = +$3;
 $4 = +$4;
 var $$0 = 0, $$01 = 0, $$1 = 0, $$12$in = 0, $10 = 0.0, $20 = 0, $24 = 0.0, $25 = 0, $26 = 0.0, $5 = 0.0, $6 = 0, $8 = 0.0, $9 = 0;
 $5 = -$4;
 $6 = $1 - $2 | 0;
 $$0 = $0;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) >= ($6 | 0)) break;
  $8 = +HEAPF32[$$0 >> 2];
  $9 = $$0 + ($2 << 2) | 0;
  $10 = +HEAPF32[$9 >> 2];
  HEAPF32[$9 >> 2] = $10 * $3 + $8 * $4;
  HEAPF32[$$0 >> 2] = $8 * $3 + $10 * $5;
  $$0 = $$0 + 4 | 0;
  $$01 = $$01 + 1 | 0;
 }
 $20 = $1 - ($2 << 1) | 0;
 $$1 = $0 + ($20 + -1 << 2) | 0;
 $$12$in = $20;
 while (1) {
  if (($$12$in | 0) <= 0) break;
  $24 = +HEAPF32[$$1 >> 2];
  $25 = $$1 + ($2 << 2) | 0;
  $26 = +HEAPF32[$25 >> 2];
  HEAPF32[$25 >> 2] = $26 * $3 + $24 * $4;
  HEAPF32[$$1 >> 2] = $24 * $3 + $26 * $5;
  $$1 = $$1 + -4 | 0;
  $$12$in = $$12$in + -1 | 0;
 }
 return;
}

function _stereo_itheta($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0.0, $$01 = 0.0, $$03 = 0, $$1 = 0.0, $$12 = 0.0, $10 = 0.0, $11 = 0.0, $18 = 0.0, $7 = 0.0, $9 = 0.0;
 L1 : do if (!$2) {
  $18 = +_celt_inner_prod_c_94($0, $0, $3) + 1.0000000036274937e-15;
  $$1 = +_celt_inner_prod_c_94($1, $1, $3) + 1.0000000036274937e-15;
  $$12 = $18;
 } else {
  $$0 = 1.0000000036274937e-15;
  $$01 = 1.0000000036274937e-15;
  $$03 = 0;
  while (1) {
   if (($$03 | 0) >= ($3 | 0)) {
    $$1 = $$0;
    $$12 = $$01;
    break L1;
   }
   $7 = +HEAPF32[$0 + ($$03 << 2) >> 2];
   $9 = +HEAPF32[$1 + ($$03 << 2) >> 2];
   $10 = $7 + $9;
   $11 = $7 - $9;
   $$0 = $$0 + $11 * $11;
   $$01 = $$01 + $10 * $10;
   $$03 = $$03 + 1 | 0;
  }
 } while (0);
 return ~~+Math_floor(+(+_fast_atan2f(+Math_sqrt(+$$1), +Math_sqrt(+$$12)) * 10430.3818359375 + .5)) | 0;
}

function _resampling_factor($0) {
 $0 = $0 | 0;
 var $$0 = 0, label = 0;
 L1 : do if (($0 | 0) < 16e3) if (($0 | 0) < 12e3) {
  switch ($0 | 0) {
  case 8e3:
   break;
  default:
   {
    label = 6;
    break L1;
   }
  }
  $$0 = 6;
  break;
 } else {
  switch ($0 | 0) {
  case 12e3:
   break;
  default:
   {
    label = 6;
    break L1;
   }
  }
  $$0 = 4;
  break;
 } else {
  if (($0 | 0) < 24e3) {
   switch ($0 | 0) {
   case 16e3:
    break;
   default:
    {
     label = 6;
     break L1;
    }
   }
   $$0 = 3;
   break;
  }
  if (($0 | 0) >= 48e3) switch ($0 | 0) {
  case 48e3:
   {
    $$0 = 1;
    break L1;
    break;
   }
  default:
   {
    label = 6;
    break L1;
   }
  }
  switch ($0 | 0) {
  case 24e3:
   break;
  default:
   {
    label = 6;
    break L1;
   }
  }
  $$0 = 2;
 } while (0);
 if ((label | 0) == 6) $$0 = 0;
 return $$0 | 0;
}

function _unquant_fine_energy($0, $1, $2, $3, $4, $5, $6) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 var $$0 = 0, $$01 = 0, $10 = 0, $12 = 0, $15 = 0.0, $26 = 0, $29 = 0, $7 = 0, $9 = 0;
 $7 = $0 + 8 | 0;
 $$01 = $1;
 while (1) {
  if (($$01 | 0) >= ($2 | 0)) break;
  $9 = $4 + ($$01 << 2) | 0;
  $10 = HEAP32[$9 >> 2] | 0;
  L4 : do if (($10 | 0) >= 1) {
   $$0 = 0;
   $12 = $10;
   while (1) {
    $15 = +(_ec_dec_bits($5, $12) | 0) + .5;
    $26 = $3 + ($$01 + (Math_imul($$0, HEAP32[$7 >> 2] | 0) | 0) << 2) | 0;
    HEAPF32[$26 >> 2] = +HEAPF32[$26 >> 2] + ($15 * +(1 << 14 - (HEAP32[$9 >> 2] | 0) | 0) * .00006103515625 + -.5);
    $29 = $$0 + 1 | 0;
    if (($29 | 0) >= ($6 | 0)) break L4;
    $$0 = $29;
    $12 = HEAP32[$9 >> 2] | 0;
   }
  } while (0);
  $$01 = $$01 + 1 | 0;
 }
 return;
}

function _quant_band_n1($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $$1 = 0, $10 = 0, $11 = 0, $12 = 0, $17 = 0, $7 = 0, $9 = 0;
 $7 = HEAP32[$0 + 28 >> 2] | 0;
 $9 = $0 + 32 | 0;
 $10 = (HEAP32[$0 >> 2] | 0) == 0;
 $11 = $0 + 4 | 0;
 $12 = $2 | 0 ? 2 : 1;
 $$01 = $1;
 $$02 = 0;
 while (1) {
  if ((HEAP32[$9 >> 2] | 0) > 7) {
   if ($10) $$0 = _ec_dec_bits($7, 1) | 0; else {
    $17 = +HEAPF32[$$01 >> 2] < 0.0 & 1;
    _ec_enc_bits($7, $17, 1);
    $$0 = $17;
   }
   HEAP32[$9 >> 2] = (HEAP32[$9 >> 2] | 0) + -8;
   $$1 = $$0;
  } else $$1 = 0;
  if (HEAP32[$11 >> 2] | 0) HEAPF32[$$01 >> 2] = $$1 | 0 ? -1.0 : 1.0;
  $$02 = $$02 + 1 | 0;
  if (($$02 | 0) >= ($12 | 0)) break; else $$01 = $2;
 }
 if (!$4) return;
 HEAP32[$4 >> 2] = HEAP32[$1 >> 2];
 return;
}

function _silk_bwexpander_32($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $$01 = 0, $26 = 0, $27 = 0, $28 = 0, $3 = 0, $4 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 $3 = $2 + -65536 | 0;
 $4 = $1 + -1 | 0;
 $$0 = 0;
 $$01 = $2;
 while (1) {
  $6 = $$01 >> 16;
  if (($$0 | 0) >= ($4 | 0)) break;
  $7 = $0 + ($$0 << 2) | 0;
  $8 = HEAP32[$7 >> 2] | 0;
  $9 = $8 << 16 >> 16;
  HEAP32[$7 >> 2] = (Math_imul($6, $9) | 0) + ((Math_imul($$01 & 65535, $9) | 0) >> 16) + (Math_imul($$01, ($8 >> 15) + 1 >> 1) | 0);
  $$0 = $$0 + 1 | 0;
  $$01 = $$01 + (((Math_imul($$01, $3) | 0) >> 15) + 1 >> 1) | 0;
 }
 $26 = $0 + ($4 << 2) | 0;
 $27 = HEAP32[$26 >> 2] | 0;
 $28 = $27 << 16 >> 16;
 HEAP32[$26 >> 2] = (Math_imul($6, $28) | 0) + ((Math_imul($$01 & 65535, $28) | 0) >> 16) + (Math_imul($$01, ($27 >> 15) + 1 >> 1) | 0);
 return;
}

function _ec_enc_bits($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $$01 = 0, $$1 = 0, $$12 = 0, $10 = 0, $13 = 0, $15 = 0, $26 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $9 = 0;
 $3 = $0 + 12 | 0;
 $4 = HEAP32[$3 >> 2] | 0;
 $5 = $0 + 16 | 0;
 $6 = HEAP32[$5 >> 2] | 0;
 if (($6 + $2 | 0) >>> 0 > 32) {
  $9 = $0 + 44 | 0;
  $10 = 7 - $6 | 0;
  $13 = $6 + (($10 | 0) > -8 ? $10 : -8) & -8;
  $$0 = $6;
  $$01 = $4;
  do {
   $15 = _ec_write_byte_at_end($0, $$01 & 255) | 0;
   HEAP32[$9 >> 2] = HEAP32[$9 >> 2] | $15;
   $$01 = $$01 >>> 8;
   $$0 = $$0 + -8 | 0;
  } while (($$0 | 0) > 7);
  $$1 = $6 + -8 - $13 | 0;
  $$12 = $$01;
 } else {
  $$1 = $6;
  $$12 = $4;
 }
 HEAP32[$3 >> 2] = $$12 | $1 << $$1;
 HEAP32[$5 >> 2] = $$1 + $2;
 $26 = $0 + 20 | 0;
 HEAP32[$26 >> 2] = (HEAP32[$26 >> 2] | 0) + $2;
 return;
}

function _comb_filter_const_c($0, $1, $2, $3, $4, $5, $6) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = +$4;
 $5 = +$5;
 $6 = +$6;
 var $$0 = 0, $$01 = 0.0, $$01$phi = 0.0, $$02 = 0.0, $$02$phi = 0.0, $$03 = 0.0, $$03$phi = 0.0, $$04 = 0.0, $23 = 0.0;
 $$0 = 0;
 $$01 = +HEAPF32[$1 + (-2 - $2 << 2) >> 2];
 $$02 = +HEAPF32[$1 + (~$2 << 2) >> 2];
 $$03 = +HEAPF32[$1 + (0 - $2 << 2) >> 2];
 $$04 = +HEAPF32[$1 + (1 - $2 << 2) >> 2];
 while (1) {
  if (($$0 | 0) >= ($3 | 0)) break;
  $23 = +HEAPF32[$1 + ($$0 - $2 + 2 << 2) >> 2];
  HEAPF32[$0 + ($$0 << 2) >> 2] = +HEAPF32[$1 + ($$0 << 2) >> 2] + $$03 * $4 + ($$04 + $$02) * $5 + ($23 + $$01) * $6;
  $$03$phi = $$04;
  $$02$phi = $$03;
  $$01$phi = $$02;
  $$0 = $$0 + 1 | 0;
  $$04 = $23;
  $$03 = $$03$phi;
  $$02 = $$02$phi;
  $$01 = $$01$phi;
 }
 return;
}

function _bits2pulses($$0$2$val, $$0$14$1$val, $$0$14$2$val, $0, $1, $2) {
 $$0$2$val = $$0$2$val | 0;
 $$0$14$1$val = $$0$14$1$val | 0;
 $$0$14$2$val = $$0$14$2$val | 0;
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$01 = 0, $$02 = 0, $$04 = 0, $12 = 0, $15 = 0, $19 = 0, $26 = 0, $9 = 0;
 $9 = $$0$14$2$val + (HEAP16[$$0$14$1$val + ((Math_imul($1 + 1 | 0, $$0$2$val) | 0) + $0 << 1) >> 1] | 0) | 0;
 $12 = $2 + -1 | 0;
 $$01 = HEAPU8[$9 >> 0] | 0;
 $$02 = 0;
 $$04 = 0;
 while (1) {
  if (($$04 | 0) == 6) break;
  $15 = $$02 + $$01 + 1 >> 1;
  $19 = (HEAPU8[$9 + $15 >> 0] | 0) < ($12 | 0);
  $$01 = $19 ? $$01 : $15;
  $$02 = $19 ? $15 : $$02;
  $$04 = $$04 + 1 | 0;
 }
 if (!$$02) $26 = -1; else $26 = HEAPU8[$9 + $$02 >> 0] | 0;
 return (($12 - $26 | 0) > ((HEAPU8[$9 + $$01 >> 0] | 0) - $12 | 0) ? $$01 : $$02) | 0;
}

function _opus_custom_decoder_init($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $$idx = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ($2 >>> 0 > 2) {
  $$0 = -1;
  STACKTOP = sp;
  return $$0 | 0;
 }
 if (!$0) {
  $$0 = -7;
  STACKTOP = sp;
  return $$0 | 0;
 }
 $$idx = $1 + 4 | 0;
 _memset($0 | 0, 0, _opus_custom_decoder_get_size(HEAP32[$$idx >> 2] | 0, HEAP32[$1 + 8 >> 2] | 0, $2) | 0) | 0;
 HEAP32[$0 >> 2] = $1;
 HEAP32[$0 + 4 >> 2] = HEAP32[$$idx >> 2];
 HEAP32[$0 + 8 >> 2] = $2;
 HEAP32[$0 + 12 >> 2] = $2;
 HEAP32[$0 + 16 >> 2] = 1;
 HEAP32[$0 + 20 >> 2] = 0;
 HEAP32[$0 + 24 >> 2] = HEAP32[$1 + 12 >> 2];
 HEAP32[$0 + 28 >> 2] = 1;
 HEAP32[$0 + 32 >> 2] = 0;
 HEAP32[$0 + 36 >> 2] = 0;
 _opus_custom_decoder_ctl($0, 4028, sp);
 $$0 = 0;
 STACKTOP = sp;
 return $$0 | 0;
}

function _deemphasis_stereo_simple($$val, $$1$val, $0, $1, $2, $3) {
 $$val = $$val | 0;
 $$1$val = $$1$val | 0;
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = +$2;
 $3 = $3 | 0;
 var $$0 = 0, $$01 = 0.0, $$02 = 0.0, $11 = 0.0, $15 = 0.0, $17 = 0, $5 = 0;
 $5 = $3 + 4 | 0;
 $$0 = 0;
 $$01 = +HEAPF32[$5 >> 2];
 $$02 = +HEAPF32[$3 >> 2];
 while (1) {
  if (($$0 | 0) >= ($1 | 0)) break;
  $11 = +HEAPF32[$$val + ($$0 << 2) >> 2] + 1.0000000031710769e-30 + $$02;
  $15 = +HEAPF32[$$1$val + ($$0 << 2) >> 2] + 1.0000000031710769e-30 + $$01;
  $17 = $$0 << 1;
  HEAPF32[$0 + ($17 << 2) >> 2] = $11 * .000030517578125;
  HEAPF32[$0 + (($17 | 1) << 2) >> 2] = $15 * .000030517578125;
  $$0 = $$0 + 1 | 0;
  $$01 = $15 * $2;
  $$02 = $11 * $2;
 }
 HEAPF32[$3 >> 2] = $$02;
 HEAPF32[$5 >> 2] = $$01;
 return;
}

function _ec_enc_carry_out($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $12 = 0, $16 = 0, $17 = 0, $18 = 0, $22 = 0, $25 = 0, $3 = 0, $4 = 0, $5 = 0, $8 = 0, $9 = 0;
 if (($1 | 0) == 255) {
  $25 = $0 + 36 | 0;
  HEAP32[$25 >> 2] = (HEAP32[$25 >> 2] | 0) + 1;
  return;
 }
 $3 = $1 >> 8;
 $4 = $0 + 40 | 0;
 $5 = HEAP32[$4 >> 2] | 0;
 if (($5 | 0) > -1) {
  $8 = _ec_write_byte($0, $5 + $3 | 0) | 0;
  $9 = $0 + 44 | 0;
  HEAP32[$9 >> 2] = HEAP32[$9 >> 2] | $8;
 }
 $12 = $0 + 36 | 0;
 if (HEAP32[$12 >> 2] | 0) {
  $16 = $3 + 255 & 255;
  $17 = $0 + 44 | 0;
  do {
   $18 = _ec_write_byte($0, $16) | 0;
   HEAP32[$17 >> 2] = HEAP32[$17 >> 2] | $18;
   $22 = (HEAP32[$12 >> 2] | 0) + -1 | 0;
   HEAP32[$12 >> 2] = $22;
  } while (($22 | 0) != 0);
 }
 HEAP32[$4 >> 2] = $1 & 255;
 return;
}

function _silk_NLSF_residual_dequant($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $$0 = 0, $$01 = 0, $$01$in = 0, $$2 = 0, $13 = 0, $15 = 0, $17 = 0, $28 = 0, $6 = 0;
 $6 = $3 << 16 >> 16;
 $$0 = 0;
 $$01$in = $4 << 16 >> 16;
 while (1) {
  $$01 = $$01$in + -1 | 0;
  if (($$01$in | 0) <= 0) break;
  $13 = (Math_imul($$0 << 16 >> 16, HEAPU8[$2 + $$01 >> 0] | 0) | 0) >> 8;
  $15 = HEAP8[$1 + $$01 >> 0] | 0;
  $17 = $15 << 24 >> 24 << 10;
  if ($15 << 24 >> 24 > 0) $$2 = $17 + -102 | 0; else $$2 = $15 << 24 >> 24 ? $17 | 102 : $17;
  $28 = $13 + ((Math_imul($$2 >> 16, $6) | 0) + ((Math_imul($$2 & 65535, $6) | 0) >> 16)) | 0;
  HEAP16[$0 + ($$01 << 1) >> 1] = $28;
  $$0 = $28;
  $$01$in = $$01;
 }
 return;
}

function _silk_resampler_private_AR2($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $$0 = 0, $13 = 0, $15 = 0, $17 = 0, $19 = 0, $21 = 0, $27 = 0, $5 = 0, $6 = 0;
 $5 = $0 + 4 | 0;
 $6 = $3 + 2 | 0;
 $$0 = 0;
 while (1) {
  if (($$0 | 0) >= ($4 | 0)) break;
  $13 = (HEAP32[$0 >> 2] | 0) + (HEAP16[$2 + ($$0 << 1) >> 1] << 8) | 0;
  HEAP32[$1 + ($$0 << 2) >> 2] = $13;
  $15 = $13 << 2;
  $17 = $15 >> 16;
  $19 = HEAP16[$3 >> 1] | 0;
  $21 = $15 & 65532;
  HEAP32[$0 >> 2] = (HEAP32[$5 >> 2] | 0) + ((Math_imul($17, $19) | 0) + ((Math_imul($21, $19) | 0) >> 16));
  $27 = HEAP16[$6 >> 1] | 0;
  HEAP32[$5 >> 2] = (Math_imul($17, $27) | 0) + ((Math_imul($21, $27) | 0) >> 16);
  $$0 = $$0 + 1 | 0;
 }
 return;
}

function _ec_dec_bits($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$0 = 0, $$01 = 0, $$1 = 0, $$12 = 0, $12 = 0, $2 = 0, $24 = 0, $3 = 0, $4 = 0, $5 = 0, $7 = 0;
 $2 = $0 + 12 | 0;
 $3 = HEAP32[$2 >> 2] | 0;
 $4 = $0 + 16 | 0;
 $5 = HEAP32[$4 >> 2] | 0;
 if ($5 >>> 0 < $1 >>> 0) {
  $7 = $5 + 8 | 0;
  $12 = $5 + ((($7 | 0) > 25 ? $7 : 25) + -1 - $5 & -8) | 0;
  $$0 = $5;
  $$01 = $3;
  do {
   $$01 = $$01 | (_ec_read_byte_from_end($0) | 0) << $$0;
   $$0 = $$0 + 8 | 0;
  } while (($$0 | 0) < 25);
  $$1 = $12 + 8 | 0;
  $$12 = $$01;
 } else {
  $$1 = $5;
  $$12 = $3;
 }
 HEAP32[$2 >> 2] = $$12 >>> $1;
 HEAP32[$4 >> 2] = $$1 - $1;
 $24 = $0 + 20 | 0;
 HEAP32[$24 >> 2] = (HEAP32[$24 >> 2] | 0) + $1;
 return $$12 & (1 << $1) + -1 | 0;
}

function _compute_func($0, $$0$0$val, $$0$1$val) {
 $0 = +$0;
 $$0$0$val = $$0$0$val | 0;
 $$0$1$val = $$0$1$val | 0;
 var $10 = 0.0, $11 = 0.0, $12 = 0.0, $14 = 0.0, $17 = 0.0, $2 = 0.0, $20 = 0.0, $3 = 0, $5 = 0.0, $6 = 0.0, $8 = 0.0;
 $2 = +($$0$1$val | 0) * $0;
 $3 = ~~+Math_floor(+$2);
 $5 = $2 - +($3 | 0);
 $6 = $5;
 $8 = $5 * $5;
 $10 = $8 * $5;
 $11 = $10 * .1666666667;
 $12 = $6 * -.1666666667 + $11;
 $14 = $8 * .5;
 $17 = $6 + $14 - $10 * .5;
 $20 = $6 * -.3333333333 + $14 - $11;
 return +($20 * +HEAPF64[$$0$0$val + ($3 << 3) >> 3] + (1.0 - $12 - $17 - $20) * +HEAPF64[$$0$0$val + ($3 + 1 << 3) >> 3] + $17 * +HEAPF64[$$0$0$val + ($3 + 2 << 3) >> 3] + $12 * +HEAPF64[$$0$0$val + ($3 + 3 << 3) >> 3]);
}

function _fast_atan2f($0, $1) {
 $0 = +$0;
 $1 = +$1;
 var $$0 = 0.0, $2 = 0.0, $26 = 0.0, $3 = 0.0;
 $2 = $1 * $1;
 $3 = $0 * $0;
 if ($2 + $3 < 1.000000045813705e-18) {
  $$0 = 0.0;
  return +$$0;
 }
 if ($2 < $3) {
  $$0 = -($1 * $0 * ($3 + $2 * .43157973885536194)) / (($3 + $2 * .6784840226173401) * ($3 + $2 * .0859554186463356)) + ($0 < 0.0 ? -1.5707963705062866 : 1.5707963705062866);
  return +$$0;
 } else {
  $26 = $1 * $0;
  $$0 = $26 * ($2 + $3 * .43157973885536194) / (($2 + $3 * .6784840226173401) * ($2 + $3 * .0859554186463356)) + ($0 < 0.0 ? -1.5707963705062866 : 1.5707963705062866) - ($26 < 0.0 ? -1.5707963705062866 : 1.5707963705062866);
  return +$$0;
 }
 return +(0.0);
}

function _alg_quant($0, $1, $2, $3, $4, $5, $6, $7) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = +$6;
 $7 = $7 | 0;
 var $10 = 0.0, $12 = 0, $9 = 0, sp = 0;
 sp = STACKTOP;
 $9 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($1 + 3 << 2) | 0) + 15 & -16) | 0;
 _exp_rotation($0, $1, 1, $4, $2, $3);
 $10 = +_op_pvq_search_c($0, $9, $2, $1);
 _encode_pulses($9, $1, $2, $5);
 if (!$7) {
  $12 = _extract_collapse_mask($9, $1, $4) | 0;
  STACKTOP = sp;
  return $12 | 0;
 }
 _normalise_residual($9, $0, $1, $10, $6);
 _exp_rotation($0, $1, -1, $4, $2, $3);
 $12 = _extract_collapse_mask($9, $1, $4) | 0;
 STACKTOP = sp;
 return $12 | 0;
}

function _smooth_fade($0, $1, $2, $3, $4, $5, $6) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 var $$0 = 0, $$01 = 0, $12 = 0.0, $13 = 0.0, $15 = 0, $7 = 0;
 $7 = 48e3 / ($6 | 0) | 0;
 $$0 = 0;
 while (1) {
  if (($$0 | 0) < ($4 | 0)) $$01 = 0; else break;
  while (1) {
   if (($$01 | 0) >= ($3 | 0)) break;
   $12 = +HEAPF32[$5 + ((Math_imul($$01, $7) | 0) << 2) >> 2];
   $13 = $12 * $12;
   $15 = (Math_imul($$01, $4) | 0) + $$0 | 0;
   HEAPF32[$2 + ($15 << 2) >> 2] = $13 * +HEAPF32[$1 + ($15 << 2) >> 2] + (1.0 - $13) * +HEAPF32[$0 + ($15 << 2) >> 2];
   $$01 = $$01 + 1 | 0;
  }
  $$0 = $$0 + 1 | 0;
 }
 return;
}

function _init_caps($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $10 = 0, $12 = 0, $13 = 0, $4 = 0, $5 = 0, $6 = 0, $9 = 0;
 $4 = $0 + 8 | 0;
 $5 = $0 + 32 | 0;
 $6 = $0 + 104 | 0;
 $9 = ($2 << 1) + $3 + -1 | 0;
 $$0 = 0;
 while (1) {
  $10 = HEAP32[$4 >> 2] | 0;
  if (($$0 | 0) >= ($10 | 0)) break;
  $12 = HEAP32[$5 >> 2] | 0;
  $13 = $$0 + 1 | 0;
  HEAP32[$1 + ($$0 << 2) >> 2] = (Math_imul(Math_imul((HEAPU8[(HEAP32[$6 >> 2] | 0) + ((Math_imul($10, $9) | 0) + $$0) >> 0] | 0) + 64 | 0, $3) | 0, (HEAP16[$12 + ($13 << 1) >> 1] | 0) - (HEAP16[$12 + ($$0 << 1) >> 1] | 0) << $2) | 0) >> 2;
  $$0 = $13;
 }
 return;
}

function _haar1($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $$01 = 0, $11 = 0.0, $16 = 0, $18 = 0.0, $3 = 0, $4 = 0, $9 = 0;
 $3 = $1 >> 1;
 $4 = $2 << 1;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) < ($2 | 0)) $$0 = 0; else break;
  while (1) {
   if (($$0 | 0) >= ($3 | 0)) break;
   $9 = $0 + ((Math_imul($4, $$0) | 0) + $$01 << 2) | 0;
   $11 = +HEAPF32[$9 >> 2] * .7071067690849304;
   $16 = $0 + ((Math_imul($$0 << 1 | 1, $2) | 0) + $$01 << 2) | 0;
   $18 = +HEAPF32[$16 >> 2] * .7071067690849304;
   HEAPF32[$9 >> 2] = $11 + $18;
   HEAPF32[$16 >> 2] = $11 - $18;
   $$0 = $$0 + 1 | 0;
  }
  $$01 = $$01 + 1 | 0;
 }
 return;
}

function _intensity_stereo($$0$2$val, $0, $1, $2, $3, $4) {
 $$0$2$val = $$0$2$val | 0;
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $$0 = 0, $14 = 0.0, $15 = 0.0, $16 = 0.0, $18 = 0, $6 = 0.0, $9 = 0.0;
 $6 = +HEAPF32[$2 + ($3 << 2) >> 2];
 $9 = +HEAPF32[$2 + ($$0$2$val + $3 << 2) >> 2];
 $14 = +Math_sqrt(+($6 * $6 + 1.0000000036274937e-15 + $9 * $9)) + 1.0000000036274937e-15;
 $15 = $6 / $14;
 $16 = $9 / $14;
 $$0 = 0;
 while (1) {
  if (($$0 | 0) >= ($4 | 0)) break;
  $18 = $0 + ($$0 << 2) | 0;
  HEAPF32[$18 >> 2] = $15 * +HEAPF32[$18 >> 2] + $16 * +HEAPF32[$1 + ($$0 << 2) >> 2];
  $$0 = $$0 + 1 | 0;
 }
 return;
}

function _sbrk(increment) {
 increment = increment | 0;
 var oldDynamicTop = 0, newDynamicTop = 0;
 increment = increment + 15 & -16 | 0;
 oldDynamicTop = HEAP32[DYNAMICTOP_PTR >> 2] | 0;
 newDynamicTop = oldDynamicTop + increment | 0;
 if ((increment | 0) > 0 & (newDynamicTop | 0) < (oldDynamicTop | 0) | (newDynamicTop | 0) < 0) {
  abortOnCannotGrowMemory() | 0;
  ___setErrNo(12);
  return -1;
 }
 HEAP32[DYNAMICTOP_PTR >> 2] = newDynamicTop;
 if ((newDynamicTop | 0) > (getTotalMemory() | 0)) if (!(enlargeMemory() | 0)) {
  HEAP32[DYNAMICTOP_PTR >> 2] = oldDynamicTop;
  ___setErrNo(12);
  return -1;
 }
 return oldDynamicTop | 0;
}

function _extract_collapse_mask($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $$03 = 0, $$04 = 0, $15 = 0, $4 = 0, $5 = 0;
 if (($2 | 0) < 2) {
  $$0 = 1;
  return $$0 | 0;
 }
 $4 = _celt_udiv_87($1, $2) | 0;
 $$03 = 0;
 $$04 = 0;
 while (1) {
  $5 = Math_imul($$03, $4) | 0;
  $$01 = 0;
  $$02 = 0;
  do {
   $$01 = $$01 | HEAP32[$0 + ($5 + $$02 << 2) >> 2];
   $$02 = $$02 + 1 | 0;
  } while (($$02 | 0) < ($4 | 0));
  $15 = $$04 | (($$01 | 0) != 0 & 1) << $$03;
  $$03 = $$03 + 1 | 0;
  if (($$03 | 0) == ($2 | 0)) {
   $$0 = $15;
   break;
  } else $$04 = $15;
 }
 return $$0 | 0;
}

function _ec_encode($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $10 = 0, $11 = 0, $4 = 0, $5 = 0, $6 = 0, $storemerge = 0;
 $4 = $0 + 28 | 0;
 $5 = HEAP32[$4 >> 2] | 0;
 $6 = _celt_udiv_28($5, $3) | 0;
 if (!$1) {
  $storemerge = $5 - (Math_imul($6, $3 - $2 | 0) | 0) | 0;
  HEAP32[$4 >> 2] = $storemerge;
  _ec_enc_normalize($0);
  return;
 } else {
  $10 = $5 - (Math_imul($6, $3 - $1 | 0) | 0) | 0;
  $11 = $0 + 32 | 0;
  HEAP32[$11 >> 2] = (HEAP32[$11 >> 2] | 0) + $10;
  $storemerge = Math_imul($6, $2 - $1 | 0) | 0;
  HEAP32[$4 >> 2] = $storemerge;
  _ec_enc_normalize($0);
  return;
 }
}

function _ec_dec_update($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$pre$phiZ2D = 0, $14 = 0, $17 = 0, $5 = 0, $7 = 0, $8 = 0;
 $5 = HEAP32[$0 + 36 >> 2] | 0;
 $7 = Math_imul($5, $3 - $2 | 0) | 0;
 $8 = $0 + 32 | 0;
 HEAP32[$8 >> 2] = (HEAP32[$8 >> 2] | 0) - $7;
 if (!$1) {
  $14 = $0 + 28 | 0;
  $$pre$phiZ2D = $14;
  $17 = (HEAP32[$14 >> 2] | 0) - $7 | 0;
  HEAP32[$$pre$phiZ2D >> 2] = $17;
  _ec_dec_normalize($0);
  return;
 } else {
  $$pre$phiZ2D = $0 + 28 | 0;
  $17 = Math_imul($5, $2 - $1 | 0) | 0;
  HEAP32[$$pre$phiZ2D >> 2] = $17;
  _ec_dec_normalize($0);
  return;
 }
}

function _ec_dec_uint($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$0 = 0, $13 = 0, $16 = 0, $2 = 0, $4 = 0, $6 = 0, $8 = 0, $9 = 0;
 $2 = $1 + -1 | 0;
 $4 = 32 - (Math_clz32($2 | 0) | 0) | 0;
 if (($4 | 0) <= 8) {
  $16 = _ec_decode($0, $1) | 0;
  _ec_dec_update($0, $16, $16 + 1 | 0, $1);
  $$0 = $16;
  return $$0 | 0;
 }
 $6 = $4 + -8 | 0;
 $8 = ($2 >>> $6) + 1 | 0;
 $9 = _ec_decode($0, $8) | 0;
 _ec_dec_update($0, $9, $9 + 1 | 0, $8);
 $13 = $9 << $6 | (_ec_dec_bits($0, $6) | 0);
 if ($13 >>> 0 <= $2 >>> 0) {
  $$0 = $13;
  return $$0 | 0;
 }
 HEAP32[$0 + 44 >> 2] = 1;
 $$0 = $2;
 return $$0 | 0;
}

function _silk_bwexpander($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $$01 = 0, $20 = 0, $3 = 0, $4 = 0, $6 = 0;
 $3 = $2 + -65536 | 0;
 $4 = $1 + -1 | 0;
 $$0 = 0;
 $$01 = $2;
 while (1) {
  if (($$0 | 0) >= ($4 | 0)) break;
  $6 = $0 + ($$0 << 1) | 0;
  HEAP16[$6 >> 1] = (((Math_imul($$01, HEAP16[$6 >> 1] | 0) | 0) >>> 15) + 1 | 0) >>> 1;
  $$0 = $$0 + 1 | 0;
  $$01 = $$01 + (((Math_imul($$01, $3) | 0) >> 15) + 1 >> 1) | 0;
 }
 $20 = $0 + ($4 << 1) | 0;
 HEAP16[$20 >> 1] = (((Math_imul($$01, HEAP16[$20 >> 1] | 0) | 0) >>> 15) + 1 | 0) >>> 1;
 return;
}

function _opus_packet_get_samples_per_frame($$val, $0) {
 $$val = $$val | 0;
 $0 = $0 | 0;
 var $$2 = 0, $15 = 0;
 if ($$val << 24 >> 24 < 0) {
  $$2 = ($0 << (($$val & 255) >>> 3 & 3) | 0) / 400 | 0;
  return $$2 | 0;
 }
 if (($$val & 96) == 96) if (!($$val & 8)) {
  $$2 = ($0 | 0) / 100 | 0;
  return $$2 | 0;
 } else {
  $$2 = ($0 | 0) / 50 | 0;
  return $$2 | 0;
 } else {
  $15 = ($$val & 255) >>> 3 & 3;
  if (($15 | 0) == 3) {
   $$2 = ($0 * 60 | 0) / 1e3 | 0;
   return $$2 | 0;
  } else {
   $$2 = ($0 << $15 | 0) / 100 | 0;
   return $$2 | 0;
  }
 }
 return 0;
}

function _silk_SQRT_APPROX_133($0) {
 $0 = $0 | 0;
 var $$0 = 0, $1 = 0, $12 = 0, $2 = 0, $4 = 0, $8 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 $1 = sp + 4 | 0;
 $2 = sp;
 if (($0 | 0) < 1) {
  $$0 = 0;
  STACKTOP = sp;
  return $$0 | 0;
 }
 _silk_CLZ_FRAC_134($0, $1, $2);
 $4 = HEAP32[$1 >> 2] | 0;
 $8 = (($4 & 1 | 0) == 0 ? 46214 : 32768) >>> ($4 >> 1);
 $12 = (Math_imul(HEAP32[$2 >> 2] << 16 >> 16, 13959168) | 0) >> 16;
 $$0 = $8 + ((Math_imul($8 >> 16, $12) | 0) + ((Math_imul($8 & 65535, $12) | 0) >> 16)) | 0;
 STACKTOP = sp;
 return $$0 | 0;
}

function _silk_insertion_sort_increasing_all_values_int16($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$0 = 0, $$0$in = 0, $$01 = 0, $4 = 0, $7 = 0;
 $$01 = 1;
 while (1) {
  if (($$01 | 0) >= ($1 | 0)) break;
  $4 = HEAP16[$0 + ($$01 << 1) >> 1] | 0;
  $$0$in = $$01;
  while (1) {
   $$0 = $$0$in + -1 | 0;
   if (($$0$in | 0) <= 0) break;
   $7 = HEAP16[$0 + ($$0 << 1) >> 1] | 0;
   if ($4 << 16 >> 16 >= $7 << 16 >> 16) break;
   HEAP16[$0 + ($$0$in << 1) >> 1] = $7;
   $$0$in = $$0;
  }
  HEAP16[$0 + ($$0$in << 1) >> 1] = $4;
  $$01 = $$01 + 1 | 0;
 }
 return;
}

function _compute_qn($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $$ = 0, $$0 = 0, $$01 = 0, $10 = 0, $12 = 0, $17 = 0;
 $$0 = ($0 << 1) + (($4 | 0) != 0 & ($0 | 0) == 2 ? -2 : -1) | 0;
 $10 = _celt_sudiv((Math_imul($$0, $2) | 0) + $1 | 0, $$0) | 0;
 $12 = $1 - $3 + -32 | 0;
 $$ = ($12 | 0) < ($10 | 0) ? $12 : $10;
 if (($$ | 0) > 64) $17 = 64; else if (($$ | 0) < 4) {
  $$01 = 1;
  return $$01 | 0;
 } else $17 = $$;
 $$01 = (HEAP16[19124 + (($17 & 7) << 1) >> 1] >> 14 - ($17 >> 3)) + 1 & -2;
 return $$01 | 0;
}

function _silk_SQRT_APPROX($0) {
 $0 = $0 | 0;
 var $$0 = 0, $1 = 0, $12 = 0, $2 = 0, $4 = 0, $8 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 $1 = sp + 4 | 0;
 $2 = sp;
 if (($0 | 0) < 1) {
  $$0 = 0;
  STACKTOP = sp;
  return $$0 | 0;
 }
 _silk_CLZ_FRAC($0, $1, $2);
 $4 = HEAP32[$1 >> 2] | 0;
 $8 = (($4 & 1 | 0) == 0 ? 46214 : 32768) >>> ($4 >> 1);
 $12 = (Math_imul(HEAP32[$2 >> 2] << 16 >> 16, 13959168) | 0) >> 16;
 $$0 = $8 + ((Math_imul($8 >> 16, $12) | 0) + ((Math_imul($8 & 65535, $12) | 0) >> 16)) | 0;
 STACKTOP = sp;
 return $$0 | 0;
}

function _silk_LPC_inverse_pred_gain_c($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $2 = 0, $6 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 $2 = sp;
 $$01 = 0;
 $$02 = 0;
 while (1) {
  if (($$02 | 0) >= ($1 | 0)) break;
  $6 = HEAP16[$0 + ($$02 << 1) >> 1] | 0;
  HEAP32[$2 + ($$02 << 2) >> 2] = $6 << 12;
  $$01 = $$01 + $6 | 0;
  $$02 = $$02 + 1 | 0;
 }
 if (($$01 | 0) > 4095) {
  $$0 = 0;
  STACKTOP = sp;
  return $$0 | 0;
 }
 $$0 = _LPC_inverse_pred_gain_QA_c($2, $1) | 0;
 STACKTOP = sp;
 return $$0 | 0;
}

function _ec_dec_normalize($0) {
 $0 = $0 | 0;
 var $1 = 0, $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0;
 $1 = $0 + 28 | 0;
 $2 = $0 + 20 | 0;
 $3 = $0 + 40 | 0;
 $4 = $0 + 32 | 0;
 while (1) {
  $5 = HEAP32[$1 >> 2] | 0;
  if ($5 >>> 0 >= 8388609) break;
  HEAP32[$2 >> 2] = (HEAP32[$2 >> 2] | 0) + 8;
  HEAP32[$1 >> 2] = $5 << 8;
  $10 = HEAP32[$3 >> 2] | 0;
  $11 = _ec_read_byte($0) | 0;
  HEAP32[$3 >> 2] = $11;
  HEAP32[$4 >> 2] = (($10 << 8 | $11) >>> 1 & 255 | HEAP32[$4 >> 2] << 8 & 2147483392) ^ 255;
 }
 return;
}

function _ec_dec_icdf($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $$01 = 0, $12 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
 $3 = $0 + 28 | 0;
 $4 = HEAP32[$3 >> 2] | 0;
 $5 = $0 + 32 | 0;
 $6 = HEAP32[$5 >> 2] | 0;
 $7 = $4 >>> $2;
 $$0 = -1;
 $$01 = $4;
 while (1) {
  $$0 = $$0 + 1 | 0;
  $12 = Math_imul($7, HEAPU8[$1 + $$0 >> 0] | 0) | 0;
  if ($6 >>> 0 >= $12 >>> 0) break; else $$01 = $12;
 }
 HEAP32[$5 >> 2] = $6 - $12;
 HEAP32[$3 >> 2] = $$01 - $12;
 _ec_dec_normalize($0);
 return $$0 | 0;
}

function ___muldi3($a$0, $a$1, $b$0, $b$1) {
 $a$0 = $a$0 | 0;
 $a$1 = $a$1 | 0;
 $b$0 = $b$0 | 0;
 $b$1 = $b$1 | 0;
 var $x_sroa_0_0_extract_trunc = 0, $y_sroa_0_0_extract_trunc = 0, $1$0 = 0, $1$1 = 0;
 $x_sroa_0_0_extract_trunc = $a$0;
 $y_sroa_0_0_extract_trunc = $b$0;
 $1$0 = ___muldsi3($x_sroa_0_0_extract_trunc, $y_sroa_0_0_extract_trunc) | 0;
 $1$1 = tempRet0;
 return (tempRet0 = (Math_imul($a$1, $y_sroa_0_0_extract_trunc) | 0) + (Math_imul($b$1, $x_sroa_0_0_extract_trunc) | 0) + $1$1 | $1$1 & 0, $1$0 | 0 | 0) | 0;
}

function _silk_CNG_exc($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $9 = 0;
 $$0 = 255;
 while (1) {
  if (($$0 | 0) <= ($2 | 0)) break;
  $$0 = $$0 >> 1;
 }
 $$01 = 0;
 $$02 = HEAP32[$3 >> 2] | 0;
 while (1) {
  if (($$01 | 0) >= ($2 | 0)) break;
  $9 = (Math_imul($$02, 196314165) | 0) + 907633515 | 0;
  HEAP32[$0 + ($$01 << 2) >> 2] = HEAP32[$1 + (($9 >> 24 & $$0) << 2) >> 2];
  $$01 = $$01 + 1 | 0;
  $$02 = $9;
 }
 HEAP32[$3 >> 2] = $$02;
 return;
}

function _bitexact_log2tan($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $12 = 0, $22 = 0, $3 = 0, $5 = 0;
 $3 = 32 - (Math_clz32($1 | 0) | 0) | 0;
 $5 = 32 - (Math_clz32($0 | 0) | 0) | 0;
 $12 = $0 << 15 - $5 << 16 >> 16;
 $22 = $1 << 15 - $3 << 16 >> 16;
 return ($5 - $3 << 11) + ((Math_imul($12, (((Math_imul($12, -2597) | 0) + 16384 | 0) >>> 15 << 16) + 519831552 >> 16) | 0) + 16384 >> 15) - ((Math_imul($22, (((Math_imul($22, -2597) | 0) + 16384 | 0) >>> 15 << 16) + 519831552 >> 16) | 0) + 16384 >> 15) | 0;
}

function _silk_log2lin($0) {
 $0 = $0 | 0;
 var $$0 = 0, $$pn = 0, $3 = 0, $4 = 0, $5 = 0;
 if (($0 | 0) < 0) {
  $$0 = 0;
  return $$0 | 0;
 }
 if (($0 | 0) > 3966) {
  $$0 = 2147483647;
  return $$0 | 0;
 }
 $3 = $0 >> 7;
 $4 = 1 << $3;
 $5 = $0 & 127;
 if (($0 | 0) < 2048) $$pn = $5 + ((Math_imul(Math_imul($5, 128 - $5 | 0) | 0, -174) | 0) >> 16) << $3 >> 7; else $$pn = Math_imul($4 >> 7, $5 + ((Math_imul(Math_imul($5, 128 - $5 | 0) | 0, -174) | 0) >> 16) | 0) | 0;
 $$0 = $4 + $$pn | 0;
 return $$0 | 0;
}

function _ec_dec_init($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $10 = 0, $9 = 0;
 HEAP32[$0 >> 2] = $1;
 HEAP32[$0 + 4 >> 2] = $2;
 HEAP32[$0 + 8 >> 2] = 0;
 HEAP32[$0 + 12 >> 2] = 0;
 HEAP32[$0 + 16 >> 2] = 0;
 HEAP32[$0 + 20 >> 2] = 9;
 HEAP32[$0 + 24 >> 2] = 0;
 $9 = $0 + 28 | 0;
 HEAP32[$9 >> 2] = 128;
 $10 = _ec_read_byte($0) | 0;
 HEAP32[$0 + 40 >> 2] = $10;
 HEAP32[$0 + 32 >> 2] = (HEAP32[$9 >> 2] | 0) + -1 - ($10 >> 1);
 HEAP32[$0 + 44 >> 2] = 0;
 _ec_dec_normalize($0);
 return;
}

function _dual_inner_prod_c($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$0 = 0.0, $$01 = 0.0, $$02 = 0, $8 = 0.0;
 $$0 = 0.0;
 $$01 = 0.0;
 $$02 = 0;
 while (1) {
  if (($$02 | 0) >= ($3 | 0)) break;
  $8 = +HEAPF32[$0 + ($$02 << 2) >> 2];
  $$0 = $$0 + $8 * +HEAPF32[$2 + ($$02 << 2) >> 2];
  $$01 = $$01 + $8 * +HEAPF32[$1 + ($$02 << 2) >> 2];
  $$02 = $$02 + 1 | 0;
 }
 HEAPF32[$4 >> 2] = $$01;
 HEAPF32[$5 >> 2] = $$0;
 return;
}

function _opus_decoder_get_size($0) {
 $0 = $0 | 0;
 var $$0 = 0, $1 = 0, $6 = 0, $7 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 $1 = sp;
 if (($0 + -1 | 0) >>> 0 > 1) {
  $$0 = 0;
  STACKTOP = sp;
  return $$0 | 0;
 }
 if (_silk_Get_Decoder_Size($1) | 0) {
  $$0 = 0;
  STACKTOP = sp;
  return $$0 | 0;
 }
 $6 = _align(HEAP32[$1 >> 2] | 0) | 0;
 HEAP32[$1 >> 2] = $6;
 $7 = _celt_decoder_get_size($0) | 0;
 $$0 = (_align(88) | 0) + $6 + $7 | 0;
 STACKTOP = sp;
 return $$0 | 0;
}

function _sinc($0, $1, $2, $3) {
 $0 = +$0;
 $1 = +$1;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0.0, $12 = 0.0, $15 = 0.0, $20 = 0.0, $5 = 0.0, $7 = 0.0;
 $5 = +Math_abs(+$1);
 if ($5 < 1.0e-06) {
  $$0 = $0;
  return +$$0;
 }
 $7 = +($2 | 0);
 if ($5 > $7 * .5) {
  $$0 = 0.0;
  return +$$0;
 }
 $12 = $1 * $0 * 3.141592653589793;
 $15 = $0 * +Math_sin(+$12) / $12;
 $20 = +Math_abs(+($1 * 2.0 / $7));
 $$0 = $15 * +_compute_func($20, HEAP32[$3 >> 2] | 0, HEAP32[$3 + 4 >> 2] | 0);
 return +$$0;
}

function _parse_size($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $$sink = 0, $4 = 0;
 do if (($1 | 0) < 1) {
  $$0 = -1;
  $$sink = -1;
 } else {
  $4 = HEAP8[$0 >> 0] | 0;
  if (($4 & 255) < 252) {
   $$0 = 1;
   $$sink = $4 & 255;
   break;
  }
  if (($1 | 0) < 2) {
   $$0 = -1;
   $$sink = -1;
  } else {
   $$0 = 2;
   $$sink = ((HEAPU8[$0 + 1 >> 0] | 0) << 2) + ($4 & 255) & 65535;
  }
 } while (0);
 HEAP16[$2 >> 1] = $$sink;
 return $$0 | 0;
}

function _silk_CNG_Reset($0) {
 $0 = $0 | 0;
 var $$0 = 0, $$01 = 0, $1 = 0, $2 = 0, $4 = 0, $6 = 0, $7 = 0;
 $1 = $0 + 2340 | 0;
 $2 = HEAP32[$1 >> 2] | 0;
 $4 = 32767 / ($2 + 1 | 0) | 0;
 $$0 = 0;
 $$01 = 0;
 $6 = $2;
 while (1) {
  if (($$01 | 0) >= ($6 | 0)) break;
  $7 = $$0 + $4 | 0;
  HEAP16[$0 + 4052 + ($$01 << 1) >> 1] = $7;
  $$0 = $7;
  $$01 = $$01 + 1 | 0;
  $6 = HEAP32[$1 >> 2] | 0;
 }
 HEAP32[$0 + 4148 >> 2] = 0;
 HEAP32[$0 + 4152 >> 2] = 3176576;
 return;
}

function runPostSets() {}
function ___muldsi3($a, $b) {
 $a = $a | 0;
 $b = $b | 0;
 var $1 = 0, $2 = 0, $3 = 0, $6 = 0, $8 = 0, $11 = 0, $12 = 0;
 $1 = $a & 65535;
 $2 = $b & 65535;
 $3 = Math_imul($2, $1) | 0;
 $6 = $a >>> 16;
 $8 = ($3 >>> 16) + (Math_imul($2, $6) | 0) | 0;
 $11 = $b >>> 16;
 $12 = Math_imul($11, $1) | 0;
 return (tempRet0 = ($8 >>> 16) + (Math_imul($11, $6) | 0) + ((($8 & 65535) + $12 | 0) >>> 16) | 0, $8 + $12 << 16 | $3 & 65535 | 0) | 0;
}

function _silk_PLC($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $11 = 0, $4 = 0, $6 = 0;
 $4 = $0 + 2316 | 0;
 $6 = $0 + 4252 | 0;
 if ((HEAP32[$4 >> 2] | 0) != (HEAP32[$6 >> 2] | 0)) {
  _silk_PLC_Reset($0);
  HEAP32[$6 >> 2] = HEAP32[$4 >> 2];
 }
 if (!$3) {
  _silk_PLC_update($0, $1);
  return;
 } else {
  _silk_PLC_conceal($0, $1, $2);
  $11 = $0 + 4160 | 0;
  HEAP32[$11 >> 2] = (HEAP32[$11 >> 2] | 0) + 1;
  return;
 }
}

function _isqrt32($0) {
 $0 = $0 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $$04 = 0, $4 = 0, $8 = 0, $9 = 0;
 $4 = 32 - (Math_clz32($0 | 0) | 0) + -1 >> 1;
 $$0 = $0;
 $$01 = 1 << $4;
 $$02 = 0;
 $$04 = $4;
 while (1) {
  $8 = ($$02 << 1) + $$01 << $$04;
  $9 = $$0 >>> 0 < $8 >>> 0;
  $$02 = $$02 + ($9 ? 0 : $$01) | 0;
  if (($$04 | 0) <= 0) break; else {
   $$0 = $$0 - ($9 ? 0 : $8) | 0;
   $$01 = $$01 >>> 1;
   $$04 = $$04 + -1 | 0;
  }
 }
 return $$02 | 0;
}

function _ec_enc_normalize($0) {
 $0 = $0 | 0;
 var $1 = 0, $12 = 0, $2 = 0, $3 = 0, $5 = 0;
 $1 = $0 + 28 | 0;
 $2 = $0 + 32 | 0;
 $3 = $0 + 20 | 0;
 $5 = HEAP32[$1 >> 2] | 0;
 while (1) {
  if ($5 >>> 0 >= 8388609) break;
  _ec_enc_carry_out($0, (HEAP32[$2 >> 2] | 0) >>> 23);
  HEAP32[$2 >> 2] = HEAP32[$2 >> 2] << 8 & 2147483392;
  $12 = HEAP32[$1 >> 2] << 8;
  HEAP32[$1 >> 2] = $12;
  HEAP32[$3 >> 2] = (HEAP32[$3 >> 2] | 0) + 8;
  $5 = $12;
 }
 return;
}

function _encode_pulses($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $12 = 0, $4 = 0, $8 = 0;
 $4 = _icwrs($1, $0) | 0;
 $8 = ($1 | 0) > ($2 | 0);
 $12 = $2 + 1 | 0;
 _ec_enc_uint($3, $4, (HEAP32[(HEAP32[1572 + ((($1 | 0) < ($2 | 0) ? $1 : $2) << 2) >> 2] | 0) + (($8 ? $1 : $2) << 2) >> 2] | 0) + (HEAP32[(HEAP32[1572 + (($8 ? $12 : $1) << 2) >> 2] | 0) + ((($12 | 0) < ($1 | 0) ? $1 : $12) << 2) >> 2] | 0) | 0);
 return;
}

function _alg_unquant($0, $1, $2, $3, $4, $5, $6) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = +$6;
 var $7 = 0, $9 = 0, sp = 0;
 sp = STACKTOP;
 $7 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($1 << 2) | 0) + 15 & -16) | 0;
 _normalise_residual($7, $0, $1, +_decode_pulses($7, $1, $2, $5), $6);
 _exp_rotation($0, $1, -1, $4, $2, $3);
 $9 = _extract_collapse_mask($7, $1, $4) | 0;
 STACKTOP = sp;
 return $9 | 0;
}

function _decode_pulses($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $11 = 0, $7 = 0;
 $7 = ($1 | 0) > ($2 | 0);
 $11 = $2 + 1 | 0;
 return +(+_cwrsi($1, $2, _ec_dec_uint($3, (HEAP32[(HEAP32[1572 + ((($1 | 0) < ($2 | 0) ? $1 : $2) << 2) >> 2] | 0) + (($7 ? $1 : $2) << 2) >> 2] | 0) + (HEAP32[(HEAP32[1572 + (($7 ? $11 : $1) << 2) >> 2] | 0) + ((($11 | 0) < ($1 | 0) ? $1 : $11) << 2) >> 2] | 0) | 0) | 0, $0));
}

function _decode_split($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $10 = 0, $storemerge = 0;
 if (($3 | 0) > 0) {
  $10 = _ec_dec_icdf($2, $4 + (HEAPU8[27971 + $3 >> 0] | 0) | 0, 8) | 0;
  HEAP16[$0 >> 1] = $10;
  $storemerge = $3 - $10 & 65535;
  HEAP16[$1 >> 1] = $storemerge;
  return;
 } else {
  HEAP16[$0 >> 1] = 0;
  $storemerge = 0;
  HEAP16[$1 >> 1] = $storemerge;
  return;
 }
}

function _memmove(dest, src, num) {
 dest = dest | 0;
 src = src | 0;
 num = num | 0;
 var ret = 0;
 if ((src | 0) < (dest | 0) & (dest | 0) < (src + num | 0)) {
  ret = dest;
  src = src + num | 0;
  dest = dest + num | 0;
  while ((num | 0) > 0) {
   dest = dest - 1 | 0;
   src = src - 1 | 0;
   num = num - 1 | 0;
   HEAP8[dest >> 0] = HEAP8[src >> 0] | 0;
  }
  dest = ret;
 } else _memcpy(dest, src, num) | 0;
 return dest | 0;
}

function _ec_write_byte_at_end($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$0 = 0, $11 = 0, $12 = 0, $4 = 0, $5 = 0, $8 = 0;
 $4 = $0 + 8 | 0;
 $5 = HEAP32[$4 >> 2] | 0;
 $8 = HEAP32[$0 + 4 >> 2] | 0;
 if (((HEAP32[$0 + 24 >> 2] | 0) + $5 | 0) >>> 0 >= $8 >>> 0) {
  $$0 = -1;
  return $$0 | 0;
 }
 $11 = HEAP32[$0 >> 2] | 0;
 $12 = $5 + 1 | 0;
 HEAP32[$4 >> 2] = $12;
 HEAP8[$11 + ($8 - $12) >> 0] = $1;
 $$0 = 0;
 return $$0 | 0;
}

function _stereo_split($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $4 = 0, $6 = 0.0, $7 = 0, $9 = 0.0;
 $$0 = 0;
 while (1) {
  if (($$0 | 0) >= ($2 | 0)) break;
  $4 = $0 + ($$0 << 2) | 0;
  $6 = +HEAPF32[$4 >> 2] * .7071067690849304;
  $7 = $1 + ($$0 << 2) | 0;
  $9 = +HEAPF32[$7 >> 2] * .7071067690849304;
  HEAPF32[$4 >> 2] = $6 + $9;
  HEAPF32[$7 >> 2] = $9 - $6;
  $$0 = $$0 + 1 | 0;
 }
 return;
}

function _cubic_coef($0, $1) {
 $0 = +$0;
 $1 = $1 | 0;
 var $11 = 0.0, $15 = 0.0, $5 = 0.0, $6 = 0.0, $8 = 0.0;
 $5 = $0 * .16666999459266663 * $0 * $0;
 $6 = $0 * -.16666999459266663 + $5;
 HEAPF32[$1 >> 2] = $6;
 $8 = $0 * .5 * $0;
 $11 = $8 + $0 - $8 * $0;
 HEAPF32[$1 + 4 >> 2] = $11;
 $15 = $0 * -.3333300054073334 + $8 - $5;
 HEAPF32[$1 + 12 >> 2] = $15;
 HEAPF32[$1 + 8 >> 2] = 1.0 - $6 - $11 - $15;
 return;
}

function _ec_enc_uint($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $10 = 0, $3 = 0, $5 = 0, $7 = 0;
 $3 = $2 + -1 | 0;
 $5 = 32 - (Math_clz32($3 | 0) | 0) | 0;
 if (($5 | 0) > 8) {
  $7 = $5 + -8 | 0;
  $10 = $1 >>> $7;
  _ec_encode($0, $10, $10 + 1 | 0, ($3 >>> $7) + 1 | 0);
  _ec_enc_bits($0, (1 << $7) + -1 & $1, $7);
  return;
 } else {
  _ec_encode($0, $1, $1 + 1 | 0, $2);
  return;
 }
}

function _ec_dec_bit_logp($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0;
 $2 = $0 + 28 | 0;
 $3 = HEAP32[$2 >> 2] | 0;
 $4 = $0 + 32 | 0;
 $5 = HEAP32[$4 >> 2] | 0;
 $6 = $3 >>> $1;
 $7 = $5 >>> 0 < $6 >>> 0;
 if ($7) $11 = $6; else {
  HEAP32[$4 >> 2] = $5 - $6;
  $11 = $3 - $6 | 0;
 }
 HEAP32[$2 >> 2] = $11;
 _ec_dec_normalize($0);
 return $7 & 1 | 0;
}

function _bitexact_cos($0) {
 $0 = $0 | 0;
 var $1 = 0, $4 = 0, $6 = 0;
 $1 = $0 << 16 >> 16;
 $4 = ((Math_imul($1, $1) | 0) + 4096 | 0) >>> 13;
 $6 = $4 << 16 >> 16;
 return 32767 - $4 + (((Math_imul($6, (((Math_imul($6, (((Math_imul($6, -626) | 0) + 16384 | 0) >>> 15 << 16) + 542441472 >> 16) | 0) + 16384 | 0) >>> 15 << 16) + -501415936 >> 16) | 0) + 16384 | 0) >>> 15) + 1 & 65535 | 0;
}

function _ec_enc_bit_logp($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $11 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $8 = 0;
 $3 = $0 + 28 | 0;
 $4 = HEAP32[$3 >> 2] | 0;
 $5 = $4 >>> $2;
 $6 = $4 - $5 | 0;
 if (!$1) $11 = $6; else {
  $8 = $0 + 32 | 0;
  HEAP32[$8 >> 2] = (HEAP32[$8 >> 2] | 0) + $6;
  $11 = $5;
 }
 HEAP32[$3 >> 2] = $11;
 _ec_enc_normalize($0);
 return;
}

function _renormalise_vector($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = +$2;
 var $$0 = 0, $$01 = 0, $6 = 0.0;
 $6 = 1.0 / +Math_sqrt(+(+_celt_inner_prod_c_94($0, $0, $1) + 1.0000000036274937e-15)) * $2;
 $$0 = $0;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) >= ($1 | 0)) break;
  HEAPF32[$$0 >> 2] = $6 * +HEAPF32[$$0 >> 2];
  $$0 = $$0 + 4 | 0;
  $$01 = $$01 + 1 | 0;
 }
 return;
}

function _ec_write_byte($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$0 = 0, $11 = 0, $2 = 0, $3 = 0;
 $2 = $0 + 24 | 0;
 $3 = HEAP32[$2 >> 2] | 0;
 if (($3 + (HEAP32[$0 + 8 >> 2] | 0) | 0) >>> 0 >= (HEAP32[$0 + 4 >> 2] | 0) >>> 0) {
  $$0 = -1;
  return $$0 | 0;
 }
 $11 = HEAP32[$0 >> 2] | 0;
 HEAP32[$2 >> 2] = $3 + 1;
 HEAP8[$11 + $3 >> 0] = $1;
 $$0 = 0;
 return $$0 | 0;
}

function _opus_packet_get_bandwidth($$val) {
 $$val = $$val | 0;
 var $$2 = 0, $3 = 0;
 if ($$val << 24 >> 24 < 0) {
  $3 = ($$val & 255) >>> 5 & 3;
  return (($3 | 0) == 0 ? 1101 : $3 + 1102 | 0) | 0;
 }
 if (($$val & 96) == 96) {
  $$2 = ($$val & 16) >>> 4 | 1104;
  return $$2 | 0;
 } else {
  $$2 = (($$val & 255) >>> 5 & 3) + 1101 | 0;
  return $$2 | 0;
 }
 return 0;
}

function _ec_read_byte_from_end($0) {
 $0 = $0 | 0;
 var $1 = 0, $12 = 0, $2 = 0, $4 = 0, $6 = 0, $7 = 0;
 $1 = $0 + 8 | 0;
 $2 = HEAP32[$1 >> 2] | 0;
 $4 = HEAP32[$0 + 4 >> 2] | 0;
 if ($2 >>> 0 >= $4 >>> 0) {
  $12 = 0;
  return $12 | 0;
 }
 $6 = HEAP32[$0 >> 2] | 0;
 $7 = $2 + 1 | 0;
 HEAP32[$1 >> 2] = $7;
 $12 = HEAPU8[$6 + ($4 - $7) >> 0] | 0;
 return $12 | 0;
}

function _ec_tell_frac($$0$5$val, $$0$7$val) {
 $$0$5$val = $$0$5$val | 0;
 $$0$7$val = $$0$7$val | 0;
 var $2 = 0, $4 = 0, $6 = 0;
 $2 = 32 - (Math_clz32($$0$7$val | 0) | 0) | 0;
 $4 = $$0$7$val >>> ($2 + -16 | 0);
 $6 = ($4 >>> 12) + -8 | 0;
 return ($$0$5$val << 3) - (($2 << 3) + ($6 + ($4 >>> 0 > (HEAP32[6720 + ($6 << 2) >> 2] | 0) >>> 0 & 1))) | 0;
}

function _pulses2bits($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $22 = 0;
 if (!$3) {
  $22 = 0;
  return $22 | 0;
 }
 $22 = (HEAPU8[(HEAP32[$0 + 100 >> 2] | 0) + (HEAP16[(HEAP32[$0 + 96 >> 2] | 0) + ((Math_imul($2 + 1 | 0, HEAP32[$0 + 8 >> 2] | 0) | 0) + $1 << 1) >> 1] | 0) + $3 >> 0] | 0) + 1 | 0;
 return $22 | 0;
}

function _silk_InitDecoder($0) {
 $0 = $0 | 0;
 var $$01 = 0, $3 = 0;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) == 2) break;
  _silk_init_decoder($0 + ($$01 * 4264 | 0) | 0);
  $$01 = $$01 + 1 | 0;
 }
 $3 = $0 + 8528 | 0;
 HEAP32[$3 >> 2] = 0;
 HEAP32[$3 + 4 >> 2] = 0;
 HEAP32[$3 + 8 >> 2] = 0;
 HEAP32[$0 + 8548 >> 2] = 0;
 return 0;
}

function _celt_decoder_init($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $4 = 0, $6 = 0;
 $4 = _opus_custom_decoder_init($0, _opus_custom_mode_create() | 0, $2) | 0;
 if (!$4) {
  $6 = _resampling_factor($1) | 0;
  HEAP32[$0 + 16 >> 2] = $6;
  return (($6 | 0) == 0) << 31 >> 31 | 0;
 } else return $4 | 0;
 return 0;
}

function _normalise_residual($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = +$3;
 $4 = +$4;
 var $$0 = 0, $6 = 0.0;
 $6 = 1.0 / +Math_sqrt(+$3) * $4;
 $$0 = 0;
 do {
  HEAPF32[$1 + ($$0 << 2) >> 2] = $6 * +(HEAP32[$0 + ($$0 << 2) >> 2] | 0);
  $$0 = $$0 + 1 | 0;
 } while (($$0 | 0) < ($2 | 0));
 return;
}

function _ec_read_byte($0) {
 $0 = $0 | 0;
 var $1 = 0, $11 = 0, $2 = 0, $6 = 0;
 $1 = $0 + 24 | 0;
 $2 = HEAP32[$1 >> 2] | 0;
 if ($2 >>> 0 >= (HEAP32[$0 + 4 >> 2] | 0) >>> 0) {
  $11 = 0;
  return $11 | 0;
 }
 $6 = HEAP32[$0 >> 2] | 0;
 HEAP32[$1 >> 2] = $2 + 1;
 $11 = HEAPU8[$6 + $2 >> 0] | 0;
 return $11 | 0;
}

function _celt_plc_pitch_search($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $2 = 0, $3 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 4112 | 0;
 $2 = sp + 4096 | 0;
 $3 = sp;
 _pitch_downsample($0, $3, $1);
 _pitch_search($3 + 1440 | 0, $3, $2);
 STACKTOP = sp;
 return 720 - (HEAP32[$2 >> 2] | 0) | 0;
}

function _celt_inner_prod_c_94($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0.0, $$01 = 0;
 $$0 = 0.0;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) >= ($2 | 0)) break;
  $$0 = $$0 + +HEAPF32[$0 + ($$01 << 2) >> 2] * +HEAPF32[$1 + ($$01 << 2) >> 2];
  $$01 = $$01 + 1 | 0;
 }
 return +$$0;
}

function _celt_inner_prod_c_51($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0.0, $$01 = 0;
 $$0 = 0.0;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) >= ($2 | 0)) break;
  $$0 = $$0 + +HEAPF32[$0 + ($$01 << 2) >> 2] * +HEAPF32[$1 + ($$01 << 2) >> 2];
  $$01 = $$01 + 1 | 0;
 }
 return +$$0;
}

function _speex_resampler_destroy($0) {
 $0 = $0 | 0;
 _speex_free_516(HEAP32[$0 + 72 >> 2] | 0);
 _speex_free_516(HEAP32[$0 + 76 >> 2] | 0);
 _speex_free_516(HEAP32[$0 + 60 >> 2] | 0);
 _speex_free_516(HEAP32[$0 + 68 >> 2] | 0);
 _speex_free_516(HEAP32[$0 + 64 >> 2] | 0);
 _speex_free_516($0);
 return;
}

function _ec_decode_bin($0) {
 $0 = $0 | 0;
 var $3 = 0, $7 = 0, $8 = 0;
 $3 = (HEAP32[$0 + 28 >> 2] | 0) >>> 15;
 HEAP32[$0 + 36 >> 2] = $3;
 $7 = ((HEAP32[$0 + 32 >> 2] | 0) >>> 0) / ($3 >>> 0) | 0;
 $8 = $7 + 1 | 0;
 return 32768 - ($8 + ($8 >>> 0 > 32768 ? 32767 - $7 | 0 : 0)) | 0;
}

function _speex_resampler_set_quality($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $3 = 0;
 if ($1 >>> 0 > 10) return;
 $3 = $0 + 16 | 0;
 if ((HEAP32[$3 >> 2] | 0) == ($1 | 0)) return;
 HEAP32[$3 >> 2] = $1;
 if (!(HEAP32[$0 + 52 >> 2] | 0)) return;
 _update_filter($0) | 0;
 return;
}

function _silk_ROR32_135($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$0 = 0;
 if (!$1) {
  $$0 = $0;
  return $$0 | 0;
 }
 if (($1 | 0) < 0) {
  $$0 = $0 << 0 - $1 | $0 >>> ($1 + 32 | 0);
  return $$0 | 0;
 } else {
  $$0 = $0 << 32 - $1 | $0 >>> $1;
  return $$0 | 0;
 }
 return 0;
}

function _opus_decode_float($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$0 = 0;
 if (($4 | 0) < 1) {
  $$0 = -1;
  return $$0 | 0;
 }
 $$0 = _opus_decode_native($0, $1, $2, $3, $4, $5, 0) | 0;
 return $$0 | 0;
}

function _ec_decode($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $4 = 0, $9 = 0;
 $4 = _celt_udiv_13(HEAP32[$0 + 28 >> 2] | 0, $1) | 0;
 HEAP32[$0 + 36 >> 2] = $4;
 $9 = (((HEAP32[$0 + 32 >> 2] | 0) >>> 0) / ($4 >>> 0) | 0) + 1 | 0;
 return $1 - ($9 >>> 0 > $1 >>> 0 ? $1 : $9) | 0;
}

function _bitshift64Ashr(low, high, bits) {
 low = low | 0;
 high = high | 0;
 bits = bits | 0;
 if ((bits | 0) < 32) {
  tempRet0 = high >> bits;
  return low >>> bits | (high & (1 << bits) - 1) << 32 - bits;
 }
 tempRet0 = (high | 0) < 0 ? -1 : 0;
 return high >> bits - 32 | 0;
}

function _silk_ROR32($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$0 = 0;
 if (!$1) {
  $$0 = $0;
  return $$0 | 0;
 }
 if (($1 | 0) < 0) {
  $$0 = $0 << 0 - $1 | $0 >>> ($1 + 32 | 0);
  return $$0 | 0;
 } else {
  $$0 = $0 << 32 - $1 | $0 >>> $1;
  return $$0 | 0;
 }
 return 0;
}

function _bitshift64Lshr(low, high, bits) {
 low = low | 0;
 high = high | 0;
 bits = bits | 0;
 if ((bits | 0) < 32) {
  tempRet0 = high >>> bits;
  return low >>> bits | (high & (1 << bits) - 1) << 32 - bits;
 }
 tempRet0 = 0;
 return high >>> bits - 32 | 0;
}

function dynCall_iiiiiii(index, a1, a2, a3, a4, a5, a6) {
 index = index | 0;
 a1 = a1 | 0;
 a2 = a2 | 0;
 a3 = a3 | 0;
 a4 = a4 | 0;
 a5 = a5 | 0;
 a6 = a6 | 0;
 return FUNCTION_TABLE_iiiiiii[index & 7](a1 | 0, a2 | 0, a3 | 0, a4 | 0, a5 | 0, a6 | 0) | 0;
}

function _opus_custom_decoder_get_size($$0$1$val, $$0$2$val, $0) {
 $$0$1$val = $$0$1$val | 0;
 $$0$2$val = $$0$2$val | 0;
 $0 = $0 | 0;
 return ((Math_imul($$0$1$val + 2048 | 0, $0) | 0) << 2) + 92 + ($0 * 96 | 0) + ($$0$2$val << 5) | 0;
}

function _silk_PLC_Reset($0) {
 $0 = $0 | 0;
 HEAP32[$0 + 4172 >> 2] = HEAP32[$0 + 2328 >> 2] << 7;
 HEAP32[$0 + 4244 >> 2] = 65536;
 HEAP32[$0 + 4248 >> 2] = 65536;
 HEAP32[$0 + 4260 >> 2] = 20;
 HEAP32[$0 + 4256 >> 2] = 2;
 return;
}

function _silk_CLZ_FRAC_134($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $3 = 0;
 $3 = _silk_CLZ32_130($0) | 0;
 HEAP32[$1 >> 2] = $3;
 HEAP32[$2 >> 2] = (_silk_ROR32_135($0, 24 - $3 | 0) | 0) & 127;
 return;
}

function _silk_init_decoder($0) {
 $0 = $0 | 0;
 _memset($0 + 4 | 0, 0, 4260) | 0;
 HEAP32[$0 + 2376 >> 2] = 1;
 HEAP32[$0 >> 2] = 65536;
 HEAP32[$0 + 4168 >> 2] = 0;
 _silk_CNG_Reset($0);
 _silk_PLC_Reset($0);
 return;
}

function _silk_CLZ_FRAC($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $3 = 0;
 $3 = _silk_CLZ32($0) | 0;
 HEAP32[$1 >> 2] = $3;
 HEAP32[$2 >> 2] = (_silk_ROR32($0, 24 - $3 | 0) | 0) & 127;
 return;
}

function _speex_alloc_515($0) {
 $0 = $0 | 0;
 var $1 = 0;
 $1 = _malloc($0) | 0;
 if (!$1) return $1 | 0;
 if (!(HEAP32[$1 + -4 >> 2] & 3)) return $1 | 0;
 _memset($1 | 0, 0, $0 | 0) | 0;
 return $1 | 0;
}

function _celt_decoder_get_size($0) {
 $0 = $0 | 0;
 var $1 = 0;
 $1 = _opus_custom_mode_create() | 0;
 return _opus_custom_decoder_get_size(HEAP32[$1 + 4 >> 2] | 0, HEAP32[$1 + 8 >> 2] | 0, $0) | 0;
}

function _speex_resampler_init($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 return _speex_resampler_init_frac($0, $1, $2, $1, $2, $3, $4) | 0;
}

function _silk_resampler_private_up2_HQ_wrapper($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 _silk_resampler_private_up2_HQ($0, $1, $2, $3);
 return;
}

function _i64Add(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var l = 0;
 l = a + c >>> 0;
 return (tempRet0 = b + d + (l >>> 0 < a >>> 0 | 0) >>> 0, l | 0) | 0;
}

function _ec_tell_420($$0$5$val, $$0$7$val) {
 $$0$5$val = $$0$5$val | 0;
 $$0$7$val = $$0$7$val | 0;
 return (Math_clz32($$0$7$val | 0) | 0) + -32 + $$0$5$val | 0;
}

function _ec_tell_71($$0$5$val, $$0$7$val) {
 $$0$5$val = $$0$5$val | 0;
 $$0$7$val = $$0$7$val | 0;
 return (Math_clz32($$0$7$val | 0) | 0) + -32 + $$0$5$val | 0;
}

function _opus_packet_get_mode($$val) {
 $$val = $$val | 0;
 if ($$val << 24 >> 24 < 0) return 1002; else return (($$val & 96) == 96 ? 1001 : 1e3) | 0;
 return 0;
}

function _ec_tell_2($$0$5$val, $$0$7$val) {
 $$0$5$val = $$0$5$val | 0;
 $$0$7$val = $$0$7$val | 0;
 return (Math_clz32($$0$7$val | 0) | 0) + -32 + $$0$5$val | 0;
}

function _get_pulses($0) {
 $0 = $0 | 0;
 var $7 = 0;
 if (($0 | 0) < 8) {
  $7 = $0;
  return $7 | 0;
 }
 $7 = ($0 & 7 | 8) << ($0 >> 3) + -1;
 return $7 | 0;
}
function stackAlloc(size) {
 size = size | 0;
 var ret = 0;
 ret = STACKTOP;
 STACKTOP = STACKTOP + size | 0;
 STACKTOP = STACKTOP + 15 & -16;
 return ret | 0;
}

function establishStackSpace(stackBase, stackMax) {
 stackBase = stackBase | 0;
 stackMax = stackMax | 0;
 STACKTOP = stackBase;
 STACK_MAX = stackMax;
}

function b0(p0, p1, p2, p3, p4, p5) {
 p0 = p0 | 0;
 p1 = p1 | 0;
 p2 = p2 | 0;
 p3 = p3 | 0;
 p4 = p4 | 0;
 p5 = p5 | 0;
 abort(0);
 return 0;
}

function setThrew(threw, value) {
 threw = threw | 0;
 value = value | 0;
 if (!__THREW__) {
  __THREW__ = threw;
  threwValue = value;
 }
}

function _ec_laplace_get_freq1($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 return (Math_imul(32736 - $0 | 0, 16384 - $1 | 0) | 0) >>> 15 | 0;
}

function _silk_stereo_decode_mid_only($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 HEAP32[$1 >> 2] = _ec_dec_icdf($0, 26991, 8) | 0;
 return;
}

function _silk_min_int_283($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 return (($0 | 0) < ($1 | 0) ? $0 : $1) | 0;
}

function _silk_max_int_282($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 return (($0 | 0) > ($1 | 0) ? $0 : $1) | 0;
}

function _silk_min_32_128($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 return (($0 | 0) < ($1 | 0) ? $0 : $1) | 0;
}

function _silk_max_int($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 return (($0 | 0) > ($1 | 0) ? $0 : $1) | 0;
}

function _silk_max_32($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 return (($0 | 0) > ($1 | 0) ? $0 : $1) | 0;
}

function _opus_packet_get_nb_channels($$val) {
 $$val = $$val | 0;
 return (($$val & 4) >>> 2) + 1 | 0;
}

function _celt_udiv_87($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 return ($0 >>> 0) / ($1 >>> 0) | 0 | 0;
}

function _celt_udiv_86($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 return ($0 >>> 0) / ($1 >>> 0) | 0 | 0;
}

function _celt_udiv_28($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 return ($0 >>> 0) / ($1 >>> 0) | 0 | 0;
}

function _celt_udiv_13($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 return ($0 >>> 0) / ($1 >>> 0) | 0 | 0;
}

function _celt_udiv($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 return ($0 >>> 0) / ($1 >>> 0) | 0 | 0;
}

function _celt_lcg_rand($0) {
 $0 = $0 | 0;
 return (Math_imul($0, 1664525) | 0) + 1013904223 | 0;
}

function _celt_sudiv($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 return ($0 | 0) / ($1 | 0) | 0 | 0;
}

function _ec_get_error_6($$0$11$val) {
 $$0$11$val = $$0$11$val | 0;
 return $$0$11$val | 0;
}

function _silk_max_16($0) {
 $0 = $0 | 0;
 return ($0 << 16 >> 16 > 3277 ? $0 : 3277) | 0;
}

function _silk_Get_Decoder_Size($0) {
 $0 = $0 | 0;
 HEAP32[$0 >> 2] = 8552;
 return 0;
}

function _silk_min_32($0) {
 $0 = $0 | 0;
 return (($0 | 0) < 3967 ? $0 : 3967) | 0;
}

function _silk_min_int_127($0) {
 $0 = $0 | 0;
 return (($0 | 0) < 1 ? $0 : 1) | 0;
}

function _silk_max_int_126($0) {
 $0 = $0 | 0;
 return (($0 | 0) > 0 ? $0 : 0) | 0;
}

function _silk_max_32_335($0) {
 $0 = $0 | 0;
 return (($0 | 0) > 0 ? $0 : 0) | 0;
}

function _silk_CLZ32_334($0) {
 $0 = $0 | 0;
 return Math_clz32($0 | 0) | 0;
}

function _silk_CLZ32_274($0) {
 $0 = $0 | 0;
 return Math_clz32($0 | 0) | 0;
}

function _silk_CLZ32_130($0) {
 $0 = $0 | 0;
 return Math_clz32($0 | 0) | 0;
}

function _opus_decoder_destroy($0) {
 $0 = $0 | 0;
 _opus_free($0);
 return;
}

function _silk_CLZ32_98($0) {
 $0 = $0 | 0;
 return Math_clz32($0 | 0) | 0;
}

function _silk_CLZ32($0) {
 $0 = $0 | 0;
 return Math_clz32($0 | 0) | 0;
}

function setTempRet0(value) {
 value = value | 0;
 tempRet0 = value;
}

function _speex_free_516($0) {
 $0 = $0 | 0;
 _free($0);
 return;
}

function _opus_alloc($0) {
 $0 = $0 | 0;
 return _malloc($0) | 0;
}

function stackRestore(top) {
 top = top | 0;
 STACKTOP = top;
}

function _opus_free($0) {
 $0 = $0 | 0;
 _free($0);
 return;
}

function _align($0) {
 $0 = $0 | 0;
 return $0 + 3 & -4 | 0;
}

function _opus_custom_mode_create() {
 return 6752;
}

function getTempRet0() {
 return tempRet0 | 0;
}

function stackSave() {
 return STACKTOP | 0;
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_iiiiiii = [b0,_resampler_basic_direct_double,_resampler_basic_direct_single,_resampler_basic_interpolate_double,_resampler_basic_interpolate_single,_resampler_basic_zero,b0,b0];

  return { ___muldi3: ___muldi3, _bitshift64Ashr: _bitshift64Ashr, _bitshift64Lshr: _bitshift64Lshr, _free: _free, _i64Add: _i64Add, _malloc: _malloc, _memcpy: _memcpy, _memmove: _memmove, _memset: _memset, _opus_decode_float: _opus_decode_float, _opus_decoder_create: _opus_decoder_create, _opus_decoder_destroy: _opus_decoder_destroy, _sbrk: _sbrk, _speex_resampler_destroy: _speex_resampler_destroy, _speex_resampler_init: _speex_resampler_init, _speex_resampler_process_interleaved_float: _speex_resampler_process_interleaved_float, dynCall_iiiiiii: dynCall_iiiiiii, establishStackSpace: establishStackSpace, getTempRet0: getTempRet0, runPostSets: runPostSets, setTempRet0: setTempRet0, setThrew: setThrew, stackAlloc: stackAlloc, stackRestore: stackRestore, stackSave: stackSave };
})
// EMSCRIPTEN_END_ASM
(Module.asmGlobalArg, Module.asmLibraryArg, buffer);

var ___muldi3 = Module["___muldi3"] = asm["___muldi3"];
var _bitshift64Ashr = Module["_bitshift64Ashr"] = asm["_bitshift64Ashr"];
var _bitshift64Lshr = Module["_bitshift64Lshr"] = asm["_bitshift64Lshr"];
var _free = Module["_free"] = asm["_free"];
var _i64Add = Module["_i64Add"] = asm["_i64Add"];
var _malloc = Module["_malloc"] = asm["_malloc"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memmove = Module["_memmove"] = asm["_memmove"];
var _memset = Module["_memset"] = asm["_memset"];
var _opus_decode_float = Module["_opus_decode_float"] = asm["_opus_decode_float"];
var _opus_decoder_create = Module["_opus_decoder_create"] = asm["_opus_decoder_create"];
var _opus_decoder_destroy = Module["_opus_decoder_destroy"] = asm["_opus_decoder_destroy"];
var _sbrk = Module["_sbrk"] = asm["_sbrk"];
var _speex_resampler_destroy = Module["_speex_resampler_destroy"] = asm["_speex_resampler_destroy"];
var _speex_resampler_init = Module["_speex_resampler_init"] = asm["_speex_resampler_init"];
var _speex_resampler_process_interleaved_float = Module["_speex_resampler_process_interleaved_float"] = asm["_speex_resampler_process_interleaved_float"];
var establishStackSpace = Module["establishStackSpace"] = asm["establishStackSpace"];
var getTempRet0 = Module["getTempRet0"] = asm["getTempRet0"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var setTempRet0 = Module["setTempRet0"] = asm["setTempRet0"];
var setThrew = Module["setThrew"] = asm["setThrew"];
var stackAlloc = Module["stackAlloc"] = asm["stackAlloc"];
var stackRestore = Module["stackRestore"] = asm["stackRestore"];
var stackSave = Module["stackSave"] = asm["stackSave"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
;



// === Auto-generated postamble setup entry stuff ===

Module['asm'] = asm;

































































if (memoryInitializer) {
  if (!isDataURI(memoryInitializer)) {
    if (typeof Module['locateFile'] === 'function') {
      memoryInitializer = Module['locateFile'](memoryInitializer);
    } else if (Module['memoryInitializerPrefixURL']) {
      memoryInitializer = Module['memoryInitializerPrefixURL'] + memoryInitializer;
    }
  }
  if (ENVIRONMENT_IS_NODE || ENVIRONMENT_IS_SHELL) {
    var data = Module['readBinary'](memoryInitializer);
    HEAPU8.set(data, GLOBAL_BASE);
  } else {
    addRunDependency('memory initializer');
    var applyMemoryInitializer = function(data) {
      if (data.byteLength) data = new Uint8Array(data);
      HEAPU8.set(data, GLOBAL_BASE);
      // Delete the typed array that contains the large blob of the memory initializer request response so that
      // we won't keep unnecessary memory lying around. However, keep the XHR object itself alive so that e.g.
      // its .status field can still be accessed later.
      if (Module['memoryInitializerRequest']) delete Module['memoryInitializerRequest'].response;
      removeRunDependency('memory initializer');
    }
    function doBrowserLoad() {
      Module['readAsync'](memoryInitializer, applyMemoryInitializer, function() {
        throw 'could not load memory initializer ' + memoryInitializer;
      });
    }
    if (Module['memoryInitializerRequest']) {
      // a network request has already been created, just use that
      function useRequest() {
        var request = Module['memoryInitializerRequest'];
        var response = request.response;
        if (request.status !== 200 && request.status !== 0) {
            // If you see this warning, the issue may be that you are using locateFile or memoryInitializerPrefixURL, and defining them in JS. That
            // means that the HTML file doesn't know about them, and when it tries to create the mem init request early, does it to the wrong place.
            // Look in your browser's devtools network console to see what's going on.
            console.warn('a problem seems to have happened with Module.memoryInitializerRequest, status: ' + request.status + ', retrying ' + memoryInitializer);
            doBrowserLoad();
            return;
        }
        applyMemoryInitializer(response);
      }
      if (Module['memoryInitializerRequest'].response) {
        setTimeout(useRequest, 0); // it's already here; but, apply it asynchronously
      } else {
        Module['memoryInitializerRequest'].addEventListener('load', useRequest); // wait for it
      }
    } else {
      // fetch it from the network ourselves
      doBrowserLoad();
    }
  }
}



/**
 * @constructor
 * @extends {Error}
 * @this {ExitStatus}
 */
function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
};
ExitStatus.prototype = new Error();
ExitStatus.prototype.constructor = ExitStatus;

var initialStackTop;
var preloadStartTime = null;
var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!Module['calledRun']) run();
  if (!Module['calledRun']) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
}





/** @type {function(Array=)} */
function run(args) {
  args = args || Module['arguments'];

  if (preloadStartTime === null) preloadStartTime = Date.now();

  if (runDependencies > 0) {
    return;
  }


  preRun();

  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later
  if (Module['calledRun']) return; // run may have just been called through dependencies being fulfilled just in this very frame

  function doRun() {
    if (Module['calledRun']) return; // run may have just been called while the async setStatus time below was happening
    Module['calledRun'] = true;

    if (ABORT) return;

    ensureInitRuntime();

    preMain();


    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();


    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else {
    doRun();
  }
}
Module['run'] = run;

function exit(status, implicit) {

  // if this is just main exit-ing implicitly, and the status is 0, then we
  // don't need to do anything here and can just leave. if the status is
  // non-zero, though, then we need to report it.
  // (we may have warned about this earlier, if a situation justifies doing so)
  if (implicit && Module['noExitRuntime'] && status === 0) {
    return;
  }

  if (Module['noExitRuntime']) {
  } else {

    ABORT = true;
    EXITSTATUS = status;
    STACKTOP = initialStackTop;

    exitRuntime();

    if (Module['onExit']) Module['onExit'](status);
  }

  if (ENVIRONMENT_IS_NODE) {
    process['exit'](status);
  }
  Module['quit'](status, new ExitStatus(status));
}
Module['exit'] = exit;

var abortDecorators = [];

function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  if (what !== undefined) {
    Module.print(what);
    Module.printErr(what);
    what = JSON.stringify(what)
  } else {
    what = '';
  }

  ABORT = true;
  EXITSTATUS = 1;

  throw 'abort(' + what + '). Build with -s ASSERTIONS=1 for more info.';
}
Module['abort'] = abort;

// {{PRE_RUN_ADDITIONS}}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}


Module["noExitRuntime"] = true;

run();

// {{POST_RUN_ADDITIONS}}





// {{MODULE_ADDITIONS}}






