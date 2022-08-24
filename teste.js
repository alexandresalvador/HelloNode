// try catch que não fuciona
var fs = require ("fs");

try {
    fs.readFile("foo.txt", "utf8", function(error,data) {
        if (error) {
            throw error;
        }

        console.log(data);
    });
} catch (exception) {
    console.log("A execução foi capturada");
}

/////////////////////////////////////////////////////

// tratamento de exceçôes utilizando domínios

var fs = require ("fs");
var domain = require("domain").create();

domain.run (function() {
    fs.readFile("", "utf8", function(error,data) {
        if (error) {
            throw error;
        }
        console.log(data);
        domain.dispose();
      });
    });

domain.on ("error", function(error) {
    console.log("A execução foi capturada!");
});




























