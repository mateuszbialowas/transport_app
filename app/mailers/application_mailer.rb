# frozen_string_literal: true

class ApplicationMailer < ActionMailer::Base
  default from: 'Argoksh <app@argoksh.eu>'

  layout 'mailer'
end
