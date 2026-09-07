//Readable Streams

import fs from "fs";
const readStream = fs.createReadStream("./input.txt", "utf-8")
readStream.on("data", (chunk) => {
    console.log("Data Received");
    console.log("Data",chunk)
})
readStream.on("error", (error) => {
    console.log("Error: ",error.message)
})
readStream.on("end", () => {
    console.log("END")
})

//create a writable stream
const writeStream = fs.createWriteStream("./output.txt")
writeStream.write("Hello World\n")
writeStream.on("finish", () => {
    console.log("Data has been written")
})
writeStream.on("error", (error) => {
    console.log("Error: ",error.message)
})