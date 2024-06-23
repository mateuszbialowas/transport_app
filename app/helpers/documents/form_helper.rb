# frozen_string_literal: true

module Documents
  module FormHelper
    def sender_collection
      [['Jan Kowalski', "Test\n
         Test2\n Test2 Test2
         Test3 Test3 Test3"],

       ['Wodzianka', "Test4
         Test5 Test5
         Test6 Test6 Test6"]]
    end

    def taking_over_place_collection
      %w[Małaszewicze Białystok]
    end

    def sender_signature_collection
      [['ARGO',
        "
        ARGO
        Katarzyna SZUMILAS Hanusiak
        18-106 Turośń Kościelna
        Ul. Wysokie 40
        NIP 8991496318

        Marcin Hanusiak"], %w[ARGO2 Test]]
    end
  end
end
