import {Controller} from "@hotwired/stimulus"
import { jsPDF } from "jspdf"

import "./jspdf/Roboto-Regular-normal.js";
import "./jspdf/Roboto-Bold-normal.js";

// Connects to data-controller="cmr"
export default class extends Controller {

    static values = {
        sender: String,
        cmrNumber: String,
        consignee: String,
        carrier: String,
        carriersPlates: String,
        deliveryPlace: String,
        successiveCarriers: String,
        takingOverPlace: String,
        takingOverDate: String,
        documents: String,
        products: String,
        senderInstructions: String,
        specialAgreements: String,
        carriageInstructions: String,
        carriagePaid: String,
        carriageForward: String,
        establishedIn: String,
        establishedInDate: String,
        cashOnDelivery: String,
        senderSignature: String
    }

    save() {
        let doc = new jsPDF();

        let thin = 0.1;

        doc.setFont("Roboto");


        // 1. EGZEMPLARZ DLA NADAWCY ==============================================================

        doc.setDrawColor(237, 23, 72);
        doc.setLineWidth(thin);

        doc.rect(14, 25, 182, 262); // main rectangle
        //doc.addImage(imgData, 'png', 138, 12);

        doc.setTextColor(237, 23, 72);
        doc.setFontSize(28);

        doc.setFont(undefined, "bold")

        doc.text(7, 25, '1');
        doc.setFontSize(6.5);
        doc.text(14, 20, 'Egzemplarz dla nadawcy');
        doc.text(14, 22, 'Exemplar fur den Absender');
        doc.text(14, 24, 'Copy for sender');


        this.prefill_page(doc);
        this.fill_page_with_data(doc);
        doc.addPage();

        // 2. EGZEMPLARZ DLA ODBIORCY ============================================================
        //=========================================================================================

        doc.setDrawColor(0, 130, 200);
        doc.setLineWidth(thin);

        doc.rect(14, 25, 182, 262); // main rectangle
        //doc.addImage(imgData, 'png', 138, 12);

        doc.setTextColor(0, 130, 200);
        doc.setFontSize(28);

        doc.setFont(undefined, "bold")
        doc.text(7, 25, '2');
        doc.setFontSize(6.5);
        doc.text(14, 20, 'Egzemplarz dla odbiorcy');
        doc.text(14, 22, 'Exemplar fur den Empfanger');
        doc.text(14, 24, 'Copy for consignee');


        this.prefill_page(doc);
        this.fill_page_with_data(doc);
        doc.addPage();

        // 3. EGZEMPLARZ DLA PRZEWOŹNIKA ============================================================

        doc.setDrawColor(0, 169, 79);
        doc.setLineWidth(thin);

        doc.rect(14, 25, 182, 262); // main rectangle
        //doc.addImage(imgData, 'png', 138, 12);

        doc.setTextColor(0, 169, 79);
        doc.setFontSize(28);

        doc.setFont(undefined, "bold")
        doc.text(7, 25, '3');
        doc.setFontSize(6.5);
        doc.text(14, 20, 'Egzemplarz dla przewoznika');
        doc.text(14, 22, 'Exemplar fur den Frachtfuhrer');
        doc.text(14, 24, 'Copy for carrier');


        this.prefill_page(doc);
        this.fill_page_with_data(doc);
        doc.addPage();

        // 4. KOPIA ============================================================
        //=========================================================================================

        doc.setDrawColor(34, 30, 31);

        doc.setLineWidth(thin);
        doc.rect(14, 25, 182, 262); // main rectangle
        //doc.addImage(imgData, 'png', 138, 12);

        doc.setTextColor(34, 30, 31);
        doc.setFontSize(28);
        doc.setFont(undefined, "bold")
        doc.text(7, 25, 'KOPIA');
        doc.setFont(undefined, "bold")
        doc.setFontSize(6.5);



        this.prefill_page(doc);


        // INPUTS:


        this.fill_page_with_data(doc);

        // Save the PDF
        doc.save('DokumentCMR.pdf');
    }

    prefill_page(doc) {
        let fat = 0.6;
        let thin = 0.1;

        doc.setFontSize(15.5);
        // doc.text(115.5, 24, 'WWWW.CMRONLINE.PL');

        // CMR - CONSIGNMENT NOTE
        doc.rect(105, 25, 91, 24);
        doc.setFont(undefined, "normal")

        doc.setFontSize(5.5);
        doc.text(108, 27, 'MIEDZYNARODOWY SAMOCHODOWY LIST PRZEWOZOWY');
        doc.text(108, 29, 'INTERNATIONALER FRACHTBRIEF');
        doc.text(108, 31, 'INTERNATIONAL CONSIGNMENT');
        doc.setFontSize(5);
        doc.text(108, 37.5, 'Niniejszy przewoz podlega postanowieniom konwencji o umowie miedzynarodowej przewozu');
        doc.text(108, 39.3, 'drogowego towarow (CMR) bez wzgledu na jakakolwiek przeciwna klauzule.');
        doc.text(108, 41.8, 'Diese Beforderung unterliegt trotz einer gegen-');
        doc.text(108, 43.6, 'teiligen Abmachung den Bestimmungen des');
        doc.text(108, 45.4, 'Ubereinkommens uber den Beforderungsvertrag');
        doc.text(108, 47.2, 'im internationalen Strassenguterverkehr (CMR)');
        doc.text(154, 41.8, 'This carriage is subject notwithstanding any');
        doc.text(154, 43.6, 'clause to the contrary, to the Convention on');
        doc.text(154, 45.4, 'the Contract for the international Carriage of');
        doc.text(154, 47.2, 'goods by road (CMR)');

        doc.setFontSize(14);
        doc.setFont(undefined, "bold")
        doc.text(145, 33.5, 'CMR');
        doc.setFontSize(10);
        doc.text(159, 33, 'No:');


        // 1. NADAWCA
        doc.rect(14, 25, 91, 24);
        doc.setFontSize(13);
        doc.setFont(undefined, "bold")
        doc.text(17, 30, '1');
        doc.setFontSize(5.5);
        doc.setFont(undefined, "normal")
        doc.text(21, 27, 'Nadawca (nazwisko lub nazwa, adres, kraj)');
        doc.text(21, 28.8, 'Absender (Name, Anschrift, Land)');
        doc.text(21, 30.6, 'Sender (name, address, country)');


        // 2. ODBIORCA
        doc.rect(14, 49, 91, 24);
        doc.setFontSize(13);
        doc.setFont(undefined, "bold")
        doc.text(17, 54, '2');
        doc.setFontSize(5.5);
        doc.setFont(undefined, "normal")
        doc.text(21, 51, 'Odbiorca (nazwisko lub nazwa, adres, kraj)');
        doc.text(21, 52.8, 'Empfanger (Name, Anschrift, Land)');
        doc.text(21, 54.6, 'Consignee (name, address, country)');


        // 3. MIEJSCE PRZEZNACZENIA
        doc.rect(14, 73, 91, 24);
        doc.setFontSize(13);
        doc.setFont(undefined, "bold")
        doc.text(17, 78, '3');
        doc.setFontSize(5.5);
        doc.setFont(undefined, "normal")
        doc.text(21, 75, 'Miejsce przeznaczenia (miejscowosc, kraj)');
        doc.text(21, 76.8, 'Auslieferungsort des Gutes (Ort, Land)');
        doc.text(21, 78.6, 'Place of delivery of the goods (place, country)');


        // 4. MIEJSCE I DATA ZAŁADOWANIA
        doc.rect(14, 97, 91, 15);
        doc.setFontSize(13);
        doc.setFont(undefined, "bold")
        doc.text(17, 102, '4');
        doc.setFontSize(5.5);
        doc.setFont(undefined, "normal")
        doc.text(21, 99, 'Miejsce i data zaladowania (miejscowosc, kraj, data)');
        doc.text(21, 100.8, 'Ort und Tag der Ubernahme das Gutes (Ort, Land, Datum)');
        doc.text(21, 102.6, 'Place and date taking over the goods (place, country, data)');


        // 5. ZAŁĄCZONE DOKUMENTY
        doc.rect(14, 112, 91, 15);
        doc.setFontSize(13);
        doc.setFont(undefined, "bold")
        doc.text(17, 117, '5');
        doc.setFontSize(5.5);
        doc.setFont(undefined, "normal")
        doc.text(21, 114, 'Zalaczone dokumenty');
        doc.text(21, 115.8, 'Beigefugte Dokumente');
        doc.text(21, 117.6, 'Documents attached');


        // 6. 7. 8. 9.
        doc.rect(14, 127, 113, 53);
        doc.rect(14, 180, 113, 7);

        // 6.
        doc.setFontSize(13);
        doc.setFont(undefined, "bold")
        doc.text(17, 133, '6 - 9');
        doc.setFontSize(5);
        doc.setFont(undefined, "normal")
        doc.text(28, 130, 'Produkty');
        doc.text(28, 131.8, 'Produkte');
        doc.text(28, 133.6, 'Products');

        // doc.text(17, 182, 'Klasa');
        // doc.text(17, 183.8, 'Klasse');
        // doc.text(17, 185.6, 'Class');

        // 7.
        // doc.setFontSize(13);
        // doc.setFont(undefined, "bold")
        // doc.text(46, 133, '7');
        // doc.setFontSize(5);
        // doc.setFont(undefined, "normal")
        // doc.text(50, 130, 'Ilosc sztuk');
        // doc.text(50, 131.8, 'Anzahl der Packstucke');
        // doc.text(50, 133.6, 'Number of packages');
        //
        // doc.text(46, 182, 'Liczba');
        // doc.text(46, 183.8, 'Ziffer');
        // doc.text(46, 185.6, 'Number');

        // 8.
        // doc.setFontSize(13);
        // doc.setFont(undefined, "bold")
        // doc.text(75, 133, '8');
        // doc.setFontSize(5);
        // doc.setFont(undefined, "normal")
        // doc.text(79, 130, 'Sposob opakowania');
        // doc.text(79, 131.8, 'Art der Verpackung');
        // doc.text(79, 133.6, 'Method of packing');
        //
        // doc.text(75, 182, 'Litera');
        // doc.text(75, 183.8, 'Buchstabe');
        // doc.text(75, 185.6, 'Letter');

        // 9.
        // doc.setFontSize(13);
        // doc.setFont(undefined, "bold")
        // doc.text(101, 133, '9');
        // doc.setFontSize(5);
        // doc.setFont(undefined, "normal")
        // doc.text(105, 130, 'Rodzaj towaru');
        // doc.text(105, 131.8, 'Bezeichnung des Gutes');
        // doc.text(105, 133.6, 'Nature of the goods');
        //
        // doc.text(101, 182, '(ADR*)');

        // 10. NR STATYSTYCZNY
        doc.rect(127, 127, 23, 53);
        doc.setFontSize(13);
        doc.setFont(undefined, "bold")
        doc.text(128, 133, '10');
        doc.setFontSize(5);
        doc.setFont(undefined, "normal")
        doc.text(134, 130, 'Numer statystyczny');
        doc.text(134, 131.8, 'Statistiknummer');
        doc.text(134, 133.6, 'Statistical number');


        // 11. WAGA BRUTTO
        doc.rect(150, 127, 23, 53);
        doc.setFontSize(13);
        doc.setFont(undefined, "bold")
        doc.text(151, 133, '11');
        doc.setFontSize(5);
        doc.setFont(undefined, "normal")
        doc.text(157, 130, 'Waga brutto w kg');
        doc.text(157, 131.8, 'Bruttogewicht in kg');
        doc.text(157, 133.6, 'Groos weight in kg');


        // 12. OBJĘTOŚĆ
        doc.rect(173, 127, 23, 53);
        doc.setFontSize(13);
        doc.setFont(undefined, "bold")
        doc.text(174, 133, '12');
        doc.setFontSize(5);
        doc.setFont(undefined, "normal")
        doc.text(180, 130, 'Objetosc w m3');
        doc.text(180, 131.8, 'Umfang m3');
        doc.text(180, 133.6, 'Volume in m3');


        // 13. INSTRUKCJE NADAWCY
        doc.rect(14, 187, 88, 42);
        doc.setFontSize(13);
        doc.setFont(undefined, "bold")
        doc.text(15, 192, '13');
        doc.setFontSize(5.5);
        doc.setFont(undefined, "normal")
        doc.text(21, 189, 'Instrukcje nadawcy');
        doc.text(21, 190.8, 'Anweisungen des Absenders');
        doc.text(21, 192.6, 'Senders instructions');


        // 14. POSTANOWIENIA ODNOŚNIE PRZEWOŹNEGO
        doc.rect(14, 229, 88, 14);
        doc.setFontSize(13);
        doc.setFont(undefined, "bold")
        doc.text(15, 234, '14');
        doc.setFontSize(5.5);
        doc.setFont(undefined, "normal")
        doc.text(21, 231, 'Postanowienia odnosnie przewoznego');
        doc.text(21, 232.8, 'Frechtzahlungsanweisungen');
        doc.text(21, 234.6, 'Instruction as to payment for carriage');
        doc.text(21, 239.2, 'Przewozne zaplacone / frei / Carriage paid');
        doc.text(21, 241, 'Przewozne nieoplacone / Unfrei / Carriage forward');


        // 15. ZAPŁATA
        doc.rect(102, 243, 94, 9);
        doc.setFontSize(13);
        doc.setFont(undefined, "bold")
        doc.text(103, 248, '15');
        doc.setFontSize(5.5);
        doc.setFont(undefined, "normal")
        doc.text(110, 246, 'Zaplata');
        doc.text(110, 247.8, 'Ruckerstattung');
        doc.text(110, 249.6, 'Cash on delivery');


        // 16. PRZEWOŹNIK
        doc.setLineWidth(fat);
        doc.rect(105, 49, 91, 78);
        doc.setLineWidth(thin);
        doc.rect(105, 49, 91, 24);
        doc.setFontSize(13);
        doc.setFont(undefined, "bold")
        doc.text(106, 54, '16');
        doc.setFontSize(10);
        doc.text(112, 71.5, 'NR REJ.:');
        doc.setFontSize(5.5);
        doc.setFont(undefined, "normal")
        doc.text(112, 51, 'Przewoznik (nazwisko lub nazwa, adres, kraj)');
        doc.text(112, 52.8, 'Frachtfuhrer (Name, Anschrift, Land)');
        doc.text(112, 54.6, 'Carrier (name, address, country)');


        // 17. KOLEJNI PRZEWOŹNICY
        doc.rect(105, 73, 91, 24);
        doc.setFontSize(13);
        doc.setFont(undefined, "bold")
        doc.text(106, 78, '17');
        doc.setFontSize(5.5);
        doc.setFont(undefined, "normal")
        doc.text(112, 75, 'Kolejni przewoznicy (nazwisko lub nazwa, adres, kraj)');
        doc.text(112, 76.8, 'Nachfolgende Frachtfuhrer (Name, Anschrift, Land)');
        doc.text(112, 78.6, 'Successive carriers (name, address, country)');


        // 18. ZASTRZEŻENIA I UWAGI PRZEWOŹNIKA
        doc.rect(105, 97, 91, 30);
        doc.setFontSize(13);
        doc.setFont(undefined, "bold")
        doc.text(106, 102, '18');
        doc.setFontSize(5.5);
        doc.setFont(undefined, "normal")
        doc.text(112, 99, 'Zastrzezenia i uwagi przewoznika');
        doc.text(112, 100.8, 'Vorbehalte und Bemerkungen der Frachtfuhrer');
        doc.text(112, 102.6, 'Carrier’s reservations and observations');


        // 19. POSTANOWIENIA SPECJALNE
        doc.rect(102, 187, 94, 22);
        doc.setFontSize(13);
        doc.setFont(undefined, "bold")
        doc.text(103, 192, '19');
        doc.setFontSize(5.5);
        doc.setFont(undefined, "normal")
        doc.text(110, 189, 'Postanowienia specjalne');
        doc.text(110, 190.8, 'Besondere Vereinbarungen');
        doc.text(110, 192.6, 'Special agreements');


        // 20. PRZEWOŹNE
        doc.setLineWidth(fat);
        doc.rect(102, 209, 94, 34);
        doc.setLineWidth(thin);
        doc.rect(102, 209, 94, 7);
        doc.rect(102, 216, 94, 8);
        doc.rect(102, 224, 94, 10.5);
        doc.rect(102, 234.5, 94, 3.5);


        doc.rect(127, 209, 14, 34);
        doc.rect(127, 216, 69, 4);
        doc.rect(127, 224, 69, 3.5);
        doc.rect(127, 227.5, 69, 3.5);
        doc.rect(141, 209, 9, 34);
        doc.setLineWidth(fat);
        doc.rect(150, 209, 24, 34);
        doc.setLineWidth(thin);
        doc.rect(174, 209, 14, 34);
        doc.rect(150, 216, 12, 27);

        doc.setFontSize(13);
        doc.setFont(undefined, "bold")
        doc.text(103, 214, '20');
        doc.setFontSize(5.5);
        doc.setFont(undefined, "normal")
        doc.text(110, 211, 'Do zaplacenia');
        doc.text(110, 212.8, 'Zu zahlen vom');
        doc.text(110, 214.6, 'To be paid by');
        doc.text(130, 211, 'Nadawca');
        doc.text(130, 212.8, 'Absender');
        doc.text(130, 214.6, 'Sender');
        doc.text(158, 211, 'Waluta');
        doc.text(158, 212.8, 'Wahrung');
        doc.text(158, 214.6, 'Currency');
        doc.text(176, 211, 'Odbiorca');
        doc.text(176, 212.8, 'Empfanger');
        doc.text(176, 214.6, 'Consignee');


        doc.setFontSize(5);
        doc.text(103.5, 218, 'Przewozne / Fracht');
        doc.text(103.5, 219.5, '/ Carriage charges');
        doc.text(103.5, 221.7, 'Bonifikaty / Ermassigungen');
        doc.text(103.5, 223.2, '/ Deductions');

        doc.text(103.5, 225.8, 'Saldo / Zuschlage');
        doc.text(103.5, 227.3, '/ Balance');
        doc.text(103.5, 229.1, 'Doplaty / Nebengebuhren');
        doc.text(103.5, 230.5, '/ Supplem. charges');
        doc.text(103.5, 232.3, 'Koszty dodatkowe');
        doc.text(103.5, 233.8, '/ Sonstiges / Miscellaneous');

        doc.text(103.5, 236.8, 'Ubezpieczenie');
        doc.text(103.5, 240.2, 'Razem / Gesamtsumme');
        doc.text(103.5, 241.7, 'Total to be paid');


        // 21. WYSTAWIONO W ... DNIA ...
        doc.setLineWidth(thin);
        doc.rect(14, 243, 88, 9);
        doc.setFontSize(13);
        doc.setFont(undefined, "bold")
        doc.text(15, 248, '21');
        doc.setFontSize(5.5);
        doc.setFont(undefined, "normal")
        doc.text(21, 245, 'Wystawiono w');
        doc.text(21, 246.8, 'Ausgefertigt in');
        doc.text(21, 248.6, 'Established in');
        doc.text(67, 245, 'dnia');
        doc.text(67, 246.8, 'am');
        doc.text(67, 248.6, 'on');


        // 22. PODPIS I STEMPEL NADAWCY
        doc.rect(14, 252, 60, 35);
        doc.setFontSize(13);
        doc.setFont(undefined, "bold")
        doc.text(15, 257, '22');
        doc.setFontSize(5.5);
        doc.setFont(undefined, "normal")
        doc.text(16, 281.6, 'Podpis i stempel nadawcy');
        doc.text(16, 283.4, 'Unterschrift und Stempel des Absenders');
        doc.text(16, 285.2, 'Signature and stamp of the sender');


        // 23. PODPIS I STEMPEL PRZEWOŹNIKA
        doc.setLineWidth(fat);
        doc.rect(74, 252, 60, 35);
        doc.setFontSize(13);
        doc.setFont(undefined, "bold")
        doc.text(75, 257, '23');
        doc.setFontSize(5.5);
        doc.setFont(undefined, "normal")
        doc.text(76, 281.6, 'Podpis i stempel przewoznika');
        doc.text(76, 283.4, 'Unterschrift und Stempel des Frachtfuhrers');
        doc.text(76, 285.2, 'Signature and stamp of the carrier');


        // 24. PRZESYŁKĘ OTRZYMANO
        doc.setLineWidth(thin);
        doc.rect(134, 252, 62, 35);
        doc.setFontSize(13);
        doc.setFont(undefined, "bold")
        doc.text(136, 257, '24');
        doc.setFontSize(5.5);
        doc.setFont(undefined, "normal")
        doc.text(142, 255, 'Przesylke otrzymano / Gut empfangen');
        doc.text(142, 256.8, '/Goods received');
        doc.text(136, 261, 'Miejscowosc');
        doc.text(136, 262.8, 'Ort');
        doc.text(136, 264.6, 'Place');
        doc.text(164, 261, 'dnia');
        doc.text(164, 262.8, 'am');
        doc.text(164, 264.6, 'on');
        doc.text(136, 281.6, 'Podpis i stempel odbiorcy');
        doc.text(136, 283.4, 'Unterschrift und Stempel des Empfangers');
        doc.text(136, 285.2, 'Signature and stamp of the consignee');

        doc.text(14, 289.6, 'Wzor CMR/IRU/Polska z 1976 dla miedzynarodowych przewozow drogowych odpowiada ustaleniom, ktore zostaly dokonane przez Miedzynarodowa Unie Transportu Drogowego (IRU).');

        // VERTICAL TEXT:
        doc.setFontSize(4.5);
        doc.text(8.5, 231, 'Do wypelnienia pod odpowiedzialnoscia nadawcy', null, 90);
        doc.text(10.3, 231, 'Auszufullen unter der Verantwortung das Absenders', null, 90);
        doc.text(12.1, 231, "To be completed on the sender's responsibility", null, 90);

        doc.text(8.5, 177, 'wlacznie oraz', null, 90);
        doc.text(10.3, 177, 'einschliesslich', null, 90);
        doc.text(12.1, 177, "including and", null, 90);

        doc.text(8.5, 132, 'Rubryki obwiedzione tlustymi liniami wypelnia przewoznik.', null, 90);
        doc.text(10.3, 132, 'Die mit fett gedruckten Linien eingerahmten Rubriken mussen vom Frachtfuhrer ausgefullt werden.', null, 90);
        doc.text(12.1, 132, "The spaces framed with heavy lines must be filled by the carrier.", null, 90);

        doc.text(202, 90, '* W przypadku przewozu towarow niebezpiecznych oprocz ewentualnego posiadania zaswiadczenia , nalezy podac w ostatnim wierszu: klase, liczbe oraz, w danym przypadku, litere', null, -90);
        doc.text(200.2, 90, '* Bei gefahrlichen Gutrn ist, ausser der eventuellen Bescheinigung, auf der letzten Linie der Rubrik anzugeben: die Klasse, die Zi er, sowie gegebenenfalls der Buchstabe.', null, -90);
        doc.text(198.4, 90, '* In case of dangerous goods mention, besides the possible certi fication, on the last line of the column the particulars of the class, the number and the letter, if any.', null, -90);

        doc.setFontSize(13);
        doc.setFont(undefined, "bold")
        doc.text(11.5, 191.5, '1 - 15', null, 90);
        doc.text(11.5, 163, '19 + 20 + 22', null, 90);
    }

    fill_page_with_data(doc) {
        doc.setFontSize(8);
        doc.setFont(undefined, "normal")
        doc.setTextColor(1, 1, 1);


        doc.text(21, 35,     this.senderValue);
        doc.text(166, 33,    this.cmrNumberValue);
        doc.text(21, 59,     this.consigneeValue);
        doc.text(112, 59,    this.carrierValue);
        doc.text(130, 71.5,  this.carriersPlatesValue);
        doc.text(21, 83,     this.deliveryPlaceValue);
        doc.text(112, 83,    this.successiveCarriersValue);
        doc.text(21, 107,    this.takingOverPlaceValue);
        doc.text(85, 107,    this.takingOverDateValue);
        doc.text(21, 122,    this.documentsValue);

        doc.text(21, 139,    this.productsValue);

        // doc.text(21, 139,    document.getElementById("document_marks_6_1").value);
        // doc.text(50, 139,    document.getElementById("document_number_7_1").value);
        // doc.text(79, 139,    document.getElementById("document_method_8_1").value);
        // doc.text(105, 139,   document.getElementById("document_nature_9_1").value);
        // doc.text(134, 139,   document.getElementById("document_number_10_1").value);
        // doc.text(157, 139,   document.getElementById("document_weight_11_1").value);
        // doc.text(180, 139,   document.getElementById("document_volume_12_1").value);

        // doc.text(21, 146,    document.getElementById("document_marks_6_2").value);
        // doc.text(50, 146,    document.getElementById("document_number_7_2").value);
        // doc.text(79, 146,    document.getElementById("document_method_8_2").value);
        // doc.text(105, 146,   document.getElementById("document_nature_9_2").value);
        // doc.text(134, 146,   document.getElementById("document_number_10_2").value);
        // doc.text(157, 146,   document.getElementById("document_weight_11_2").value);
        // doc.text(180, 146,   document.getElementById("document_volume_12_2").value);

        // doc.text(21, 153,    document.getElementById("document_marks_6_3").value);
        // doc.text(50, 153,    document.getElementById("document_number_7_3").value);
        // doc.text(79, 153,    document.getElementById("document_method_8_3").value);
        // doc.text(105, 153,   document.getElementById("document_nature_9_3").value);
        // doc.text(134, 153,   document.getElementById("document_number_10_3").value);
        // doc.text(157, 153,   document.getElementById("document_weight_11_3").value);
        // doc.text(180, 153,   document.getElementById("document_volume_12_3").value);

        // doc.text(21, 160,    document.getElementById("document_marks_6_4").value);
        // doc.text(50, 160,    document.getElementById("document_number_7_4").value);
        // doc.text(79, 160,    document.getElementById("document_method_8_4").value);
        // // doc.text(105, 160,   document.getElementById("document_nature_9_4").value);
        // doc.text(134, 160,   document.getElementById("document_number_10_4").value);
        // doc.text(157, 160,   document.getElementById("document_weight_11_4").value);
        // doc.text(180, 160,   document.getElementById("document_volume_12_4").value);

        // doc.text(25, 184.5,  document.getElementById("document_class_6").value);
        // doc.text(54, 184.5,  document.getElementById("document_number_7").value);
        // doc.text(85, 184.5,  document.getElementById("document_letter_8").value);
        // doc.text(109, 184.5, document.getElementById("document_adr_9").value);
        doc.text(21, 197,    this.senderInstructionsValue);
        doc.text(110, 197,   this.specialAgreementsValue);
        doc.text(57, 234,    this.carriageInstructionsValue);
        doc.text(67, 238,    this.carriagePaidValue);
        doc.text(67, 242,    this.carriageForwardValue);
        doc.text(38, 248,    this.establishedInValue);
        doc.text(76, 248,    this.establishedInDateValue);
        doc.text(129, 248,   this.cashOnDeliveryValue);
        doc.text(21, 254,    this.senderSignatureValue);
    }
}

