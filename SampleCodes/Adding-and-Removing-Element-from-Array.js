/**
 * Created by Wei-Jye on 2/1/2015.
 * Description: This sample show how to add and remove items from the beginning as well as the end of a JavaScript
 *              array. This is incredibly useful for when we work with a JavaScript Arrays,being able to add items
 *              to them as well as to remove them.
 */

(function () {
    'use strict';

    // Create an array variable.
    var list = [];
    // Output: Array[0]

    // We can use unshift function to add a new item to the beginning of an array.
    list.unshift('red');
    /* Output: Array[1]
     *  0: 'red'
     */

    // Add another new item to the begining of the array.
    list.unshift('blue');
    /* Output: Array[2]
     *  0: 'blue'
     *  1: 'red'
     */

    // Use shift function to remove an item in the beginning of the array. This function will return the item that is
    // being pull off from the array.
    var removedFrontItem = list.shift();
    /*
     * Output: Array[1]
     *  0: 'red'
     */
    console.log('Removed front item:', removedFrontItem);

    // Adding items at the end of the array using push function.
    list.push('green');
    list.push('orange');
    /*
     * Output: Array[1]
     *  0: 'red'
     *  1: 'green'
     *  2: 'orange'
     */

    // Use pop function to pull out and return the last item from the array.
    var removedEndItem = list.pop();
    /*
     * Output: Array[1]
     *  0: 'red'
     *  1: 'green'
     */
    console.log('Removed end item:', removedEndItem);
    console.dir(list);
})();
