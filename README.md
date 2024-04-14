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



rails g scaffold document cmr_number sender consignee place_of_delivery place_and_date_of_taking_over_the_goods documents_attached sender_instructions instructions_as_to_payment_for_carrier cod carrier successive_carrier carriers_reservations_and_observations special_agreements to_be_paid_by established_in established_on signature_of_the_sender signature_of_the_carrier signature_of_the_consignee