import ConsolePrinter from '../ConsolePrinter';

export default (() => {

    // Process an array of numbers into a new array of pairs ordered by
    // prime number and the sum of all original numbers for which that
    // number is a factor
    const logger = new ConsolePrinter();
    logger.log('Sum by Factors', '');

    function isFactor(num, factor) {
        return Math.abs(num % factor) === 0;
    }

    function isPrime(num) {
        num = Math.abs(num);
        for(let i = 2; i < num; i++) {
            if(num % i === 0) {
                return false;
            }
        }
        return num > 1;
    }

    function sumOfDivided(lst) {
        let range = [];
        let start = 2;
        let lim = Math.abs(lst.sort((a, b) => Math.abs(a) < Math.abs(b))[0]);
        // let lim = Math.max.apply(null, lst.map(Math.abs));
        // let lim = Math.max(...lst.map(Math.abs));
        for(start; start <= lim; start++) {
            if(isPrime(start)) {
                let total = 0;
                for(let i = 0; i < lst.length; i++) {
                    if(isFactor(lst[i], start)) {
                        total += lst[i];
                    }
                }
                if(total > 0) {
                    range.push([start, total]);
                }
            }
        }
        return range;
    }

    logger.log(' ');
    [
        [12, 15],
        // [12, 15, -20],
        // [15, 21, 24, 30, 45],
    ]
    .map(src => logger.log(src + ':', sumOfDivided(src)));


})();
