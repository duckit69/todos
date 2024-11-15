import { Div } from "./Div";
import {Button} from "./Button"


class TaskManager {
    constructor() {
        this.taskManager = new Div(["task-manager"]);
        this.editTask = new Button(["btn-edit"]);
        this.editTask.setInnerText("Edit");
        this.removeTask = new Button(["btn-remove", "removeTask"]);
        this.removeTask.setInnerText("Remove")
        this.taskManager.appendChild(this.editTask.getElement());
        this.taskManager.appendChild(this.removeTask.getElement());
    }
    getElement() {
        return this.taskManager.getElement();
    }
}

export {TaskManager};
