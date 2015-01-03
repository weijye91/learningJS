/**
 * Created by Wei-Jye on 1/1/2015.
 *
 * http://www.toptal.com/videos
 *
 * Here we look at an example of a property defined on an object's
 * prototype vs. a property defined on the object itself, as well as how to
 * retrieve it.
 */

(function() {
    "use strict";

    var baseWidget = {
        length: 12,
        width: 24
    };

    var widget = Object.create(baseWidget, {
        color: {value: 'blue', writable: true, enumerable: true},
        qty: {value: 5, writable: true, enumerable: true}
    });

    console.log('Part 1');
    //noinspection JSDuplicatedDeclaration
    for(var prop in widget) {
        if (widget.hasOwnProperty(prop)){
            console.log(prop + ':' + widget[prop]);
        }

    }

    console.log('Part 2');
    var widgetProto = Object.getPrototypeOf(widget);
    //noinspection JSDuplicatedDeclaration
    for(var prop in widgetProto) {
        if (widgetProto.hasOwnProperty(prop)){
            console.log(prop + ':' + widgetProto[prop]);
        }

    }

    Object.getOwnPropertyNames(widget).forEach(function(prop) {
        console.log(prop + ': ' + widget[prop]);
    })

})();
