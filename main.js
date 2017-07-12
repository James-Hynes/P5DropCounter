let numberDrops = 0; // Holds the total number of drops
let volume = 0; // Holds the total volume

function setup() { // setup is run when the page loads
	createCanvas(800, 600); // creates a canvas which is 800 by 600
	document.body.appendChild(document.createElement('br')); // adds a line break in between the canvas and the button/input
	// this makes sure that the Button and Input are below the canvas
	let i = makeInput('setvolume'); // This is a custom function to create an input with an id = 'setvolume'
	i.setAttribute('placeholder', 'mL per drop'); // this sets the text that is shown in the input before you make any change to 'mL per drop'
	let b = makeButton('reset', 'Reset'); // Another custom function that makes a button with the id 'reset' and the text 'Reset'
	b.onclick = function() { // when the button is clicked
		numberDrops = 0; // set the number of drops to 0
		volume = 0; // set the volume to 0
	}
}

function draw() { // this is run ~60 times per second
	background(106, 154, 232); // draw a background with (Red=106, Blue=154, Green=232)
	textAlign(CENTER); // The position of text is drawn from the center instead of the top-left
	textSize(32); // font size 32
	text(`Drops: ${numberDrops}`, width / 2, height / 2); // Draw the text 'Drops: number of drops' at x = 1/2 the canvas width and y = 1/2 the canvas height
	text(`mL: ${volume}`, width / 2, (height / 2) + 50); // Draw the text 'mL: total volume' at x = 1/2 the canvas width and y = 1/2 the canvas height + 50
	text("Press the Down Arrow to begin filtration", width / 2, (height / 2) + 150);
}

function keyPressed() { // when a key is pressed
	if(keyCode === 40) { // if the keyCode is 40 (the down arrow)
		numberDrops++; // increase the number of drops by 1
		volume += parseInt(document.getElementById('setvolume').value) || 2; // increase the volume by the value of the input, or, if there isn't anything in the input,
		// just increase volume by 2
	}
}


/* 

I made the custom functions makeInput and makeButton so that I didn't have to import the entire p5.dom.js library, which is huge.
I put both of the functions inside the p5.js file so that they aren't visible in this file.

The makeInput function takes one parameter(id), and it just creates an input, sets its id to the id that is passed, and then appends it to the document
The makeButton function takes two parameters(id, text), it just makes a button, sets its id to the id that is passed, then sets its text to the text that is passed,
then appends it to the document.


*/

