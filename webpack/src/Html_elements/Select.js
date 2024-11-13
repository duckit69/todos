import { HtmlElement } from "./HtmlElement";
import { Option } from "./Option";

export class Select extends HtmlElement {
    constructor(name) {
        super("select");
        this.setName(name);
    }

    addOption(name, innerText) {
        const option = new Option(name, innerText);
        this.appendChild(option);
    }
}
