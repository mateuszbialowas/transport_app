# frozen_string_literal: true

class Document < ApplicationRecord
  validates :cmr_number, :taking_over_date, :taking_over_start_time, :taking_over_end_time, presence: true
  validate :not_overlapping

  def taking_over_start_at
    DateTime.parse("#{taking_over_date} #{taking_over_start_time}")
  end

  def taking_over_end_at
    DateTime.parse("#{taking_over_date} #{taking_over_end_time}")
  end

  private

  def not_overlapping
    if Document.where.not(id:)
               .where(taking_over_date:)
               .where('taking_over_start_time < ? AND taking_over_end_time > ?', taking_over_end_time, taking_over_start_time).present?
      errors.add(:base, 'Overlapping document')
      errors.add(:taking_over_start_time, "Overlapping document")
    end
  end
end
