const fs=require('fs')
fs.stat('notes.txt', (err, stats) => {
    if (err) {
        console.error(err);
        return;
    }
    // console.log('Information about [notes.txt]:', stats)
    console.log("size of the file [notes.txt]:", stats.size)
    console.log("Creation time of the file [notes.txt]:", stats.birthtime.toISOString().split('T'))
    console.log("Creation time of the file [notes.txt]:", stats.mtime.toISOString().split('T'))
})