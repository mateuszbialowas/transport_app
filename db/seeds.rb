# frozen_string_literal: true

User.find_or_create_by!(email: 'admin@example.com', role: User::ADMIN) do |user|
  user.password = 'password123!1'
  user.password_confirmation = 'password123!1'
end

client = User.find_or_create_by!(email: 'client@example.com', role: User::CLIENT) do |user|
  user.password = 'password'
  user.password_confirmation = 'password'
end

sender = "Mariusz Kowalski\nul. Kwiatowa 1\n00-001 Warszawa Poland"
consignee = "Jan Kowalski\nul. Kwiatowa 1\n00-001 Warszawa Poland"
taking_over_place = "ul. Kwiatowa 1\n00-001 Warszawa Poland"
products = "Nawozy 2t \n Piach 10t"

Document.find_or_create_by!(sender:,
                            consignee:,
                            taking_over_place:,
                            taking_over_date: Date.current,
                            taking_over_start_time: '10:00',
                            taking_over_end_time: '10:30',
                            cmr_number: '1234',
                            client:,
                            products:)
