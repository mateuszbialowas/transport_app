# frozen_string_literal: true

class AddSenderSignatureToDocuments < ActiveRecord::Migration[7.1]
  def change
    add_column :documents, :sender_signature, :text
  end
end
