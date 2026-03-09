let  str = "He110 W0r1d";
let count = 0;

for(let char of str){
    if(char >= '0' && char <= '9'){
        count++;
    }
}
console.log(count);