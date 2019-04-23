var yourScore = $("#yourScore");
//var yourScore = (yellow, green, red, blue.onclick(math.sum));
var scoreCurrent = 0;
var Target = $("#Target");
var scoreTarget = getRandomValue(10, 4);
Target.text(scoreTarget);

function addToScore(val) {
  var numberToAdd = parseInt(val);
  scoreCurrent += numberToAdd;

  yourScore.text(scoreCurrent);
}

var yellow = $("#yellow");
console.log(yellow.value);

var green = $("#green");
console.log(green.value);

var red = $("#red");
console.log(red.value);

var blue = $("#blue");
console.log(blue.value);

yellow.on('click', function () {
  //this refers to yellow
  addToScore(this.value);
  checkPlayerScore();
});

green.on('click', function () {
  // this refers to green
  addToScore(this.value);
  checkPlayerScore();
});

red.on('click', function () {
  // this refers to red
  addToScore(this.value);
  checkPlayerScore();
});

blue.on('click', function () {
  // this refers to blue
  addToScore(this.value);
  checkPlayerScore();
});

function getRandomValue(a, b) {
  return Math.floor((Math.random() * a) + b);
}

function checkPlayerScore() {
  playerInt.text(yourScore);
  Target.text(scoreTarget);
  if (playerInt === targetInt) {
    alert('Win!');
  } else if (playerInt > targetInt) {
    alert('Lose!');
  }
}

console.log(getRandomValue(10, 4));