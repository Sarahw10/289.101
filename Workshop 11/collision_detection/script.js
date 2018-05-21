/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)
- create an item that makes the puck bigger
- create an item that makes the puck smaller

*/
//declaring variables for puck
var puck_x = 210;
var puck_y = 210;
var speed = 40;
var puck = document.getElementById('puck');
var gap = document.getElementById('gap');

puck.style.top = puck_y + 'px';
puck.style.left = puck_x + 'px';

function logCoordinates(){
    console.log('x=' + puck_x + 'y=' + puck_y)
}

function checkCollision(){
    if (puck_x >= 250 && puck_x <= 350 && puck_y >= 140 && puck_y <= 240){
        gap.style.backgroundColor= 'red';
    }
    else gap.style.backgroundColor= 'white';
    }

function teleport(){
    if (puck_x >=20 && puck_x <= 600 && puck_y >= 0 && puck_y <= 400){
        
    }

//move left
document.getElementById('left').addEventListener('click', function(){
    puck_x -= speed;
    puck.style.left = puck_x + 'px';
    logCoordinates();
    checkCollision();
    teleport();
    
})

// move right
document.getElementById('right').addEventListener('click', function(){
    puck_x += speed;
    puck.style.left = puck_x + 'px';
    logCoordinates();
    checkCollision();
    teleport();
})

// move up
document.getElementById('up').addEventListener('click', function(){
    puck_y -= speed;
    puck.style.top = puck_y + 'px';
    logCoordinates();
    checkCollision();
    teleport();
})

// move down
document.getElementById('down').addEventListener('click', function(){
    puck_y += speed;
    puck.style.top = puck_y + 'px';
    logCoordinates();
    checkCollision();
    teleport();
})