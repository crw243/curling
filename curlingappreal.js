//new app about curling

const grossBankRoll = 1100;
const kellyRatio = .25;
const bankRoll = (kellyRatio * grossBankRoll) ;

//This function is the default for creating a team object.
function Team(teamId, win, lose, winPer, ptsFor, ptsAgainst, netScore, hamEff,stlDef,netEff) {

  return {
    teamId ,
    win ,
    lose ,
    winPer : Math.round((win / (win + lose))*100)/100,
    ptsFor,
    ptsAgainst,
    netScore : Math.round((ptsFor - ptsAgainst)*100)/100,
    hamEff,
    stlDef,
    netEff : Math.round((hamEff - stlDef)*100)/100,
  }
  
}

// function newTeam(teamId, win, lose, winPer, ptsFor, ptsAgainst, netScore,hamEff,stlDef,netEff){
//   var newTeam = new Team(teamId, win, lose, winPer, ptsFor, ptsAgainst, netScore,hamEff,stlDef,netEff)
//   const pushTeam = newTeam
//   allTeams.push(pushTeam)
// }

const Edin =  Team("Edin",61,13,"",8.55,5.42,"",0.48,0.15)
const Bottcher =  Team("Bottcher",24,11,"",7.66,5.85,"",0.44,0.16)
const Brunner =  Team("Brunner",20,33,"",6.78,8.87,"",0.36,0.25)
const Carey =  Team("Carey",17,23,"",6.41,8.12,"",0.3,0.36)
const Carruthers =  Team("Carruthers",27,23,"",7.57,6.74,"",0.41,0.19)
const Dropkin =  Team("Dropkin",44,19,"",8.01,6.27,"",0.47,0.2)
const Dunstone =  Team("Dunstone",39,14,"",8.23,5.84,"",0.49,0.14)
const Einarson =  Team("Einarson",30,10,"",9.09,5.99,"",0.5,0.15)
const Epping =  Team("Epping",31,18,"",8.37,6.7,"",0.41,0.24)
const Flasch =  Team("Flasch",28,22,"",7.73,6.46,"",0.42,0.23)
const Fujisawa =  Team("Fujisawa",33,16,"",8.7,5.84,"",0.42,0.2)
const Gim =  Team("Gim",54,20,"",8.83,5.72,"",0.51,0.14)
const Grandy =  Team("Grandy",36,21,"",8.69,6.98,"",0.39,0.27)
const Gushue =  Team("Gushue",25,6,"",9.79,5.08,"",0.61,0.03)
const Hasselborg =  Team("Hasselborg",27,14,"",7.84,6.22,"",0.41,0.18)
const Homan =  Team("Homan",29,6,"",8.65,5.92,"",0.47,0.2)
const Hosli =  Team("Hosli",25,26,"",7.74,8.25,"",0.4,0.29)
const Jaeggi =  Team("Jaeggi",29,22,"",8.32,7.02,"",0.42,0.25)
const Jones =  Team("Jones",41,24,"",9.26,7.06,"",0.42,0.26)
const Keiser =  Team("Keiser",28,23,"",7.13,6.12,"",0.31,0.23)
const Kim =  Team("Kim",24,18,"",7.58,6.88,"",0.39,0.21)
const Koe =  Team("Koe",29,14,"",8.41,6.56,"",0.49,0.16)
const Lawes =  Team("Lawes",38,15,"",8.61,5.95,"",0.4,0.16)
const Mouat =  Team("Mouat",24,12,"",7.81,5.93,"",0.51,0.13)
const Peterson =  Team("Peterson",23,15,"",8.35,6.78,"",0.37,0.25)
const Ramsfjell =  Team("Ramsfjell","","","","","","","","")
const Retornaz =  Team("Retornaz",51,14,"",9.28,5.27,"",0.5,0.17)
const Scheidegger =  Team("Scheidegger",34,16,"",7.66,6.32,"",0.39,0.22)
const Schwaller =  Team("Schwaller","","","","","","","","")
const Tirinzoni =  Team("Tirizoni",46,13,"",9.03,5.77,"",0.45,0.22)
const Whyte =  Team("Whyte",33,16,"",7.73,5.8,"",0.51,0.18)
const Wrana =  Team("Wrana",30,26,"",7.58,7.61,"",0.36,0.25)
const Constantini =  Team("Constatini",34,20,"",8.08,5.99,"",0.4,0.25)
const Ackland =  Team("Ackland",30,20,"",8.35,6.89,"",0.43,0.26)
const Gosgens =  Team("Gosgens",39,15,"",9.14,5.44,"",0.41,0.2)
const Horgan =  Team("Horgan",22,19,"",6.92,6.52,"",0.37,0.22)
const Ladouceur =  Team("Ladouceur",33,15,"",9.32,6.22,"",0.4,0.28)


const allGames = []; // This is my little aggregating array for the games I create. Might not be usefull yet. 

//This is the contructor function that makes a new game entity which has all the relevant elements. 
function Game(gameId,tournament,date,team1,team2,ovUnd,ovUndLine,team1StraightOdds,team2StraightOdds,team1LineOdds,team2LineOdds,ptsSprd
) {
  this.gameId = gameId;
  this.tournament = tournament;
  this.date = date;
  this.team1 = team1;
  this.team2 = team2;
  this.ovUnd = ovUnd;
  this.ovUndLine = ovUndLine;
  this.team1StraightOdds = team1StraightOdds;
  this.team2StraightOdds = team2StraightOdds;
  this.team1LineOdds = team1LineOdds;
  this.team2LineOdds = team2LineOdds;
  this.ptsSprd = ptsSprd;
}

// function addGame(gameId,tournament,date,team1,team2,ovUnd,ovUndLine,team1StraightOdds,team2StraighOdds,team1LineOdds,team2LineOdds,ptsSprd){
//   var newGame = new Game(gameId,tournament,date,team1,team2,ovUnd,ovUndLine,team1StraightOdds,team2StraighOdds,team1LineOdds,team2LineOdds,ptsSprd)
// allGames.push(newGame)
// } 


//this is a list og all the games which I copy and paste from spreadsheet. Remeber to delete quotes on teams. 

const game1 = new Game("game1","CADOPEN23","08/12/2023",Gim,Constantini,"10.5","1.72","1.3","3.2","1.65","2.1","-1.5")
const game2 = new Game("game2","CADOPEN23","08/12/2023",Jones,Wrana,"11.5","2","1.72","2","2.45","1.48","-1.5")
const game3 = new Game("game3","CADOPEN23","08/12/2023",Einarson,Ackland,"10.5","1.6","1.09","6","2.05","1.68","-3.5")
const game4 = new Game("game4","CADOPEN23","08/12/2023",Lawes ,Ladouceur,"10.5","1.65","1.2","4","1.85","1.85","-2.5")
const game5 = new Game("game5","CADOPEN23","08/12/2023",Homan,Peterson,"10.5","1.65","1.2","4","1.85","1.85","-2.5")
const game6 = new Game("game6","CADOPEN23","08/12/2023",Scheidegger,Hasselborg,"10.5","1.65","2.75","1.4","1.85","1.85","1.5")
const game7 = new Game("game7","CADOPEN23","08/12/2023",Tirinzoni,Jaeggi,"10.5","1.18","1.18","4.26","1.85","1.85","-2.5")
const game8 = new Game("game8","CADOPEN23","08/12/2023",Fujisawa,Keiser,"10.5","1.85","1.3","3.2","1.67","3.2","-1.5")
const game9 = new Game("game9","CADOPEN23","08/12/2023",Edin,Horgan,"9.5","1.62","1.16","4.5","1.72","2","-2.5")
const game10 = new Game("game10","CADOPEN23","08/12/2023",Mouat,Ramsfjell,"10.5","1.8","1.18","4.3","1.85","1.85","-2.5")
const game11 = new Game("game11","CADOPEN23","08/12/2023",Dunstone,Flasch,"10.5","1.8","1.33","3.05","1.7","2.02","-1.5")
const game12 = new Game("game12","CADOPEN23","08/12/2023",Koe,Dropkin,"10.5","1.95","1.48","2.45","2","1.72","-1.5")
const game13 = new Game("game13","CADOPEN23","08/12/2023",Gushue,Gosgens,"10.5","1.72","1.06","7.51","1.95","1.75","-3.5")
const game14 = new Game("game14","CADOPEN23","08/12/2023",Schwaller,Whyte,"10.5","1.72","1.57","2.25","2.15","1.63","-1.5")
const game15 = new Game("game15","CADOPEN23","08/12/2023",Retornaz,Epping,"10.5","1.9","1.3","3.2","1.68","2.05","-1.5")
const game16 = new Game("game16","CADOPEN23","08/12/2023",Bottcher,Carruthers,"10.5","2.05","1.47","2.5","1.95","1.75","-1.5")





//This logic evaluates who to bet on for the over/under portion. 
function overUnder(game) {
  const part1 = (game.team1.ptsFor + game.team2.ptsAgainst) / 2;
  const part2 = (game.team2.ptsFor + game.team1.ptsAgainst) / 2;
  const expScore = (part1 + part2);
  const scoreHedge = 0.8
  const ouBet = "";
  const betAmt = "";
  const ouEdge =
    (Math.round(
      ((((expScore - game.ovUnd) / game.ovUnd) + ((1 / game.ovUndLine) - 0.54)) * 100
    ) / 100);

 const adjEdge = return (ouEdge * scoreHedge);

  if (expScore >= game.ovUnd) {
    console.log(
      `${game.gameId} ${game.team1.teamId}  vs ${game.team2.teamId} Bet the over game as ${expScore} is higher than ${game.ovUnd}  you should bet $ ${adjEdge * bankRoll} based on current bankroll. edge = ${adjEdge}`
    );
    
  } else {
    console.log(
      `${game.gameId} ${game.team1.teamId}  vs ${game.team2.teamId} Bet the under because ${expScore} is lower than ${game.ovUnd} you should bet $ ${adjEdge * bankRoll} based on current bankroll. ${adjEdge}`
    );
  }
  
}

function lineEval(game) {
  const lineDescrepancy = .75 //This is a threshold for when to det on moneyline mispricing 1=1point
  const part1 = (game.team1.ptsFor + game.team2.ptsAgainst) / 2;
  const part2 = (game.team2.ptsFor + game.team1.ptsAgainst) / 2;
  const expScore = (part1 + part2)
  const t1expNetScore = (Math.round((game.team1.netScore - game.team2.netScore )*100)/100);
  const t2expNetScore = (Math.round((game.team2.netScore - game.team1.netScore )*100)/100);
  team1ptsSprd = (-1 * game.ptsSprd)
  team2ptsSprd = game.ptsSprd;
  const team1linePer =   (game.team2LineOdds / (game.team1LineOdds +game.team2LineOdds));
 const team2linePer =  (game.team1LineOdds / (game.team1LineOdds +game.team2LineOdds));

 console.log(`${game.gameId}: ${game.team1.teamId} expected netscore ${t1expNetScore} vs points spread of ${team1ptsSprd}`)
if (team1ptsSprd - t1expNetScore > lineDescrepancy){
  console.log(`Take ${game.team2.teamId} with the line` )
}

else if (team2ptsSprd - t2expNetScore > lineDescrepancy) {

  console.log(`Take ${game.team1.teamId} with the line`)
}

else {
  console.log(`The Pointspread gap is not big enough/not out of line `)
}

}

function moneyLineEval(game){

const lookAtWinPer = Math.round((game.team1.winPer - game.team2.winPer)*100)/100;
const lookAtNetScore = Math.round((game.team1.netScore - game.team2.netScore)*100)/100;
const lookAtNetEff = Math.round((game.team1.netEff - game.team2.netEff)*100)/100;
const team1ImpPer = Math.round(((1/game.team1StraightOdds)-.04)*100)/100 ;
function isFavourite(game){
  if((game.team2StraightOdds - game.team1StraightOdds) > 0){
    return "The Favourite"
  } 
  else {
    return "Not The Favourite"
};
}
console.log(`${game.gameId} MoneyLine ${game.team1.teamId} : is ${isFavourite(game)} , with, ${team1ImpPer}% ,chance to win.,  Net Win Per, ${lookAtWinPer} , Net Score, ${lookAtNetScore}, Net Efficiency, ${lookAtNetEff}`)

}

//this calls all three of the game evaulation functions for each type of betting and takes the game as a param
function evalAll(game){
  overUnder(game);
  lineEval(game);
  moneyLineEval(game);
}

// This loop runs the bet evaluation function for all of the games.  
const firstGame = 1
const lastGame = 16

for (let i = firstGame ; i < (lastGame + 1); i++) {
  gameHolder = `game${i}`
  console.log(evalAll(eval(gameHolder)))
}










