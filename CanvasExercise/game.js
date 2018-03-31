// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);
// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "img/background.png";

//hero
var heroReady = true;
var heroImage = new Image();
heroReady.onload = function () {
    heroReady = true;
};
heroImage.src = "img/hero.png";
//monster
var monsterReady = true;
var monsterImage = new Image();
monsterReady.onload = function () {
    monsterReady = true;
};
monsterImage.src = "img/monster.png";

//game object
var hero = {
    speed : 256
};
var monster = {};
var monsterCaught = 0;

//keyboard control
var keyDown = {};
addEventListener("keydown", function (e) {
    keyDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
    delete keyDown[e.keyCode];
}, false);
//保存上一monster位置
// var monsterX;
// var monsterY;

// reset
var reset = function () {
    if (monsterCaught > 0) {
        hero.x = monsterX;
        hero.y = monsterY;    
    } else {
        hero.x = 32 + (Math.random() * (canvas.width  - 64));
        hero.y = 32 + (Math.random() * (canvas.height - 64));
    }
    monster.x = 32 + (Math.random() * (canvas.width  - 64));
    monster.y = 32 + (Math.random() * (canvas.height  - 64));
    monsterX = monster.x;
    monsterY = monster.y;
};

//update
var update = function (modifier) {
    if (38 in keyDown) {
		hero.y -= hero.speed * modifier;
	}
	if (40 in keyDown) {
		hero.y += hero.speed * modifier;
	}
	if (37 in keyDown) {
		hero.x -= hero.speed * modifier;
	}
	if (39 in keyDown) {
		hero.x += hero.speed * modifier;
	}

	// Are they touching?
	if (
		hero.x <= (monster.x + 32)
		&& monster.x <= (hero.x + 32)
		&& hero.y <= (monster.y + 32)
		&& monster.y <= (hero.y + 32)
	) {
		++monsterCaught;
		reset();
	}
};

//draw
var draw = function () {
    
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 0);
    }
    if (heroReady) {
        ctx.drawImage(heroImage, hero.x, hero.y);
    }
    if (monsterReady) {
        ctx.drawImage(monsterImage, monster.x, monster.y);
    }
    ctx.fillStyle = "rgb(250, 250,250)";
    ctx.font = "25px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("caught times: " + monsterCaught, 35, 35);
};
var main = function () {
    var now = Date.now();
    var delta = now - then;
    update(delta / 1000);
    draw();
    then = now;
    requestAnimationFrame(main);
};

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

var then = Date.now();
reset();
main();