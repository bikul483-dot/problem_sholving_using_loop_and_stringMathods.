let string = "Hello world!";
let reversedString = "";

for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
}
console.log("Reversed String: " + reversedString);