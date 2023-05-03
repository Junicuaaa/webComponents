let pathName = new URL(import.meta.url).pathname;
let namE = pathName.split("/").pop().replace(".js", "");

export default class navComponent extends HTMLElement{
    static async component(){
        return await (await fetch(pathName.replace(".js", ".html"))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        Promise.resolve(navComponent.component()).then(html=>{
            this.shadowRoot.innerHTML = html
        })      
    }
}
customElements.define(namE, navComponent);