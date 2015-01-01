/**
 * Created by Wei-Jye on 1/1/2015.
 *
 * https://www.youtube.com/watch?v=G4lZSWssoqA
 *
 * In this tutorial we look at the flexibility of JavaScript function arguments
 * and talk about more advanced techniques like passing multiple arguments into
 * a function by calling an index value.
 */

(function() {
    'use strict';

    function myFunc(param1) {
        // The arguments object give us a list of properties in accessing all the
        // prototype and the properties of all the arguments.
        console.dir(arguments);
        console.log('myFunc was called: ' + arguments[1]);
    }

    myFunc('Hi', 'a', 2, true);
})();
