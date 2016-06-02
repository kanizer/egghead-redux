/**
 *
 * ConsolePrinter - Compose/format/append DOM Element for console output.
 *
 */
export default class ConsolePrinter {
    constructor(el) {
        this.listEl = document.createElement('ul');
        this.listEl.className = 'console-printer';
        this.el = el || document.getElementsByClassName('col-3-4')[0];
        this.el.appendChild(this.listEl);
    }

    convert(msgArr, type = 'log') {
        let containerEl = document.createElement('li');
        containerEl.className = type;

        this.listEl.appendChild(msgArr.reduce((prev, curr, ind) => {
            let el = document.createElement('span');
            el.className = (ind === 0 && msgArr.length > 1) ? 'console-label' : '';
            if(curr instanceof Object) {
                el.className += ' console-object';
                curr = JSON.stringify(curr, this.censor(curr));
            }
            el.innerHTML = curr + ' ';
            prev.appendChild(el);
            return prev;
        }, containerEl));

        console[type](msgArr);
    }

    log(...msg) {
        this.convert(msg);
    }

    warn(...msg) {
        this.convert(msg, 'warn');
    }

    /**
     * Silly util for handling circular obj refs that throw an error in JSON.stringify
     */
    censor(censor) {
        let i = 0;
        return (key, value) => {
            if(i !== 0 && typeof censor === 'object' && typeof value === 'object' && censor === value) {
                return '[Circular]';
            }

            if(i >= 29) {
                // seems to be a harded maximum of 30 serialized objects?
                return '[Unknown]';
            }

            ++i; // so we know we aren't using the original object anymore

            return value;
        };
    }
}
