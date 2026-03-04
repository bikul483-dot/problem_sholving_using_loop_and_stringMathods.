let srt = "Hello world!";
let count = 0;
for (let i = 0; i < srt.length; i++) {
    if (srt[i] === 'a' || srt[i] === 'e' || srt[i] === 'i' || srt[i] === 'o' || srt[i] === 'u') {
        count++;
    }
}
console.log("vowels: " + count);