import ConsolePrinter from './ConsolePrinter';

export default class ExerciseBase {

    constructor() {
        this.logger = new ConsolePrinter();
    }

    log(...msgs) {
        this.logger.log(msgs);
    }

}
