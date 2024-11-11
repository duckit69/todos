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
        this.projects.push(project);
        localStorage.setItem("projects", JSON.stringify(this.projects));
    }

    removeProject(name) {
        this.project = this.projects.filter(p => p === name);
    }
}

export { ProjectsManager };
