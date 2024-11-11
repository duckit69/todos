import "./reset.css"
import "./style.css"
import { ParentElement } from "./Html_elements/main"
import { ProjectsManager } from "./pages/project"
import { Task } from "./pages/task"

const addProjectButton = document.querySelector("#add-project")
const addTaskButtons = document.querySelectorAll(".add-task");

addProjectButton.addEventListener("click", () => {
    const projectElement = new ParentElement(".projects");
    projectElement.createProjectForm();
})

addTaskButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const projectTitle = btn.parentNode.firstElementChild.innerText;
        const taskElement = new ParentElement(".tasks");
        taskElement.createTaskForm(projectTitle);
    })
});

const params = new URLSearchParams(window.location.search);
const formType = params.get('formType');

if(formType == "addProject") {
    ProjectsManager.addProject(params.get('name'));
}else {
    const name = params.get('name');
    const priority = params.get('priority');
    const description = params.get('description');
    const date = params.get('date');
    const projectTitle = params.get('data-projectTitle');
    const task = new Task(name, description, date, priority);
    ProjectsManager.addTaskToProject(task, projectTitle);
}

