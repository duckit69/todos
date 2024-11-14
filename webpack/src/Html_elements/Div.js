import {HtmlElement} from "./HtmlElement";

export class Div extends HtmlElement {
    constructor(clases = []) {
        super("div");
        this.setClass(clases);
    }
}
