//Create a reference for canvas
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d"); 

//Give specific height and width to the car image
gc_W = 75;
gc_H = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

gc_X = 5;
gc_Y = 225;

function add() {
	//upload car, and background images on the canvas.
	bg_imgTag = new Image();
	bg_imgTag.onload = uploadBackground;
	bg_imgTag.src = background_image;

	gc_imgTag = new Image();
	gc_imgTag.onload = uploadgreencar;
	gc_imgTag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(bg_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(gc_imgTag, gc_X, gc_Y, gc_W, gc_H);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up() 
{

	if(gc_Y >= 0) {

		gc_Y = gc_Y - 10;
		console.log("When up arrow is pressed: X = " + gc_X + " | Y = " + gc_Y)
		uploadBackground();
		uploadgreencar();

	}

}


function down()
{
	if(gc_Y <= 300) {

		gc_Y = gc_Y + 10;
		console.log("When down arrow is pressed: X = " + gc_X + " | Y = " + gc_Y)
		uploadBackground();
		uploadgreencar();

	}
}

function left()
{
	if(gc_X >= 0) {

		gc_X = gc_X - 10;
		console.log("When left arrow is pressed: X = " + gc_X + " | Y = " + gc_Y)
		uploadBackground();
		uploadgreencar();

	}
}

function right()
{
	if(gc_X <= 725) {

		gc_X = gc_X + 10;
		console.log("When up arrow is pressed: X = " + gc_X + " | Y = " + gc_Y)
		uploadBackground();
		uploadgreencar();

	}
}
