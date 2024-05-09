# frozen_string_literal: true

class AddClientToDocuments < ActiveRecord::Migration[7.1]
  def change
    add_reference :documents, :user, null: false, foreign_key: true
  end
end
