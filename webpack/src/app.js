import "./reset.css";
import "./style.css";

import { ParentElement } from "./Html_elements/ParentElement";
import { ProjectsManager } from "./script/project";
import { Task } from "./script/task";
import { Home } from "./Html_pages/home"

const addProjectButton = document.querySelector("#add-project");
const addTaskButtons = document.querySelectorAll(".add-task");

const projectsManager = new ProjectsManager();
const home = new Home();

let addProjectForm = null;
let taskForm = null;

function getUrlParams() {
    const currentUrl = window.location.href;
    const tmp = new URL(currentUrl);
    return new URLSearchParams(tmp);
}

addProjectButton.addEventListener("click", () => {
  const projectElement = new ParentElement(".projects");
  projectElement.createProjectForm();
  addProjectForm = document.querySelector("#projectForm");
  addProjectForm.addEventListener("submit", (element) => {
    element.preventDefault();
    const params = getUrlParams();
    projectsManager.addProject(params.get("title"));
    home.render();
});
});

addTaskButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const projectTitle = btn.parentNode.firstElementChild.innerText;
    const taskElement = new ParentElement(".tasks");
    taskElement.createTaskForm(projectTitle);
    taskForm = document.querySelector("#taskForms");
  });
});
