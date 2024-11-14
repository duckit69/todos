    export class HtmlElement {
        constructor(element) {
            this.element = document.createElement(element);
        }
        setInnerText(text) {
            this.element.innerText = text;
        }
        setClass(classes = []) {
            this.element.classList.add(...classes);
        }
        setId(id) {
            this.element.setAttribute("id", id);
        }
        setName(name) {
            this.element.setAttribute("name", name);
        }
        setRequired(required = false) {
            if(['input', 'select', 'textarea'].includes(this.element.tagName.toLowerCase()))
                this.element.setAttribute("required", required);
        }
        setType(type) {
            if(['input', 'button'].includes(this.element.tagName.toLowerCase()))
                this.element.setAttribute("type", type);
        }
        setDataAttribute(key, data) {
            let tmp_data = "data-" + key;
            this.element.setAttribute(tmp_data, data)
        }
        setPlaceHolder(placeholder) {
            if(['input', 'textarea'].includes(this.element.tagName.toLowerCase()))
                this.element.setAttribute("placeholder", placeholder)
        }
        setValue(value) {
            this.element.setAttribute("value", value);
        }

        appendChild(child) {
            this.element.appendChild(child);
        };
        appendTo(parent) {
            parent.appendChild(this.element);
        }
        getElement() {
            return this.element;
        }
    }
