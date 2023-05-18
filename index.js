function Pawn(id, color, isHome, originField, finished, stepsTaken, canMove, position){
  this.id = id;
  this.color = color;
  this.isHome = isHome;
  this.originField = originField;
  this.finished = finished;
  this.stepsTaken = stepsTaken;
  this.canMove = canMove;
  this.position = position;
}

var isGameStarted = false;

var bluePawn1 = new Pawn("bluePawn1","blue",true,"blueHomeField1",false,0, false, 0);
var bluePawn2 = new Pawn("bluePawn2","blue",true,"blueHomeField2",false,0, false, 0);
var bluePawn3 = new Pawn("bluePawn3","blue",true,"blueHomeField3",false,0, false, 0);
var bluePawn4 = new Pawn("bluePawn4","blue",true,"blueHomeField4",false,0, false, 0);
var bluePawns = [bluePawn1, bluePawn2, bluePawn3, bluePawn4];

var yellowPawn1 = new Pawn("yellowPawn1","yellow",true,"yellowHomeField1",false,0, false, 0);
var yellowPawn2 = new Pawn("yellowPawn2","yellow",true,"yellowHomeField2",false,0, false, 0);
var yellowPawn3 = new Pawn("yellowPawn3","yellow",true,"yellowHomeField3",false,0, false, 0);
var yellowPawn4 = new Pawn("yellowPawn4","yellow",true,"yellowHomeField4",false,0, false, 0);
var yellowPawns = [yellowPawn1, yellowPawn2, yellowPawn3, yellowPawn4];

var greenPawn1 = new Pawn("greenPawn1","green",true,"greenHomeField1",false,0, false, 0);
var greenPawn2 = new Pawn("greenPawn2","green",true,"greenHomeField2",false,0, false, 0);
var greenPawn3 = new Pawn("greenPawn3","green",true,"greenHomeField3",false,0, false, 0);
var greenPawn4 = new Pawn("greenPawn4","green",true,"greenHomeField4",false,0, false, 0);
var greenPawns = [greenPawn1, greenPawn2, greenPawn3, greenPawn4];

var redPawn1 = new Pawn("redPawn1","red",true,"redHomeField1",false,0, false, 0);
var redPawn2 = new Pawn("redPawn2","red",true,"redHomeField2",false,0, false, 0);
var redPawn3 = new Pawn("redPawn3","red",true,"redHomeField3",false,0, false, 0);
var redPawn4 = new Pawn("redPawn4","red",true,"redHomeField4",false,0, false, 0);
var redPawns = [redPawn1,redPawn2,redPawn3,redPawn4];

var allPawns = [bluePawns, yellowPawns, greenPawns, redPawns]

var lastBlueEndingField = 4;
var lastYellowEndingField = 4;
var lastGreenEndingField = 4;
var lastRedEndingField = 4;

var allLastEndingFields = [lastBlueEndingField, lastYellowEndingField, lastGreenEndingField, lastRedEndingField];

var startingBluePosition = 31;
var startingYellowPosition = 1;
var startingGreenPosition = 11;
var startingRedPosition = 21;

var allstartingPositions = [startingBluePosition, startingYellowPosition, startingGreenPosition, startingRedPosition];

var round = 0;
StartingGame();

function StartingGame(){
  if (isGameStarted == false) {
    $(this).on("keydown",function(){
      nextTurn(-1);
    });
  }
}


function PlayerWon(color){
  $(".main-header").html(`Player <span class="${color}-text"> ${color} player</span> won!!! <br> Press any key to play again`);
}

//Returning pawns to homes
function ReturnToOriginField(pawnId){
  switch (pawnId) {
    case bluePawn1.id:
      $("#blueHomeField1").html(`<div class="pawn blue-pawn" id="${bluePawn1.id}"></div>`);
      bluePawn1.stepsTaken = 0;
      bluePawn1.position = 0;
      bluePawn1.canMove = false;
      bluePawn1.isHome = true;
      bluePawn1.finished = false;
      break;
    case bluePawn2.id:
      $("#blueHomeField2").html(`<div class="pawn blue-pawn" id="${bluePawn2.id}"></div>`);
      bluePawn2.stepsTaken = 0;
      bluePawn2.position = 0;
      bluePawn2.canMove = false;
      bluePawn2.isHome = true;
      bluePawn2.finished = false;
      break;
    case bluePawn3.id:
      $("#blueHomeField3").html(`<div class="pawn blue-pawn" id="${bluePawn3.id}"></div>`);
      bluePawn3.stepsTaken = 0;
      bluePawn3.position = 0;
      bluePawn3.canMove = false;
      bluePawn3.isHome = true;
      bluePawn3.finished = false;
      break;
    case bluePawn4.id:
      $("#blueHomeField4").html(`<div class="pawn blue-pawn" id="${bluePawn4.id}"></div>`);
      bluePawn4.stepsTaken = 0;
      bluePawn4.position = 0;
      bluePawn4.canMove = false;
      bluePawn4.isHome = true;
      bluePawn4.finished = false;
      break;
    case yellowPawn1.id:
      $("#yellowHomeField1").html(`<div class="pawn yellow-pawn" id="${yellowPawn1.id}"></div>`);
      yellowPawn1.stepsTaken = 0;
      yellowPawn1.position = 0;
      yellowPawn1.canMove = false;
      yellowPawn1.isHome = true;
      yellowPawn1.finished = false;
      break;
    case yellowPawn2.id:
      $("#yellowHomeField2").html(`<div class="pawn yellow-pawn" id="${yellowPawn1.id}"></div>`);
      yellowPawn2.stepsTaken = 0;
      yellowPawn2.position = 0;
      yellowPawn2.canMove = false;
      yellowPawn2.isHome = true;
      yellowPawn2.finished = false;
      break;
    case yellowPawn3.id:
      $("#yellowHomeField3").html(`<div class="pawn yellow-pawn" id="${yellowPawn3.id}"></div>`);
      yellowPawn3.stepsTaken = 0;
      yellowPawn3.position = 0;
      yellowPawn3.canMove = false;
      yellowPawn3.isHome = true;
      yellowPawn3.finished = false;
      break;
    case yellowPawn4.id:
      $("#yellowHomeField4").html(`<div class="pawn yellow-pawn" id="${yellowPawn4.id}"></div>`);
      yellowPawn4.stepsTaken = 0;
      yellowPawn4.position = 0;
      yellowPawn4.canMove = false;
      yellowPawn4.isHome = true;
      yellowPawn4.finished = false;
      break;
    case greenPawn1.id:
      $("#greenHomeField1").html(`<div class="pawn green-pawn" id="${greenPawn1.id}"></div>`);
      greenPawn1.stepsTaken = 0;
      greenPawn1.position = 0;
      greenPawn1.canMove = false;
      greenPawn2.isHome = true;
      greenPawn1.finished = false;
      break;
    case greenPawn2.id:
      $("#greenHomeField2").html(`<div class="pawn green-pawn" id="${greenPawn2.id}"></div>`);
      greenPawn2.stepsTaken = 0;
      greenPawn2.position = 0;
      greenPawn2.canMove = false;
      greenPawn2.isHome = true;
      greenPawn2.finished = false;
      break;
    case greenPawn3.id:
      $("#greenHomeField3").html(`<div class="pawn green-pawn" id="${greenPawn3.id}"></div>`);
      greenPawn3.stepsTaken = 0;
      greenPawn3.position = 0;
      greenPawn3.canMove = false;
      greenPawn3.isHome = true;
      greenPawn3.finished = false;
      break;
    case greenPawn4.id:
      $("#greenHomeField4").html(`<div class="pawn green-pawn" id="${greenPawn4.id}"></div>`);
      greenPawn4.stepsTaken = 0;
      greenPawn4.position = 0;
      greenPawn4.canMove = false
      greenPawn4.isHome = true;
      greenPawn4.finished = false;
      break;
    case redPawn1.id:
      $("#redHomeField1").html(`<div class="pawn red-pawn" id="${redPawn1.id}"></div>`);
      redPawn1.stepsTaken = 0;
      redPawn1.position = 0;
      redPawn1.canMove = false;
      redPawn1.isHome = true;
      redPawn1.finished = false;
      break;
    case redPawn2.id:
      $("#redHomeField2").html(`<div class="pawn red-pawn" id="${redPawn2.id}"></div>`);
      redPawn2.stepsTaken = 0;
      redPawn2.position = 0;
      redPawn2.canMove = false;
      redPawn2.isHome = true;
      redPawn2.finished = false;
      break;
    case redPawn3.id:
      $("#redHomeField3").html(`<div class="pawn red-pawn" id="${redPawn3.id}"></div>`);
      redPawn3.stepsTaken = 0;
      redPawn3.position = 0;
      redPawn3.canMove = false;
      redPawn3.isHome = true;
      redPawn3.finished = false;
      break;
    case redPawn4.id:
      $("#redHomeField4").html(`<div class="pawn red-pawn" id="${redPawn4.id}"></div>`);
      redPawn4.stepsTaken = 0;
      redPawn4.position = 0;
      redPawn4.canMove = false;
      redPawn4.isHome = true;
      redPawn4.finished = false;
      break;
    default:

  }
}

//Moving pawns from home
function MovingFromHome(pawnId, newPosition, currentPlayer){
    for (var i = 0; i < allPawns[currentPlayer].length; i++) {
      if(allPawns[currentPlayer][i].id == pawnId){
        $("#" + allPawns[currentPlayer][i].originField).html('');
        allPawns[currentPlayer][i].position = newPosition;
        allPawns[currentPlayer][i].canMove = true;
        allPawns[currentPlayer][i].isHome = false;
        allPawns[currentPlayer][i].stepsTaken = 1;
      }
    }
    for (var i = 0; i < allPawns[currentPlayer].length; i++) {
      $("#" + allPawns[currentPlayer][i].id).removeClass("active-pawn");
    }
}

//Moving pawns
function Move(pawnId, color, oldPosition, newPosition, currentPlayer){
    for (var i = 0; i < allPawns[currentPlayer].length; i++) {
      if(allPawns[currentPlayer][i].id == pawnId){
        if($("#Field" + newPosition).html() != ''){
          StepOnMeMommy($("#Field" + newPosition).attr("id"));
        }
        $("#Field" + oldPosition).html('');
        $("#Field" + newPosition).html(`<div class="pawn `+ color +`-pawn" id="${pawnId}"></div>`);
        allPawns[currentPlayer][i].position = newPosition;
      }
    }
}

//Moving to ending field
function MoveToEndField(pawnId, color, oldSteps, move, currentPlayer){
  var newPosition = CalculateNextEndFieldPosition(oldSteps, move, color);
  var oldPosition = CalculateCurrentPosition(oldSteps, color, currentPlayer);
    for (var i = 0; i < allPawns[currentPlayer].length; i++) {
      if(allPawns[currentPlayer][i].id == pawnId){
        if(allPawns[currentPlayer][i].stepsTaken < 41){
          oldPosition.html('');
        }
        else{
          oldPosition.html('');
        }
        newPosition.html(`<div class="pawn ` + color +`-pawn" id="${pawnId}"></div>`);
    }
  }
    if($("#" + color + "EndingField4").html() != ''){
      for (var i = 0; i < allPawns[currentPlayer].length; i++) {
        if(allPawns[currentPlayer][i].id == $("#" + color + "endingField4 " + "." + color + "-pawn").attr("id")){
          allPawns[currentPlayer][i].finished = true;
          allLastEndingFields[currentPlayer] = 3;

        }
      }
      if($("#" + color + "EndingField3").html() != ''){
        for (var i = 0; i < allPawns[currentPlayer].length; i++) {
          if(allPawns[currentPlayer][i].id == $("#" + color + "endingField3 " + "." + color + "-pawn").attr("id")){
            allPawns[currentPlayer][i].finished = true;
            allLastEndingFields[currentPlayer] = 2;

          }
        }
          if($("#" + color + "EndingField2").html() != ''){
            for (var i = 0; i < allPawns[currentPlayer].length; i++) {
              if(allPawns[currentPlayer][i].id == $("#" + color + "endingField2 " + "." + color + "-pawn").attr("id")){
                allPawns[currentPlayer][i].finished = true;
                allLastEndingFields[currentPlayer] = 1;

              }
            }
              if($("#" + color + "EndingField1").html() != ''){
                GameEnd(color);
              }
        }
      }
  }
}

function GameEnd(color){
  $(".main-header").html(`<span class="${color}-text">Player ${color} player</span> won!!! <br> Press any key to play again!`);
  for (var i = 0; i < allPawns.length; i++) {
    for (var j = 0; j < allPawns[i].length; j++) {
      ReturnToOriginField(allPawns[i][j].id);
      isGameStarted = false;
      StartingGame();
    }
  }
}

//standing on another pawn

function StepOnMeMommy(fieldId){
  ReturnToOriginField($("#" + fieldId + " .pawn").attr("id"));
  $("#" + fieldId).html("");
}

//Calculating next pawn position
function CalculateNextPosition(currentPosition, move){
  var nextPosition;
  if(currentPosition + move > 40){
    nextPosition = currentPosition + move - 40;
  }
  else{
    nextPosition = currentPosition + move;
  }
  return nextPosition;
}

function OldEndingFieldPosition(steps, color){
  switch (steps) {
    case 41:
      return $("#" + color + "EndingField1");
      break;
    case 42:
      return $("#" + color + "EndingField2");
      break;
    default:
    case 43:
      return $("#" + color + "EndingField3");
      break;
    case 42:
      return $("#" + color + "EndingField4");
      break;
    }
}

function CalculateNextEndFieldPosition(steps, move, color){
  var nextPosition;
  switch (steps + move) {
    case 41:
      return $("#" + color + "EndingField1");
      break;
    case 42:
      return $("#" + color + "EndingField2");
      break;
    default:
    case 43:
      return $("#" + color + "EndingField3");
      break;
    case 44:
      return $("#" + color + "EndingField4");
      break;
      }
    }

//calculating currentPosition based on steps
function CalculateCurrentPosition(steps, color, currentPlayer){
  var currentPosition;
    if(steps <= 40){
      if(steps + allstartingPositions[currentPlayer] <= 41){
        currentPosition = steps + allstartingPositions[currentPlayer] - 1;
        return $("#Field" + currentPosition);
      }
      else if(steps + allstartingPositions[currentPlayer] > 41){
        currentPosition = steps + allstartingPositions[currentPlayer] - 41;
        return $("#Field" + currentPosition);
      }
    }
    else if(steps > 40){
      return $("#" + color + "EndingField" + (steps - 40));
    }
}

function choosingToMoveFromHome(turn, currentPlayer){
  for (var i = 0; i < allPawns[currentPlayer].length; i++) {
    if(allPawns[currentPlayer][i].isHome == true){
      $("#" + allPawns[currentPlayer][i].id).addClass("active-pawn");
      $("#" + allPawns[currentPlayer][i].id).on("click", function(){
      $("."+ turn +"-pawn").off();
      if ($("#Field" + allstartingPositions[currentPlayer]).html() != '') {
        StepOnMeMommy($("#Field" + allstartingPositions[currentPlayer]).attr("id"));
      }
      MovingFromHome($(this).attr("id"),allstartingPositions[currentPlayer],currentPlayer);
      $("#Field" + allstartingPositions[currentPlayer]).html(`<div class="pawn ` + turn + `-pawn" id="${$(this).attr("id")}"></div>`);
      nextTurn(currentPlayer-1);
      });
    }
  }
}

function choosingToMove(turn, roll, pawnId, currentPlayer){
  var nextPos;
  var thisPawn;
    for (var i = 0; i < allPawns[currentPlayer].length; i++) {
      if(pawnId == allPawns[currentPlayer][i].id){
        thisPawn = allPawns[currentPlayer][i];
      }
    }
      if(thisPawn.stepsTaken + roll <= 40){
        nextPos = CalculateNextPosition(thisPawn.position,roll);
        Move(thisPawn.id,turn,thisPawn.position, nextPos, currentPlayer);
        thisPawn.stepsTaken += roll;
      }
      //Nie czyta allPawns[currentPlayer][i].stepsTaken
      else if (thisPawn.stepsTaken + roll > 40 && thisPawn.stepsTaken + roll < 45 && thisPawn.canMove == true) {
        if($("#" + turn + "EndingField" + thisPawn.stepsTaken - 39 + " .pawn").hasClass(turn + "-pawn") == false){
          MoveToEndField(thisPawn.id, turn, thisPawn.stepsTaken, roll,currentPlayer);
          thisPawn.stepsTaken += roll;
        }
      }
      for (var i = 0; i < allPawns[currentPlayer].length; i++) {
        $("#" + allPawns[currentPlayer][i].id).removeClass("active-pawn");
      }
}

function diceAnimation(finalRoll){
  var test = 0;
  for (var i = 1; i < 20; i++) {
    setTimeout(function(){
      $(".dice").attr('src','images/dice' + DiceRoll() + '.png');
  },i*150);
}

  setTimeout(function(){
    $(".dice").attr('src','images/dice' + finalRoll + '.png');
  },3000)
}

function DiceRoll(){
  return Math.floor(Math.random()*6 + 1);
}

function NextPlayer(current){
  if(current < 3){
    return current + 1;
  }
  else{
    return 0;
  }
}

function Turn (turn, roll, currentPlayer){
  var howManyCanMove = 0;
  round += 1;
  console.log("currentRound: " + round);
  console.log("currentColor: " + turn);
  console.log("currentRoll: " + roll)
    //Checking if player can move to next position with single pawns
    for (var i = 0; i < allPawns[currentPlayer].length; i++) {
      if($("#Field" + CalculateNextPosition(allPawns[currentPlayer][i].position, roll) + " .pawn").hasClass(turn + '-pawn') == true){
        allPawns[currentPlayer][i].canMove = false;
      }
      else if($("#Field" + CalculateNextPosition(allPawns[currentPlayer][i].position, roll) + " .pawn").hasClass(turn + '-pawn') == false && allPawns[currentPlayer][i].isHome == false){
        allPawns[currentPlayer][i].canMove = true;
      }
      if (allPawns[currentPlayer][i].stepsTaken + roll > 40 && allPawns[currentPlayer][i].stepsTaken + roll < 45 ){
        for (var j = 0; j < allPawns[currentPlayer].length; j++) {
          if(allPawns[currentPlayer][i] != allPawns[currentPlayer][j]){
            if(allPawns[currentPlayer][i].stepsTaken + roll == allPawns[currentPlayer][j].stepsTaken){
              allPawns[currentPlayer][i].canMove = false;
              break;
            }
            else{
              allPawns[currentPlayer][i].canMove = true;
            }
          }
        }
        }
        else if(allPawns[currentPlayer][i].stepsTaken + roll < 44){
          allPawns[currentPlayer].canMove == false;
        }
        if(allPawns[currentPlayer][i].stepsTaken + roll > 44){
          allPawns[currentPlayer][i].canMove = false;
        }
        if(allPawns[currentPlayer][i].finished == true){
          allPawns[currentPlayer][i].canMove = false;
        }
      }
    for (var i = 0; i < 4; i++) {
      if(allPawns[currentPlayer][i].canMove == true){
        howManyCanMove += 1;
      }
    }
    //Player can't move in this case so it skips to next player turn
    if(howManyCanMove == 0 && roll < 6 && roll > 0){

      setTimeout(function(){
        nextTurn(currentPlayer);
      }, 3000);
    }
    //Player can only move pawn out of a "home" so he must choose one of them
    else if (howManyCanMove == 0 && roll == 6){
      setTimeout(function(){
        choosingToMoveFromHome(turn, currentPlayer);
        roll = 0;
      },3000);
    }
    //Player can move only one pawn so it goes by itself
    else if(howManyCanMove >= 1 && roll == 6){
      setTimeout(function(){
        if ($("#Field" + allstartingPositions[currentPlayer] + " .pawn").hasClass(turn + "-pawn") == false) {
          choosingToMoveFromHome(turn, currentPlayer);
        }
        for (var i = 0; i < allPawns[currentPlayer].length; i++) {
          if (allPawns[currentPlayer][i].canMove == true) {
            $("#" + allPawns[currentPlayer][i].id).addClass("active-pawn");
            $("#" + allPawns[currentPlayer][i].id).on("click", function(){
              $("."+ turn +"-pawn").off();
              choosingToMove(turn,roll, $(this).attr("id"), currentPlayer);
              nextTurn(currentPlayer-1);
              roll = 0;
            });
          }
        }
      },3000)
    }
    else if(howManyCanMove >=1 && roll < 6 && roll > 0){
      setTimeout(function(){
        for (var i = 0; i < allPawns[currentPlayer].length; i++) {
          if (allPawns[currentPlayer][i].canMove == true) {
            $("#" + allPawns[currentPlayer][i].id).addClass("active-pawn");
            $("#" + allPawns[currentPlayer][i].id).on("click", function(){
              $("."+ turn +"-pawn").off();
              choosingToMove(turn,roll, $(this).attr("id"), currentPlayer);
              roll = 0;
              nextTurn(currentPlayer);
            });
          }
        }
      },3000)
    }
}

function nextTurn(playerNumber){
  var turn;
  playerNumber = NextPlayer(playerNumber);
  if(playerNumber == 0){
    turn = "blue";
  }
  else if (playerNumber == 1){
    turn = "yellow";
  }
  else if(playerNumber == 2){
    turn = "green";
  }
  else if(playerNumber == 3){
    turn = "red";
  }
  $(".main-header").html(`It's <span class="${turn}-text"> ${turn} player</span> turn`);
  $(".dice").on("click", function(){
    $(".dice").off("click");
    var roll = DiceRoll();
    diceAnimation(roll)
    Turn(turn, roll, playerNumber);
  })
}
//Notatki na następne posiedzenie:
//sytuacja kiedy roll = 6 i canmove > 1
//Musisz dodać warunek: Pionek nie może się ruszyć, jesli stoi przed zajętym polem końcowym
