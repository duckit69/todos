export class LocalStorage {
    constructor() {

    }

    updateLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    returnProjects() {
        const storedProjects = JSON.stringify(localStorage.getItem("projects"));
        if(!storedProjects)
            return [];
        else
            return JSON.parse(storedProjects);
    }
}
