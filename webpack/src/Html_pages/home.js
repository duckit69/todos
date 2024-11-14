import { Main } from "../Html_elements/Main";

const main = new Main();

export class Home {
    constructor() {
        
    }

    clear() {
        main.clear();
    }
    render() {
        this.clear();
        main.render();
    }
}
