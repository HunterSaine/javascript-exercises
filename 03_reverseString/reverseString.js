const reverseString = function(string) {
let newArray = string.split("")
let reversedArray = newArray.reverse();
let reversedString = reversedArray.join("");
return reversedString
};

// Do not edit below this line
module.exports = reverseString;
