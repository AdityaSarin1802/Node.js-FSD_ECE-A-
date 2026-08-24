const promise1 = new Promise((resolve, reject) => {
    let success = false
    if (success) {
        resolve({
            id: 2930209, username: "John Doe"
        });
    }
    else {
        reject(new Error("Data not fetched"));
    }
})

promise1.then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log(error);
})