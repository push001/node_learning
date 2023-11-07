const EventEmitter = require('events');

const myEvent = new EventEmitter();

function SomeEventHandler(){
    console.log("SomeEvent Handled Successfully");
}
myEvent.on('SomeEvent', SomeEventHandler);
myEvent.emit('SomeEvent');