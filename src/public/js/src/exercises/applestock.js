export default (() => {

    function getMaxProfit(prices) {
        // let sorted = prices.sort((a, b) => (a - b));
        // return sorted.pop() - sorted.unshift();

        // TODO - CAN ELIMINATE INNER FOR LOOP

        let max;
        let start;
        let end;
        let target;
        let diff;
        for(let i = 0; i < prices.length; i++) {
            start = prices[i];
            for(let l = i; l < prices.length; l++) {
                end = prices[l];
                diff = end - start;
                if(!max || diff > max) {
                    max = diff;
                    target = end;
                }
            }
        }
        return max;
    }

    const stockPricesYesterday = [10, 7, 5, 8, 11, 9];
    let test = getMaxProfit(stockPricesYesterday);
    // returns 6 (buying for $5 and selling for $11)
    console.log('applestock.js: test:', test);

})();
