/**
 * Created by Wei-Jye on 1/1/2015.
 *
 * http://www.toptal.com/videos
 *
 * An example of how to create custom properties by using Object.defineProperty
 * with its getter and setter functions.
 */


(function(){
    "use strict";

    // This is using the normal property.
    var aCar = {};
    aCar.color = "green";
    console.log(aCar.color);
    // We don't want to use the above code to create object.

    // Using constructor. We can call this a prototype of the object.
    function Car() {
        // Private property.
        var theColor;

        // Create the property for the object. Using EMASCRIPT built-in property.
        /* Now, one of the big advantages to taking this approach when defining your
         * properties, is that, specifically on the set function, we can actually
         * come in here and we can validate the data before it's actually saved to
         * that property.
         */
        Object.defineProperty(this, "color", {
            get: function() {
                console.log("called get->color: " + theColor);
                return theColor;
            },
            set: function(color) {
                var sColor = String(color); // Treat data as a string.
                // Validate data.
                if (sColor.length === 0)
                {
                    throw new Error("color name cannot be a zero-length string");
                }
                theColor = sColor;
                console.log("Called set->color: " + theColor);
            }
        })
    }

    // This is how you create an object just like in C++. A more OOP approach.
    var betterCar = new Car();
    // Set the color.
    betterCar.color = "red";
    console.log("Color of the better Car: " + betterCar.color);
})();


