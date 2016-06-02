export default (() => {

    function dec2bin(dec){
        return (dec >>> 0).toString(2);
    }

    function solution(N) {
        let bin = dec2bin(N);
        let count = 0;
        let max = 0;
        for(var i = 1; i < bin.length; i++) {
            if(bin[i] === '0') {
                count++;
            } else {
                if(count > max) {
                    max = count;
                }
                count = 0;
            }
        }
        return max;
    }

    console.log('linkedlist.js: solution(20):', solution(20));

})();
