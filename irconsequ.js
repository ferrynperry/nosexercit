// Assume attr$5 is a function defined earlier in the code
function attr$5() {
    return "computed value";
}

// Define an object with a property 'attr' that is assigned the returned value from attr$5
var myObject = {
    attr: attr$5(),
    // Other properties can go here
};

console.log(myObject.attr); // Output: "computed value"
