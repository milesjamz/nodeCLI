#! /usr/bin/env node
var inquirer = require('inquirer');
let today = new Date()
let enzoDay = new Date('September 5, 2022')
const fs = require('fs')

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

let daysTillBday = Math.round((enzoDay - today) / _MS_PER_DAY)
console.clear()
console.log('Hi, welcome to Daily Tracker');
console.log(`There are ${daysTillBday} days left until Enzo's birthday`)

const writeFile = (input) => {
  fs.appendFile('./bin/data.txt', input, err => {
    if (err) {
      console.error(err)
      return
    }
    //done!
  })
  }

fs.readFile('./bin/data.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})


const questions = [
  {
    type: 'quantity',
    name: 'cardio',
    message: 'How many minutes of cardio did you do today?',
    validate(value) {
      const valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number';
    },
    filter: Number,
  },
  {
    type: 'quantity',
    name: 'weights',
    message: 'How many minutes of weight training did you do today?',
    validate(value) {
      const valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number';
    },
    filter: Number,
  },
  {
    type: 'quantity',
    name: 'jobs',
    message: 'How many jobs did you apply for today?',
    validate(value) {
      const valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number';
    },
    filter: Number,
  },
  {
    type: 'quantity',
    name: 'algos',
    message: 'How many minutes of algo practice did you do today?',
    validate(value) {
      const valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number';
    },
    filter: Number,
  },
  {
    type: 'quantity',
    name: 'songs',
    message: 'How many songs did you write today?',
    validate(value) {
      const valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number';
    },
    filter: Number,
  }
]


inquirer.prompt(questions).then((answers) => {
  console.log('\nTodays actions:');
  console.log(JSON.stringify(answers, null, '  '));
  writeFile(JSON.stringify(answers, null, '  '))
});

// console.log(answers)


/*
const questions = [
  {
    type: 'confirm',
    name: 'toBeDelivered',
    message: 'Is this for delivery?',
    default: false,
  },
  {
    type: 'input',
    name: 'phone',
    message: "What's your phone number?",
    validate(value) {
      const pass = value.match(
        /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
      );
      if (pass) {
        return true;
      }

      return 'Please enter a valid phone number';
    },
  },
  {
    type: 'list',
    name: 'size',
    message: 'What size do you need?',
    choices: ['Large', 'Medium', 'Small'],
    filter(val) {
      return val.toLowerCase();
    },
  },
  {
    type: 'input',
    name: 'quantity',
    message: 'How many do you need?',
    validate(value) {
      const valid = !isNaN(parseFloat(value));
      return valid || 'Please enter a number';
    },
    filter: Number,
  },
  {
    type: 'expand',
    name: 'toppings',
    message: 'What about the toppings?',
    choices: [
      {
        key: 'p',
        name: 'Pepperoni and cheese',
        value: 'PepperoniCheese',
      },
      {
        key: 'a',
        name: 'All dressed',
        value: 'alldressed',
      },
      {
        key: 'w',
        name: 'Hawaiian',
        value: 'hawaiian',
      },
    ],
  },
  {
    type: 'rawlist',
    name: 'beverage',
    message: 'You also get a free 2L beverage',
    choices: ['Pepsi', '7up', 'Coke'],
  },
  {
    type: 'input',
    name: 'comments',
    message: 'Any comments on your purchase experience?',
    default: 'Nope, all good!',
  },
  {
    type: 'list',
    name: 'prize',
    message: 'For leaving a comment, you get a freebie',
    choices: ['cake', 'fries'],
    when(answers) {
      return answers.comments !== 'Nope, all good!';
    },
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log('\nOrder receipt:');
  console.log(JSON.stringify(answers, null, '  '));
});
*/

/*
deliverables --

- login/logout with username/pw
- connects to database
- input daily stats
    -excercize minutes
    -applications
    -weight
    -algo practice
    -songs written

- readout daily stats
- delete account

*/

/*
35 Questions Made Famous by Marcel Proust
What is your idea of perfect happiness?
What is your greatest fear?
What is the trait you most deplore in yourself?
What is the trait you most deplore in others?
Which living person do you most admire?
What is your greatest extravagance?
What is your current state of mind?
What do you consider the most overrated virtue?
On what occasion do you lie?
What do you most dislike about your appearance?
Which living person do you most despise?
What is the quality you most like in a man?
What is the quality you most like in a woman?
Which words or phrases do you most overuse?
What or who is the greatest love of your life?
When and where were you happiest?
Which talent would you most like to have?
If you could change one thing about yourself, what would it be?
What do you consider your greatest achievement?
If you were to die and come back as a person or a thing, what would it be?
Where would you most like to live?
What is your most treasured possession?
What do you regard as the lowest depth of misery?
What is your favourite occupation?
What is your most marked characteristic?
What do you most value in your friends?
Who are your favourite writers?
Who is your favourite hero of fiction?
Which historical figure do you most identify with?
Who are your heroes in real life?
What are your favourite names?
What is it that you most dislike?
What is your greatest regret?
How would you like to die?
What is your motto?
*/