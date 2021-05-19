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

    test('Do we get an actual string of text from makeText?', () => {
        let markovianV6 = new MarkovMachine('There are no eggs like the eggs that I am eating');
        expect(markovianV6.makeText()).toEqual(expect.any(String));

        let markovianV7 = new MarkovMachine('This is one of the largest dr seuss books in the world and it is great');
        expect(markovianV6.makeText()).toEqual(expect.any(String));
    })

    test('does the markov chain stop at the last word of the input text?', () => {
        let markovianV8 = new MarkovMachine('Who is the man at the door he will soon be in a car');
        let randomTextInArr = markovianV8.makeText().split(' ') 
        expect(randomTextInArr[randomTextInArr.length - 1]).toBe('car');
    })

    test('are we bounded by the number of words that we pass in to makeText?', () => {
        let markovianV9 = new MarkovMachine('I do not like them here or there.');

        let randomTextInArr = markovianV9.makeText(numWords = 15).split(' ')
        expect(randomTextInArr.length).toBeLessThanOrEqual(15);
        
        randomTextInArr = markovianV9.makeText(numWords = 3).split(' ')
        expect(randomTextInArr.length).toBeLessThanOrEqual(3);

        randomTextInArr = markovianV9.makeText(numWords = 5).split(' ')
        expect(randomTextInArr.length).toBeLessThanOrEqual(5);
    })
})