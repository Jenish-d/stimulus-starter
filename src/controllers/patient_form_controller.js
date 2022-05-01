import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = [ "firstName", "lastName", "sexMale", "sexFemale", "age", "firstNameDisplay", "lastNameDisplay", "ageDisplay", "genderDisplay", "formContainer", "displayContainer" ]

    save() {
        this.displayContainerTarget.classList.remove("hidden")
        this.sexMaleTarget.checked || this.sexFemaleTarget.checked ? ( this.sexMaleTarget.checked ? this.genderDisplayTarget.innerHTML = "Male" : this.genderDisplayTarget.innerHTML = "Female" ) : this.genderDisplayTarget.innerHTML = "Gender not selected"
        this.firstNameDisplayTarget.innerHTML = this.firstNameTarget.value
        this.lastNameDisplayTarget.innerHTML = this.lastNameTarget.value
        this.ageDisplayTarget.innerHTML = this.ageTarget.value
        this.formContainerTarget.classList.add("hidden")
    }
    
    edit() {
        this.formContainerTarget.classList.remove("hidden")
        this.displayContainerTarget.classList.add("hidden")

    }

  }