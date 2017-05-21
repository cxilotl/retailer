var Test = function() {

    console.log('test 1');

    var logger = function() {
        console.log('test logger function');
    };

    return {
        logger: logger
    };
};

// Test.prototype.logger = function() {
//     console.log('test logger function');
// };

module.exports = Test;