import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

    static targets = [ "date", "time", "queryContainer" ]

    loadDate() {
        this.dateTarget.innerHTML = new Date().toLocaleDateString();
        this.timeTarget.innerHTML = new Date().toLocaleTimeString();
    }
    
    updateDate(){
        this.queryContainerTarget.classList.add("hidden")
        this.dateTarget.innerHTML = new Date().toLocaleDateString();
        this.timeTarget.innerHTML = new Date().toLocaleTimeString();
    }

    doNotUpdateDate(){
        this.queryContainerTarget.classList.add("hidden")
    }


}