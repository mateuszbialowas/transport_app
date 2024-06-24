# frozen_string_literal: true

module Documents
  module FormHelper
    def argo
      <<~TEXT
        ARGO
        Katarzyna SZUMILAS Hanusiak
        18-106 Turośń Kościelna
        Ul. Wysokie 40
        NIP 8991496318
      TEXT
    end

    def bauer_blue_gmbh
      <<~TEXT
        BAUER BLUE GMBH
        Herstellung&Vartrieb
        Kolpingstrasse 24
        88416 Ochsenhausen Germany
      TEXT
    end

    def sender_collection
      [['ARGO', argo],
       ['BAUER BLUE GMBH', bauer_blue_gmbh]]
    end

    def taking_over_place_collection
      ['21-521 Zalesie', '21-512 Wólka Dobryńska']
    end

    def sender_signature_collection
      [['ARGO', argo + "\nMarcin Hanusiak"],
       ['BAUER BLUE GMBH', bauer_blue_gmbh + "\nMarcin Hanusiak"]]
    end
  end
end
