# frozen_string_literal: true

module Documents
  class AvailableHoursController < AuthenticatedController
    def index
      taking_over_date = Date.parse(params[:taking_over_date])

      collection = AvailableHours.new(taking_over_date).call

      render 'documents/available_hours/index', locals: { collection: }
    end
  end
end
