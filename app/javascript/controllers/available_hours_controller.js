import { Controller } from "@hotwired/stimulus"
import { get } from '@rails/request.js'

// Connects to data-controller="available-hours"
export default class extends Controller {
  static targets = [ "dateInput" ]

  connect() {
    this.dateInputTarget.addEventListener("change", () => {
      this.fetch()
    })
  }

  async fetch() {
    console.log("Fetching available hours")
    await get("/documents/available_hours", {
      responseKind: "turbo-stream",
      query: { taking_over_date: this.dateInputTarget.value }
    })
  }
}
