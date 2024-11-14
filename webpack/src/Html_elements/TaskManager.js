import { Div } from "./Div";
import {Button} from "./Button"


class TaskManager {
    constructor() {
        this.taskManager = new Div(["task-manager"]);
        this.editTask = new Button(["btn-edit"]);
        this.removeTask = new Button(["btn-remove"]);
        this.taskManager.appendChild(this.editTask.getElement());
        this.removeTask.appendChild(this.removeTask.getElement());
    }
}

export {TaskManager};
