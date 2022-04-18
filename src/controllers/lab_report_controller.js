import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

    static targets = [ "dateInput", "timeInput", "queryContainer" ]

    // time format converter to HH:MM
    formatTime(date) {
        function padTo2Digits(num) {
            return num.toString().padStart(2, '0');
        }
        return (
          [
            padTo2Digits(date.getHours()),
            padTo2Digits(date.getMinutes()),
          ].join(':')
        );
    }
    
    updateDate(){
        this.queryContainerTarget.classList.add("hidden");
        var date = new Date();
        this.dateInputTarget.value = date.toISOString().substring(0,10);
        this.timeInputTarget.value = this.formatTime(date);
    }

    doNotUpdateDate(){
        this.queryContainerTarget.classList.add("hidden")
    }


}