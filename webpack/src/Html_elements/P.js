import { HtmlElement } from "./HtmlElement";

class P extends HtmlElement {
    constructor(innerText, classes = []) {
        super("p");
        this.setInnerText(innerText);
        this.setClass(classes);
    }
}
export { P }
