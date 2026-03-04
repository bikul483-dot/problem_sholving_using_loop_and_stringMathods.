let str = "ama";
let reverseStr = "";
for (let i = str.length - 1; i >= 0; i--) {
      reverseStr += str[i]; 
    
    
}

if (str === reverseStr) {
        console.log("Palindrome");
      } else {
        console.log("Not Palindrome");
      }