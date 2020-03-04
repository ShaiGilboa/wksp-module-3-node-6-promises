const inquirer = require('inquirer');
const reqPro = require('request-promise');

let word = null;
let show = null;
let allGuesses = [];
let guesses = 5;
const message = () =>{return `you have ${guesses} guesses left:`}

const question = [
    {
        type: 'input',
        name: 'guess',
        message: message 
    }
];
const another = [
    {
        type: 'input',
        name: 'another',
        message: 'would you like another go (with a new word)? (y/n)' 
    }
];
const startMess = [
    {
        type: 'input',
        name: 'word',
        message: 'set the game up for a friend, what would be the word?' 
    }
];

const guess = () => {
    if(guesses>0 && show.includes('_ ')){
        inquirer.prompt(question)
            .then(answer => {
                let answerLetter = answer.guess
                allGuesses.push(answerLetter)
                if (word.includes(answerLetter)){
                    while(word.indexOf(answerLetter) !== -1){
                        show[word.indexOf(answerLetter)] = word[word.indexOf(answerLetter)];
                        word[word.indexOf(answerLetter)] = '';
                    }
                    console.log('you got it!')
                    console.log(show.join('')+"                                 you have guessed: "+allGuesses.join());
                } else {
                    console.log('wrong!'+"                                 you have guessed: "+allGuesses.join());
                    guesses--;
                }
                // console.log('_______________________')
            guess();
            });
    } else if(show.includes('_ ')){
        console.log('LOOSER!')
        inquirer.prompt(another)
            .then(answer => {
                // console.log('answer =',answer)
                if(answer.another==='y'){
                    guesses = 5;
                    start();
                } else {
                    console.log('BYEEEEEEEE')
                }
            })
    } else {
        console.log('winner!')
        inquirer.prompt(another)
            .then(answer => {
                // console.log('answer =',answer)
                if(answer.another==='y'){
                    guesses = 5;
                    start();
                } else {
                    console.log('BYEEEEEEEE')
                }
            })
    }
}


const start = () => {
    // console.log(hiddenNumber);
    // inquirer.prompt.setMaxListeners(100);
    // reqPro('https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=YOURAPIKEY')
    inquirer.prompt(startMess)
            .then(answer => {
            console.log('\033[2J')
            word = answer.word.split('')
            // console.log(word.join())
            show = [];
            word.forEach(element => {
                // console.log(element);
                (element === ' ') ? show.push('-') : show.push('_ ')
                // console.log(show.join(''));

            });
            // console.log(word)
            console.log(show.join(''));
            guess()
            });
}

start();