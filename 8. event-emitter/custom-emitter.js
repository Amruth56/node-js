const EventEmitter = require('events');

class MyCustomEmitter extends EventEmitter{
    constructor(){
        super();
        this.greeting = 'Hello '
    }
}