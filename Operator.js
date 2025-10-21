const side1 = 6
const side2 = 7
const side3 = 7

if(side1==side2 && side2==side3 && side1==side3)(
    console.log("equilateral triangle")
)
else if(side1===side2 || side2===side3 || side1===side3)(
    console.log("isosceles triangle")
)

else if(side1!=side2||side1!=side3||side2!=side3)(
    console.log("scalene triangle")
)