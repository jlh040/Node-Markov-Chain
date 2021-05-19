const { MarkovMachine } = require('./markov');

describe('MarkovMachine Tests', () => {
    test('can we make an instance of the class?', () => {
        let markovian = new MarkovMachine('the cat is in the hat')
        expect(markovian).toBeInstanceOf(MarkovMachine);

        let markovianV2 = new MarkovMachine('a')
        expect(markovianV2).toBeInstanceOf(MarkovMachine);
    })
})