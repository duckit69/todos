import { HtmlElement } from "./HtmlElement";

export class Label extends HtmlElement {
    constructor(text) {
        super("label");
        this.setInnerText(text);
    }
}
