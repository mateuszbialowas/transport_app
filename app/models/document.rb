# frozen_string_literal: true

class Document < ApplicationRecord
  validates :cmr_number, :taking_over_at_4, presence: true
end
