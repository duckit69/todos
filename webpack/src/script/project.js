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
    removeProject(projectTitle) {
        this.projects = this.getProjects();
        // remove all tasks 
        this.removeTasksFromProject(projectTitle);
        // remove project
        this.projects = this.projects.filter(p => p.title !== projectTitle);
        //update storage
        storage.updateLocalStorage("projects", this.projects);
    }
    removeTasksFromProject(projectTitle){
        this.projects = this.getProjects();
        this.projects.forEach((element) => {
            if(element.title == projectTitle) 
                element.tasks = [];
        })
        storage.updateLocalStorage("projects", this.projects);
    }
    removeTaskFromProject(projectTitle, taskTitle) {
        this.projects = this.getProjects();
        this.projects.forEach((project) => {
            if(project.title == projectTitle) 
                project.tasks = project.tasks.filter((task) => task.title !== taskTitle);
        });
        storage.updateLocalStorage("projects", this.projects);
    }
}

export { ProjectsManager };
