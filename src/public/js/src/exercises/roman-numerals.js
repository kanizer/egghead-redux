import ConsolePrinter from '../ConsolePrinter';

export default (() => {

    const logger = new ConsolePrinter();
    logger.log('Roman Numerals Decoder', '');

    const key = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    function solution(roman) {
        return roman.trim().split('')
            .map(digit => key[digit.toUpperCase()])
            .reduce((prev, curr, i, a) => {
                // id types of combinations
                let next = a[i + 1];
                if(curr < next) {
                    // convert to single digit
                    // ACK! THIS IS OVERKILL, AND SMALLER PRECEDING DIGIT IS ENOUGH...
                    // let diff = next - curr;
                    // if([4, 9].indexOf(parseInt(diff.toString().replace(/^0+|0+$/g, ''), 10)) > -1) {
                        return prev - curr;
                    // }
                }
                return prev + curr;
            }, 0);
    }

    logger.log(' ');
    [
        // 'XXI',
        'XCIX', // 99
        'DI', // 501
        'DCCVII', // 707,
    ].map(src => logger.log(src + ':', solution(src)));




    // cleaned up final sub...
    function solutionTrimmed(roman) {
        return roman.trim().split('')
            .map(digit => key[digit.toUpperCase()])
            .reduce((prev, curr, i, a) => {
                // id types of combinations
                let next = a[i + 1];
                return (curr < next) ? prev - curr : prev + curr;
            }, 0);
    }


})();
