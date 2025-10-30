const fs = require('fs');

function person(name, callbackFn){
    console.log("Person name is: " + name);
    callbackFn();
}

function address(){
    console.log("This is address function");
}


person("Amruth", address);

fs.readFile('index.txt', 'utf8', (err, data)=>{
    if(err){
        console.log(err);
        return;
    } else{
        console.log(data);
    }
})

