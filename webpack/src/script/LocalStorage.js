export class LocalStorage {
    constructor() {

    }

    updateLocalStorage(key, value) {
        localStorage.setItem(key, value);
    }
}
