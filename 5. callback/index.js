 const fs = require('fs');
 
 
 const person = (name, callback )=>{
     console.log(`hello ${name  } `)
     callback()
 }


 const address = () =>{
    console.log("address")
 }

 person("jhon", address)


 fs.readFile('input.txt', 'utf8', (err, data)=>{
    if(err){
        throw new err 
        return;
    }
    console.log(data) 
 }) 