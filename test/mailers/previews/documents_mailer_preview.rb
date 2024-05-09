# frozen_string_literal: true

class DocumentsMailerPreview < ActionMailer::Preview
  def create
    DocumentsMailer.create(Document.first)
  end
end
