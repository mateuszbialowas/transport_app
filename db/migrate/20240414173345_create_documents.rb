# frozen_string_literal: true

class CreateDocuments < ActiveRecord::Migration[7.1]
  def change # rubocop:disable Metrics/AbcSize
    create_table :documents do |t| # rubocop:disable Metrics/BlockLength
      t.string :cmr_number
      t.text :sender
      t.text :consignee
      t.text :delivery_place

      t.string :taking_over_place
      t.date :taking_over_date
      t.time :taking_over_start_time
      t.time :taking_over_end_time

      t.text :documents

      t.string :marks_6_1
      t.string :number_7_1
      t.string :method_8_1
      t.string :nature_9_1
      t.string :number_10_1
      t.string :weight_11_1
      t.string :volume_12_1
      t.string :marks_6_2
      t.string :number_7_2
      t.string :method_8_2
      t.string :nature_9_2
      t.string :number_10_2
      t.string :weight_11_2
      t.string :volume_12_2
      t.string :marks_6_3
      t.string :number_7_3
      t.string :method_8_3
      t.string :nature_9_3
      t.string :number_10_3
      t.string :weight_11_3
      t.string :volume_12_3
      t.string :marks_6_4
      t.string :number_7_4
      t.string :method_8_4
      t.string :nature_9_4
      t.string :number_10_4
      t.string :weight_11_4
      t.string :volume_12_4
      t.string :class_6
      t.string :number_7
      t.string :letter_8
      t.string :adr_9
      t.text :sender_instructions_13
      t.string :carriage_instructions_14
      t.string :carriage_paid_14
      t.string :carriage_forward_14
      t.string :cash_on_delivery_15
      t.text :carrier_16
      t.text :carriers_plates_16
      t.text :successive_carriers_17
      t.text :carriers_reservations_18
      t.text :special_agreements_19
      t.string :established_in_21
      t.string :established_in_date_21

      t.timestamps
    end
  end
end
