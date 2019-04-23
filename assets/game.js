var yourScore = $("#yourScore");
//var yourScore = getElementById(yellow, green, red, blue.onclick(math.sum));
var scoreCurrent = 0;
var Target = $("#Target");
var scoreTarget = getRandomValue(10, 4);
Target.text(scoreTarget);

function addToScore(val) {
  var numberToAdd = parseInt(val);
 scoreCurrent += val;
  
  yourScore.text(scoreCurrent);
}

var yellow = $("#yellow");
console.log(yellow.value);

var green = document.getElementById("green");
//console.log(green.value);

var red = document.getElementById("red");
//console.log(red.value);

var blue = document.getElementById("blue");
//console.log(blue.value);

yellow.addEventListener('click', function() {
  //this refers to yellow
  addToScore(this.value);
  checkPlayerScore();
});

green.addEventListener('click', function() {
  // this refers to green
  addToScore(this.value);
  checkPlayerScore();
});

red.addEventListener('click', function() {
  // this refers to red
  addToScore(this.value);
  checkPlayerScore();
});

blue.addEventListener('click', function() {
  // this refers to blue
  addToScore(this.value);
  checkPlayerScore();
});

function getRandomValue (a, b){
  return Math.floor((Math.random() * a) + b);
}

function checkPlayerScore() {
  var playerInt = parseInt(yourScore.innerHTML);
  var targetInt = parseInt(Target.innerHTML);
  if (playerInt === targetInt) {
      alert('Win!');
  } else if (playerInt > targetInt) {
    alert('Lose!');
  } 
}

console.log(getRandomValue(10, 4));