import ConsolePrinter from '../ConsolePrinter';

export default (() => {

    // Reproduce Event class
    const logger = new ConsolePrinter();
    logger.log('Event', '');

    function Event() {
        let _handlers = [];

        this.subscribe = (...handlers) => {
            handlers.forEach(h => {
                if(typeof h === 'function') {
                    _handlers.push(h);
                }
            });
            return this;
        };

        this.unsubscribe = (...handlers) => {
            handlers.forEach( h => {
                for(let i = _handlers.length - 1; i > -1; i--) {
                    if(_handlers[i] === h) {
                        _handlers.splice(i, 1);
                        return;
                    }
                }
            });
            return this;
        };

        this.emit = (...a) => {
            _handlers.forEach(_h => {
                _h.apply(this, a);
            });
            return this;
        };
    }

    // logger.log(' ');
    // [
    //     [12, 15],
    //     // [12, 15, -20],
    //     // [15, 21, 24, 30, 45],
    // ]
    // .map(src => logger.log(src + ':', sumOfDivided(src)));



    function l(arr) { arr.push('l'); }
    function o(arr) { arr.push('o'); }

    var e = new Event(),
        bucket = [];

    e.subscribe(l, o, l);
    e.emit(bucket);


    e.unsubscribe(o, l);
    bucket = [];
    e.emit(bucket)

})();
