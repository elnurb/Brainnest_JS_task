//  Write a JavaScript program to find the diagonal of a square where the length of each side is 9 

var a = 9;
function diognal_square(){
    document.write("Diognal of square:");
    document.write("<br/>");
    document.write("d = "+a * Math.sqrt(2));
    document.write("<br/>");
    console.log(a * Math.sqrt(2));
}
diognal_square();

// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6 and 7.

const b = 5;
const c = 6;
const d = 7;
const e = (b+c+d)/2;
function triangle(){
    document.write("<br/>");
    document.write("Perimeter and area of triangle:")
    document.write("<br/>");
    document.write("p = "+ e);
    document.write("<br/>");
    document.write("S = " +Math.sqrt(e*(e-b)*(e-c)*(e-d)));
    document.write("<br/>");
    console.log(e);
    console.log(Math.sqrt(e*(e-b)*(e-c)*(e-d)));
}
triangle();

// Write a JavaScript program to find the circumference and surface area of a circle whose radius is 4.
// i. When trying to find these values, you will need to use PI

var r = 4;
var PI =3.14;
function surface_area(){
    document.write("<br/>");
    document.write("surface area of circle:");
    document.write("<br/>");
    document.write("S=" + PI * Math.pow(r,2));
    document.write("<br/>");
    console.log(PI*Math.pow(r,2));
    
}
surface_area();

function circumference(){
    document.write("<br/>");
    document.write("circumference of circle:");
    document.write("<br/>");
    document.write("C = "+2 * PI * r);
    console.log(2* PI * r);
}
circumference();



