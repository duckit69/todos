import { CreateProjectForm, CreateTaskForm, EditTaskForm } from "./Form";
export class ParentElement {
    constructor(parent) {
        this.parentElement = document.querySelector(parent);
    }

    clear() {
        this.parentElement.innerHTML = " ";
    }

    createProjectForm() {
        this.clear();
        const projectForm = new CreateProjectForm(["form"]);
        this.parentElement.appendChild(projectForm.getForm());
    }

    createTaskForm(projectTitle) {
        this.clear();
        const taskForm = new CreateTaskForm(projectTitle, ["form"]);
        this.parentElement.appendChild(taskForm.getForm());
    }
    editTaskForm(task) {
        this.clear();
        const editForm = new EditTaskForm(task, ["form"]);
        this.parentElement.appendChild(editForm.getForm());
    }
}

