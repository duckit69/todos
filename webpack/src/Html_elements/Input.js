import { HtmlElement } from "./HtmlElement";
import { format } from "date-fns"

class Input extends HtmlElement {
    constructor(name, classes = []) {
        super("input");
        this.setName(name);
        this.setClass(classes);
    }

}

export class TextInput extends Input {
    constructor(name, placeholder, classes = []) {
        super(name, classes);
        this.setType("text");
        this.setPlaceHolder(placeholder);
    }
}

export class DateInput extends Input {
    constructor(name, classes = []) {
        super(name, classes);
        this.setType("date");
    }

    setDefaultDate() {
        const curr_date = new Date();
        const formatted_date = format(curr_date, "yyyy-MM-dd");
        this.element.value = formatted_date;
    }
}
