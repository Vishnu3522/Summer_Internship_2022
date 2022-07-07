// First Questions
// Sides of triangle are:
var a = 5;
var b = 6;
var c = 7;
// Now we have to calculate the area of triangle on heron's formula as
// we have to claculate area of triangle using three sides

// Now we have to calculate perimeter of triangle

var s = (a+b+c)/2;
// console.log(s);

var area = Math.sqrt(s*((s-a)*(s-b)*(s-c)));
console.log(area);


