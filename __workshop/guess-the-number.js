const inquirer = require('inquirer');
let hiddenNumber = null;

let guesses = 5;
const message = () =>{return `you have ${guesses} guesses left\nGuess the number?`}

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
        message: 'would you like another go (wit a new hidden number)? (y/n)' 
    }
];

const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

const guess = () => {
    inquirer.prompt(question)
        .then(answer => {
            let answerNumber = Number(answer.guess)
            if (answerNumber === hiddenNumber){
                console.log('yey');
            }else if(guesses>0){
                if(answerNumber>hiddenNumber){
                    console.log('too high');
                }else{
                    console.log('too low');
                }
                guesses = guesses -1;
                guess();
            } else {
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
            }
        });
}

const start = () => {
    hiddenNumber = randomNumberInRange(1,101);
    // console.log(hiddenNumber);
    guess()
}

start();