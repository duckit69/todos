import "./reset.css";
import "./style.css";
import { ParentElement } from "./Html_elements/ParentElement";
import { ProjectsManager } from "./script/project";
import { Home } from "./Html_pages/home";
import { Task } from "./script/task";

function hideAllAddTaskBtns(addTaskButtons) {
  addTaskButtons.forEach((btn) => {
    btn.classList.add("display-none");
  }) 
}

document.addEventListener("DOMContentLoaded", () => {
  const home = new Home();

  home.render();
  const addProjectButton = document.querySelector("#add-project");
  const addTaskButtons = document.querySelectorAll(".add-task");

  const projectsManager = new ProjectsManager();

  let addProjectForm = null;
  let taskForm = null;
  addProjectButton.addEventListener("click", () => {
    const projectElement = new ParentElement(".projects");
    const removeProject = document.querySelector(".btn-remove");
    removeProject.classList.add("display-none");
    addProjectButton.classList.add("display-none");
    projectElement.createProjectForm();
    addProjectForm = document.querySelector("#projectForm");
    addProjectForm.addEventListener("submit", (element) => {
      element.preventDefault();
      const formData = new FormData(addProjectForm);
      const title = formData.get("title");
      projectsManager.addProject(title);
      home.render();
      window.location.reload();
    });
  });

  addTaskButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      hideAllAddTaskBtns(addTaskButtons);
      const projectTitle = btn.parentNode.firstElementChild.innerText;
      const taskElement = new ParentElement(".tasks");
      taskElement.createTaskForm(projectTitle);
      taskForm = document.querySelector("#taskForm");
      taskForm.addEventListener("submit", (element) => {
        console.log("clicked");
        element.preventDefault();
        const formData = new FormData(taskForm);
        const title = formData.get("title");
        const description = formData.get("description");
        const date = formData.get("date");
        const priority = formData.get("priority");
        const task = new Task(title, description, date, priority, projectTitle);
        projectsManager.addTaskToProject(task, projectTitle);
        home.render();
        window.location.reload();
      })
    });
  });
});


