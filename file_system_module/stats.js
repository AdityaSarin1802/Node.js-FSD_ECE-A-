const fs=reqquire('fs')
fs.stat('notes.txt', (err, stats) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Information about [notes.txt]:', stats);
})