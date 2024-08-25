var fullName = prompt("Enter your Full Name:-");
console.log(fullName , "Please! Enter your Marks in the following Subject to find your Percantage");

var mathsMarks = Number(prompt("Please! enter your Obtained marks in Maths Subject:-"));
console.log("Your Maths Marks are:-" , mathsMarks);

var physicsMarks = Number(prompt("Please! enter your Obtained marks in Physics Subject:-"));
console.log("Your Physics Marks are:-" , physicsMarks);

var chemistryMarks = Number(prompt("Please! enter your Obtained marks in Chemistry Subject:-"));
console.log("Your Chemistry Marks are:-" , chemistryMarks);

var englishMarks = Number(prompt("Please! enter your Obtained marks in English Subject:-"));
console.log("Your English Marks are:-" , englishMarks);

var urduMarks = Number(prompt("Please! enter your Obtained marks in urdu Subject:-"));
console.log("your Urdu Marks are:-" , urduMarks);

var obtainedMarks = mathsMarks + physicsMarks + chemistryMarks + englishMarks + urduMarks;
var totalMarks = 500;
var percantage = obtainedMarks / totalMarks * 100;

console.log(fullName , "Your Total Marks in all Subjets are:-" , obtainedMarks);
console.log("And Your Percantage Is:-" , percantage , "%");
console.log("Thank You!");