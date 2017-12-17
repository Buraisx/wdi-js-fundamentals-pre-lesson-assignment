// prints pacman's diet
console.log('Pac-man eats ghosts for lunch.');
var ghosts = ['inky', 'blinky','pinky','clyde'];
console.log(ghosts.length);
for (var i = 0; i < ghosts.length; i++) {
	console.log('Their names are:' + ghosts[i]);
}

var inky = {};
inky.colour = 'Cyan';
inky.personality = 'Shadow'
console.log(inky);

function eatDot(){
	console.log("MUNCH!");
}

eatDot();