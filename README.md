### Node Markov Chain

#### Functionality

- This is a small app that mimics the behavior of a [Markov chain](https://en.wikipedia.org/wiki/Markov_chain). 
- The MarkovMachine class will allow the user to pass in some text, and then a realistic sentence will be returned to the user, based on that text. 
- Note that the `numWords` parameter in the `makeText` method has a default value of 100, but this can be changed to allow for different bounds on the number of words in the returned text.

### Technicalities

- To get this code onto your machine, run `git clone https://github.com/jlh040/Node-Markov-Chain.git` in your terminal.
- Then, assuming you have [Node](https://nodejs.org/en/) installed, run `npm install` to install all the dependencies at once.
- To get random text from this app, type `node makeText.js` and then pass in either `url | path` and finally pass in either the url or the filepath.
- Note that I tested this application using [Jest](https://jestjs.io/).