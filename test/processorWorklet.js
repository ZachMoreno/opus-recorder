var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require("sinon-chai");

chai.use(sinonChai);
var should = chai.should();
var expect = chai.expect;


describe('processorWorklet', function() {

  var Module = require('../dist/processorWorklet.min');
  var context = new AudioContext();
  var sandbox = sinon.sandbox.create();

  function getProcessor() {
    return context.audioWorklet.addModule(Module).then(function() {
      return new AudioWorkletNode(context, 'processor');
    });
  }

  it('should initialize processor', function () {
    return getProcessor().then(function (processor) {
      expect(1+1).to.equal(2);
    });
  });

});