var canvas;
var ctx;
var cWidth = 700;
var cHeight = 500;
var ball;
var gravity;
var wind;
var gNumb = 24;
var time = 0;
var balls = [];
var b = 10;


window.onload = function () 
{
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	canvas.width = cWidth;
	canvas.height = cHeight;

	wind = new Vector (1,0);
	gravity = new Vector(0,4);
	for (var i = 0; i<b; i++)
	{
	balls[i] = new Ball(cWidth/2, cHeight/2, 10, "rgb(255,0,0)");
	balls[i].draw();
	}

	setInterval(function(){update();}, 1);
}

function update()
{
	ctx.clearRect(0,0,cWidth,cHeight);
	for (var i = 0; i<b; i++)
	{
	balls[i].update();
	balls[i].draw();
	}

	time = time + 1;

	if (time>gNumb-1)
	{
		time = 0;
	}
}

document.onkeydown = checkKey;

function checkKey(e)
{
	for (var i = 0; i<b; i++)
	{
	balls[i].addForce(wind);
	}
}



