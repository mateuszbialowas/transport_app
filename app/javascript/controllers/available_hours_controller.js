import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="available-hours"
export default class extends Controller {
  connect() {
    console.log("Hello, Stimulus!", this.element)
  }

  fetch() {

  }
}
