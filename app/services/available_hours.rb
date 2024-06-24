# frozen_string_literal: true

class AvailableHours
  def initialize(date, document: nil)
    @date = date
    @document = document
  end

  def call
    hours = (8..16).map do |hour|
      ["%02d:00" % hour, "%02d:30" % hour]
    end.flatten

    hours.reject do |hour|
      Document.where.not(id: @document&.id).exists?(taking_over_date: @date,
                                                    taking_over_start_time: Time.zone.parse(hour))
    end
  end
end
