/**
 * Created by Wei-Jye on 2/1/2015.
 *
 * JavaScript arrays are not really arrays, they're object maps with numeric properties. This sample explore the nature
 * of JavaScript arrays and how to create them.
 */

(function () {
    'use strict';

    // New way of creating an array.
    var list = ['red', 'green', 'blue'];
    console.log('list:');
    console.dir(list);

    // Old way of creating an array.
    var oldWay = new Array(); // Array constructor.
    console.log('oldWay:');
    console.dir(oldWay);

    // If we passed in one parameter, says for example '10', it would actually create an array for us that had 10 empty
    // slots. So now if we reload, we'll see that we have an array here with a length of 10.
    var oldWay1 = new Array(10);
    console.log('oldWay1:');
    console.dir(oldWay1);
    // Assign value to the 10 empty slot.
    for (var i = 0; i < oldWay1.length; i++) {
        oldWay1[i] = (i + 1) * 2;
    }

    // If you specified more than 1 parameter, say 10, 20, 30 and 40, what you ended up with was an array with four
    // elements and then those were the initializing values.
    var oldWay2 = new Array(10, 20, 30, 40);
    console.log('oldWay2:');
    console.dir(oldWay2);

    // Something else that is different about arrays in JavaScript is that arrays in JavaScript are not really arrays.
    // Create an array with 4 elements.
    var newList = [100, 200, 300, 400];
    // But if we assign some value to index 1000 in that array, the array now says that I have 1,001 items
    newList[1000] = -999;
    console.log('newList:');
    console.dir(newList);

    /*
     * Now clearly that array do not have 1,001 items. In JavaScript, arrays are really nothing more than objectmaps.
     * Basically an array is an object that has numeric properties, so we have property zero, property one, propertytwo,
     * property three, and property property 1,000. Now, the length property here does try to keep up with this and
     * indicate that we have a 1,001 items because our last index is 1,000, but the truth is there are not 1,001 items
     * in this array.
     */
})();
