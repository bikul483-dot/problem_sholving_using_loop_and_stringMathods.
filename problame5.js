let str = "banana";
let given = "a";
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === given) {
        count++;
    }
}
console.log(`"${given} appears ${count} times"`);