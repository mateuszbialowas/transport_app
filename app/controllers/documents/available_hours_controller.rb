# frozen_string_literal: true

module Documents
  class AvailableHoursController < AuthenticatedController
    def index
      taking_over_date_4 = Date.parse(params[:taking_over_date_4])
      hours = (8..11).map do |hour|
        ["#{hour}:00", "#{hour}:30"]
      end.flatten

      collection = hours.reject do |hour|
        Document.exists?(taking_over_date_4:,
                         taking_over_time_4: Time.zone.parse(hour))
      end

      render 'documents/available_hours/index', locals: { collection: }
    end
  end
end
