var data = ["Cały kraj", "bolesławiecki", "dzierżoniowski", "głogowski", "górowski", "jaworski", "jeleniogórski", "kamiennogórski", "kłodzki", "legnicki", "lubański", "lubiński", "lwówecki", "milicki", "oleśnicki", "oławski", "polkowicki", "strzeliński", "średzki", "świdnicki", "trzebnicki", "wałbrzyski", "wołowski", "wrocławski", "ząbkowicki", "zgorzelecki", "złotoryjski", "Jelenia Góra", "Legnica", "Wrocław", "Wałbrzych", "aleksandrowski", "brodnicki", "bydgoski", "chełmiński", "golubsko-dobrzyński", "grudziądzki", "inowrocławski", "lipnowski", "mogileński", "nakielski", "radziejowski", "rypiński", "sępoleński", "świecki", "toruński", "tucholski", "wąbrzeski", "włocławski", "żniński", "Bydgoszcz", "Grudziądz", "Toruń", "Włocławek", "bialski", "biłgorajski", "chełmski", "hrubieszowski", "janowski", "krasnostawski", "kraśnicki", "lubartowski", "lubelski", "łęczyński", "łukowski", "opolski", "parczewski", "puławski", "radzyński", "rycki", "tomaszowski", "włodawski", "zamojski", "Biała Podlaska", "Chełm", "Lublin", "Zamość", "gorzowski", "krośnieński", "międzyrzecki", "nowosolski", "słubicki", "strzelecko-drezdenecki", "sulęciński", "świebodziński", "zielonogórski", "żagański", "żarski", "wschowski", "Gorzów Wielkopolski", "Zielona Góra", "bełchatowski", "kutnowski", "łaski", "łęczycki", "łowicki", "łódzki wschodni", "opoczyński", "pabianicki", "pajęczański", "piotrkowski", "poddębicki", "radomszczański", "rawski", "sieradzki", "skierniewicki", "wieluński", "wieruszowski", "zduńskowolski", "zgierski", "brzeziński", "Łódź", "Piotrków Trybunalski", "Skierniewice", "bocheński", "brzeski", "chrzanowski", "dąbrowski", "gorlicki", "krakowski", "limanowski", "miechowski", "myślenicki", "nowosądecki", "nowotarski", "olkuski", "oświęcimski", "proszowicki", "suski", "tarnowski", "tatrzański", "wadowicki", "wielicki", "Kraków", "Nowy Sącz", "Tarnów", "białobrzeski", "ciechanowski", "garwoliński", "gostyniński", "grodziski", "grójecki", "kozienicki", "legionowski", "lipski", "łosicki", "makowski", "miński", "mławski", "nowodworski", "ostrołęcki", "ostrowski", "otwocki", "piaseczyński", "płocki", "płoński", "pruszkowski", "przasnyski", "przysuski", "pułtuski", "radomski", "siedlecki", "sierpecki", "sochaczewski", "sokołowski", "szydłowiecki", "warszawski zachodni", "węgrowski", "wołomiński", "wyszkowski", "zwoleński", "żuromiński", "żyrardowski", "Ostrołęka", "Płock", "Radom", "Siedlce", "Warszawa", "głubczycki", "kędzierzyńsko-kozielski", "kluczborski", "krapkowicki", "namysłowski", "nyski", "oleski", "prudnicki", "strzelecki", "Opole", "bieszczadzki", "brzozowski", "dębicki", "jarosławski", "jasielski", "kolbuszowski", "leżajski", "lubaczowski", "łańcucki", "mielecki", "niżański", "przemyski", "przeworski", "ropczycko-sędziszowski", "rzeszowski", "sanocki", "stalowowolski", "strzyżowski", "tarnobrzeski", "leski", "Krosno", "Przemyśl", "Rzeszów", "Tarnobrzeg", "augustowski", "białostocki", "bielski", "grajewski", "hajnowski", "kolneński", "łomżyński", "moniecki", "sejneński", "siemiatycki", "sokólski", "suwalski", "wysokomazowiecki", "zambrowski", "Białystok", "Łomża", "Suwałki", "bytowski", "chojnicki", "człuchowski", "gdański", "kartuski", "kościerski", "kwidzyński", "lęborski", "malborski", "pucki", "słupski", "starogardzki", "tczewski", "wejherowski", "sztumski", "Gdańsk", "Gdynia", "Słupsk", "Sopot", "będziński", "cieszyński", "częstochowski", "gliwicki", "kłobucki", "lubliniecki", "mikołowski", "myszkowski", "pszczyński", "raciborski", "rybnicki", "tarnogórski", "bieruńsko-lędziński", "wodzisławski", "zawierciański", "żywiecki", "Bielsko-Biała", "Bytom", "Chorzów", "Częstochowa", "Dąbrowa Górnicza", "Gliwice", "Jastrzębie-Zdrój", "Jaworzno", "Katowice", "Mysłowice", "Piekary Śląskie", "Ruda Śląska", "Rybnik", "Siemianowice Śląskie", "Sosnowiec", "Świętochłowice", "Tychy", "Zabrze", "Żory", "buski", "jędrzejowski", "kazimierski", "kielecki", "konecki", "opatowski", "ostrowiecki", "pińczowski", "sandomierski", "skarżyski", "starachowicki", "staszowski", "włoszczowski", "Kielce", "bartoszycki", "braniewski", "działdowski", "elbląski", "ełcki", "giżycki", "iławski", "kętrzyński", "lidzbarski", "mrągowski", "nidzicki", "nowomiejski", "olecki", "olsztyński", "ostródzki", "piski", "szczycieński", "gołdapski", "węgorzewski", "Elbląg", "Olsztyn", "chodzieski", "czarnkowsko-trzcianecki", "gnieźnieński", "gostyński", "jarociński", "kaliski", "kępiński", "kolski", "koniński", "kościański", "krotoszyński", "leszczyński", "międzychodzki", "nowotomyski", "obornicki", "ostrzeszowski", "pilski", "pleszewski", "poznański", "rawicki", "słupecki", "szamotulski", "śremski", "turecki", "wągrowiecki", "wolsztyński", "wrzesiński", "złotowski", "Kalisz", "Konin", "Leszno", "Poznań", "białogardzki", "choszczeński", "drawski", "goleniowski", "gryficki", "gryfiński", "kamieński", "kołobrzeski", "koszaliński", "myśliborski", "policki", "pyrzycki", "sławieński", "stargardzki", "szczecinecki", "świdwiński", "wałecki", "łobeski", "Koszalin", "Szczecin", "Świnoujście"]
var newPowiat = document.getElementById("powiatList")
for (i in data) {
    newPowiat = document.getElementById("powiatList").appendChild(document.createElement("option"))
    newPowiat.value = data[i]
}
newPowiat = document.getElementById("powiatSelect")
newPowiat.addEventListener("input", plot)
document.getElementById("powiatSelect2").addEventListener("input", plot)
document.getElementById("powiatSelect3").addEventListener("input", plot)
var csv = false
if (csv === false) {
    csvData = Plotly.d3.csv("https://raw.githubusercontent.com/piotrek124-1/Wykres-liczby-zakazen/main/plotData/casesUTF-8.csv", function (error, data) {
        plotCsvData = data
        csv = true
    })
}
var plotCsvData = []
var liczbaPrzypadkow = [], stan_rekordu_na = [], powiatName

function plot() {
    function activePowiat(powiat) {
        liczbaPrzypadkow = []
        stan_rekordu_na = []
        for (i in plotCsvData) {
            if (plotCsvData[i]["powiat_miasto"] === powiat) {
                liczbaPrzypadkow.push(plotCsvData[i]["liczba_przypadkow"])
                stan_rekordu_na.push(plotCsvData[i]["stan_rekordu_na"])
            }
        }
        powiatName = powiat
    }

    activePowiat(document.getElementById("powiatSelect").value)
    var trace = {
        x: stan_rekordu_na,
        y: liczbaPrzypadkow,
        mode: "lines",
        name: powiatName
    }
    activePowiat(document.getElementById("powiatSelect2").value)
    var trace2 = {
        x: stan_rekordu_na,
        y: liczbaPrzypadkow,
        mode: "lines",
        name: powiatName
    }
    activePowiat(document.getElementById("powiatSelect3").value)
    var trace3 = {
        x: stan_rekordu_na,
        y: liczbaPrzypadkow,
        mode: "lines",
        name: powiatName
    }
    var layout = {
        title: "Wykres zakażeń Covid-19",
        xaxis: {
            title: "data",
            tickvals: stan_rekordu_na,
            tickformat: "%d/%m"
        }, yaxis: {
            title: "Liczba przypadków"
        }
    }
    var plotData = [trace, trace2, trace3]
    Plotly.newPlot("plot", plotData, layout)
}
