# README

Document attributes
---

1. CMR number

- Nadawca (Nazwisko lub nazwa, adres, kraj)
1. Nazwa firmy
2. Adres
3. Kod pocztowy
4. Miejscowość
5. Kraj
6. VAT
7. Telefon
8. EORI

- Odbiorca (Nazwisko lub nazwa, adres, kraj)
1. Nazwa firmy
2. Adres
3. Kod pocztowy
4. Miejscowość
5. Kraj
6. VAT
7. Telefon
8. EORI

- Miejsce przeznaczenia(Miejscowość, kraj)
1. Nazwa firmy
2. Adres
3. Kod pocztowy
4. Miejscowość
5. Kraj
6. VAT
7. Telefon
8. EORI

- Miejsce i data załadowania (Miejscowość, kraj, data)
1. Miejscowość załadunku
2. Data załadunku
3. Kraj załadunku

- Załączone dokumenty
1. Dołączone dokumenty
2. Dołączone dokumenty c.d.
3. Załączone dokumenty

Sender
Consignee
Place of delivery of the goods
Place and date of taking over of the goods
Documents attached
Marks and Nos
Number of packages
Method of packing
Nature of goods
Statistical number
Gross weight in kg
Volume in m³
Sender's instructions
Cash on delivery
Instructions as to payment carrier
Carrier
Successive carriers
Reservations and remarks by carriers
To be paid by
Special agreements
Established in/on
Signature and stamp of the sender
Signature and stamp of the carrier
Date of receipt as well as signature and stamp of the consignee


rails g scaffold document cmr_number sender_name sender_address sender_postal_code sender_city sender_country sender_vat sender_phone sender_eori
                                     consignee_name consignee_address consignee_postal_code consignee_city consignee_country consignee_vat consignee_phone consignee_eori
                                     place_of_delivery_name place_of_delivery_address place_of_delivery_postal_code place_of_delivery_city place_of_delivery_country place_of_delivery_vat place_of_delivery_phone place_of_delivery_eori
                                     place_and_date_of_taking_over_city place_and_date_of_taking_over_date:date place_and_date_of_taking_over_country
                                     documents_attached documents_attached_2 documents_attached_3
                                     sender_instructions
                                     instructions_as_to_payment_for_carrier carrier_paid carrier_forward
                                     cash_on_delivery
                                     carrier_name carrier_address carrier_postal_code carrier_city carrier_country carrier_vat carrier_phone carrier_eori carrier_truck_plates
                                     successive_carriers_name successive_carriers_address successive_carriers_postal_code successive_carriers_city successive_carriers_country successive_carriers_vat successive_carriers_phone successive_carriers_eori successive_carriers_truck_plates
                                     carriers_reservations_and_observations



rails g scaffold document cmr_number sender_1:text consignee_2:text delivery_place_3:text taking_over_place_4:text taking_over_date_4:date documents_5:text marks_6_1 number_7_1 method_8_1 nature_9_1 number_10_1 weight_11_1 volume_12_1 marks_6_2 number_7_2 method_8_2 nature_9_2 number_10_2 weight_11_2 volume_12_2 marks_6_3 number_7_3 method_8_3 nature_9_3 number_10_3 weight_11_3 volume_12_3 marks_6_4 number_7_4 method_8_4 nature_9_4 number_10_4 weight_11_4 volume_12_4 class_6 number_7 letter_8 adr_9  sender_instructions_13:text carriage_instructions_14 carriage_paid_14 carriage_forward_14 cash_on_delivery_15 carrier_16:text carriers_plates_16:text successive_carriers_17:text carriers_reservations_18:text special_agreements_19:text established_in_21 established_in_date_21
rails g scaffold document cmr_number 1_sender:text 2_consignee:text 3_delivery_place:text 4_taking_over_place:text 4_taking_over_date:date 5_documents:text 6_marks_1 7_number_1 8_method_1 9_nature_1 10_number_1 11_weight_1 12_volume_1 6_marks_2 7_number_2 8_method_2 9_nature_2 10_number_2 11_weight_2 12_volume_2 6_marks_3 7_number_3 8_method_3 9_nature_3 10_number_3 11_weight_3 12_volume_3 6_marks_4 7_number_4 8_method_4 9_nature_4 10_number_4 11_weight_4 12_volume_4 6_class 7_number 8_letter 9_adr  13_sender_instructions:text 14_carriage_instructions 14_carriage_paid 14_carriage_forward 15_cash_on_delivery 16_carrier:text 16_carriers_plates:text 17_successive_carriers:text 18_carriers_reservations:text 19_special_agreements:text 21_established_in 21_established_in_date