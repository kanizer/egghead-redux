import R from 'ramda';

export default (() => {


    // const increment = n => n + 1;
    // const id = n => n;

    // class Stream {

    //     constructor(start, output, stepping) {
    //         this.start = start;
    //         this.output = output;
    //         this.stepping = stepping;
    //     }

    //     head() {
    //         return this.output(this.start);
    //     }

    //     tail() {
    //         return new Stream(this.stepping(this.start), this.output, this.stepping);
    //     }
    // }

    // let st = new Stream(0, id, increment);
    // let test = st.tail().tail().head(); // 2

    console.log('ramda.js: R:', R);

})();
