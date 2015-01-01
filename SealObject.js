/**
 * Created by Wei-Jye on 1/1/2015.
 *
 * http://www.toptal.com/videos
 *
 * Here is an example of how to "seal" an object in
 * JavaScript to prevent any other changes to its properties.
 */

(function() {
    'use strict';

    var obj = {};

    // Part 1.
    Object.defineProperty(obj, 'color', {
        configurable: true,
        value: 'blue',
        enumerable: true
    });
    console.log('P1: obj property list: ');
    var prop;
    for (prop in obj) {
        if (obj.hasOwnProperty(prop))
        {
            console.log(prop + '=' +obj[prop]);
        }
    }

    // Part 2.
    Object.defineProperty(obj, 'color', {
        enumerable: false
    });
    console.log('P2: obj property list: ');
    for (prop in obj) {
        if (obj.hasOwnProperty(prop))
        {
            console.log(prop + '=' +obj[prop]);
        }
    }

    // Part 3.
    Object.defineProperty(obj, 'color', {
        enumerable: true
    });
    console.log('P3: obj property list: ');
    for (prop in obj) {
        if (obj.hasOwnProperty(prop))
        {
            console.log(prop + '=' +obj[prop]);
        }
    }

    // Part 4.
    Object.defineProperty(obj, 'color', {
        // By setting this to false, it means we cannot change the option for the
        // object any more.
        configurable: false
    });
    Object.defineProperty(obj, 'color', {
        // This will fail and prompt error because object is not configurable.
        enumerable: false
    });
    console.log('P4: obj property list: ');
    for (prop in obj) {
        if (obj.hasOwnProperty(prop))
        {
            console.log(prop + '=' +obj[prop]);
        }
    }

    // This will have same effect as configurable false, but it apply to all
    // properties not just one.
    Object.seal(obj);
    if (!Object.isSealed(obj)) {
        Object.defineProperty(obj, 'color', {
            enumerable: false
        });
    }
    // Try to change the property here.
})();
