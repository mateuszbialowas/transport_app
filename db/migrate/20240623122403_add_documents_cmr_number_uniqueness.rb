# frozen_string_literal: true

class AddDocumentsCmrNumberUniqueness < ActiveRecord::Migration[7.1]
  def change
    add_index :documents, :cmr_number, unique: true
  end
end
