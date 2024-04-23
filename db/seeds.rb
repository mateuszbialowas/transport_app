User.create(email: 'admin@example.com', password: 'password', password_confirmation: 'password', role: User::ADMIN)

Document.create!(taking_over_at: "18/04/2024 10:00:00", cmr_number: "1234")
Document.create!(taking_over_at: "18/04/2024 10:30", cmr_number: "1235")
Document.create!(taking_over_at: "18/04/2024 11:00", cmr_number: "1236")
Document.create!(taking_over_at: "18/04/2024 11:30", cmr_number: "1237")
Document.create!(taking_over_at: "18/04/2024 13:30", cmr_number: "1238")
Document.create!(taking_over_at: "18/04/2024 15:30", cmr_number: "1239")
