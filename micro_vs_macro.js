//architecture of nodejs
// // execution order
setTimeout(() => console.log("MacroQueue"), 0);
Promise.resolve().then(() => {
    console.log("MicroQueue")
});

//no of queues in nodejs
// 1. MicroQueue
// 2. MacroQueue

//no of phases in nodejs
// 1. Timers
// 2. I/O Callbacks
// 3. Check
// 4. Close Callbacks
// 5. Poll
// 6. Idle, Prepare