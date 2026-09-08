//print in terminal
console.log("Hello, World!")

//synchronous code
for(let i=1; i<=5; i++){
    console.log(i)
}
//asynchronous code
setTimeout(() => {
    console.log("ABC")
}, 5000);

// // architecture of nodejs
// execution order
setTimeout(() => console.log("MacroQueue"), 0);
Promise.resolve().then(() => {
    console.log("MicroQueue")
});

// // no of queues in nodejs
// 1. MicroQueue
// 2. MacroQueue

//no of phases in nodejs
// 1. Timers
// 2. I/O Callbacks
// 3. Check
// 4. Close Callbacks
// 5. Poll
// 6. Idle, Prepare

// area of circle
export default function calcArea(radius){
    return Math.PI * radius * radius;
}

//perimeter of circle
export function calcPerimeter(radius){
    return 2 * Math.PI * radius;
}

//function to print hello world
function greet(){
    console.log("Hello, World!")
}
greet();