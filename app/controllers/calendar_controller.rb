# frozen_string_literal: true

class CalendarController < AuthenticatedController
  def index; end

  def events
    render json: Document.all.map { |document|
                   { title: document.cmr_number,
                     start: document.taking_over_at,
                     end: document.taking_over_at + 30.minutes }
                 }
  end
end
