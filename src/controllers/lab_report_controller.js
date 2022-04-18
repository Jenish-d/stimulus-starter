import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

    static targets = [ "dateInput", "timeInput", "queryContainer" ]

    // date and time format converter to YYYY-MM-DD HH:MM
    formatDate(date) {
        function padTo2Digits(num) {
            return num.toString().padStart(2, '0');
        }
        return (
          [
            date.getFullYear(),
            padTo2Digits(date.getMonth() + 1),
            padTo2Digits(date.getDate()),
          ].join('-') +
          ' ' +
          [
            padTo2Digits(date.getHours()),
            padTo2Digits(date.getMinutes()),
          ].join(':')
        );
    }
    
    updateDate(){
        const [date, time] = this.formatDate(new Date()).split(' ');
        this.queryContainerTarget.classList.add("hidden");
        this.dateInputTarget.value = date;
        this.timeInputTarget.value = time;
    }

    doNotUpdateDate(){
        this.queryContainerTarget.classList.add("hidden")
    }


}