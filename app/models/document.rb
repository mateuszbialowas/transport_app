# frozen_string_literal: true

class Document < ApplicationRecord
  validates :cmr_number, :taking_over_date_4, :taking_over_time_4, presence: true

  def taking_over_at_4
    DateTime.parse("#{taking_over_date_4} #{taking_over_time_4}")
  end
end
