import { Controller } from "@hotwired/stimulus"
import { get } from '@rails/request.js'

// Connects to data-controller="available-hours"
export default class extends Controller {
  static targets = [ "dateInput" ]

  async update() {
    console.log("Fetching available hours")

    let day = document.getElementById('document_taking_over_date_3i').value;
    let month = document.getElementById('document_taking_over_date_2i').value;
    let year = document.getElementById('document_taking_over_date_1i').value;

    let fullDate = new Date(year, month - 1, day);

    await get("/documents/available_hours", {
      responseKind: "turbo-stream",
      query: { taking_over_date: fullDate}
    })
  }
}
