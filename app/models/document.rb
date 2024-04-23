# frozen_string_literal: true

class Document < ApplicationRecord
  validates :cmr_number, :taking_over_date, :taking_over_time, presence: true

  def taking_over_at_4
    DateTime.parse("#{taking_over_date} #{taking_over_time}")
  end
end
