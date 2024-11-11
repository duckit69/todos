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
        this.projects = this.projects.filter(p => p === name);
    }

    addTaskToProject(task, projectTitle) {
        const project = this.projects.find((element) => element.title == projectTitle);
        project.tasks.push(task);
    }
    getProjectTitles() {
        return this.projects.map(project => project.title);
    }
}

export { ProjectsManager };
