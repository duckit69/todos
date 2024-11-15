import { LocalStorage } from "./LocalStorage";
class Task {
    constructor(title, description, date, priority, projectTitle) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.projectTitle = projectTitle;
    }

    getTaskByTitle(title) {
        const localStorage = new LocalStorage();
        const projects = JSON.parse(localStorage.returnProjects());
        let tmp = null;
        projects.forEach(project => {
            project.tasks.forEach(task => {
                if(task.title == title) {
                    tmp = task;                    
                }
            })
        });
        return tmp;
    }

    updateTask(title) {
        const localStorage = new LocalStorage();
        const projects = JSON.parse(localStorage.returnProjects());
        projects.forEach(project => {
            project.tasks.forEach( (task, index) => {
                if(task.title == title) {
                    project.tasks.splice(index, 1);
                }
            })
        });
        localStorage.updateLocalStorage("projects", projects);
    }
    removeTask(tasks) {
        tasks.filter(t => t.title !== this.title);
    }
}

export { Task };
