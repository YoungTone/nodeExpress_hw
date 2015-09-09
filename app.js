// boilerplate code
var express = require('express'), //comma allows to string variables together as long as there is an equals sign
    app = express();

// set view engine to ejs
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    res.send('Hello World!');
});

// // add
// app.get('/add/:number1/:number2', function(req, res) {
//     var num1 = Number(req.params.number1);
//     var num2 = Number(req.params.number2);
//     var sum = eval(num1 + num2);
//     res.render('index', {
//         sum: sum
//     });
// });

// // subtract
// app.get('/sub/:number1/:number2', function(req, res) {
//     var num1 = Number(req.params.number1);
//     var num2 = Number(req.params.number2);
//     var sum = eval(num1 - num2);
//     res.render('index', {
//         sum: sum
//     });
// });

// // multiply
// app.get('/mult/:number1/:number2', function(req, res) {
//     var num1 = Number(req.params.number1);
//     var num2 = Number(req.params.number2);
//     var sum = eval(num1 * num2);
//     res.render('index', {
//         sum: sum
//     });
// });

// divide
// app.get('/div/:number1/:number2', function(req, res) {
//     var num1 = Number(req.params.number1);
//     var num2 = Number(req.params.number2);
//     var sum = eval(num1 / num2);
//     res.render('index', {
//         sum: sum
//     });
// });

app.get('/:math/:number1/:number2', function(req, res) {
    var num1 = Number(req.params.number1);
    var num2 = Number(req.params.number2);
    var math = req.params.math;

    if (math === "add") {
        math = "+";
    } else if (math === "sub") {
        math = "-";
    } else if (math === "mult") {
        math = "*";
    } else if (math === "div") {
        math = "/";
    }

    var sum = eval(num1 + math + num2);
    res.render('index', {
        sum: sum
    });

});


// start server
app.listen(3000, function() {
    console.log('server running on port 3000');
});