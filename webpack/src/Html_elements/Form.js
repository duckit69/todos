import { HtmlElement } from "./HtmlElement";
import { TextArea } from "./TextArea";
import { TextInput, DateInput } from "./Input";
import { SubmitFormButton } from "./Button";
import { Select } from "./Select";
import { Option } from "./Option";

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
        this.date.setDefaultDate();
        this.priorityList = new Select("priority");
        const high = new Option("high", "high");
        const low = new Option("low", "low");
        low.setSelected();
        this.priorityList.addOption(high);
        this.priorityList.addOption(low);
        
        this.addTaskButton = new SubmitFormButton("addTask", "Add Task!", ["add-task", "btn-add"]);
        this.setDataAttribute("projectTitle", projectTitle);
        this.appendChild(this.taskTitle.getElement());
        this.appendChild(this.description.getElement());
        this.appendChild(this.date.getElement());
        this.appendChild(this.priorityList.getElement());
        this.appendChild(this.addTaskButton.getElement());
    }
}
