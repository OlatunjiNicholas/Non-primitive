const side1 = 5
const side2 = 6
const side3 = 7
// & means and
// || means or
// ! means Never 
// === means strictly equal(no different)
// == means equal (samethings but with little different) 
if(side1==side2 & side3)(
    console.log("equilateral triangle")
)
if(side1===side2 || side2===side3 || side1===side3)(
    console.log("isosceles triangle")
)
if(side1!=side2||side1!=side3||side2!=side3)(
    console.log("scalene triangle")
)