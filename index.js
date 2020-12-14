var readlineSync = require('readline-sync');
const chalk = require('chalk');
 const log = console.log

var score = 0;
var highScore =[{name:"Piysuh",score:7},{name:"Divaker",score:6},{Firoz:5}]
if (readlineSync.keyInYN('Do you want play Game of thrones quiz?')) {
 
  log(chalk.bgWhiteBright.underline.bold.blue('Letss Playyy...'));
  

function play(q,a,o){
console.log(q)

var answers = o;
index = readlineSync.keyInSelect(answers, 'Which option?');

if(a===answers[index]){

  log(chalk.bgWhiteBright.bold.blue("You are correct"))
  score = score +1;
  log(chalk.bgWhiteBright.bold.blue("Your score is = "+ score))
  log(chalk.red.bold("--------------------------------------------"))
}
else{
  log(chalk.bgWhiteBright.bold.redBright("YOu are wrong !!"))
  log(chalk.bgWhiteBright.bold.blue("Your score is = "+ score))
  log(chalk.red.bold("--------------------------------------------"))
}


}

var questions = [{question:"Q =>1 Who is Jon Snow's mother ? ",answer:"Lyanna Stark",options:["Lyanna Stark", "LysaArryn","CerseiLannister","prostitute"]},

{question:" Q =>2 What is Davos Seaworth’s nickname ? ",answer:"the Onion Knight",options:["the Sand Snake",
"Hot Pie",
"the Hound",
"the Onion Knight"
]},
{question:" Q =>3 How does Gregor (“the Mountain”) Clegane kill Oberyn Martell, the “Red Viper,” in their trial by combat?",answer:"crushes his skull",options:["strangles him",
"crushes his skull",
"cuts off head",
"poisons him"]},

{question:" Q =>4 What’s the name of the band of assassins that Arya Stark joins in Braavos?",answer:"Faceless Men",options:["Second Son",
"Faceless Men",
"Brotherhood Without Banners",
"Sons of the Harpy"]},


{question:" Q =>5 Which of the following is not a name of one of Daenerys Targaryen’s dragons?",answer:"Balerion",options:["Rhaegal",
"Viserion",
"Balerion",
"Drogon"]},

{question:" Q =>6 Which former ranger of the Night’s Watch led an army of wildlings as the “King-Beyond-the-Wall”?",answer:"Mance Rayder",options:["Tormund Giantsbane",
"Janos Slynt",
"Mance Rayder",
"Craster"]},

{question:" Q =>7 What are the “house words” of House Greyjoy?",answer:"We Do Not Sow",options:["Winter Is Coming",
"Ours Is the Fury",
"Unbowed, Unbent, Unbroken",
"We Do Not Sow"]}]



for(i=0;i<questions.length;i++){
var currentQuestion = questions[i]
play(currentQuestion.question,currentQuestion.answer,currentQuestion.options)
}

 if(score>=6){
  log(chalk.bgWhiteBright.bold.blue(" WOOOHOOO ..... Your Good Score is = "+ score+ "out of 7"))
  log(chalk.bgWhiteBright.bold.blue("YOU HAVE BROKEN A REACORD .........CONGRATULATIONS PLZ SHARE A SCREENSHOT WITH US..."))
  log(chalk.red.bold("---------------------"))
}
else{
  log(chalk.bgWhiteBright.bold.redBright("OOPPSSSS .......You GOT A BAD SCORE OF = " + score +" OUT OF 7"))
  log(chalk.red.bold("---------------------"))
}
log(("HighScores of Participants"))
for(i=0;i<highScore.length;i++){
  var currHigh = highScore[i]
  console.log(currHigh.name,currHigh.score)
}

}

 else {
  
  console.log('This game is Not for you...');

}