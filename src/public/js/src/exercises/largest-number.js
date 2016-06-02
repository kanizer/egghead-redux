// http://www.codewars.com/kata/largest-5-digit-number-in-a-series
import _ from 'lodash';

export default (() => {

    console.log('20160216.js: Largest 5 digit number in a series\n\n');
    const num = '283910';
    let grande = 0;

    // _.each(num.split(''), (letter, i) => {
    //     let current = parseInt(num.substr(i, 2));
    //     grande = grande > current ? grande : current;
    // });

    // for(let i = 0, current; i < num.length; i++) {
    //     current = parseInt(num.substr(i, 2));
    //     grande = grande > current ? grande : current;
    // }

    num.split('').forEach((item, i) => {
        item = parseInt(num.substr(i, 2));
        grande = grande > item ? grande : item;
    });

    // grande = num.split('').reduce((prev, current, i) => {
    //     current = parseInt(num.substr(i, 2));
    //     prev = prev > current ? prev : current;
    //     return prev;
    // }, 0);

    // grande = _.reduce(num.split(''), (prev, current, i) => {
    //     current = parseInt(num.substr(i, 2));
    //     prev = prev > current ? prev : current;
    //     return prev;
    // }, 0);

    console.log('20160216.js: grande:', grande);

})();
