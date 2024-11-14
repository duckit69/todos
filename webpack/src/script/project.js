import { LocalStorage } from "./LocalStorage";

const storage = new LocalStorage(); 
class Project {
    constructor(name) {
        this.title = name;
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

}
class ProjectsManager {
    constructor() {
        this.projects = [];
    }

    addProject(name) {
        const project = new Project(name);
        this.projects = this.getProjects();
        this.projects.push(project);
        storage.updateLocalStorage("projects", this.projects);
    }

    removeProject(name) {
        this.projects = this.projects.filter(p => p === name);
        storage.updateLocalStorage("projects", this.projects);
    }

    addTaskToProject(task, projectTitle) {
        this.projects = this.getProjects();
        const project = this.projects.find((element) => element.title == projectTitle);
        project.tasks.push(task);
        storage.updateLocalStorage("projects", this.projects);
    }
    getProjectTitles() {
        return this.projects.map(project => project.title);
    }

    getProjects() {
        return JSON.parse(storage.returnProjects());
    }
}

export { ProjectsManager };
