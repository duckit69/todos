class Project {
    constructor(name) {
        this.name = name;
    }
    
}

class ProjectsManager {
    constructor() {
        this.projects = [];
    }

    addProject(name) {
        const project = new Project(name);
        this.projects.push(project);
    }

    removeProject(name) {
        this.project = this.projects.filter(p => p === name);
    }
}

export { ProjectsManager };
