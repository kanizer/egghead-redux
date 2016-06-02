// http://www.codewars.com/kata/533c46b140aafec05b000d31/train/javascript
import _ from 'lodash';

export default (() => {

    console.log('20160217.js: Advanced Piglatin\n\n');
    const consonants = 'bcdfghjklmnpqrstvwxyz';
    const vowels = 'aeiou';
    // const input = 'Pizza? Yes Please!!';
    // const input = 'Hello everyone. Welcome to the code kata.';
    const input = 'everyone Here!';
    // let words = input.split(' ');

    // function isLetter(l) {
    //     return (consonants.indexOf(l.toLowerCase()) > -1 || isVowel(l));
    // }

    // function isVowel(l) {
    //     return vowels.indexOf(l.toLowerCase()) > -1;
    // }

    // let output = words.map(current => {
    //     let first = current.substr(0, 1);
    //     if(!isLetter(first.toLowerCase())) {
    //         return 'Invalid word';
    //     }

    //     if(isVowel(first)) {
    //         current = 'w' + current;
    //     }

    //     let cap = first === first.toUpperCase();
    //     let punctuation = '';
    //     let start;

    //     for(let i = 0, letter; i < current.length; i++) {
    //         letter = current[i].toLowerCase();
    //         if(isLetter(letter)) {
    //             if(!start && isVowel(letter)) {
    //                 start = current.slice(0, i).toLowerCase();
    //             }
    //         } else {
    //             punctuation = current.substr(i);
    //             break;
    //         }
    //     }

    //     current = current.slice(start.length, current.length - punctuation.length).toLowerCase() + start + 'ay' + punctuation;
    //     return cap ? current.substr(0, 1).toUpperCase() + current.substr(1) : current;
    // });


    /* this guy wins
        - regex swaps out the non-punctuation portion of string and leaves punctuation intact
    */
    let output = input.replace(/\b([bcdfghjklmnpqrstvwxyz]*)(\w+)\b/gi, function(_, first, rest) {
        if (first) {
            // first match of regex
            // set capitalization
            if (first[0] == first[0].toUpperCase()) rest = rest[0].toUpperCase() + rest.slice(1)
        } else {
            // handle vowel-first words
            first = 'w'
        }

        return rest + first.toLowerCase() + 'ay'
    })

    console.log('20160217.js: output:', output);

})();
