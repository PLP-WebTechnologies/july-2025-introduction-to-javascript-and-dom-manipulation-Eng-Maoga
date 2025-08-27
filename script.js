// ============================
// Part 1: Variables & Conditionals
// ============================

// Event listener to check if number is even or odd
document.getElementById("checkBtn").addEventListener("click", function () {
  let userNumber = document.getElementById("userInput").value;

  if (userNumber === "") {
    document.getElementById("result").textContent = "Please enter a number.";
  } else if (userNumber % 2 === 0) {
    document.getElementById("result").textContent = userNumber + " is Even.";
  } else {
    document.getElementById("result").textContent = userNumber + " is Odd.";
  }
});

// ============================
// Part 2: Functions
// ============================

// Function 1: Calculate sum of two numbers
function calculateTotal(a, b) {
  return a + b;
}

// Function 2: Format a string
function greetUser(name) {
  return "Hello, " + name + "!";
}

// Button to demonstrate calculateTotal function
document.getElementById("calcTotalBtn").addEventListener("click", function () {
  let total = calculateTotal(4, 10);
  document.getElementById("totalOutput").textContent = "Total is: " + total;
});

// ============================
// Part 3: Loops
// ============================

// Loop Example 1: Display numbers 1 to 10
document.getElementById("loopBtn").addEventListener("click", function () {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear previous
  for (let i = 1; i <= 10; i++) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
});

// Loop Example 2: Iterate through array with forEach
let fruits = ["Apple", "Banana", "Mango"];
fruits.forEach(fruit => console.log("Fruit:", fruit));

// ============================
// Part 4: DOM Manipulation
// ============================

// DOM Interaction 1: Toggle background color
document.getElementById("toggleBtn").addEventListener("click", function () {
  document.body.classList.toggle("highlight");
});

// DOM Interaction 2: Add new list item
document.getElementById("addItemBtn").addEventListener("click", function () {
  let li = document.createElement("li");
  li.textContent = "New Item " + (document.getElementById("dynamicList").children.length + 1);
  document.getElementById("dynamicList").appendChild(li);
});

// DOM Interaction 3: Greeting message logged in console
console.log(greetUser("Student"));