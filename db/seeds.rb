# frozen_string_literal: true

User.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password', role: User::ADMIN)

client = User.create!(email: 'client@example.com', password: 'password', password_confirmation: 'password',
                      role: User::CLIENT)

sender = "Mariusz Kowalski\nul. Kwiatowa 1\n00-001 Warszawa Poland"
consignee = "Jan Kowalski\nul. Kwiatowa 1\n00-001 Warszawa Poland"
taking_over_place = "ul. Kwiatowa 1\n00-001 Warszawa Poland"

Document.create!(sender:,
                 consignee:,
                 taking_over_place:,
                 taking_over_date: Date.current,
                 taking_over_start_time: '10:00',
                 taking_over_end_time: '10:30',
                 cmr_number: '1234',
                 client:)
