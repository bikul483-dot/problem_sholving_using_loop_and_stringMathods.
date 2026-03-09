let str = "Hello World";
let newStr = "";
for(let char of str){
    if(char != 'a' && char != 'e' && char != 'i' && char != 'o' && char != 'u'){
        newStr += char;
    }
}
console.log(newStr);