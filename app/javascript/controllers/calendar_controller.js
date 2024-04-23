import { Controller } from "@hotwired/stimulus"
import { Calendar } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import plLocale from '@fullcalendar/core/locales/pl';


// Connects to data-controller="calendar"
export default class extends Controller {
  connect() {
    let calendarEl = document.getElementById('calendar');
    let calendar = new Calendar(calendarEl, {
      allDaySlot: false,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'timeGridWeek,timeGridDay'
      },
      events: '/calendar/events.json',
      initialView: 'timeGridWeek',
      locale: plLocale,
      firstDay: 1,
      nowIndicator: true,
      plugins: [ timeGridPlugin ],
      slotLabelFormat: {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      },
      slotMinTime: '08:00:00',
      slotMaxTime: '20:00:00',
      timeZone: 'UTC'
    });
    calendar.render();
  }
}
