exports.greet = function(){
    return "HEY, this should work! Mutation!";
}
console.log(exports);
console.log(exports == module.exports);