//Readable Streams

import fs from "fs";
const readStream = fs.createReadStream("./input.txt", "utf-8")
readStream.on("data", (chunk) => {
    console.log("Data Received");
    console.log("Data",chunk)
})