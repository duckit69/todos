import "./reset.css"
import "./style.css"
import { ProjectsElement } from "./Html_elements/main"
import { ProjectsManager } from "./pages/project"

const addProjectButton = document.querySelector("#add-project")

addProjectButton.addEventListener("click", () => {
    const projectElement = new ProjectsElement();
    projectElement.createProjectForm();
})

const params = new URLSearchParams(window.location.search);
const formType = params.get('formType');

if(formType == "addProject") {
    ProjectsManager.addProject(params.get('name'));
}else {
    
}

