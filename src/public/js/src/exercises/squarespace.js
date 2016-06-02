// https://gist.github.com/anonymous/f3dbd4f516aa46c0613e

export default (() => {

    // http://extralogical.net/articles/currying-javascript.html

    // console.log('stupid inception functions\n\n');

    // function applyFn(f) {
    //     let params = Array.prototype.slice.call(arguments, 1);

    //     return function() {
    //         return f.apply(this, params.concat(
    //             Array.prototype.slice.call(arguments, 0)
    //         ));
    //     }
    // }

    // function add(a, b) {
    //     return a + b;
    // }

    // let test = applyFn(add)(2)(3);

    // console.log('inception.js: test:', test);



    /**
     * closure
     */
    function youSuck(values) {
        for (var i = 0, len = values.length; i < len; i++) {
            (function(i) {
                setTimeout(function() {
                    // console.log('value at index', i, 'is', values[i]);
                }, i * 200);
            })(i);
        }
    }

    let test = youSuck([1,2,3,4]);


    /**
     * simple curry
     */
    function applyFn(f) {
        return f;
    }

    function sum(a) {
        return function(b) {
            return a + b;
        }
    }

    function multiply(a) {
        return function(b) {
            return a * b;
        }
    }

    console.log(applyFn(sum)(2)(3));
    console.log(applyFn(multiply)(2)(3));


    /**
     * simple class stuff
     */
    // var User = function(email) {
    //     this.email = email;

    //     this.getEmail = function() {
    //         return this.email;
    //     };

    //     this.setPassword = function(pwd) {
    //         this.pwd = pwd;
    //         return this;
    //     };

    //     this.authenticate = function(attempt) {
    //         return (attempt === this.pwd);
    //     };
    // }


    class User {

        constructor(email) {
            this.email = email;
        }

        getEmail() {
            return this.email;
        }

        setPassword(pwd) {
            this.pwd = pwd;
            return this;
        };

        authenticate(attempt) {
            return (attempt === this.pwd);
        }

    }

    var user = new User('email@github.com');
    console.log('squarespace.js:', user.getEmail());
    console.log('squarespace.js:', user.email);
    user.setPassword('1234!');
    console.log(user.authenticate('p@ss'));
    console.log(user.authenticate('1234!'));
    console.log(user.setPassword('newP@ass').getEmail());
    debugger;


})();



