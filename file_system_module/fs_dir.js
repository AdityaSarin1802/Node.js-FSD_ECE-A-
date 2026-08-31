const fs=require('fs')

fs.mkdir('./myFolder1/myFolder2/myFolder3', { recursive: true }, (err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log('Folder Created');

    fs.writeFile("hello.txt", (err)=>{
        if(err){
            console.log(err)
            return
        }
        console.log('File Created');
    })

    fs.readdir('./myFolder', (err, files)=>{
        if(err){
            console.log(err)
            return
        }
        console.log('Directory Contents:', files);
    })

    fs.rmdir('./myFolder', (err)=>{
        if(err){
            console.log(err)
            return
        }
        console.log('Folder Deleted');
    })
})