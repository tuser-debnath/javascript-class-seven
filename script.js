// JavaScript Object

// Array Example
const userArray = ["Pritom", "Debnath", 2010, "Six"];
console.log(userArray);
console.log(userArray[0]);

// Object Example
const userObject = {
  firstName: "Pritom",
  lastName: "Debnath",
  birthYear: 2010,
  className: "One",
};
console.log(userObject);
console.log(userObject["firstName"]);
console.log(userObject.lastName);
console.log(userObject.birthYear);

// Add New Item In Object

// Example One Using Dot Notation
userObject.hobby = "Playing Cricket";
console.log(userObject);
console.log(userObject.hobby);

// Example Two Using Bracket Notation
userObject["birthPlace"] = "Jashore";
console.log(userObject);
console.log(userObject["birthPlace"]);

// Another Object Example With Boolean Value & Using Function Inside Object
// Example One
const userObjectTwo = {
  firstName: "Tuser",
  lastName: "Debnath",
  isJob: true,
  calculateAge: function (birthYear) {
    return 2022 - birthYear;
  },
};
console.log(userObjectTwo);
console.log(userObjectTwo.isJob);
console.log(userObjectTwo.calculateAge(1999));
console.log(userObjectTwo["calculateAge"](1999));

// Example Two With JavaScript This Keyword
const fruitList = {
  bananaPrice: 100,
  mangoPrice: 150,
  applePrice: 170,
  orangePrice: 200,
  fruitPrice: function () {
    return this.orangePrice - this.applePrice;
  },
  fruitPriceDetails: function () {
    return `Banana Price: ${this.bananaPrice}, Mango Price: ${this.mangoPrice}, Apple Price: ${this.applePrice}, Orange Price: ${this.orangePrice}`;
  },
};
console.log(fruitList.fruitPrice());
console.log(fruitList.fruitPriceDetails());

// JavaScript Loop

// For Loop

// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");
// console.log("Task 5");
// console.log("Task 6");
// console.log("Task 7");
// console.log("Task 8");
console.log("For Loop Output");

for (let i = 1; i <= 3; i++) {
  console.log(`Task ${i}`);
}

// While Loop

// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");
// console.log("Task 5");
// console.log("Task 6");
console.log("While Loop Output");

let n = 1;
while (n <= 4) {
  console.log(`Task ${n}`);
  n++;
}

// Loop In Array

const newArray = ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5", "Data 6"];

console.log(newArray);
// console.log(newArray[0]);
// console.log(newArray[1]);
// console.log(newArray[2]);
// console.log(newArray[3]);
// console.log(newArray[4]);

// Loop In Array Using Forward Loop
console.log("Loop In Array Using Forward Loop Output");

for (let i = 0; i < newArray.length; i++) {
  console.log(newArray[i]);
}

// Loop In Array Using Backwards Loop
console.log("Loop In Array Using Backwards Loop Output");

for (i = newArray.length - 1; i >= 0; i--) {
  console.log(newArray[i]);
}

// Loop Break
console.log("Loop Break Output");

for (let i = 0; i < newArray.length; i++) {
  if (i == 4) break;
  console.log(newArray[i]);
}

// Loop Continue
console.log("Loop Continue Output");

for (let i = 0; i < newArray.length; i++) {
  if (i == 4) continue;
  console.log(newArray[i]);
}

// A New Array

const newValue = [
  "Value 1",
  "Value 2",
  "Value 3",
  "Value 4",
  "Value 5",
  "Value 6",
  "Value 7",
  "Value 8",
];

// indexOf
console.log(newValue.indexOf("Value 5"));
console.log(newValue.indexOf("Value 2"));
console.log(newValue.indexOf("Value 10")); // If Not In The Array Then It Will Return -1

// Includes
console.log(newValue.includes("Value 7"));
console.log(newValue.includes("Value 9"));
