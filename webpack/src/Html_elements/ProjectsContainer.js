import { ProjectsManager } from "../script/project";
import { TaskManager } from "./TaskManager";
import { Div } from "./Div";
import { H2, H3 } from "./Headings";
import { P } from "./P";
import { Button } from "./Button";

const projectManager = new ProjectsManager();

class ProjectContainer {
    constructor() {
        //this.projectsContainer = document.querySelector(".projects");
        this.projectsContainer = new Div(["projects"]);
    }

    displayProjects() {
        // array of projects
        const projects = JSON.parse(projectManager.getProjects());
        // iterate and for each project create projectCard and display its tasks       
        projects.forEach(element => {
            const project = new ProjectCard(element);
            this.projectsContainer.appendChild(project.getElement());
        });
    }
    getElement() {
        return this.projectsContainer.getElement();
    }
}

class ProjectCard {
    constructor(project) {
        this.project = new Div(["project"])
        this.title = new H2(project.title, "project-title");
        this.tasks = new TaskContainer(project.tasks);
        this.addTaskButton = new Button(["add-task", "btn-add"]);
        this.addTaskButton.setInnerText("Add Task");
    }
    addContentToProject() {
        this.project.appendChild(this.title.getElement());
        this.project.appendChild(this.tasks.getElement());
        this.project.appendChild(this.addTaskButton.getElement());
    }
    getElement() {
        this.addContentToProject();
        return this.project.getElement();
    }
}

class TaskContainer{
    constructor(tasks) {
        this.taskContainer = new Div(["tasks"]); 
        this.tasks = tasks;
    }

    addTasksToTaskContainer() {
        this.tasks.forEach(element => {
            const task = new TaskCard(element.title, element.description, element.date);
            this.taskContainer.appendChild(task.getElement());
        });
    }
    getElement() {
        this.addTasksToTaskContainer();
        return this.taskContainer.getElement();
    }
}

class TaskCard {
    constructor(title, description, date) {
        this.taskCard = new Div(["task"]);
        this.title = new H3(title, "task-title");
        this.description = new P(description, "task-desc");
        this.date = new P(date, "task-date");
        this.taskManager = new TaskManager(); 
    }

    getElement() {
        this.taskCard.appendChild(this.title.getElement());
        this.taskCard.appendChild(this.description.getElement());
        this.taskCard.appendChild(this.date.getElement());
        this.taskCard.appendChild(this.taskManager.getElement());
        return this.taskCard.getElement();
    }
}

export { ProjectContainer };
