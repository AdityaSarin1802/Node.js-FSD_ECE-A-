const promise1 = new Promise((resolve, reject) => {
    let success = true
    if (success) {
        resolve({
            id: 2930209, username: "John Doe"
        });
    }
    else {
        reject(new Error("Data not fetched"));
    }
})

// promise1.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error.message);
// })

// const promise2 = new Promise((resolve, reject) => {
//     let success = true
//     if (success) {
//         resolve({
//             id: 2930210, username: "Kamala Harris"
//         });
//     }
//     else {
//         reject(new Error("Data not fetched"));
//     }
// })

// // promise2.then((response)=>{
// //     console.log(response);
// // }).catch((error)=>{
// //     console.log(error.message);
// // })

// Promise.any([promise1, promise2]).then((response)=>{
//     console.log(response2.username);
// }).catch((error)=>{
//     console.log(error.message);
// })

promise1.then((response)=>{
    return response
}).then((response2)=>{
    console.log(response2.username);
}).catch((error)=>{
    console.log(error.message);
})