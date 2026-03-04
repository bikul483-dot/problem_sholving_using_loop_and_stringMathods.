let str = "Hellodfgg world!";
let final = str.split(" ");
let just = "";

for ( let i= 0; i < final.length; i++) {
    if (final[i].length > just.length || just === "") {
        just = final[i];
    }
}
console.log(`Longest word: ${just}`);