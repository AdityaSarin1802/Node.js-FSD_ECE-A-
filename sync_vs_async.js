console.log("SYNCHRONOUS START");
for(let i=1; i<=10; i++){
    console.log(`${i}`)
}
console.log("SYNCHRONOUS END");
console.log("ASYNCHRONOUS START");
setTimeout(() => {
    console.log("Sup People!!")
}, 1000);
console.log("ASYNCHRONOUS END");