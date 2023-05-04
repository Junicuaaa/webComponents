let pathName = new URL(import.meta.url).pathname;
let namE = pathName.split("/").pop().replace(".js", "");

export default class navComponent extends HTMLElement{
    static async component(){
        return await (await fetch(pathName.replace(".js", ".html"))).text();
    }
    constructor(){
        super();
        this.attachShadow({mode: "open"});    
    }
    evento(e){
        console.log(e);
    }
    connectedCallback(){
        Promise.resolve(navComponent.component()).then(html=>{
            this.shadowRoot.innerHTML = html
            this.button = this.shadowRoot.querySelector("button");
            this.button.addEventListener("click", this.evento.bind(this))  
        })
    }
}
customElements.define(namE, navComponent);