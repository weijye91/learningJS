/**
 * Created by Wei-Jye on 1/5/2015.
 *
 * http://www.toptal.com/javascript/videos/javascript-video-tutorial-three-types-of-properties-on-an-object
 *
 * Examples of the three different kinds of properties that can be added to a JavaScript object.
 */

(function() {
    function Widget() {
        // This is a property for an instance, but inheritance of it is not needed.
        this.anInstanceFunc = function() {
            console.log('an instance func was called.');
        };
    }

    // A prototype property will be inherited.
    Widget.prototype.aPrototypeFunc = function() {
        console.log('a prototype func was called.');
    };

    // Typically used to configure the object for instantiaton such as init().
    Widget.aStaticFunc = function() {
        console.log('a static func was called.');
    };

    var myWidget = new Widget();
    // Call the instance function.
    myWidget.anInstanceFunc();
    // Call the protype function.
    myWidget.aPrototypeFunc();

    // ****** The code line bottom will triger an error. ******
    //myWidget.aStaticFunc();
    
    // A static function is defined on the widget function itself, not on the instance.
    // This is the correct way to call the static function.
    Widget.aStaticFunc();

    // This is how we use static property (including function) in real usage.
    function Testing() {
        if (Testing.myConfigValue) {
            console.log('Do some additional configuration.');
            // Some type of additional configuration.
        }
    }

    Testing.myConfigValue = true;
})();
