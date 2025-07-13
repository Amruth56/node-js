const EventEmitter = require('events');

const myFirstEmitter = new EventEmitter();


// regiter a listener
myFirstEmitter.on('greet', (name)=>{
    console.log(`Hello ${name}`)
})
myFirstEmitter.emit('greet', "Jhon")
