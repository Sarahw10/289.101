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

function puckBigger(){
    if (puck_x >= 450 && puck_x <= 520 && puck_y >= 250 && puck_y <= 320){
        puck.style.height= '20px';
        puck.style.width= '20px';
    }
    else puck.style.height= '10px';
        puck.style.width= '10px';
    }

function puckSmaller(){
    if (puck_x >= 140 && puck_x <= 100 && puck_y >= 50 && puck_y <= 90){
        puck.style.height= '5px';
        puck.style.width= '5px';
    }
    else puck.style.height= '10px';
        puck.style.width= '10px';
    }

//move left
document.getElementById('left').addEventListener('click', function(){
    puck_x -= speed;
    puck.style.left = puck_x + 'px';
    logCoordinates();
    puckBigger();
    puckSmaller();
})

// move right
document.getElementById('right').addEventListener('click', function(){
    puck_x += speed;
    puck.style.left = puck_x + 'px';
    logCoordinates();
    checkCollision();
    puckBigger();
    puckSmaller();
})

// move up
document.getElementById('up').addEventListener('click', function(){
    puck_y -= speed;
    puck.style.top = puck_y + 'px';
    logCoordinates();
    checkCollision();
    puckBigger();
    puckSmaller();
})

// move down
document.getElementById('down').addEventListener('click', function(){
    puck_y += speed;
    puck.style.top = puck_y + 'px';
    logCoordinates();
    checkCollision();
    puckBigger();
    puckSmaller();
})