const promise1 = new Promise((resolve, reject) => {
    let success = true
    if (success) {
        resolve({
            id: 2930209, username: "John Doe"
        })
    }
    else {
        reject(new Error("Data not fetched"))
    }
})