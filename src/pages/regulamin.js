import React from "react"
import styled from "styled-components"
import { Typography, Container } from "@material-ui/core"

import Seo from "../components/seo"
import Layout from "../components/layout"
import SecondaryHero from "../components/Hero/SecondaryHero"

const StatuteContainer = styled(Container)`
  padding: 8rem 0;
`

function Regulamin() {
  return (
    <Layout>
      <Seo title="Regulamin" />
      <SecondaryHero title="Regulamin" />
      <StatuteContainer>
        <Typography variant="h4" align="center">Informacje wstępne</Typography>
        <ul>
          <li>
            Wręczenie kluczy do domku osobie rezerwującej nastąpi po pobraniu
            kaucji w wysokości 200 złotych, zameldowaniu oraz uregulowaniu
            ewentualnych dopłat(gotówką).
          </li>
          <li>
            Właścicielami obiektu są Krzysztof Bieda i Mariola Stanisz-Bieda.
          </li>
          <li>
            Klienci korzystający z usług obiektu zobowiązują się przestrzegać
            postanowień niniejszego regulaminu, przepisów BHP i przeciw
            pożarowych oraz stosować się w sytuacjach wyjątkowych do próśb
            właścicieli obiektu.
          </li>
          <li>
            Nie ponosimy odpowiedzialności za szkody będące wynikiem
            nieprzestrzegania przez klientów zawartych w regulaminie zasad i
            zarządzeń.
          </li>
          <li>Kaucja zostanie zwrócona w dniu wyjazdu, po dokonaniu kontroli domku przez
właścicieli. Prosimy o zgłoszenie dzień wcześniej planowanej godziny wyjazdu. Przy
wyjeździe należy usunąć odpadki oraz zmyć naczynia etc.</li>
          <li>Za nie zapoznanie się z Regulaminem Wynajmu Domku letniskowego pod Golcowem,
pełną odpowiedzialność ponosi osoba rezerwująca.</li>
          <li>Ostrzegamy, że palenie papierosów lub innych używek w domku jest podstawa do
zatrzymania całej kaucji. Prosimy o palenie na zewnątrz a odpady (niedopalone
papierosy) zostawiać w pojemniku lub słoiku.</li>
          <li>Wpłacony zadatek jest gwarantem realizacji usługi i w przypadku anulacji rezerwacji
przez klienta nie podlega zwrotowi.</li>
          <li>W przypadku, kiedy klient nie przyjedzie do obiektu do północy pierwszego dnia
pobytu, a nie zgłosił swojego późniejszego przyjazdu rezerwacja zostanie
automatycznie anulowana wraz z zadatkiem.</li>
          <li>Z tytułu późniejszego przybycia lub wcześniejszego wyjazdu nie będą udzielane żadne
zniżki/zwroty.</li>
          <li>Doba hotelowa zaczyna się o godz. 15.00 w dniu przyjazdu, kończy o godz. 11.00 w
dniu wyjazdu.</li>
          <li>W dniu przyjazdu należy uregulować z góry resztę opłaty za cały pobyt.</li>
        </ul>
        <Typography variant="h4" align="center">Regulamin wynajmu domku letniskowego POD GOLCOWEM</Typography>
        <ol>
          <li>Zakwaterowanie i wykwaterowanie następuje w obecności wynajmującego domek.</li>
          <li>Klienci naszego obiektu przyjmowani są po okazaniu dowodu tożsamości.</li>
          <li>Osobom postronnym nie udzielamy żadnych informacji o danych osobowych
zameldowanych gości naszego obiektu.</li>
          <li>Zgubienie kluczy skutkuje karą finansową <b>400 zł</b></li>
          <li>Do korzystania z obiektów uprawnione są wyłącznie osoby zameldowane.</li>
          <li>W mieszkaniu obowiązuje <b>CAŁKOWITY ZAKAZ PALENIA TYTONIU I UŻYWANIA
UŻYWEK.</b> Jeżeli w dniu wyjazdu okaże się, że w mieszkaniu było palone goście będą
musieli zapłacić karę wysokości 200zł.</li>
          <li>Zakaz używania w domku otwartego ognia (m.in. świeczek, lamp naftowych,
gazowych, własnych kuchenek elektrycznych i gazowych).</li>
          <li>W wyposażeniu domku znajduje się bielizna pościelowa i ręczniki, w takiej ilości, na
jaką opiewa rezerwacja. Z uwagi na zachowanie odpowiednich warunków
higienicznych, obowiązuje zakaz używania niepowleczonej pościeli, oraz wynoszenia
ręczników poza kompleks i wykorzystania ich w innych celach niż są do tego
przeznaczone (np. czyszczenie butów) Rezygnacja z używania pościeli i ręczników nie
stanowi podstawy do zniżek.</li>
          <li>Zakazane jest również przenoszenie wyposażenia oraz mebli.</li>
          <li>Śmieci i inne odpady należy składować w pojemniku znajdujących się pod zlewem.</li>
          <li>Goście ponoszą odpowiedzialność majątkową w razie powstania jakichkolwiek szkód,
choćby szkoda powstała z winy nieumyślnej.</li>
          <li>Gość zobowiązany jest do niezwłocznego poinformowania o szkodach wyrządzonych
przez Niego podczas pobytu i do pokrycia wartości tych szkód.</li>
          <li>Za wszystkie osobiste rzeczy znajdujące się w domku odpowiada wynajmujący Gość.</li>
          <li>W momencie przekazania przez właściciela klucza do lokalu stają się państwo jego
gospodarzami. Apartament jest zawsze posprzątany i taki należy oddać w dniu
wyjazdu, w przeciwnym razie będzie pobrana kwota z kaucji na sprzątanie.</li>
          <li>Pobierany wcześniej zadatek podlega zwrotowi w przypadku gdy nie dojdzie do
realizacji usługi z winy obiektu.</li>
          <li>W razie ciężkiego naruszenia postanowień Regulaminu, Wynajmujący uprawniony
jest do jednostronnego skrócenia okresu pobytu Gościa i nakazu niezwłocznego
opuszczenia obiektu.</li>
          <li>W przypadku skrócenia pobytu, opłata nie podlega zwrotowi, a o ewentualnym
przedłużeniu pobytu (za dodatkową opłatą 100 zł do końca dnia wyjazdu) należy
poinformować właściciela. Jednakże właściciel może nie uwzględnić takiej prośby w
przypadku braku wolnych miejsc.</li>
          <li>Osoby niezameldowane mogą przebywać w domku w godzinach od 7 do 22.</li>
          <li>Przebywanie osób niezameldowanych w domku po godzinie 22 jest równoznaczne z
wyrażeniem zgody przez najmującego domek na odpłatne dokwaterowanie tych
osób. Dokwaterowanie każdej osoby nastąpi według ceny z cennika. Niezgłoszone
osoby będą płaciły podwojoną cenę z cennika.</li>
          <li>Kradzież będzie zgłaszana odpowiednim służbom oraz karana finansowo.</li>
          <li>Dzieci przebywające na terenie obiektu powinny znajdować się pod stałym nadzorem
opiekunów prawnych. Co za tym idzie ponoszą oni odpowiedzialność materialną za
wszelkie szkody powstałe w wyniku ich działania dzieci.</li>
          <li>Każdorazowo Gość opuszczający pokój, ze względów bezpieczeństwa, powinien
wyłączyć telewizor, zgasić światło, zakręcić krany oraz zamknąć drzwi na klucz.
23. Właściciel nie ponosi odpowiedzialności występujące u niezależnych dostawców
spowodowanych np. czasowym brakiem prądu, wody, Internetu czy gazu.</li>
          <li>Niestosowanie się do w/w zasad może skutkować natychmiastowym,
wypowiedzeniem najmu bez zachowania prawa do zwrotu pieniędzy za pobyt.</li>
          <li>Gość wyraża zgodę na przechowywanie i przetwarzanie danych osobowych zgodnie z
ustawą o ochronie danych osobowych (Dz. U. z 2002 r. nr 101, poz. 926 z
późniejszymi zmianami) przez właściciela mieszkania.</li>
        </ol>
      </StatuteContainer>
    </Layout>
  )
}

export default Regulamin
