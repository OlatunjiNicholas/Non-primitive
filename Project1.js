// // 1.calculate the sum of number in array
const sum = (a,b,c,d,e) => (a+b+c+d+e);
console.log(sum(2,4,6,8,10))

            // or

function sum(a,b,c,d,e){
    console.log(a+b+c+d+e)
}
sum(2,3,4,5,6)

//2.create a length converter function
const meter3centimeter = (meters) => meters * 20
console.log(meter3centimeter (10))

// 3.print all even numbers from 0-100
for (let h= 0; h<=100; h+=2)(
    console.log(h +  'h')
)

// 4.print table containing multiple tables
function multiple(a,b){
    return a*b
}
let multiplication = multiple(10,3)
console.log(multiplication)

            or

let multiple = (d,e) => (d*e);
console.log(multiple(6,9))

// 5. create a function that reverse array
const array = ["bola", "tayo", "adeola", 100, 694];
array.reverse();
console.log(array)

// 6. sort an array of string in alphabetical order
const unsorted = ["H", "g", "C", "D", "E", "F","A","B"];
console.log(unsorted)
unsorted.sort();
console.log(unsorted)

             or
const unsorted = ["H", "g", "C", "D", "E", "F","A","B"];
console.log(unsorted)
const sorted = unsorted.sort(
    (a,b) => a.localeCompare(b)
);
console.log({sorted})

// 7. sort an array number in descending order
const numbers = [1, 2,3, 4, 5, 6,];
console.log(numbers)
numbers.reverse()
console.log(numbers)

// 8. Return a boolean if a number is divided by 10
let data = (g,h) => (g/h)
    console.log(data(200,10))
if(20,10){
    console.log("true");
}
else{
    console.log("false")
}

// 9. Return the number of vowels in string 
const vowels = ['a','e','i','o','u'];
console.log(vowels)
console.log(vowels.length)

// 10. create a function that filter out negative numbers
let numbers = [12, -43, -10,-21,45,44,55];
numbers = numbers.filter(function(numbers){
    return numbers >-1
});
console.log(numbers)