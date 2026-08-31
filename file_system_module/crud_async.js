const fs=require('fs');
//callback based method

//create singular file
fs.writeFile('notes.txt', 'ECE-A', (err)=>{
    console.log('Data successfully written in the file notes.txt');
})

//read singular file
fs.readFile('notes.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(data);
})

//update singular file
const updateData = '\nPadhloooooooo'
fs.appendFile('notes.txt', updateData, (err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log('File updated successfully');
})