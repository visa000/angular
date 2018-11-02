(function () {
    function add() {
        var counter =0; // free variable - local variable
        return function () { //a closure closing around counter
            return ++counter;
        }
    }

    var counter = add();
    console.log(counter());
    console.log(counter());
    console.log(counter());
})(); 