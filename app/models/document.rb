# frozen_string_literal: true

class Document < ApplicationRecord
  validates :cmr_number, :taking_over_date, :taking_over_start_time, :taking_over_end_time, presence: true

  def taking_over_start_at
    DateTime.parse("#{taking_over_date} #{taking_over_start_time}")
  end

  def taking_over_end_at
    DateTime.parse("#{taking_over_date} #{taking_over_end_time}")
  end
end
