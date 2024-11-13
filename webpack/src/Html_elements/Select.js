import { HtmlElement } from "./HtmlElement";

export class Select extends HtmlElement {
    constructor(name) {
        super("select");
        this.setName(name);
    }

    addOption(option) {
        this.appendChild(option.getElement());
    }
}
