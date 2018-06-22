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
		exports["EncoderWorker"] = factory();
	else
		root["EncoderWorker"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/encoderWorker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\r\n} catch (e) {\r\n\t// This works if the window reference is available\r\n\tif (typeof window === \"object\") g = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL2dsb2JhbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0VuY29kZXJXb3JrZXIvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzP2NkMDAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsIGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaCAoZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/webpack/buildin/global.js\n");

/***/ }),

/***/ "./src/encoderWorker.js":
/*!******************************!*\
  !*** ./src/encoderWorker.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {\n\nvar encoder;\nvar mainReadyResolve;\nvar mainReady = new Promise(function(resolve){ mainReadyResolve = resolve; });\n\nglobal['onmessage'] = function( e ){\n  mainReady.then(function(){\n    switch( e['data']['command'] ){\n\n      case 'encode':\n        if (encoder){\n          encoder.encode( e['data']['buffers'] );\n        }\n        break;\n\n      case 'done':\n        if (encoder) {\n          encoder.encodeFinalFrame();\n        }\n        break;\n\n      case 'init':\n        encoder = new OggOpusEncoder( e['data'], Module );\n        break;\n\n      default:\n        // Ignore any unknown commands and continue recieving commands\n    }\n  });\n};\n\n\nvar OggOpusEncoder = function( config, Module ){\n\n  if ( !Module ) {\n    throw new Error('Module with exports required to initialize an encoder instance');\n  }\n\n  this.config = Object.assign({ \n    bufferLength: 4096, // Define size of incoming buffer\n    encoderApplication: 2049, // 2048 = Voice (Lower fidelity)\n                              // 2049 = Full Band Audio (Highest fidelity)\n                              // 2051 = Restricted Low Delay (Lowest latency)\n    encoderFrameSize: 20, // Specified in ms.\n    encoderSampleRate: 48000, // Desired encoding sample rate. Audio will be resampled\n    maxBuffersPerPage: 40, // Tradeoff latency with overhead\n    numberOfChannels: 1,\n    originalSampleRate: 44100,\n    resampleQuality: 3, // Value between 0 and 10 inclusive. 10 being highest quality.\n    serial: Math.floor(Math.random() * 4294967296)\n  }, config );\n\n  this._opus_encoder_create = Module._opus_encoder_create;\n  this._opus_encoder_ctl = Module._opus_encoder_ctl;\n  this._speex_resampler_process_interleaved_float = Module._speex_resampler_process_interleaved_float;\n  this._speex_resampler_init = Module._speex_resampler_init;\n  this._opus_encode_float = Module._opus_encode_float;\n  this._free = Module._free;\n  this._malloc = Module._malloc;\n  this.HEAPU8 = Module.HEAPU8;\n  this.HEAP32 = Module.HEAP32;\n  this.HEAPF32 = Module.HEAPF32;\n\n  this.pageIndex = 0;\n  this.granulePosition = 0;\n  this.segmentData = new Uint8Array( 65025 ); // Maximum length of oggOpus data\n  this.segmentDataIndex = 0;\n  this.segmentTable = new Uint8Array( 255 ); // Maximum data segments\n  this.segmentTableIndex = 0;\n  this.buffersInPage = 0;\n\n  this.initChecksumTable();\n  this.initCodec();\n  this.initResampler();\n  this.generateIdPage();\n  this.generateCommentPage();\n\n  if ( this.config.numberOfChannels === 1 ) {\n    this.interleave = function( buffers ) { return buffers[0]; };\n  }\n  else {\n    this.interleavedBuffers = new Float32Array( this.config.bufferLength * this.config.numberOfChannels );\n  }\n\n};\n\nOggOpusEncoder.prototype.encode = function( buffers ) {\n  var samples = this.interleave( buffers );\n  var sampleIndex = 0;\n\n  while ( sampleIndex < samples.length ) {\n\n    var lengthToCopy = Math.min( this.resampleBufferLength - this.resampleBufferIndex, samples.length - sampleIndex );\n    this.resampleBuffer.set( samples.subarray( sampleIndex, sampleIndex+lengthToCopy ), this.resampleBufferIndex );\n    sampleIndex += lengthToCopy;\n    this.resampleBufferIndex += lengthToCopy;\n\n    if ( this.resampleBufferIndex === this.resampleBufferLength ) {\n      this._speex_resampler_process_interleaved_float( this.resampler, this.resampleBufferPointer, this.resampleSamplesPerChannelPointer, this.encoderBufferPointer, this.encoderSamplesPerChannelPointer );\n      var packetLength = this._opus_encode_float( this.encoder, this.encoderBufferPointer, this.encoderSamplesPerChannel, this.encoderOutputPointer, this.encoderOutputMaxLength );\n      this.segmentPacket( packetLength );\n      this.resampleBufferIndex = 0;\n    }\n  }\n\n  this.buffersInPage++;\n  if ( this.buffersInPage >= this.config.maxBuffersPerPage ) {\n    this.generatePage();\n  }\n};\n\nOggOpusEncoder.prototype.encodeFinalFrame = function() {\n  var finalFrameBuffers = [];\n  for ( var i = 0; i < this.config.numberOfChannels; ++i ) {\n    finalFrameBuffers.push( new Float32Array( this.config.bufferLength - (this.resampleBufferIndex / this.config.numberOfChannels) ));\n  }\n  this.encode( finalFrameBuffers );\n  this.headerType += 4;\n  this.generatePage();\n  global['postMessage'](null);\n  global['close']();\n};\n\nOggOpusEncoder.prototype.getChecksum = function( data ){\n  var checksum = 0;\n  for ( var i = 0; i < data.length; i++ ) {\n    checksum = (checksum << 8) ^ this.checksumTable[ ((checksum>>>24) & 0xff) ^ data[i] ];\n  }\n  return checksum >>> 0;\n};\n\nOggOpusEncoder.prototype.generateCommentPage = function(){\n  var segmentDataView = new DataView( this.segmentData.buffer );\n  segmentDataView.setUint32( 0, 1937076303, true ) // Magic Signature 'Opus'\n  segmentDataView.setUint32( 4, 1936154964, true ) // Magic Signature 'Tags'\n  segmentDataView.setUint32( 8, 10, true ); // Vendor Length\n  segmentDataView.setUint32( 12, 1868784978, true ); // Vendor name 'Reco'\n  segmentDataView.setUint32( 16, 1919247474, true ); // Vendor name 'rder'\n  segmentDataView.setUint16( 20, 21322, true ); // Vendor name 'JS'\n  segmentDataView.setUint32( 22, 0, true ); // User Comment List Length\n  this.segmentTableIndex = 1;\n  this.segmentDataIndex = this.segmentTable[0] = 26;\n  this.headerType = 0;\n  this.generatePage();\n};\n\nOggOpusEncoder.prototype.generateIdPage = function(){\n  var segmentDataView = new DataView( this.segmentData.buffer );\n  segmentDataView.setUint32( 0, 1937076303, true ) // Magic Signature 'Opus'\n  segmentDataView.setUint32( 4, 1684104520, true ) // Magic Signature 'Head'\n  segmentDataView.setUint8( 8, 1, true ); // Version\n  segmentDataView.setUint8( 9, this.config.numberOfChannels, true ); // Channel count\n  segmentDataView.setUint16( 10, 3840, true ); // pre-skip (80ms)\n  segmentDataView.setUint32( 12, this.config.originalSampleRateOverride || this.config.originalSampleRate, true ); // original sample rate\n  segmentDataView.setUint16( 16, 0, true ); // output gain\n  segmentDataView.setUint8( 18, 0, true ); // channel map 0 = mono or stereo\n  this.segmentTableIndex = 1;\n  this.segmentDataIndex = this.segmentTable[0] = 19;\n  this.headerType = 2;\n  this.generatePage();\n};\n\nOggOpusEncoder.prototype.generatePage = function(){\n  var granulePosition = ( this.lastPositiveGranulePosition === this.granulePosition) ? -1 : this.granulePosition;\n  var pageBuffer = new ArrayBuffer(  27 + this.segmentTableIndex + this.segmentDataIndex );\n  var pageBufferView = new DataView( pageBuffer );\n  var page = new Uint8Array( pageBuffer );\n\n  pageBufferView.setUint32( 0, 1399285583, true); // Capture Pattern starts all page headers 'OggS'\n  pageBufferView.setUint8( 4, 0, true ); // Version\n  pageBufferView.setUint8( 5, this.headerType, true ); // 1 = continuation, 2 = beginning of stream, 4 = end of stream\n\n  // Number of samples upto and including this page at 48000Hz, into signed 64 bit Little Endian integer\n  // Javascript Number maximum value is 53 bits or 2^53 - 1 \n  pageBufferView.setUint32( 6, granulePosition, true );\n  if (granulePosition < 0) {\n    pageBufferView.setInt32( 10, Math.ceil(granulePosition/4294967297) - 1, true );\n  }\n  else {\n    pageBufferView.setInt32( 10, Math.floor(granulePosition/4294967296), true );\n  }\n\n  pageBufferView.setUint32( 14, this.config.serial, true ); // Bitstream serial number\n  pageBufferView.setUint32( 18, this.pageIndex++, true ); // Page sequence number\n  pageBufferView.setUint8( 26, this.segmentTableIndex, true ); // Number of segments in page.\n  page.set( this.segmentTable.subarray(0, this.segmentTableIndex), 27 ); // Segment Table\n  page.set( this.segmentData.subarray(0, this.segmentDataIndex), 27 + this.segmentTableIndex ); // Segment Data\n  pageBufferView.setUint32( 22, this.getChecksum( page ), true ); // Checksum\n\n  global['postMessage']( page, [page.buffer] );\n  this.segmentTableIndex = 0;\n  this.segmentDataIndex = 0;\n  this.buffersInPage = 0;\n  if ( granulePosition > 0 ) {\n    this.lastPositiveGranulePosition = granulePosition;\n  }\n};\n\nOggOpusEncoder.prototype.initChecksumTable = function(){\n  this.checksumTable = [];\n  for ( var i = 0; i < 256; i++ ) {\n    var r = i << 24;\n    for ( var j = 0; j < 8; j++ ) {\n      r = ((r & 0x80000000) != 0) ? ((r << 1) ^ 0x04c11db7) : (r << 1);\n    }\n    this.checksumTable[i] = (r & 0xffffffff);\n  }\n};\n\nOggOpusEncoder.prototype.setOpusControl = function( control, value ){\n  var location = this._malloc( 4 );\n  this.HEAP32[ location >> 2 ] = value;\n  this._opus_encoder_ctl( this.encoder, control, location );\n  this._free( location );\n};\n\nOggOpusEncoder.prototype.initCodec = function() {\n  var errLocation = this._malloc( 4 );\n  this.encoder = this._opus_encoder_create( this.config.encoderSampleRate, this.config.numberOfChannels, this.config.encoderApplication, errLocation );\n  this._free( errLocation );\n\n  if ( this.config.encoderBitRate ) {\n    this.setOpusControl( 4002, this.config.encoderBitRate );\n  }\n\n  if ( this.config.encoderComplexity ) {\n    this.setOpusControl( 4010, this.config.encoderComplexity );\n  }\n\n  this.encoderSamplesPerChannel = this.config.encoderSampleRate * this.config.encoderFrameSize / 1000;\n  this.encoderSamplesPerChannelPointer = this._malloc( 4 );\n  this.HEAP32[ this.encoderSamplesPerChannelPointer >> 2 ] = this.encoderSamplesPerChannel;\n\n  this.encoderBufferLength = this.encoderSamplesPerChannel * this.config.numberOfChannels;\n  this.encoderBufferPointer = this._malloc( this.encoderBufferLength * 4 ); // 4 bytes per sample\n  this.encoderBuffer = this.HEAPF32.subarray( this.encoderBufferPointer >> 2, (this.encoderBufferPointer >> 2) + this.encoderBufferLength );\n\n  this.encoderOutputMaxLength = 4000;\n  this.encoderOutputPointer = this._malloc( this.encoderOutputMaxLength );\n  this.encoderOutputBuffer = this.HEAPU8.subarray( this.encoderOutputPointer, this.encoderOutputPointer + this.encoderOutputMaxLength );\n};\n\nOggOpusEncoder.prototype.initResampler = function() {\n  var errLocation = this._malloc( 4 );\n  this.resampler = this._speex_resampler_init( this.config.numberOfChannels, this.config.originalSampleRate, this.config.encoderSampleRate, this.config.resampleQuality, errLocation );\n  this._free( errLocation );\n\n  this.resampleBufferIndex = 0;\n  this.resampleSamplesPerChannel = this.config.originalSampleRate * this.config.encoderFrameSize / 1000;\n  this.resampleSamplesPerChannelPointer = this._malloc( 4 );\n  this.HEAP32[ this.resampleSamplesPerChannelPointer >> 2 ] = this.resampleSamplesPerChannel;\n\n  this.resampleBufferLength = this.resampleSamplesPerChannel * this.config.numberOfChannels;\n  this.resampleBufferPointer = this._malloc( this.resampleBufferLength * 4 ); // 4 bytes per sample\n  this.resampleBuffer = this.HEAPF32.subarray( this.resampleBufferPointer >> 2, (this.resampleBufferPointer >> 2) + this.resampleBufferLength );\n};\n\nOggOpusEncoder.prototype.interleave = function( buffers ) {\n  for ( var i = 0; i < this.config.bufferLength; i++ ) {\n    for ( var channel = 0; channel < this.config.numberOfChannels; channel++ ) {\n      this.interleavedBuffers[ i * this.config.numberOfChannels + channel ] = buffers[ channel ][ i ];\n    }\n  }\n\n  return this.interleavedBuffers;\n};\n\nOggOpusEncoder.prototype.segmentPacket = function( packetLength ) {\n  var packetIndex = 0;\n\n  while ( packetLength >= 0 ) {\n\n    if ( this.segmentTableIndex === 255 ) {\n      this.generatePage();\n      this.headerType = 1;\n    }\n\n    var segmentLength = Math.min( packetLength, 255 );\n    this.segmentTable[ this.segmentTableIndex++ ] = segmentLength;\n    this.segmentData.set( this.encoderOutputBuffer.subarray( packetIndex, packetIndex + segmentLength ), this.segmentDataIndex );\n    this.segmentDataIndex += segmentLength;\n    packetIndex += segmentLength;\n    packetLength -= 255;\n  }\n\n  this.granulePosition += ( 48 * this.config.encoderFrameSize );\n  if ( this.segmentTableIndex === 255 ) {\n    this.generatePage();\n    this.headerType = 0;\n  }\n};\n\n\nif (!Module) {\n  Module = {};\n}\n\nModule['mainReady'] = mainReady;\nModule['OggOpusEncoder'] = OggOpusEncoder;\nModule['onRuntimeInitialized'] = mainReadyResolve;\n\nmodule.exports = Module;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW5jb2Rlcldvcmtlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0VuY29kZXJXb3JrZXIvLi9zcmMvZW5jb2Rlcldvcmtlci5qcz84YjNjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZW5jb2RlcjtcbnZhciBtYWluUmVhZHlSZXNvbHZlO1xudmFyIG1haW5SZWFkeSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpeyBtYWluUmVhZHlSZXNvbHZlID0gcmVzb2x2ZTsgfSk7XG5cbmdsb2JhbFsnb25tZXNzYWdlJ10gPSBmdW5jdGlvbiggZSApe1xuICBtYWluUmVhZHkudGhlbihmdW5jdGlvbigpe1xuICAgIHN3aXRjaCggZVsnZGF0YSddWydjb21tYW5kJ10gKXtcblxuICAgICAgY2FzZSAnZW5jb2RlJzpcbiAgICAgICAgaWYgKGVuY29kZXIpe1xuICAgICAgICAgIGVuY29kZXIuZW5jb2RlKCBlWydkYXRhJ11bJ2J1ZmZlcnMnXSApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdkb25lJzpcbiAgICAgICAgaWYgKGVuY29kZXIpIHtcbiAgICAgICAgICBlbmNvZGVyLmVuY29kZUZpbmFsRnJhbWUoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnaW5pdCc6XG4gICAgICAgIGVuY29kZXIgPSBuZXcgT2dnT3B1c0VuY29kZXIoIGVbJ2RhdGEnXSwgTW9kdWxlICk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBJZ25vcmUgYW55IHVua25vd24gY29tbWFuZHMgYW5kIGNvbnRpbnVlIHJlY2lldmluZyBjb21tYW5kc1xuICAgIH1cbiAgfSk7XG59O1xuXG5cbnZhciBPZ2dPcHVzRW5jb2RlciA9IGZ1bmN0aW9uKCBjb25maWcsIE1vZHVsZSApe1xuXG4gIGlmICggIU1vZHVsZSApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01vZHVsZSB3aXRoIGV4cG9ydHMgcmVxdWlyZWQgdG8gaW5pdGlhbGl6ZSBhbiBlbmNvZGVyIGluc3RhbmNlJyk7XG4gIH1cblxuICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oeyBcbiAgICBidWZmZXJMZW5ndGg6IDQwOTYsIC8vIERlZmluZSBzaXplIG9mIGluY29taW5nIGJ1ZmZlclxuICAgIGVuY29kZXJBcHBsaWNhdGlvbjogMjA0OSwgLy8gMjA0OCA9IFZvaWNlIChMb3dlciBmaWRlbGl0eSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDIwNDkgPSBGdWxsIEJhbmQgQXVkaW8gKEhpZ2hlc3QgZmlkZWxpdHkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAyMDUxID0gUmVzdHJpY3RlZCBMb3cgRGVsYXkgKExvd2VzdCBsYXRlbmN5KVxuICAgIGVuY29kZXJGcmFtZVNpemU6IDIwLCAvLyBTcGVjaWZpZWQgaW4gbXMuXG4gICAgZW5jb2RlclNhbXBsZVJhdGU6IDQ4MDAwLCAvLyBEZXNpcmVkIGVuY29kaW5nIHNhbXBsZSByYXRlLiBBdWRpbyB3aWxsIGJlIHJlc2FtcGxlZFxuICAgIG1heEJ1ZmZlcnNQZXJQYWdlOiA0MCwgLy8gVHJhZGVvZmYgbGF0ZW5jeSB3aXRoIG92ZXJoZWFkXG4gICAgbnVtYmVyT2ZDaGFubmVsczogMSxcbiAgICBvcmlnaW5hbFNhbXBsZVJhdGU6IDQ0MTAwLFxuICAgIHJlc2FtcGxlUXVhbGl0eTogMywgLy8gVmFsdWUgYmV0d2VlbiAwIGFuZCAxMCBpbmNsdXNpdmUuIDEwIGJlaW5nIGhpZ2hlc3QgcXVhbGl0eS5cbiAgICBzZXJpYWw6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQyOTQ5NjcyOTYpXG4gIH0sIGNvbmZpZyApO1xuXG4gIHRoaXMuX29wdXNfZW5jb2Rlcl9jcmVhdGUgPSBNb2R1bGUuX29wdXNfZW5jb2Rlcl9jcmVhdGU7XG4gIHRoaXMuX29wdXNfZW5jb2Rlcl9jdGwgPSBNb2R1bGUuX29wdXNfZW5jb2Rlcl9jdGw7XG4gIHRoaXMuX3NwZWV4X3Jlc2FtcGxlcl9wcm9jZXNzX2ludGVybGVhdmVkX2Zsb2F0ID0gTW9kdWxlLl9zcGVleF9yZXNhbXBsZXJfcHJvY2Vzc19pbnRlcmxlYXZlZF9mbG9hdDtcbiAgdGhpcy5fc3BlZXhfcmVzYW1wbGVyX2luaXQgPSBNb2R1bGUuX3NwZWV4X3Jlc2FtcGxlcl9pbml0O1xuICB0aGlzLl9vcHVzX2VuY29kZV9mbG9hdCA9IE1vZHVsZS5fb3B1c19lbmNvZGVfZmxvYXQ7XG4gIHRoaXMuX2ZyZWUgPSBNb2R1bGUuX2ZyZWU7XG4gIHRoaXMuX21hbGxvYyA9IE1vZHVsZS5fbWFsbG9jO1xuICB0aGlzLkhFQVBVOCA9IE1vZHVsZS5IRUFQVTg7XG4gIHRoaXMuSEVBUDMyID0gTW9kdWxlLkhFQVAzMjtcbiAgdGhpcy5IRUFQRjMyID0gTW9kdWxlLkhFQVBGMzI7XG5cbiAgdGhpcy5wYWdlSW5kZXggPSAwO1xuICB0aGlzLmdyYW51bGVQb3NpdGlvbiA9IDA7XG4gIHRoaXMuc2VnbWVudERhdGEgPSBuZXcgVWludDhBcnJheSggNjUwMjUgKTsgLy8gTWF4aW11bSBsZW5ndGggb2Ygb2dnT3B1cyBkYXRhXG4gIHRoaXMuc2VnbWVudERhdGFJbmRleCA9IDA7XG4gIHRoaXMuc2VnbWVudFRhYmxlID0gbmV3IFVpbnQ4QXJyYXkoIDI1NSApOyAvLyBNYXhpbXVtIGRhdGEgc2VnbWVudHNcbiAgdGhpcy5zZWdtZW50VGFibGVJbmRleCA9IDA7XG4gIHRoaXMuYnVmZmVyc0luUGFnZSA9IDA7XG5cbiAgdGhpcy5pbml0Q2hlY2tzdW1UYWJsZSgpO1xuICB0aGlzLmluaXRDb2RlYygpO1xuICB0aGlzLmluaXRSZXNhbXBsZXIoKTtcbiAgdGhpcy5nZW5lcmF0ZUlkUGFnZSgpO1xuICB0aGlzLmdlbmVyYXRlQ29tbWVudFBhZ2UoKTtcblxuICBpZiAoIHRoaXMuY29uZmlnLm51bWJlck9mQ2hhbm5lbHMgPT09IDEgKSB7XG4gICAgdGhpcy5pbnRlcmxlYXZlID0gZnVuY3Rpb24oIGJ1ZmZlcnMgKSB7IHJldHVybiBidWZmZXJzWzBdOyB9O1xuICB9XG4gIGVsc2Uge1xuICAgIHRoaXMuaW50ZXJsZWF2ZWRCdWZmZXJzID0gbmV3IEZsb2F0MzJBcnJheSggdGhpcy5jb25maWcuYnVmZmVyTGVuZ3RoICogdGhpcy5jb25maWcubnVtYmVyT2ZDaGFubmVscyApO1xuICB9XG5cbn07XG5cbk9nZ09wdXNFbmNvZGVyLnByb3RvdHlwZS5lbmNvZGUgPSBmdW5jdGlvbiggYnVmZmVycyApIHtcbiAgdmFyIHNhbXBsZXMgPSB0aGlzLmludGVybGVhdmUoIGJ1ZmZlcnMgKTtcbiAgdmFyIHNhbXBsZUluZGV4ID0gMDtcblxuICB3aGlsZSAoIHNhbXBsZUluZGV4IDwgc2FtcGxlcy5sZW5ndGggKSB7XG5cbiAgICB2YXIgbGVuZ3RoVG9Db3B5ID0gTWF0aC5taW4oIHRoaXMucmVzYW1wbGVCdWZmZXJMZW5ndGggLSB0aGlzLnJlc2FtcGxlQnVmZmVySW5kZXgsIHNhbXBsZXMubGVuZ3RoIC0gc2FtcGxlSW5kZXggKTtcbiAgICB0aGlzLnJlc2FtcGxlQnVmZmVyLnNldCggc2FtcGxlcy5zdWJhcnJheSggc2FtcGxlSW5kZXgsIHNhbXBsZUluZGV4K2xlbmd0aFRvQ29weSApLCB0aGlzLnJlc2FtcGxlQnVmZmVySW5kZXggKTtcbiAgICBzYW1wbGVJbmRleCArPSBsZW5ndGhUb0NvcHk7XG4gICAgdGhpcy5yZXNhbXBsZUJ1ZmZlckluZGV4ICs9IGxlbmd0aFRvQ29weTtcblxuICAgIGlmICggdGhpcy5yZXNhbXBsZUJ1ZmZlckluZGV4ID09PSB0aGlzLnJlc2FtcGxlQnVmZmVyTGVuZ3RoICkge1xuICAgICAgdGhpcy5fc3BlZXhfcmVzYW1wbGVyX3Byb2Nlc3NfaW50ZXJsZWF2ZWRfZmxvYXQoIHRoaXMucmVzYW1wbGVyLCB0aGlzLnJlc2FtcGxlQnVmZmVyUG9pbnRlciwgdGhpcy5yZXNhbXBsZVNhbXBsZXNQZXJDaGFubmVsUG9pbnRlciwgdGhpcy5lbmNvZGVyQnVmZmVyUG9pbnRlciwgdGhpcy5lbmNvZGVyU2FtcGxlc1BlckNoYW5uZWxQb2ludGVyICk7XG4gICAgICB2YXIgcGFja2V0TGVuZ3RoID0gdGhpcy5fb3B1c19lbmNvZGVfZmxvYXQoIHRoaXMuZW5jb2RlciwgdGhpcy5lbmNvZGVyQnVmZmVyUG9pbnRlciwgdGhpcy5lbmNvZGVyU2FtcGxlc1BlckNoYW5uZWwsIHRoaXMuZW5jb2Rlck91dHB1dFBvaW50ZXIsIHRoaXMuZW5jb2Rlck91dHB1dE1heExlbmd0aCApO1xuICAgICAgdGhpcy5zZWdtZW50UGFja2V0KCBwYWNrZXRMZW5ndGggKTtcbiAgICAgIHRoaXMucmVzYW1wbGVCdWZmZXJJbmRleCA9IDA7XG4gICAgfVxuICB9XG5cbiAgdGhpcy5idWZmZXJzSW5QYWdlKys7XG4gIGlmICggdGhpcy5idWZmZXJzSW5QYWdlID49IHRoaXMuY29uZmlnLm1heEJ1ZmZlcnNQZXJQYWdlICkge1xuICAgIHRoaXMuZ2VuZXJhdGVQYWdlKCk7XG4gIH1cbn07XG5cbk9nZ09wdXNFbmNvZGVyLnByb3RvdHlwZS5lbmNvZGVGaW5hbEZyYW1lID0gZnVuY3Rpb24oKSB7XG4gIHZhciBmaW5hbEZyYW1lQnVmZmVycyA9IFtdO1xuICBmb3IgKCB2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbmZpZy5udW1iZXJPZkNoYW5uZWxzOyArK2kgKSB7XG4gICAgZmluYWxGcmFtZUJ1ZmZlcnMucHVzaCggbmV3IEZsb2F0MzJBcnJheSggdGhpcy5jb25maWcuYnVmZmVyTGVuZ3RoIC0gKHRoaXMucmVzYW1wbGVCdWZmZXJJbmRleCAvIHRoaXMuY29uZmlnLm51bWJlck9mQ2hhbm5lbHMpICkpO1xuICB9XG4gIHRoaXMuZW5jb2RlKCBmaW5hbEZyYW1lQnVmZmVycyApO1xuICB0aGlzLmhlYWRlclR5cGUgKz0gNDtcbiAgdGhpcy5nZW5lcmF0ZVBhZ2UoKTtcbiAgZ2xvYmFsWydwb3N0TWVzc2FnZSddKG51bGwpO1xuICBnbG9iYWxbJ2Nsb3NlJ10oKTtcbn07XG5cbk9nZ09wdXNFbmNvZGVyLnByb3RvdHlwZS5nZXRDaGVja3N1bSA9IGZ1bmN0aW9uKCBkYXRhICl7XG4gIHZhciBjaGVja3N1bSA9IDA7XG4gIGZvciAoIHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKysgKSB7XG4gICAgY2hlY2tzdW0gPSAoY2hlY2tzdW0gPDwgOCkgXiB0aGlzLmNoZWNrc3VtVGFibGVbICgoY2hlY2tzdW0+Pj4yNCkgJiAweGZmKSBeIGRhdGFbaV0gXTtcbiAgfVxuICByZXR1cm4gY2hlY2tzdW0gPj4+IDA7XG59O1xuXG5PZ2dPcHVzRW5jb2Rlci5wcm90b3R5cGUuZ2VuZXJhdGVDb21tZW50UGFnZSA9IGZ1bmN0aW9uKCl7XG4gIHZhciBzZWdtZW50RGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoIHRoaXMuc2VnbWVudERhdGEuYnVmZmVyICk7XG4gIHNlZ21lbnREYXRhVmlldy5zZXRVaW50MzIoIDAsIDE5MzcwNzYzMDMsIHRydWUgKSAvLyBNYWdpYyBTaWduYXR1cmUgJ09wdXMnXG4gIHNlZ21lbnREYXRhVmlldy5zZXRVaW50MzIoIDQsIDE5MzYxNTQ5NjQsIHRydWUgKSAvLyBNYWdpYyBTaWduYXR1cmUgJ1RhZ3MnXG4gIHNlZ21lbnREYXRhVmlldy5zZXRVaW50MzIoIDgsIDEwLCB0cnVlICk7IC8vIFZlbmRvciBMZW5ndGhcbiAgc2VnbWVudERhdGFWaWV3LnNldFVpbnQzMiggMTIsIDE4Njg3ODQ5NzgsIHRydWUgKTsgLy8gVmVuZG9yIG5hbWUgJ1JlY28nXG4gIHNlZ21lbnREYXRhVmlldy5zZXRVaW50MzIoIDE2LCAxOTE5MjQ3NDc0LCB0cnVlICk7IC8vIFZlbmRvciBuYW1lICdyZGVyJ1xuICBzZWdtZW50RGF0YVZpZXcuc2V0VWludDE2KCAyMCwgMjEzMjIsIHRydWUgKTsgLy8gVmVuZG9yIG5hbWUgJ0pTJ1xuICBzZWdtZW50RGF0YVZpZXcuc2V0VWludDMyKCAyMiwgMCwgdHJ1ZSApOyAvLyBVc2VyIENvbW1lbnQgTGlzdCBMZW5ndGhcbiAgdGhpcy5zZWdtZW50VGFibGVJbmRleCA9IDE7XG4gIHRoaXMuc2VnbWVudERhdGFJbmRleCA9IHRoaXMuc2VnbWVudFRhYmxlWzBdID0gMjY7XG4gIHRoaXMuaGVhZGVyVHlwZSA9IDA7XG4gIHRoaXMuZ2VuZXJhdGVQYWdlKCk7XG59O1xuXG5PZ2dPcHVzRW5jb2Rlci5wcm90b3R5cGUuZ2VuZXJhdGVJZFBhZ2UgPSBmdW5jdGlvbigpe1xuICB2YXIgc2VnbWVudERhdGFWaWV3ID0gbmV3IERhdGFWaWV3KCB0aGlzLnNlZ21lbnREYXRhLmJ1ZmZlciApO1xuICBzZWdtZW50RGF0YVZpZXcuc2V0VWludDMyKCAwLCAxOTM3MDc2MzAzLCB0cnVlICkgLy8gTWFnaWMgU2lnbmF0dXJlICdPcHVzJ1xuICBzZWdtZW50RGF0YVZpZXcuc2V0VWludDMyKCA0LCAxNjg0MTA0NTIwLCB0cnVlICkgLy8gTWFnaWMgU2lnbmF0dXJlICdIZWFkJ1xuICBzZWdtZW50RGF0YVZpZXcuc2V0VWludDgoIDgsIDEsIHRydWUgKTsgLy8gVmVyc2lvblxuICBzZWdtZW50RGF0YVZpZXcuc2V0VWludDgoIDksIHRoaXMuY29uZmlnLm51bWJlck9mQ2hhbm5lbHMsIHRydWUgKTsgLy8gQ2hhbm5lbCBjb3VudFxuICBzZWdtZW50RGF0YVZpZXcuc2V0VWludDE2KCAxMCwgMzg0MCwgdHJ1ZSApOyAvLyBwcmUtc2tpcCAoODBtcylcbiAgc2VnbWVudERhdGFWaWV3LnNldFVpbnQzMiggMTIsIHRoaXMuY29uZmlnLm9yaWdpbmFsU2FtcGxlUmF0ZU92ZXJyaWRlIHx8IHRoaXMuY29uZmlnLm9yaWdpbmFsU2FtcGxlUmF0ZSwgdHJ1ZSApOyAvLyBvcmlnaW5hbCBzYW1wbGUgcmF0ZVxuICBzZWdtZW50RGF0YVZpZXcuc2V0VWludDE2KCAxNiwgMCwgdHJ1ZSApOyAvLyBvdXRwdXQgZ2FpblxuICBzZWdtZW50RGF0YVZpZXcuc2V0VWludDgoIDE4LCAwLCB0cnVlICk7IC8vIGNoYW5uZWwgbWFwIDAgPSBtb25vIG9yIHN0ZXJlb1xuICB0aGlzLnNlZ21lbnRUYWJsZUluZGV4ID0gMTtcbiAgdGhpcy5zZWdtZW50RGF0YUluZGV4ID0gdGhpcy5zZWdtZW50VGFibGVbMF0gPSAxOTtcbiAgdGhpcy5oZWFkZXJUeXBlID0gMjtcbiAgdGhpcy5nZW5lcmF0ZVBhZ2UoKTtcbn07XG5cbk9nZ09wdXNFbmNvZGVyLnByb3RvdHlwZS5nZW5lcmF0ZVBhZ2UgPSBmdW5jdGlvbigpe1xuICB2YXIgZ3JhbnVsZVBvc2l0aW9uID0gKCB0aGlzLmxhc3RQb3NpdGl2ZUdyYW51bGVQb3NpdGlvbiA9PT0gdGhpcy5ncmFudWxlUG9zaXRpb24pID8gLTEgOiB0aGlzLmdyYW51bGVQb3NpdGlvbjtcbiAgdmFyIHBhZ2VCdWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoICAyNyArIHRoaXMuc2VnbWVudFRhYmxlSW5kZXggKyB0aGlzLnNlZ21lbnREYXRhSW5kZXggKTtcbiAgdmFyIHBhZ2VCdWZmZXJWaWV3ID0gbmV3IERhdGFWaWV3KCBwYWdlQnVmZmVyICk7XG4gIHZhciBwYWdlID0gbmV3IFVpbnQ4QXJyYXkoIHBhZ2VCdWZmZXIgKTtcblxuICBwYWdlQnVmZmVyVmlldy5zZXRVaW50MzIoIDAsIDEzOTkyODU1ODMsIHRydWUpOyAvLyBDYXB0dXJlIFBhdHRlcm4gc3RhcnRzIGFsbCBwYWdlIGhlYWRlcnMgJ09nZ1MnXG4gIHBhZ2VCdWZmZXJWaWV3LnNldFVpbnQ4KCA0LCAwLCB0cnVlICk7IC8vIFZlcnNpb25cbiAgcGFnZUJ1ZmZlclZpZXcuc2V0VWludDgoIDUsIHRoaXMuaGVhZGVyVHlwZSwgdHJ1ZSApOyAvLyAxID0gY29udGludWF0aW9uLCAyID0gYmVnaW5uaW5nIG9mIHN0cmVhbSwgNCA9IGVuZCBvZiBzdHJlYW1cblxuICAvLyBOdW1iZXIgb2Ygc2FtcGxlcyB1cHRvIGFuZCBpbmNsdWRpbmcgdGhpcyBwYWdlIGF0IDQ4MDAwSHosIGludG8gc2lnbmVkIDY0IGJpdCBMaXR0bGUgRW5kaWFuIGludGVnZXJcbiAgLy8gSmF2YXNjcmlwdCBOdW1iZXIgbWF4aW11bSB2YWx1ZSBpcyA1MyBiaXRzIG9yIDJeNTMgLSAxIFxuICBwYWdlQnVmZmVyVmlldy5zZXRVaW50MzIoIDYsIGdyYW51bGVQb3NpdGlvbiwgdHJ1ZSApO1xuICBpZiAoZ3JhbnVsZVBvc2l0aW9uIDwgMCkge1xuICAgIHBhZ2VCdWZmZXJWaWV3LnNldEludDMyKCAxMCwgTWF0aC5jZWlsKGdyYW51bGVQb3NpdGlvbi80Mjk0OTY3Mjk3KSAtIDEsIHRydWUgKTtcbiAgfVxuICBlbHNlIHtcbiAgICBwYWdlQnVmZmVyVmlldy5zZXRJbnQzMiggMTAsIE1hdGguZmxvb3IoZ3JhbnVsZVBvc2l0aW9uLzQyOTQ5NjcyOTYpLCB0cnVlICk7XG4gIH1cblxuICBwYWdlQnVmZmVyVmlldy5zZXRVaW50MzIoIDE0LCB0aGlzLmNvbmZpZy5zZXJpYWwsIHRydWUgKTsgLy8gQml0c3RyZWFtIHNlcmlhbCBudW1iZXJcbiAgcGFnZUJ1ZmZlclZpZXcuc2V0VWludDMyKCAxOCwgdGhpcy5wYWdlSW5kZXgrKywgdHJ1ZSApOyAvLyBQYWdlIHNlcXVlbmNlIG51bWJlclxuICBwYWdlQnVmZmVyVmlldy5zZXRVaW50OCggMjYsIHRoaXMuc2VnbWVudFRhYmxlSW5kZXgsIHRydWUgKTsgLy8gTnVtYmVyIG9mIHNlZ21lbnRzIGluIHBhZ2UuXG4gIHBhZ2Uuc2V0KCB0aGlzLnNlZ21lbnRUYWJsZS5zdWJhcnJheSgwLCB0aGlzLnNlZ21lbnRUYWJsZUluZGV4KSwgMjcgKTsgLy8gU2VnbWVudCBUYWJsZVxuICBwYWdlLnNldCggdGhpcy5zZWdtZW50RGF0YS5zdWJhcnJheSgwLCB0aGlzLnNlZ21lbnREYXRhSW5kZXgpLCAyNyArIHRoaXMuc2VnbWVudFRhYmxlSW5kZXggKTsgLy8gU2VnbWVudCBEYXRhXG4gIHBhZ2VCdWZmZXJWaWV3LnNldFVpbnQzMiggMjIsIHRoaXMuZ2V0Q2hlY2tzdW0oIHBhZ2UgKSwgdHJ1ZSApOyAvLyBDaGVja3N1bVxuXG4gIGdsb2JhbFsncG9zdE1lc3NhZ2UnXSggcGFnZSwgW3BhZ2UuYnVmZmVyXSApO1xuICB0aGlzLnNlZ21lbnRUYWJsZUluZGV4ID0gMDtcbiAgdGhpcy5zZWdtZW50RGF0YUluZGV4ID0gMDtcbiAgdGhpcy5idWZmZXJzSW5QYWdlID0gMDtcbiAgaWYgKCBncmFudWxlUG9zaXRpb24gPiAwICkge1xuICAgIHRoaXMubGFzdFBvc2l0aXZlR3JhbnVsZVBvc2l0aW9uID0gZ3JhbnVsZVBvc2l0aW9uO1xuICB9XG59O1xuXG5PZ2dPcHVzRW5jb2Rlci5wcm90b3R5cGUuaW5pdENoZWNrc3VtVGFibGUgPSBmdW5jdGlvbigpe1xuICB0aGlzLmNoZWNrc3VtVGFibGUgPSBbXTtcbiAgZm9yICggdmFyIGkgPSAwOyBpIDwgMjU2OyBpKysgKSB7XG4gICAgdmFyIHIgPSBpIDw8IDI0O1xuICAgIGZvciAoIHZhciBqID0gMDsgaiA8IDg7IGorKyApIHtcbiAgICAgIHIgPSAoKHIgJiAweDgwMDAwMDAwKSAhPSAwKSA/ICgociA8PCAxKSBeIDB4MDRjMTFkYjcpIDogKHIgPDwgMSk7XG4gICAgfVxuICAgIHRoaXMuY2hlY2tzdW1UYWJsZVtpXSA9IChyICYgMHhmZmZmZmZmZik7XG4gIH1cbn07XG5cbk9nZ09wdXNFbmNvZGVyLnByb3RvdHlwZS5zZXRPcHVzQ29udHJvbCA9IGZ1bmN0aW9uKCBjb250cm9sLCB2YWx1ZSApe1xuICB2YXIgbG9jYXRpb24gPSB0aGlzLl9tYWxsb2MoIDQgKTtcbiAgdGhpcy5IRUFQMzJbIGxvY2F0aW9uID4+IDIgXSA9IHZhbHVlO1xuICB0aGlzLl9vcHVzX2VuY29kZXJfY3RsKCB0aGlzLmVuY29kZXIsIGNvbnRyb2wsIGxvY2F0aW9uICk7XG4gIHRoaXMuX2ZyZWUoIGxvY2F0aW9uICk7XG59O1xuXG5PZ2dPcHVzRW5jb2Rlci5wcm90b3R5cGUuaW5pdENvZGVjID0gZnVuY3Rpb24oKSB7XG4gIHZhciBlcnJMb2NhdGlvbiA9IHRoaXMuX21hbGxvYyggNCApO1xuICB0aGlzLmVuY29kZXIgPSB0aGlzLl9vcHVzX2VuY29kZXJfY3JlYXRlKCB0aGlzLmNvbmZpZy5lbmNvZGVyU2FtcGxlUmF0ZSwgdGhpcy5jb25maWcubnVtYmVyT2ZDaGFubmVscywgdGhpcy5jb25maWcuZW5jb2RlckFwcGxpY2F0aW9uLCBlcnJMb2NhdGlvbiApO1xuICB0aGlzLl9mcmVlKCBlcnJMb2NhdGlvbiApO1xuXG4gIGlmICggdGhpcy5jb25maWcuZW5jb2RlckJpdFJhdGUgKSB7XG4gICAgdGhpcy5zZXRPcHVzQ29udHJvbCggNDAwMiwgdGhpcy5jb25maWcuZW5jb2RlckJpdFJhdGUgKTtcbiAgfVxuXG4gIGlmICggdGhpcy5jb25maWcuZW5jb2RlckNvbXBsZXhpdHkgKSB7XG4gICAgdGhpcy5zZXRPcHVzQ29udHJvbCggNDAxMCwgdGhpcy5jb25maWcuZW5jb2RlckNvbXBsZXhpdHkgKTtcbiAgfVxuXG4gIHRoaXMuZW5jb2RlclNhbXBsZXNQZXJDaGFubmVsID0gdGhpcy5jb25maWcuZW5jb2RlclNhbXBsZVJhdGUgKiB0aGlzLmNvbmZpZy5lbmNvZGVyRnJhbWVTaXplIC8gMTAwMDtcbiAgdGhpcy5lbmNvZGVyU2FtcGxlc1BlckNoYW5uZWxQb2ludGVyID0gdGhpcy5fbWFsbG9jKCA0ICk7XG4gIHRoaXMuSEVBUDMyWyB0aGlzLmVuY29kZXJTYW1wbGVzUGVyQ2hhbm5lbFBvaW50ZXIgPj4gMiBdID0gdGhpcy5lbmNvZGVyU2FtcGxlc1BlckNoYW5uZWw7XG5cbiAgdGhpcy5lbmNvZGVyQnVmZmVyTGVuZ3RoID0gdGhpcy5lbmNvZGVyU2FtcGxlc1BlckNoYW5uZWwgKiB0aGlzLmNvbmZpZy5udW1iZXJPZkNoYW5uZWxzO1xuICB0aGlzLmVuY29kZXJCdWZmZXJQb2ludGVyID0gdGhpcy5fbWFsbG9jKCB0aGlzLmVuY29kZXJCdWZmZXJMZW5ndGggKiA0ICk7IC8vIDQgYnl0ZXMgcGVyIHNhbXBsZVxuICB0aGlzLmVuY29kZXJCdWZmZXIgPSB0aGlzLkhFQVBGMzIuc3ViYXJyYXkoIHRoaXMuZW5jb2RlckJ1ZmZlclBvaW50ZXIgPj4gMiwgKHRoaXMuZW5jb2RlckJ1ZmZlclBvaW50ZXIgPj4gMikgKyB0aGlzLmVuY29kZXJCdWZmZXJMZW5ndGggKTtcblxuICB0aGlzLmVuY29kZXJPdXRwdXRNYXhMZW5ndGggPSA0MDAwO1xuICB0aGlzLmVuY29kZXJPdXRwdXRQb2ludGVyID0gdGhpcy5fbWFsbG9jKCB0aGlzLmVuY29kZXJPdXRwdXRNYXhMZW5ndGggKTtcbiAgdGhpcy5lbmNvZGVyT3V0cHV0QnVmZmVyID0gdGhpcy5IRUFQVTguc3ViYXJyYXkoIHRoaXMuZW5jb2Rlck91dHB1dFBvaW50ZXIsIHRoaXMuZW5jb2Rlck91dHB1dFBvaW50ZXIgKyB0aGlzLmVuY29kZXJPdXRwdXRNYXhMZW5ndGggKTtcbn07XG5cbk9nZ09wdXNFbmNvZGVyLnByb3RvdHlwZS5pbml0UmVzYW1wbGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBlcnJMb2NhdGlvbiA9IHRoaXMuX21hbGxvYyggNCApO1xuICB0aGlzLnJlc2FtcGxlciA9IHRoaXMuX3NwZWV4X3Jlc2FtcGxlcl9pbml0KCB0aGlzLmNvbmZpZy5udW1iZXJPZkNoYW5uZWxzLCB0aGlzLmNvbmZpZy5vcmlnaW5hbFNhbXBsZVJhdGUsIHRoaXMuY29uZmlnLmVuY29kZXJTYW1wbGVSYXRlLCB0aGlzLmNvbmZpZy5yZXNhbXBsZVF1YWxpdHksIGVyckxvY2F0aW9uICk7XG4gIHRoaXMuX2ZyZWUoIGVyckxvY2F0aW9uICk7XG5cbiAgdGhpcy5yZXNhbXBsZUJ1ZmZlckluZGV4ID0gMDtcbiAgdGhpcy5yZXNhbXBsZVNhbXBsZXNQZXJDaGFubmVsID0gdGhpcy5jb25maWcub3JpZ2luYWxTYW1wbGVSYXRlICogdGhpcy5jb25maWcuZW5jb2RlckZyYW1lU2l6ZSAvIDEwMDA7XG4gIHRoaXMucmVzYW1wbGVTYW1wbGVzUGVyQ2hhbm5lbFBvaW50ZXIgPSB0aGlzLl9tYWxsb2MoIDQgKTtcbiAgdGhpcy5IRUFQMzJbIHRoaXMucmVzYW1wbGVTYW1wbGVzUGVyQ2hhbm5lbFBvaW50ZXIgPj4gMiBdID0gdGhpcy5yZXNhbXBsZVNhbXBsZXNQZXJDaGFubmVsO1xuXG4gIHRoaXMucmVzYW1wbGVCdWZmZXJMZW5ndGggPSB0aGlzLnJlc2FtcGxlU2FtcGxlc1BlckNoYW5uZWwgKiB0aGlzLmNvbmZpZy5udW1iZXJPZkNoYW5uZWxzO1xuICB0aGlzLnJlc2FtcGxlQnVmZmVyUG9pbnRlciA9IHRoaXMuX21hbGxvYyggdGhpcy5yZXNhbXBsZUJ1ZmZlckxlbmd0aCAqIDQgKTsgLy8gNCBieXRlcyBwZXIgc2FtcGxlXG4gIHRoaXMucmVzYW1wbGVCdWZmZXIgPSB0aGlzLkhFQVBGMzIuc3ViYXJyYXkoIHRoaXMucmVzYW1wbGVCdWZmZXJQb2ludGVyID4+IDIsICh0aGlzLnJlc2FtcGxlQnVmZmVyUG9pbnRlciA+PiAyKSArIHRoaXMucmVzYW1wbGVCdWZmZXJMZW5ndGggKTtcbn07XG5cbk9nZ09wdXNFbmNvZGVyLnByb3RvdHlwZS5pbnRlcmxlYXZlID0gZnVuY3Rpb24oIGJ1ZmZlcnMgKSB7XG4gIGZvciAoIHZhciBpID0gMDsgaSA8IHRoaXMuY29uZmlnLmJ1ZmZlckxlbmd0aDsgaSsrICkge1xuICAgIGZvciAoIHZhciBjaGFubmVsID0gMDsgY2hhbm5lbCA8IHRoaXMuY29uZmlnLm51bWJlck9mQ2hhbm5lbHM7IGNoYW5uZWwrKyApIHtcbiAgICAgIHRoaXMuaW50ZXJsZWF2ZWRCdWZmZXJzWyBpICogdGhpcy5jb25maWcubnVtYmVyT2ZDaGFubmVscyArIGNoYW5uZWwgXSA9IGJ1ZmZlcnNbIGNoYW5uZWwgXVsgaSBdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzLmludGVybGVhdmVkQnVmZmVycztcbn07XG5cbk9nZ09wdXNFbmNvZGVyLnByb3RvdHlwZS5zZWdtZW50UGFja2V0ID0gZnVuY3Rpb24oIHBhY2tldExlbmd0aCApIHtcbiAgdmFyIHBhY2tldEluZGV4ID0gMDtcblxuICB3aGlsZSAoIHBhY2tldExlbmd0aCA+PSAwICkge1xuXG4gICAgaWYgKCB0aGlzLnNlZ21lbnRUYWJsZUluZGV4ID09PSAyNTUgKSB7XG4gICAgICB0aGlzLmdlbmVyYXRlUGFnZSgpO1xuICAgICAgdGhpcy5oZWFkZXJUeXBlID0gMTtcbiAgICB9XG5cbiAgICB2YXIgc2VnbWVudExlbmd0aCA9IE1hdGgubWluKCBwYWNrZXRMZW5ndGgsIDI1NSApO1xuICAgIHRoaXMuc2VnbWVudFRhYmxlWyB0aGlzLnNlZ21lbnRUYWJsZUluZGV4KysgXSA9IHNlZ21lbnRMZW5ndGg7XG4gICAgdGhpcy5zZWdtZW50RGF0YS5zZXQoIHRoaXMuZW5jb2Rlck91dHB1dEJ1ZmZlci5zdWJhcnJheSggcGFja2V0SW5kZXgsIHBhY2tldEluZGV4ICsgc2VnbWVudExlbmd0aCApLCB0aGlzLnNlZ21lbnREYXRhSW5kZXggKTtcbiAgICB0aGlzLnNlZ21lbnREYXRhSW5kZXggKz0gc2VnbWVudExlbmd0aDtcbiAgICBwYWNrZXRJbmRleCArPSBzZWdtZW50TGVuZ3RoO1xuICAgIHBhY2tldExlbmd0aCAtPSAyNTU7XG4gIH1cblxuICB0aGlzLmdyYW51bGVQb3NpdGlvbiArPSAoIDQ4ICogdGhpcy5jb25maWcuZW5jb2RlckZyYW1lU2l6ZSApO1xuICBpZiAoIHRoaXMuc2VnbWVudFRhYmxlSW5kZXggPT09IDI1NSApIHtcbiAgICB0aGlzLmdlbmVyYXRlUGFnZSgpO1xuICAgIHRoaXMuaGVhZGVyVHlwZSA9IDA7XG4gIH1cbn07XG5cblxuaWYgKCFNb2R1bGUpIHtcbiAgTW9kdWxlID0ge307XG59XG5cbk1vZHVsZVsnbWFpblJlYWR5J10gPSBtYWluUmVhZHk7XG5Nb2R1bGVbJ09nZ09wdXNFbmNvZGVyJ10gPSBPZ2dPcHVzRW5jb2Rlcjtcbk1vZHVsZVsnb25SdW50aW1lSW5pdGlhbGl6ZWQnXSA9IG1haW5SZWFkeVJlc29sdmU7XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kdWxlO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/encoderWorker.js\n");

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

STATICTOP = STATIC_BASE + 34192;
/* global initializers */  __ATINIT__.push();


memoryInitializer = "encoderWorker.js.mem";





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

  
  function _llvm_exp2_f32(x) {
      return Math.pow(2, x);
    }function _llvm_exp2_f64() {
  return _llvm_exp2_f32.apply(null, arguments)
  }

  var _llvm_pow_f64=Math_pow;

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

function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_viiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

Module.asmGlobalArg = { "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array, "NaN": NaN, "Infinity": Infinity };

Module.asmLibraryArg = { "abort": abort, "assert": assert, "enlargeMemory": enlargeMemory, "getTotalMemory": getTotalMemory, "abortOnCannotGrowMemory": abortOnCannotGrowMemory, "invoke_iiiiiii": invoke_iiiiiii, "invoke_viiiiiii": invoke_viiiiiii, "___setErrNo": ___setErrNo, "_abort": _abort, "_emscripten_memcpy_big": _emscripten_memcpy_big, "_llvm_exp2_f32": _llvm_exp2_f32, "_llvm_exp2_f64": _llvm_exp2_f64, "_llvm_pow_f64": _llvm_pow_f64, "_llvm_stackrestore": _llvm_stackrestore, "_llvm_stacksave": _llvm_stacksave, "DYNAMICTOP_PTR": DYNAMICTOP_PTR, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX };
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
  var invoke_viiiiiii=env.invoke_viiiiiii;
  var ___setErrNo=env.___setErrNo;
  var _abort=env._abort;
  var _emscripten_memcpy_big=env._emscripten_memcpy_big;
  var _llvm_exp2_f32=env._llvm_exp2_f32;
  var _llvm_exp2_f64=env._llvm_exp2_f64;
  var _llvm_pow_f64=env._llvm_pow_f64;
  var _llvm_stackrestore=env._llvm_stackrestore;
  var _llvm_stacksave=env._llvm_stacksave;
  var tempFloat = 0.0;

// EMSCRIPTEN_START_FUNCS
function _opus_encode_native($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) {
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
 var $$ = 0, $$$ = 0, $$$3 = 0, $$0 = 0, $$01 = 0, $$01$$346 = 0, $$0100 = 0, $$011 = 0, $$012 = 0.0, $$020 = 0, $$03 = 0, $$030200 = 0, $$030201 = 0, $$030203 = 0, $$043 = 0, $$05 = 0, $$050 = 0, $$055 = 0, $$06 = 0.0, $$065 = 0, $$071 = 0, $$075 = 0, $$085 = 0, $$08524 = 0, $$08524$ = 0, $$086 = 0, $$087 = 0.0, $$1 = 0, $$1076 = 0, $$107883 = 0, $$110 = 0, $$113 = 0.0, $$121 = 0, $$126 = 0, $$129 = 0, $$129$1 = 0, $$129$2 = 0, $$129$3 = 0, $$131 = 0, $$134 = 0, $$140 = 0, $$149 = 0, $$151 = 0, $$165 = 0, $$170 = 0, $$18 = 0.0, $$182 = 0, $$183212 = 0.0, $$183214 = 0.0, $$189$ph = 0, $$18922193 = 0, $$191$ph = 0, $$19120194 = 0, $$19318195 = 0, $$199 = 0, $$19935 = 0, $$1993645$ph = 0, $$1993692 = 0, $$19937 = 0, $$2 = 0, $$2106 = 0, $$2109 = 0, $$210929 = 0, $$21093049$ph = 0, $$21093094 = 0, $$210931 = 0, $$216 = 0, $$222 = 0, $$235 = 0, $$245$ph = 0, $$262 = 0, $$274 = 0, $$27438 = 0, $$2743943$ph = 0, $$2743991 = 0, $$27440 = 0, $$284 = 0.0, $$296 = 0, $$3 = 0, $$310332 = 0, $$31033346$ph = 0, $$323 = 0, $$327 = 0, $$336 = 0, $$346 = 0, $$353$ph = 0, $$35884 = 0, $$3588496 = 0, $$379 = 0, $$454 = 0, $$459 = 0, $$470 = 0, $$581 = 0, $$585 = 0, $$58595 = 0, $$586 = 0, $$6 = 0, $$639 = 0, $$649 = 0, $$8 = 0, $$841$ph = 0, $$9 = 0, $$942 = 0, $$alloca_mul101 = 0, $$idx1$val = 0, $$idx10 = 0, $$idx11 = 0, $$phi$trans$insert = 0, $$phi$trans$insert113 = 0, $$pr = 0, $$pre = 0, $$pre$phi119197Z2D = 0, $$pre$phi119Z2D = 0, $$pre$phi120Z2D = 0, $$pre$phi125Z2D = 0, $$pre$phiZ2D = 0, $$pre103 = 0, $$pre105 = 0, $$pre110 = 0, $$pre114 = 0, $$sink102 = 0, $$sink128 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $111 = 0, $116 = 0, $12 = 0, $120 = 0, $125 = 0, $127 = 0, $13 = 0, $131 = 0, $133 = 0, $14 = 0, $15 = 0, $158 = 0, $16 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $176 = 0, $179 = 0, $18 = 0, $185 = 0, $186 = 0, $189 = 0, $19 = 0, $191 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $20 = 0, $200 = 0, $202 = 0, $204 = 0.0, $21 = 0, $212 = 0, $217 = 0, $22 = 0, $221 = 0, $227 = 0, $228 = 0, $24 = 0, $252 = 0, $254 = 0, $257 = 0, $260 = 0, $261 = 0, $263 = 0, $264 = 0, $269 = 0, $270 = 0, $277 = 0, $281 = 0, $284 = 0, $285 = 0, $291 = 0, $302 = 0, $305 = 0, $306 = 0, $308 = 0, $310 = 0, $312 = 0, $327 = 0, $329 = 0, $330 = 0, $331 = 0, $332 = 0, $338 = 0, $34 = 0, $340 = 0, $342 = 0, $343 = 0, $344 = 0, $347 = 0, $348 = 0, $351 = 0, $354 = 0, $357 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $364 = 0, $37 = 0, $379 = 0, $381 = 0, $383 = 0, $391 = 0, $393 = 0, $395 = 0, $397 = 0, $398 = 0, $401 = 0, $403 = 0, $409 = 0, $413 = 0, $421 = 0, $425 = 0, $429 = 0, $43 = 0, $431 = 0, $435 = 0, $437 = 0, $438 = 0, $439 = 0, $441 = 0, $442 = 0, $443 = 0, $444 = 0, $447 = 0, $45 = 0, $455 = 0, $458 = 0, $459 = 0, $460 = 0, $467 = 0, $470 = 0, $474 = 0, $481 = 0, $483 = 0, $484 = 0, $485 = 0.0, $489 = 0, $49 = 0, $493 = 0, $494 = 0, $495 = 0, $498 = 0, $499 = 0, $500 = 0, $507 = 0, $51 = 0, $510 = 0, $526 = 0, $527 = 0, $529 = 0, $533 = 0, $534 = 0.0, $535 = 0, $539 = 0.0, $549 = 0, $55 = 0, $550 = 0, $552 = 0, $553 = 0, $558 = 0, $559 = 0, $561 = 0, $564 = 0, $57 = 0, $570 = 0, $576 = 0, $578 = 0, $579 = 0, $583 = 0, $584 = 0, $589 = 0, $59 = 0, $590 = 0, $592 = 0, $593 = 0, $595 = 0, $597 = 0, $610 = 0, $612 = 0, $613 = 0, $614 = 0, $621 = 0, $623 = 0, $631 = 0, $632 = 0, $644 = 0, $647 = 0, $65 = 0, $655 = 0, $665 = 0, $67 = 0.0, $671 = 0, $675 = 0, $682 = 0, $69 = 0.0, $690 = 0, $691 = 0, $693 = 0, $694 = 0, $696 = 0, $706 = 0, $709 = 0, $711 = 0, $716 = 0, $72 = 0, $726 = 0, $727 = 0.0, $730 = 0, $737 = 0, $742 = 0, $746 = 0, $748 = 0, $754 = 0, $755 = 0, $762 = 0, $771 = 0, $773 = 0, $774 = 0, $782 = 0, $785 = 0, $791 = 0, $792 = 0, $797 = 0, $798 = 0, $799 = 0, $814 = 0, $816 = 0, $821 = 0, $835 = 0, $845 = 0, $846 = 0, $847 = 0, $851 = 0, $866 = 0, $867 = 0, $87 = 0, $909 = 0, $92 = 0, $920 = 0, $922 = 0, $928 = 0, $930 = 0, $936 = 0, $937 = 0, $938 = 0, $939 = 0, $940 = 0, $941 = 0, $942 = 0, $943 = 0, $944 = 0, $946 = 0, $switch$selectcmp190 = 0, $vararg_buffer = 0, $vararg_buffer1 = 0, $vararg_buffer10 = 0, $vararg_buffer13 = 0, $vararg_buffer16 = 0, $vararg_buffer19 = 0, $vararg_buffer22 = 0, $vararg_buffer25 = 0, $vararg_buffer28 = 0, $vararg_buffer31 = 0, $vararg_buffer34 = 0, $vararg_buffer37 = 0, $vararg_buffer4 = 0, $vararg_buffer40 = 0, $vararg_buffer43 = 0, $vararg_buffer46 = 0, $vararg_buffer49 = 0, $vararg_buffer52 = 0, $vararg_buffer55 = 0, $vararg_buffer57 = 0, $vararg_buffer60 = 0, $vararg_buffer62 = 0, $vararg_buffer65 = 0, $vararg_buffer68 = 0, $vararg_buffer7 = 0, $vararg_buffer71 = 0, $vararg_buffer73 = 0, $vararg_buffer76 = 0, $vararg_buffer79 = 0, $vararg_buffer82 = 0, $vararg_buffer85 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 528 | 0;
 $vararg_buffer85 = sp + 240 | 0;
 $vararg_buffer82 = sp + 232 | 0;
 $vararg_buffer79 = sp + 224 | 0;
 $vararg_buffer76 = sp + 216 | 0;
 $vararg_buffer73 = sp + 208 | 0;
 $vararg_buffer71 = sp + 200 | 0;
 $vararg_buffer68 = sp + 192 | 0;
 $vararg_buffer65 = sp + 184 | 0;
 $vararg_buffer62 = sp + 176 | 0;
 $vararg_buffer60 = sp + 168 | 0;
 $vararg_buffer57 = sp + 160 | 0;
 $vararg_buffer55 = sp + 152 | 0;
 $vararg_buffer52 = sp + 144 | 0;
 $vararg_buffer49 = sp + 136 | 0;
 $vararg_buffer46 = sp + 128 | 0;
 $vararg_buffer43 = sp + 120 | 0;
 $vararg_buffer40 = sp + 112 | 0;
 $vararg_buffer37 = sp + 104 | 0;
 $vararg_buffer34 = sp + 96 | 0;
 $vararg_buffer31 = sp + 88 | 0;
 $vararg_buffer28 = sp + 80 | 0;
 $vararg_buffer25 = sp + 72 | 0;
 $vararg_buffer22 = sp + 64 | 0;
 $vararg_buffer19 = sp + 56 | 0;
 $vararg_buffer16 = sp + 48 | 0;
 $vararg_buffer13 = sp + 40 | 0;
 $vararg_buffer10 = sp + 32 | 0;
 $vararg_buffer7 = sp + 24 | 0;
 $vararg_buffer4 = sp + 16 | 0;
 $vararg_buffer1 = sp + 8 | 0;
 $vararg_buffer = sp;
 $12 = sp + 512 | 0;
 $13 = sp + 464 | 0;
 $14 = sp + 460 | 0;
 $15 = sp + 456 | 0;
 $16 = sp + 400 | 0;
 $17 = sp + 296 | 0;
 $18 = sp + 264 | 0;
 $19 = sp + 256 | 0;
 $20 = sp + 248 | 0;
 $21 = sp + 518 | 0;
 $22 = sp + 516 | 0;
 HEAP32[$14 >> 2] = 0;
 $$ = ($4 | 0) < 1276 ? $4 : 1276;
 $24 = $0 + 18032 | 0;
 HEAP32[$24 >> 2] = 0;
 if (($2 | 0) < 1 | ($$ | 0) < 1) {
  $$2 = -1;
  STACKTOP = sp;
  return $$2 | 0;
 }
 if (($$ | 0) == 1) if ((HEAP32[$0 + 144 >> 2] | 0) == ($2 * 10 | 0)) {
  $$2 = -2;
  STACKTOP = sp;
  return $$2 | 0;
 }
 $34 = $0 + (HEAP32[$0 + 4 >> 2] | 0) | 0;
 $36 = $0 + (HEAP32[$0 >> 2] | 0) | 0;
 $37 = $0 + 108 | 0;
 if ((HEAP32[$37 >> 2] | 0) == 2051) $$071 = 0; else $$071 = HEAP32[$0 + 116 >> 2] | 0;
 $43 = HEAP32[$0 + 168 >> 2] | 0;
 $$126 = ($43 | 0) > ($5 | 0) ? $5 : $43;
 HEAP32[$vararg_buffer >> 2] = $15;
 _opus_custom_encoder_ctl($36, 10015, $vararg_buffer) | 0;
 HEAP32[$16 >> 2] = 0;
 $45 = $0 + 44 | 0;
 do if ((HEAP32[$45 >> 2] | 0) > 6) {
  $49 = HEAP32[$0 + 144 >> 2] | 0;
  if (($49 | 0) > 15999) {
   $51 = $0 + 112 | 0;
   if (_is_digital_silence($1, $2, HEAP32[$51 >> 2] | 0, $$126) | 0) {
    $55 = $0 + 18016 | 0;
    HEAP32[$55 >> 2] = 0;
    $$18922193 = -1;
    $$19120194 = -1;
    $$19318195 = 1;
    $362 = $55;
    break;
   }
   $57 = HEAP32[$0 + 8464 >> 2] | 0;
   $59 = HEAP32[$0 + 8468 >> 2] | 0;
   _run_analysis($0 + 188 | 0, HEAP32[$15 >> 2] | 0, $6, $7, $2, 0, $8, $9, $49, $$126, $10, $16);
   if (+HEAPF32[$16 + 32 >> 2] > .10000000149011612) {
    $65 = $0 + 18024 | 0;
    $67 = +HEAPF32[$65 >> 2] * .9990000128746033;
    $69 = +_compute_frame_energy($1, $2, HEAP32[$51 >> 2] | 0);
    HEAPF32[$65 >> 2] = $67 > $69 ? $67 : $69;
    $$189$ph = $57;
    $$191$ph = $59;
    label = 12;
   } else {
    $$189$ph = $57;
    $$191$ph = $59;
    label = 12;
   }
  } else {
   $$189$ph = -1;
   $$191$ph = -1;
   label = 12;
  }
 } else {
  $$189$ph = -1;
  $$191$ph = -1;
  label = 12;
 } while (0);
 if ((label | 0) == 12) {
  HEAP32[$0 + 140 >> 2] = -1;
  $$pre = HEAP32[$16 >> 2] | 0;
  $72 = $0 + 18016 | 0;
  HEAP32[$72 >> 2] = 0;
  if (!$$pre) {
   $$18922193 = $$189$ph;
   $$19120194 = $$191$ph;
   $$19318195 = 0;
   $362 = $72;
  } else {
   if ((HEAP32[$0 + 124 >> 2] | 0) == -1e3) HEAP32[$0 + 140 >> 2] = ~~+Math_floor(+((1.0 - +HEAPF32[$16 + 20 >> 2]) * 100.0 + .5));
   $87 = HEAP32[$16 + 28 >> 2] | 0;
   if (($87 | 0) < 13) $$sink128 = 1101; else if (($87 | 0) < 15) $$sink128 = 1102; else if (($87 | 0) < 17) $$sink128 = 1103; else $$sink128 = ($87 | 0) < 19 ? 1104 : 1105;
   HEAP32[$72 >> 2] = $$sink128;
   $$18922193 = $$189$ph;
   $$19120194 = $$191$ph;
   $$19318195 = 0;
   $362 = $72;
  }
 }
 $92 = $0 + 112 | 0;
 if ((HEAP32[$92 >> 2] | 0) == 2) if ((HEAP32[$0 + 120 >> 2] | 0) == 1) $$087 = 0.0; else $$087 = +_compute_stereo_width($1, $2, HEAP32[$0 + 144 >> 2] | 0, $0 + 14156 | 0); else $$087 = 0.0;
 $102 = _user_bitrate_to_bitrate($0, $2, $$) | 0;
 $103 = $0 + 160 | 0;
 HEAP32[$103 >> 2] = $102;
 $104 = $0 + 144 | 0;
 $105 = HEAP32[$104 >> 2] | 0;
 $106 = ($105 | 0) / ($2 | 0) | 0;
 $107 = $0 + 148 | 0;
 $108 = HEAP32[$107 >> 2] | 0;
 if (!$108) {
  $111 = ($105 * 12 | 0) / ($2 | 0) | 0;
  $116 = ((($102 * 12 | 0) / 8 | 0) + (($111 | 0) / 2 | 0) | 0) / ($111 | 0) | 0;
  $$$ = ($116 | 0) < ($$ | 0) ? $116 : $$;
  $120 = ((Math_imul($$$, $111) | 0) << 3 | 0) / 12 | 0;
  HEAP32[$103 >> 2] = $120;
  if (($$$ | 0) < 1) $$08524 = 1; else {
   $$085 = $$$;
   $125 = $120;
   label = 25;
  }
 } else {
  $$085 = $$;
  $125 = $102;
  label = 25;
 }
 do if ((label | 0) == 25) if (($$085 | 0) < 3 | ($125 | 0) < ($106 * 24 | 0)) $$08524 = $$085; else {
  if (($106 | 0) < 50) {
   $127 = Math_imul($$085, $106) | 0;
   if (($127 | 0) < 300 | ($125 | 0) < 2400) {
    $$08524 = $$085;
    break;
   } else $$pre$phi125Z2D = $127;
  } else $$pre$phi125Z2D = Math_imul($106, $$085) | 0;
  $167 = $$pre$phi125Z2D << 3;
  $168 = HEAP32[$92 >> 2] | 0;
  $169 = HEAP32[$45 >> 2] | 0;
  $170 = $0 + 40 | 0;
  $171 = HEAP32[$170 >> 2] | 0;
  $172 = _compute_equiv_rate($125, $168, $106, $108, 0, $169, $171) | 0;
  L43 : do switch (HEAP32[$0 + 124 >> 2] | 0) {
  case 3001:
   {
    $$470 = 127;
    break;
   }
  case 3002:
   {
    $$470 = 0;
    break;
   }
  default:
   {
    $176 = HEAP32[$0 + 140 >> 2] | 0;
    if (($176 | 0) > -1) {
     $179 = $176 * 327 >> 8;
     $$470 = (HEAP32[$37 >> 2] | 0) != 2049 | ($179 | 0) < 115 ? $179 : 115;
     break L43;
    } else {
     $$470 = (HEAP32[$37 >> 2] | 0) == 2048 ? 115 : 48;
     break L43;
    }
   }
  } while (0);
  $185 = $0 + 120 | 0;
  $186 = HEAP32[$185 >> 2] | 0;
  do if (($186 | 0) != -1e3 & ($168 | 0) == 2) {
   $189 = $0 + 14088 | 0;
   HEAP32[$189 >> 2] = $186;
   $$pre$phiZ2D = $189;
   $196 = $186;
  } else {
   $191 = $0 + 14088 | 0;
   if (($168 | 0) == 2) {
    $195 = ($172 | 0) > (((HEAP32[$191 >> 2] | 0) == 2 ? 23e3 : 25e3) | 0) ? 2 : 1;
    HEAP32[$191 >> 2] = $195;
    $$pre$phiZ2D = $191;
    $196 = $195;
    break;
   } else {
    HEAP32[$191 >> 2] = $168;
    $$pre$phiZ2D = $191;
    $196 = $168;
    break;
   }
  } while (0);
  $197 = _compute_equiv_rate($125, $196, $106, $108, 0, $169, $171) | 0;
  $198 = HEAP32[$37 >> 2] | 0;
  do if (($198 | 0) == 2051) {
   $200 = $0 + 14120 | 0;
   HEAP32[$200 >> 2] = 1002;
   $$pre$phi119197Z2D = $200;
   $936 = 1002;
  } else {
   $202 = HEAP32[$0 + 136 >> 2] | 0;
   if (($202 | 0) == -1e3) {
    $204 = 1.0 - $$087;
    $212 = ~~($204 * 16.0e3 + $$087 * 16.0e3);
    $217 = $212 + ((Math_imul(Math_imul($$470, $$470) | 0, ~~($204 * 64.0e3 + $$087 * 36.0e3) - $212 | 0) | 0) >> 14) | 0;
    $$140 = ($198 | 0) == 2048 ? $217 + 8e3 | 0 : $217;
    $221 = HEAP32[$0 + 14124 >> 2] | 0;
    if (($221 | 0) == 1002) $$296 = $$140 + -4e3 | 0; else $$296 = ($221 | 0) > 0 ? $$140 + 4e3 | 0 : $$140;
    $227 = ($197 | 0) >= ($$296 | 0) ? 1002 : 1e3;
    $228 = $0 + 14120 | 0;
    HEAP32[$228 >> 2] = $227;
    if (!(HEAP32[$0 + 48 >> 2] | 0)) $937 = $227; else if (($171 | 0) > (128 - $$470 >> 4 | 0)) {
     HEAP32[$228 >> 2] = 1e3;
     $937 = 1e3;
    } else $937 = $227;
    do if (!(HEAP32[$0 + 184 >> 2] | 0)) {
     HEAP32[$0 + 56 >> 2] = 0;
     $938 = $937;
    } else {
     if (HEAP32[$16 >> 2] | 0) {
      HEAP32[$0 + 56 >> 2] = 0;
      $938 = $937;
      break;
     }
     HEAP32[$0 + 56 >> 2] = $$19318195 ^ 1;
     if (($$19318195 | 0) == 0 & ($$470 | 0) > 100) {
      HEAP32[$228 >> 2] = 1e3;
      $938 = 1e3;
     } else $938 = $937;
    } while (0);
    if (($$085 | 0) < ((Math_imul(($106 | 0) > 50 ? 9e3 : 6e3, $2) | 0) / ($105 << 3 | 0) | 0 | 0)) {
     HEAP32[$228 >> 2] = 1002;
     $$pre$phi119197Z2D = $228;
     $936 = 1002;
     break;
    } else {
     $$pre$phi119Z2D = $228;
     $254 = $938;
    }
   } else {
    $252 = $0 + 14120 | 0;
    HEAP32[$252 >> 2] = $202;
    $$pre$phi119Z2D = $252;
    $254 = $202;
   }
   if (($254 | 0) == 1002) {
    $$pre$phi119197Z2D = $$pre$phi119Z2D;
    $936 = 1002;
   } else if ((($105 | 0) / 100 | 0 | 0) > ($2 | 0)) {
    HEAP32[$$pre$phi119Z2D >> 2] = 1002;
    $$pre$phi119197Z2D = $$pre$phi119Z2D;
    $936 = 1002;
   } else {
    $$pre$phi119197Z2D = $$pre$phi119Z2D;
    $936 = $254;
   }
  } while (0);
  $257 = $0 + 176 | 0;
  if (!(HEAP32[$257 >> 2] | 0)) $264 = $936; else {
   HEAP32[$$pre$phi119197Z2D >> 2] = 1002;
   $264 = 1002;
  }
  $260 = $0 + 14124 | 0;
  $261 = HEAP32[$260 >> 2] | 0;
  do if (($261 | 0) > 0) {
   $263 = ($264 | 0) == 1002;
   if (($261 | 0) == 1002 & ($263 ^ 1)) {
    $269 = ($264 | 0) != 1002;
    $270 = $269 & 1;
    if ($269) {
     $$050 = $270;
     $$235 = 1;
     $$262 = 0;
     $281 = $264;
     break;
    } else $939 = $270;
   } else {
    if (!$263) {
     $$050 = 0;
     $$235 = 0;
     $$262 = 0;
     $281 = $264;
     break;
    }
    if (($261 | 0) == 1002) {
     $$050 = 0;
     $$235 = 0;
     $$262 = 0;
     $281 = 1002;
     break;
    }
    $939 = ($264 | 0) != 1002 & 1;
   }
   if ((($105 | 0) / 100 | 0 | 0) > ($2 | 0)) {
    $$050 = $939;
    $$235 = 0;
    $$262 = 0;
    $281 = 1002;
   } else {
    HEAP32[$$pre$phi119197Z2D >> 2] = $261;
    $$050 = $939;
    $$235 = 1;
    $$262 = 1;
    $281 = $261;
   }
  } else {
   $$050 = 0;
   $$235 = 0;
   $$262 = 0;
   $281 = $264;
  } while (0);
  if (($196 | 0) == 1) if ((HEAP32[$0 + 14128 >> 2] | 0) == 2) {
   $277 = $0 + 68 | 0;
   if ((HEAP32[$277 >> 2] | 0) != 0 | ($281 | 0) == 1002 | ($261 | 0) == 1002) label = 91; else {
    HEAP32[$277 >> 2] = 1;
    HEAP32[$$pre$phiZ2D >> 2] = 2;
    $284 = 2;
   }
  } else label = 91; else label = 91;
  if ((label | 0) == 91) {
   HEAP32[$0 + 68 >> 2] = 0;
   $284 = $196;
  }
  $285 = _compute_equiv_rate($125, $284, $106, $108, $281, $169, $171) | 0;
  do if (($281 | 0) == 1002) {
   $$030201 = 0;
   $332 = 1;
   $940 = 1002;
   label = 99;
  } else {
   if (($261 | 0) == 1002) {
    _silk_InitEncoder($34, HEAP32[$0 + 180 >> 2] | 0, $17) | 0;
    $$pre103 = HEAP32[$$pre$phi119197Z2D >> 2] | 0;
    $291 = ($$pre103 | 0) == 1002;
    if ($291) {
     $$030201 = 1;
     $332 = $291;
     $940 = $$pre103;
     label = 99;
     break;
    } else {
     $$030203 = 1;
     $941 = $291;
     $942 = $$pre103;
    }
   } else {
    $$030203 = 0;
    $941 = ($281 | 0) == 1002;
    $942 = $281;
   }
   if (!(HEAP32[$0 + 14148 >> 2] | 0)) if (!(HEAP32[$0 + 84 >> 2] | 0)) {
    $$phi$trans$insert = $0 + 14136 | 0;
    $$030200 = $$030203;
    $$pre$phi120Z2D = $$phi$trans$insert;
    $340 = HEAP32[$$phi$trans$insert >> 2] | 0;
    $344 = $941;
    $381 = $942;
   } else {
    $$030201 = $$030203;
    $332 = $941;
    $940 = $942;
    label = 99;
   } else {
    $$030201 = $$030203;
    $332 = $941;
    $940 = $942;
    label = 99;
   }
  } while (0);
  do if ((label | 0) == 99) {
   if ((HEAP32[$92 >> 2] | 0) == 2) if ((HEAP32[$185 >> 2] | 0) == 1) label = 101; else {
    $$075 = 19400;
    $$086 = 19400;
   } else label = 101;
   if ((label | 0) == 101) {
    $$075 = 19400;
    $$086 = 19400;
   }
   $302 = Math_imul($$470, $$470) | 0;
   $$020 = 0;
   while (1) {
    if (($$020 | 0) == 8) break;
    $312 = HEAP32[$$075 + ($$020 << 2) >> 2] | 0;
    HEAP32[$18 + ($$020 << 2) >> 2] = $312 + ((Math_imul($302, (HEAP32[$$086 + ($$020 << 2) >> 2] | 0) - $312 | 0) | 0) >> 14);
    $$020 = $$020 + 1 | 0;
   }
   $305 = (HEAP32[$0 + 14148 >> 2] | 0) == 0;
   $306 = $0 + 14140 | 0;
   $308 = HEAP32[$18 + 24 >> 2] | 0;
   $310 = HEAP32[$18 + 28 >> 2] | 0;
   do if ($305) if ((HEAP32[$306 >> 2] | 0) < 1105) {
    $$129 = $308 + $310 | 0;
    break;
   } else {
    $$129 = $308 - $310 | 0;
    break;
   } else $$129 = $308; while (0);
   do if (($285 | 0) < ($$129 | 0)) {
    $327 = HEAP32[$18 + 16 >> 2] | 0;
    $329 = HEAP32[$18 + 20 >> 2] | 0;
    do if ($305) if ((HEAP32[$306 >> 2] | 0) < 1104) {
     $$129$1 = $327 + $329 | 0;
     break;
    } else {
     $$129$1 = $327 - $329 | 0;
     break;
    } else $$129$1 = $327; while (0);
    if (($285 | 0) >= ($$129$1 | 0)) {
     $330 = 1104;
     break;
    }
    $920 = HEAP32[$18 + 8 >> 2] | 0;
    $922 = HEAP32[$18 + 12 >> 2] | 0;
    do if ($305) if ((HEAP32[$306 >> 2] | 0) < 1103) {
     $$129$2 = $920 + $922 | 0;
     break;
    } else {
     $$129$2 = $920 - $922 | 0;
     break;
    } else $$129$2 = $920; while (0);
    if (($285 | 0) >= ($$129$2 | 0)) {
     $330 = 1103;
     break;
    }
    $928 = HEAP32[$18 >> 2] | 0;
    $930 = HEAP32[$18 + 4 >> 2] | 0;
    do if ($305) if ((HEAP32[$306 >> 2] | 0) < 1102) {
     $$129$3 = $928 + $930 | 0;
     break;
    } else {
     $$129$3 = $928 - $930 | 0;
     break;
    } else $$129$3 = $928; while (0);
    $330 = ($285 | 0) < ($$129$3 | 0) ? 1101 : 1102;
   } else $330 = 1105; while (0);
   HEAP32[$306 >> 2] = $330;
   $331 = $0 + 14136 | 0;
   HEAP32[$331 >> 2] = $330;
   if ($332 | $305 ^ 1) {
    $$030200 = $$030201;
    $$pre$phi120Z2D = $331;
    $340 = $330;
    $344 = $332;
    $381 = $940;
   } else {
    if (!((HEAP32[$0 + 88 >> 2] | 0) == 0 & $330 >>> 0 > 1103)) {
     $$030200 = $$030201;
     $$pre$phi120Z2D = $331;
     $340 = $330;
     $344 = $332;
     $381 = $940;
     break;
    }
    HEAP32[$331 >> 2] = 1103;
    $$030200 = $$030201;
    $$pre$phi120Z2D = $331;
    $340 = 1103;
    $344 = $332;
    $381 = $940;
   }
  } while (0);
  $338 = HEAP32[$0 + 132 >> 2] | 0;
  if (($340 | 0) > ($338 | 0)) {
   HEAP32[$$pre$phi120Z2D >> 2] = $338;
   $943 = $338;
  } else $943 = $340;
  $342 = HEAP32[$0 + 128 >> 2] | 0;
  $343 = ($342 | 0) == -1e3;
  if ($343) $347 = $943; else {
   HEAP32[$$pre$phi120Z2D >> 2] = $342;
   $347 = $342;
  }
  if (($167 | 0) < 15e3 & ($344 ^ 1)) {
   $$149 = ($347 | 0) < 1103 ? $347 : 1103;
   HEAP32[$$pre$phi120Z2D >> 2] = $$149;
   $351 = $$149;
  } else $351 = $347;
  $348 = HEAP32[$104 >> 2] | 0;
  if (($348 | 0) < 24001 & ($351 | 0) > 1104) {
   HEAP32[$$pre$phi120Z2D >> 2] = 1104;
   $354 = 1104;
  } else $354 = $351;
  if (($348 | 0) < 16001 & ($354 | 0) > 1103) {
   HEAP32[$$pre$phi120Z2D >> 2] = 1103;
   $357 = 1103;
  } else $357 = $354;
  if (($348 | 0) < 12001 & ($357 | 0) > 1102) {
   HEAP32[$$pre$phi120Z2D >> 2] = 1102;
   $360 = 1102;
  } else $360 = $357;
  if (($348 | 0) < 8001 & ($360 | 0) > 1101) {
   HEAP32[$$pre$phi120Z2D >> 2] = 1101;
   $$pre105 = 1101;
  } else $$pre105 = $360;
  $361 = HEAP32[$362 >> 2] | 0;
  if (!(($361 | 0) == 0 | $343 ^ 1)) {
   $364 = HEAP32[$$pre$phiZ2D >> 2] | 0;
   do if (($285 | 0) > ($364 * 18e3 | 0) | $344 ^ 1) {
    if (!(($285 | 0) > ($364 * 24e3 | 0) | $344 ^ 1)) {
     $$3 = 1102;
     break;
    }
    if (($285 | 0) <= ($364 * 3e4 | 0)) {
     $$3 = 1103;
     break;
    }
    $$3 = ($285 | 0) > ($364 * 44e3 | 0) ? 1105 : 1104;
   } else $$3 = 1101; while (0);
   $$$3 = ($361 | 0) > ($$3 | 0) ? $361 : $$3;
   HEAP32[$362 >> 2] = $$$3;
   HEAP32[$$pre$phi120Z2D >> 2] = ($$pre105 | 0) < ($$$3 | 0) ? $$pre105 : $$$3;
  }
  $379 = $0 + 52 | 0;
  HEAP32[$379 >> 2] = _decide_fec(HEAP32[$0 + 48 >> 2] | 0, HEAP32[$170 >> 2] | 0, HEAP32[$379 >> 2] | 0, $381, $$pre$phi120Z2D, $285) | 0;
  HEAP32[$vararg_buffer1 >> 2] = $$126;
  _opus_custom_encoder_ctl($36, 4036, $vararg_buffer1) | 0;
  $383 = HEAP32[$$pre$phi119197Z2D >> 2] | 0;
  do if (($383 | 0) == 1002) {
   if ((HEAP32[$$pre$phi120Z2D >> 2] | 0) != 1102) break;
   HEAP32[$$pre$phi120Z2D >> 2] = 1103;
  } while (0);
  if (!(HEAP32[$257 >> 2] | 0)) $391 = HEAP32[$$pre$phi120Z2D >> 2] | 0; else {
   HEAP32[$$pre$phi120Z2D >> 2] = 1101;
   $391 = 1101;
  }
  do if (($383 | 0) == 1e3) {
   if (($391 | 0) <= 1103) {
    label = 146;
    break;
   }
   HEAP32[$$pre$phi119197Z2D >> 2] = 1001;
   $401 = 1001;
   label = 147;
  } else {
   $393 = $383;
   if (($393 | 0) != 1001) {
    $401 = $393;
    label = 147;
    break;
   }
   if (($391 | 0) >= 1104) {
    $401 = 1001;
    label = 147;
    break;
   }
   HEAP32[$$pre$phi119197Z2D >> 2] = 1e3;
   label = 146;
  } while (0);
  if ((label | 0) == 146) {
   $395 = HEAP32[$104 >> 2] | 0;
   $403 = $395;
   $425 = 1e3;
   $944 = ($395 | 0) / 50 | 0;
   label = 148;
  } else if ((label | 0) == 147) {
   $397 = HEAP32[$104 >> 2] | 0;
   $398 = ($397 | 0) / 50 | 0;
   if (($398 | 0) >= ($2 | 0) | ($401 | 0) == 1e3) {
    $403 = $397;
    $425 = $401;
    $944 = $398;
    label = 148;
   } else $$216 = $398;
  }
  do if ((label | 0) == 148) {
   if ((($403 * 3 | 0) / 50 | 0 | 0) < ($2 | 0)) {
    $409 = $403;
    if (($425 | 0) != 1e3) {
     $$216 = $944;
     break;
    }
    if ((($409 << 1 | 0) / 25 | 0 | 0) == ($2 | 0)) {
     $$216 = ($409 | 0) / 25 | 0;
     break;
    } else {
     $413 = $409 * 3 | 0;
     $$216 = (((($413 | 0) / 25 | 0 | 0) == ($2 | 0) ? $413 : $409) | 0) / 50 | 0;
     break;
    }
   }
   $421 = $0 + 14144 | 0;
   if (!(HEAP32[$421 >> 2] | 0)) {
    $$131 = $$030200;
    $$151 = $$050;
    $$336 = $$235;
   } else {
    HEAP32[$421 >> 2] = 0;
    $$131 = 1;
    $$151 = 1;
    $$336 = 1;
   }
   if (($425 | 0) == 1002 | ($$336 | 0) == 0) {
    $$043 = 0;
    $$639 = 0;
   } else {
    $429 = _compute_redundancy_bytes($$085, HEAP32[$103 >> 2] | 0, $106, HEAP32[$$pre$phiZ2D >> 2] | 0) | 0;
    $$043 = $429;
    $$639 = ($429 | 0) == 0 ? 0 : $$336;
   }
   $431 = $$085 - $$043 | 0;
   $435 = (Math_imul(HEAP32[$103 >> 2] | 0, $2) | 0) / ($403 << 3 | 0) | 0;
   $$165 = ($431 | 0) < ($435 | 0) ? $431 : $435;
   $437 = $3 + 1 | 0;
   $438 = $$085 + -1 | 0;
   _ec_enc_init($13, $437, $438);
   $439 = $$071 + $2 | 0;
   $441 = Math_imul($439, HEAP32[$92 >> 2] | 0) | 0;
   $442 = _llvm_stacksave() | 0;
   $443 = STACKTOP;
   STACKTOP = STACKTOP + ((1 * ($441 << 2) | 0) + 15 & -16) | 0;
   $444 = $0 + 172 | 0;
   $447 = HEAP32[$92 >> 2] | 0;
   _memcpy($443 | 0, $0 + 14176 + ((Math_imul((HEAP32[$444 >> 2] | 0) - $$071 | 0, $447) | 0) << 2) | 0, (Math_imul($$071, $447) | 0) << 2 | 0) | 0;
   if ((HEAP32[$$pre$phi119197Z2D >> 2] | 0) == 1002) {
    $455 = (_silk_lin2log(60) | 0) << 8;
    $$065 = $455;
    $474 = HEAP32[$92 >> 2] | 0;
   } else {
    $$065 = HEAP32[$34 + 8 >> 2] | 0;
    $474 = $447;
   }
   $458 = $0 + 14096 | 0;
   $459 = HEAP32[$458 >> 2] | 0;
   $460 = $$065 - $459 | 0;
   $467 = $459 + ((($460 >> 16) * 983 | 0) + ((($460 & 65535) * 983 | 0) >>> 16)) | 0;
   HEAP32[$458 >> 2] = $467;
   $470 = HEAP32[$104 >> 2] | 0;
   if ((HEAP32[$37 >> 2] | 0) == 2048) _hp_cutoff($1, _silk_log2lin($467 >> 8) | 0, $443 + ((Math_imul($$071, $474) | 0) << 2) | 0, $0 + 14104 | 0, $2, $474, $470); else _dc_reject($1, $443 + ((Math_imul($$071, $474) | 0) << 2) | 0, $0 + 14104 | 0, $2, $474, $470);
   do if ($11 | 0) {
    $481 = HEAP32[$92 >> 2] | 0;
    $483 = $443 + ((Math_imul($$071, $481) | 0) << 2) | 0;
    $484 = Math_imul($481, $2) | 0;
    $485 = +_celt_inner_prod_c_425($483, $483, $484);
    if (!(!($485 < 1.0e9) | ($485 != $485 | 0.0 != 0.0))) break;
    _memset($483 | 0, 0, $484 << 2 | 0) | 0;
    $489 = $0 + 14104 | 0;
    HEAP32[$489 >> 2] = 0;
    HEAP32[$489 + 4 >> 2] = 0;
    HEAP32[$489 + 8 >> 2] = 0;
    HEAP32[$489 + 12 >> 2] = 0;
   } while (0);
   L228 : do if ((HEAP32[$$pre$phi119197Z2D >> 2] | 0) == 1002) {
    $$284 = 1.0;
    $$346 = $$043;
    $$454 = $$151;
    $$581 = $391;
    $$942 = $$639;
    label = 228;
   } else {
    $493 = Math_imul(HEAP32[$92 >> 2] | 0, $2) | 0;
    $494 = _llvm_stacksave() | 0;
    $495 = STACKTOP;
    STACKTOP = STACKTOP + ((1 * ($493 << 1) | 0) + 15 & -16) | 0;
    $498 = Math_imul(($$165 << 3) + -8 | 0, $106) | 0;
    $499 = HEAP32[$$pre$phi119197Z2D >> 2] | 0;
    $500 = ($499 | 0) == 1001;
    do if ($500) {
     $507 = _compute_silk_rate_for_hybrid($498, $391, (HEAP32[$104 >> 2] | 0) == ($2 * 50 | 0) & 1, HEAP32[$107 >> 2] | 0, HEAP32[$379 >> 2] | 0) | 0;
     HEAP32[$0 + 36 >> 2] = $507;
     $510 = HEAP32[$0 + 14152 >> 2] | 0;
     if ($510 | 0) {
      $$183214 = 1.0;
      $533 = $510;
      $552 = $507;
      label = 174;
      break;
     }
     $$183212 = 1.0 - +Math_exp(+(+($507 - $498 | 0) * .0009765625 * .6931471805599453));
     $592 = $507;
    } else {
     HEAP32[$0 + 36 >> 2] = $498;
     $$pre110 = HEAP32[$0 + 14152 >> 2] | 0;
     if (!$$pre110) {
      $$183212 = 1.0;
      $592 = $498;
     } else {
      $$183214 = 1.0;
      $533 = $$pre110;
      $552 = $498;
      label = 174;
     }
    } while (0);
    do if ((label | 0) == 174) {
     if (!(HEAP32[$107 >> 2] | 0)) {
      $$183212 = $$183214;
      $592 = $552;
      break;
     }
     if (HEAP32[$257 >> 2] | 0) {
      $$183212 = $$183214;
      $592 = $552;
      break;
     }
     $526 = HEAP32[$$pre$phi120Z2D >> 2] | 0;
     switch ($526 | 0) {
     case 1101:
      {
       $$110 = 13;
       $$18 = 8.0e3;
       break;
      }
     case 1102:
      {
       $$110 = 15;
       $$18 = 12.0e3;
       break;
      }
     default:
      {
       $$110 = 17;
       $$18 = 16.0e3;
      }
     }
     $527 = HEAP32[$92 >> 2] | 0;
     $$011 = 0;
     $$012 = 0.0;
     while (1) {
      if (($$011 | 0) >= ($527 | 0)) break;
      $529 = $$011 * 21 | 0;
      $$113 = $$012;
      $$121 = 0;
      while (1) {
       if (($$121 | 0) >= ($$110 | 0)) break;
       $534 = +HEAPF32[$533 + ($529 + $$121 << 2) >> 2];
       $535 = $534 < .5;
       do if ($534 > -2.0 | $535 ^ 1) {
        if ($535) if ($534 > 0.0) $539 = $534; else {
         $$06 = $534;
         break;
        } else $539 = .5;
        $$06 = $539 * .5;
       } else $$06 = -2.0; while (0);
       $$113 = $$113 + $$06;
       $$121 = $$121 + 1 | 0;
      }
      $$011 = $$011 + 1 | 0;
      $$012 = $$113;
     }
     $549 = ~~($$18 * ($$012 / +($$110 | 0) * +($527 | 0) + .20000000298023224));
     $550 = $0 + 36 | 0;
     $553 = (Math_imul($552, -2) | 0) / 3 | 0;
     $$170 = ($549 | 0) > ($553 | 0) ? $549 : $553;
     if (($526 & -2 | 0) == 1104) {
      $558 = $552 + (($$170 * 3 | 0) / 5 | 0) | 0;
      HEAP32[$550 >> 2] = $558;
      $$183212 = $$183214;
      $592 = $558;
      break;
     } else {
      $559 = $552 + $$170 | 0;
      HEAP32[$550 >> 2] = $559;
      $$183212 = $$183214;
      $592 = $559;
      break;
     }
    } while (0);
    $561 = HEAP32[$104 >> 2] | 0;
    HEAP32[$0 + 32 >> 2] = ($2 * 1e3 | 0) / ($561 | 0) | 0;
    $564 = HEAP32[$92 >> 2] | 0;
    HEAP32[$0 + 8 >> 2] = $564;
    HEAP32[$0 + 12 >> 2] = HEAP32[$$pre$phiZ2D >> 2];
    $switch$selectcmp190 = ($391 | 0) == 1101;
    HEAP32[$0 + 28 >> 2] = $switch$selectcmp190 ? 8e3 : ($391 | 0) == 1102 ? 12e3 : 16e3;
    HEAP32[$0 + 24 >> 2] = $500 ? 16e3 : 8e3;
    $570 = $0 + 20 | 0;
    HEAP32[$570 >> 2] = 16e3;
    do if (($499 | 0) == 1e3) {
     if (($106 | 0) > 50) $$05 = ($$pre$phi125Z2D << 4 | 0) / 3 | 0; else $$05 = $167;
     if (($$05 | 0) >= 8e3) break;
     HEAP32[$570 >> 2] = 12e3;
     $576 = $0 + 28 | 0;
     HEAP32[$576 >> 2] = $switch$selectcmp190 ? 8e3 : 12e3;
     if (($$05 | 0) >= 7e3) break;
     HEAP32[$570 >> 2] = 8e3;
     HEAP32[$576 >> 2] = 8e3;
    } while (0);
    $578 = HEAP32[$107 >> 2] | 0;
    $579 = ($578 | 0) == 0;
    HEAP32[$0 + 60 >> 2] = $579 & 1;
    $583 = ($$085 << 3) + -8 | 0;
    $584 = $0 + 64 | 0;
    HEAP32[$584 >> 2] = $583;
    do if (($$639 | 0) != 0 & ($$043 | 0) > 1) {
     $589 = $583 - ($$043 << 3 | 1) | 0;
     HEAP32[$584 >> 2] = $589;
     if (!$500) {
      $595 = $589;
      break;
     }
     $590 = $589 + -20 | 0;
     HEAP32[$584 >> 2] = $590;
     $595 = $590;
    } else $595 = $583; while (0);
    do if ($579) {
     if (!$500) break;
     $593 = (Math_imul($592, $2) | 0) / ($561 | 0) | 0;
     HEAP32[$584 >> 2] = ($595 | 0) < ($593 | 0) ? $595 : $593;
    } else {
     if (!$500) break;
     $597 = (Math_imul($595, $561) | 0) / ($2 | 0) | 0;
     HEAP32[$584 >> 2] = (Math_imul(_compute_silk_rate_for_hybrid($597, $391, ($561 | 0) == ($2 * 50 | 0) & 1, $578, HEAP32[$379 >> 2] | 0) | 0, $2) | 0) / ($561 | 0) | 0;
    } while (0);
    if (!$$131) $632 = $564; else {
     HEAP32[$19 >> 2] = 0;
     $610 = ($561 | 0) / 400 | 0;
     $612 = Math_imul($564, (HEAP32[$444 >> 2] | 0) - (HEAP32[$0 + 116 >> 2] | 0) - $610 | 0) | 0;
     $613 = $0 + 14176 + ($612 << 2) | 0;
     $614 = HEAP32[$15 >> 2] | 0;
     _gain_fade($613, $613, 0.0, 1.0, HEAP32[$614 + 4 >> 2] | 0, $610, $564, HEAP32[$614 + 60 >> 2] | 0, $561);
     _memset($0 + 14176 | 0, 0, $612 << 2 | 0) | 0;
     $621 = HEAP32[$444 >> 2] | 0;
     $623 = Math_imul($621, HEAP32[$92 >> 2] | 0) | 0;
     $$222 = 0;
     while (1) {
      if (($$222 | 0) >= ($623 | 0)) break;
      HEAP16[$495 + ($$222 << 1) >> 1] = _FLOAT2INT16_426(+HEAPF32[$0 + 14176 + ($$222 << 2) >> 2]) | 0;
      $$222 = $$222 + 1 | 0;
     }
     _silk_Encode($34, $0 + 8 | 0, $495, $621, 0, $19, 1) | 0;
     $632 = HEAP32[$92 >> 2] | 0;
    }
    $631 = Math_imul($632, $2) | 0;
    $$323 = 0;
    while (1) {
     if (($$323 | 0) >= ($631 | 0)) break;
     HEAP16[$495 + ($$323 << 1) >> 1] = _FLOAT2INT16_426(+HEAPF32[$443 + ((Math_imul($$071, $632) | 0) + $$323 << 2) >> 2]) | 0;
     $$323 = $$323 + 1 | 0;
    }
    do if (!(_silk_Encode($34, $0 + 8 | 0, $495, $2, $13, $12, 0) | 0)) {
     $644 = HEAP32[$$pre$phi119197Z2D >> 2] | 0;
     L291 : do if (($644 | 0) == 1e3) {
      $647 = HEAP32[$0 + 80 >> 2] | 0;
      L293 : do if (($647 | 0) < 12e3) switch ($647 | 0) {
      case 8e3:
       {
        $$379 = 1101;
        break L291;
        break;
       }
      default:
       {}
      } else if (($647 | 0) < 16e3) {
       switch ($647 | 0) {
       case 12e3:
        break;
       default:
        break L293;
       }
       $$379 = 1102;
       break L291;
      } else {
       switch ($647 | 0) {
       case 16e3:
        break;
       default:
        break L293;
       }
       $$379 = 1103;
       break L291;
      } while (0);
      $$379 = $391;
     } else $$379 = $391; while (0);
     if (!(HEAP32[$0 + 96 >> 2] | 0)) $655 = 0; else $655 = (HEAP32[$0 + 18028 >> 2] | 0) == 0;
     HEAP32[$0 + 72 >> 2] = $655 & 1;
     if (!(HEAP32[$12 >> 2] | 0)) {
      HEAP32[$24 >> 2] = 0;
      HEAP8[$3 >> 0] = _gen_toc($644, (HEAP32[$104 >> 2] | 0) / ($2 | 0) | 0, $$379, HEAP32[$$pre$phiZ2D >> 2] | 0) | 0;
      $$0 = 1;
      break;
     }
     if ($655) {
      $665 = _compute_redundancy_bytes($$085, HEAP32[$103 >> 2] | 0, $106, HEAP32[$$pre$phiZ2D >> 2] | 0) | 0;
      HEAP32[$421 >> 2] = 1;
      $$245$ph = $665;
      $$353$ph = 0;
      $$841$ph = ($665 | 0) != 0 & 1;
     } else {
      $$245$ph = $$043;
      $$353$ph = $$151;
      $$841$ph = $$639;
     }
     _llvm_stackrestore($494 | 0);
     $$284 = $$183212;
     $$346 = $$245$ph;
     $$454 = $$353$ph;
     $$581 = $$379;
     $$942 = $$841$ph;
     label = 228;
     break L228;
    } else $$0 = -3; while (0);
    _llvm_stackrestore($494 | 0);
    $$1 = $$0;
   } while (0);
   L313 : do if ((label | 0) == 228) {
    switch ($$581 | 0) {
    case 1101:
     {
      $$03 = 13;
      break;
     }
    case 1103:
    case 1102:
     {
      $$03 = 17;
      break;
     }
    case 1104:
     {
      $$03 = 19;
      break;
     }
    default:
     $$03 = 21;
    }
    HEAP32[$vararg_buffer4 >> 2] = $$03;
    _opus_custom_encoder_ctl($36, 10012, $vararg_buffer4) | 0;
    HEAP32[$vararg_buffer7 >> 2] = HEAP32[$$pre$phiZ2D >> 2];
    _opus_custom_encoder_ctl($36, 10008, $vararg_buffer7) | 0;
    HEAP32[$vararg_buffer10 >> 2] = -1;
    _opus_custom_encoder_ctl($36, 4002, $vararg_buffer10) | 0;
    do if ((HEAP32[$$pre$phi119197Z2D >> 2] | 0) == 1e3) {
     $671 = HEAP32[$92 >> 2] | 0;
     $$alloca_mul101 = ((Math_imul($671, HEAP32[$104 >> 2] | 0) | 0) / 400 | 0) << 2;
     $675 = STACKTOP;
     STACKTOP = STACKTOP + ((1 * $$alloca_mul101 | 0) + 15 & -16) | 0;
     $709 = $671;
     $821 = $675;
    } else {
     HEAP32[$vararg_buffer13 >> 2] = 0;
     _opus_custom_encoder_ctl($36, 4006, $vararg_buffer13) | 0;
     HEAP32[$vararg_buffer16 >> 2] = (HEAP32[$0 + 76 >> 2] | 0) == 0 ? 2 : 0;
     _opus_custom_encoder_ctl($36, 10002, $vararg_buffer16) | 0;
     $682 = (HEAP32[$107 >> 2] | 0) == 0;
     do if ((HEAP32[$$pre$phi119197Z2D >> 2] | 0) == 1001) {
      if ($682) break;
      HEAP32[$vararg_buffer19 >> 2] = (HEAP32[$103 >> 2] | 0) - (HEAP32[$0 + 36 >> 2] | 0);
      _opus_custom_encoder_ctl($36, 4002, $vararg_buffer19) | 0;
      HEAP32[$vararg_buffer22 >> 2] = 0;
      _opus_custom_encoder_ctl($36, 4020, $vararg_buffer22) | 0;
     } else {
      if ($682) break;
      HEAP32[$vararg_buffer25 >> 2] = 1;
      _opus_custom_encoder_ctl($36, 4006, $vararg_buffer25) | 0;
      HEAP32[$vararg_buffer28 >> 2] = HEAP32[$0 + 152 >> 2];
      _opus_custom_encoder_ctl($36, 4020, $vararg_buffer28) | 0;
      HEAP32[$vararg_buffer31 >> 2] = HEAP32[$103 >> 2];
      _opus_custom_encoder_ctl($36, 4002, $vararg_buffer31) | 0;
     } while (0);
     $$pr = HEAP32[$$pre$phi119197Z2D >> 2] | 0;
     $690 = HEAP32[$92 >> 2] | 0;
     $691 = HEAP32[$104 >> 2] | 0;
     $693 = (Math_imul($690, $691) | 0) / 400 | 0;
     $694 = STACKTOP;
     STACKTOP = STACKTOP + ((1 * ($693 << 2) | 0) + 15 & -16) | 0;
     if (($$pr | 0) == 1e3) {
      $709 = $690;
      $821 = $694;
      break;
     }
     $696 = HEAP32[$260 >> 2] | 0;
     if (!(($$pr | 0) != ($696 | 0) & ($696 | 0) > 0)) {
      $709 = $690;
      $821 = $694;
      break;
     }
     _memcpy($694 | 0, $0 + 14176 + ((Math_imul((HEAP32[$444 >> 2] | 0) - $$071 - (($691 | 0) / 400 | 0) | 0, $690) | 0) << 2) | 0, $693 << 2 | 0) | 0;
     $709 = $690;
     $821 = $694;
    } while (0);
    $706 = HEAP32[$444 >> 2] | 0;
    $711 = $0 + 14176 | 0;
    if ((Math_imul($709, $706 - $439 | 0) | 0) > 0) {
     $716 = Math_imul($709, $706 - $2 - $$071 | 0) | 0;
     _memmove($711 | 0, $0 + 14176 + ((Math_imul($709, $2) | 0) << 2) | 0, $716 << 2 | 0) | 0;
     _memcpy($0 + 14176 + ($716 << 2) | 0, $443 | 0, (Math_imul($439, $709) | 0) << 2 | 0) | 0;
    } else _memcpy($711 | 0, $443 + ((Math_imul($439 - $706 | 0, $709) | 0) << 2) | 0, (Math_imul($706, $709) | 0) << 2 | 0) | 0;
    $726 = $0 + 14100 | 0;
    $727 = +HEAPF32[$726 >> 2];
    if ($727 < 1.0 | $$284 < 1.0) {
     $730 = HEAP32[$15 >> 2] | 0;
     _gain_fade($443, $443, $727, $$284, HEAP32[$730 + 4 >> 2] | 0, $2, HEAP32[$92 >> 2] | 0, HEAP32[$730 + 60 >> 2] | 0, HEAP32[$104 >> 2] | 0);
    }
    HEAPF32[$726 >> 2] = $$284;
    $737 = HEAP32[$$pre$phi119197Z2D >> 2] | 0;
    if (($737 | 0) == 1001) {
     if ((HEAP32[$$pre$phiZ2D >> 2] | 0) == 1) label = 249;
    } else label = 249;
    if ((label | 0) == 249) {
     if (($285 | 0) < 24e3) {
      $746 = 0;
      label = 251;
     } else {
      $742 = $285 + -24e3 | 0;
      if (($742 << 1 | 0) > 16384) $748 = 16384; else {
       $746 = $742;
       label = 251;
      }
     }
     if ((label | 0) == 251) $748 = $746 << 1;
     HEAP32[$0 + 92 >> 2] = $748;
    }
    do if (!(HEAP32[$0 + 14152 >> 2] | 0)) {
     if ((HEAP32[$92 >> 2] | 0) != 2) {
      $771 = $737;
      break;
     }
     $754 = $0 + 14092 | 0;
     $755 = HEAP16[$754 >> 1] | 0;
     $$phi$trans$insert113 = $0 + 92 | 0;
     $$pre114 = HEAP32[$$phi$trans$insert113 >> 2] | 0;
     if (!($755 << 16 >> 16 < 16384 | ($$pre114 | 0) < 16384)) {
      $771 = $737;
      break;
     }
     $762 = HEAP32[$15 >> 2] | 0;
     _stereo_fade($443, $443, +($755 << 16 >> 16) * .00006103515625, +($$pre114 | 0) * .00006103515625, HEAP32[$762 + 4 >> 2] | 0, $2, 2, HEAP32[$762 + 60 >> 2] | 0, HEAP32[$104 >> 2] | 0);
     HEAP16[$754 >> 1] = HEAP32[$$phi$trans$insert113 >> 2];
     $771 = HEAP32[$$pre$phi119197Z2D >> 2] | 0;
    } else $771 = $737; while (0);
    do if (($771 | 0) == 1002) label = 267; else {
     $$idx10 = $13 + 20 | 0;
     $$idx11 = $13 + 28 | 0;
     $773 = (_ec_tell_427(HEAP32[$$idx10 >> 2] | 0, HEAP32[$$idx11 >> 2] | 0) | 0) + 17 | 0;
     $774 = ($771 | 0) == 1001;
     if (($773 + ($774 ? 20 : 0) | 0) > (($$085 << 3) + -8 | 0)) {
      label = 267;
      break;
     }
     if ($774) _ec_enc_bit_logp($13, $$942, 12);
     if (!$$942) {
      label = 267;
      break;
     }
     _ec_enc_bit_logp($13, $$454, 1);
     $782 = (HEAP32[$$pre$phi119197Z2D >> 2] | 0) == 1001;
     $785 = _ec_tell_427(HEAP32[$$idx10 >> 2] | 0, HEAP32[$$idx11 >> 2] | 0) | 0;
     $$01 = $438 - ($785 + ($782 ? 18 : 7) >> 3) | 0;
     $$01$$346 = ($$01 | 0) < ($$346 | 0) ? $$01 : $$346;
     if (($$01$$346 | 0) < 2) {
      $946 = 2;
      label = 264;
     } else if (($$01$$346 | 0) > 257) $791 = 257; else {
      $946 = $$01$$346;
      label = 264;
     }
     if ((label | 0) == 264) $791 = $946;
     if (!$782) {
      $$1076 = $$942;
      $$649 = $791;
      break;
     }
     _ec_enc_uint($13, $791 + -2 | 0, 256);
     $$1076 = $$942;
     $$649 = $791;
    } while (0);
    if ((label | 0) == 267) {
     HEAP32[$421 >> 2] = 0;
     $$1076 = 0;
     $$649 = 0;
    }
    $792 = HEAP32[$$pre$phi119197Z2D >> 2] | 0;
    $$182 = ($792 | 0) == 1002 ? 0 : 17;
    if (($792 | 0) == 1e3) {
     $797 = (_ec_tell_427(HEAP32[$13 + 20 >> 2] | 0, HEAP32[$13 + 28 >> 2] | 0) | 0) + 7 >> 3;
     _ec_enc_done($13);
     $$055 = $797;
     $$327 = $797;
    } else {
     $798 = $438 - $$649 | 0;
     _ec_enc_shrink($13, $798);
     $$055 = $798;
     $$327 = 0;
    }
    $799 = ($$1076 | 0) == 0;
    if ($799) if ((HEAP32[$$pre$phi119197Z2D >> 2] | 0) == 1e3) label = 275; else label = 273; else label = 273;
    do if ((label | 0) == 273) {
     HEAP32[$vararg_buffer34 >> 2] = $16;
     _opus_custom_encoder_ctl($36, 10022, $vararg_buffer34) | 0;
     if ((HEAP32[$$pre$phi119197Z2D >> 2] | 0) != 1001) {
      label = 275;
      break;
     }
     HEAP32[$20 >> 2] = HEAP32[$0 + 100 >> 2];
     HEAP32[$20 + 4 >> 2] = HEAP32[$0 + 104 >> 2];
     HEAP32[$vararg_buffer37 >> 2] = $20;
     _opus_custom_encoder_ctl($36, 10028, $vararg_buffer37) | 0;
    } while (0);
    if ((label | 0) == 275) {
     HEAP32[$vararg_buffer40 >> 2] = 0;
     _opus_custom_encoder_ctl($36, 10028, $vararg_buffer40) | 0;
    }
    if (!($799 | ($$454 | 0) == 0)) {
     HEAP32[$vararg_buffer43 >> 2] = 0;
     _opus_custom_encoder_ctl($36, 10010, $vararg_buffer43) | 0;
     HEAP32[$vararg_buffer46 >> 2] = 0;
     _opus_custom_encoder_ctl($36, 4006, $vararg_buffer46) | 0;
     HEAP32[$vararg_buffer49 >> 2] = -1;
     _opus_custom_encoder_ctl($36, 4002, $vararg_buffer49) | 0;
     if ((_celt_encode_with_ec($36, $443, (HEAP32[$104 >> 2] | 0) / 200 | 0, $437 + $$055 | 0, $$649, 0) | 0) < 0) {
      $$1 = -3;
      break;
     }
     HEAP32[$vararg_buffer52 >> 2] = $14;
     _opus_custom_encoder_ctl($36, 4031, $vararg_buffer52) | 0;
     _opus_custom_encoder_ctl($36, 4028, $vararg_buffer55) | 0;
    }
    HEAP32[$vararg_buffer57 >> 2] = $$182;
    _opus_custom_encoder_ctl($36, 10010, $vararg_buffer57) | 0;
    $814 = HEAP32[$$pre$phi119197Z2D >> 2] | 0;
    do if (($814 | 0) == 1e3) label = 293; else {
     $816 = HEAP32[$260 >> 2] | 0;
     if (($814 | 0) != ($816 | 0) & ($816 | 0) > 0) {
      _opus_custom_encoder_ctl($36, 4028, $vararg_buffer60) | 0;
      _celt_encode_with_ec($36, $821, (HEAP32[$104 >> 2] | 0) / 400 | 0, $21, 2, 0) | 0;
      HEAP32[$vararg_buffer62 >> 2] = 0;
      _opus_custom_encoder_ctl($36, 10002, $vararg_buffer62) | 0;
     }
     if ((_ec_tell_427(HEAP32[$13 + 20 >> 2] | 0, HEAP32[$13 + 28 >> 2] | 0) | 0) > ($$055 << 3 | 0)) {
      label = 293;
      break;
     }
     do if (!($799 | ($$454 | 0) == 0)) {
      if ((HEAP32[$$pre$phi119197Z2D >> 2] | 0) != 1001) break;
      if (!(HEAP32[$107 >> 2] | 0)) break;
      HEAP32[$vararg_buffer65 >> 2] = (HEAP32[$103 >> 2] | 0) - (HEAP32[$0 + 36 >> 2] | 0);
      _opus_custom_encoder_ctl($36, 4002, $vararg_buffer65) | 0;
     } while (0);
     HEAP32[$vararg_buffer68 >> 2] = HEAP32[$107 >> 2];
     _opus_custom_encoder_ctl($36, 4006, $vararg_buffer68) | 0;
     $835 = _celt_encode_with_ec($36, $443, $2, 0, $$055, $13) | 0;
     if (($835 | 0) < 0) {
      $$1 = -3;
      break L313;
     }
     if ($799) {
      $$107883 = 0;
      $$586 = $835;
      break;
     }
     if (!$$454) {
      $$3588496 = $$055;
      $$58595 = $835;
      label = 295;
      break;
     }
     if ((HEAP32[$$pre$phi119197Z2D >> 2] | 0) != 1001) {
      $$107883 = $$1076;
      $$586 = $835;
      break;
     }
     if (!(HEAP32[$107 >> 2] | 0)) {
      $$107883 = $$1076;
      $$586 = $835;
      break;
     }
     _memmove($437 + $835 | 0, $437 + $$055 | 0, $$649 | 0) | 0;
     $$107883 = $$1076;
     $$586 = $835;
    } while (0);
    do if ((label | 0) == 293) {
     if ($799) {
      $$107883 = 0;
      $$586 = $$327;
      break;
     } else {
      $$35884 = $$055;
      $$585 = $$327;
     }
     if (!$$454) {
      $$3588496 = $$35884;
      $$58595 = $$585;
      label = 295;
     } else {
      $$107883 = $$1076;
      $$586 = $$585;
     }
    } while (0);
    if ((label | 0) == 295) {
     $845 = HEAP32[$104 >> 2] | 0;
     $846 = ($845 | 0) / 200 | 0;
     $847 = ($845 | 0) / 400 | 0;
     _opus_custom_encoder_ctl($36, 4028, $vararg_buffer71) | 0;
     HEAP32[$vararg_buffer73 >> 2] = 0;
     _opus_custom_encoder_ctl($36, 10010, $vararg_buffer73) | 0;
     HEAP32[$vararg_buffer76 >> 2] = 0;
     _opus_custom_encoder_ctl($36, 10002, $vararg_buffer76) | 0;
     HEAP32[$vararg_buffer79 >> 2] = 0;
     _opus_custom_encoder_ctl($36, 4006, $vararg_buffer79) | 0;
     HEAP32[$vararg_buffer82 >> 2] = -1;
     _opus_custom_encoder_ctl($36, 4002, $vararg_buffer82) | 0;
     if ((HEAP32[$$pre$phi119197Z2D >> 2] | 0) == 1001) {
      _ec_enc_shrink($13, $$58595);
      $$459 = $$58595;
     } else $$459 = $$3588496;
     $851 = $2 - $846 | 0;
     _celt_encode_with_ec($36, $443 + ((Math_imul(HEAP32[$92 >> 2] | 0, $851 - $847 | 0) | 0) << 2) | 0, $847, $22, 2, 0) | 0;
     if ((_celt_encode_with_ec($36, $443 + ((Math_imul(HEAP32[$92 >> 2] | 0, $851) | 0) << 2) | 0, $846, $437 + $$459 | 0, $$649, 0) | 0) < 0) {
      $$1 = -3;
      break;
     }
     HEAP32[$vararg_buffer85 >> 2] = $14;
     _opus_custom_encoder_ctl($36, 4031, $vararg_buffer85) | 0;
     $$107883 = $$1076;
     $$586 = $$58595;
    }
    HEAP8[$3 >> 0] = _gen_toc(HEAP32[$$pre$phi119197Z2D >> 2] | 0, (HEAP32[$104 >> 2] | 0) / ($2 | 0) | 0, $$581, HEAP32[$$pre$phiZ2D >> 2] | 0) | 0;
    $866 = $13 + 28 | 0;
    $867 = HEAP32[$866 >> 2] | 0;
    HEAP32[$24 >> 2] = $867 ^ HEAP32[$14 >> 2];
    if (!$$262) $$sink102 = HEAP32[$$pre$phi119197Z2D >> 2] | 0; else $$sink102 = 1002;
    HEAP32[$260 >> 2] = $$sink102;
    HEAP32[$0 + 14128 >> 2] = HEAP32[$$pre$phiZ2D >> 2];
    HEAP32[$0 + 14132 >> 2] = $2;
    HEAP32[$0 + 14148 >> 2] = 0;
    do if (!(HEAP32[$0 + 184 >> 2] | 0)) $$idx1$val = $867; else {
     if (!(HEAP32[$16 >> 2] | $$19318195)) {
      $$idx1$val = $867;
      break;
     }
     if (!(_decide_dtx_mode(+HEAPF32[$16 + 32 >> 2], $0 + 18020 | 0, +HEAPF32[$0 + 18024 >> 2], $1, $2, HEAP32[$92 >> 2] | 0, $$19318195) | 0)) {
      $$idx1$val = HEAP32[$866 >> 2] | 0;
      break;
     } else {
      HEAP32[$24 >> 2] = 0;
      HEAP8[$3 >> 0] = _gen_toc(HEAP32[$$pre$phi119197Z2D >> 2] | 0, (HEAP32[$104 >> 2] | 0) / ($2 | 0) | 0, $$581, HEAP32[$$pre$phiZ2D >> 2] | 0) | 0;
      $$1 = 1;
      break L313;
     }
    } while (0);
    L422 : do if ((_ec_tell_427(HEAP32[$13 + 20 >> 2] | 0, $$idx1$val) | 0) > (($$085 << 3) + -8 | 0)) {
     if (($$085 | 0) < 2) {
      $$1 = -2;
      break L313;
     }
     HEAP8[$437 >> 0] = 0;
     HEAP32[$24 >> 2] = 0;
     $$8 = 1;
    } else {
     if ((HEAP32[$$pre$phi119197Z2D >> 2] | 0) == 1e3 & ($$107883 | 0) == 0) $$6 = $$586; else {
      $$8 = $$586;
      break;
     }
     while (1) {
      if (($$6 | 0) <= 2) {
       $$8 = $$6;
       break L422;
      }
      if (HEAP8[$3 + $$6 >> 0] | 0) {
       $$8 = $$6;
       break L422;
      }
      $$6 = $$6 + -1 | 0;
     }
    } while (0);
    $909 = $$8 + ($$649 + 1) | 0;
    if (!(HEAP32[$107 >> 2] | 0)) if (!(_opus_packet_pad($3, $909, $$085) | 0)) $$9 = $$085; else {
     $$1 = -3;
     break;
    } else $$9 = $909;
    $$1 = $$9;
   } while (0);
   _llvm_stackrestore($442 | 0);
   $$2 = $$1;
   STACKTOP = sp;
   return $$2 | 0;
  } while (0);
  if (($$18922193 | 0) != -1) {
   HEAP32[$0 + 8464 >> 2] = $$18922193;
   HEAP32[$0 + 8468 >> 2] = $$19120194;
  }
  $$2 = _encode_multiframe_packet($0, $1, ($2 | 0) / ($$216 | 0) | 0, $$216, $3, $4, $$262, $$126, $11) | 0;
  STACKTOP = sp;
  return $$2 | 0;
 } while (0);
 $131 = HEAP32[$0 + 14120 >> 2] | 0;
 $133 = HEAP32[$0 + 14136 >> 2] | 0;
 $$134 = ($133 | 0) == 0 ? 1101 : $133;
 $$0100 = ($131 | 0) == 0 ? 1e3 : $131;
 L442 : do if (($106 | 0) > 100) {
  $$1993692 = 0;
  $$21093094 = 0;
  $$2743991 = $106;
  label = 39;
 } else {
  do if (($106 | 0) == 25) if (($$0100 | 0) == 1e3) {
   $$19937 = 0;
   $$210931 = 0;
   $$27440 = 25;
  } else {
   $$199 = 0;
   $$2109 = 1;
   $$274 = 50;
   label = 37;
  } else if (($106 | 0) < 17) {
   if (($4 | 0) != 1) if (($$0100 | 0) != 1e3 | ($106 | 0) == 10) {
    $$199 = 50 / ($106 | 0) | 0;
    $$2109 = 3;
    $$274 = 50;
    label = 37;
    break;
   }
   $$19937 = 0;
   $$210931 = ($106 | 0) < 13 & 1;
   $$27440 = ($106 | 0) == 12 ? 25 : 16;
  } else {
   $$199 = 0;
   $$2109 = 0;
   $$274 = $106;
   label = 37;
  } while (0);
  L452 : do if ((label | 0) == 37) {
   switch ($$0100 | 0) {
   case 1002:
    {
     $$1993692 = $$199;
     $$21093094 = $$2109;
     $$2743991 = $$274;
     label = 39;
     break L442;
     break;
    }
   case 1e3:
    {
     $$19937 = $$199;
     $$210931 = $$2109;
     $$27440 = $$274;
     break L452;
     break;
    }
   case 1001:
    break;
   default:
    {
     $$19935 = $$199;
     $$2106 = $$134;
     $$210929 = $$2109;
     $$27438 = $$274;
     $$310332 = $$0100;
     break L442;
    }
   }
   $$19935 = $$199;
   $$2106 = ($$134 | 0) > 1104 ? $$134 : 1104;
   $$210929 = $$2109;
   $$27438 = $$274;
   $$310332 = 1001;
   break L442;
  } while (0);
  if (($$134 | 0) > 1103) {
   $$19935 = $$19937;
   $$2106 = 1103;
   $$210929 = $$210931;
   $$27438 = $$27440;
   $$310332 = 1e3;
  } else {
   $$1993645$ph = $$19937;
   $$21093049$ph = $$210931;
   $$2743943$ph = $$27440;
   $$31033346$ph = 1e3;
   label = 40;
  }
 } while (0);
 if ((label | 0) == 39) if (($$134 | 0) == 1102) {
  $$19935 = $$1993692;
  $$2106 = 1101;
  $$210929 = $$21093094;
  $$27438 = $$2743991;
  $$310332 = 1002;
 } else {
  $$1993645$ph = $$1993692;
  $$21093049$ph = $$21093094;
  $$2743943$ph = $$2743991;
  $$31033346$ph = 1002;
  label = 40;
 }
 if ((label | 0) == 40) {
  $$19935 = $$1993645$ph;
  $$2106 = $$134;
  $$210929 = $$21093049$ph;
  $$27438 = $$2743943$ph;
  $$310332 = $$31033346$ph;
 }
 HEAP8[$3 >> 0] = (_gen_toc($$310332, $$27438, $$2106, HEAP32[$0 + 14088 >> 2] | 0) | 0) & 255 | $$210929;
 $158 = ($$210929 | 0) < 2 ? 1 : 2;
 $$08524$ = ($$08524 | 0) > ($158 | 0) ? $$08524 : $158;
 if (($$210929 | 0) == 3) HEAP8[$3 + 1 >> 0] = $$19935;
 if (!(HEAP32[$107 >> 2] | 0)) {
  $166 = (_opus_packet_pad($3, $158, $$08524$) | 0) == 0;
  STACKTOP = sp;
  return ($166 ? $$08524$ : -3) | 0;
 } else {
  $$2 = $158;
  STACKTOP = sp;
  return $$2 | 0;
 }
 return 0;
}

function _malloc($0) {
 $0 = $0 | 0;
 var $$$0192$i = 0, $$$0193$i = 0, $$$4351$i = 0, $$$i = 0, $$0 = 0, $$0$i$i = 0, $$0$i$i$i = 0, $$0$i18$i = 0, $$01$i$i = 0, $$0189$i = 0, $$0192$lcssa$i = 0, $$01928$i = 0, $$0193$lcssa$i = 0, $$01937$i = 0, $$0197 = 0, $$0199 = 0, $$0206$i$i = 0, $$0207$i$i = 0, $$0211$i$i = 0, $$0212$i$i = 0, $$024371$i = 0, $$0287$i$i = 0, $$0288$i$i = 0, $$0289$i$i = 0, $$0295$i$i = 0, $$0296$i$i = 0, $$0342$i = 0, $$0344$i = 0, $$0345$i = 0, $$0347$i = 0, $$0353$i = 0, $$0358$i = 0, $$0359$i = 0, $$0361$i = 0, $$0362$i = 0, $$0368$i = 0, $$1196$i = 0, $$1198$i = 0, $$124470$i = 0, $$1291$i$i = 0, $$1293$i$i = 0, $$1343$i = 0, $$1348$i = 0, $$1363$i = 0, $$1370$i = 0, $$1374$i = 0, $$2234253237$i = 0, $$2247$ph$i = 0, $$2253$ph$i = 0, $$2355$i = 0, $$3$i = 0, $$3$i$i = 0, $$3$i201 = 0, $$3350$i = 0, $$3372$i = 0, $$4$lcssa$i = 0, $$4$ph$i = 0, $$415$i = 0, $$4236$i = 0, $$4351$lcssa$i = 0, $$435114$i = 0, $$4357$$4$i = 0, $$4357$ph$i = 0, $$435713$i = 0, $$723948$i = 0, $$749$i = 0, $$pre$phi$i$iZ2D = 0, $$pre$phi$i20$iZ2D = 0, $$pre$phi$i211Z2D = 0, $$pre$phi$iZ2D = 0, $$pre$phi11$i$iZ2D = 0, $$pre$phiZ2D = 0, $1 = 0, $1001 = 0, $1007 = 0, $101 = 0, $1010 = 0, $1011 = 0, $102 = 0, $1029 = 0, $1031 = 0, $1038 = 0, $1039 = 0, $1040 = 0, $1048 = 0, $1050 = 0, $1051 = 0, $1052 = 0, $108 = 0, $112 = 0, $114 = 0, $115 = 0, $117 = 0, $119 = 0, $121 = 0, $123 = 0, $125 = 0, $127 = 0, $129 = 0, $134 = 0, $138 = 0, $14 = 0, $142 = 0, $145 = 0, $148 = 0, $149 = 0, $155 = 0, $157 = 0, $16 = 0, $160 = 0, $162 = 0, $165 = 0, $167 = 0, $17 = 0, $170 = 0, $173 = 0, $174 = 0, $176 = 0, $177 = 0, $179 = 0, $18 = 0, $180 = 0, $182 = 0, $183 = 0, $188 = 0, $189 = 0, $19 = 0, $20 = 0, $201 = 0, $205 = 0, $211 = 0, $218 = 0, $222 = 0, $231 = 0, $232 = 0, $234 = 0, $235 = 0, $239 = 0, $240 = 0, $248 = 0, $249 = 0, $250 = 0, $252 = 0, $253 = 0, $258 = 0, $259 = 0, $262 = 0, $264 = 0, $267 = 0, $27 = 0, $272 = 0, $279 = 0, $289 = 0, $293 = 0, $299 = 0, $30 = 0, $303 = 0, $306 = 0, $310 = 0, $312 = 0, $313 = 0, $315 = 0, $317 = 0, $319 = 0, $321 = 0, $323 = 0, $325 = 0, $327 = 0, $337 = 0, $338 = 0, $34 = 0, $348 = 0, $350 = 0, $353 = 0, $355 = 0, $358 = 0, $360 = 0, $363 = 0, $366 = 0, $367 = 0, $369 = 0, $37 = 0, $370 = 0, $372 = 0, $373 = 0, $375 = 0, $376 = 0, $381 = 0, $382 = 0, $387 = 0, $394 = 0, $398 = 0, $404 = 0, $41 = 0, $411 = 0, $415 = 0, $423 = 0, $426 = 0, $427 = 0, $428 = 0, $432 = 0, $433 = 0, $439 = 0, $44 = 0, $444 = 0, $445 = 0, $448 = 0, $450 = 0, $453 = 0, $458 = 0, $464 = 0, $466 = 0, $468 = 0, $47 = 0, $470 = 0, $487 = 0, $489 = 0, $49 = 0, $496 = 0, $497 = 0, $498 = 0, $50 = 0, $506 = 0, $508 = 0, $509 = 0, $511 = 0, $52 = 0, $520 = 0, $524 = 0, $526 = 0, $527 = 0, $528 = 0, $538 = 0, $539 = 0, $54 = 0, $540 = 0, $541 = 0, $542 = 0, $543 = 0, $544 = 0, $546 = 0, $548 = 0, $549 = 0, $555 = 0, $557 = 0, $559 = 0, $56 = 0, $564 = 0, $566 = 0, $568 = 0, $569 = 0, $570 = 0, $578 = 0, $579 = 0, $58 = 0, $582 = 0, $586 = 0, $589 = 0, $591 = 0, $597 = 0, $6 = 0, $60 = 0, $601 = 0, $605 = 0, $614 = 0, $615 = 0, $62 = 0, $621 = 0, $623 = 0, $627 = 0, $630 = 0, $632 = 0, $637 = 0, $64 = 0, $643 = 0, $648 = 0, $649 = 0, $650 = 0, $656 = 0, $657 = 0, $658 = 0, $662 = 0, $67 = 0, $673 = 0, $678 = 0, $679 = 0, $681 = 0, $687 = 0, $689 = 0, $69 = 0, $693 = 0, $699 = 0, $7 = 0, $70 = 0, $703 = 0, $709 = 0, $71 = 0, $711 = 0, $717 = 0, $72 = 0, $721 = 0, $722 = 0, $727 = 0, $73 = 0, $733 = 0, $738 = 0, $741 = 0, $742 = 0, $745 = 0, $747 = 0, $749 = 0, $752 = 0, $763 = 0, $768 = 0, $77 = 0, $770 = 0, $773 = 0, $775 = 0, $778 = 0, $781 = 0, $782 = 0, $783 = 0, $785 = 0, $787 = 0, $788 = 0, $790 = 0, $791 = 0, $796 = 0, $797 = 0, $8 = 0, $80 = 0, $810 = 0, $813 = 0, $814 = 0, $820 = 0, $828 = 0, $834 = 0, $837 = 0, $838 = 0, $839 = 0, $84 = 0, $843 = 0, $844 = 0, $850 = 0, $855 = 0, $856 = 0, $859 = 0, $861 = 0, $864 = 0, $869 = 0, $87 = 0, $875 = 0, $877 = 0, $879 = 0, $880 = 0, $898 = 0, $9 = 0, $900 = 0, $907 = 0, $908 = 0, $909 = 0, $916 = 0, $92 = 0, $920 = 0, $924 = 0, $926 = 0, $93 = 0, $932 = 0, $933 = 0, $935 = 0, $936 = 0, $940 = 0, $945 = 0, $946 = 0, $947 = 0, $95 = 0, $953 = 0, $955 = 0, $96 = 0, $961 = 0, $966 = 0, $969 = 0, $970 = 0, $971 = 0, $975 = 0, $976 = 0, $98 = 0, $982 = 0, $987 = 0, $988 = 0, $991 = 0, $993 = 0, $996 = 0, label = 0, sp = 0, $955$looptemp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 $1 = sp;
 do if ($0 >>> 0 < 245) {
  $6 = $0 >>> 0 < 11 ? 16 : $0 + 11 & -8;
  $7 = $6 >>> 3;
  $8 = HEAP32[8424] | 0;
  $9 = $8 >>> $7;
  if ($9 & 3 | 0) {
   $14 = ($9 & 1 ^ 1) + $7 | 0;
   $16 = 33736 + ($14 << 1 << 2) | 0;
   $17 = $16 + 8 | 0;
   $18 = HEAP32[$17 >> 2] | 0;
   $19 = $18 + 8 | 0;
   $20 = HEAP32[$19 >> 2] | 0;
   do if (($16 | 0) == ($20 | 0)) HEAP32[8424] = $8 & ~(1 << $14); else {
    if ($20 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort();
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
  $37 = HEAP32[8426] | 0;
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
    $69 = 33736 + ($67 << 1 << 2) | 0;
    $70 = $69 + 8 | 0;
    $71 = HEAP32[$70 >> 2] | 0;
    $72 = $71 + 8 | 0;
    $73 = HEAP32[$72 >> 2] | 0;
    do if (($69 | 0) == ($73 | 0)) {
     $77 = $8 & ~(1 << $67);
     HEAP32[8424] = $77;
     $98 = $77;
    } else {
     if ($73 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort();
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
     $92 = HEAP32[8429] | 0;
     $93 = $37 >>> 3;
     $95 = 33736 + ($93 << 1 << 2) | 0;
     $96 = 1 << $93;
     if (!($98 & $96)) {
      HEAP32[8424] = $98 | $96;
      $$0199 = $95;
      $$pre$phiZ2D = $95 + 8 | 0;
     } else {
      $101 = $95 + 8 | 0;
      $102 = HEAP32[$101 >> 2] | 0;
      if ($102 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort(); else {
       $$0199 = $102;
       $$pre$phiZ2D = $101;
      }
     }
     HEAP32[$$pre$phiZ2D >> 2] = $92;
     HEAP32[$$0199 + 12 >> 2] = $92;
     HEAP32[$92 + 8 >> 2] = $$0199;
     HEAP32[$92 + 12 >> 2] = $95;
    }
    HEAP32[8426] = $84;
    HEAP32[8429] = $87;
    $$0 = $72;
    STACKTOP = sp;
    return $$0 | 0;
   }
   $108 = HEAP32[8425] | 0;
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
    $134 = HEAP32[34e3 + (($117 | $114 | $121 | $125 | $129) + ($127 >>> $129) << 2) >> 2] | 0;
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
    $155 = HEAP32[8428] | 0;
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
     $189 = 34e3 + ($188 << 2) | 0;
     do if (($$0192$lcssa$i | 0) == (HEAP32[$189 >> 2] | 0)) {
      HEAP32[$189 >> 2] = $$3$i;
      if (!$$3$i) {
       HEAP32[8425] = $108 & ~(1 << $188);
       break L73;
      }
     } else if ($160 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort(); else {
      HEAP32[$160 + 16 + (((HEAP32[$160 + 16 >> 2] | 0) != ($$0192$lcssa$i | 0) & 1) << 2) >> 2] = $$3$i;
      if (!$$3$i) break L73; else break;
     } while (0);
     $201 = HEAP32[8428] | 0;
     if ($$3$i >>> 0 < $201 >>> 0) _abort();
     HEAP32[$$3$i + 24 >> 2] = $160;
     $205 = HEAP32[$$0192$lcssa$i + 16 >> 2] | 0;
     do if ($205 | 0) if ($205 >>> 0 < $201 >>> 0) _abort(); else {
      HEAP32[$$3$i + 16 >> 2] = $205;
      HEAP32[$205 + 24 >> 2] = $$3$i;
      break;
     } while (0);
     $211 = HEAP32[$$0192$lcssa$i + 20 >> 2] | 0;
     if ($211 | 0) if ($211 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort(); else {
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
      $231 = HEAP32[8429] | 0;
      $232 = $37 >>> 3;
      $234 = 33736 + ($232 << 1 << 2) | 0;
      $235 = 1 << $232;
      if (!($8 & $235)) {
       HEAP32[8424] = $8 | $235;
       $$0189$i = $234;
       $$pre$phi$iZ2D = $234 + 8 | 0;
      } else {
       $239 = $234 + 8 | 0;
       $240 = HEAP32[$239 >> 2] | 0;
       if ($240 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort(); else {
        $$0189$i = $240;
        $$pre$phi$iZ2D = $239;
       }
      }
      HEAP32[$$pre$phi$iZ2D >> 2] = $231;
      HEAP32[$$0189$i + 12 >> 2] = $231;
      HEAP32[$231 + 8 >> 2] = $$0189$i;
      HEAP32[$231 + 12 >> 2] = $234;
     }
     HEAP32[8426] = $$0193$lcssa$i;
     HEAP32[8429] = $157;
    }
    $$0 = $$0192$lcssa$i + 8 | 0;
    STACKTOP = sp;
    return $$0 | 0;
   }
  } else $$0197 = $6;
 } else if ($0 >>> 0 > 4294967231) $$0197 = -1; else {
  $248 = $0 + 11 | 0;
  $249 = $248 & -8;
  $250 = HEAP32[8425] | 0;
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
   $279 = HEAP32[34e3 + ($$0358$i << 2) >> 2] | 0;
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
     $$4357$ph$i = HEAP32[34e3 + (($315 | $312 | $319 | $323 | $327) + ($325 >>> $327) << 2) >> 2] | 0;
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
   if (!$$4$lcssa$i) $$0197 = $249; else if ($$4351$lcssa$i >>> 0 < ((HEAP32[8426] | 0) - $249 | 0) >>> 0) {
    $348 = HEAP32[8428] | 0;
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
     $382 = 34e3 + ($381 << 2) | 0;
     do if (($$4$lcssa$i | 0) == (HEAP32[$382 >> 2] | 0)) {
      HEAP32[$382 >> 2] = $$3372$i;
      if (!$$3372$i) {
       $387 = $250 & ~(1 << $381);
       HEAP32[8425] = $387;
       $470 = $387;
       break L164;
      }
     } else if ($353 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort(); else {
      HEAP32[$353 + 16 + (((HEAP32[$353 + 16 >> 2] | 0) != ($$4$lcssa$i | 0) & 1) << 2) >> 2] = $$3372$i;
      if (!$$3372$i) {
       $470 = $250;
       break L164;
      } else break;
     } while (0);
     $394 = HEAP32[8428] | 0;
     if ($$3372$i >>> 0 < $394 >>> 0) _abort();
     HEAP32[$$3372$i + 24 >> 2] = $353;
     $398 = HEAP32[$$4$lcssa$i + 16 >> 2] | 0;
     do if ($398 | 0) if ($398 >>> 0 < $394 >>> 0) _abort(); else {
      HEAP32[$$3372$i + 16 >> 2] = $398;
      HEAP32[$398 + 24 >> 2] = $$3372$i;
      break;
     } while (0);
     $404 = HEAP32[$$4$lcssa$i + 20 >> 2] | 0;
     if (!$404) $470 = $250; else if ($404 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort(); else {
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
      $426 = 33736 + ($423 << 1 << 2) | 0;
      $427 = HEAP32[8424] | 0;
      $428 = 1 << $423;
      if (!($427 & $428)) {
       HEAP32[8424] = $427 | $428;
       $$0368$i = $426;
       $$pre$phi$i211Z2D = $426 + 8 | 0;
      } else {
       $432 = $426 + 8 | 0;
       $433 = HEAP32[$432 >> 2] | 0;
       if ($433 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort(); else {
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
     $464 = 34e3 + ($$0361$i << 2) | 0;
     HEAP32[$350 + 28 >> 2] = $$0361$i;
     $466 = $350 + 16 | 0;
     HEAP32[$466 + 4 >> 2] = 0;
     HEAP32[$466 >> 2] = 0;
     $468 = 1 << $$0361$i;
     if (!($470 & $468)) {
      HEAP32[8425] = $470 | $468;
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
     if ((label | 0) == 136) if ($487 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort(); else {
      HEAP32[$487 >> 2] = $350;
      HEAP32[$350 + 24 >> 2] = $$0345$i;
      HEAP32[$350 + 12 >> 2] = $350;
      HEAP32[$350 + 8 >> 2] = $350;
      break;
     } else if ((label | 0) == 139) {
      $496 = $$0345$i + 8 | 0;
      $497 = HEAP32[$496 >> 2] | 0;
      $498 = HEAP32[8428] | 0;
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
 $506 = HEAP32[8426] | 0;
 if ($506 >>> 0 >= $$0197 >>> 0) {
  $508 = $506 - $$0197 | 0;
  $509 = HEAP32[8429] | 0;
  if ($508 >>> 0 > 15) {
   $511 = $509 + $$0197 | 0;
   HEAP32[8429] = $511;
   HEAP32[8426] = $508;
   HEAP32[$511 + 4 >> 2] = $508 | 1;
   HEAP32[$511 + $508 >> 2] = $508;
   HEAP32[$509 + 4 >> 2] = $$0197 | 3;
  } else {
   HEAP32[8426] = 0;
   HEAP32[8429] = 0;
   HEAP32[$509 + 4 >> 2] = $506 | 3;
   $520 = $509 + $506 + 4 | 0;
   HEAP32[$520 >> 2] = HEAP32[$520 >> 2] | 1;
  }
  $$0 = $509 + 8 | 0;
  STACKTOP = sp;
  return $$0 | 0;
 }
 $524 = HEAP32[8427] | 0;
 if ($524 >>> 0 > $$0197 >>> 0) {
  $526 = $524 - $$0197 | 0;
  HEAP32[8427] = $526;
  $527 = HEAP32[8430] | 0;
  $528 = $527 + $$0197 | 0;
  HEAP32[8430] = $528;
  HEAP32[$528 + 4 >> 2] = $526 | 1;
  HEAP32[$527 + 4 >> 2] = $$0197 | 3;
  $$0 = $527 + 8 | 0;
  STACKTOP = sp;
  return $$0 | 0;
 }
 if (!(HEAP32[8542] | 0)) {
  HEAP32[8544] = 4096;
  HEAP32[8543] = 4096;
  HEAP32[8545] = -1;
  HEAP32[8546] = -1;
  HEAP32[8547] = 0;
  HEAP32[8535] = 0;
  $538 = $1 & -16 ^ 1431655768;
  HEAP32[$1 >> 2] = $538;
  HEAP32[8542] = $538;
  $542 = 4096;
 } else $542 = HEAP32[8544] | 0;
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
 $546 = HEAP32[8534] | 0;
 if ($546 | 0) {
  $548 = HEAP32[8532] | 0;
  $549 = $548 + $544 | 0;
  if ($549 >>> 0 <= $548 >>> 0 | $549 >>> 0 > $546 >>> 0) {
   $$0 = 0;
   STACKTOP = sp;
   return $$0 | 0;
  }
 }
 L244 : do if (!(HEAP32[8535] & 4)) {
  $555 = HEAP32[8430] | 0;
  L246 : do if (!$555) label = 163; else {
   $$0$i$i = 34144;
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
    $569 = HEAP32[8543] | 0;
    $570 = $569 + -1 | 0;
    $$$i = (($570 & $568 | 0) == 0 ? 0 : ($570 + $568 & 0 - $569) - $568 | 0) + $544 | 0;
    $578 = HEAP32[8532] | 0;
    $579 = $$$i + $578 | 0;
    if ($$$i >>> 0 > $$0197 >>> 0 & $$$i >>> 0 < 2147483647) {
     $582 = HEAP32[8534] | 0;
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
   $601 = HEAP32[8544] | 0;
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
  HEAP32[8535] = HEAP32[8535] | 4;
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
 $627 = (HEAP32[8532] | 0) + $$723948$i | 0;
 HEAP32[8532] = $627;
 if ($627 >>> 0 > (HEAP32[8533] | 0) >>> 0) HEAP32[8533] = $627;
 $630 = HEAP32[8430] | 0;
 do if (!$630) {
  $632 = HEAP32[8428] | 0;
  if (($632 | 0) == 0 | $$749$i >>> 0 < $632 >>> 0) HEAP32[8428] = $$749$i;
  HEAP32[8536] = $$749$i;
  HEAP32[8537] = $$723948$i;
  HEAP32[8539] = 0;
  HEAP32[8433] = HEAP32[8542];
  HEAP32[8432] = -1;
  $$01$i$i = 0;
  do {
   $637 = 33736 + ($$01$i$i << 1 << 2) | 0;
   HEAP32[$637 + 12 >> 2] = $637;
   HEAP32[$637 + 8 >> 2] = $637;
   $$01$i$i = $$01$i$i + 1 | 0;
  } while (($$01$i$i | 0) != 32);
  $643 = $$749$i + 8 | 0;
  $648 = ($643 & 7 | 0) == 0 ? 0 : 0 - $643 & 7;
  $649 = $$749$i + $648 | 0;
  $650 = $$723948$i + -40 - $648 | 0;
  HEAP32[8430] = $649;
  HEAP32[8427] = $650;
  HEAP32[$649 + 4 >> 2] = $650 | 1;
  HEAP32[$649 + $650 + 4 >> 2] = 40;
  HEAP32[8431] = HEAP32[8546];
 } else {
  $$024371$i = 34144;
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
   $681 = (HEAP32[8427] | 0) + ($$723948$i - $678) | 0;
   HEAP32[8430] = $679;
   HEAP32[8427] = $681;
   HEAP32[$679 + 4 >> 2] = $681 | 1;
   HEAP32[$679 + $681 + 4 >> 2] = 40;
   HEAP32[8431] = HEAP32[8546];
   break;
  }
  $687 = HEAP32[8428] | 0;
  if ($$749$i >>> 0 < $687 >>> 0) {
   HEAP32[8428] = $$749$i;
   $752 = $$749$i;
  } else $752 = $687;
  $689 = $$749$i + $$723948$i | 0;
  $$124470$i = 34144;
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
    $727 = (HEAP32[8427] | 0) + $722 | 0;
    HEAP32[8427] = $727;
    HEAP32[8430] = $721;
    HEAP32[$721 + 4 >> 2] = $727 | 1;
   } else {
    if (($717 | 0) == (HEAP32[8429] | 0)) {
     $733 = (HEAP32[8426] | 0) + $722 | 0;
     HEAP32[8426] = $733;
     HEAP32[8429] = $721;
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
      $749 = 33736 + ($742 << 1 << 2) | 0;
      do if (($745 | 0) != ($749 | 0)) {
       if ($745 >>> 0 < $752 >>> 0) _abort();
       if ((HEAP32[$745 + 12 >> 2] | 0) == ($717 | 0)) break;
       _abort();
      } while (0);
      if (($747 | 0) == ($745 | 0)) {
       HEAP32[8424] = HEAP32[8424] & ~(1 << $742);
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
      $797 = 34e3 + ($796 << 2) | 0;
      do if (($717 | 0) == (HEAP32[$797 >> 2] | 0)) {
       HEAP32[$797 >> 2] = $$3$i$i;
       if ($$3$i$i | 0) break;
       HEAP32[8425] = HEAP32[8425] & ~(1 << $796);
       break L316;
      } else if ($768 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort(); else {
       HEAP32[$768 + 16 + (((HEAP32[$768 + 16 >> 2] | 0) != ($717 | 0) & 1) << 2) >> 2] = $$3$i$i;
       if (!$$3$i$i) break L316; else break;
      } while (0);
      $810 = HEAP32[8428] | 0;
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
      if ($820 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort(); else {
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
     $837 = 33736 + ($834 << 1 << 2) | 0;
     $838 = HEAP32[8424] | 0;
     $839 = 1 << $834;
     do if (!($838 & $839)) {
      HEAP32[8424] = $838 | $839;
      $$0295$i$i = $837;
      $$pre$phi$i20$iZ2D = $837 + 8 | 0;
     } else {
      $843 = $837 + 8 | 0;
      $844 = HEAP32[$843 >> 2] | 0;
      if ($844 >>> 0 >= (HEAP32[8428] | 0) >>> 0) {
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
    $875 = 34e3 + ($$0296$i$i << 2) | 0;
    HEAP32[$721 + 28 >> 2] = $$0296$i$i;
    $877 = $721 + 16 | 0;
    HEAP32[$877 + 4 >> 2] = 0;
    HEAP32[$877 >> 2] = 0;
    $879 = HEAP32[8425] | 0;
    $880 = 1 << $$0296$i$i;
    if (!($879 & $880)) {
     HEAP32[8425] = $879 | $880;
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
    if ((label | 0) == 262) if ($898 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort(); else {
     HEAP32[$898 >> 2] = $721;
     HEAP32[$721 + 24 >> 2] = $$0289$i$i;
     HEAP32[$721 + 12 >> 2] = $721;
     HEAP32[$721 + 8 >> 2] = $721;
     break;
    } else if ((label | 0) == 265) {
     $907 = $$0289$i$i + 8 | 0;
     $908 = HEAP32[$907 >> 2] | 0;
     $909 = HEAP32[8428] | 0;
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
  $$0$i$i$i = 34144;
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
  HEAP32[8430] = $946;
  HEAP32[8427] = $947;
  HEAP32[$946 + 4 >> 2] = $947 | 1;
  HEAP32[$946 + $947 + 4 >> 2] = 40;
  HEAP32[8431] = HEAP32[8546];
  $953 = $935 + 4 | 0;
  HEAP32[$953 >> 2] = 27;
  HEAP32[$936 >> 2] = HEAP32[8536];
  HEAP32[$936 + 4 >> 2] = HEAP32[8537];
  HEAP32[$936 + 8 >> 2] = HEAP32[8538];
  HEAP32[$936 + 12 >> 2] = HEAP32[8539];
  HEAP32[8536] = $$749$i;
  HEAP32[8537] = $$723948$i;
  HEAP32[8539] = 0;
  HEAP32[8538] = $936;
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
    $969 = 33736 + ($966 << 1 << 2) | 0;
    $970 = HEAP32[8424] | 0;
    $971 = 1 << $966;
    if (!($970 & $971)) {
     HEAP32[8424] = $970 | $971;
     $$0211$i$i = $969;
     $$pre$phi$i$iZ2D = $969 + 8 | 0;
    } else {
     $975 = $969 + 8 | 0;
     $976 = HEAP32[$975 >> 2] | 0;
     if ($976 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort(); else {
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
   $1007 = 34e3 + ($$0212$i$i << 2) | 0;
   HEAP32[$630 + 28 >> 2] = $$0212$i$i;
   HEAP32[$630 + 20 >> 2] = 0;
   HEAP32[$933 >> 2] = 0;
   $1010 = HEAP32[8425] | 0;
   $1011 = 1 << $$0212$i$i;
   if (!($1010 & $1011)) {
    HEAP32[8425] = $1010 | $1011;
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
   if ((label | 0) == 289) if ($1029 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort(); else {
    HEAP32[$1029 >> 2] = $630;
    HEAP32[$630 + 24 >> 2] = $$0207$i$i;
    HEAP32[$630 + 12 >> 2] = $630;
    HEAP32[$630 + 8 >> 2] = $630;
    break;
   } else if ((label | 0) == 292) {
    $1038 = $$0207$i$i + 8 | 0;
    $1039 = HEAP32[$1038 >> 2] | 0;
    $1040 = HEAP32[8428] | 0;
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
 $1048 = HEAP32[8427] | 0;
 if ($1048 >>> 0 <= $$0197 >>> 0) {
  $$0 = 0;
  STACKTOP = sp;
  return $$0 | 0;
 }
 $1050 = $1048 - $$0197 | 0;
 HEAP32[8427] = $1050;
 $1051 = HEAP32[8430] | 0;
 $1052 = $1051 + $$0197 | 0;
 HEAP32[8430] = $1052;
 HEAP32[$1052 + 4 >> 2] = $1050 | 1;
 HEAP32[$1051 + 4 >> 2] = $$0197 | 3;
 $$0 = $1051 + 8 | 0;
 STACKTOP = sp;
 return $$0 | 0;
}

function _celt_encode_with_ec($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$ = 0, $$0101$ph = 0, $$0101261 = 0, $$0102$ph = 0.0, $$0102272 = 0.0, $$0103 = 0.0, $$019 = 0, $$024 = 0, $$03 = 0, $$03$ = 0, $$032 = 0.0, $$033 = 0, $$034 = 0, $$039 = 0, $$04 = 0, $$043 = 0, $$044 = 0.0, $$045 = 0, $$046 = 0.0, $$051 = 0, $$059 = 0.0, $$059$in = 0, $$060 = 0.0, $$062 = 0, $$064 = 0, $$066 = 0, $$069 = 0, $$071 = 0, $$072 = 0, $$074 = 0, $$076 = 0, $$08 = 0, $$08$idx$val = 0, $$08$idx106$val = 0, $$08$idx107$val = 0, $$08$idx108$val = 0, $$08$idx109$val = 0, $$08$idx110$val = 0, $$08$idx111$val = 0, $$08$idx111$val177 = 0, $$08$idx111$val178 = 0, $$08$idx111$val179 = 0, $$08$idx111$val180 = 0, $$08$idx112$val = 0, $$08$idx112$val182 = 0, $$08$idx112$val183 = 0, $$08$idx112$val184 = 0, $$08$idx112$val185 = 0, $$08$idx115 = 0, $$08$idx116 = 0, $$08$idx117$val = 0, $$08$idx118$val = 0, $$08$idx119 = 0, $$08$idx119$val = 0, $$08$idx120 = 0, $$08$idx120$val = 0, $$08$idx123 = 0, $$08$idx123$val = 0, $$082 = 0, $$083 = 0.0, $$087 = 0.0, $$09 = 0, $$091132 = 0, $$092 = 0, $$093 = 0, $$095 = 0, $$097 = 0, $$098$ph = 0.0, $$098273 = 0.0, $$099 = 0, $$1 = 0, $$10 = 0, $$11 = 0, $$110 = 0, $$120 = 0, $$1217 = 0, $$125 = 0, $$13 = 0, $$136265 = 0, $$14 = 0, $$140$ph = 0, $$140263 = 0, $$147 = 0.0, $$15 = 0, $$1518 = 0, $$16 = 0, $$163 = 0, $$165 = 0, $$167 = 0, $$17 = 0, $$170 = 0, $$173 = 0, $$175 = 0, $$177 = 0, $$184 = 0.0, $$188 = 0.0, $$194 = 0, $$196 = 0, $$197 = 0, $$210 = 0.0, $$211 = 0, $$212 = 0, $$218 = 0.0, $$221 = 0, $$237 = 0, $$250 = 0, $$254 = 0, $$268 = 0, $$278 = 0, $$3 = 0, $$312 = 0, $$322 = 0, $$338143 = 0, $$338144 = 0, $$342141 = 0, $$342142 = 0, $$355 = 0, $$379 = 0, $$386 = 0.0, $$390 = 0.0, $$4 = 0, $$4$ = 0, $$413 = 0, $$423 = 0, $$456 = 0, $$480 = 0, $$5 = 0, $$514 = 0, $$581 = 0, $$6 = 0, $$6$ = 0, $$6$$$658 = 0, $$615 = 0, $$658 = 0, $$7 = 0, $$716 = 0, $$8 = 0, $$9 = 0, $$alloca_mul11 = 0, $$alloca_mul17 = 0, $$alloca_mul19 = 0, $$alloca_mul29 = 0, $$idx$val = 0, $$idx105$val = 0, $$idx127 = 0, $$pn = 0, $$pre = 0, $$sink = 0, $10 = 0, $100 = 0, $101 = 0, $103 = 0, $104 = 0, $106 = 0, $11 = 0, $111 = 0, $116 = 0, $117 = 0, $12 = 0, $120 = 0, $121 = 0, $123 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0.0, $132 = 0, $133 = 0, $134 = 0, $135 = 0.0, $137 = 0.0, $14 = 0, $141 = 0.0, $143 = 0.0, $144 = 0, $149 = 0, $15 = 0, $150 = 0, $152 = 0, $155 = 0, $159 = 0, $160 = 0, $161 = 0, $167 = 0, $17 = 0, $172 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0.0, $20 = 0, $203 = 0.0, $206 = 0.0, $21 = 0, $211 = 0, $214 = 0, $215 = 0, $217 = 0, $218 = 0, $22 = 0, $223 = 0, $233 = 0, $235 = 0, $24 = 0, $241 = 0, $242 = 0, $243 = 0, $245 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $252 = 0, $253 = 0, $256 = 0.0, $258 = 0, $26 = 0, $263 = 0, $264 = 0, $266 = 0, $270 = 0, $271 = 0.0, $273 = 0.0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $284 = 0, $286 = 0, $290 = 0, $293 = 0, $297 = 0.0, $298 = 0, $30 = 0, $302 = 0.0, $309 = 0, $31 = 0, $316 = 0, $324 = 0.0, $333 = 0.0, $334 = 0, $335 = 0.0, $338 = 0, $339 = 0, $34 = 0, $343 = 0, $349 = 0, $352 = 0, $357 = 0.0, $36 = 0, $364 = 0.0, $368 = 0, $37 = 0, $370 = 0.0, $376 = 0, $379 = 0.0, $38 = 0, $380 = 0, $381 = 0, $383 = 0.0, $386 = 0.0, $39 = 0, $391 = 0.0, $398 = 0, $399 = 0.0, $400 = 0.0, $401 = 0, $403 = 0.0, $407 = 0, $408 = 0, $419 = 0.0, $421 = 0, $429 = 0, $430 = 0, $438 = 0, $442 = 0, $444 = 0, $45 = 0, $461 = 0, $462 = 0, $464 = 0, $465 = 0, $466 = 0.0, $47 = 0, $49 = 0, $497 = 0, $499 = 0, $504 = 0, $506 = 0, $509 = 0, $510 = 0, $511 = 0, $516 = 0, $519 = 0, $52 = 0, $520 = 0.0, $526 = 0, $527 = 0, $53 = 0, $530 = 0, $539 = 0, $54 = 0, $540 = 0, $541 = 0, $543 = 0, $544 = 0, $545 = 0, $55 = 0, $553 = 0, $555 = 0, $56 = 0, $562 = 0, $567 = 0, $569 = 0, $57 = 0, $570 = 0, $58 = 0, $587 = 0, $588 = 0, $59 = 0, $594 = 0, $597 = 0, $598 = 0, $6 = 0, $604 = 0, $611 = 0.0, $615 = 0, $621 = 0, $625 = 0, $63 = 0, $64 = 0, $645 = 0, $647 = 0, $650 = 0, $653 = 0, $654 = 0, $655 = 0, $662 = 0, $666 = 0, $669 = 0, $670 = 0, $675 = 0, $677 = 0, $678 = 0, $68 = 0, $684 = 0, $685 = 0, $686 = 0, $687 = 0, $690 = 0, $691 = 0, $696 = 0, $697 = 0, $698 = 0, $7 = 0, $712 = 0, $716 = 0, $717 = 0, $719 = 0, $720 = 0, $722 = 0, $723 = 0, $724 = 0, $726 = 0, $73 = 0, $734 = 0, $747 = 0, $748 = 0, $750 = 0, $752 = 0.0, $753 = 0, $76 = 0, $772 = 0, $773 = 0.0, $775 = 0.0, $778 = 0, $78 = 0, $780 = 0, $786 = 0, $795 = 0, $8 = 0, $80 = 0, $800 = 0, $801 = 0, $802 = 0, $803 = 0, $89 = 0, $9 = 0, $90 = 0, $94 = 0, $or$cond220 = 0, $or$cond250 = 0, $storemerge = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 $6 = sp + 40 | 0;
 $7 = sp + 32 | 0;
 $8 = sp + 28 | 0;
 $9 = sp + 24 | 0;
 $10 = sp + 20 | 0;
 $11 = sp + 16 | 0;
 $12 = sp + 12 | 0;
 $13 = sp + 8 | 0;
 $14 = sp + 4 | 0;
 $15 = sp;
 $17 = HEAP32[$0 + 4 >> 2] | 0;
 $19 = HEAP32[$0 + 8 >> 2] | 0;
 HEAP32[$7 >> 2] = 15;
 HEAPF32[$8 >> 2] = 0.0;
 HEAP32[$9 >> 2] = 0;
 HEAP32[$11 >> 2] = 0;
 HEAP32[$14 >> 2] = 0;
 $20 = HEAP32[$0 >> 2] | 0;
 $21 = $20 + 8 | 0;
 $22 = HEAP32[$21 >> 2] | 0;
 $24 = HEAP32[$20 + 4 >> 2] | 0;
 $25 = $20 + 32 | 0;
 $26 = HEAP32[$25 >> 2] | 0;
 $28 = HEAP32[$0 + 32 >> 2] | 0;
 $30 = HEAP32[$0 + 36 >> 2] | 0;
 $31 = ($28 | 0) != 0;
 HEAPF32[$12 >> 2] = 0.0;
 if (($4 | 0) < 2 | ($1 | 0) == 0) {
  $$1 = -1;
  STACKTOP = sp;
  return $$1 | 0;
 }
 $34 = $0 + 28 | 0;
 $36 = Math_imul(HEAP32[$34 >> 2] | 0, $2) | 0;
 $37 = $20 + 44 | 0;
 $38 = $20 + 36 | 0;
 $39 = HEAP32[$38 >> 2] | 0;
 $$045 = 0;
 while (1) {
  if (($$045 | 0) > ($39 | 0)) {
   $$1 = -1;
   label = 221;
   break;
  }
  if ((HEAP32[$37 >> 2] << $$045 | 0) == ($36 | 0)) break;
  $$045 = $$045 + 1 | 0;
 }
 if ((label | 0) == 221) {
  STACKTOP = sp;
  return $$1 | 0;
 }
 $45 = 1 << $$045;
 $47 = HEAP32[$37 >> 2] << $$045;
 $49 = $0 + 236 + ((Math_imul($17, $24) | 0) << 2) | 0;
 $52 = $0 + 236 + ((Math_imul($17, $24 + 1024 | 0) | 0) << 2) | 0;
 $53 = Math_imul($17, $22) | 0;
 $54 = $52 + ($53 << 2) | 0;
 $55 = $54 + ($53 << 2) | 0;
 $56 = $55 + ($53 << 2) | 0;
 $57 = ($5 | 0) == 0;
 if ($57) {
  $$051 = 0;
  $$076 = 1;
  $$082 = 1;
 } else {
  $$idx$val = HEAP32[$5 + 20 >> 2] | 0;
  $$idx105$val = HEAP32[$5 + 28 >> 2] | 0;
  $58 = _ec_tell_frac($$idx$val, $$idx105$val) | 0;
  $59 = _ec_tell($$idx$val, $$idx105$val) | 0;
  $$051 = $59 + 4 >> 3;
  $$076 = $59;
  $$082 = $58;
 }
 $$ = ($4 | 0) < 1275 ? $4 : 1275;
 $63 = $$ - $$051 | 0;
 $64 = $0 + 44 | 0;
 $$pre = HEAP32[$0 + 40 >> 2] | 0;
 if (!(HEAP32[$64 >> 2] | 0)) {
  $76 = $$pre;
  if (($76 | 0) == -1) {
   $$04 = $$;
   $801 = $76;
   label = 13;
  } else {
   $78 = Math_imul($76, $36) | 0;
   $80 = HEAP32[$20 >> 2] | 0;
   $89 = (($78 + (($$076 | 0) > 1 ? $$076 : 0) + ($80 << 2) | 0) / ($80 << 3 | 0) | 0) - ((HEAP32[$0 + 48 >> 2] | 0) != 0 & 1) | 0;
   $90 = ($$ | 0) < ($89 | 0);
   $$04 = (($90 ? $$ : $89) | 0) < 2 ? 2 : $90 ? $$ : $89;
   $801 = $76;
   label = 13;
  }
 } else if (($$pre | 0) == -1) {
  $$04 = $$;
  $801 = -1;
  label = 13;
 } else {
  $68 = HEAP32[$20 >> 2] | 0;
  $73 = ((Math_imul($$pre, $36) | 0) + ($68 >> 4) | 0) / ($68 >> 3 | 0) | 0;
  $$066 = $73 >> 6;
  $$071 = $73;
  $$15 = $$;
  $103 = $$pre;
 }
 if ((label | 0) == 13) {
  $$066 = $$04 - $$051 | 0;
  $$071 = 0;
  $$15 = $$04;
  $103 = $801;
 }
 $94 = 3 - $$045 | 0;
 $100 = Math_imul(($19 * 40 | 0) + 20 | 0, (400 >>> $$045) + -50 | 0) | 0;
 $101 = ($$15 * 400 >> $94) - $100 | 0;
 if (($103 | 0) == -1) $$097 = $101; else {
  $104 = $103 - $100 | 0;
  $$097 = ($101 | 0) < ($104 | 0) ? $101 : $104;
 }
 if ($57) {
  _ec_enc_init($6, $3, $$15);
  $$08 = $6;
 } else $$08 = $5;
 $106 = ($$071 | 0) > 0;
 if ($106) if (!(HEAP32[$0 + 52 >> 2] | 0)) {
  $$254 = $63;
  $$4 = $$15;
 } else {
  $111 = ($$076 | 0) == 1 ? 2 : 0;
  $116 = ($$071 << 1) - (HEAP32[$0 + 200 >> 2] | 0) >> 6;
  $117 = ($111 | 0) > ($116 | 0);
  if ((($117 ? $111 : $116) | 0) < ($63 | 0)) {
   $$196 = $117 ? $111 : $116;
   if (($$196 | 0) < ($63 | 0)) {
    $120 = $$051 + $$196 | 0;
    _ec_enc_shrink($$08, $120);
    $$254 = $$196;
    $$4 = $120;
   } else {
    $$254 = $63;
    $$4 = $$15;
   }
  } else {
   $$254 = $63;
   $$4 = $$15;
  }
 } else {
  $$254 = $63;
  $$4 = $$15;
 }
 $121 = $$4 << 3;
 $123 = HEAP32[$20 + 12 >> 2] | 0;
 $$197 = ($30 | 0) > ($123 | 0) ? $123 : $30;
 $125 = $47 + $24 | 0;
 $126 = Math_imul($17, $125) | 0;
 $127 = _llvm_stacksave() | 0;
 $128 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($126 << 2) | 0) + 15 & -16) | 0;
 $129 = $0 + 216 | 0;
 $130 = +HEAPF32[$129 >> 2];
 $132 = Math_imul($19, $47 - $24 | 0) | 0;
 $133 = HEAP32[$34 >> 2] | 0;
 $134 = ($132 | 0) / ($133 | 0) | 0;
 $135 = +_celt_maxabs16($1, $134);
 $137 = $130 > $135 ? $130 : $135;
 $141 = +_celt_maxabs16($1 + ($134 << 2) | 0, (Math_imul($19, $24) | 0) / ($133 | 0) | 0);
 HEAPF32[$129 >> 2] = $141;
 $143 = $137 > $141 ? $137 : $141;
 $144 = $0 + 60 | 0;
 $149 = $143 <= 1.0 / +(1 << HEAP32[$144 >> 2] | 0);
 $150 = $149 & 1;
 if (($$076 | 0) == 1) {
  _ec_enc_bit_logp($$08, $150, 15);
  if ($149) {
   if ($106) {
    $152 = $$051 + 2 | 0;
    $$4$ = ($$4 | 0) < ($152 | 0) ? $$4 : $152;
    _ec_enc_shrink($$08, $$4$);
    $$072 = $$4$ << 3;
    $$167 = $$4$;
    $$355 = 2;
    $$5 = $$4$;
   } else {
    $$072 = $121;
    $$167 = $$066;
    $$355 = $$254;
    $$5 = $$4;
   }
   $155 = $$5 << 3;
   $$08$idx123 = $$08 + 20 | 0;
   $$08$idx123$val = HEAP32[$$08$idx123 >> 2] | 0;
   HEAP32[$$08$idx123 >> 2] = $$08$idx123$val + ($155 - (_ec_tell($$08$idx123$val, HEAP32[$$08 + 28 >> 2] | 0) | 0));
   $$091132 = $150;
   $$173 = $$072;
   $$177 = $155;
   $$268 = $$167;
   $$456 = $$355;
   $$6 = $$5;
  } else {
   $$091132 = 0;
   $$173 = $121;
   $$177 = 1;
   $$268 = $$066;
   $$456 = $$254;
   $$6 = $$4;
  }
 } else {
  $$091132 = 0;
  $$173 = $121;
  $$177 = $$076;
  $$268 = $$066;
  $$456 = $$254;
  $$6 = $$4;
 }
 $159 = $0 + 16 | 0;
 $160 = $20 + 16 | 0;
 $$idx127 = $20 + 20 | 0;
 $161 = $143 > 65536.0;
 $$019 = 0;
 do {
  $167 = $128 + ((Math_imul($$019, $125) | 0) << 2) + ($24 << 2) | 0;
  _celt_preemphasis($1 + ($$019 << 2) | 0, $167, $47, $17, HEAP32[$34 >> 2] | 0, +HEAPF32[$160 >> 2], +HEAPF32[$$idx127 >> 2], $0 + 184 + ($$019 << 2) | 0, $161 & (HEAP32[$159 >> 2] | 0) != 0 & 1);
  $$019 = $$019 + 1 | 0;
 } while (($$019 | 0) < ($17 | 0));
 $172 = $0 + 64 | 0;
 if (((HEAP32[$172 >> 2] | 0) != 0 & ($$456 | 0) > 3 | ($$456 | 0) > ($19 * 12 | 0)) & ($31 ^ 1) & ($$091132 | 0) == 0) if (!(HEAP32[$0 + 20 >> 2] | 0)) $186 = (HEAP32[$0 + 24 >> 2] | 0) > 4; else $186 = 0; else $186 = 0;
 $187 = $0 + 100 | 0;
 $188 = HEAP32[$187 >> 2] | 0;
 $189 = _run_prefilter($0, $128, $49, $17, $47, $188, $7, $8, $15, $186 & 1, $$456) | 0;
 $190 = +HEAPF32[$8 >> 2];
 if ($190 > .4000000059604645) label = 35; else if (+HEAPF32[$0 + 108 >> 2] > .4000000059604645) label = 35; else $$092 = 0;
 do if ((label | 0) == 35) {
  if (HEAP32[$0 + 120 >> 2] | 0) if (!(+HEAPF32[$0 + 124 >> 2] > .3)) {
   $$092 = 0;
   break;
  }
  $203 = +(HEAP32[$7 >> 2] | 0);
  $206 = +(HEAP32[$0 + 104 >> 2] | 0);
  $$092 = ($203 > $206 * 1.26 | $203 < $206 * .79) & 1;
 } while (0);
 $211 = ($189 | 0) == 0;
 if ($211) {
  if (!($31 | ($$177 + 16 | 0) > ($$173 | 0))) _ec_enc_bit_logp($$08, 0, 1);
 } else {
  _ec_enc_bit_logp($$08, 1, 1);
  $214 = HEAP32[$7 >> 2] | 0;
  $215 = $214 + 1 | 0;
  $217 = 32 - (Math_clz32($215 | 0) | 0) | 0;
  $218 = $217 + -5 | 0;
  _ec_enc_uint($$08, $218, 6);
  _ec_enc_bits($$08, $215 - (16 << $218) | 0, $217 + -1 | 0);
  HEAP32[$7 >> 2] = $214;
  _ec_enc_bits($$08, HEAP32[$15 >> 2] | 0, 3);
  _ec_enc_icdf($$08, $188, 28622, 2);
 }
 $223 = $0 + 24 | 0;
 if ((HEAP32[$223 >> 2] | 0) > 0) if (!(HEAP32[$172 >> 2] | 0)) {
  if ($31 & ($$268 | 0) < 15) $233 = (HEAP32[$0 + 180 >> 2] | 0) > 99; else $233 = 0;
  $$039 = _transient_analysis($128, $125, $17, $12, $11, $233 & 1, $14) | 0;
 } else $$039 = 0; else $$039 = 0;
 $235 = ($$045 | 0) > 0;
 L68 : do if ($235) if (((_ec_tell(HEAP32[$$08 + 20 >> 2] | 0, HEAP32[$$08 + 28 >> 2] | 0) | 0) + 3 | 0) > ($$173 | 0)) {
  $$0101$ph = 1;
  $$140$ph = 0;
  label = 50;
 } else if (!$$039) {
  $$0101$ph = 0;
  $$140$ph = $$039;
  label = 50;
 } else {
  $$alloca_mul19 = (Math_imul($17, $47) | 0) << 2;
  $247 = STACKTOP;
  STACKTOP = STACKTOP + ((1 * $$alloca_mul19 | 0) + 15 & -16) | 0;
  $248 = STACKTOP;
  STACKTOP = STACKTOP + ((1 * ($53 << 2) | 0) + 15 & -16) | 0;
  $249 = STACKTOP;
  STACKTOP = STACKTOP + ((1 * ($53 << 2) | 0) + 15 & -16) | 0;
  $252 = Math_imul($19, $22) | 0;
  $253 = STACKTOP;
  STACKTOP = STACKTOP + ((1 * ($252 << 2) | 0) + 15 & -16) | 0;
  if ((HEAP32[$223 >> 2] | 0) > 7) {
   _compute_mdcts($20, 0, $128, $247, $19, $17, $$045, HEAP32[$34 >> 2] | 0);
   _compute_band_energies($20, $247, $248, $$197, $19, $$045);
   _amp2Log2($20, $$197, $30, $248, $253, $19);
   $256 = +($$045 | 0) * .5;
   $$09 = 0;
   while (1) {
    if (($$09 | 0) >= ($252 | 0)) {
     $$0101261 = 0;
     $$136265 = $45;
     $$140263 = $$039;
     $263 = $247;
     $266 = $248;
     $279 = $249;
     $380 = 0;
     $407 = $253;
     $802 = 1;
     break L68;
    }
    $258 = $253 + ($$09 << 2) | 0;
    HEAPF32[$258 >> 2] = +HEAPF32[$258 >> 2] + $256;
    $$09 = $$09 + 1 | 0;
   }
  } else {
   $$0101261 = 0;
   $$136265 = $45;
   $$140263 = $$039;
   $263 = $247;
   $266 = $248;
   $279 = $249;
   $380 = 0;
   $407 = $253;
   $802 = 0;
  }
 } else {
  $$0101$ph = 1;
  $$140$ph = 0;
  label = 50;
 } while (0);
 if ((label | 0) == 50) {
  $$alloca_mul11 = (Math_imul($17, $47) | 0) << 2;
  $241 = STACKTOP;
  STACKTOP = STACKTOP + ((1 * $$alloca_mul11 | 0) + 15 & -16) | 0;
  $242 = STACKTOP;
  STACKTOP = STACKTOP + ((1 * ($53 << 2) | 0) + 15 & -16) | 0;
  $243 = STACKTOP;
  STACKTOP = STACKTOP + ((1 * ($53 << 2) | 0) + 15 & -16) | 0;
  $$alloca_mul17 = (Math_imul($19, $22) | 0) << 2;
  $245 = STACKTOP;
  STACKTOP = STACKTOP + ((1 * $$alloca_mul17 | 0) + 15 & -16) | 0;
  $$0101261 = $$0101$ph;
  $$136265 = 0;
  $$140263 = $$140$ph;
  $263 = $241;
  $266 = $242;
  $279 = $243;
  $380 = 1;
  $407 = $245;
  $802 = 0;
 }
 _compute_mdcts($20, $$136265, $128, $263, $19, $17, $$045, HEAP32[$34 >> 2] | 0);
 $264 = ($17 | 0) == 2;
 if ($264 & ($19 | 0) == 1) HEAP32[$11 >> 2] = 0;
 _compute_band_energies($20, $263, $266, $$197, $19, $$045);
 L82 : do if (!(HEAP32[$172 >> 2] | 0)) $278 = $266; else {
  $$110 = 2;
  while (1) {
   if (($$110 | 0) >= ($30 | 0)) {
    $278 = $266;
    break L82;
   }
   $270 = $266 + ($$110 << 2) | 0;
   $271 = +HEAPF32[$270 >> 2];
   $273 = +HEAPF32[$266 >> 2] * 9.999999747378752e-05;
   $$210 = $271 < $273 ? $271 : $273;
   HEAPF32[$270 >> 2] = $$210 > 1.0000000036274937e-15 ? $$210 : 1.0000000036274937e-15;
   $$110 = $$110 + 1 | 0;
  }
 } while (0);
 _amp2Log2($20, $$197, $30, $278, $279, $19);
 $280 = Math_imul($19, $22) | 0;
 $281 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($280 << 2) | 0) + 15 & -16) | 0;
 _memset($281 | 0, 0, $30 << 2 | 0) | 0;
 do if ($31) {
  $$0102$ph = 0.0;
  $$098$ph = 0.0;
  label = 89;
 } else {
  $284 = HEAP32[$0 + 228 >> 2] | 0;
  if (!$284) {
   $$0102$ph = 0.0;
   $$098$ph = 0.0;
   label = 89;
  } else {
   $286 = HEAP32[$172 >> 2] | 0;
   if ($286 | 0) {
    $$0102272 = 0.0;
    $$0103 = 0.0;
    $$098273 = 0.0;
    $408 = $279;
    $803 = ($286 | 0) == 0;
    break;
   }
   $290 = HEAP32[$0 + 92 >> 2] | 0;
   $$212 = ($290 | 0) > 2 ? $290 : 2;
   $$062 = 0;
   $$083 = 0.0;
   $$087 = 0.0;
   $$120 = 0;
   while (1) {
    if (($$120 | 0) >= ($19 | 0)) break;
    $293 = Math_imul($22, $$120) | 0;
    $$163 = $$062;
    $$184 = $$083;
    $$188 = $$087;
    $$211 = 0;
    while (1) {
     if (($$211 | 0) >= ($$212 | 0)) break;
     $297 = +HEAPF32[$284 + ($293 + $$211 << 2) >> 2];
     $298 = $297 < .25;
     do if ($297 > -2.0 | $298 ^ 1) {
      if ($298) if ($297 > 0.0) $302 = $297; else {
       $$060 = $297;
       break;
      } else $302 = .25;
      $$060 = $302 * .5;
     } else $$060 = -2.0; while (0);
     $309 = $$211 + 1 | 0;
     $316 = (HEAP16[$26 + ($309 << 1) >> 1] | 0) - (HEAP16[$26 + ($$211 << 1) >> 1] | 0) | 0;
     $$163 = $$163 + $316 | 0;
     $$184 = $$184 + $$060 * +(($$211 << 1 | 1) - $$212 | 0);
     $$188 = $$188 + $$060 * +($316 | 0);
     $$211 = $309;
    }
    $$062 = $$163;
    $$083 = $$184;
    $$087 = $$188;
    $$120 = $$120 + 1 | 0;
   }
   $324 = $$087 / +($$062 | 0) + .20000000298023224;
   $333 = $$083 * 6.0 / +(Math_imul(Math_imul(Math_imul($19, $$212 + -1 | 0) | 0, $$212 + 1 | 0) | 0, $$212) | 0) * .5;
   $334 = $333 < .03099999949336052;
   $335 = $334 ? ($334 & !($333 > -.03099999949336052) ? -.03099999949336052 : $333) : .03099999949336052;
   $338 = (HEAP16[$26 + ($$212 << 1) >> 1] | 0) / 2 | 0;
   $$095 = 0;
   while (1) {
    $339 = $$095 + 1 | 0;
    if ((HEAP16[$26 + ($339 << 1) >> 1] | 0) < $338 << 16 >> 16) $$095 = $339; else break;
   }
   $343 = ($19 | 0) == 2;
   $$093 = 0;
   $$312 = 0;
   while (1) {
    if (($$312 | 0) >= ($$212 | 0)) break;
    $349 = $284 + ($$312 << 2) | 0;
    if ($343) {
     $352 = $284 + ($22 + $$312 << 2) | 0;
     $$059$in = +HEAPF32[$349 >> 2] > +HEAPF32[$352 >> 2] ? $349 : $352;
    } else $$059$in = $349;
    $$059 = +HEAPF32[$$059$in >> 2];
    $357 = ($$059 < 0.0 ? $$059 : 0.0) - ($324 + $335 * +($$312 - $$095 | 0));
    if ($357 > .25) {
     HEAPF32[$281 + ($$312 << 2) >> 2] = $357 + -.25;
     $$194 = $$093 + 1 | 0;
    } else $$194 = $$093;
    $$093 = $$194;
    $$312 = $$312 + 1 | 0;
   }
   L120 : do if (($$093 | 0) > 2) {
    $364 = $324 + .25;
    if ($364 > 0.0) {
     _memset($281 | 0, 0, $$212 << 2 | 0) | 0;
     $$386 = 0.0;
     $$390 = 0.0;
     break;
    } else $$413 = 0;
    while (1) {
     if (($$413 | 0) >= ($$212 | 0)) {
      $$386 = $335;
      $$390 = $364;
      break L120;
     }
     $368 = $281 + ($$413 << 2) | 0;
     $370 = +HEAPF32[$368 >> 2] + -.25;
     HEAPF32[$368 >> 2] = $370 < 0.0 ? 0.0 : $370;
     $$413 = $$413 + 1 | 0;
    }
   } else {
    $$386 = $335;
    $$390 = $324;
   } while (0);
   $$0102$ph = $$390 + .20000000298023224;
   $$098$ph = $$386 * 64.0;
   label = 89;
  }
 } while (0);
 if ((label | 0) == 89) {
  $376 = (HEAP32[$172 >> 2] | 0) == 0;
  if ($376) {
   $379 = $380 ? 0.0 : +($$045 | 0) * .5;
   $381 = ($19 | 0) == 2;
   $$044 = 0.0;
   $$046 = -10.0;
   $$514 = $28;
   while (1) {
    if (($$514 | 0) >= ($30 | 0)) break;
    $383 = $$046 + -1.0;
    $386 = +HEAPF32[$279 + ($$514 << 2) >> 2] - $379;
    $$218 = $383 > $386 ? $383 : $386;
    do if ($381) {
     $391 = +HEAPF32[$279 + ($$514 + $22 << 2) >> 2] - $379;
     if ($$218 > $391) {
      $$147 = $$218;
      break;
     }
     $$147 = $391;
    } else $$147 = $$218; while (0);
    $$044 = $$044 + $$147;
    $$046 = $$147;
    $$514 = $$514 + 1 | 0;
   }
   $398 = $0 + 232 | 0;
   $399 = +HEAPF32[$398 >> 2];
   $400 = $$044 / +($30 - $28 | 0) - $399;
   $401 = $400 < -1.5;
   $or$cond220 = $400 > 3.0 & ($401 ^ 1);
   $403 = $or$cond220 | $401 ? ($or$cond220 ? 3.0 : -1.5) : $400;
   HEAPF32[$398 >> 2] = $399 + $403 * .019999999552965164;
   $$0102272 = $$0102$ph;
   $$0103 = $403;
   $$098273 = $$098$ph;
   $408 = $279;
   $803 = $376;
  } else {
   $$0102272 = $$0102$ph;
   $$0103 = 0.0;
   $$098273 = $$098$ph;
   $408 = $279;
   $803 = $376;
  }
 }
 if (!$802) _memcpy($407 | 0, $408 | 0, $280 << 2 | 0) | 0;
 if ($235) {
  $$08$idx119 = $$08 + 20 | 0;
  $$08$idx119$val = HEAP32[$$08$idx119 >> 2] | 0;
  $$08$idx120 = $$08 + 28 | 0;
  $$08$idx120$val = HEAP32[$$08$idx120 >> 2] | 0;
  do if (((_ec_tell($$08$idx119$val, $$08$idx120$val) | 0) + 3 | 0) <= ($$173 | 0) & ($$140263 | 0) == 0) {
   if ((HEAP32[$223 >> 2] | 0) <= 4) {
    $$08$idx117$val = $$08$idx119$val;
    $$08$idx118$val = $$08$idx120$val;
    $$338144 = $$136265;
    $$342141 = 0;
    break;
   }
   if (!$803) {
    $$08$idx117$val = $$08$idx119$val;
    $$08$idx118$val = $$08$idx120$val;
    $$338144 = $$136265;
    $$342141 = 0;
    break;
   }
   if ($31) {
    $$08$idx117$val = $$08$idx119$val;
    $$08$idx118$val = $$08$idx120$val;
    $$338144 = $$136265;
    $$342141 = 0;
    break;
   }
   if (!(_patch_transient_decision($408, $52, $22, 0, $30, $19) | 0)) {
    $$08$idx117$val = $$08$idx119$val;
    $$08$idx118$val = $$08$idx120$val;
    $$338144 = $$136265;
    $$342141 = 0;
    break;
   }
   _compute_mdcts($20, $45, $128, $263, $19, $17, $$045, HEAP32[$34 >> 2] | 0);
   _compute_band_energies($20, $263, $278, $$197, $19, $$045);
   _amp2Log2($20, $$197, $30, $278, $408, $19);
   $419 = +($$045 | 0) * .5;
   $$615 = 0;
   while (1) {
    if (($$615 | 0) >= ($280 | 0)) break;
    $421 = $407 + ($$615 << 2) | 0;
    HEAPF32[$421 >> 2] = +HEAPF32[$421 >> 2] + $419;
    $$615 = $$615 + 1 | 0;
   }
   HEAPF32[$12 >> 2] = .20000000298023224;
   $$08$idx117$val = HEAP32[$$08$idx119 >> 2] | 0;
   $$08$idx118$val = HEAP32[$$08$idx120 >> 2] | 0;
   $$338144 = $45;
   $$342141 = 1;
  } else {
   $$08$idx117$val = $$08$idx119$val;
   $$08$idx118$val = $$08$idx120$val;
   $$338144 = $$136265;
   $$342141 = $$140263;
  } while (0);
  if (((_ec_tell($$08$idx117$val, $$08$idx118$val) | 0) + 3 | 0) > ($$173 | 0)) {
   $$338143 = $$338144;
   $$342142 = $$342141;
  } else {
   _ec_enc_bit_logp($$08, $$342141, 3);
   $$338143 = $$338144;
   $$342142 = $$342141;
  }
 } else {
  $$338143 = $$136265;
  $$342142 = $$140263;
 }
 $$alloca_mul29 = (Math_imul($19, $47) | 0) << 2;
 $429 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * $$alloca_mul29 | 0) + 15 & -16) | 0;
 _normalise_bands($20, $263, $429, $278, $$197, $19, $45);
 $430 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($22 << 2) | 0) + 15 & -16) | 0;
 L158 : do if (($$268 | 0) < ($19 * 15 | 0)) if ($31) label = 119; else {
  $$10 = 0;
  label = 125;
 } else if ($31) label = 119; else {
  if ((HEAP32[$223 >> 2] | 0) <= 1) {
   $$10 = 0;
   label = 125;
   break;
  }
  if (HEAP32[$172 >> 2] | 0) {
   $$10 = 0;
   label = 125;
   break;
  }
  $438 = (1280 / ($$268 | 0) | 0) + 2 | 0;
  $442 = _tf_analysis($20, $$197, $$342142, $430, ($438 | 0) > 5 ? $438 : 5, $429, $47, $$045, +HEAPF32[$12 >> 2], HEAP32[$11 >> 2] | 0) | 0;
  $444 = $430 + ($$197 + -1 << 2) | 0;
  $$716 = $$197;
  while (1) {
   if (($$716 | 0) >= ($30 | 0)) {
    $$250 = $442;
    break L158;
   }
   HEAP32[$430 + ($$716 << 2) >> 2] = HEAP32[$444 >> 2];
   $$716 = $$716 + 1 | 0;
  }
 } while (0);
 L167 : do if ((label | 0) == 119) {
  if (HEAP32[$14 >> 2] | 0) {
   $$8 = 0;
   while (1) {
    if (($$8 | 0) >= ($30 | 0)) {
     $$250 = 0;
     break L167;
    }
    HEAP32[$430 + ($$8 << 2) >> 2] = 1;
    $$8 = $$8 + 1 | 0;
   }
  }
  if (($$268 | 0) < 15) $$9 = 0; else {
   $$10 = 0;
   label = 125;
   break;
  }
  while (1) {
   if (($$9 | 0) >= ($30 | 0)) {
    $$250 = $$342142;
    break L167;
   }
   HEAP32[$430 + ($$9 << 2) >> 2] = 0;
   $$9 = $$9 + 1 | 0;
  }
 } while (0);
 L177 : do if ((label | 0) == 125) while (1) {
  label = 0;
  if (($$10 | 0) >= ($30 | 0)) {
   $$250 = 0;
   break L177;
  }
  HEAP32[$430 + ($$10 << 2) >> 2] = $$342142;
  $$10 = $$10 + 1 | 0;
  label = 125;
 } while (0);
 $461 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($280 << 2) | 0) + 15 & -16) | 0;
 $$221 = 0;
 do {
  $462 = Math_imul($$221, $22) | 0;
  $$11 = $28;
  while (1) {
   if (($$11 | 0) >= ($30 | 0)) break;
   $464 = $$11 + $462 | 0;
   $465 = $408 + ($464 << 2) | 0;
   $466 = +HEAPF32[$465 >> 2];
   if (+Math_abs(+($466 - +HEAPF32[$52 + ($464 << 2) >> 2])) < 2.0) HEAPF32[$465 >> 2] = $466 - +HEAPF32[$56 + ($464 << 2) >> 2] * .25;
   $$11 = $$11 + 1 | 0;
  }
  $$221 = $$221 + 1 | 0;
 } while (($$221 | 0) < ($19 | 0));
 _quant_coarse_energy($20, $28, $30, $$197, $408, $52, $$173, $461, $$08, $19, $$045, $$456, HEAP32[$0 + 12 >> 2] | 0, $0 + 84 | 0, (HEAP32[$223 >> 2] | 0) > 3 & 1, HEAP32[$0 + 56 >> 2] | 0, HEAP32[$172 >> 2] | 0);
 _tf_encode($28, $30, $$342142, $430, $$045, $$250, $$08);
 $$08$idx115 = $$08 + 20 | 0;
 $$08$idx116 = $$08 + 28 | 0;
 if (((_ec_tell(HEAP32[$$08$idx115 >> 2] | 0, HEAP32[$$08$idx116 >> 2] | 0) | 0) + 4 | 0) <= ($$173 | 0)) {
  do if (!(HEAP32[$172 >> 2] | 0)) if ($31) {
   if (!(HEAP32[$223 >> 2] | 0)) {
    HEAP32[$0 + 80 >> 2] = 0;
    $510 = 0;
    break;
   }
   $497 = $0 + 80 | 0;
   if (!$$342142) {
    HEAP32[$497 >> 2] = 3;
    $510 = 3;
    break;
   } else {
    HEAP32[$497 >> 2] = 2;
    $510 = 2;
    break;
   }
  } else {
   $499 = HEAP32[$223 >> 2] | 0;
   if (!(($$338143 | 0) != 0 | ($499 | 0) < 3 | ($$456 | 0) < ($19 * 10 | 0))) {
    $506 = $0 + 80 | 0;
    $509 = _spreading_decision($20, $429, $0 + 88 | 0, HEAP32[$506 >> 2] | 0, $0 + 96 | 0, $187, ($211 ^ 1) & 1, $$197, $19, $45) | 0;
    HEAP32[$506 >> 2] = $509;
    $510 = $509;
    break;
   }
   $504 = $0 + 80 | 0;
   if (!$499) {
    HEAP32[$504 >> 2] = 0;
    $510 = 0;
    break;
   } else {
    HEAP32[$504 >> 2] = 2;
    $510 = 2;
    break;
   }
  } else {
   HEAP32[$187 >> 2] = 0;
   HEAP32[$0 + 80 >> 2] = 2;
   $510 = 2;
  } while (0);
  _ec_enc_icdf($$08, $510, 28625, 5);
 }
 $511 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($22 << 2) | 0) + 15 & -16) | 0;
 $516 = $0 + 52 | 0;
 $519 = $0 + 120 | 0;
 $520 = +_dynalloc_analysis($408, $407, $22, $28, $30, $19, $511, HEAP32[$144 >> 2] | 0, HEAP32[$20 + 56 >> 2] | 0, $$342142, HEAP32[$64 >> 2] | 0, HEAP32[$516 >> 2] | 0, $26, $$045, $$268, $13, HEAP32[$172 >> 2] | 0, $281, $519);
 if (HEAP32[$172 >> 2] | 0) HEAP32[$511 >> 2] = ($$268 | 0) > 26 ? 8 : ($$268 | 0) / 3 | 0;
 $526 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($22 << 2) | 0) + 15 & -16) | 0;
 _init_caps($20, $526, $$045, $19);
 $527 = $$173 << 3;
 $$08$idx$val = HEAP32[$$08$idx115 >> 2] | 0;
 $$08$idx106$val = HEAP32[$$08$idx116 >> 2] | 0;
 $$069 = 6;
 $$074 = 0;
 $$08$idx111$val180 = $$08$idx$val;
 $$08$idx112$val185 = $$08$idx106$val;
 $$1217 = $28;
 $$278 = _ec_tell_frac($$08$idx$val, $$08$idx106$val) | 0;
 while (1) {
  if (($$1217 | 0) >= ($30 | 0)) break;
  $530 = $$1217 + 1 | 0;
  $539 = (Math_imul($19, (HEAP16[$26 + ($530 << 1) >> 1] | 0) - (HEAP16[$26 + ($$1217 << 1) >> 1] | 0) | 0) | 0) << $$045;
  $540 = $539 << 3;
  $541 = ($539 | 0) < 48;
  $543 = ($540 | 0) < (($541 ? 48 : $539) | 0) ? $540 : $541 ? 48 : $539;
  $544 = $526 + ($$1217 << 2) | 0;
  $545 = $511 + ($$1217 << 2) | 0;
  $$033 = 0;
  $$034 = 0;
  $$043 = $$069;
  $$08$idx111$val179 = $$08$idx111$val180;
  $$08$idx112$val184 = $$08$idx112$val185;
  $$175 = $$074;
  $$379 = $$278;
  while (1) {
   if (($$379 + ($$043 << 3) | 0) >= ($527 - $$175 | 0)) {
    $$08$idx111$val178 = $$08$idx111$val179;
    $$08$idx112$val183 = $$08$idx112$val184;
    $$480 = $$379;
    break;
   }
   if (($$034 | 0) >= (HEAP32[$544 >> 2] | 0)) {
    $$08$idx111$val178 = $$08$idx111$val179;
    $$08$idx112$val183 = $$08$idx112$val184;
    $$480 = $$379;
    break;
   }
   $553 = ($$033 | 0) < (HEAP32[$545 >> 2] | 0);
   _ec_enc_bit_logp($$08, $553 & 1, $$043);
   $$08$idx107$val = HEAP32[$$08$idx115 >> 2] | 0;
   $$08$idx108$val = HEAP32[$$08$idx116 >> 2] | 0;
   $555 = _ec_tell_frac($$08$idx107$val, $$08$idx108$val) | 0;
   if (!$553) {
    $$08$idx111$val178 = $$08$idx107$val;
    $$08$idx112$val183 = $$08$idx108$val;
    $$480 = $555;
    break;
   }
   $$033 = $$033 + 1 | 0;
   $$034 = $$034 + $543 | 0;
   $$043 = 1;
   $$08$idx111$val179 = $$08$idx107$val;
   $$08$idx112$val184 = $$08$idx108$val;
   $$175 = $$175 + $543 | 0;
   $$379 = $555;
  }
  if (!$$033) $$170 = $$069; else $$170 = ($$069 | 0) < 3 ? 2 : $$069 + -1 | 0;
  HEAP32[$545 >> 2] = $$034;
  $$069 = $$170;
  $$074 = $$175;
  $$08$idx111$val180 = $$08$idx111$val178;
  $$08$idx112$val185 = $$08$idx112$val183;
  $$1217 = $530;
  $$278 = $$480;
 }
 $562 = ($19 | 0) == 2;
 if ($562) {
  if ($$045 | 0) HEAP32[$9 >> 2] = _stereo_analysis($20, $429, $$045, $47) | 0;
  $567 = $0 + 224 | 0;
  $569 = _hysteresis_decision(+(($$097 | 0) / 1e3 | 0 | 0), HEAP32[$567 >> 2] | 0) | 0;
  $570 = ($28 | 0) > ($569 | 0);
  HEAP32[$567 >> 2] = ($30 | 0) < (($570 ? $28 : $569) | 0) ? $30 : $570 ? $28 : $569;
 }
 if (($$278 + 48 | 0) > ($527 - $$074 | 0)) {
  $$08$idx111$val177 = $$08$idx111$val180;
  $$08$idx112$val182 = $$08$idx112$val185;
  $$165 = 5;
  $$581 = $$278;
 } else {
  do if (($28 | 0) > 0) label = 168; else {
   if (HEAP32[$172 >> 2] | 0) {
    label = 168;
    break;
   }
   $$064 = _alloc_trim_analysis($20, $429, $408, $30, $$045, $19, $47, $519, $0 + 220 | 0, +HEAPF32[$12 >> 2], HEAP32[$0 + 224 >> 2] | 0, $$098273, $$097) | 0;
  } while (0);
  if ((label | 0) == 168) {
   HEAPF32[$0 + 220 >> 2] = 0.0;
   $$064 = 5;
  }
  _ec_enc_icdf($$08, $$064, 28629, 7);
  $$08$idx109$val = HEAP32[$$08$idx115 >> 2] | 0;
  $$08$idx110$val = HEAP32[$$08$idx116 >> 2] | 0;
  $$08$idx111$val177 = $$08$idx109$val;
  $$08$idx112$val182 = $$08$idx110$val;
  $$165 = $$064;
  $$581 = _ec_tell_frac($$08$idx109$val, $$08$idx110$val) | 0;
 }
 if ($106) {
  $587 = (HEAP32[$38 >> 2] | 0) - $$045 | 0;
  $588 = 1275 >>> $94;
  $$6$ = ($$6 | 0) < ($588 | 0) ? $$6 : $588;
  if ($31) {
   $594 = ($19 * 72 | 0) + 32 | 0;
   $$024 = ($$071 | 0) < ($594 | 0) ? 0 : $$071 - $594 | 0;
  } else $$024 = $$071 - (($19 * 320 | 0) + 160) | 0;
  $597 = HEAP32[$516 >> 2] | 0;
  $598 = ($597 | 0) == 0;
  if ($598) $$125 = $$024; else $$125 = $$024 + (HEAP32[$0 + 208 >> 2] >> $587) | 0;
  if ($31) {
   $604 = HEAP32[$0 + 180 >> 2] | 0;
   $611 = +HEAPF32[$12 >> 2];
   $615 = $$125 + (($604 | 0) < 100 ? 96 >>> $94 : 0) - (($604 | 0) > 100 ? 144 >>> $94 : 0) + ~~(($611 + -.25) * 400.0) | 0;
   $621 = ($$581 + $$074 + 63 >> 6) + 2 | 0;
   $625 = $$082 + 296 + $$074 + 63 >> 6;
   $$03 = ($621 | 0) > ($625 | 0) ? $621 : $625;
   $$pn = !($611 > .699999988079071) | ($615 | 0) > 400 ? $615 : 400;
  } else {
   $$03 = ($$581 + $$074 + 63 >> 6) + 2 | 0;
   $$pn = _compute_vbr(HEAP32[$21 >> 2] | 0, HEAP32[$25 >> 2] | 0, $519, $$125, $$045, $$097, HEAP32[$0 + 92 >> 2] | 0, $19, HEAP32[$0 + 224 >> 2] | 0, $597, +HEAPF32[$0 + 220 >> 2], HEAP32[$13 >> 2] | 0, +HEAPF32[$12 >> 2], $$092, $520, HEAP32[$172 >> 2] | 0, (HEAP32[$0 + 228 >> 2] | 0) != 0 & 1, $$0102272, $$0103) | 0;
  }
  $645 = $$pn + $$581 | 0;
  $647 = $645 + 32 >> 6;
  $$03$ = ($$03 | 0) > ($647 | 0) ? $$03 : $647;
  $650 = ($$6$ | 0) < ($$03$ | 0) ? $$6$ : $$03$;
  $653 = ($$091132 | 0) == 0;
  $$237 = $653 ? $650 : 2;
  $654 = $0 + 212 | 0;
  $655 = HEAP32[$654 >> 2] | 0;
  if (($655 | 0) < 970) {
   HEAP32[$654 >> 2] = $655 + 1;
   $$032 = 1.0 / +($655 + 21 | 0);
  } else $$032 = 1.0000000474974513e-03;
  do if ($598) $$658 = $$237; else {
   $662 = $0 + 200 | 0;
   HEAP32[$662 >> 2] = (HEAP32[$662 >> 2] | 0) + (($653 ? $650 << 6 : 128) - $$071);
   $666 = $0 + 208 | 0;
   $669 = $0 + 204 | 0;
   $670 = HEAP32[$669 >> 2] | 0;
   $675 = $670 + ~~($$032 * +((($653 ? $645 - $$071 | 0 : 0) << $587) - (HEAP32[$666 >> 2] | 0) - $670 | 0)) | 0;
   HEAP32[$669 >> 2] = $675;
   HEAP32[$666 >> 2] = 0 - $675;
   $677 = $0 + 200 | 0;
   $678 = HEAP32[$677 >> 2] | 0;
   if (($678 | 0) >= 0) {
    $$658 = $$237;
    break;
   }
   HEAP32[$677 >> 2] = 0;
   $$658 = $653 ? $650 + (($678 | 0) / -64 | 0) | 0 : 2;
  } while (0);
  $$6$$$658 = ($$6$ | 0) < ($$658 | 0) ? $$6$ : $$658;
  _ec_enc_shrink($$08, $$6$$$658);
  $$08$idx111$val = HEAP32[$$08$idx115 >> 2] | 0;
  $$08$idx112$val = HEAP32[$$08$idx116 >> 2] | 0;
  $$7 = $$6$$$658;
 } else {
  $$08$idx111$val = $$08$idx111$val177;
  $$08$idx112$val = $$08$idx112$val182;
  $$7 = $$6;
 }
 $684 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($22 << 2) | 0) + 15 & -16) | 0;
 $685 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($22 << 2) | 0) + 15 & -16) | 0;
 $686 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($22 << 2) | 0) + 15 & -16) | 0;
 $687 = $$7 << 6;
 $690 = $687 - (_ec_tell_frac($$08$idx111$val, $$08$idx112$val) | 0) + -1 | 0;
 $691 = ($$342142 | 0) == 0;
 if (($$045 | 0) > 1 & ($691 ^ 1)) $697 = ($690 | 0) >= (($$045 << 3) + 16 | 0); else $697 = 0;
 $696 = $697 ? 8 : 0;
 $698 = $690 - $696 | 0;
 if (!(HEAP32[$0 + 120 >> 2] | 0)) $$099 = $30 + -1 | 0; else {
  do if (($$097 | 0) < ($19 * 32e3 | 0)) $$3 = 13; else {
   if (($$097 | 0) < ($19 * 48e3 | 0)) {
    $$3 = 16;
    break;
   }
   if (($$097 | 0) < ($19 * 6e4 | 0)) {
    $$3 = 18;
    break;
   }
   $$3 = ($$097 | 0) < ($19 * 8e4 | 0) ? 19 : 20;
  } while (0);
  $712 = HEAP32[$0 + 148 >> 2] | 0;
  $$099 = ($712 | 0) > ($$3 | 0) ? $712 : $$3;
 }
 $716 = $0 + 224 | 0;
 $717 = $0 + 92 | 0;
 $719 = _compute_allocation($20, $28, $30, $511, $526, $$165, $716, $9, $698, $10, $685, $684, $686, $19, $$045, $$08, HEAP32[$717 >> 2] | 0, (HEAP32[$172 >> 2] | 0) == 0 ? $$099 : 1) | 0;
 $720 = HEAP32[$717 >> 2] | 0;
 if (!$720) $storemerge = $719; else {
  $722 = $720 + 1 | 0;
  $723 = $720 + -1 | 0;
  $724 = ($723 | 0) > ($719 | 0);
  $storemerge = ($722 | 0) < (($724 ? $723 : $719) | 0) ? $722 : $724 ? $723 : $719;
 }
 HEAP32[$717 >> 2] = $storemerge;
 _quant_fine_energy($20, $28, $30, $52, $461, $684, $$08, $19);
 $726 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * $280 | 0) + 15 & -16) | 0;
 $734 = $0 + 76 | 0;
 _quant_all_bands($20, $28, $30, $429, $562 ? $429 + ($47 << 2) | 0 : 0, $726, $278, $685, $$338143, HEAP32[$0 + 80 >> 2] | 0, HEAP32[$9 >> 2] | 0, HEAP32[$716 >> 2] | 0, $430, $687 - $696 | 0, HEAP32[$10 >> 2] | 0, $$08, $$045, $719, $734, HEAP32[$223 >> 2] | 0, HEAP32[$0 + 72 >> 2] | 0, HEAP32[$0 + 68 >> 2] | 0);
 if ($697) _ec_enc_bits($$08, (HEAP32[$0 + 116 >> 2] | 0) < 2 & 1, 1);
 _quant_energy_finalise($20, $28, $30, $52, $461, $684, $686, ($$7 << 3) - (_ec_tell(HEAP32[$$08$idx115 >> 2] | 0, HEAP32[$$08$idx116 >> 2] | 0) | 0) | 0, $$08, $19);
 $747 = $53 << 2;
 _memset($56 | 0, 0, $747 | 0) | 0;
 $$322 = 0;
 do {
  $748 = Math_imul($$322, $22) | 0;
  $$13 = $28;
  while (1) {
   if (($$13 | 0) >= ($30 | 0)) break;
   $750 = $$13 + $748 | 0;
   $752 = +HEAPF32[$461 + ($750 << 2) >> 2];
   $753 = $752 > .5;
   $or$cond250 = $752 < -.5 & ($753 ^ 1);
   HEAPF32[$56 + ($750 << 2) >> 2] = $or$cond250 | $753 ? ($or$cond250 ? -.5 : .5) : $752;
   $$13 = $$13 + 1 | 0;
  }
  $$322 = $$322 + 1 | 0;
 } while (($$322 | 0) < ($19 | 0));
 L290 : do if ($$091132 | 0) {
  $$14 = 0;
  while (1) {
   if (($$14 | 0) >= ($280 | 0)) break L290;
   HEAPF32[$52 + ($$14 << 2) >> 2] = -28.0;
   $$14 = $$14 + 1 | 0;
  }
 } while (0);
 HEAP32[$0 + 104 >> 2] = HEAP32[$7 >> 2];
 HEAPF32[$0 + 108 >> 2] = $190;
 HEAP32[$0 + 112 >> 2] = $188;
 if ($264 & ($19 | 0) == 1) _memcpy($52 + ($22 << 2) | 0, $52 | 0, $22 << 2 | 0) | 0;
 L298 : do if ($691) {
  _memcpy($55 | 0, $54 | 0, $747 | 0) | 0;
  _memcpy($54 | 0, $52 | 0, $747 | 0) | 0;
  $$423 = 0;
 } else {
  $$1518 = 0;
  while (1) {
   if (($$1518 | 0) >= ($53 | 0)) {
    $$423 = 0;
    break L298;
   }
   $772 = $54 + ($$1518 << 2) | 0;
   $773 = +HEAPF32[$772 >> 2];
   $775 = +HEAPF32[$52 + ($$1518 << 2) >> 2];
   HEAPF32[$772 >> 2] = $773 < $775 ? $773 : $775;
   $$1518 = $$1518 + 1 | 0;
  }
 } while (0);
 do {
  $778 = Math_imul($$423, $22) | 0;
  $$16 = 0;
  while (1) {
   if (($$16 | 0) >= ($28 | 0)) {
    $$17 = $30;
    break;
   }
   $780 = $778 + $$16 | 0;
   HEAPF32[$52 + ($780 << 2) >> 2] = 0.0;
   HEAPF32[$55 + ($780 << 2) >> 2] = -28.0;
   HEAPF32[$54 + ($780 << 2) >> 2] = -28.0;
   $$16 = $$16 + 1 | 0;
  }
  while (1) {
   if (($$17 | 0) >= ($22 | 0)) break;
   $786 = $778 + $$17 | 0;
   HEAPF32[$52 + ($786 << 2) >> 2] = 0.0;
   HEAPF32[$55 + ($786 << 2) >> 2] = -28.0;
   HEAPF32[$54 + ($786 << 2) >> 2] = -28.0;
   $$17 = $$17 + 1 | 0;
  }
  $$423 = $$423 + 1 | 0;
 } while (($$423 | 0) < ($17 | 0));
 $795 = $0 + 116 | 0;
 if (!($$342142 | $$0101261)) $$sink = 0; else $$sink = (HEAP32[$795 >> 2] | 0) + 1 | 0;
 HEAP32[$795 >> 2] = $$sink;
 HEAP32[$734 >> 2] = HEAP32[$$08$idx116 >> 2];
 _ec_enc_done($$08);
 $800 = (_ec_get_error(HEAP32[$$08 + 44 >> 2] | 0) | 0) == 0;
 _llvm_stackrestore($127 | 0);
 $$1 = $800 ? $$7 : -3;
 STACKTOP = sp;
 return $$1 | 0;
}

function _tonality_analysis($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
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
 var $$$442 = 0, $$0 = 0.0, $$011 = 0, $$020 = 0.0, $$021 = 0.0, $$022 = 0.0, $$023 = 0, $$024 = 0.0, $$026 = 0.0, $$028 = 0.0, $$029 = 0.0, $$030 = 0, $$031 = 0.0, $$032 = 0.0, $$033 = 0.0, $$035 = 0.0, $$036 = 0.0, $$037 = 0.0, $$038 = 0, $$038$phi = 0, $$044 = 0.0, $$045 = 0.0, $$046 = 0.0, $$047 = 0.0, $$048 = 0.0, $$049 = 0.0, $$05 = 0.0, $$050 = 0.0, $$06 = 0, $$10 = 0, $$11 = 0, $$112 = 0, $$12 = 0, $$127 = 0.0, $$128 = 0, $$13 = 0, $$14 = 0, $$149 = 0, $$15 = 0, $$154 = 0.0, $$155 = 0.0, $$156 = 0.0, $$16 = 0, $$17 = 0, $$1710 = 0, $$18 = 0, $$184 = 0.0, $$19 = 0, $$2 = 0, $$20 = 0, $$213 = 0, $$3 = 0, $$314 = 0, $$4 = 0, $$415 = 0, $$442 = 0, $$5 = 0, $$6 = 0, $$617 = 0, $$7 = 0, $$718 = 0, $$8 = 0, $$819 = 0, $$9 = 0, $$op188 = 0.0, $$phi$trans$insert100 = 0, $$phi$trans$insert105 = 0, $$phi$trans$insert107 = 0, $$phi$trans$insert98 = 0, $$pre$phi110Z2D = 0, $$pre$phi111Z2D = 0, $$pre$phi112Z2D = 0, $$pre$phi113Z2D = 0, $10 = 0, $101 = 0, $108 = 0, $109 = 0.0, $11 = 0, $112 = 0.0, $113 = 0, $115 = 0.0, $118 = 0.0, $12 = 0, $120 = 0.0, $125 = 0.0, $126 = 0, $128 = 0.0, $129 = 0, $13 = 0, $131 = 0.0, $133 = 0.0, $134 = 0.0, $135 = 0.0, $138 = 0.0, $14 = 0, $140 = 0.0, $144 = 0.0, $146 = 0.0, $147 = 0.0, $148 = 0, $15 = 0, $16 = 0, $167 = 0, $169 = 0.0, $17 = 0, $170 = 0, $172 = 0.0, $173 = 0, $176 = 0, $177 = 0.0, $178 = 0.0, $18 = 0, $181 = 0, $187 = 0.0, $19 = 0, $190 = 0.0, $195 = 0.0, $197 = 0.0, $199 = 0, $20 = 0, $201 = 0.0, $207 = 0.0, $21 = 0, $217 = 0, $22 = 0, $221 = 0, $223 = 0, $226 = 0.0, $228 = 0, $23 = 0, $230 = 0.0, $234 = 0.0, $238 = 0.0, $24 = 0, $240 = 0.0, $243 = 0.0, $25 = 0, $259 = 0.0, $261 = 0.0, $262 = 0.0, $263 = 0.0, $266 = 0.0, $27 = 0, $274 = 0, $275 = 0, $277 = 0.0, $279 = 0.0, $285 = 0.0, $286 = 0.0, $288 = 0.0, $289 = 0.0, $29 = 0.0, $291 = 0.0, $293 = 0.0, $296 = 0.0, $298 = 0.0, $300 = 0.0, $302 = 0.0, $312 = 0.0, $314 = 0.0, $315 = 0.0, $316 = 0.0, $318 = 0.0, $319 = 0, $32 = 0.0, $321 = 0.0, $324 = 0.0, $33 = 0, $334 = 0.0, $341 = 0, $342 = 0.0, $345 = 0, $351 = 0.0, $354 = 0.0, $356 = 0.0, $359 = 0.0, $36 = 0, $360 = 0.0, $361 = 0.0, $363 = 0.0, $367 = 0, $37 = 0, $375 = 0.0, $378 = 0.0, $379 = 0, $380 = 0.0, $384 = 0.0, $385 = 0, $386 = 0.0, $393 = 0.0, $394 = 0.0, $400 = 0.0, $408 = 0, $417 = 0.0, $431 = 0.0, $432 = 0.0, $433 = 0.0, $435 = 0, $436 = 0, $438 = 0, $441 = 0.0, $443 = 0.0, $445 = 0, $447 = 0.0, $453 = 0.0, $459 = 0.0, $460 = 0, $462 = 0.0, $464 = 0.0, $466 = 0.0, $467 = 0.0, $469 = 0.0, $482 = 0.0, $486 = 0.0, $489 = 0, $491 = 0.0, $493 = 0.0, $495 = 0.0, $496 = 0.0, $506 = 0, $511 = 0.0, $512 = 0, $514 = 0.0, $516 = 0.0, $518 = 0, $520 = 0.0, $524 = 0, $53 = 0, $535 = 0, $55 = 0, $550 = 0.0, $553 = 0.0, $557 = 0.0, $558 = 0, $56 = 0, $560 = 0.0, $562 = 0.0, $564 = 0, $568 = 0, $570 = 0, $571 = 0.0, $58 = 0, $59 = 0, $598 = 0, $60 = 0, $62 = 0.0, $63 = 0, $639 = 0, $648 = 0, $65 = 0.0, $652 = 0.0, $66 = 0, $665 = 0, $67 = 0, $670 = 0, $672 = 0, $68 = 0, $70 = 0, $703 = 0.0, $704 = 0, $707 = 0.0, $708 = 0.0, $71 = 0, $710 = 0, $711 = 0.0, $713 = 0.0, $715 = 0.0, $716 = 0, $718 = 0.0, $719 = 0, $72 = 0, $720 = 0.0, $721 = 0, $723 = 0.0, $733 = 0.0, $734 = 0.0, $743 = 0.0, $75 = 0.0, $750 = 0.0, $752 = 0.0, $754 = 0.0, $758 = 0.0, $759 = 0, $761 = 0.0, $762 = 0, $764 = 0.0, $782 = 0.0, $784 = 0.0, $788 = 0.0, $789 = 0.0, $791 = 0.0, $798 = 0, $799 = 0.0, $800 = 0, $803 = 0.0, $804 = 0.0, $807 = 0.0, $808 = 0.0, $813 = 0, $835 = 0.0, $836 = 0, $839 = 0, $844 = 0.0, $845 = 0.0, $847 = 0, $849 = 0, $853 = 0, $854 = 0.0, $855 = 0.0, $86 = 0, $861 = 0, $863 = 0, $867 = 0, $868 = 0.0, $869 = 0.0, $880 = 0, $fabsf63 = 0.0, $or$cond171 = 0, $or$cond173 = 0, $or$cond177 = 0, $or$cond181 = 0, $sqrtf = 0.0, $sqrtf55 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 11120 | 0;
 $10 = sp + 11040 | 0;
 $11 = sp + 10968 | 0;
 $12 = sp + 10936 | 0;
 $13 = sp + 10832 | 0;
 $14 = sp + 10824 | 0;
 $15 = sp + 9864 | 0;
 $16 = sp + 9832 | 0;
 $17 = sp + 9752 | 0;
 $18 = sp + 9676 | 0;
 $19 = sp + 9600 | 0;
 $20 = sp + 5760 | 0;
 $21 = sp + 1920 | 0;
 $22 = sp + 960 | 0;
 $23 = sp;
 $24 = $0 + 7448 | 0;
 $25 = HEAP32[$24 >> 2] | 0;
 $27 = $25 + 1 | 0;
 $29 = ($25 | 0) > 9 ? .10000000149011612 : 1.0 / +($27 | 0);
 $32 = ($25 | 0) > 24 ? .03999999910593033 : 1.0 / +($27 | 0);
 $33 = ($25 | 0) > 499;
 $$op188 = 1.0 / +($25 + 1 | 0);
 $36 = $0 + 8 | 0;
 $37 = HEAP32[$36 >> 2] | 0;
 L1 : do if (($37 | 0) < 48e3) {
  switch ($37 | 0) {
  case 16e3:
   break;
  default:
   {
    $$12 = $3;
    $$14 = $4;
    break L1;
   }
  }
  $$12 = ($3 * 3 | 0) / 2 | 0;
  $$14 = ($4 * 3 | 0) / 2 | 0;
 } else {
  switch ($37 | 0) {
  case 48e3:
   break;
  default:
   {
    $$12 = $3;
    $$14 = $4;
    break L1;
   }
  }
  $$12 = ($3 | 0) / 2 | 0;
  $$14 = ($4 | 0) / 2 | 0;
 } while (0);
 if (($25 | 0) < 4) {
  HEAPF32[$0 + 7424 >> 2] = (HEAP32[$0 + 4 >> 2] | 0) == 2048 ? .10000000149011612 : .625;
  $53 = HEAP32[$1 + 72 >> 2] | 0;
  $55 = $0 + 5772 | 0;
  if (!$25) {
   HEAP32[$55 >> 2] = 240;
   $108 = $53;
   $58 = 240;
   $67 = $55;
  } else {
   $56 = $55;
   $880 = $53;
   label = 7;
  }
 } else {
  $56 = $0 + 5772 | 0;
  $880 = HEAP32[$1 + 72 >> 2] | 0;
  label = 7;
 }
 if ((label | 0) == 7) {
  $108 = $880;
  $58 = HEAP32[$56 >> 2] | 0;
  $67 = $56;
 }
 $59 = $0 + 8288 | 0;
 $60 = 720 - $58 | 0;
 $62 = +_downmix_and_resample($9, $2, $0 + 2892 + ($58 << 2) | 0, $59, ($$12 | 0) < ($60 | 0) ? $$12 : $60, $$14, $5, $6, $7, $37);
 $63 = $0 + 8284 | 0;
 $65 = +HEAPF32[$63 >> 2] + $62;
 HEAPF32[$63 >> 2] = $65;
 $66 = HEAP32[$67 >> 2] | 0;
 $68 = $66 + $$12 | 0;
 if (($68 | 0) < 720) {
  HEAP32[$67 >> 2] = $68;
  STACKTOP = sp;
  return;
 }
 $70 = $0 + 8272 | 0;
 $71 = HEAP32[$70 >> 2] | 0;
 $72 = $0 + 8300 + ($71 * 56 | 0) | 0;
 HEAP32[$70 >> 2] = $71 + (($71 | 0) > 98 ? -99 : 1);
 $$06 = 0;
 while (1) {
  if (($$06 | 0) == 240) break;
  $75 = +HEAPF32[19612 + ($$06 << 2) >> 2];
  HEAPF32[$20 + ($$06 << 3) >> 2] = $75 * +HEAPF32[$0 + 2892 + ($$06 << 2) >> 2];
  HEAPF32[$20 + ($$06 << 3) + 4 >> 2] = $75 * +HEAPF32[$0 + 2892 + ($$06 + 240 << 2) >> 2];
  $86 = 480 - $$06 + -1 | 0;
  HEAPF32[$20 + ($86 << 3) >> 2] = $75 * +HEAPF32[$0 + 2892 + ($86 << 2) >> 2];
  HEAPF32[$20 + ($86 << 3) + 4 >> 2] = $75 * +HEAPF32[$0 + 2892 + (720 - $$06 + -1 << 2) >> 2];
  $$06 = $$06 + 1 | 0;
 }
 _memcpy($0 + 2892 | 0, $0 + 4812 | 0, 960) | 0;
 $101 = $$12 + ($66 + -720) | 0;
 HEAPF32[$63 >> 2] = +_downmix_and_resample($9, $2, $0 + 3852 | 0, $59, $101, $$14 + 720 - $66 | 0, $5, $6, $7, HEAP32[$36 >> 2] | 0);
 HEAP32[$67 >> 2] = $101 + 240;
 _opus_fft_c($108, $20, $21);
 $109 = +HEAPF32[$21 >> 2];
 if ($109 != $109 | 0.0 != 0.0) {
  HEAP32[$72 >> 2] = 0;
  STACKTOP = sp;
  return;
 } else $$17 = 1;
 while (1) {
  if (($$17 | 0) == 240) {
   $$2 = 2;
   break;
  }
  $112 = +HEAPF32[$21 + ($$17 << 3) >> 2];
  $113 = 480 - $$17 | 0;
  $115 = +HEAPF32[$21 + ($113 << 3) >> 2];
  $118 = +HEAPF32[$21 + ($$17 << 3) + 4 >> 2];
  $120 = +HEAPF32[$21 + ($113 << 3) + 4 >> 2];
  $125 = +_fast_atan2f_457($118 - $120, $112 + $115) * .15915493667125702;
  $126 = $0 + 12 + ($$17 << 2) | 0;
  $128 = $125 - +HEAPF32[$126 >> 2];
  $129 = $0 + 972 + ($$17 << 2) | 0;
  $131 = $128 - +HEAPF32[$129 >> 2];
  $133 = +_fast_atan2f_457($115 - $112, $118 + $120) * .15915493667125702;
  $134 = $133 - $125;
  $135 = $134 - $128;
  $138 = $131 - +(_lrintf($131) | 0);
  $fabsf63 = +Math_abs(+$138);
  $140 = $138 * $138;
  $144 = $135 - +(_lrintf($135) | 0);
  HEAPF32[$23 + ($$17 << 2) >> 2] = $fabsf63 + +Math_abs(+$144);
  $146 = $144 * $144;
  $147 = $146 * $146;
  $148 = $0 + 1932 + ($$17 << 2) | 0;
  HEAPF32[$22 + ($$17 << 2) >> 2] = 1.0 / ((+HEAPF32[$148 >> 2] + $140 * $140 + $147 * 2.0) * .25 * 62341.81640625 + 1.0) + -.014999999664723873;
  HEAPF32[$15 + ($$17 << 2) >> 2] = 1.0 / ($147 * 62341.81640625 + 1.0) + -.014999999664723873;
  HEAPF32[$126 >> 2] = $133;
  HEAPF32[$129 >> 2] = $134;
  HEAPF32[$148 >> 2] = $147;
  $$17 = $$17 + 1 | 0;
 }
 while (1) {
  if (($$2 | 0) == 239) break;
  $167 = $$2 + -1 | 0;
  $169 = +HEAPF32[$15 + ($167 << 2) >> 2];
  $170 = $$2 + 1 | 0;
  $172 = +HEAPF32[$15 + ($170 << 2) >> 2];
  $173 = $169 > $172;
  $176 = $22 + ($$2 << 2) | 0;
  $177 = +HEAPF32[$176 >> 2];
  $178 = +HEAPF32[$15 + ((+HEAPF32[$15 + ($$2 << 2) >> 2] < ($173 ? $169 : $172) ? $$2 : $173 ? $167 : $170) << 2) >> 2] + -.10000000149011612;
  HEAPF32[$176 >> 2] = ($177 > $178 ? $177 : $178) * .8999999761581421;
  $$2 = $170;
 }
 $181 = $0 + 8300 + ($71 * 56 | 0) + 16 | 0;
 HEAPF32[$181 >> 2] = 0.0;
 L32 : do if (!(HEAP32[$24 >> 2] | 0)) {
  $$011 = 0;
  while (1) {
   if (($$011 | 0) == 18) break L32;
   HEAPF32[$0 + 7008 + ($$011 << 2) >> 2] = 1.0e10;
   HEAPF32[$0 + 7080 + ($$011 << 2) >> 2] = -1.0e10;
   $$011 = $$011 + 1 | 0;
  }
 } while (0);
 $187 = $109 * 2.0;
 $190 = +HEAPF32[$21 + 4 >> 2] * 2.0;
 $$050 = $187 * $187 + $190 * $190;
 $$3 = 1;
 while (1) {
  if (($$3 | 0) == 4) break;
  $195 = +HEAPF32[$21 + ($$3 << 3) >> 2];
  $197 = +HEAPF32[$21 + ($$3 << 3) + 4 >> 2];
  $199 = 480 - $$3 | 0;
  $201 = +HEAPF32[$21 + ($199 << 3) >> 2];
  $207 = +HEAPF32[$21 + ($199 << 3) + 4 >> 2];
  $$050 = $$050 + ($195 * $195 + $201 * $201 + $197 * $197 + $207 * $207);
  $$3 = $$3 + 1 | 0;
 }
 HEAPF32[$17 >> 2] = +Math_log(+($$050 + 1.000000013351432e-10)) * .7213475108146667;
 $217 = $0 + 7440 | 0;
 $$026 = 0.0;
 $$028 = 0.0;
 $$029 = 0.0;
 $$031 = 0.0;
 $$032 = 0.0;
 $$033 = 0.0;
 $$036 = 0.0;
 $$112 = 0;
 while (1) {
  if (($$112 | 0) >= 18) break;
  $221 = $$112 + 1 | 0;
  $223 = HEAP32[20572 + ($221 << 2) >> 2] | 0;
  $$046 = 0.0;
  $$047 = 0.0;
  $$049 = 0.0;
  $$4 = HEAP32[20572 + ($$112 << 2) >> 2] | 0;
  while (1) {
   if (($$4 | 0) >= ($223 | 0)) break;
   $226 = +HEAPF32[$21 + ($$4 << 3) >> 2];
   $228 = 480 - $$4 | 0;
   $230 = +HEAPF32[$21 + ($228 << 3) >> 2];
   $234 = +HEAPF32[$21 + ($$4 << 3) + 4 >> 2];
   $238 = +HEAPF32[$21 + ($228 << 3) + 4 >> 2];
   $240 = $226 * $226 + $230 * $230 + $234 * $234 + $238 * $238;
   $243 = +HEAPF32[$22 + ($$4 << 2) >> 2];
   $$046 = $$046 + $240 * 2.0 * (.5 - +HEAPF32[$23 + ($$4 << 2) >> 2]);
   $$047 = $$047 + $240 * ($243 < 0.0 ? 0.0 : $243);
   $$049 = $$049 + $240;
   $$4 = $$4 + 1 | 0;
  }
  if (!($$049 < 1.0e9) | ($$049 != $$049 | 0.0 != 0.0)) {
   label = 32;
   break;
  }
  HEAPF32[$0 + 5856 + ((HEAP32[$217 >> 2] | 0) * 72 | 0) + ($$112 << 2) >> 2] = $$049;
  $259 = $$049 + 1.0000000036274937e-15;
  $261 = $$029 + $$046 / $259;
  $262 = $$049 + 1.000000013351432e-10;
  $263 = $$036 + +Math_sqrt(+$262);
  $266 = +Math_log(+$262);
  HEAPF32[$11 + ($$112 << 2) >> 2] = $266;
  HEAPF32[$17 + ($221 << 2) >> 2] = $266 * .7213475108146667;
  HEAPF32[$0 + 6432 + ((HEAP32[$217 >> 2] | 0) * 72 | 0) + ($$112 << 2) >> 2] = $266;
  if (!(HEAP32[$24 >> 2] | 0)) {
   $274 = $0 + 7008 + ($$112 << 2) | 0;
   HEAPF32[$274 >> 2] = $266;
   $275 = $0 + 7080 + ($$112 << 2) | 0;
   HEAPF32[$275 >> 2] = $266;
   $$pre$phi110Z2D = $275;
   $$pre$phi111Z2D = $274;
   $277 = $266;
   $279 = $266;
  } else {
   $$phi$trans$insert105 = $0 + 7080 + ($$112 << 2) | 0;
   $$phi$trans$insert107 = $0 + 7008 + ($$112 << 2) | 0;
   $$pre$phi110Z2D = $$phi$trans$insert105;
   $$pre$phi111Z2D = $$phi$trans$insert107;
   $277 = +HEAPF32[$$phi$trans$insert105 >> 2];
   $279 = +HEAPF32[$$phi$trans$insert107 >> 2];
  }
  do if ($277 > $279 + 7.5) if ($277 - $266 > $266 - $279) {
   $285 = $277 + -.009999999776482582;
   HEAPF32[$$pre$phi110Z2D >> 2] = $285;
   $288 = $285;
   $291 = $279;
   break;
  } else {
   $286 = $279 + .009999999776482582;
   HEAPF32[$$pre$phi111Z2D >> 2] = $286;
   $288 = $277;
   $291 = $286;
   break;
  } else {
   $288 = $277;
   $291 = $279;
  } while (0);
  if ($266 > $288) {
   HEAPF32[$$pre$phi110Z2D >> 2] = $266;
   $289 = $266 + -15.0;
   $$154 = $289 > $291 ? $289 : $291;
   HEAPF32[$$pre$phi111Z2D >> 2] = $$154;
   $296 = $$154;
   $298 = $266;
  } else if ($266 < $291) {
   HEAPF32[$$pre$phi111Z2D >> 2] = $266;
   $293 = $266 + 15.0;
   $$155 = $293 < $288 ? $293 : $288;
   HEAPF32[$$pre$phi110Z2D >> 2] = $$155;
   $296 = $266;
   $298 = $$155;
  } else {
   $296 = $291;
   $298 = $288;
  }
  $300 = ($266 - $296) / ($298 - $296 + 1.0000000036274937e-15);
  $$035 = 0.0;
  $$045 = 0.0;
  $$5 = 0;
  while (1) {
   if (($$5 | 0) == 8) break;
   $302 = +HEAPF32[$0 + 5856 + ($$5 * 72 | 0) + ($$112 << 2) >> 2];
   $$035 = $$035 + $302;
   $$045 = $$045 + +Math_sqrt(+$302);
   $$5 = $$5 + 1 | 0;
  }
  $312 = $$045 / +Math_sqrt(+($$035 * 8.0 + 1.0e-15));
  $314 = $312 > .9900000095367432 ? .9900000095367432 : $312;
  $315 = $314 * $314;
  $316 = $315 * $315;
  $318 = $$047 / $259;
  $319 = $0 + 5776 + ($$112 << 2) | 0;
  $321 = $316 * +HEAPF32[$319 >> 2];
  $$156 = $318 > $321 ? $318 : $321;
  HEAPF32[$10 + ($$112 << 2) >> 2] = $$156;
  $324 = $$026 + $$156;
  if (($$112 | 0) > 8) $$127 = $324 - +HEAPF32[$10 + ($$112 + -9 << 2) >> 2]; else $$127 = $324;
  $334 = (+($$112 + -18 | 0) * .029999999329447746 + 1.0) * $$127;
  HEAPF32[$319 >> 2] = $$156;
  $$026 = $$127;
  $$028 = $$028 > $334 ? $$028 : $334;
  $$029 = $261;
  $$031 = $$031 + $$156 * +($$112 + -8 | 0);
  $$032 = $$032 + $316;
  $$033 = $$033 + $300;
  $$036 = $263;
  $$112 = $221;
 }
 if ((label | 0) == 32) {
  HEAP32[$72 >> 2] = 0;
  STACKTOP = sp;
  return;
 }
 $341 = HEAP32[$17 >> 2] | 0;
 HEAP32[$18 >> 2] = $341;
 $342 = (HEAP32[tempDoublePtr >> 2] = $341, +HEAPF32[tempDoublePtr >> 2]) + -2.5;
 HEAPF32[$19 >> 2] = $342;
 $$213 = 1;
 $360 = $342;
 while (1) {
  if (($$213 | 0) == 19) {
   $$314 = 16;
   break;
  }
  $345 = $$213 + -1 | 0;
  $351 = +((HEAP32[20572 + ($$213 << 2) >> 2] | 0) - (HEAP32[20572 + ($345 << 2) >> 2] | 0) | 0) * 2.0 * .25;
  $354 = +HEAPF32[$18 + ($345 << 2) >> 2] + $351;
  $356 = +HEAPF32[$17 + ($$213 << 2) >> 2];
  HEAPF32[$18 + ($$213 << 2) >> 2] = $354 < $356 ? $354 : $356;
  $359 = $360 - $351;
  $361 = $356 + -2.5;
  $363 = $359 > $361 ? $359 : $361;
  HEAPF32[$19 + ($$213 << 2) >> 2] = $363;
  $$213 = $$213 + 1 | 0;
  $360 = $363;
 }
 while (1) {
  if (($$314 | 0) <= -1) {
   $$415 = 0;
   break;
  }
  $367 = $$314 + 1 | 0;
  $375 = +((HEAP32[20572 + ($367 << 2) >> 2] | 0) - (HEAP32[20572 + ($$314 << 2) >> 2] | 0) | 0) * 2.0 * .25;
  $378 = +HEAPF32[$18 + ($367 << 2) >> 2] + $375;
  $379 = $18 + ($$314 << 2) | 0;
  $380 = +HEAPF32[$379 >> 2];
  HEAPF32[$379 >> 2] = $378 < $380 ? $378 : $380;
  $384 = +HEAPF32[$19 + ($367 << 2) >> 2] - $375;
  $385 = $19 + ($$314 << 2) | 0;
  $386 = +HEAPF32[$385 >> 2];
  HEAPF32[$385 >> 2] = $384 > $386 ? $384 : $386;
  $$314 = $$314 + -1 | 0;
 }
 while (1) {
  if (($$415 | 0) == 19) {
   $$048 = 0.0;
   $$6 = 0;
   break;
  }
  $393 = +HEAPF32[$17 + ($$415 << 2) >> 2];
  $394 = +HEAPF32[$19 + ($$415 << 2) >> 2] - $393;
  $400 = $393 - (+HEAPF32[$18 + ($$415 << 2) >> 2] + 2.5);
  $408 = ~~+Math_floor(+((($394 < 0.0 ? 0.0 : $394) + ($400 < 0.0 ? 0.0 : $400)) * 64.0 + .5));
  HEAP8[$0 + 8300 + ($71 * 56 | 0) + 36 + $$415 >> 0] = ($408 | 0) < 255 ? $408 : 255;
  $$415 = $$415 + 1 | 0;
 }
 while (1) {
  if (($$6 | 0) == 8) break; else {
   $$024 = 999999986991104.0;
   $$030 = 0;
  }
  while (1) {
   if (($$030 | 0) == 8) break; else {
    $$022 = 0.0;
    $$023 = 0;
   }
   while (1) {
    if (($$023 | 0) == 18) break;
    $417 = +HEAPF32[$0 + 6432 + ($$6 * 72 | 0) + ($$023 << 2) >> 2] - +HEAPF32[$0 + 6432 + ($$030 * 72 | 0) + ($$023 << 2) >> 2];
    $$022 = $$022 + $417 * $417;
    $$023 = $$023 + 1 | 0;
   }
   $$024 = ($$030 | 0) == ($$6 | 0) | $$024 < $$022 ? $$024 : $$022;
   $$030 = $$030 + 1 | 0;
  }
  $$048 = $$048 + $$024;
  $$6 = $$6 + 1 | 0;
 }
 $sqrtf = +Math_sqrt(+($$048 * .125 / 18.0));
 $431 = ($8 | 0) < 8 ? 5.699999746866524e-04 : 5.699999746866524e-04 / +(1 << $8 + -8 | 0);
 $432 = $431 * $431;
 $433 = $33 ? .9980000257492065 : 1.0 - $$op188;
 $$037 = 0.0;
 $$038 = 0;
 $$044 = 0.0;
 $$617 = 0;
 while (1) {
  if (($$617 | 0) == 18) break;
  $435 = HEAP32[20572 + ($$617 << 2) >> 2] | 0;
  $436 = $$617 + 1 | 0;
  $438 = HEAP32[20572 + ($436 << 2) >> 2] | 0;
  $$021 = 0.0;
  $$7 = $435;
  while (1) {
   if (($$7 | 0) >= ($438 | 0)) break;
   $441 = +HEAPF32[$21 + ($$7 << 3) >> 2];
   $443 = +HEAPF32[$21 + ($$7 << 3) + 4 >> 2];
   $445 = 480 - $$7 | 0;
   $447 = +HEAPF32[$21 + ($445 << 3) >> 2];
   $453 = +HEAPF32[$21 + ($445 << 3) + 4 >> 2];
   $$021 = $$021 + ($441 * $441 + $447 * $447 + $443 * $443 + $453 * $453);
   $$7 = $$7 + 1 | 0;
  }
  $459 = $$044 > $$021 ? $$044 : $$021;
  $460 = $0 + 7152 + ($$617 << 2) | 0;
  $462 = $433 * +HEAPF32[$460 >> 2];
  $464 = $462 > $$021 ? $462 : $$021;
  HEAPF32[$460 >> 2] = $464;
  $466 = $$021 > $464 ? $$021 : $464;
  $467 = $$037 * .05000000074505806;
  $469 = $467 > $466 ? $467 : $466;
  if (!($466 > $469 * .1 & $466 * 1.0e9 > $459)) {
   $$038$phi = $$038;
   $$037 = $469;
   $$044 = $459;
   $$617 = $436;
   $$038 = $$038$phi;
   continue;
  }
  if (!($466 > $432 * +($438 - $435 | 0))) {
   $$038$phi = $$038;
   $$037 = $469;
   $$044 = $459;
   $$617 = $436;
   $$038 = $$038$phi;
   continue;
  }
  $$037 = $469;
  $$038 = $436;
  $$044 = $459;
  $$617 = $436;
 }
 if ((HEAP32[$36 >> 2] | 0) == 48e3) {
  $482 = $65 * 1.7361111531499773e-05;
  $486 = (HEAP32[$0 + 5852 >> 2] | 0) == 20 ? .029999999329447746 : .07000000029802322;
  $489 = $0 + 7224 | 0;
  $491 = $433 * +HEAPF32[$489 >> 2];
  $493 = $491 > $482 ? $491 : $482;
  HEAPF32[$489 >> 2] = $493;
  $495 = $482 > $493 ? $482 : $493;
  $496 = $$037 * .05000000074505806;
  $$442 = ($495 * 1.0e9 > ($$044 > $482 ? $$044 : $482) ? $495 > $486 * ($496 > $495 ? $496 : $495) : 0) & $495 > $432 * 160.0 | ($$038 | 0) > 16 ? 20 : $$038;
 } else $$442 = $$038;
 $506 = HEAP32[$24 >> 2] | 0;
 $$$442 = ($506 | 0) < 3 ? 20 : $$442;
 $511 = +_log10($$036) * 20.0;
 $512 = $0 + 7432 | 0;
 $514 = +HEAPF32[$512 >> 2] + -.003000000026077032;
 $516 = $514 > $511 ? $514 : $511;
 HEAPF32[$512 >> 2] = $516;
 $518 = $0 + 7436 | 0;
 $520 = +HEAPF32[$518 >> 2] * (1.0 - $32);
 HEAPF32[$518 >> 2] = $511 < $516 + -30.0 ? $520 + $32 : $520;
 $$8 = 0;
 while (1) {
  if (($$8 | 0) == 8) {
   $$9 = 0;
   break;
  }
  $524 = $$8 << 4;
  $$020 = 0.0;
  $$718 = 0;
  while (1) {
   if (($$718 | 0) == 16) break;
   $$020 = $$020 + +HEAPF32[20648 + ($524 + $$718 << 2) >> 2] * +HEAPF32[$11 + ($$718 << 2) >> 2];
   $$718 = $$718 + 1 | 0;
  }
  HEAPF32[$12 + ($$8 << 2) >> 2] = $$020;
  $$8 = $$8 + 1 | 0;
 }
 while (1) {
  if (($$9 | 0) == 8) break;
  $535 = $$9 << 4;
  $$05 = 0.0;
  $$819 = 0;
  while (1) {
   if (($$819 | 0) == 16) break;
   $$05 = $$05 + +HEAPF32[20648 + ($535 + $$819 << 2) >> 2] * .5 * (+HEAPF32[$0 + 7080 + ($$819 << 2) >> 2] + +HEAPF32[$0 + 7008 + ($$819 << 2) >> 2]);
   $$819 = $$819 + 1 | 0;
  }
  HEAPF32[$16 + ($$9 << 2) >> 2] = $$05;
  $$9 = $$9 + 1 | 0;
 }
 $550 = $$032 / 18.0;
 $553 = $$029 / 18.0;
 HEAPF32[$181 >> 2] = $553 + (1.0 - $553) * (($506 | 0) < 10 ? .5 : $$033 / 18.0);
 $557 = $$028 / 9.0;
 $558 = $0 + 5848 | 0;
 $560 = +HEAPF32[$558 >> 2] * .800000011920929;
 $562 = $557 > $560 ? $557 : $560;
 HEAPF32[$558 >> 2] = $562;
 $564 = $0 + 8300 + ($71 * 56 | 0) + 8 | 0;
 HEAPF32[$564 >> 2] = $$031 * .015625;
 HEAP32[$217 >> 2] = ((HEAP32[$217 >> 2] | 0) + 1 | 0) % 8 | 0;
 $568 = $506 + 1 | 0;
 HEAP32[$24 >> 2] = ($568 | 0) < 1e4 ? $568 : 1e4;
 $570 = $0 + 8300 + ($71 * 56 | 0) + 4 | 0;
 HEAPF32[$570 >> 2] = $562;
 $$10 = 0;
 while (1) {
  if (($$10 | 0) == 4) break;
  HEAPF32[$13 + ($$10 << 2) >> 2] = (+HEAPF32[$12 + ($$10 << 2) >> 2] + +HEAPF32[$0 + 7228 + ($$10 + 24 << 2) >> 2]) * -.12298999726772308 + (+HEAPF32[$0 + 7228 + ($$10 << 2) >> 2] + +HEAPF32[$0 + 7228 + ($$10 + 16 << 2) >> 2]) * .49195000529289246 + +HEAPF32[$0 + 7228 + ($$10 + 8 << 2) >> 2] * .6969299912452698 - +HEAPF32[$0 + 7356 + ($$10 << 2) >> 2] * 1.4349000453948975;
  $$10 = $$10 + 1 | 0;
 }
 $571 = 1.0 - $29;
 $$11 = 0;
 while (1) {
  if (($$11 | 0) == 4) {
   $$128 = 0;
   break;
  }
  $598 = $0 + 7356 + ($$11 << 2) | 0;
  HEAPF32[$598 >> 2] = $571 * +HEAPF32[$598 >> 2] + $29 * +HEAPF32[$12 + ($$11 << 2) >> 2];
  $$11 = $$11 + 1 | 0;
 }
 while (1) {
  if (($$128 | 0) == 4) {
   $$13 = 0;
   break;
  }
  HEAPF32[$13 + ($$128 + 4 << 2) >> 2] = (+HEAPF32[$12 + ($$128 << 2) >> 2] - +HEAPF32[$0 + 7228 + ($$128 + 24 << 2) >> 2]) * .6324599981307983 + (+HEAPF32[$0 + 7228 + ($$128 << 2) >> 2] - +HEAPF32[$0 + 7228 + ($$128 + 16 << 2) >> 2]) * .31622999906539917;
  $$128 = $$128 + 1 | 0;
 }
 while (1) {
  if (($$13 | 0) == 3) break;
  $639 = $$13 + 8 | 0;
  HEAPF32[$13 + ($639 << 2) >> 2] = (+HEAPF32[$12 + ($$13 << 2) >> 2] + +HEAPF32[$0 + 7228 + ($$13 + 24 << 2) >> 2]) * .5345199704170227 - (+HEAPF32[$0 + 7228 + ($$13 << 2) >> 2] + +HEAPF32[$0 + 7228 + ($$13 + 16 << 2) >> 2]) * .26725998520851135 - +HEAPF32[$0 + 7228 + ($639 << 2) >> 2] * .5345199704170227;
  $$13 = $$13 + 1 | 0;
 }
 L136 : do if ((HEAP32[$24 >> 2] | 0) > 5) {
  $$149 = 0;
  while (1) {
   if (($$149 | 0) == 9) {
    $$15 = 0;
    break L136;
   }
   $648 = $0 + 7388 + ($$149 << 2) | 0;
   $652 = +HEAPF32[$13 + ($$149 << 2) >> 2];
   HEAPF32[$648 >> 2] = $571 * +HEAPF32[$648 >> 2] + $29 * $652 * $652;
   $$149 = $$149 + 1 | 0;
  }
 } else $$15 = 0; while (0);
 while (1) {
  if (($$15 | 0) == 4) {
   $$16 = 0;
   break;
  }
  HEAPF32[$13 + ($$15 << 2) >> 2] = +HEAPF32[$12 + ($$15 << 2) >> 2] - +HEAPF32[$16 + ($$15 << 2) >> 2];
  $$15 = $$15 + 1 | 0;
 }
 while (1) {
  if (($$16 | 0) == 8) {
   $$1710 = 0;
   break;
  }
  $665 = $0 + 7228 + ($$16 + 16 << 2) | 0;
  HEAP32[$0 + 7228 + ($$16 + 24 << 2) >> 2] = HEAP32[$665 >> 2];
  $670 = $0 + 7228 + ($$16 + 8 << 2) | 0;
  HEAP32[$665 >> 2] = HEAP32[$670 >> 2];
  $672 = $0 + 7228 + ($$16 << 2) | 0;
  HEAP32[$670 >> 2] = HEAP32[$672 >> 2];
  HEAP32[$672 >> 2] = HEAP32[$12 + ($$16 << 2) >> 2];
  $$16 = $$16 + 1 | 0;
 }
 while (1) {
  if (($$1710 | 0) == 9) break;
  $sqrtf55 = +Math_sqrt(+(+HEAPF32[$0 + 7388 + ($$1710 << 2) >> 2]));
  HEAPF32[$13 + ($$1710 + 11 << 2) >> 2] = $sqrtf55 - +HEAPF32[21160 + ($$1710 << 2) >> 2];
  $$1710 = $$1710 + 1 | 0;
 }
 HEAPF32[$13 + 72 >> 2] = $sqrtf + -.7799999713897705;
 HEAPF32[$13 + 80 >> 2] = +HEAPF32[$570 >> 2] + -.15472300350666046;
 HEAPF32[$13 + 84 >> 2] = +HEAPF32[$181 >> 2] + -.7246429920196533;
 HEAPF32[$13 + 88 >> 2] = $550 + -.7437170147895813;
 HEAPF32[$13 + 92 >> 2] = +HEAPF32[$564 >> 2] + .06921599805355072;
 HEAPF32[$13 + 96 >> 2] = +HEAPF32[$518 >> 2] + -.06792999804019928;
 _mlp_process($13, $14);
 $703 = (+HEAPF32[$14 >> 2] + 1.0) * .5;
 HEAPF32[$14 >> 2] = $703;
 $704 = $14 + 4 | 0;
 $707 = +HEAPF32[$704 >> 2] * .5 + .5;
 $708 = $707 * $707;
 HEAPF32[$704 >> 2] = $708;
 HEAPF32[$0 + 8300 + ($71 * 56 | 0) + 32 >> 2] = $708;
 $710 = $0 + 7424 | 0;
 $711 = +HEAPF32[$710 >> 2];
 $713 = 1.0 - $711;
 $715 = $711 * 1.0000000474974513e-03 + $713 * .009999999776482582;
 $716 = $708 > .949999988079071;
 $or$cond171 = $708 < .05000000074505806 & ($716 ^ 1);
 $718 = $or$cond171 | $716 ? ($or$cond171 ? .05000000074505806 : .949999988079071) : $708;
 $719 = $0 + 7428 | 0;
 $720 = +HEAPF32[$719 >> 2];
 $721 = $720 > .949999988079071;
 $or$cond173 = $720 < .05000000074505806 & ($721 ^ 1);
 $723 = $or$cond173 | $721 ? ($or$cond173 ? .05000000074505806 : .949999988079071) : $720;
 $733 = 1.0 - $720;
 $734 = 1.0 - $715;
 $743 = +Math_abs(+($718 - $723)) * .05000000074505806 / ($718 * (1.0 - $723) + $723 * (1.0 - $718)) + .019999999552965164;
 $750 = ($720 * $734 + $733 * $715) * +Math_pow(+$708, +$743);
 $752 = $750 / (($733 * $734 + $720 * $715) * +Math_pow(+(1.0 - $708), +$743) + $750);
 HEAPF32[$719 >> 2] = $752;
 HEAPF32[$0 + 8300 + ($71 * 56 | 0) + 24 >> 2] = $752;
 $754 = +HEAPF32[$719 >> 2];
 $758 = $754 * $703 + (1.0 - $754) * .5;
 HEAPF32[$14 >> 2] = $758;
 $759 = $758 > .949999988079071;
 $or$cond177 = $758 < .05000000074505806 & ($759 ^ 1);
 $761 = $or$cond177 | $759 ? ($or$cond177 ? .05000000074505806 : .949999988079071) : $758;
 $762 = $711 > .949999988079071;
 $or$cond181 = $711 < .05000000074505806 & ($762 ^ 1);
 $764 = $or$cond181 | $762 ? ($or$cond181 ? .05000000074505806 : .949999988079071) : $711;
 $782 = +Math_abs(+($761 - $764)) * .05000000074505806 / ($761 * (1.0 - $764) + $764 * (1.0 - $761)) + .019999999552965164;
 $784 = +Math_pow(+(1.0 - $758), +$782);
 $788 = +Math_pow(+$758, +$782);
 $789 = ($711 * .9998999834060669 + $713 * 9.999999747378752e-05) * $788;
 $791 = $789 / (($713 * .9998999834060669 + $711 * 9.999999747378752e-05) * $784 + $789);
 HEAPF32[$710 >> 2] = $791;
 HEAPF32[$0 + 8300 + ($71 * 56 | 0) + 20 >> 2] = $791;
 if ((HEAP32[$24 >> 2] | 0) == 1) {
  $$184 = (HEAP32[$0 + 4 >> 2] | 0) == 2048 ? .10000000149011612 : .625;
  $798 = $0 + 7856 | 0;
  HEAPF32[$798 >> 2] = $$184;
  $799 = 1.0 - $$184;
  $800 = $0 + 7456 | 0;
  HEAPF32[$800 >> 2] = $799;
  $$pre$phi112Z2D = $800;
  $$pre$phi113Z2D = $798;
  $804 = $799;
  $808 = $$184;
 } else {
  $$phi$trans$insert98 = $0 + 7456 | 0;
  $$phi$trans$insert100 = $0 + 7856 | 0;
  $$pre$phi112Z2D = $$phi$trans$insert98;
  $$pre$phi113Z2D = $$phi$trans$insert100;
  $804 = +HEAPF32[$$phi$trans$insert98 >> 2];
  $808 = +HEAPF32[$$phi$trans$insert100 >> 2];
 }
 $803 = $804 + +HEAPF32[$0 + 7460 >> 2];
 $807 = $808 + +HEAPF32[$0 + 7860 >> 2];
 HEAPF32[$$pre$phi112Z2D >> 2] = $803 * .9998999834060669 * $784;
 HEAPF32[$$pre$phi113Z2D >> 2] = $807 * .9998999834060669 * $788;
 $$18 = 1;
 while (1) {
  if (($$18 | 0) == 99) break;
  $813 = $$18 + 1 | 0;
  HEAPF32[$0 + 7456 + ($$18 << 2) >> 2] = +HEAPF32[$0 + 7456 + ($813 << 2) >> 2] * $784;
  HEAPF32[$0 + 7856 + ($$18 << 2) >> 2] = +HEAPF32[$0 + 7856 + ($813 << 2) >> 2] * $788;
  $$18 = $813;
 }
 HEAPF32[$0 + 7852 >> 2] = $807 * 9.999999747378752e-05 * $784;
 HEAPF32[$0 + 8252 >> 2] = $803 * 9.999999747378752e-05 * $788;
 $$0 = 9.999999682655225e-21;
 $$19 = 0;
 while (1) {
  if (($$19 | 0) == 100) break;
  $$0 = $$0 + (+HEAPF32[$0 + 7456 + ($$19 << 2) >> 2] + +HEAPF32[$0 + 7856 + ($$19 << 2) >> 2]);
  $$19 = $$19 + 1 | 0;
 }
 $835 = 1.0 / $$0;
 $$20 = 0;
 while (1) {
  if (($$20 | 0) == 100) break;
  $836 = $0 + 7456 + ($$20 << 2) | 0;
  HEAPF32[$836 >> 2] = +HEAPF32[$836 >> 2] * $835;
  $839 = $0 + 7856 + ($$20 << 2) | 0;
  HEAPF32[$839 >> 2] = +HEAPF32[$839 >> 2] * $835;
  $$20 = $$20 + 1 | 0;
 }
 $844 = +HEAPF32[$710 >> 2];
 if ($708 > .75) {
  $845 = $844;
  if ($845 > .9) {
   $847 = $0 + 8268 | 0;
   $849 = (HEAP32[$847 >> 2] | 0) + 1 | 0;
   HEAP32[$847 >> 2] = ($849 | 0) < 500 ? $849 : 500;
   $853 = $0 + 8260 | 0;
   $854 = +HEAPF32[$853 >> 2];
   $855 = $758 - $854;
   HEAPF32[$853 >> 2] = $854 + 1.0 / +($849 | 0) * ($855 < -.20000000298023224 ? -.20000000298023224 : $855);
  }
  if ($845 < .1) {
   $861 = $0 + 8264 | 0;
   $863 = (HEAP32[$861 >> 2] | 0) + 1 | 0;
   HEAP32[$861 >> 2] = ($863 | 0) < 500 ? $863 : 500;
   $867 = $0 + 8256 | 0;
   $868 = +HEAPF32[$867 >> 2];
   $869 = $758 - $868;
   HEAPF32[$867 >> 2] = $868 + 1.0 / +($863 | 0) * ($869 > .20000000298023224 ? .20000000298023224 : $869);
  }
 }
 HEAP32[$0 + 7444 >> 2] = $844 > .5 & 1;
 HEAP32[$0 + 8300 + ($71 * 56 | 0) + 28 >> 2] = $$$442;
 HEAP32[$0 + 5852 >> 2] = $$$442;
 HEAPF32[$0 + 8300 + ($71 * 56 | 0) + 12 >> 2] = $553;
 HEAP32[$72 >> 2] = 1;
 STACKTOP = sp;
 return;
}

function _silk_Encode($0, $1, $2, $3, $4, $5, $6) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 var $$ = 0, $$0 = 0, $$010 = 0, $$016 = 0, $$020 = 0, $$021 = 0, $$023 = 0, $$024 = 0, $$025 = 0, $$036 = 0, $$037 = 0, $$04 = 0, $$05 = 0, $$08 = 0, $$09 = 0, $$1 = 0, $$10 = 0, $$1035 = 0, $$11 = 0, $$111 = 0, $$117 = 0, $$12 = 0, $$122 = 0, $$126 = 0, $$13 = 0, $$139 = 0, $$212 = 0, $$218 = 0, $$227 = 0, $$3 = 0, $$313 = 0, $$319 = 0, $$328 = 0, $$414 = 0, $$429 = 0, $$5 = 0, $$515 = 0, $$6 = 0, $$7 = 0, $$73 = 0, $$75 = 0, $$8 = 0, $$833 = 0, $$9 = 0, $$934 = 0, $$idx44 = 0, $$idx45 = 0, $$pre$phiZ2D = 0, $$pre61 = 0, $101 = 0, $102 = 0, $106 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $167 = 0, $168 = 0, $171 = 0, $174 = 0, $179 = 0, $19 = 0, $194 = 0, $195 = 0, $197 = 0, $21 = 0, $213 = 0, $221 = 0, $24 = 0, $242 = 0, $256 = 0, $261 = 0, $264 = 0, $265 = 0, $268 = 0, $27 = 0, $277 = 0, $280 = 0, $299 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $305 = 0, $330 = 0, $331 = 0, $334 = 0, $335 = 0, $337 = 0, $341 = 0, $344 = 0, $347 = 0, $348 = 0, $350 = 0, $364 = 0, $371 = 0, $372 = 0, $378 = 0, $385 = 0, $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0, $398 = 0, $399 = 0, $401 = 0, $409 = 0, $41 = 0, $412 = 0, $426 = 0, $430 = 0, $439 = 0, $442 = 0, $444 = 0, $46 = 0, $466 = 0, $47 = 0, $471 = 0, $475 = 0, $488 = 0, $495 = 0, $507 = 0, $51 = 0, $514 = 0, $528 = 0, $62 = 0, $64 = 0, $65 = 0, $68 = 0, $7 = 0, $70 = 0, $75 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $81 = 0, $92 = 0, $93 = 0, $94 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 $7 = sp;
 $8 = sp + 8 | 0;
 if (HEAP32[$1 + 68 >> 2] | 0) {
  HEAP32[$0 + 4660 >> 2] = 1;
  HEAP32[$0 + 14720 >> 2] = 1;
 }
 HEAP32[$0 + 15804 >> 2] = 0;
 $15 = $0 + 5744 | 0;
 HEAP32[$15 >> 2] = 0;
 $16 = _check_control_input($1) | 0;
 if ($16 | 0) {
  $$0 = $16;
  STACKTOP = sp;
  return $$0 | 0;
 }
 HEAP32[$1 + 88 >> 2] = 0;
 $19 = $1 + 4 | 0;
 $21 = $0 + 20188 | 0;
 if ((HEAP32[$19 >> 2] | 0) > (HEAP32[$21 >> 2] | 0)) {
  $24 = $0 + 10060 | 0;
  $27 = _silk_init_encoder($24, HEAP32[$0 + 5088 >> 2] | 0) | 0;
  HEAP32[$0 + 20120 >> 2] = 0;
  HEAP32[$0 + 20128 >> 2] = 0;
  HEAP32[$0 + 20132 >> 2] = 0;
  HEAP32[$0 + 20136 >> 2] = 1;
  HEAP32[$0 + 20140 >> 2] = 0;
  HEAP32[$0 + 20144 >> 2] = 1;
  HEAP16[$0 + 20150 >> 1] = 0;
  HEAP16[$0 + 20148 >> 1] = 16384;
  if ((HEAP32[$0 + 20184 >> 2] | 0) == 2) {
   _memcpy($0 + 15832 | 0, $0 + 5772 | 0, 300) | 0;
   $41 = $0;
   $46 = HEAP32[$41 + 4 >> 2] | 0;
   $47 = $24;
   HEAP32[$47 >> 2] = HEAP32[$41 >> 2];
   HEAP32[$47 + 4 >> 2] = $46;
   $$025 = $27;
  } else $$025 = $27;
 } else $$025 = 0;
 $51 = $1 + 24 | 0;
 if ((HEAP32[$51 >> 2] | 0) == (HEAP32[$0 + 4608 >> 2] | 0)) $106 = (HEAP32[$21 >> 2] | 0) != (HEAP32[$19 >> 2] | 0); else $106 = 1;
 HEAP32[$0 + 20184 >> 2] = HEAP32[$1 >> 2];
 HEAP32[$21 >> 2] = HEAP32[$19 >> 2];
 $62 = $3 * 100 | 0;
 $64 = HEAP32[$1 + 8 >> 2] | 0;
 $65 = ($62 | 0) / ($64 | 0) | 0;
 $$ = ($65 | 0) > 1 ? $65 >> 1 : 1;
 $68 = ($6 | 0) == 0;
 L14 : do if ($68) {
  if ((Math_imul($65, $64) | 0) != ($62 | 0) | ($3 | 0) < 0) {
   $$0 = -101;
   STACKTOP = sp;
   return $$0 | 0;
  }
  if (($3 * 1e3 | 0) > (Math_imul(HEAP32[$51 >> 2] | 0, $64) | 0)) {
   $$0 = -101;
   STACKTOP = sp;
   return $$0 | 0;
  } else {
   $$023 = 0;
   $$024 = 0;
   $$227 = $$025;
   $$pre$phiZ2D = $0;
   break;
  }
 } else {
  if (($65 | 0) != 1) {
   $$0 = -101;
   STACKTOP = sp;
   return $$0 | 0;
  }
  $$010 = 0;
  $$126 = $$025;
  while (1) {
   $70 = HEAP32[$19 >> 2] | 0;
   if (($$010 | 0) >= ($70 | 0)) break;
   $75 = _silk_init_encoder($0 + ($$010 * 10060 | 0) | 0, HEAP32[$0 + ($$010 * 10060 | 0) + 5088 >> 2] | 0) | 0;
   $$010 = $$010 + 1 | 0;
   $$126 = $75;
  }
  $77 = HEAP32[$51 >> 2] | 0;
  HEAP32[$51 >> 2] = 10;
  $78 = $1 + 36 | 0;
  $79 = HEAP32[$78 >> 2] | 0;
  HEAP32[$78 >> 2] = 0;
  $$111 = 0;
  $81 = $70;
  while (1) {
   if (($$111 | 0) >= ($81 | 0)) {
    $$023 = $77;
    $$024 = $79;
    $$227 = $$126;
    $$pre$phiZ2D = $0;
    break L14;
   }
   HEAP32[$0 + ($$111 * 10060 | 0) + 4664 >> 2] = 0;
   HEAP32[$0 + ($$111 * 10060 | 0) + 4676 >> 2] = 1;
   $$111 = $$111 + 1 | 0;
   $81 = HEAP32[$19 >> 2] | 0;
  }
 } while (0);
 $92 = $0 + 4572 | 0;
 $93 = $0 + 20200 | 0;
 $94 = $0 + 5740 | 0;
 $$212 = 0;
 $$328 = $$227;
 while (1) {
  if (($$212 | 0) >= (HEAP32[$19 >> 2] | 0)) break;
  if (($$212 | 0) == 1) $101 = HEAP32[$92 >> 2] | 0; else $101 = 0;
  $102 = _silk_control_encoder($$pre$phiZ2D + ($$212 * 10060 | 0) | 0, $1, HEAP32[$93 >> 2] | 0, $$212, $101) | 0;
  if ($102 | 0) {
   $$0 = $102;
   label = 145;
   break;
  }
  L41 : do if ((HEAP32[$$pre$phiZ2D + ($$212 * 10060 | 0) + 4660 >> 2] | 0) != 0 | $106) {
   $$016 = 0;
   while (1) {
    if (($$016 | 0) >= (HEAP32[$94 >> 2] | 0)) break L41;
    HEAP32[$$pre$phiZ2D + ($$212 * 10060 | 0) + 4720 + ($$016 << 2) >> 2] = 0;
    $$016 = $$016 + 1 | 0;
   }
  } while (0);
  HEAP32[$$pre$phiZ2D + ($$212 * 10060 | 0) + 6076 >> 2] = HEAP32[$$pre$phiZ2D + ($$212 * 10060 | 0) + 6072 >> 2];
  $$212 = $$212 + 1 | 0;
  $$328 = 0;
 }
 if ((label | 0) == 145) {
  STACKTOP = sp;
  return $$0 | 0;
 }
 $115 = $65 * 10 | 0;
 $116 = HEAP32[$92 >> 2] | 0;
 $117 = Math_imul($115, $116) | 0;
 $118 = $0 + 4552 | 0;
 $122 = (Math_imul($117, HEAP32[$118 >> 2] | 0) | 0) / ($116 * 1e3 | 0) | 0;
 $123 = _llvm_stacksave() | 0;
 $124 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($122 << 1) | 0) + 15 & -16) | 0;
 $125 = $0 + 4580 | 0;
 $126 = $0 + 5736 | 0;
 $127 = $0 + 20192 | 0;
 $128 = $0 + 15832 | 0;
 $129 = $0 + 5772 | 0;
 $130 = $0 + 5092 | 0;
 $131 = $0 + 14640 | 0;
 $132 = $0 + 15796 | 0;
 $133 = $0 + 14632 | 0;
 $134 = $0 + 15152 | 0;
 $135 = $0 + 20154 | 0;
 $136 = $0 + 14780 | 0;
 $137 = $0 + 20172 | 0;
 $$idx44 = $4 + 20 | 0;
 $$idx45 = $4 + 28 | 0;
 $138 = $0 + 20176 | 0;
 $139 = $1 + 28 | 0;
 $140 = $0 + 20180 | 0;
 $141 = $0 + 20120 | 0;
 $142 = $0 + 5096 | 0;
 $143 = $0 + 15156 | 0;
 $144 = $0 + 4528 | 0;
 $145 = $1 + 60 | 0;
 $146 = $0 + 20204 | 0;
 $147 = $0 + 17224 | 0;
 $148 = $0 + 10204 | 0;
 $149 = $0 + 10076 | 0;
 $150 = $0 + 14600 | 0;
 $151 = $0 + 14532 | 0;
 $152 = $0 + 14597 | 0;
 $153 = $0 + 14548 | 0;
 $154 = $0 + 14720 | 0;
 $155 = $0 + 10060 | 0;
 $156 = $0 + 14776 | 0;
 $157 = $1 + 56 | 0;
 $158 = $1 + 52 | 0;
 $159 = $7 + 4 | 0;
 $160 = $$ << 1;
 $161 = $$ + -1 | 0;
 $162 = $0 + 6076 | 0;
 $163 = $0 + 20196 | 0;
 $164 = $0 + 16136 | 0;
 $165 = $0 + 20124 | 0;
 $$04 = $2;
 $$05 = $3;
 $$09 = 0;
 $$429 = $$328;
 while (1) {
  $167 = HEAP32[$126 >> 2] | 0;
  $168 = (HEAP32[$125 >> 2] | 0) - $167 | 0;
  $$73 = ($168 | 0) < ($117 | 0) ? $168 : $117;
  $171 = Math_imul($$73, HEAP32[$118 >> 2] | 0) | 0;
  $174 = ($171 | 0) / ((HEAP32[$92 >> 2] | 0) * 1e3 | 0) | 0;
  do if ((HEAP32[$1 >> 2] | 0) == 2) if ((HEAP32[$19 >> 2] | 0) == 2) {
   $179 = HEAP32[$15 >> 2] | 0;
   $$313 = 0;
   while (1) {
    if (($$313 | 0) >= ($174 | 0)) break;
    HEAP16[$124 + ($$313 << 1) >> 1] = HEAP16[$$04 + ($$313 << 1 << 1) >> 1] | 0;
    $$313 = $$313 + 1 | 0;
   }
   if ((HEAP32[$127 >> 2] | 0) == 1 & ($179 | 0) == 0) _memcpy($128 | 0, $129 | 0, 300) | 0;
   _silk_resampler($129, $130 + ($167 + 2 << 1) | 0, $124, $174);
   HEAP32[$126 >> 2] = (HEAP32[$126 >> 2] | 0) + $$73;
   $194 = HEAP32[$132 >> 2] | 0;
   $195 = (HEAP32[$131 >> 2] | 0) - $194 | 0;
   $197 = Math_imul($115, HEAP32[$133 >> 2] | 0) | 0;
   $$75 = ($195 | 0) < ($197 | 0) ? $195 : $197;
   $$414 = 0;
   while (1) {
    if (($$414 | 0) >= ($174 | 0)) break;
    HEAP16[$124 + ($$414 << 1) >> 1] = HEAP16[$$04 + (($$414 << 1 | 1) << 1) >> 1] | 0;
    $$414 = $$414 + 1 | 0;
   }
   _silk_resampler($128, $134 + ($194 + 2 << 1) | 0, $124, $174);
   HEAP32[$132 >> 2] = (HEAP32[$132 >> 2] | 0) + $$75;
   $268 = HEAP32[$126 >> 2] | 0;
   break;
  } else {
   if ((HEAP32[$19 >> 2] | 0) == 1) $$515 = 0; else {
    label = 50;
    break;
   }
   while (1) {
    if (($$515 | 0) >= ($174 | 0)) break;
    $213 = $$515 << 1;
    $221 = (HEAP16[$$04 + ($213 << 1) >> 1] | 0) + (HEAP16[$$04 + (($213 | 1) << 1) >> 1] | 0) | 0;
    HEAP16[$124 + ($$515 << 1) >> 1] = ($221 >>> 1) + ($221 & 1);
    $$515 = $$515 + 1 | 0;
   }
   _silk_resampler($129, $130 + ($167 + 2 << 1) | 0, $124, $174);
   L71 : do if ((HEAP32[$127 >> 2] | 0) == 2) if (!(HEAP32[$15 >> 2] | 0)) {
    _silk_resampler($128, $134 + ((HEAP32[$132 >> 2] | 0) + 2 << 1) | 0, $124, $174);
    $$6 = 0;
    while (1) {
     if (($$6 | 0) >= (HEAP32[$125 >> 2] | 0)) break L71;
     $242 = $130 + ((HEAP32[$126 >> 2] | 0) + $$6 + 2 << 1) | 0;
     HEAP16[$242 >> 1] = ((HEAP16[$242 >> 1] | 0) + (HEAP16[$134 + ((HEAP32[$132 >> 2] | 0) + $$6 + 2 << 1) >> 1] | 0) | 0) >>> 1;
     $$6 = $$6 + 1 | 0;
    }
   } while (0);
   $256 = (HEAP32[$126 >> 2] | 0) + $$73 | 0;
   HEAP32[$126 >> 2] = $256;
   $268 = $256;
   break;
  } else label = 50; while (0);
  if ((label | 0) == 50) {
   label = 0;
   _memcpy($124 | 0, $$04 | 0, $174 << 1 | 0) | 0;
   _silk_resampler($129, $130 + ($167 + 2 << 1) | 0, $124, $174);
   $261 = (HEAP32[$126 >> 2] | 0) + $$73 | 0;
   HEAP32[$126 >> 2] = $261;
   $268 = $261;
  }
  $264 = $$04 + ((Math_imul($174, HEAP32[$1 >> 2] | 0) | 0) << 1) | 0;
  $265 = $$05 - $174 | 0;
  HEAP32[$93 >> 2] = 0;
  if (($268 | 0) < (HEAP32[$125 >> 2] | 0)) {
   $$1035 = $$429;
   $488 = 0;
   break;
  }
  if (!((HEAP32[$15 >> 2] | 0) != 0 | $68 ^ 1)) {
   HEAP16[$8 >> 1] = 0;
   HEAP8[$8 >> 0] = 256 - (256 >>> (Math_imul((HEAP32[$94 >> 2] | 0) + 1 | 0, HEAP32[$19 >> 2] | 0) | 0));
   _ec_enc_icdf($4, 0, $8, 8);
   $$7 = 0;
   while (1) {
    $277 = HEAP32[$19 >> 2] | 0;
    if (($$7 | 0) >= ($277 | 0)) {
     $$218 = 0;
     $528 = $277;
     break;
    }
    $280 = HEAP32[$$pre$phiZ2D + ($$7 * 10060 | 0) + 5740 >> 2] | 0;
    $$036 = 0;
    $$117 = 0;
    while (1) {
     if (($$117 | 0) >= ($280 | 0)) break;
     $$036 = $$036 | HEAP32[$$pre$phiZ2D + ($$7 * 10060 | 0) + 4720 + ($$117 << 2) >> 2] << $$117;
     $$117 = $$117 + 1 | 0;
    }
    HEAP8[$$pre$phiZ2D + ($$7 * 10060 | 0) + 4719 >> 0] = ($$036 | 0) > 0 & 1;
    if (($$036 | 0) != 0 & ($280 | 0) > 1) _ec_enc_icdf($4, $$036 + -1 | 0, HEAP32[19204 + ($280 + -2 << 2) >> 2] | 0, 8);
    $$7 = $$7 + 1 | 0;
   }
   while (1) {
    if (($$218 | 0) >= (HEAP32[$94 >> 2] | 0)) {
     $$9 = 0;
     $330 = $528;
     break;
    }
    $299 = $135 + ($$218 * 6 | 0) | 0;
    $300 = $136 + ($$218 << 2) | 0;
    $301 = $137 + $$218 | 0;
    $302 = ($$218 | 0) > 0;
    $303 = $$218 + -1 | 0;
    $$8 = 0;
    $305 = $528;
    while (1) {
     if (($$8 | 0) >= ($305 | 0)) break;
     if (!(HEAP32[$$pre$phiZ2D + ($$8 * 10060 | 0) + 4720 + ($$218 << 2) >> 2] | 0)) $$pre61 = $305; else {
      if (($305 | 0) == 2 & ($$8 | 0) == 0) {
       _silk_stereo_encode_pred($4, $299);
       if (!(HEAP32[$300 >> 2] | 0)) _silk_stereo_encode_mid_only($4, HEAP8[$301 >> 0] | 0);
      }
      if ($302) if (!(HEAP32[$$pre$phiZ2D + ($$8 * 10060 | 0) + 4720 + ($303 << 2) >> 2] | 0)) label = 70; else $$08 = 2; else label = 70;
      if ((label | 0) == 70) {
       label = 0;
       $$08 = 0;
      }
      _silk_encode_indices($$pre$phiZ2D + ($$8 * 10060 | 0) | 0, $4, $$218, 1, $$08);
      _silk_encode_pulses($4, HEAP8[$$pre$phiZ2D + ($$8 * 10060 | 0) + 6096 + ($$218 * 36 | 0) + 29 >> 0] | 0, HEAP8[$$pre$phiZ2D + ($$8 * 10060 | 0) + 6096 + ($$218 * 36 | 0) + 30 >> 0] | 0, $$pre$phiZ2D + ($$8 * 10060 | 0) + 6204 + ($$218 * 320 | 0) | 0, HEAP32[$$pre$phiZ2D + ($$8 * 10060 | 0) + 4580 >> 2] | 0);
      $$pre61 = HEAP32[$19 >> 2] | 0;
     }
     $$8 = $$8 + 1 | 0;
     $305 = $$pre61;
    }
    $$218 = $$218 + 1 | 0;
    $528 = $305;
   }
   while (1) {
    if (($$9 | 0) >= ($330 | 0)) break;
    $331 = $$pre$phiZ2D + ($$9 * 10060 | 0) + 4720 | 0;
    HEAP32[$331 >> 2] = 0;
    HEAP32[$331 + 4 >> 2] = 0;
    HEAP32[$331 + 8 >> 2] = 0;
    $$9 = $$9 + 1 | 0;
    $330 = HEAP32[$19 >> 2] | 0;
   }
   HEAP32[$138 >> 2] = _ec_tell_105(HEAP32[$$idx44 >> 2] | 0, HEAP32[$$idx45 >> 2] | 0) | 0;
  }
  _silk_HP_variable_cutoff($0);
  $334 = HEAP32[$139 >> 2] | 0;
  $335 = HEAP32[$51 >> 2] | 0;
  $337 = (Math_imul($334, $335) | 0) / 1e3 | 0;
  if ($68) $$020 = $337 - (HEAP32[$138 >> 2] | 0) | 0; else $$020 = $337;
  $341 = ($$020 | 0) / (HEAP32[$94 >> 2] | 0) | 0;
  $344 = Math_imul($341 << 16 >> 16, ($335 | 0) == 10 ? 100 : 50) | 0;
  $347 = $344 - (HEAP32[$140 >> 2] << 1) | 0;
  if ($68) {
   $348 = HEAP32[$15 >> 2] | 0;
   if (($348 | 0) > 0) {
    $350 = _ec_tell_105(HEAP32[$$idx44 >> 2] | 0, HEAP32[$$idx45 >> 2] | 0) | 0;
    $$139 = $347 - ($350 - (HEAP32[$138 >> 2] | 0) - (Math_imul($341, $348) | 0) << 1) | 0;
   } else $$139 = $347;
  } else $$139 = $347;
  if (($334 | 0) > 5e3) if (($$139 | 0) > ($334 | 0)) $371 = $334; else $371 = ($$139 | 0) > 5e3 ? $$139 : 5e3; else if (($$139 | 0) > 5e3) $371 = 5e3; else $371 = ($$139 | 0) < ($334 | 0) ? $334 : $$139;
  if ((HEAP32[$19 >> 2] | 0) == 2) {
   $364 = HEAP32[$15 >> 2] | 0;
   _silk_stereo_LR_to_MS($141, $142, $143, $135 + ($364 * 6 | 0) | 0, $137 + $364 | 0, $7, $371, HEAP32[$144 >> 2] | 0, HEAP32[$145 >> 2] | 0, HEAP32[$92 >> 2] | 0, HEAP32[$125 >> 2] | 0);
   $372 = HEAP32[$15 >> 2] | 0;
   if (!(HEAP8[$137 + $372 >> 0] | 0)) {
    if ((HEAP32[$146 >> 2] | 0) == 1) {
     HEAP32[$147 >> 2] = 0;
     HEAP32[$147 + 4 >> 2] = 0;
     HEAP32[$147 + 8 >> 2] = 0;
     $378 = $149;
     HEAP32[$378 >> 2] = 0;
     HEAP32[$378 + 4 >> 2] = 0;
     _memset($148 | 0, 0, 4384) | 0;
     HEAP32[$150 >> 2] = 100;
     HEAP32[$151 >> 2] = 100;
     HEAP8[$147 >> 0] = 10;
     HEAP8[$152 >> 0] = 0;
     HEAP32[$153 >> 2] = 65536;
     HEAP32[$154 >> 2] = 1;
    }
    _silk_encode_do_VAD_FLP($155);
   } else HEAP8[$156 + $372 >> 0] = 0;
   if ($68) {
    _silk_stereo_encode_pred($4, $135 + ((HEAP32[$15 >> 2] | 0) * 6 | 0) | 0);
    $385 = HEAP32[$15 >> 2] | 0;
    if (!(HEAP8[$156 + $385 >> 0] | 0)) _silk_stereo_encode_mid_only($4, HEAP8[$137 + $385 >> 0] | 0);
   }
  } else {
   HEAP32[$130 >> 2] = HEAP32[$165 >> 2];
   $393 = $130 + (HEAP32[$125 >> 2] << 1) | 0;
   $394 = HEAPU16[$393 >> 1] | HEAPU16[$393 + 2 >> 1] << 16;
   HEAP16[$165 >> 1] = $394;
   HEAP16[$165 + 2 >> 1] = $394 >>> 16;
  }
  _silk_encode_do_VAD_FLP($0);
  $395 = ($$09 | 0) == 0;
  $396 = HEAP32[$159 >> 2] | 0;
  $397 = ($$09 | 0) == ($161 | 0);
  $398 = ($$09 | 0) == 1;
  $$10 = 0;
  $$833 = $$429;
  while (1) {
   $399 = HEAP32[$19 >> 2] | 0;
   if (($$10 | 0) >= ($399 | 0)) break;
   $401 = HEAP32[$157 >> 2] | 0;
   L147 : do switch ($$ | 0) {
   case 2:
    {
     if ($395) $$3 = ($401 * 3 | 0) / 5 | 0; else $$3 = $401;
     break;
    }
   case 3:
    {
     if ($395) {
      $$3 = ($401 << 1 | 0) / 5 | 0;
      break L147;
     }
     if ($398) $$3 = ($401 * 3 | 0) / 4 | 0; else $$3 = $401;
     break;
    }
   default:
    $$3 = $401;
   } while (0);
   $409 = $397 & (HEAP32[$158 >> 2] | 0) != 0 & 1;
   if (($399 | 0) == 1) {
    $$037 = $371;
    $$13 = $409;
    $$5 = $$3;
   } else {
    $412 = HEAP32[$7 + ($$10 << 2) >> 2] | 0;
    if (($$10 | 0) != 0 | ($396 | 0) < 1) {
     $$037 = $412;
     $$13 = $409;
     $$5 = $$3;
    } else {
     $$037 = $412;
     $$13 = 0;
     $$5 = $$3 - (($401 | 0) / ($160 | 0) | 0) | 0;
    }
   }
   if (($$037 | 0) > 0) {
    _silk_control_SNR($$pre$phiZ2D + ($$10 * 10060 | 0) | 0, $$037);
    do if ((HEAP32[$15 >> 2] | 0) > ($$10 | 0)) {
     if (($$10 | 0) > 0) if (HEAP32[$146 >> 2] | 0) {
      $$1 = 1;
      break;
     }
     $$1 = 2;
    } else $$1 = 0; while (0);
    $$934 = _silk_encode_frame_FLP($$pre$phiZ2D + ($$10 * 10060 | 0) | 0, $5, $4, $$1, $$5, $$13) | 0;
   } else $$934 = $$833;
   HEAP32[$$pre$phiZ2D + ($$10 * 10060 | 0) + 4664 >> 2] = 0;
   HEAP32[$$pre$phiZ2D + ($$10 * 10060 | 0) + 5736 >> 2] = 0;
   $426 = $$pre$phiZ2D + ($$10 * 10060 | 0) + 5744 | 0;
   HEAP32[$426 >> 2] = (HEAP32[$426 >> 2] | 0) + 1;
   $$10 = $$10 + 1 | 0;
   $$833 = $$934;
  }
  $430 = HEAP32[$15 >> 2] | 0;
  HEAP32[$146 >> 2] = HEAP8[$137 + ($430 + -1) >> 0];
  do if ((HEAP32[$5 >> 2] | 0) > 0) if (($430 | 0) == (HEAP32[$94 >> 2] | 0)) {
   $439 = HEAP32[$19 >> 2] | 0;
   $$021 = 0;
   $$11 = 0;
   while (1) {
    if (($$11 | 0) >= ($439 | 0)) break;
    $442 = HEAP32[$$pre$phiZ2D + ($$11 * 10060 | 0) + 5740 >> 2] | 0;
    $$122 = $$021;
    $$319 = 0;
    while (1) {
     $444 = $$122 << 1;
     if (($$319 | 0) >= ($442 | 0)) break;
     $$122 = $444 | HEAP8[$$pre$phiZ2D + ($$11 * 10060 | 0) + 4716 + $$319 >> 0];
     $$319 = $$319 + 1 | 0;
    }
    $$021 = $444 | HEAP8[$$pre$phiZ2D + ($$11 * 10060 | 0) + 4719 >> 0];
    $$11 = $$11 + 1 | 0;
   }
   if ($68) _ec_enc_patch_initial_bits($4, $$021, Math_imul($430 + 1 | 0, $439) | 0);
   do if (HEAP32[$162 >> 2] | 0) {
    if ((HEAP32[$19 >> 2] | 0) != 1) if (!(HEAP32[$164 >> 2] | 0)) break;
    HEAP32[$5 >> 2] = 0;
   } while (0);
   $466 = (HEAP32[$140 >> 2] | 0) + (HEAP32[$5 >> 2] << 3) | 0;
   HEAP32[$140 >> 2] = $466;
   $471 = $466 - ((Math_imul(HEAP32[$139 >> 2] | 0, HEAP32[$51 >> 2] | 0) | 0) / 1e3 | 0) | 0;
   HEAP32[$140 >> 2] = ($471 | 0) > 1e4 ? 1e4 : ($471 | 0) > 0 ? $471 : 0;
   $475 = HEAP32[$163 >> 2] | 0;
   if ((HEAP32[$144 >> 2] | 0) < ((($475 << 16 >> 16) * 3188 >> 16) + 13 | 0)) {
    HEAP32[$93 >> 2] = 1;
    HEAP32[$163 >> 2] = 0;
    break;
   } else {
    HEAP32[$93 >> 2] = 0;
    HEAP32[$163 >> 2] = $475 + (HEAP32[$51 >> 2] | 0);
    break;
   }
  } while (0);
  if (!$265) {
   label = 134;
   break;
  }
  $$04 = $264;
  $$05 = $265;
  $$09 = $$09 + 1 | 0;
  $$429 = $$833;
 }
 if ((label | 0) == 134) {
  $$1035 = $$833;
  $488 = HEAP32[$93 >> 2] | 0;
 }
 HEAP32[$127 >> 2] = HEAP32[$19 >> 2];
 HEAP32[$1 + 76 >> 2] = $488;
 if ((HEAP32[$92 >> 2] | 0) == 16) $495 = (HEAP32[$0 + 28 >> 2] | 0) == 0; else $495 = 0;
 HEAP32[$1 + 80 >> 2] = $495 & 1;
 HEAP32[$1 + 72 >> 2] = (HEAP32[$92 >> 2] << 16 >> 16) * 1e3;
 if (!(HEAP32[$145 >> 2] | 0)) $507 = HEAP16[$0 + 20148 >> 1] | 0; else $507 = 0;
 HEAP32[$1 + 84 >> 2] = $507;
 L204 : do if (!$68) {
  HEAP32[$51 >> 2] = $$023;
  HEAP32[$1 + 36 >> 2] = $$024;
  $$12 = 0;
  while (1) {
   if (($$12 | 0) >= (HEAP32[$19 >> 2] | 0)) break L204;
   HEAP32[$$pre$phiZ2D + ($$12 * 10060 | 0) + 4664 >> 2] = 0;
   HEAP32[$$pre$phiZ2D + ($$12 * 10060 | 0) + 4676 >> 2] = 0;
   $$12 = $$12 + 1 | 0;
  }
 } while (0);
 $514 = $0 + 4761 | 0;
 HEAP32[$1 + 92 >> 2] = HEAP8[$514 >> 0];
 HEAP32[$1 + 96 >> 2] = HEAP16[27932 + (HEAP8[$514 >> 0] >> 1 << 2) + (HEAP8[$0 + 4762 >> 0] << 1) >> 1];
 _llvm_stackrestore($123 | 0);
 $$0 = $$1035;
 STACKTOP = sp;
 return $$0 | 0;
}

function _opus_encoder_ctl($0, $1, $varargs) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $varargs = $varargs | 0;
 var $$0 = 0, $$02 = 0, $$2 = 0, $105 = 0, $106 = 0, $11 = 0, $116 = 0, $117 = 0, $118 = 0, $12 = 0, $124 = 0, $125 = 0, $134 = 0, $135 = 0, $143 = 0, $144 = 0, $153 = 0, $154 = 0, $16 = 0, $162 = 0, $163 = 0, $172 = 0, $173 = 0, $181 = 0, $182 = 0, $191 = 0, $192 = 0, $2 = 0, $200 = 0, $201 = 0, $210 = 0, $211 = 0, $221 = 0, $222 = 0, $231 = 0, $232 = 0, $240 = 0, $241 = 0, $25 = 0, $250 = 0, $251 = 0, $259 = 0, $26 = 0, $260 = 0, $269 = 0, $270 = 0, $277 = 0, $278 = 0, $287 = 0, $288 = 0, $292 = 0, $3 = 0, $304 = 0, $305 = 0, $314 = 0, $315 = 0, $324 = 0, $325 = 0, $333 = 0, $334 = 0, $343 = 0, $344 = 0, $35 = 0, $351 = 0, $352 = 0, $36 = 0, $361 = 0, $362 = 0, $370 = 0, $371 = 0, $380 = 0, $381 = 0, $388 = 0, $389 = 0, $393 = 0, $395 = 0, $41 = 0, $413 = 0, $414 = 0, $424 = 0, $425 = 0, $433 = 0, $434 = 0, $442 = 0, $443 = 0, $49 = 0, $5 = 0, $50 = 0, $60 = 0, $61 = 0, $73 = 0, $74 = 0, $83 = 0, $84 = 0, $95 = 0, $96 = 0, $vararg_buffer = 0, $vararg_buffer112 = 0, $vararg_buffer118 = 0, $vararg_buffer121 = 0, $vararg_buffer129 = 0, $vararg_buffer135 = 0, $vararg_buffer141 = 0, $vararg_buffer49 = 0, $vararg_buffer97 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 $vararg_buffer141 = sp + 64 | 0;
 $vararg_buffer135 = sp + 56 | 0;
 $vararg_buffer129 = sp + 48 | 0;
 $vararg_buffer121 = sp + 40 | 0;
 $vararg_buffer118 = sp + 32 | 0;
 $vararg_buffer112 = sp + 24 | 0;
 $vararg_buffer97 = sp + 16 | 0;
 $vararg_buffer49 = sp + 8 | 0;
 $vararg_buffer = sp;
 $2 = sp + 168 | 0;
 $3 = sp + 68 | 0;
 HEAP32[$2 >> 2] = $varargs;
 $5 = $0 + (HEAP32[$0 >> 2] | 0) | 0;
 L1 : do switch ($1 | 0) {
 case 4e3:
  {
   $11 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $12 = HEAP32[$11 >> 2] | 0;
   HEAP32[$2 >> 2] = $11 + 4;
   switch ($12 | 0) {
   case 2051:
   case 2049:
   case 2048:
    break;
   default:
    {
     $$02 = -1;
     label = 104;
     break L1;
    }
   }
   $16 = $0 + 108 | 0;
   if (!(HEAP32[$0 + 14148 >> 2] | 0)) if ((HEAP32[$16 >> 2] | 0) != ($12 | 0)) {
    $$02 = -1;
    label = 104;
    break L1;
   }
   HEAP32[$16 >> 2] = $12;
   HEAP32[$0 + 192 >> 2] = $12;
   $$02 = 0;
   label = 104;
   break;
  }
 case 4001:
  {
   $25 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $26 = HEAP32[$25 >> 2] | 0;
   HEAP32[$2 >> 2] = $25 + 4;
   if (!$26) label = 105; else {
    HEAP32[$26 >> 2] = HEAP32[$0 + 108 >> 2];
    $$02 = 0;
    label = 104;
   }
   break;
  }
 case 4002:
  {
   $35 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $36 = HEAP32[$35 >> 2] | 0;
   HEAP32[$2 >> 2] = $35 + 4;
   switch ($36 | 0) {
   case -1e3:
    {
     $$2 = -1e3;
     break;
    }
   case -1:
    {
     $$2 = -1;
     break;
    }
   default:
    {
     if (($36 | 0) < 1) {
      label = 105;
      break L1;
     }
     if (($36 | 0) < 501) $$2 = 500; else {
      $41 = (HEAP32[$0 + 112 >> 2] | 0) * 3e5 | 0;
      $$2 = ($36 | 0) > ($41 | 0) ? $41 : $36;
     }
    }
   }
   HEAP32[$0 + 164 >> 2] = $$2;
   $$02 = 0;
   label = 104;
   break;
  }
 case 4003:
  {
   $49 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $50 = HEAP32[$49 >> 2] | 0;
   HEAP32[$2 >> 2] = $49 + 4;
   if (!$50) label = 105; else {
    HEAP32[$50 >> 2] = _user_bitrate_to_bitrate($0, HEAP32[$0 + 14132 >> 2] | 0, 1276) | 0;
    $$02 = 0;
    label = 104;
   }
   break;
  }
 case 4022:
  {
   $60 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $61 = HEAP32[$60 >> 2] | 0;
   HEAP32[$2 >> 2] = $60 + 4;
   if (($61 | 0) < 1) {
    if (($61 | 0) != -1e3) {
     label = 105;
     break L1;
    }
   } else if (($61 | 0) > (HEAP32[$0 + 112 >> 2] | 0)) {
    label = 105;
    break L1;
   }
   HEAP32[$0 + 120 >> 2] = $61;
   $$02 = 0;
   label = 104;
   break;
  }
 case 4023:
  {
   $73 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $74 = HEAP32[$73 >> 2] | 0;
   HEAP32[$2 >> 2] = $73 + 4;
   if (!$74) label = 105; else {
    HEAP32[$74 >> 2] = HEAP32[$0 + 120 >> 2];
    $$02 = 0;
    label = 104;
   }
   break;
  }
 case 4004:
  {
   $83 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $84 = HEAP32[$83 >> 2] | 0;
   HEAP32[$2 >> 2] = $83 + 4;
   if (($84 + -1101 | 0) >>> 0 > 4) label = 105; else {
    HEAP32[$0 + 132 >> 2] = $84;
    switch ($84 | 0) {
    case 1101:
     {
      HEAP32[$0 + 20 >> 2] = 8e3;
      $$02 = 0;
      label = 104;
      break L1;
      break;
     }
    case 1102:
     {
      HEAP32[$0 + 20 >> 2] = 12e3;
      $$02 = 0;
      label = 104;
      break L1;
      break;
     }
    default:
     {
      HEAP32[$0 + 20 >> 2] = 16e3;
      $$02 = 0;
      label = 104;
      break L1;
     }
    }
   }
   break;
  }
 case 4005:
  {
   $95 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $96 = HEAP32[$95 >> 2] | 0;
   HEAP32[$2 >> 2] = $95 + 4;
   if (!$96) label = 105; else {
    HEAP32[$96 >> 2] = HEAP32[$0 + 132 >> 2];
    $$02 = 0;
    label = 104;
   }
   break;
  }
 case 4008:
  {
   $105 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $106 = HEAP32[$105 >> 2] | 0;
   HEAP32[$2 >> 2] = $105 + 4;
   if (($106 | 0) < 1101) {
    if (($106 | 0) != -1e3) {
     label = 105;
     break L1;
    }
    HEAP32[$0 + 128 >> 2] = -1e3;
    $118 = $0 + 20 | 0;
   } else {
    if (($106 | 0) > 1105) {
     label = 105;
     break L1;
    }
    HEAP32[$0 + 128 >> 2] = $106;
    if (($106 | 0) == 1101) {
     HEAP32[$0 + 20 >> 2] = 8e3;
     $$02 = 0;
     label = 104;
     break L1;
    } else $116 = $106;
    $117 = $0 + 20 | 0;
    if (($116 | 0) == 1102) {
     HEAP32[$117 >> 2] = 12e3;
     $$02 = 0;
     label = 104;
     break L1;
    } else $118 = $117;
   }
   HEAP32[$118 >> 2] = 16e3;
   $$02 = 0;
   label = 104;
   break;
  }
 case 4009:
  {
   $124 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $125 = HEAP32[$124 >> 2] | 0;
   HEAP32[$2 >> 2] = $124 + 4;
   if (!$125) label = 105; else {
    HEAP32[$125 >> 2] = HEAP32[$0 + 14136 >> 2];
    $$02 = 0;
    label = 104;
   }
   break;
  }
 case 4016:
  {
   $134 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $135 = HEAP32[$134 >> 2] | 0;
   HEAP32[$2 >> 2] = $134 + 4;
   if ($135 >>> 0 > 1) label = 105; else {
    HEAP32[$0 + 184 >> 2] = $135;
    $$02 = 0;
    label = 104;
   }
   break;
  }
 case 4017:
  {
   $143 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $144 = HEAP32[$143 >> 2] | 0;
   HEAP32[$2 >> 2] = $143 + 4;
   if (!$144) label = 105; else {
    HEAP32[$144 >> 2] = HEAP32[$0 + 184 >> 2];
    $$02 = 0;
    label = 104;
   }
   break;
  }
 case 4010:
  {
   $153 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $154 = HEAP32[$153 >> 2] | 0;
   HEAP32[$2 >> 2] = $153 + 4;
   if ($154 >>> 0 > 10) label = 105; else {
    HEAP32[$0 + 44 >> 2] = $154;
    HEAP32[$vararg_buffer >> 2] = $154;
    _opus_custom_encoder_ctl($5, 4010, $vararg_buffer) | 0;
    $$02 = 0;
    label = 104;
   }
   break;
  }
 case 4011:
  {
   $162 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $163 = HEAP32[$162 >> 2] | 0;
   HEAP32[$2 >> 2] = $162 + 4;
   if (!$163) label = 105; else {
    HEAP32[$163 >> 2] = HEAP32[$0 + 44 >> 2];
    $$02 = 0;
    label = 104;
   }
   break;
  }
 case 4012:
  {
   $172 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $173 = HEAP32[$172 >> 2] | 0;
   HEAP32[$2 >> 2] = $172 + 4;
   if ($173 >>> 0 > 1) label = 105; else {
    HEAP32[$0 + 48 >> 2] = $173;
    $$02 = 0;
    label = 104;
   }
   break;
  }
 case 4013:
  {
   $181 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $182 = HEAP32[$181 >> 2] | 0;
   HEAP32[$2 >> 2] = $181 + 4;
   if (!$182) label = 105; else {
    HEAP32[$182 >> 2] = HEAP32[$0 + 48 >> 2];
    $$02 = 0;
    label = 104;
   }
   break;
  }
 case 4014:
  {
   $191 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $192 = HEAP32[$191 >> 2] | 0;
   HEAP32[$2 >> 2] = $191 + 4;
   if ($192 >>> 0 > 100) label = 105; else {
    HEAP32[$0 + 40 >> 2] = $192;
    HEAP32[$vararg_buffer49 >> 2] = $192;
    _opus_custom_encoder_ctl($5, 4014, $vararg_buffer49) | 0;
    $$02 = 0;
    label = 104;
   }
   break;
  }
 case 4015:
  {
   $200 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $201 = HEAP32[$200 >> 2] | 0;
   HEAP32[$2 >> 2] = $200 + 4;
   if (!$201) label = 105; else {
    HEAP32[$201 >> 2] = HEAP32[$0 + 40 >> 2];
    $$02 = 0;
    label = 104;
   }
   break;
  }
 case 4006:
  {
   $210 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $211 = HEAP32[$210 >> 2] | 0;
   HEAP32[$2 >> 2] = $210 + 4;
   if ($211 >>> 0 > 1) label = 105; else {
    HEAP32[$0 + 148 >> 2] = $211;
    HEAP32[$0 + 60 >> 2] = 1 - $211;
    $$02 = 0;
    label = 104;
   }
   break;
  }
 case 4007:
  {
   $221 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $222 = HEAP32[$221 >> 2] | 0;
   HEAP32[$2 >> 2] = $221 + 4;
   if (!$222) label = 105; else {
    HEAP32[$222 >> 2] = HEAP32[$0 + 148 >> 2];
    $$02 = 0;
    label = 104;
   }
   break;
  }
 case 11018:
  {
   $231 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $232 = HEAP32[$231 >> 2] | 0;
   HEAP32[$2 >> 2] = $231 + 4;
   if (($232 + 1 | 0) >>> 0 > 101) label = 105; else {
    HEAP32[$0 + 140 >> 2] = $232;
    $$02 = 0;
    label = 104;
   }
   break;
  }
 case 11019:
  {
   $240 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $241 = HEAP32[$240 >> 2] | 0;
   HEAP32[$2 >> 2] = $240 + 4;
   if (!$241) label = 105; else {
    HEAP32[$241 >> 2] = HEAP32[$0 + 140 >> 2];
    $$02 = 0;
    label = 104;
   }
   break;
  }
 case 4020:
  {
   $250 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $251 = HEAP32[$250 >> 2] | 0;
   HEAP32[$2 >> 2] = $250 + 4;
   if ($251 >>> 0 > 1) label = 105; else {
    HEAP32[$0 + 152 >> 2] = $251;
    $$02 = 0;
    label = 104;
   }
   break;
  }
 case 4021:
  {
   $259 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $260 = HEAP32[$259 >> 2] | 0;
   HEAP32[$2 >> 2] = $259 + 4;
   if (!$260) label = 105; else {
    HEAP32[$260 >> 2] = HEAP32[$0 + 152 >> 2];
    $$02 = 0;
    label = 104;
   }
   break;
  }
 case 4024:
  {
   $269 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $270 = HEAP32[$269 >> 2] | 0;
   HEAP32[$2 >> 2] = $269 + 4;
   if (($270 | 0) < 3001) switch ($270 | 0) {
   case -1e3:
    break;
   default:
    {
     label = 105;
     break L1;
    }
   } else switch ($270 | 0) {
   case 3002:
   case 3001:
    break;
   default:
    {
     label = 105;
     break L1;
    }
   }
   HEAP32[$0 + 124 >> 2] = $270;
   $$02 = 0;
   label = 104;
   break;
  }
 case 4025:
  {
   $277 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $278 = HEAP32[$277 >> 2] | 0;
   HEAP32[$2 >> 2] = $277 + 4;
   if (!$278) label = 105; else {
    HEAP32[$278 >> 2] = HEAP32[$0 + 124 >> 2];
    $$02 = 0;
    label = 104;
   }
   break;
  }
 case 4027:
  {
   $287 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $288 = HEAP32[$287 >> 2] | 0;
   HEAP32[$2 >> 2] = $287 + 4;
   if (!$288) label = 105; else {
    $292 = (HEAP32[$0 + 144 >> 2] | 0) / 400 | 0;
    HEAP32[$288 >> 2] = $292;
    if ((HEAP32[$0 + 108 >> 2] | 0) == 2051) {
     $$02 = 0;
     label = 104;
    } else {
     HEAP32[$288 >> 2] = $292 + (HEAP32[$0 + 116 >> 2] | 0);
     $$02 = 0;
     label = 104;
    }
   }
   break;
  }
 case 4029:
  {
   $304 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $305 = HEAP32[$304 >> 2] | 0;
   HEAP32[$2 >> 2] = $304 + 4;
   if (!$305) label = 105; else {
    HEAP32[$305 >> 2] = HEAP32[$0 + 144 >> 2];
    $$02 = 0;
    label = 104;
   }
   break;
  }
 case 4031:
  {
   $314 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $315 = HEAP32[$314 >> 2] | 0;
   HEAP32[$2 >> 2] = $314 + 4;
   if (!$315) label = 105; else {
    HEAP32[$315 >> 2] = HEAP32[$0 + 18032 >> 2];
    $$02 = 0;
    label = 104;
   }
   break;
  }
 case 4036:
  {
   $324 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $325 = HEAP32[$324 >> 2] | 0;
   HEAP32[$2 >> 2] = $324 + 4;
   if (($325 + -8 | 0) >>> 0 > 16) label = 105; else {
    HEAP32[$0 + 168 >> 2] = $325;
    $$02 = 0;
    label = 104;
   }
   break;
  }
 case 4037:
  {
   $333 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $334 = HEAP32[$333 >> 2] | 0;
   HEAP32[$2 >> 2] = $333 + 4;
   if (!$334) label = 105; else {
    HEAP32[$334 >> 2] = HEAP32[$0 + 168 >> 2];
    $$02 = 0;
    label = 104;
   }
   break;
  }
 case 4040:
  {
   $343 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $344 = HEAP32[$343 >> 2] | 0;
   HEAP32[$2 >> 2] = $343 + 4;
   if (($344 + -5e3 | 0) >>> 0 < 10) {
    HEAP32[$0 + 156 >> 2] = $344;
    HEAP32[$vararg_buffer97 >> 2] = $344;
    _opus_custom_encoder_ctl($5, 4040, $vararg_buffer97) | 0;
    $$02 = 0;
    label = 104;
   } else label = 105;
   break;
  }
 case 4041:
  {
   $351 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $352 = HEAP32[$351 >> 2] | 0;
   HEAP32[$2 >> 2] = $351 + 4;
   if (!$352) label = 105; else {
    HEAP32[$352 >> 2] = HEAP32[$0 + 156 >> 2];
    $$02 = 0;
    label = 104;
   }
   break;
  }
 case 4042:
  {
   $361 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $362 = HEAP32[$361 >> 2] | 0;
   HEAP32[$2 >> 2] = $361 + 4;
   if ($362 >>> 0 > 1) label = 105; else {
    HEAP32[$0 + 76 >> 2] = $362;
    $$02 = 0;
    label = 104;
   }
   break;
  }
 case 4043:
  {
   $370 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $371 = HEAP32[$370 >> 2] | 0;
   HEAP32[$2 >> 2] = $370 + 4;
   if (!$371) label = 105; else {
    HEAP32[$371 >> 2] = HEAP32[$0 + 76 >> 2];
    $$02 = 0;
    label = 104;
   }
   break;
  }
 case 4046:
  {
   $380 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $381 = HEAP32[$380 >> 2] | 0;
   HEAP32[$2 >> 2] = $380 + 4;
   if ($381 >>> 0 > 1) label = 105; else {
    HEAP32[$vararg_buffer112 >> 2] = $381;
    _opus_custom_encoder_ctl($5, 4046, $vararg_buffer112) | 0;
    $$02 = 0;
    label = 104;
   }
   break;
  }
 case 4047:
  {
   $388 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $389 = HEAP32[$388 >> 2] | 0;
   HEAP32[$2 >> 2] = $388 + 4;
   if (!$389) label = 105; else {
    HEAP32[$vararg_buffer118 >> 2] = $389;
    _opus_custom_encoder_ctl($5, 4047, $vararg_buffer118) | 0;
    $$02 = 0;
    label = 104;
   }
   break;
  }
 case 4028:
  {
   $393 = $0 + (HEAP32[$0 + 4 >> 2] | 0) | 0;
   _tonality_analysis_reset($0 + 188 | 0);
   $395 = $0 + 14088 | 0;
   _memset($395 | 0, 0, 3948) | 0;
   _opus_custom_encoder_ctl($5, 4028, $vararg_buffer121) | 0;
   _silk_InitEncoder($393, HEAP32[$0 + 180 >> 2] | 0, $3) | 0;
   HEAP32[$395 >> 2] = HEAP32[$0 + 112 >> 2];
   HEAP16[$0 + 14092 >> 1] = 16384;
   HEAPF32[$0 + 14100 >> 2] = 1.0;
   HEAP32[$0 + 14148 >> 2] = 1;
   HEAP32[$0 + 14120 >> 2] = 1001;
   HEAP32[$0 + 14136 >> 2] = 1105;
   HEAP32[$0 + 14096 >> 2] = (_silk_lin2log(60) | 0) << 8;
   $$02 = 0;
   label = 104;
   break;
  }
 case 11002:
  {
   $413 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $414 = HEAP32[$413 >> 2] | 0;
   HEAP32[$2 >> 2] = $413 + 4;
   if (($414 | 0) < 1e3) {
    if (($414 | 0) != -1e3) {
     label = 105;
     break L1;
    }
   } else if (($414 | 0) > 1002) {
    label = 105;
    break L1;
   }
   HEAP32[$0 + 136 >> 2] = $414;
   $$02 = 0;
   label = 104;
   break;
  }
 case 10024:
  {
   $424 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $425 = HEAP32[$424 >> 2] | 0;
   HEAP32[$2 >> 2] = $424 + 4;
   HEAP32[$0 + 176 >> 2] = $425;
   HEAP32[$vararg_buffer129 >> 2] = $425;
   $$02 = _opus_custom_encoder_ctl($5, 10024, $vararg_buffer129) | 0;
   label = 104;
   break;
  }
 case 10026:
  {
   $433 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $434 = HEAP32[$433 >> 2] | 0;
   HEAP32[$2 >> 2] = $433 + 4;
   HEAP32[$0 + 14152 >> 2] = $434;
   HEAP32[$vararg_buffer135 >> 2] = $434;
   $$02 = _opus_custom_encoder_ctl($5, 10026, $vararg_buffer135) | 0;
   label = 104;
   break;
  }
 case 10015:
  {
   $442 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $443 = HEAP32[$442 >> 2] | 0;
   HEAP32[$2 >> 2] = $442 + 4;
   if (!$443) label = 105; else {
    HEAP32[$vararg_buffer141 >> 2] = $443;
    $$02 = _opus_custom_encoder_ctl($5, 10015, $vararg_buffer141) | 0;
    label = 104;
   }
   break;
  }
 default:
  {
   $$02 = -5;
   label = 104;
  }
 } while (0);
 if ((label | 0) == 104) {
  $$0 = $$02;
  STACKTOP = sp;
  return $$0 | 0;
 } else if ((label | 0) == 105) {
  $$0 = -1;
  STACKTOP = sp;
  return $$0 | 0;
 }
 return 0;
}
function _silk_noise_shape_quantizer_del_dec($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25) {
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
 $24 = $24 | 0;
 $25 = $25 | 0;
 var $$ = 0, $$0 = 0, $$01 = 0, $$014 = 0, $$016 = 0, $$027 = 0, $$028 = 0, $$029 = 0, $$03 = 0, $$030 = 0, $$032 = 0, $$034 = 0, $$036 = 0, $$040 = 0, $$041 = 0, $$1 = 0, $$12 = 0, $$137 = 0, $$2 = 0, $$2$$210 = 0, $$210 = 0, $$210$$2 = 0, $$218 = 0, $$222 = 0, $$225 = 0, $$238 = 0, $$3 = 0, $$3$in = 0, $$339 = 0, $$4 = 0, $$5 = 0, $102 = 0, $104 = 0, $107 = 0, $113 = 0, $115 = 0, $118 = 0, $130 = 0, $136 = 0, $138 = 0, $149 = 0, $150 = 0, $152 = 0, $157 = 0, $160 = 0, $161 = 0, $168 = 0, $171 = 0, $178 = 0, $181 = 0, $189 = 0, $190 = 0, $192 = 0, $193 = 0, $194 = 0, $201 = 0, $203 = 0, $206 = 0, $210 = 0, $218 = 0, $225 = 0, $234 = 0, $238 = 0, $245 = 0, $247 = 0, $248 = 0, $250 = 0, $255 = 0, $258 = 0, $26 = 0, $27 = 0, $270 = 0, $277 = 0, $278 = 0, $280 = 0, $284 = 0, $285 = 0, $294 = 0, $295 = 0, $302 = 0, $311 = 0, $314 = 0, $316 = 0, $319 = 0, $32 = 0, $320 = 0, $322 = 0, $327 = 0, $329 = 0, $330 = 0, $331 = 0, $332 = 0, $334 = 0, $340 = 0, $342 = 0, $343 = 0, $344 = 0, $346 = 0, $355 = 0, $356 = 0, $357 = 0, $358 = 0, $362 = 0, $363 = 0, $365 = 0, $367 = 0, $37 = 0, $372 = 0, $375 = 0, $38 = 0, $383 = 0, $384 = 0, $386 = 0, $387 = 0, $39 = 0, $394 = 0, $395 = 0, $40 = 0, $403 = 0, $406 = 0, $409 = 0, $41 = 0, $410 = 0, $42 = 0, $423 = 0, $43 = 0, $44 = 0, $443 = 0, $45 = 0, $452 = 0, $457 = 0, $46 = 0, $469 = 0, $47 = 0, $474 = 0, $48 = 0, $49 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $60 = 0, $62 = 0, $63 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $71 = 0, $74 = 0, $80 = 0, $82 = 0, $85 = 0, $91 = 0, $93 = 0, $96 = 0, dest = 0, label = 0, sp = 0, src = 0, stop = 0;
 sp = STACKTOP;
 $26 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($23 * 56 | 0) | 0) + 15 & -16) | 0;
 $27 = $0 + 4336 | 0;
 $32 = $0 + 4332 | 0;
 $37 = $15 >> 6;
 $38 = ($2 | 0) == 2;
 $39 = $9 + 2 | 0;
 $40 = $9 + 4 | 0;
 $41 = $9 + 6 | 0;
 $42 = $9 + 8 | 0;
 $43 = ($11 | 0) > 0;
 $44 = $12 << 16 >> 16;
 $45 = $12 >> 16;
 $46 = $22 << 16 >> 16;
 $47 = $20 >> 1;
 $48 = $20 + -1 | 0;
 $49 = $10 + ($48 << 1) | 0;
 $50 = $13 << 16 >> 16;
 $51 = $14 << 16 >> 16;
 $52 = $14 >> 16;
 $53 = ($16 | 0) > 2048;
 $54 = ($16 | 0) / 2 | 0;
 $55 = $54 + -512 | 0;
 $56 = 512 - $54 | 0;
 $57 = $16 << 16 >> 16;
 $58 = $17 + 944 | 0;
 $60 = Math_imul($17 << 16 >> 16, $57) | 0;
 $62 = Math_imul($58 << 16 >> 16, $57) | 0;
 $63 = $17 + -944 | 0;
 $66 = Math_imul(944 - $17 << 16 >> 16, $57) | 0;
 $67 = $26 + 4 | 0;
 $68 = $26 + 32 | 0;
 $69 = ($19 | 0) < 1;
 $$0 = $0 + 1280 + ((HEAP32[$27 >> 2] | 0) - $11 + 1 << 2) | 0;
 $$01 = $6 + ((HEAP32[$32 >> 2] | 0) - $11 + 2 << 2) | 0;
 $$040 = 0;
 while (1) {
  if (($$040 | 0) >= ($18 | 0)) {
   $$5 = 0;
   break;
  }
  if ($38) {
   $71 = HEAP32[$$01 >> 2] | 0;
   $74 = HEAP16[$9 >> 1] | 0;
   $80 = (Math_imul($71 >> 16, $74) | 0) + ((Math_imul($71 & 65535, $74) | 0) >> 16) + 2 | 0;
   $82 = HEAP32[$$01 + -4 >> 2] | 0;
   $85 = HEAP16[$39 >> 1] | 0;
   $91 = $80 + ((Math_imul($82 >> 16, $85) | 0) + ((Math_imul($82 & 65535, $85) | 0) >> 16)) | 0;
   $93 = HEAP32[$$01 + -8 >> 2] | 0;
   $96 = HEAP16[$40 >> 1] | 0;
   $102 = $91 + ((Math_imul($93 >> 16, $96) | 0) + ((Math_imul($93 & 65535, $96) | 0) >> 16)) | 0;
   $104 = HEAP32[$$01 + -12 >> 2] | 0;
   $107 = HEAP16[$41 >> 1] | 0;
   $113 = $102 + ((Math_imul($104 >> 16, $107) | 0) + ((Math_imul($104 & 65535, $107) | 0) >> 16)) | 0;
   $115 = HEAP32[$$01 + -16 >> 2] | 0;
   $118 = HEAP16[$42 >> 1] | 0;
   $$029 = $113 + ((Math_imul($115 >> 16, $118) | 0) + ((Math_imul($115 & 65535, $118) | 0) >> 16)) << 1;
   $$12 = $$01 + 4 | 0;
  } else {
   $$029 = 0;
   $$12 = $$01;
  }
  if ($43) {
   $130 = (HEAP32[$$0 >> 2] | 0) + (HEAP32[$$0 + -8 >> 2] | 0) | 0;
   $136 = (Math_imul($130 >> 16, $44) | 0) + ((Math_imul($130 & 65535, $44) | 0) >> 16) | 0;
   $138 = HEAP32[$$0 + -4 >> 2] | 0;
   $$027 = $$029 - ($136 + (Math_imul($138 >> 16, $45) | 0) + ((Math_imul($138 & 65535, $45) | 0) >> 16) << 2) | 0;
   $$1 = $$0 + 4 | 0;
  } else {
   $$027 = 0;
   $$1 = $$0;
  }
  $149 = $$040 + 15 | 0;
  $150 = $3 + ($$040 << 2) | 0;
  $$036 = 0;
  while (1) {
   if (($$036 | 0) >= ($23 | 0)) break;
   $152 = $1 + ($$036 * 1300 | 0) + 1288 | 0;
   HEAP32[$152 >> 2] = (Math_imul(HEAP32[$152 >> 2] | 0, 196314165) | 0) + 907633515;
   $157 = _silk_noise_shape_quantizer_short_prediction_c_118($1 + ($$036 * 1300 | 0) + ($149 << 2) | 0, $8, $21) | 0;
   $160 = $1 + ($$036 * 1300 | 0) + 1184 | 0;
   $161 = HEAP32[$160 >> 2] | 0;
   $168 = (HEAP32[$1 + ($$036 * 1300 | 0) + 1284 >> 2] | 0) + ((Math_imul($161 >> 16, $46) | 0) + ((Math_imul($161 & 65535, $46) | 0) >> 16)) | 0;
   $171 = (HEAP32[$1 + ($$036 * 1300 | 0) + 1188 >> 2] | 0) - $168 | 0;
   $178 = $161 + ((Math_imul($171 >> 16, $46) | 0) + ((Math_imul($171 & 65535, $46) | 0) >> 16)) | 0;
   HEAP32[$160 >> 2] = $168;
   $181 = HEAP16[$10 >> 1] | 0;
   $$028 = $47 + ((Math_imul($168 >> 16, $181) | 0) + ((Math_imul($168 & 65535, $181) | 0) >> 16)) | 0;
   $$03 = $178;
   $$041 = 2;
   while (1) {
    if (($$041 | 0) >= ($20 | 0)) break;
    $189 = $$041 + -1 | 0;
    $190 = $1 + ($$036 * 1300 | 0) + 1184 + ($189 << 2) | 0;
    $192 = $1 + ($$036 * 1300 | 0) + 1184 + ($$041 << 2) | 0;
    $193 = HEAP32[$192 >> 2] | 0;
    $194 = $193 - $$03 | 0;
    $201 = (HEAP32[$190 >> 2] | 0) + ((Math_imul($194 >> 16, $46) | 0) + ((Math_imul($194 & 65535, $46) | 0) >> 16)) | 0;
    HEAP32[$190 >> 2] = $$03;
    $203 = HEAP16[$10 + ($189 << 1) >> 1] | 0;
    $206 = HEAP32[$1 + ($$036 * 1300 | 0) + 1184 + (($$041 | 1) << 2) >> 2] | 0;
    HEAP32[$192 >> 2] = $201;
    $210 = $203 << 16 >> 16;
    $218 = HEAP16[$10 + ($$041 << 1) >> 1] | 0;
    $225 = $206 - $201 | 0;
    $$028 = $$028 + ((Math_imul($$03 >> 16, $210) | 0) + ((Math_imul($$03 & 65535, $210) | 0) >> 16)) + ((Math_imul($201 >> 16, $218) | 0) + ((Math_imul($201 & 65535, $218) | 0) >> 16)) | 0;
    $$03 = $193 + ((Math_imul($225 >> 16, $46) | 0) + ((Math_imul($225 & 65535, $46) | 0) >> 16)) | 0;
    $$041 = $$041 + 2 | 0;
   }
   $234 = $157 << 4;
   HEAP32[$1 + ($$036 * 1300 | 0) + 1184 + ($48 << 2) >> 2] = $$03;
   $238 = HEAP16[$49 >> 1] | 0;
   $245 = $$028 + ((Math_imul($$03 >> 16, $238) | 0) + ((Math_imul($$03 & 65535, $238) | 0) >> 16)) << 1;
   $247 = HEAP32[$1 + ($$036 * 1300 | 0) + 1280 >> 2] | 0;
   $248 = $247 >> 16;
   $250 = $247 & 65535;
   $255 = $245 + ((Math_imul($248, $50) | 0) + ((Math_imul($250, $50) | 0) >> 16)) << 2;
   $258 = HEAP32[$1 + ($$036 * 1300 | 0) + 1024 + (HEAP32[$24 >> 2] << 2) >> 2] | 0;
   $270 = (Math_imul($258 >> 16, $51) | 0) + ((Math_imul($258 & 65535, $51) | 0) >> 16) + (Math_imul($248, $52) | 0) + ((Math_imul($250, $52) | 0) >> 16) << 2;
   $277 = HEAP32[$150 >> 2] | 0;
   $278 = $277 - (($$027 + $234 - ($255 + $270) >> 3) + 1 >> 1) | 0;
   $280 = (HEAP32[$152 >> 2] | 0) < 0;
   $$ = $280 ? 0 - $278 | 0 : $278;
   $284 = ($$ | 0) > 30720 ? 30720 : ($$ | 0) > -31744 ? $$ : -31744;
   $285 = $284 - $17 | 0;
   do if ($53) {
    if (($285 | 0) > ($55 | 0)) {
     $$3$in = $285 - $55 | 0;
     label = 18;
     break;
    }
    if (($285 | 0) < ($56 | 0)) {
     $$3$in = $285 + $55 | 0;
     label = 18;
     break;
    } else if (($285 | 0) < 0) {
     label = 21;
     break;
    } else {
     $$2 = $58;
     $$210 = $17;
     $$222 = $62;
     $$225 = $60;
     break;
    }
   } else {
    $$3$in = $285;
    label = 18;
   } while (0);
   L25 : do if ((label | 0) == 18) {
    label = 0;
    $$3 = $$3$in >> 10;
    if (($$3 | 0) > 0) {
     $294 = ($$3 << 10) + -80 + $17 | 0;
     $295 = $294 + 1024 | 0;
     $$2 = $295;
     $$210 = $294;
     $$222 = Math_imul($295 << 16 >> 16, $57) | 0;
     $$225 = Math_imul($294 << 16 >> 16, $57) | 0;
     break;
    }
    switch ($$3 | 0) {
    case 0:
     {
      $$2 = $58;
      $$210 = $17;
      $$222 = $62;
      $$225 = $60;
      break L25;
      break;
     }
    case -1:
     {
      label = 21;
      break L25;
      break;
     }
    default:
     {}
    }
    $302 = ($$3 << 10 | 80) + $17 | 0;
    $$2 = $302 + 1024 | 0;
    $$210 = $302;
    $$222 = Math_imul(-1024 - $302 << 16 >> 16, $57) | 0;
    $$225 = Math_imul(0 - $302 << 16 >> 16, $57) | 0;
   } while (0);
   if ((label | 0) == 21) {
    label = 0;
    $$2 = $17;
    $$210 = $63;
    $$222 = $60;
    $$225 = $66;
   }
   $311 = $284 - $$210 << 16 >> 16;
   $314 = $$225 + (Math_imul($311, $311) | 0) >> 10;
   $316 = $284 - $$2 << 16 >> 16;
   $319 = $$222 + (Math_imul($316, $316) | 0) >> 10;
   $320 = ($314 | 0) < ($319 | 0);
   $322 = HEAP32[$1 + ($$036 * 1300 | 0) + 1296 >> 2] | 0;
   $$210$$2 = $320 ? $$210 : $$2;
   $$2$$210 = $320 ? $$2 : $$210;
   HEAP32[$26 + ($$036 * 56 | 0) + 4 >> 2] = $322 + ($320 ? $314 : $319);
   HEAP32[$26 + ($$036 * 56 | 0) + 32 >> 2] = $322 + ($320 ? $319 : $314);
   HEAP32[$26 + ($$036 * 56 | 0) >> 2] = $$210$$2;
   HEAP32[$26 + ($$036 * 56 | 0) + 28 >> 2] = $$2$$210;
   $327 = $$210$$2 << 4;
   $329 = ($280 ? 0 - $327 | 0 : $327) + $$029 | 0;
   $330 = $329 + $234 | 0;
   $331 = $277 << 4;
   $332 = $330 - $331 | 0;
   HEAP32[$26 + ($$036 * 56 | 0) + 16 >> 2] = $332;
   $334 = $332 - $255 | 0;
   HEAP32[$26 + ($$036 * 56 | 0) + 20 >> 2] = $334 - $270;
   HEAP32[$26 + ($$036 * 56 | 0) + 12 >> 2] = $334;
   HEAP32[$26 + ($$036 * 56 | 0) + 24 >> 2] = $329;
   HEAP32[$26 + ($$036 * 56 | 0) + 8 >> 2] = $330;
   $340 = $$2$$210 << 4;
   $342 = ($280 ? 0 - $340 | 0 : $340) + $$029 | 0;
   $343 = $342 + $234 | 0;
   $344 = $343 - $331 | 0;
   HEAP32[$26 + ($$036 * 56 | 0) + 44 >> 2] = $344;
   $346 = $344 - $255 | 0;
   HEAP32[$26 + ($$036 * 56 | 0) + 48 >> 2] = $346 - $270;
   HEAP32[$26 + ($$036 * 56 | 0) + 40 >> 2] = $346;
   HEAP32[$26 + ($$036 * 56 | 0) + 52 >> 2] = $342;
   HEAP32[$26 + ($$036 * 56 | 0) + 36 >> 2] = $343;
   $$036 = $$036 + 1 | 0;
  }
  $355 = ((HEAP32[$24 >> 2] | 0) + -1 | 0) % 40 | 0;
  $356 = ($355 | 0) < 0;
  $357 = $355 + 40 | 0;
  HEAP32[$24 >> 2] = $356 ? $357 : $355;
  $358 = ($356 ? $357 : $355) + $25 | 0;
  $$016 = HEAP32[$67 >> 2] | 0;
  $$034 = 0;
  $$137 = 1;
  while (1) {
   if (($$137 | 0) >= ($23 | 0)) break;
   $362 = HEAP32[$26 + ($$137 * 56 | 0) + 4 >> 2] | 0;
   $363 = ($362 | 0) < ($$016 | 0);
   $$016 = $363 ? $362 : $$016;
   $$034 = $363 ? $$137 : $$034;
   $$137 = $$137 + 1 | 0;
  }
  $365 = ($358 | 0) % 40 | 0;
  $367 = HEAP32[$1 + ($$034 * 1300 | 0) + 384 + ($365 << 2) >> 2] | 0;
  $$238 = 0;
  while (1) {
   if (($$238 | 0) >= ($23 | 0)) break;
   if ((HEAP32[$1 + ($$238 * 1300 | 0) + 384 + ($365 << 2) >> 2] | 0) != ($367 | 0)) {
    $372 = $26 + ($$238 * 56 | 0) + 4 | 0;
    HEAP32[$372 >> 2] = (HEAP32[$372 >> 2] | 0) + 134217727;
    $375 = $26 + ($$238 * 56 | 0) + 32 | 0;
    HEAP32[$375 >> 2] = (HEAP32[$375 >> 2] | 0) + 134217727;
   }
   $$238 = $$238 + 1 | 0;
  }
  $$014 = HEAP32[$67 >> 2] | 0;
  $$030 = 0;
  $$032 = 0;
  $$218 = HEAP32[$68 >> 2] | 0;
  $$339 = 1;
  while (1) {
   if (($$339 | 0) >= ($23 | 0)) break;
   $383 = HEAP32[$26 + ($$339 * 56 | 0) + 4 >> 2] | 0;
   $384 = ($383 | 0) > ($$014 | 0);
   $386 = HEAP32[$26 + ($$339 * 56 | 0) + 32 >> 2] | 0;
   $387 = ($386 | 0) < ($$218 | 0);
   $$014 = $384 ? $383 : $$014;
   $$030 = $384 ? $$339 : $$030;
   $$032 = $387 ? $$339 : $$032;
   $$218 = $387 ? $386 : $$218;
   $$339 = $$339 + 1 | 0;
  }
  if (($$218 | 0) < ($$014 | 0)) {
   _memcpy($1 + ($$030 * 1300 | 0) + ($$040 << 2) | 0, $1 + ($$032 * 1300 | 0) + ($$040 << 2) | 0, 1300 - ($$040 << 2) | 0) | 0;
   $394 = $26 + ($$030 * 56 | 0) | 0;
   $395 = $26 + ($$032 * 56 | 0) + 28 | 0;
   HEAP32[$394 >> 2] = HEAP32[$395 >> 2];
   HEAP32[$394 + 4 >> 2] = HEAP32[$395 + 4 >> 2];
   HEAP32[$394 + 8 >> 2] = HEAP32[$395 + 8 >> 2];
   HEAP32[$394 + 12 >> 2] = HEAP32[$395 + 12 >> 2];
   HEAP32[$394 + 16 >> 2] = HEAP32[$395 + 16 >> 2];
   HEAP32[$394 + 20 >> 2] = HEAP32[$395 + 20 >> 2];
   HEAP32[$394 + 24 >> 2] = HEAP32[$395 + 24 >> 2];
  }
  if (!($69 & ($$040 | 0) < ($25 | 0))) {
   $403 = $$040 - $25 | 0;
   HEAP8[$4 + $403 >> 0] = (((HEAP32[$1 + ($$034 * 1300 | 0) + 544 + ($365 << 2) >> 2] | 0) >>> 9) + 1 | 0) >>> 1;
   $406 = HEAP32[$1 + ($$034 * 1300 | 0) + 704 + ($365 << 2) >> 2] | 0;
   $409 = HEAP32[$7 + ($365 << 2) >> 2] | 0;
   $410 = $409 << 16 >> 16;
   $423 = ((Math_imul($406 >> 16, $410) | 0) + ((Math_imul($406 & 65535, $410) | 0) >> 16) + (Math_imul($406, ($409 >> 15) + 1 >> 1) | 0) >> 7) + 1 >> 1;
   HEAP16[$5 + ($403 << 1) >> 1] = ($423 | 0) > 32767 ? 32767 : (($423 | 0) > -32768 ? $423 : -32768) & 65535;
   HEAP32[$0 + 1280 + ((HEAP32[$27 >> 2] | 0) - $25 << 2) >> 2] = HEAP32[$1 + ($$034 * 1300 | 0) + 1024 + ($365 << 2) >> 2];
   HEAP32[$6 + ((HEAP32[$32 >> 2] | 0) - $25 << 2) >> 2] = HEAP32[$1 + ($$034 * 1300 | 0) + 864 + ($365 << 2) >> 2];
  }
  HEAP32[$27 >> 2] = (HEAP32[$27 >> 2] | 0) + 1;
  HEAP32[$32 >> 2] = (HEAP32[$32 >> 2] | 0) + 1;
  $443 = $$040 + 16 | 0;
  $$4 = 0;
  while (1) {
   if (($$4 | 0) >= ($23 | 0)) break;
   HEAP32[$1 + ($$4 * 1300 | 0) + 1280 >> 2] = HEAP32[$26 + ($$4 * 56 | 0) + 12 >> 2];
   HEAP32[$1 + ($$4 * 1300 | 0) + 1284 >> 2] = HEAP32[$26 + ($$4 * 56 | 0) + 16 >> 2];
   $452 = HEAP32[$26 + ($$4 * 56 | 0) + 8 >> 2] | 0;
   HEAP32[$1 + ($$4 * 1300 | 0) + ($443 << 2) >> 2] = $452;
   HEAP32[$1 + ($$4 * 1300 | 0) + 704 + (HEAP32[$24 >> 2] << 2) >> 2] = $452;
   $457 = HEAP32[$26 + ($$4 * 56 | 0) >> 2] | 0;
   HEAP32[$1 + ($$4 * 1300 | 0) + 544 + (HEAP32[$24 >> 2] << 2) >> 2] = $457;
   HEAP32[$1 + ($$4 * 1300 | 0) + 864 + (HEAP32[$24 >> 2] << 2) >> 2] = HEAP32[$26 + ($$4 * 56 | 0) + 24 >> 2] << 1;
   HEAP32[$1 + ($$4 * 1300 | 0) + 1024 + (HEAP32[$24 >> 2] << 2) >> 2] = HEAP32[$26 + ($$4 * 56 | 0) + 20 >> 2];
   $469 = $1 + ($$4 * 1300 | 0) + 1288 | 0;
   $474 = (HEAP32[$469 >> 2] | 0) + (($457 >> 9) + 1 >> 1) | 0;
   HEAP32[$469 >> 2] = $474;
   HEAP32[$1 + ($$4 * 1300 | 0) + 384 + (HEAP32[$24 >> 2] << 2) >> 2] = $474;
   HEAP32[$1 + ($$4 * 1300 | 0) + 1296 >> 2] = HEAP32[$26 + ($$4 * 56 | 0) + 4 >> 2];
   $$4 = $$4 + 1 | 0;
  }
  HEAP32[$7 + (HEAP32[$24 >> 2] << 2) >> 2] = $37;
  $$0 = $$1;
  $$01 = $$12;
  $$040 = $$040 + 1 | 0;
 }
 while (1) {
  if (($$5 | 0) >= ($23 | 0)) break;
  dest = $1 + ($$5 * 1300 | 0) | 0;
  src = $1 + ($$5 * 1300 | 0) + ($18 << 2) | 0;
  stop = dest + 64 | 0;
  do {
   HEAP32[dest >> 2] = HEAP32[src >> 2];
   dest = dest + 4 | 0;
   src = src + 4 | 0;
  } while ((dest | 0) < (stop | 0));
  $$5 = $$5 + 1 | 0;
 }
 STACKTOP = sp;
 return;
}

function _silk_encode_frame_FLP($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$01 = 0, $$011 = 0, $$017 = 0, $$018 = 0, $$02 = 0, $$021 = 0, $$024 = 0, $$026 = 0, $$027 = 0, $$03 = 0, $$030 = 0, $$032 = 0, $$035 = 0, $$038 = 0, $$04 = 0, $$05 = 0, $$08 = 0, $$112 = 0, $$12552 = 0, $$13150 = 0, $$13948 = 0, $$21055 = 0, $$21065 = 0, $$213 = 0, $$22054 = 0, $$22353 = 0, $$22363 = 0, $$22951 = 0, $$22961 = 0, $$23449 = 0, $$23459 = 0, $$237 = 0, $$23746 = 0, $$256 = 0, $$314 = 0, $$4$in = 0, $$415 = 0, $$5 = 0, $$516 = 0, $$idx44 = 0, $$pre = 0, $$sroa$0 = 0, $$sroa$4$0 = 0, $$sroa$4$0$$sroa_idx80 = 0, $$sroa$4$0$copyload = 0, $$sroa$4$0$copyload81 = 0, $$sroa$4$1 = 0, $$sroa$4$2 = 0, $$sroa$4$3 = 0, $$sroa$4$4 = 0, $$sroa$5 = 0, $$sroa$5$0$$sroa_idx88 = 0, $10 = 0, $11 = 0, $111 = 0, $116 = 0.0, $12 = 0, $120 = 0, $124 = 0, $125 = 0, $127 = 0, $129 = 0, $13 = 0, $130 = 0, $133 = 0, $134 = 0, $14 = 0, $140 = 0, $15 = 0, $155 = 0, $157 = 0, $16 = 0, $164 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $174 = 0, $176 = 0, $184 = 0, $186 = 0, $191 = 0, $198 = 0, $199 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $26 = 0, $27 = 0, $29 = 0, $44 = 0, $48 = 0, $49 = 0, $52 = 0, $53 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $77 = 0, $8 = 0, $85 = 0, $88 = 0, $9 = 0, $storemerge = 0, dest = 0, label = 0, sp = 0, src = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 13584 | 0;
 $6 = sp + 11536 | 0;
 $7 = sp + 8848 | 0;
 $8 = sp + 8800 | 0;
 $$sroa$0 = sp + 24 | 0;
 $$sroa$5 = sp;
 $9 = sp + 4448 | 0;
 $10 = sp + 96 | 0;
 $11 = sp + 80 | 0;
 $12 = sp + 12296 | 0;
 $13 = sp + 64 | 0;
 $14 = sp + 12288 | 0;
 $15 = sp + 48 | 0;
 HEAP32[$13 >> 2] = 0;
 HEAP32[$13 + 4 >> 2] = 0;
 HEAP32[$13 + 8 >> 2] = 0;
 HEAP32[$13 + 12 >> 2] = 0;
 $16 = $0 + 4616 | 0;
 $17 = HEAP32[$16 >> 2] | 0;
 HEAP32[$16 >> 2] = $17 + 1;
 $21 = $0 + 4766 | 0;
 HEAP8[$21 >> 0] = $17 & 3;
 $22 = $0 + 4588 | 0;
 $23 = HEAP32[$22 >> 2] | 0;
 $24 = $0 + 7176 + ($23 << 2) | 0;
 $26 = $0 + 5094 | 0;
 $27 = $0 + 4580 | 0;
 _silk_LP_variable_cutoff($0 + 16 | 0, $26, HEAP32[$27 >> 2] | 0);
 $29 = $0 + 4572 | 0;
 _silk_short2float_array_360($24 + ((HEAP32[$29 >> 2] | 0) * 5 << 2) | 0, $26, HEAP32[$27 >> 2] | 0);
 $$011 = 0;
 while (1) {
  if (($$011 | 0) == 8) break;
  $44 = $24 + (((HEAP32[$29 >> 2] | 0) * 5 | 0) + (Math_imul($$011, HEAP32[$27 >> 2] >> 3) | 0) << 2) | 0;
  HEAPF32[$44 >> 2] = +HEAPF32[$44 >> 2] + +(1 - ($$011 & 2) | 0) * 9.999999974752427e-07;
  $$011 = $$011 + 1 | 0;
 }
 $48 = $7 + ($23 << 2) | 0;
 $49 = $0 + 4676 | 0;
 L5 : do if (!(HEAP32[$49 >> 2] | 0)) {
  _silk_find_pitch_lags_FLP($0, $6, $7, $24);
  _silk_noise_shape_analysis_FLP($0, $6, $48, $24);
  _silk_find_pred_coefs_FLP($0, $6, $48, $24, $3);
  _silk_process_gains_FLP($0, $6, $3);
  _silk_LBRR_encode_FLP($0, $6, $24, $3);
  $52 = $0 + 4732 | 0;
  $53 = $0 + 4576 | 0;
  $55 = _silk_gains_ID($52, HEAP32[$53 >> 2] | 0) | 0;
  dest = $8;
  src = $2;
  stop = dest + 48 | 0;
  do {
   HEAP32[dest >> 2] = HEAP32[src >> 2];
   dest = dest + 4 | 0;
   src = src + 4 | 0;
  } while ((dest | 0) < (stop | 0));
  $56 = $0 + 144 | 0;
  _memcpy($9 | 0, $56 | 0, 4352) | 0;
  $57 = HEAP8[$21 >> 0] | 0;
  $58 = $0 + 5768 | 0;
  $59 = HEAP16[$58 >> 1] | 0;
  $60 = $0 + 5764 | 0;
  $61 = HEAP32[$60 >> 2] | 0;
  $62 = $6 + 692 | 0;
  $63 = $0 + 4762 | 0;
  $64 = $0 + 4584 | 0;
  $65 = $6 + 744 | 0;
  $66 = $0 + 7164 | 0;
  $67 = ($3 | 0) == 2;
  $68 = $67 & 1;
  $69 = $4 + -5 | 0;
  $$sroa$4$0$$sroa_idx80 = $2 + 24 | 0;
  $$sroa$5$0$$sroa_idx88 = $2 + 28 | 0;
  $70 = $0 + 4732 | 0;
  $71 = $0 + 4768 | 0;
  $72 = $0 + 5744 | 0;
  $73 = $0 + 4761 | 0;
  $$idx44 = $2 + 20 | 0;
  $$017 = 0;
  $$018 = -1;
  $$021 = 0;
  $$024 = 0;
  $$026 = $55;
  $$027 = 0;
  $$030 = 0;
  $$032 = 0;
  $$038 = 0;
  $$04 = 0;
  $$05 = 256;
  $$08 = -1;
  $$sroa$4$0 = 0;
  while (1) {
   $74 = ($$026 | 0) == ($$018 | 0);
   if ($74) {
    $$237 = $$038;
    $$sroa$4$2 = $$sroa$4$0;
    label = 24;
   } else if (($$026 | 0) == ($$08 | 0)) {
    $$237 = $$032;
    $$sroa$4$2 = $$sroa$4$0;
    label = 24;
   } else {
    if (($$017 | 0) > 0) {
     dest = $2;
     src = $8;
     stop = dest + 48 | 0;
     do {
      HEAP32[dest >> 2] = HEAP32[src >> 2];
      dest = dest + 4 | 0;
      src = src + 4 | 0;
     } while ((dest | 0) < (stop | 0));
     _memcpy($56 | 0, $9 | 0, 4352) | 0;
     HEAP8[$21 >> 0] = $57;
     HEAP16[$58 >> 1] = $59;
     HEAP32[$60 >> 2] = $61;
    }
    _silk_NSQ_wrapper_FLP($0, $6, $70, $56, $71, $24);
    $77 = ($$017 | 0) == 6;
    if ($77 & ($$024 | 0) == 0) {
     HEAP32[$$sroa$0 >> 2] = HEAP32[$2 >> 2];
     HEAP32[$$sroa$0 + 4 >> 2] = HEAP32[$2 + 4 >> 2];
     HEAP32[$$sroa$0 + 8 >> 2] = HEAP32[$2 + 8 >> 2];
     HEAP32[$$sroa$0 + 12 >> 2] = HEAP32[$2 + 12 >> 2];
     HEAP32[$$sroa$0 + 16 >> 2] = HEAP32[$2 + 16 >> 2];
     HEAP32[$$sroa$0 + 20 >> 2] = HEAP32[$2 + 20 >> 2];
     $$sroa$4$0$copyload = HEAP32[$$sroa$4$0$$sroa_idx80 >> 2] | 0;
     HEAP32[$$sroa$5 >> 2] = HEAP32[$$sroa$5$0$$sroa_idx88 >> 2];
     HEAP32[$$sroa$5 + 4 >> 2] = HEAP32[$$sroa$5$0$$sroa_idx88 + 4 >> 2];
     HEAP32[$$sroa$5 + 8 >> 2] = HEAP32[$$sroa$5$0$$sroa_idx88 + 8 >> 2];
     HEAP32[$$sroa$5 + 12 >> 2] = HEAP32[$$sroa$5$0$$sroa_idx88 + 12 >> 2];
     HEAP32[$$sroa$5 + 16 >> 2] = HEAP32[$$sroa$5$0$$sroa_idx88 + 16 >> 2];
     $$sroa$4$1 = $$sroa$4$0$copyload;
    } else $$sroa$4$1 = $$sroa$4$0;
    _silk_encode_indices($0, $2, HEAP32[$72 >> 2] | 0, 0, $3);
    _silk_encode_pulses($2, HEAP8[$73 >> 0] | 0, HEAP8[$63 >> 0] | 0, $71, HEAP32[$27 >> 2] | 0);
    $85 = _ec_tell_361(HEAP32[$$idx44 >> 2] | 0, HEAP32[$$sroa$5$0$$sroa_idx88 >> 2] | 0) | 0;
    if ($77 & ($$024 | 0) == 0 & ($85 | 0) > ($4 | 0)) {
     HEAP32[$2 >> 2] = HEAP32[$$sroa$0 >> 2];
     HEAP32[$2 + 4 >> 2] = HEAP32[$$sroa$0 + 4 >> 2];
     HEAP32[$2 + 8 >> 2] = HEAP32[$$sroa$0 + 8 >> 2];
     HEAP32[$2 + 12 >> 2] = HEAP32[$$sroa$0 + 12 >> 2];
     HEAP32[$2 + 16 >> 2] = HEAP32[$$sroa$0 + 16 >> 2];
     HEAP32[$2 + 20 >> 2] = HEAP32[$$sroa$0 + 20 >> 2];
     HEAP32[$$sroa$4$0$$sroa_idx80 >> 2] = $$sroa$4$1;
     HEAP32[$$sroa$5$0$$sroa_idx88 >> 2] = HEAP32[$$sroa$5 >> 2];
     HEAP32[$$sroa$5$0$$sroa_idx88 + 4 >> 2] = HEAP32[$$sroa$5 + 4 >> 2];
     HEAP32[$$sroa$5$0$$sroa_idx88 + 8 >> 2] = HEAP32[$$sroa$5 + 8 >> 2];
     HEAP32[$$sroa$5$0$$sroa_idx88 + 12 >> 2] = HEAP32[$$sroa$5 + 12 >> 2];
     HEAP32[$$sroa$5$0$$sroa_idx88 + 16 >> 2] = HEAP32[$$sroa$5 + 16 >> 2];
     $88 = HEAP8[$65 >> 0] | 0;
     HEAP8[$66 >> 0] = $88;
     $$112 = 0;
     while (1) {
      if (($$112 | 0) >= (HEAP32[$53 >> 2] | 0)) break;
      HEAP8[$0 + 4732 + $$112 >> 0] = 4;
      $$112 = $$112 + 1 | 0;
     }
     if (!$67) HEAP8[$52 >> 0] = $88;
     HEAP16[$58 >> 1] = $59;
     HEAP32[$60 >> 2] = $61;
     $$213 = 0;
     while (1) {
      if (($$213 | 0) >= (HEAP32[$27 >> 2] | 0)) break;
      HEAP8[$0 + 4768 + $$213 >> 0] = 0;
      $$213 = $$213 + 1 | 0;
     }
     _silk_encode_indices($0, $2, HEAP32[$72 >> 2] | 0, 0, $3);
     _silk_encode_pulses($2, HEAP8[$73 >> 0] | 0, HEAP8[$63 >> 0] | 0, $71, HEAP32[$27 >> 2] | 0);
     $$035 = _ec_tell_361(HEAP32[$$idx44 >> 2] | 0, HEAP32[$$sroa$5$0$$sroa_idx88 >> 2] | 0) | 0;
    } else $$035 = $85;
    if (!($$017 | $5)) if (($$035 | 0) > ($4 | 0)) {
     $$23746 = $$035;
     $$sroa$4$3 = $$sroa$4$1;
    } else break L5; else {
     $$237 = $$035;
     $$sroa$4$2 = $$sroa$4$1;
     label = 24;
    }
   }
   if ((label | 0) == 24) {
    label = 0;
    if (($$017 | 0) == 6) break; else {
     $$23746 = $$237;
     $$sroa$4$3 = $$sroa$4$2;
    }
   }
   $111 = ($$23746 | 0) > ($4 | 0);
   L36 : do if ($111) {
    if ($$024 | 0) {
     $$12552 = $$024;
     $$13150 = $$030;
     $$13948 = $$038;
     $$21055 = $$026;
     $$22054 = $$018;
     $$22353 = 1;
     $$22951 = $$05 << 16 >> 16;
     $$23449 = $$23746;
     $$256 = $$04;
     $$sroa$4$4 = $$sroa$4$3;
     break;
    }
    if (($$017 | 0) > 1) {
     $116 = +HEAPF32[$62 >> 2] * 1.5;
     HEAPF32[$62 >> 2] = $116 > 1.5 ? $116 : 1.5;
     HEAP8[$63 >> 0] = 0;
     $$21065 = -1;
     $$22363 = 0;
     $$22961 = $$027;
     $$23459 = $$032;
    } else {
     $$21065 = $$026;
     $$22363 = 1;
     $$22961 = $$05 << 16 >> 16;
     $$23459 = $$23746;
    }
    $124 = HEAP32[$53 >> 2] | 0;
    $125 = ($$017 | 0) == 0;
    $$314 = 0;
    L45 : while (1) {
     if (($$314 | 0) >= ($124 | 0)) {
      $$12552 = 0;
      $$13150 = $$030;
      $$13948 = $$038;
      $$21055 = $$21065;
      $$22054 = $$018;
      $$22353 = $$22363;
      $$22951 = $$22961;
      $$23449 = $$23459;
      $$256 = $$04;
      $$sroa$4$4 = $$sroa$4$3;
      break L36;
     }
     $127 = HEAP32[$64 >> 2] | 0;
     $129 = $$314 + 1 | 0;
     $130 = Math_imul($129, $127) | 0;
     $$02 = 0;
     $$03 = Math_imul($$314, $127) | 0;
     while (1) {
      if (($$03 | 0) >= ($130 | 0)) break;
      $133 = HEAP8[$0 + 4768 + $$03 >> 0] | 0;
      $134 = $133 << 24 >> 24;
      $$02 = $$02 + ($133 << 24 >> 24 > -1 ? $134 : 0 - $134 | 0) | 0;
      $$03 = $$03 + 1 | 0;
     }
     $$pre = $15 + ($$314 << 2) | 0;
     do if (!$125) {
      $140 = $13 + ($$314 << 2) | 0;
      if (($$02 | 0) < (HEAP32[$$pre >> 2] | 0)) if (!(HEAP32[$140 >> 2] | 0)) break;
      HEAP32[$140 >> 2] = 1;
      $$314 = $129;
      continue L45;
     } while (0);
     HEAP32[$$pre >> 2] = $$02;
     HEAP16[$14 + ($$314 << 1) >> 1] = $$05;
     $$314 = $129;
    }
   } else {
    if (($$23746 | 0) >= ($69 | 0)) break L5;
    $120 = $$05 << 16 >> 16;
    if ($74) {
     $$12552 = 1;
     $$13150 = $120;
     $$13948 = $$23746;
     $$21055 = $$08;
     $$22054 = $$026;
     $$22353 = $$021;
     $$22951 = $$027;
     $$23449 = $$032;
     $$256 = $$04;
     $$sroa$4$4 = $$sroa$4$3;
    } else {
     HEAP32[$$sroa$0 >> 2] = HEAP32[$2 >> 2];
     HEAP32[$$sroa$0 + 4 >> 2] = HEAP32[$2 + 4 >> 2];
     HEAP32[$$sroa$0 + 8 >> 2] = HEAP32[$2 + 8 >> 2];
     HEAP32[$$sroa$0 + 12 >> 2] = HEAP32[$2 + 12 >> 2];
     HEAP32[$$sroa$0 + 16 >> 2] = HEAP32[$2 + 16 >> 2];
     HEAP32[$$sroa$0 + 20 >> 2] = HEAP32[$2 + 20 >> 2];
     $$sroa$4$0$copyload81 = HEAP32[$$sroa$4$0$$sroa_idx80 >> 2] | 0;
     HEAP32[$$sroa$5 >> 2] = HEAP32[$$sroa$5$0$$sroa_idx88 >> 2];
     HEAP32[$$sroa$5 + 4 >> 2] = HEAP32[$$sroa$5$0$$sroa_idx88 + 4 >> 2];
     HEAP32[$$sroa$5 + 8 >> 2] = HEAP32[$$sroa$5$0$$sroa_idx88 + 8 >> 2];
     HEAP32[$$sroa$5 + 12 >> 2] = HEAP32[$$sroa$5$0$$sroa_idx88 + 12 >> 2];
     HEAP32[$$sroa$5 + 16 >> 2] = HEAP32[$$sroa$5$0$$sroa_idx88 + 16 >> 2];
     _memcpy($12 | 0, HEAP32[$2 >> 2] | 0, $$sroa$4$0$copyload81 | 0) | 0;
     _memcpy($10 | 0, $56 | 0, 4352) | 0;
     $$12552 = 1;
     $$13150 = $120;
     $$13948 = $$23746;
     $$21055 = $$08;
     $$22054 = $$026;
     $$22353 = $$021;
     $$22951 = $$027;
     $$23449 = $$032;
     $$256 = HEAP8[$66 >> 0] | 0;
     $$sroa$4$4 = $$sroa$4$0$copyload81;
    }
   } while (0);
   do if (!($$12552 & $$22353)) {
    if (!$111) {
     $155 = _silk_log2lin((($$23746 - $4 << 7 | 0) / (HEAP32[$27 >> 2] | 0) | 0) + 2048 | 0) | 0;
     $157 = $$05 << 16 >> 16;
     $$5 = (Math_imul($155 >> 16, $157) | 0) + ((Math_imul($155 & 65535, $157) | 0) >>> 16) & 65535;
     break;
    }
    if ($$05 << 16 >> 16 < 16384) $$5 = $$05 << 16 >> 16 << 1 & 65535; else $$5 = 32767;
   } else {
    $164 = $$22951 - $$13150 | 0;
    $169 = $$13150 + ((Math_imul($164, $4 - $$13948 | 0) | 0) / ($$23449 - $$13948 | 0) | 0) | 0;
    $170 = $169 << 16 >> 16;
    $171 = $164 >> 2;
    $172 = $$13150 + $171 | 0;
    if (($170 | 0) > ($172 | 0)) $$4$in = $172; else {
     $174 = $$22951 - $171 | 0;
     $$4$in = ($170 | 0) < ($174 | 0) ? $174 : $169;
    }
    $$5 = $$4$in & 65535;
   } while (0);
   $176 = HEAP32[$53 >> 2] | 0;
   $$415 = 0;
   while (1) {
    if (($$415 | 0) >= ($176 | 0)) break;
    if (!(HEAP32[$13 + ($$415 << 2) >> 2] | 0)) $$01 = $$5; else $$01 = HEAP16[$14 + ($$415 << 1) >> 1] | 0;
    $184 = HEAP32[$6 + 728 + ($$415 << 2) >> 2] | 0;
    $186 = $$01 << 16 >> 16;
    $191 = (Math_imul($184 >> 16, $186) | 0) + ((Math_imul($184 & 65535, $186) | 0) >> 16) | 0;
    HEAP32[$11 + ($$415 << 2) >> 2] = ($191 | 0) > 8388607 ? 2147483392 : (($191 | 0) > -8388608 ? $191 : -8388608) << 8;
    $$415 = $$415 + 1 | 0;
   }
   HEAP8[$66 >> 0] = HEAP8[$65 >> 0] | 0;
   _silk_gains_quant($52, $11, $66, $68, $176);
   $198 = HEAP32[$53 >> 2] | 0;
   $199 = _silk_gains_ID($52, $198) | 0;
   $$516 = 0;
   while (1) {
    if (($$516 | 0) >= ($198 | 0)) break;
    HEAPF32[$6 + ($$516 << 2) >> 2] = +(HEAP32[$11 + ($$516 << 2) >> 2] | 0) * .0000152587890625;
    $$516 = $$516 + 1 | 0;
   }
   $$017 = $$017 + 1 | 0;
   $$018 = $$22054;
   $$021 = $$22353;
   $$024 = $$12552;
   $$026 = $199;
   $$027 = $$22951;
   $$030 = $$13150;
   $$032 = $$23449;
   $$038 = $$13948;
   $$04 = $$256;
   $$05 = $$5;
   $$08 = $$21055;
   $$sroa$4$0 = $$sroa$4$4;
  }
  if (($$024 | 0) != 0 & ($74 | ($$237 | 0) > ($4 | 0))) {
   HEAP32[$2 >> 2] = HEAP32[$$sroa$0 >> 2];
   HEAP32[$2 + 4 >> 2] = HEAP32[$$sroa$0 + 4 >> 2];
   HEAP32[$2 + 8 >> 2] = HEAP32[$$sroa$0 + 8 >> 2];
   HEAP32[$2 + 12 >> 2] = HEAP32[$$sroa$0 + 12 >> 2];
   HEAP32[$2 + 16 >> 2] = HEAP32[$$sroa$0 + 16 >> 2];
   HEAP32[$2 + 20 >> 2] = HEAP32[$$sroa$0 + 20 >> 2];
   HEAP32[$$sroa$4$0$$sroa_idx80 >> 2] = $$sroa$4$2;
   HEAP32[$$sroa$5$0$$sroa_idx88 >> 2] = HEAP32[$$sroa$5 >> 2];
   HEAP32[$$sroa$5$0$$sroa_idx88 + 4 >> 2] = HEAP32[$$sroa$5 + 4 >> 2];
   HEAP32[$$sroa$5$0$$sroa_idx88 + 8 >> 2] = HEAP32[$$sroa$5 + 8 >> 2];
   HEAP32[$$sroa$5$0$$sroa_idx88 + 12 >> 2] = HEAP32[$$sroa$5 + 12 >> 2];
   HEAP32[$$sroa$5$0$$sroa_idx88 + 16 >> 2] = HEAP32[$$sroa$5 + 16 >> 2];
   _memcpy(HEAP32[$2 >> 2] | 0, $12 | 0, $$sroa$4$2 | 0) | 0;
   _memcpy($56 | 0, $10 | 0, 4352) | 0;
   HEAP8[$66 >> 0] = $$04;
  }
 } while (0);
 _memmove($0 + 7176 | 0, $0 + 7176 + (HEAP32[$27 >> 2] << 2) | 0, (HEAP32[$22 >> 2] | 0) + ((HEAP32[$29 >> 2] | 0) * 5 | 0) << 2 | 0) | 0;
 if (HEAP32[$49 >> 2] | 0) {
  $storemerge = 0;
  HEAP32[$1 >> 2] = $storemerge;
  STACKTOP = sp;
  return 0;
 }
 HEAP32[$0 + 4540 >> 2] = HEAP32[$6 + 228 + ((HEAP32[$0 + 4576 >> 2] | 0) + -1 << 2) >> 2];
 HEAP8[$0 + 4537 >> 0] = HEAP8[$0 + 4761 >> 0] | 0;
 HEAP32[$0 + 4660 >> 2] = 0;
 $storemerge = (_ec_tell_361(HEAP32[$2 + 20 >> 2] | 0, HEAP32[$2 + 28 >> 2] | 0) | 0) + 7 >> 3;
 HEAP32[$1 >> 2] = $storemerge;
 STACKTOP = sp;
 return 0;
}

function _quant_all_bands($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21) {
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
 var $$ = 0, $$0 = 0, $$01 = 0, $$011 = 0, $$012 = 0, $$013 = 0, $$014 = 0, $$016 = 0, $$017 = 0, $$019 = 0, $$02 = 0, $$023 = 0, $$0253 = 0, $$026 = 0, $$03 = 0, $$04 = 0, $$05 = 0, $$1 = 0, $$1158 = 0, $$118 = 0, $$120 = 0, $$124 = 0, $$16 = 0, $$2 = 0, $$210 = 0, $$221 = 0, $$32 = 0, $$322 = 0, $$40 = 0, $$41 = 0, $$4253 = 0, $$48 = 0, $$5 = 0, $$alloca_mul = 0, $$idx = 0, $$idx1 = 0, $$sroa$0$0$copyload = 0, $$sroa$3$0$$sroa_idx13 = 0, $$sroa$3$0$copyload = 0, $$sroa$4 = 0, $$sroa$4$0$$sroa_idx = 0, $$sroa$419$0$$sroa_idx20 = 0, $$sroa$419$0$copyload = 0, $$sroa$5 = 0, $103 = 0, $104 = 0, $107 = 0, $110 = 0, $112 = 0, $115 = 0, $116 = 0, $132 = 0, $134 = 0, $141 = 0, $144 = 0, $152 = 0, $153 = 0, $159 = 0, $163 = 0, $169 = 0, $174 = 0, $180 = 0, $187 = 0, $188 = 0, $190 = 0, $197 = 0, $204 = 0, $214 = 0, $215 = 0, $216 = 0, $22 = 0, $223 = 0, $224 = 0, $225 = 0.0, $227 = 0.0, $228 = 0.0, $23 = 0, $231 = 0.0, $237 = 0, $238 = 0, $24 = 0, $246 = 0, $247 = 0, $248 = 0.0, $25 = 0, $250 = 0.0, $251 = 0.0, $26 = 0, $269 = 0, $27 = 0, $270 = 0, $279 = 0, $28 = 0, $280 = 0, $282 = 0, $289 = 0, $29 = 0, $296 = 0, $31 = 0, $32 = 0, $36 = 0, $38 = 0, $41 = 0, $42 = 0, $43 = 0, $47 = 0, $48 = 0, $51 = 0, $53 = 0, $54 = 0, $59 = 0, $60 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $72 = 0, $77 = 0, $78 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $87 = 0, $88 = 0, $89 = 0, $91 = 0, $92 = 0, $95 = 0, $96 = 0, $98 = 0, dest = 0, label = 0, sp = 0, src = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 1552 | 0;
 $22 = sp + 216 | 0;
 $$sroa$4 = sp + 24 | 0;
 $$sroa$5 = sp;
 $23 = sp + 168 | 0;
 $24 = sp + 108 | 0;
 $25 = sp + 48 | 0;
 $26 = sp + 276 | 0;
 $27 = sp + 40 | 0;
 $28 = $0 + 32 | 0;
 $29 = HEAP32[$28 >> 2] | 0;
 $31 = $4 | 0 ? 2 : 1;
 $32 = ($4 | 0) == 0;
 $$48 = ($10 | 0) == 0 & ($32 ^ 1) & ($19 | 0) > 7;
 $36 = 1 << $16;
 $$ = ($8 | 0) == 0 ? 1 : $36;
 $38 = $29 + ($1 << 1) | 0;
 $41 = HEAP16[$38 >> 1] << $16;
 $42 = $0 + 8 | 0;
 $43 = HEAP32[$42 >> 2] | 0;
 $47 = HEAP16[$29 + ($43 + -1 << 1) >> 1] | 0;
 $48 = $47 << $16;
 $$alloca_mul = (Math_imul($31, $48 - $41 | 0) | 0) << 2;
 $51 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * $$alloca_mul | 0) + 15 & -16) | 0;
 $53 = 0 - $41 | 0;
 $54 = $51 + ($48 << 2) + ($53 << 2) | 0;
 if ($$48) {
  $59 = (HEAP16[$29 + ($43 << 1) >> 1] | 0) - $47 << $16;
  $60 = STACKTOP;
  STACKTOP = STACKTOP + ((1 * ($59 << 2) | 0) + 15 & -16) | 0;
  $$019 = $60;
  $$0253 = $59;
 } else {
  $$019 = $3 + ($48 << 2) | 0;
  $$0253 = 1;
 }
 $62 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($$0253 << 2) | 0) + 15 & -16) | 0;
 $63 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($$0253 << 2) | 0) + 15 & -16) | 0;
 $64 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($$0253 << 2) | 0) + 15 & -16) | 0;
 $65 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($$0253 << 2) | 0) + 15 & -16) | 0;
 $66 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($$0253 << 2) | 0) + 15 & -16) | 0;
 HEAP32[$22 + 36 >> 2] = $6;
 HEAP32[$22 + 28 >> 2] = $15;
 HEAP32[$22 >> 2] = 1;
 HEAP32[$22 + 16 >> 2] = $11;
 HEAP32[$22 + 8 >> 2] = $0;
 $72 = $22 + 40 | 0;
 HEAP32[$72 >> 2] = HEAP32[$18 >> 2];
 HEAP32[$22 + 20 >> 2] = $9;
 HEAP32[$22 + 44 >> 2] = $20;
 HEAP32[$22 + 52 >> 2] = $21;
 HEAP32[$22 + 4 >> 2] = $$48 & 1;
 $77 = $22 + 48 | 0;
 HEAP32[$77 >> 2] = 0;
 $78 = ($$ | 0) > 1;
 $80 = $22 + 56 | 0;
 HEAP32[$80 >> 2] = $78 & 1;
 $81 = $22 + 12 | 0;
 $82 = $2 + -1 | 0;
 $$idx = $15 + 20 | 0;
 $$idx1 = $15 + 28 | 0;
 $83 = $22 + 32 | 0;
 $84 = $22 + 24 | 0;
 $85 = $0 + 12 | 0;
 $87 = (1 << $$) + -1 | 0;
 $$sroa$3$0$$sroa_idx13 = $15 + 4 | 0;
 $$sroa$4$0$$sroa_idx = $15 + 8 | 0;
 $$sroa$419$0$$sroa_idx20 = $15 + 24 | 0;
 $88 = $27 + 4 | 0;
 $89 = $1 + 1 | 0;
 $$014 = $10;
 $$016 = 1;
 $$017 = 0;
 $$023 = $14;
 $$026 = $1;
 $$120 = $$019;
 while (1) {
  if (($$026 | 0) >= ($2 | 0)) break;
  HEAP32[$81 >> 2] = $$026;
  $91 = ($$026 | 0) == ($82 | 0);
  $92 = $29 + ($$026 << 1) | 0;
  $95 = HEAP16[$92 >> 1] << $16;
  $96 = $3 + ($95 << 2) | 0;
  $$32 = $32 ? 0 : $4 + ($95 << 2) | 0;
  $98 = $$026 + 1 | 0;
  $103 = (HEAP16[$29 + ($98 << 1) >> 1] << $16) - $95 | 0;
  $104 = _ec_tell_frac(HEAP32[$$idx >> 2] | 0, HEAP32[$$idx1 >> 2] | 0) | 0;
  $$124 = $$023 - (($$026 | 0) == ($1 | 0) ? 0 : $104) | 0;
  $107 = $13 - $104 | 0;
  HEAP32[$83 >> 2] = $107 + -1;
  if (($$026 | 0) < ($17 | 0)) {
   $110 = $17 - $$026 | 0;
   $112 = _celt_sudiv($$124, ($110 | 0) < 3 ? $110 : 3) | 0;
   $115 = (HEAP32[$7 + ($$026 << 2) >> 2] | 0) + $112 | 0;
   $116 = ($107 | 0) < ($115 | 0);
   if ((($116 ? $107 : $115) | 0) < 16384 & (($116 ? $107 : $115) | 0) < 0) $$013 = 0; else $$013 = (($116 ? $107 : $115) | 0) > 16383 ? 16383 : $116 ? $107 : $115;
  } else $$013 = 0;
  if ($$48) if (((HEAP16[$92 >> 1] << $16) - $103 | 0) < (HEAP16[$38 >> 1] << $16 | 0)) $$118 = $$017; else $$118 = ($$016 | 0) != 0 | ($$017 | 0) == 0 ? $$026 : $$017; else $$118 = $$017;
  $132 = HEAP32[$12 + ($$026 << 2) >> 2] | 0;
  HEAP32[$84 >> 2] = $132;
  $134 = ($$026 | 0) < (HEAP32[$85 >> 2] | 0);
  $$221 = $134 ? $$120 : 0;
  $$011 = $134 ? $96 : $51;
  $$210 = $134 ? $$32 : $32 ? 0 : $51;
  $$322 = $91 ? ($$48 ? $$221 : 0) : $$221;
  if (!$$118) {
   $$012 = -1;
   $$1 = $87;
   $$16 = $87;
  } else if (($9 | 0) != 3 | $78 | ($132 | 0) < 0) {
   $141 = (HEAP16[$29 + ($$118 << 1) >> 1] << $16) - $41 | 0;
   $$40 = ($141 | 0) < ($103 | 0) ? 0 : $141 - $103 | 0;
   $144 = $$40 + $41 | 0;
   $$03 = $$118;
   do $$03 = $$03 + -1 | 0; while ((HEAP16[$29 + ($$03 << 1) >> 1] << $16 | 0) > ($144 | 0));
   $152 = $144 + $103 | 0;
   $$02 = $$118 + -1 | 0;
   while (1) {
    $153 = $$02 + 1 | 0;
    if ((HEAP16[$29 + ($153 << 1) >> 1] << $16 | 0) < ($152 | 0)) $$02 = $153; else {
     $$01 = $$03;
     $$04 = 0;
     $$05 = 0;
     break;
    }
   }
   while (1) {
    $159 = Math_imul($$01, $31) | 0;
    $163 = $$05 | HEAPU8[$5 + $159 >> 0];
    $169 = $$04 | HEAPU8[$5 + ($159 + $31 + -1) >> 0];
    if (($$01 | 0) < ($$02 | 0)) {
     $$01 = $$01 + 1 | 0;
     $$04 = $169;
     $$05 = $163;
    } else {
     $$012 = $$40;
     $$1 = $169;
     $$16 = $163;
     break;
    }
   }
  } else {
   $$012 = -1;
   $$1 = $87;
   $$16 = $87;
  }
  L27 : do if (!$$014) label = 29; else if (($$026 | 0) == ($11 | 0)) {
   if (!$$48) {
    label = 29;
    break;
   }
   $174 = $29 + ($11 << 1) | 0;
   $$0 = 0;
   while (1) {
    if (($$0 | 0) >= ((HEAP16[$174 >> 1] << $16) - $41 | 0)) {
     label = 29;
     break L27;
    }
    $180 = $51 + ($$0 << 2) | 0;
    HEAPF32[$180 >> 2] = (+HEAPF32[$180 >> 2] + +HEAPF32[$54 + ($$0 << 2) >> 2]) * .5;
    $$0 = $$0 + 1 | 0;
   }
  } else {
   $187 = ($$013 | 0) / 2 | 0;
   $188 = ($$012 | 0) == -1;
   $$41 = $188 ? 0 : $51 + ($$012 << 2) | 0;
   if ($91) {
    $190 = _quant_band($22, $$011, $103, $187, $$, $$41, $16, 0, 1.0, $$322, $$16) | 0;
    $$4253 = $188 ? 0 : $54 + ($$012 << 2) | 0;
    $204 = 0;
    $296 = $190;
   } else {
    $197 = _quant_band($22, $$011, $103, $187, $$, $$41, $16, $51 + (HEAP16[$92 >> 1] << $16 << 2) + ($53 << 2) | 0, 1.0, $$322, $$16) | 0;
    $$4253 = $188 ? 0 : $54 + ($$012 << 2) | 0;
    $204 = $54 + (HEAP16[$92 >> 1] << $16 << 2) + ($53 << 2) | 0;
    $296 = $197;
   }
   $$1158 = $$014;
   $$2 = _quant_band($22, $$210, $103, $187, $$, $$4253, $16, $204, 1.0, $$322, $$1) | 0;
   $$5 = $296;
   break;
  } while (0);
  do if ((label | 0) == 29) {
   label = 0;
   if (!$$210) {
    if ($91) $279 = 0; else $279 = $51 + (HEAP16[$92 >> 1] << $16 << 2) + ($53 << 2) | 0;
    $280 = _quant_band($22, $$011, $103, $$013, $$, ($$012 | 0) == -1 ? 0 : $51 + ($$012 << 2) | 0, $16, $279, 1.0, $$322, $$16 | $$1) | 0;
    $$1158 = 0;
    $$2 = $280;
    $$5 = $280;
    break;
   }
   if (!($$48 & ($$026 | 0) < ($11 | 0))) {
    HEAP32[$77 >> 2] = 0;
    if ($91) $269 = 0; else $269 = $51 + (HEAP16[$92 >> 1] << $16 << 2) + ($53 << 2) | 0;
    $270 = _quant_band_stereo($22, $$011, $$210, $103, $$013, $$, ($$012 | 0) == -1 ? 0 : $51 + ($$012 << 2) | 0, $16, $269, $$322, $$16 | $$1) | 0;
    $$1158 = 0;
    $$2 = $270;
    $$5 = $270;
    break;
   }
   _compute_channel_weights(+HEAPF32[$6 + ($$026 << 2) >> 2], +HEAPF32[$6 + ($$026 + (HEAP32[$42 >> 2] | 0) << 2) >> 2], $27);
   $214 = $$16 | $$1;
   $$sroa$0$0$copyload = HEAP32[$15 >> 2] | 0;
   $$sroa$3$0$copyload = HEAP32[$$sroa$3$0$$sroa_idx13 >> 2] | 0;
   HEAP32[$$sroa$4 >> 2] = HEAP32[$$sroa$4$0$$sroa_idx >> 2];
   HEAP32[$$sroa$4 + 4 >> 2] = HEAP32[$$sroa$4$0$$sroa_idx + 4 >> 2];
   HEAP32[$$sroa$4 + 8 >> 2] = HEAP32[$$sroa$4$0$$sroa_idx + 8 >> 2];
   HEAP32[$$sroa$4 + 12 >> 2] = HEAP32[$$sroa$4$0$$sroa_idx + 12 >> 2];
   $$sroa$419$0$copyload = HEAP32[$$sroa$419$0$$sroa_idx20 >> 2] | 0;
   HEAP32[$$sroa$5 >> 2] = HEAP32[$$idx1 >> 2];
   HEAP32[$$sroa$5 + 4 >> 2] = HEAP32[$$idx1 + 4 >> 2];
   HEAP32[$$sroa$5 + 8 >> 2] = HEAP32[$$idx1 + 8 >> 2];
   HEAP32[$$sroa$5 + 12 >> 2] = HEAP32[$$idx1 + 12 >> 2];
   HEAP32[$$sroa$5 + 16 >> 2] = HEAP32[$$idx1 + 16 >> 2];
   dest = $24;
   src = $22;
   stop = dest + 60 | 0;
   do {
    HEAP32[dest >> 2] = HEAP32[src >> 2];
    dest = dest + 4 | 0;
    src = src + 4 | 0;
   } while ((dest | 0) < (stop | 0));
   $215 = $103 << 2;
   _memcpy($62 | 0, $$011 | 0, $215 | 0) | 0;
   _memcpy($63 | 0, $$210 | 0, $215 | 0) | 0;
   HEAP32[$77 >> 2] = -1;
   $216 = ($$012 | 0) == -1;
   if ($91) $223 = 0; else $223 = $51 + (HEAP16[$92 >> 1] << $16 << 2) + ($53 << 2) | 0;
   $224 = _quant_band_stereo($22, $$011, $$210, $103, $$013, $$, $216 ? 0 : $51 + ($$012 << 2) | 0, $16, $223, $$322, $214) | 0;
   $225 = +HEAPF32[$27 >> 2];
   $227 = $225 * +_celt_inner_prod_c($62, $$011, $103);
   $228 = +HEAPF32[$88 >> 2];
   $231 = $227 + $228 * +_celt_inner_prod_c($63, $$210, $103);
   dest = $23;
   src = $15;
   stop = dest + 48 | 0;
   do {
    HEAP32[dest >> 2] = HEAP32[src >> 2];
    dest = dest + 4 | 0;
    src = src + 4 | 0;
   } while ((dest | 0) < (stop | 0));
   dest = $25;
   src = $22;
   stop = dest + 60 | 0;
   do {
    HEAP32[dest >> 2] = HEAP32[src >> 2];
    dest = dest + 4 | 0;
    src = src + 4 | 0;
   } while ((dest | 0) < (stop | 0));
   _memcpy($64 | 0, $$011 | 0, $215 | 0) | 0;
   _memcpy($65 | 0, $$210 | 0, $215 | 0) | 0;
   if (!$91) _memcpy($66 | 0, $51 + (HEAP16[$92 >> 1] << $16 << 2) + ($53 << 2) | 0, $215 | 0) | 0;
   $237 = $$sroa$0$0$copyload + $$sroa$419$0$copyload | 0;
   $238 = $$sroa$3$0$copyload - $$sroa$419$0$copyload | 0;
   _memcpy($26 | 0, $237 | 0, $238 | 0) | 0;
   HEAP32[$15 >> 2] = $$sroa$0$0$copyload;
   HEAP32[$$sroa$3$0$$sroa_idx13 >> 2] = $$sroa$3$0$copyload;
   HEAP32[$$sroa$4$0$$sroa_idx >> 2] = HEAP32[$$sroa$4 >> 2];
   HEAP32[$$sroa$4$0$$sroa_idx + 4 >> 2] = HEAP32[$$sroa$4 + 4 >> 2];
   HEAP32[$$sroa$4$0$$sroa_idx + 8 >> 2] = HEAP32[$$sroa$4 + 8 >> 2];
   HEAP32[$$sroa$4$0$$sroa_idx + 12 >> 2] = HEAP32[$$sroa$4 + 12 >> 2];
   HEAP32[$$sroa$419$0$$sroa_idx20 >> 2] = $$sroa$419$0$copyload;
   HEAP32[$$idx1 >> 2] = HEAP32[$$sroa$5 >> 2];
   HEAP32[$$idx1 + 4 >> 2] = HEAP32[$$sroa$5 + 4 >> 2];
   HEAP32[$$idx1 + 8 >> 2] = HEAP32[$$sroa$5 + 8 >> 2];
   HEAP32[$$idx1 + 12 >> 2] = HEAP32[$$sroa$5 + 12 >> 2];
   HEAP32[$$idx1 + 16 >> 2] = HEAP32[$$sroa$5 + 16 >> 2];
   dest = $22;
   src = $24;
   stop = dest + 60 | 0;
   do {
    HEAP32[dest >> 2] = HEAP32[src >> 2];
    dest = dest + 4 | 0;
    src = src + 4 | 0;
   } while ((dest | 0) < (stop | 0));
   _memcpy($$011 | 0, $62 | 0, $215 | 0) | 0;
   _memcpy($$210 | 0, $63 | 0, $215 | 0) | 0;
   if (($$026 | 0) == ($89 | 0)) _special_hybrid_folding(HEAP32[$28 >> 2] | 0, $51, $54, $1, $36, 0);
   HEAP32[$77 >> 2] = 1;
   if ($91) $246 = 0; else $246 = $51 + (HEAP16[$92 >> 1] << $16 << 2) + ($53 << 2) | 0;
   $247 = _quant_band_stereo($22, $$011, $$210, $103, $$013, $$, $216 ? 0 : $51 + ($$012 << 2) | 0, $16, $246, $$322, $214) | 0;
   $248 = +HEAPF32[$27 >> 2];
   $250 = $248 * +_celt_inner_prod_c($62, $$011, $103);
   $251 = +HEAPF32[$88 >> 2];
   if (!($231 >= $250 + $251 * +_celt_inner_prod_c($63, $$210, $103))) {
    $$1158 = 0;
    $$2 = $247;
    $$5 = $247;
   } else {
    dest = $15;
    src = $23;
    stop = dest + 48 | 0;
    do {
     HEAP32[dest >> 2] = HEAP32[src >> 2];
     dest = dest + 4 | 0;
     src = src + 4 | 0;
    } while ((dest | 0) < (stop | 0));
    dest = $22;
    src = $25;
    stop = dest + 60 | 0;
    do {
     HEAP32[dest >> 2] = HEAP32[src >> 2];
     dest = dest + 4 | 0;
     src = src + 4 | 0;
    } while ((dest | 0) < (stop | 0));
    _memcpy($$011 | 0, $64 | 0, $215 | 0) | 0;
    _memcpy($$210 | 0, $65 | 0, $215 | 0) | 0;
    if (!$91) _memcpy($51 + (HEAP16[$92 >> 1] << $16 << 2) + ($53 << 2) | 0, $66 | 0, $215 | 0) | 0;
    _memcpy($237 | 0, $26 | 0, $238 | 0) | 0;
    $$1158 = 0;
    $$2 = $224;
    $$5 = $224;
   }
  } while (0);
  $282 = Math_imul($$026, $31) | 0;
  HEAP8[$5 + $282 >> 0] = $$5;
  HEAP8[$5 + ($282 + $31 + -1) >> 0] = $$2;
  $289 = HEAP32[$7 + ($$026 << 2) >> 2] | 0;
  HEAP32[$80 >> 2] = 0;
  $$014 = $$1158;
  $$016 = ($$013 | 0) > ($103 << 3 | 0) & 1;
  $$017 = $$118;
  $$023 = $$124 + ($289 + $104) | 0;
  $$026 = $98;
  $$120 = $$322;
 }
 HEAP32[$18 >> 2] = HEAP32[$72 >> 2];
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

function _silk_pitch_analysis_core_FLP($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = +$6;
 $7 = +$7;
 $8 = $8 | 0;
 $9 = $9 | 0;
 $10 = $10 | 0;
 var $$0 = 0, $$01 = 0, $$011 = 0, $$014 = 0, $$017 = 0, $$019 = 0, $$022 = 0.0, $$025 = 0.0, $$026 = 0, $$031 = 0, $$037 = 0, $$039 = 0, $$04 = 0, $$042 = 0.0, $$044 = 0.0, $$049 = 0, $$05 = 0.0, $$052 = 0, $$053 = 0.0, $$054 = 0.0, $$055 = 0.0, $$056 = 0, $$059 = 0, $$06 = 0, $$1 = 0, $$10 = 0, $$112 = 0, $$127 = 0, $$13 = 0, $$132 = 0, $$138 = 0, $$140 = 0, $$157 = 0, $$160 = 0, $$17 = 0, $$19 = 0, $$2 = 0, $$210 = 0, $$213 = 0, $$216 = 0, $$221 = 0, $$224 = 0.0, $$228 = 0, $$233 = 0, $$241 = 0, $$246 = 0.0, $$251 = 0, $$3 = 0, $$329 = 0, $$334 = 0, $$347 = 0.0, $$4 = 0, $$430 = 0, $$435 = 0, $$448 = 0.0, $$5 = 0, $$536 = 0, $$6 = 0, $$7 = 0, $$8 = 0, $$9 = 0, $$pre$phi14Z2D = 0, $$pre$phiZ2D = 0, $$sink = 0.0, $104 = 0, $105 = 0.0, $11 = 0, $112 = 0, $113 = 0.0, $116 = 0.0, $12 = 0, $122 = 0, $13 = 0, $135 = 0, $14 = 0, $144 = 0, $149 = 0, $15 = 0, $156 = 0, $16 = 0, $17 = 0, $170 = 0, $18 = 0, $183 = 0, $188 = 0.0, $19 = 0, $192 = 0, $194 = 0, $195 = 0.0, $20 = 0, $21 = 0, $214 = 0, $216 = 0.0, $217 = 0.0, $218 = 0, $219 = 0.0, $22 = 0, $222 = 0, $224 = 0, $23 = 0, $234 = 0.0, $235 = 0.0, $24 = 0, $240 = 0.0, $241 = 0, $245 = 0.0, $247 = 0.0, $248 = 0.0, $249 = 0.0, $264 = 0, $27 = 0, $275 = 0, $276 = 0, $278 = 0, $28 = 0, $280 = 0.0, $288 = 0.0, $29 = 0, $290 = 0, $31 = 0, $315 = 0, $32 = 0, $325 = 0, $326 = 0, $33 = 0, $331 = 0, $34 = 0, $340 = 0, $35 = 0, $36 = 0, $37 = 0, $42 = 0, $48 = 0, $52 = 0, $55 = 0.0, $59 = 0.0, $63 = 0, $64 = 0, $65 = 0, $67 = 0, $70 = 0.0, $71 = 0.0, $74 = 0.0, $80 = 0, $86 = 0.0, $90 = 0.0, $93 = 0.0, $97 = 0, $or$cond18 = 0, $storemerge$in = 0, $storemerge$sink = 0, $storemerge2$in = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 13680 | 0;
 $11 = sp + 8888 | 0;
 $12 = sp + 8248 | 0;
 $13 = sp + 13032 | 0;
 $14 = sp + 12712 | 0;
 $15 = sp;
 $16 = sp + 5864 | 0;
 $17 = sp + 5604 | 0;
 $18 = sp + 5560 | 0;
 $19 = sp + 5464 | 0;
 $20 = sp + 12408 | 0;
 $21 = sp + 2744 | 0;
 $22 = sp + 24 | 0;
 $23 = sp + 11128 | 0;
 $24 = sp + 10168 | 0;
 $27 = Math_imul(($10 * 5 | 0) + 20 | 0, $8) | 0;
 $28 = $10 * 20 | 0;
 $29 = $28 + 80 | 0;
 $31 = ($10 * 40 | 0) + 160 | 0;
 $32 = $8 * 5 | 0;
 $33 = $8 << 1;
 $34 = $8 * 18 | 0;
 $35 = $34 + -1 | 0;
 $36 = ($8 | 0) == 16;
 do if ($36) {
  _silk_float2short_array_406($23, $0, $27);
  $37 = $15;
  HEAP32[$37 >> 2] = 0;
  HEAP32[$37 + 4 >> 2] = 0;
  _silk_resampler_down2($15, $13, $23, $27);
  _silk_short2float_array_407($11, $13, $31);
  $$pre$phi14Z2D = $13;
  $$pre$phiZ2D = $15;
 } else if (($8 | 0) == 12) {
  _silk_float2short_array_406($24, $0, $27);
  HEAP32[$15 >> 2] = 0;
  HEAP32[$15 + 4 >> 2] = 0;
  HEAP32[$15 + 8 >> 2] = 0;
  HEAP32[$15 + 12 >> 2] = 0;
  HEAP32[$15 + 16 >> 2] = 0;
  HEAP32[$15 + 20 >> 2] = 0;
  _silk_resampler_down2_3($15, $13, $24, $27);
  _silk_short2float_array_407($11, $13, $31);
  $$pre$phi14Z2D = $13;
  $$pre$phiZ2D = $15;
  break;
 } else {
  _silk_float2short_array_406($13, $0, $31);
  $$pre$phi14Z2D = $13;
  $$pre$phiZ2D = $15;
  break;
 } while (0);
 $42 = $15;
 HEAP32[$42 >> 2] = 0;
 HEAP32[$42 + 4 >> 2] = 0;
 _silk_resampler_down2($$pre$phiZ2D, $14, $$pre$phi14Z2D, $31);
 _silk_short2float_array_407($12, $14, $29);
 $$026 = $28 + 79 | 0;
 while (1) {
  if (($$026 | 0) <= 0) break;
  $48 = $12 + ($$026 << 2) | 0;
  $52 = $$026 + -1 | 0;
  $55 = +(~~+HEAPF32[$48 >> 2] | 0) + +HEAPF32[$12 + ($52 << 2) >> 2];
  if ($55 > 32767.0) $59 = 32767.0; else if ($55 < -32768.0) $59 = -32768.0; else $59 = $55;
  HEAPF32[$48 >> 2] = +(~~$59 << 16 >> 16);
  $$026 = $52;
 }
 _memset($16 | 0, 0, $10 * 596 | 0) | 0;
 $63 = $10 >> 1;
 $64 = $17 + 256 | 0;
 $65 = $16 + 32 | 0;
 $$031 = 0;
 $$049 = $12 + 320 | 0;
 while (1) {
  if (($$031 | 0) >= ($63 | 0)) {
   $$127 = 72;
   break;
  }
  $67 = $$049 + -32 | 0;
  _celt_pitch_xcorr_c($$049, $$049 + -288 | 0, $17, 40, 65);
  $70 = +HEAPF32[$64 >> 2];
  $71 = +_silk_energy_FLP($$049, 40);
  $74 = $71 + +_silk_energy_FLP($67, 40) + 16.0e4;
  HEAPF32[$65 >> 2] = +HEAPF32[$65 >> 2] + $70 * 2.0 / $74;
  $$037 = 9;
  $$052 = $67;
  $$054 = $74;
  while (1) {
   if (($$037 | 0) == 73) break;
   $80 = $$052 + -4 | 0;
   $86 = +HEAPF32[$80 >> 2];
   $90 = +HEAPF32[$$052 + 156 >> 2];
   $93 = $$054 + ($86 * $86 - $90 * $90);
   $97 = $16 + ($$037 << 2) | 0;
   HEAPF32[$97 >> 2] = +HEAPF32[$97 >> 2] + +HEAPF32[$17 + (72 - $$037 << 2) >> 2] * 2.0 / $93;
   $$037 = $$037 + 1 | 0;
   $$052 = $80;
   $$054 = $93;
  }
  $$031 = $$031 + 1 | 0;
  $$049 = $$049 + 160 | 0;
 }
 while (1) {
  if (($$127 | 0) <= 7) break;
  $104 = $16 + ($$127 << 2) | 0;
  $105 = +HEAPF32[$104 >> 2];
  HEAPF32[$104 >> 2] = $105 - $105 * +($$127 | 0) * .000244140625;
  $$127 = $$127 + -1 | 0;
 }
 $112 = ($9 << 1) + 4 | 0;
 _silk_insertion_sort_decreasing_FLP($65, $19, 65, $112);
 $113 = +HEAPF32[$65 >> 2];
 if ($113 < .20000000298023224) {
  _memset($1 | 0, 0, $10 << 2 | 0) | 0;
  HEAPF32[$4 >> 2] = 0.0;
  HEAP16[$2 >> 1] = 0;
  $$0 = 1;
  $storemerge$sink = 0;
  HEAP8[$3 >> 0] = $storemerge$sink;
  STACKTOP = sp;
  return $$0 | 0;
 }
 $116 = $113 * $6;
 $$228 = 0;
 while (1) {
  if (($$228 | 0) >= ($112 | 0)) {
   $$056 = $112;
   break;
  }
  if (!(+HEAPF32[$16 + ($$228 + 8 << 2) >> 2] > $116)) {
   $$056 = $$228;
   break;
  }
  $122 = $19 + ($$228 << 2) | 0;
  HEAP32[$122 >> 2] = (HEAP32[$122 >> 2] << 1) + 16;
  $$228 = $$228 + 1 | 0;
 }
 $$329 = 11;
 while (1) {
  if (($$329 | 0) == 148) {
   $$430 = 0;
   break;
  }
  HEAP16[$20 + ($$329 << 1) >> 1] = 0;
  $$329 = $$329 + 1 | 0;
 }
 while (1) {
  if (($$430 | 0) >= ($$056 | 0)) {
   $$5 = 146;
   break;
  }
  HEAP16[$20 + (HEAP32[$19 + ($$430 << 2) >> 2] << 1) >> 1] = 1;
  $$430 = $$430 + 1 | 0;
 }
 while (1) {
  if (($$5 | 0) <= 15) {
   $$157 = 0;
   $$6 = 16;
   break;
  }
  $135 = $$5 + -1 | 0;
  $144 = $20 + ($$5 << 1) | 0;
  HEAP16[$144 >> 1] = (HEAPU16[$144 >> 1] | 0) + ((HEAPU16[$20 + ($135 << 1) >> 1] | 0) + (HEAPU16[$20 + ($$5 + -2 << 1) >> 1] | 0));
  $$5 = $135;
 }
 while (1) {
  if (($$6 | 0) == 144) {
   $$7 = 146;
   break;
  }
  $149 = $$6 + 1 | 0;
  if ((HEAP16[$20 + ($149 << 1) >> 1] | 0) <= 0) {
   $$6 = $149;
   continue;
  }
  HEAP32[$19 + ($$157 << 2) >> 2] = $$6;
  $$157 = $$157 + 1 | 0;
  $$6 = $149;
 }
 while (1) {
  if (($$7 | 0) <= 15) {
   $$059 = 0;
   $$8 = 16;
   break;
  }
  $156 = $$7 + -1 | 0;
  $170 = $20 + ($$7 << 1) | 0;
  HEAP16[$170 >> 1] = (HEAPU16[$170 >> 1] | 0) + ((HEAPU16[$20 + ($156 << 1) >> 1] | 0) + (HEAPU16[$20 + ($$7 + -2 << 1) >> 1] | 0) + (HEAPU16[$20 + ($$7 + -3 << 1) >> 1] | 0));
  $$7 = $156;
 }
 while (1) {
  if (($$8 | 0) == 147) break;
  if ((HEAP16[$20 + ($$8 << 1) >> 1] | 0) > 0) {
   HEAP16[$20 + ($$059 << 1) >> 1] = $$8 + 65534;
   $$160 = $$059 + 1 | 0;
  } else $$160 = $$059;
  $$059 = $$160;
  $$8 = $$8 + 1 | 0;
 }
 _memset($16 | 0, 0, 2384) | 0;
 $183 = ($8 | 0) == 8;
 $$132 = 0;
 $$251 = $183 ? $0 + 640 | 0 : $11 + 640 | 0;
 while (1) {
  if (($$132 | 0) >= ($10 | 0)) break;
  $188 = +_silk_energy_FLP($$251, 40) + 1.0;
  $$039 = 0;
  while (1) {
   if (($$039 | 0) >= ($$059 | 0)) break;
   $192 = HEAP16[$20 + ($$039 << 1) >> 1] | 0;
   $194 = $$251 + (0 - $192 << 2) | 0;
   $195 = +_silk_inner_product_FLP($194, $$251, 40);
   if ($195 > 0.0) $$sink = $195 * 2.0 / (+_silk_energy_FLP($194, 40) + $188); else $$sink = 0.0;
   HEAPF32[$16 + ($$132 * 596 | 0) + ($192 << 2) >> 2] = $$sink;
   $$039 = $$039 + 1 | 0;
  }
  $$132 = $$132 + 1 | 0;
  $$251 = $$251 + 160 | 0;
 }
 if (($5 | 0) > 0) {
  if (($8 | 0) == 12) $$19 = ($5 << 1 | 0) / 3 | 0; else $$19 = $5 >> ($36 & 1);
  $$05 = +_silk_log2_408(+($$19 | 0));
  $$210 = $$19;
 } else {
  $$05 = 0.0;
  $$210 = $5;
 }
 $214 = ($10 | 0) == 4;
 if ($214) {
  $$01 = 33457;
  $$06 = 11;
  $$13 = $183 & ($9 | 0) > 0 ? 11 : 3;
 } else {
  $$01 = 33423;
  $$06 = 3;
  $$13 = 3;
 }
 $216 = +($10 | 0);
 $217 = $216 * .20000000298023224;
 $218 = ($$210 | 0) > 0;
 $219 = $216 * $7;
 $$014 = -1;
 $$019 = 0;
 $$042 = -1.0e3;
 $$044 = 0.0;
 $$233 = 0;
 while (1) {
  if (($$233 | 0) >= ($$157 | 0)) break;
  $222 = HEAP32[$19 + ($$233 << 2) >> 2] | 0;
  $$140 = 0;
  while (1) {
   if (($$140 | 0) >= ($$13 | 0)) {
    $$017 = 0;
    $$022 = -1.0e3;
    $$10 = 0;
    break;
   }
   $224 = $18 + ($$140 << 2) | 0;
   HEAPF32[$224 >> 2] = 0.0;
   $$9 = 0;
   $235 = 0.0;
   while (1) {
    if (($$9 | 0) >= ($10 | 0)) break;
    $234 = $235 + +HEAPF32[$16 + ($$9 * 596 | 0) + ($222 + (HEAP8[$$01 + ((Math_imul($$9, $$06) | 0) + $$140) >> 0] | 0) << 2) >> 2];
    HEAPF32[$224 >> 2] = $234;
    $$9 = $$9 + 1 | 0;
    $235 = $234;
   }
   $$140 = $$140 + 1 | 0;
  }
  while (1) {
   if (($$10 | 0) >= ($$13 | 0)) break;
   $240 = +HEAPF32[$18 + ($$10 << 2) >> 2];
   $241 = $240 > $$022;
   $$017 = $241 ? $$10 : $$017;
   $$022 = $241 ? $240 : $$022;
   $$10 = $$10 + 1 | 0;
  }
  $245 = +_silk_log2_408(+($222 | 0));
  $247 = $$022 - $217 * $245;
  if ($218) {
   $248 = $245 - $$05;
   $249 = $248 * $248;
   $$025 = $247 - $217 * +HEAPF32[$4 >> 2] * $249 / ($249 + .5);
  } else $$025 = $247;
  $or$cond18 = $$025 > $$042 & $$022 > $219;
  $$014 = $or$cond18 ? $222 : $$014;
  $$019 = $or$cond18 ? $$017 : $$019;
  $$042 = $or$cond18 ? $$025 : $$042;
  $$044 = $or$cond18 ? $$022 : $$044;
  $$233 = $$233 + 1 | 0;
 }
 if (($$014 | 0) == -1) {
  HEAP32[$1 >> 2] = 0;
  HEAP32[$1 + 4 >> 2] = 0;
  HEAP32[$1 + 8 >> 2] = 0;
  HEAP32[$1 + 12 >> 2] = 0;
  HEAPF32[$4 >> 2] = 0.0;
  HEAP16[$2 >> 1] = 0;
  $$0 = 1;
  $storemerge$sink = 0;
  HEAP8[$3 >> 0] = $storemerge$sink;
  STACKTOP = sp;
  return $$0 | 0;
 }
 HEAPF32[$4 >> 2] = $$044 / $216;
 if (($8 | 0) > 8) {
  if (($8 | 0) == 12) {
   $264 = ($$014 << 16 >> 16) * 3 | 0;
   $$216 = ($264 >> 1) + ($264 & 1) | 0;
  } else $$216 = $$014 << 1;
  if (($33 | 0) < ($34 | 0)) if (($$216 | 0) < ($34 | 0)) $275 = ($$216 | 0) < ($33 | 0) ? $33 : $$216; else $275 = $35; else if (($$216 | 0) > ($33 | 0)) $275 = $33; else $275 = ($$216 | 0) < ($35 | 0) ? $35 : $$216;
  $276 = _silk_max_int_409($275 + -2 | 0, $33) | 0;
  $278 = _silk_min_int_410($275 + 2 | 0, $35) | 0;
  _silk_P_Ana_calc_corr_st3($22, $0, $276, $32, $10, $9);
  _silk_P_Ana_calc_energy_st3($21, $0, $276, $32, $10, $9);
  $280 = .05000000074505806 / +($275 | 0);
  if ($214) {
   $$1 = 33501;
   $$17 = 34;
   $$2 = HEAP8[33661 + $9 >> 0] | 0;
  } else {
   $$1 = 33429;
   $$17 = 12;
   $$2 = 12;
  }
  $288 = +_silk_energy_FLP($0 + ($8 * 20 << 2) | 0, Math_imul($32, $10) | 0) + 1.0;
  $$011 = $275;
  $$04 = 0;
  $$138 = $276;
  $$221 = 0;
  $$246 = -1.0e3;
  while (1) {
   if (($$138 | 0) > ($278 | 0)) break; else {
    $$112 = $$011;
    $$241 = 0;
    $$3 = $$221;
    $$347 = $$246;
   }
   while (1) {
    if (($$241 | 0) < ($$2 | 0)) {
     $$053 = 0.0;
     $$055 = $288;
     $$334 = 0;
    } else break;
    while (1) {
     if (($$334 | 0) >= ($10 | 0)) break;
     $$053 = $$053 + +HEAPF32[$22 + ($$334 * 680 | 0) + ($$241 * 20 | 0) + ($$04 << 2) >> 2];
     $$055 = $$055 + +HEAPF32[$21 + ($$334 * 680 | 0) + ($$241 * 20 | 0) + ($$04 << 2) >> 2];
     $$334 = $$334 + 1 | 0;
    }
    if ($$053 > 0.0) $$224 = $$053 * 2.0 / $$055 * (1.0 - $280 * +($$241 | 0)); else $$224 = 0.0;
    if ($$224 > $$347) {
     $315 = ($$138 + (HEAP8[33501 + $$241 >> 0] | 0) | 0) < ($34 | 0);
     $$213 = $315 ? $$138 : $$112;
     $$4 = $315 ? $$241 : $$3;
     $$448 = $315 ? $$224 : $$347;
    } else {
     $$213 = $$112;
     $$4 = $$3;
     $$448 = $$347;
    }
    $$112 = $$213;
    $$241 = $$241 + 1 | 0;
    $$3 = $$4;
    $$347 = $$448;
   }
   $$011 = $$112;
   $$04 = $$04 + 1 | 0;
   $$138 = $$138 + 1 | 0;
   $$221 = $$3;
   $$246 = $$347;
  }
  $290 = ($33 | 0) > ($34 | 0);
  $$435 = 0;
  while (1) {
   if (($$435 | 0) >= ($10 | 0)) break;
   $325 = $$011 + (HEAP8[$$1 + ((Math_imul($$435, $$17) | 0) + $$221) >> 0] | 0) | 0;
   $326 = $1 + ($$435 << 2) | 0;
   HEAP32[$326 >> 2] = $325;
   if ($290) if (($325 | 0) > ($33 | 0)) $331 = $33; else $331 = ($325 | 0) < ($34 | 0) ? $34 : $325; else if (($325 | 0) > ($34 | 0)) $331 = $34; else $331 = ($325 | 0) < ($33 | 0) ? $33 : $325;
   HEAP32[$326 >> 2] = $331;
   $$435 = $$435 + 1 | 0;
  }
  $storemerge$in = $$221;
  $storemerge2$in = $$011 - $33 | 0;
 } else {
  $$536 = 0;
  while (1) {
   if (($$536 | 0) >= ($10 | 0)) break;
   $340 = $$014 + (HEAP8[$$01 + ((Math_imul($$536, $$06) | 0) + $$019) >> 0] | 0) | 0;
   HEAP32[$1 + ($$536 << 2) >> 2] = ($340 | 0) > 144 ? 144 : ($340 | 0) > 16 ? $340 : 16;
   $$536 = $$536 + 1 | 0;
  }
  $storemerge$in = $$019;
  $storemerge2$in = $$014 + 65520 | 0;
 }
 HEAP16[$2 >> 1] = $storemerge2$in;
 $$0 = 0;
 $storemerge$sink = $storemerge$in & 255;
 HEAP8[$3 >> 0] = $storemerge$sink;
 STACKTOP = sp;
 return $$0 | 0;
}

function _free($0) {
 $0 = $0 | 0;
 var $$0212$i = 0, $$0212$in$i = 0, $$0383 = 0, $$0384 = 0, $$0396 = 0, $$0403 = 0, $$1 = 0, $$1382 = 0, $$1387 = 0, $$1390 = 0, $$1398 = 0, $$1402 = 0, $$2 = 0, $$3 = 0, $$3400 = 0, $$pre$phi443Z2D = 0, $$pre$phi445Z2D = 0, $$pre$phiZ2D = 0, $10 = 0, $104 = 0, $105 = 0, $113 = 0, $114 = 0, $115 = 0, $122 = 0, $124 = 0, $13 = 0, $130 = 0, $135 = 0, $136 = 0, $139 = 0, $141 = 0, $143 = 0, $158 = 0, $16 = 0, $163 = 0, $165 = 0, $168 = 0, $17 = 0, $171 = 0, $174 = 0, $177 = 0, $178 = 0, $179 = 0, $181 = 0, $183 = 0, $184 = 0, $186 = 0, $187 = 0, $193 = 0, $194 = 0, $2 = 0, $207 = 0, $21 = 0, $210 = 0, $211 = 0, $217 = 0, $232 = 0, $235 = 0, $236 = 0, $237 = 0, $24 = 0, $241 = 0, $242 = 0, $248 = 0, $253 = 0, $254 = 0, $257 = 0, $259 = 0, $26 = 0, $262 = 0, $267 = 0, $273 = 0, $277 = 0, $278 = 0, $28 = 0, $296 = 0, $298 = 0, $3 = 0, $305 = 0, $306 = 0, $307 = 0, $315 = 0, $41 = 0, $46 = 0, $48 = 0, $51 = 0, $53 = 0, $56 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $63 = 0, $65 = 0, $66 = 0, $68 = 0, $69 = 0, $7 = 0, $74 = 0, $75 = 0, $88 = 0, $9 = 0, $91 = 0, $92 = 0, $98 = 0, label = 0;
 if (!$0) return;
 $2 = $0 + -8 | 0;
 $3 = HEAP32[8428] | 0;
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
  if (($16 | 0) == (HEAP32[8429] | 0)) {
   $104 = $10 + 4 | 0;
   $105 = HEAP32[$104 >> 2] | 0;
   if (($105 & 3 | 0) != 3) {
    $$1 = $16;
    $$1382 = $17;
    $113 = $16;
    break;
   }
   HEAP32[8426] = $17;
   HEAP32[$104 >> 2] = $105 & -2;
   HEAP32[$16 + 4 >> 2] = $17 | 1;
   HEAP32[$16 + $17 >> 2] = $17;
   return;
  }
  $21 = $13 >>> 3;
  if ($13 >>> 0 < 256) {
   $24 = HEAP32[$16 + 8 >> 2] | 0;
   $26 = HEAP32[$16 + 12 >> 2] | 0;
   $28 = 33736 + ($21 << 1 << 2) | 0;
   if (($24 | 0) != ($28 | 0)) {
    if ($24 >>> 0 < $3 >>> 0) _abort();
    if ((HEAP32[$24 + 12 >> 2] | 0) != ($16 | 0)) _abort();
   }
   if (($26 | 0) == ($24 | 0)) {
    HEAP32[8424] = HEAP32[8424] & ~(1 << $21);
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
   $75 = 34e3 + ($74 << 2) | 0;
   do if (($16 | 0) == (HEAP32[$75 >> 2] | 0)) {
    HEAP32[$75 >> 2] = $$3;
    if (!$$3) {
     HEAP32[8425] = HEAP32[8425] & ~(1 << $74);
     $$1 = $16;
     $$1382 = $17;
     $113 = $16;
     break L10;
    }
   } else if ($46 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort(); else {
    HEAP32[$46 + 16 + (((HEAP32[$46 + 16 >> 2] | 0) != ($16 | 0) & 1) << 2) >> 2] = $$3;
    if (!$$3) {
     $$1 = $16;
     $$1382 = $17;
     $113 = $16;
     break L10;
    } else break;
   } while (0);
   $88 = HEAP32[8428] | 0;
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
   } else if ($98 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort(); else {
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
  $122 = HEAP32[8429] | 0;
  if (($10 | 0) == (HEAP32[8430] | 0)) {
   $124 = (HEAP32[8427] | 0) + $$1382 | 0;
   HEAP32[8427] = $124;
   HEAP32[8430] = $$1;
   HEAP32[$$1 + 4 >> 2] = $124 | 1;
   if (($$1 | 0) != ($122 | 0)) return;
   HEAP32[8429] = 0;
   HEAP32[8426] = 0;
   return;
  }
  if (($10 | 0) == ($122 | 0)) {
   $130 = (HEAP32[8426] | 0) + $$1382 | 0;
   HEAP32[8426] = $130;
   HEAP32[8429] = $113;
   HEAP32[$$1 + 4 >> 2] = $130 | 1;
   HEAP32[$113 + $130 >> 2] = $130;
   return;
  }
  $135 = ($115 & -8) + $$1382 | 0;
  $136 = $115 >>> 3;
  L108 : do if ($115 >>> 0 < 256) {
   $139 = HEAP32[$10 + 8 >> 2] | 0;
   $141 = HEAP32[$10 + 12 >> 2] | 0;
   $143 = 33736 + ($136 << 1 << 2) | 0;
   if (($139 | 0) != ($143 | 0)) {
    if ($139 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort();
    if ((HEAP32[$139 + 12 >> 2] | 0) != ($10 | 0)) _abort();
   }
   if (($141 | 0) == ($139 | 0)) {
    HEAP32[8424] = HEAP32[8424] & ~(1 << $136);
    break;
   }
   if (($141 | 0) == ($143 | 0)) $$pre$phi443Z2D = $141 + 8 | 0; else {
    if ($141 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort();
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
    if ($$1402 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort(); else {
     HEAP32[$$1402 >> 2] = 0;
     $$3400 = $$1398;
     break;
    }
   } else {
    $168 = HEAP32[$10 + 8 >> 2] | 0;
    if ($168 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort();
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
    $194 = 34e3 + ($193 << 2) | 0;
    do if (($10 | 0) == (HEAP32[$194 >> 2] | 0)) {
     HEAP32[$194 >> 2] = $$3400;
     if (!$$3400) {
      HEAP32[8425] = HEAP32[8425] & ~(1 << $193);
      break L108;
     }
    } else if ($163 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort(); else {
     HEAP32[$163 + 16 + (((HEAP32[$163 + 16 >> 2] | 0) != ($10 | 0) & 1) << 2) >> 2] = $$3400;
     if (!$$3400) break L108; else break;
    } while (0);
    $207 = HEAP32[8428] | 0;
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
    if ($217 | 0) if ($217 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort(); else {
     HEAP32[$$3400 + 20 >> 2] = $217;
     HEAP32[$217 + 24 >> 2] = $$3400;
     break;
    }
   }
  } while (0);
  HEAP32[$$1 + 4 >> 2] = $135 | 1;
  HEAP32[$113 + $135 >> 2] = $135;
  if (($$1 | 0) == (HEAP32[8429] | 0)) {
   HEAP32[8426] = $135;
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
  $235 = 33736 + ($232 << 1 << 2) | 0;
  $236 = HEAP32[8424] | 0;
  $237 = 1 << $232;
  if (!($236 & $237)) {
   HEAP32[8424] = $236 | $237;
   $$0403 = $235;
   $$pre$phiZ2D = $235 + 8 | 0;
  } else {
   $241 = $235 + 8 | 0;
   $242 = HEAP32[$241 >> 2] | 0;
   if ($242 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort(); else {
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
 $273 = 34e3 + ($$0396 << 2) | 0;
 HEAP32[$$1 + 28 >> 2] = $$0396;
 HEAP32[$$1 + 20 >> 2] = 0;
 HEAP32[$$1 + 16 >> 2] = 0;
 $277 = HEAP32[8425] | 0;
 $278 = 1 << $$0396;
 do if (!($277 & $278)) {
  HEAP32[8425] = $277 | $278;
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
  if ((label | 0) == 121) if ($296 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort(); else {
   HEAP32[$296 >> 2] = $$1;
   HEAP32[$$1 + 24 >> 2] = $$0384;
   HEAP32[$$1 + 12 >> 2] = $$1;
   HEAP32[$$1 + 8 >> 2] = $$1;
   break;
  } else if ((label | 0) == 124) {
   $305 = $$0384 + 8 | 0;
   $306 = HEAP32[$305 >> 2] | 0;
   $307 = HEAP32[8428] | 0;
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
 $315 = (HEAP32[8432] | 0) + -1 | 0;
 HEAP32[8432] = $315;
 if (!$315) $$0212$in$i = 34152; else return;
 while (1) {
  $$0212$i = HEAP32[$$0212$in$i >> 2] | 0;
  if (!$$0212$i) break; else $$0212$in$i = $$0212$i + 8 | 0;
 }
 HEAP32[8432] = -1;
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
  $13 = HEAP32[8428] | 0;
  if ($11 >>> 0 < $13 >>> 0) _abort();
  if (($11 | 0) == (HEAP32[8429] | 0)) {
   $100 = $2 + 4 | 0;
   $101 = HEAP32[$100 >> 2] | 0;
   if (($101 & 3 | 0) != 3) {
    $$1 = $11;
    $$1418 = $12;
    break;
   }
   HEAP32[8426] = $12;
   HEAP32[$100 >> 2] = $101 & -2;
   HEAP32[$11 + 4 >> 2] = $12 | 1;
   HEAP32[$11 + $12 >> 2] = $12;
   return;
  }
  $17 = $7 >>> 3;
  if ($7 >>> 0 < 256) {
   $20 = HEAP32[$11 + 8 >> 2] | 0;
   $22 = HEAP32[$11 + 12 >> 2] | 0;
   $24 = 33736 + ($17 << 1 << 2) | 0;
   if (($20 | 0) != ($24 | 0)) {
    if ($20 >>> 0 < $13 >>> 0) _abort();
    if ((HEAP32[$20 + 12 >> 2] | 0) != ($11 | 0)) _abort();
   }
   if (($22 | 0) == ($20 | 0)) {
    HEAP32[8424] = HEAP32[8424] & ~(1 << $17);
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
   $71 = 34e3 + ($70 << 2) | 0;
   do if (($11 | 0) == (HEAP32[$71 >> 2] | 0)) {
    HEAP32[$71 >> 2] = $$3;
    if (!$$3) {
     HEAP32[8425] = HEAP32[8425] & ~(1 << $70);
     $$1 = $11;
     $$1418 = $12;
     break L1;
    }
   } else if ($42 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort(); else {
    HEAP32[$42 + 16 + (((HEAP32[$42 + 16 >> 2] | 0) != ($11 | 0) & 1) << 2) >> 2] = $$3;
    if (!$$3) {
     $$1 = $11;
     $$1418 = $12;
     break L1;
    } else break;
   } while (0);
   $84 = HEAP32[8428] | 0;
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
   } else if ($94 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort(); else {
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
 $108 = HEAP32[8428] | 0;
 if ($2 >>> 0 < $108 >>> 0) _abort();
 $110 = $2 + 4 | 0;
 $111 = HEAP32[$110 >> 2] | 0;
 if (!($111 & 2)) {
  $116 = HEAP32[8429] | 0;
  if (($2 | 0) == (HEAP32[8430] | 0)) {
   $118 = (HEAP32[8427] | 0) + $$1418 | 0;
   HEAP32[8427] = $118;
   HEAP32[8430] = $$1;
   HEAP32[$$1 + 4 >> 2] = $118 | 1;
   if (($$1 | 0) != ($116 | 0)) return;
   HEAP32[8429] = 0;
   HEAP32[8426] = 0;
   return;
  }
  if (($2 | 0) == ($116 | 0)) {
   $124 = (HEAP32[8426] | 0) + $$1418 | 0;
   HEAP32[8426] = $124;
   HEAP32[8429] = $$1;
   HEAP32[$$1 + 4 >> 2] = $124 | 1;
   HEAP32[$$1 + $124 >> 2] = $124;
   return;
  }
  $129 = ($111 & -8) + $$1418 | 0;
  $130 = $111 >>> 3;
  L96 : do if ($111 >>> 0 < 256) {
   $133 = HEAP32[$2 + 8 >> 2] | 0;
   $135 = HEAP32[$2 + 12 >> 2] | 0;
   $137 = 33736 + ($130 << 1 << 2) | 0;
   if (($133 | 0) != ($137 | 0)) {
    if ($133 >>> 0 < $108 >>> 0) _abort();
    if ((HEAP32[$133 + 12 >> 2] | 0) != ($2 | 0)) _abort();
   }
   if (($135 | 0) == ($133 | 0)) {
    HEAP32[8424] = HEAP32[8424] & ~(1 << $130);
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
    $184 = 34e3 + ($183 << 2) | 0;
    do if (($2 | 0) == (HEAP32[$184 >> 2] | 0)) {
     HEAP32[$184 >> 2] = $$3435;
     if (!$$3435) {
      HEAP32[8425] = HEAP32[8425] & ~(1 << $183);
      break L96;
     }
    } else if ($155 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort(); else {
     HEAP32[$155 + 16 + (((HEAP32[$155 + 16 >> 2] | 0) != ($2 | 0) & 1) << 2) >> 2] = $$3435;
     if (!$$3435) break L96; else break;
    } while (0);
    $197 = HEAP32[8428] | 0;
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
    if ($207 | 0) if ($207 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort(); else {
     HEAP32[$$3435 + 20 >> 2] = $207;
     HEAP32[$207 + 24 >> 2] = $$3435;
     break;
    }
   }
  } while (0);
  HEAP32[$$1 + 4 >> 2] = $129 | 1;
  HEAP32[$$1 + $129 >> 2] = $129;
  if (($$1 | 0) == (HEAP32[8429] | 0)) {
   HEAP32[8426] = $129;
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
  $225 = 33736 + ($222 << 1 << 2) | 0;
  $226 = HEAP32[8424] | 0;
  $227 = 1 << $222;
  if (!($226 & $227)) {
   HEAP32[8424] = $226 | $227;
   $$0438 = $225;
   $$pre$phiZ2D = $225 + 8 | 0;
  } else {
   $231 = $225 + 8 | 0;
   $232 = HEAP32[$231 >> 2] | 0;
   if ($232 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort(); else {
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
 $263 = 34e3 + ($$0431 << 2) | 0;
 HEAP32[$$1 + 28 >> 2] = $$0431;
 HEAP32[$$1 + 20 >> 2] = 0;
 HEAP32[$$1 + 16 >> 2] = 0;
 $267 = HEAP32[8425] | 0;
 $268 = 1 << $$0431;
 if (!($267 & $268)) {
  HEAP32[8425] = $267 | $268;
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
  if ($286 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort();
  HEAP32[$286 >> 2] = $$1;
  HEAP32[$$1 + 24 >> 2] = $$0420;
  HEAP32[$$1 + 12 >> 2] = $$1;
  HEAP32[$$1 + 8 >> 2] = $$1;
  return;
 } else if ((label | 0) == 121) {
  $295 = $$0420 + 8 | 0;
  $296 = HEAP32[$295 >> 2] | 0;
  $297 = HEAP32[8428] | 0;
  if (!($296 >>> 0 >= $297 >>> 0 & $$0420 >>> 0 >= $297 >>> 0)) _abort();
  HEAP32[$296 + 12 >> 2] = $$1;
  HEAP32[$295 >> 2] = $$1;
  HEAP32[$$1 + 8 >> 2] = $296;
  HEAP32[$$1 + 12 >> 2] = $$0420;
  HEAP32[$$1 + 24 >> 2] = 0;
  return;
 }
}

function _silk_stereo_LR_to_MS($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) {
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
 var $$0 = 0, $$01 = 0, $$02 = 0, $$03 = 0, $$04 = 0, $$05 = 0, $$16 = 0, $$27 = 0, $$38 = 0, $$4$ph = 0, $$440$ph = 0, $$44044 = 0, $$44045 = 0, $$441 = 0, $$49 = 0, $$50 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $11 = 0, $111 = 0, $113 = 0, $115 = 0, $116 = 0, $12 = 0, $121 = 0, $124 = 0, $128 = 0, $129 = 0, $13 = 0, $131 = 0, $133 = 0, $139 = 0, $14 = 0, $145 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $156 = 0, $16 = 0, $169 = 0, $173 = 0, $174 = 0, $18 = 0, $181 = 0, $182 = 0, $193 = 0, $194 = 0, $201 = 0, $202 = 0, $21 = 0, $210 = 0, $211 = 0, $223 = 0, $226 = 0, $233 = 0, $238 = 0, $24 = 0, $241 = 0, $242 = 0, $245 = 0, $246 = 0, $247 = 0, $249 = 0, $25 = 0, $251 = 0, $255 = 0, $259 = 0, $26 = 0, $260 = 0, $267 = 0, $277 = 0, $279 = 0, $280 = 0, $281 = 0, $290 = 0, $293 = 0, $295 = 0, $300 = 0, $307 = 0, $315 = 0, $325 = 0, $335 = 0, $336 = 0, $337 = 0, $338 = 0, $34 = 0, $348 = 0, $351 = 0, $353 = 0, $357 = 0, $379 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $50 = 0, $60 = 0, $62 = 0, $68 = 0, $76 = 0, $77 = 0, $80 = 0, $86 = 0, $88 = 0, $94 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 $11 = sp + 8 | 0;
 $12 = sp + 4 | 0;
 $13 = sp;
 $14 = $1 + -4 | 0;
 $15 = $10 + 2 | 0;
 $16 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($15 << 1) | 0) + 15 & -16) | 0;
 $$05 = 0;
 while (1) {
  if (($$05 | 0) >= ($15 | 0)) break;
  $18 = $$05 + -2 | 0;
  $21 = HEAP16[$1 + ($18 << 1) >> 1] | 0;
  $24 = HEAP16[$2 + ($18 << 1) >> 1] | 0;
  $25 = $21 + $24 | 0;
  $26 = $21 - $24 | 0;
  HEAP16[$14 + ($$05 << 1) >> 1] = ($25 >>> 1) + ($25 & 1);
  $34 = ($26 >> 1) + ($26 & 1) | 0;
  HEAP16[$16 + ($$05 << 1) >> 1] = ($34 | 0) > 32767 ? 32767 : (($34 | 0) > -32768 ? $34 : -32768) & 65535;
  $$05 = $$05 + 1 | 0;
 }
 $41 = $0 + 4 | 0;
 $42 = HEAPU16[$41 >> 1] | HEAPU16[$41 + 2 >> 1] << 16;
 HEAP16[$14 >> 1] = $42;
 HEAP16[$14 + 2 >> 1] = $42 >>> 16;
 $43 = $0 + 8 | 0;
 $44 = HEAPU16[$43 >> 1] | HEAPU16[$43 + 2 >> 1] << 16;
 HEAP32[$16 >> 2] = $44;
 $45 = $14 + ($10 << 1) | 0;
 $46 = HEAPU16[$45 >> 1] | HEAPU16[$45 + 2 >> 1] << 16;
 HEAP16[$41 >> 1] = $46;
 HEAP16[$41 + 2 >> 1] = $46 >>> 16;
 $47 = $16 + ($10 << 1) | 0;
 $48 = HEAPU16[$47 >> 1] | HEAPU16[$47 + 2 >> 1] << 16;
 HEAP16[$43 >> 1] = $48;
 HEAP16[$43 + 2 >> 1] = $48 >>> 16;
 $49 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($10 << 1) | 0) + 15 & -16) | 0;
 $50 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($10 << 1) | 0) + 15 & -16) | 0;
 $$16 = 0;
 while (1) {
  if (($$16 | 0) >= ($10 | 0)) break;
  $60 = $$16 + 1 | 0;
  $62 = HEAP16[$14 + ($60 << 1) >> 1] | 0;
  $68 = ((HEAP16[$14 + ($$16 << 1) >> 1] | 0) + (HEAP16[$14 + ($$16 + 2 << 1) >> 1] | 0) + ($62 << 16 >> 16 << 1) >> 1) + 1 >> 1;
  HEAP16[$49 + ($$16 << 1) >> 1] = $68;
  HEAP16[$50 + ($$16 << 1) >> 1] = ($62 & 65535) - $68;
  $$16 = $60;
 }
 $76 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($10 << 1) | 0) + 15 & -16) | 0;
 $77 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($10 << 1) | 0) + 15 & -16) | 0;
 $$27 = 0;
 $80 = $44 & 65535;
 while (1) {
  if (($$27 | 0) >= ($10 | 0)) break;
  $86 = $$27 + 1 | 0;
  $88 = HEAP16[$16 + ($86 << 1) >> 1] | 0;
  $94 = (($80 << 16 >> 16) + (HEAP16[$16 + ($$27 + 2 << 1) >> 1] | 0) + ($88 << 16 >> 16 << 1) >> 1) + 1 >> 1;
  HEAP16[$76 + ($$27 << 1) >> 1] = $94;
  HEAP16[$77 + ($$27 << 1) >> 1] = ($88 & 65535) - $94;
  $$27 = $86;
  $80 = $88;
 }
 $102 = ($9 * 10 | 0) == ($10 | 0);
 $103 = $102 ? 328 : 655;
 $104 = $7 << 16 >> 16;
 $105 = Math_imul($104, $104) | 0;
 $111 = (Math_imul($105 >>> 16, $103) | 0) + ((Math_imul($105 & 65535, $103) | 0) >>> 16) | 0;
 $113 = _silk_stereo_find_predictor($12, $49, $76, $0 + 12 | 0, $10, $111) | 0;
 HEAP32[$11 >> 2] = $113;
 $115 = _silk_stereo_find_predictor($13, $50, $77, $0 + 20 | 0, $10, $111) | 0;
 $116 = $11 + 4 | 0;
 HEAP32[$116 >> 2] = $115;
 $121 = (HEAP32[$13 >> 2] | 0) + ((HEAP32[$12 >> 2] << 16 >> 16) * 3 | 0) | 0;
 $$50 = ($121 | 0) < 65536 ? $121 : 65536;
 $124 = $6 - ($102 ? 1200 : 600) | 0;
 $$04 = ($124 | 0) > 1 ? $124 : 1;
 $128 = (($9 << 16 >> 16) * 900 | 0) + 2e3 | 0;
 $129 = $$50 * 3 | 0;
 $131 = _silk_DIV32_varQ_237($$04, $129 + 851968 | 0, 19) | 0;
 HEAP32[$5 >> 2] = $131;
 if (($131 | 0) < ($128 | 0)) {
  HEAP32[$5 >> 2] = $128;
  $133 = $$04 - $128 | 0;
  HEAP32[$5 + 4 >> 2] = $133;
  $139 = $128 << 16 >> 16;
  $145 = _silk_DIV32_varQ_237(($133 << 1) - $128 | 0, (Math_imul($129 + 65536 >> 16, $139) | 0) + ((Math_imul($129 & 65535, $139) | 0) >> 16) | 0, 16) | 0;
  if (($145 | 0) > 16384) $$01 = 16384; else $$01 = ($145 | 0) > 0 ? $145 : 0;
 } else {
  HEAP32[$5 + 4 >> 2] = $$04 - $131;
  $$01 = 16384;
 }
 $150 = $0 + 28 | 0;
 $151 = HEAP16[$150 >> 1] | 0;
 $152 = $151 & 65535;
 $156 = $111 << 16 >> 16;
 HEAP16[$150 >> 1] = $152 + ((Math_imul($$01 - ($151 << 16 >> 16) >> 16, $156) | 0) + ((Math_imul($$01 - $152 & 65535, $156) | 0) >>> 16));
 HEAP8[$4 >> 0] = 0;
 L18 : do if (!$8) {
  $169 = $$04 << 3;
  do if (!(HEAP16[$0 + 30 >> 1] | 0)) {
   if (($169 | 0) < ($128 * 13 | 0)) $182 = HEAP16[$150 >> 1] | 0; else {
    $173 = HEAP16[$150 >> 1] | 0;
    $174 = $173 << 16 >> 16;
    if (((Math_imul($$50 >> 16, $174) | 0) + ((Math_imul($$50 & 65535, $174) | 0) >> 16) | 0) < 819) $182 = $173; else {
     $210 = HEAP16[$150 >> 1] | 0;
     break;
    }
   }
   $181 = $182 << 16 >> 16;
   HEAP32[$11 >> 2] = (Math_imul($181, $113 << 16 >> 16) | 0) >> 14;
   HEAP32[$116 >> 2] = (Math_imul($181, $115 << 16 >> 16) | 0) >> 14;
   _silk_stereo_quant_pred($11, $3);
   HEAP32[$11 >> 2] = 0;
   HEAP32[$116 >> 2] = 0;
   HEAP32[$5 >> 2] = $$04;
   HEAP32[$5 + 4 >> 2] = 0;
   HEAP8[$4 >> 0] = 1;
   $$441 = 0;
   label = 30;
   break L18;
  } else {
   if (($169 | 0) < ($128 * 11 | 0)) $202 = HEAP16[$150 >> 1] | 0; else {
    $193 = HEAP16[$150 >> 1] | 0;
    $194 = $193 << 16 >> 16;
    if (((Math_imul($$50 >> 16, $194) | 0) + ((Math_imul($$50 & 65535, $194) | 0) >> 16) | 0) < 328) $202 = $193; else {
     $210 = $193;
     break;
    }
   }
   $201 = $202 << 16 >> 16;
   HEAP32[$11 >> 2] = (Math_imul($201, $113 << 16 >> 16) | 0) >> 14;
   HEAP32[$116 >> 2] = (Math_imul($201, $115 << 16 >> 16) | 0) >> 14;
   _silk_stereo_quant_pred($11, $3);
   HEAP32[$11 >> 2] = 0;
   HEAP32[$116 >> 2] = 0;
   $$4$ph = 0;
   label = 29;
   break L18;
  } while (0);
  if ($210 << 16 >> 16 > 15565) {
   _silk_stereo_quant_pred($11, $3);
   $$4$ph = 16384;
   label = 29;
   break;
  } else {
   $211 = $210 << 16 >> 16;
   HEAP32[$11 >> 2] = (Math_imul($211, $113 << 16 >> 16) | 0) >> 14;
   HEAP32[$116 >> 2] = (Math_imul($211, $115 << 16 >> 16) | 0) >> 14;
   _silk_stereo_quant_pred($11, $3);
   $$4$ph = HEAP16[$150 >> 1] | 0;
   label = 29;
   break;
  }
 } else {
  HEAP32[$11 >> 2] = 0;
  HEAP32[$116 >> 2] = 0;
  _silk_stereo_quant_pred($11, $3);
  $$4$ph = 0;
  label = 29;
 } while (0);
 if ((label | 0) == 29) if ((HEAP8[$4 >> 0] | 0) == 1) {
  $$441 = $$4$ph;
  label = 30;
 } else {
  HEAP16[$0 + 32 >> 1] = 0;
  $$440$ph = $$4$ph;
  label = 34;
 }
 do if ((label | 0) == 30) {
  $223 = $0 + 32 | 0;
  $226 = (HEAPU16[$223 >> 1] | 0) + ($10 - ($9 << 3)) | 0;
  HEAP16[$223 >> 1] = $226;
  if (($226 << 16 >> 16 | 0) < ($9 * 5 | 0)) {
   HEAP8[$4 >> 0] = 0;
   $$44045 = $$441;
   label = 35;
   break;
  } else {
   HEAP16[$223 >> 1] = 1e4;
   $$440$ph = $$441;
   label = 34;
   break;
  }
 } while (0);
 if ((label | 0) == 34) if (!(HEAP8[$4 >> 0] | 0)) {
  $$44045 = $$440$ph;
  label = 35;
 } else $$44044 = $$440$ph;
 if ((label | 0) == 35) {
  $233 = $5 + 4 | 0;
  if ((HEAP32[$233 >> 2] | 0) < 1) {
   HEAP32[$233 >> 2] = 1;
   HEAP32[$5 >> 2] = _silk_max_int_238($$04 + -1 | 0) | 0;
   $$44044 = $$44045;
  } else $$44044 = $$44045;
 }
 $238 = HEAP16[$0 >> 1] | 0;
 $241 = $0 + 2 | 0;
 $242 = HEAP16[$241 >> 1] | 0;
 $245 = $0 + 30 | 0;
 $246 = HEAP16[$245 >> 1] | 0;
 $247 = $246 << 16 >> 16;
 $249 = $9 << 3;
 $251 = HEAP32[$11 >> 2] | 0;
 $255 = (65536 / ($249 | 0) | 0) << 16 >> 16;
 $259 = ((Math_imul($251 - ($238 & 65535) << 16 >> 16, $255) | 0) >> 15) + 1 >> 1;
 $260 = HEAP32[$116 >> 2] | 0;
 $267 = ((Math_imul($260 - ($242 & 65535) << 16 >> 16, $255) | 0) >> 15) + 1 >> 1;
 $277 = (Math_imul($$44044 - $247 >> 16, $255) | 0) + ((Math_imul($$44044 - ($246 & 65535) & 65535, $255) | 0) >> 16) << 10;
 $$0 = $247 << 10;
 $$02 = 0 - ($242 << 16 >> 16) | 0;
 $$03 = 0 - ($238 << 16 >> 16) | 0;
 $$38 = 0;
 while (1) {
  if (($$38 | 0) >= ($249 | 0)) break;
  $279 = $$03 - $259 | 0;
  $280 = $$02 - $267 | 0;
  $281 = $$0 + $277 | 0;
  $290 = $$38 + 1 | 0;
  $293 = HEAP16[$14 + ($290 << 1) >> 1] | 0;
  $295 = (HEAP16[$14 + ($$38 << 1) >> 1] | 0) + (HEAP16[$14 + ($$38 + 2 << 1) >> 1] | 0) + ($293 << 1) | 0;
  $300 = HEAP16[$16 + ($290 << 1) >> 1] | 0;
  $307 = $279 << 16 >> 16;
  $315 = $280 << 16 >> 16;
  $325 = ((Math_imul($281 >> 16, $300) | 0) + ((Math_imul($281 & 64512, $300) | 0) >> 16) + ((Math_imul($295 >> 7, $307) | 0) + ((Math_imul($295 << 9 & 65024, $307) | 0) >> 16)) + ((Math_imul($293 >> 5, $315) | 0) + ((Math_imul($293 << 11 & 63488, $315) | 0) >> 16)) >> 7) + 1 >> 1;
  HEAP16[$2 + ($$38 + -1 << 1) >> 1] = ($325 | 0) > 32767 ? 32767 : (($325 | 0) > -32768 ? $325 : -32768) & 65535;
  $$0 = $281;
  $$02 = $280;
  $$03 = $279;
  $$38 = $290;
 }
 $335 = $$44044 >> 6;
 $336 = $$44044 << 10 & 64512;
 $337 = 0 - $251 << 16 >> 16;
 $338 = 0 - $260 << 16 >> 16;
 $$49 = $249;
 while (1) {
  if (($$49 | 0) >= ($10 | 0)) break;
  $348 = $$49 + 1 | 0;
  $351 = HEAP16[$14 + ($348 << 1) >> 1] | 0;
  $353 = (HEAP16[$14 + ($$49 << 1) >> 1] | 0) + (HEAP16[$14 + ($$49 + 2 << 1) >> 1] | 0) + ($351 << 1) | 0;
  $357 = HEAP16[$16 + ($348 << 1) >> 1] | 0;
  $379 = ((Math_imul($335, $357) | 0) + ((Math_imul($336, $357) | 0) >> 16) + ((Math_imul($353 >> 7, $337) | 0) + ((Math_imul($353 << 9 & 65024, $337) | 0) >> 16)) + ((Math_imul($351 >> 5, $338) | 0) + ((Math_imul($351 << 11 & 63488, $338) | 0) >> 16)) >> 7) + 1 >> 1;
  HEAP16[$2 + ($$49 + -1 << 1) >> 1] = ($379 | 0) > 32767 ? 32767 : (($379 | 0) > -32768 ? $379 : -32768) & 65535;
  $$49 = $348;
 }
 HEAP16[$0 >> 1] = $251;
 HEAP16[$241 >> 1] = $260;
 HEAP16[$245 >> 1] = $$44044;
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
  if (($$019 | 0) > 0) $$120 = HEAPU8[29898 + ($72 - $1) >> 0] | 0; else $$120 = $$019;
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

function _silk_NSQ_del_dec_c($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) {
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
 var $$ = 0, $$0 = 0, $$01 = 0, $$011 = 0, $$015 = 0, $$02 = 0, $$020 = 0, $$022 = 0, $$026 = 0, $$03 = 0, $$04 = 0, $$07 = 0, $$112 = 0, $$121 = 0, $$123 = 0, $$127 = 0, $$2 = 0, $$217 = 0, $$224 = 0, $$228 = 0, $$26 = 0, $$29 = 0, $$314 = 0, $$325 = 0, $$329 = 0, $$43 = 0, $$45 = 0, $102 = 0, $104 = 0, $106 = 0, $108 = 0, $112 = 0, $113 = 0, $116 = 0, $121 = 0, $124 = 0, $125 = 0, $129 = 0, $137 = 0, $146 = 0, $149 = 0, $15 = 0, $151 = 0, $152 = 0, $16 = 0, $165 = 0, $17 = 0, $178 = 0, $18 = 0, $180 = 0, $182 = 0, $19 = 0, $192 = 0, $20 = 0, $206 = 0, $21 = 0, $213 = 0, $216 = 0, $217 = 0, $227 = 0, $229 = 0, $23 = 0, $232 = 0, $235 = 0, $24 = 0, $244 = 0, $247 = 0, $25 = 0, $258 = 0, $26 = 0, $27 = 0, $28 = 0, $34 = 0, $49 = 0, $50 = 0, $58 = 0, $59 = 0, $60 = 0, $61 = 0, $64 = 0, $76 = 0, $77 = 0, $79 = 0, $80 = 0, $81 = 0, $82 = 0, $84 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, dest = 0, sp = 0, src = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 176 | 0;
 $15 = sp + 160 | 0;
 $16 = sp;
 $17 = $1 + 4328 | 0;
 $18 = HEAP32[$17 >> 2] | 0;
 $19 = $0 + 4624 | 0;
 $20 = HEAP32[$19 >> 2] | 0;
 $21 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($20 * 1300 | 0) | 0) + 15 & -16) | 0;
 _memset($21 | 0, 0, $20 * 1300 | 0) | 0;
 $23 = $2 + 34 | 0;
 $24 = $1 + 4320 | 0;
 $25 = $1 + 4324 | 0;
 $26 = $0 + 4588 | 0;
 $27 = $1 + 3840 | 0;
 $28 = $1 + 4224 | 0;
 $$022 = 0;
 while (1) {
  if (($$022 | 0) >= ($20 | 0)) break;
  $34 = $$022 + (HEAPU8[$23 >> 0] | 0) & 3;
  HEAP32[$21 + ($$022 * 1300 | 0) + 1288 >> 2] = $34;
  HEAP32[$21 + ($$022 * 1300 | 0) + 1292 >> 2] = $34;
  HEAP32[$21 + ($$022 * 1300 | 0) + 1296 >> 2] = 0;
  HEAP32[$21 + ($$022 * 1300 | 0) + 1280 >> 2] = HEAP32[$24 >> 2];
  HEAP32[$21 + ($$022 * 1300 | 0) + 1284 >> 2] = HEAP32[$25 >> 2];
  HEAP32[$21 + ($$022 * 1300 | 0) + 1024 >> 2] = HEAP32[$1 + 1280 + ((HEAP32[$26 >> 2] | 0) + -1 << 2) >> 2];
  dest = $21 + ($$022 * 1300 | 0) | 0;
  src = $27;
  stop = dest + 64 | 0;
  do {
   HEAP32[dest >> 2] = HEAP32[src >> 2];
   dest = dest + 4 | 0;
   src = src + 4 | 0;
  } while ((dest | 0) < (stop | 0));
  dest = $21 + ($$022 * 1300 | 0) + 1184 | 0;
  src = $28;
  stop = dest + 96 | 0;
  do {
   HEAP32[dest >> 2] = HEAP32[src >> 2];
   dest = dest + 4 | 0;
   src = src + 4 | 0;
  } while ((dest | 0) < (stop | 0));
  $$022 = $$022 + 1 | 0;
 }
 $49 = $2 + 29 | 0;
 $50 = HEAP8[$49 >> 0] | 0;
 $58 = HEAP16[27932 + ($50 << 24 >> 24 >> 1 << 2) + (HEAP8[$2 + 30 >> 0] << 1) >> 1] | 0;
 HEAP32[$15 >> 2] = 0;
 $59 = $0 + 4584 | 0;
 $60 = HEAP32[$59 >> 2] | 0;
 $61 = _silk_min_int_117(40, $60) | 0;
 L5 : do if ($50 << 24 >> 24 == 2) {
  $64 = HEAP32[$0 + 4576 >> 2] | 0;
  $$04 = $61;
  $$123 = 0;
  while (1) {
   if (($$123 | 0) >= ($64 | 0)) {
    $$26 = $$04;
    break L5;
   }
   $$04 = _silk_min_int_117($$04, (HEAP32[$12 + ($$123 << 2) >> 2] | 0) + -3 | 0) | 0;
   $$123 = $$123 + 1 | 0;
  }
 } else if (($18 | 0) > 0) $$26 = _silk_min_int_117($61, $18 + -3 | 0) | 0; else $$26 = $61; while (0);
 $$ = (HEAP8[$2 + 31 >> 0] | 0) != 4 & 1;
 $76 = HEAP32[$26 >> 2] | 0;
 $77 = $0 + 4580 | 0;
 $79 = $76 + (HEAP32[$77 >> 2] | 0) | 0;
 $80 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($79 << 2) | 0) + 15 & -16) | 0;
 $81 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($79 << 1) | 0) + 15 & -16) | 0;
 $82 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($60 << 2) | 0) + 15 & -16) | 0;
 $84 = $1 + 4336 | 0;
 HEAP32[$84 >> 2] = $76;
 $86 = $1 + 4332 | 0;
 HEAP32[$86 >> 2] = HEAP32[$26 >> 2];
 $87 = $0 + 4576 | 0;
 $88 = $$ ^ 1;
 $89 = $1 + 4348 | 0;
 $91 = $$ << 1 ^ 3;
 $92 = $21 + 1296 | 0;
 $93 = $11 + 4 | 0;
 $94 = $0 + 4636 | 0;
 $95 = $0 + 4632 | 0;
 $96 = $0 + 4668 | 0;
 $$01 = $3;
 $$011 = 0;
 $$02 = $4;
 $$020 = $18;
 $$03 = $1 + ($76 << 1) | 0;
 $$224 = 0;
 while (1) {
  if (($$224 | 0) >= (HEAP32[$87 >> 2] | 0)) break;
  $102 = $5 + (($$224 >> 1 | $88) << 4 << 1) | 0;
  $104 = $6 + ($$224 * 5 << 1) | 0;
  $106 = $7 + ($$224 * 24 << 1) | 0;
  $108 = HEAP32[$8 + ($$224 << 2) >> 2] | 0;
  $112 = $108 >> 2 | $108 >>> 1 << 16;
  HEAP32[$89 >> 2] = 0;
  $113 = HEAP8[$49 >> 0] | 0;
  if ($113 << 24 >> 24 == 2) {
   $116 = HEAP32[$12 + ($$224 << 2) >> 2] | 0;
   if (!($$224 & $91)) {
    L19 : do if (($$224 | 0) == 2) {
     $121 = HEAP32[$19 >> 2] | 0;
     $$0 = HEAP32[$92 >> 2] | 0;
     $$015 = 0;
     $$026 = 1;
     while (1) {
      if (($$026 | 0) >= ($121 | 0)) {
       $$127 = 0;
       break;
      }
      $124 = HEAP32[$21 + ($$026 * 1300 | 0) + 1296 >> 2] | 0;
      $125 = ($124 | 0) < ($$0 | 0);
      $$0 = $125 ? $124 : $$0;
      $$015 = $125 ? $$026 : $$015;
      $$026 = $$026 + 1 | 0;
     }
     while (1) {
      if (($$127 | 0) >= ($121 | 0)) break;
      if (($$127 | 0) != ($$015 | 0)) {
       $129 = $21 + ($$127 * 1300 | 0) + 1296 | 0;
       HEAP32[$129 >> 2] = (HEAP32[$129 >> 2] | 0) + 134217727;
      }
      $$127 = $$127 + 1 | 0;
     }
     $$07 = (HEAP32[$15 >> 2] | 0) + $$26 | 0;
     $$228 = 0;
     while (1) {
      if (($$228 | 0) >= ($$26 | 0)) {
       $$112 = 0;
       break L19;
      }
      $137 = ($$07 + -1 | 0) % 40 | 0;
      $$43 = ($137 | 0) < 0 ? $137 + 40 | 0 : $137;
      $146 = $$228 - $$26 | 0;
      HEAP8[$$02 + $146 >> 0] = (((HEAP32[$21 + ($$015 * 1300 | 0) + 544 + ($$43 << 2) >> 2] | 0) >>> 9) + 1 | 0) >>> 1;
      $149 = HEAP32[$21 + ($$015 * 1300 | 0) + 704 + ($$43 << 2) >> 2] | 0;
      $151 = HEAP32[$93 >> 2] | 0;
      $152 = $151 << 16 >> 16;
      $165 = ((Math_imul($149 >> 16, $152) | 0) + ((Math_imul($149 & 65535, $152) | 0) >> 16) + (Math_imul($149, ($151 >> 15) + 1 >> 1) | 0) >> 13) + 1 >> 1;
      HEAP16[$$03 + ($146 << 1) >> 1] = ($165 | 0) > 32767 ? 32767 : (($165 | 0) > -32768 ? $165 : -32768) & 65535;
      HEAP32[$1 + 1280 + ((HEAP32[$84 >> 2] | 0) - $$26 + $$228 << 2) >> 2] = HEAP32[$21 + ($$015 * 1300 | 0) + 1024 + ($$43 << 2) >> 2];
      $$07 = $$43;
      $$228 = $$228 + 1 | 0;
     }
    } else $$112 = $$011; while (0);
    $178 = HEAP32[$26 >> 2] | 0;
    $180 = HEAP32[$94 >> 2] | 0;
    $182 = $178 - $116 - $180 + -2 | 0;
    _silk_LPC_analysis_filter($81 + ($182 << 1) | 0, $1 + ($182 + (Math_imul($$224, HEAP32[$59 >> 2] | 0) | 0) << 1) | 0, $102, $178 - $182 | 0, $180);
    HEAP32[$86 >> 2] = HEAP32[$26 >> 2];
    HEAP32[$89 >> 2] = 1;
    $$121 = $116;
    $$314 = $$112;
    $192 = HEAP8[$49 >> 0] | 0;
   } else {
    $$121 = $116;
    $$314 = $$011;
    $192 = 2;
   }
  } else {
   $$121 = $$020;
   $$314 = $$011;
   $192 = $113;
  }
  _silk_nsq_del_dec_scale_states($0, $1, $21, $$01, $82, $81, $80, $$224, HEAP32[$19 >> 2] | 0, $14, $11, $12, $192 << 24 >> 24, $$26);
  _silk_noise_shape_quantizer_del_dec($1, $21, HEAP8[$49 >> 0] | 0, $82, $$02, $$03, $80, $16, $102, $104, $106, $$121, $112, HEAP32[$9 + ($$224 << 2) >> 2] | 0, HEAP32[$10 + ($$224 << 2) >> 2] | 0, HEAP32[$11 + ($$224 << 2) >> 2] | 0, $13, $58, HEAP32[$59 >> 2] | 0, $$314, HEAP32[$95 >> 2] | 0, HEAP32[$94 >> 2] | 0, HEAP32[$96 >> 2] | 0, HEAP32[$19 >> 2] | 0, $15, $$26);
  $206 = HEAP32[$59 >> 2] | 0;
  $$01 = $$01 + ($206 << 1) | 0;
  $$011 = $$314 + 1 | 0;
  $$02 = $$02 + $206 | 0;
  $$020 = $$121;
  $$03 = $$03 + ($206 << 1) | 0;
  $$224 = $$224 + 1 | 0;
 }
 $213 = HEAP32[$19 >> 2] | 0;
 $$2 = HEAP32[$92 >> 2] | 0;
 $$217 = 0;
 $$325 = 1;
 while (1) {
  if (($$325 | 0) >= ($213 | 0)) break;
  $216 = HEAP32[$21 + ($$325 * 1300 | 0) + 1296 >> 2] | 0;
  $217 = ($216 | 0) < ($$2 | 0);
  $$2 = $217 ? $216 : $$2;
  $$217 = $217 ? $$325 : $$217;
  $$325 = $$325 + 1 | 0;
 }
 HEAP8[$23 >> 0] = HEAP32[$21 + ($$217 * 1300 | 0) + 1292 >> 2];
 $227 = HEAP32[$11 + ((HEAP32[$87 >> 2] | 0) + -1 << 2) >> 2] | 0;
 $229 = $227 >>> 6 << 16 >> 16;
 $232 = ($227 >> 21) + 1 >> 1;
 $$29 = (HEAP32[$15 >> 2] | 0) + $$26 | 0;
 $$329 = 0;
 while (1) {
  if (($$329 | 0) >= ($$26 | 0)) break;
  $235 = ($$29 + -1 | 0) % 40 | 0;
  $$45 = ($235 | 0) < 0 ? $235 + 40 | 0 : $235;
  $244 = $$329 - $$26 | 0;
  HEAP8[$$02 + $244 >> 0] = (((HEAP32[$21 + ($$217 * 1300 | 0) + 544 + ($$45 << 2) >> 2] | 0) >>> 9) + 1 | 0) >>> 1;
  $247 = HEAP32[$21 + ($$217 * 1300 | 0) + 704 + ($$45 << 2) >> 2] | 0;
  $258 = ((Math_imul($247 >> 16, $229) | 0) + ((Math_imul($247 & 65535, $229) | 0) >> 16) + (Math_imul($247, $232) | 0) >> 7) + 1 >> 1;
  HEAP16[$$03 + ($244 << 1) >> 1] = ($258 | 0) > 32767 ? 32767 : (($258 | 0) > -32768 ? $258 : -32768) & 65535;
  HEAP32[$1 + 1280 + ((HEAP32[$84 >> 2] | 0) - $$26 + $$329 << 2) >> 2] = HEAP32[$21 + ($$217 * 1300 | 0) + 1024 + ($$45 << 2) >> 2];
  $$29 = $$45;
  $$329 = $$329 + 1 | 0;
 }
 dest = $27;
 src = $21 + ($$217 * 1300 | 0) + (HEAP32[$59 >> 2] << 2) | 0;
 stop = dest + 64 | 0;
 do {
  HEAP32[dest >> 2] = HEAP32[src >> 2];
  dest = dest + 4 | 0;
  src = src + 4 | 0;
 } while ((dest | 0) < (stop | 0));
 dest = $28;
 src = $21 + ($$217 * 1300 | 0) + 1184 | 0;
 stop = dest + 96 | 0;
 do {
  HEAP32[dest >> 2] = HEAP32[src >> 2];
  dest = dest + 4 | 0;
  src = src + 4 | 0;
 } while ((dest | 0) < (stop | 0));
 HEAP32[$24 >> 2] = HEAP32[$21 + ($$217 * 1300 | 0) + 1280 >> 2];
 HEAP32[$25 >> 2] = HEAP32[$21 + ($$217 * 1300 | 0) + 1284 >> 2];
 HEAP32[$17 >> 2] = HEAP32[$12 + ((HEAP32[$87 >> 2] | 0) + -1 << 2) >> 2];
 _memmove($1 | 0, $1 + (HEAP32[$77 >> 2] << 1) | 0, HEAP32[$26 >> 2] << 1 | 0) | 0;
 _memmove($1 + 1280 | 0, $1 + 1280 + (HEAP32[$77 >> 2] << 2) | 0, HEAP32[$26 >> 2] << 2 | 0) | 0;
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
 $16 = HEAP32[23800 + ($14 * 20 | 0) + 4 >> 2] | 0;
 $17 = $0 + 48 | 0;
 HEAP32[$17 >> 2] = $16;
 $19 = HEAP32[23800 + ($14 * 20 | 0) >> 2] | 0;
 HEAP32[$1 >> 2] = $19;
 if ($6 >>> 0 > $8 >>> 0) {
  HEAPF32[$0 + 44 >> 2] = +HEAPF32[23800 + ($14 * 20 | 0) + 8 >> 2] * +($8 >>> 0) / +($6 >>> 0);
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
  HEAP32[$0 + 44 >> 2] = HEAP32[23800 + ($14 * 20 | 0) + 12 >> 2];
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
     $89 = +_sinc(+HEAPF32[$70 >> 2], +($$08 - (($75 | 0) / 2 | 0) + 1 | 0) - $74 / +((HEAP32[$7 >> 2] | 0) >>> 0), $75, HEAP32[23800 + ((HEAP32[$13 >> 2] | 0) * 20 | 0) + 16 >> 2] | 0);
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
    $114 = +_sinc(+HEAPF32[$70 >> 2], +($$09 | 0) / +($99 >>> 0) - +($100 >>> 1 >>> 0), $100, HEAP32[23800 + ((HEAP32[$13 >> 2] | 0) * 20 | 0) + 16 >> 2] | 0);
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

function _dynalloc_analysis($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) {
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
 var $$010 = 0, $$012 = 0, $$03 = 0, $$05 = 0.0, $$07 = 0, $$1 = 0, $$10 = 0, $$11 = 0, $$111 = 0, $$113 = 0, $$12 = 0, $$1215 = 0, $$14 = 0, $$16 = 0.0, $$2 = 0, $$214 = 0, $$29 = 0, $$3 = 0, $$3$in = 0, $$38 = 0.0, $$4 = 0, $$5 = 0, $$6 = 0, $$7 = 0, $$8 = 0, $$9 = 0, $$sink43 = 0.0, $100 = 0.0, $104 = 0.0, $105 = 0.0, $108 = 0, $109 = 0.0, $116 = 0.0, $117 = 0, $118 = 0.0, $121 = 0, $122 = 0.0, $126 = 0, $127 = 0.0, $129 = 0.0, $136 = 0, $137 = 0, $138 = 0.0, $139 = 0, $141 = 0.0, $143 = 0.0, $144 = 0.0, $146 = 0.0, $149 = 0.0, $155 = 0.0, $164 = 0, $166 = 0.0, $171 = 0, $172 = 0.0, $174 = 0.0, $177 = 0, $180 = 0, $187 = 0, $19 = 0, $194 = 0, $195 = 0, $198 = 0, $20 = 0, $207 = 0, $208 = 0.0, $21 = 0, $210 = 0.0, $211 = 0, $220 = 0, $222 = 0, $227 = 0, $234 = 0, $239 = 0, $24 = 0.0, $35 = 0, $42 = 0, $49 = 0.0, $58 = 0, $59 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $66 = 0, $68 = 0.0, $75 = 0.0, $78 = 0.0, $82 = 0, $83 = 0.0, $86 = 0.0, $89 = 0.0, $90 = 0, $94 = 0, $95 = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 $19 = Math_imul($5, $2) | 0;
 $20 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($19 << 2) | 0) + 15 & -16) | 0;
 $21 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($19 << 2) | 0) + 15 & -16) | 0;
 _memset($6 | 0, 0, $2 << 2 | 0) | 0;
 $24 = +(9 - $7 | 0);
 $$012 = 0;
 while (1) {
  if (($$012 | 0) >= ($4 | 0)) {
   $$010 = 0;
   $$05 = -31.899999618530273;
   break;
  }
  $35 = $$012 + 5 | 0;
  HEAPF32[$21 + ($$012 << 2) >> 2] = +(HEAP16[$8 + ($$012 << 1) >> 1] | 0) * .0625 + .5 + $24 - +HEAPF32[18836 + ($$012 << 2) >> 2] + +(Math_imul($35, $35) | 0) * .006200000178068876;
  $$012 = $$012 + 1 | 0;
 }
 while (1) {
  $42 = Math_imul($$010, $2) | 0;
  $$113 = 0;
  $$16 = $$05;
  while (1) {
   if (($$113 | 0) >= ($4 | 0)) break;
   $49 = +HEAPF32[$0 + ($42 + $$113 << 2) >> 2] - +HEAPF32[$21 + ($$113 << 2) >> 2];
   $$113 = $$113 + 1 | 0;
   $$16 = $$16 > $49 ? $$16 : $49;
  }
  $$010 = $$010 + 1 | 0;
  if (($$010 | 0) >= ($5 | 0)) break; else $$05 = $$16;
 }
 if (!(($14 | 0) > 50 & ($13 | 0) > 0 & ($16 | 0) == 0)) {
  $$29 = 0;
  HEAP32[$15 >> 2] = $$29;
  STACKTOP = sp;
  return +$$16;
 }
 $58 = $4 + -2 | 0;
 $59 = $4 + -1 | 0;
 $$03 = 0;
 $$111 = 0;
 while (1) {
  $60 = Math_imul($$111, $2) | 0;
  $61 = $20 + ($60 << 2) | 0;
  $62 = $1 + ($60 << 2) | 0;
  $63 = HEAP32[$62 >> 2] | 0;
  HEAP32[$61 >> 2] = $63;
  $$14 = $$03;
  $$214 = 1;
  $75 = (HEAP32[tempDoublePtr >> 2] = $63, +HEAPF32[tempDoublePtr >> 2]);
  while (1) {
   if (($$214 | 0) >= ($4 | 0)) {
    $$3$in = $$14;
    break;
   }
   $66 = $60 + $$214 | 0;
   $68 = +HEAPF32[$1 + ($66 << 2) >> 2];
   $$2 = $68 > +HEAPF32[$1 + ($66 + -1 << 2) >> 2] + .5 ? $$214 : $$14;
   $78 = $75 + 1.5 < $68 ? $75 + 1.5 : $68;
   HEAPF32[$61 + ($$214 << 2) >> 2] = $78;
   $$14 = $$2;
   $$214 = $$214 + 1 | 0;
   $75 = $78;
  }
  while (1) {
   $$3 = $$3$in + -1 | 0;
   if (($$3$in | 0) <= 0) {
    $$4 = 2;
    break;
   }
   $82 = $61 + ($$3 << 2) | 0;
   $83 = +HEAPF32[$82 >> 2];
   $86 = +HEAPF32[$61 + ($$3$in << 2) >> 2] + 2.0;
   $89 = +HEAPF32[$1 + ($60 + $$3 << 2) >> 2];
   $90 = $86 < $89;
   HEAPF32[$82 >> 2] = $83 < ($90 ? $86 : $89) ? $83 : $90 ? $86 : $89;
   $$3$in = $$3;
  }
  while (1) {
   if (($$4 | 0) >= ($58 | 0)) break;
   $94 = $61 + ($$4 << 2) | 0;
   $95 = +HEAPF32[$94 >> 2];
   $100 = +_median_of_5($1 + ($60 + $$4 + -2 << 2) | 0) + -1.0;
   HEAPF32[$94 >> 2] = $95 > $100 ? $95 : $100;
   $$4 = $$4 + 1 | 0;
  }
  $104 = +_median_of_3($62) + -1.0;
  $105 = +HEAPF32[$61 >> 2];
  HEAPF32[$61 >> 2] = $105 > $104 ? $105 : $104;
  $108 = $61 + 4 | 0;
  $109 = +HEAPF32[$108 >> 2];
  HEAPF32[$108 >> 2] = $109 > $104 ? $109 : $104;
  $116 = +_median_of_3($1 + ($60 + $4 + -3 << 2) | 0) + -1.0;
  $117 = $61 + ($58 << 2) | 0;
  $118 = +HEAPF32[$117 >> 2];
  HEAPF32[$117 >> 2] = $118 > $116 ? $118 : $116;
  $121 = $61 + ($59 << 2) | 0;
  $122 = +HEAPF32[$121 >> 2];
  HEAPF32[$121 >> 2] = $122 > $116 ? $122 : $116;
  $$5 = 0;
  while (1) {
   if (($$5 | 0) >= ($4 | 0)) break;
   $126 = $61 + ($$5 << 2) | 0;
   $127 = +HEAPF32[$126 >> 2];
   $129 = +HEAPF32[$21 + ($$5 << 2) >> 2];
   HEAPF32[$126 >> 2] = $127 > $129 ? $127 : $129;
   $$5 = $$5 + 1 | 0;
  }
  $$111 = $$111 + 1 | 0;
  if (($$111 | 0) >= ($5 | 0)) break; else $$03 = $$14;
 }
 L31 : do if (($5 | 0) == 2) {
  $$6 = $3;
  while (1) {
   if (($$6 | 0) >= ($4 | 0)) {
    $$8 = $3;
    break L31;
   }
   $136 = $$6 + $2 | 0;
   $137 = $20 + ($136 << 2) | 0;
   $138 = +HEAPF32[$137 >> 2];
   $139 = $20 + ($$6 << 2) | 0;
   $141 = +HEAPF32[$139 >> 2] + -4.0;
   $$38 = $138 > $141 ? $138 : $141;
   HEAPF32[$137 >> 2] = $$38;
   $143 = +HEAPF32[$139 >> 2];
   $144 = $$38 + -4.0;
   $146 = $143 > $144 ? $143 : $144;
   HEAPF32[$139 >> 2] = $146;
   $149 = +HEAPF32[$0 + ($$6 << 2) >> 2] - $146;
   $155 = +HEAPF32[$0 + ($136 << 2) >> 2] - +HEAPF32[$137 >> 2];
   HEAPF32[$139 >> 2] = (($149 < 0.0 ? 0.0 : $149) + ($155 < 0.0 ? 0.0 : $155)) * .5;
   $$6 = $$6 + 1 | 0;
  }
 } else {
  $$7 = $3;
  while (1) {
   if (($$7 | 0) >= ($4 | 0)) {
    $$8 = $3;
    break L31;
   }
   $164 = $20 + ($$7 << 2) | 0;
   $166 = +HEAPF32[$0 + ($$7 << 2) >> 2] - +HEAPF32[$164 >> 2];
   HEAPF32[$164 >> 2] = $166 < 0.0 ? 0.0 : $166;
   $$7 = $$7 + 1 | 0;
  }
 } while (0);
 while (1) {
  if (($$8 | 0) >= ($4 | 0)) break;
  $171 = $20 + ($$8 << 2) | 0;
  $172 = +HEAPF32[$171 >> 2];
  $174 = +HEAPF32[$17 + ($$8 << 2) >> 2];
  HEAPF32[$171 >> 2] = $172 > $174 ? $172 : $174;
  $$8 = $$8 + 1 | 0;
 }
 $177 = ($10 | 0) == 0;
 L42 : do if (($177 | ($11 | 0) != 0) & ($9 | 0) == 0) {
  $$9 = $3;
  while (1) {
   if (($$9 | 0) >= ($4 | 0)) {
    $$10 = $3;
    break L42;
   }
   $180 = $20 + ($$9 << 2) | 0;
   HEAPF32[$180 >> 2] = +HEAPF32[$180 >> 2] * .5;
   $$9 = $$9 + 1 | 0;
  }
 } else $$10 = $3; while (0);
 while (1) {
  if (($$10 | 0) >= ($4 | 0)) break;
  if (($$10 | 0) < 8) {
   $$sink43 = 2.0;
   label = 34;
  } else if (($$10 | 0) > 11) {
   $$sink43 = .5;
   label = 34;
  }
  if ((label | 0) == 34) {
   label = 0;
   $187 = $20 + ($$10 << 2) | 0;
   HEAPF32[$187 >> 2] = +HEAPF32[$187 >> 2] * $$sink43;
  }
  $$10 = $$10 + 1 | 0;
 }
 L55 : do if (HEAP32[$18 >> 2] | 0) {
  $$11 = $3;
  while (1) {
   if (($$11 | 0) >= ((($4 | 0) < 19 ? $4 : 19) | 0)) break L55;
   $198 = $20 + ($$11 << 2) | 0;
   HEAPF32[$198 >> 2] = +HEAPF32[$198 >> 2] + +(HEAPU8[$18 + 36 + $$11 >> 0] | 0) * .015625;
   $$11 = $$11 + 1 | 0;
  }
 } while (0);
 $194 = ($14 << 1 | 0) / 3 | 0;
 $195 = ($11 | 0) == 0;
 $$07 = 0;
 $$1215 = $3;
 while (1) {
  if (($$1215 | 0) >= ($4 | 0)) {
   $$29 = $$07;
   label = 50;
   break;
  }
  $207 = $20 + ($$1215 << 2) | 0;
  $208 = +HEAPF32[$207 >> 2];
  $210 = $208 < 4.0 ? $208 : 4.0;
  HEAPF32[$207 >> 2] = $210;
  $211 = $$1215 + 1 | 0;
  $220 = (Math_imul((HEAP16[$12 + ($211 << 1) >> 1] | 0) - (HEAP16[$12 + ($$1215 << 1) >> 1] | 0) | 0, $5) | 0) << $13;
  do if (($220 | 0) < 6) {
   $222 = ~~$210;
   $$1 = (Math_imul($222, $220) | 0) << 3;
   $$12 = $222;
  } else if (($220 | 0) > 48) {
   $227 = ~~($210 * 8.0);
   $$1 = ((Math_imul($227, $220) | 0) << 3 | 0) / 8 | 0;
   $$12 = $227;
   break;
  } else {
   $234 = ~~($210 * +($220 | 0) / 6.0);
   $$1 = $234 * 48 | 0;
   $$12 = $234;
   break;
  } while (0);
  if (!(($195 | ($9 | 0) != 0) & ($177 ^ 1))) if (($$07 + $$1 >> 6 | 0) > ($194 | 0)) break;
  HEAP32[$6 + ($$1215 << 2) >> 2] = $$12;
  $$07 = $$07 + $$1 | 0;
  $$1215 = $211;
 }
 if ((label | 0) == 50) {
  HEAP32[$15 >> 2] = $$29;
  STACKTOP = sp;
  return +$$16;
 }
 $239 = $194 << 6;
 HEAP32[$6 + ($$1215 << 2) >> 2] = $239 - $$07;
 $$29 = $239;
 HEAP32[$15 >> 2] = $$29;
 STACKTOP = sp;
 return +$$16;
}

function _silk_NLSF_del_dec_quant($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
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
 var $$0 = 0, $$01 = 0, $$017 = 0, $$019 = 0, $$021 = 0, $$023 = 0, $$025 = 0, $$029$ph = 0, $$03 = 0, $$05 = 0, $$07$in$in = 0, $$124 = 0, $$124$in = 0, $$124$in$ph = 0, $$126 = 0, $$2 = 0, $$227 = 0, $$29 = 0, $$3 = 0, $$316 = 0, $$328 = 0, $$328$sink = 0, $$4 = 0, $$5 = 0, $$6 = 0, $$7 = 0, $$sink = 0, $10 = 0, $105 = 0, $106 = 0, $108 = 0, $109 = 0, $11 = 0, $111 = 0, $118 = 0, $12 = 0, $13 = 0, $136 = 0, $14 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $158 = 0, $159 = 0, $16 = 0, $161 = 0, $162 = 0, $169 = 0, $17 = 0, $18 = 0, $183 = 0, $189 = 0, $19 = 0, $191 = 0, $192 = 0, $20 = 0, $32 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $47 = 0, $50 = 0, $51 = 0, $52 = 0, $56 = 0, $60 = 0, $64 = 0, $67 = 0, $70 = 0, $75 = 0, $77 = 0, $79 = 0, $86 = 0, $94 = 0, dest = 0, sp = 0, src = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 320 | 0;
 $10 = sp + 224 | 0;
 $11 = sp + 256 | 0;
 $12 = sp + 240 | 0;
 $13 = sp + 192 | 0;
 $14 = sp + 176 | 0;
 $15 = sp + 160 | 0;
 $16 = sp + 80 | 0;
 $17 = sp;
 $18 = $6 << 16 >> 16;
 $$023 = -10;
 while (1) {
  if (($$023 | 0) == 10) break;
  $19 = $$023 << 10;
  $20 = $19 + 1024 | 0;
  L4 : do if (($$023 | 0) > 0) {
   $$2 = ($20 << 16 >> 16) + -102 | 0;
   $$29 = ($$023 << 26 >> 16) + -102 | 0;
  } else {
   switch ($$023 | 0) {
   case 0:
    {
     $$2 = ($20 << 16 >> 16) + -102 | 0;
     $$29 = $19;
     break L4;
     break;
    }
   case -1:
    {
     $$05 = $20;
     $$07$in$in = -1024;
     break;
    }
   default:
    {
     $$05 = $20 | 102;
     $$07$in$in = $19;
    }
   }
   $$2 = $$05;
   $$29 = $$07$in$in | 102;
  } while (0);
  $32 = $$023 + 10 | 0;
  HEAP32[$16 + ($32 << 2) >> 2] = (Math_imul($$29 << 16 >> 16, $18) | 0) >> 16;
  HEAP32[$17 + ($32 << 2) >> 2] = (Math_imul($$2 << 16 >> 16, $18) | 0) >> 16;
  $$023 = $$023 + 1 | 0;
 }
 HEAP32[$13 >> 2] = 0;
 HEAP16[$12 >> 1] = 0;
 $39 = $9 << 16 >> 16;
 $40 = $7 << 16 >> 16;
 $41 = $8 << 16 >> 16;
 $$029$ph = 1;
 $$124$in$ph = $39;
 L13 : while (1) {
  $42 = ($$029$ph | 0) < 3;
  $$124$in = $$124$in$ph;
  L15 : while (1) {
   $$124 = $$124$in + -1 | 0;
   if (($$124$in | 0) <= 0) {
    $$021 = 0;
    $$03 = 2147483647;
    $$6 = 0;
    break L13;
   }
   $47 = $5 + (HEAP16[$4 + ($$124 << 1) >> 1] | 0) | 0;
   $50 = HEAP16[$1 + ($$124 << 1) >> 1] | 0;
   $51 = $3 + $$124 | 0;
   $52 = $2 + ($$124 << 1) | 0;
   $$025 = 0;
   while (1) {
    if (($$025 | 0) >= ($$029$ph | 0)) break;
    $56 = $12 + ($$025 << 1) | 0;
    $60 = (Math_imul(HEAPU8[$51 >> 0] | 0, HEAP16[$56 >> 1] | 0) | 0) >> 8;
    $64 = (Math_imul($40, $50 - $60 << 16 >> 16) | 0) >> 16;
    $67 = ($64 | 0) > 9 ? 9 : ($64 | 0) > -10 ? $64 : -10;
    HEAP8[$11 + ($$025 << 4) + $$124 >> 0] = $67;
    $70 = $67 + 10 | 0;
    $75 = (HEAP32[$16 + ($70 << 2) >> 2] | 0) + $60 | 0;
    $77 = (HEAP32[$17 + ($70 << 2) >> 2] | 0) + $60 | 0;
    HEAP16[$56 >> 1] = $75;
    $79 = $$025 + $$029$ph | 0;
    HEAP16[$12 + ($79 << 1) >> 1] = $77;
    do if (($67 | 0) > 2) if (($67 | 0) == 3) {
     $$3 = 280;
     $$316 = HEAPU8[$47 + 7 >> 0] | 0;
     break;
    } else {
     $86 = $67 * 43 | 0;
     $$3 = $86 + 151 | 0;
     $$316 = $86 + 108 | 0;
     break;
    } else {
     if (($67 | 0) >= -3) {
      $$3 = HEAPU8[$47 + ($67 + 5) >> 0] | 0;
      $$316 = HEAPU8[$47 + ($67 + 4) >> 0] | 0;
      break;
     }
     if (($67 | 0) == -4) {
      $$3 = HEAPU8[$47 + 1 >> 0] | 0;
      $$316 = 280;
      break;
     } else {
      $94 = Math_imul($67, -43) | 0;
      $$3 = $94 + 65 | 0;
      $$316 = $94 + 108 | 0;
      break;
     }
    } while (0);
    $105 = $13 + ($$025 << 2) | 0;
    $106 = HEAP32[$105 >> 2] | 0;
    $108 = $50 - $75 << 16 >> 16;
    $109 = Math_imul($108, $108) | 0;
    $111 = HEAP16[$52 >> 1] | 0;
    HEAP32[$105 >> 2] = $106 + (Math_imul($109, $111) | 0) + (Math_imul($41, $$316 << 16 >> 16) | 0);
    $118 = $50 - $77 << 16 >> 16;
    HEAP32[$13 + ($79 << 2) >> 2] = $106 + (Math_imul(Math_imul($118, $118) | 0, $111) | 0) + (Math_imul($41, $$3 << 16 >> 16) | 0);
    $$025 = $$025 + 1 | 0;
   }
   if ($42) {
    $$126 = 0;
    break;
   } else $$328 = 0;
   while (1) {
    if (($$328 | 0) == 4) break;
    $143 = $13 + ($$328 << 2) | 0;
    $144 = HEAP32[$143 >> 2] | 0;
    $145 = $$328 + 4 | 0;
    $146 = $13 + ($145 << 2) | 0;
    $147 = HEAP32[$146 >> 2] | 0;
    $149 = $15 + ($$328 << 2) | 0;
    if (($144 | 0) > ($147 | 0)) {
     HEAP32[$149 >> 2] = $144;
     HEAP32[$143 >> 2] = $147;
     HEAP32[$146 >> 2] = $144;
     $150 = $12 + ($$328 << 1) | 0;
     $151 = HEAP16[$150 >> 1] | 0;
     $152 = $12 + ($145 << 1) | 0;
     HEAP16[$150 >> 1] = HEAP16[$152 >> 1] | 0;
     HEAP16[$152 >> 1] = $151;
     $$328$sink = $145;
     $$sink = $147;
    } else {
     HEAP32[$149 >> 2] = $147;
     $$328$sink = $$328;
     $$sink = $144;
    }
    HEAP32[$14 + ($$328 << 2) >> 2] = $$sink;
    HEAP32[$10 + ($$328 << 2) >> 2] = $$328$sink;
    $$328 = $$328 + 1 | 0;
   }
   while (1) {
    $$0 = 0;
    $$01 = 2147483647;
    $$017 = 0;
    $$019 = 0;
    $$4 = 0;
    while (1) {
     if (($$4 | 0) == 4) break;
     $158 = HEAP32[$15 + ($$4 << 2) >> 2] | 0;
     $159 = ($$01 | 0) > ($158 | 0);
     $161 = HEAP32[$14 + ($$4 << 2) >> 2] | 0;
     $162 = ($$0 | 0) < ($161 | 0);
     $$0 = $162 ? $161 : $$0;
     $$01 = $159 ? $158 : $$01;
     $$017 = $162 ? $$4 : $$017;
     $$019 = $159 ? $$4 : $$019;
     $$4 = $$4 + 1 | 0;
    }
    if (($$01 | 0) >= ($$0 | 0)) {
     $$5 = 0;
     break;
    }
    HEAP32[$10 + ($$017 << 2) >> 2] = HEAP32[$10 + ($$019 << 2) >> 2] ^ 4;
    $169 = $$019 + 4 | 0;
    HEAP32[$13 + ($$017 << 2) >> 2] = HEAP32[$13 + ($169 << 2) >> 2];
    HEAP16[$12 + ($$017 << 1) >> 1] = HEAP16[$12 + ($169 << 1) >> 1] | 0;
    HEAP32[$14 + ($$017 << 2) >> 2] = 0;
    HEAP32[$15 + ($$019 << 2) >> 2] = 2147483647;
    dest = $11 + ($$017 << 4) | 0;
    src = $11 + ($$019 << 4) | 0;
    stop = dest + 16 | 0;
    do {
     HEAP8[dest >> 0] = HEAP8[src >> 0] | 0;
     dest = dest + 1 | 0;
     src = src + 1 | 0;
    } while ((dest | 0) < (stop | 0));
   }
   while (1) {
    if (($$5 | 0) == 4) {
     $$124$in = $$124;
     continue L15;
    }
    $183 = $11 + ($$5 << 4) + $$124 | 0;
    HEAP8[$183 >> 0] = (HEAPU8[$183 >> 0] | 0) + ((HEAP32[$10 + ($$5 << 2) >> 2] | 0) >>> 2);
    $$5 = $$5 + 1 | 0;
   }
  }
  while (1) {
   if (($$126 | 0) >= ($$029$ph | 0)) break;
   HEAP8[$11 + ($$126 + $$029$ph << 4) + $$124 >> 0] = (HEAPU8[$11 + ($$126 << 4) + $$124 >> 0] | 0) + 1;
   $$126 = $$126 + 1 | 0;
  }
  $136 = $$029$ph << 1;
  $$227 = $136;
  while (1) {
   if (($$227 | 0) >= 4) {
    $$029$ph = $136;
    $$124$in$ph = $$124;
    continue L13;
   }
   HEAP8[$11 + ($$227 << 4) + $$124 >> 0] = HEAP8[$11 + ($$227 - $136 << 4) + $$124 >> 0] | 0;
   $$227 = $$227 + 1 | 0;
  }
 }
 while (1) {
  if (($$6 | 0) == 8) break;
  $191 = HEAP32[$13 + ($$6 << 2) >> 2] | 0;
  $192 = ($$03 | 0) > ($191 | 0);
  $$021 = $192 ? $$6 : $$021;
  $$03 = $192 ? $191 : $$03;
  $$6 = $$6 + 1 | 0;
 }
 $189 = $$021 & 3;
 $$7 = 0;
 while (1) {
  if (($$7 | 0) >= ($39 | 0)) break;
  HEAP8[$0 + $$7 >> 0] = HEAP8[$11 + ($189 << 4) + $$7 >> 0] | 0;
  $$7 = $$7 + 1 | 0;
 }
 HEAP8[$0 >> 0] = (HEAPU8[$0 >> 0] | 0) + ($$021 >>> 2);
 STACKTOP = sp;
 return $$03 | 0;
}

function _silk_noise_shape_quantizer($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) {
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
 var $$ = 0, $$0 = 0, $$01 = 0, $$022 = 0, $$023 = 0, $$03 = 0, $$04$in$in = 0, $$1 = 0, $$12 = 0, $$2 = 0, $$210 = 0, $$213 = 0, $$213$$216 = 0, $$216 = 0, $$320 = 0, $$320$in = 0, $100 = 0, $102 = 0, $105 = 0, $111 = 0, $113 = 0, $116 = 0, $124 = 0, $125 = 0, $126 = 0, $128 = 0, $132 = 0, $136 = 0, $147 = 0, $150 = 0, $154 = 0, $160 = 0, $162 = 0, $177 = 0, $179 = 0, $185 = 0, $186 = 0, $19 = 0, $195 = 0, $196 = 0, $203 = 0, $212 = 0, $216 = 0, $219 = 0, $224 = 0, $225 = 0, $230 = 0, $232 = 0, $24 = 0, $243 = 0, $249 = 0, $252 = 0, $254 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $50 = 0, $51 = 0, $54 = 0, $55 = 0, $57 = 0, $59 = 0, $60 = 0, $63 = 0, $68 = 0, $69 = 0, $72 = 0, $78 = 0, $80 = 0, $83 = 0, $89 = 0, $91 = 0, $94 = 0, dest = 0, label = 0, src = 0, stop = 0;
 $19 = $0 + 4336 | 0;
 $24 = $0 + 4332 | 0;
 $31 = $0 + 4340 | 0;
 $32 = ($1 | 0) == 2;
 $33 = $7 + 2 | 0;
 $34 = $7 + 4 | 0;
 $35 = $7 + 6 | 0;
 $36 = $7 + 8 | 0;
 $37 = $0 + 4324 | 0;
 $38 = $0 + 4224 | 0;
 $39 = $0 + 4320 | 0;
 $40 = $11 << 16 >> 16;
 $41 = $12 << 16 >> 16;
 $42 = $12 >> 16;
 $43 = ($9 | 0) > 0;
 $44 = $10 << 16 >> 16;
 $45 = $10 >> 16;
 $46 = ($14 | 0) > 2048;
 $47 = ($14 | 0) / 2 | 0;
 $48 = $47 + -512 | 0;
 $49 = 512 - $47 | 0;
 $50 = $14 << 16 >> 16;
 $51 = $13 >>> 6 << 16 >> 16;
 $54 = ($13 >> 21) + 1 >> 1;
 $55 = $15 + 944 | 0;
 $57 = Math_imul($15 << 16 >> 16, $50) | 0;
 $59 = Math_imul($55 << 16 >> 16, $50) | 0;
 $60 = $15 + -944 | 0;
 $63 = Math_imul(944 - $15 << 16 >> 16, $50) | 0;
 $$0 = $5 + ((HEAP32[$24 >> 2] | 0) - $9 + 2 << 2) | 0;
 $$01 = $0 + 1280 + ((HEAP32[$19 >> 2] | 0) - $9 + 1 << 2) | 0;
 $$023 = 0;
 $$03 = $0 + 3900 | 0;
 while (1) {
  if (($$023 | 0) >= ($16 | 0)) break;
  HEAP32[$31 >> 2] = (Math_imul(HEAP32[$31 >> 2] | 0, 196314165) | 0) + 907633515;
  $68 = _silk_noise_shape_quantizer_short_prediction_c($$03, $6, $18) | 0;
  if ($32) {
   $69 = HEAP32[$$0 >> 2] | 0;
   $72 = HEAP16[$7 >> 1] | 0;
   $78 = (Math_imul($69 >> 16, $72) | 0) + ((Math_imul($69 & 65535, $72) | 0) >> 16) + 2 | 0;
   $80 = HEAP32[$$0 + -4 >> 2] | 0;
   $83 = HEAP16[$33 >> 1] | 0;
   $89 = $78 + ((Math_imul($80 >> 16, $83) | 0) + ((Math_imul($80 & 65535, $83) | 0) >> 16)) | 0;
   $91 = HEAP32[$$0 + -8 >> 2] | 0;
   $94 = HEAP16[$34 >> 1] | 0;
   $100 = $89 + ((Math_imul($91 >> 16, $94) | 0) + ((Math_imul($91 & 65535, $94) | 0) >> 16)) | 0;
   $102 = HEAP32[$$0 + -12 >> 2] | 0;
   $105 = HEAP16[$35 >> 1] | 0;
   $111 = $100 + ((Math_imul($102 >> 16, $105) | 0) + ((Math_imul($102 & 65535, $105) | 0) >> 16)) | 0;
   $113 = HEAP32[$$0 + -16 >> 2] | 0;
   $116 = HEAP16[$36 >> 1] | 0;
   $$022 = $111 + ((Math_imul($113 >> 16, $116) | 0) + ((Math_imul($113 & 65535, $116) | 0) >> 16)) | 0;
   $$1 = $$0 + 4 | 0;
  } else {
   $$022 = 0;
   $$1 = $$0;
  }
  $124 = _silk_NSQ_noise_shape_feedback_loop_c(HEAP32[$37 >> 2] | 0, $38, $8, $17) | 0;
  $125 = HEAP32[$39 >> 2] | 0;
  $126 = $125 >> 16;
  $128 = $125 & 65535;
  $132 = $124 + ((Math_imul($126, $40) | 0) + ((Math_imul($128, $40) | 0) >> 16)) | 0;
  $136 = HEAP32[$0 + 1280 + ((HEAP32[$19 >> 2] | 0) + -1 << 2) >> 2] | 0;
  $147 = (Math_imul($136 >> 16, $41) | 0) + ((Math_imul($136 & 65535, $41) | 0) >> 16) + (Math_imul($126, $42) | 0) + ((Math_imul($128, $42) | 0) >> 16) | 0;
  $150 = ($68 << 2) - $132 - $147 | 0;
  if ($43) {
   $154 = (HEAP32[$$01 >> 2] | 0) + (HEAP32[$$01 + -8 >> 2] | 0) | 0;
   $160 = (Math_imul($154 >> 16, $44) | 0) + ((Math_imul($154 & 65535, $44) | 0) >> 16) | 0;
   $162 = HEAP32[$$01 + -4 >> 2] | 0;
   $$04$in$in = $$022 - ($160 + (Math_imul($162 >> 16, $45) | 0) + ((Math_imul($162 & 65535, $45) | 0) >> 16) << 1) + ($150 << 1) >> 2;
   $$12 = $$01 + 4 | 0;
  } else {
   $$04$in$in = $150 >> 1;
   $$12 = $$01;
  }
  $177 = $2 + ($$023 << 2) | 0;
  $179 = (HEAP32[$177 >> 2] | 0) - ($$04$in$in + 1 >> 1) | 0;
  $$ = (HEAP32[$31 >> 2] | 0) < 0 ? 0 - $179 | 0 : $179;
  $185 = ($$ | 0) > 30720 ? 30720 : ($$ | 0) > -31744 ? $$ : -31744;
  $186 = $185 - $15 | 0;
  do if ($46) {
   if (($186 | 0) > ($48 | 0)) {
    $$320$in = $186 - $48 | 0;
    label = 14;
    break;
   }
   if (($186 | 0) < ($49 | 0)) {
    $$320$in = $186 + $48 | 0;
    label = 14;
    break;
   } else if (($186 | 0) < 0) {
    label = 17;
    break;
   } else {
    $$2 = $59;
    $$210 = $57;
    $$213 = $55;
    $$216 = $15;
    break;
   }
  } else {
   $$320$in = $186;
   label = 14;
  } while (0);
  L19 : do if ((label | 0) == 14) {
   label = 0;
   $$320 = $$320$in >> 10;
   if (($$320 | 0) > 0) {
    $195 = ($$320 << 10) + -80 + $15 | 0;
    $196 = $195 + 1024 | 0;
    $$2 = Math_imul($196 << 16 >> 16, $50) | 0;
    $$210 = Math_imul($195 << 16 >> 16, $50) | 0;
    $$213 = $196;
    $$216 = $195;
    break;
   }
   switch ($$320 | 0) {
   case 0:
    {
     $$2 = $59;
     $$210 = $57;
     $$213 = $55;
     $$216 = $15;
     break L19;
     break;
    }
   case -1:
    {
     label = 17;
     break L19;
     break;
    }
   default:
    {}
   }
   $203 = ($$320 << 10 | 80) + $15 | 0;
   $$2 = Math_imul(-1024 - $203 << 16 >> 16, $50) | 0;
   $$210 = Math_imul(0 - $203 << 16 >> 16, $50) | 0;
   $$213 = $203 + 1024 | 0;
   $$216 = $203;
  } while (0);
  if ((label | 0) == 17) {
   label = 0;
   $$2 = $57;
   $$210 = $63;
   $$213 = $15;
   $$216 = $60;
  }
  $212 = $185 - $$216 << 16 >> 16;
  $216 = $185 - $$213 << 16 >> 16;
  $219 = ($$2 + (Math_imul($216, $216) | 0) | 0) < ($$210 + (Math_imul($212, $212) | 0) | 0);
  $$213$$216 = $219 ? $$213 : $$216;
  $224 = $3 + $$023 | 0;
  HEAP8[$224 >> 0] = (($$213$$216 >>> 9) + 1 | 0) >>> 1;
  $225 = $$213$$216 << 4;
  $230 = ((HEAP32[$31 >> 2] | 0) < 0 ? 0 - $225 | 0 : $225) + ($$022 << 1) | 0;
  $232 = $230 + ($68 << 4) | 0;
  $243 = ((Math_imul($232 >> 16, $51) | 0) + ((Math_imul($232 & 65534, $51) | 0) >> 16) + (Math_imul($232, $54) | 0) >> 7) + 1 >> 1;
  HEAP16[$4 + ($$023 << 1) >> 1] = ($243 | 0) > 32767 ? 32767 : (($243 | 0) > -32768 ? $243 : -32768) & 65535;
  $249 = $$03 + 4 | 0;
  HEAP32[$249 >> 2] = $232;
  $252 = $232 - (HEAP32[$177 >> 2] << 4) | 0;
  HEAP32[$37 >> 2] = $252;
  $254 = $252 - ($132 << 2) | 0;
  HEAP32[$39 >> 2] = $254;
  HEAP32[$0 + 1280 + (HEAP32[$19 >> 2] << 2) >> 2] = $254 - ($147 << 2);
  HEAP32[$5 + (HEAP32[$24 >> 2] << 2) >> 2] = $230 << 1;
  HEAP32[$19 >> 2] = (HEAP32[$19 >> 2] | 0) + 1;
  HEAP32[$24 >> 2] = (HEAP32[$24 >> 2] | 0) + 1;
  HEAP32[$31 >> 2] = (HEAP32[$31 >> 2] | 0) + (HEAP8[$224 >> 0] | 0);
  $$0 = $$1;
  $$01 = $$12;
  $$023 = $$023 + 1 | 0;
  $$03 = $249;
 }
 dest = $0 + 3840 | 0;
 src = $0 + 3840 + ($16 << 2) | 0;
 stop = dest + 64 | 0;
 do {
  HEAP32[dest >> 2] = HEAP32[src >> 2];
  dest = dest + 4 | 0;
  src = src + 4 | 0;
 } while ((dest | 0) < (stop | 0));
 return;
}

function _opus_custom_encoder_ctl($0, $1, $varargs) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $varargs = $varargs | 0;
 var $$0 = 0, $$01 = 0, $105 = 0, $106 = 0, $114 = 0, $115 = 0, $123 = 0, $124 = 0, $132 = 0, $133 = 0, $137 = 0, $138 = 0, $139 = 0, $141 = 0, $144 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $154 = 0, $157 = 0, $17 = 0, $173 = 0, $174 = 0, $18 = 0, $181 = 0, $182 = 0, $190 = 0, $191 = 0, $194 = 0, $199 = 0, $2 = 0, $200 = 0, $209 = 0, $210 = 0, $218 = 0, $219 = 0, $228 = 0, $229 = 0, $236 = 0, $237 = 0, $30 = 0, $31 = 0, $43 = 0, $44 = 0, $57 = 0, $58 = 0, $66 = 0, $67 = 0, $74 = 0, $75 = 0, $8 = 0, $82 = 0, $83 = 0, $88 = 0, $9 = 0, $96 = 0, $97 = 0, dest = 0, label = 0, sp = 0, src = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 $2 = sp;
 HEAP32[$2 >> 2] = $varargs;
 do switch ($1 | 0) {
 case 4010:
  {
   $8 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $9 = HEAP32[$8 >> 2] | 0;
   HEAP32[$2 >> 2] = $8 + 4;
   if ($9 >>> 0 > 10) label = 43; else {
    HEAP32[$0 + 24 >> 2] = $9;
    label = 42;
   }
   break;
  }
 case 10010:
  {
   $17 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $18 = HEAP32[$17 >> 2] | 0;
   HEAP32[$2 >> 2] = $17 + 4;
   if (($18 | 0) < 0) label = 43; else if (($18 | 0) < (HEAP32[(HEAP32[$0 >> 2] | 0) + 8 >> 2] | 0)) {
    HEAP32[$0 + 32 >> 2] = $18;
    label = 42;
   } else label = 43;
   break;
  }
 case 10012:
  {
   $30 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $31 = HEAP32[$30 >> 2] | 0;
   HEAP32[$2 >> 2] = $30 + 4;
   if (($31 | 0) < 1) label = 43; else if (($31 | 0) > (HEAP32[(HEAP32[$0 >> 2] | 0) + 8 >> 2] | 0)) label = 43; else {
    HEAP32[$0 + 36 >> 2] = $31;
    label = 42;
   }
   break;
  }
 case 10002:
  {
   $43 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $44 = HEAP32[$43 >> 2] | 0;
   HEAP32[$2 >> 2] = $43 + 4;
   if ($44 >>> 0 > 2) label = 43; else {
    HEAP32[$0 + 20 >> 2] = ($44 | 0) != 2 & 1;
    HEAP32[$0 + 12 >> 2] = ($44 | 0) == 0 & 1;
    label = 42;
   }
   break;
  }
 case 4014:
  {
   $57 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $58 = HEAP32[$57 >> 2] | 0;
   HEAP32[$2 >> 2] = $57 + 4;
   if ($58 >>> 0 > 100) label = 43; else {
    HEAP32[$0 + 56 >> 2] = $58;
    label = 42;
   }
   break;
  }
 case 4020:
  {
   $66 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $67 = HEAP32[$66 >> 2] | 0;
   HEAP32[$2 >> 2] = $66 + 4;
   HEAP32[$0 + 52 >> 2] = $67;
   label = 42;
   break;
  }
 case 4006:
  {
   $74 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $75 = HEAP32[$74 >> 2] | 0;
   HEAP32[$2 >> 2] = $74 + 4;
   HEAP32[$0 + 44 >> 2] = $75;
   label = 42;
   break;
  }
 case 4002:
  {
   $82 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $83 = HEAP32[$82 >> 2] | 0;
   HEAP32[$2 >> 2] = $82 + 4;
   if (($83 | 0) > 500 | ($83 | 0) == -1) {
    $88 = (HEAP32[$0 + 4 >> 2] | 0) * 26e4 | 0;
    HEAP32[$0 + 40 >> 2] = ($83 | 0) < ($88 | 0) ? $83 : $88;
    label = 42;
   } else label = 43;
   break;
  }
 case 10008:
  {
   $96 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $97 = HEAP32[$96 >> 2] | 0;
   HEAP32[$2 >> 2] = $96 + 4;
   if (($97 + -1 | 0) >>> 0 > 1) label = 43; else {
    HEAP32[$0 + 8 >> 2] = $97;
    label = 42;
   }
   break;
  }
 case 4036:
  {
   $105 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $106 = HEAP32[$105 >> 2] | 0;
   HEAP32[$2 >> 2] = $105 + 4;
   if (($106 + -8 | 0) >>> 0 > 16) label = 43; else {
    HEAP32[$0 + 60 >> 2] = $106;
    label = 42;
   }
   break;
  }
 case 4037:
  {
   $114 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $115 = HEAP32[$114 >> 2] | 0;
   HEAP32[$2 >> 2] = $114 + 4;
   HEAP32[$115 >> 2] = HEAP32[$0 + 60 >> 2];
   label = 42;
   break;
  }
 case 4046:
  {
   $123 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $124 = HEAP32[$123 >> 2] | 0;
   HEAP32[$2 >> 2] = $123 + 4;
   if ($124 >>> 0 > 1) label = 43; else {
    HEAP32[$0 + 68 >> 2] = $124;
    label = 42;
   }
   break;
  }
 case 4047:
  {
   $132 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $133 = HEAP32[$132 >> 2] | 0;
   HEAP32[$2 >> 2] = $132 + 4;
   if (!$133) label = 43; else {
    HEAP32[$133 >> 2] = HEAP32[$0 + 68 >> 2];
    label = 42;
   }
   break;
  }
 case 4028:
  {
   $137 = $0 + 4 | 0;
   $138 = HEAP32[$137 >> 2] | 0;
   $139 = HEAP32[$0 >> 2] | 0;
   $141 = HEAP32[$139 + 4 >> 2] | 0;
   $144 = $0 + 236 + ((Math_imul($138, $141 + 1024 | 0) | 0) << 2) | 0;
   $146 = HEAP32[$139 + 8 >> 2] | 0;
   $147 = Math_imul($138, $146) | 0;
   $148 = $144 + ($147 << 2) | 0;
   $149 = $148 + ($147 << 2) | 0;
   _memset($0 + 76 | 0, 0, (_opus_custom_encoder_get_size($141, $146, $138) | 0) + -76 | 0) | 0;
   $$01 = 0;
   $154 = $139;
   $157 = $138;
   while (1) {
    if (($$01 | 0) >= (Math_imul($157, HEAP32[$154 + 8 >> 2] | 0) | 0)) break;
    HEAPF32[$149 + ($$01 << 2) >> 2] = -28.0;
    HEAPF32[$148 + ($$01 << 2) >> 2] = -28.0;
    $$01 = $$01 + 1 | 0;
    $154 = HEAP32[$0 >> 2] | 0;
    $157 = HEAP32[$137 >> 2] | 0;
   }
   HEAP32[$0 + 208 >> 2] = 0;
   HEAPF32[$0 + 84 >> 2] = 1.0;
   HEAP32[$0 + 80 >> 2] = 2;
   HEAP32[$0 + 88 >> 2] = 256;
   HEAP32[$0 + 96 >> 2] = 0;
   HEAP32[$0 + 100 >> 2] = 0;
   label = 42;
   break;
  }
 case 10016:
  {
   $173 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $174 = HEAP32[$173 >> 2] | 0;
   HEAP32[$2 >> 2] = $173 + 4;
   HEAP32[$0 + 48 >> 2] = $174;
   label = 42;
   break;
  }
 case 10022:
  {
   $181 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $182 = HEAP32[$181 >> 2] | 0;
   HEAP32[$2 >> 2] = $181 + 4;
   if (!$182) label = 42; else {
    dest = $0 + 120 | 0;
    src = $182;
    stop = dest + 56 | 0;
    do {
     HEAP32[dest >> 2] = HEAP32[src >> 2];
     dest = dest + 4 | 0;
     src = src + 4 | 0;
    } while ((dest | 0) < (stop | 0));
    label = 42;
   }
   break;
  }
 case 10028:
  {
   $190 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $191 = HEAP32[$190 >> 2] | 0;
   HEAP32[$2 >> 2] = $190 + 4;
   if (!$191) label = 42; else {
    $194 = $191;
    $199 = HEAP32[$194 + 4 >> 2] | 0;
    $200 = $0 + 176 | 0;
    HEAP32[$200 >> 2] = HEAP32[$194 >> 2];
    HEAP32[$200 + 4 >> 2] = $199;
    label = 42;
   }
   break;
  }
 case 10015:
  {
   $209 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $210 = HEAP32[$209 >> 2] | 0;
   HEAP32[$2 >> 2] = $209 + 4;
   if (!$210) label = 43; else {
    HEAP32[$210 >> 2] = HEAP32[$0 >> 2];
    label = 42;
   }
   break;
  }
 case 4031:
  {
   $218 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $219 = HEAP32[$218 >> 2] | 0;
   HEAP32[$2 >> 2] = $218 + 4;
   if (!$219) label = 43; else {
    HEAP32[$219 >> 2] = HEAP32[$0 + 76 >> 2];
    label = 42;
   }
   break;
  }
 case 10024:
  {
   $228 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $229 = HEAP32[$228 >> 2] | 0;
   HEAP32[$2 >> 2] = $228 + 4;
   HEAP32[$0 + 64 >> 2] = $229;
   label = 42;
   break;
  }
 case 10026:
  {
   $236 = (HEAP32[$2 >> 2] | 0) + (4 - 1) & ~(4 - 1);
   $237 = HEAP32[$236 >> 2] | 0;
   HEAP32[$2 >> 2] = $236 + 4;
   HEAP32[$0 + 228 >> 2] = $237;
   label = 42;
   break;
  }
 default:
  {
   $$0 = -5;
   STACKTOP = sp;
   return $$0 | 0;
  }
 } while (0);
 if ((label | 0) == 42) {
  $$0 = 0;
  STACKTOP = sp;
  return $$0 | 0;
 } else if ((label | 0) == 43) {
  $$0 = -1;
  STACKTOP = sp;
  return $$0 | 0;
 }
 return 0;
}

function _quant_coarse_energy($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) {
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
 var $$0114 = 0, $$02 = 0.0, $$02$ = 0.0, $$43 = 0, $$idx10 = 0, $$idx10$val = 0, $$idx7$val = 0, $$idx8$val = 0, $$idx9 = 0, $$idx9$val = 0, $$sroa$0$0$copyload = 0, $$sroa$030 = 0, $$sroa$2$0$$sroa_idx33 = 0, $$sroa$2$0$copyload = 0, $$sroa$3 = 0, $$sroa$3$0$$sroa_idx = 0, $$sroa$323$0$copyload = 0, $$sroa$336 = 0, $$sroa$4 = 0, $21 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0.0, $39 = 0, $41 = 0, $42 = 0, $46 = 0.0, $49 = 0, $50 = 0, $51 = 0, $54 = 0, $58 = 0, $60 = 0, $61 = 0, $63 = 0, $64 = 0, $66 = 0, $67 = 0, $69 = 0, $88 = 0.0, $storemerge = 0.0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 $$sroa$030 = sp + 72 | 0;
 $$sroa$336 = sp + 48 | 0;
 $$sroa$3 = sp + 24 | 0;
 $$sroa$4 = sp;
 if (!$12) if (!$14) {
  $21 = $2 - $1 | 0;
  if (+HEAPF32[$13 >> 2] > +(Math_imul($9 << 1, $21) | 0)) $42 = (Math_imul($21, $9) | 0) < ($11 | 0); else $42 = 0;
 } else $42 = 0; else $42 = 1;
 $35 = ~~(+($6 >>> 0) * +HEAPF32[$13 >> 2] * +($15 | 0) / +($9 << 9 | 0));
 $36 = $0 + 8 | 0;
 $37 = HEAP32[$36 >> 2] | 0;
 $38 = +_loss_distortion($4, $5, $1, $3, $37, $9);
 $$idx9 = $8 + 20 | 0;
 $$idx9$val = HEAP32[$$idx9 >> 2] | 0;
 $$idx10 = $8 + 28 | 0;
 $$idx10$val = HEAP32[$$idx10 >> 2] | 0;
 $39 = _ec_tell_71($$idx9$val, $$idx10$val) | 0;
 $41 = ($39 + 3 | 0) >>> 0 > $6 >>> 0;
 $$43 = $42 & ($41 ^ 1) & 1;
 if (($2 - $1 | 0) > 10) {
  $46 = +($11 | 0) * .125;
  if ($46 > 16.0) $$02 = 16.0; else $$02 = $46;
 } else $$02 = 16.0;
 $$02$ = ($16 | 0) == 0 ? $$02 : 3.0;
 HEAP32[$$sroa$030 >> 2] = HEAP32[$8 >> 2];
 HEAP32[$$sroa$030 + 4 >> 2] = HEAP32[$8 + 4 >> 2];
 HEAP32[$$sroa$030 + 8 >> 2] = HEAP32[$8 + 8 >> 2];
 HEAP32[$$sroa$030 + 12 >> 2] = HEAP32[$8 + 12 >> 2];
 HEAP32[$$sroa$030 + 16 >> 2] = HEAP32[$8 + 16 >> 2];
 HEAP32[$$sroa$030 + 20 >> 2] = HEAP32[$8 + 20 >> 2];
 $$sroa$2$0$$sroa_idx33 = $8 + 24 | 0;
 $$sroa$2$0$copyload = HEAP32[$$sroa$2$0$$sroa_idx33 >> 2] | 0;
 HEAP32[$$sroa$336 >> 2] = HEAP32[$$idx10 >> 2];
 HEAP32[$$sroa$336 + 4 >> 2] = HEAP32[$$idx10 + 4 >> 2];
 HEAP32[$$sroa$336 + 8 >> 2] = HEAP32[$$idx10 + 8 >> 2];
 HEAP32[$$sroa$336 + 12 >> 2] = HEAP32[$$idx10 + 12 >> 2];
 HEAP32[$$sroa$336 + 16 >> 2] = HEAP32[$$idx10 + 16 >> 2];
 $49 = Math_imul($37, $9) | 0;
 $50 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($49 << 2) | 0) + 15 & -16) | 0;
 $51 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($49 << 2) | 0) + 15 & -16) | 0;
 _memcpy($50 | 0, $5 | 0, $49 << 2 | 0) | 0;
 $54 = $41 | ($14 | 0) == 0;
 if ($54) if ($41 | $42 ^ 1) {
  $$0114 = 0;
  $$idx7$val = $$idx9$val;
  $$idx8$val = $$idx10$val;
  $$sroa$323$0$copyload = $$sroa$2$0$copyload;
 } else {
  _quant_coarse_energy_impl($0, $1, $2, $4, $50, $6, $39, 29559 + ($10 * 84 | 0) + 42 | 0, $51, $8, $9, $10, 1, $$02$, $16) | 0;
  label = 17;
 } else {
  $58 = _quant_coarse_energy_impl($0, $1, $2, $4, $50, $6, $39, 29559 + ($10 * 84 | 0) + 42 | 0, $51, $8, $9, $10, 1, $$02$, $16) | 0;
  if ($41 | $42 ^ 1) {
   $$0114 = $58;
   $$idx7$val = HEAP32[$$idx9 >> 2] | 0;
   $$idx8$val = HEAP32[$$idx10 >> 2] | 0;
   $$sroa$323$0$copyload = HEAP32[$$sroa$2$0$$sroa_idx33 >> 2] | 0;
  } else label = 17;
 }
 if ((label | 0) == 17) {
  _memcpy($5 | 0, $50 | 0, (Math_imul(HEAP32[$36 >> 2] | 0, $9) | 0) << 2 | 0) | 0;
  _memcpy($7 | 0, $51 | 0, (Math_imul(HEAP32[$36 >> 2] | 0, $9) | 0) << 2 | 0) | 0;
  $storemerge = $38;
  HEAPF32[$13 >> 2] = $storemerge;
  STACKTOP = sp;
  return;
 }
 $60 = _ec_tell_frac($$idx7$val, $$idx8$val) | 0;
 $$sroa$0$0$copyload = HEAP32[$8 >> 2] | 0;
 $$sroa$3$0$$sroa_idx = $8 + 4 | 0;
 HEAP32[$$sroa$3 >> 2] = HEAP32[$$sroa$3$0$$sroa_idx >> 2];
 HEAP32[$$sroa$3 + 4 >> 2] = HEAP32[$$sroa$3$0$$sroa_idx + 4 >> 2];
 HEAP32[$$sroa$3 + 8 >> 2] = HEAP32[$$sroa$3$0$$sroa_idx + 8 >> 2];
 HEAP32[$$sroa$3 + 12 >> 2] = HEAP32[$$sroa$3$0$$sroa_idx + 12 >> 2];
 HEAP32[$$sroa$3 + 16 >> 2] = HEAP32[$$sroa$3$0$$sroa_idx + 16 >> 2];
 HEAP32[$$sroa$4 >> 2] = HEAP32[$$idx10 >> 2];
 HEAP32[$$sroa$4 + 4 >> 2] = HEAP32[$$idx10 + 4 >> 2];
 HEAP32[$$sroa$4 + 8 >> 2] = HEAP32[$$idx10 + 8 >> 2];
 HEAP32[$$sroa$4 + 12 >> 2] = HEAP32[$$idx10 + 12 >> 2];
 HEAP32[$$sroa$4 + 16 >> 2] = HEAP32[$$idx10 + 16 >> 2];
 $61 = _ec_range_bytes($$sroa$2$0$copyload) | 0;
 $63 = $$sroa$0$0$copyload + $61 | 0;
 $64 = (_ec_range_bytes($$sroa$323$0$copyload) | 0) - $61 | 0;
 $66 = _llvm_stacksave() | 0;
 $67 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * (($64 | 0) == 0 ? 1 : $64) | 0) + 15 & -16) | 0;
 _memcpy($67 | 0, $63 | 0, $64 | 0) | 0;
 HEAP32[$8 >> 2] = HEAP32[$$sroa$030 >> 2];
 HEAP32[$8 + 4 >> 2] = HEAP32[$$sroa$030 + 4 >> 2];
 HEAP32[$8 + 8 >> 2] = HEAP32[$$sroa$030 + 8 >> 2];
 HEAP32[$8 + 12 >> 2] = HEAP32[$$sroa$030 + 12 >> 2];
 HEAP32[$8 + 16 >> 2] = HEAP32[$$sroa$030 + 16 >> 2];
 HEAP32[$8 + 20 >> 2] = HEAP32[$$sroa$030 + 20 >> 2];
 HEAP32[$$sroa$2$0$$sroa_idx33 >> 2] = $$sroa$2$0$copyload;
 HEAP32[$$idx10 >> 2] = HEAP32[$$sroa$336 >> 2];
 HEAP32[$$idx10 + 4 >> 2] = HEAP32[$$sroa$336 + 4 >> 2];
 HEAP32[$$idx10 + 8 >> 2] = HEAP32[$$sroa$336 + 8 >> 2];
 HEAP32[$$idx10 + 12 >> 2] = HEAP32[$$sroa$336 + 12 >> 2];
 HEAP32[$$idx10 + 16 >> 2] = HEAP32[$$sroa$336 + 16 >> 2];
 $69 = _quant_coarse_energy_impl($0, $1, $2, $4, $5, $6, $39, 29559 + ($10 * 84 | 0) + ($$43 * 42 | 0) | 0, $7, $8, $9, $10, 0, $$02$, $16) | 0;
 do if (!$54) {
  if (($$0114 | 0) >= ($69 | 0)) {
   if (($$0114 | 0) != ($69 | 0)) break;
   if (((_ec_tell_frac(HEAP32[$$idx9 >> 2] | 0, HEAP32[$$idx10 >> 2] | 0) | 0) + $35 | 0) <= ($60 | 0)) break;
  }
  HEAP32[$8 >> 2] = $$sroa$0$0$copyload;
  HEAP32[$$sroa$3$0$$sroa_idx >> 2] = HEAP32[$$sroa$3 >> 2];
  HEAP32[$$sroa$3$0$$sroa_idx + 4 >> 2] = HEAP32[$$sroa$3 + 4 >> 2];
  HEAP32[$$sroa$3$0$$sroa_idx + 8 >> 2] = HEAP32[$$sroa$3 + 8 >> 2];
  HEAP32[$$sroa$3$0$$sroa_idx + 12 >> 2] = HEAP32[$$sroa$3 + 12 >> 2];
  HEAP32[$$sroa$3$0$$sroa_idx + 16 >> 2] = HEAP32[$$sroa$3 + 16 >> 2];
  HEAP32[$$sroa$2$0$$sroa_idx33 >> 2] = $$sroa$323$0$copyload;
  HEAP32[$$idx10 >> 2] = HEAP32[$$sroa$4 >> 2];
  HEAP32[$$idx10 + 4 >> 2] = HEAP32[$$sroa$4 + 4 >> 2];
  HEAP32[$$idx10 + 8 >> 2] = HEAP32[$$sroa$4 + 8 >> 2];
  HEAP32[$$idx10 + 12 >> 2] = HEAP32[$$sroa$4 + 12 >> 2];
  HEAP32[$$idx10 + 16 >> 2] = HEAP32[$$sroa$4 + 16 >> 2];
  _memcpy($63 | 0, $67 | 0, $64 | 0) | 0;
  _memcpy($5 | 0, $50 | 0, (Math_imul(HEAP32[$36 >> 2] | 0, $9) | 0) << 2 | 0) | 0;
  _memcpy($7 | 0, $51 | 0, (Math_imul(HEAP32[$36 >> 2] | 0, $9) | 0) << 2 | 0) | 0;
  _llvm_stackrestore($66 | 0);
  $storemerge = $38;
  HEAPF32[$13 >> 2] = $storemerge;
  STACKTOP = sp;
  return;
 } while (0);
 _llvm_stackrestore($66 | 0);
 $88 = +HEAPF32[18936 + ($10 << 2) >> 2];
 $storemerge = $88 * $88 * +HEAPF32[$13 >> 2] + $38;
 HEAPF32[$13 >> 2] = $storemerge;
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
 $12 = HEAP32[8428] | 0;
 $13 = $10 & 3;
 if (!(($13 | 0) != 1 & $$ptr >>> 0 >= $12 >>> 0 & ($11 | 0) > 0)) _abort();
 $16 = HEAP32[$$ptr1 + 4 >> 2] | 0;
 if (!($16 & 1)) _abort();
 do if (!$13) {
  if (!($8 >>> 0 < 256 | $11 >>> 0 < ($8 | 4) >>> 0)) if (($11 - $8 | 0) >>> 0 <= HEAP32[8544] << 1 >>> 0) {
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
  if (($$ptr1 | 0) == (HEAP32[8430] | 0)) {
   $43 = (HEAP32[8427] | 0) + $11 | 0;
   $45 = $43 - $8 | 0;
   $46 = $$ptr + $8 | 0;
   if ($43 >>> 0 <= $8 >>> 0) break;
   HEAP32[$9 >> 2] = $10 & 1 | $8 | 2;
   HEAP32[$46 + 4 >> 2] = $45 | 1;
   HEAP32[8430] = $46;
   HEAP32[8427] = $45;
   $$1$i = $0;
   return $$1$i | 0;
  }
  if (($$ptr1 | 0) == (HEAP32[8429] | 0)) {
   $55 = (HEAP32[8426] | 0) + $11 | 0;
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
   HEAP32[8426] = $storemerge1$i$i;
   HEAP32[8429] = $storemerge$i$i;
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
     $88 = 33736 + ($81 << 1 << 2) | 0;
     if (($84 | 0) != ($88 | 0)) {
      if ($84 >>> 0 < $12 >>> 0) _abort();
      if ((HEAP32[$84 + 12 >> 2] | 0) != ($$ptr1 | 0)) _abort();
     }
     if (($86 | 0) == ($84 | 0)) {
      HEAP32[8424] = HEAP32[8424] & ~(1 << $81);
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
      $135 = 34e3 + ($134 << 2) | 0;
      do if (($$ptr1 | 0) == (HEAP32[$135 >> 2] | 0)) {
       HEAP32[$135 >> 2] = $$3$i$i;
       if (!$$3$i$i) {
        HEAP32[8425] = HEAP32[8425] & ~(1 << $134);
        break L42;
       }
      } else if ($106 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort(); else {
       HEAP32[$106 + 16 + (((HEAP32[$106 + 16 >> 2] | 0) != ($$ptr1 | 0) & 1) << 2) >> 2] = $$3$i$i;
       if (!$$3$i$i) break L42; else break;
      } while (0);
      $148 = HEAP32[8428] | 0;
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
      if ($158 | 0) if ($158 >>> 0 < (HEAP32[8428] | 0) >>> 0) _abort(); else {
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

function _silk_noise_shape_analysis_FLP($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0.0, $$03 = 0, $$05 = 0.0, $$06 = 0.0, $$08 = 0.0, $$09 = 0.0, $$1 = 0.0, $$14 = 0, $$17 = 0.0, $$1719 = 0.0, $$1720 = 0.0, $$2 = 0, $$3 = 0, $$4 = 0, $$5 = 0, $$pre$phi15Z2D = 0, $$pre$phiZ2D = 0, $10 = 0, $100 = 0, $101 = 0, $104 = 0, $108 = 0, $11 = 0, $112 = 0, $115 = 0, $116 = 0, $118 = 0.0, $123 = 0.0, $125 = 0, $127 = 0, $136 = 0, $14 = 0.0, $140 = 0.0, $142 = 0, $143 = 0, $15 = 0, $155 = 0, $159 = 0.0, $163 = 0, $171 = 0.0, $186 = 0.0, $188 = 0, $193 = 0, $194 = 0, $213 = 0, $214 = 0, $216 = 0, $217 = 0.0, $22 = 0.0, $220 = 0.0, $222 = 0.0, $225 = 0.0, $228 = 0, $23 = 0, $26 = 0.0, $27 = 0, $35 = 0.0, $4 = 0, $43 = 0, $5 = 0, $57 = 0, $59 = 0, $6 = 0, $60 = 0, $64 = 0, $65 = 0.0, $71 = 0.0, $81 = 0, $84 = 0.0, $87 = 0.0, $88 = 0, $94 = 0.0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $sqrtf10 = 0.0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 1168 | 0;
 $4 = sp + 200 | 0;
 $5 = sp + 100 | 0;
 $6 = sp;
 $10 = $3 + (0 - (HEAP32[$0 + 4596 >> 2] | 0) << 2) | 0;
 $11 = $0 + 4712 | 0;
 $14 = +(HEAP32[$11 >> 2] | 0) * .0078125;
 $15 = $0 + 4692 | 0;
 $22 = +((HEAP32[$15 >> 2] | 0) + (HEAP32[$0 + 4696 >> 2] | 0) | 0) * .5 * .000030517578125;
 $23 = $1 + 696 | 0;
 HEAPF32[$23 >> 2] = $22;
 $26 = +_silk_sigmoid(($14 + -20.0) * .25);
 $27 = $1 + 700 | 0;
 HEAPF32[$27 >> 2] = $26;
 if (!(HEAP32[$0 + 4672 >> 2] | 0)) {
  $35 = 1.0 - +(HEAP32[$0 + 4528 >> 2] | 0) * .00390625;
  $$06 = $14 - $26 * 2.0 * ($22 * .5 + .5) * $35 * $35;
 } else $$06 = $14;
 $43 = $0 + 4761 | 0;
 do if ((HEAP8[$43 >> 0] | 0) == 2) {
  $$1719 = $$06 + +HEAPF32[$0 + 10056 >> 2] * 2.0;
  HEAP8[$0 + 4762 >> 0] = 0;
  $$1720 = $$1719;
  $$pre$phi15Z2D = $0 + 4572 | 0;
  $$pre$phiZ2D = $0 + 4576 | 0;
 } else {
  $$17 = $$06 + (+(HEAP32[$11 >> 2] | 0) * -.4000000059604645 * .0078125 + 6.0) * (1.0 - $22);
  $57 = $0 + 4572 | 0;
  $59 = HEAP32[$57 >> 2] << 1;
  $60 = $0 + 4576 | 0;
  $64 = ((HEAP32[$60 >> 2] << 16 >> 16) * 5 | 0) / 2 | 0;
  $65 = +($59 | 0);
  $$0 = $2;
  $$02 = 0.0;
  $$03 = 0;
  $$05 = 0.0;
  while (1) {
   if (($$03 | 0) >= ($64 | 0)) break;
   $71 = +_silk_log2($65 + +_silk_energy_FLP($$0, $59));
   if (($$03 | 0) > 0) $$1 = $$02 + +Math_abs(+($71 - $$05)); else $$1 = $$02;
   $$0 = $$0 + ($59 << 2) | 0;
   $$02 = $$1;
   $$03 = $$03 + 1 | 0;
   $$05 = $71;
  }
  $81 = $0 + 4762 | 0;
  if ($$02 > +($64 + -1 | 0) * .6000000238418579) {
   HEAP8[$81 >> 0] = 0;
   $$1720 = $$17;
   $$pre$phi15Z2D = $57;
   $$pre$phiZ2D = $60;
   break;
  } else {
   HEAP8[$81 >> 0] = 1;
   $$1720 = $$17;
   $$pre$phi15Z2D = $57;
   $$pre$phiZ2D = $60;
   break;
  }
 } while (0);
 $84 = +HEAPF32[$1 + 704 >> 2] * 1.0000000474974513e-03;
 $87 = .9399999976158142 / ($84 * $84 + 1.0);
 $88 = $0 + 4668 | 0;
 $94 = +(HEAP32[$88 >> 2] | 0) * .0000152587890625 + +HEAPF32[$27 >> 2] * .009999999776482582;
 $95 = $0 + 4600 | 0;
 $96 = $0 + 4584 | 0;
 $97 = $0 + 4632 | 0;
 $$01 = $10;
 $$14 = 0;
 while (1) {
  $98 = HEAP32[$$pre$phiZ2D >> 2] | 0;
  if (($$14 | 0) >= ($98 | 0)) break;
  $100 = HEAP32[$$pre$phi15Z2D >> 2] | 0;
  $101 = $100 * 3 | 0;
  $104 = ((HEAP32[$95 >> 2] | 0) - $101 | 0) / 2 | 0;
  _silk_apply_sine_window_FLP($4, $$01, 1, $104);
  _memcpy($4 + ($104 << 2) | 0, $$01 + ($104 << 2) | 0, $100 * 12 | 0) | 0;
  $108 = $104 + $101 | 0;
  _silk_apply_sine_window_FLP($4 + ($108 << 2) | 0, $$01 + ($108 << 2) | 0, 2, $104);
  $112 = $$01 + (HEAP32[$96 >> 2] << 2) | 0;
  $115 = HEAP32[$95 >> 2] | 0;
  $116 = HEAP32[$97 >> 2] | 0;
  if ((HEAP32[$88 >> 2] | 0) > 0) _silk_warped_autocorrelation_FLP($5, $4, $94, $115, $116); else _silk_autocorrelation_FLP($5, $4, $115, $116 + 1 | 0);
  $118 = +HEAPF32[$5 >> 2];
  HEAPF32[$5 >> 2] = $118 + ($118 * 2.9999999242136255e-05 + 1.0);
  $123 = +_silk_schur_FLP($6, $5, HEAP32[$97 >> 2] | 0);
  $125 = $1 + 244 + ($$14 * 24 << 2) | 0;
  _silk_k2a_FLP($125, $6, HEAP32[$97 >> 2] | 0);
  $sqrtf10 = +Math_sqrt(+$123);
  $127 = $1 + ($$14 << 2) | 0;
  HEAPF32[$127 >> 2] = $sqrtf10;
  if ((HEAP32[$88 >> 2] | 0) > 0) HEAPF32[$127 >> 2] = $sqrtf10 * +_warped_gain($125, $94, HEAP32[$97 >> 2] | 0);
  _silk_bwexpander_FLP($125, HEAP32[$97 >> 2] | 0, $87);
  $136 = HEAP32[$97 >> 2] | 0;
  if ((HEAP32[$88 >> 2] | 0) > 0) _warped_true2monic_coefs($125, $94, $136); else _limit_coefs($125, $136);
  $$01 = $112;
  $$14 = $$14 + 1 | 0;
 }
 $140 = +_llvm_exp2_f64(+($$1720 * -.1599999964237213));
 $$2 = 0;
 $142 = $98;
 while (1) {
  if (($$2 | 0) >= ($142 | 0)) break;
  $143 = $1 + ($$2 << 2) | 0;
  HEAPF32[$143 >> 2] = +HEAPF32[$143 >> 2] * $140 + 1.2483305931091309;
  $$2 = $$2 + 1 | 0;
  $142 = HEAP32[$$pre$phiZ2D >> 2] | 0;
 }
 $155 = $0 + 4528 | 0;
 $159 = ((+(HEAP32[$15 >> 2] | 0) * .000030517578125 + -1.0) * .5 + 1.0) * 4.0 * (+(HEAP32[$155 >> 2] | 0) * .00390625);
 L37 : do if ((HEAP8[$43 >> 0] | 0) == 2) {
  $$3 = 0;
  $163 = $142;
  while (1) {
   if (($$3 | 0) >= ($163 | 0)) break;
   $171 = .20000000298023224 / +(HEAP32[$$pre$phi15Z2D >> 2] | 0) + 3.0 / +(HEAP32[$1 + 228 + ($$3 << 2) >> 2] | 0);
   HEAPF32[$1 + 628 + ($$3 << 2) >> 2] = $171 + -1.0;
   HEAPF32[$1 + 644 + ($$3 << 2) >> 2] = 1.0 - $171 - $171 * $159;
   $$3 = $$3 + 1 | 0;
   $163 = HEAP32[$$pre$phiZ2D >> 2] | 0;
  }
  $$09 = -.25 - +(HEAP32[$155 >> 2] | 0) * .26249998807907104 * .00390625;
  $228 = $163;
 } else {
  $186 = 1.2999999523162842 / +(HEAP32[$$pre$phi15Z2D >> 2] | 0);
  $188 = $1 + 628 | 0;
  HEAPF32[$188 >> 2] = $186 + -1.0;
  $193 = $1 + 644 | 0;
  HEAPF32[$193 >> 2] = 1.0 - $186 - $186 * $159 * .6000000238418579;
  $$4 = 1;
  while (1) {
   $194 = HEAP32[$$pre$phiZ2D >> 2] | 0;
   if (($$4 | 0) >= ($194 | 0)) {
    $$09 = -.25;
    $228 = $194;
    break L37;
   }
   HEAP32[$1 + 628 + ($$4 << 2) >> 2] = HEAP32[$188 >> 2];
   HEAP32[$1 + 644 + ($$4 << 2) >> 2] = HEAP32[$193 >> 2];
   $$4 = $$4 + 1 | 0;
  }
 } while (0);
 if ((HEAP8[$43 >> 0] | 0) == 2) $$08 = ((1.0 - (1.0 - +HEAPF32[$27 >> 2]) * +HEAPF32[$23 >> 2]) * .20000000298023224 + .30000001192092896) * +Math_sqrt(+(+HEAPF32[$0 + 10056 >> 2])); else $$08 = 0.0;
 $213 = $0 + 7168 | 0;
 $214 = $0 + 7172 | 0;
 $$5 = 0;
 $216 = $228;
 while (1) {
  if (($$5 | 0) >= ($216 | 0)) break;
  $217 = +HEAPF32[$213 >> 2];
  $220 = $217 + ($$08 - $217) * .4000000059604645;
  HEAPF32[$213 >> 2] = $220;
  HEAPF32[$1 + 676 + ($$5 << 2) >> 2] = $220;
  $222 = +HEAPF32[$214 >> 2];
  $225 = $222 + ($$09 - $222) * .4000000059604645;
  HEAPF32[$214 >> 2] = $225;
  HEAPF32[$1 + 660 + ($$5 << 2) >> 2] = $225;
  $$5 = $$5 + 1 | 0;
  $216 = HEAP32[$$pre$phiZ2D >> 2] | 0;
 }
 STACKTOP = sp;
 return;
}

function _silk_burg_modified_FLP($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = +$2;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$0 = 0.0, $$01 = 0.0, $$011 = 0, $$017 = 0.0, $$018 = 0.0, $$021 = 0.0, $$022 = 0.0, $$05 = 0.0, $$06 = 0, $$09 = 0, $$1 = 0.0, $$112 = 0, $$115 = 0, $$119 = 0.0, $$12 = 0.0, $$123 = 0.0, $$14 = 0.0, $$17 = 0, $$2 = 0.0, $$213 = 0, $$216 = 0, $$220 = 0.0, $$224 = 0.0, $$28 = 0, $$3 = 0, $$4 = 0, $$5 = 0, $$5$in = 0, $$6 = 0, $$7 = 0, $$8 = 0, $10 = 0, $109 = 0.0, $110 = 0, $12 = 0.0, $126 = 0.0, $129 = 0.0, $133 = 0.0, $136 = 0, $138 = 0, $139 = 0.0, $142 = 0, $143 = 0.0, $15 = 0, $154 = 0, $155 = 0.0, $158 = 0, $159 = 0.0, $183 = 0.0, $184 = 0, $186 = 0.0, $19 = 0.0, $196 = 0.0, $21 = 0, $26 = 0.0, $28 = 0.0, $29 = 0.0, $31 = 0, $32 = 0, $35 = 0, $37 = 0.0, $40 = 0.0, $45 = 0.0, $48 = 0, $53 = 0.0, $56 = 0, $6 = 0, $60 = 0.0, $7 = 0, $73 = 0, $8 = 0, $82 = 0, $9 = 0, $92 = 0.0, $94 = 0, $indvars$iv$next43 = 0, $indvars$iv36 = 0, $indvars$iv42 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 976 | 0;
 $6 = sp + 784 | 0;
 $7 = sp + 592 | 0;
 $8 = sp + 392 | 0;
 $9 = sp + 192 | 0;
 $10 = sp;
 $12 = +_silk_energy_FLP($1, Math_imul($4, $3) | 0);
 _memset($6 | 0, 0, 192) | 0;
 $$011 = 0;
 while (1) {
  if (($$011 | 0) >= ($4 | 0)) break;
  $15 = $1 + ((Math_imul($$011, $3) | 0) << 2) | 0;
  $$09 = 1;
  while (1) {
   if (($$09 | 0) > ($5 | 0)) break;
   $19 = +_silk_inner_product_FLP($15, $15 + ($$09 << 2) | 0, $3 - $$09 | 0);
   $21 = $6 + ($$09 + -1 << 3) | 0;
   HEAPF64[$21 >> 3] = +HEAPF64[$21 >> 3] + $19;
   $$09 = $$09 + 1 | 0;
  }
  $$011 = $$011 + 1 | 0;
 }
 _memcpy($7 | 0, $6 | 0, 192) | 0;
 $26 = $12 * 9.999999747378752e-06;
 $28 = $12 + $26 + 9.999999717180685e-10;
 HEAPF64[$8 >> 3] = $28;
 HEAPF64[$9 >> 3] = $28;
 $29 = $2;
 $$018 = 1.0;
 $indvars$iv36 = 1;
 $indvars$iv42 = 0;
 while (1) {
  if (($indvars$iv42 | 0) >= ($5 | 0)) break;
  $31 = $3 - $indvars$iv42 | 0;
  $32 = $31 + -1 | 0;
  $$112 = 0;
  while (1) {
   if (($$112 | 0) >= ($4 | 0)) break;
   $35 = $1 + ((Math_imul($$112, $3) | 0) << 2) | 0;
   $37 = +HEAPF32[$35 + ($indvars$iv42 << 2) >> 2];
   $40 = +HEAPF32[$35 + ($32 << 2) >> 2];
   $$0 = $40;
   $$01 = $37;
   $$06 = 0;
   while (1) {
    if (($indvars$iv42 | 0) == ($$06 | 0)) {
     $$17 = 0;
     break;
    }
    $45 = +HEAPF32[$35 + ($indvars$iv42 - $$06 + -1 << 2) >> 2];
    $48 = $6 + ($$06 << 3) | 0;
    HEAPF64[$48 >> 3] = +HEAPF64[$48 >> 3] - $37 * $45;
    $53 = +HEAPF32[$35 + ($31 + $$06 << 2) >> 2];
    $56 = $7 + ($$06 << 3) | 0;
    HEAPF64[$56 >> 3] = +HEAPF64[$56 >> 3] - $40 * $53;
    $60 = +HEAPF64[$10 + ($$06 << 3) >> 3];
    $$0 = $$0 + $53 * $60;
    $$01 = $$01 + $45 * $60;
    $$06 = $$06 + 1 | 0;
   }
   while (1) {
    if (($$17 | 0) == ($indvars$iv36 | 0)) break;
    $73 = $8 + ($$17 << 3) | 0;
    HEAPF64[$73 >> 3] = +HEAPF64[$73 >> 3] - $$01 * +HEAPF32[$35 + ($indvars$iv42 - $$17 << 2) >> 2];
    $82 = $9 + ($$17 << 3) | 0;
    HEAPF64[$82 >> 3] = +HEAPF64[$82 >> 3] - $$0 * +HEAPF32[$35 + ($31 + $$17 + -1 << 2) >> 2];
    $$17 = $$17 + 1 | 0;
   }
   $$112 = $$112 + 1 | 0;
  }
  $$1 = +HEAPF64[$7 + ($indvars$iv42 << 3) >> 3];
  $$12 = +HEAPF64[$6 + ($indvars$iv42 << 3) >> 3];
  $$28 = 0;
  while (1) {
   if (($indvars$iv42 | 0) == ($$28 | 0)) break;
   $92 = +HEAPF64[$10 + ($$28 << 3) >> 3];
   $94 = $indvars$iv42 - $$28 + -1 | 0;
   $$1 = $$1 + +HEAPF64[$6 + ($94 << 3) >> 3] * $92;
   $$12 = $$12 + +HEAPF64[$7 + ($94 << 3) >> 3] * $92;
   $$28 = $$28 + 1 | 0;
  }
  $indvars$iv$next43 = $indvars$iv42 + 1 | 0;
  HEAPF64[$8 + ($indvars$iv$next43 << 3) >> 3] = $$12;
  HEAPF64[$9 + ($indvars$iv$next43 << 3) >> 3] = $$1;
  $$021 = $$1;
  $$022 = +HEAPF64[$8 >> 3];
  $$05 = +HEAPF64[$9 >> 3];
  $$3 = 0;
  while (1) {
   if (($indvars$iv42 | 0) == ($$3 | 0)) break;
   $109 = +HEAPF64[$10 + ($$3 << 3) >> 3];
   $110 = $$3 + 1 | 0;
   $$021 = $$021 + +HEAPF64[$9 + ($indvars$iv42 - $$3 << 3) >> 3] * $109;
   $$022 = $$022 + +HEAPF64[$8 + ($110 << 3) >> 3] * $109;
   $$05 = $$05 + +HEAPF64[$9 + ($110 << 3) >> 3] * $109;
   $$3 = $110;
  }
  $126 = $$021 * -2.0 / ($$022 + $$05);
  $129 = $$018 * (1.0 - $126 * $126);
  if (!($129 <= $29)) {
   $$115 = 0;
   $$119 = $129;
   $$14 = $126;
  } else {
   $133 = +Math_sqrt(+(1.0 - $29 / $$018));
   $$115 = 1;
   $$119 = $29;
   $$14 = $$021 > 0.0 ? -$133 : $133;
  }
  $136 = $indvars$iv$next43 >> 1;
  $$4 = 0;
  while (1) {
   if (($$4 | 0) >= ($136 | 0)) break;
   $138 = $10 + ($$4 << 3) | 0;
   $139 = +HEAPF64[$138 >> 3];
   $142 = $10 + ($indvars$iv42 - $$4 + -1 << 3) | 0;
   $143 = +HEAPF64[$142 >> 3];
   HEAPF64[$138 >> 3] = $139 + $$14 * $143;
   HEAPF64[$142 >> 3] = $143 + $$14 * $139;
   $$4 = $$4 + 1 | 0;
  }
  HEAPF64[$10 + ($indvars$iv42 << 3) >> 3] = $$14;
  if (!$$115) $$6 = 0; else {
   $$5$in = $indvars$iv42;
   label = 29;
   break;
  }
  while (1) {
   if (($$6 | 0) > ($indvars$iv$next43 | 0)) break;
   $154 = $8 + ($$6 << 3) | 0;
   $155 = +HEAPF64[$154 >> 3];
   $158 = $9 + ($indvars$iv42 - $$6 + 1 << 3) | 0;
   $159 = +HEAPF64[$158 >> 3];
   HEAPF64[$154 >> 3] = $155 + $$14 * $159;
   HEAPF64[$158 >> 3] = $159 + $$14 * $155;
   $$6 = $$6 + 1 | 0;
  }
  $$018 = $$119;
  $indvars$iv36 = $indvars$iv36 + 1 | 0;
  $indvars$iv42 = $indvars$iv$next43;
 }
 if ((label | 0) == 29) {
  while (1) {
   label = 0;
   $$5 = $$5$in + 1 | 0;
   if (($$5 | 0) >= ($5 | 0)) {
    $$216 = $$115;
    $$220 = $$119;
    break;
   }
   HEAPF64[$10 + ($$5 << 3) >> 3] = 0.0;
   $$5$in = $$5;
   label = 29;
  }
  if ($$216 | 0) {
   $$7 = 0;
   while (1) {
    if (($$7 | 0) >= ($5 | 0)) {
     $$017 = $12;
     $$213 = 0;
     break;
    }
    HEAPF32[$0 + ($$7 << 2) >> 2] = -+HEAPF64[$10 + ($$7 << 3) >> 3];
    $$7 = $$7 + 1 | 0;
   }
   while (1) {
    if (($$213 | 0) >= ($4 | 0)) break;
    $$017 = $$017 - +_silk_energy_FLP($1 + ((Math_imul($$213, $3) | 0) << 2) | 0, $5);
    $$213 = $$213 + 1 | 0;
   }
   $$224 = $$017 * $$220;
   $196 = $$224;
   STACKTOP = sp;
   return +$196;
  }
 }
 $$123 = +HEAPF64[$8 >> 3];
 $$2 = 1.0;
 $$8 = 0;
 while (1) {
  if (($$8 | 0) >= ($5 | 0)) break;
  $183 = +HEAPF64[$10 + ($$8 << 3) >> 3];
  $184 = $$8 + 1 | 0;
  $186 = +HEAPF64[$8 + ($184 << 3) >> 3];
  HEAPF32[$0 + ($$8 << 2) >> 2] = -$183;
  $$123 = $$123 + $186 * $183;
  $$2 = $$2 + $183 * $183;
  $$8 = $184;
 }
 $$224 = $$123 - $26 * $$2;
 $196 = $$224;
 STACKTOP = sp;
 return +$196;
}

function _opus_packet_parse_impl($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$0 = 0, $$01 = 0, $$015 = 0, $$0158 = 0, $$016 = 0, $$01613 = 0, $$0166 = 0, $$0167 = 0, $$017 = 0, $$02 = 0, $$111 = 0, $$118 = 0, $$132 = 0, $$14 = 0, $$2 = 0, $$219 = 0, $$24 = 0, $$320 = 0, $$4 = 0, $$411 = 0, $$414 = 0, $$41414 = 0, $$4149 = 0, $$415 = 0, $$46 = 0, $$4610 = 0, $$5 = 0, $$6 = 0, $$not = 0, $10 = 0, $101 = 0, $11 = 0, $15 = 0, $17 = 0, $18 = 0, $19 = 0, $21 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $33 = 0, $37 = 0, $38 = 0, $43 = 0, $45 = 0, $47 = 0, $49 = 0, $50 = 0, $51 = 0, $52 = 0, $54 = 0, $62 = 0, $65 = 0, $66 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $79 = 0, $81 = 0, $9 = 0, $95 = 0, $trunc = 0, label = 0;
 if (($5 | 0) == 0 | ($1 | 0) < 0) {
  $$0 = -1;
  return $$0 | 0;
 }
 if (!$1) {
  $$0 = -4;
  return $$0 | 0;
 }
 $trunc = HEAP8[$0 >> 0] | 0;
 $9 = _opus_packet_get_samples_per_frame($trunc, 48e3) | 0;
 $10 = $0 + 1 | 0;
 $11 = $1 + -1 | 0;
 L7 : do switch ($trunc & 3) {
 case 0:
  {
   $$015 = 0;
   $$016 = 1;
   $$4 = $10;
   $$414 = $11;
   $$46 = $11;
   label = 29;
   break;
  }
 case 1:
  {
   if (!$2) if (!($11 & 1)) {
    $15 = ($11 | 0) / 2 | 0;
    HEAP16[$5 >> 1] = $15;
    $$01613 = 2;
    $$41414 = $15;
    $$415 = $10;
    label = 37;
    break L7;
   } else {
    $$0 = -4;
    return $$0 | 0;
   } else {
    $$0158 = 1;
    $$0166 = 2;
    $$411 = $10;
    $$4149 = $11;
    $$4610 = $11;
    label = 30;
   }
   break;
  }
 case 2:
  {
   $17 = _parse_size($10, $11, $5) | 0;
   $18 = $11 - $17 | 0;
   $19 = HEAP16[$5 >> 1] | 0;
   if ($19 << 16 >> 16 < 0) {
    $$0 = -4;
    return $$0 | 0;
   }
   $21 = $19 << 16 >> 16;
   if (($18 | 0) < ($21 | 0)) {
    $$0 = -4;
    return $$0 | 0;
   } else {
    $$015 = 0;
    $$016 = 2;
    $$4 = $10 + $17 | 0;
    $$414 = $18 - $21 | 0;
    $$46 = $18;
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
   $26 = $0 + 2 | 0;
   $27 = HEAP8[$10 >> 0] | 0;
   $28 = $27 & 63;
   $29 = $28 & 255;
   if ($28 << 24 >> 24 == 0 | (Math_imul($9, $29) | 0) > 5760) {
    $$0 = -4;
    return $$0 | 0;
   }
   $33 = $1 + -2 | 0;
   if (!($27 & 64)) {
    $$132 = $33;
    $$14 = $26;
   } else {
    $$01 = $26;
    $$02 = $33;
    while (1) {
     if (($$02 | 0) < 1) {
      $$0 = -4;
      label = 46;
      break;
     }
     $37 = $$01 + 1 | 0;
     $38 = HEAP8[$$01 >> 0] | 0;
     if ($38 << 24 >> 24 != -1) break;
     $$01 = $37;
     $$02 = $$02 + -255 | 0;
    }
    if ((label | 0) == 46) return $$0 | 0;
    $43 = $$02 + -1 - ($38 & 255) | 0;
    if (($43 | 0) < 0) {
     $$0 = -4;
     return $$0 | 0;
    } else {
     $$132 = $43;
     $$14 = $37;
    }
   }
   $45 = ($27 & 255) >>> 7 ^ 1;
   $$not = $45 & 255;
   if ($45 << 24 >> 24) {
    if ($2 | 0) {
     $$0158 = $$not;
     $$0166 = $29;
     $$411 = $$14;
     $$4149 = $11;
     $$4610 = $$132;
     label = 30;
     break L7;
    }
    $62 = ($$132 | 0) / ($29 | 0) | 0;
    if ((Math_imul($62, $29) | 0) != ($$132 | 0)) {
     $$0 = -4;
     return $$0 | 0;
    }
    $65 = $29 + -1 | 0;
    $66 = $62 & 65535;
    $$118 = 0;
    while (1) {
     if (($$118 | 0) >= ($65 | 0)) {
      $$015 = $$not;
      $$016 = $29;
      $$4 = $$14;
      $$414 = $62;
      $$46 = $$132;
      label = 29;
      break L7;
     }
     HEAP16[$5 + ($$118 << 1) >> 1] = $66;
     $$118 = $$118 + 1 | 0;
    }
   }
   $47 = $29 + -1 | 0;
   $$017 = 0;
   $$111 = $$132;
   $$2 = $$14;
   $$24 = $$132;
   while (1) {
    if (($$017 | 0) >= ($47 | 0)) {
     label = 23;
     break;
    }
    $49 = $5 + ($$017 << 1) | 0;
    $50 = _parse_size($$2, $$24, $49) | 0;
    $51 = $$24 - $50 | 0;
    $52 = HEAP16[$49 >> 1] | 0;
    if ($52 << 16 >> 16 < 0) {
     $$0 = -4;
     label = 46;
     break;
    }
    $54 = $52 << 16 >> 16;
    if (($54 | 0) > ($51 | 0)) {
     $$0 = -4;
     label = 46;
     break;
    }
    $$017 = $$017 + 1 | 0;
    $$111 = $$111 - ($50 + $54) | 0;
    $$2 = $$2 + $50 | 0;
    $$24 = $51;
   }
   if ((label | 0) == 23) {
    if (($$111 | 0) < 0) $$0 = -4; else {
     $$015 = $$not;
     $$016 = $29;
     $$4 = $$2;
     $$414 = $$111;
     $$46 = $$24;
     label = 29;
     break L7;
    }
    return $$0 | 0;
   } else if ((label | 0) == 46) return $$0 | 0;
  }
 } while (0);
 if ((label | 0) == 29) if (!$2) {
  $$01613 = $$016;
  $$41414 = $$414;
  $$415 = $$4;
  label = 37;
 } else {
  $$0158 = $$015;
  $$0166 = $$016;
  $$411 = $$4;
  $$4149 = $$414;
  $$4610 = $$46;
  label = 30;
 }
 L59 : do if ((label | 0) == 30) {
  $73 = _parse_size($$411, $$4610, $5 + ($$0166 << 1) + -2 | 0) | 0;
  $74 = $$4610 - $73 | 0;
  $75 = $$0166 + -1 | 0;
  $76 = $5 + ($75 << 1) | 0;
  $77 = HEAP16[$76 >> 1] | 0;
  if ($77 << 16 >> 16 < 0) {
   $$0 = -4;
   return $$0 | 0;
  }
  $79 = $77 << 16 >> 16;
  if (($79 | 0) > ($74 | 0)) {
   $$0 = -4;
   return $$0 | 0;
  }
  $81 = $$411 + $73 | 0;
  if (!$$0158) {
   if (($73 + $79 | 0) > ($$4149 | 0)) $$0 = -4; else {
    $$0167 = $$0166;
    $$5 = $81;
    break;
   }
   return $$0 | 0;
  }
  if ((Math_imul($79, $$0166) | 0) > ($74 | 0)) {
   $$0 = -4;
   return $$0 | 0;
  } else $$219 = 0;
  while (1) {
   if (($$219 | 0) >= ($75 | 0)) {
    $$0167 = $$0166;
    $$5 = $81;
    break L59;
   }
   HEAP16[$5 + ($$219 << 1) >> 1] = HEAP16[$76 >> 1] | 0;
   $$219 = $$219 + 1 | 0;
  }
 } else if ((label | 0) == 37) if (($$41414 | 0) > 1275) {
  $$0 = -4;
  return $$0 | 0;
 } else {
  HEAP16[$5 + ($$01613 + -1 << 1) >> 1] = $$41414;
  $$0167 = $$01613;
  $$5 = $$415;
  break;
 } while (0);
 $95 = ($4 | 0) == 0;
 $$320 = 0;
 $$6 = $$5;
 while (1) {
  if (($$320 | 0) >= ($$0167 | 0)) break;
  if (!$95) HEAP32[$4 + ($$320 << 2) >> 2] = $$6;
  $101 = $$6 + (HEAP16[$5 + ($$320 << 1) >> 1] | 0) | 0;
  $$320 = $$320 + 1 | 0;
  $$6 = $101;
 }
 if (!$3) {
  $$0 = $$0167;
  return $$0 | 0;
 }
 HEAP8[$3 >> 0] = $trunc;
 $$0 = $$0167;
 return $$0 | 0;
}

function _silk_VAD_GetSA_Q8_c($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$ = 0, $$0 = 0, $$013 = 0, $$013$in = 0, $$015 = 0, $$016 = 0, $$04 = 0, $$06 = 0, $$08 = 0, $$09 = 0, $$110 = 0, $$114 = 0, $$13 = 0, $$15 = 0, $$17 = 0, $$2 = 0, $$211 = 0, $$23 = 0, $$3 = 0, $$312 = 0, $$4 = 0, $$sink26 = 0, $10 = 0, $101 = 0, $103 = 0, $11 = 0, $117 = 0, $122 = 0, $13 = 0, $131 = 0, $142 = 0, $144 = 0, $15 = 0, $154 = 0, $159 = 0, $165 = 0, $166 = 0, $169 = 0, $176 = 0, $18 = 0, $2 = 0, $25 = 0, $27 = 0, $3 = 0, $30 = 0, $32 = 0, $36 = 0, $39 = 0, $4 = 0, $46 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $6 = 0, $62 = 0, $67 = 0, $7 = 0, $73 = 0, $75 = 0, $76 = 0, $78 = 0, $8 = 0, $82 = 0, $85 = 0, $86 = 0, $88 = 0, $9 = 0, $93 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 $2 = sp + 32 | 0;
 $3 = sp + 16 | 0;
 $4 = sp;
 $5 = $0 + 32 | 0;
 $6 = $0 + 4580 | 0;
 $7 = HEAP32[$6 >> 2] | 0;
 $8 = $7 >> 1;
 $9 = $7 >> 2;
 $10 = $7 >> 3;
 HEAP32[$4 >> 2] = 0;
 $11 = $10 + $9 | 0;
 HEAP32[$4 + 4 >> 2] = $11;
 $13 = $11 + $10 | 0;
 HEAP32[$4 + 8 >> 2] = $13;
 $15 = $13 + $9 | 0;
 HEAP32[$4 + 12 >> 2] = $15;
 $18 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($15 + $8 << 1) | 0) + 15 & -16) | 0;
 _silk_ana_filt_bank_1($1, $5, $18, $18 + ($15 << 1) | 0, $7);
 _silk_ana_filt_bank_1($18, $0 + 40 | 0, $18, $18 + ($13 << 1) | 0, $8);
 _silk_ana_filt_bank_1($18, $0 + 48 | 0, $18, $18 + ($11 << 1) | 0, $9);
 $25 = $18 + ($10 + -1 << 1) | 0;
 $27 = HEAP16[$25 >> 1] >> 1;
 HEAP16[$25 >> 1] = $27;
 $$013$in = $10;
 $36 = $27;
 while (1) {
  $$013 = $$013$in + -1 | 0;
  if (($$013$in | 0) <= 1) break;
  $30 = $18 + ($$013$in + -2 << 1) | 0;
  $32 = HEAP16[$30 >> 1] >> 1;
  HEAP16[$30 >> 1] = $32;
  HEAP16[$18 + ($$013 << 1) >> 1] = ($36 & 65535) - ($32 & 65535);
  $$013$in = $$013;
  $36 = $32;
 }
 $39 = $0 + 88 | 0;
 HEAP16[$18 >> 1] = (HEAPU16[$18 >> 1] | 0) - (HEAPU16[$39 >> 1] | 0);
 HEAP16[$39 >> 1] = $27;
 $$04 = 0;
 $$09 = 0;
 while (1) {
  if (($$09 | 0) == 4) break;
  $46 = HEAP32[$6 >> 2] | 0;
  $50 = $46 >> (_silk_min_int_217(4 - $$09 | 0, 3) | 0) >> 2;
  $51 = $0 + 56 + ($$09 << 2) | 0;
  $52 = HEAP32[$51 >> 2] | 0;
  $53 = $2 + ($$09 << 2) | 0;
  HEAP32[$53 >> 2] = $52;
  $54 = $4 + ($$09 << 2) | 0;
  $$015 = 0;
  $$08 = 0;
  $$15 = $$04;
  $67 = $52;
  while (1) {
   if (($$08 | 0) == 4) break; else {
    $$114 = 0;
    $$2 = 0;
   }
   while (1) {
    if (($$114 | 0) >= ($50 | 0)) break;
    $62 = HEAP16[$18 + ((HEAP32[$54 >> 2] | 0) + $$114 + $$015 << 1) >> 1] >> 3;
    $$114 = $$114 + 1 | 0;
    $$2 = $$2 + (Math_imul($62, $62) | 0) | 0;
   }
   $$sink26 = $67 + ($$2 >> (($$08 | 0) > 2 & 1)) | 0;
   $$ = ($$sink26 | 0) < 0 ? 2147483647 : $$sink26;
   HEAP32[$53 >> 2] = $$;
   $$015 = $$015 + $50 | 0;
   $$08 = $$08 + 1 | 0;
   $$15 = $$2;
   $67 = $$;
  }
  HEAP32[$51 >> 2] = $$15;
  $$04 = $$15;
  $$09 = $$09 + 1 | 0;
 }
 _silk_VAD_GetNoiseLevels($2, $5);
 $$06 = 0;
 $$110 = 0;
 $$3 = 0;
 while (1) {
  if (($$110 | 0) == 4) break;
  $73 = HEAP32[$2 + ($$110 << 2) >> 2] | 0;
  $75 = HEAP32[$0 + 92 + ($$110 << 2) >> 2] | 0;
  $76 = $73 - $75 | 0;
  if (($76 | 0) > 0) {
   $78 = $73 >>> 0 < 8388608;
   $82 = (($78 ? $73 << 8 : $73) | 0) / (($78 ? $75 : $75 >> 8) + 1 | 0) | 0;
   HEAP32[$3 + ($$110 << 2) >> 2] = $82;
   $85 = (_silk_lin2log($82) | 0) + -1024 | 0;
   $86 = $85 << 16 >> 16;
   $88 = $$3 + (Math_imul($86, $86) | 0) | 0;
   if (($76 | 0) < 1048576) {
    $93 = Math_imul((_silk_SQRT_APPROX_218($76) | 0) << 6 >> 16, $86) | 0;
    $$016 = $93 + ((Math_imul((_silk_SQRT_APPROX_218($76) | 0) << 6 & 65472, $86) | 0) >> 16) | 0;
   } else $$016 = $85;
   $101 = HEAP32[19312 + ($$110 << 2) >> 2] | 0;
   $103 = $$016 << 16 >> 16;
   $$17 = $$06 + ((Math_imul($101 >> 16, $103) | 0) + ((Math_imul($101 & 65535, $103) | 0) >> 16)) | 0;
   $$4 = $88;
  } else {
   HEAP32[$3 + ($$110 << 2) >> 2] = 256;
   $$17 = $$06;
   $$4 = $$3;
  }
  $$06 = $$17;
  $$110 = $$110 + 1 | 0;
  $$3 = $$4;
 }
 $117 = (((_silk_SQRT_APPROX_218(($$3 | 0) / 4 | 0) | 0) * 196608 >> 16) * 45e3 >> 16) + -128 | 0;
 HEAP32[$0 + 4708 >> 2] = ((_silk_sigm_Q15($$06) | 0) << 1) + -32768;
 $$0 = 0;
 $$211 = 0;
 while (1) {
  if (($$211 | 0) == 4) break;
  $122 = $$211 + 1 | 0;
  $$0 = $$0 + (Math_imul($122, (HEAP32[$2 + ($$211 << 2) >> 2] | 0) - (HEAP32[$0 + 92 + ($$211 << 2) >> 2] | 0) >> 4) | 0) | 0;
  $$211 = $122;
 }
 $131 = _silk_sigm_Q15($117) | 0;
 if (($$0 | 0) < 1) $$13 = $131 >> 1; else if (($$0 | 0) < 32768) {
  $142 = (_silk_SQRT_APPROX_218($$0 << ((HEAP32[$6 >> 2] | 0) == ((HEAP32[$0 + 4572 >> 2] | 0) * 10 | 0) ? 16 : 15)) | 0) + 32768 | 0;
  $144 = $131 << 16 >> 16;
  $$13 = (Math_imul($142 >> 16, $144) | 0) + ((Math_imul($142 & 65535, $144) | 0) >> 16) | 0;
 } else $$13 = $131;
 HEAP32[$0 + 4528 >> 2] = _silk_min_int_217($$13 >> 7, 255) | 0;
 $154 = $$13 << 16 >> 16;
 $159 = ((Math_imul($$13 >> 16, $154) | 0) << 16) + (Math_imul($$13 & 65535, $154) | 0) | 0;
 $$23 = $159 >> ((HEAP32[$6 >> 2] | 0) == ((HEAP32[$0 + 4572 >> 2] | 0) * 10 | 0) ? 21 : 20);
 $$312 = 0;
 while (1) {
  if (($$312 | 0) == 4) break;
  $165 = $0 + 72 + ($$312 << 2) | 0;
  $166 = HEAP32[$165 >> 2] | 0;
  $169 = (HEAP32[$3 + ($$312 << 2) >> 2] | 0) - $166 | 0;
  $176 = $166 + ((Math_imul($169 >> 16, $$23) | 0) + ((Math_imul($169 & 65535, $$23) | 0) >> 16)) | 0;
  HEAP32[$165 >> 2] = $176;
  HEAP32[$0 + 4692 + ($$312 << 2) >> 2] = _silk_sigm_Q15(((_silk_lin2log($176) | 0) * 3 | 0) + -5120 >> 4) | 0;
  $$312 = $$312 + 1 | 0;
 }
 STACKTOP = sp;
 return;
}

function _silk_resampler_init($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $$1 = 0, $$sink = 0, $104 = 0, $42 = 0, $51 = 0, $53 = 0, $54 = 0, $60 = 0, $87 = 0, $88 = 0, $89 = 0, $92 = 0, $93 = 0, $95 = 0;
 _memset($0 | 0, 0, 300) | 0;
 if (!$3) {
  L3 : do if (($1 | 0) < 12e3) {
   switch ($1 | 0) {
   case 8e3:
    {
     break L3;
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
     break L3;
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
     break L3;
     break;
    }
   default:
    $$0 = -1;
   }
   return $$0 | 0;
  } while (0);
  L13 : do if (($2 | 0) < 16e3) if (($2 | 0) < 12e3) {
   switch ($2 | 0) {
   case 8e3:
    {
     break L13;
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
     break L13;
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
      break L13;
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
      break L13;
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
      break L13;
      break;
     }
    default:
     $$0 = -1;
    }
    return $$0 | 0;
   }
  } while (0);
  $$sink = (($2 >> 12) - (($2 | 0) > 16e3 & 1) >> (($2 | 0) > 24e3 & 1)) + -1 + (33679 + (((($1 >> 12) - (($1 | 0) > 16e3 & 1) >> (($1 | 0) > 24e3 & 1)) + -1 | 0) * 5 | 0)) | 0;
 } else {
  L32 : do if (($1 | 0) < 16e3) if (($1 | 0) < 12e3) {
   switch ($1 | 0) {
   case 8e3:
    {
     break L32;
     break;
    }
   default:
    $$0 = -1;
   }
   return $$0 | 0;
  } else {
   switch ($1 | 0) {
   case 12e3:
    {
     break L32;
     break;
    }
   default:
    $$0 = -1;
   }
   return $$0 | 0;
  } else {
   if (($1 | 0) < 24e3) {
    switch ($1 | 0) {
    case 16e3:
     {
      break L32;
      break;
     }
    default:
     $$0 = -1;
    }
    return $$0 | 0;
   }
   if (($1 | 0) < 48e3) {
    switch ($1 | 0) {
    case 24e3:
     {
      break L32;
      break;
     }
    default:
     $$0 = -1;
    }
    return $$0 | 0;
   } else {
    switch ($1 | 0) {
    case 48e3:
     {
      break L32;
      break;
     }
    default:
     $$0 = -1;
    }
    return $$0 | 0;
   }
  } while (0);
  L50 : do if (($2 | 0) < 12e3) {
   switch ($2 | 0) {
   case 8e3:
    {
     break L50;
     break;
    }
   default:
    $$0 = -1;
   }
   return $$0 | 0;
  } else if (($2 | 0) < 16e3) {
   switch ($2 | 0) {
   case 12e3:
    {
     break L50;
     break;
    }
   default:
    $$0 = -1;
   }
   return $$0 | 0;
  } else {
   switch ($2 | 0) {
   case 16e3:
    {
     break L50;
     break;
    }
   default:
    $$0 = -1;
   }
   return $$0 | 0;
  } while (0);
  $$sink = (($2 >> 12) - (($2 | 0) > 16e3 & 1) >> (($2 | 0) > 24e3 & 1)) + -1 + (33664 + (((($1 >> 12) - (($1 | 0) > 16e3 & 1) >> (($1 | 0) > 24e3 & 1)) + -1 | 0) * 3 | 0)) | 0;
 }
 HEAP32[$0 + 292 >> 2] = HEAP8[$$sink >> 0];
 $42 = ($1 | 0) / 1e3 | 0;
 HEAP32[$0 + 284 >> 2] = $42;
 HEAP32[$0 + 288 >> 2] = ($2 | 0) / 1e3 | 0;
 HEAP32[$0 + 268 >> 2] = $42 * 10;
 do if (($2 | 0) > ($1 | 0)) {
  $51 = $0 + 264 | 0;
  if (($1 << 1 | 0) == ($2 | 0)) {
   HEAP32[$51 >> 2] = 1;
   $$1 = 0;
   break;
  } else {
   HEAP32[$51 >> 2] = 2;
   $$1 = 1;
   break;
  }
 } else {
  $53 = $0 + 264 | 0;
  if (($2 | 0) >= ($1 | 0)) {
   HEAP32[$53 >> 2] = 0;
   $$1 = 0;
   break;
  }
  HEAP32[$53 >> 2] = 3;
  $54 = $2 << 2;
  if (($54 | 0) == ($1 * 3 | 0)) {
   HEAP32[$0 + 280 >> 2] = 3;
   HEAP32[$0 + 276 >> 2] = 18;
   HEAP32[$0 + 296 >> 2] = 28204;
   $$1 = 0;
   break;
  }
  $60 = $2 * 3 | 0;
  if (($60 | 0) == ($1 << 1 | 0)) {
   HEAP32[$0 + 280 >> 2] = 2;
   HEAP32[$0 + 276 >> 2] = 18;
   HEAP32[$0 + 296 >> 2] = 28262;
   $$1 = 0;
   break;
  }
  if (($2 << 1 | 0) == ($1 | 0)) {
   HEAP32[$0 + 280 >> 2] = 1;
   HEAP32[$0 + 276 >> 2] = 24;
   HEAP32[$0 + 296 >> 2] = 28302;
   $$1 = 0;
   break;
  }
  if (($60 | 0) == ($1 | 0)) {
   HEAP32[$0 + 280 >> 2] = 1;
   HEAP32[$0 + 276 >> 2] = 36;
   HEAP32[$0 + 296 >> 2] = 28330;
   $$1 = 0;
   break;
  }
  if (($54 | 0) == ($1 | 0)) {
   HEAP32[$0 + 280 >> 2] = 1;
   HEAP32[$0 + 276 >> 2] = 36;
   HEAP32[$0 + 296 >> 2] = 28370;
   $$1 = 0;
   break;
  }
  if (($2 * 6 | 0) == ($1 | 0)) {
   HEAP32[$0 + 280 >> 2] = 1;
   HEAP32[$0 + 276 >> 2] = 36;
   HEAP32[$0 + 296 >> 2] = 28410;
   $$1 = 0;
   break;
  } else {
   $$0 = -1;
   return $$0 | 0;
  }
 } while (0);
 $87 = (($1 << ($$1 | 14) | 0) / ($2 | 0) | 0) << 2;
 $88 = $0 + 272 | 0;
 HEAP32[$88 >> 2] = $87;
 $89 = $2 << 16 >> 16;
 $92 = ($2 >> 15) + 1 >> 1;
 $93 = $1 << $$1;
 $95 = $87;
 while (1) {
  if (((Math_imul($95 >> 16, $89) | 0) + ((Math_imul($95 & 65535, $89) | 0) >> 16) + (Math_imul($95, $92) | 0) | 0) >= ($93 | 0)) {
   $$0 = 0;
   break;
  }
  $104 = $95 + 1 | 0;
  HEAP32[$88 >> 2] = $104;
  $95 = $104;
 }
 return $$0 | 0;
}

function _compute_allocation($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17) {
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
 var $$ = 0, $$0 = 0, $$01 = 0, $$011 = 0, $$015 = 0, $$018 = 0, $$02 = 0, $$020 = 0, $$03$ph = 0, $$03$ph3 = 0, $$05$ph = 0, $$1 = 0, $$110 = 0, $$114 = 0, $$116 = 0, $$116$ph = 0, $$116$ph2 = 0, $$18 = 0, $$217 = 0, $103 = 0, $107 = 0, $112 = 0, $117 = 0, $118 = 0, $119 = 0, $121 = 0, $122 = 0, $130 = 0, $131 = 0, $138 = 0, $152 = 0, $155 = 0, $158 = 0, $161 = 0, $163 = 0, $170 = 0, $20 = 0, $22 = 0, $23 = 0, $28 = 0, $30 = 0, $32 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $41 = 0, $42 = 0, $44 = 0, $45 = 0, $52 = 0, $56 = 0, $65 = 0, $71 = 0, $73 = 0, $75 = 0, $76 = 0, $79 = 0, $87 = 0, $95 = 0, $99 = 0, sp = 0, $$116$looptemp = 0;
 sp = STACKTOP;
 $$ = ($8 | 0) > 0 ? $8 : 0;
 $20 = HEAP32[$0 + 8 >> 2] | 0;
 $22 = ($$ | 0) > 7 ? 8 : 0;
 $23 = $$ - $22 | 0;
 if (($13 | 0) == 2) {
  $28 = HEAPU8[29898 + ($2 - $1) >> 0] | 0;
  if (($23 | 0) < ($28 | 0)) {
   $$110 = 0;
   $$114 = $23;
   $$18 = 0;
  } else {
   $30 = $23 - $28 | 0;
   $32 = ($30 | 0) > 7 ? 8 : 0;
   $$110 = $28;
   $$114 = $30 - $32 | 0;
   $$18 = $32;
  }
 } else {
  $$110 = 0;
  $$114 = $23;
  $$18 = 0;
 }
 $34 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($20 << 2) | 0) + 15 & -16) | 0;
 $35 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($20 << 2) | 0) + 15 & -16) | 0;
 $36 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($20 << 2) | 0) + 15 & -16) | 0;
 $37 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($20 << 2) | 0) + 15 & -16) | 0;
 $38 = $13 << 3;
 $39 = $0 + 32 | 0;
 $41 = $5 + -5 - $14 | 0;
 $42 = $14 + 3 | 0;
 $$015 = $1;
 while (1) {
  if (($$015 | 0) >= ($2 | 0)) break;
  $44 = HEAP32[$39 >> 2] | 0;
  $45 = $$015 + 1 | 0;
  $52 = (HEAP16[$44 + ($45 << 1) >> 1] | 0) - (HEAP16[$44 + ($$015 << 1) >> 1] | 0) | 0;
  $56 = $52 * 3 << $14 << 3 >> 4;
  HEAP32[$36 + ($$015 << 2) >> 2] = ($38 | 0) > ($56 | 0) ? $38 : $56;
  $65 = (Math_imul(Math_imul(Math_imul($52, $13) | 0, $41) | 0, $2 - $$015 + -1 | 0) | 0) << $42 >> 6;
  HEAP32[$37 + ($$015 << 2) >> 2] = $65 - (($52 << $14 | 0) == 1 ? $38 : 0);
  $$015 = $45;
 }
 $71 = HEAP32[$0 + 48 >> 2] | 0;
 $73 = $0 + 52 | 0;
 $$018 = $71 + -1 | 0;
 $$020 = 1;
 do {
  $75 = $$020 + $$018 >> 1;
  $76 = Math_imul($75, $20) | 0;
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
     $79 = HEAP32[$39 >> 2] | 0;
     $87 = Math_imul((HEAP16[$79 + ($$116$looptemp << 1) >> 1] | 0) - (HEAP16[$79 + ($$116 << 1) >> 1] | 0) | 0, $13) | 0;
     $95 = (Math_imul($87, HEAPU8[(HEAP32[$73 >> 2] | 0) + ($76 + $$116) >> 0] | 0) | 0) << $14 >> 2;
     if (($95 | 0) > 0) {
      $99 = $95 + (HEAP32[$37 + ($$116 << 2) >> 2] | 0) | 0;
      $$02 = ($99 | 0) > 0 ? $99 : 0;
     } else $$02 = $95;
     $103 = $$02 + (HEAP32[$3 + ($$116 << 2) >> 2] | 0) | 0;
     if (($103 | 0) >= (HEAP32[$36 + ($$116 << 2) >> 2] | 0) | $$05$ph) break L13;
    } while (($103 | 0) < ($38 | 0));
    $$03$ph3 = $$03$ph3 + $38 | 0;
    $$116$ph2 = $$116;
   }
   $107 = HEAP32[$4 + ($$116 << 2) >> 2] | 0;
   $$03$ph = $$03$ph3 + (($103 | 0) < ($107 | 0) ? $103 : $107) | 0;
   $$05$ph = 1;
   $$116$ph = $$116;
  }
  $112 = ($$03$ph3 | 0) > ($$114 | 0);
  $$020 = $112 ? $$020 : $75 + 1 | 0;
  $$018 = $112 ? $75 + -1 | 0 : $$018;
 } while (($$020 | 0) <= ($$018 | 0));
 $117 = Math_imul($$020 + -1 | 0, $20) | 0;
 $118 = Math_imul($$020, $20) | 0;
 $119 = ($$020 | 0) > 1;
 $$011 = $1;
 $$217 = $1;
 while (1) {
  if (($$217 | 0) >= ($2 | 0)) break;
  $121 = HEAP32[$39 >> 2] | 0;
  $122 = $$217 + 1 | 0;
  $130 = Math_imul((HEAP16[$121 + ($122 << 1) >> 1] | 0) - (HEAP16[$121 + ($$217 << 1) >> 1] | 0) | 0, $13) | 0;
  $131 = HEAP32[$73 >> 2] | 0;
  $138 = (Math_imul($130, HEAPU8[$131 + ($117 + $$217) >> 0] | 0) | 0) << $14 >> 2;
  if (($$020 | 0) < ($71 | 0)) $155 = (Math_imul($130, HEAPU8[$131 + ($118 + $$217) >> 0] | 0) | 0) << $14 >> 2; else $155 = HEAP32[$4 + ($$217 << 2) >> 2] | 0;
  if (($138 | 0) > 0) {
   $152 = $138 + (HEAP32[$37 + ($$217 << 2) >> 2] | 0) | 0;
   $$01 = ($152 | 0) > 0 ? $152 : 0;
  } else $$01 = $138;
  if (($155 | 0) > 0) {
   $158 = $155 + (HEAP32[$37 + ($$217 << 2) >> 2] | 0) | 0;
   $$0 = ($158 | 0) > 0 ? $158 : 0;
  } else $$0 = $155;
  $161 = HEAP32[$3 + ($$217 << 2) >> 2] | 0;
  $$1 = $$01 + ($119 ? $161 : 0) | 0;
  $163 = $$0 + $161 | 0;
  HEAP32[$34 + ($$217 << 2) >> 2] = $$1;
  HEAP32[$35 + ($$217 << 2) >> 2] = ($163 | 0) < ($$1 | 0) ? 0 : $163 - $$1 | 0;
  $$011 = ($161 | 0) > 0 ? $$217 : $$011;
  $$217 = $122;
 }
 $170 = _interp_bits2pulses($0, $1, $2, $$011, $34, $35, $36, $4, $$114, $9, $22, $6, $$110, $7, $$18, $10, $11, $12, $13, $14, $15, 1, $16, $17) | 0;
 STACKTOP = sp;
 return $170 | 0;
}

function _silk_nsq_del_dec_scale_states($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) {
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
 var $$0 = 0, $$01 = 0, $$02 = 0, $$1 = 0, $$2 = 0, $$3 = 0, $$4 = 0, $$5 = 0, $$6 = 0, $102 = 0, $103 = 0, $107 = 0, $109 = 0, $110 = 0, $111 = 0, $123 = 0, $124 = 0, $125 = 0, $135 = 0, $136 = 0, $137 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $17 = 0, $173 = 0, $174 = 0, $175 = 0, $185 = 0, $186 = 0, $187 = 0, $19 = 0, $21 = 0, $23 = 0, $24 = 0, $27 = 0, $31 = 0, $32 = 0, $43 = 0, $48 = 0, $55 = 0, $56 = 0, $59 = 0, $60 = 0, $62 = 0, $65 = 0, $72 = 0, $73 = 0, $74 = 0, $76 = 0, $77 = 0, $78 = 0, $82 = 0, $83 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0;
 $15 = HEAP32[$11 + ($7 << 2) >> 2] | 0;
 $16 = $10 + ($7 << 2) | 0;
 $17 = HEAP32[$16 >> 2] | 0;
 $19 = _silk_INVERSE32_varQ_119(($17 | 0) > 1 ? $17 : 1) | 0;
 $21 = ($19 >> 4) + 1 | 0;
 $23 = $0 + 4584 | 0;
 $24 = $21 >>> 1 << 16 >> 16;
 $27 = ($21 >> 16) + 1 >> 1;
 $$02 = 0;
 while (1) {
  if (($$02 | 0) >= (HEAP32[$23 >> 2] | 0)) break;
  $31 = HEAP16[$3 + ($$02 << 1) >> 1] | 0;
  $32 = $31 << 16 >> 16;
  HEAP32[$4 + ($$02 << 2) >> 2] = (Math_imul($32 >> 16, $24) | 0) + ((Math_imul($31 & 65535, $24) | 0) >> 16) + (Math_imul($32, $27) | 0);
  $$02 = $$02 + 1 | 0;
 }
 $43 = $1 + 4348 | 0;
 L5 : do if (HEAP32[$43 >> 2] | 0) {
  if (!$7) {
   $48 = $9 << 16 >> 16;
   $$0 = (Math_imul($19 >> 16, $48) | 0) + ((Math_imul($19 & 65535, $48) | 0) >> 16) << 2;
  } else $$0 = $19;
  $55 = $1 + 4332 | 0;
  $56 = HEAP32[$55 >> 2] | 0;
  $59 = $$0 >> 16;
  $60 = $$0 & 65535;
  $$1 = $56 - $15 + -2 | 0;
  $62 = $56;
  while (1) {
   if (($$1 | 0) >= ($62 | 0)) break L5;
   $65 = HEAP16[$5 + ($$1 << 1) >> 1] | 0;
   HEAP32[$6 + ($$1 << 2) >> 2] = (Math_imul($59, $65) | 0) + ((Math_imul($60, $65) | 0) >> 16);
   $$1 = $$1 + 1 | 0;
   $62 = HEAP32[$55 >> 2] | 0;
  }
 } while (0);
 $72 = HEAP32[$16 >> 2] | 0;
 $73 = $1 + 4344 | 0;
 $74 = HEAP32[$73 >> 2] | 0;
 if (($72 | 0) == ($74 | 0)) return;
 $76 = _silk_DIV32_varQ_120($74, $72) | 0;
 $77 = $1 + 4336 | 0;
 $78 = HEAP32[$77 >> 2] | 0;
 $82 = $76 >> 16;
 $83 = $76 & 65535;
 $$2 = $78 - (HEAP32[$0 + 4588 >> 2] | 0) | 0;
 $85 = $78;
 while (1) {
  if (($$2 | 0) >= ($85 | 0)) break;
  $86 = $1 + 1280 + ($$2 << 2) | 0;
  $87 = HEAP32[$86 >> 2] | 0;
  $88 = $87 << 16 >> 16;
  HEAP32[$86 >> 2] = (Math_imul($82, $88) | 0) + ((Math_imul($83, $88) | 0) >> 16) + (Math_imul($76, ($87 >> 15) + 1 >> 1) | 0);
  $$2 = $$2 + 1 | 0;
  $85 = HEAP32[$77 >> 2] | 0;
 }
 L21 : do if (($12 | 0) == 2) if (!(HEAP32[$43 >> 2] | 0)) {
  $102 = $1 + 4332 | 0;
  $103 = HEAP32[$102 >> 2] | 0;
  $$3 = $103 - $15 + -2 | 0;
  $107 = $103;
  while (1) {
   if (($$3 | 0) >= ($107 - $13 | 0)) {
    $$01 = 0;
    break L21;
   }
   $109 = $6 + ($$3 << 2) | 0;
   $110 = HEAP32[$109 >> 2] | 0;
   $111 = $110 << 16 >> 16;
   HEAP32[$109 >> 2] = (Math_imul($82, $111) | 0) + ((Math_imul($83, $111) | 0) >> 16) + (Math_imul($76, ($110 >> 15) + 1 >> 1) | 0);
   $$3 = $$3 + 1 | 0;
   $107 = HEAP32[$102 >> 2] | 0;
  }
 } else $$01 = 0; else $$01 = 0; while (0);
 while (1) {
  if (($$01 | 0) >= ($8 | 0)) break;
  $123 = $2 + ($$01 * 1300 | 0) + 1280 | 0;
  $124 = HEAP32[$123 >> 2] | 0;
  $125 = $124 << 16 >> 16;
  HEAP32[$123 >> 2] = (Math_imul($82, $125) | 0) + ((Math_imul($83, $125) | 0) >> 16) + (Math_imul($76, ($124 >> 15) + 1 >> 1) | 0);
  $135 = $2 + ($$01 * 1300 | 0) + 1284 | 0;
  $136 = HEAP32[$135 >> 2] | 0;
  $137 = $136 << 16 >> 16;
  HEAP32[$135 >> 2] = (Math_imul($82, $137) | 0) + ((Math_imul($83, $137) | 0) >> 16) + (Math_imul($76, ($136 >> 15) + 1 >> 1) | 0);
  $$4 = 0;
  while (1) {
   if (($$4 | 0) == 16) {
    $$5 = 0;
    break;
   }
   $147 = $2 + ($$01 * 1300 | 0) + ($$4 << 2) | 0;
   $148 = HEAP32[$147 >> 2] | 0;
   $149 = $148 << 16 >> 16;
   HEAP32[$147 >> 2] = (Math_imul($82, $149) | 0) + ((Math_imul($83, $149) | 0) >> 16) + (Math_imul($76, ($148 >> 15) + 1 >> 1) | 0);
   $$4 = $$4 + 1 | 0;
  }
  while (1) {
   if (($$5 | 0) == 24) {
    $$6 = 0;
    break;
   }
   $160 = $2 + ($$01 * 1300 | 0) + 1184 + ($$5 << 2) | 0;
   $161 = HEAP32[$160 >> 2] | 0;
   $162 = $161 << 16 >> 16;
   HEAP32[$160 >> 2] = (Math_imul($82, $162) | 0) + ((Math_imul($83, $162) | 0) >> 16) + (Math_imul($76, ($161 >> 15) + 1 >> 1) | 0);
   $$5 = $$5 + 1 | 0;
  }
  while (1) {
   if (($$6 | 0) == 40) break;
   $173 = $2 + ($$01 * 1300 | 0) + 864 + ($$6 << 2) | 0;
   $174 = HEAP32[$173 >> 2] | 0;
   $175 = $174 << 16 >> 16;
   HEAP32[$173 >> 2] = (Math_imul($82, $175) | 0) + ((Math_imul($83, $175) | 0) >> 16) + (Math_imul($76, ($174 >> 15) + 1 >> 1) | 0);
   $185 = $2 + ($$01 * 1300 | 0) + 1024 + ($$6 << 2) | 0;
   $186 = HEAP32[$185 >> 2] | 0;
   $187 = $186 << 16 >> 16;
   HEAP32[$185 >> 2] = (Math_imul($82, $187) | 0) + ((Math_imul($83, $187) | 0) >> 16) + (Math_imul($76, ($186 >> 15) + 1 >> 1) | 0);
   $$6 = $$6 + 1 | 0;
  }
  $$01 = $$01 + 1 | 0;
 }
 HEAP32[$73 >> 2] = HEAP32[$16 >> 2];
 return;
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

function _tf_analysis($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
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
 var $$010 = 0, $$014 = 0, $$016 = 0, $$018 = 0, $$08 = 0, $$0926 = 0, $$111 = 0, $$115 = 0, $$117 = 0, $$2 = 0, $$212 = 0, $$26 = 0.0, $$313 = 0, $$sink34 = 0, $10 = 0, $11 = 0.0, $112 = 0, $113 = 0, $115 = 0, $117 = 0, $118 = 0, $120 = 0, $121 = 0, $124 = 0, $128 = 0, $132 = 0, $138 = 0, $14 = 0.0, $144 = 0, $15 = 0, $16 = 0, $17 = 0, $21 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $37 = 0, $38 = 0, $39 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $52 = 0, $54 = 0.0, $56 = 0.0, $67 = 0.0, $68 = 0, $69 = 0, $70 = 0, $72 = 0, $73 = 0, $78 = 0, $79 = 0, $81 = 0, $83 = 0, $85 = 0, $89 = 0, $93 = 0, $97 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 $10 = sp;
 $11 = .5 - $8;
 $14 = ($11 < -.25 ? -.25 : $11) * .03999999910593033;
 $15 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($1 << 2) | 0) + 15 & -16) | 0;
 $16 = $0 + 32 | 0;
 $17 = HEAP32[$16 >> 2] | 0;
 $21 = $1 + -1 | 0;
 $26 = (HEAP16[$17 + ($1 << 1) >> 1] | 0) - (HEAP16[$17 + ($21 << 1) >> 1] | 0) << $7;
 $27 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($26 << 2) | 0) + 15 & -16) | 0;
 $28 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($26 << 2) | 0) + 15 & -16) | 0;
 $29 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($1 << 2) | 0) + 15 & -16) | 0;
 $30 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($1 << 2) | 0) + 15 & -16) | 0;
 $31 = Math_imul($9, $6) | 0;
 $32 = ($2 | 0) == 0;
 $33 = 1 << $7;
 $34 = $7 + 1 | 0;
 $35 = Math_imul($7, -2) | 0;
 $$010 = 0;
 while (1) {
  if (($$010 | 0) >= ($1 | 0)) break;
  $38 = HEAP32[$16 >> 2] | 0;
  $39 = $$010 + 1 | 0;
  $45 = HEAP16[$38 + ($$010 << 1) >> 1] | 0;
  $46 = (HEAP16[$38 + ($39 << 1) >> 1] | 0) - $45 | 0;
  $47 = $46 << $7;
  $48 = ($46 | 0) == 1;
  $52 = $47 << 2;
  _memcpy($27 | 0, $5 + ($31 + ($45 << $7) << 2) | 0, $52 | 0) | 0;
  if ($32) {
   $$08 = 0;
   $$2 = 0;
   $$26 = +_l1_metric($27, $47, 0, $14);
  } else {
   $54 = +_l1_metric($27, $47, $7, $14);
   if ($48) {
    $$08 = 0;
    $$2 = 0;
    $$26 = $54;
   } else {
    _memcpy($28 | 0, $27 | 0, $52 | 0) | 0;
    _haar1($28, $47 >> $7, $33);
    $56 = +_l1_metric($28, $47, $34, $14);
    if ($56 < $54) {
     $$08 = 0;
     $$2 = -1;
     $$26 = $56;
    } else {
     $$08 = 0;
     $$2 = 0;
     $$26 = $54;
    }
   }
  }
  while (1) {
   if (($$08 | 0) >= (($32 & ($48 ^ 1) & 1) + $7 | 0)) break;
   _haar1($27, $47 >> $$08, 1 << $$08);
   $67 = +_l1_metric($27, $47, $32 ? $$08 + 1 | 0 : $7 - $$08 + -1 | 0, $14);
   $68 = $67 < $$26;
   $69 = $$08 + 1 | 0;
   $$08 = $69;
   $$2 = $68 ? $69 : $$2;
   $$26 = $68 ? $67 : $$26;
  }
  $70 = Math_imul($$2, -2) | 0;
  $72 = $32 ? $70 : $$2 << 1;
  $73 = $15 + ($$010 << 2) | 0;
  HEAP32[$73 >> 2] = $72;
  if (!$48) {
   $$010 = $39;
   continue;
  }
  if (!(($72 | 0) == 0 | ($72 | 0) == ($35 | 0))) {
   $$010 = $39;
   continue;
  }
  HEAP32[$73 >> 2] = $72 + -1;
  $$010 = $39;
 }
 $37 = $2 << 2;
 $$018 = 0;
 while (1) {
  if (($$018 | 0) == 2) break;
  $78 = $37 + ($$018 << 1) | 0;
  $79 = 28590 + ($7 << 3) + $78 | 0;
  $81 = ($78 | 1) + (28590 + ($7 << 3)) | 0;
  $$014 = 0;
  $$016 = $32 ? $4 : 0;
  $$111 = 1;
  while (1) {
   if (($$111 | 0) >= ($1 | 0)) break;
   $83 = $$016 + $4 | 0;
   $85 = $$014 + $4 | 0;
   $89 = HEAP32[$15 + ($$111 << 2) >> 2] | 0;
   $93 = $89 - (HEAP8[$79 >> 0] << 1) | 0;
   $97 = $89 - (HEAP8[$81 >> 0] << 1) | 0;
   $$014 = (($$014 | 0) < ($83 | 0) ? $$014 : $83) + (($93 | 0) > -1 ? $93 : 0 - $93 | 0) | 0;
   $$016 = (($85 | 0) < ($$016 | 0) ? $85 : $$016) + (($97 | 0) > -1 ? $97 : 0 - $97 | 0) | 0;
   $$111 = $$111 + 1 | 0;
  }
  HEAP32[$10 + ($$018 << 2) >> 2] = ($$014 | 0) < ($$016 | 0) ? $$014 : $$016;
  $$018 = $$018 + 1 | 0;
 }
 $$0926 = (HEAP32[$10 + 4 >> 2] | 0) < (HEAP32[$10 >> 2] | 0) & ($32 ^ 1) & 1;
 $112 = $37 | $$0926 << 1;
 $113 = 28590 + ($7 << 3) + $112 | 0;
 $115 = ($112 | 1) + (28590 + ($7 << 3)) | 0;
 $$115 = 0;
 $$117 = $32 ? $4 : 0;
 $$212 = 1;
 while (1) {
  if (($$212 | 0) >= ($1 | 0)) break;
  $117 = $$117 + $4 | 0;
  $118 = ($$115 | 0) < ($117 | 0);
  HEAP32[$29 + ($$212 << 2) >> 2] = ($118 ^ 1) & 1;
  $120 = $$115 + $4 | 0;
  $121 = ($120 | 0) < ($$117 | 0);
  HEAP32[$30 + ($$212 << 2) >> 2] = ($121 ^ 1) & 1;
  $124 = HEAP32[$15 + ($$212 << 2) >> 2] | 0;
  $128 = $124 - (HEAP8[$113 >> 0] << 1) | 0;
  $132 = $124 - (HEAP8[$115 >> 0] << 1) | 0;
  $$115 = ($118 ? $$115 : $117) + (($128 | 0) > -1 ? $128 : 0 - $128 | 0) | 0;
  $$117 = ($121 ? $120 : $$117) + (($132 | 0) > -1 ? $132 : 0 - $132 | 0) | 0;
  $$212 = $$212 + 1 | 0;
 }
 $138 = ($$115 | 0) >= ($$117 | 0) & 1;
 HEAP32[$3 + ($21 << 2) >> 2] = $138;
 $$313 = $1 + -2 | 0;
 $144 = $138;
 while (1) {
  if (($$313 | 0) <= -1) break;
  $$sink34 = HEAP32[(($144 | 0) == 1 ? $30 : $29) + ($$313 + 1 << 2) >> 2] | 0;
  HEAP32[$3 + ($$313 << 2) >> 2] = $$sink34;
  $$313 = $$313 + -1 | 0;
  $144 = $$sink34;
 }
 STACKTOP = sp;
 return $$0926 | 0;
}

function _silk_encode_pulses($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $$0 = 0, $$01 = 0, $$012 = 0, $$012$in = 0, $$013 = 0, $$02 = 0, $$04 = 0, $$06 = 0, $$08 = 0, $$17 = 0, $$19 = 0, $$2 = 0, $$210 = 0, $$3 = 0, $$311 = 0, $$4 = 0, $$5 = 0, $$sink19 = 0, $107 = 0, $11 = 0, $110 = 0, $112 = 0, $114 = 0, $117 = 0, $12 = 0, $15 = 0, $17 = 0, $21 = 0, $23 = 0, $25 = 0, $29 = 0, $31 = 0, $33 = 0, $37 = 0, $39 = 0, $41 = 0, $46 = 0, $47 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $54 = 0, $56 = 0, $6 = 0, $62 = 0, $71 = 0, $82 = 0, $85 = 0, $88 = 0, $9 = 0, $92 = 0, dest = 0, sp = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 $5 = sp;
 HEAP32[$5 >> 2] = 0;
 HEAP32[$5 + 4 >> 2] = 0;
 HEAP32[$5 + 8 >> 2] = 0;
 HEAP32[$5 + 12 >> 2] = 0;
 HEAP32[$5 + 16 >> 2] = 0;
 HEAP32[$5 + 20 >> 2] = 0;
 HEAP32[$5 + 24 >> 2] = 0;
 HEAP32[$5 + 28 >> 2] = 0;
 $6 = $4 >> 4;
 if (($6 << 4 | 0) < ($4 | 0)) {
  $9 = $6 + 1 | 0;
  dest = $3 + $4 | 0;
  stop = dest + 16 | 0;
  do {
   HEAP8[dest >> 0] = 0;
   dest = dest + 1 | 0;
  } while ((dest | 0) < (stop | 0));
  $$013 = $9;
 } else $$013 = $6;
 $11 = $$013 << 4;
 $12 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($11 << 2) | 0) + 15 & -16) | 0;
 $$06 = 0;
 while (1) {
  if (($$06 | 0) >= ($11 | 0)) break;
  $15 = HEAP8[$3 + $$06 >> 0] | 0;
  $17 = $15 << 24 >> 24;
  HEAP32[$12 + ($$06 << 2) >> 2] = $15 << 24 >> 24 > 0 ? $17 : 0 - $17 | 0;
  $21 = $$06 | 1;
  $23 = HEAP8[$3 + $21 >> 0] | 0;
  $25 = $23 << 24 >> 24;
  HEAP32[$12 + ($21 << 2) >> 2] = $23 << 24 >> 24 > 0 ? $25 : 0 - $25 | 0;
  $29 = $$06 | 2;
  $31 = HEAP8[$3 + $29 >> 0] | 0;
  $33 = $31 << 24 >> 24;
  HEAP32[$12 + ($29 << 2) >> 2] = $31 << 24 >> 24 > 0 ? $33 : 0 - $33 | 0;
  $37 = $$06 | 3;
  $39 = HEAP8[$3 + $37 >> 0] | 0;
  $41 = $39 << 24 >> 24;
  HEAP32[$12 + ($37 << 2) >> 2] = $39 << 24 >> 24 > 0 ? $41 : 0 - $41 | 0;
  $$06 = $$06 + 4 | 0;
 }
 $46 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($$013 << 2) | 0) + 15 & -16) | 0;
 $47 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($$013 << 2) | 0) + 15 & -16) | 0;
 $$0 = $12;
 $$17 = 0;
 while (1) {
  if (($$17 | 0) >= ($$013 | 0)) break;
  $50 = $47 + ($$17 << 2) | 0;
  HEAP32[$50 >> 2] = 0;
  $51 = $46 + ($$17 << 2) | 0;
  L11 : while (1) {
   $52 = _combine_and_check($5, $$0, 8, 8) | 0;
   $54 = $52 + (_combine_and_check($5, $5, 10, 4) | 0) | 0;
   $56 = $54 + (_combine_and_check($5, $5, 12, 2) | 0) | 0;
   if (($56 | 0) == (0 - (_combine_and_check($51, $5, 16, 1) | 0) | 0)) break;
   HEAP32[$50 >> 2] = (HEAP32[$50 >> 2] | 0) + 1;
   $$08 = 0;
   while (1) {
    if (($$08 | 0) == 16) continue L11;
    $62 = $$0 + ($$08 << 2) | 0;
    HEAP32[$62 >> 2] = HEAP32[$62 >> 2] >> 1;
    $$08 = $$08 + 1 | 0;
   }
  }
  $$0 = $$0 + 64 | 0;
  $$17 = $$17 + 1 | 0;
 }
 $49 = $1 >> 1;
 $$02 = 2147483647;
 $$04 = 0;
 $$19 = 0;
 while (1) {
  if (($$19 | 0) == 9) break;
  $71 = 32532 + ($$19 * 18 | 0) + 17 | 0;
  $$01 = HEAPU8[32712 + ($49 * 9 | 0) + $$19 >> 0] | 0;
  $$2 = 0;
  while (1) {
   if (($$2 | 0) >= ($$013 | 0)) break;
   if ((HEAP32[$47 + ($$2 << 2) >> 2] | 0) > 0) $$sink19 = $71; else $$sink19 = (HEAP32[$46 + ($$2 << 2) >> 2] | 0) + (32532 + ($$19 * 18 | 0)) | 0;
   $$01 = $$01 + (HEAPU8[$$sink19 >> 0] | 0) | 0;
   $$2 = $$2 + 1 | 0;
  }
  $82 = ($$01 | 0) < ($$02 | 0);
  $$02 = $82 ? $$01 : $$02;
  $$04 = $82 ? $$19 : $$04;
  $$19 = $$19 + 1 | 0;
 }
 _ec_enc_icdf($0, $$04, 32694 + ($49 * 9 | 0) | 0, 8);
 $85 = 32352 + ($$04 * 18 | 0) | 0;
 $$3 = 0;
 while (1) {
  if (($$3 | 0) >= ($$013 | 0)) {
   $$4 = 0;
   break;
  }
  $88 = HEAP32[$47 + ($$3 << 2) >> 2] | 0;
  if (!$88) _ec_enc_icdf($0, HEAP32[$46 + ($$3 << 2) >> 2] | 0, $85, 8); else {
   _ec_enc_icdf($0, 17, $85, 8);
   $92 = $88 + -1 | 0;
   $$210 = 0;
   while (1) {
    if (($$210 | 0) >= ($92 | 0)) break;
    _ec_enc_icdf($0, 17, 32514, 8);
    $$210 = $$210 + 1 | 0;
   }
   _ec_enc_icdf($0, HEAP32[$46 + ($$3 << 2) >> 2] | 0, 32514, 8);
  }
  $$3 = $$3 + 1 | 0;
 }
 while (1) {
  if (($$4 | 0) >= ($$013 | 0)) {
   $$5 = 0;
   break;
  }
  if ((HEAP32[$46 + ($$4 << 2) >> 2] | 0) > 0) _silk_shell_encoder($0, $12 + ($$4 << 4 << 2) | 0);
  $$4 = $$4 + 1 | 0;
 }
 while (1) {
  if (($$5 | 0) >= ($$013 | 0)) break;
  $107 = HEAP32[$47 + ($$5 << 2) >> 2] | 0;
  L50 : do if (($107 | 0) > 0) {
   $110 = $3 + ($$5 << 4) | 0;
   $$311 = 0;
   while (1) {
    if (($$311 | 0) == 16) break L50;
    $112 = HEAP8[$110 + $$311 >> 0] | 0;
    $114 = $112 << 24 >> 24;
    $117 = ($112 << 24 >> 24 > 0 ? $114 : 0 - $114 | 0) << 24 >> 24;
    $$012$in = $107;
    while (1) {
     $$012 = $$012$in + -1 | 0;
     if (($$012$in | 0) <= 1) break;
     _ec_enc_icdf($0, $117 >>> $$012 & 1, 32190, 8);
     $$012$in = $$012;
    }
    _ec_enc_icdf($0, $117 & 1, 32190, 8);
    $$311 = $$311 + 1 | 0;
   }
  } while (0);
  $$5 = $$5 + 1 | 0;
 }
 _silk_encode_signs($0, $3, $4, $1, $2, $46);
 STACKTOP = sp;
 return;
}

function _run_prefilter($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) {
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
 var $$ = 0.0, $$0 = 0, $$01 = 0, $$08 = 0, $$110 = 0.0, $$19 = 0, $$2 = 0.0, $$20 = 0.0, $$3 = 0.0, $$36 = 0.0, $$4 = 0.0, $$5 = 0.0, $$alloca_mul = 0, $$pre$phiZ2D = 0, $100 = 0, $102 = 0, $106 = 0, $108 = 0, $11 = 0, $110 = 0.0, $111 = 0, $114 = 0, $115 = 0, $12 = 0, $125 = 0, $13 = 0, $130 = 0, $132 = 0, $133 = 0, $15 = 0, $16 = 0, $18 = 0, $21 = 0, $22 = 0, $24 = 0, $35 = 0, $36 = 0, $40 = 0, $44 = 0.0, $45 = 0, $47 = 0.0, $49 = 0, $55 = 0, $56 = 0, $57 = 0, $65 = 0, $66 = 0.0, $75 = 0, $79 = 0, $80 = 0, $83 = 0, $86 = 0, $87 = 0, $88 = 0.0, $89 = 0, $90 = 0, $91 = 0, $93 = 0, $94 = 0, $96 = 0, $98 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 $11 = sp + 8 | 0;
 $12 = sp;
 $13 = HEAP32[$0 >> 2] | 0;
 $15 = HEAP32[$13 + 4 >> 2] | 0;
 $16 = $4 + 1024 | 0;
 $$alloca_mul = (Math_imul($16, $3) | 0) << 2;
 $18 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * $$alloca_mul | 0) + 15 & -16) | 0;
 HEAP32[$11 >> 2] = $18;
 HEAP32[$11 + 4 >> 2] = $18 + ($16 << 2);
 $21 = $15 + $4 | 0;
 $22 = $4 << 2;
 $$08 = 0;
 do {
  $24 = HEAP32[$11 + ($$08 << 2) >> 2] | 0;
  _memcpy($24 | 0, $2 + ($$08 << 10 << 2) | 0, 4096) | 0;
  _memcpy($24 + 4096 | 0, $1 + ((Math_imul($$08, $21) | 0) << 2) + ($15 << 2) | 0, $22 | 0) | 0;
  $$08 = $$08 + 1 | 0;
 } while (($$08 | 0) < ($3 | 0));
 if (!$9) {
  HEAP32[$12 >> 2] = 15;
  $$36 = 0.0;
  $$pre$phiZ2D = $0 + 104 | 0;
  $57 = 15;
 } else {
  $35 = _llvm_stacksave() | 0;
  $36 = STACKTOP;
  STACKTOP = STACKTOP + ((1 * ($16 >> 1 << 2) | 0) + 15 & -16) | 0;
  _pitch_downsample($11, $36, $16, $3);
  _pitch_search($36 + 2048 | 0, $36, $4, $12);
  HEAP32[$12 >> 2] = 1024 - (HEAP32[$12 >> 2] | 0);
  $40 = $0 + 104 | 0;
  $44 = +_remove_doubling($36, $4, $12, HEAP32[$40 >> 2] | 0, +HEAPF32[$0 + 108 >> 2]);
  $45 = HEAP32[$12 >> 2] | 0;
  if (($45 | 0) > 1022) {
   HEAP32[$12 >> 2] = 1022;
   $132 = 1022;
  } else $132 = $45;
  $47 = $44 * .699999988079071;
  $49 = HEAP32[$0 + 56 >> 2] | 0;
  $$ = ($49 | 0) > 2 ? $47 * .5 : $47;
  _llvm_stackrestore($35 | 0);
  $$36 = ($49 | 0) > 8 ? 0.0 : ($49 | 0) > 4 ? $$ * .5 : $$;
  $$pre$phiZ2D = $40;
  $57 = $132;
 }
 $55 = HEAP32[$$pre$phiZ2D >> 2] | 0;
 $56 = $57 - $55 | 0;
 $$20 = ((($56 | 0) > -1 ? $56 : 0 - $56 | 0) * 10 | 0) > ($57 | 0) ? .4000000059604645 : .20000000298023224;
 if (($10 | 0) < 25) {
  $$110 = $$20 + .10000000149011612;
  label = 11;
 } else if (($10 | 0) < 35) {
  $$110 = $$20;
  label = 11;
 } else $$2 = $$20;
 if ((label | 0) == 11) $$2 = $$110 + .10000000149011612;
 $65 = $0 + 108 | 0;
 $66 = +HEAPF32[$65 >> 2];
 $$3 = $66 > .4000000059604645 ? $$2 + -.10000000149011612 : $$2;
 $$4 = $66 > .550000011920929 ? $$3 + -.10000000149011612 : $$3;
 if ($$36 < ($$4 > .20000000298023224 ? $$4 : .20000000298023224)) {
  $$0 = 0;
  $$01 = 0;
  $$5 = 0.0;
 } else {
  $75 = +Math_abs(+($$36 - $66)) < .10000000149011612;
  $79 = ~~+Math_floor(+(($75 ? $66 : $$36) * 32.0 / 3.0 + .5));
  $80 = $79 + -1 | 0;
  if (($80 | 0) > 7) {
   $133 = 7;
   label = 15;
  } else if (($79 | 0) < 1) $83 = 0; else {
   $133 = $80;
   label = 15;
  }
  if ((label | 0) == 15) $83 = $133;
  $$0 = $83;
  $$01 = 1;
  $$5 = +($83 + 1 | 0) * .09375;
 }
 $86 = $13 + 44 | 0;
 $87 = $15 << 2;
 $88 = -$$5;
 $89 = $0 + 112 | 0;
 $90 = $13 + 60 | 0;
 $91 = ($4 | 0) > 1024;
 $93 = 1024 - $4 << 2;
 $94 = 0 - $4 | 0;
 $$19 = 0;
 $98 = $55;
 while (1) {
  $96 = (HEAP32[$86 >> 2] | 0) - $15 | 0;
  HEAP32[$$pre$phiZ2D >> 2] = ($98 | 0) > 15 ? $98 : 15;
  $100 = $1 + ((Math_imul($$19, $21) | 0) << 2) | 0;
  $102 = $0 + 236 + ((Math_imul($$19, $15) | 0) << 2) | 0;
  _memcpy($100 | 0, $102 | 0, $87 | 0) | 0;
  if (!$96) $115 = HEAP32[$11 + ($$19 << 2) >> 2] | 0; else {
   $106 = HEAP32[$11 + ($$19 << 2) >> 2] | 0;
   $108 = HEAP32[$$pre$phiZ2D >> 2] | 0;
   $110 = -+HEAPF32[$65 >> 2];
   $111 = HEAP32[$89 >> 2] | 0;
   _comb_filter($100 + ($15 << 2) | 0, $106 + 4096 | 0, $108, $108, $96, $110, $110, $111, $111, 0, 0);
   $115 = $106;
  }
  $114 = $115 + 4096 | 0;
  _comb_filter($100 + ($15 << 2) + ($96 << 2) | 0, $114 + ($96 << 2) | 0, HEAP32[$$pre$phiZ2D >> 2] | 0, $57, $4 - $96 | 0, -+HEAPF32[$65 >> 2], $88, HEAP32[$89 >> 2] | 0, $5, HEAP32[$90 >> 2] | 0, $15);
  _memcpy($102 | 0, $100 + ($4 << 2) | 0, $87 | 0) | 0;
  $125 = $2 + ($$19 << 10 << 2) | 0;
  if ($91) _memcpy($125 | 0, $115 + ($4 << 2) | 0, 4096) | 0; else {
   _memmove($125 | 0, $125 + ($4 << 2) | 0, $93 | 0) | 0;
   _memcpy($125 + 4096 + ($94 << 2) | 0, $114 | 0, $22 | 0) | 0;
  }
  $130 = $$19 + 1 | 0;
  if (($130 | 0) >= ($3 | 0)) break;
  $$19 = $130;
  $98 = HEAP32[$$pre$phiZ2D >> 2] | 0;
 }
 HEAPF32[$7 >> 2] = $$5;
 HEAP32[$6 >> 2] = $57;
 HEAP32[$8 >> 2] = $$0;
 STACKTOP = sp;
 return $$01 | 0;
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

function _opus_repacketizer_out_range_impl($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $$0 = 0, $$012 = 0, $$013 = 0, $$10 = 0, $$11 = 0, $$113 = 0, $$2$ph = 0, $$214 = 0, $$3 = 0, $$315 = 0, $$36$ph = 0, $$4 = 0, $$416 = 0, $$5 = 0, $$58 = 0, $$6 = 0, $$69 = 0, $$710 = 0, $$8 = 0, $$811 = 0, $104 = 0, $109 = 0, $11 = 0, $117 = 0, $18 = 0, $19 = 0, $23 = 0, $35 = 0, $40 = 0, $52 = 0, $56 = 0, $66 = 0, $72 = 0, $76 = 0, $81 = 0, $83 = 0, $87 = 0, $89 = 0, $9 = 0, $98 = 0, label = 0;
 if (($1 | 0) < 1) {
  $$0 = -1;
  return $$0 | 0;
 }
 if ((HEAP32[$0 + 4 >> 2] | 0) < ($1 | 0)) {
  $$0 = -1;
  return $$0 | 0;
 }
 $9 = $0 + 200 | 0;
 L7 : do switch ($1 | 0) {
 case 1:
  {
   $11 = HEAP16[$9 >> 1] | 0;
   if (($11 | 0) < ($3 | 0)) {
    HEAP8[$2 >> 0] = HEAP8[$0 >> 0] & -4;
    $$2$ph = $2 + 1 | 0;
    $$36$ph = $11 + 1 | 0;
    label = 11;
    break L7;
   } else {
    $$0 = -2;
    return $$0 | 0;
   }
   break;
  }
 case 2:
  {
   $18 = HEAP16[$0 + 202 >> 1] | 0;
   $19 = HEAP16[$9 >> 1] | 0;
   if ($18 << 16 >> 16 == $19 << 16 >> 16) {
    $23 = $18 << 16 >> 16 << 1 | 1;
    if (($23 | 0) > ($3 | 0)) {
     $$0 = -2;
     return $$0 | 0;
    } else {
     HEAP8[$2 >> 0] = HEAP8[$0 >> 0] & -4 | 1;
     $$2$ph = $2 + 1 | 0;
     $$36$ph = $23;
     label = 11;
     break L7;
    }
   } else {
    $35 = ($19 << 16 >> 16) + ($18 << 16 >> 16) + 2 + ($19 << 16 >> 16 > 251 & 1) | 0;
    if (($35 | 0) > ($3 | 0)) {
     $$0 = -2;
     return $$0 | 0;
    } else {
     $40 = $2 + 1 | 0;
     HEAP8[$2 >> 0] = HEAP8[$0 >> 0] & -4 | 2;
     $$2$ph = $40 + (_encode_size(HEAP16[$9 >> 1] | 0, $40) | 0) | 0;
     $$36$ph = $35;
     label = 11;
     break L7;
    }
   }
   break;
  }
 default:
  {
   $$012 = 1;
   label = 12;
  }
 } while (0);
 if ((label | 0) == 11) if (($4 | 0) != 0 & ($$36$ph | 0) < ($3 | 0)) {
  $$012 = 1;
  label = 12;
 } else {
  $$8 = $$2$ph;
  $$811 = $$36$ph;
 }
 L24 : do if ((label | 0) == 12) {
  while (1) {
   label = 0;
   if (($$012 | 0) >= ($1 | 0)) {
    label = 20;
    break;
   }
   if ((HEAP16[$0 + 200 + ($$012 << 1) >> 1] | 0) != (HEAP16[$9 >> 1] | 0)) {
    label = 14;
    break;
   }
   $$012 = $$012 + 1 | 0;
   label = 12;
  }
  do if ((label | 0) == 14) {
   $52 = $1 + -1 | 0;
   $$113 = 0;
   $$58 = 2;
   while (1) {
    if (($$113 | 0) >= ($52 | 0)) break;
    $56 = HEAP16[$0 + 200 + ($$113 << 1) >> 1] | 0;
    $$113 = $$113 + 1 | 0;
    $$58 = $$58 + (($56 << 16 >> 16 > 251 ? 2 : 1) + ($56 << 16 >> 16)) | 0;
   }
   $66 = $$58 + (HEAP16[$0 + 200 + ($52 << 1) >> 1] | 0) | 0;
   if (($66 | 0) > ($3 | 0)) {
    $$0 = -2;
    return $$0 | 0;
   } else {
    HEAP8[$2 >> 0] = HEAP8[$0 >> 0] | 3;
    $72 = ($1 | 128) & 255;
    HEAP8[$2 + 1 >> 0] = $72;
    $$013 = 1;
    $$69 = $66;
    $87 = $72;
    break;
   }
  } else if ((label | 0) == 20) {
   $76 = (Math_imul(HEAP16[$9 >> 1] | 0, $1) | 0) + 2 | 0;
   if (($76 | 0) > ($3 | 0)) {
    $$0 = -2;
    return $$0 | 0;
   } else {
    HEAP8[$2 >> 0] = HEAP8[$0 >> 0] | 3;
    $81 = $1 & 255;
    HEAP8[$2 + 1 >> 0] = $81;
    $$013 = 0;
    $$69 = $76;
    $87 = $81;
    break;
   }
  } while (0);
  $$3 = $2 + 2 | 0;
  if (!$4) {
   $$5 = $$3;
   $$710 = $$69;
  } else {
   $83 = $3 - $$69 | 0;
   if (!$83) {
    $$5 = $$3;
    $$710 = $$69;
   } else {
    HEAP8[$2 + 1 >> 0] = $87 | 64;
    $89 = ($83 + -1 | 0) / 255 | 0;
    $$214 = 0;
    $$4 = $$3;
    while (1) {
     if (($$214 | 0) >= ($89 | 0)) break;
     HEAP8[$$4 >> 0] = -1;
     $$214 = $$214 + 1 | 0;
     $$4 = $$4 + 1 | 0;
    }
    HEAP8[$$4 >> 0] = $83 + (Math_imul($89, -255) | 0) + 255;
    $$5 = $$4 + 1 | 0;
    $$710 = $3;
   }
  }
  if ($$013) {
   $98 = $1 + -1 | 0;
   $$315 = 0;
   $$6 = $$5;
   while (1) {
    if (($$315 | 0) >= ($98 | 0)) {
     $$8 = $$6;
     $$811 = $$710;
     break L24;
    }
    $104 = $$6 + (_encode_size(HEAP16[$0 + 200 + ($$315 << 1) >> 1] | 0, $$6) | 0) | 0;
    $$315 = $$315 + 1 | 0;
    $$6 = $104;
   }
  } else {
   $$8 = $$5;
   $$811 = $$710;
  }
 } while (0);
 $$10 = $$8;
 $$416 = 0;
 while (1) {
  if (($$416 | 0) >= ($1 | 0)) break;
  $109 = $0 + 200 + ($$416 << 1) | 0;
  _memmove($$10 | 0, HEAP32[$0 + 8 + ($$416 << 2) >> 2] | 0, HEAP16[$109 >> 1] | 0) | 0;
  $$10 = $$10 + (HEAP16[$109 >> 1] | 0) | 0;
  $$416 = $$416 + 1 | 0;
 }
 if (!$4) {
  $$0 = $$811;
  return $$0 | 0;
 }
 $117 = $2 + $3 | 0;
 $$11 = $$10;
 while (1) {
  if ($$11 >>> 0 >= $117 >>> 0) {
   $$0 = $$811;
   break;
  }
  HEAP8[$$11 >> 0] = 0;
  $$11 = $$11 + 1 | 0;
 }
 return $$0 | 0;
}

function _silk_encode_indices($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $$0 = 0, $$03 = 0, $$04 = 0, $$15 = 0, $$pre$phi9Z2D = 0, $$pre$phiZ2D = 0, $10 = 0, $100 = 0, $103 = 0, $106 = 0, $109 = 0, $111 = 0, $113 = 0, $115 = 0, $120 = 0, $129 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $150 = 0, $151 = 0, $17 = 0, $20 = 0, $22 = 0, $30 = 0, $37 = 0, $40 = 0, $41 = 0, $5 = 0, $54 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $7 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 $5 = sp;
 $6 = sp + 32 | 0;
 $7 = ($3 | 0) == 0;
 $$0 = $7 ? $0 + 4732 | 0 : $0 + 6096 + ($2 * 36 | 0) | 0;
 $10 = $$0 + 29 | 0;
 $17 = (HEAP8[$10 >> 0] << 1) + (HEAP8[$$0 + 30 >> 0] | 0) | 0;
 if (($17 | 0) > 1 | $7 ^ 1) _ec_enc_icdf($1, $17 + -2 | 0, 32195, 8); else _ec_enc_icdf($1, $17, 32199, 8);
 $20 = ($4 | 0) == 2;
 $22 = HEAP8[$$0 >> 0] | 0;
 if ($20) _ec_enc_icdf($1, $22, 29946, 8); else {
  _ec_enc_icdf($1, $22 >> 3, 29922 + (HEAP8[$10 >> 0] << 3) | 0, 8);
  _ec_enc_icdf($1, HEAP8[$$0 >> 0] & 7, 32224, 8);
 }
 $30 = $0 + 4576 | 0;
 $$04 = 1;
 while (1) {
  if (($$04 | 0) >= (HEAP32[$30 >> 2] | 0)) break;
  _ec_enc_icdf($1, HEAP8[$$0 + $$04 >> 0] | 0, 29946, 8);
  $$04 = $$04 + 1 | 0;
 }
 $37 = $$0 + 8 | 0;
 $40 = $0 + 4688 | 0;
 $41 = HEAP32[$40 >> 2] | 0;
 _ec_enc_icdf($1, HEAP8[$37 >> 0] | 0, (HEAP32[$41 + 16 >> 2] | 0) + (Math_imul(HEAP8[$10 >> 0] >> 1, HEAP16[$41 >> 1] | 0) | 0) | 0, 8);
 _silk_NLSF_unpack($5, $6, HEAP32[$40 >> 2] | 0, HEAP8[$37 >> 0] | 0);
 $$15 = 0;
 while (1) {
  $54 = HEAP32[$40 >> 2] | 0;
  if (($$15 | 0) >= (HEAP16[$54 + 2 >> 1] | 0)) break;
  $59 = $$15 + 1 | 0;
  $60 = $$0 + 8 + $59 | 0;
  $61 = HEAP8[$60 >> 0] | 0;
  if ($61 << 24 >> 24 > 3) {
   _ec_enc_icdf($1, 8, (HEAP32[$54 + 28 >> 2] | 0) + (HEAP16[$5 + ($$15 << 1) >> 1] | 0) | 0, 8);
   _ec_enc_icdf($1, (HEAP8[$60 >> 0] | 0) + -4 | 0, 32232, 8);
   $$15 = $59;
   continue;
  }
  if ($61 << 24 >> 24 < -3) {
   _ec_enc_icdf($1, 0, (HEAP32[$54 + 28 >> 2] | 0) + (HEAP16[$5 + ($$15 << 1) >> 1] | 0) | 0, 8);
   _ec_enc_icdf($1, -4 - (HEAP8[$60 >> 0] | 0) | 0, 32232, 8);
   $$15 = $59;
   continue;
  } else {
   _ec_enc_icdf($1, ($61 << 24 >> 24) + 4 | 0, (HEAP32[$54 + 28 >> 2] | 0) + (HEAP16[$5 + ($$15 << 1) >> 1] | 0) | 0, 8);
   $$15 = $59;
   continue;
  }
 }
 if ((HEAP32[$30 >> 2] | 0) == 4) _ec_enc_icdf($1, HEAP8[$$0 + 31 >> 0] | 0, 32201, 8);
 if ((HEAP8[$10 >> 0] | 0) != 2) {
  $146 = HEAP8[$10 >> 0] | 0;
  $147 = $146 << 24 >> 24;
  $148 = $0 + 5764 | 0;
  HEAP32[$148 >> 2] = $147;
  $149 = $$0 + 34 | 0;
  $150 = HEAP8[$149 >> 0] | 0;
  $151 = $150 << 24 >> 24;
  _ec_enc_icdf($1, $151, 32209, 8);
  STACKTOP = sp;
  return;
 }
 do if ($20) if ((HEAP32[$0 + 5764 >> 2] | 0) == 2) {
  $100 = $$0 + 26 | 0;
  $103 = $0 + 5768 | 0;
  $106 = (HEAP16[$100 >> 1] | 0) - (HEAP16[$103 >> 1] | 0) | 0;
  if (($106 + 8 | 0) >>> 0 > 19) {
   _ec_enc_icdf($1, 0, 32271, 8);
   label = 25;
   break;
  } else {
   _ec_enc_icdf($1, $106 + 9 | 0, 32271, 8);
   $$pre$phi9Z2D = $103;
   $$pre$phiZ2D = $100;
   break;
  }
 } else label = 25; else label = 25; while (0);
 if ((label | 0) == 25) {
  $109 = $$0 + 26 | 0;
  $111 = HEAP16[$109 >> 1] | 0;
  $113 = HEAP32[$0 + 4572 >> 2] | 0;
  $115 = ($111 | 0) / ($113 >> 1 | 0) | 0;
  $120 = $111 - (Math_imul($115 << 16 >> 16, $113 << 15 >> 16) | 0) | 0;
  _ec_enc_icdf($1, $115, 32239, 8);
  _ec_enc_icdf($1, $120, HEAP32[$0 + 4680 >> 2] | 0, 8);
  $$pre$phi9Z2D = $0 + 5768 | 0;
  $$pre$phiZ2D = $109;
 }
 HEAP16[$$pre$phi9Z2D >> 1] = HEAP16[$$pre$phiZ2D >> 1] | 0;
 _ec_enc_icdf($1, HEAP8[$$0 + 28 >> 0] | 0, HEAP32[$0 + 4684 >> 2] | 0, 8);
 $129 = $$0 + 32 | 0;
 _ec_enc_icdf($1, HEAP8[$129 >> 0] | 0, 29987, 8);
 $$03 = 0;
 while (1) {
  if (($$03 | 0) >= (HEAP32[$30 >> 2] | 0)) break;
  _ec_enc_icdf($1, HEAP8[$$0 + 4 + $$03 >> 0] | 0, HEAP32[18980 + (HEAP8[$129 >> 0] << 2) >> 2] | 0, 8);
  $$03 = $$03 + 1 | 0;
 }
 if ($4 | 0) {
  $146 = HEAP8[$10 >> 0] | 0;
  $147 = $146 << 24 >> 24;
  $148 = $0 + 5764 | 0;
  HEAP32[$148 >> 2] = $147;
  $149 = $$0 + 34 | 0;
  $150 = HEAP8[$149 >> 0] | 0;
  $151 = $150 << 24 >> 24;
  _ec_enc_icdf($1, $151, 32209, 8);
  STACKTOP = sp;
  return;
 }
 _ec_enc_icdf($1, HEAP8[$$0 + 33 >> 0] | 0, 32192, 8);
 $146 = HEAP8[$10 >> 0] | 0;
 $147 = $146 << 24 >> 24;
 $148 = $0 + 5764 | 0;
 HEAP32[$148 >> 2] = $147;
 $149 = $$0 + 34 | 0;
 $150 = HEAP8[$149 >> 0] | 0;
 $151 = $150 << 24 >> 24;
 _ec_enc_icdf($1, $151, 32209, 8);
 STACKTOP = sp;
 return;
}

function _remove_doubling($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = +$4;
 var $$ = 0, $$012 = 0.0, $$014 = 0.0, $$016 = 0.0, $$018 = 0.0, $$019 = 0.0, $$05 = 0, $$07 = 0, $$08 = 0, $$1 = 0.0, $$111 = 0, $$113 = 0.0, $$115 = 0.0, $$117 = 0.0, $$12 = 0.0, $$120 = 0.0, $$14 = 0, $$16 = 0, $$19 = 0, $$6 = 0, $$cast = 0.0, $101 = 0.0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $12 = 0, $13 = 0, $15 = 0, $18 = 0, $21 = 0.0, $26 = 0.0, $28 = 0.0, $34 = 0.0, $35 = 0.0, $36 = 0.0, $37 = 0, $38 = 0.0, $39 = 0.0, $40 = 0.0, $43 = 0, $44 = 0, $47 = 0, $5 = 0, $6 = 0, $62 = 0.0, $68 = 0.0, $69 = 0.0, $7 = 0, $70 = 0, $71 = 0, $76 = 0, $77 = 0.0, $79 = 0.0, $8 = 0, $81 = 0.0, $86 = 0.0, $9 = 0, $97 = 0.0, $98 = 0.0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 2080 | 0;
 $5 = sp + 2072 | 0;
 $6 = sp + 2068 | 0;
 $7 = sp + 2064 | 0;
 $8 = sp + 2052 | 0;
 $9 = HEAP32[$2 >> 2] | 0;
 $11 = ($3 | 0) / 2 | 0;
 $12 = ($1 | 0) / 2 | 0;
 $13 = $0 + 2048 | 0;
 $$ = ($9 | 0) > 1023 ? 511 : ($9 | 0) / 2 | 0;
 HEAP32[$2 >> 2] = $$;
 $15 = sp;
 _dual_inner_prod_c_56($13, $13, $13 + (0 - $$ << 2) | 0, $12, $6, $5);
 $18 = HEAP32[$6 >> 2] | 0;
 HEAP32[$15 >> 2] = $18;
 $$cast = (HEAP32[tempDoublePtr >> 2] = $18, +HEAPF32[tempDoublePtr >> 2]);
 $$018 = $$cast;
 $$07 = 1;
 while (1) {
  if (($$07 | 0) == 513) break;
  $21 = +HEAPF32[$13 + (0 - $$07 << 2) >> 2];
  $26 = +HEAPF32[$13 + ($12 - $$07 << 2) >> 2];
  $28 = $$018 + $21 * $21 - $26 * $26;
  HEAPF32[$15 + ($$07 << 2) >> 2] = $28 < 0.0 ? 0.0 : $28;
  $$018 = $28;
  $$07 = $$07 + 1 | 0;
 }
 $34 = +HEAPF32[$15 + ($$ << 2) >> 2];
 $35 = +HEAPF32[$5 >> 2];
 $36 = +_compute_pitch_gain($35, $$cast, $34);
 $37 = $$ << 1;
 $38 = $36 * .699999988079071;
 $39 = $36 * .8500000238418579;
 $40 = $4 * .5;
 $$012 = $36;
 $$014 = $34;
 $$019 = $35;
 $$05 = 2;
 $$08 = $$;
 while (1) {
  if (($$05 | 0) >= 16) break;
  $43 = $$05 << 1;
  $44 = _celt_udiv_57($37 + $$05 | 0, $43) | 0;
  if (($44 | 0) < 7) break;
  if (($$05 | 0) == 2) {
   $47 = $44 + $$ | 0;
   $$14 = ($47 | 0) > 512 ? $$ : $47;
  } else $$14 = _celt_udiv_57((Math_imul(HEAP32[18772 + ($$05 << 2) >> 2] << 1, $$) | 0) + $$05 | 0, $43) | 0;
  _dual_inner_prod_c_56($13, $13 + (0 - $44 << 2) | 0, $13 + (0 - $$14 << 2) | 0, $12, $5, $7);
  $62 = (+HEAPF32[$5 >> 2] + +HEAPF32[$7 >> 2]) * .5;
  HEAPF32[$5 >> 2] = $62;
  $68 = (+HEAPF32[$15 + ($44 << 2) >> 2] + +HEAPF32[$15 + ($$14 << 2) >> 2]) * .5;
  $69 = +_compute_pitch_gain($62, $$cast, $68);
  $70 = $44 - $11 | 0;
  $71 = ($70 | 0) > -1 ? $70 : 0 - $70 | 0;
  if (($71 | 0) < 2) $$12 = $4; else if (($71 | 0) == 2) {
   $76 = (Math_imul($$05 * 5 | 0, $$05) | 0) < ($$ | 0);
   $$12 = $76 ? $40 : 0.0;
  } else $$12 = 0.0;
  $77 = $38 - $$12;
  $79 = $77 < .30000001192092896 ? .30000001192092896 : $77;
  if (($44 | 0) < 21) {
   $81 = $39 - $$12;
   if ($81 < .4000000059604645) $$1 = .4000000059604645; else $$1 = $81;
  } else $$1 = $79;
  if ($69 > $$1) {
   $$113 = $69;
   $$115 = $68;
   $$120 = $62;
   $$19 = $44;
  } else {
   $$113 = $$012;
   $$115 = $$014;
   $$120 = $$019;
   $$19 = $$08;
  }
  $$012 = $$113;
  $$014 = $$115;
  $$019 = $$120;
  $$05 = $$05 + 1 | 0;
  $$08 = $$19;
 }
 $86 = $$019 < 0.0 ? 0.0 : $$019;
 if (!($$014 <= $86)) $$016 = $86 / ($$014 + 1.0); else $$016 = 1.0;
 $$16 = 0;
 while (1) {
  if (($$16 | 0) == 3) break;
  HEAPF32[$8 + ($$16 << 2) >> 2] = +_celt_inner_prod_c_51($13, $13 + (1 - ($$08 + $$16) << 2) | 0, $12);
  $$16 = $$16 + 1 | 0;
 }
 $97 = +HEAPF32[$8 + 8 >> 2];
 $98 = +HEAPF32[$8 >> 2];
 $101 = +HEAPF32[$8 + 4 >> 2];
 if ($97 - $98 > ($101 - $98) * .699999988079071) {
  $$111 = 1;
  $109 = $$016 > $$012;
  $$117 = $109 ? $$012 : $$016;
  $110 = $$08 << 1;
  $111 = $110 + $$111 | 0;
  $112 = ($111 | 0) > 15;
  $$6 = $112 ? $111 : 15;
  HEAP32[$2 >> 2] = $$6;
  STACKTOP = sp;
  return +$$117;
 }
 if ($98 - $97 > ($101 - $97) * .699999988079071) {
  $$111 = -1;
  $109 = $$016 > $$012;
  $$117 = $109 ? $$012 : $$016;
  $110 = $$08 << 1;
  $111 = $110 + $$111 | 0;
  $112 = ($111 | 0) > 15;
  $$6 = $112 ? $111 : 15;
  HEAP32[$2 >> 2] = $$6;
  STACKTOP = sp;
  return +$$117;
 }
 $$111 = 0;
 $109 = $$016 > $$012;
 $$117 = $109 ? $$012 : $$016;
 $110 = $$08 << 1;
 $111 = $110 + $$111 | 0;
 $112 = ($111 | 0) > 15;
 $$6 = $112 ? $111 : 15;
 HEAP32[$2 >> 2] = $$6;
 STACKTOP = sp;
 return +$$117;
}

function _silk_A2NLSF($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$ = 0, $$01 = 0, $$01$ph = 0, $$013 = 0, $$024 = 0, $$028 = 0, $$028$ph = 0, $$033 = 0, $$04 = 0, $$06$ph$ph = 0, $$09 = 0, $$09$ph = 0, $$1$ph40 = 0, $$1$ph40$ph = 0, $$110 = 0, $$115 = 0, $$115$ph39 = 0, $$115$ph39$ph = 0, $$120$ph38 = 0, $$120$ph38$ph = 0, $$125 = 0, $$129 = 0, $$134 = 0, $$15 = 0, $$216 = 0, $$230 = 0, $$317 = 0, $$327 = 0, $13 = 0, $14 = 0, $21 = 0, $24 = 0, $25 = 0, $3 = 0, $36 = 0, $4 = 0, $5 = 0, $51 = 0, $65 = 0, $68 = 0, $7 = 0, $72 = 0, $75 = 0, $8 = 0, $81 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 $3 = sp + 60 | 0;
 $4 = sp + 8 | 0;
 $5 = sp;
 HEAP32[$5 >> 2] = $3;
 HEAP32[$5 + 4 >> 2] = $4;
 $7 = $2 >> 1;
 _silk_A2NLSF_init($1, $3, $4, $7);
 $8 = _silk_A2NLSF_eval_poly($3, 8192, $7) | 0;
 if (($8 | 0) < 0) {
  HEAP16[$0 >> 1] = 0;
  $$06$ph$ph = 0;
  $$1$ph40$ph = $4;
  $$115$ph39$ph = _silk_A2NLSF_eval_poly($4, 8192, $7) | 0;
  $$120$ph38$ph = 1;
 } else {
  $$06$ph$ph = 0;
  $$1$ph40$ph = $3;
  $$115$ph39$ph = $8;
  $$120$ph38$ph = 0;
 }
 L3 : while (1) {
  $$01$ph = 0;
  $$028$ph = 8192;
  $$09$ph = 1;
  $$1$ph40 = $$1$ph40$ph;
  $$115$ph39 = $$115$ph39$ph;
  $$120$ph38 = $$120$ph38$ph;
  L5 : while (1) {
   $$01 = $$01$ph;
   $$028 = $$028$ph;
   $$09 = $$09$ph;
   $$115 = $$115$ph39;
   while (1) {
    $13 = HEAP16[27946 + ($$09 << 1) >> 1] | 0;
    $14 = _silk_A2NLSF_eval_poly($$1$ph40, $13, $7) | 0;
    if (($$115 | 0) < 1) {
     if (($14 | 0) >= ($$01 | 0)) break;
     if (!(($$115 | 0) < 0 | ($14 | 0) > (0 - $$01 | 0))) break;
    } else if (($14 | 0) <= (0 - $$01 | 0)) break;
    if (($$09 | 0) > 127) break L5; else {
     $$01 = 0;
     $$028 = $13;
     $$09 = $$09 + 1 | 0;
     $$115 = $14;
    }
   }
   $$ = ($14 | 0) == 0 & 1;
   $$013 = 0;
   $$024 = -256;
   $$033 = $13;
   $$04 = $14;
   $$129 = $$028;
   $$216 = $$115;
   while (1) {
    if (($$013 | 0) == 3) break;
    $21 = $$129 + $$033 | 0;
    $24 = ($21 >> 1) + ($21 & 1) | 0;
    $25 = _silk_A2NLSF_eval_poly($$1$ph40, $24, $7) | 0;
    if (($$216 | 0) < 1) if (($25 | 0) > -1 | ($$216 | 0) == 0) {
     $$125 = $$024;
     $$134 = $24;
     $$15 = $25;
     $$230 = $$129;
     $$317 = $$216;
    } else label = 14; else if (($25 | 0) < 1) {
     $$125 = $$024;
     $$134 = $24;
     $$15 = $25;
     $$230 = $$129;
     $$317 = $$216;
    } else label = 14;
    if ((label | 0) == 14) {
     label = 0;
     $$125 = $$024 + (128 >>> $$013) | 0;
     $$134 = $$033;
     $$15 = $$04;
     $$230 = $24;
     $$317 = $25;
    }
    $$013 = $$013 + 1 | 0;
    $$024 = $$125;
    $$033 = $$134;
    $$04 = $$15;
    $$129 = $$230;
    $$216 = $$317;
   }
   $36 = $$216 - $$04 | 0;
   if (((($$216 | 0) > 0 ? $$216 : 0 - $$216 | 0) | 0) < 65536) if (!$36) $$327 = $$024; else $$327 = $$024 + ((($$216 << 5) + ($36 >> 1) | 0) / ($36 | 0) | 0) | 0; else $$327 = $$024 + (($$216 | 0) / ($36 >> 5 | 0) | 0) | 0;
   HEAP16[$0 + ($$120$ph38 << 1) >> 1] = _silk_min_32_252(($$09 << 8) + $$327 | 0) | 0;
   $51 = $$120$ph38 + 1 | 0;
   if (($51 | 0) >= ($2 | 0)) {
    label = 29;
    break L3;
   }
   $$01$ph = $$;
   $$028$ph = HEAP16[27946 + ($$09 + -1 << 1) >> 1] | 0;
   $$09$ph = $$09;
   $$1$ph40 = HEAP32[$5 + (($51 & 1) << 2) >> 2] | 0;
   $$115$ph39 = 1 - ($51 & 2) << 12;
   $$120$ph38 = $51;
  }
  $65 = $$06$ph$ph + 1 | 0;
  if (($$06$ph$ph | 0) > 15) break;
  _silk_bwexpander_32($1, $2, 65536 - (1 << $65) | 0);
  _silk_A2NLSF_init($1, $3, $4, $7);
  $81 = _silk_A2NLSF_eval_poly($3, 8192, $7) | 0;
  if (($81 | 0) >= 0) {
   $$06$ph$ph = $65;
   $$1$ph40$ph = $3;
   $$115$ph39$ph = $81;
   $$120$ph38$ph = 0;
   continue;
  }
  HEAP16[$0 >> 1] = 0;
  $$06$ph$ph = $65;
  $$1$ph40$ph = $4;
  $$115$ph39$ph = _silk_A2NLSF_eval_poly($4, 8192, $7) | 0;
  $$120$ph38$ph = 1;
 }
 if ((label | 0) == 29) {
  STACKTOP = sp;
  return;
 }
 $68 = 32768 / ($2 + 1 | 0) | 0;
 HEAP16[$0 >> 1] = $68;
 $$110 = 1;
 $72 = $68;
 while (1) {
  if (($$110 | 0) >= ($2 | 0)) break;
  $75 = ($72 & 65535) + (HEAPU16[$0 >> 1] | 0) | 0;
  HEAP16[$0 + ($$110 << 1) >> 1] = $75;
  $$110 = $$110 + 1 | 0;
  $72 = $75;
 }
 STACKTOP = sp;
 return;
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

function _silk_nsq_scale_states($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10) {
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
 var $$0 = 0, $$01 = 0, $$1 = 0, $$2 = 0, $$3 = 0, $$4 = 0, $$5 = 0, $100 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $14 = 0, $142 = 0, $143 = 0, $144 = 0, $155 = 0, $156 = 0, $157 = 0, $16 = 0, $18 = 0, $20 = 0, $21 = 0, $24 = 0, $28 = 0, $29 = 0, $40 = 0, $45 = 0, $52 = 0, $53 = 0, $56 = 0, $57 = 0, $59 = 0, $62 = 0, $69 = 0, $70 = 0, $71 = 0, $73 = 0, $74 = 0, $75 = 0, $79 = 0, $80 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $99 = 0;
 $12 = HEAP32[$9 + ($6 << 2) >> 2] | 0;
 $13 = $8 + ($6 << 2) | 0;
 $14 = HEAP32[$13 >> 2] | 0;
 $16 = _silk_INVERSE32_varQ_114(($14 | 0) > 1 ? $14 : 1) | 0;
 $18 = ($16 >> 4) + 1 | 0;
 $20 = $0 + 4584 | 0;
 $21 = $18 >>> 1 << 16 >> 16;
 $24 = ($18 >> 16) + 1 >> 1;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) >= (HEAP32[$20 >> 2] | 0)) break;
  $28 = HEAP16[$2 + ($$01 << 1) >> 1] | 0;
  $29 = $28 << 16 >> 16;
  HEAP32[$3 + ($$01 << 2) >> 2] = (Math_imul($29 >> 16, $21) | 0) + ((Math_imul($28 & 65535, $21) | 0) >> 16) + (Math_imul($29, $24) | 0);
  $$01 = $$01 + 1 | 0;
 }
 $40 = $1 + 4348 | 0;
 L5 : do if (HEAP32[$40 >> 2] | 0) {
  if (!$6) {
   $45 = $7 << 16 >> 16;
   $$0 = (Math_imul($16 >> 16, $45) | 0) + ((Math_imul($16 & 65535, $45) | 0) >> 16) << 2;
  } else $$0 = $16;
  $52 = $1 + 4332 | 0;
  $53 = HEAP32[$52 >> 2] | 0;
  $56 = $$0 >> 16;
  $57 = $$0 & 65535;
  $$1 = $53 - $12 + -2 | 0;
  $59 = $53;
  while (1) {
   if (($$1 | 0) >= ($59 | 0)) break L5;
   $62 = HEAP16[$4 + ($$1 << 1) >> 1] | 0;
   HEAP32[$5 + ($$1 << 2) >> 2] = (Math_imul($56, $62) | 0) + ((Math_imul($57, $62) | 0) >> 16);
   $$1 = $$1 + 1 | 0;
   $59 = HEAP32[$52 >> 2] | 0;
  }
 } while (0);
 $69 = HEAP32[$13 >> 2] | 0;
 $70 = $1 + 4344 | 0;
 $71 = HEAP32[$70 >> 2] | 0;
 if (($69 | 0) == ($71 | 0)) return;
 $73 = _silk_DIV32_varQ_115($71, $69) | 0;
 $74 = $1 + 4336 | 0;
 $75 = HEAP32[$74 >> 2] | 0;
 $79 = $73 >> 16;
 $80 = $73 & 65535;
 $$2 = $75 - (HEAP32[$0 + 4588 >> 2] | 0) | 0;
 $82 = $75;
 while (1) {
  if (($$2 | 0) >= ($82 | 0)) break;
  $83 = $1 + 1280 + ($$2 << 2) | 0;
  $84 = HEAP32[$83 >> 2] | 0;
  $85 = $84 << 16 >> 16;
  HEAP32[$83 >> 2] = (Math_imul($79, $85) | 0) + ((Math_imul($80, $85) | 0) >> 16) + (Math_imul($73, ($84 >> 15) + 1 >> 1) | 0);
  $$2 = $$2 + 1 | 0;
  $82 = HEAP32[$74 >> 2] | 0;
 }
 L21 : do if (($10 | 0) == 2) if (!(HEAP32[$40 >> 2] | 0)) {
  $99 = $1 + 4332 | 0;
  $100 = HEAP32[$99 >> 2] | 0;
  $$3 = $100 - $12 + -2 | 0;
  $104 = $100;
  while (1) {
   if (($$3 | 0) >= ($104 | 0)) break L21;
   $105 = $5 + ($$3 << 2) | 0;
   $106 = HEAP32[$105 >> 2] | 0;
   $107 = $106 << 16 >> 16;
   HEAP32[$105 >> 2] = (Math_imul($79, $107) | 0) + ((Math_imul($80, $107) | 0) >> 16) + (Math_imul($73, ($106 >> 15) + 1 >> 1) | 0);
   $$3 = $$3 + 1 | 0;
   $104 = HEAP32[$99 >> 2] | 0;
  }
 } while (0);
 $118 = $1 + 4320 | 0;
 $119 = HEAP32[$118 >> 2] | 0;
 $120 = $119 << 16 >> 16;
 HEAP32[$118 >> 2] = (Math_imul($79, $120) | 0) + ((Math_imul($80, $120) | 0) >> 16) + (Math_imul($73, ($119 >> 15) + 1 >> 1) | 0);
 $130 = $1 + 4324 | 0;
 $131 = HEAP32[$130 >> 2] | 0;
 $132 = $131 << 16 >> 16;
 HEAP32[$130 >> 2] = (Math_imul($79, $132) | 0) + ((Math_imul($80, $132) | 0) >> 16) + (Math_imul($73, ($131 >> 15) + 1 >> 1) | 0);
 $$4 = 0;
 while (1) {
  if (($$4 | 0) == 16) {
   $$5 = 0;
   break;
  }
  $142 = $1 + 3840 + ($$4 << 2) | 0;
  $143 = HEAP32[$142 >> 2] | 0;
  $144 = $143 << 16 >> 16;
  HEAP32[$142 >> 2] = (Math_imul($79, $144) | 0) + ((Math_imul($80, $144) | 0) >> 16) + (Math_imul($73, ($143 >> 15) + 1 >> 1) | 0);
  $$4 = $$4 + 1 | 0;
 }
 while (1) {
  if (($$5 | 0) == 24) break;
  $155 = $1 + 4224 + ($$5 << 2) | 0;
  $156 = HEAP32[$155 >> 2] | 0;
  $157 = $156 << 16 >> 16;
  HEAP32[$155 >> 2] = (Math_imul($79, $157) | 0) + ((Math_imul($80, $157) | 0) >> 16) + (Math_imul($73, ($156 >> 15) + 1 >> 1) | 0);
  $$5 = $$5 + 1 | 0;
 }
 HEAP32[$70 >> 2] = HEAP32[$13 >> 2];
 return;
}

function _clt_mdct_forward_c($0, $1, $2, $3, $4, $5, $6) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 var $$0 = 0, $$01 = 0, $$012 = 0, $$015 = 0, $$016 = 0, $$019 = 0, $$02 = 0, $$03 = 0, $$04 = 0, $$05 = 0, $$07 = 0, $$09 = 0, $$1 = 0, $$110 = 0, $$113 = 0, $$117 = 0, $$16 = 0, $$18 = 0, $$2 = 0, $$211 = 0, $$214 = 0, $$218 = 0, $$3 = 0, $$4 = 0, $$5 = 0, $10 = 0.0, $109 = 0, $116 = 0, $117 = 0, $120 = 0.0, $123 = 0.0, $125 = 0.0, $127 = 0.0, $15 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $26 = 0, $29 = 0, $30 = 0, $32 = 0.0, $36 = 0.0, $53 = 0, $54 = 0, $65 = 0, $8 = 0, $91 = 0.0, $94 = 0.0, $96 = 0.0, $97 = 0.0, sp = 0;
 sp = STACKTOP;
 $8 = HEAP32[$0 + 8 + ($5 << 2) >> 2] | 0;
 $10 = +HEAPF32[$8 + 4 >> 2];
 $$012 = 0;
 $$015 = HEAP32[$0 >> 2] | 0;
 $$019 = HEAP32[$0 + 24 >> 2] | 0;
 while (1) {
  $15 = $$015 >> 1;
  if (($$012 | 0) >= ($5 | 0)) break;
  $$012 = $$012 + 1 | 0;
  $$015 = $15;
  $$019 = $$019 + ($15 << 2) | 0;
 }
 $18 = $$015 >> 2;
 $19 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($15 << 2) | 0) + 15 & -16) | 0;
 $20 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($18 << 3) | 0) + 15 & -16) | 0;
 $21 = $4 >> 1;
 $26 = $3 + ($21 << 2) | 0;
 $29 = $4 + 3 >> 2;
 $30 = 0 - $15 | 0;
 $$016 = $1 + ($21 << 2) | 0;
 $$04 = $26 + -4 | 0;
 $$05 = $26;
 $$07 = $19;
 $$09 = $1 + ($15 << 2) + -4 + ($21 << 2) | 0;
 $$113 = 0;
 while (1) {
  if (($$113 | 0) >= ($29 | 0)) break;
  $32 = +HEAPF32[$$04 >> 2];
  $36 = +HEAPF32[$$05 >> 2];
  HEAPF32[$$07 >> 2] = $32 * +HEAPF32[$$016 + ($15 << 2) >> 2] + $36 * +HEAPF32[$$09 >> 2];
  HEAPF32[$$07 + 4 >> 2] = $36 * +HEAPF32[$$016 >> 2] - $32 * +HEAPF32[$$09 + ($30 << 2) >> 2];
  $$016 = $$016 + 8 | 0;
  $$04 = $$04 + -8 | 0;
  $$05 = $$05 + 8 | 0;
  $$07 = $$07 + 8 | 0;
  $$09 = $$09 + -8 | 0;
  $$113 = $$113 + 1 | 0;
 }
 $53 = $3 + ($4 << 2) | 0;
 $54 = $18 - $29 | 0;
 $$110 = $$09;
 $$117 = $$016;
 $$18 = $$07;
 $$214 = $$113;
 while (1) {
  if (($$214 | 0) >= ($54 | 0)) break;
  HEAP32[$$18 >> 2] = HEAP32[$$110 >> 2];
  HEAP32[$$18 + 4 >> 2] = HEAP32[$$117 >> 2];
  $$110 = $$110 + -8 | 0;
  $$117 = $$117 + 8 | 0;
  $$18 = $$18 + 8 | 0;
  $$214 = $$214 + 1 | 0;
 }
 $$1 = $53 + -4 | 0;
 $$16 = $3;
 $$2 = $$18;
 $$211 = $$110;
 $$218 = $$117;
 $$3 = $$214;
 while (1) {
  if (($$3 | 0) >= ($18 | 0)) break;
  HEAPF32[$$2 >> 2] = +HEAPF32[$$1 >> 2] * +HEAPF32[$$211 >> 2] - +HEAPF32[$$16 >> 2] * +HEAPF32[$$218 + ($30 << 2) >> 2];
  HEAPF32[$$2 + 4 >> 2] = +HEAPF32[$$1 >> 2] * +HEAPF32[$$218 >> 2] + +HEAPF32[$$16 >> 2] * +HEAPF32[$$211 + ($15 << 2) >> 2];
  $$1 = $$1 + -8 | 0;
  $$16 = $$16 + 8 | 0;
  $$2 = $$2 + 8 | 0;
  $$211 = $$211 + -8 | 0;
  $$218 = $$218 + 8 | 0;
  $$3 = $$3 + 1 | 0;
 }
 $65 = $8 + 44 | 0;
 $$03 = $19;
 $$4 = 0;
 while (1) {
  if (($$4 | 0) >= ($18 | 0)) break;
  $91 = +HEAPF32[$$019 + ($$4 << 2) >> 2];
  $94 = +HEAPF32[$$019 + ($18 + $$4 << 2) >> 2];
  $96 = +HEAPF32[$$03 >> 2];
  $97 = +HEAPF32[$$03 + 4 >> 2];
  $109 = HEAP16[(HEAP32[$65 >> 2] | 0) + ($$4 << 1) >> 1] | 0;
  HEAPF32[$20 + ($109 << 3) >> 2] = $10 * ($96 * $91 - $97 * $94);
  HEAPF32[$20 + ($109 << 3) + 4 >> 2] = $10 * ($97 * $91 + $96 * $94);
  $$03 = $$03 + 8 | 0;
  $$4 = $$4 + 1 | 0;
 }
 _opus_fft_impl($8, $20);
 $116 = $6 << 1;
 $117 = 0 - $116 | 0;
 $$0 = $2 + ((Math_imul($15 + -1 | 0, $6) | 0) << 2) | 0;
 $$01 = $2;
 $$02 = $20;
 $$5 = 0;
 while (1) {
  if (($$5 | 0) >= ($18 | 0)) break;
  $120 = +HEAPF32[$$02 + 4 >> 2];
  $123 = +HEAPF32[$$019 + ($18 + $$5 << 2) >> 2];
  $125 = +HEAPF32[$$02 >> 2];
  $127 = +HEAPF32[$$019 + ($$5 << 2) >> 2];
  HEAPF32[$$01 >> 2] = $120 * $123 - $125 * $127;
  HEAPF32[$$0 >> 2] = $125 * $123 + $120 * $127;
  $$0 = $$0 + ($117 << 2) | 0;
  $$01 = $$01 + ($116 << 2) | 0;
  $$02 = $$02 + 8 | 0;
  $$5 = $$5 + 1 | 0;
 }
 STACKTOP = sp;
 return;
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
   $38 = HEAP32[(HEAP32[1740 + ($$01 << 2) >> 2] | 0) + ($$0 << 2) >> 2] | 0;
   $43 = HEAP32[(HEAP32[1740 + ($$01 + 1 << 2) >> 2] | 0) + ($$0 << 2) >> 2] | 0;
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
    $54 = HEAP32[(HEAP32[1740 + ($$4 << 2) >> 2] | 0) + ($$0 << 2) >> 2] | 0;
   } while ($49 >>> 0 < $54 >>> 0);
   $56 = $47 << 31 >> 31;
   $60 = $$01 - $$4 + $56 ^ $56;
   HEAP32[$$06 >> 2] = $60 << 16 >> 16;
   $63 = +(($60 & 65535) << 16 >> 16);
   $$213 = $$011 + $63 * $63;
   $$24 = $49 - $54 | 0;
   $$6 = $$4;
  } else {
   $7 = HEAP32[1740 + ($$0 << 2) >> 2] | 0;
   $10 = HEAP32[$7 + ($$01 + 1 << 2) >> 2] | 0;
   $11 = $$02 >>> 0 >= $10 >>> 0;
   $12 = $11 << 31 >> 31;
   $14 = $$02 - ($11 ? $10 : 0) | 0;
   L13 : do if ((HEAP32[$7 + ($$0 << 2) >> 2] | 0) >>> 0 > $14 >>> 0) {
    $$1 = $$0;
    while (1) {
     $18 = $$1 + -1 | 0;
     $22 = HEAP32[(HEAP32[1740 + ($18 << 2) >> 2] | 0) + ($$0 << 2) >> 2] | 0;
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

function _transient_analysis($0, $1, $2, $3, $4, $5, $6) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 var $$ = 0.0, $$01 = 0, $$012 = 0.0, $$02 = 0.0, $$04 = 0, $$05 = 0, $$06 = 0, $$07 = 0, $$09 = 0.0, $$1 = 0, $$110 = 0.0, $$18 = 0, $$2 = 0, $$2$in = 0, $$2$in$ph = 0, $$211 = 0.0, $$211$ph = 0.0, $$3 = 0, $10 = 0.0, $102 = 0.0, $103 = 0.0, $104 = 0.0, $105 = 0.0, $11 = 0.0, $12 = 0, $14 = 0, $16 = 0, $20 = 0.0, $21 = 0.0, $27 = 0.0, $30 = 0, $32 = 0.0, $36 = 0.0, $38 = 0.0, $41 = 0.0, $46 = 0, $50 = 0.0, $60 = 0.0, $66 = 0, $7 = 0, $77 = 0, $8 = 0, $88 = 0.0, $9 = 0, $92 = 0.0, $97 = 0.0, $floorf = 0.0, $or$cond = 0, dest = 0, label = 0, sp = 0, stop = 0;
 sp = STACKTOP;
 $7 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($1 << 2) | 0) + 15 & -16) | 0;
 HEAP32[$6 >> 2] = 0;
 $8 = ($5 | 0) == 0;
 $$ = $8 ? .0625 : .03125;
 $9 = ($1 | 0) / 2 | 0;
 $10 = +($9 | 0);
 $11 = +($9 | 0);
 $12 = $9 + -5 | 0;
 $14 = ($9 * 6 | 0) + -102 | 0;
 $$04 = 0;
 $$05 = 0;
 while (1) {
  if (($$04 | 0) >= ($2 | 0)) break;
  $16 = Math_imul($$04, $1) | 0;
  $$012 = 0.0;
  $$07 = 0;
  $$09 = 0.0;
  while (1) {
   if (($$07 | 0) >= ($1 | 0)) break;
   $20 = +HEAPF32[$0 + ($$07 + $16 << 2) >> 2];
   $21 = $$09 + $20;
   HEAPF32[$7 + ($$07 << 2) >> 2] = $21;
   $27 = $$012 + $21 - $20 * 2.0;
   $$012 = $20 - $21 * .5;
   $$07 = $$07 + 1 | 0;
   $$09 = $27;
  }
  dest = $7;
  stop = dest + 48 | 0;
  do {
   HEAP32[dest >> 2] = 0;
   dest = dest + 4 | 0;
  } while ((dest | 0) < (stop | 0));
  $$02 = 0.0;
  $$110 = 0.0;
  $$18 = 0;
  while (1) {
   if (($$18 | 0) >= ($9 | 0)) {
    $$2$in$ph = $9;
    $$211$ph = 0.0;
    break;
   }
   $30 = $$18 << 1;
   $32 = +HEAPF32[$7 + ($30 << 2) >> 2];
   $36 = +HEAPF32[$7 + (($30 | 1) << 2) >> 2];
   $38 = $32 * $32 + $36 * $36;
   $41 = $$110 + $$ * ($38 - $$110);
   HEAPF32[$7 + ($$18 << 2) >> 2] = $41;
   $$02 = $$02 + $38;
   $$110 = $41;
   $$18 = $$18 + 1 | 0;
  }
  L11 : while (1) {
   $$2$in = $$2$in$ph;
   $$211 = $$211$ph;
   while (1) {
    $$2 = $$2$in + -1 | 0;
    if (($$2$in | 0) <= 0) break L11;
    $46 = $7 + ($$2 << 2) | 0;
    $50 = $$211 + (+HEAPF32[$46 >> 2] - $$211) * .125;
    HEAPF32[$46 >> 2] = $50;
    if ($$211$ph > $50) {
     $$2$in = $$2;
     $$211 = $50;
    } else {
     $$2$in$ph = $$2;
     $$211$ph = $50;
     continue L11;
    }
   }
  }
  $60 = $11 / (+Math_sqrt(+($$02 * $$211$ph * .5 * $10)) + 1.0000000036274937e-15) * 64.0;
  $$01 = 0;
  $$3 = 12;
  while (1) {
   if (($$3 | 0) >= ($12 | 0)) break;
   $floorf = +Math_floor(+($60 * (+HEAPF32[$7 + ($$3 << 2) >> 2] + 1.0000000036274937e-15)));
   $66 = $floorf > 127.0;
   $or$cond = $floorf < 0.0 & ($66 ^ 1);
   $$01 = $$01 + (HEAPU8[28640 + ~~($or$cond | $66 ? ($or$cond ? 0.0 : 127.0) : $floorf) >> 0] | 0) | 0;
   $$3 = $$3 + 4 | 0;
  }
  $77 = ($$01 << 8 | 0) / ($14 | 0) | 0;
  if (($77 | 0) > ($$05 | 0)) {
   HEAP32[$4 >> 2] = $$04;
   $$1 = $77;
  } else $$1 = $$05;
  $$04 = $$04 + 1 | 0;
  $$05 = $$1;
 }
 if (($$05 + -201 | 0) >>> 0 < 399 & ($8 ^ 1)) {
  HEAP32[$6 >> 2] = 1;
  $$06 = 0;
 } else $$06 = ($$05 | 0) > 200 & 1;
 $88 = +Math_sqrt(+(+($$05 * 27 | 0))) + -42.0;
 if ($88 < 0.0) {
  $105 = 0.0;
  label = 22;
 } else if ($88 > 163.0) {
  $92 = 163.0;
  $97 = $88;
 } else {
  $105 = $88;
  label = 22;
 }
 if ((label | 0) == 22) {
  $92 = $105;
  $97 = $105;
 }
 if ($92 * .006899999920278788 + -.139 < 0.0) {
  $102 = 0.0;
  $103 = +Math_sqrt(+$102);
  $104 = $103;
  HEAPF32[$3 >> 2] = $104;
  STACKTOP = sp;
  return $$06 | 0;
 }
 $102 = ($97 > 163.0 ? 163.0 : $97) * .006899999920278788 + -.139;
 $103 = +Math_sqrt(+$102);
 $104 = $103;
 HEAPF32[$3 >> 2] = $104;
 STACKTOP = sp;
 return $$06 | 0;
}

function _opus_encoder_init($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $10 = 0, $12 = 0, $14 = 0, $17 = 0, $18 = 0, $32 = 0, $4 = 0, $47 = 0, $54 = 0, $9 = 0, $vararg_buffer = 0, $vararg_buffer1 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 $vararg_buffer1 = sp + 8 | 0;
 $vararg_buffer = sp;
 $4 = sp + 12 | 0;
 L1 : do if (($1 | 0) < 16e3) if (($1 | 0) < 12e3) {
  switch ($1 | 0) {
  case 8e3:
   {
    break L1;
    break;
   }
  default:
   $$0 = -1;
  }
  STACKTOP = sp;
  return $$0 | 0;
 } else {
  switch ($1 | 0) {
  case 12e3:
   {
    break L1;
    break;
   }
  default:
   $$0 = -1;
  }
  STACKTOP = sp;
  return $$0 | 0;
 } else {
  if (($1 | 0) < 24e3) {
   switch ($1 | 0) {
   case 16e3:
    {
     break L1;
     break;
    }
   default:
    $$0 = -1;
   }
   STACKTOP = sp;
   return $$0 | 0;
  }
  if (($1 | 0) < 48e3) {
   switch ($1 | 0) {
   case 24e3:
    {
     break L1;
     break;
    }
   default:
    $$0 = -1;
   }
   STACKTOP = sp;
   return $$0 | 0;
  } else {
   switch ($1 | 0) {
   case 48e3:
    {
     break L1;
     break;
    }
   default:
    $$0 = -1;
   }
   STACKTOP = sp;
   return $$0 | 0;
  }
 } while (0);
 if (($2 + -1 | 0) >>> 0 >= 2) {
  $$0 = -1;
  STACKTOP = sp;
  return $$0 | 0;
 }
 switch ($3 | 0) {
 case 2051:
 case 2049:
 case 2048:
  break;
 default:
  {
   $$0 = -1;
   STACKTOP = sp;
   return $$0 | 0;
  }
 }
 _memset($0 | 0, 0, _opus_encoder_get_size($2) | 0) | 0;
 if (_silk_Get_Encoder_Size($4) | 0) {
  $$0 = -1;
  STACKTOP = sp;
  return $$0 | 0;
 }
 $9 = _align_421(HEAP32[$4 >> 2] | 0) | 0;
 HEAP32[$4 >> 2] = $9;
 $10 = _align_421(18036) | 0;
 HEAP32[$0 + 4 >> 2] = $10;
 $12 = $10 + $9 | 0;
 HEAP32[$0 >> 2] = $12;
 $14 = $0 + $12 | 0;
 HEAP32[$0 + 112 >> 2] = $2;
 HEAP32[$0 + 14088 >> 2] = $2;
 $17 = $0 + 144 | 0;
 HEAP32[$17 >> 2] = $1;
 $18 = $0 + 180 | 0;
 HEAP32[$18 >> 2] = 0;
 if (_silk_InitEncoder($0 + $10 | 0, 0, $0 + 8 | 0) | 0) {
  $$0 = -3;
  STACKTOP = sp;
  return $$0 | 0;
 }
 HEAP32[$0 + 8 >> 2] = $2;
 HEAP32[$0 + 12 >> 2] = $2;
 HEAP32[$0 + 16 >> 2] = HEAP32[$17 >> 2];
 HEAP32[$0 + 20 >> 2] = 16e3;
 HEAP32[$0 + 24 >> 2] = 8e3;
 HEAP32[$0 + 28 >> 2] = 16e3;
 HEAP32[$0 + 32 >> 2] = 20;
 HEAP32[$0 + 36 >> 2] = 25e3;
 HEAP32[$0 + 40 >> 2] = 0;
 $32 = $0 + 44 | 0;
 HEAP32[$32 >> 2] = 9;
 HEAP32[$0 + 48 >> 2] = 0;
 HEAP32[$0 + 56 >> 2] = 0;
 HEAP32[$0 + 60 >> 2] = 0;
 HEAP32[$0 + 76 >> 2] = 0;
 if (_celt_encoder_init($14, $1, $2, HEAP32[$18 >> 2] | 0) | 0) {
  $$0 = -3;
  STACKTOP = sp;
  return $$0 | 0;
 }
 HEAP32[$vararg_buffer >> 2] = 0;
 _opus_custom_encoder_ctl($14, 10016, $vararg_buffer) | 0;
 HEAP32[$vararg_buffer1 >> 2] = HEAP32[$32 >> 2];
 _opus_custom_encoder_ctl($14, 4010, $vararg_buffer1) | 0;
 HEAP32[$0 + 148 >> 2] = 1;
 HEAP32[$0 + 152 >> 2] = 1;
 HEAP32[$0 + 164 >> 2] = -1e3;
 HEAP32[$0 + 160 >> 2] = (Math_imul($1, $2) | 0) + 3e3;
 $47 = $0 + 108 | 0;
 HEAP32[$47 >> 2] = $3;
 HEAP32[$0 + 124 >> 2] = -1e3;
 HEAP32[$0 + 128 >> 2] = -1e3;
 HEAP32[$0 + 132 >> 2] = 1105;
 HEAP32[$0 + 120 >> 2] = -1e3;
 HEAP32[$0 + 136 >> 2] = -1e3;
 HEAP32[$0 + 140 >> 2] = -1;
 $54 = HEAP32[$17 >> 2] | 0;
 HEAP32[$0 + 172 >> 2] = ($54 | 0) / 100 | 0;
 HEAP32[$0 + 168 >> 2] = 24;
 HEAP32[$0 + 156 >> 2] = 5e3;
 HEAP32[$0 + 116 >> 2] = ($54 | 0) / 250 | 0;
 HEAP16[$0 + 14092 >> 1] = 16384;
 HEAPF32[$0 + 14100 >> 2] = 1.0;
 HEAP32[$0 + 14096 >> 2] = (_silk_lin2log(60) | 0) << 8;
 HEAP32[$0 + 14148 >> 2] = 1;
 HEAP32[$0 + 14120 >> 2] = 1001;
 HEAP32[$0 + 14136 >> 2] = 1105;
 _tonality_analysis_init($0 + 188 | 0, HEAP32[$17 >> 2] | 0);
 HEAP32[$0 + 192 >> 2] = HEAP32[$47 >> 2];
 $$0 = 0;
 STACKTOP = sp;
 return $$0 | 0;
}

function _quant_coarse_energy_impl($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) {
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
 $13 = +$13;
 $14 = $14 | 0;
 var $$$9 = 0, $$0 = 0.0, $$01 = 0.0, $$02 = 0, $$03 = 0, $$04 = 0, $$1 = 0, $$10 = 0, $$13 = 0, $$9 = 0, $$idx = 0, $$idx5 = 0, $100 = 0, $15 = 0, $16 = 0, $17 = 0, $28 = 0, $29 = 0, $30 = 0, $33 = 0, $34 = 0, $35 = 0, $38 = 0, $40 = 0.0, $42 = 0.0, $45 = 0.0, $47 = 0, $48 = 0.0, $49 = 0.0, $51 = 0, $54 = 0.0, $59 = 0, $61 = 0, $62 = 0, $63 = 0, $70 = 0, $72 = 0, $84 = 0, $86 = 0, $93 = 0.0, $94 = 0, $storemerge = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 $15 = sp;
 $16 = sp + 8 | 0;
 $17 = $15;
 HEAP32[$17 >> 2] = 0;
 HEAP32[$17 + 4 >> 2] = 0;
 if (($6 + 3 | 0) <= ($5 | 0)) _ec_enc_bit_logp($9, $12, 3);
 if (!$12) {
  $$0 = +HEAPF32[18952 + ($11 << 2) >> 2];
  $$01 = +HEAPF32[18936 + ($11 << 2) >> 2];
 } else {
  $$0 = .149993896484375;
  $$01 = 0.0;
 }
 $28 = $0 + 8 | 0;
 $$idx = $9 + 20 | 0;
 $$idx5 = $9 + 28 | 0;
 $29 = $10 * 3 | 0;
 $30 = ($14 | 0) == 0;
 $$02 = 0;
 $$04 = $1;
 while (1) {
  if (($$04 | 0) >= ($2 | 0)) break;
  $33 = Math_imul($29, $2 - $$04 | 0) | 0;
  $34 = ($$04 | 0) != ($1 | 0);
  $35 = ($$04 | 0) < 20;
  $$03 = 0;
  $$1 = $$02;
  do {
   $38 = $$04 + (Math_imul($$03, HEAP32[$28 >> 2] | 0) | 0) | 0;
   $40 = +HEAPF32[$3 + ($38 << 2) >> 2];
   $42 = +HEAPF32[$4 + ($38 << 2) >> 2];
   $45 = $$01 * ($42 < -9.0 ? -9.0 : $42);
   $47 = $15 + ($$03 << 2) | 0;
   $48 = +HEAPF32[$47 >> 2];
   $49 = $40 - $45 - $48;
   $51 = ~~+Math_floor(+($49 + .5));
   $54 = ($42 < -28.0 ? -28.0 : $42) - $13;
   if (($51 | 0) < 0 & $40 < $54) {
    $59 = $51 + ~~($54 - $40) | 0;
    $storemerge = ($59 | 0) < 0 ? $59 : 0;
   } else $storemerge = $51;
   HEAP32[$16 >> 2] = $storemerge;
   $61 = _ec_tell_71(HEAP32[$$idx >> 2] | 0, HEAP32[$$idx5 >> 2] | 0) | 0;
   $62 = $5 - $61 | 0;
   $63 = $62 - $33 | 0;
   if (($63 | 0) < 24 & $34) {
    $$9 = ($storemerge | 0) < 1 ? $storemerge : 1;
    HEAP32[$16 >> 2] = $$9;
    if (($63 | 0) < 16) {
     $$$9 = ($$9 | 0) > -1 ? $$9 : -1;
     HEAP32[$16 >> 2] = $$$9;
     $70 = $$$9;
    } else $70 = $$9;
   } else $70 = $storemerge;
   if ($30 | ($$04 | 0) < 2) $84 = $70; else {
    $$10 = ($70 | 0) < 0 ? $70 : 0;
    HEAP32[$16 >> 2] = $$10;
    $84 = $$10;
   }
   do if (($62 | 0) > 14) {
    $72 = ($35 ? $$04 : 20) << 1;
    _ec_laplace_encode($9, $16, (HEAPU8[$7 + $72 >> 0] | 0) << 7, (HEAPU8[$7 + ($72 | 1) >> 0] | 0) << 6);
    $94 = HEAP32[$16 >> 2] | 0;
   } else {
    if (($62 | 0) > 1) {
     $86 = ($84 | 0) < -1 ? -1 : ($84 | 0) < 1 ? $84 : 1;
     HEAP32[$16 >> 2] = $86;
     _ec_enc_icdf($9, $86 << 1 ^ $86 >> 31, 29895, 2);
     $94 = $86;
     break;
    }
    if (($61 | 0) < ($5 | 0)) {
     $$13 = ($84 | 0) < 0 ? $84 : 0;
     HEAP32[$16 >> 2] = $$13;
     _ec_enc_bit_logp($9, 0 - $$13 | 0, 1);
     $94 = $$13;
     break;
    } else {
     HEAP32[$16 >> 2] = -1;
     $94 = -1;
     break;
    }
   } while (0);
   $93 = +($94 | 0);
   HEAPF32[$8 + ($$04 + (Math_imul($$03, HEAP32[$28 >> 2] | 0) | 0) << 2) >> 2] = $49 - $93;
   $100 = $storemerge - $94 | 0;
   $$1 = $$1 + (($100 | 0) > -1 ? $100 : 0 - $100 | 0) | 0;
   HEAPF32[$4 + ($$04 + (Math_imul($$03, HEAP32[$28 >> 2] | 0) | 0) << 2) >> 2] = $45 + $48 + $93;
   HEAPF32[$47 >> 2] = $48 + $93 - $$0 * $93;
   $$03 = $$03 + 1 | 0;
  } while (($$03 | 0) < ($10 | 0));
  $$02 = $$1;
  $$04 = $$04 + 1 | 0;
 }
 STACKTOP = sp;
 return ($30 ? $$02 : 0) | 0;
}

function _silk_setup_complexity($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$pre$phiZ2D = 0, $$sink = 0, $17 = 0, $20 = 0, $21 = 0, $29 = 0, $32 = 0, $33 = 0, $41 = 0, $44 = 0, $45 = 0, $5 = 0, $53 = 0, $56 = 0, $57 = 0, $65 = 0, $66 = 0, $68 = 0, $70 = 0, $77 = 0, $79 = 0, $8 = 0, $88 = 0, $9 = 0, $91 = 0, $93 = 0;
 do if (($1 | 0) < 1) {
  HEAP32[$0 + 4640 >> 2] = 0;
  HEAP32[$0 + 4648 >> 2] = 52429;
  $5 = $0 + 4644 | 0;
  HEAP32[$5 >> 2] = 6;
  HEAP32[$0 + 4632 >> 2] = 12;
  $8 = HEAP32[$0 + 4572 >> 2] | 0;
  $9 = $8 * 3 | 0;
  HEAP32[$0 + 4596 >> 2] = $9;
  HEAP32[$0 + 4624 >> 2] = 1;
  HEAP32[$0 + 4628 >> 2] = 0;
  HEAP32[$0 + 4656 >> 2] = 2;
  $$pre$phiZ2D = $5;
  $$sink = 0;
  $88 = 6;
  $91 = $8;
  $93 = $9;
 } else {
  if (($1 | 0) == 1) {
   HEAP32[$0 + 4640 >> 2] = 1;
   HEAP32[$0 + 4648 >> 2] = 49807;
   $17 = $0 + 4644 | 0;
   HEAP32[$17 >> 2] = 8;
   HEAP32[$0 + 4632 >> 2] = 14;
   $20 = HEAP32[$0 + 4572 >> 2] | 0;
   $21 = $20 * 5 | 0;
   HEAP32[$0 + 4596 >> 2] = $21;
   HEAP32[$0 + 4624 >> 2] = 1;
   HEAP32[$0 + 4628 >> 2] = 0;
   HEAP32[$0 + 4656 >> 2] = 3;
   $$pre$phiZ2D = $17;
   $$sink = 0;
   $88 = 8;
   $91 = $20;
   $93 = $21;
   break;
  }
  if (($1 | 0) < 3) {
   HEAP32[$0 + 4640 >> 2] = 0;
   HEAP32[$0 + 4648 >> 2] = 52429;
   $29 = $0 + 4644 | 0;
   HEAP32[$29 >> 2] = 6;
   HEAP32[$0 + 4632 >> 2] = 12;
   $32 = HEAP32[$0 + 4572 >> 2] | 0;
   $33 = $32 * 3 | 0;
   HEAP32[$0 + 4596 >> 2] = $33;
   HEAP32[$0 + 4624 >> 2] = 2;
   HEAP32[$0 + 4628 >> 2] = 0;
   HEAP32[$0 + 4656 >> 2] = 2;
   $$pre$phiZ2D = $29;
   $$sink = 0;
   $88 = 6;
   $91 = $32;
   $93 = $33;
   break;
  }
  if (($1 | 0) == 3) {
   HEAP32[$0 + 4640 >> 2] = 1;
   HEAP32[$0 + 4648 >> 2] = 49807;
   $41 = $0 + 4644 | 0;
   HEAP32[$41 >> 2] = 8;
   HEAP32[$0 + 4632 >> 2] = 14;
   $44 = HEAP32[$0 + 4572 >> 2] | 0;
   $45 = $44 * 5 | 0;
   HEAP32[$0 + 4596 >> 2] = $45;
   HEAP32[$0 + 4624 >> 2] = 2;
   HEAP32[$0 + 4628 >> 2] = 0;
   HEAP32[$0 + 4656 >> 2] = 4;
   $$pre$phiZ2D = $41;
   $$sink = 0;
   $88 = 8;
   $91 = $44;
   $93 = $45;
   break;
  }
  if (($1 | 0) < 6) {
   HEAP32[$0 + 4640 >> 2] = 1;
   HEAP32[$0 + 4648 >> 2] = 48497;
   $53 = $0 + 4644 | 0;
   HEAP32[$53 >> 2] = 10;
   HEAP32[$0 + 4632 >> 2] = 16;
   $56 = HEAP32[$0 + 4572 >> 2] | 0;
   $57 = $56 * 5 | 0;
   HEAP32[$0 + 4596 >> 2] = $57;
   HEAP32[$0 + 4624 >> 2] = 2;
   HEAP32[$0 + 4628 >> 2] = 1;
   HEAP32[$0 + 4656 >> 2] = 6;
   $$pre$phiZ2D = $53;
   $$sink = $56 * 983 | 0;
   $88 = 10;
   $91 = $56;
   $93 = $57;
   break;
  }
  $65 = HEAP32[$0 + 4572 >> 2] | 0;
  $66 = $0 + 4640 | 0;
  if (($1 | 0) < 8) {
   HEAP32[$66 >> 2] = 1;
   HEAP32[$0 + 4648 >> 2] = 47186;
   $68 = $0 + 4644 | 0;
   HEAP32[$68 >> 2] = 12;
   HEAP32[$0 + 4632 >> 2] = 20;
   $70 = $65 * 5 | 0;
   HEAP32[$0 + 4596 >> 2] = $70;
   HEAP32[$0 + 4624 >> 2] = 3;
   HEAP32[$0 + 4628 >> 2] = 1;
   HEAP32[$0 + 4656 >> 2] = 8;
   $$pre$phiZ2D = $68;
   $$sink = $65 * 983 | 0;
   $88 = 12;
   $91 = $65;
   $93 = $70;
   break;
  } else {
   HEAP32[$66 >> 2] = 2;
   HEAP32[$0 + 4648 >> 2] = 45875;
   $77 = $0 + 4644 | 0;
   HEAP32[$77 >> 2] = 16;
   HEAP32[$0 + 4632 >> 2] = 24;
   $79 = $65 * 5 | 0;
   HEAP32[$0 + 4596 >> 2] = $79;
   HEAP32[$0 + 4624 >> 2] = 4;
   HEAP32[$0 + 4628 >> 2] = 1;
   HEAP32[$0 + 4656 >> 2] = 16;
   $$pre$phiZ2D = $77;
   $$sink = $65 * 983 | 0;
   $88 = 16;
   $91 = $65;
   $93 = $79;
   break;
  }
 } while (0);
 HEAP32[$0 + 4668 >> 2] = $$sink;
 HEAP32[$$pre$phiZ2D >> 2] = _silk_min_int_251($88, HEAP32[$0 + 4636 >> 2] | 0) | 0;
 HEAP32[$0 + 4600 >> 2] = ($91 * 5 | 0) + ($93 << 1);
 HEAP32[$0 + 4620 >> 2] = $1;
 return 0;
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

function _silk_VQ_WMat_EC_c($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) {
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
 var $$0 = 0, $$01 = 0, $103 = 0, $106 = 0, $110 = 0, $113 = 0, $120 = 0, $124 = 0, $127 = 0, $13 = 0, $134 = 0, $137 = 0, $144 = 0, $149 = 0, $153 = 0, $158 = 0, $16 = 0, $19 = 0, $22 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $46 = 0, $50 = 0, $52 = 0, $56 = 0, $58 = 0, $62 = 0, $64 = 0, $68 = 0, $71 = 0, $74 = 0, $76 = 0, $83 = 0, $86 = 0, $89 = 0, $93 = 0, $96 = 0;
 $13 = HEAP32[$5 >> 2] << 7;
 $16 = HEAP32[$5 + 4 >> 2] << 7;
 $19 = HEAP32[$5 + 8 >> 2] << 7;
 $22 = HEAP32[$5 + 12 >> 2] << 7;
 $26 = 0 - (HEAP32[$5 + 16 >> 2] << 7) | 0;
 HEAP32[$2 >> 2] = 2147483647;
 HEAP32[$1 >> 2] = 2147483647;
 HEAP8[$0 >> 0] = 0;
 $27 = $4 + 4 | 0;
 $28 = $4 + 8 | 0;
 $29 = $4 + 12 | 0;
 $30 = $4 + 16 | 0;
 $31 = $4 + 28 | 0;
 $32 = $4 + 32 | 0;
 $33 = $4 + 36 | 0;
 $34 = $4 + 24 | 0;
 $35 = $4 + 52 | 0;
 $36 = $4 + 56 | 0;
 $37 = $4 + 48 | 0;
 $38 = $4 + 76 | 0;
 $39 = $4 + 72 | 0;
 $40 = $26 << 1;
 $41 = $4 + 96 | 0;
 $42 = $9 << 16 >> 16;
 $$0 = $6;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) >= ($11 | 0)) break;
  $46 = HEAPU8[$7 + $$01 >> 0] | 0;
  $50 = HEAP8[$$0 + 1 >> 0] | 0;
  $52 = (Math_imul(HEAP32[$27 >> 2] | 0, $50) | 0) - $13 | 0;
  $56 = HEAP8[$$0 + 2 >> 0] | 0;
  $58 = $52 + (Math_imul(HEAP32[$28 >> 2] | 0, $56) | 0) | 0;
  $62 = HEAP8[$$0 + 3 >> 0] | 0;
  $64 = $58 + (Math_imul(HEAP32[$29 >> 2] | 0, $62) | 0) | 0;
  $68 = HEAP8[$$0 + 4 >> 0] | 0;
  $71 = $64 + (Math_imul(HEAP32[$30 >> 2] | 0, $68) | 0) << 1;
  $74 = HEAP8[$$0 >> 0] | 0;
  $76 = $71 + (Math_imul(HEAP32[$4 >> 2] | 0, $74) | 0) | 0;
  $83 = (Math_imul($76 >> 16, $74) | 0) + ((Math_imul($76 & 65535, $74) | 0) >> 16) + 32801 | 0;
  $86 = (Math_imul(HEAP32[$31 >> 2] | 0, $56) | 0) - $16 | 0;
  $89 = $86 + (Math_imul(HEAP32[$32 >> 2] | 0, $62) | 0) | 0;
  $93 = $89 + (Math_imul(HEAP32[$33 >> 2] | 0, $68) | 0) << 1;
  $96 = $93 + (Math_imul(HEAP32[$34 >> 2] | 0, $50) | 0) | 0;
  $103 = $83 + ((Math_imul($96 >> 16, $50) | 0) + ((Math_imul($96 & 65535, $50) | 0) >> 16)) | 0;
  $106 = (Math_imul(HEAP32[$35 >> 2] | 0, $62) | 0) - $19 | 0;
  $110 = $106 + (Math_imul(HEAP32[$36 >> 2] | 0, $68) | 0) << 1;
  $113 = $110 + (Math_imul(HEAP32[$37 >> 2] | 0, $56) | 0) | 0;
  $120 = $103 + ((Math_imul($113 >> 16, $56) | 0) + ((Math_imul($113 & 65535, $56) | 0) >> 16)) | 0;
  $124 = (Math_imul(HEAP32[$38 >> 2] | 0, $68) | 0) - $22 << 1;
  $127 = $124 + (Math_imul(HEAP32[$39 >> 2] | 0, $62) | 0) | 0;
  $134 = $120 + ((Math_imul($127 >> 16, $62) | 0) + ((Math_imul($127 & 65535, $62) | 0) >> 16)) | 0;
  $137 = $40 + (Math_imul(HEAP32[$41 >> 2] | 0, $68) | 0) | 0;
  $144 = $134 + ((Math_imul($137 >> 16, $68) | 0) + ((Math_imul($137 & 65535, $68) | 0) >> 16)) | 0;
  if (($144 | 0) > -1) {
   $149 = $144 + (($46 | 0) > ($10 | 0) ? $46 - $10 << 11 : 0) | 0;
   $153 = Math_imul($42, ((_silk_lin2log($149) | 0) << 16) + -125829120 >> 16) | 0;
   $158 = $153 + (HEAPU8[$8 + $$01 >> 0] << 2) | 0;
   if (($158 | 0) <= (HEAP32[$2 >> 2] | 0)) {
    HEAP32[$2 >> 2] = $158;
    HEAP32[$1 >> 2] = $149;
    HEAP8[$0 >> 0] = $$01;
    HEAP32[$3 >> 2] = $46;
   }
  }
  $$0 = $$0 + 5 | 0;
  $$01 = $$01 + 1 | 0;
 }
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

function _check_control_input($0) {
 $0 = $0 | 0;
 var $$0 = 0, $2 = 0, $26 = 0, $29 = 0, $4 = 0, $6 = 0, $8 = 0, label = 0;
 $2 = HEAP32[$0 + 8 >> 2] | 0;
 L1 : do if (($2 | 0) < 24e3) {
  if (($2 | 0) < 12e3) switch ($2 | 0) {
  case 8e3:
   {
    label = 2;
    break L1;
    break;
   }
  default:
   {
    $$0 = -102;
    break L1;
   }
  }
  if (($2 | 0) < 16e3) switch ($2 | 0) {
  case 12e3:
   {
    label = 2;
    break L1;
    break;
   }
  default:
   {
    $$0 = -102;
    break L1;
   }
  } else switch ($2 | 0) {
  case 16e3:
   {
    label = 2;
    break L1;
    break;
   }
  default:
   {
    $$0 = -102;
    break L1;
   }
  }
 } else if (($2 | 0) < 44100) if (($2 | 0) < 32e3) switch ($2 | 0) {
 case 24e3:
  {
   label = 2;
   break L1;
   break;
  }
 default:
  {
   $$0 = -102;
   break L1;
  }
 } else switch ($2 | 0) {
 case 32e3:
  {
   label = 2;
   break L1;
   break;
  }
 default:
  {
   $$0 = -102;
   break L1;
  }
 } else if (($2 | 0) < 48e3) switch ($2 | 0) {
 case 44100:
  {
   label = 2;
   break L1;
   break;
  }
 default:
  {
   $$0 = -102;
   break L1;
  }
 } else switch ($2 | 0) {
 case 48e3:
  {
   label = 2;
   break L1;
   break;
  }
 default:
  {
   $$0 = -102;
   break L1;
  }
 } while (0);
 L19 : do if ((label | 0) == 2) {
  $4 = HEAP32[$0 + 20 >> 2] | 0;
  L21 : do if (($4 | 0) < 12e3) switch ($4 | 0) {
  case 8e3:
   break;
  default:
   {
    $$0 = -102;
    break L19;
   }
  } else if (($4 | 0) < 16e3) switch ($4 | 0) {
  case 12e3:
   {
    break L21;
    break;
   }
  default:
   {
    $$0 = -102;
    break L19;
   }
  } else switch ($4 | 0) {
  case 16e3:
   {
    break L21;
    break;
   }
  default:
   {
    $$0 = -102;
    break L19;
   }
  } while (0);
  $6 = HEAP32[$0 + 12 >> 2] | 0;
  L28 : do if (($6 | 0) < 12e3) switch ($6 | 0) {
  case 8e3:
   break;
  default:
   {
    $$0 = -102;
    break L19;
   }
  } else if (($6 | 0) < 16e3) switch ($6 | 0) {
  case 12e3:
   {
    break L28;
    break;
   }
  default:
   {
    $$0 = -102;
    break L19;
   }
  } else switch ($6 | 0) {
  case 16e3:
   {
    break L28;
    break;
   }
  default:
   {
    $$0 = -102;
    break L19;
   }
  } while (0);
  $8 = HEAP32[$0 + 16 >> 2] | 0;
  L35 : do if (($8 | 0) < 12e3) switch ($8 | 0) {
  case 8e3:
   break;
  default:
   {
    $$0 = -102;
    break L19;
   }
  } else if (($8 | 0) < 16e3) switch ($8 | 0) {
  case 12e3:
   {
    break L35;
    break;
   }
  default:
   {
    $$0 = -102;
    break L19;
   }
  } else switch ($8 | 0) {
  case 16e3:
   {
    break L35;
    break;
   }
  default:
   {
    $$0 = -102;
    break L19;
   }
  } while (0);
  if (($8 | 0) > ($4 | 0) | ($6 | 0) < ($4 | 0) | ($8 | 0) > ($6 | 0)) $$0 = -102; else {
   switch (HEAP32[$0 + 24 >> 2] | 0) {
   case 60:
   case 40:
   case 20:
   case 10:
    break;
   default:
    {
     $$0 = -103;
     break L19;
    }
   }
   if ((HEAP32[$0 + 32 >> 2] | 0) >>> 0 > 100) $$0 = -105; else if ((HEAP32[$0 + 48 >> 2] | 0) >>> 0 > 1) $$0 = -108; else if ((HEAP32[$0 + 52 >> 2] | 0) >>> 0 > 1) $$0 = -109; else if ((HEAP32[$0 + 40 >> 2] | 0) >>> 0 > 1) $$0 = -107; else {
    $26 = HEAP32[$0 >> 2] | 0;
    if (($26 + -1 | 0) >>> 0 > 1) $$0 = -111; else {
     $29 = HEAP32[$0 + 4 >> 2] | 0;
     if (($29 + -1 | 0) >>> 0 > 1 | ($29 | 0) > ($26 | 0)) $$0 = -111; else return ((HEAP32[$0 + 36 >> 2] | 0) >>> 0 > 10 ? -106 : 0) | 0;
    }
   }
  }
 } while (0);
 return $$0 | 0;
}

function _silk_setup_fs($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$012 = 0, $$013 = 0, $$015 = 0, $$1 = 0, $$phi$trans$insert = 0, $$pre$phiZ2D = 0, $$pre16$pre$phiZZ2D = 0, $12 = 0, $17 = 0, $18 = 0, $20 = 0, $24 = 0, $29 = 0, $3 = 0, $30 = 0, $32 = 0, $35 = 0, $36 = 0, $39 = 0, $53 = 0, $54 = 0, $57 = 0, $6 = 0, $66 = 0, $77 = 0, $sext2 = 0, label = 0;
 $3 = $0 + 4608 | 0;
 if ((HEAP32[$3 >> 2] | 0) == ($2 | 0)) {
  $$phi$trans$insert = $0 + 4572 | 0;
  $$1 = 0;
  $$pre$phiZ2D = $$phi$trans$insert;
  $35 = HEAP32[$$phi$trans$insert >> 2] | 0;
 } else {
  $6 = ($2 | 0) == 10;
  L4 : do if ($6) {
   $$015 = 0;
   label = 6;
  } else {
   switch ($2 | 0) {
   case 60:
   case 40:
   case 20:
    {
     $$013 = 0;
     break;
    }
   default:
    if (($2 | 0) < 11) {
     $$015 = -103;
     label = 6;
     break L4;
    } else $$013 = -103;
   }
   HEAP32[$0 + 5740 >> 2] = ($2 | 0) / 20 | 0;
   HEAP32[$0 + 4576 >> 2] = 4;
   $24 = $1 << 16 >> 16;
   HEAP32[$0 + 4580 >> 2] = $24 * 20;
   HEAP32[$0 + 4544 >> 2] = $24 * 24;
   $29 = $0 + 4572 | 0;
   $30 = HEAP32[$29 >> 2] | 0;
   $32 = $0 + 4684 | 0;
   if (($30 | 0) == 8) {
    HEAP32[$32 >> 2] = 32326;
    $$012 = $$013;
    $$pre16$pre$phiZZ2D = $29;
    $77 = 8;
    break;
   } else {
    HEAP32[$32 >> 2] = 32292;
    $$012 = $$013;
    $$pre16$pre$phiZZ2D = $29;
    $77 = $30;
    break;
   }
  } while (0);
  do if ((label | 0) == 6) {
   HEAP32[$0 + 5740 >> 2] = 1;
   HEAP32[$0 + 4576 >> 2] = $6 ? 2 : 1;
   $12 = $1 << 16 >> 16;
   HEAP32[$0 + 4580 >> 2] = Math_imul($2 << 16 >> 16, $12) | 0;
   HEAP32[$0 + 4544 >> 2] = $12 * 14;
   $17 = $0 + 4572 | 0;
   $18 = HEAP32[$17 >> 2] | 0;
   $20 = $0 + 4684 | 0;
   if (($18 | 0) == 8) {
    HEAP32[$20 >> 2] = 32349;
    $$012 = $$015;
    $$pre16$pre$phiZZ2D = $17;
    $77 = 8;
    break;
   } else {
    HEAP32[$20 >> 2] = 32337;
    $$012 = $$015;
    $$pre16$pre$phiZZ2D = $17;
    $77 = $18;
    break;
   }
  } while (0);
  HEAP32[$3 >> 2] = $2;
  HEAP32[$0 + 4604 >> 2] = 0;
  $$1 = $$012;
  $$pre$phiZ2D = $$pre16$pre$phiZZ2D;
  $35 = $77;
 }
 if (($35 | 0) == ($1 | 0)) return $$1 | 0;
 $36 = $0 + 7164 | 0;
 HEAP32[$36 >> 2] = 0;
 HEAP32[$36 + 4 >> 2] = 0;
 HEAP32[$36 + 8 >> 2] = 0;
 $39 = $0 + 16 | 0;
 HEAP32[$39 >> 2] = 0;
 HEAP32[$39 + 4 >> 2] = 0;
 HEAP32[$0 + 5736 >> 2] = 0;
 HEAP32[$0 + 5744 >> 2] = 0;
 HEAP32[$0 + 4604 >> 2] = 0;
 _memset($0 + 144 | 0, 0, 4384) | 0;
 HEAP32[$0 + 4540 >> 2] = 100;
 HEAP32[$0 + 4660 >> 2] = 1;
 HEAP8[$36 >> 0] = 10;
 HEAP32[$0 + 4472 >> 2] = 100;
 HEAP32[$0 + 4488 >> 2] = 65536;
 HEAP8[$0 + 4537 >> 0] = 0;
 HEAP32[$$pre$phiZ2D >> 2] = $1;
 $53 = HEAP32[$0 + 4576 >> 2] | 0;
 $54 = ($53 | 0) == 4;
 HEAP32[$0 + 4684 >> 2] = ($1 | 0) == 8 ? ($54 ? 32326 : 32349) : $54 ? 32292 : 32337;
 $57 = ($1 | 4 | 0) == 12;
 HEAP32[$0 + 4636 >> 2] = $57 ? 10 : 16;
 HEAP32[$0 + 4688 >> 2] = $57 ? 19028 : 19068;
 HEAP32[$0 + 4584 >> 2] = $1 * 5;
 HEAP32[$0 + 4580 >> 2] = Math_imul($1 * 327680 >> 16, $53 << 16 >> 16) | 0;
 $sext2 = $1 << 16;
 $66 = $sext2 >> 16;
 HEAP32[$0 + 4588 >> 2] = $66 * 20;
 HEAP32[$0 + 4592 >> 2] = $sext2 >> 15;
 HEAP32[$0 + 4548 >> 2] = $66 * 18;
 HEAP32[$0 + 4544 >> 2] = Math_imul($66, ($53 | 0) == 4 ? 24 : 14) | 0;
 HEAP32[$0 + 4680 >> 2] = ($1 | 0) == 16 ? 32224 : ($1 | 0) == 12 ? 32218 : 32209;
 return $$1 | 0;
}

function _silk_NSQ_c($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) {
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
 var $$ = 0, $$0 = 0, $$02 = 0, $$03 = 0, $$04 = 0, $$05 = 0, $$1 = 0, $102 = 0, $19 = 0, $20 = 0, $21 = 0, $30 = 0, $33 = 0, $34 = 0, $35 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $42 = 0, $45 = 0, $48 = 0, $49 = 0, $50 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $60 = 0, $62 = 0, $64 = 0, $66 = 0, $70 = 0, $71 = 0, $74 = 0, $77 = 0, $79 = 0, $81 = 0, $90 = 0, sp = 0;
 sp = STACKTOP;
 HEAP32[$1 + 4340 >> 2] = HEAP8[$2 + 34 >> 0];
 $19 = $1 + 4328 | 0;
 $20 = HEAP32[$19 >> 2] | 0;
 $21 = $2 + 29 | 0;
 $30 = HEAP16[27932 + (HEAP8[$21 >> 0] >> 1 << 2) + (HEAP8[$2 + 30 >> 0] << 1) >> 1] | 0;
 $$ = (HEAP8[$2 + 31 >> 0] | 0) != 4 & 1;
 $33 = $0 + 4588 | 0;
 $34 = HEAP32[$33 >> 2] | 0;
 $35 = $0 + 4580 | 0;
 $37 = $34 + (HEAP32[$35 >> 2] | 0) | 0;
 $38 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($37 << 2) | 0) + 15 & -16) | 0;
 $39 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($37 << 1) | 0) + 15 & -16) | 0;
 $40 = $0 + 4584 | 0;
 $42 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * (HEAP32[$40 >> 2] << 2) | 0) + 15 & -16) | 0;
 HEAP32[$1 + 4336 >> 2] = $34;
 $45 = $1 + 4332 | 0;
 HEAP32[$45 >> 2] = HEAP32[$33 >> 2];
 $48 = $0 + 4576 | 0;
 $49 = $$ ^ 1;
 $50 = $1 + 4348 | 0;
 $52 = $$ << 1 ^ 3;
 $53 = $0 + 4636 | 0;
 $54 = $0 + 4632 | 0;
 $$0 = $1 + (HEAP32[$33 >> 2] << 1) | 0;
 $$02 = $3;
 $$03 = $4;
 $$04 = $20;
 $$05 = 0;
 while (1) {
  $55 = HEAP32[$48 >> 2] | 0;
  if (($$05 | 0) >= ($55 | 0)) break;
  $60 = $5 + (($$05 >> 1 | $49) << 4 << 1) | 0;
  $62 = $6 + ($$05 * 5 << 1) | 0;
  $64 = $7 + ($$05 * 24 << 1) | 0;
  $66 = HEAP32[$8 + ($$05 << 2) >> 2] | 0;
  $70 = $66 >> 2 | $66 >>> 1 << 16;
  HEAP32[$50 >> 2] = 0;
  $71 = HEAP8[$21 >> 0] | 0;
  if ($71 << 24 >> 24 == 2) {
   $74 = HEAP32[$12 + ($$05 << 2) >> 2] | 0;
   if (!($$05 & $52)) {
    $77 = HEAP32[$33 >> 2] | 0;
    $79 = HEAP32[$53 >> 2] | 0;
    $81 = $77 - $74 - $79 + -2 | 0;
    _silk_LPC_analysis_filter($39 + ($81 << 1) | 0, $1 + ($81 + (Math_imul($$05, HEAP32[$40 >> 2] | 0) | 0) << 1) | 0, $60, $77 - $81 | 0, $79);
    HEAP32[$50 >> 2] = 1;
    HEAP32[$45 >> 2] = HEAP32[$33 >> 2];
    $$1 = $74;
    $90 = HEAP8[$21 >> 0] | 0;
   } else {
    $$1 = $74;
    $90 = 2;
   }
  } else {
   $$1 = $$04;
   $90 = $71;
  }
  _silk_nsq_scale_states($0, $1, $$02, $42, $39, $38, $$05, $14, $11, $12, $90 << 24 >> 24);
  _silk_noise_shape_quantizer($1, HEAP8[$21 >> 0] | 0, $42, $$03, $$0, $38, $60, $62, $64, $$1, $70, HEAP32[$9 + ($$05 << 2) >> 2] | 0, HEAP32[$10 + ($$05 << 2) >> 2] | 0, HEAP32[$11 + ($$05 << 2) >> 2] | 0, $13, $30, HEAP32[$40 >> 2] | 0, HEAP32[$54 >> 2] | 0, HEAP32[$53 >> 2] | 0);
  $102 = HEAP32[$40 >> 2] | 0;
  $$0 = $$0 + ($102 << 1) | 0;
  $$02 = $$02 + ($102 << 1) | 0;
  $$03 = $$03 + $102 | 0;
  $$04 = $$1;
  $$05 = $$05 + 1 | 0;
 }
 HEAP32[$19 >> 2] = HEAP32[$12 + ($55 + -1 << 2) >> 2];
 _memmove($1 | 0, $1 + (HEAP32[$35 >> 2] << 1) | 0, HEAP32[$33 >> 2] << 1 | 0) | 0;
 _memmove($1 + 1280 | 0, $1 + 1280 + (HEAP32[$35 >> 2] << 2) | 0, HEAP32[$33 >> 2] << 2 | 0) | 0;
 STACKTOP = sp;
 return;
}

function _silk_noise_shape_quantizer_short_prediction_c_118($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $103 = 0, $109 = 0, $111 = 0, $115 = 0, $121 = 0, $124 = 0, $128 = 0, $13 = 0, $134 = 0, $136 = 0, $140 = 0, $146 = 0, $148 = 0, $15 = 0, $152 = 0, $158 = 0, $160 = 0, $164 = 0, $170 = 0, $172 = 0, $176 = 0, $182 = 0, $184 = 0, $188 = 0, $19 = 0, $25 = 0, $27 = 0, $31 = 0, $37 = 0, $39 = 0, $4 = 0, $43 = 0, $49 = 0, $51 = 0, $55 = 0, $61 = 0, $63 = 0, $67 = 0, $7 = 0, $73 = 0, $75 = 0, $79 = 0, $85 = 0, $87 = 0, $91 = 0, $97 = 0, $99 = 0;
 $4 = HEAP32[$0 >> 2] | 0;
 $7 = HEAP16[$1 >> 1] | 0;
 $13 = ($2 >> 1) + ((Math_imul($4 >> 16, $7) | 0) + ((Math_imul($4 & 65535, $7) | 0) >> 16)) | 0;
 $15 = HEAP32[$0 + -4 >> 2] | 0;
 $19 = HEAP16[$1 + 2 >> 1] | 0;
 $25 = $13 + ((Math_imul($15 >> 16, $19) | 0) + ((Math_imul($15 & 65535, $19) | 0) >> 16)) | 0;
 $27 = HEAP32[$0 + -8 >> 2] | 0;
 $31 = HEAP16[$1 + 4 >> 1] | 0;
 $37 = $25 + ((Math_imul($27 >> 16, $31) | 0) + ((Math_imul($27 & 65535, $31) | 0) >> 16)) | 0;
 $39 = HEAP32[$0 + -12 >> 2] | 0;
 $43 = HEAP16[$1 + 6 >> 1] | 0;
 $49 = $37 + ((Math_imul($39 >> 16, $43) | 0) + ((Math_imul($39 & 65535, $43) | 0) >> 16)) | 0;
 $51 = HEAP32[$0 + -16 >> 2] | 0;
 $55 = HEAP16[$1 + 8 >> 1] | 0;
 $61 = $49 + ((Math_imul($51 >> 16, $55) | 0) + ((Math_imul($51 & 65535, $55) | 0) >> 16)) | 0;
 $63 = HEAP32[$0 + -20 >> 2] | 0;
 $67 = HEAP16[$1 + 10 >> 1] | 0;
 $73 = $61 + ((Math_imul($63 >> 16, $67) | 0) + ((Math_imul($63 & 65535, $67) | 0) >> 16)) | 0;
 $75 = HEAP32[$0 + -24 >> 2] | 0;
 $79 = HEAP16[$1 + 12 >> 1] | 0;
 $85 = $73 + ((Math_imul($75 >> 16, $79) | 0) + ((Math_imul($75 & 65535, $79) | 0) >> 16)) | 0;
 $87 = HEAP32[$0 + -28 >> 2] | 0;
 $91 = HEAP16[$1 + 14 >> 1] | 0;
 $97 = $85 + ((Math_imul($87 >> 16, $91) | 0) + ((Math_imul($87 & 65535, $91) | 0) >> 16)) | 0;
 $99 = HEAP32[$0 + -32 >> 2] | 0;
 $103 = HEAP16[$1 + 16 >> 1] | 0;
 $109 = $97 + ((Math_imul($99 >> 16, $103) | 0) + ((Math_imul($99 & 65535, $103) | 0) >> 16)) | 0;
 $111 = HEAP32[$0 + -36 >> 2] | 0;
 $115 = HEAP16[$1 + 18 >> 1] | 0;
 $121 = $109 + ((Math_imul($111 >> 16, $115) | 0) + ((Math_imul($111 & 65535, $115) | 0) >> 16)) | 0;
 if (($2 | 0) != 16) {
  $$0 = $121;
  return $$0 | 0;
 }
 $124 = HEAP32[$0 + -40 >> 2] | 0;
 $128 = HEAP16[$1 + 20 >> 1] | 0;
 $134 = $121 + ((Math_imul($124 >> 16, $128) | 0) + ((Math_imul($124 & 65535, $128) | 0) >> 16)) | 0;
 $136 = HEAP32[$0 + -44 >> 2] | 0;
 $140 = HEAP16[$1 + 22 >> 1] | 0;
 $146 = $134 + ((Math_imul($136 >> 16, $140) | 0) + ((Math_imul($136 & 65535, $140) | 0) >> 16)) | 0;
 $148 = HEAP32[$0 + -48 >> 2] | 0;
 $152 = HEAP16[$1 + 24 >> 1] | 0;
 $158 = $146 + ((Math_imul($148 >> 16, $152) | 0) + ((Math_imul($148 & 65535, $152) | 0) >> 16)) | 0;
 $160 = HEAP32[$0 + -52 >> 2] | 0;
 $164 = HEAP16[$1 + 26 >> 1] | 0;
 $170 = $158 + ((Math_imul($160 >> 16, $164) | 0) + ((Math_imul($160 & 65535, $164) | 0) >> 16)) | 0;
 $172 = HEAP32[$0 + -56 >> 2] | 0;
 $176 = HEAP16[$1 + 28 >> 1] | 0;
 $182 = $170 + ((Math_imul($172 >> 16, $176) | 0) + ((Math_imul($172 & 65535, $176) | 0) >> 16)) | 0;
 $184 = HEAP32[$0 + -60 >> 2] | 0;
 $188 = HEAP16[$1 + 30 >> 1] | 0;
 $$0 = $182 + ((Math_imul($184 >> 16, $188) | 0) + ((Math_imul($184 & 65535, $188) | 0) >> 16)) | 0;
 return $$0 | 0;
}

function _silk_noise_shape_quantizer_short_prediction_c($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $103 = 0, $109 = 0, $111 = 0, $115 = 0, $121 = 0, $124 = 0, $128 = 0, $13 = 0, $134 = 0, $136 = 0, $140 = 0, $146 = 0, $148 = 0, $15 = 0, $152 = 0, $158 = 0, $160 = 0, $164 = 0, $170 = 0, $172 = 0, $176 = 0, $182 = 0, $184 = 0, $188 = 0, $19 = 0, $25 = 0, $27 = 0, $31 = 0, $37 = 0, $39 = 0, $4 = 0, $43 = 0, $49 = 0, $51 = 0, $55 = 0, $61 = 0, $63 = 0, $67 = 0, $7 = 0, $73 = 0, $75 = 0, $79 = 0, $85 = 0, $87 = 0, $91 = 0, $97 = 0, $99 = 0;
 $4 = HEAP32[$0 >> 2] | 0;
 $7 = HEAP16[$1 >> 1] | 0;
 $13 = ($2 >> 1) + ((Math_imul($4 >> 16, $7) | 0) + ((Math_imul($4 & 65535, $7) | 0) >> 16)) | 0;
 $15 = HEAP32[$0 + -4 >> 2] | 0;
 $19 = HEAP16[$1 + 2 >> 1] | 0;
 $25 = $13 + ((Math_imul($15 >> 16, $19) | 0) + ((Math_imul($15 & 65535, $19) | 0) >> 16)) | 0;
 $27 = HEAP32[$0 + -8 >> 2] | 0;
 $31 = HEAP16[$1 + 4 >> 1] | 0;
 $37 = $25 + ((Math_imul($27 >> 16, $31) | 0) + ((Math_imul($27 & 65535, $31) | 0) >> 16)) | 0;
 $39 = HEAP32[$0 + -12 >> 2] | 0;
 $43 = HEAP16[$1 + 6 >> 1] | 0;
 $49 = $37 + ((Math_imul($39 >> 16, $43) | 0) + ((Math_imul($39 & 65535, $43) | 0) >> 16)) | 0;
 $51 = HEAP32[$0 + -16 >> 2] | 0;
 $55 = HEAP16[$1 + 8 >> 1] | 0;
 $61 = $49 + ((Math_imul($51 >> 16, $55) | 0) + ((Math_imul($51 & 65535, $55) | 0) >> 16)) | 0;
 $63 = HEAP32[$0 + -20 >> 2] | 0;
 $67 = HEAP16[$1 + 10 >> 1] | 0;
 $73 = $61 + ((Math_imul($63 >> 16, $67) | 0) + ((Math_imul($63 & 65535, $67) | 0) >> 16)) | 0;
 $75 = HEAP32[$0 + -24 >> 2] | 0;
 $79 = HEAP16[$1 + 12 >> 1] | 0;
 $85 = $73 + ((Math_imul($75 >> 16, $79) | 0) + ((Math_imul($75 & 65535, $79) | 0) >> 16)) | 0;
 $87 = HEAP32[$0 + -28 >> 2] | 0;
 $91 = HEAP16[$1 + 14 >> 1] | 0;
 $97 = $85 + ((Math_imul($87 >> 16, $91) | 0) + ((Math_imul($87 & 65535, $91) | 0) >> 16)) | 0;
 $99 = HEAP32[$0 + -32 >> 2] | 0;
 $103 = HEAP16[$1 + 16 >> 1] | 0;
 $109 = $97 + ((Math_imul($99 >> 16, $103) | 0) + ((Math_imul($99 & 65535, $103) | 0) >> 16)) | 0;
 $111 = HEAP32[$0 + -36 >> 2] | 0;
 $115 = HEAP16[$1 + 18 >> 1] | 0;
 $121 = $109 + ((Math_imul($111 >> 16, $115) | 0) + ((Math_imul($111 & 65535, $115) | 0) >> 16)) | 0;
 if (($2 | 0) != 16) {
  $$0 = $121;
  return $$0 | 0;
 }
 $124 = HEAP32[$0 + -40 >> 2] | 0;
 $128 = HEAP16[$1 + 20 >> 1] | 0;
 $134 = $121 + ((Math_imul($124 >> 16, $128) | 0) + ((Math_imul($124 & 65535, $128) | 0) >> 16)) | 0;
 $136 = HEAP32[$0 + -44 >> 2] | 0;
 $140 = HEAP16[$1 + 22 >> 1] | 0;
 $146 = $134 + ((Math_imul($136 >> 16, $140) | 0) + ((Math_imul($136 & 65535, $140) | 0) >> 16)) | 0;
 $148 = HEAP32[$0 + -48 >> 2] | 0;
 $152 = HEAP16[$1 + 24 >> 1] | 0;
 $158 = $146 + ((Math_imul($148 >> 16, $152) | 0) + ((Math_imul($148 & 65535, $152) | 0) >> 16)) | 0;
 $160 = HEAP32[$0 + -52 >> 2] | 0;
 $164 = HEAP16[$1 + 26 >> 1] | 0;
 $170 = $158 + ((Math_imul($160 >> 16, $164) | 0) + ((Math_imul($160 & 65535, $164) | 0) >> 16)) | 0;
 $172 = HEAP32[$0 + -56 >> 2] | 0;
 $176 = HEAP16[$1 + 28 >> 1] | 0;
 $182 = $170 + ((Math_imul($172 >> 16, $176) | 0) + ((Math_imul($172 & 65535, $176) | 0) >> 16)) | 0;
 $184 = HEAP32[$0 + -60 >> 2] | 0;
 $188 = HEAP16[$1 + 30 >> 1] | 0;
 $$0 = $182 + ((Math_imul($184 >> 16, $188) | 0) + ((Math_imul($184 & 65535, $188) | 0) >> 16)) | 0;
 return $$0 | 0;
}

function _silk_find_pred_coefs_FLP($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $$0 = 0.0, $$01 = 0, $$02 = 0, $$03 = 0, $$1 = 0, $10 = 0, $11 = 0, $21 = 0, $22 = 0, $24 = 0, $32 = 0, $37 = 0, $38 = 0, $41 = 0, $43 = 0, $48 = 0, $49 = 0, $5 = 0, $51 = 0, $6 = 0, $67 = 0.0, $7 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $9 = 0, dest = 0, sp = 0, src = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 2064 | 0;
 $5 = sp + 1632 | 0;
 $6 = sp + 1552 | 0;
 $7 = sp + 1536 | 0;
 $8 = sp + 2032 | 0;
 $9 = sp;
 $10 = $0 + 4576 | 0;
 $11 = HEAP32[$10 >> 2] | 0;
 $$03 = 0;
 while (1) {
  if (($$03 | 0) >= ($11 | 0)) break;
  HEAPF32[$7 + ($$03 << 2) >> 2] = 1.0 / +HEAPF32[$1 + ($$03 << 2) >> 2];
  $$03 = $$03 + 1 | 0;
 }
 if ((HEAP8[$0 + 4761 >> 0] | 0) == 2) {
  $21 = $1 + 228 | 0;
  $22 = $0 + 4584 | 0;
  _silk_find_LTP_FLP($5, $6, $2, $21, HEAP32[$22 >> 2] | 0, $11);
  $24 = $1 + 144 | 0;
  _silk_quant_LTP_gains_FLP($24, $0 + 4736 | 0, $0 + 4764 | 0, $0 + 4652 | 0, $1 + 708 | 0, $5, $6, HEAP32[$22 >> 2] | 0, HEAP32[$10 >> 2] | 0);
  _silk_LTP_scale_ctrl_FLP($0, $1, $4);
  $32 = HEAP32[$0 + 4636 >> 2] | 0;
  _silk_LTP_analysis_filter_FLP($9, $3 + (0 - $32 << 2) | 0, $24, $21, $7, HEAP32[$22 >> 2] | 0, HEAP32[$10 >> 2] | 0, $32);
 } else {
  $37 = $0 + 4636 | 0;
  $38 = HEAP32[$37 >> 2] | 0;
  $41 = $0 + 4584 | 0;
  $$01 = $9;
  $$02 = $3 + (0 - $38 << 2) | 0;
  $$1 = 0;
  $43 = $11;
  $48 = $38;
  while (1) {
   if (($$1 | 0) >= ($43 | 0)) break;
   _silk_scale_copy_vector_FLP($$01, $$02, +HEAPF32[$7 + ($$1 << 2) >> 2], (HEAP32[$41 >> 2] | 0) + $48 | 0);
   $49 = HEAP32[$41 >> 2] | 0;
   $51 = HEAP32[$37 >> 2] | 0;
   $$01 = $$01 + ($49 + $51 << 2) | 0;
   $$02 = $$02 + ($49 << 2) | 0;
   $$1 = $$1 + 1 | 0;
   $43 = HEAP32[$10 >> 2] | 0;
   $48 = $51;
  }
  _memset($1 + 144 | 0, 0, $43 * 20 | 0) | 0;
  HEAPF32[$1 + 708 >> 2] = 0.0;
  HEAP32[$0 + 4652 >> 2] = 0;
 }
 if (HEAP32[$0 + 4660 >> 2] | 0) {
  $$0 = .009999999776482582;
  _silk_find_LPC_FLP($0, $8, $9, $$0);
  $73 = $1 + 16 | 0;
  $74 = $0 + 4496 | 0;
  _silk_process_NLSFs_FLP($0, $73, $8, $74);
  $75 = $1 + 712 | 0;
  $76 = $0 + 4584 | 0;
  $77 = HEAP32[$76 >> 2] | 0;
  $78 = HEAP32[$10 >> 2] | 0;
  $79 = $0 + 4636 | 0;
  $80 = HEAP32[$79 >> 2] | 0;
  _silk_residual_energy_FLP($75, $9, $73, $1, $77, $78, $80);
  dest = $74;
  src = $8;
  stop = dest + 32 | 0;
  do {
   HEAP16[dest >> 1] = HEAP16[src >> 1] | 0;
   dest = dest + 2 | 0;
   src = src + 2 | 0;
  } while ((dest | 0) < (stop | 0));
  STACKTOP = sp;
  return;
 }
 $67 = +_llvm_exp2_f64(+(+HEAPF32[$1 + 708 >> 2] / 3.0)) / 1.0e4;
 $$0 = $67 / (+HEAPF32[$1 + 700 >> 2] * .75 + .25);
 _silk_find_LPC_FLP($0, $8, $9, $$0);
 $73 = $1 + 16 | 0;
 $74 = $0 + 4496 | 0;
 _silk_process_NLSFs_FLP($0, $73, $8, $74);
 $75 = $1 + 712 | 0;
 $76 = $0 + 4584 | 0;
 $77 = HEAP32[$76 >> 2] | 0;
 $78 = HEAP32[$10 >> 2] | 0;
 $79 = $0 + 4636 | 0;
 $80 = HEAP32[$79 >> 2] | 0;
 _silk_residual_energy_FLP($75, $9, $73, $1, $77, $78, $80);
 dest = $74;
 src = $8;
 stop = dest + 32 | 0;
 do {
  HEAP16[dest >> 1] = HEAP16[src >> 1] | 0;
  dest = dest + 2 | 0;
  src = src + 2 | 0;
 } while ((dest | 0) < (stop | 0));
 STACKTOP = sp;
 return;
}

function _alloc_trim_analysis($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 $7 = $7 | 0;
 $8 = $8 | 0;
 $9 = +$9;
 $10 = $10 | 0;
 $11 = +$11;
 $12 = $12 | 0;
 var $$0 = 0.0, $$01 = 0.0, $$03 = 0, $$04 = 0.0, $$06 = 0, $$1 = 0.0, $$15 = 0.0, $$17 = 0, $$2 = 0.0, $$28 = 0, $$3 = 0.0, $105 = 0.0, $106 = 0, $111 = 0.0, $117 = 0.0, $118 = 0, $122 = 0, $124 = 0, $125 = 0, $21 = 0, $22 = 0, $25 = 0, $26 = 0, $30 = 0, $40 = 0.0, $42 = 0, $45 = 0, $46 = 0, $50 = 0, $60 = 0.0, $66 = 0.0, $67 = 0.0, $73 = 0.0, $75 = 0.0, $80 = 0.0, $82 = 0.0, $84 = 0, $85 = 0, $fabsf = 0.0, $fabsf4 = 0.0, $fabsf6 = 0.0, $or$cond = 0, $or$cond13 = 0;
 if (($12 | 0) < 64e3) $$1 = 4.0; else if (($12 | 0) < 8e4) $$1 = +($12 + -64e3 >> 10 | 0) * .0625 + 4.0; else $$1 = 5.0;
 if (($5 | 0) == 2) {
  $21 = $0 + 32 | 0;
  $$01 = 0.0;
  $$06 = 0;
  while (1) {
   if (($$06 | 0) == 8) break;
   $22 = HEAP32[$21 >> 2] | 0;
   $25 = HEAP16[$22 + ($$06 << 1) >> 1] | 0;
   $26 = $25 << $4;
   $30 = $$06 + 1 | 0;
   $$01 = $$01 + +_celt_inner_prod_c_1($1 + ($26 << 2) | 0, $1 + ($26 + $6 << 2) | 0, (HEAP16[$22 + ($30 << 1) >> 1] | 0) - $25 << $4);
   $$06 = $30;
  }
  $fabsf = +Math_abs(+($$01 * .125));
  $40 = $fabsf > 1.0 ? 1.0 : $fabsf;
  $$0 = $40;
  $$17 = 8;
  while (1) {
   if (($$17 | 0) >= ($10 | 0)) break;
   $42 = HEAP32[$21 >> 2] | 0;
   $45 = HEAP16[$42 + ($$17 << 1) >> 1] | 0;
   $46 = $45 << $4;
   $50 = $$17 + 1 | 0;
   $fabsf6 = +Math_abs(+(+_celt_inner_prod_c_1($1 + ($46 << 2) | 0, $1 + ($46 + $6 << 2) | 0, (HEAP16[$42 + ($50 << 1) >> 1] | 0) - $45 << $4)));
   $$0 = $$0 < $fabsf6 ? $$0 : $fabsf6;
   $$17 = $50;
  }
  $fabsf4 = +Math_abs(+$$0);
  $60 = $fabsf4 > 1.0 ? 1.0 : $fabsf4;
  $66 = +Math_log(+(1.0010000467300415 - $40 * $40)) * 1.4426950408889634;
  $67 = $66 * .5;
  $73 = +Math_log(+(1.0010000467300415 - $60 * $60)) * 1.4426950408889634;
  $75 = $66 * .75;
  $80 = +HEAPF32[$8 >> 2] + .25;
  $82 = -(($67 > $73 ? $67 : $73) * .5);
  HEAPF32[$8 >> 2] = $80 < $82 ? $80 : $82;
  $$2 = $$1 + ($75 < -4.0 ? -4.0 : $75);
 } else $$2 = $$1;
 $84 = $3 + -1 | 0;
 $85 = $0 + 8 | 0;
 $$03 = 0;
 $$04 = 0.0;
 while (1) {
  $$15 = $$04;
  $$28 = 0;
  while (1) {
   if (($$28 | 0) >= ($84 | 0)) break;
   $$15 = $$15 + +HEAPF32[$2 + ($$28 + (Math_imul($$03, HEAP32[$85 >> 2] | 0) | 0) << 2) >> 2] * +(($$28 << 1) + 2 - $3 | 0);
   $$28 = $$28 + 1 | 0;
  }
  $$03 = $$03 + 1 | 0;
  if (($$03 | 0) >= ($5 | 0)) break; else $$04 = $$15;
 }
 $105 = ($$15 / +(Math_imul($84, $5) | 0) + 1.0) / 6.0;
 $106 = $105 > 2.0;
 $or$cond = $105 < -2.0 & ($106 ^ 1);
 $111 = $$2 - ($or$cond | $106 ? ($or$cond ? -2.0 : 2.0) : $105) - $11 - $9 * 2.0;
 if (!(HEAP32[$7 >> 2] | 0)) $$3 = $111; else {
  $117 = (+HEAPF32[$7 + 8 >> 2] + .05000000074505806) * 2.0;
  $118 = $117 > 2.0;
  $or$cond13 = $117 < -2.0 & ($118 ^ 1);
  $$3 = $111 - ($or$cond13 | $118 ? ($or$cond13 ? -2.0 : 2.0) : $117);
 }
 $122 = ~~+Math_floor(+($$3 + .5));
 if (($122 | 0) > 10) $125 = 10; else if (($122 | 0) < 0) {
  $124 = 0;
  return $124 | 0;
 } else $125 = $122;
 $124 = $125;
 return $124 | 0;
}

function _compute_vbr($$0$2$val, $$0$5$val, $0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) {
 $$0$2$val = $$0$2$val | 0;
 $$0$5$val = $$0$5$val | 0;
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
 $10 = +$10;
 $11 = $11 | 0;
 $12 = +$12;
 $13 = $13 | 0;
 $14 = $14 | 0;
 $15 = +$15;
 $16 = +$16;
 var $$$0$2$val$5 = 0, $$$5 = 0, $$0$2$val$ = 0, $$01 = 0, $$02 = 0, $$1 = 0, $$2 = 0, $$3 = 0, $$4 = 0, $$5 = 0, $$9 = 0, $104 = 0, $105 = 0, $108 = 0, $117 = 0, $118 = 0, $125 = 0, $126 = 0, $21 = 0, $22 = 0, $30 = 0, $32 = 0.0, $46 = 0, $54 = 0.0, $58 = 0.0, $64 = 0, $69 = 0, $73 = 0.0, $77 = 0.0, $81 = 0, $86 = 0, $92 = 0, $93 = 0, $or$cond14 = 0;
 $$0$2$val$ = ($4 | 0) == 0 ? $$0$2$val : $4;
 $21 = HEAP16[$$0$5$val + ($$0$2$val$ << 1) >> 1] << $2;
 $22 = ($5 | 0) == 2;
 if ($22) $$01 = $21 + (HEAP16[$$0$5$val + ((($$0$2$val$ | 0) > ($6 | 0) ? $6 : $$0$2$val$) << 1) >> 1] << $2) | 0; else $$01 = $21;
 $30 = (HEAP32[$0 >> 2] | 0) == 0;
 if ($30) $$02 = $1; else {
  $32 = +HEAPF32[$0 + 16 >> 2];
  if ($32 < .4) $$02 = $1 - ~~(+($$01 << 3 | 0) * (.4000000059604645 - $32)) | 0; else $$02 = $1;
 }
 if ($22) {
  $$$0$2$val$5 = ($$0$2$val$ | 0) > ($6 | 0) ? $6 : $$0$2$val$;
  $46 = (HEAP16[$$0$5$val + ($$$0$2$val$5 << 1) >> 1] << $2) - $$$0$2$val$5 | 0;
  $54 = +($46 | 0) * .800000011920929 / +($$01 | 0) * +($$02 | 0);
  $58 = (($8 < 1.0 ? $8 : 1.0) + -.10000000149011612) * +($46 << 3 | 0);
  $$1 = $$02 - ~~($54 < $58 ? $54 : $58) | 0;
 } else $$1 = $$02;
 $64 = $$1 + ($9 - (19 << $2)) | 0;
 $69 = $64 + ~~(($10 + -.04399999976158142) * +($64 | 0)) | 0;
 if (($13 | 0) == 0 & ($30 ^ 1)) {
  $73 = +HEAPF32[$0 + 4 >> 2] + -.15000000596046448;
  $77 = +($$01 << 3 | 0);
  $81 = $69 + ~~($77 * 1.2000000476837158 * ($73 < 0.0 ? -.11999999731779099 : $73 + -.11999999731779099)) | 0;
  if (!$11) $$2 = $81; else $$2 = $81 + ~~($77 * .800000011920929) | 0;
 } else $$2 = $69;
 $86 = ($14 | 0) == 0;
 if (($13 | 0) == 0 & ($86 ^ 1)) {
  $92 = $$2 + ~~(+($$01 << 3 | 0) * $15) | 0;
  $93 = ($$2 | 0) / 4 | 0;
  $$3 = ($93 | 0) > ($92 | 0) ? $93 : $92;
 } else $$3 = $$2;
 $104 = ~~(+((Math_imul(HEAP16[$$0$5$val + ($$0$2$val + -2 << 1) >> 1] << $2, $5) | 0) << 3 | 0) * $12);
 $105 = $$3 >> 2;
 $$9 = ($104 | 0) > ($105 | 0) ? $104 : $105;
 $108 = ($$3 | 0) < ($$9 | 0) ? $$3 : $$9;
 if (($13 | 0) == 0 & ($86 ^ 1)) {
  $$5 = $108;
  $125 = $1 << 1;
  $126 = ($125 | 0) < ($$5 | 0);
  $$$5 = $126 ? $125 : $$5;
  return $$$5 | 0;
 }
 if (!$7) $$4 = $108; else $$4 = ~~(+($108 - $1 | 0) * .6700000166893005) + $1 | 0;
 if (!($86 & $10 < .20000000298023224)) {
  $$5 = $$4;
  $125 = $1 << 1;
  $126 = ($125 | 0) < ($$5 | 0);
  $$$5 = $126 ? $125 : $$5;
  return $$$5 | 0;
 }
 $117 = 96e3 - $3 | 0;
 $118 = ($117 | 0) > 32e3;
 $or$cond14 = ($3 | 0) > 96e3 & ($118 ^ 1);
 $$5 = $$4 + ~~(($or$cond14 | $118 ? ($or$cond14 ? 0.0 : .09919999539852142) : +($117 | 0) * 3.099999958067201e-06) * $16 * +($$4 | 0)) | 0;
 $125 = $1 << 1;
 $126 = ($125 | 0) < ($$5 | 0);
 $$$5 = $126 ? $125 : $$5;
 return $$$5 | 0;
}

function _silk_NSQ_wrapper_FLP($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $$1 = 0, $$13 = 0, $$2 = 0, $$3 = 0, $$4 = 0, $$5 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $15 = 0, $16 = 0, $18 = 0, $19 = 0, $21 = 0, $35 = 0, $56 = 0.0, $57 = 0, $59 = 0, $6 = 0, $60 = 0, $68 = 0, $7 = 0, $8 = 0, $9 = 0, $95 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 1008 | 0;
 $6 = sp + 360 | 0;
 $7 = sp + 48 | 0;
 $8 = sp + 296 | 0;
 $9 = sp + 256 | 0;
 $10 = sp + 64 | 0;
 $11 = sp + 32 | 0;
 $12 = sp + 16 | 0;
 $13 = sp;
 $15 = HEAP32[$0 + 4576 >> 2] | 0;
 $16 = $0 + 4632 | 0;
 $$02 = 0;
 while (1) {
  if (($$02 | 0) >= ($15 | 0)) {
   $$13 = 0;
   break;
  }
  $18 = HEAP32[$16 >> 2] | 0;
  $19 = $$02 * 24 | 0;
  $$01 = 0;
  while (1) {
   if (($$01 | 0) >= ($18 | 0)) break;
   $21 = $19 + $$01 | 0;
   HEAP16[$10 + ($21 << 1) >> 1] = _silk_float2int(+HEAPF32[$1 + 244 + ($21 << 2) >> 2] * 8192.0) | 0;
   $$01 = $$01 + 1 | 0;
  }
  $$02 = $$02 + 1 | 0;
 }
 while (1) {
  if (($$13 | 0) >= ($15 | 0)) break;
  $35 = (_silk_float2int(+HEAPF32[$1 + 644 + ($$13 << 2) >> 2] * 16384.0) | 0) << 16;
  HEAP32[$11 + ($$13 << 2) >> 2] = $35 | (_silk_float2int(+HEAPF32[$1 + 628 + ($$13 << 2) >> 2] * 16384.0) | 0) & 65535;
  HEAP32[$12 + ($$13 << 2) >> 2] = _silk_float2int(+HEAPF32[$1 + 660 + ($$13 << 2) >> 2] * 16384.0) | 0;
  HEAP32[$13 + ($$13 << 2) >> 2] = _silk_float2int(+HEAPF32[$1 + 676 + ($$13 << 2) >> 2] * 16384.0) | 0;
  $$13 = $$13 + 1 | 0;
 }
 $56 = +HEAPF32[$1 + 692 >> 2] * 1024.0;
 $57 = $15 * 5 | 0;
 $$2 = 0;
 while (1) {
  if (($$2 | 0) >= ($57 | 0)) break;
  HEAP16[$9 + ($$2 << 1) >> 1] = _silk_float2int(+HEAPF32[$1 + 144 + ($$2 << 2) >> 2] * 16384.0) | 0;
  $$2 = $$2 + 1 | 0;
 }
 $59 = _silk_float2int($56) | 0;
 $60 = $0 + 4636 | 0;
 $$1 = 0;
 while (1) {
  if (($$1 | 0) == 2) {
   $$4 = 0;
   break;
  }
  $68 = HEAP32[$60 >> 2] | 0;
  $$3 = 0;
  while (1) {
   if (($$3 | 0) >= ($68 | 0)) break;
   HEAP16[$8 + ($$1 << 5) + ($$3 << 1) >> 1] = _silk_float2int(+HEAPF32[$1 + 16 + ($$1 << 6) + ($$3 << 2) >> 2] * 4096.0) | 0;
   $$3 = $$3 + 1 | 0;
  }
  $$1 = $$1 + 1 | 0;
 }
 while (1) {
  if (($$4 | 0) >= ($15 | 0)) break;
  HEAP32[$7 + ($$4 << 2) >> 2] = _silk_float2int(+HEAPF32[$1 + ($$4 << 2) >> 2] * 65536.0) | 0;
  $$4 = $$4 + 1 | 0;
 }
 if ((HEAP8[$2 + 29 >> 0] | 0) == 2) $$0 = HEAP16[27940 + (HEAP8[$2 + 33 >> 0] << 1) >> 1] | 0; else $$0 = 0;
 $95 = HEAP32[$0 + 4580 >> 2] | 0;
 $$5 = 0;
 while (1) {
  if (($$5 | 0) >= ($95 | 0)) break;
  HEAP16[$6 + ($$5 << 1) >> 1] = _silk_float2int(+HEAPF32[$5 + ($$5 << 2) >> 2]) | 0;
  $$5 = $$5 + 1 | 0;
 }
 if ((HEAP32[$0 + 4624 >> 2] | 0) <= 1) if ((HEAP32[$0 + 4668 >> 2] | 0) <= 0) {
  _silk_NSQ_c($0, $3, $2, $6, $4, $8, $9, $10, $13, $12, $11, $7, $1 + 228 | 0, $59, $$0);
  STACKTOP = sp;
  return;
 }
 _silk_NSQ_del_dec_c($0, $3, $2, $6, $4, $8, $9, $10, $13, $12, $11, $7, $1 + 228 | 0, $59, $$0);
 STACKTOP = sp;
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
  $$014 = HEAPU8[28558 + ($$014 & 15) >> 0] | 0 | (HEAPU8[28558 + ($$014 >> 4) >> 0] | 0) << 2;
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
  $75 = HEAP8[28574 + $$15 >> 0] | 0;
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

function _compute_stereo_width($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$ = 0.0, $$0 = 0, $$01 = 0.0, $$02 = 0.0, $$03 = 0.0, $$pre = 0.0, $10 = 0.0, $101 = 0.0, $102 = 0.0, $103 = 0.0, $104 = 0, $105 = 0.0, $13 = 0.0, $16 = 0.0, $19 = 0.0, $22 = 0.0, $25 = 0.0, $28 = 0.0, $31 = 0.0, $4 = 0, $5 = 0, $57 = 0.0, $58 = 0.0, $6 = 0, $61 = 0.0, $62 = 0, $63 = 0.0, $66 = 0.0, $67 = 0, $68 = 0.0, $71 = 0.0, $74 = 0.0, $76 = 0.0, $79 = 0.0, $8 = 0, $82 = 0.0, $89 = 0.0, $90 = 0, $91 = 0.0, $93 = 0.0, $95 = 0.0, $96 = 0, $99 = 0.0, $phitmp$op = 0.0, $sqrtf = 0.0, $sqrtf4 = 0.0, $sqrtf5 = 0.0, $sqrtf6 = 0.0;
 $4 = ($2 | 0) / ($1 | 0) | 0;
 $5 = ($4 | 0) < 50;
 $phitmp$op = 25.0 / +($4 | 0);
 $6 = $1 + -3 | 0;
 $$0 = 0;
 $$01 = 0.0;
 $$02 = 0.0;
 $$03 = 0.0;
 while (1) {
  if (($$0 | 0) >= ($6 | 0)) break;
  $8 = $$0 << 1;
  $10 = +HEAPF32[$0 + ($8 << 2) >> 2];
  $13 = +HEAPF32[$0 + (($8 | 1) << 2) >> 2];
  $16 = +HEAPF32[$0 + (($8 | 2) << 2) >> 2];
  $19 = +HEAPF32[$0 + (($8 | 3) << 2) >> 2];
  $22 = +HEAPF32[$0 + (($8 | 4) << 2) >> 2];
  $25 = +HEAPF32[$0 + (($8 | 5) << 2) >> 2];
  $28 = +HEAPF32[$0 + (($8 | 6) << 2) >> 2];
  $31 = +HEAPF32[$0 + (($8 | 7) << 2) >> 2];
  $$0 = $$0 + 4 | 0;
  $$01 = $$01 + ($13 * $13 + $19 * $19 + $25 * $25 + $31 * $31);
  $$02 = $$02 + ($10 * $13 + $16 * $19 + $22 * $25 + $28 * $31);
  $$03 = $$03 + ($10 * $10 + $16 * $16 + $22 * $22 + $28 * $28);
 }
 $57 = $5 ? .5 : 1.0 - $phitmp$op;
 $58 = +HEAPF32[$3 >> 2];
 $61 = $58 + $57 * ($$03 - $58);
 HEAPF32[$3 >> 2] = $61;
 $62 = $3 + 4 | 0;
 $63 = +HEAPF32[$62 >> 2];
 $66 = $63 + $57 * ($$02 - $63);
 HEAPF32[$62 >> 2] = $66;
 $67 = $3 + 8 | 0;
 $68 = +HEAPF32[$67 >> 2];
 $71 = $68 + $57 * ($$01 - $68);
 HEAPF32[$67 >> 2] = $71;
 $$pre = $61 < 0.0 ? 0.0 : $61;
 HEAPF32[$3 >> 2] = $$pre;
 $74 = $66 < 0.0 ? 0.0 : $66;
 HEAPF32[$62 >> 2] = $74;
 $76 = $71 < 0.0 ? 0.0 : $71;
 HEAPF32[$67 >> 2] = $76;
 if (($$pre > $76 ? $$pre : $76) > 7.999999797903001e-04) {
  $sqrtf = +Math_sqrt(+$$pre);
  $sqrtf4 = +Math_sqrt(+$76);
  $sqrtf5 = +Math_sqrt(+$sqrtf);
  $sqrtf6 = +Math_sqrt(+$sqrtf4);
  $79 = $sqrtf * $sqrtf4;
  $$ = $74 < $79 ? $74 : $79;
  HEAPF32[$62 >> 2] = $$;
  $82 = $$ / ($79 + 1.0000000036274937e-15);
  $89 = +Math_sqrt(+(1.0 - $82 * $82)) * (+Math_abs(+($sqrtf5 - $sqrtf6)) / ($sqrtf5 + 1.0000000036274937e-15 + $sqrtf6));
  $90 = $3 + 12 | 0;
  $91 = +HEAPF32[$90 >> 2];
  $93 = +($4 | 0);
  $95 = $91 + ($89 - $91) / $93;
  HEAPF32[$90 >> 2] = $95;
  $96 = $3 + 16 | 0;
  $99 = +HEAPF32[$96 >> 2] - .019999999552965164 / $93;
  $101 = $99 > $95 ? $99 : $95;
  HEAPF32[$96 >> 2] = $101;
  $103 = $101;
  $102 = $103 * 20.0;
  $104 = $102 > 1.0;
  $105 = $104 ? 1.0 : $102;
  return +$105;
 } else {
  $103 = +HEAPF32[$3 + 16 >> 2];
  $102 = $103 * 20.0;
  $104 = $102 > 1.0;
  $105 = $104 ? 1.0 : $102;
  return +$105;
 }
 return +(0.0);
}

function _spreading_decision($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
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
 var $$0 = 0, $$01 = 0, $$012 = 0, $$013 = 0, $$02 = 0, $$06 = 0, $$09 = 0, $$1 = 0, $$110 = 0, $$17 = 0, $$2 = 0, $$4 = 0, $$6 = 0, $$sroa$0$0 = 0, $$sroa$5$0 = 0, $$sroa$9$2 = 0, $101 = 0, $11 = 0, $14 = 0, $25 = 0, $26 = 0, $30 = 0, $33 = 0, $34 = 0, $39 = 0, $41 = 0.0, $43 = 0.0, $45 = 0.0, $85 = 0, $91 = 0, $94 = 0;
 $11 = HEAP32[$0 + 32 >> 2] | 0;
 $14 = Math_imul(HEAP32[$0 + 44 >> 2] | 0, $9) | 0;
 if ((Math_imul((HEAP16[$11 + ($7 << 1) >> 1] | 0) - (HEAP16[$11 + ($7 + -1 << 1) >> 1] | 0) | 0, $9) | 0) < 9) {
  $$0 = 0;
  return $$0 | 0;
 }
 $25 = $0 + 8 | 0;
 $$012 = 0;
 $$02 = 0;
 $$06 = 0;
 $$09 = 0;
 while (1) {
  $26 = Math_imul($$012, $14) | 0;
  $$013 = 0;
  $$1 = $$02;
  $$110 = $$09;
  $$17 = $$06;
  while (1) {
   if (($$013 | 0) >= ($7 | 0)) break;
   $30 = HEAP16[$11 + ($$013 << 1) >> 1] | 0;
   $33 = $1 + ((Math_imul($30, $9) | 0) << 2) + ($26 << 2) | 0;
   $34 = $$013 + 1 | 0;
   $39 = Math_imul((HEAP16[$11 + ($34 << 1) >> 1] | 0) - $30 | 0, $9) | 0;
   if (($39 | 0) < 9) {
    $$013 = $34;
    continue;
   }
   $41 = +($39 | 0);
   $$01 = 0;
   $$sroa$0$0 = 0;
   $$sroa$5$0 = 0;
   $$sroa$9$2 = 0;
   while (1) {
    if (($$01 | 0) == ($39 | 0)) break;
    $43 = +HEAPF32[$33 + ($$01 << 2) >> 2];
    $45 = $43 * $43 * $41;
    $$01 = $$01 + 1 | 0;
    $$sroa$0$0 = $$sroa$0$0 + ($45 < .25 & 1) | 0;
    $$sroa$5$0 = $$sroa$5$0 + ($45 < .0625 & 1) | 0;
    $$sroa$9$2 = $$sroa$9$2 + ($45 < .015625 & 1) | 0;
   }
   if (($$013 | 0) > ((HEAP32[$25 >> 2] | 0) + -4 | 0)) $$2 = $$1 + (_celt_udiv($$sroa$5$0 + $$sroa$0$0 << 5, $39) | 0) | 0; else $$2 = $$1;
   $$013 = $34;
   $$1 = $$2;
   $$110 = $$110 + ((($$sroa$9$2 << 1 | 0) >= ($39 | 0) & 1) + (($$sroa$5$0 << 1 | 0) >= ($39 | 0) & 1) + (($$sroa$0$0 << 1 | 0) >= ($39 | 0) & 1) << 8) | 0;
   $$17 = $$17 + 1 | 0;
  }
  $$012 = $$012 + 1 | 0;
  if (($$012 | 0) >= ($8 | 0)) break; else {
   $$02 = $$1;
   $$06 = $$17;
   $$09 = $$110;
  }
 }
 if ($6 | 0) {
  if (!$$1) $$4 = 0; else $$4 = _celt_udiv($$1, Math_imul(4 - (HEAP32[$25 >> 2] | 0) + $7 | 0, $8) | 0) | 0;
  $85 = (HEAP32[$4 >> 2] | 0) + $$4 >> 1;
  HEAP32[$4 >> 2] = $85;
  switch (HEAP32[$5 >> 2] | 0) {
  case 2:
   {
    $$6 = $85 + 4 | 0;
    break;
   }
  case 0:
   {
    $$6 = $85 + -4 | 0;
    break;
   }
  default:
   $$6 = $85;
  }
  HEAP32[$5 >> 2] = ($$6 | 0) > 22 ? 2 : ($$6 | 0) > 18 & 1;
 }
 $91 = _celt_udiv($$110, $$17) | 0;
 $94 = $91 + (HEAP32[$2 >> 2] | 0) >> 1;
 HEAP32[$2 >> 2] = $94;
 $101 = ($94 * 3 | 0) + (3 - $3 << 7 | 64) + 2 >> 2;
 if (($101 | 0) < 80) {
  $$0 = 3;
  return $$0 | 0;
 }
 if (($101 | 0) < 256) {
  $$0 = 2;
  return $$0 | 0;
 } else return ($101 | 0) < 384 | 0;
 return 0;
}

function _silk_NLSF_encode($0, $1, $2, $3, $4, $5, $6) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 var $$01 = 0, $$02 = 0, $$sink = 0, $10 = 0, $104 = 0, $11 = 0, $14 = 0, $17 = 0, $19 = 0, $20 = 0, $22 = 0, $27 = 0, $30 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $39 = 0, $42 = 0, $45 = 0, $46 = 0, $47 = 0, $49 = 0, $62 = 0, $7 = 0, $8 = 0, $82 = 0, $83 = 0, $88 = 0, $9 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 $7 = sp;
 $8 = sp + 72 | 0;
 $9 = sp + 40 | 0;
 $10 = sp + 104 | 0;
 $11 = sp + 8 | 0;
 $14 = $2 + 2 | 0;
 _silk_NLSF_stabilize($1, HEAP32[$2 + 36 >> 2] | 0, HEAP16[$14 >> 1] | 0);
 $17 = HEAP16[$2 >> 1] | 0;
 $19 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * (($17 & 65535) << 2) | 0) + 15 & -16) | 0;
 $20 = $2 + 8 | 0;
 $22 = $2 + 12 | 0;
 _silk_NLSF_VQ($19, $1, HEAP32[$20 >> 2] | 0, HEAP32[$22 >> 2] | 0, $17 << 16 >> 16, HEAP16[$14 >> 1] | 0);
 $27 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($5 << 2) | 0) + 15 & -16) | 0;
 _silk_insertion_sort_increasing($19, $27, HEAP16[$2 >> 1] | 0, $5);
 $30 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($5 << 2) | 0) + 15 & -16) | 0;
 $32 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($5 << 4) | 0) + 15 & -16) | 0;
 $33 = $2 + 32 | 0;
 $34 = $2 + 4 | 0;
 $35 = $2 + 6 | 0;
 $36 = $2 + 16 | 0;
 $37 = $6 >> 1;
 $39 = $4 << 14 >> 16;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) >= ($5 | 0)) break;
  $42 = HEAP32[$27 + ($$01 << 2) >> 2] | 0;
  $45 = HEAP16[$14 >> 1] | 0;
  $46 = Math_imul($42, $45) | 0;
  $47 = (HEAP32[$20 >> 2] | 0) + $46 | 0;
  $49 = (HEAP32[$22 >> 2] | 0) + ($46 << 1) | 0;
  $$02 = 0;
  while (1) {
   if (($$02 | 0) >= ($45 | 0)) break;
   $62 = HEAP16[$49 + ($$02 << 1) >> 1] | 0;
   HEAP16[$8 + ($$02 << 1) >> 1] = (Math_imul((HEAPU16[$1 + ($$02 << 1) >> 1] | 0) - (HEAPU8[$47 + $$02 >> 0] << 7) << 16 >> 16, $62) | 0) >>> 14;
   HEAP16[$9 + ($$02 << 1) >> 1] = _silk_DIV32_varQ_227(HEAP16[$3 + ($$02 << 1) >> 1] | 0, Math_imul($62, $62) | 0) | 0;
   $$02 = $$02 + 1 | 0;
  }
  _silk_NLSF_unpack($11, $10, $2, $42);
  $82 = _silk_NLSF_del_dec_quant($32 + ($$01 << 4) | 0, $8, $9, $10, $11, HEAP32[$33 >> 2] | 0, HEAP16[$34 >> 1] | 0, HEAP16[$35 >> 1] | 0, $4, HEAP16[$14 >> 1] | 0) | 0;
  $83 = $30 + ($$01 << 2) | 0;
  HEAP32[$83 >> 2] = $82;
  $88 = (HEAP32[$36 >> 2] | 0) + (Math_imul($37, HEAP16[$2 >> 1] | 0) | 0) | 0;
  if (!$42) $$sink = 256; else $$sink = HEAPU8[$88 + ($42 + -1) >> 0] | 0;
  HEAP32[$83 >> 2] = $82 + (Math_imul(1024 - (_silk_lin2log($$sink - (HEAPU8[$88 + $42 >> 0] | 0) | 0) | 0) << 16 >> 16, $39) | 0);
  $$01 = $$01 + 1 | 0;
 }
 _silk_insertion_sort_increasing($30, $7, $5, 1);
 $104 = HEAP32[$7 >> 2] | 0;
 HEAP8[$0 >> 0] = HEAP32[$27 + ($104 << 2) >> 2];
 _memcpy($0 + 1 | 0, $32 + ($104 << 4) | 0, HEAP16[$14 >> 1] | 0) | 0;
 _silk_NLSF_decode($1, $0, $2);
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

function _encode_multiframe_packet($0, $1, $2, $3, $4, $5, $6, $7, $8) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 $7 = $7 | 0;
 $8 = $8 | 0;
 var $$ = 0, $$0 = 0, $$01 = 0, $$02 = 0, $$4 = 0, $$alloca_mul = 0, $12 = 0, $26 = 0, $29 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $45 = 0, $46 = 0, $47 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $63 = 0, $64 = 0, $72 = 0, $9 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 304 | 0;
 $9 = sp;
 $$ = ($2 | 0) == 2 ? 3 : $2 << 1;
 $12 = $0 + 148 | 0;
 if (!(HEAP32[$12 >> 2] | 0)) if ((HEAP32[$0 + 164 >> 2] | 0) == -1) $$01 = $5; else {
  $26 = ((HEAP32[$0 + 160 >> 2] | 0) * 3 | 0) / (((HEAP32[$0 + 144 >> 2] | 0) * 24 | 0) / (Math_imul($3, $2) | 0) | 0 | 0) | 0;
  $$01 = ($26 | 0) < ($5 | 0) ? $26 : $5;
 } else $$01 = $5;
 $29 = ($$01 - $$ | 0) / ($2 | 0) | 0;
 $$4 = ($29 | 0) > 1275 ? 1276 : $29 + 1 | 0;
 $$alloca_mul = Math_imul($$4, $2) | 0;
 $33 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * $$alloca_mul | 0) + 15 & -16) | 0;
 _opus_repacketizer_init($9);
 $34 = $0 + 136 | 0;
 $35 = HEAP32[$34 >> 2] | 0;
 $36 = $0 + 128 | 0;
 $37 = HEAP32[$36 >> 2] | 0;
 $38 = $0 + 120 | 0;
 $39 = HEAP32[$38 >> 2] | 0;
 HEAP32[$34 >> 2] = HEAP32[$0 + 14120 >> 2];
 HEAP32[$36 >> 2] = HEAP32[$0 + 14136 >> 2];
 $45 = HEAP32[$0 + 14088 >> 2] | 0;
 HEAP32[$38 >> 2] = $45;
 $46 = $0 + 68 | 0;
 $47 = HEAP32[$46 >> 2] | 0;
 if (!$47) HEAP32[$0 + 14128 >> 2] = $45; else HEAP32[$38 >> 2] = 1;
 $50 = $2 + -1 | 0;
 $51 = $0 + 18028 | 0;
 $52 = ($6 | 0) != 0;
 $53 = $0 + 112 | 0;
 $$02 = 0;
 while (1) {
  if (($$02 | 0) >= ($2 | 0)) {
   label = 14;
   break;
  }
  HEAP32[$46 >> 2] = 0;
  HEAP32[$51 >> 2] = ($$02 | 0) < ($50 | 0) & 1;
  if ($52 & ($$02 | 0) == ($50 | 0)) HEAP32[$34 >> 2] = 1002;
  $63 = $33 + (Math_imul($$02, $$4) | 0) | 0;
  $64 = _opus_encode_native($0, $1 + ((Math_imul($$02, Math_imul(HEAP32[$53 >> 2] | 0, $3) | 0) | 0) << 2) | 0, $3, $63, $$4, $7, 0, 0, 0, 0, 0, $8) | 0;
  if (($64 | 0) < 0) {
   $$0 = -3;
   label = 16;
   break;
  }
  if ((_opus_repacketizer_cat($9, $63, $64) | 0) < 0) {
   $$0 = -3;
   label = 16;
   break;
  }
  $$02 = $$02 + 1 | 0;
 }
 if ((label | 0) == 14) {
  $72 = _opus_repacketizer_out_range_impl($9, $2, $4, $$01, (HEAP32[$12 >> 2] | 0) == 0 & 1) | 0;
  if (($72 | 0) < 0) {
   $$0 = -3;
   STACKTOP = sp;
   return $$0 | 0;
  }
  HEAP32[$34 >> 2] = $35;
  HEAP32[$36 >> 2] = $37;
  HEAP32[$38 >> 2] = $39;
  HEAP32[$46 >> 2] = $47;
  $$0 = $72;
  STACKTOP = sp;
  return $$0 | 0;
 } else if ((label | 0) == 16) {
  STACKTOP = sp;
  return $$0 | 0;
 }
 return 0;
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

function _silk_process_gains_FLP($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $$1 = 0, $$2 = 0, $$3 = 0, $$pre$phi3Z2D = 0, $13 = 0.0, $14 = 0, $17 = 0, $3 = 0, $32 = 0.0, $33 = 0, $35 = 0, $36 = 0.0, $4 = 0, $54 = 0, $69 = 0, $79 = 0, $83 = 0, $exp2 = 0.0, $sqrtf = 0.0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 $3 = sp;
 $4 = $0 + 4761 | 0;
 L1 : do if ((HEAP8[$4 >> 0] | 0) == 2) {
  $13 = 1.0 - +_silk_sigmoid_377((+HEAPF32[$1 + 708 >> 2] + -12.0) * .25) * .5;
  $14 = $0 + 4576 | 0;
  $$0 = 0;
  while (1) {
   if (($$0 | 0) >= (HEAP32[$14 >> 2] | 0)) {
    $$pre$phi3Z2D = $14;
    break L1;
   }
   $17 = $1 + ($$0 << 2) | 0;
   HEAPF32[$17 >> 2] = +HEAPF32[$17 >> 2] * $13;
   $$0 = $$0 + 1 | 0;
  }
 } else $$pre$phi3Z2D = $0 + 4576 | 0; while (0);
 $exp2 = +_llvm_exp2_f64(+((21.0 - +(HEAP32[$0 + 4712 >> 2] | 0) * .0078125) * .33000001311302185));
 $32 = $exp2 / +(HEAP32[$0 + 4584 >> 2] | 0);
 $$1 = 0;
 while (1) {
  $33 = HEAP32[$$pre$phi3Z2D >> 2] | 0;
  if (($$1 | 0) >= ($33 | 0)) {
   $$2 = 0;
   break;
  }
  $35 = $1 + ($$1 << 2) | 0;
  $36 = +HEAPF32[$35 >> 2];
  $sqrtf = +Math_sqrt(+($36 * $36 + +HEAPF32[$1 + 712 + ($$1 << 2) >> 2] * $32));
  HEAPF32[$35 >> 2] = $sqrtf < 32767.0 ? $sqrtf : 32767.0;
  $$1 = $$1 + 1 | 0;
 }
 while (1) {
  if (($$2 | 0) >= ($33 | 0)) break;
  HEAP32[$3 + ($$2 << 2) >> 2] = ~~(+HEAPF32[$1 + ($$2 << 2) >> 2] * 65536.0);
  $$2 = $$2 + 1 | 0;
 }
 _memcpy($1 + 728 | 0, $3 | 0, $33 << 2 | 0) | 0;
 $54 = $0 + 7164 | 0;
 HEAP8[$1 + 744 >> 0] = HEAP8[$54 >> 0] | 0;
 _silk_gains_quant($0 + 4732 | 0, $3, $54, ($2 | 0) == 2 & 1, HEAP32[$$pre$phi3Z2D >> 2] | 0);
 $$3 = 0;
 while (1) {
  if (($$3 | 0) >= (HEAP32[$$pre$phi3Z2D >> 2] | 0)) break;
  HEAPF32[$1 + ($$3 << 2) >> 2] = +(HEAP32[$3 + ($$3 << 2) >> 2] | 0) * .0000152587890625;
  $$3 = $$3 + 1 | 0;
 }
 $69 = HEAP8[$4 >> 0] | 0;
 do if ($69 << 24 >> 24 == 2) {
  $79 = $0 + 4762 | 0;
  if (+HEAPF32[$1 + 708 >> 2] + +(HEAP32[$0 + 4708 >> 2] | 0) * .000030517578125 > 1.0) {
   HEAP8[$79 >> 0] = 0;
   $83 = 0;
   break;
  } else {
   HEAP8[$79 >> 0] = 1;
   $83 = 1;
   break;
  }
 } else $83 = HEAP8[$0 + 4762 >> 0] | 0; while (0);
 HEAPF32[$1 + 692 >> 2] = +(HEAP32[$0 + 4624 >> 2] | 0) * -.05000000074505806 + 1.2000000476837158 + +(HEAP32[$0 + 4528 >> 2] | 0) * -.20000000298023224 * .00390625 + +HEAPF32[$1 + 696 >> 2] * -.10000000149011612 + +HEAPF32[$1 + 700 >> 2] * -.20000000298023224 + +(HEAP16[27932 + ($69 << 24 >> 24 >> 1 << 2) + ($83 << 24 >> 24 << 1) >> 1] | 0) * .0009765625 * .800000011920929;
 STACKTOP = sp;
 return;
}

function _silk_resampler_down2_3($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $$03 = 0, $$03$ = 0, $$04 = 0, $$1 = 0, $16 = 0, $17 = 0, $25 = 0, $26 = 0, $34 = 0, $35 = 0, $4 = 0, $45 = 0, $5 = 0, $51 = 0, $58 = 0, $6 = 0, $66 = 0, $75 = 0, $85 = 0, $9 = 0, $92 = 0, $95 = 0, $96 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 1936 | 0;
 $4 = sp;
 HEAP32[$4 >> 2] = HEAP32[$0 >> 2];
 HEAP32[$4 + 4 >> 2] = HEAP32[$0 + 4 >> 2];
 HEAP32[$4 + 8 >> 2] = HEAP32[$0 + 8 >> 2];
 HEAP32[$4 + 12 >> 2] = HEAP32[$0 + 12 >> 2];
 $5 = $0 + 16 | 0;
 $6 = $4 + 16 | 0;
 $$01 = $1;
 $$02 = $2;
 $$03 = $3;
 while (1) {
  $$03$ = ($$03 | 0) < 480 ? $$03 : 480;
  _silk_resampler_private_AR2($5, $6, $$02, 28450, $$03$);
  $$0 = $4;
  $$04 = $$03$;
  $$1 = $$01;
  while (1) {
   if (($$04 | 0) <= 2) break;
   $9 = HEAP32[$$0 >> 2] | 0;
   $16 = $$0 + 4 | 0;
   $17 = HEAP32[$16 >> 2] | 0;
   $25 = $$0 + 8 | 0;
   $26 = HEAP32[$25 >> 2] | 0;
   $34 = $$0 + 12 | 0;
   $35 = HEAP32[$34 >> 2] | 0;
   $45 = ((($9 >> 16) * 4697 | 0) + ((($9 & 65535) * 4697 | 0) >>> 16) + ((($17 >> 16) * 10739 | 0) + ((($17 & 65535) * 10739 | 0) >>> 16)) + ((($26 >> 16) * 8276 | 0) + ((($26 & 65535) * 8276 | 0) >>> 16)) + ((($35 >> 16) * 1567 | 0) + ((($35 & 65535) * 1567 | 0) >>> 16)) >> 5) + 1 >> 1;
   HEAP16[$$1 >> 1] = ($45 | 0) > 32767 ? 32767 : (($45 | 0) > -32768 ? $45 : -32768) & 65535;
   $51 = HEAP32[$16 >> 2] | 0;
   $58 = HEAP32[$25 >> 2] | 0;
   $66 = HEAP32[$34 >> 2] | 0;
   $75 = HEAP32[$$0 + 16 >> 2] | 0;
   $85 = ((($51 >> 16) * 1567 | 0) + ((($51 & 65535) * 1567 | 0) >>> 16) + ((($58 >> 16) * 8276 | 0) + ((($58 & 65535) * 8276 | 0) >>> 16)) + ((($66 >> 16) * 10739 | 0) + ((($66 & 65535) * 10739 | 0) >>> 16)) + ((($75 >> 16) * 4697 | 0) + ((($75 & 65535) * 4697 | 0) >>> 16)) >> 5) + 1 >> 1;
   HEAP16[$$1 + 2 >> 1] = ($85 | 0) > 32767 ? 32767 : (($85 | 0) > -32768 ? $85 : -32768) & 65535;
   $$0 = $34;
   $$04 = $$04 + -3 | 0;
   $$1 = $$1 + 4 | 0;
  }
  $92 = $$03 - $$03$ | 0;
  if (($92 | 0) <= 0) break;
  $95 = $4 + ($$03$ << 2) | 0;
  HEAP32[$4 >> 2] = HEAP32[$95 >> 2];
  HEAP32[$4 + 4 >> 2] = HEAP32[$95 + 4 >> 2];
  HEAP32[$4 + 8 >> 2] = HEAP32[$95 + 8 >> 2];
  HEAP32[$4 + 12 >> 2] = HEAP32[$95 + 12 >> 2];
  $$01 = $$1;
  $$02 = $$02 + ($$03$ << 1) | 0;
  $$03 = $92;
 }
 $96 = $4 + ($$03$ << 2) | 0;
 HEAP32[$0 >> 2] = HEAP32[$96 >> 2];
 HEAP32[$0 + 4 >> 2] = HEAP32[$96 + 4 >> 2];
 HEAP32[$0 + 8 >> 2] = HEAP32[$96 + 8 >> 2];
 HEAP32[$0 + 12 >> 2] = HEAP32[$96 + 12 >> 2];
 STACKTOP = sp;
 return;
}

function _silk_control_audio_bandwidth($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$$pre = 0, $$6 = 0, $$pre = 0, $10 = 0, $14 = 0, $22 = 0, $26 = 0, $27 = 0, $3 = 0, $37 = 0, $39 = 0, $4 = 0, $43 = 0, $5 = 0, $53 = 0, $55 = 0, $56 = 0, $70 = 0, $75 = 0, $79 = 0, $8 = 0, $80 = 0, $87 = 0;
 $3 = HEAP32[$0 + 4572 >> 2] | 0;
 $4 = $3 << 16 >> 16;
 $5 = $4 * 1e3 | 0;
 if (!$4) {
  $8 = HEAP32[$0 + 4568 >> 2] | 0;
  $10 = HEAP32[$0 + 4552 >> 2] | 0;
  $$6 = ((($8 | 0) < ($10 | 0) ? $8 : $10) | 0) / 1e3 | 0;
  return $$6 | 0;
 }
 $14 = HEAP32[$0 + 4552 >> 2] | 0;
 $$pre = HEAP32[$0 + 4560 >> 2] | 0;
 if (!(($5 | 0) > ($14 | 0) | ($5 | 0) > ($$pre | 0))) if (($5 | 0) >= (HEAP32[$0 + 4564 >> 2] | 0)) {
  $26 = $0 + 24 | 0;
  $27 = HEAP32[$26 >> 2] | 0;
  if (($27 | 0) > 255) HEAP32[$0 + 28 >> 2] = 0;
  if (!(HEAP32[$0 + 4532 >> 2] | 0)) if (!(HEAP32[$1 + 64 >> 2] | 0)) {
   $$6 = $3;
   return $$6 | 0;
  }
  $37 = HEAP32[$0 + 4568 >> 2] | 0;
  if (($5 | 0) > ($37 | 0)) {
   $39 = $0 + 28 | 0;
   if (!(HEAP32[$39 >> 2] | 0)) {
    HEAP32[$26 >> 2] = 256;
    $43 = $0 + 16 | 0;
    HEAP32[$43 >> 2] = 0;
    HEAP32[$43 + 4 >> 2] = 0;
    $53 = 256;
   } else $53 = $27;
   if (HEAP32[$1 + 64 >> 2] | 0) {
    HEAP32[$39 >> 2] = 0;
    $$6 = ($3 | 0) == 16 ? 12 : 8;
    return $$6 | 0;
   }
   if (($53 | 0) < 1) {
    HEAP32[$1 + 88 >> 2] = 1;
    $55 = $1 + 56 | 0;
    $56 = HEAP32[$55 >> 2] | 0;
    HEAP32[$55 >> 2] = $56 - (($56 * 5 | 0) / ((HEAP32[$1 + 24 >> 2] | 0) + 5 | 0) | 0);
    $$6 = $3;
    return $$6 | 0;
   } else {
    HEAP32[$39 >> 2] = -2;
    $$6 = $3;
    return $$6 | 0;
   }
  }
  if (($5 | 0) >= ($37 | 0)) {
   $87 = $0 + 28 | 0;
   if ((HEAP32[$87 >> 2] | 0) >= 0) {
    $$6 = $3;
    return $$6 | 0;
   }
   HEAP32[$87 >> 2] = 1;
   $$6 = $3;
   return $$6 | 0;
  }
  if (HEAP32[$1 + 64 >> 2] | 0) {
   HEAP32[$26 >> 2] = 0;
   $70 = $0 + 16 | 0;
   HEAP32[$70 >> 2] = 0;
   HEAP32[$70 + 4 >> 2] = 0;
   HEAP32[$0 + 28 >> 2] = 1;
   $$6 = ($3 | 0) == 8 ? 12 : 16;
   return $$6 | 0;
  }
  $75 = $0 + 28 | 0;
  if (!(HEAP32[$75 >> 2] | 0)) {
   HEAP32[$1 + 88 >> 2] = 1;
   $79 = $1 + 56 | 0;
   $80 = HEAP32[$79 >> 2] | 0;
   HEAP32[$79 >> 2] = $80 - (($80 * 5 | 0) / ((HEAP32[$1 + 24 >> 2] | 0) + 5 | 0) | 0);
   $$6 = $3;
   return $$6 | 0;
  } else {
   HEAP32[$75 >> 2] = 1;
   $$6 = $3;
   return $$6 | 0;
  }
 }
 $$$pre = ($14 | 0) < ($$pre | 0) ? $14 : $$pre;
 $22 = HEAP32[$0 + 4564 >> 2] | 0;
 $$6 = ((($$$pre | 0) > ($22 | 0) ? $$$pre : $22) | 0) / 1e3 | 0;
 return $$6 | 0;
}

function _silk_find_pitch_lags_FLP($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $14 = 0, $15 = 0, $17 = 0, $19 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $28 = 0, $33 = 0, $36 = 0.0, $39 = 0.0, $4 = 0, $41 = 0.0, $49 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $96 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 1744 | 0;
 $4 = sp + 1664 | 0;
 $5 = sp + 1600 | 0;
 $6 = sp + 1536 | 0;
 $7 = sp;
 $8 = $0 + 4592 | 0;
 $9 = HEAP32[$8 >> 2] | 0;
 $14 = HEAP32[$0 + 4588 >> 2] | 0;
 $15 = $9 + (HEAP32[$0 + 4580 >> 2] | 0) + $14 | 0;
 $17 = $3 + (0 - $14 << 2) | 0;
 $19 = $0 + 4544 | 0;
 $22 = $17 + ($15 << 2) + (0 - (HEAP32[$19 >> 2] | 0) << 2) | 0;
 _silk_apply_sine_window_FLP($7, $22, 1, $9);
 $23 = HEAP32[$8 >> 2] | 0;
 $24 = $7 + ($23 << 2) | 0;
 $25 = $22 + ($23 << 2) | 0;
 $28 = (HEAP32[$19 >> 2] | 0) - ($23 << 1) | 0;
 _memcpy($24 | 0, $25 | 0, $28 << 2 | 0) | 0;
 _silk_apply_sine_window_FLP($24 + ($28 << 2) | 0, $25 + ($28 << 2) | 0, 2, $23);
 $33 = $0 + 4644 | 0;
 _silk_autocorrelation_FLP($4, $7, HEAP32[$19 >> 2] | 0, (HEAP32[$33 >> 2] | 0) + 1 | 0);
 $36 = +HEAPF32[$4 >> 2];
 $39 = $36 + ($36 * 1.0000000474974513e-03 + 1.0);
 HEAPF32[$4 >> 2] = $39;
 $41 = +_silk_schur_FLP($6, $4, HEAP32[$33 >> 2] | 0);
 HEAPF32[$1 + 704 >> 2] = $39 / ($41 > 1.0 ? $41 : 1.0);
 _silk_k2a_FLP($5, $6, HEAP32[$33 >> 2] | 0);
 _silk_bwexpander_FLP($5, HEAP32[$33 >> 2] | 0, .9900000095367432);
 _silk_LPC_analysis_filter_FLP($2, $5, $17, $15, HEAP32[$33 >> 2] | 0);
 $49 = $0 + 4761 | 0;
 if (HEAP8[$49 >> 0] | 0) if (!(HEAP32[$0 + 4660 >> 2] | 0)) if (!(_silk_pitch_analysis_core_FLP($2, $1 + 228 | 0, $0 + 4758 | 0, $0 + 4760 | 0, $0 + 10056 | 0, HEAP32[$0 + 4540 >> 2] | 0, +(HEAP32[$0 + 4648 >> 2] | 0) * .0000152587890625, .6000000238418579 - +(HEAP32[$33 >> 2] | 0) * .004000000189989805 - +(HEAP32[$0 + 4528 >> 2] | 0) * .10000000149011612 * .00390625 - +(HEAP8[$0 + 4537 >> 0] >> 1 | 0) * .15000000596046448 - +(HEAP32[$0 + 4708 >> 2] | 0) * .10000000149011612 * .000030517578125, HEAP32[$0 + 4572 >> 2] | 0, HEAP32[$0 + 4640 >> 2] | 0, HEAP32[$0 + 4576 >> 2] | 0) | 0)) {
  HEAP8[$49 >> 0] = 2;
  STACKTOP = sp;
  return;
 } else {
  HEAP8[$49 >> 0] = 1;
  STACKTOP = sp;
  return;
 }
 $96 = $1 + 228 | 0;
 HEAP32[$96 >> 2] = 0;
 HEAP32[$96 + 4 >> 2] = 0;
 HEAP32[$96 + 8 >> 2] = 0;
 HEAP32[$96 + 12 >> 2] = 0;
 HEAP16[$0 + 4758 >> 1] = 0;
 HEAP8[$0 + 4760 >> 0] = 0;
 HEAPF32[$0 + 10056 >> 2] = 0.0;
 STACKTOP = sp;
 return;
}

function _tonality_get_info($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$ = 0, $$$14 = 0, $$0 = 0, $$01 = 0, $$02 = 0.0, $$07 = 0.0, $$09 = 0.0, $$1 = 0, $$11 = 0, $$14 = 0, $$18 = 0.0, $$2 = 0, $$3 = 0, $$4 = 0, $10 = 0, $15 = 0, $21 = 0, $22 = 0.0, $24 = 0, $29 = 0.0, $3 = 0, $36 = 0.0, $37 = 0.0, $4 = 0, $42 = 0, $44 = 0, $46 = 0, $47 = 0, $5 = 0, $50 = 0, $54 = 0, $6 = 0, $7 = 0, dest = 0, src = 0, stop = 0;
 $3 = $0 + 8276 | 0;
 $4 = HEAP32[$3 >> 2] | 0;
 $5 = $0 + 8272 | 0;
 $6 = HEAP32[$5 >> 2] | 0;
 $7 = $6 - $4 | 0;
 $$ = ($7 | 0) < 0 ? $7 + 100 | 0 : $7;
 $10 = $0 + 8 | 0;
 if (($6 | 0) == ($4 | 0) ? 1 : ((HEAP32[$10 >> 2] | 0) / 50 | 0 | 0) >= ($2 | 0)) $$14 = $4; else {
  $15 = $4 + 1 | 0;
  $$14 = ($15 | 0) == 100 ? 0 : $15;
 }
 $$$14 = ($$14 | 0) == ($6 | 0) ? $6 + -1 | 0 : $$14;
 $$3 = ($$$14 | 0) < 0 ? 99 : $$$14;
 dest = $1;
 src = $0 + 8300 + ($$3 * 56 | 0) | 0;
 stop = dest + 56 | 0;
 do {
  HEAP32[dest >> 2] = HEAP32[src >> 2];
  dest = dest + 4 | 0;
  src = src + 4 | 0;
 } while ((dest | 0) < (stop | 0));
 $21 = $1 + 4 | 0;
 $22 = +HEAPF32[$21 >> 2];
 $$0 = 0;
 $$01 = 1;
 $$02 = $22;
 $$09 = $22;
 $$4 = $$3;
 while (1) {
  if (($$0 | 0) >= 3) break;
  $24 = $$4 + 1 | 0;
  $$11 = ($24 | 0) == 100 ? 0 : $24;
  if (($$11 | 0) == (HEAP32[$5 >> 2] | 0)) break;
  $29 = +HEAPF32[$0 + 8300 + ($$11 * 56 | 0) + 4 >> 2];
  $$0 = $$0 + 1 | 0;
  $$01 = $$01 + 1 | 0;
  $$02 = $$02 + $29;
  $$09 = $$09 > $29 ? $$09 : $29;
  $$4 = $$11;
 }
 $36 = $$02 / +($$01 | 0);
 $37 = $$09 + -.20000000298023224;
 HEAPF32[$21 >> 2] = $36 > $37 ? $36 : $37;
 $42 = $0 + 8280 | 0;
 $44 = (HEAP32[$42 >> 2] | 0) + (($2 | 0) / ((HEAP32[$10 >> 2] | 0) / 400 | 0 | 0) | 0) | 0;
 HEAP32[$42 >> 2] = $44;
 $46 = $44;
 while (1) {
  if (($46 | 0) <= 7) break;
  $47 = $46 + -8 | 0;
  HEAP32[$42 >> 2] = $47;
  HEAP32[$3 >> 2] = (HEAP32[$3 >> 2] | 0) + 1;
  $46 = $47;
 }
 $50 = HEAP32[$3 >> 2] | 0;
 if (($50 | 0) > 99) HEAP32[$3 >> 2] = $50 + -100;
 $54 = ($$ | 0) > 1 ? 101 - $$ | 0 : 100;
 $$07 = 0.0;
 $$1 = 0;
 while (1) {
  if (($$1 | 0) >= ($54 | 0)) {
   $$18 = $$07;
   $$2 = $$1;
   break;
  }
  $$07 = $$07 + +HEAPF32[$0 + 7856 + ($$1 << 2) >> 2];
  $$1 = $$1 + 1 | 0;
 }
 while (1) {
  if (($$2 | 0) >= 100) break;
  $$18 = $$18 + +HEAPF32[$0 + 7456 + ($$2 << 2) >> 2];
  $$2 = $$2 + 1 | 0;
 }
 HEAPF32[$1 + 20 >> 2] = $$18 * +HEAPF32[$0 + 8260 >> 2] + (1.0 - $$18) * +HEAPF32[$0 + 8256 >> 2];
 return;
}

function _pitch_downsample($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0.0, $$01 = 0, $$1 = 0, $$2 = 0, $$3 = 0, $10 = 0, $11 = 0, $33 = 0, $35 = 0, $36 = 0, $4 = 0, $49 = 0, $5 = 0, $6 = 0, $63 = 0, $64 = 0.0, $66 = 0.0, $7 = 0, $71 = 0.0, $72 = 0, $76 = 0.0, $79 = 0.0, $8 = 0, $84 = 0.0, $89 = 0.0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 $4 = sp + 56 | 0;
 $5 = sp + 40 | 0;
 $6 = sp + 20 | 0;
 $7 = sp;
 HEAP32[$6 >> 2] = 0;
 HEAP32[$6 + 4 >> 2] = 0;
 HEAP32[$6 + 8 >> 2] = 0;
 HEAP32[$6 + 12 >> 2] = 0;
 HEAP32[$6 + 16 >> 2] = 0;
 $8 = $2 >> 1;
 $$01 = 1;
 while (1) {
  $10 = HEAP32[$0 >> 2] | 0;
  if (($$01 | 0) >= ($8 | 0)) break;
  $11 = $$01 << 1;
  HEAPF32[$1 + ($$01 << 2) >> 2] = ((+HEAPF32[$10 + ($11 + -1 << 2) >> 2] + +HEAPF32[$10 + (($11 | 1) << 2) >> 2]) * .5 + +HEAPF32[$10 + ($11 << 2) >> 2]) * .5;
  $$01 = $$01 + 1 | 0;
 }
 HEAPF32[$1 >> 2] = (+HEAPF32[$10 + 4 >> 2] * .5 + +HEAPF32[$10 >> 2]) * .5;
 if (($3 | 0) == 2) {
  $33 = $0 + 4 | 0;
  $$1 = 1;
  while (1) {
   $35 = HEAP32[$33 >> 2] | 0;
   if (($$1 | 0) >= ($8 | 0)) break;
   $36 = $$1 << 1;
   $49 = $1 + ($$1 << 2) | 0;
   HEAPF32[$49 >> 2] = +HEAPF32[$49 >> 2] + ((+HEAPF32[$35 + ($36 + -1 << 2) >> 2] + +HEAPF32[$35 + (($36 | 1) << 2) >> 2]) * .5 + +HEAPF32[$35 + ($36 << 2) >> 2]) * .5;
   $$1 = $$1 + 1 | 0;
  }
  HEAPF32[$1 >> 2] = +HEAPF32[$1 >> 2] + (+HEAPF32[$35 + 4 >> 2] * .5 + +HEAPF32[$35 >> 2]) * .5;
 }
 __celt_autocorr($1, $4, $8);
 HEAPF32[$4 >> 2] = +HEAPF32[$4 >> 2] * 1.000100016593933;
 $$2 = 1;
 while (1) {
  if (($$2 | 0) == 5) break;
  $63 = $4 + ($$2 << 2) | 0;
  $64 = +HEAPF32[$63 >> 2];
  $66 = +($$2 | 0) * .00800000037997961;
  HEAPF32[$63 >> 2] = $64 - $64 * $66 * $66;
  $$2 = $$2 + 1 | 0;
 }
 __celt_lpc($5, $4);
 $$0 = 1.0;
 $$3 = 0;
 while (1) {
  if (($$3 | 0) == 4) break;
  $71 = $$0 * .8999999761581421;
  $72 = $5 + ($$3 << 2) | 0;
  HEAPF32[$72 >> 2] = +HEAPF32[$72 >> 2] * $71;
  $$0 = $71;
  $$3 = $$3 + 1 | 0;
 }
 $76 = +HEAPF32[$5 >> 2];
 HEAPF32[$7 >> 2] = $76 + .800000011920929;
 $79 = +HEAPF32[$5 + 4 >> 2];
 HEAPF32[$7 + 4 >> 2] = $79 + $76 * .800000011920929;
 $84 = +HEAPF32[$5 + 8 >> 2];
 HEAPF32[$7 + 8 >> 2] = $84 + $79 * .800000011920929;
 $89 = +HEAPF32[$5 + 12 >> 2];
 HEAPF32[$7 + 12 >> 2] = $89 + $84 * .800000011920929;
 HEAPF32[$7 + 16 >> 2] = $89 * .800000011920929;
 _celt_fir5($1, $7, $1, $8, $6);
 STACKTOP = sp;
 return;
}

function _patch_transient_decision($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$0 = 0.0, $$01 = 0, $$02 = 0, $$02$in = 0, $$1 = 0.0, $$13 = 0, $$13$sink = 0, $$2 = 0, $$3 = 0, $$sink = 0.0, $14 = 0.0, $16 = 0.0, $19 = 0.0, $21 = 0.0, $24 = 0.0, $30 = 0.0, $33 = 0.0, $34 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0.0, $48 = 0.0, $51 = 0, $55 = 0.0, $59 = 0.0, $6 = 0, $62 = 0.0, $74 = 0, $8 = 0, $9 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 $6 = sp;
 $8 = $1 + ($3 << 2) | 0;
 L1 : do if (($5 | 0) == 1) {
  $9 = HEAP32[$8 >> 2] | 0;
  HEAP32[$6 + ($3 << 2) >> 2] = $9;
  $$02$in = $3;
  $14 = (HEAP32[tempDoublePtr >> 2] = $9, +HEAPF32[tempDoublePtr >> 2]);
  while (1) {
   $$02 = $$02$in + 1 | 0;
   if (($$02 | 0) >= ($4 | 0)) break L1;
   $16 = +HEAPF32[$1 + ($$02 << 2) >> 2];
   $19 = $14 + -1.0 > $16 ? $14 + -1.0 : $16;
   HEAPF32[$6 + ($$02 << 2) >> 2] = $19;
   $$02$in = $$02;
   $14 = $19;
  }
 } else {
  $21 = +HEAPF32[$8 >> 2];
  $24 = +HEAPF32[$1 + ($3 + $2 << 2) >> 2];
  $$13$sink = $3;
  $$sink = $21 > $24 ? $21 : $24;
  while (1) {
   HEAPF32[$6 + ($$13$sink << 2) >> 2] = $$sink;
   $$13 = $$13$sink + 1 | 0;
   if (($$13 | 0) >= ($4 | 0)) break L1;
   $30 = +HEAPF32[$1 + ($$13 << 2) >> 2];
   $33 = +HEAPF32[$1 + ($$13 + $2 << 2) >> 2];
   $34 = $30 > $33;
   if ($$sink + -1.0 > ($34 ? $30 : $33)) {
    $$13$sink = $$13;
    $$sink = $$sink + -1.0;
    continue;
   } else {
    $$13$sink = $$13;
    $$sink = $34 ? $30 : $33;
    continue;
   }
  }
 } while (0);
 $$2 = $4 + -2 | 0;
 while (1) {
  if (($$2 | 0) < ($3 | 0)) break;
  $43 = $6 + ($$2 << 2) | 0;
  $44 = +HEAPF32[$43 >> 2];
  $48 = +HEAPF32[$6 + ($$2 + 1 << 2) >> 2] + -1.0;
  HEAPF32[$43 >> 2] = $44 > $48 ? $44 : $48;
  $$2 = $$2 + -1 | 0;
 }
 $41 = ($3 | 0) < 2;
 $42 = $4 + -1 | 0;
 $$0 = 0.0;
 $$01 = 0;
 while (1) {
  $51 = Math_imul($$01, $2) | 0;
  $$1 = $$0;
  $$3 = $41 ? 2 : $3;
  while (1) {
   if (($$3 | 0) >= ($42 | 0)) break;
   $55 = +HEAPF32[$0 + ($$3 + $51 << 2) >> 2];
   $59 = +HEAPF32[$6 + ($$3 << 2) >> 2];
   $62 = ($55 < 0.0 ? 0.0 : $55) - ($59 < 0.0 ? 0.0 : $59);
   $$1 = $$1 + ($62 < 0.0 ? 0.0 : $62);
   $$3 = $$3 + 1 | 0;
  }
  $$01 = $$01 + 1 | 0;
  if (($$01 | 0) >= ($5 | 0)) break; else $$0 = $$1;
 }
 $74 = $$1 / +(Math_imul($42 - ($41 ? 2 : $3) | 0, $5) | 0) > 1.0 & 1;
 STACKTOP = sp;
 return $74 | 0;
}

function _pitch_search($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$01 = 0, $$03 = 0, $$12 = 0, $$2 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $28 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $37 = 0, $4 = 0, $41 = 0.0, $45 = 0, $49 = 0.0, $5 = 0, $51 = 0.0, $54 = 0.0, $63 = 0, $64 = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 1968 | 0;
 $4 = sp;
 $5 = $4;
 HEAP32[$5 >> 2] = 0;
 HEAP32[$5 + 4 >> 2] = 0;
 $10 = $2 >> 2;
 $11 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($10 << 2) | 0) + 15 & -16) | 0;
 $12 = $2 + 979 >> 2;
 $13 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($12 << 2) | 0) + 15 & -16) | 0;
 $14 = sp + 8 | 0;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) >= ($10 | 0)) break;
  HEAP32[$11 + ($$01 << 2) >> 2] = HEAP32[$0 + ($$01 << 1 << 2) >> 2];
  $$01 = $$01 + 1 | 0;
 }
 $$12 = 0;
 while (1) {
  if (($$12 | 0) >= ($12 | 0)) break;
  HEAP32[$13 + ($$12 << 2) >> 2] = HEAP32[$1 + ($$12 << 1 << 2) >> 2];
  $$12 = $$12 + 1 | 0;
 }
 _celt_pitch_xcorr_c($11, $13, $14, $10, 244);
 _find_best_pitch($14, $13, $10, 244, $4);
 $28 = HEAP32[$4 >> 2] << 1;
 $31 = HEAP32[$4 + 4 >> 2] << 1;
 $32 = $2 >> 1;
 $$03 = 0;
 while (1) {
  if (($$03 | 0) == 489) break;
  $33 = $14 + ($$03 << 2) | 0;
  HEAPF32[$33 >> 2] = 0.0;
  $34 = $$03 - $28 | 0;
  if (((($34 | 0) > -1 ? $34 : 0 - $34 | 0) | 0) > 2) {
   $37 = $$03 - $31 | 0;
   if (((($37 | 0) > -1 ? $37 : 0 - $37 | 0) | 0) <= 2) label = 11;
  } else label = 11;
  if ((label | 0) == 11) {
   label = 0;
   $41 = +_celt_inner_prod_c_51($0, $1 + ($$03 << 2) | 0, $32);
   HEAPF32[$33 >> 2] = $41 < -1.0 ? -1.0 : $41;
  }
  $$03 = $$03 + 1 | 0;
 }
 _find_best_pitch($14, $1, $32, 489, $4);
 $45 = HEAP32[$4 >> 2] | 0;
 if (($45 + -1 | 0) >>> 0 >= 487) {
  $$2 = 0;
  $63 = $45 << 1;
  $64 = $63 - $$2 | 0;
  HEAP32[$3 >> 2] = $64;
  STACKTOP = sp;
  return;
 }
 $49 = +HEAPF32[$14 + ($45 + -1 << 2) >> 2];
 $51 = +HEAPF32[$14 + ($45 << 2) >> 2];
 $54 = +HEAPF32[$14 + ($45 + 1 << 2) >> 2];
 if ($54 - $49 > ($51 - $49) * .699999988079071) {
  $$2 = 1;
  $63 = $45 << 1;
  $64 = $63 - $$2 | 0;
  HEAP32[$3 >> 2] = $64;
  STACKTOP = sp;
  return;
 }
 if ($49 - $54 > ($51 - $54) * .699999988079071) {
  $$2 = -1;
  $63 = $45 << 1;
  $64 = $63 - $$2 | 0;
  HEAP32[$3 >> 2] = $64;
  STACKTOP = sp;
  return;
 }
 $$2 = 0;
 $63 = $45 << 1;
 $64 = $63 - $$2 | 0;
 HEAP32[$3 >> 2] = $64;
 STACKTOP = sp;
 return;
}

function _silk_quant_LTP_gains($0, $1, $2, $3, $4, $5, $6, $7, $8) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 $7 = $7 | 0;
 $8 = $8 | 0;
 var $$0 = 0, $$01 = 0, $$011 = 0, $$02 = 0, $$04 = 0, $$05 = 0, $$07 = 0, $$08 = 0, $$09 = 0, $$1 = 0, $$110 = 0, $$112 = 0, $$13 = 0, $$16 = 0, $10 = 0, $11 = 0, $12 = 0, $14 = 0, $16 = 0, $18 = 0, $21 = 0, $30 = 0, $33 = 0, $37 = 0, $53 = 0, $55 = 0, $56 = 0, $76 = 0, $9 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 $9 = sp + 12 | 0;
 $10 = sp + 8 | 0;
 $11 = sp + 4 | 0;
 $12 = sp;
 $$0 = 0;
 $$02 = 2147483647;
 $$05 = 0;
 $$09 = 0;
 while (1) {
  if (($$09 | 0) == 3) break;
  $14 = HEAP32[18992 + ($$09 << 2) >> 2] | 0;
  $16 = HEAP32[19004 + ($$09 << 2) >> 2] | 0;
  $18 = HEAP32[19016 + ($$09 << 2) >> 2] | 0;
  $21 = HEAP8[30438 + $$09 >> 0] | 0;
  $$01 = HEAP32[$3 >> 2] | 0;
  $$011 = 0;
  $$04 = 0;
  $$07 = $6;
  $$08 = $5;
  $$16 = 0;
  while (1) {
   if (($$011 | 0) >= ($8 | 0)) break;
   _silk_VQ_WMat_EC_c($9 + $$011 | 0, $10, $11, $12, $$08, $$07, $16, $18, $14, $7, (_silk_log2lin(5333 - $$01 + 896 | 0) | 0) + -51 | 0, $21);
   $30 = $$16 + (HEAP32[$10 >> 2] | 0) | 0;
   $33 = $$04 + (HEAP32[$11 >> 2] | 0) | 0;
   $37 = (HEAP32[$12 >> 2] | 0) + 51 | 0;
   if (($$01 + (_silk_lin2log($37) | 0) | 0) < 896) $76 = 0; else $76 = $$01 + (_silk_lin2log($37) | 0) + -896 | 0;
   $$01 = $76;
   $$011 = $$011 + 1 | 0;
   $$04 = ($33 | 0) < 0 ? 2147483647 : $33;
   $$07 = $$07 + 20 | 0;
   $$08 = $$08 + 100 | 0;
   $$16 = ($30 | 0) < 0 ? 2147483647 : $30;
  }
  if (($$04 | 0) > ($$02 | 0)) {
   $$1 = $$0;
   $$13 = $$02;
  } else {
   HEAP8[$2 >> 0] = $$09;
   _memcpy($1 | 0, $9 | 0, $8 | 0) | 0;
   $$1 = $$01;
   $$13 = $$04;
  }
  $$0 = $$1;
  $$02 = $$13;
  $$05 = $$16;
  $$09 = $$09 + 1 | 0;
 }
 $53 = HEAP32[19004 + (HEAP8[$2 >> 0] << 2) >> 2] | 0;
 $$112 = 0;
 while (1) {
  if (($$112 | 0) >= ($8 | 0)) break;
  $55 = $1 + $$112 | 0;
  $56 = $$112 * 5 | 0;
  $$110 = 0;
  while (1) {
   if (($$110 | 0) == 5) break;
   HEAP16[$0 + ($56 + $$110 << 1) >> 1] = HEAP8[$53 + (((HEAP8[$55 >> 0] | 0) * 5 | 0) + $$110) >> 0] << 7;
   $$110 = $$110 + 1 | 0;
  }
  $$112 = $$112 + 1 | 0;
 }
 HEAP32[$3 >> 2] = $$0;
 HEAP32[$4 >> 2] = Math_imul(((_silk_lin2log($$05 >> (($8 | 0) == 2 ? 1 : 2)) | 0) << 16) + -125829120 >> 16, -3) | 0;
 STACKTOP = sp;
 return;
}

function _warped_true2monic_coefs($0, $1, $2) {
 $0 = $0 | 0;
 $1 = +$1;
 $2 = $2 | 0;
 var $$0 = 0.0, $$01 = 0.0, $$02 = 0, $$04 = 0, $$05 = 0, $$05$in = 0, $$13 = 0, $$16 = 0, $$27 = 0, $$3 = 0, $$4 = 0, $$5 = 0, $$5$in = 0, $$6 = 0, $12 = 0.0, $16 = 0.0, $18 = 0, $26 = 0, $34 = 0, $38 = 0.0, $40 = 0, $59 = 0, $65 = 0.0, $67 = 0, $8 = 0, $fabsf = 0.0, label = 0;
 $$05$in = $2;
 while (1) {
  $$05 = $$05$in + -1 | 0;
  if (($$05$in | 0) <= 1) break;
  $8 = $0 + ($$05$in + -2 << 2) | 0;
  HEAPF32[$8 >> 2] = +HEAPF32[$8 >> 2] - +HEAPF32[$0 + ($$05 << 2) >> 2] * $1;
  $$05$in = $$05;
 }
 $12 = 1.0 - $1 * $1;
 $16 = $12 / (+HEAPF32[$0 >> 2] * $1 + 1.0);
 $$16 = 0;
 while (1) {
  if (($$16 | 0) >= ($2 | 0)) {
   $$0 = $16;
   $$02 = 0;
   $$04 = 0;
   break;
  }
  $18 = $0 + ($$16 << 2) | 0;
  HEAPF32[$18 >> 2] = +HEAPF32[$18 >> 2] * $16;
  $$16 = $$16 + 1 | 0;
 }
 while (1) {
  if (($$04 | 0) < 10) {
   $$01 = -1.0;
   $$13 = $$02;
   $$27 = 0;
  } else {
   label = 23;
   break;
  }
  while (1) {
   if (($$27 | 0) >= ($2 | 0)) break;
   $fabsf = +Math_abs(+(+HEAPF32[$0 + ($$27 << 2) >> 2]));
   $26 = $fabsf > $$01;
   $$01 = $26 ? $fabsf : $$01;
   $$13 = $26 ? $$27 : $$13;
   $$27 = $$27 + 1 | 0;
  }
  if (!($$01 <= 3.999000072479248)) $$3 = 1; else {
   label = 23;
   break;
  }
  while (1) {
   if (($$3 | 0) >= ($2 | 0)) break;
   $34 = $0 + ($$3 + -1 << 2) | 0;
   HEAPF32[$34 >> 2] = +HEAPF32[$34 >> 2] + +HEAPF32[$0 + ($$3 << 2) >> 2] * $1;
   $$3 = $$3 + 1 | 0;
  }
  $38 = 1.0 / $$0;
  $$4 = 0;
  while (1) {
   if (($$4 | 0) >= ($2 | 0)) break;
   $40 = $0 + ($$4 << 2) | 0;
   HEAPF32[$40 >> 2] = +HEAPF32[$40 >> 2] * $38;
   $$4 = $$4 + 1 | 0;
  }
  _silk_bwexpander_FLP($0, $2, .9900000095367432 - (+($$04 | 0) * .10000000149011612 + .800000011920929) * ($$01 + -3.999000072479248) / ($$01 * +($$13 + 1 | 0)));
  $$5$in = $2;
  while (1) {
   $$5 = $$5$in + -1 | 0;
   if (($$5$in | 0) <= 1) break;
   $59 = $0 + ($$5$in + -2 << 2) | 0;
   HEAPF32[$59 >> 2] = +HEAPF32[$59 >> 2] - +HEAPF32[$0 + ($$5 << 2) >> 2] * $1;
   $$5$in = $$5;
  }
  $65 = $12 / (+HEAPF32[$0 >> 2] * $1 + 1.0);
  $$6 = 0;
  while (1) {
   if (($$6 | 0) >= ($2 | 0)) break;
   $67 = $0 + ($$6 << 2) | 0;
   HEAPF32[$67 >> 2] = +HEAPF32[$67 >> 2] * $65;
   $$6 = $$6 + 1 | 0;
  }
  $$0 = $65;
  $$02 = $$13;
  $$04 = $$04 + 1 | 0;
 }
 if ((label | 0) == 23) return;
}

function _silk_stereo_find_predictor($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $10 = 0, $11 = 0, $12 = 0, $14 = 0, $17 = 0, $21 = 0, $22 = 0, $23 = 0, $26 = 0, $28 = 0, $33 = 0, $36 = 0, $37 = 0, $38 = 0, $40 = 0, $44 = 0, $45 = 0, $47 = 0, $6 = 0, $64 = 0, $7 = 0, $71 = 0, $72 = 0, $73 = 0, $75 = 0, $79 = 0, $8 = 0, $81 = 0, $88 = 0, $89 = 0, $9 = 0, $92 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 $6 = sp + 12 | 0;
 $7 = sp + 8 | 0;
 $8 = sp + 4 | 0;
 $9 = sp;
 _silk_sum_sqr_shift($8, $6, $1, $4);
 _silk_sum_sqr_shift($9, $7, $2, $4);
 $10 = HEAP32[$6 >> 2] | 0;
 $11 = HEAP32[$7 >> 2] | 0;
 $12 = _silk_max_int_346($10, $11) | 0;
 $14 = $12 + ($12 & 1) | 0;
 $17 = HEAP32[$9 >> 2] >> $14 - $11;
 HEAP32[$9 >> 2] = $17;
 $21 = _silk_max_int_346(HEAP32[$8 >> 2] >> $14 - $10, 1) | 0;
 HEAP32[$8 >> 2] = $21;
 $22 = _silk_inner_prod_aligned_scale($1, $2, $14, $4) | 0;
 $23 = _silk_DIV32_varQ_347($22, $21, 13) | 0;
 $26 = ($23 | 0) > 16384 ? 16384 : ($23 | 0) > -16384 ? $23 : -16384;
 $28 = $26 << 16 >> 16;
 $33 = (Math_imul($26 >> 16, $28) | 0) + ((Math_imul($26 & 65535, $28) | 0) >> 16) | 0;
 $36 = _silk_max_int_346($5, ($33 | 0) > 0 ? $33 : 0 - $33 | 0) | 0;
 $37 = $14 >> 1;
 $38 = HEAP32[$3 >> 2] | 0;
 $40 = (_silk_SQRT_APPROX_348($21) | 0) << $37;
 $44 = $36 << 16 >> 16;
 $45 = Math_imul($40 - (HEAP32[$3 >> 2] | 0) >> 16, $44) | 0;
 $47 = (_silk_SQRT_APPROX_348($21) | 0) << $37;
 HEAP32[$3 >> 2] = $38 + ($45 + ((Math_imul($47 - (HEAP32[$3 >> 2] | 0) & 65535, $44) | 0) >> 16));
 $64 = $33 << 16 >> 16;
 $71 = $17 - ((Math_imul($22 >> 16, $28) | 0) + ((Math_imul($22 & 65535, $28) | 0) >> 16) << 4) + ((Math_imul($21 >> 16, $64) | 0) + ((Math_imul($21 & 65535, $64) | 0) >> 16) << 6) | 0;
 HEAP32[$9 >> 2] = $71;
 $72 = $3 + 4 | 0;
 $73 = HEAP32[$72 >> 2] | 0;
 $75 = (_silk_SQRT_APPROX_348($71) | 0) << $37;
 $79 = Math_imul($75 - (HEAP32[$72 >> 2] | 0) >> 16, $44) | 0;
 $81 = (_silk_SQRT_APPROX_348($71) | 0) << $37;
 $88 = $73 + ($79 + ((Math_imul($81 - (HEAP32[$72 >> 2] | 0) & 65535, $44) | 0) >> 16)) | 0;
 HEAP32[$72 >> 2] = $88;
 $89 = HEAP32[$3 >> 2] | 0;
 $92 = _silk_DIV32_varQ_347($88, ($89 | 0) > 1 ? $89 : 1, 14) | 0;
 HEAP32[$0 >> 2] = ($92 | 0) > 32767 ? 32767 : ($92 | 0) > 0 ? $92 : 0;
 STACKTOP = sp;
 return $26 | 0;
}

function _silk_LP_interpolate_filter_taps($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $$01 = 0, $$1 = 0, $$12 = 0, $10 = 0, $13 = 0, $24 = 0, $27 = 0, $38 = 0, $41 = 0, $52 = 0, $55 = 0, $65 = 0, $67 = 0, $7 = 0, $72 = 0, $73 = 0, $77 = 0, $8 = 0;
 if (($2 | 0) >= 4) {
  HEAP32[$0 >> 2] = HEAP32[4815];
  HEAP32[$0 + 4 >> 2] = HEAP32[4816];
  HEAP32[$0 + 8 >> 2] = HEAP32[4817];
  $77 = $1;
  HEAP32[$77 >> 2] = 35497197;
  HEAP32[$77 + 4 >> 2] = 57401098;
  return;
 }
 if (($3 | 0) <= 0) {
  $65 = 19212 + ($2 * 12 | 0) | 0;
  HEAP32[$0 >> 2] = HEAP32[$65 >> 2];
  HEAP32[$0 + 4 >> 2] = HEAP32[$65 + 4 >> 2];
  HEAP32[$0 + 8 >> 2] = HEAP32[$65 + 8 >> 2];
  $67 = 19272 + ($2 << 3) | 0;
  $72 = HEAP32[$67 + 4 >> 2] | 0;
  $73 = $1;
  HEAP32[$73 >> 2] = HEAP32[$67 >> 2];
  HEAP32[$73 + 4 >> 2] = $72;
  return;
 }
 $7 = $2 + 1 | 0;
 $8 = $3 << 16 >> 16;
 if (($3 | 0) < 32768) {
  $$01 = 0;
  while (1) {
   if (($$01 | 0) == 3) {
    $$0 = 0;
    break;
   }
   $10 = HEAP32[19212 + ($2 * 12 | 0) + ($$01 << 2) >> 2] | 0;
   $13 = (HEAP32[19212 + ($7 * 12 | 0) + ($$01 << 2) >> 2] | 0) - $10 | 0;
   HEAP32[$0 + ($$01 << 2) >> 2] = $10 + ((Math_imul($13 >> 16, $8) | 0) + ((Math_imul($13 & 65535, $8) | 0) >> 16));
   $$01 = $$01 + 1 | 0;
  }
  while (1) {
   if (($$0 | 0) == 2) break;
   $24 = HEAP32[19272 + ($2 << 3) + ($$0 << 2) >> 2] | 0;
   $27 = (HEAP32[19272 + ($7 << 3) + ($$0 << 2) >> 2] | 0) - $24 | 0;
   HEAP32[$1 + ($$0 << 2) >> 2] = $24 + ((Math_imul($27 >> 16, $8) | 0) + ((Math_imul($27 & 65535, $8) | 0) >> 16));
   $$0 = $$0 + 1 | 0;
  }
  return;
 } else {
  $$12 = 0;
  while (1) {
   if (($$12 | 0) == 3) {
    $$1 = 0;
    break;
   }
   $38 = HEAP32[19212 + ($7 * 12 | 0) + ($$12 << 2) >> 2] | 0;
   $41 = $38 - (HEAP32[19212 + ($2 * 12 | 0) + ($$12 << 2) >> 2] | 0) | 0;
   HEAP32[$0 + ($$12 << 2) >> 2] = $38 + ((Math_imul($41 >> 16, $8) | 0) + ((Math_imul($41 & 65535, $8) | 0) >> 16));
   $$12 = $$12 + 1 | 0;
  }
  while (1) {
   if (($$1 | 0) == 2) break;
   $52 = HEAP32[19272 + ($7 << 3) + ($$1 << 2) >> 2] | 0;
   $55 = $52 - (HEAP32[19272 + ($2 << 3) + ($$1 << 2) >> 2] | 0) | 0;
   HEAP32[$1 + ($$1 << 2) >> 2] = $52 + ((Math_imul($55 >> 16, $8) | 0) + ((Math_imul($55 & 65535, $8) | 0) >> 16));
   $$1 = $$1 + 1 | 0;
  }
  return;
 }
}

function _silk_gains_quant($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $$0 = 0, $13 = 0, $14 = 0, $15 = 0, $20 = 0, $22 = 0, $26 = 0, $29 = 0, $31 = 0, $33 = 0, $39 = 0, $41 = 0, $42 = 0, $44 = 0, $45 = 0, $48 = 0, $49 = 0, $55 = 0, $57 = 0, $6 = 0, $61 = 0, $67 = 0, $79 = 0, $80 = 0, $storemerge$in = 0;
 $$0 = 0;
 while (1) {
  if (($$0 | 0) >= ($4 | 0)) break;
  $6 = $1 + ($$0 << 2) | 0;
  _silk_lin2log(HEAP32[$6 >> 2] | 0) | 0;
  $13 = ((((_silk_lin2log(HEAP32[$6 >> 2] | 0) | 0) << 16) + -136970240 >> 16) * 2251 | 0) >>> 16;
  $14 = $13 & 255;
  $15 = $0 + $$0 | 0;
  HEAP8[$15 >> 0] = $14;
  if (($13 << 24 >> 24 | 0) < (HEAP8[$2 >> 0] | 0)) {
   $20 = $14 + 1 << 24 >> 24;
   HEAP8[$15 >> 0] = $20;
   $22 = $20;
  } else $22 = $14;
  if ($22 << 24 >> 24 > 63) $26 = 63; else $26 = ($22 << 24 >> 24 > 0 ? $22 : 0) & 255;
  HEAP8[$15 >> 0] = $26;
  $29 = HEAP8[$2 >> 0] | 0;
  if (!($$0 | $3)) {
   $31 = ($29 << 24 >> 24) + -4 | 0;
   $33 = HEAP8[$0 >> 0] | 0;
   if (($31 | 0) > 63) if (($33 << 24 >> 24 | 0) > ($31 | 0)) $42 = $31; else $42 = ($33 << 24 >> 24 > 63 ? $33 : 63) & 255; else if ($33 << 24 >> 24 > 63) $42 = 63; else {
    $39 = $33 << 24 >> 24;
    $42 = ($39 | 0) < ($31 | 0) ? $31 : $39;
   }
   $41 = $42 & 255;
   HEAP8[$0 >> 0] = $41;
   HEAP8[$2 >> 0] = $41;
   $80 = $41;
  } else {
   $44 = $26 - ($29 & 255) | 0;
   $45 = $44 & 255;
   HEAP8[$15 >> 0] = $45;
   $48 = (HEAP8[$2 >> 0] | 0) + 8 | 0;
   $49 = $44 << 24 >> 24;
   if (($49 | 0) > ($48 | 0)) {
    $55 = $48 + (($49 - $48 + 1 | 0) >>> 1) & 255;
    HEAP8[$15 >> 0] = $55;
    $57 = $55;
   } else $57 = $45;
   if ($57 << 24 >> 24 > 36) $61 = 36; else $61 = ($57 << 24 >> 24 > -4 ? $57 : -4) << 24 >> 24;
   HEAP8[$15 >> 0] = $61;
   if (($61 | 0) > ($48 | 0)) {
    $67 = (HEAPU8[$2 >> 0] | 0) + (($61 << 1) - $48) | 0;
    HEAP8[$2 >> 0] = $67;
    $storemerge$in = _silk_min_int($67 << 24 >> 24) | 0;
   } else $storemerge$in = (HEAPU8[$2 >> 0] | 0) + ($61 & 255) | 0;
   HEAP8[$2 >> 0] = $storemerge$in;
   HEAP8[$15 >> 0] = (HEAPU8[$15 >> 0] | 0) + 4;
   $80 = HEAP8[$2 >> 0] | 0;
  }
  $79 = $80 << 24 >> 24;
  HEAP32[$6 >> 2] = _silk_log2lin(_silk_min_32(($79 * 29 | 0) + ($79 * 7281 >> 16) + 2090 | 0) | 0) | 0;
  $$0 = $$0 + 1 | 0;
 }
 return;
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

function _downmix_and_resample($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
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
 var $$0 = 0.0, $$01 = 0.0, $$02 = 0, $$1 = 0, $$14 = 0.0, $$16 = 0, $$18 = 0, $11 = 0, $19 = 0, $20 = 0, $26 = 0, $32 = 0, $33 = 0, $34 = 0, $37 = 0, $38 = 0, sp = 0;
 sp = STACKTOP;
 if (!$4) {
  $$0 = 0.0;
  STACKTOP = sp;
  return +$$0;
 }
 $11 = ($9 | 0) == 48e3;
 if ($11) {
  $$16 = $5 << 1;
  $$18 = $4 << 1;
 } else if (($9 | 0) == 16e3) {
  $$16 = ($5 << 1 | 0) / 3 | 0;
  $$18 = ($4 << 1 | 0) / 3 | 0;
 } else {
  $$16 = $5;
  $$18 = $4;
 }
 $19 = _llvm_stacksave() | 0;
 $20 = STACKTOP;
 STACKTOP = STACKTOP + ((1 * ($$18 << 2) | 0) + 15 & -16) | 0;
 FUNCTION_TABLE_viiiiiii[$0 & 1]($1, $20, $$18, $$16, $6, $7, $8);
 if (($7 | 0) == -2) $$14 = .000030517578125 / +($8 | 0); else $$14 = ($7 | 0) > -1 ? .0000152587890625 : .000030517578125;
 $$02 = 0;
 while (1) {
  if (($$02 | 0) >= ($$18 | 0)) break;
  $26 = $20 + ($$02 << 2) | 0;
  HEAPF32[$26 >> 2] = +HEAPF32[$26 >> 2] * $$14;
  $$02 = $$02 + 1 | 0;
 }
 L17 : do if ($11) $$01 = +_silk_resampler_down2_hp($3, $2, $20, $$18); else {
  if (($9 | 0) >= 24e3) {
   switch ($9 | 0) {
   case 24e3:
    break;
   default:
    {
     $$01 = 0.0;
     break L17;
    }
   }
   _memcpy($2 | 0, $20 | 0, $$18 << 2 | 0) | 0;
   $$01 = 0.0;
   break;
  }
  switch ($9 | 0) {
  case 16e3:
   break;
  default:
   {
    $$01 = 0.0;
    break L17;
   }
  }
  $32 = $$18 * 3 | 0;
  $33 = _llvm_stacksave() | 0;
  $34 = STACKTOP;
  STACKTOP = STACKTOP + ((1 * ($32 << 2) | 0) + 15 & -16) | 0;
  $$1 = 0;
  while (1) {
   if (($$1 | 0) >= ($$18 | 0)) break;
   $37 = HEAP32[$20 + ($$1 << 2) >> 2] | 0;
   $38 = $$1 * 3 | 0;
   HEAP32[$34 + ($38 << 2) >> 2] = $37;
   HEAP32[$34 + ($38 + 1 << 2) >> 2] = $37;
   HEAP32[$34 + ($38 + 2 << 2) >> 2] = $37;
   $$1 = $$1 + 1 | 0;
  }
  +_silk_resampler_down2_hp($3, $2, $34, $32);
  _llvm_stackrestore($33 | 0);
  $$01 = 0.0;
 } while (0);
 _llvm_stackrestore($19 | 0);
 $$0 = $$01;
 STACKTOP = sp;
 return +$$0;
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

function _ec_enc_done($0) {
 $0 = $0 | 0;
 var $$01 = 0, $$03 = 0, $$1 = 0, $$1$ph = 0, $$12 = 0, $$15 = 0, $$15$ph = 0, $14 = 0, $18 = 0, $2 = 0, $22 = 0, $3 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $43 = 0, $46 = 0, $51 = 0, $55 = 0, $56 = 0, $58 = 0, $6 = 0, $61 = 0, $65 = 0, $66 = 0, $68 = 0, $79 = 0, $9 = 0, label = 0;
 $2 = HEAP32[$0 + 28 >> 2] | 0;
 $3 = Math_clz32($2 | 0) | 0;
 $4 = 2147483647 >>> $3;
 $6 = HEAP32[$0 + 32 >> 2] | 0;
 $9 = $6 + $4 & ~$4;
 if (($9 | $4) >>> 0 < ($6 + $2 | 0) >>> 0) {
  $$1$ph = $3;
  $$15$ph = $9;
 } else {
  $14 = $4 >>> 1;
  $$1$ph = $3 + 1 | 0;
  $$15$ph = $6 + $14 & ~$14;
 }
 $18 = ~$$1$ph;
 $22 = $$1$ph + (($18 | 0) > -1 ? $18 : -1) + 8 & -8;
 $$1 = $$1$ph;
 $$15 = $$15$ph;
 while (1) {
  if (($$1 | 0) <= 0) break;
  _ec_enc_carry_out($0, $$15 >>> 23);
  $$1 = $$1 + -8 | 0;
  $$15 = $$15 << 8 & 2147483392;
 }
 if ((HEAP32[$0 + 40 >> 2] | 0) > -1) label = 8; else if (HEAP32[$0 + 36 >> 2] | 0) label = 8;
 if ((label | 0) == 8) _ec_enc_carry_out($0, 0);
 $37 = HEAP32[$0 + 16 >> 2] | 0;
 $38 = $0 + 44 | 0;
 $39 = ~$37;
 $43 = $37 + (($39 | 0) > -8 ? $39 : -8) + 8 & -8;
 $$01 = HEAP32[$0 + 12 >> 2] | 0;
 $$03 = $37;
 while (1) {
  if (($$03 | 0) <= 7) break;
  $46 = _ec_write_byte_at_end($0, $$01 & 255) | 0;
  HEAP32[$38 >> 2] = HEAP32[$38 >> 2] | $46;
  $$01 = $$01 >>> 8;
  $$03 = $$03 + -8 | 0;
 }
 $51 = $37 - $43 | 0;
 if (HEAP32[$38 >> 2] | 0) return;
 $55 = $0 + 24 | 0;
 $56 = HEAP32[$55 >> 2] | 0;
 $58 = $0 + 4 | 0;
 $61 = $0 + 8 | 0;
 _memset((HEAP32[$0 >> 2] | 0) + $56 | 0, 0, (HEAP32[$58 >> 2] | 0) - $56 - (HEAP32[$61 >> 2] | 0) | 0) | 0;
 if (($51 | 0) <= 0) return;
 $65 = HEAP32[$61 >> 2] | 0;
 $66 = HEAP32[$58 >> 2] | 0;
 if ($66 >>> 0 <= $65 >>> 0) {
  HEAP32[$38 >> 2] = -1;
  return;
 }
 $68 = $22 - $$1$ph | 0;
 if (($51 | 0) > ($68 | 0) ? ((HEAP32[$55 >> 2] | 0) + $65 | 0) >>> 0 >= $66 >>> 0 : 0) {
  HEAP32[$38 >> 2] = -1;
  $$12 = $$01 & (1 << $68) + -1;
 } else $$12 = $$01;
 $79 = (HEAP32[$0 >> 2] | 0) + ($66 - $65 + -1) | 0;
 HEAP8[$79 >> 0] = HEAPU8[$79 >> 0] | 0 | $$12;
 return;
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

function _log10($0) {
 $0 = +$0;
 var $$0 = 0, $$0100 = 0, $$0101 = 0.0, $1 = 0, $15 = 0, $2 = 0, $21 = 0, $26 = 0, $28 = 0.0, $30 = 0.0, $32 = 0.0, $33 = 0.0, $34 = 0.0, $4 = 0, $50 = 0, $51 = 0.0, $56 = 0.0, $57 = 0.0, $58 = 0.0, $59 = 0.0, $66 = 0.0, $71 = 0, label = 0;
 HEAPF64[tempDoublePtr >> 3] = $0;
 $1 = HEAP32[tempDoublePtr >> 2] | 0;
 $2 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
 $4 = ($2 | 0) < 0;
 do if ($4 | $2 >>> 0 < 1048576) {
  if (($1 | 0) == 0 & ($2 & 2147483647 | 0) == 0) {
   $$0101 = -1.0 / ($0 * $0);
   break;
  }
  if ($4) {
   $$0101 = ($0 - $0) / 0.0;
   break;
  } else {
   HEAPF64[tempDoublePtr >> 3] = $0 * 18014398509481984.0;
   $15 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
   $$0 = -1077;
   $$0100 = $15;
   $26 = HEAP32[tempDoublePtr >> 2] | 0;
   $71 = $15;
   label = 9;
   break;
  }
 } else if ($2 >>> 0 > 2146435071) $$0101 = $0; else if (($1 | 0) == 0 & 0 == 0 & ($2 | 0) == 1072693248) $$0101 = 0.0; else {
  $$0 = -1023;
  $$0100 = $2;
  $26 = $1;
  $71 = $2;
  label = 9;
 } while (0);
 if ((label | 0) == 9) {
  $21 = $$0100 + 614242 | 0;
  HEAP32[tempDoublePtr >> 2] = $26;
  HEAP32[tempDoublePtr + 4 >> 2] = ($21 & 1048575) + 1072079006;
  $28 = +HEAPF64[tempDoublePtr >> 3] + -1.0;
  $30 = $28 * ($28 * .5);
  $32 = $28 / ($28 + 2.0);
  $33 = $32 * $32;
  $34 = $33 * $33;
  HEAPF64[tempDoublePtr >> 3] = $28 - $30;
  $50 = HEAP32[tempDoublePtr + 4 >> 2] | 0;
  HEAP32[tempDoublePtr >> 2] = 0;
  HEAP32[tempDoublePtr + 4 >> 2] = $50;
  $51 = +HEAPF64[tempDoublePtr >> 3];
  $56 = $28 - $51 - $30 + $32 * ($30 + ($34 * ($34 * ($34 * .15313837699209373 + .22222198432149784) + .3999999999940942) + $33 * ($34 * ($34 * ($34 * .14798198605116586 + .1818357216161805) + .2857142874366239) + .6666666666666735)));
  $57 = $51 * .4342944818781689;
  $58 = +($$0 + ($21 >>> 20) | 0);
  $59 = $58 * .30102999566361177;
  $66 = $59 + $57;
  $$0101 = $66 + ($57 + ($59 - $66) + ($56 * .4342944818781689 + ($58 * 3.694239077158931e-13 + ($51 + $56) * 2.5082946711645275e-11)));
 }
 return +$$0101;
}

function _celt_preemphasis($0, $1, $2, $3, $4, $$val, $$1$val, $5, $6) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $$val = +$$val;
 $$1$val = +$$1$val;
 $5 = $5 | 0;
 $6 = $6 | 0;
 var $$0 = 0.0, $$01 = 0, $$1 = 0.0, $$12 = 0, $$2 = 0, $$3 = 0, $16 = 0.0, $21 = 0, $25 = 0, $36 = 0, $37 = 0.0, $38 = 0, $43 = 0, $44 = 0.0, $48 = 0, $7 = 0.0, $or$cond = 0, $storemerge = 0.0, label = 0;
 $7 = +HEAPF32[$5 >> 2];
 do if ($$1$val == 0.0) {
  if (($4 | 0) != 1) {
   $48 = ($2 | 0) / ($4 | 0) | 0;
   label = 8;
   break;
  }
  if (!$6) {
   $$0 = $7;
   $$01 = 0;
   while (1) {
    if (($$01 | 0) >= ($2 | 0)) {
     $storemerge = $$0;
     break;
    }
    $16 = +HEAPF32[$0 + ((Math_imul($$01, $3) | 0) << 2) >> 2] * 32768.0;
    HEAPF32[$1 + ($$01 << 2) >> 2] = $16 - $$0;
    $$0 = $16 * $$val;
    $$01 = $$01 + 1 | 0;
   }
   HEAPF32[$5 >> 2] = $storemerge;
   return;
  } else $25 = $2;
 } else {
  $21 = ($2 | 0) / ($4 | 0) | 0;
  if (($4 | 0) == 1) $25 = $21; else {
   $48 = $21;
   label = 8;
  }
 } while (0);
 if ((label | 0) == 8) {
  _memset($1 | 0, 0, $2 << 2 | 0) | 0;
  $25 = $48;
 }
 $$12 = 0;
 while (1) {
  if (($$12 | 0) >= ($25 | 0)) break;
  HEAPF32[$1 + ((Math_imul($$12, $4) | 0) << 2) >> 2] = +HEAPF32[$0 + ((Math_imul($$12, $3) | 0) << 2) >> 2] * 32768.0;
  $$12 = $$12 + 1 | 0;
 }
 L18 : do if (!$6) {
  $$1 = $7;
  $$3 = 0;
 } else {
  $$2 = 0;
  while (1) {
   if (($$2 | 0) >= ($25 | 0)) {
    $$1 = $7;
    $$3 = 0;
    break L18;
   }
   $36 = $1 + ((Math_imul($$2, $4) | 0) << 2) | 0;
   $37 = +HEAPF32[$36 >> 2];
   $38 = $37 > 65536.0;
   $or$cond = $37 < -65536.0 & ($38 ^ 1);
   HEAPF32[$36 >> 2] = $or$cond | $38 ? ($or$cond ? -65536.0 : 65536.0) : $37;
   $$2 = $$2 + 1 | 0;
  }
 } while (0);
 while (1) {
  if (($$3 | 0) >= ($2 | 0)) {
   $storemerge = $$1;
   break;
  }
  $43 = $1 + ($$3 << 2) | 0;
  $44 = +HEAPF32[$43 >> 2];
  HEAPF32[$43 >> 2] = $44 - $$1;
  $$1 = $44 * $$val;
  $$3 = $$3 + 1 | 0;
 }
 HEAPF32[$5 >> 2] = $storemerge;
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

function _silk_setup_resamplers($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$1 = 0, $$pre$phiZ2D = 0, $13 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $24 = 0, $25 = 0, $26 = 0, $3 = 0, $30 = 0, $32 = 0, $35 = 0, $36 = 0, $37 = 0, $4 = 0, $41 = 0, $43 = 0, $44 = 0, $8 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 304 | 0;
 $2 = sp;
 $3 = $0 + 4572 | 0;
 $4 = HEAP32[$3 >> 2] | 0;
 if (($4 | 0) == ($1 | 0)) {
  $8 = $0 + 4552 | 0;
  if ((HEAP32[$0 + 4556 >> 2] | 0) == (HEAP32[$8 >> 2] | 0)) {
   $$1 = 0;
   $$pre$phiZ2D = $8;
   $43 = HEAP32[$$pre$phiZ2D >> 2] | 0;
   $44 = $0 + 4556 | 0;
   HEAP32[$44 >> 2] = $43;
   STACKTOP = sp;
   return $$1 | 0;
  }
 }
 if (!$4) {
  $13 = $0 + 4552 | 0;
  $$1 = _silk_resampler_init($0 + 5772 | 0, HEAP32[$13 >> 2] | 0, $1 * 1e3 | 0, 1) | 0;
  $$pre$phiZ2D = $13;
  $43 = HEAP32[$$pre$phiZ2D >> 2] | 0;
  $44 = $0 + 4556 | 0;
  HEAP32[$44 >> 2] = $43;
  STACKTOP = sp;
  return $$1 | 0;
 } else {
  $20 = ((HEAP32[$0 + 4576 >> 2] | 0) * 10 | 0) + 5 | 0;
  $21 = Math_imul($20, $4) | 0;
  $22 = Math_imul($20, $1) | 0;
  $24 = _llvm_stacksave() | 0;
  $25 = STACKTOP;
  STACKTOP = STACKTOP + ((1 * ((($21 | 0) > ($22 | 0) ? $21 : $22) << 1) | 0) + 15 & -16) | 0;
  $26 = $0 + 7176 | 0;
  _silk_float2short_array($25, $26, $21);
  $30 = $0 + 4552 | 0;
  $32 = _silk_resampler_init($2, (HEAP32[$3 >> 2] << 16 >> 16) * 1e3 | 0, HEAP32[$30 >> 2] | 0, 0) | 0;
  $35 = Math_imul($20, (HEAP32[$30 >> 2] | 0) / 1e3 | 0) | 0;
  $36 = STACKTOP;
  STACKTOP = STACKTOP + ((1 * ($35 << 1) | 0) + 15 & -16) | 0;
  _silk_resampler($2, $36, $25, $21);
  $37 = $0 + 5772 | 0;
  $41 = _silk_resampler_init($37, HEAP32[$30 >> 2] | 0, ($1 << 16 >> 16) * 1e3 | 0, 1) | 0;
  _silk_resampler($37, $25, $36, $35);
  _silk_short2float_array($26, $25, $22);
  _llvm_stackrestore($24 | 0);
  $$1 = $32 + $41 | 0;
  $$pre$phiZ2D = $30;
  $43 = HEAP32[$$pre$phiZ2D >> 2] | 0;
  $44 = $0 + 4556 | 0;
  HEAP32[$44 >> 2] = $43;
  STACKTOP = sp;
  return $$1 | 0;
 }
 return 0;
}

function _silk_HP_variable_cutoff($0) {
 $0 = $0 | 0;
 var $$ = 0, $11 = 0, $13 = 0, $15 = 0, $17 = 0, $18 = 0, $20 = 0, $28 = 0, $39 = 0, $40 = 0, $41 = 0, $43 = 0, $52 = 0, $6 = 0, $61 = 0, $64 = 0, $65 = 0, $71 = 0, $83 = 0, $90 = 0;
 if ((HEAP8[$0 + 4537 >> 0] | 0) != 2) return;
 $6 = Math_imul(HEAP32[$0 + 4572 >> 2] | 0, 65536e3) | 0;
 $11 = (_silk_lin2log(($6 | 0) / (HEAP32[$0 + 4540 >> 2] | 0) | 0) | 0) + -2048 | 0;
 $13 = HEAP32[$0 + 4692 >> 2] | 0;
 $15 = 0 - $13 << 2;
 $17 = $13 << 16 >> 16;
 $18 = Math_imul($15 >> 16, $17) | 0;
 $20 = Math_imul($15 & 65532, $17) | 0;
 $28 = Math_imul($18 + ($20 >> 16) >> 16, $11 - ((_silk_lin2log(3932160) | 0) + 63488) << 16 >> 16) | 0;
 $39 = $11 + ($28 + ((Math_imul($18 + ($20 >>> 16) & 65535, $11 - ((_silk_lin2log(3932160) | 0) + 63488) << 16 >> 16) | 0) >> 16)) | 0;
 $40 = $0 + 8 | 0;
 $41 = HEAP32[$40 >> 2] | 0;
 $43 = $39 - ($41 >> 8) | 0;
 $$ = ($43 | 0) < 0 ? $43 * 3 | 0 : $43;
 $52 = Math_imul(HEAP32[$0 + 4528 >> 2] << 16 >> 16, ($$ | 0) > 51 ? 51 : (($$ | 0) > -51 ? $$ : -51) << 16 >> 16) | 0;
 HEAP32[$40 >> 2] = $41 + ((($52 >> 16) * 6554 | 0) + ((($52 & 65535) * 6554 | 0) >>> 16));
 $61 = (_silk_lin2log(60) | 0) << 8;
 $64 = ($61 | 0) > ((_silk_lin2log(100) | 0) << 8 | 0);
 $65 = HEAP32[$40 >> 2] | 0;
 do if ($64) {
  if (($65 | 0) > ((_silk_lin2log(60) | 0) << 8 | 0)) {
   $90 = (_silk_lin2log(60) | 0) << 8;
   break;
  }
  $71 = HEAP32[$40 >> 2] | 0;
  if (($71 | 0) < ((_silk_lin2log(100) | 0) << 8 | 0)) {
   $90 = (_silk_lin2log(100) | 0) << 8;
   break;
  } else {
   $90 = HEAP32[$40 >> 2] | 0;
   break;
  }
 } else {
  if (($65 | 0) > ((_silk_lin2log(100) | 0) << 8 | 0)) {
   $90 = (_silk_lin2log(100) | 0) << 8;
   break;
  }
  $83 = HEAP32[$40 >> 2] | 0;
  if (($83 | 0) < ((_silk_lin2log(60) | 0) << 8 | 0)) {
   $90 = (_silk_lin2log(60) | 0) << 8;
   break;
  } else {
   $90 = HEAP32[$40 >> 2] | 0;
   break;
  }
 } while (0);
 HEAP32[$40 >> 2] = $90;
 return;
}

function _silk_A2NLSF_eval_poly($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $$01 = 0, $$01$in = 0, $$1 = 0, $10 = 0, $14 = 0, $23 = 0, $25 = 0, $36 = 0, $4 = 0, $47 = 0, $5 = 0, $58 = 0, $69 = 0, $7 = 0, $80 = 0, $91 = 0;
 $4 = HEAP32[$0 + ($2 << 2) >> 2] | 0;
 $5 = $1 << 4;
 if (($2 | 0) == 8) {
  $14 = $1 << 20 >> 16;
  $23 = ($5 >> 15) + 1 >> 1;
  $25 = (HEAP32[$0 + 28 >> 2] | 0) + ((Math_imul($4 >> 16, $14) | 0) + ((Math_imul($4 & 65535, $14) | 0) >> 16)) + (Math_imul($4, $23) | 0) | 0;
  $36 = (HEAP32[$0 + 24 >> 2] | 0) + ((Math_imul($25 >> 16, $14) | 0) + ((Math_imul($25 & 65535, $14) | 0) >> 16)) + (Math_imul($25, $23) | 0) | 0;
  $47 = (HEAP32[$0 + 20 >> 2] | 0) + ((Math_imul($36 >> 16, $14) | 0) + ((Math_imul($36 & 65535, $14) | 0) >> 16)) + (Math_imul($36, $23) | 0) | 0;
  $58 = (HEAP32[$0 + 16 >> 2] | 0) + ((Math_imul($47 >> 16, $14) | 0) + ((Math_imul($47 & 65535, $14) | 0) >> 16)) + (Math_imul($47, $23) | 0) | 0;
  $69 = (HEAP32[$0 + 12 >> 2] | 0) + ((Math_imul($58 >> 16, $14) | 0) + ((Math_imul($58 & 65535, $14) | 0) >> 16)) + (Math_imul($58, $23) | 0) | 0;
  $80 = (HEAP32[$0 + 8 >> 2] | 0) + ((Math_imul($69 >> 16, $14) | 0) + ((Math_imul($69 & 65535, $14) | 0) >> 16)) + (Math_imul($69, $23) | 0) | 0;
  $91 = (HEAP32[$0 + 4 >> 2] | 0) + ((Math_imul($80 >> 16, $14) | 0) + ((Math_imul($80 & 65535, $14) | 0) >> 16)) + (Math_imul($80, $23) | 0) | 0;
  $$1 = (HEAP32[$0 >> 2] | 0) + ((Math_imul($91 >> 16, $14) | 0) + ((Math_imul($91 & 65535, $14) | 0) >> 16)) + (Math_imul($91, $23) | 0) | 0;
  return $$1 | 0;
 }
 $7 = $1 << 20 >> 16;
 $10 = ($5 >> 15) + 1 >> 1;
 $$0 = $4;
 $$01$in = $2;
 while (1) {
  $$01 = $$01$in + -1 | 0;
  if (($$01$in | 0) <= 0) {
   $$1 = $$0;
   break;
  }
  $$0 = (HEAP32[$0 + ($$01 << 2) >> 2] | 0) + ((Math_imul($$0 >> 16, $7) | 0) + ((Math_imul($$0 & 65535, $7) | 0) >> 16)) + (Math_imul($$0, $10) | 0) | 0;
  $$01$in = $$01;
 }
 return $$1 | 0;
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

function _compute_mdcts($0, $1, $2, $3, $4, $5, $6, $7) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 $7 = $7 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $$04 = 0, $$05 = 0, $$06 = 0, $$1 = 0, $$13 = 0, $10 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $22 = 0, $24 = 0, $27 = 0, $37 = 0, $47 = 0, $48 = 0.0, $50 = 0, $52 = 0, $55 = 0, $9 = 0;
 $9 = HEAP32[$0 + 4 >> 2] | 0;
 $10 = ($1 | 0) == 0;
 $$06 = HEAP32[$0 + 44 >> 2] << ($10 ? $6 : 0);
 $$05 = $10 ? 1 : $1;
 $$04 = (HEAP32[$0 + 36 >> 2] | 0) - ($10 ? $6 : 0) | 0;
 $17 = $0 + 64 | 0;
 $18 = Math_imul($$05, $$06) | 0;
 $19 = $18 + $9 | 0;
 $20 = $0 + 60 | 0;
 $$0 = 0;
 do {
  $22 = $2 + ((Math_imul($$0, $19) | 0) << 2) | 0;
  $24 = Math_imul(Math_imul($$0, $$06) | 0, $$05) | 0;
  $$01 = 0;
  while (1) {
   if (($$01 | 0) >= ($$05 | 0)) break;
   $27 = $22 + ((Math_imul($$01, $$06) | 0) << 2) | 0;
   _clt_mdct_forward_c($17, $27, $3 + ($$01 + $24 << 2) | 0, HEAP32[$20 >> 2] | 0, $9, $$04, $$05);
   $$01 = $$01 + 1 | 0;
  }
  $$0 = $$0 + 1 | 0;
 } while (($$0 | 0) < ($5 | 0));
 L8 : do if (($5 | 0) == 2 & ($4 | 0) == 1) {
  $$02 = 0;
  while (1) {
   if (($$02 | 0) >= ($18 | 0)) break L8;
   $37 = $3 + ($$02 << 2) | 0;
   HEAPF32[$37 >> 2] = +HEAPF32[$37 >> 2] * .5 + +HEAPF32[$3 + ($18 + $$02 << 2) >> 2] * .5;
   $$02 = $$02 + 1 | 0;
  }
 } while (0);
 if (($7 | 0) == 1) return;
 $47 = ($18 | 0) / ($7 | 0) | 0;
 $48 = +($7 | 0);
 $50 = $18 - $47 << 2;
 $$1 = 0;
 do {
  $52 = Math_imul(Math_imul($$1, $$05) | 0, $$06) | 0;
  $$13 = 0;
  while (1) {
   if (($$13 | 0) >= ($47 | 0)) break;
   $55 = $3 + ($52 + $$13 << 2) | 0;
   HEAPF32[$55 >> 2] = +HEAPF32[$55 >> 2] * $48;
   $$13 = $$13 + 1 | 0;
  }
  _memset($3 + ($52 + $47 << 2) | 0, 0, $50 | 0) | 0;
  $$1 = $$1 + 1 | 0;
 } while (($$1 | 0) < ($4 | 0));
 return;
}

function _silk_LBRR_encode_FLP($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $$pre$phiZ2D = 0, $19 = 0, $20 = 0, $22 = 0, $30 = 0, $4 = 0, $41 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, dest = 0, label = 0, sp = 0, src = 0, stop = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 4384 | 0;
 $4 = sp + 4368 | 0;
 $5 = sp + 4352 | 0;
 $6 = sp;
 $7 = $0 + 5744 | 0;
 $8 = HEAP32[$7 >> 2] | 0;
 $9 = $0 + 6096 + ($8 * 36 | 0) | 0;
 if (!(HEAP32[$0 + 6088 >> 2] | 0)) {
  STACKTOP = sp;
  return;
 }
 if ((HEAP32[$0 + 4528 >> 2] | 0) <= 77) {
  STACKTOP = sp;
  return;
 }
 HEAP32[$0 + 4720 + ($8 << 2) >> 2] = 1;
 _memcpy($6 | 0, $0 + 144 | 0, 4352) | 0;
 dest = $9;
 src = $0 + 4732 | 0;
 stop = dest + 36 | 0;
 do {
  HEAP16[dest >> 1] = HEAP16[src >> 1] | 0;
  dest = dest + 2 | 0;
  src = src + 2 | 0;
 } while ((dest | 0) < (stop | 0));
 $19 = $0 + 4576 | 0;
 $20 = HEAP32[$19 >> 2] | 0;
 _memcpy($5 | 0, $1 | 0, $20 << 2 | 0) | 0;
 $22 = HEAP32[$7 >> 2] | 0;
 if (!$22) label = 6; else if (!(HEAP32[$0 + 4720 + ($22 + -1 << 2) >> 2] | 0)) label = 6; else {
  $$pre$phiZ2D = $0 + 4536 | 0;
  $41 = $20;
 }
 if ((label | 0) == 6) {
  $30 = $0 + 4536 | 0;
  HEAP8[$30 >> 0] = HEAP8[$0 + 7164 >> 0] | 0;
  HEAP8[$9 >> 0] = _silk_min_int_362((HEAPU8[$9 >> 0] | 0) + (HEAP32[$0 + 6092 >> 2] | 0) << 24 >> 24) | 0;
  $$pre$phiZ2D = $30;
  $41 = HEAP32[$19 >> 2] | 0;
 }
 _silk_gains_dequant($4, $9, $$pre$phiZ2D, ($3 | 0) == 2 & 1, $41);
 $$0 = 0;
 while (1) {
  if (($$0 | 0) >= (HEAP32[$19 >> 2] | 0)) break;
  HEAPF32[$1 + ($$0 << 2) >> 2] = +(HEAP32[$4 + ($$0 << 2) >> 2] | 0) * .0000152587890625;
  $$0 = $$0 + 1 | 0;
 }
 _silk_NSQ_wrapper_FLP($0, $1, $9, $6, $0 + 6204 + ((HEAP32[$7 >> 2] | 0) * 320 | 0) | 0, $2);
 _memcpy($1 | 0, $5 | 0, HEAP32[$19 >> 2] << 2 | 0) | 0;
 STACKTOP = sp;
 return;
}

function _silk_process_NLSFs($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $$01 = 0, $14 = 0, $20 = 0, $25 = 0, $26 = 0, $32 = 0, $34 = 0, $35 = 0, $36 = 0, $38 = 0, $4 = 0, $5 = 0, $58 = 0, $6 = 0, $60 = 0, $66 = 0, $9 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 $4 = sp + 64 | 0;
 $5 = sp + 32 | 0;
 $6 = sp;
 $9 = HEAP32[$0 + 4528 >> 2] << 16 >> 16;
 $14 = (Math_imul($9, -5) | 0) + ($9 * 59246 >> 16) + 3146 | 0;
 $$0 = $14 + ((HEAP32[$0 + 4576 >> 2] | 0) == 2 ? $14 >> 1 : 0) | 0;
 $20 = $0 + 4636 | 0;
 _silk_NLSF_VQ_weights_laroia($5, $2, HEAP32[$20 >> 2] | 0);
 L1 : do if ((HEAP32[$0 + 4628 >> 2] | 0) == 1) {
  $25 = $0 + 4763 | 0;
  $26 = HEAP8[$25 >> 0] | 0;
  if ($26 << 24 >> 24 < 4) {
   _silk_interpolate($4, $3, $2, $26 << 24 >> 24, HEAP32[$20 >> 2] | 0);
   _silk_NLSF_VQ_weights_laroia($6, $4, HEAP32[$20 >> 2] | 0);
   $32 = HEAP8[$25 >> 0] | 0;
   $34 = (Math_imul($32, $32) | 0) << 27;
   $35 = HEAP32[$20 >> 2] | 0;
   $36 = $34 >> 16;
   $$01 = 0;
   while (1) {
    if (($$01 | 0) >= ($35 | 0)) {
     $66 = 1;
     break L1;
    }
    $38 = $5 + ($$01 << 1) | 0;
    HEAP16[$38 >> 1] = ((HEAP16[$38 >> 1] | 0) >>> 1) + ((Math_imul(HEAP16[$6 + ($$01 << 1) >> 1] | 0, $36) | 0) >>> 16);
    $$01 = $$01 + 1 | 0;
   }
  } else $66 = 0;
 } else $66 = 0; while (0);
 _silk_NLSF_encode($0 + 4740 | 0, $2, HEAP32[$0 + 4688 >> 2] | 0, $5, $$0, HEAP32[$0 + 4656 >> 2] | 0, HEAP8[$0 + 4761 >> 0] | 0);
 $58 = $1 + 32 | 0;
 _silk_NLSF2A($58, $2, HEAP32[$20 >> 2] | 0);
 $60 = HEAP32[$20 >> 2] | 0;
 if ($66) {
  _silk_interpolate($4, $3, $2, HEAP8[$0 + 4763 >> 0] | 0, $60);
  _silk_NLSF2A($1, $4, HEAP32[$20 >> 2] | 0);
  STACKTOP = sp;
  return;
 } else {
  _memcpy($1 | 0, $58 | 0, $60 << 1 | 0) | 0;
  STACKTOP = sp;
  return;
 }
}

function _silk_find_LPC_FLP($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = +$3;
 var $$0 = 0.0, $$01 = 0.0, $$02 = 0, $$1 = 0.0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $16 = 0.0, $25 = 0, $29 = 0.0, $31 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0.0, $4 = 0, $43 = 0.0, $5 = 0, $6 = 0, $7 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 1696 | 0;
 $4 = sp + 1600 | 0;
 $5 = sp + 1664 | 0;
 $6 = sp + 1536 | 0;
 $7 = sp;
 $10 = $0 + 4636 | 0;
 $11 = HEAP32[$10 >> 2] | 0;
 $12 = (HEAP32[$0 + 4584 >> 2] | 0) + $11 | 0;
 $13 = $0 + 4763 | 0;
 HEAP8[$13 >> 0] = 4;
 $14 = $0 + 4576 | 0;
 $16 = +_silk_burg_modified_FLP($4, $2, $3, $12, HEAP32[$14 >> 2] | 0, $11);
 L1 : do if (HEAP32[$0 + 4628 >> 2] | 0) if (!(HEAP32[$0 + 4660 >> 2] | 0)) if ((HEAP32[$14 >> 2] | 0) == 4) {
  $25 = $12 << 1;
  $29 = $16 - +_silk_burg_modified_FLP($6, $2 + ($25 << 2) | 0, $3, $12, 2, HEAP32[$10 >> 2] | 0);
  _silk_A2NLSF_FLP($1, $6, HEAP32[$10 >> 2] | 0);
  $31 = $0 + 4496 | 0;
  $$0 = 3402823466385288598117041.0e14;
  $$01 = $29;
  $$02 = 3;
  while (1) {
   if (($$02 | 0) <= -1) break L1;
   _silk_interpolate($5, $31, $1, $$02, HEAP32[$10 >> 2] | 0);
   _silk_NLSF2A_FLP($6, $5, HEAP32[$10 >> 2] | 0);
   _silk_LPC_analysis_filter_FLP($7, $6, $2, $25, HEAP32[$10 >> 2] | 0);
   $36 = HEAP32[$10 >> 2] | 0;
   $37 = $7 + ($36 << 2) | 0;
   $38 = $12 - $36 | 0;
   $39 = +_silk_energy_FLP($37, $38);
   $43 = $39 + +_silk_energy_FLP($37 + ($12 << 2) | 0, $38);
   if ($43 < $$01) {
    HEAP8[$13 >> 0] = $$02;
    $$1 = $43;
   } else if ($43 > $$0) break L1; else $$1 = $$01;
   $$0 = $43;
   $$01 = $$1;
   $$02 = $$02 + -1 | 0;
  }
 } while (0);
 if ((HEAP8[$13 >> 0] | 0) != 4) {
  STACKTOP = sp;
  return;
 }
 _silk_A2NLSF_FLP($1, $4, HEAP32[$10 >> 2] | 0);
 STACKTOP = sp;
 return;
}

function _tf_encode($0, $1, $2, $3, $4, $5, $6) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $$04 = 0, $$06 = 0, $$07 = 0, $$1 = 0, $$13 = 0, $$15 = 0, $$18 = 0, $$idx10 = 0, $$idx11 = 0, $10 = 0, $11 = 0, $12 = 0, $18 = 0, $19 = 0, $20 = 0, $24 = 0, $27 = 0, $28 = 0, $31 = 0, $40 = 0, $42 = 0, $9 = 0;
 $9 = HEAP32[$6 + 4 >> 2] << 3;
 $$idx10 = $6 + 20 | 0;
 $$idx11 = $6 + 28 | 0;
 $10 = _ec_tell(HEAP32[$$idx10 >> 2] | 0, HEAP32[$$idx11 >> 2] | 0) | 0;
 $11 = ($2 | 0) != 0;
 $12 = $11 ? 2 : 4;
 if (($4 | 0) > 0) $18 = ($10 + $12 + 1 | 0) >>> 0 <= $9 >>> 0; else $18 = 0;
 $19 = $9 - ($18 & 1) | 0;
 $20 = $11 ? 4 : 5;
 $$0 = $10;
 $$01 = $12;
 $$02 = 0;
 $$04 = $0;
 $$07 = 0;
 while (1) {
  if (($$04 | 0) >= ($1 | 0)) break;
  $24 = $3 + ($$04 << 2) | 0;
  if (($$0 + $$01 | 0) >>> 0 > $19 >>> 0) {
   HEAP32[$24 >> 2] = $$07;
   $$1 = $$0;
   $$13 = $$02;
   $$18 = $$07;
  } else {
   _ec_enc_bit_logp($6, HEAP32[$24 >> 2] ^ $$07, $$01);
   $27 = _ec_tell(HEAP32[$$idx10 >> 2] | 0, HEAP32[$$idx11 >> 2] | 0) | 0;
   $28 = HEAP32[$24 >> 2] | 0;
   $$1 = $27;
   $$13 = $$02 | $28;
   $$18 = $28;
  }
  $$0 = $$1;
  $$01 = $20;
  $$02 = $$13;
  $$04 = $$04 + 1 | 0;
  $$07 = $$18;
 }
 $31 = $2 << 2;
 if ($18) if ((HEAP8[$31 + $$02 + (28590 + ($4 << 3)) >> 0] | 0) == (HEAP8[($31 | 2) + $$02 + (28590 + ($4 << 3)) >> 0] | 0)) $$06 = 0; else {
  _ec_enc_bit_logp($6, $5, 1);
  $$06 = $5 << 1;
 } else $$06 = 0;
 $40 = $31 + $$06 | 0;
 $$15 = $0;
 while (1) {
  if (($$15 | 0) >= ($1 | 0)) break;
  $42 = $3 + ($$15 << 2) | 0;
  HEAP32[$42 >> 2] = HEAP8[$40 + (HEAP32[$42 >> 2] | 0) + (28590 + ($4 << 3)) >> 0];
  $$15 = $$15 + 1 | 0;
 }
 return;
}

function _dc_reject($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$0 = 0.0, $$01 = 0.0, $$02 = 0.0, $$03 = 0.0, $$04 = 0.0, $$05 = 0.0, $$06 = 0, $$1 = 0, $10 = 0.0, $11 = 0, $12 = 0.0, $13 = 0, $15 = 0, $18 = 0, $20 = 0.0, $21 = 0, $23 = 0.0, $24 = 0.0, $25 = 0.0, $49 = 0.0, $50 = 0.0, $7 = 0.0, $8 = 0.0;
 $7 = 12.0 / +($5 | 0);
 $8 = 1.0 - $7;
 $10 = +HEAPF32[$2 >> 2];
 $11 = $2 + 4 | 0;
 $12 = +HEAPF32[$11 >> 2];
 if (($4 | 0) != 2) {
  $$0 = $12;
  $$01 = $10;
  $$1 = 0;
  while (1) {
   if (($$1 | 0) >= ($3 | 0)) break;
   $49 = +HEAPF32[$0 + ($$1 << 2) >> 2];
   $50 = $49 - $$01;
   HEAPF32[$1 + ($$1 << 2) >> 2] = $50 - $$0;
   $$0 = $7 * $50 + 1.0000000031710769e-30 + $8 * $$0;
   $$01 = $7 * $49 + 1.0000000031710769e-30 + $8 * $$01;
   $$1 = $$1 + 1 | 0;
  }
  HEAPF32[$2 >> 2] = $$01;
  HEAPF32[$11 >> 2] = $$0;
  return;
 }
 $13 = $2 + 8 | 0;
 $15 = $2 + 12 | 0;
 $$02 = +HEAPF32[$15 >> 2];
 $$03 = +HEAPF32[$13 >> 2];
 $$04 = $12;
 $$05 = $10;
 $$06 = 0;
 while (1) {
  if (($$06 | 0) >= ($3 | 0)) break;
  $18 = $$06 << 1;
  $20 = +HEAPF32[$0 + ($18 << 2) >> 2];
  $21 = $18 | 1;
  $23 = +HEAPF32[$0 + ($21 << 2) >> 2];
  $24 = $20 - $$05;
  $25 = $23 - $$03;
  HEAPF32[$1 + ($18 << 2) >> 2] = $24 - $$04;
  HEAPF32[$1 + ($21 << 2) >> 2] = $25 - $$02;
  $$02 = $7 * $25 + 1.0000000031710769e-30 + $8 * $$02;
  $$03 = $7 * $23 + 1.0000000031710769e-30 + $8 * $$03;
  $$04 = $7 * $24 + 1.0000000031710769e-30 + $8 * $$04;
  $$05 = $7 * $20 + 1.0000000031710769e-30 + $8 * $$05;
  $$06 = $$06 + 1 | 0;
 }
 HEAPF32[$2 >> 2] = $$05;
 HEAPF32[$11 >> 2] = $$04;
 HEAPF32[$13 >> 2] = $$03;
 HEAPF32[$15 >> 2] = $$02;
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

function _silk_P_Ana_calc_energy_st3($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $$03 = 0, $$05 = 0, $$06 = 0, $$07 = 0, $$08 = 0.0, $$09 = 0, $$1 = 0, $15 = 0, $18 = 0, $21 = 0, $23 = 0.0, $29 = 0, $34 = 0.0, $40 = 0.0, $42 = 0.0, $46 = 0, $52 = 0, $6 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 $6 = sp;
 if (($4 | 0) == 4) {
  $$0 = 33501;
  $$01 = 33637 + ($5 << 3) | 0;
  $$02 = 34;
  $$03 = HEAP8[33661 + $5 >> 0] | 0;
 } else {
  $$0 = 33429;
  $$01 = 33453;
  $$02 = 12;
  $$03 = 12;
 }
 $$06 = $1 + ($3 << 2 << 2) | 0;
 $$09 = 0;
 while (1) {
  if (($$09 | 0) >= ($4 | 0)) break;
  $15 = $$09 << 1;
  $18 = HEAP8[$$01 + $15 >> 0] | 0;
  $21 = $$06 + (0 - ($18 + $2) << 2) | 0;
  $23 = +_silk_energy_FLP($21, $3) + .001;
  HEAPF32[$6 >> 2] = $23;
  $29 = (HEAP8[$$01 + ($15 | 1) >> 0] | 0) - $18 | 0;
  $$07 = 1;
  $$08 = $23;
  while (1) {
   if (($$07 | 0) > ($29 | 0)) break;
   $34 = +HEAPF32[$21 + ($3 - $$07 << 2) >> 2];
   $40 = +HEAPF32[$21 + (0 - $$07 << 2) >> 2];
   $42 = $$08 - $34 * $34 + $40 * $40;
   HEAPF32[$6 + ($$07 << 2) >> 2] = $42;
   $$07 = $$07 + 1 | 0;
   $$08 = $42;
  }
  $46 = Math_imul($$09, $$02) | 0;
  $$1 = 0;
  while (1) {
   if (($$1 | 0) >= ($$03 | 0)) break;
   $52 = (HEAP8[$$0 + ($46 + $$1) >> 0] | 0) - $18 | 0;
   $$05 = 0;
   while (1) {
    if (($$05 | 0) == 5) break;
    HEAP32[$0 + ($$09 * 680 | 0) + ($$1 * 20 | 0) + ($$05 << 2) >> 2] = HEAP32[$6 + ($52 + $$05 << 2) >> 2];
    $$05 = $$05 + 1 | 0;
   }
   $$1 = $$1 + 1 | 0;
  }
  $$06 = $$06 + ($3 << 2) | 0;
  $$09 = $$09 + 1 | 0;
 }
 STACKTOP = sp;
 return;
}

function _silk_biquad_alt_stride1($0, $1, $$val, $$1$val, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $$val = $$val | 0;
 $$1$val = $$1$val | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $$0 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $20 = 0, $22 = 0, $29 = 0, $31 = 0, $33 = 0, $45 = 0, $46 = 0, $5 = 0, $6 = 0, $65 = 0, $66 = 0, $75 = 0, $8 = 0, $9 = 0;
 $5 = 0 - $$val | 0;
 $6 = $5 & 16383;
 $8 = 0 - $$1$val | 0;
 $9 = $8 & 16383;
 $11 = $2 + 4 | 0;
 $12 = $5 >>> 14 << 16 >> 16;
 $13 = $1 + 4 | 0;
 $14 = $8 >>> 14 << 16 >> 16;
 $15 = $1 + 8 | 0;
 $$0 = 0;
 while (1) {
  if (($$0 | 0) >= ($4 | 0)) break;
  $20 = HEAP32[$1 >> 2] | 0;
  $22 = HEAP16[$0 + ($$0 << 1) >> 1] | 0;
  $29 = (HEAP32[$2 >> 2] | 0) + ((Math_imul($20 >> 16, $22) | 0) + ((Math_imul($20 & 65535, $22) | 0) >> 16)) << 2;
  $31 = $29 >> 16;
  $33 = $29 & 65532;
  $45 = (HEAP32[$11 >> 2] | 0) + (((Math_imul($31, $6) | 0) + ((Math_imul($33, $6) | 0) >>> 16) >> 13) + 1 >> 1) + ((Math_imul($31, $12) | 0) + ((Math_imul($33, $12) | 0) >> 16)) | 0;
  HEAP32[$2 >> 2] = $45;
  $46 = HEAP32[$13 >> 2] | 0;
  HEAP32[$2 >> 2] = $45 + ((Math_imul($46 >> 16, $22) | 0) + ((Math_imul($46 & 65535, $22) | 0) >> 16));
  $65 = (((Math_imul($31, $9) | 0) + ((Math_imul($33, $9) | 0) >>> 16) >> 13) + 1 >> 1) + ((Math_imul($31, $14) | 0) + ((Math_imul($33, $14) | 0) >> 16)) | 0;
  HEAP32[$11 >> 2] = $65;
  $66 = HEAP32[$15 >> 2] | 0;
  HEAP32[$11 >> 2] = $65 + ((Math_imul($66 >> 16, $22) | 0) + ((Math_imul($66 & 65535, $22) | 0) >> 16));
  $75 = $29 + 16383 >> 14;
  HEAP16[$3 + ($$0 << 1) >> 1] = ($75 | 0) > 32767 ? 32767 : (($75 | 0) > -32768 ? $75 : -32768) & 65535;
  $$0 = $$0 + 1 | 0;
 }
 return;
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
 $8 = ($2 | 0) == 16 ? 33397 : 33413;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) >= ($2 | 0)) break;
  $12 = HEAP16[$1 + ($$01 << 1) >> 1] | 0;
  $13 = $12 >> 8;
  $18 = HEAP16[27946 + ($13 << 1) >> 1] | 0;
  $29 = (($18 << 8) + (Math_imul((HEAP16[27946 + ($13 + 1 << 1) >> 1] | 0) - $18 | 0, $12 - ($13 << 8) | 0) | 0) >> 3) + 1 >> 1;
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

function _silk_stereo_quant_pred($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$0 = 0, $$01 = 0, $$03 = 0, $$04 = 0, $$05 = 0, $$1 = 0, $$12 = 0, $$2 = 0, $$3 = 0, $11 = 0, $2 = 0, $21 = 0, $27 = 0, $28 = 0, $3 = 0, $32 = 0, $36 = 0, $37 = 0, $4 = 0, $8 = 0, $9 = 0, $sext = 0;
 $$0 = 0;
 $$05 = 0;
 while (1) {
  if (($$05 | 0) == 2) break;
  $2 = $0 + ($$05 << 2) | 0;
  $3 = $1 + ($$05 * 3 | 0) | 0;
  $4 = $1 + ($$05 * 3 | 0) + 1 | 0;
  $$01 = 2147483647;
  $$03 = 0;
  $$1 = $$0;
  L4 : while (1) {
   if (($$03 | 0) >= 15) {
    $$3 = $$1;
    break;
   }
   $8 = HEAP16[27900 + ($$03 << 1) >> 1] | 0;
   $9 = $$03 + 1 | 0;
   $11 = HEAP16[27900 + ($9 << 1) >> 1] | 0;
   $sext = (Math_imul(($11 << 16 >> 16) - $8 >> 16, 429522944) | 0) + ((($11 & 65535) - $8 & 65535) * 6554 | 0) >> 16;
   $21 = $$03 & 255;
   $$04 = 0;
   $$12 = $$01;
   $$2 = $$1;
   while (1) {
    if (($$04 | 0) >= 5) {
     $$01 = $$12;
     $$03 = $9;
     $$1 = $$2;
     continue L4;
    }
    $27 = $8 + (Math_imul($sext, $$04 << 17 >> 16 | 1) | 0) | 0;
    $28 = HEAP32[$2 >> 2] | 0;
    $32 = ($28 | 0) > ($27 | 0) ? $28 - $27 | 0 : $27 - $28 | 0;
    if (($32 | 0) >= ($$12 | 0)) {
     $$3 = $$2;
     break L4;
    }
    HEAP8[$3 >> 0] = $21;
    HEAP8[$4 >> 0] = $$04;
    $$04 = $$04 + 1 | 0;
    $$12 = $32;
    $$2 = $27;
   }
  }
  $36 = HEAP8[$3 >> 0] | 0;
  $37 = ($36 << 24 >> 24) / 3 | 0;
  HEAP8[$1 + ($$05 * 3 | 0) + 2 >> 0] = $37;
  HEAP8[$3 >> 0] = ($36 & 255) + (Math_imul($37 << 24 >> 24, -3) | 0);
  HEAP32[$2 >> 2] = $$3;
  $$0 = $$3;
  $$05 = $$05 + 1 | 0;
 }
 HEAP32[$0 >> 2] = (HEAP32[$0 >> 2] | 0) - (HEAP32[$0 + 4 >> 2] | 0);
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

function _silk_warped_autocorrelation_FLP($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = +$2;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $$0 = 0.0, $$01 = 0, $$02 = 0, $$1 = 0, $16 = 0, $17 = 0, $18 = 0.0, $21 = 0.0, $22 = 0.0, $25 = 0, $28 = 0, $30 = 0.0, $33 = 0, $39 = 0.0, $5 = 0, $50 = 0.0, $6 = 0, $7 = 0.0, $8 = 0, $9 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 400 | 0;
 $5 = sp + 200 | 0;
 $6 = sp;
 _memset($5 | 0, 0, 200) | 0;
 _memset($6 | 0, 0, 200) | 0;
 $7 = $2;
 $8 = $5 + ($4 << 3) | 0;
 $9 = $6 + ($4 << 3) | 0;
 $$02 = 0;
 $50 = 0.0;
 while (1) {
  if (($$02 | 0) >= ($3 | 0)) {
   $$1 = 0;
   break;
  }
  $$0 = +HEAPF32[$1 + ($$02 << 2) >> 2];
  $$01 = 0;
  $22 = $50;
  while (1) {
   if (($$01 | 0) >= ($4 | 0)) break;
   $16 = $$01 | 1;
   $17 = $5 + ($16 << 3) | 0;
   $18 = +HEAPF64[$17 >> 3];
   $21 = $22 + $7 * ($18 - $$0);
   HEAPF64[$5 + ($$01 << 3) >> 3] = $$0;
   $25 = $6 + ($$01 << 3) | 0;
   HEAPF64[$25 >> 3] = +HEAPF64[$25 >> 3] + +HEAPF64[$5 >> 3] * $$0;
   $28 = $$01 + 2 | 0;
   $30 = +HEAPF64[$5 + ($28 << 3) >> 3];
   HEAPF64[$17 >> 3] = $21;
   $33 = $6 + ($16 << 3) | 0;
   HEAPF64[$33 >> 3] = +HEAPF64[$33 >> 3] + +HEAPF64[$5 >> 3] * $21;
   $$0 = $18 + $7 * ($30 - $21);
   $$01 = $28;
   $22 = $30;
  }
  HEAPF64[$8 >> 3] = $$0;
  $39 = +HEAPF64[$5 >> 3];
  HEAPF64[$9 >> 3] = +HEAPF64[$9 >> 3] + $39 * $$0;
  $$02 = $$02 + 1 | 0;
  $50 = $39;
 }
 while (1) {
  if (($$1 | 0) > ($4 | 0)) break;
  HEAPF32[$0 + ($$1 << 2) >> 2] = +HEAPF64[$6 + ($$1 << 3) >> 3];
  $$1 = $$1 + 1 | 0;
 }
 STACKTOP = sp;
 return;
}

function _silk_P_Ana_calc_corr_st3($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $$03 = 0, $$04 = 0, $$05 = 0, $$06 = 0, $$07 = 0, $$08 = 0, $$1 = 0, $15 = 0, $17 = 0, $20 = 0, $24 = 0, $37 = 0, $43 = 0, $6 = 0, $7 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 176 | 0;
 $6 = sp + 88 | 0;
 $7 = sp;
 if (($4 | 0) == 4) {
  $$0 = 33501;
  $$01 = 33637 + ($5 << 3) | 0;
  $$02 = 34;
  $$03 = HEAP8[33661 + $5 >> 0] | 0;
 } else {
  $$0 = 33429;
  $$01 = 33453;
  $$02 = 12;
  $$03 = 12;
 }
 $15 = 0 - $2 | 0;
 $$05 = 0;
 $$07 = $1 + ($3 << 2 << 2) | 0;
 while (1) {
  if (($$05 | 0) >= ($4 | 0)) break;
  $17 = $$05 << 1;
  $20 = HEAP8[$$01 + $17 >> 0] | 0;
  $24 = HEAP8[$$01 + ($17 | 1) >> 0] | 0;
  _celt_pitch_xcorr_c($$07, $$07 + ($15 << 2) + (0 - $24 << 2) | 0, $7, $3, $24 - $20 + 1 | 0);
  $$04 = 0;
  $$06 = $20;
  while (1) {
   if (($24 | 0) < ($$06 | 0)) break;
   HEAP32[$6 + ($$04 << 2) >> 2] = HEAP32[$7 + ($24 - $$06 << 2) >> 2];
   $$04 = $$04 + 1 | 0;
   $$06 = $$06 + 1 | 0;
  }
  $37 = Math_imul($$05, $$02) | 0;
  $$08 = 0;
  while (1) {
   if (($$08 | 0) >= ($$03 | 0)) break;
   $43 = (HEAP8[$$0 + ($37 + $$08) >> 0] | 0) - $20 | 0;
   $$1 = 0;
   while (1) {
    if (($$1 | 0) == 5) break;
    HEAP32[$0 + ($$05 * 680 | 0) + ($$08 * 20 | 0) + ($$1 << 2) >> 2] = HEAP32[$6 + ($43 + $$1 << 2) >> 2];
    $$1 = $$1 + 1 | 0;
   }
   $$08 = $$08 + 1 | 0;
  }
  $$05 = $$05 + 1 | 0;
  $$07 = $$07 + ($3 << 2) | 0;
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

function _silk_insertion_sort_increasing($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $$0$in = 0, $$01 = 0, $$1 = 0, $$12 = 0, $$2 = 0, $10 = 0, $12 = 0, $15 = 0, $26 = 0, $31 = 0, $33 = 0, $39 = 0, $9 = 0;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) >= ($3 | 0)) {
   $$12 = 1;
   break;
  }
  HEAP32[$1 + ($$01 << 2) >> 2] = $$01;
  $$01 = $$01 + 1 | 0;
 }
 while (1) {
  if (($$12 | 0) >= ($3 | 0)) break;
  $12 = HEAP32[$0 + ($$12 << 2) >> 2] | 0;
  $$0$in = $$12;
  while (1) {
   $$0 = $$0$in + -1 | 0;
   if (($$0$in | 0) <= 0) break;
   $15 = HEAP32[$0 + ($$0 << 2) >> 2] | 0;
   if (($12 | 0) >= ($15 | 0)) break;
   HEAP32[$0 + ($$0$in << 2) >> 2] = $15;
   HEAP32[$1 + ($$0$in << 2) >> 2] = HEAP32[$1 + ($$0 << 2) >> 2];
   $$0$in = $$0;
  }
  HEAP32[$0 + ($$0$in << 2) >> 2] = $12;
  HEAP32[$1 + ($$0$in << 2) >> 2] = $$12;
  $$12 = $$12 + 1 | 0;
 }
 $9 = $0 + ($3 + -1 << 2) | 0;
 $10 = $3 + -2 | 0;
 $$2 = $3;
 while (1) {
  if (($$2 | 0) >= ($2 | 0)) break;
  $26 = HEAP32[$0 + ($$2 << 2) >> 2] | 0;
  if (($26 | 0) < (HEAP32[$9 >> 2] | 0)) {
   $$1 = $10;
   while (1) {
    if (($$1 | 0) <= -1) break;
    $31 = HEAP32[$0 + ($$1 << 2) >> 2] | 0;
    if (($26 | 0) >= ($31 | 0)) break;
    $33 = $$1 + 1 | 0;
    HEAP32[$0 + ($33 << 2) >> 2] = $31;
    HEAP32[$1 + ($33 << 2) >> 2] = HEAP32[$1 + ($$1 << 2) >> 2];
    $$1 = $$1 + -1 | 0;
   }
   $39 = $$1 + 1 | 0;
   HEAP32[$0 + ($39 << 2) >> 2] = $26;
   HEAP32[$1 + ($39 << 2) >> 2] = $$2;
  }
  $$2 = $$2 + 1 | 0;
 }
 return;
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

function _silk_insertion_sort_decreasing_FLP($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $$0$in = 0, $$01 = 0, $$1 = 0, $$12 = 0, $$2 = 0, $10 = 0, $12 = 0.0, $15 = 0.0, $26 = 0.0, $31 = 0.0, $33 = 0, $39 = 0, $9 = 0;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) >= ($3 | 0)) {
   $$12 = 1;
   break;
  }
  HEAP32[$1 + ($$01 << 2) >> 2] = $$01;
  $$01 = $$01 + 1 | 0;
 }
 while (1) {
  if (($$12 | 0) >= ($3 | 0)) break;
  $12 = +HEAPF32[$0 + ($$12 << 2) >> 2];
  $$0$in = $$12;
  while (1) {
   $$0 = $$0$in + -1 | 0;
   if (($$0$in | 0) <= 0) break;
   $15 = +HEAPF32[$0 + ($$0 << 2) >> 2];
   if (!($12 > $15)) break;
   HEAPF32[$0 + ($$0$in << 2) >> 2] = $15;
   HEAP32[$1 + ($$0$in << 2) >> 2] = HEAP32[$1 + ($$0 << 2) >> 2];
   $$0$in = $$0;
  }
  HEAPF32[$0 + ($$0$in << 2) >> 2] = $12;
  HEAP32[$1 + ($$0$in << 2) >> 2] = $$12;
  $$12 = $$12 + 1 | 0;
 }
 $9 = $0 + ($3 + -1 << 2) | 0;
 $10 = $3 + -2 | 0;
 $$2 = $3;
 while (1) {
  if (($$2 | 0) >= ($2 | 0)) break;
  $26 = +HEAPF32[$0 + ($$2 << 2) >> 2];
  if ($26 > +HEAPF32[$9 >> 2]) {
   $$1 = $10;
   while (1) {
    if (($$1 | 0) <= -1) break;
    $31 = +HEAPF32[$0 + ($$1 << 2) >> 2];
    if (!($26 > $31)) break;
    $33 = $$1 + 1 | 0;
    HEAPF32[$0 + ($33 << 2) >> 2] = $31;
    HEAP32[$1 + ($33 << 2) >> 2] = HEAP32[$1 + ($$1 << 2) >> 2];
    $$1 = $$1 + -1 | 0;
   }
   $39 = $$1 + 1 | 0;
   HEAPF32[$0 + ($39 << 2) >> 2] = $26;
   HEAP32[$1 + ($39 << 2) >> 2] = $$2;
  }
  $$2 = $$2 + 1 | 0;
 }
 return;
}

function _silk_shell_encoder($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $16 = 0, $2 = 0, $26 = 0, $3 = 0, $30 = 0, $38 = 0, $4 = 0, $5 = 0, $6 = 0, $8 = 0, $9 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 $2 = sp + 32 | 0;
 $3 = sp + 16 | 0;
 $4 = sp + 8 | 0;
 $5 = sp;
 _combine_pulses($2, $1, 8);
 _combine_pulses($3, $2, 4);
 _combine_pulses($4, $3, 2);
 _combine_pulses($5, $4, 1);
 $6 = HEAP32[$4 >> 2] | 0;
 _encode_split($0, $6, HEAP32[$5 >> 2] | 0, 33186);
 $8 = HEAP32[$3 >> 2] | 0;
 _encode_split($0, $8, $6, 33034);
 $9 = HEAP32[$2 >> 2] | 0;
 _encode_split($0, $9, $8, 32882);
 _encode_split($0, HEAP32[$1 >> 2] | 0, $9, 32730);
 _encode_split($0, HEAP32[$1 + 8 >> 2] | 0, HEAP32[$2 + 4 >> 2] | 0, 32730);
 $16 = HEAP32[$2 + 8 >> 2] | 0;
 _encode_split($0, $16, HEAP32[$3 + 4 >> 2] | 0, 32882);
 _encode_split($0, HEAP32[$1 + 16 >> 2] | 0, $16, 32730);
 _encode_split($0, HEAP32[$1 + 24 >> 2] | 0, HEAP32[$2 + 12 >> 2] | 0, 32730);
 $26 = HEAP32[$3 + 8 >> 2] | 0;
 _encode_split($0, $26, HEAP32[$4 + 4 >> 2] | 0, 33034);
 $30 = HEAP32[$2 + 16 >> 2] | 0;
 _encode_split($0, $30, $26, 32882);
 _encode_split($0, HEAP32[$1 + 32 >> 2] | 0, $30, 32730);
 _encode_split($0, HEAP32[$1 + 40 >> 2] | 0, HEAP32[$2 + 20 >> 2] | 0, 32730);
 $38 = HEAP32[$2 + 24 >> 2] | 0;
 _encode_split($0, $38, HEAP32[$3 + 12 >> 2] | 0, 32882);
 _encode_split($0, HEAP32[$1 + 48 >> 2] | 0, $38, 32730);
 _encode_split($0, HEAP32[$1 + 56 >> 2] | 0, HEAP32[$2 + 28 >> 2] | 0, 32730);
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

function _silk_LPC_analysis_filter16_FLP($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $21 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 $4 = $1 + 4 | 0;
 $5 = $1 + 8 | 0;
 $6 = $1 + 12 | 0;
 $7 = $1 + 16 | 0;
 $8 = $1 + 20 | 0;
 $9 = $1 + 24 | 0;
 $10 = $1 + 28 | 0;
 $11 = $1 + 32 | 0;
 $12 = $1 + 36 | 0;
 $13 = $1 + 40 | 0;
 $14 = $1 + 44 | 0;
 $15 = $1 + 48 | 0;
 $16 = $1 + 52 | 0;
 $17 = $1 + 56 | 0;
 $18 = $1 + 60 | 0;
 $$0 = 16;
 while (1) {
  if (($$0 | 0) >= ($3 | 0)) break;
  $21 = $2 + ($$0 + -1 << 2) | 0;
  HEAPF32[$0 + ($$0 << 2) >> 2] = +HEAPF32[$21 + 4 >> 2] - (+HEAPF32[$21 >> 2] * +HEAPF32[$1 >> 2] + +HEAPF32[$21 + -4 >> 2] * +HEAPF32[$4 >> 2] + +HEAPF32[$21 + -8 >> 2] * +HEAPF32[$5 >> 2] + +HEAPF32[$21 + -12 >> 2] * +HEAPF32[$6 >> 2] + +HEAPF32[$21 + -16 >> 2] * +HEAPF32[$7 >> 2] + +HEAPF32[$21 + -20 >> 2] * +HEAPF32[$8 >> 2] + +HEAPF32[$21 + -24 >> 2] * +HEAPF32[$9 >> 2] + +HEAPF32[$21 + -28 >> 2] * +HEAPF32[$10 >> 2] + +HEAPF32[$21 + -32 >> 2] * +HEAPF32[$11 >> 2] + +HEAPF32[$21 + -36 >> 2] * +HEAPF32[$12 >> 2] + +HEAPF32[$21 + -40 >> 2] * +HEAPF32[$13 >> 2] + +HEAPF32[$21 + -44 >> 2] * +HEAPF32[$14 >> 2] + +HEAPF32[$21 + -48 >> 2] * +HEAPF32[$15 >> 2] + +HEAPF32[$21 + -52 >> 2] * +HEAPF32[$16 >> 2] + +HEAPF32[$21 + -56 >> 2] * +HEAPF32[$17 >> 2] + +HEAPF32[$21 + -60 >> 2] * +HEAPF32[$18 >> 2]);
  $$0 = $$0 + 1 | 0;
 }
 return;
}

function _silk_control_encoder($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $$ = 0, $$0 = 0, $12 = 0, $33 = 0, $43 = 0, $46 = 0, $48 = 0, $52 = 0, $56 = 0, $61 = 0;
 HEAP32[$0 + 6072 >> 2] = HEAP32[$1 + 48 >> 2];
 HEAP32[$0 + 4672 >> 2] = HEAP32[$1 + 52 >> 2];
 $12 = HEAP32[$1 + 8 >> 2] | 0;
 HEAP32[$0 + 4552 >> 2] = $12;
 HEAP32[$0 + 4560 >> 2] = HEAP32[$1 + 12 >> 2];
 HEAP32[$0 + 4564 >> 2] = HEAP32[$1 + 16 >> 2];
 HEAP32[$0 + 4568 >> 2] = HEAP32[$1 + 20 >> 2];
 HEAP32[$0 + 6084 >> 2] = HEAP32[$1 + 40 >> 2];
 HEAP32[$0 + 5748 >> 2] = HEAP32[$1 >> 2];
 HEAP32[$0 + 5752 >> 2] = HEAP32[$1 + 4 >> 2];
 HEAP32[$0 + 4532 >> 2] = $2;
 HEAP32[$0 + 5756 >> 2] = $3;
 $33 = $0 + 4664 | 0;
 if (HEAP32[$33 >> 2] | 0) if (!(HEAP32[$0 + 4676 >> 2] | 0)) {
  if (($12 | 0) == (HEAP32[$0 + 4556 >> 2] | 0)) {
   $$0 = 0;
   return $$0 | 0;
  }
  $43 = HEAP32[$0 + 4572 >> 2] | 0;
  if (($43 | 0) <= 0) {
   $$0 = 0;
   return $$0 | 0;
  }
  $$0 = _silk_setup_resamplers($0, $43) | 0;
  return $$0 | 0;
 }
 $46 = _silk_control_audio_bandwidth($0, $1) | 0;
 $$ = ($4 | 0) == 0 ? $46 : $4;
 $48 = _silk_setup_resamplers($0, $$) | 0;
 $52 = $48 + (_silk_setup_fs($0, $$, HEAP32[$1 + 24 >> 2] | 0) | 0) | 0;
 $56 = $52 + (_silk_setup_complexity($0, HEAP32[$1 + 36 >> 2] | 0) | 0) | 0;
 HEAP32[$0 + 4612 >> 2] = HEAP32[$1 + 32 >> 2];
 $61 = $56 + (_silk_setup_LBRR($0, HEAP32[$1 + 44 >> 2] | 0) | 0) | 0;
 HEAP32[$33 >> 2] = 1;
 $$0 = $61;
 return $$0 | 0;
}

function _quant_energy_finalise($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
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
 var $$0 = 0, $$01 = 0, $$02 = 0, $$03 = 0, $$1 = 0, $$2 = 0, $$3 = 0, $10 = 0, $13 = 0, $33 = 0.0, $37 = 0, $43 = 0, $46 = 0, $not$ = 0;
 $10 = $0 + 8 | 0;
 $$01 = 0;
 $$03 = $7;
 while (1) {
  if (($$01 | 0) == 2) break; else {
   $$02 = $1;
   $$1 = $$03;
  }
  while (1) {
   if (!(($$02 | 0) < ($2 | 0) & ($$1 | 0) >= ($9 | 0))) break;
   $13 = $5 + ($$02 << 2) | 0;
   if ((HEAP32[$13 >> 2] | 0) > 7) $$3 = $$1; else if ((HEAP32[$6 + ($$02 << 2) >> 2] | 0) == ($$01 | 0)) {
    $$0 = 0;
    $$2 = $$1;
    while (1) {
     $not$ = !(+HEAPF32[$4 + ($$02 + (Math_imul($$0, HEAP32[$10 >> 2] | 0) | 0) << 2) >> 2] < 0.0);
     _ec_enc_bits($8, $not$ & 1, 1);
     $33 = (+($not$ & 1) + -.5) * +(1 << 14 - (HEAP32[$13 >> 2] | 0) + -1 | 0) * .00006103515625;
     $37 = $3 + ($$02 + (Math_imul($$0, HEAP32[$10 >> 2] | 0) | 0) << 2) | 0;
     HEAPF32[$37 >> 2] = +HEAPF32[$37 >> 2] + $33;
     $43 = $4 + ($$02 + (Math_imul($$0, HEAP32[$10 >> 2] | 0) | 0) << 2) | 0;
     HEAPF32[$43 >> 2] = +HEAPF32[$43 >> 2] - $33;
     $46 = $$2 + -1 | 0;
     $$0 = $$0 + 1 | 0;
     if (($$0 | 0) >= ($9 | 0)) {
      $$3 = $46;
      break;
     } else $$2 = $46;
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

function _silk_LTP_analysis_filter_FLP($0, $1, $2, $3, $4, $5, $6, $7) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 $7 = $7 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $$03 = 0, $$04 = 0, $$05 = 0, $$1 = 0, $13 = 0, $15 = 0.0, $16 = 0, $25 = 0, $26 = 0, $34 = 0.0, $35 = 0.0, $8 = 0, $9 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 $8 = sp;
 $9 = $5 + $7 | 0;
 $$02 = 0;
 $$03 = $0;
 $$05 = $1;
 while (1) {
  if (($$02 | 0) >= ($6 | 0)) break;
  $13 = 0 - (HEAP32[$3 + ($$02 << 2) >> 2] | 0) | 0;
  $15 = +HEAPF32[$4 + ($$02 << 2) >> 2];
  $16 = $$02 * 5 | 0;
  $$01 = 0;
  while (1) {
   if (($$01 | 0) == 5) break;
   HEAP32[$8 + ($$01 << 2) >> 2] = HEAP32[$2 + ($16 + $$01 << 2) >> 2];
   $$01 = $$01 + 1 | 0;
  }
  $$04 = $$05 + ($13 << 2) | 0;
  $$1 = 0;
  while (1) {
   if (($$1 | 0) >= ($9 | 0)) break;
   $25 = HEAP32[$$05 + ($$1 << 2) >> 2] | 0;
   $26 = $$03 + ($$1 << 2) | 0;
   HEAP32[$26 >> 2] = $25;
   $$0 = 0;
   $35 = (HEAP32[tempDoublePtr >> 2] = $25, +HEAPF32[tempDoublePtr >> 2]);
   while (1) {
    if (($$0 | 0) == 5) break;
    $34 = $35 - +HEAPF32[$8 + ($$0 << 2) >> 2] * +HEAPF32[$$04 + (2 - $$0 << 2) >> 2];
    HEAPF32[$26 >> 2] = $34;
    $$0 = $$0 + 1 | 0;
    $35 = $34;
   }
   HEAPF32[$26 >> 2] = $35 * $15;
   $$04 = $$04 + 4 | 0;
   $$1 = $$1 + 1 | 0;
  }
  $$02 = $$02 + 1 | 0;
  $$03 = $$03 + ($9 << 2) | 0;
  $$05 = $$05 + ($5 << 2) | 0;
 }
 STACKTOP = sp;
 return;
}

function __celt_lpc($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$0 = 0.0, $$01 = 0.0, $$02 = 0, $$1 = 0, $17 = 0.0, $18 = 0.0, $2 = 0.0, $20 = 0, $21 = 0, $23 = 0, $24 = 0.0, $26 = 0, $27 = 0.0, $indvars$iv = 0, label = 0, $indvars$iv$looptemp = 0;
 $2 = +HEAPF32[$1 >> 2];
 HEAP32[$0 >> 2] = 0;
 HEAP32[$0 + 4 >> 2] = 0;
 HEAP32[$0 + 8 >> 2] = 0;
 HEAP32[$0 + 12 >> 2] = 0;
 if (+HEAPF32[$1 >> 2] != 0.0) {
  $$01 = $2;
  $indvars$iv = 0;
 } else return;
 while (1) {
  if (($indvars$iv | 0) < 4) {
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
  $17 = ($$0 + +HEAPF32[$1 + ($indvars$iv << 2) >> 2]) / $$01;
  $18 = -$17;
  HEAPF32[$0 + ($indvars$iv$looptemp << 2) >> 2] = $18;
  $20 = $indvars$iv >> 1;
  $21 = $indvars$iv$looptemp + -1 | 0;
  $$1 = 0;
  while (1) {
   if (($$1 | 0) >= ($20 | 0)) break;
   $23 = $0 + ($$1 << 2) | 0;
   $24 = +HEAPF32[$23 >> 2];
   $26 = $0 + ($21 - $$1 << 2) | 0;
   $27 = +HEAPF32[$26 >> 2];
   HEAPF32[$23 >> 2] = $24 + $27 * $18;
   HEAPF32[$26 >> 2] = $27 + $24 * $18;
   $$1 = $$1 + 1 | 0;
  }
  $$01 = $$01 - $17 * $17 * $$01;
  if ($$01 < +HEAPF32[$1 >> 2] * 1.0000000474974513e-03) {
   label = 9;
   break;
  }
 }
 if ((label | 0) == 9) return;
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

function _silk_VAD_GetNoiseLevels($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$ = 0, $$0 = 0, $$02 = 0, $$1 = 0, $14 = 0, $16 = 0, $2 = 0, $21 = 0, $22 = 0, $24 = 0, $3 = 0, $30 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $45 = 0, $51 = 0, $52 = 0, $8 = 0, $9 = 0;
 $2 = $1 + 108 | 0;
 $3 = HEAP32[$2 >> 2] | 0;
 if (($3 | 0) < 1e3) $$0 = 32767 / (($3 >> 4) + 1 | 0) | 0; else $$0 = 0;
 $$02 = 0;
 while (1) {
  if (($$02 | 0) == 4) break;
  $8 = $1 + 60 + ($$02 << 2) | 0;
  $9 = HEAP32[$8 >> 2] | 0;
  $14 = (HEAP32[$0 + ($$02 << 2) >> 2] | 0) + (HEAP32[$1 + 92 + ($$02 << 2) >> 2] | 0) | 0;
  $$ = ($14 | 0) < 0 ? 2147483647 : $14;
  $16 = 2147483647 / ($$ >>> 0) | 0;
  if (($$ | 0) > ($9 << 3 | 0)) $$1 = 128; else if (($$ | 0) < ($9 | 0)) $$1 = 1024; else {
   $21 = $9 << 16 >> 16;
   $22 = Math_imul($16 >>> 16, $21) | 0;
   $24 = Math_imul($16 & 65535, $21) | 0;
   $30 = Math_imul($16, ($9 >> 15) + 1 >> 1) | 0;
   $$1 = $22 + ($24 >> 16) + $30 >> 16 << 11 | ($22 + ($24 >>> 16) + $30 | 0) >>> 5 & 2047;
  }
  $40 = _silk_max_int_222($$1, $$0) | 0;
  $41 = $1 + 76 + ($$02 << 2) | 0;
  $42 = HEAP32[$41 >> 2] | 0;
  $43 = $16 - $42 | 0;
  $45 = $40 << 16 >> 16;
  $51 = $42 + ((Math_imul($43 >> 16, $45) | 0) + ((Math_imul($43 & 65535, $45) | 0) >> 16)) | 0;
  HEAP32[$41 >> 2] = $51;
  $52 = 2147483647 / ($51 | 0) | 0;
  HEAP32[$8 >> 2] = ($52 | 0) < 16777215 ? $52 : 16777215;
  $$02 = $$02 + 1 | 0;
 }
 HEAP32[$2 >> 2] = (HEAP32[$2 >> 2] | 0) + 1;
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

function _opus_encoder_create($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $6 = 0, $9 = 0, label = 0;
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
 L13 : do if ((label | 0) == 2) if (($1 + -1 | 0) >>> 0 < 2) {
  switch ($2 | 0) {
  case 2051:
  case 2049:
  case 2048:
   break;
  default:
   break L13;
  }
  $6 = _opus_alloc_423(_opus_encoder_get_size($1) | 0) | 0;
  if (!$6) {
   if (!$3) {
    $$0 = 0;
    return $$0 | 0;
   }
   HEAP32[$3 >> 2] = -7;
   $$0 = 0;
   return $$0 | 0;
  }
  $9 = _opus_encoder_init($6, $0, $1, $2) | 0;
  if ($3 | 0) HEAP32[$3 >> 2] = $9;
  if (!$9) {
   $$0 = $6;
   return $$0 | 0;
  }
  _opus_free_424($6);
  $$0 = 0;
  return $$0 | 0;
 } while (0);
 if (!$3) {
  $$0 = 0;
  return $$0 | 0;
 }
 HEAP32[$3 >> 2] = -1;
 $$0 = 0;
 return $$0 | 0;
}

function _gain_fade($0, $1, $2, $3, $4, $5, $6, $7, $8) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = +$2;
 $3 = +$3;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 $7 = $7 | 0;
 $8 = $8 | 0;
 var $$0 = 0, $$01 = 0, $$1 = 0, $$2 = 0, $10 = 0, $15 = 0.0, $16 = 0.0, $29 = 0.0, $30 = 0.0, $34 = 0.0, $35 = 0, $40 = 0, $48 = 0, $9 = 0;
 $9 = 48e3 / ($8 | 0) | 0;
 $10 = ($4 | 0) / ($9 | 0) | 0;
 L1 : do if (($6 | 0) == 1) {
  $$01 = 0;
  while (1) {
   if (($$01 | 0) >= ($10 | 0)) {
    $$0 = 0;
    break L1;
   }
   $15 = +HEAPF32[$7 + ((Math_imul($$01, $9) | 0) << 2) >> 2];
   $16 = $15 * $15;
   HEAPF32[$1 + ($$01 << 2) >> 2] = ($16 * $3 + (1.0 - $16) * $2) * +HEAPF32[$0 + ($$01 << 2) >> 2];
   $$01 = $$01 + 1 | 0;
  }
 } else {
  $$1 = 0;
  while (1) {
   if (($$1 | 0) >= ($10 | 0)) {
    $$0 = 0;
    break L1;
   }
   $29 = +HEAPF32[$7 + ((Math_imul($$1, $9) | 0) << 2) >> 2];
   $30 = $29 * $29;
   $34 = $30 * $3 + (1.0 - $30) * $2;
   $35 = $$1 << 1;
   HEAPF32[$1 + ($35 << 2) >> 2] = $34 * +HEAPF32[$0 + ($35 << 2) >> 2];
   $40 = $35 | 1;
   HEAPF32[$1 + ($40 << 2) >> 2] = $34 * +HEAPF32[$0 + ($40 << 2) >> 2];
   $$1 = $$1 + 1 | 0;
  }
 } while (0);
 do {
  $$2 = $10;
  while (1) {
   if (($$2 | 0) >= ($5 | 0)) break;
   $48 = (Math_imul($$2, $6) | 0) + $$0 | 0;
   HEAPF32[$1 + ($48 << 2) >> 2] = +HEAPF32[$0 + ($48 << 2) >> 2] * $3;
   $$2 = $$2 + 1 | 0;
  }
  $$0 = $$0 + 1 | 0;
 } while (($$0 | 0) < ($6 | 0));
 return;
}

function _silk_corrMatrix_FLP($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $$01 = 0.0, $$02 = 0, $$03 = 0, $$1 = 0.0, $$14 = 0, $12 = 0.0, $16 = 0.0, $22 = 0.0, $23 = 0.0, $27 = 0, $29 = 0, $3 = 0, $35 = 0, $4 = 0.0, $43 = 0.0, $44 = 0.0, $45 = 0, $8 = 0.0;
 $3 = $0 + 16 | 0;
 $4 = +_silk_energy_FLP($3, $1);
 HEAPF32[$2 >> 2] = $4;
 $$01 = $4;
 $$03 = 1;
 while (1) {
  if (($$03 | 0) == 5) break;
  $8 = +HEAPF32[$3 + (0 - $$03 << 2) >> 2];
  $12 = +HEAPF32[$3 + ($1 - $$03 << 2) >> 2];
  $16 = $$01 + ($8 * $8 - $12 * $12);
  HEAPF32[$2 + ($$03 * 6 << 2) >> 2] = $16;
  $$01 = $16;
  $$03 = $$03 + 1 | 0;
 }
 $$0 = $0 + 12 | 0;
 $$02 = 1;
 while (1) {
  if (($$02 | 0) == 5) break;
  $22 = +_silk_inner_product_FLP($3, $$0, $1);
  $23 = $22;
  HEAPF32[$2 + ($$02 * 5 << 2) >> 2] = $23;
  HEAPF32[$2 + ($$02 << 2) >> 2] = $23;
  $27 = 5 - $$02 | 0;
  $$1 = $22;
  $$14 = 1;
  while (1) {
   if (($$14 | 0) >= ($27 | 0)) break;
   $29 = 0 - $$14 | 0;
   $35 = $1 - $$14 | 0;
   $43 = $$1 + (+HEAPF32[$3 + ($29 << 2) >> 2] * +HEAPF32[$$0 + ($29 << 2) >> 2] - +HEAPF32[$3 + ($35 << 2) >> 2] * +HEAPF32[$$0 + ($35 << 2) >> 2]);
   $44 = $43;
   $45 = $$02 + $$14 | 0;
   HEAPF32[$2 + (($45 * 5 | 0) + $$14 << 2) >> 2] = $44;
   HEAPF32[$2 + (($$14 * 5 | 0) + $45 << 2) >> 2] = $44;
   $$1 = $43;
   $$14 = $$14 + 1 | 0;
  }
  $$0 = $$0 + -4 | 0;
  $$02 = $$02 + 1 | 0;
 }
 return;
}

function _silk_DIV32_varQ_227($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $11 = 0, $12 = 0, $16 = 0, $21 = 0, $26 = 0, $28 = 0, $31 = 0, $38 = 0, $4 = 0, $40 = 0, $41 = 0, $43 = 0, $44 = 0, $45 = 0, $51 = 0, $52 = 0, $6 = 0;
 $4 = _silk_CLZ32_228(($0 | 0) > 0 ? $0 : 0 - $0 | 0) | 0;
 $6 = $0 << $4 + -1;
 $11 = (_silk_CLZ32_228(($1 | 0) > 0 ? $1 : 0 - $1 | 0) | 0) + -1 | 0;
 $12 = $1 << $11;
 $16 = (536870911 / ($12 >> 16 | 0) | 0) << 16 >> 16;
 $21 = (Math_imul($6 >> 16, $16) | 0) + ((Math_imul($6 & 65535, $16) | 0) >> 16) | 0;
 $26 = ___muldi3($12 | 0, (($12 | 0) < 0) << 31 >> 31 | 0, $21 | 0, (($21 | 0) < 0) << 31 >> 31 | 0) | 0;
 $28 = _bitshift64Lshr($26 | 0, tempRet0 | 0, 29) | 0;
 $31 = $6 - ($28 & -8) | 0;
 $38 = $21 + ((Math_imul($31 >> 16, $16) | 0) + ((Math_imul($31 & 65535, $16) | 0) >> 16)) | 0;
 $40 = $4 + 28 - $11 | 0;
 $41 = $40 + -21 | 0;
 if (($40 | 0) >= 21) return (($41 | 0) < 32 ? $38 >> $41 : 0) | 0;
 $43 = 21 - $40 | 0;
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

function _silk_DIV32_varQ_120($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $11 = 0, $12 = 0, $16 = 0, $21 = 0, $26 = 0, $28 = 0, $31 = 0, $38 = 0, $4 = 0, $40 = 0, $41 = 0, $43 = 0, $44 = 0, $45 = 0, $51 = 0, $52 = 0, $6 = 0;
 $4 = _silk_CLZ32_121(($0 | 0) > 0 ? $0 : 0 - $0 | 0) | 0;
 $6 = $0 << $4 + -1;
 $11 = (_silk_CLZ32_121(($1 | 0) > 0 ? $1 : 0 - $1 | 0) | 0) + -1 | 0;
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

function _silk_DIV32_varQ_115($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $11 = 0, $12 = 0, $16 = 0, $21 = 0, $26 = 0, $28 = 0, $31 = 0, $38 = 0, $4 = 0, $40 = 0, $41 = 0, $43 = 0, $44 = 0, $45 = 0, $51 = 0, $52 = 0, $6 = 0;
 $4 = _silk_CLZ32_116(($0 | 0) > 0 ? $0 : 0 - $0 | 0) | 0;
 $6 = $0 << $4 + -1;
 $11 = (_silk_CLZ32_116(($1 | 0) > 0 ? $1 : 0 - $1 | 0) | 0) + -1 | 0;
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

function _silk_DIV32_varQ_347($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $12 = 0, $13 = 0, $17 = 0, $22 = 0, $27 = 0, $29 = 0, $32 = 0, $39 = 0, $42 = 0, $44 = 0, $45 = 0, $46 = 0, $5 = 0, $52 = 0, $53 = 0, $7 = 0;
 $5 = _silk_CLZ32_350(($0 | 0) > 0 ? $0 : 0 - $0 | 0) | 0;
 $7 = $0 << $5 + -1;
 $12 = (_silk_CLZ32_350(($1 | 0) > 0 ? $1 : 0 - $1 | 0) | 0) + -1 | 0;
 $13 = $1 << $12;
 $17 = (536870911 / ($13 >> 16 | 0) | 0) << 16 >> 16;
 $22 = (Math_imul($7 >> 16, $17) | 0) + ((Math_imul($7 & 65535, $17) | 0) >> 16) | 0;
 $27 = ___muldi3($13 | 0, (($13 | 0) < 0) << 31 >> 31 | 0, $22 | 0, (($22 | 0) < 0) << 31 >> 31 | 0) | 0;
 $29 = _bitshift64Lshr($27 | 0, tempRet0 | 0, 29) | 0;
 $32 = $7 - ($29 & -8) | 0;
 $39 = $22 + ((Math_imul($32 >> 16, $17) | 0) + ((Math_imul($32 & 65535, $17) | 0) >> 16)) | 0;
 $42 = $5 + 28 - $12 - $2 | 0;
 if (($42 | 0) >= 0) return (($42 | 0) < 32 ? $39 >> $42 : 0) | 0;
 $44 = 0 - $42 | 0;
 $45 = -2147483648 >> $44;
 $46 = 2147483647 >>> $44;
 if (($45 | 0) > ($46 | 0)) {
  if (($39 | 0) > ($45 | 0)) {
   $53 = $45;
   $52 = $53 << $44;
   return $52 | 0;
  }
  $53 = ($39 | 0) < ($46 | 0) ? $46 : $39;
  $52 = $53 << $44;
  return $52 | 0;
 } else {
  if (($39 | 0) > ($46 | 0)) {
   $53 = $46;
   $52 = $53 << $44;
   return $52 | 0;
  }
  $53 = ($39 | 0) < ($45 | 0) ? $45 : $39;
  $52 = $53 << $44;
  return $52 | 0;
 }
 return 0;
}

function _silk_DIV32_varQ_237($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $12 = 0, $13 = 0, $17 = 0, $22 = 0, $27 = 0, $29 = 0, $32 = 0, $39 = 0, $42 = 0, $44 = 0, $45 = 0, $46 = 0, $5 = 0, $52 = 0, $53 = 0, $7 = 0;
 $5 = _silk_CLZ32_239(($0 | 0) > 0 ? $0 : 0 - $0 | 0) | 0;
 $7 = $0 << $5 + -1;
 $12 = (_silk_CLZ32_239(($1 | 0) > 0 ? $1 : 0 - $1 | 0) | 0) + -1 | 0;
 $13 = $1 << $12;
 $17 = (536870911 / ($13 >> 16 | 0) | 0) << 16 >> 16;
 $22 = (Math_imul($7 >> 16, $17) | 0) + ((Math_imul($7 & 65535, $17) | 0) >> 16) | 0;
 $27 = ___muldi3($13 | 0, (($13 | 0) < 0) << 31 >> 31 | 0, $22 | 0, (($22 | 0) < 0) << 31 >> 31 | 0) | 0;
 $29 = _bitshift64Lshr($27 | 0, tempRet0 | 0, 29) | 0;
 $32 = $7 - ($29 & -8) | 0;
 $39 = $22 + ((Math_imul($32 >> 16, $17) | 0) + ((Math_imul($32 & 65535, $17) | 0) >> 16)) | 0;
 $42 = $5 + 28 - $12 - $2 | 0;
 if (($42 | 0) >= 0) return (($42 | 0) < 32 ? $39 >> $42 : 0) | 0;
 $44 = 0 - $42 | 0;
 $45 = -2147483648 >> $44;
 $46 = 2147483647 >>> $44;
 if (($45 | 0) > ($46 | 0)) {
  if (($39 | 0) > ($45 | 0)) {
   $53 = $45;
   $52 = $53 << $44;
   return $52 | 0;
  }
  $53 = ($39 | 0) < ($46 | 0) ? $46 : $39;
  $52 = $53 << $44;
  return $52 | 0;
 } else {
  if (($39 | 0) > ($46 | 0)) {
   $53 = $46;
   $52 = $53 << $44;
   return $52 | 0;
  }
  $53 = ($39 | 0) < ($45 | 0) ? $45 : $39;
  $52 = $53 << $44;
  return $52 | 0;
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
  $15 = Math_imul(HEAP16[$9 >> 1] | 0, HEAP16[28462 + ($7 << 3) >> 1] | 0) | 0;
  $23 = $15 + (Math_imul(HEAP16[$9 + 2 >> 1] | 0, HEAP16[28462 + ($7 << 3) + 2 >> 1] | 0) | 0) | 0;
  $31 = $23 + (Math_imul(HEAP16[$9 + 4 >> 1] | 0, HEAP16[28462 + ($7 << 3) + 4 >> 1] | 0) | 0) | 0;
  $39 = $31 + (Math_imul(HEAP16[$9 + 6 >> 1] | 0, HEAP16[28462 + ($7 << 3) + 6 >> 1] | 0) | 0) | 0;
  $43 = 11 - $7 | 0;
  $48 = $39 + (Math_imul(HEAP16[$9 + 8 >> 1] | 0, HEAP16[28462 + ($43 << 3) + 6 >> 1] | 0) | 0) | 0;
  $56 = $48 + (Math_imul(HEAP16[$9 + 10 >> 1] | 0, HEAP16[28462 + ($43 << 3) + 4 >> 1] | 0) | 0) | 0;
  $64 = $56 + (Math_imul(HEAP16[$9 + 12 >> 1] | 0, HEAP16[28462 + ($43 << 3) + 2 >> 1] | 0) | 0) | 0;
  $75 = ($64 + (Math_imul(HEAP16[$9 + 14 >> 1] | 0, HEAP16[28462 + ($43 << 3) >> 1] | 0) | 0) >> 14) + 1 >> 1;
  HEAP16[$$0 >> 1] = ($75 | 0) > 32767 ? 32767 : (($75 | 0) > -32768 ? $75 : -32768) & 65535;
  $$0 = $$0 + 2 | 0;
  $$01 = $$01 + $3 | 0;
 }
 return $$0 | 0;
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

function _stereo_fade($0, $1, $2, $3, $4, $5, $6, $7, $8) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = +$2;
 $3 = +$3;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 $7 = $7 | 0;
 $8 = $8 | 0;
 var $$0 = 0, $$1 = 0, $10 = 0, $11 = 0.0, $12 = 0.0, $16 = 0.0, $17 = 0.0, $22 = 0, $25 = 0, $30 = 0.0, $31 = 0, $34 = 0, $39 = 0, $42 = 0, $47 = 0.0, $48 = 0, $51 = 0, $9 = 0;
 $9 = 48e3 / ($8 | 0) | 0;
 $10 = ($4 | 0) / ($9 | 0) | 0;
 $11 = 1.0 - $2;
 $12 = 1.0 - $3;
 $$0 = 0;
 while (1) {
  if (($$0 | 0) >= ($10 | 0)) {
   $$1 = $$0;
   break;
  }
  $16 = +HEAPF32[$7 + ((Math_imul($$0, $9) | 0) << 2) >> 2];
  $17 = $16 * $16;
  $22 = Math_imul($$0, $6) | 0;
  $25 = $22 + 1 | 0;
  $30 = ($17 * $12 + (1.0 - $17) * $11) * ((+HEAPF32[$0 + ($22 << 2) >> 2] - +HEAPF32[$0 + ($25 << 2) >> 2]) * .5);
  $31 = $1 + ($22 << 2) | 0;
  HEAPF32[$31 >> 2] = +HEAPF32[$31 >> 2] - $30;
  $34 = $1 + ($25 << 2) | 0;
  HEAPF32[$34 >> 2] = +HEAPF32[$34 >> 2] + $30;
  $$0 = $$0 + 1 | 0;
 }
 while (1) {
  if (($$1 | 0) >= ($5 | 0)) break;
  $39 = Math_imul($$1, $6) | 0;
  $42 = $39 + 1 | 0;
  $47 = $12 * ((+HEAPF32[$0 + ($39 << 2) >> 2] - +HEAPF32[$0 + ($42 << 2) >> 2]) * .5);
  $48 = $1 + ($39 << 2) | 0;
  HEAPF32[$48 >> 2] = +HEAPF32[$48 >> 2] - $47;
  $51 = $1 + ($42 << 2) | 0;
  HEAPF32[$51 >> 2] = +HEAPF32[$51 >> 2] + $47;
  $$1 = $$1 + 1 | 0;
 }
 return;
}

function _compute_silk_rate_for_hybrid($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $$$0 = 0, $$0 = 0, $$01 = 0, $$2 = 0, $10 = 0, $19 = 0, $25 = 0, $27 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $7 = 0, label = 0;
 $7 = $2 + 1 + ($4 << 1) | 0;
 $$01 = 1;
 while (1) {
  if (($$01 | 0) >= 7) {
   label = 5;
   break;
  }
  $10 = HEAP32[19432 + ($$01 * 20 | 0) >> 2] | 0;
  if (($10 | 0) > ($0 | 0)) {
   $27 = $10;
   break;
  }
  $$01 = $$01 + 1 | 0;
 }
 do if ((label | 0) == 5) {
  if (($$01 | 0) != 7) {
   $27 = HEAP32[19432 + ($$01 * 20 | 0) >> 2] | 0;
   break;
  }
  $$0 = (HEAP32[19552 + ($7 << 2) >> 2] | 0) + (($0 + -64e3 | 0) / 2 | 0) | 0;
  $34 = ($3 | 0) == 0;
  $35 = $$0 + 100 | 0;
  $$$0 = $34 ? $35 : $$0;
  $36 = ($1 | 0) == 1104;
  $37 = $$$0 + 300 | 0;
  $$2 = $36 ? $37 : $$$0;
  return $$2 | 0;
 } while (0);
 $19 = $$01 + -1 | 0;
 $25 = HEAP32[19432 + ($19 * 20 | 0) >> 2] | 0;
 $$0 = ((Math_imul(HEAP32[19432 + ($19 * 20 | 0) + ($7 << 2) >> 2] | 0, $27 - $0 | 0) | 0) + (Math_imul(HEAP32[19432 + ($$01 * 20 | 0) + ($7 << 2) >> 2] | 0, $0 - $25 | 0) | 0) | 0) / ($27 - $25 | 0) | 0;
 $34 = ($3 | 0) == 0;
 $35 = $$0 + 100 | 0;
 $$$0 = $34 ? $35 : $$0;
 $36 = ($1 | 0) == 1104;
 $37 = $$$0 + 300 | 0;
 $$2 = $36 ? $37 : $$$0;
 return $$2 | 0;
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
 $16 = +($1 | 0) / +((Math_imul(HEAP32[18968 + ($5 + -1 << 2) >> 2] | 0, $4) | 0) + $1 | 0);
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

function _silk_NSQ_noise_shape_feedback_loop_c($$val, $0, $1, $2) {
 $$val = $$val | 0;
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $15 = 0, $16 = 0, $17 = 0, $19 = 0, $20 = 0, $21 = 0, $25 = 0, $3 = 0, $33 = 0, $39 = 0, $41 = 0, $46 = 0, $7 = 0;
 $3 = HEAP32[$0 >> 2] | 0;
 HEAP32[$0 >> 2] = $$val;
 $7 = HEAP16[$1 >> 1] | 0;
 $$0 = 2;
 $$01 = $3;
 $$02 = ($2 >> 1) + ((Math_imul($$val >> 16, $7) | 0) + ((Math_imul($$val & 65535, $7) | 0) >> 16)) | 0;
 while (1) {
  if (($$0 | 0) >= ($2 | 0)) break;
  $15 = $$0 + -1 | 0;
  $16 = $0 + ($15 << 2) | 0;
  $17 = HEAP32[$16 >> 2] | 0;
  HEAP32[$16 >> 2] = $$01;
  $19 = HEAP16[$1 + ($15 << 1) >> 1] | 0;
  $20 = $0 + ($$0 << 2) | 0;
  $21 = HEAP32[$20 >> 2] | 0;
  HEAP32[$20 >> 2] = $17;
  $25 = $19 << 16 >> 16;
  $33 = HEAP16[$1 + ($$0 << 1) >> 1] | 0;
  $39 = $$02 + ((Math_imul($$01 >> 16, $25) | 0) + ((Math_imul($$01 & 65535, $25) | 0) >> 16)) + ((Math_imul($17 >> 16, $33) | 0) + ((Math_imul($17 & 65535, $33) | 0) >> 16)) | 0;
  $$0 = $$0 + 2 | 0;
  $$01 = $21;
  $$02 = $39;
 }
 $41 = $2 + -1 | 0;
 HEAP32[$0 + ($41 << 2) >> 2] = $$01;
 $46 = HEAP16[$1 + ($41 << 1) >> 1] | 0;
 return $$02 + ((Math_imul($$01 >> 16, $46) | 0) + ((Math_imul($$01 & 65535, $46) | 0) >> 16)) << 1 | 0;
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

function _quant_fine_energy($0, $1, $2, $3, $4, $5, $6, $7) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 $7 = $7 | 0;
 var $$ = 0, $$01 = 0, $$02 = 0, $$1 = 0, $10 = 0, $11 = 0, $13 = 0, $14 = 0.0, $15 = 0, $23 = 0, $35 = 0.0, $39 = 0, $45 = 0, $8 = 0;
 $8 = $0 + 8 | 0;
 $$02 = $1;
 while (1) {
  if (($$02 | 0) >= ($2 | 0)) break;
  $10 = $5 + ($$02 << 2) | 0;
  $11 = HEAP32[$10 >> 2] | 0;
  if (($11 | 0) >= 1) {
   $13 = 65536 << $11 >> 16;
   $14 = +($13 | 0);
   $15 = $13 + -1 | 0;
   $$01 = 0;
   do {
    $23 = ~~+Math_floor(+((+HEAPF32[$4 + ($$02 + (Math_imul($$01, HEAP32[$8 >> 2] | 0) | 0) << 2) >> 2] + .5) * $14));
    $$ = ($23 | 0) < ($13 | 0) ? $23 : $15;
    $$1 = ($$ | 0) > 0 ? $$ : 0;
    _ec_enc_bits($6, $$1, HEAP32[$10 >> 2] | 0);
    $35 = (+($$1 | 0) + .5) * +(1 << 14 - (HEAP32[$10 >> 2] | 0) | 0) * .00006103515625 + -.5;
    $39 = $3 + ($$02 + (Math_imul($$01, HEAP32[$8 >> 2] | 0) | 0) << 2) | 0;
    HEAPF32[$39 >> 2] = +HEAPF32[$39 >> 2] + $35;
    $45 = $4 + ($$02 + (Math_imul($$01, HEAP32[$8 >> 2] | 0) | 0) << 2) | 0;
    HEAPF32[$45 >> 2] = +HEAPF32[$45 >> 2] - $35;
    $$01 = $$01 + 1 | 0;
   } while (($$01 | 0) < ($7 | 0));
  }
  $$02 = $$02 + 1 | 0;
 }
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

function _ec_laplace_encode($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$ = 0, $$0 = 0, $$01 = 0, $$02 = 0, $$2 = 0, $$24 = 0, $12 = 0, $21 = 0, $22 = 0, $27 = 0, $32 = 0, $36 = 0, $4 = 0, $6 = 0, $8 = 0, label = 0;
 $4 = HEAP32[$1 >> 2] | 0;
 if (!$4) {
  $$2 = $2;
  $$24 = 0;
  $36 = $$24 + $$2 | 0;
  _ec_encode_bin($0, $$24, $36);
  return;
 }
 $6 = $4 >> 31;
 $8 = $4 + $6 ^ $6;
 $$0 = 1;
 $$01 = _ec_laplace_get_freq1($2, $3) | 0;
 $$02 = $2;
 while (1) {
  if (!$$01) {
   label = 6;
   break;
  }
  if (($8 | 0) <= ($$0 | 0)) {
   label = 7;
   break;
  }
  $12 = $$01 << 1;
  $$0 = $$0 + 1 | 0;
  $$01 = (Math_imul($12, $3) | 0) >>> 15;
  $$02 = $$02 + ($12 + 2) | 0;
 }
 if ((label | 0) == 6) {
  $21 = $8 - $$0 | 0;
  $22 = (32768 - $$02 - $6 >> 1) + -1 | 0;
  $$ = ($21 | 0) < ($22 | 0) ? $21 : $22;
  $27 = $$02 + (($$ << 1 | 1) + $6) | 0;
  HEAP32[$1 >> 2] = $$0 + $$ + $6 ^ $6;
  $$2 = ($27 | 0) != 32768 & 1;
  $$24 = $27;
  $36 = $$24 + $$2 | 0;
  _ec_encode_bin($0, $$24, $36);
  return;
 } else if ((label | 0) == 7) {
  $32 = $$01 + 1 | 0;
  $$2 = $32;
  $$24 = $$02 + ($32 & ~$6) | 0;
  $36 = $$24 + $$2 | 0;
  _ec_encode_bin($0, $$24, $36);
  return;
 }
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

function _silk_LPC_analysis_filter12_FLP($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $17 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 $4 = $1 + 4 | 0;
 $5 = $1 + 8 | 0;
 $6 = $1 + 12 | 0;
 $7 = $1 + 16 | 0;
 $8 = $1 + 20 | 0;
 $9 = $1 + 24 | 0;
 $10 = $1 + 28 | 0;
 $11 = $1 + 32 | 0;
 $12 = $1 + 36 | 0;
 $13 = $1 + 40 | 0;
 $14 = $1 + 44 | 0;
 $$0 = 12;
 while (1) {
  if (($$0 | 0) >= ($3 | 0)) break;
  $17 = $2 + ($$0 + -1 << 2) | 0;
  HEAPF32[$0 + ($$0 << 2) >> 2] = +HEAPF32[$17 + 4 >> 2] - (+HEAPF32[$17 >> 2] * +HEAPF32[$1 >> 2] + +HEAPF32[$17 + -4 >> 2] * +HEAPF32[$4 >> 2] + +HEAPF32[$17 + -8 >> 2] * +HEAPF32[$5 >> 2] + +HEAPF32[$17 + -12 >> 2] * +HEAPF32[$6 >> 2] + +HEAPF32[$17 + -16 >> 2] * +HEAPF32[$7 >> 2] + +HEAPF32[$17 + -20 >> 2] * +HEAPF32[$8 >> 2] + +HEAPF32[$17 + -24 >> 2] * +HEAPF32[$9 >> 2] + +HEAPF32[$17 + -28 >> 2] * +HEAPF32[$10 >> 2] + +HEAPF32[$17 + -32 >> 2] * +HEAPF32[$11 >> 2] + +HEAPF32[$17 + -36 >> 2] * +HEAPF32[$12 >> 2] + +HEAPF32[$17 + -40 >> 2] * +HEAPF32[$13 >> 2] + +HEAPF32[$17 + -44 >> 2] * +HEAPF32[$14 >> 2]);
  $$0 = $$0 + 1 | 0;
 }
 return;
}

function _hp_cutoff($0, $1, $2, $3, $4, $5, $6) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 var $10 = 0, $11 = 0, $12 = 0, $14 = 0, $15 = 0, $16 = 0, $18 = 0, $19 = 0, $21 = 0, $27 = 0, $29 = 0, $31 = 0, $43 = 0, $44 = 0, $53 = 0;
 $10 = (($1 << 16 >> 16) * 2471 | 0) / (($6 | 0) / 1e3 | 0 | 0) | 0;
 $11 = Math_imul($10, -471) | 0;
 $12 = $11 + 268435456 | 0;
 $14 = -268435456 - $11 << 1;
 $15 = $12 >> 6;
 $16 = $12 >> 22;
 $18 = $10 << 16 >> 16;
 $19 = Math_imul($10 >> 16, $18) | 0;
 $21 = Math_imul($10 & 65535, $18) | 0;
 $27 = Math_imul($10, ($10 >> 15) + 1 >> 1) | 0;
 $29 = $19 + ($21 >>> 16) + $27 << 16 >> 16;
 $31 = $15 & 65535;
 $43 = (Math_imul($16, $29) | 0) + ((Math_imul($31, $29) | 0) >> 16) + (Math_imul($15, ($19 + ($21 >> 16) + $27 + -8388608 >> 15) + 1 >> 1) | 0) | 0;
 $44 = $15 << 16 >> 16;
 $53 = (Math_imul($16, $44) | 0) + ((Math_imul($31, $44) | 0) >> 16) + (Math_imul($15, ($12 >> 21) + 1 >> 1) | 0) | 0;
 _silk_biquad_float($0, $12, $14, $12, $43, $53, $3, $2, $4, $5);
 if (($5 | 0) != 2) return;
 _silk_biquad_float($0 + 4 | 0, $12, $14, $12, $43, $53, $3 + 8 | 0, $2 + 4 | 0, $4, 2);
 return;
}

function _decide_fec($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$0 = 0, $$1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $17 = 0, $20 = 0, $23 = 0, $30 = 0, $32 = 0, $9 = 0, label = 0;
 if (($0 | 0) == 0 | ($1 | 0) == 0 | ($3 | 0) == 1002) {
  $$0 = 0;
  return $$0 | 0;
 }
 $9 = HEAP32[$4 >> 2] | 0;
 $10 = ($1 | 0) < 25;
 $11 = 125 - $1 | 0;
 $12 = ($1 | 0) < 6;
 $14 = $9;
 while (1) {
  $13 = $14 << 1;
  $17 = HEAP32[19572 + ($13 + -2202 << 2) >> 2] | 0;
  $20 = HEAP32[19572 + ($13 + -2201 << 2) >> 2] | 0;
  switch ($2 | 0) {
  case 1:
   {
    $$1 = $17 - $20 | 0;
    break;
   }
  case 0:
   {
    $$1 = $17 + $20 | 0;
    break;
   }
  default:
   $$1 = $17;
  }
  $23 = ((Math_imul($$1, $10 ? $11 : 100) | 0) >> 16) * 655 | 0;
  $30 = ($23 + ((((Math_imul($$1, $10 ? 125 - $1 | 0 : 100) | 0) & 65535) * 655 | 0) >>> 16) | 0) < ($5 | 0);
  if ($30 | $12) {
   $$0 = $30 & 1;
   label = 10;
   break;
  }
  if (($14 | 0) <= 1101) break;
  $32 = $14 + -1 | 0;
  HEAP32[$4 >> 2] = $32;
  $14 = $32;
 }
 if ((label | 0) == 10) return $$0 | 0;
 HEAP32[$4 >> 2] = $9;
 $$0 = 0;
 return $$0 | 0;
}

function _silk_schur_FLP($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $$01 = 0, $$1 = 0, $11 = 0, $13 = 0, $17 = 0.0, $20 = 0.0, $23 = 0, $27 = 0, $28 = 0.0, $29 = 0, $3 = 0, $30 = 0.0, $6 = 0.0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 400 | 0;
 $3 = sp;
 $$01 = 0;
 while (1) {
  $6 = +HEAPF32[$1 + ($$01 << 2) >> 2];
  HEAPF64[$3 + ($$01 << 4) + 8 >> 3] = $6;
  HEAPF64[$3 + ($$01 << 4) >> 3] = $6;
  if (($$01 | 0) < ($2 | 0)) $$01 = $$01 + 1 | 0; else break;
 }
 $11 = $3 + 8 | 0;
 $$1 = 0;
 L4 : while (1) {
  if (($$1 | 0) >= ($2 | 0)) break;
  $13 = $$1 + 1 | 0;
  $17 = +HEAPF64[$11 >> 3];
  $20 = -+HEAPF64[$3 + ($13 << 4) >> 3] / ($17 > 9.999999717180685e-10 ? $17 : 9.999999717180685e-10);
  HEAPF32[$0 + ($$1 << 2) >> 2] = $20;
  $23 = $2 - $$1 | 0;
  $$0 = 0;
  while (1) {
   if (($$0 | 0) >= ($23 | 0)) {
    $$1 = $13;
    continue L4;
   }
   $27 = $3 + ($$0 + $$1 + 1 << 4) | 0;
   $28 = +HEAPF64[$27 >> 3];
   $29 = $3 + ($$0 << 4) + 8 | 0;
   $30 = +HEAPF64[$29 >> 3];
   HEAPF64[$27 >> 3] = $28 + $30 * $20;
   HEAPF64[$29 >> 3] = $30 + $28 * $20;
   $$0 = $$0 + 1 | 0;
  }
 }
 STACKTOP = sp;
 return +(+HEAPF64[$11 >> 3]);
}

function _silk_ana_filt_bank_1($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $$0 = 0, $12 = 0, $14 = 0, $20 = 0, $22 = 0, $28 = 0, $29 = 0, $30 = 0, $36 = 0, $37 = 0, $42 = 0, $5 = 0, $51 = 0, $6 = 0, $8 = 0;
 $5 = $4 >> 1;
 $6 = $1 + 4 | 0;
 $$0 = 0;
 while (1) {
  if (($$0 | 0) >= ($5 | 0)) break;
  $8 = $$0 << 1;
  $12 = HEAP16[$0 + ($8 << 1) >> 1] << 10;
  $14 = $12 - (HEAP32[$1 >> 2] | 0) | 0;
  $20 = (Math_imul($14 >> 16, -24290) | 0) + ((Math_imul($14 & 65535, -24290) | 0) >> 16) | 0;
  $22 = $12 + $20 | 0;
  HEAP32[$1 >> 2] = $12 + ($14 + $20);
  $28 = HEAP16[$0 + (($8 | 1) << 1) >> 1] << 10;
  $29 = HEAP32[$6 >> 2] | 0;
  $30 = $28 - $29 | 0;
  $36 = (($30 >> 16) * 10788 | 0) + ((($30 & 65535) * 10788 | 0) >>> 16) | 0;
  $37 = $29 + $36 | 0;
  HEAP32[$6 >> 2] = $28 + $36;
  $42 = ($37 + $22 >> 10) + 1 >> 1;
  HEAP16[$2 + ($$0 << 1) >> 1] = ($42 | 0) > 32767 ? 32767 : (($42 | 0) > -32768 ? $42 : -32768) & 65535;
  $51 = ($37 - $22 >> 10) + 1 >> 1;
  HEAP16[$3 + ($$0 << 1) >> 1] = ($51 | 0) > 32767 ? 32767 : (($51 | 0) > -32768 ? $51 : -32768) & 65535;
  $$0 = $$0 + 1 | 0;
 }
 return;
}

function _silk_INVERSE32_varQ_119($0) {
 $0 = $0 | 0;
 var $16 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $32 = 0, $33 = 0, $34 = 0, $40 = 0, $41 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 $3 = _silk_CLZ32_121(($0 | 0) > 0 ? $0 : 0 - $0 | 0) | 0;
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

function _silk_INVERSE32_varQ_114($0) {
 $0 = $0 | 0;
 var $16 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $32 = 0, $33 = 0, $34 = 0, $40 = 0, $41 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 $3 = _silk_CLZ32_116(($0 | 0) > 0 ? $0 : 0 - $0 | 0) | 0;
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

function _mlp_process($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$0 = 0.0, $$01 = 0, $$02 = 0.0, $$03 = 0, $$04 = 0, $$04$pn = 0, $$06 = 0, $$1 = 0, $$15 = 0, $$2 = 0, $$2$pn = 0, $$3 = 0, $2 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 400 | 0;
 $2 = sp;
 $$03 = 0;
 $$04 = 22e3;
 while (1) {
  if (($$03 | 0) == 16) {
   $$1 = 0;
   $$2 = 23664;
   break;
  }
  $$02 = +HEAPF32[$$04 >> 2];
  $$04$pn = $$04;
  $$06 = 0;
  while (1) {
   $$15 = $$04$pn + 4 | 0;
   if (($$06 | 0) == 25) break;
   $$02 = $$02 + +HEAPF32[$0 + ($$06 << 2) >> 2] * +HEAPF32[$$15 >> 2];
   $$04$pn = $$15;
   $$06 = $$06 + 1 | 0;
  }
  HEAPF32[$2 + ($$03 << 2) >> 2] = +_tansig_approx($$02);
  $$03 = $$03 + 1 | 0;
  $$04 = $$04 + 104 | 0;
 }
 while (1) {
  if (($$1 | 0) == 2) break;
  $$0 = +HEAPF32[$$2 >> 2];
  $$01 = 0;
  $$2$pn = $$2;
  while (1) {
   $$3 = $$2$pn + 4 | 0;
   if (($$01 | 0) == 16) break;
   $$0 = $$0 + +HEAPF32[$2 + ($$01 << 2) >> 2] * +HEAPF32[$$3 >> 2];
   $$01 = $$01 + 1 | 0;
   $$2$pn = $$3;
  }
  HEAPF32[$1 + ($$1 << 2) >> 2] = +_tansig_approx($$0);
  $$1 = $$1 + 1 | 0;
  $$2 = $$2 + 68 | 0;
 }
 STACKTOP = sp;
 return;
}

function _silk_NLSF_VQ_weights_laroia($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $$01 = 0, $12 = 0, $16 = 0, $18 = 0, $19 = 0, $27 = 0, $32 = 0, $4 = 0, $40 = 0, $6 = 0;
 $4 = HEAP16[$1 >> 1] | 0;
 $6 = 131072 / (_silk_max_int_286($4) | 0) | 0;
 $12 = 131072 / (_silk_max_int_286((HEAP16[$1 + 2 >> 1] | 0) - $4 | 0) | 0) | 0;
 HEAP16[$0 >> 1] = _silk_min_int_287($6 + $12 | 0) | 0;
 $16 = $2 + -1 | 0;
 $$0 = $12;
 $$01 = 1;
 while (1) {
  if (($$01 | 0) >= ($16 | 0)) break;
  $18 = $$01 + 1 | 0;
  $19 = $1 + ($18 << 1) | 0;
  $27 = 131072 / (_silk_max_int_286((HEAP16[$19 >> 1] | 0) - (HEAP16[$1 + ($$01 << 1) >> 1] | 0) | 0) | 0) | 0;
  HEAP16[$0 + ($$01 << 1) >> 1] = _silk_min_int_287($27 + $$0 | 0) | 0;
  $32 = $$01 + 2 | 0;
  $40 = 131072 / (_silk_max_int_286((HEAP16[$1 + ($32 << 1) >> 1] | 0) - (HEAP16[$19 >> 1] | 0) | 0) | 0) | 0;
  HEAP16[$0 + ($18 << 1) >> 1] = _silk_min_int_287($27 + $40 | 0) | 0;
  $$0 = $40;
  $$01 = $32;
 }
 HEAP16[$0 + ($16 << 1) >> 1] = _silk_min_int_287((131072 / (_silk_max_int_286(32768 - (HEAP16[$1 + ($16 << 1) >> 1] | 0) | 0) | 0) | 0) + $$0 | 0) | 0;
 return;
}

function _silk_quant_LTP_gains_FLP($0, $1, $2, $3, $4, $5, $6, $7, $8) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 $7 = $7 | 0;
 $8 = $8 | 0;
 var $$0 = 0, $$1 = 0, $$2 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $15 = 0, $9 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 528 | 0;
 $9 = sp + 480 | 0;
 $10 = sp + 488 | 0;
 $11 = sp + 80 | 0;
 $12 = sp;
 $13 = $8 * 25 | 0;
 $$0 = 0;
 while (1) {
  if (($$0 | 0) >= ($13 | 0)) break;
  HEAP32[$11 + ($$0 << 2) >> 2] = _silk_float2int(+HEAPF32[$5 + ($$0 << 2) >> 2] * 131072.0) | 0;
  $$0 = $$0 + 1 | 0;
 }
 $15 = $8 * 5 | 0;
 $$1 = 0;
 while (1) {
  if (($$1 | 0) >= ($15 | 0)) break;
  HEAP32[$12 + ($$1 << 2) >> 2] = _silk_float2int(+HEAPF32[$6 + ($$1 << 2) >> 2] * 131072.0) | 0;
  $$1 = $$1 + 1 | 0;
 }
 _silk_quant_LTP_gains($10, $1, $2, $3, $9, $11, $12, $7, $8);
 $$2 = 0;
 while (1) {
  if (($$2 | 0) >= ($15 | 0)) break;
  HEAPF32[$0 + ($$2 << 2) >> 2] = +(HEAP16[$10 + ($$2 << 1) >> 1] | 0) * .00006103515625;
  $$2 = $$2 + 1 | 0;
 }
 HEAPF32[$4 >> 2] = +(HEAP32[$9 >> 2] | 0) * .0078125;
 STACKTOP = sp;
 return;
}

function _silk_NLSF_VQ($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $$03 = 0, $$04 = 0, $$05 = 0, $$05$in = 0, $21 = 0, $22 = 0, $40 = 0, $41 = 0, $8 = 0;
 $$0 = $2;
 $$01 = $3;
 $$04 = 0;
 while (1) {
  if (($$04 | 0) < ($4 | 0)) {
   $$02 = 0;
   $$03 = 0;
   $$05$in = $5;
  } else break;
  while (1) {
   $$05 = $$05$in + -2 | 0;
   if (($$05 | 0) <= -1) break;
   $8 = $$05$in + -1 | 0;
   $21 = Math_imul((HEAPU16[$1 + ($8 << 1) >> 1] | 0) - (HEAPU8[$$0 + $8 >> 0] << 7) << 16 >> 16, HEAP16[$$01 + ($8 << 1) >> 1] | 0) | 0;
   $22 = $$02 >> 1;
   $40 = Math_imul((HEAPU16[$1 + ($$05 << 1) >> 1] | 0) - (HEAPU8[$$0 + $$05 >> 0] << 7) << 16 >> 16, HEAP16[$$01 + ($$05 << 1) >> 1] | 0) | 0;
   $41 = $21 >> 1;
   $$02 = $40;
   $$03 = $$03 + (($21 | 0) > ($22 | 0) ? $21 - $22 | 0 : $22 - $21 | 0) + (($40 | 0) > ($41 | 0) ? $40 - $41 | 0 : $41 - $40 | 0) | 0;
   $$05$in = $$05;
  }
  HEAP32[$0 + ($$04 << 2) >> 2] = $$03;
  $$0 = $$0 + $5 | 0;
  $$01 = $$01 + ($5 << 1) | 0;
  $$04 = $$04 + 1 | 0;
 }
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

function _downmix_float($0, $1, $2, $3, $4, $5, $6) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 var $$0 = 0, $$01 = 0, $$1 = 0, $$2 = 0, $23 = 0.0, $24 = 0, $36 = 0.0, $37 = 0;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) >= ($2 | 0)) break;
  HEAPF32[$1 + ($$01 << 2) >> 2] = +HEAPF32[$0 + ((Math_imul($$01 + $3 | 0, $6) | 0) + $4 << 2) >> 2] * 32768.0;
  $$01 = $$01 + 1 | 0;
 }
 if (($5 | 0) > -1) {
  $$1 = 0;
  while (1) {
   if (($$1 | 0) >= ($2 | 0)) break;
   $23 = +HEAPF32[$0 + ((Math_imul($$1 + $3 | 0, $6) | 0) + $5 << 2) >> 2] * 32768.0;
   $24 = $1 + ($$1 << 2) | 0;
   HEAPF32[$24 >> 2] = +HEAPF32[$24 >> 2] + $23;
   $$1 = $$1 + 1 | 0;
  }
  return;
 }
 if (($5 | 0) == -2) $$0 = 1; else return;
 while (1) {
  if (($$0 | 0) < ($6 | 0)) $$2 = 0; else break;
  while (1) {
   if (($$2 | 0) >= ($2 | 0)) break;
   $36 = +HEAPF32[$0 + ((Math_imul($$2 + $3 | 0, $6) | 0) + $$0 << 2) >> 2] * 32768.0;
   $37 = $1 + ($$2 << 2) | 0;
   HEAPF32[$37 >> 2] = +HEAPF32[$37 >> 2] + $36;
   $$2 = $$2 + 1 | 0;
  }
  $$0 = $$0 + 1 | 0;
 }
 return;
}

function _silk_QueryEncoder($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $40 = 0, $53 = 0, $54 = 0, $55 = 0;
 HEAP32[$1 >> 2] = HEAP32[$0 + 20184 >> 2];
 HEAP32[$1 + 4 >> 2] = HEAP32[$0 + 20188 >> 2];
 HEAP32[$1 + 8 >> 2] = HEAP32[$0 + 4552 >> 2];
 HEAP32[$1 + 12 >> 2] = HEAP32[$0 + 4560 >> 2];
 HEAP32[$1 + 16 >> 2] = HEAP32[$0 + 4564 >> 2];
 HEAP32[$1 + 20 >> 2] = HEAP32[$0 + 4568 >> 2];
 HEAP32[$1 + 24 >> 2] = HEAP32[$0 + 4608 >> 2];
 HEAP32[$1 + 28 >> 2] = HEAP32[$0 + 4604 >> 2];
 HEAP32[$1 + 32 >> 2] = HEAP32[$0 + 4612 >> 2];
 HEAP32[$1 + 36 >> 2] = HEAP32[$0 + 4620 >> 2];
 HEAP32[$1 + 40 >> 2] = HEAP32[$0 + 6084 >> 2];
 HEAP32[$1 + 48 >> 2] = HEAP32[$0 + 6072 >> 2];
 HEAP32[$1 + 52 >> 2] = HEAP32[$0 + 4672 >> 2];
 $40 = $0 + 4572 | 0;
 HEAP32[$1 + 72 >> 2] = (HEAP32[$40 >> 2] << 16 >> 16) * 1e3;
 HEAP32[$1 + 76 >> 2] = HEAP32[$0 + 4532 >> 2];
 if ((HEAP32[$40 >> 2] | 0) != 16) {
  $54 = 0;
  $53 = $54 & 1;
  $55 = $1 + 80 | 0;
  HEAP32[$55 >> 2] = $53;
  return 0;
 }
 $54 = (HEAP32[$0 + 28 >> 2] | 0) == 0;
 $53 = $54 & 1;
 $55 = $1 + 80 | 0;
 HEAP32[$55 >> 2] = $53;
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

function _opus_repacketizer_cat_impl($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $15 = 0, $24 = 0, $3 = 0, $5 = 0, $6 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 $3 = sp;
 if (($2 | 0) < 1) {
  $$0 = -4;
  STACKTOP = sp;
  return $$0 | 0;
 }
 $5 = $0 + 4 | 0;
 $6 = HEAP32[$5 >> 2] | 0;
 if (!$6) {
  HEAP8[$0 >> 0] = HEAP8[$1 >> 0] | 0;
  HEAP32[$0 + 296 >> 2] = _opus_packet_get_samples_per_frame(HEAP8[$1 >> 0] | 0, 8e3) | 0;
 } else if (((HEAP8[$0 >> 0] ^ HEAP8[$1 >> 0]) & 255) > 3) {
  $$0 = -4;
  STACKTOP = sp;
  return $$0 | 0;
 }
 $15 = _opus_packet_get_nb_frames($1, $2) | 0;
 if (($15 | 0) < 1) {
  $$0 = -4;
  STACKTOP = sp;
  return $$0 | 0;
 }
 if ((Math_imul($15 + $6 | 0, HEAP32[$0 + 296 >> 2] | 0) | 0) > 960) {
  $$0 = -4;
  STACKTOP = sp;
  return $$0 | 0;
 }
 $24 = _opus_packet_parse_impl($1, $2, 0, $3, $0 + 8 + ($6 << 2) | 0, $0 + 200 + ($6 << 1) | 0) | 0;
 if (($24 | 0) < 1) {
  $$0 = $24;
  STACKTOP = sp;
  return $$0 | 0;
 }
 HEAP32[$5 >> 2] = (HEAP32[$5 >> 2] | 0) + $15;
 $$0 = 0;
 STACKTOP = sp;
 return $$0 | 0;
}

function _normalise_bands($0, $1, $2, $3, $4, $5, $6) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $11 = 0, $12 = 0, $13 = 0, $21 = 0.0, $25 = 0, $26 = 0, $30 = 0, $32 = 0, $8 = 0;
 $8 = HEAP32[$0 + 32 >> 2] | 0;
 $11 = Math_imul(HEAP32[$0 + 44 >> 2] | 0, $6) | 0;
 $12 = $0 + 8 | 0;
 $$01 = 0;
 while (1) {
  $13 = Math_imul($$01, $11) | 0;
  $$02 = 0;
  L3 : while (1) {
   if (($$02 | 0) >= ($4 | 0)) break;
   $21 = 1.0 / (+HEAPF32[$3 + ($$02 + (Math_imul($$01, HEAP32[$12 >> 2] | 0) | 0) << 2) >> 2] + 1.0000000272452012e-27);
   $25 = Math_imul(HEAP16[$8 + ($$02 << 1) >> 1] | 0, $6) | 0;
   $26 = $$02 + 1 | 0;
   $30 = Math_imul(HEAP16[$8 + ($26 << 1) >> 1] | 0, $6) | 0;
   $$0 = $25;
   while (1) {
    if (($$0 | 0) >= ($30 | 0)) {
     $$02 = $26;
     continue L3;
    }
    $32 = $$0 + $13 | 0;
    HEAPF32[$2 + ($32 << 2) >> 2] = +HEAPF32[$1 + ($32 << 2) >> 2] * $21;
    $$0 = $$0 + 1 | 0;
   }
  }
  $$01 = $$01 + 1 | 0;
  if (($$01 | 0) >= ($5 | 0)) break;
 }
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

function _stereo_analysis($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $$01 = 0.0, $$02 = 0.0, $$05 = 0, $$1 = 0.0, $$13 = 0.0, $10 = 0, $14 = 0, $17 = 0.0, $20 = 0.0, $35 = 0, $4 = 0, $5 = 0;
 $4 = $0 + 32 | 0;
 $$01 = 1.0000000036274937e-15;
 $$02 = 1.0000000036274937e-15;
 $$05 = 0;
 L1 : while (1) {
  if (($$05 | 0) == 13) break;
  $5 = HEAP32[$4 >> 2] | 0;
  $10 = $$05 + 1 | 0;
  $14 = HEAP16[$5 + ($10 << 1) >> 1] << $2;
  $$0 = HEAP16[$5 + ($$05 << 1) >> 1] << $2;
  $$1 = $$01;
  $$13 = $$02;
  while (1) {
   if (($$0 | 0) >= ($14 | 0)) {
    $$01 = $$1;
    $$02 = $$13;
    $$05 = $10;
    continue L1;
   }
   $17 = +HEAPF32[$1 + ($$0 << 2) >> 2];
   $20 = +HEAPF32[$1 + ($$0 + $3 << 2) >> 2];
   $$0 = $$0 + 1 | 0;
   $$1 = $$1 + (+Math_abs(+($17 + $20)) + +Math_abs(+($17 - $20)));
   $$13 = $$13 + (+Math_abs(+$17) + +Math_abs(+$20));
  }
 }
 $35 = HEAP16[(HEAP32[$4 >> 2] | 0) + 26 >> 1] << $2 + 1;
 return +($35 + (($2 | 0) < 2 ? 5 : 13) | 0) * ($$01 * .7071070075035095) > +($35 | 0) * $$02 | 0;
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

function _silk_LPC_analysis_filter10_FLP($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $15 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 $4 = $1 + 4 | 0;
 $5 = $1 + 8 | 0;
 $6 = $1 + 12 | 0;
 $7 = $1 + 16 | 0;
 $8 = $1 + 20 | 0;
 $9 = $1 + 24 | 0;
 $10 = $1 + 28 | 0;
 $11 = $1 + 32 | 0;
 $12 = $1 + 36 | 0;
 $$0 = 10;
 while (1) {
  if (($$0 | 0) >= ($3 | 0)) break;
  $15 = $2 + ($$0 + -1 << 2) | 0;
  HEAPF32[$0 + ($$0 << 2) >> 2] = +HEAPF32[$15 + 4 >> 2] - (+HEAPF32[$15 >> 2] * +HEAPF32[$1 >> 2] + +HEAPF32[$15 + -4 >> 2] * +HEAPF32[$4 >> 2] + +HEAPF32[$15 + -8 >> 2] * +HEAPF32[$5 >> 2] + +HEAPF32[$15 + -12 >> 2] * +HEAPF32[$6 >> 2] + +HEAPF32[$15 + -16 >> 2] * +HEAPF32[$7 >> 2] + +HEAPF32[$15 + -20 >> 2] * +HEAPF32[$8 >> 2] + +HEAPF32[$15 + -24 >> 2] * +HEAPF32[$9 >> 2] + +HEAPF32[$15 + -28 >> 2] * +HEAPF32[$10 >> 2] + +HEAPF32[$15 + -32 >> 2] * +HEAPF32[$11 >> 2] + +HEAPF32[$15 + -36 >> 2] * +HEAPF32[$12 >> 2]);
  $$0 = $$0 + 1 | 0;
 }
 return;
}

function _silk_biquad_float($0, $$val, $$1$val, $$2$val, $$val1, $$1$val2, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $$val = $$val | 0;
 $$1$val = $$1$val | 0;
 $$2$val = $$2$val | 0;
 $$val1 = $$val1 | 0;
 $$1$val2 = $$1$val2 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $$0 = 0, $10 = 0.0, $12 = 0.0, $14 = 0.0, $15 = 0, $17 = 0, $19 = 0.0, $22 = 0.0, $6 = 0.0, $8 = 0.0;
 $6 = +($$val1 | 0) * 3.725290298461914e-09;
 $8 = +($$1$val2 | 0) * 3.725290298461914e-09;
 $10 = +($$val | 0) * 3.725290298461914e-09;
 $12 = +($$1$val | 0) * 3.725290298461914e-09;
 $14 = +($$2$val | 0) * 3.725290298461914e-09;
 $15 = $1 + 4 | 0;
 $$0 = 0;
 while (1) {
  if (($$0 | 0) >= ($3 | 0)) break;
  $17 = Math_imul($$0, $4) | 0;
  $19 = +HEAPF32[$0 + ($17 << 2) >> 2];
  $22 = +HEAPF32[$1 >> 2] + $10 * $19;
  HEAPF32[$1 >> 2] = +HEAPF32[$15 >> 2] - $22 * $6 + $12 * $19;
  HEAPF32[$15 >> 2] = $14 * $19 - $22 * $8 + 1.0000000031710769e-30;
  HEAPF32[$2 + ($17 << 2) >> 2] = $22;
  $$0 = $$0 + 1 | 0;
 }
 return;
}

function _silk_control_SNR($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$02 = 0, $$3 = 0, $16 = 0, $18 = 0, $20 = 0, $27 = 0, $4 = 0, $5 = 0, $9 = 0, $switch$select5 = 0, label = 0;
 $4 = ($1 | 0) > 8e4 ? 8e4 : ($1 | 0) > 5e3 ? $1 : 5e3;
 $5 = $0 + 4604 | 0;
 if (($4 | 0) == (HEAP32[$5 >> 2] | 0)) return;
 HEAP32[$5 >> 2] = $4;
 $9 = HEAP32[$0 + 4572 >> 2] | 0;
 $switch$select5 = ($9 | 0) == 8 ? 19108 : ($9 | 0) == 12 ? 19140 : 19172;
 $$3 = (HEAP32[$0 + 4576 >> 2] | 0) == 2 ? $4 + -2200 | 0 : $4;
 $$02 = 1;
 while (1) {
  if (($$02 | 0) >= 8) {
   label = 7;
   break;
  }
  $16 = HEAP32[$switch$select5 + ($$02 << 2) >> 2] | 0;
  if (($$3 | 0) <= ($16 | 0)) break;
  $$02 = $$02 + 1 | 0;
 }
 if ((label | 0) == 7) return;
 $18 = $$02 + -1 | 0;
 $20 = HEAP32[$switch$select5 + ($18 << 2) >> 2] | 0;
 $27 = HEAP16[27884 + ($18 << 1) >> 1] | 0;
 HEAP32[$0 + 4712 >> 2] = ($27 << 6) + (Math_imul(($$3 - $20 << 6 | 0) / ($16 - $20 | 0) | 0, (HEAP16[27884 + ($$02 << 1) >> 1] | 0) - $27 | 0) | 0);
 return;
}

function _median_of_5($0) {
 $0 = $0 | 0;
 var $$ = 0.0, $$0 = 0.0, $$01 = 0.0, $$05 = 0.0, $$1 = 0.0, $$11 = 0.0, $$14 = 0.0, $$16 = 0.0, $10 = 0.0, $11 = 0, $12 = 0, $2 = 0.0, $3 = 0.0, $5 = 0.0, $6 = 0, $8 = 0.0;
 $2 = +HEAPF32[$0 + 8 >> 2];
 $3 = +HEAPF32[$0 >> 2];
 $5 = +HEAPF32[$0 + 4 >> 2];
 $6 = $3 > $5;
 $$ = $6 ? $3 : $5;
 $$11 = $6 ? $5 : $3;
 $8 = +HEAPF32[$0 + 12 >> 2];
 $10 = +HEAPF32[$0 + 16 >> 2];
 $11 = $8 > $10;
 $$05 = $11 ? $10 : $8;
 $$01 = $11 ? $8 : $10;
 $12 = $$11 > $$05;
 $$16 = $12 ? $$11 : $$05;
 $$14 = $12 ? $$01 : $$;
 $$1 = $12 ? $$ : $$01;
 if ($2 > $$14) if ($$14 < $$16) {
  if ($2 < $$16) {
   $$0 = $2;
   return +$$0;
  }
  $$0 = $$16;
  return +$$0;
 } else {
  if ($$1 < $$14) {
   $$0 = $$1;
   return +$$0;
  }
  $$0 = $$14;
  return +$$0;
 } else if ($2 < $$16) {
  if ($$14 < $$16) {
   $$0 = $$14;
   return +$$0;
  }
  $$0 = $$16;
  return +$$0;
 } else {
  if ($2 < $$1) {
   $$0 = $2;
   return +$$0;
  }
  $$0 = $$1;
  return +$$0;
 }
 return +(0.0);
}

function _silk_residual_energy_FLP($0, $1, $2, $3, $4, $5, $6) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 var $10 = 0, $11 = 0.0, $18 = 0.0, $21 = 0, $30 = 0.0, $38 = 0.0, $7 = 0, $8 = 0, $9 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 768 | 0;
 $7 = sp;
 $8 = $7 + ($6 << 2) | 0;
 $9 = $6 + $4 | 0;
 $10 = $9 << 1;
 _silk_LPC_analysis_filter_FLP($7, $2, $1, $10, $6);
 $11 = +HEAPF32[$3 >> 2];
 HEAPF32[$0 >> 2] = $11 * $11 * +_silk_energy_FLP($8, $4);
 $18 = +HEAPF32[$3 + 4 >> 2];
 $21 = $8 + ($9 << 2) | 0;
 HEAPF32[$0 + 4 >> 2] = $18 * $18 * +_silk_energy_FLP($21, $4);
 if (($5 | 0) != 4) {
  STACKTOP = sp;
  return;
 }
 _silk_LPC_analysis_filter_FLP($7, $2 + 64 | 0, $1 + ($10 << 2) | 0, $10, $6);
 $30 = +HEAPF32[$3 + 8 >> 2];
 HEAPF32[$0 + 8 >> 2] = $30 * $30 * +_silk_energy_FLP($8, $4);
 $38 = +HEAPF32[$3 + 12 >> 2];
 HEAPF32[$0 + 12 >> 2] = $38 * $38 * +_silk_energy_FLP($21, $4);
 STACKTOP = sp;
 return;
}

function _silk_resampler_down2_hp($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0.0, $$01 = 0, $10 = 0.0, $11 = 0.0, $13 = 0.0, $14 = 0.0, $18 = 0.0, $19 = 0.0, $21 = 0.0, $26 = 0.0, $28 = 0.0, $30 = 0.0, $4 = 0, $5 = 0, $6 = 0, $8 = 0;
 $4 = ($3 | 0) / 2 | 0;
 $5 = $0 + 4 | 0;
 $6 = $0 + 8 | 0;
 $$0 = 0.0;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) >= ($4 | 0)) break;
  $8 = $$01 << 1;
  $10 = +HEAPF32[$2 + ($8 << 2) >> 2];
  $11 = +HEAPF32[$0 >> 2];
  $13 = ($10 - $11) * .6074370741844177;
  $14 = $11 + $13;
  HEAPF32[$0 >> 2] = $10 + $13;
  $18 = +HEAPF32[$2 + (($8 | 1) << 2) >> 2];
  $19 = +HEAPF32[$5 >> 2];
  $21 = ($18 - $19) * .15062999725341797;
  HEAPF32[$5 >> 2] = $18 + $21;
  $26 = +HEAPF32[$6 >> 2];
  $28 = (-$18 - $26) * .15062999725341797;
  $30 = $14 + $26 + $28;
  HEAPF32[$6 >> 2] = $28 - $18;
  HEAPF32[$1 + ($$01 << 2) >> 2] = ($14 + $19 + $21) * .5;
  $$0 = $$0 + $30 * $30;
  $$01 = $$01 + 1 | 0;
 }
 return +$$0;
}

function _opus_custom_encoder_init_arch($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ($2 >>> 0 > 2) {
  $$0 = -1;
  STACKTOP = sp;
  return $$0 | 0;
 }
 if (($0 | 0) == 0 | ($1 | 0) == 0) {
  $$0 = -7;
  STACKTOP = sp;
  return $$0 | 0;
 }
 _memset($0 | 0, 0, _opus_custom_encoder_get_size(HEAP32[$1 + 4 >> 2] | 0, HEAP32[$1 + 8 >> 2] | 0, $2) | 0) | 0;
 HEAP32[$0 >> 2] = $1;
 HEAP32[$0 + 4 >> 2] = $2;
 HEAP32[$0 + 8 >> 2] = $2;
 HEAP32[$0 + 28 >> 2] = 1;
 HEAP32[$0 + 32 >> 2] = 0;
 HEAP32[$0 + 36 >> 2] = HEAP32[$1 + 12 >> 2];
 HEAP32[$0 + 48 >> 2] = 1;
 HEAP32[$0 + 72 >> 2] = $3;
 HEAP32[$0 + 52 >> 2] = 1;
 HEAP32[$0 + 16 >> 2] = 1;
 HEAP32[$0 + 40 >> 2] = -1;
 HEAP32[$0 + 44 >> 2] = 0;
 HEAP32[$0 + 12 >> 2] = 0;
 HEAP32[$0 + 24 >> 2] = 5;
 HEAP32[$0 + 60 >> 2] = 24;
 _opus_custom_encoder_ctl($0, 4028, sp) | 0;
 $$0 = 0;
 STACKTOP = sp;
 return $$0 | 0;
}

function _silk_A2NLSF_init($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $$1 = 0, $13 = 0, $25 = 0, $26 = 0, $31 = 0, $9 = 0;
 HEAP32[$1 + ($3 << 2) >> 2] = 65536;
 HEAP32[$2 + ($3 << 2) >> 2] = 65536;
 $$0 = 0;
 while (1) {
  if (($$0 | 0) >= ($3 | 0)) {
   $$1 = $3;
   break;
  }
  $9 = $0 + ($3 - $$0 + -1 << 2) | 0;
  $13 = $0 + ($$0 + $3 << 2) | 0;
  HEAP32[$1 + ($$0 << 2) >> 2] = 0 - (HEAP32[$9 >> 2] | 0) - (HEAP32[$13 >> 2] | 0);
  HEAP32[$2 + ($$0 << 2) >> 2] = (HEAP32[$13 >> 2] | 0) - (HEAP32[$9 >> 2] | 0);
  $$0 = $$0 + 1 | 0;
 }
 while (1) {
  if (($$1 | 0) <= 0) break;
  $25 = $$1 + -1 | 0;
  $26 = $1 + ($25 << 2) | 0;
  HEAP32[$26 >> 2] = (HEAP32[$26 >> 2] | 0) - (HEAP32[$1 + ($$1 << 2) >> 2] | 0);
  $31 = $2 + ($25 << 2) | 0;
  HEAP32[$31 >> 2] = (HEAP32[$31 >> 2] | 0) + (HEAP32[$2 + ($$1 << 2) >> 2] | 0);
  $$1 = $25;
 }
 _silk_A2NLSF_trans_poly($1, $3);
 _silk_A2NLSF_trans_poly($2, $3);
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

function _silk_resampler_down2($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $11 = 0, $13 = 0, $19 = 0, $27 = 0, $28 = 0, $29 = 0, $35 = 0, $4 = 0, $41 = 0, $5 = 0, $7 = 0;
 $4 = $3 >> 1;
 $5 = $0 + 4 | 0;
 $$0 = 0;
 while (1) {
  if (($$0 | 0) >= ($4 | 0)) break;
  $7 = $$0 << 1;
  $11 = HEAP16[$2 + ($7 << 1) >> 1] << 10;
  $13 = $11 - (HEAP32[$0 >> 2] | 0) | 0;
  $19 = (Math_imul($13 >> 16, -25727) | 0) + ((Math_imul($13 & 65535, -25727) | 0) >> 16) | 0;
  HEAP32[$0 >> 2] = $11 + ($13 + $19);
  $27 = HEAP16[$2 + (($7 | 1) << 1) >> 1] << 10;
  $28 = HEAP32[$5 >> 2] | 0;
  $29 = $27 - $28 | 0;
  $35 = (($29 >> 16) * 9872 | 0) + ((($29 & 65535) * 9872 | 0) >>> 16) | 0;
  HEAP32[$5 >> 2] = $27 + $35;
  $41 = ($11 + $19 + $28 + $35 >> 10) + 1 >> 1;
  HEAP16[$1 + ($$0 << 1) >> 1] = ($41 | 0) > 32767 ? 32767 : (($41 | 0) > -32768 ? $41 : -32768) & 65535;
  $$0 = $$0 + 1 | 0;
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
  $15 = $$02 + (HEAP32[(HEAP32[1740 + ((($7 | 0) < ($$0 | 0) ? $7 : $$0) << 2) >> 2] | 0) + ((($7 | 0) > ($$0 | 0) ? $7 : $$0) << 2) >> 2] | 0) | 0;
  $17 = HEAP32[$1 + ($$01 << 2) >> 2] | 0;
  $$0 = $$0 + (($17 | 0) > -1 ? $17 : 0 - $17 | 0) | 0;
  if (($17 | 0) < 0) {
   $22 = $$0 + 1 | 0;
   $$1 = $15 + (HEAP32[(HEAP32[1740 + ((($7 | 0) > ($$0 | 0) ? $22 : $7) << 2) >> 2] | 0) + ((($7 | 0) > ($22 | 0) ? $7 : $22) << 2) >> 2] | 0) | 0;
  } else $$1 = $15;
  if (($$01$looptemp | 0) <= 1) break; else $$02 = $$1;
 }
 return $$1 | 0;
}

function _silk_encode_signs($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $12 = 0, $14 = 0, $17 = 0, $25 = 0, $6 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 $6 = sp;
 HEAP8[$6 + 1 >> 0] = 0;
 $12 = 33355 + ((($3 << 1) + $4 << 16 >> 16) * 7 | 0) | 0;
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
    $25 = HEAP8[$$0 + $$01 >> 0] | 0;
    if ($25 << 24 >> 24) _ec_enc_icdf($0, ($25 << 24 >> 24 >> 15) + 1 | 0, $6, 8);
    $$01 = $$01 + 1 | 0;
   }
  } while (0);
  $$0 = $$0 + 16 | 0;
  $$02 = $$02 + 1 | 0;
 }
 STACKTOP = sp;
 return;
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

function _frame_size_select($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $$1 = 0, $$12 = 0, $20 = 0, $3 = 0;
 $3 = ($2 | 0) / 400 | 0;
 if (($3 | 0) > ($0 | 0)) {
  $$0 = -1;
  return $$0 | 0;
 }
 if (($1 | 0) == 5e3) $$12 = $0; else {
  if (($1 + -5001 | 0) >>> 0 >= 9) {
   $$0 = -1;
   return $$0 | 0;
  }
  if (($1 | 0) < 5006) $$1 = $3 << $1 + -5001; else $$1 = (Math_imul($1 + -5003 | 0, $2) | 0) / 50 | 0;
  if (($$1 | 0) > ($0 | 0)) {
   $$0 = -1;
   return $$0 | 0;
  } else $$12 = $$1;
 }
 if (!(($$12 * 400 | 0) == ($2 | 0) | ($$12 * 200 | 0) == ($2 | 0) | ($$12 * 100 | 0) == ($2 | 0))) {
  $20 = $$12 * 50 | 0;
  if (!(($20 | 0) == ($2 | 0) | ($$12 * 25 | 0) == ($2 | 0) | ($20 | 0) == ($2 * 3 | 0) | ($20 | 0) == ($2 << 2 | 0) | ($20 | 0) == ($2 * 5 | 0) | ($20 | 0) == ($2 * 6 | 0))) {
   $$0 = -1;
   return $$0 | 0;
  }
 }
 $$0 = $$12;
 return $$0 | 0;
}

function _run_analysis($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) {
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
 var $$ = 0, $$0 = 0, $$01 = 0, $12 = 0, $15 = 0, $17 = 0, $18 = 0, $20 = 0;
 $12 = $3 & -2;
 if (!$2) {
  HEAP32[$11 >> 2] = 0;
  _tonality_get_info($0, $11, $4);
  return;
 }
 $15 = ($8 * 95 | 0) / 50 | 0;
 $$ = ($15 | 0) < ($12 | 0) ? $15 : $12;
 $17 = $0 + 7452 | 0;
 $18 = HEAP32[$17 >> 2] | 0;
 $20 = ($8 | 0) / 50 | 0;
 $$0 = $$ - $18 | 0;
 $$01 = $18;
 while (1) {
  if (($$0 | 0) <= 0) break;
  _tonality_analysis($0, $1, $2, ($$0 | 0) > ($20 | 0) ? $20 : $$0, $$01, $5, $6, $7, $9, $10);
  $$0 = $$0 - $20 | 0;
  $$01 = $$01 + $20 | 0;
 }
 HEAP32[$17 >> 2] = $$ - $4;
 HEAP32[$11 >> 2] = 0;
 _tonality_get_info($0, $11, $4);
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

function _silk_LPC_analysis_filter8_FLP($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $10 = 0, $13 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0;
 $4 = $1 + 4 | 0;
 $5 = $1 + 8 | 0;
 $6 = $1 + 12 | 0;
 $7 = $1 + 16 | 0;
 $8 = $1 + 20 | 0;
 $9 = $1 + 24 | 0;
 $10 = $1 + 28 | 0;
 $$0 = 8;
 while (1) {
  if (($$0 | 0) >= ($3 | 0)) break;
  $13 = $2 + ($$0 + -1 << 2) | 0;
  HEAPF32[$0 + ($$0 << 2) >> 2] = +HEAPF32[$13 + 4 >> 2] - (+HEAPF32[$13 >> 2] * +HEAPF32[$1 >> 2] + +HEAPF32[$13 + -4 >> 2] * +HEAPF32[$4 >> 2] + +HEAPF32[$13 + -8 >> 2] * +HEAPF32[$5 >> 2] + +HEAPF32[$13 + -12 >> 2] * +HEAPF32[$6 >> 2] + +HEAPF32[$13 + -16 >> 2] * +HEAPF32[$7 >> 2] + +HEAPF32[$13 + -20 >> 2] * +HEAPF32[$8 >> 2] + +HEAPF32[$13 + -24 >> 2] * +HEAPF32[$9 >> 2] + +HEAPF32[$13 + -28 >> 2] * +HEAPF32[$10 >> 2]);
  $$0 = $$0 + 1 | 0;
 }
 return;
}

function _silk_inner_product_FLP($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0.0, $$01 = 0, $$1 = 0.0, $$12 = 0, $15 = 0, $24 = 0, $3 = 0, $33 = 0, $6 = 0;
 $3 = $2 + -3 | 0;
 $6 = (($3 | 0) > 0 ? $3 : 0) + 3 & -4;
 $$0 = 0.0;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) >= ($3 | 0)) {
   $$1 = $$0;
   $$12 = $6;
   break;
  }
  $15 = $$01 | 1;
  $24 = $$01 | 2;
  $33 = $$01 | 3;
  $$0 = $$0 + (+HEAPF32[$0 + ($$01 << 2) >> 2] * +HEAPF32[$1 + ($$01 << 2) >> 2] + +HEAPF32[$0 + ($15 << 2) >> 2] * +HEAPF32[$1 + ($15 << 2) >> 2] + +HEAPF32[$0 + ($24 << 2) >> 2] * +HEAPF32[$1 + ($24 << 2) >> 2] + +HEAPF32[$0 + ($33 << 2) >> 2] * +HEAPF32[$1 + ($33 << 2) >> 2]);
  $$01 = $$01 + 4 | 0;
 }
 while (1) {
  if (($$12 | 0) >= ($2 | 0)) break;
  $$1 = $$1 + +HEAPF32[$0 + ($$12 << 2) >> 2] * +HEAPF32[$1 + ($$12 << 2) >> 2];
  $$12 = $$12 + 1 | 0;
 }
 return +$$1;
}

function _silk_apply_sine_window_FLP($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$03 = 0, $$1 = 0.0, $$12 = 0.0, $18 = 0, $24 = 0.0, $25 = 0, $32 = 0, $6 = 0.0, $8 = 0.0, $9 = 0;
 $6 = 3.1415927410125732 / +($3 + 1 | 0);
 $8 = 2.0 - $6 * $6;
 $9 = ($2 | 0) < 2;
 $$03 = 0;
 $$1 = $9 ? $6 : $8 * .5;
 $$12 = $9 ? 0.0 : 1.0;
 while (1) {
  if (($$03 | 0) >= ($3 | 0)) break;
  HEAPF32[$0 + ($$03 << 2) >> 2] = +HEAPF32[$1 + ($$03 << 2) >> 2] * .5 * ($$12 + $$1);
  $18 = $$03 | 1;
  HEAPF32[$0 + ($18 << 2) >> 2] = +HEAPF32[$1 + ($18 << 2) >> 2] * $$1;
  $24 = $8 * $$1 - $$12;
  $25 = $$03 | 2;
  HEAPF32[$0 + ($25 << 2) >> 2] = +HEAPF32[$1 + ($25 << 2) >> 2] * .5 * ($$1 + $24);
  $32 = $$03 | 3;
  HEAPF32[$0 + ($32 << 2) >> 2] = +HEAPF32[$1 + ($32 << 2) >> 2] * $24;
  $$03 = $$03 + 4 | 0;
  $$1 = $8 * $24 - $$1;
  $$12 = $24;
 }
 return;
}

function _compute_equiv_rate($0, $1, $2, $3, $4, $5, $6) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 var $$0 = 0, $$1 = 0, $$4 = 0, $11 = 0, $17 = 0;
 $11 = $0 - (Math_imul(($1 * 40 | 0) + 20 | 0, $2 + -50 | 0) | 0) | 0;
 if (!$3) $$0 = $11 - (($11 | 0) / 12 | 0) | 0; else $$0 = $11;
 $17 = (Math_imul($$0, $5 + 90 | 0) | 0) / 100 | 0;
 switch ($4 | 0) {
 case 1001:
 case 1e3:
  {
   if (($5 | 0) < 2) $$1 = ($17 << 2 | 0) / 5 | 0; else $$1 = $17;
   $$4 = $$1 - ((Math_imul($$1, $6) | 0) / (($6 * 6 | 0) + 10 | 0) | 0) | 0;
   return $$4 | 0;
  }
 case 1002:
  {
   if (($5 | 0) >= 5) {
    $$4 = $17;
    return $$4 | 0;
   }
   $$4 = ($17 * 9 | 0) / 10 | 0;
   return $$4 | 0;
  }
 default:
  {
   $$4 = $17 - ((Math_imul($17, $6) | 0) / (($6 * 12 | 0) + 20 | 0) | 0) | 0;
   return $$4 | 0;
  }
 }
 return 0;
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

function _compute_band_energies($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$0 = 0, $$01 = 0, $10 = 0, $11 = 0, $12 = 0, $16 = 0, $19 = 0, $20 = 0, $7 = 0, $sqrtf = 0.0;
 $7 = HEAP32[$0 + 32 >> 2] | 0;
 $10 = HEAP32[$0 + 44 >> 2] << $5;
 $11 = $0 + 8 | 0;
 $$0 = 0;
 do {
  $12 = Math_imul($$0, $10) | 0;
  $$01 = 0;
  while (1) {
   if (($$01 | 0) >= ($3 | 0)) break;
   $16 = HEAP16[$7 + ($$01 << 1) >> 1] | 0;
   $19 = $1 + ($12 + ($16 << $5) << 2) | 0;
   $20 = $$01 + 1 | 0;
   $sqrtf = +Math_sqrt(+(+_celt_inner_prod_c($19, $19, (HEAP16[$7 + ($20 << 1) >> 1] | 0) - $16 << $5) + 1.0000000272452012e-27));
   HEAPF32[$2 + ($$01 + (Math_imul($$0, HEAP32[$11 >> 2] | 0) | 0) << 2) >> 2] = $sqrtf;
   $$01 = $20;
  }
  $$0 = $$0 + 1 | 0;
 } while (($$0 | 0) < ($4 | 0));
 return;
}

function _silk_find_LTP_FLP($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$0 = 0, $$01 = 0, $$02 = 0, $$03 = 0, $11 = 0, $13 = 0.0, $19 = 0.0, $22 = 0.0, $6 = 0;
 $6 = $4 + 5 | 0;
 $$0 = $0;
 $$01 = $1;
 $$02 = $2;
 $$03 = 0;
 while (1) {
  if (($$03 | 0) >= ($5 | 0)) break;
  $11 = $$02 + (-2 - (HEAP32[$3 + ($$03 << 2) >> 2] | 0) << 2) | 0;
  _silk_corrMatrix_FLP($11, $4, $$0);
  _silk_corrVector_FLP($11, $$02, $4, $$01);
  $13 = +_silk_energy_FLP($$02, $6);
  $19 = (+HEAPF32[$$0 >> 2] + +HEAPF32[$$0 + 96 >> 2]) * .014999999664723873 + 1.0;
  $22 = 1.0 / ($13 > $19 ? $13 : $19);
  _silk_scale_vector_FLP($$0, $22, 25);
  _silk_scale_vector_FLP($$01, $22, 5);
  $$0 = $$0 + 100 | 0;
  $$01 = $$01 + 20 | 0;
  $$02 = $$02 + ($4 << 2) | 0;
  $$03 = $$03 + 1 | 0;
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

function _limit_coefs($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$0 = 0.0, $$01 = 0, $$03 = 0, $$04 = 0, $$12 = 0, $$2 = 0, $6 = 0, $fabsf = 0.0, label = 0;
 $$01 = 0;
 $$03 = 0;
 while (1) {
  if (($$03 | 0) < 10) {
   $$0 = -1.0;
   $$04 = 0;
   $$12 = $$01;
  } else {
   label = 7;
   break;
  }
  while (1) {
   if (($$04 | 0) >= ($1 | 0)) break;
   $fabsf = +Math_abs(+(+HEAPF32[$0 + ($$04 << 2) >> 2]));
   $6 = $fabsf > $$0;
   $$2 = $6 ? $$04 : $$12;
   $$0 = $6 ? $fabsf : $$0;
   $$04 = $$04 + 1 | 0;
   $$12 = $$2;
  }
  if ($$0 <= 3.999000072479248) {
   label = 7;
   break;
  }
  _silk_bwexpander_FLP($0, $1, .9900000095367432 - (+($$03 | 0) * .10000000149011612 + .800000011920929) * ($$0 + -3.999000072479248) / ($$0 * +($$12 + 1 | 0)));
  $$01 = $$12;
  $$03 = $$03 + 1 | 0;
 }
 if ((label | 0) == 7) return;
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

function _silk_VAD_Init($0) {
 $0 = $0 | 0;
 var $$0 = 0, $$1 = 0, $$2 = 0, $1 = 0, $7 = 0, dest = 0, stop = 0;
 dest = $0;
 stop = dest + 112 | 0;
 do {
  HEAP32[dest >> 2] = 0;
  dest = dest + 4 | 0;
 } while ((dest | 0) < (stop | 0));
 $$0 = 0;
 while (1) {
  if (($$0 | 0) == 4) {
   $$1 = 0;
   break;
  }
  $1 = $$0 + 1 | 0;
  HEAP32[$0 + 92 + ($$0 << 2) >> 2] = _silk_max_32_216(50 / ($1 | 0) | 0) | 0;
  $$0 = $1;
 }
 while (1) {
  if (($$1 | 0) == 4) break;
  $7 = (HEAP32[$0 + 92 + ($$1 << 2) >> 2] | 0) * 100 | 0;
  HEAP32[$0 + 60 + ($$1 << 2) >> 2] = $7;
  HEAP32[$0 + 76 + ($$1 << 2) >> 2] = 2147483647 / ($7 | 0) | 0;
  $$1 = $$1 + 1 | 0;
 }
 HEAP32[$0 + 108 >> 2] = 15;
 $$2 = 0;
 while (1) {
  if (($$2 | 0) == 4) break;
  HEAP32[$0 + 40 + ($$2 << 2) >> 2] = 25600;
  $$2 = $$2 + 1 | 0;
 }
 return 0;
}

function _opus_packet_pad($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $10 = 0, $14 = 0, $3 = 0, $9 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 304 | 0;
 $3 = sp;
 if (($1 | 0) < 1) {
  $$0 = -1;
  STACKTOP = sp;
  return $$0 | 0;
 }
 if (($1 | 0) == ($2 | 0)) {
  $$0 = 0;
  STACKTOP = sp;
  return $$0 | 0;
 }
 if (($1 | 0) > ($2 | 0)) {
  $$0 = -1;
  STACKTOP = sp;
  return $$0 | 0;
 }
 _opus_repacketizer_init($3);
 $9 = $0 + $2 + (0 - $1) | 0;
 _memmove($9 | 0, $0 | 0, $1 | 0) | 0;
 $10 = _opus_repacketizer_cat($3, $9, $1) | 0;
 if (!$10) {
  $14 = _opus_repacketizer_out_range_impl($3, HEAP32[$3 + 4 >> 2] | 0, $0, $2, 1) | 0;
  STACKTOP = sp;
  return (($14 | 0) < 0 ? $14 : 0) | 0;
 } else {
  $$0 = $10;
  STACKTOP = sp;
  return $$0 | 0;
 }
 return 0;
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

function _amp2Log2($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$0 = 0, $$01 = 0, $$1 = 0, $10 = 0, $16 = 0.0, $6 = 0;
 $6 = $0 + 8 | 0;
 $$01 = 0;
 do {
  $$0 = 0;
  while (1) {
   if (($$0 | 0) >= ($1 | 0)) {
    $$1 = $1;
    break;
   }
   $10 = $$0 + (Math_imul($$01, HEAP32[$6 >> 2] | 0) | 0) | 0;
   $16 = +Math_log(+(+HEAPF32[$3 + ($10 << 2) >> 2])) * 1.4426950408889634;
   HEAPF32[$4 + ($10 << 2) >> 2] = $16 - +HEAPF32[18836 + ($$0 << 2) >> 2];
   $$0 = $$0 + 1 | 0;
  }
  while (1) {
   if (($$1 | 0) >= ($2 | 0)) break;
   HEAPF32[$4 + ((Math_imul($$01, HEAP32[$6 >> 2] | 0) | 0) + $$1 << 2) >> 2] = -14.0;
   $$1 = $$1 + 1 | 0;
  }
  $$01 = $$01 + 1 | 0;
 } while (($$01 | 0) < ($5 | 0));
 return;
}

function _silk_scale_copy_vector_FLP($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = +$2;
 $3 = $3 | 0;
 var $$0 = 0, $$1 = 0, $10 = 0, $15 = 0, $20 = 0, $4 = 0;
 $4 = $3 & 65532;
 $$0 = 0;
 while (1) {
  if (($$0 | 0) >= ($4 | 0)) {
   $$1 = $4;
   break;
  }
  HEAPF32[$0 + ($$0 << 2) >> 2] = +HEAPF32[$1 + ($$0 << 2) >> 2] * $2;
  $10 = $$0 | 1;
  HEAPF32[$0 + ($10 << 2) >> 2] = +HEAPF32[$1 + ($10 << 2) >> 2] * $2;
  $15 = $$0 | 2;
  HEAPF32[$0 + ($15 << 2) >> 2] = +HEAPF32[$1 + ($15 << 2) >> 2] * $2;
  $20 = $$0 | 3;
  HEAPF32[$0 + ($20 << 2) >> 2] = +HEAPF32[$1 + ($20 << 2) >> 2] * $2;
  $$0 = $$0 + 4 | 0;
 }
 while (1) {
  if (($$1 | 0) >= ($3 | 0)) break;
  HEAPF32[$0 + ($$1 << 2) >> 2] = +HEAPF32[$1 + ($$1 << 2) >> 2] * $2;
  $$1 = $$1 + 1 | 0;
 }
 return;
}

function _silk_energy_FLP($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$0 = 0.0, $$01 = 0, $$1 = 0.0, $$12 = 0, $14 = 0.0, $2 = 0, $20 = 0.0, $26 = 0.0, $34 = 0.0, $5 = 0, $9 = 0.0;
 $2 = $1 + -3 | 0;
 $5 = (($2 | 0) > 0 ? $2 : 0) + 3 & -4;
 $$0 = 0.0;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) >= ($2 | 0)) {
   $$1 = $$0;
   $$12 = $5;
   break;
  }
  $9 = +HEAPF32[$0 + ($$01 << 2) >> 2];
  $14 = +HEAPF32[$0 + (($$01 | 1) << 2) >> 2];
  $20 = +HEAPF32[$0 + (($$01 | 2) << 2) >> 2];
  $26 = +HEAPF32[$0 + (($$01 | 3) << 2) >> 2];
  $$0 = $$0 + ($9 * $9 + $14 * $14 + $20 * $20 + $26 * $26);
  $$01 = $$01 + 4 | 0;
 }
 while (1) {
  if (($$12 | 0) >= ($1 | 0)) break;
  $34 = +HEAPF32[$0 + ($$12 << 2) >> 2];
  $$1 = $$1 + $34 * $34;
  $$12 = $$12 + 1 | 0;
 }
 return +$$1;
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

function _silk_scale_vector_FLP($0, $1, $2) {
 $0 = $0 | 0;
 $1 = +$1;
 $2 = $2 | 0;
 var $$0 = 0, $$1 = 0, $13 = 0, $17 = 0, $22 = 0, $3 = 0, $5 = 0, $9 = 0;
 $3 = $2 & 65532;
 $$0 = 0;
 while (1) {
  if (($$0 | 0) >= ($3 | 0)) {
   $$1 = $3;
   break;
  }
  $5 = $0 + ($$0 << 2) | 0;
  HEAPF32[$5 >> 2] = +HEAPF32[$5 >> 2] * $1;
  $9 = $0 + (($$0 | 1) << 2) | 0;
  HEAPF32[$9 >> 2] = +HEAPF32[$9 >> 2] * $1;
  $13 = $0 + (($$0 | 2) << 2) | 0;
  HEAPF32[$13 >> 2] = +HEAPF32[$13 >> 2] * $1;
  $17 = $0 + (($$0 | 3) << 2) | 0;
  HEAPF32[$17 >> 2] = +HEAPF32[$17 >> 2] * $1;
  $$0 = $$0 + 4 | 0;
 }
 while (1) {
  if (($$1 | 0) >= ($2 | 0)) break;
  $22 = $0 + ($$1 << 2) | 0;
  HEAPF32[$22 >> 2] = +HEAPF32[$22 >> 2] * $1;
  $$1 = $$1 + 1 | 0;
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

function _silk_LPC_analysis_filter6_FLP($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $11 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0;
 $4 = $1 + 4 | 0;
 $5 = $1 + 8 | 0;
 $6 = $1 + 12 | 0;
 $7 = $1 + 16 | 0;
 $8 = $1 + 20 | 0;
 $$0 = 6;
 while (1) {
  if (($$0 | 0) >= ($3 | 0)) break;
  $11 = $2 + ($$0 + -1 << 2) | 0;
  HEAPF32[$0 + ($$0 << 2) >> 2] = +HEAPF32[$11 + 4 >> 2] - (+HEAPF32[$11 >> 2] * +HEAPF32[$1 >> 2] + +HEAPF32[$11 + -4 >> 2] * +HEAPF32[$4 >> 2] + +HEAPF32[$11 + -8 >> 2] * +HEAPF32[$5 >> 2] + +HEAPF32[$11 + -12 >> 2] * +HEAPF32[$6 >> 2] + +HEAPF32[$11 + -16 >> 2] * +HEAPF32[$7 >> 2] + +HEAPF32[$11 + -20 >> 2] * +HEAPF32[$8 >> 2]);
  $$0 = $$0 + 1 | 0;
 }
 return;
}

function _ec_enc_icdf($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $13 = 0, $14 = 0, $4 = 0, $5 = 0, $6 = 0, $9 = 0, $storemerge = 0;
 $4 = $0 + 28 | 0;
 $5 = HEAP32[$4 >> 2] | 0;
 $6 = $5 >>> $3;
 if (($1 | 0) > 0) {
  $9 = $2 + ($1 + -1) | 0;
  $13 = $5 - (Math_imul($6, HEAPU8[$9 >> 0] | 0) | 0) | 0;
  $14 = $0 + 32 | 0;
  HEAP32[$14 >> 2] = (HEAP32[$14 >> 2] | 0) + $13;
  $storemerge = Math_imul($6, (HEAPU8[$9 >> 0] | 0) - (HEAPU8[$2 + $1 >> 0] | 0) | 0) | 0;
  HEAP32[$4 >> 2] = $storemerge;
  _ec_enc_normalize($0);
  return;
 } else {
  $storemerge = $5 - (Math_imul($6, HEAPU8[$2 + $1 >> 0] | 0) | 0) | 0;
  HEAP32[$4 >> 2] = $storemerge;
  _ec_enc_normalize($0);
  return;
 }
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

function _silk_LP_variable_cutoff($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $11 = 0, $12 = 0, $17 = 0, $3 = 0, $4 = 0, $5 = 0, $8 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 $3 = sp + 8 | 0;
 $4 = sp;
 $5 = $0 + 12 | 0;
 if (!(HEAP32[$5 >> 2] | 0)) {
  STACKTOP = sp;
  return;
 }
 $8 = $0 + 8 | 0;
 $11 = 256 - (HEAP32[$8 >> 2] | 0) << 10;
 $12 = $11 >> 16;
 _silk_LP_interpolate_filter_taps($3, $4, $12, $11 - ($12 << 16) | 0);
 $17 = (HEAP32[$8 >> 2] | 0) + (HEAP32[$5 >> 2] | 0) | 0;
 HEAP32[$8 >> 2] = ($17 | 0) > 256 ? 256 : ($17 | 0) > 0 ? $17 : 0;
 _silk_biquad_alt_stride1($1, $3, HEAP32[$4 >> 2] | 0, HEAP32[$4 + 4 >> 2] | 0, $0, $1, $2);
 STACKTOP = sp;
 return;
}

function _fast_atan2f_457($0, $1) {
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

function _ec_enc_patch_initial_bits($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $10 = 0, $18 = 0, $19 = 0, $29 = 0, $3 = 0, $6 = 0;
 $3 = 8 - $2 | 0;
 $6 = (1 << $2) + -1 << $3;
 if (HEAP32[$0 + 24 >> 2] | 0) {
  $10 = HEAP32[$0 >> 2] | 0;
  HEAP8[$10 >> 0] = (HEAPU8[$10 >> 0] | 0) & ($6 ^ 255) | $1 << $3;
  return;
 }
 $18 = $0 + 40 | 0;
 $19 = HEAP32[$18 >> 2] | 0;
 if (($19 | 0) > -1) {
  HEAP32[$18 >> 2] = $19 & ~$6 | $1 << $3;
  return;
 }
 if ((HEAP32[$0 + 28 >> 2] | 0) >>> 0 > -2147483648 >>> $2 >>> 0) {
  HEAP32[$0 + 44 >> 2] = -1;
  return;
 } else {
  $29 = $0 + 32 | 0;
  HEAP32[$29 >> 2] = HEAP32[$29 >> 2] & ~($6 << 23) | $1 << $3 + 23;
  return;
 }
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

function _silk_k2a_FLP($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $$01 = 0, $10 = 0.0, $13 = 0, $14 = 0.0, $5 = 0.0, $6 = 0, $7 = 0, $9 = 0;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) >= ($2 | 0)) break;
  $5 = +HEAPF32[$1 + ($$01 << 2) >> 2];
  $6 = $$01 + 1 | 0;
  $7 = $6 >> 1;
  $$0 = 0;
  while (1) {
   if (($$0 | 0) >= ($7 | 0)) break;
   $9 = $0 + ($$0 << 2) | 0;
   $10 = +HEAPF32[$9 >> 2];
   $13 = $0 + ($$01 - $$0 + -1 << 2) | 0;
   $14 = +HEAPF32[$13 >> 2];
   HEAPF32[$9 >> 2] = $10 + $14 * $5;
   HEAPF32[$13 >> 2] = $14 + $10 * $5;
   $$0 = $$0 + 1 | 0;
  }
  HEAPF32[$0 + ($$01 << 2) >> 2] = -$5;
  $$01 = $6;
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

function _silk_encode_do_VAD_FLP($0) {
 $0 = $0 | 0;
 var $$sink = 0, $6 = 0, $7 = 0, $8 = 0;
 _silk_VAD_GetSA_Q8_c($0, $0 + 5094 | 0);
 do if ((HEAP32[$0 + 4528 >> 2] | 0) < 13) {
  HEAP8[$0 + 4761 >> 0] = 0;
  $6 = $0 + 6080 | 0;
  $7 = HEAP32[$6 >> 2] | 0;
  $8 = $7 + 1 | 0;
  HEAP32[$6 >> 2] = $8;
  if (($8 | 0) >= 10) {
   if (($7 | 0) <= 29) {
    $$sink = 0;
    break;
   }
   HEAP32[$6 >> 2] = 10;
  }
  HEAP32[$0 + 6076 >> 2] = 0;
  $$sink = 0;
 } else {
  HEAP32[$0 + 6080 >> 2] = 0;
  HEAP32[$0 + 6076 >> 2] = 0;
  HEAP8[$0 + 4761 >> 0] = 1;
  $$sink = 1;
 } while (0);
 HEAP8[(HEAP32[$0 + 5744 >> 2] | 0) + ($0 + 4716) >> 0] = $$sink;
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

function _decide_dtx_mode($0, $1, $2, $3, $4, $5, $6) {
 $0 = +$0;
 $1 = $1 | 0;
 $2 = +$2;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 $6 = $6 | 0;
 var $$0 = 0, $11 = 0, $12 = 0, $8 = 0;
 do if (!$6) {
  $8 = $0 < .10000000149011612;
  if ($8) if (!(!(+_compute_frame_energy($3, $4, $5) * 316.2300109863281 <= $2) | $8 ^ 1)) break;
  HEAP32[$1 >> 2] = 0;
  $$0 = 0;
  return $$0 | 0;
 } while (0);
 $11 = HEAP32[$1 >> 2] | 0;
 $12 = $11 + 1 | 0;
 HEAP32[$1 >> 2] = $12;
 if (($11 | 0) <= 9) {
  $$0 = 0;
  return $$0 | 0;
 }
 if (($12 | 0) < 31) {
  $$0 = 1;
  return $$0 | 0;
 }
 HEAP32[$1 >> 2] = 10;
 $$0 = 0;
 return $$0 | 0;
}

function _special_hybrid_folding($$0$5$val, $0, $1, $2, $3, $4) {
 $$0$5$val = $$0$5$val | 0;
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $13 = 0, $19 = 0, $22 = 0, $25 = 0, $8 = 0;
 $8 = HEAP16[$$0$5$val + ($2 + 1 << 1) >> 1] | 0;
 $13 = Math_imul($8 - (HEAP16[$$0$5$val + ($2 << 1) >> 1] | 0) | 0, $3) | 0;
 $19 = Math_imul((HEAP16[$$0$5$val + ($2 + 2 << 1) >> 1] | 0) - $8 | 0, $3) | 0;
 $22 = ($13 << 1) - $19 | 0;
 $25 = $19 - $13 << 2;
 _memcpy($0 + ($13 << 2) | 0, $0 + ($22 << 2) | 0, $25 | 0) | 0;
 if (!$4) return;
 _memcpy($1 + ($13 << 2) | 0, $1 + ($22 << 2) | 0, $25 | 0) | 0;
 return;
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

function _loss_distortion($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 $5 = $5 | 0;
 var $$0 = 0.0, $$01 = 0, $$02 = 0, $$1 = 0.0, $13 = 0.0, $6 = 0, $8 = 0;
 $$0 = 0.0;
 $$02 = 0;
 while (1) {
  $6 = Math_imul($$02, $4) | 0;
  $$01 = $2;
  $$1 = $$0;
  while (1) {
   if (($$01 | 0) >= ($3 | 0)) break;
   $8 = $$01 + $6 | 0;
   $13 = +HEAPF32[$0 + ($8 << 2) >> 2] - +HEAPF32[$1 + ($8 << 2) >> 2];
   $$01 = $$01 + 1 | 0;
   $$1 = $$1 + $13 * $13;
  }
  $$02 = $$02 + 1 | 0;
  if (($$02 | 0) >= ($5 | 0)) break; else $$0 = $$1;
 }
 return +($$1 > 200.0 ? 200.0 : $$1);
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

function _silk_LPC_analysis_filter_FLP($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 switch ($4 | 0) {
 case 6:
  {
   _silk_LPC_analysis_filter6_FLP($0, $1, $2, $3);
   break;
  }
 case 8:
  {
   _silk_LPC_analysis_filter8_FLP($0, $1, $2, $3);
   break;
  }
 case 10:
  {
   _silk_LPC_analysis_filter10_FLP($0, $1, $2, $3);
   break;
  }
 case 12:
  {
   _silk_LPC_analysis_filter12_FLP($0, $1, $2, $3);
   break;
  }
 case 16:
  {
   _silk_LPC_analysis_filter16_FLP($0, $1, $2, $3);
   break;
  }
 default:
  {}
 }
 _memset($0 | 0, 0, $4 << 2 | 0) | 0;
 return;
}

function _user_bitrate_to_bitrate($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $$01 = 0, $10 = 0, $8 = 0;
 if (!$1) $$01 = (HEAP32[$0 + 144 >> 2] | 0) / 400 | 0; else $$01 = $1;
 $8 = HEAP32[$0 + 164 >> 2] | 0;
 switch ($8 | 0) {
 case -1e3:
  {
   $10 = HEAP32[$0 + 144 >> 2] | 0;
   $$0 = (($10 * 60 | 0) / ($$01 | 0) | 0) + (Math_imul($10, HEAP32[$0 + 112 >> 2] | 0) | 0) | 0;
   return $$0 | 0;
  }
 case -1:
  {
   $$0 = (Math_imul($2 << 3, HEAP32[$0 + 144 >> 2] | 0) | 0) / ($$01 | 0) | 0;
   return $$0 | 0;
  }
 default:
  {
   $$0 = $8;
   return $$0 | 0;
  }
 }
 return 0;
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

function _ec_encode_bin($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $10 = 0, $3 = 0, $4 = 0, $5 = 0, $9 = 0, $storemerge = 0;
 $3 = $0 + 28 | 0;
 $4 = HEAP32[$3 >> 2] | 0;
 $5 = $4 >>> 15;
 if (!$1) {
  $storemerge = $4 - (Math_imul($5, 32768 - $2 | 0) | 0) | 0;
  HEAP32[$3 >> 2] = $storemerge;
  _ec_enc_normalize($0);
  return;
 } else {
  $9 = $4 - (Math_imul($5, 32768 - $1 | 0) | 0) | 0;
  $10 = $0 + 32 | 0;
  HEAP32[$10 >> 2] = (HEAP32[$10 >> 2] | 0) + $9;
  $storemerge = Math_imul($5, $2 - $1 | 0) | 0;
  HEAP32[$3 >> 2] = $storemerge;
  _ec_enc_normalize($0);
  return;
 }
}

function _silk_process_NLSFs_FLP($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $$01 = 0, $4 = 0, $5 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 $4 = sp;
 _silk_process_NLSFs($0, $4, $2, $3);
 $5 = $0 + 4636 | 0;
 $$0 = 0;
 while (1) {
  if (($$0 | 0) == 2) break; else $$01 = 0;
  while (1) {
   if (($$01 | 0) >= (HEAP32[$5 >> 2] | 0)) break;
   HEAPF32[$1 + ($$0 << 6) + ($$01 << 2) >> 2] = +(HEAP16[$4 + ($$0 << 5) + ($$01 << 1) >> 1] | 0) * .000244140625;
   $$01 = $$01 + 1 | 0;
  }
  $$0 = $$0 + 1 | 0;
 }
 STACKTOP = sp;
 return;
}

function _hysteresis_decision($0, $1) {
 $0 = +$0;
 $1 = $1 | 0;
 var $$0 = 0, $$2 = 0, $15 = 0;
 $$0 = 0;
 while (1) {
  if (($$0 | 0) >= 21) break;
  if (+HEAPF32[1572 + ($$0 << 2) >> 2] > $0) break;
  $$0 = $$0 + 1 | 0;
 }
 if (($$0 | 0) > ($1 | 0)) if (+HEAPF32[1572 + ($1 << 2) >> 2] + +HEAPF32[1656 + ($1 << 2) >> 2] > $0) {
  $$2 = $1;
  return $$2 | 0;
 }
 if (($$0 | 0) >= ($1 | 0)) {
  $$2 = $$0;
  return $$2 | 0;
 }
 $15 = $1 + -1 | 0;
 if (!(+HEAPF32[1572 + ($15 << 2) >> 2] - +HEAPF32[1656 + ($15 << 2) >> 2] < $0)) {
  $$2 = $$0;
  return $$2 | 0;
 }
 $$2 = $1;
 return $$2 | 0;
}

function _silk_sigm_Q15($0) {
 $0 = $0 | 0;
 var $$0 = 0, $14 = 0, $2 = 0, $4 = 0;
 if (($0 | 0) < 0) {
  $2 = 0 - $0 | 0;
  if (($0 | 0) < -191) {
   $$0 = 0;
   return $$0 | 0;
  }
  $4 = $2 >> 5;
  $$0 = (HEAP32[19328 + ($4 << 2) >> 2] | 0) - (Math_imul(HEAP32[19352 + ($4 << 2) >> 2] << 16 >> 16, $2 & 31) | 0) | 0;
  return $$0 | 0;
 } else {
  if (($0 | 0) > 191) {
   $$0 = 32767;
   return $$0 | 0;
  }
  $14 = $0 >> 5;
  $$0 = (HEAP32[19376 + ($14 << 2) >> 2] | 0) + (Math_imul(HEAP32[19352 + ($14 << 2) >> 2] << 16 >> 16, $0 & 31) | 0) | 0;
  return $$0 | 0;
 }
 return 0;
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

function _silk_SQRT_APPROX_348($0) {
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
 _silk_CLZ_FRAC_349($0, $1, $2);
 $4 = HEAP32[$1 >> 2] | 0;
 $8 = (($4 & 1 | 0) == 0 ? 46214 : 32768) >>> ($4 >> 1);
 $12 = (Math_imul(HEAP32[$2 >> 2] << 16 >> 16, 13959168) | 0) >> 16;
 $$0 = $8 + ((Math_imul($8 >> 16, $12) | 0) + ((Math_imul($8 & 65535, $12) | 0) >> 16)) | 0;
 STACKTOP = sp;
 return $$0 | 0;
}

function _silk_SQRT_APPROX_218($0) {
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
 _silk_CLZ_FRAC_219($0, $1, $2);
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
 $$01 = (HEAP16[24052 + (($17 & 7) << 1) >> 1] >> 14 - ($17 >> 3)) + 1 & -2;
 return $$01 | 0;
}

function __celt_autocorr($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$01 = 0, $$03 = 0.0, $$2 = 0, $14 = 0, $3 = 0;
 $3 = $2 + -4 | 0;
 _celt_pitch_xcorr_c($0, $0, $1, $3, 5);
 $$01 = 0;
 while (1) {
  if (($$01 | 0) == 5) break;
  $$03 = 0.0;
  $$2 = $$01 + $3 | 0;
  while (1) {
   if (($$2 | 0) >= ($2 | 0)) break;
   $$03 = $$03 + +HEAPF32[$0 + ($$2 << 2) >> 2] * +HEAPF32[$0 + ($$2 - $$01 << 2) >> 2];
   $$2 = $$2 + 1 | 0;
  }
  $14 = $1 + ($$01 << 2) | 0;
  HEAPF32[$14 >> 2] = +HEAPF32[$14 >> 2] + $$03;
  $$01 = $$01 + 1 | 0;
 }
 return;
}

function _gen_toc($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$01 = 0, $$03 = 0, $$1$in = 0;
 $$01 = $1;
 $$03 = 0;
 while (1) {
  if (($$01 | 0) >= 400) break;
  $$01 = $$01 << 1;
  $$03 = $$03 + 1 | 0;
 }
 switch ($0 | 0) {
 case 1e3:
  {
   $$1$in = ($2 << 5) + 96 & 224 | ($$03 << 3) + -16;
   break;
  }
 case 1002:
  {
   $$1$in = (($2 | 0) < 1102 ? 0 : ($2 << 5) + 64 & 96) | $$03 << 3 | 128;
   break;
  }
 default:
  $$1$in = $2 << 4 | ($$03 << 3) + 240 | 96;
 }
 return ($$1$in | (($3 | 0) == 2 & 1) << 2) & 255 | 0;
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

function _opus_fft_c($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $10 = 0.0, $4 = 0.0, $5 = 0;
 $4 = +HEAPF32[$0 + 4 >> 2];
 $5 = $0 + 44 | 0;
 $$0 = 0;
 while (1) {
  if (($$0 | 0) >= (HEAP32[$0 >> 2] | 0)) break;
  $10 = +HEAPF32[$1 + ($$0 << 3) + 4 >> 2];
  HEAPF32[$2 + (HEAP16[(HEAP32[$5 >> 2] | 0) + ($$0 << 1) >> 1] << 3) >> 2] = $4 * +HEAPF32[$1 + ($$0 << 3) >> 2];
  HEAPF32[$2 + (HEAP16[(HEAP32[$5 >> 2] | 0) + ($$0 << 1) >> 1] << 3) + 4 >> 2] = $4 * $10;
  $$0 = $$0 + 1 | 0;
 }
 _opus_fft_impl($0, $2);
 return;
}

function _combine_and_check($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $$01 = 0, $11 = 0, $5 = 0, label = 0;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) >= ($3 | 0)) {
   $$0 = 0;
   label = 5;
   break;
  }
  $5 = $$01 << 1;
  $11 = (HEAP32[$1 + ($5 << 2) >> 2] | 0) + (HEAP32[$1 + (($5 | 1) << 2) >> 2] | 0) | 0;
  if (($11 | 0) > ($2 | 0)) {
   $$0 = 1;
   label = 5;
   break;
  }
  HEAP32[$0 + ($$01 << 2) >> 2] = $11;
  $$01 = $$01 + 1 | 0;
 }
 if ((label | 0) == 5) return $$0 | 0;
 return 0;
}

function _silk_A2NLSF_trans_poly($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$0 = 0, $$01 = 0, $15 = 0, $7 = 0;
 $$01 = 2;
 while (1) {
  if (($$01 | 0) > ($1 | 0)) break; else $$0 = $1;
  while (1) {
   if (($$0 | 0) <= ($$01 | 0)) break;
   $7 = $0 + ($$0 + -2 << 2) | 0;
   HEAP32[$7 >> 2] = (HEAP32[$7 >> 2] | 0) - (HEAP32[$0 + ($$0 << 2) >> 2] | 0);
   $$0 = $$0 + -1 | 0;
  }
  $15 = $0 + ($$01 + -2 << 2) | 0;
  HEAP32[$15 >> 2] = (HEAP32[$15 >> 2] | 0) - (HEAP32[$0 + ($$01 << 2) >> 2] << 1);
  $$01 = $$01 + 1 | 0;
 }
 return;
}

function _tansig_approx($0) {
 $0 = +$0;
 var $$0 = 0.0, $$01 = 0.0, $11 = 0.0, $13 = 0.0, $4 = 0, $8 = 0;
 if (!($0 < 8.0)) {
  $$0 = 1.0;
  return +$$0;
 }
 if (!($0 > -8.0)) {
  $$0 = -1.0;
  return +$$0;
 }
 if ($0 != $0 | 0.0 != 0.0) {
  $$0 = 0.0;
  return +$$0;
 }
 $4 = $0 < 0.0;
 $$01 = $4 ? -$0 : $0;
 $8 = ~~+Math_floor(+($$01 * 25.0 + .5));
 $11 = $$01 - +($8 | 0) * .03999999910593033;
 $13 = +HEAPF32[21196 + ($8 << 2) >> 2];
 $$0 = ($4 ? -1.0 : 1.0) * ($13 + $11 * (1.0 - $13 * $13) * (1.0 - $13 * $11));
 return +$$0;
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

function _opus_encoder_get_size($0) {
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
 if (_silk_Get_Encoder_Size($1) | 0) {
  $$0 = 0;
  STACKTOP = sp;
  return $$0 | 0;
 }
 $6 = _align_421(HEAP32[$1 >> 2] | 0) | 0;
 HEAP32[$1 >> 2] = $6;
 $7 = _celt_encoder_get_size($0) | 0;
 $$0 = (_align_421(18036) | 0) + $6 + $7 | 0;
 STACKTOP = sp;
 return $$0 | 0;
}

function _dual_inner_prod_c_56($0, $1, $2, $3, $4, $5) {
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

function _compute_redundancy_bytes($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$ = 0, $10 = 0, $19 = 0, $5 = 0;
 $5 = ($3 * 40 | 0) + 20 | 0;
 $10 = (((Math_imul($5, 200 - $2 | 0) | 0) + $1 | 0) * 3 | 0) / 3200 | 0;
 $19 = ((((($0 << 3) - ($5 << 1) | 0) * 240 | 0) / ((48e3 / ($2 | 0) | 0) + 240 | 0) | 0) + $5 | 0) / 8 | 0;
 $$ = ($10 | 0) < ($19 | 0) ? $10 : $19;
 if (($$ | 0) > ($3 << 3 | 4 | 0)) return (($$ | 0) < 257 ? $$ : 257) | 0; else return 0;
 return 0;
}

function _silk_LTP_scale_ctrl_FLP($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$sink = 0, $13 = 0.0;
 if (!$2) {
  $13 = +((HEAP32[$0 + 4612 >> 2] | 0) + (HEAP32[$0 + 5740 >> 2] | 0) | 0) * +HEAPF32[$1 + 708 >> 2] * .10000000149011612;
  if ($13 > 2.0) $$sink = 2; else if ($13 < 0.0) $$sink = 0; else $$sink = ~~$13;
 } else $$sink = 0;
 HEAP8[$0 + 4765 >> 0] = $$sink;
 HEAPF32[$1 + 224 >> 2] = +(HEAP16[27940 + ($$sink << 24 >> 24 << 1) >> 1] | 0) * .00006103515625;
 return;
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
 _ec_enc_uint($3, $4, (HEAP32[(HEAP32[1740 + ((($1 | 0) < ($2 | 0) ? $1 : $2) << 2) >> 2] | 0) + (($8 ? $1 : $2) << 2) >> 2] | 0) + (HEAP32[(HEAP32[1740 + (($8 ? $12 : $1) << 2) >> 2] | 0) + ((($12 | 0) < ($1 | 0) ? $1 : $12) << 2) >> 2] | 0) | 0);
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

function _silk_setup_LBRR($0, $$0$11$val) {
 $0 = $0 | 0;
 $$0$11$val = $$0$11$val | 0;
 var $$sink = 0, $1 = 0, $2 = 0, $6 = 0;
 $1 = $0 + 6088 | 0;
 $2 = HEAP32[$1 >> 2] | 0;
 HEAP32[$1 >> 2] = $$0$11$val;
 if (!$$0$11$val) return 0;
 if (!$2) $$sink = 7; else {
  $6 = HEAP32[$0 + 4612 >> 2] | 0;
  $$sink = _silk_max_int_250(7 - ((($6 >> 16) * 26214 | 0) + ((($6 & 65535) * 26214 | 0) >>> 16)) | 0) | 0;
 }
 HEAP32[$0 + 6092 >> 2] = $$sink;
 return 0;
}

function _decode_pulses($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $11 = 0, $7 = 0;
 $7 = ($1 | 0) > ($2 | 0);
 $11 = $2 + 1 | 0;
 return +(+_cwrsi($1, $2, _ec_dec_uint($3, (HEAP32[(HEAP32[1740 + ((($1 | 0) < ($2 | 0) ? $1 : $2) << 2) >> 2] | 0) + (($7 ? $1 : $2) << 2) >> 2] | 0) + (HEAP32[(HEAP32[1740 + (($7 ? $11 : $1) << 2) >> 2] | 0) + ((($11 | 0) < ($1 | 0) ? $1 : $11) << 2) >> 2] | 0) | 0) | 0, $0));
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

function _silk_bwexpander_FLP($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = +$2;
 var $$0 = 0.0, $$01 = 0, $10 = 0, $3 = 0, $5 = 0;
 $3 = $1 + -1 | 0;
 $$0 = $2;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) >= ($3 | 0)) break;
  $5 = $0 + ($$01 << 2) | 0;
  HEAPF32[$5 >> 2] = +HEAPF32[$5 >> 2] * $$0;
  $$0 = $$0 * $2;
  $$01 = $$01 + 1 | 0;
 }
 $10 = $0 + ($3 << 2) | 0;
 HEAPF32[$10 >> 2] = +HEAPF32[$10 >> 2] * $$0;
 return;
}

function _silk_interpolate($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $$0 = 0, $5 = 0, $9 = 0;
 $5 = $3 << 16 >> 16;
 $$0 = 0;
 while (1) {
  if (($$0 | 0) >= ($4 | 0)) break;
  $9 = HEAPU16[$1 + ($$0 << 1) >> 1] | 0;
  HEAP16[$0 + ($$0 << 1) >> 1] = $9 + ((Math_imul((HEAPU16[$2 + ($$0 << 1) >> 1] | 0) - $9 << 16 >> 16, $5) | 0) >>> 2);
  $$0 = $$0 + 1 | 0;
 }
 return;
}

function _silk_InitEncoder($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $$01 = 0;
 _memset($0 | 0, 0, 20208) | 0;
 $$0 = 0;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) == 2) break;
  $$0 = $$0 + (_silk_init_encoder($0 + ($$01 * 10060 | 0) | 0, $1) | 0) | 0;
  $$01 = $$01 + 1 | 0;
 }
 HEAP32[$0 + 20184 >> 2] = 1;
 HEAP32[$0 + 20188 >> 2] = 1;
 return $$0 + (_silk_QueryEncoder($0, $2) | 0) | 0;
}

function _ec_enc_init($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 HEAP32[$0 >> 2] = $1;
 HEAP32[$0 + 8 >> 2] = 0;
 HEAP32[$0 + 12 >> 2] = 0;
 HEAP32[$0 + 16 >> 2] = 0;
 HEAP32[$0 + 20 >> 2] = 33;
 HEAP32[$0 + 24 >> 2] = 0;
 HEAP32[$0 + 28 >> 2] = -2147483648;
 HEAP32[$0 + 40 >> 2] = -1;
 HEAP32[$0 + 32 >> 2] = 0;
 HEAP32[$0 + 36 >> 2] = 0;
 HEAP32[$0 + 4 >> 2] = $2;
 HEAP32[$0 + 44 >> 2] = 0;
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

function _silk_stereo_encode_pred($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$0 = 0;
 _ec_enc_icdf($0, ((HEAP8[$1 + 2 >> 0] | 0) * 5 | 0) + (HEAP8[$1 + 5 >> 0] | 0) | 0, 32153, 8);
 $$0 = 0;
 while (1) {
  if (($$0 | 0) == 2) break;
  _ec_enc_icdf($0, HEAP8[$1 + ($$0 * 3 | 0) >> 0] | 0, 32206, 8);
  _ec_enc_icdf($0, HEAP8[$1 + ($$0 * 3 | 0) + 1 >> 0] | 0, 32213, 8);
  $$0 = $$0 + 1 | 0;
 }
 return;
}

function _silk_A2NLSF_FLP($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $3 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 $3 = sp;
 $$0 = 0;
 while (1) {
  if (($$0 | 0) >= ($2 | 0)) break;
  HEAP32[$3 + ($$0 << 2) >> 2] = _silk_float2int(+HEAPF32[$1 + ($$0 << 2) >> 2] * 65536.0) | 0;
  $$0 = $$0 + 1 | 0;
 }
 _silk_A2NLSF($0, $3, $2);
 STACKTOP = sp;
 return;
}

function _silk_float2short_array_406($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $$0$in = 0, $6 = 0;
 $$0$in = $2;
 while (1) {
  $$0 = $$0$in + -1 | 0;
  if (($$0$in | 0) <= 0) break;
  $6 = _lrintf(+HEAPF32[$1 + ($$0 << 2) >> 2]) | 0;
  HEAP16[$0 + ($$0 << 1) >> 1] = ($6 | 0) > 32767 ? 32767 : (($6 | 0) > -32768 ? $6 : -32768) & 65535;
  $$0$in = $$0;
 }
 return;
}

function _silk_lin2log($0) {
 $0 = $0 | 0;
 var $1 = 0, $2 = 0, $3 = 0, $5 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 $1 = sp + 4 | 0;
 $2 = sp;
 _silk_CLZ_FRAC_265($0, $1, $2);
 $3 = HEAP32[$2 >> 2] | 0;
 $5 = Math_imul($3, 128 - $3 | 0) | 0;
 STACKTOP = sp;
 return $3 + ((($5 >> 16) * 179 | 0) + ((($5 & 65535) * 179 | 0) >>> 16)) + (31 - (HEAP32[$1 >> 2] | 0) << 7) | 0;
}

function _silk_NLSF2A_FLP($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $3 = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 $3 = sp;
 _silk_NLSF2A($3, $1, $2);
 $$0 = 0;
 while (1) {
  if (($$0 | 0) >= ($2 | 0)) break;
  HEAPF32[$0 + ($$0 << 2) >> 2] = +(HEAP16[$3 + ($$0 << 1) >> 1] | 0) * .000244140625;
  $$0 = $$0 + 1 | 0;
 }
 STACKTOP = sp;
 return;
}

function _opus_packet_get_nb_frames($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$0 = 0;
 L1 : do if (($1 | 0) < 1) $$0 = -1; else {
  switch (HEAP8[$0 >> 0] & 3) {
  case 0:
   {
    $$0 = 1;
    break L1;
    break;
   }
  case 3:
   break;
  default:
   {
    $$0 = 2;
    break L1;
   }
  }
  if (($1 | 0) < 2) $$0 = -4; else $$0 = HEAP8[$0 + 1 >> 0] & 63;
 } while (0);
 return $$0 | 0;
}

function _bitexact_cos($0) {
 $0 = $0 | 0;
 var $1 = 0, $4 = 0, $6 = 0;
 $1 = $0 << 16 >> 16;
 $4 = ((Math_imul($1, $1) | 0) + 4096 | 0) >>> 13;
 $6 = $4 << 16 >> 16;
 return 32767 - $4 + (((Math_imul($6, (((Math_imul($6, (((Math_imul($6, -626) | 0) + 16384 | 0) >>> 15 << 16) + 542441472 >> 16) | 0) + 16384 | 0) >>> 15 << 16) + -501415936 >> 16) | 0) + 16384 | 0) >>> 15) + 1 & 65535 | 0;
}

function _silk_float2short_array($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $$0$in = 0, $6 = 0;
 $$0$in = $2;
 while (1) {
  $$0 = $$0$in + -1 | 0;
  if (($$0$in | 0) <= 0) break;
  $6 = _lrintf(+HEAPF32[$1 + ($$0 << 2) >> 2]) | 0;
  HEAP16[$0 + ($$0 << 1) >> 1] = ($6 | 0) > 32767 ? 32767 : (($6 | 0) > -32768 ? $6 : -32768) & 65535;
  $$0$in = $$0;
 }
 return;
}

function _rintf($0) {
 $0 = +$0;
 var $$015 = 0.0, $1 = 0, $4 = 0, $6 = 0.0;
 $1 = (HEAPF32[tempDoublePtr >> 2] = $0, HEAP32[tempDoublePtr >> 2] | 0);
 if (($1 & 2130706432) >>> 0 > 1249902592) $$015 = $0; else {
  $4 = ($1 | 0) < 0;
  $6 = ($4 ? 8388608.0 : -8388608.0) + (($4 ? -8388608.0 : 8388608.0) + $0);
  if ($6 == 0.0) $$015 = $4 ? -0.0 : 0.0; else $$015 = $6;
 }
 return +$$015;
}

function _celt_maxabs16_428($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$0 = 0.0, $$01 = 0.0, $$02 = 0, $10 = 0.0, $4 = 0.0;
 $$0 = 0.0;
 $$01 = 0.0;
 $$02 = 0;
 while (1) {
  if (($$02 | 0) >= ($1 | 0)) break;
  $4 = +HEAPF32[$0 + ($$02 << 2) >> 2];
  $$0 = $$0 < $4 ? $$0 : $4;
  $$01 = $$01 > $4 ? $$01 : $4;
  $$02 = $$02 + 1 | 0;
 }
 $10 = -$$0;
 return +($$01 > $10 ? $$01 : $10);
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

function _celt_maxabs16($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$0 = 0.0, $$01 = 0.0, $$02 = 0, $10 = 0.0, $4 = 0.0;
 $$0 = 0.0;
 $$01 = 0.0;
 $$02 = 0;
 while (1) {
  if (($$02 | 0) >= ($1 | 0)) break;
  $4 = +HEAPF32[$0 + ($$02 << 2) >> 2];
  $$0 = $$0 < $4 ? $$0 : $4;
  $$01 = $$01 > $4 ? $$01 : $4;
  $$02 = $$02 + 1 | 0;
 }
 $10 = -$$0;
 return +($$01 > $10 ? $$01 : $10);
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

function _median_of_3($0) {
 $0 = $0 | 0;
 var $$ = 0.0, $$0 = 0.0, $$5 = 0.0, $1 = 0.0, $3 = 0.0, $4 = 0, $6 = 0.0;
 $1 = +HEAPF32[$0 >> 2];
 $3 = +HEAPF32[$0 + 4 >> 2];
 $4 = $1 > $3;
 $$ = $4 ? $3 : $1;
 $$5 = $4 ? $1 : $3;
 $6 = +HEAPF32[$0 + 8 >> 2];
 if ($$5 < $6) {
  $$0 = $$5;
  return +$$0;
 }
 if ($$ < $6) {
  $$0 = $6;
  return +$$0;
 }
 $$0 = $$;
 return +$$0;
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

function _silk_inner_prod_aligned_scale($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $$01 = 0;
 $$0 = 0;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) >= ($3 | 0)) break;
  $$0 = $$0 + ((Math_imul(HEAP16[$0 + ($$01 << 1) >> 1] | 0, HEAP16[$1 + ($$01 << 1) >> 1] | 0) | 0) >> $2) | 0;
  $$01 = $$01 + 1 | 0;
 }
 return $$0 | 0;
}

function _silk_autocorrelation_FLP($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$ = 0, $$0 = 0;
 $$ = ($3 | 0) > ($2 | 0) ? $2 : $3;
 $$0 = 0;
 while (1) {
  if (($$0 | 0) >= ($$ | 0)) break;
  HEAPF32[$0 + ($$0 << 2) >> 2] = +_silk_inner_product_FLP($1, $1 + ($$0 << 2) | 0, $2 - $$0 | 0);
  $$0 = $$0 + 1 | 0;
 }
 return;
}

function _ec_tell_frac($$0$5$val, $$0$7$val) {
 $$0$5$val = $$0$5$val | 0;
 $$0$7$val = $$0$7$val | 0;
 var $2 = 0, $4 = 0, $6 = 0;
 $2 = 32 - (Math_clz32($$0$7$val | 0) | 0) | 0;
 $4 = $$0$7$val >>> ($2 + -16 | 0);
 $6 = ($4 >>> 12) + -8 | 0;
 return ($$0$5$val << 3) - (($2 << 3) + ($6 + ($4 >>> 0 > (HEAP32[6888 + ($6 << 2) >> 2] | 0) >>> 0 & 1))) | 0;
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

function _warped_gain($0, $1, $2) {
 $0 = $0 | 0;
 $1 = +$1;
 $2 = $2 | 0;
 var $$0 = 0.0, $$01 = 0, $8 = 0.0;
 $$0 = +HEAPF32[$0 + ($2 + -1 << 2) >> 2];
 $$01 = $2 + -2 | 0;
 while (1) {
  $8 = $$0 * $1;
  if (($$01 | 0) <= -1) break;
  $$0 = +HEAPF32[$0 + ($$01 << 2) >> 2] - $8;
  $$01 = $$01 + -1 | 0;
 }
 return +(1.0 / ($8 + 1.0));
}

function _celt_encoder_init($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $5 = 0;
 $5 = _opus_custom_encoder_init_arch($0, _opus_custom_mode_create() | 0, $2, $3) | 0;
 if ($5 | 0) {
  $$0 = $5;
  return $$0 | 0;
 }
 HEAP32[$0 + 28 >> 2] = _resampling_factor($1) | 0;
 $$0 = 0;
 return $$0 | 0;
}

function _silk_corrVector_FLP($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 var $$0 = 0, $$01 = 0;
 $$0 = $0 + 16 | 0;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) == 5) break;
  HEAPF32[$3 + ($$01 << 2) >> 2] = +_silk_inner_product_FLP($$0, $1, $2);
  $$0 = $$0 + -4 | 0;
  $$01 = $$01 + 1 | 0;
 }
 return;
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

function _silk_init_encoder($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $5 = 0;
 _memset($0 | 0, 0, 10060) | 0;
 HEAP32[$0 + 5088 >> 2] = $1;
 $5 = ((_silk_lin2log(3932160) | 0) << 8) + -524288 | 0;
 HEAP32[$0 + 8 >> 2] = $5;
 HEAP32[$0 + 12 >> 2] = $5;
 HEAP32[$0 + 4660 >> 2] = 1;
 return _silk_VAD_Init($0 + 32 | 0) | 0;
}

function _opus_encode_float($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 var $9 = 0;
 $9 = _frame_size_select($2, HEAP32[$0 + 156 >> 2] | 0, HEAP32[$0 + 144 >> 2] | 0) | 0;
 return _opus_encode_native($0, $1, $9, $3, $4, 24, $1, $2, -2, HEAP32[$0 + 112 >> 2] | 0, 1, 1) | 0;
}

function _combine_pulses($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $4 = 0;
 $$0 = 0;
 while (1) {
  if (($$0 | 0) >= ($2 | 0)) break;
  $4 = $$0 << 1;
  HEAP32[$0 + ($$0 << 2) >> 2] = (HEAP32[$1 + ($4 << 2) >> 2] | 0) + (HEAP32[$1 + (($4 | 1) << 2) >> 2] | 0);
  $$0 = $$0 + 1 | 0;
 }
 return;
}

function _l1_metric($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = +$3;
 var $$0 = 0.0, $$01 = 0;
 $$0 = 0.0;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) >= ($1 | 0)) break;
  $$0 = $$0 + +Math_abs(+(+HEAPF32[$0 + ($$01 << 2) >> 2]));
  $$01 = $$01 + 1 | 0;
 }
 return +($$0 + +($2 | 0) * $3 * $$0);
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

function _celt_inner_prod_c_425($0, $1, $2) {
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

function _celt_inner_prod_c_1($0, $1, $2) {
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

function _celt_inner_prod_c($0, $1, $2) {
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

function _ec_enc_shrink($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $2 = 0, $5 = 0, $6 = 0, $8 = 0;
 $2 = HEAP32[$0 >> 2] | 0;
 $5 = HEAP32[$0 + 8 >> 2] | 0;
 $6 = 0 - $5 | 0;
 $8 = $0 + 4 | 0;
 _memmove($2 + $1 + $6 | 0, $2 + (HEAP32[$8 >> 2] | 0) + $6 | 0, $5 | 0) | 0;
 HEAP32[$8 >> 2] = $1;
 return;
}

function _silk_short2float_array_407($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $$0$in = 0;
 $$0$in = $2;
 while (1) {
  $$0 = $$0$in + -1 | 0;
  if (($$0$in | 0) <= 0) break;
  HEAPF32[$0 + ($$0 << 2) >> 2] = +(HEAP16[$1 + ($$0 << 1) >> 1] | 0);
  $$0$in = $$0;
 }
 return;
}

function _silk_short2float_array_360($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $$0$in = 0;
 $$0$in = $2;
 while (1) {
  $$0 = $$0$in + -1 | 0;
  if (($$0$in | 0) <= 0) break;
  HEAPF32[$0 + ($$0 << 2) >> 2] = +(HEAP16[$1 + ($$0 << 1) >> 1] | 0);
  $$0$in = $$0;
 }
 return;
}

function _encode_size($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$0 = 0, $4 = 0;
 if (($0 | 0) < 252) {
  HEAP8[$1 >> 0] = $0;
  $$0 = 1;
  return $$0 | 0;
 } else {
  $4 = $0 | 252;
  HEAP8[$1 >> 0] = $4;
  HEAP8[$1 + 1 >> 0] = ($0 - ($4 & 255) | 0) >>> 2;
  $$0 = 2;
  return $$0 | 0;
 }
 return 0;
}

function _silk_short2float_array($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $$0 = 0, $$0$in = 0;
 $$0$in = $2;
 while (1) {
  $$0 = $$0$in + -1 | 0;
  if (($$0$in | 0) <= 0) break;
  HEAPF32[$0 + ($$0 << 2) >> 2] = +(HEAP16[$1 + ($$0 << 1) >> 1] | 0);
  $$0$in = $$0;
 }
 return;
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

function _silk_ROR32_351($0, $1) {
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

function _silk_ROR32_267($0, $1) {
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

function _silk_ROR32_221($0, $1) {
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

function dynCall_viiiiiii(index, a1, a2, a3, a4, a5, a6, a7) {
 index = index | 0;
 a1 = a1 | 0;
 a2 = a2 | 0;
 a3 = a3 | 0;
 a4 = a4 | 0;
 a5 = a5 | 0;
 a6 = a6 | 0;
 a7 = a7 | 0;
 FUNCTION_TABLE_viiiiiii[index & 1](a1 | 0, a2 | 0, a3 | 0, a4 | 0, a5 | 0, a6 | 0, a7 | 0);
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

function _silk_gains_ID($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 var $$0 = 0, $$01 = 0;
 $$0 = 0;
 $$01 = 0;
 while (1) {
  if (($$01 | 0) >= ($1 | 0)) break;
  $$0 = (HEAP8[$0 + $$01 >> 0] | 0) + ($$0 << 8) | 0;
  $$01 = $$01 + 1 | 0;
 }
 return $$0 | 0;
}

function _opus_custom_encoder_get_size($$0$1$val, $$0$2$val, $0) {
 $$0$1$val = $$0$1$val | 0;
 $$0$2$val = $$0$2$val | 0;
 $0 = $0 | 0;
 return ((Math_imul($$0$1$val, $0) | 0) << 2) + 236 + ($0 << 12) + ((Math_imul($0 << 2, $$0$2$val) | 0) << 2) | 0;
}

function _silk_CLZ_FRAC_349($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $3 = 0;
 $3 = _silk_CLZ32_350($0) | 0;
 HEAP32[$1 >> 2] = $3;
 HEAP32[$2 >> 2] = (_silk_ROR32_351($0, 24 - $3 | 0) | 0) & 127;
 return;
}

function _silk_CLZ_FRAC_265($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $3 = 0;
 $3 = _silk_CLZ32_266($0) | 0;
 HEAP32[$1 >> 2] = $3;
 HEAP32[$2 >> 2] = (_silk_ROR32_267($0, 24 - $3 | 0) | 0) & 127;
 return;
}

function _silk_CLZ_FRAC_219($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $3 = 0;
 $3 = _silk_CLZ32_220($0) | 0;
 HEAP32[$1 >> 2] = $3;
 HEAP32[$2 >> 2] = (_silk_ROR32_221($0, 24 - $3 | 0) | 0) & 127;
 return;
}

function _FLOAT2INT16_426($0) {
 $0 = +$0;
 var $1 = 0.0, $4 = 0.0;
 $1 = $0 * 32768.0;
 if ($1 > -32768.0) if ($1 < 32767.0) $4 = $1; else $4 = 32767.0; else $4 = -32768.0;
 return (_lrintf($4) | 0) & 65535 | 0;
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

function _compute_channel_weights($0, $1, $2) {
 $0 = +$0;
 $1 = +$1;
 $2 = $2 | 0;
 var $5 = 0.0;
 $5 = ($0 < $1 ? $0 : $1) / 3.0;
 HEAPF32[$2 >> 2] = $5 + $0;
 HEAPF32[$2 + 4 >> 2] = $5 + $1;
 return;
}

function _encode_split($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 if (($2 | 0) <= 0) return;
 _ec_enc_icdf($0, $1, $3 + (HEAPU8[33338 + $2 >> 0] | 0) | 0, 8);
 return;
}

function _celt_encoder_get_size($0) {
 $0 = $0 | 0;
 var $1 = 0;
 $1 = _opus_custom_mode_create() | 0;
 return _opus_custom_encoder_get_size(HEAP32[$1 + 4 >> 2] | 0, HEAP32[$1 + 8 >> 2] | 0, $0) | 0;
}

function _tonality_analysis_reset($0) {
 $0 = $0 | 0;
 _memset($0 + 12 | 0, 0, 13888) | 0;
 HEAPF32[$0 + 8260 >> 2] = .8999999761581421;
 HEAPF32[$0 + 8256 >> 2] = .10000000149011612;
 return;
}

function _speex_resampler_init($0, $1, $2, $3, $4) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 $4 = $4 | 0;
 return _speex_resampler_init_frac($0, $1, $2, $1, $2, $3, $4) | 0;
}

function _compute_frame_energy($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 var $3 = 0;
 $3 = Math_imul($1, $2) | 0;
 return +(+_celt_inner_prod_c_425($0, $0, $3) / +($3 | 0));
}

function _is_digital_silence($0, $1, $2, $3) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 $3 = $3 | 0;
 return +_celt_maxabs16_428($0, Math_imul($1, $2) | 0) <= 1.0 / +(1 << $3 | 0) | 0;
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

function _ec_tell_427($$0$5$val, $$0$7$val) {
 $$0$5$val = $$0$5$val | 0;
 $$0$7$val = $$0$7$val | 0;
 return (Math_clz32($$0$7$val | 0) | 0) + -32 + $$0$5$val | 0;
}

function _ec_tell_361($$0$5$val, $$0$7$val) {
 $$0$5$val = $$0$5$val | 0;
 $$0$7$val = $$0$7$val | 0;
 return (Math_clz32($$0$7$val | 0) | 0) + -32 + $$0$5$val | 0;
}

function _ec_tell_105($$0$5$val, $$0$7$val) {
 $$0$5$val = $$0$5$val | 0;
 $$0$7$val = $$0$7$val | 0;
 return (Math_clz32($$0$7$val | 0) | 0) + -32 + $$0$5$val | 0;
}

function _ec_tell_71($$0$5$val, $$0$7$val) {
 $$0$5$val = $$0$5$val | 0;
 $$0$7$val = $$0$7$val | 0;
 return (Math_clz32($$0$7$val | 0) | 0) + -32 + $$0$5$val | 0;
}

function _ec_tell($$0$5$val, $$0$7$val) {
 $$0$5$val = $$0$5$val | 0;
 $$0$7$val = $$0$7$val | 0;
 return (Math_clz32($$0$7$val | 0) | 0) + -32 + $$0$5$val | 0;
}

function _tonality_analysis_init($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 HEAP32[$0 >> 2] = 0;
 HEAP32[$0 + 8 >> 2] = $1;
 _tonality_analysis_reset($0);
 return;
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

function b1(p0, p1, p2, p3, p4, p5, p6) {
 p0 = p0 | 0;
 p1 = p1 | 0;
 p2 = p2 | 0;
 p3 = p3 | 0;
 p4 = p4 | 0;
 p5 = p5 | 0;
 p6 = p6 | 0;
 abort(1);
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

function _opus_repacketizer_cat($0, $1, $2) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 $2 = $2 | 0;
 return _opus_repacketizer_cat_impl($0, $1, $2) | 0;
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

function _silk_stereo_encode_mid_only($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 _ec_enc_icdf($0, $1 << 24 >> 24, 32178, 8);
 return;
}

function _compute_pitch_gain($0, $1, $2) {
 $0 = +$0;
 $1 = +$1;
 $2 = +$2;
 return +($0 / +Math_sqrt(+($1 * $2 + 1.0)));
}

function _silk_min_int_410($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 return (($0 | 0) < ($1 | 0) ? $0 : $1) | 0;
}

function _silk_min_int_283($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 return (($0 | 0) < ($1 | 0) ? $0 : $1) | 0;
}

function _silk_min_int_251($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 return (($0 | 0) < ($1 | 0) ? $0 : $1) | 0;
}

function _silk_min_int_217($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 return (($0 | 0) < ($1 | 0) ? $0 : $1) | 0;
}

function _silk_min_int_117($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 return (($0 | 0) < ($1 | 0) ? $0 : $1) | 0;
}

function _silk_max_int_409($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 return (($0 | 0) > ($1 | 0) ? $0 : $1) | 0;
}

function _silk_max_int_346($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 return (($0 | 0) > ($1 | 0) ? $0 : $1) | 0;
}

function _silk_max_int_282($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 return (($0 | 0) > ($1 | 0) ? $0 : $1) | 0;
}

function _silk_max_int_222($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 return (($0 | 0) > ($1 | 0) ? $0 : $1) | 0;
}

function _silk_max_int($0, $1) {
 $0 = $0 | 0;
 $1 = $1 | 0;
 return (($0 | 0) > ($1 | 0) ? $0 : $1) | 0;
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

function _celt_udiv_57($0, $1) {
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

function _silk_min_int_287($0) {
 $0 = $0 | 0;
 return (($0 | 0) < 32767 ? $0 : 32767) | 0;
}

function _silk_min_32_252($0) {
 $0 = $0 | 0;
 return (($0 | 0) < 32767 ? $0 : 32767) | 0;
}

function _ec_get_error($$0$11$val) {
 $$0$11$val = $$0$11$val | 0;
 return $$0$11$val | 0;
}

function _silk_Get_Encoder_Size($0) {
 $0 = $0 | 0;
 HEAP32[$0 >> 2] = 20208;
 return 0;
}

function _ec_range_bytes($$0$6$val) {
 $$0$6$val = $$0$6$val | 0;
 return $$0$6$val | 0;
}

function _opus_repacketizer_init($0) {
 $0 = $0 | 0;
 HEAP32[$0 + 4 >> 2] = 0;
 return;
}

function _silk_sigmoid_377($0) {
 $0 = +$0;
 return +(1.0 / (+Math_exp(+-$0) + 1.0));
}

function _silk_min_int_362($0) {
 $0 = $0 | 0;
 return (($0 | 0) < 63 ? $0 : 63) | 0;
}

function _silk_min_32($0) {
 $0 = $0 | 0;
 return (($0 | 0) < 3967 ? $0 : 3967) | 0;
}

function _silk_max_int_286($0) {
 $0 = $0 | 0;
 return (($0 | 0) > 1 ? $0 : 1) | 0;
}

function _silk_max_int_250($0) {
 $0 = $0 | 0;
 return (($0 | 0) > 2 ? $0 : 2) | 0;
}

function _silk_max_int_238($0) {
 $0 = $0 | 0;
 return (($0 | 0) > 1 ? $0 : 1) | 0;
}

function _silk_log2_408($0) {
 $0 = +$0;
 return +(+_log10($0) * 3.32192809488736);
}

function _silk_max_32_335($0) {
 $0 = $0 | 0;
 return (($0 | 0) > 0 ? $0 : 0) | 0;
}

function _silk_max_32_216($0) {
 $0 = $0 | 0;
 return (($0 | 0) > 1 ? $0 : 1) | 0;
}

function _silk_sigmoid($0) {
 $0 = +$0;
 return +(1.0 / (+Math_exp(+-$0) + 1.0));
}

function _silk_min_int($0) {
 $0 = $0 | 0;
 return (($0 | 0) < 63 ? $0 : 63) | 0;
}

function _silk_log2($0) {
 $0 = +$0;
 return +(+_log10($0) * 3.32192809488736);
}

function _silk_CLZ32_350($0) {
 $0 = $0 | 0;
 return Math_clz32($0 | 0) | 0;
}

function _silk_CLZ32_334($0) {
 $0 = $0 | 0;
 return Math_clz32($0 | 0) | 0;
}

function _silk_CLZ32_274($0) {
 $0 = $0 | 0;
 return Math_clz32($0 | 0) | 0;
}

function _silk_CLZ32_266($0) {
 $0 = $0 | 0;
 return Math_clz32($0 | 0) | 0;
}

function _silk_CLZ32_239($0) {
 $0 = $0 | 0;
 return Math_clz32($0 | 0) | 0;
}

function _silk_CLZ32_228($0) {
 $0 = $0 | 0;
 return Math_clz32($0 | 0) | 0;
}

function _silk_CLZ32_220($0) {
 $0 = $0 | 0;
 return Math_clz32($0 | 0) | 0;
}

function _silk_CLZ32_121($0) {
 $0 = $0 | 0;
 return Math_clz32($0 | 0) | 0;
}

function _silk_CLZ32_116($0) {
 $0 = $0 | 0;
 return Math_clz32($0 | 0) | 0;
}

function _opus_alloc_423($0) {
 $0 = $0 | 0;
 return _malloc($0) | 0;
}

function setTempRet0(value) {
 value = value | 0;
 tempRet0 = value;
}

function _silk_float2int($0) {
 $0 = +$0;
 return _lrintf($0) | 0;
}

function _speex_free_516($0) {
 $0 = $0 | 0;
 _free($0);
 return;
}

function _opus_free_424($0) {
 $0 = $0 | 0;
 _free($0);
 return;
}

function _align_421($0) {
 $0 = $0 | 0;
 return $0 + 3 & -4 | 0;
}

function stackRestore(top) {
 top = top | 0;
 STACKTOP = top;
}

function _lrintf($0) {
 $0 = +$0;
 return ~~+_rintf($0) | 0;
}

function _opus_custom_mode_create() {
 return 6920;
}

function getTempRet0() {
 return tempRet0 | 0;
}

function stackSave() {
 return STACKTOP | 0;
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_iiiiiii = [b0,_resampler_basic_direct_double,_resampler_basic_direct_single,_resampler_basic_interpolate_double,_resampler_basic_interpolate_single,_resampler_basic_zero,b0,b0];
var FUNCTION_TABLE_viiiiiii = [b1,_downmix_float];

  return { ___muldi3: ___muldi3, _bitshift64Ashr: _bitshift64Ashr, _bitshift64Lshr: _bitshift64Lshr, _free: _free, _i64Add: _i64Add, _malloc: _malloc, _memcpy: _memcpy, _memmove: _memmove, _memset: _memset, _opus_encode_float: _opus_encode_float, _opus_encoder_create: _opus_encoder_create, _opus_encoder_ctl: _opus_encoder_ctl, _sbrk: _sbrk, _speex_resampler_destroy: _speex_resampler_destroy, _speex_resampler_init: _speex_resampler_init, _speex_resampler_process_interleaved_float: _speex_resampler_process_interleaved_float, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_viiiiiii: dynCall_viiiiiii, establishStackSpace: establishStackSpace, getTempRet0: getTempRet0, runPostSets: runPostSets, setTempRet0: setTempRet0, setThrew: setThrew, stackAlloc: stackAlloc, stackRestore: stackRestore, stackSave: stackSave };
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
var _opus_encode_float = Module["_opus_encode_float"] = asm["_opus_encode_float"];
var _opus_encoder_create = Module["_opus_encoder_create"] = asm["_opus_encoder_create"];
var _opus_encoder_ctl = Module["_opus_encoder_ctl"] = asm["_opus_encoder_ctl"];
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
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = asm["dynCall_viiiiiii"];
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






