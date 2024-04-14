# frozen_string_literal: true

class CreateDocuments < ActiveRecord::Migration[7.1]
  def change
    create_table :documents do |t|
      t.string :cmr_number
      t.string :sender
      t.string :consignee
      t.string :place_of_delivery
      t.string :place_and_date_of_taking_over_the_goods
      t.string :documents_attached
      t.string :sender_instructions
      t.string :instructions_as_to_payment_for_carrier
      t.string :cod
      t.string :carrier
      t.string :successive_carrier
      t.string :carriers_reservations_and_observations
      t.string :special_agreements
      t.string :to_be_paid_by
      t.string :established_in
      t.string :established_on
      t.string :signature_of_the_sender
      t.string :signature_of_the_carrier
      t.string :signature_of_the_consignee

      t.timestamps
    end
  end
end
