const { MarkovMachine } = require('./markov');

describe('MarkovMachine Tests', () => {
    test('can we make an instance of the class?', () => {
        let markovian = new MarkovMachine('the cat is in the hat');
        expect(markovian).toBeInstanceOf(MarkovMachine);

        let markovianV2 = new MarkovMachine('a');
        expect(markovianV2).toBeInstanceOf(MarkovMachine);
    })

    test('does an instance have the properties and methods we expect?', () => {
        let markovianV3 = new MarkovMachine('where in the world is carmen san diego');
        expect(markovianV3.words).toEqual(expect.any(Array));

        let markovianV4 = new MarkovMachine('Sam I am that is my name');
        expect(markovianV4.makeChains).toBeInstanceOf(Function);

        let markovianV5 = new MarkovMachine('The world is a big place and it is not a race.');
        expect(markovianV5.makeText).toBeInstanceOf(Function);
    })
})