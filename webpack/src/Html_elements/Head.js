import { Div } from "./Div";
import { H1 } from "./Headings";
import { Button } from "./Button"

class Head {
    constructor() {
        this.head = new Div(["head"]);
        this.title = new H1("My Projects");
        this.addProject = new Button(["margin-left", "btn-add"]);
        this.addProject.setId("add-project");
        this.addProject.setInnerText("Add Project");
        this.removeProject = new Button(["btn-remove"]);
        this.removeProject.setInnerText("Remove Project");
        this.removeProject.setId("removeProject");
        this.head.appendChild(this.title.getElement());
        this.head.appendChild(this.addProject.getElement());
        this.head.appendChild(this.removeProject.getElement());
    }    
    getElement() {
        return this.head.getElement();
    }
}

export { Head };
