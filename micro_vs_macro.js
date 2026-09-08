//architecture of nodejs
// // execution order
setTimeout(() => console.log("MacroQueue"), 0);
Promise.resolve().then(() => {
    console.log("MicroQueue")
});