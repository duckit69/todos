import { HtmlElement } from "./HtmlElement";

export class Option extends HtmlElement {
    constructor(value, innerText) {
        super("option");
        this.setValue(value);
        this.setInnerText(innerText);
    }

    setSelected() {
        this.setAttribute("selected", "selected");
    }
    removeSelected() {
        this.removeAttribute("selected");
    }
}   
