import { HtmlElement } from "./HtmlElement";
import { TextArea } from "./TextArea";
import { TextInput, DateInput } from "./Input";
import { SubmitFormButton } from "./Button";
import { Select } from "./Select";

class Form extends HtmlElement {
    constructor(classes = []) {
        super("form");
        this.setClass(classes);
    }

    getForm() {
        return this.getElement();
    }
}

export class CreateProjectForm extends Form {
    constructor(classes = []) {
        super(classes);
        this.projectTitle = new TextInput("title", "Enter Project Title");
        this.addProjectButton = new SubmitFormButton("addProject", "Add Project!", ["button", "btn-add"]);
        this.appendChild(this.projectTitle.getElement());
        this.appendChild(this.addProjectButton.getElement());
    }
}

export class CreateTaskForm extends Form {
    constructor(projectTitle, classes = []) {
        super(classes);
        this.taskTitle = new TextInput("title", "Enter Task Name");
        this.description = new TextArea("description", "your task description");
        this.date = new DateInput("date");
        this.priorityList = new Select("priority");
        this.addTaskButton = new SubmitFormButton("addTask", "Add Task!");
        this.setDataAttribute("projectTitle", projectTitle);
        this.appendChild(this.taskTitle.getElement());
        this.appendChild(this.description.getElement());
        this.appendChild(this.date.getElement());
        this.appendChild(this.priorityList.getElement());
        this.appendChild(this.addTaskButton.getElement());
    }
}
