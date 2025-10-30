const EventEmitter = require('events');

class MyCustomEmitter extends EventEmitter{
    constructor(){
        super();
        this.greeting = "Hello there!";
    }
    greet(name){
        this.emit('greet', name);
    }
}

const myCustomEmitter = new MyCustomEmitter();

myCustomEmitter.on('greeting', (name)=> {
    console.log(`hiiiiiiiii ${myCustomEmitter.greeting}, ${name}`);
});

myCustomEmitter.greet('Amruth');