const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let queryArr = [
  `What's your name? Nicknames are also acceptable :) `,
  `What's an activity you like doing? `,
  `What do you listen to while doing that? `,
  `Which meal is your favourite (eg: dinner, brunch, etc.) `,
  `What's your favourite thing to eat for that meal? `,
  `Which sport is your absolute favourite? `,
  `What is your superpower? In a few words, tell us what you are amazing at! `
];

let result = {};

rl.question(`${queryArr[0]}`, answer1 => {
  result.name = answer1;
  rl.question(`${queryArr[1]}`, answer2 => {
    result.activity = answer2;
    rl.question(`${queryArr[2]}`, answer3 => {
      result.music = answer3;
      rl.question(`${queryArr[3]}`, answer4 => {
        result["favorite meal"] = answer4;
        rl.question(`${queryArr[4]}`, answer5 => {
          result["favorite food"] = answer5;
          rl.question(`${queryArr[5]}`, answer6 => {
            result.sport = answer6;
            rl.question(`${queryArr[6]}`, answer7 => {
              result.superpower = answer7;
              // result = result;
              console.log(result);
              rl.close();
            });
          });
        });
      });
    });
  });
});
console.log(result);

 
// for (const query of queryArr){
// rl.question(query, answer => {
// console.log(`Your entered : ${answer}`);
// });
// }


// const ac = new AbortController();
// const signal = ac.signal;
// signal.addEventListener('abort', () => {
// console.log('The question timed out');
// }, { once: true });

// setTimeout(() => ac.abort(), 10000);