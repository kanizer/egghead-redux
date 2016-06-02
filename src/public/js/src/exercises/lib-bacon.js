import ConsolePrinter from '../ConsolePrinter';
import Bacon from 'baconjs';

export default (() => {

    const logger = new ConsolePrinter();
    logger.warn('bacon.js: Bacon:', Bacon);

})();
