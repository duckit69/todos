import { HtmlElement } from "./HtmlElement";

class H1 extends HtmlElement {
    constructor(innerText, classes = []) {
        super("h1");
        this.setInnerText(innerText);
        this.setClass(classes);
    }
}
class H2 extends HtmlElement {
    constructor(innerText, classes = []) {
        super("h2");
        this.setInnerText(innerText);
        this.setClass(classes);
    }
}

class H3 extends HtmlElement {
    constructor(innerText, classes = []){
        super("h3");
        this.setClass(classes);
        this.setInnerText(innerText);
    }
}

export { H2, H3, H1 };
