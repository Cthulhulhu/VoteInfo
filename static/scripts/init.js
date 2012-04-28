// Here we will put our functions that get used in the js. That way they are loaded into memory on page load.
// By making them jquery prototypes they are easier to use.

$.fn.exampleFuntion = function( someVar ) {
	// This will do stuff.
	console.log("this is doing stuff!");

}