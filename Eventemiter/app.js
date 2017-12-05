var Emitter = require("./emitter.js");

var emtr = new Emitter();

emtr.on("greet",function(){
    console.log("I SEE HELLO!");
});

emtr.on("greet",function(){
    console.log("I SEE HELLO!x2");
});

//--event happening
emtr.emit("greet");
