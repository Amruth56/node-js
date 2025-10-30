const EventEmitter = require('events');

const myFirstEmitter = new EventEmitter();

//register
myFirstEmitter.on('greet', (name)=>{
    console.log(`Hello there, ${name}`);
});

//call
myFirstEmitter.emit('greet', 'Amruth');