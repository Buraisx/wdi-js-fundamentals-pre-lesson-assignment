// pacman-objects-1.js
var inky = {};
inky.colour = 'Cyan';
inky.personality = 'Shadow';
console.log(inky);



// pacman-objects-2.js
var ghosts = {inky: 'Cyan', blinky: 'Red', pinky: 'Pink', clyde: 'Orange' };
console.log(ghosts);

console.log(ghosts['inky']); // => 'Cyan'
console.log(ghosts['blinky']); // => 'Red'