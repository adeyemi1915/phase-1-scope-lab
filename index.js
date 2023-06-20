// Write your solution in this file!
// customerName
var customerName = "John"; // Declare the variable in global scope

// upperCaseCustomerName()
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(); // Access and modify the global customerName variable
}

// setBestCustomer()
function setBestCustomer() {
  bestCustomer = "not bob"; // Declare a global variable bestCustomer and assign it a value
}

// overwriteBestCustomer()
function overwriteBestCustomer() {
  bestCustomer = "new value"; // Modify the value of the global variable bestCustomer
}

// leastFavoriteCustomer and changeLeastFavoriteCustomer()
const leastFavoriteCustomer = "Alice"; // Declare a constant in global scope

function changeLeastFavoriteCustomer() {
  // Trying to change the value of a constant will result in an error
  leastFavoriteCustomer = "Bob";
}
