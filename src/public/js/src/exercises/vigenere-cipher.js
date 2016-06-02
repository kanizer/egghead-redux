import ConsolePrinter from '../ConsolePrinter';

export default (logger => {

    logger.log('Vigenère Cipher Helper', '');

    function VigenèreCipher(key, abc) {
        this.translate = (str, decode) => {
            return str
                .split('')
                .map((letter, i) => {
                    return this.translateLetter(letter, i, decode);
                })
                .join('');
        };

        // allow for repeating key pattern
        this.getLoopingInd = (cipher, i) => (i >= cipher.length) ? i % cipher.length : i;

        this.translateLetter = (letter, i, decode) => {
            let keyInd = this.getLoopingInd(key, i);

            // spaces and weird chars
            if(abc.indexOf(letter) > -1) {
                let tarInd;
                if(decode) {
                    tarInd = abc.indexOf(letter) - abc.indexOf(key[keyInd]);
                    tarInd = tarInd < 0 ? abc.length + tarInd : tarInd;
                } else {
                    let cypherInd = abc.indexOf(key[keyInd]) + abc.indexOf(letter);
                    tarInd = this.getLoopingInd(abc, cypherInd);
                }
                return abc[tarInd];
            }
            return letter;
        };

        // api
        this.encode = str => this.translate(str);
        this.decode = str => this.translate(str, true);

    }

    const abc = 'abcdefghijklmnopqrstuvwxyz';
    const key = 'password';
    const c = new VigenèreCipher(key, abc);
    const encoded = c.encode('codewars');
    const decoded = c.decode('rovwsoiv');

    logger.log('codewars, rovwsoiv:', encoded, decoded);

})(new ConsolePrinter());
