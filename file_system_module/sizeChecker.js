const fs=require('fs')

// function sizeChecker(filename) {
//     fs.stat(filename, (err, stats) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         console.log("size of the file [" + filename + "]:", stats.size)
//     });
// }

function sizeChecker(filename) {
    const limit=2*1024*1024; // 2MB
    const stats=fs.statSync(filename);
    if (stats.size>limit) {
        console.log(`File should be less than ${limit} bytes`);
    }
    else {
        console.log("File has been submitted");
    }
}
sizeChecker('notes.txt');