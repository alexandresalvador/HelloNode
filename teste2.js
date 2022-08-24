// Exemplo de execuçâo de funções em série, usando async


var async = require("async");

async.series([
    function(callback) {
        setTimeout(function() {
            console.log("Tarefa 1");
            callback(null, 1);
        }, 300);
    },
    function(callback) {
        setTimeout(function() {
            console.log("Tarefa 2");
            callback(null, 2);
        }, 200);
    },
    function(callback) {
        setTimeout(function() {
            console.log("Tarefa 3");
            callback(null, 3);
        }, 100);
    }
], function(error, results) {
    console.log(results);
});