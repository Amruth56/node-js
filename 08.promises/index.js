function delayFn(time){
    return new Promise((resolve)=>{
        setTimeout(resolve, time)
    })
}
console.log("Start")

delayFn(2000).then(()=>{
    console.log("2 seconds delay")
})

console.log("End")


function divideFn(num1, num2){
    return new Promise((resolve, reject)=>{
        if(num2 === 0){
            reject("Cannot divide by zero");
        } else{
            const result = num1 / num2;
            resolve(result);
        }
    })
}

divideFn(10, 2).then(result => console.log("Result:", result)).catch(err => console.log("Error:", err));