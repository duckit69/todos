import { Main } from "../Html_elements/main";

export class Home {
    constructor() {
        
    }

    clear() {
        Main.clear();
    }
    render() {
        window.location.href = "/";
    }
}
