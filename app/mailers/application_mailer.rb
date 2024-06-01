# frozen_string_literal: true

class ApplicationMailer < ActionMailer::Base
  default from: 'app@argoksh.eu'
  layout 'mailer'
end
