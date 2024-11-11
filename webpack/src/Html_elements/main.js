export class Main {
    constructor() {
        this.main = document.querySelector("main");
    }

    clear() {
        main.innerHtml = " ";    
    }
}

export class ProjectsElement {
    constructor() {
        this.projects = document.querySelector(".projects");
    }

    clear() {
        this.projects.innerHTML = " ";
    }

    createProjectForm() {
        this.clear();
        const projectForm = new ProjectForm();
        projectForm.createProjectForm();
        const projectFormElement = projectForm.getProjectForm(); 
        this.projects.appendChild(projectFormElement);
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

    createInput() {
        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("name", "title");
        input.setAttribute("placeholder", "Write Project Title");
        input.required = true;
        this.addChild(input);
    }

    createSubmitFormButton(value) {
        const submit = document.createElement("button");
        submit.setAttribute("type", "submit");
        submit.setAttribute("name", "formType");
        submit.setAttribute("value", value);    
        submit.innerText = "Add Project!"
        submit.classList.add("btn-add");
        this.addChild(submit);
    }
    getform() {
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
        this.projectForm.getform().classList.add("form");
    }
 
    createProjectForm() {
        // Order matters not for logic but for rendering 
        // this.projectForm.createLabel();
        this.projectForm.createInput();
        const value = "addProject"
        this.projectForm.createSubmitFormButton(value);
    }

    getProjectForm() {
        if(!this.style)
            this.styleProjectForm();
        return this.projectForm.getform();
    }
    
}

