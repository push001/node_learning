/*
We described a scenario where not having a doorbell can be a problem, especially since we are hungry and waiting for food. Let’s see if we can remedy this.

There are three events that we need to take care of.
The order event will be fired when we place an order for some food. It should output Order placed for food, where food will be the variable passed to the emitter.
The doorbell event will be fired when our food is at the door. It should output RING RING!.
The payment event will be fired once we pay for our food at the door. It should output Enjoy your food, where food will be the variable passed to the emitter.
All the outputs should be done using console.log.

*/
const EventEmitter = require("events");
const myEmitter = new EventEmitter();

// Write your code below

function orderEventHandler(food){
    console.log(`Order placed for ${food}`);
}
function doorbellEventHandler(){
    console.log("RING RING!");
}
function paymentEventHandler(food){
    console.log(`Enjoy your ${food}`);
}

myEmitter.on("order", orderEventHandler);
myEmitter.on("doorbell", doorbellEventHandler);
myEmitter.on("payment", paymentEventHandler);

myEmitter.emit("order");
myEmitter.emit("doorbell");
myEmitter.emit("payment");

