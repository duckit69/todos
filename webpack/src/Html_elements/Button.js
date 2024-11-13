import { HtmlElement } from "./HtmlElement";

class Button extends HtmlElement {
    constructor(classes = []) {
        super("button");
        this.setClass(classes);
    }

}

export class SubmitFormButton extends Button {
    constructor(value, innerText, classes = []) {
        super(classes);
        this.setType("submit");
        this.setValue(value);
        this.setInnerText(innerText);
    }
}
