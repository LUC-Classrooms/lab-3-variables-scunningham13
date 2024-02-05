/* Lab 3b - Declare Your Own Variables
 * Declare and use a variable in a P5 sketch
 * 
 */

//declare a global variable and assign it a number value on the next line:
var x = 75;

function setup() {
  createCanvas(400, 300); // creates a drawing canvas
}

function draw() {
  // background is drawn first
  background(200); // light gray

  // call a simple P5 drawing function, such as ellipse() using your new variable(s) in place of arguments
  ellipse(x,80,95,50);
  
}
