/** Command-line tool to generate Markov text. */
const { MarkovMachine } = require('./markov');
const axios = require('axios');
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

function getUrlText() {
    const url = process.argv[3];
    return new Promise(async (resolve, reject) => {
        try {
            const resp = await axios.get(url);
            resolve(resp.data);
        }
        catch(e) {
            console.log('Please enter a valid URL!', e);
            process.exit(1);
        }
    })
}

async function logToConsole(fileFlag, urlFlag) {
    let mm;
    let text;

    if (fileFlag) {
        text = await getFileText();
        mm = new MarkovMachine(text);
    }
    else if (urlFlag) {
        text = await getUrlText();
        mm = new MarkovMachine(text)
    }

    console.log(mm.makeText())
}

function checkForFileOrUrl() {
    if (process.argv[2] === 'file') {
        logToConsole(true, false);
    }
    else if (process.argv[2] === 'url') {
        logToConsole(false,true);
    }
    else {
        console.log('Error: Please specify url | file');
        process.exit(1);
    }
}

checkForFileOrUrl();