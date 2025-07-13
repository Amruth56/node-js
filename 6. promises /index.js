function delayFn(time){
    return new Promise((resolve)=>{
setTimeout(resolve, time )
    })
}


delayFn(1000).then(()=>{
    console.log("promise resolved")
}).catch(()=>{
    console.log("promise rejected")
})


function delayDivide(a,b){
    return new Promise((resolve, reject)=>{
        if(b === 0){
            reject("cannot divide by zero" )
        } else {
            resolve(a/b)
        }
    })
}


delayDivide(10,0).then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})

