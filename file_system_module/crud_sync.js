const fs=require('fs');
fs.writeFileSync('notes.txt', 'Hello, World!')

const data=fs.readFileSync('notes.txt')
console.log(`read data: ${data}`)

fs.appendFileSync('notes.txt', '\nECE-A')

fs.rmSync('notes.txt')