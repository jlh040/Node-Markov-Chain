/** Command-line tool to generate Markov text. */
const { MarkovMachine } = require('./markov');
const fs = require('fs');

function getFileText() {
    filePath = process.argv[3];
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.log('Invalid file path', err);
                process.exit(1);
            }
            else {
                resolve(data);
            }
        })
    })
}

async function logSentenceFromFile() {
    let fileText = await getFileText();
    const mm = new MarkovMachine(fileText);

    console.log(mm.makeText())
}

function checkForFileOrUrl() {
    if (process.argv[2] === 'file') {
        logSentenceFromFile();
    }
}

checkForFileOrUrl();