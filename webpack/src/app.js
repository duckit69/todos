import "./reset.css";
import "./style.css";
import { ParentElement } from "./Html_elements/ParentElement";
import { ProjectsManager } from "./script/project";
import { Home } from "./Html_pages/home";
import { Task } from "./script/task";

function hideAllAddTaskBtns() {
  const addTaskButtons = document.querySelectorAll(".add-task");
  addTaskButtons.forEach((btn) => {
    btn.classList.add("display-none");
  });
}

function addTask(taskForm, home, projectsManager, projectTitle) {
  const formData = new FormData(taskForm);
  const title = formData.get("title");
  const description = formData.get("description");
  const date = formData.get("date");
  const priority = formData.get("priority");
  const task = new Task(title, description, date, priority, projectTitle);
  projectsManager.addTaskToProject(task, projectTitle);
  home.render();
  window.location.reload();
}

document.addEventListener("DOMContentLoaded", () => {
  const home = new Home();

  home.render();
  const addProjectButton = document.querySelector("#add-project");
  const addTaskButtons = document.querySelectorAll(".add-task");
  const editTaskButtons = document.querySelectorAll(".btn-edit");
  const removeProject = document.querySelector("#removeProject");

  const projectsManager = new ProjectsManager();

  let addProjectForm = null;
  let taskForm = null;
  let removeProjectForm = null;

  // handles add project
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
  // handles Remove Project
  removeProject.addEventListener("click", () => {
    const projectElement = new ParentElement(".projects");
    projectElement.displayProjectsForm();
    addProjectButton.classList.add("display-none");
    removeProject.classList.add("display-none");
    removeProjectForm = document.querySelector(".form");
    removeProjectForm.addEventListener("submit", (element) => {
      element.preventDefault();
      const formData = new FormData(removeProjectForm);
      const projectTitle = formData.get("projectTitle");
      projectsManager.removeProject(projectTitle);
      home.render();
      window.location.reload();
    });
  })
  //handles add task
  addTaskButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      hideAllAddTaskBtns(addTaskButtons);
      const projectTitle = btn.parentNode.firstElementChild.innerText;
      let taskElement = null;
      const tasks = document.querySelectorAll(".tasks");
      tasks.forEach((element) => {
        if (element.parentNode.firstElementChild.innerText == projectTitle)
          element.setAttribute("id", "addTaskTarget");
      });
      taskElement = new ParentElement("#addTaskTarget");
      taskElement.createTaskForm(projectTitle);
      taskForm = document.querySelector("#taskForm");
      taskForm.addEventListener("submit", (element) => {
        element.preventDefault();
        addTask(taskForm, home, projectsManager, projectTitle);
      });
    });
  });
  // handles edit task
  editTaskButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const currTask = btn.parentElement.parentElement;
      currTask.setAttribute("id", "editTaskForm");
      const title = currTask.firstElementChild.innerText;
      // get task by title
      const tmp_task = new Task();
      const task = tmp_task.getTaskByTitle(title);
      // create edit form and fill it with task infos
      const taskElement = new ParentElement("#editTaskForm");
      taskElement.editTaskForm(task);
      const editForm = document.querySelector("#taskForm");
      editForm.addEventListener("submit", (form) => {
        form.preventDefault();
        // remove curr task so we dont have duplicate
        tmp_task.updateTask(task.title);
        addTask(editForm, home, projectsManager, task.projectTitle);
      });
    });
  });

});


