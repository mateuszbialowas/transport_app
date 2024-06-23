# frozen_string_literal: true

class DownloadCmr < ViewComponent::Base
  def initialize(document:)
    @document = document
  end

  def cmr_sender_signature_value
    "
    ARGO
    Katarzyna SZUMILAS Hanusiak
    18-106 Turośń Kościelna
    Ul. Wysokie 40
    NIP 8991496318

    Marcin Hanusiak"
  end
end
