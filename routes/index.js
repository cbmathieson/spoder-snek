var express = require('express')
var router  = express.Router()

// Handle POST request to '/start'
router.post('/start', function (req, res) {
  // NOTE: Do something here to start the game

  // Response data
  var data = {
    color: 'rgb(255,5,12)',
    secondary_color: 'rgb(0,5,6)',
    name: 'spoder snek',
    head_url: 'https://apprecs.org/gp/images/app-icons/300/08/com.aesir.bouncyspoderman.jpg',
    taunt: "giv me an snep bek",
    head_type: 'pixel',
    tail_type: 'pixel'
  }

  return res.json(data)
})

// Handle POST request to '/move'
router.post('/move', function (req, res) {
  // NOTE: Do something here to generate your move

  var input = req.body;

  printStats(input);

  // Response data
  var data = {
    move: 'right', // one of: ['up','down','left','right']
    taunt: 'Outta my way, snake!', // optional, but encouraged!
  }

  return res.json(data)
})

function printStats(input) {

  console.log(input.you.body.data);

  var yoSnakeBod = Object.keys(input.you.body);
  var allSnakes = Object.keys(input.snakes);
  var food = Object.keys(input.food);

  console.log("My Snake:");
  console.log("name: " + input.you.name);
  console.log("length: " + input.you.length);
  console.log("snake id: " + input.you.id);
  console.log("health: " + input.you.health);
  for(var i = 0; i < yoSnakeBod.length; i++){
    console.log("limb #" + i + ": " + yoSnakeBod[i].x + " " + yoSnakeBod[i].y);
  }
  console.log();

  console.log("Board Stats:");
  console.log("Game id: " + input.id);
  console.log("width: " + input.width);
  console.log("height: " + input.height);
  console.log("turn: " + input.turn);
  console.log();

  console.log("Snake List:");

  for(var k = 0; k < allSnakes.length; k++){
    console.log("snake #" + k);
    console.log("health: " + allSnakes[k].health);
    console.log("id: " + allSnakes[k].id);
    console.log("length: " + allSnakes[k].length);
    console.log("name: " + allSnakes[k].name);
    var thisSnakeBod = Object.keys(allSnakes[k].body);
    for(var j = 0; j < thisSnakeBod.length; j++){
      console.log("limb #" + j + ": " + thisSnakeBod[j].x + " " + thisSnakeBod[j].y);
    }
    console.log();
  }

  console.log();

  console.log("Food Locations:");
  for(var p = 0; p < food.length; p++) {
    console.log("Food item #" + p + ": " + food[p].x + " " + food[p].y);
  }
}

module.exports = router
