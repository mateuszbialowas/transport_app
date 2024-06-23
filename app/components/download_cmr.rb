# frozen_string_literal: true

class DownloadCmr < ViewComponent::Base
  def initialize(document:)
    @document = document
  end

  def data
    { controller: 'cmr',
      action: 'click->cmr#save',
      cmr_sender_value: @document.sender,
      cmr_number_value: @document.cmr_number,
      cmr_consignee_value: @document.consignee,
      cmr_carrier_value: @document.carrier_16,
      cmr_carriers_plates_value: @document.carriers_plates_16,
      cmr_delivery_place_value: @document.delivery_place,
      cmr_successive_carriers_value: @document.successive_carriers_17,
      cmr_taking_over_place_value: @document.taking_over_place,
      cmr_taking_over_date_value: I18n.l(@document.taking_over_date),
      cmr_documents_value: @document.documents,
      cmr_products_value: @document.products,
      cmr_sender_instructions_value: @document.sender_instructions_13,
      cmr_special_agreements_value: @document.special_agreements_19,
      cmr_carriage_instructions_value: @document.carriage_instructions_14,
      cmr_carriage_paid_value: @document.carriage_paid_14,
      cmr_carriage_forward_value: @document.carriage_forward_14,
      cmr_established_in_value: @document.established_in_21,
      cmr_established_in_date_value: @document.established_in_date_21,
      cmr_cash_on_delivery_value: @document.cash_on_delivery_15,
      cmr_sender_signature_value: }
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
