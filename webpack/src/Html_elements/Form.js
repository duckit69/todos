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
    
    setAction(action) {
        this.element.setAttribute("action", action);
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
        this.setAction("/project");
        this.setId("projectForm");
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
        this.setAction("/task");
        this.setId("taskForm");
    }
}

export class EditTaskForm extends Form {
    constructor(task, classes = []) {
        super(classes);
        this.taskTitle = new TextInput("title", task.title);
        this.taskTitle.setValue(task.title);
        this.description = new TextArea("description");
        this.description.setValue(task.description);
        this.date = new DateInput("date");
        this.date.setValue(task.date);
        // this.priorityList = new Select("priority");
        // const high = new Option("high", "high");
        // const low = new Option("low", "low");
        // low.setSelected();
        // this.priorityList.addOption(high);
        // this.priorityList.addOption(low);
        
        this.editTaskButton = new SubmitFormButton("editTask", "Edit Task!", ["add-task", "btn-add"]);
        this.setDataAttribute("projectTitle", task.projectTitle);
        this.appendChild(this.taskTitle.getElement());
        this.appendChild(this.description.getElement());
        this.appendChild(this.date.getElement());
        // this.appendChild(this.priorityList.getElement());
        this.appendChild(this.editTaskButton.getElement());
        this.setAction("/task");
        this.setId("taskForm");
    }
}
