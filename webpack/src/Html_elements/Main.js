import { ProjectContainer } from "./ProjectsContainer";
import { Head } from "./Head";

export class Main {
    constructor() {
            this.main = document.querySelector("main");
    }

    clear() {
        this.main.innerHTML = "";    
    }

    render() {
        this.clear();
        const head = new Head();
        const projectContainer = new ProjectContainer();
        projectContainer.displayProjects();
        this.main.appendChild(head.getElement());
        this.main.appendChild(projectContainer.getElement());
    }
}


