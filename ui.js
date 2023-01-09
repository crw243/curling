const allTeams = [{teamId:"Edin",win:61,lose:13,winPer:"",ptsFor:8.55,ptsAgainst:5.42,netScore:"",hamEff:0.48,stlDef:0.15,netEff:""},{teamId:"Bottcher",win:24,lose:11,winPer:"",ptsFor:7.66,ptsAgainst:5.85,netScore:"",hamEff:0.44,stlDef:0.16,netEff:""},{teamId:"Brunner",win:20,lose:33,winPer:"",ptsFor:6.78,ptsAgainst:8.87,netScore:"",hamEff:0.36,stlDef:0.25,netEff:""},{teamId:"Carey",win:17,lose:23,winPer:"",ptsFor:6.41,ptsAgainst:8.12,netScore:"",hamEff:0.3,stlDef:0.36,netEff:""},{teamId:"Carruthers",win:27,lose:23,winPer:"",ptsFor:7.57,ptsAgainst:6.74,netScore:"",hamEff:0.41,stlDef:0.19,netEff:""},{teamId:"Dropkin",win:44,lose:19,winPer:"",ptsFor:8.01,ptsAgainst:6.27,netScore:"",hamEff:0.47,stlDef:0.2,netEff:""},{teamId:"Dunstone",win:39,lose:14,winPer:"",ptsFor:8.23,ptsAgainst:5.84,netScore:"",hamEff:0.49,stlDef:0.14,netEff:""},{teamId:"Einarson",win:30,lose:10,winPer:"",ptsFor:9.09,ptsAgainst:5.99,netScore:"",hamEff:0.5,stlDef:0.15,netEff:""},{teamId:"Epping",win:31,lose:18,winPer:"",ptsFor:8.37,ptsAgainst:6.7,netScore:"",hamEff:0.41,stlDef:0.24,netEff:""},{teamId:"Flasch",win:28,lose:22,winPer:"",ptsFor:7.73,ptsAgainst:6.46,netScore:"",hamEff:0.42,stlDef:0.23,netEff:""},{teamId:"Fujisawa",win:33,lose:16,winPer:"",ptsFor:8.7,ptsAgainst:5.84,netScore:"",hamEff:0.42,stlDef:0.2,netEff:""},{teamId:"Gim",win:54,lose:20,winPer:"",ptsFor:8.83,ptsAgainst:5.72,netScore:"",hamEff:0.51,stlDef:0.14,netEff:""},{teamId:"Grandy",win:36,lose:21,winPer:"",ptsFor:8.69,ptsAgainst:6.98,netScore:"",hamEff:0.39,stlDef:0.27,netEff:""},{teamId:"Gushue",win:25,lose:6,winPer:"",ptsFor:9.79,ptsAgainst:5.08,netScore:"",hamEff:0.61,stlDef:0.03,netEff:""},{teamId:"Hasselborg",win:27,lose:14,winPer:"",ptsFor:7.84,ptsAgainst:6.22,netScore:"",hamEff:0.41,stlDef:0.18,netEff:""},{teamId:"Homan",win:29,lose:6,winPer:"",ptsFor:8.65,ptsAgainst:5.92,netScore:"",hamEff:0.47,stlDef:0.2,netEff:""},{teamId:"Hosli",win:25,lose:26,winPer:"",ptsFor:7.74,ptsAgainst:8.25,netScore:"",hamEff:0.4,stlDef:0.29,netEff:""},{teamId:"Jaeggi",win:29,lose:22,winPer:"",ptsFor:8.32,ptsAgainst:7.02,netScore:"",hamEff:0.42,stlDef:0.25,netEff:""},{teamId:"Jones",win:41,lose:24,winPer:"",ptsFor:9.26,ptsAgainst:7.06,netScore:"",hamEff:0.42,stlDef:0.26,netEff:""},{teamId:"Keiser",win:28,lose:23,winPer:"",ptsFor:7.13,ptsAgainst:6.12,netScore:"",hamEff:0.31,stlDef:0.23,netEff:""},{teamId:"Kim",win:24,lose:18,winPer:"",ptsFor:7.58,ptsAgainst:6.88,netScore:"",hamEff:0.39,stlDef:0.21,netEff:""},{teamId:"Koe",win:29,lose:14,winPer:"",ptsFor:8.41,ptsAgainst:6.56,netScore:"",hamEff:0.49,stlDef:0.16,netEff:""},{teamId:"Lawes",win:38,lose:15,winPer:"",ptsFor:8.61,ptsAgainst:5.95,netScore:"",hamEff:0.4,stlDef:0.16,netEff:""},{teamId:"Mouat",win:24,lose:12,winPer:"",ptsFor:7.81,ptsAgainst:5.93,netScore:"",hamEff:0.51,stlDef:0.13,netEff:""},{teamId:"Peterson",win:23,lose:15,winPer:"",ptsFor:8.35,ptsAgainst:6.78,netScore:"",hamEff:0.37,stlDef:0.25,netEff:""},{teamId:"Ramsfjell",win:"",lose:"",winPer:"",ptsFor:"",ptsAgainst:"",netScore:"",hamEff:"",stlDef:"",netEff:""},{teamId:"Retornaz",win:51,lose:14,winPer:"",ptsFor:9.28,ptsAgainst:5.27,netScore:"",hamEff:0.5,stlDef:0.17,netEff:""},{teamId:"Scheidegger",win:34,lose:16,winPer:"",ptsFor:7.66,ptsAgainst:6.32,netScore:"",hamEff:0.39,stlDef:0.22,netEff:""},{teamId:"Schwaller",win:"",lose:"",winPer:"",ptsFor:"",ptsAgainst:"",netScore:"",hamEff:"",stlDef:"",netEff:""},{teamId:"Tirizoni",win:46,lose:13,winPer:"",ptsFor:9.03,ptsAgainst:5.77,netScore:"",hamEff:0.45,stlDef:0.22,netEff:""},{teamId:"Whyte",win:33,lose:16,winPer:"",ptsFor:7.73,ptsAgainst:5.8,netScore:"",hamEff:0.51,stlDef:0.18,netEff:""},{teamId:"Wrana",win:30,lose:26,winPer:"",ptsFor:7.58,ptsAgainst:7.61,netScore:"",hamEff:0.36,stlDef:0.25,netEff:""},{teamId:"Constatini",win:34,lose:20,winPer:"",ptsFor:8.08,ptsAgainst:5.99,netScore:"",hamEff:0.4,stlDef:0.25,netEff:""},{teamId:"Ackland",win:30,lose:20,winPer:"",ptsFor:8.35,ptsAgainst:6.89,netScore:"",hamEff:0.43,stlDef:0.26,netEff:""},{teamId:"Gosgens",win:39,lose:15,winPer:"",ptsFor:9.14,ptsAgainst:5.44,netScore:"",hamEff:0.41,stlDef:0.2,netEff:""}];
const allGames = []

// Get a reference to the table
const table = document.getElementById("tarray");

// Loop through the array of objects
for (const obj of allTeams) {
  // Create a new row
  const row = table.insertRow();

  // Insert cells for the object's properties
  const teamCell = row.insertCell();
  teamCell.innerHTML = obj.teamId;
  const winCell = row.insertCell();
  winCell.innerHTML = obj.win;
  const loseCell = row.insertCell();
  loseCell.innerHTML = obj.lose;
  const winPerCell = row.insertCell();
  winPerCell.innerHTML = Math.round((obj.win / (obj.win + obj.lose))*100)/100;
  const ptsForCell = row.insertCell();
  ptsForCell.innerHTML = obj.ptsFor;
  const ptsAgCell = row.insertCell();
  ptsAgCell.innerHTML = obj.ptsAgainst;
  const netCell = row.insertCell();
  netCell.innerHTML = Math.round((obj.ptsFor - obj.ptsAgainst)*100)/100;
  const hamCell = row.insertCell();
  hamCell.innerHTML = obj.hamEff;
  const stealCell = row.insertCell();
  stealCell.innerHTML = obj.stlDef;
  const netEffCell = row.insertCell();
  netEffCell.innerHTML = Math.round((obj.hamEff - obj.stlDef)*100)/100;
}

// Get a reference to the table
const gtable = document.getElementById("garray");

// Loop through the array of objects
for (const obj of allGames) {
  // Create a new row
  const row = gtable.insertRow();

  // Insert cells for the object's properties
  const gameCell = row.insertCell();
  gameCell.innerHTML = obj.gameId;
  const tournCell = row.insertCell();
  tournCell.innerHTML = obj.tournament;
  const dateCell = row.insertCell();
  dateCell.innerHTML = obj.date;
  const t1Cell = row.insertCell();
  t1Cell.innerHTML = obj.team1.teamId;
  const t2Cell = row.insertCell();
  t2Cell.innerHTML = obj.team2;
  const ovunCell = row.insertCell();
  ovunCell.innerHTML = obj.ovUnd;
  const ovunlineCell = row.insertCell();
  ovunlineCell.innerHTML = obj.ovUndLine;
  const t1stoddsCell = row.insertCell();
  t1stoddsCell.innerHTML = obj.team1StraightOdds;
  const t2stoddsCell = row.insertCell();
  t2stoddsCell.innerHTML = obj.team2StraightOdds;
  const t1lnoddsCell = row.insertCell();
  t1lnoddsCell.innerHTML = obj.team1StraightOdds;
  const t2lnoddsCell = row.insertCell();
  t2lnoddsCell.innerHTML = obj.team2StraightOdds;
  const spreadCell = row.insertCell();
  spreadCell.innerHTML = obj.ptsSprd;
 
}

function submitForm() {
  var input = document.getElementById("gameName").value;
  overUnder(input);
}