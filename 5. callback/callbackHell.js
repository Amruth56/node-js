const fs = require('fs')


fs.readFile('index.txt', 'utf8', (err,data)=>{
    if(err){
        throw  err 
        return;
    }
    const modifyData = data.toUpperCase();

    fs.writeFile('output.txt', modifyData, (err)=>{
        if(err){
            throw  err 
            return;
        }
        console.log("file written successfully")

        fs.readFile('output.txt', 'utf8', (err, data)=>{
            if(err){
                throw  err 
                return;
            }
            console.log(data)
            
        })
    })
})

 