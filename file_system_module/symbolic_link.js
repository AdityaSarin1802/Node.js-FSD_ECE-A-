import fs from 'fs';
fs.symlink("notes.txt", "link.txt", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Symbolic link created")
})