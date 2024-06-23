# frozen_string_literal: true

class Document < ApplicationRecord
  belongs_to :client, class_name: 'User', foreign_key: 'user_id', inverse_of: :documents

  validates :cmr_number, :taking_over_date, :taking_over_start_time, :taking_over_end_time, presence: true
  validates :cmr_number, uniqueness: true
  validate :not_overlapping

  def taking_over_start_at
    DateTime.parse("#{taking_over_date} #{taking_over_start_time}")
  end

  def taking_over_end_at
    DateTime.parse("#{taking_over_date} #{taking_over_end_time}")
  end

  private

  def not_overlapping
    documents = Document.where.not(id:)
                        .where(taking_over_date:)
                        .where('taking_over_start_time < ? AND taking_over_end_time > ?', taking_over_end_time, taking_over_start_time)
    return if documents.blank?

    errors.add(:base, "Czas odbioru nakłada się na inny dokument: #{documents.map(&:cmr_number)}")
    errors.add(:taking_over_start_time, "Czas odbioru nakłada się na inny dokument: #{documents.map(&:cmr_number)}")
  end
end
