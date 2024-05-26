# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_05_09_210941) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "documents", force: :cascade do |t|
    t.string "cmr_number"
    t.text "sender"
    t.text "consignee"
    t.text "delivery_place"
    t.string "taking_over_place"
    t.date "taking_over_date"
    t.time "taking_over_start_time"
    t.time "taking_over_end_time"
    t.text "documents"
    t.string "marks_6_1"
    t.string "number_7_1"
    t.string "method_8_1"
    t.string "nature_9_1"
    t.string "number_10_1"
    t.string "weight_11_1"
    t.string "volume_12_1"
    t.string "marks_6_2"
    t.string "number_7_2"
    t.string "method_8_2"
    t.string "nature_9_2"
    t.string "number_10_2"
    t.string "weight_11_2"
    t.string "volume_12_2"
    t.string "marks_6_3"
    t.string "number_7_3"
    t.string "method_8_3"
    t.string "nature_9_3"
    t.string "number_10_3"
    t.string "weight_11_3"
    t.string "volume_12_3"
    t.string "marks_6_4"
    t.string "number_7_4"
    t.string "method_8_4"
    t.string "nature_9_4"
    t.string "number_10_4"
    t.string "weight_11_4"
    t.string "volume_12_4"
    t.string "class_6"
    t.string "number_7"
    t.string "letter_8"
    t.string "adr_9"
    t.text "products"
    t.text "sender_instructions_13"
    t.string "carriage_instructions_14"
    t.string "carriage_paid_14"
    t.string "carriage_forward_14"
    t.string "cash_on_delivery_15"
    t.text "carrier_16"
    t.text "carriers_plates_16"
    t.text "successive_carriers_17"
    t.text "carriers_reservations_18"
    t.text "special_agreements_19"
    t.string "established_in_21"
    t.string "established_in_date_21"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_documents_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "role", null: false
    t.string "invitation_token"
    t.datetime "invitation_created_at"
    t.datetime "invitation_sent_at"
    t.datetime "invitation_accepted_at"
    t.integer "invitation_limit"
    t.string "invited_by_type"
    t.bigint "invited_by_id"
    t.integer "invitations_count", default: 0
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["invitation_token"], name: "index_users_on_invitation_token", unique: true
    t.index ["invited_by_id"], name: "index_users_on_invited_by_id"
    t.index ["invited_by_type", "invited_by_id"], name: "index_users_on_invited_by"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "documents", "users"
end
