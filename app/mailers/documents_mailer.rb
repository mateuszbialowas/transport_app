# frozen_string_literal: true

class DocumentsMailer < ApplicationMailer
  def create(document)
    @document = document

    mail to: document.client.email
  end
end
