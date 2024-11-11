import "./reset.css"
import "./style.css"
import { ProjectsElement } from "./Html_elements/main"

const addProjectButton = document.querySelector("#add-project")

addProjectButton.addEventListener("click", () => {
    let pe = new ProjectsElement();
    pe.createProjectForm();
})
