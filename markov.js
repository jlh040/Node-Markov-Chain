/** Textual markov chain generator */
const { sample } = require('lodash');


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let chainMap = new Map();
    for (let i = 0; i < this.words.length; i++) {
      if (!chainMap.get(this.words[i])) {
        chainMap.set(this.words[i], [this.words[i + 1] === undefined ? null : this.words[i + 1]]);
      }
      else {
        chainMap.get(this.words[i]).push(this.words[i + 1] === undefined ? null : this.words[i + 1]);
      }
    };

    this.chainMap = chainMap;
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    let randomText = '';
    let currState = sample([...this.chainMap.keys()]);

    for (let i = 1; i < numWords; i++) {
      if (!this.chainMap.get(currState).includes(null)) {
        currState = sample(this.chainMap.get(currState));
        randomText += ' ' + currState;
      }
    }

    return randomText
  }
}

module.exports = {
  MarkovMachine
}