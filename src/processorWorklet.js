class Processor extends AudioWorkletProcessor {
  constructor() { super(); }

  process( inputs ) {
    let input = inputs[0];



    // keep alive
    return true;
  }
}

registerProcessor('processor', Processor);