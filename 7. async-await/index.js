const { disconnect } = require("process")

const divideFn = (a, b)=>{
    return new Promise((resolve, reject)=>{
        if(b === 0){
            reject("cannot divide by zero")
        } else {
            resolve(a/b)
        }
    })
}

const divide = async()=>{
    try{
        const result = await divideFn(10,50);
        console.log(result);
    } catch(error){
        console.log(error);
    }
}

divide();