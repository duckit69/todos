import { HtmlElement } from "./HtmlElement";

export class TextArea extends HtmlElement {
    constructor(name, placeholder) {
        super("textarea");
        this.setName(name);
        this.setPlaceHolder(placeholder);
    }

    setCols(cols) {
        this.setAttribute("cols", cols);
    }

    setRows(rows) {
        this.setAttribute("rows", rows);
    }

    
}
