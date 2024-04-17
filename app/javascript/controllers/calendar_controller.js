import { Controller } from "@hotwired/stimulus"
import { Calendar } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import plLocale from '@fullcalendar/core/locales/pl';


// Connects to data-controller="calendar"
export default class extends Controller {
  connect() {
    let calendarEl = document.getElementById('calendar');
    let calendar = new Calendar(calendarEl, {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'timeGridWeek,timeGridDay'
      },
      initialView: 'timeGridWeek',
      locale: plLocale,
      firstDay: 1,
      nowIndicator: true,
      plugins: [ timeGridPlugin ],
      slotLabelFormat: {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }
    });
    calendar.render();
  }
}
