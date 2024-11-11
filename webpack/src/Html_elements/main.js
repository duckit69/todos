export class Main {
    constructor() {
        this.main = document.querySelector("main");
    }

    clear() {
        main.innerHtml = " ";    
    }
}

export class ParentElement {
    constructor(parent) {
        this.parentElement = document.querySelector(parent);
    }

    clear() {
        this.parentElement.innerHTML = " ";
    }

    createProjectForm() {
        this.clear();
        const projectForm = new ProjectForm();
        projectForm.createProjectForm();
        const projectFormElement = projectForm.getProjectForm(); 
        this.parentElement.appendChild(projectFormElement);
    }

    createTaskForm(projectTitle) {
        this.clear();
        const taskForm = new TaskForm();
        taskForm.createTaskForm(projectTitle);
        const taskFormElement = taskForm.getTaskForm(); 
        this.parentElement.appendChild(taskFormElement);
    }
}

class Form {
    constructor() {
        this.form = document.createElement("form"); 
    }

    addChild(child) {
        this.form.appendChild(child);
    }

    createLabel() {
        const label = document.createElement("label");
        label.innerText = "Enter title";
        this.addChild(label);
    }

    createInput(placeholder, name = "title", type = "text") {
        const input = document.createElement("input");
        input.setAttribute("type", type);
        input.setAttribute("name", name);
        input.required = true; 
        if(type == "text")
            input.setAttribute("placeholder", placeholder);
        this.addChild(input);
    }

    createSubmitFormButton(value, innerText) {
        const submit = document.createElement("button");
        submit.setAttribute("type", "submit");
        submit.setAttribute("name", "formType");
        submit.setAttribute("value", value);    
        submit.innerText = innerText;
        submit.classList.add("btn-add");
        this.addChild(submit);
    }

    createList() {
        const list = document.createElement("select");
        list.setAttribute("name", "priority");

        const high = document.createElement("option");
        high.value = "high";
        high.text = "High";
        
        const low = document.createElement("option");
        low.value = "low";
        low.text = "Low";

        low.selected = true;

        list.appendChild(low);
        list.appendChild(high);

        this.addChild(list);
    }

    createTextArea() {
        const textArea = document.createElement("textarea");
        textArea.setAttribute("name", "description");
        textArea.setAttribute("rows", 5);
        textArea.setAttribute("cols", 23);
        textArea.setAttribute("value", "Your Description goes here");
        this.addChild(textArea);
    }

    createDataAttribute(projectTitle) {
        this.form.setAttribute("data-projectTitle", projectTitle)
    }
  
    getForm() {
        return this.form;
    }
}

class ProjectForm {
    constructor() {
        this.projectForm = new Form();
        this.style = false;
    }

    styleProjectForm() {
        this.style = true;
        this.projectForm.getForm().classList.add("form");
    }
 
    createProjectForm() {
        // Order matters not for logic but for rendering 
        // this.projectForm.createLabel();
        this.projectForm.createInput("Enter Project Title");
        const value = "addProject";
        const text = "Add Project!";
        this.projectForm.createSubmitFormButton(value, text);
    }

    getProjectForm() {
        if(!this.style)
            this.styleProjectForm();
        return this.projectForm.getForm();
    }
}

class TaskForm {
    constructor() {
        this.taskForm = new Form();
        this.style = false;
    }

    styleTaskForm() {
        this.style = true;
        // style task Form
        this.taskForm.getForm().classList.add("form");
    }

    createTaskForm(projectTitle) {
        const value = "addTask";
        const text = "Add Task!";
        this.taskForm.createInput("Enter Task Title");
        this.taskForm.createTextArea();
        this.taskForm.createInput("date", "date");
        this.taskForm.createList();
        this.taskForm.createSubmitFormButton(value, text);
        this.taskForm.createDataAttribute(projectTitle);
    }

    getTaskForm() {
        if(!this.style)
            this.styleTaskForm();
        return this.taskForm.getForm();
    }
}
