let liczbaPrzypadkow = [], stan_rekordu_na = [], liczbaTestow = [], sredniaLiczbaPrzypadkow = [], stanRekorduSrednia = [], yTitle = "liczba_przypadkow", plotTitle = "Wykres zakażeń Covid-19"
let sredniaLiczbaPrzypadkowWoj = [], stanRekorduSredniaWoj = [], stan_rekordu_naWoj = [], liczbaTestowWoj = [], liczbaPrzypadkowWoj = []
let sredniaLiczbaPrzypadkowPow = [], stanRekorduSredniaPow = [], stan_rekordu_naPow = [], liczbaTestowPow = [], liczbaPrzypadkowPow = []
let wojewodztwa = ["dolnośląskie","kujawsko-pomorskie","lubelskie","lubuskie","łódzkie","małopolskie","mazowieckie","opolskie","podkarpackie","podlaskie","pomorskie","śląskie","świętokrzyskie","warmińsko-mazurskie","wielkopolskie","zachodniopomorskie"]
var powiaty = ["aleksandrowski","augustowski","bartoszycki","bełchatowski","będziński","bialski","Biała Podlaska","białobrzeski","białogardzki","białostocki","Białystok","bielski","Bielsko-Biała","bieruńsko-lędziński","bieszczadzki","biłgorajski","bocheński","bolesławiecki","braniewski","brodnicki","brzeski","brzeziński","brzozowski","buski","bydgoski","Bydgoszcz","Bytom","bytowski","Chełm","chełmiński","chełmski","chodzieski","chojnicki","Chorzów","choszczeński","chrzanowski","ciechanowski","cieszyński","czarnkowsko-trzcianecki","Częstochowa","częstochowski","człuchowski","Dąbrowa Górnicza","dąbrowski","dębicki","drawski","działdowski","dzierżoniowski","Elbląg","elbląski","ełcki","garwoliński","Gdańsk","gdański","Gdynia","giżycki","Gliwice","gliwicki","głogowski","głubczycki","gnieźnieński","goleniowski","golubsko-dobrzyński","gołdapski","gorlicki","gorzowski","Gorzów Wielkopolski","gostyniński","gostyński","górowski","grajewski","grodziski","grójecki","Grudziądz","grudziądzki","gryficki","gryfiński","hajnowski","hrubieszowski","iławski","inowrocławski","janowski","jarociński","jarosławski","jasielski","Jastrzębie-Zdrój","jaworski","Jaworzno","Jelenia Góra","jeleniogórski","jędrzejowski","kaliski","Kalisz","kamiennogórski","kamieński","kartuski","Katowice","kazimierski","kędzierzyńsko-kozielski","kępiński","kętrzyński","Kielce","kielecki","kluczborski","kłobucki","kłodzki","kolbuszowski","kolneński","kolski","kołobrzeski","konecki","Konin","koniński","Koszalin","koszaliński","kościański","kościerski","kozienicki","krakowski","Kraków","krapkowicki","krasnostawski","kraśnicki","Krosno","krośnieński","krotoszyński","kutnowski","kwidzyński","legionowski","Legnica","legnicki","leski","leszczyński","Leszno","leżajski","lęborski","lidzbarski","limanowski","lipnowski","lipski","lubaczowski","lubański","lubartowski","lubelski","lubiński","Lublin","lubliniecki","lwówecki","łańcucki","łaski","łęczycki","łęczyński","łobeski","Łomża","łomżyński","łosicki","łowicki","łódzki wschodni","Łódź","łukowski","makowski","malborski","miechowski","mielecki","międzychodzki","międzyrzecki","mikołowski","milicki","miński","mławski","mogileński","moniecki","mrągowski","Mysłowice","myszkowski","myślenicki","myśliborski","nakielski","namysłowski","nidzicki","niżański","nowodworski","nowomiejski","nowosądecki","nowosolski","nowotarski","nowotomyski","Nowy Sącz","nyski","obornicki","olecki","oleski","oleśnicki","olkuski","Olsztyn","olsztyński","oławski","opatowski","opoczyński","Opole","opolski","ostrołęcki","Ostrołęka","ostrowiecki","ostrowski","ostródzki","ostrzeszowski","oświęcimski","otwocki","pabianicki","pajęczański","parczewski","piaseczyński","Piekary Śląskie","pilski","pińczowski","piotrkowski","Piotrków Trybunalski","piski","pleszewski","Płock","płocki","płoński","poddębicki","policki","polkowicki","Poznań","poznański","proszowicki","prudnicki","pruszkowski","przasnyski","przemyski","Przemyśl","przeworski","przysuski","pszczyński","pucki","puławski","pułtuski","pyrzycki","raciborski","Radom","radomski","radomszczański","radziejowski","radzyński","rawicki","rawski","ropczycko-sędziszowski","Ruda Śląska","rybnicki","Rybnik","rycki","rypiński","rzeszowski","Rzeszów","sandomierski","sanocki","sejneński","sępoleński","Siedlce","siedlecki","Siemianowice Śląskie","siemiatycki","sieradzki","sierpecki","skarżyski","Skierniewice","skierniewicki","sławieński","słubicki","słupecki","Słupsk","słupski","sochaczewski","sokołowski","sokólski","Sopot","Sosnowiec","stalowowolski","starachowicki","stargardzki","starogardzki","staszowski","strzelecki","strzelecko-drezdenecki","strzeliński","strzyżowski","sulęciński","suski","suwalski","Suwałki","szamotulski","Szczecin","szczecinecki","szczycieński","sztumski","szydłowiecki","średzki","śremski","świdnicki","świdwiński","świebodziński","świecki","Świętochłowice","Świnoujście","Tarnobrzeg","tarnobrzeski","tarnogórski","tarnowski","Tarnów","tatrzański","tczewski","tomaszowski","Toruń","toruński","trzebnicki","tucholski","turecki","Tychy","wadowicki","Wałbrzych","wałbrzyski","wałecki","Warszawa","warszawski zachodni","wąbrzeski","wągrowiecki","wejherowski","węgorzewski","węgrowski","wielicki","wieluński","wieruszowski","Włocławek","włocławski","włodawski","włoszczowski","wodzisławski","wolsztyński","wołomiński","wołowski","Wrocław","wrocławski","wrzesiński","wschowski","wysokomazowiecki","wyszkowski","Zabrze","zambrowski","zamojski","Zamość","zawierciański","ząbkowicki","zduńskowolski","zgierski","zgorzelecki","Zielona Góra","zielonogórski","złotoryjski","złotowski","zwoleński","żagański","żarski","żniński","Żory","żuromiński","żyrardowski","żywiecki"]
let wojewodztwoInput = document.getElementById("wojSelect")
let powiatInput = document.getElementById("powiatList")
for (i in wojewodztwa) {
    wojewodztwoList = document.getElementById("wojSelect").appendChild(document.createElement("option"))
    wojewodztwoList.innerHTML = wojewodztwa[i]
}
for (i in powiaty) {
    powiatList = document.getElementById("powiatList").appendChild(document.createElement("option"))
    powiatList.value = powiaty[i]
}
powiatInput = document.getElementById("powSelect")
wojewodztwoInput.addEventListener("change", wojewodztwo)
powiatInput.addEventListener("change", powiat)
csvOgolne = Plotly.d3.csv("https://raw.githubusercontent.com/piotrek124-1/zakazenia-Covid19/main/plotData/ogolnopolskie.csv", function (error, data) {
    ogolnopolskie = data
    wykres()
})
csvWoj = Plotly.d3.csv("https://raw.githubusercontent.com/piotrek124-1/zakazenia-Covid19/main/plotData/wojewodztwa_kompletne.csv", function (error, data) {
    wojewodzkie = data
    wojewodztwo()
})
csvPow = Plotly.d3.csv("https://raw.githubusercontent.com/piotrek124-1/zakazenia-Covid19/main/plotData/powiaty_kompletne.csv", function (error, data) {
    powiatowe = data
    powiat()
})
function wykres() {
    liczbaPrzypadkow = []
    stan_rekordu_na = []
    sredniaLiczbaPrzypadkow = []
    stanRekorduSrednia = []
    let sum = 0
    let j = 0
    let index = []
    for (i in ogolnopolskie) {
        liczbaPrzypadkow.push(ogolnopolskie[i]["liczba_przypadkow"])
        stan_rekordu_na.push(ogolnopolskie[i]["stan_rekordu_na"])
        liczbaTestow.push(ogolnopolskie[i]["liczba_wykonanych_testow"])
        index.push(i)
        sum += Number(ogolnopolskie[i]["liczba_przypadkow"])
        if (j > 5) {
            sredniaLiczbaPrzypadkow.push(sum / 7)
            stanRekorduSrednia.push(ogolnopolskie[i]["stan_rekordu_na"])
            sum -= Number(ogolnopolskie[index[0]]["liczba_przypadkow"])
            index.shift()
        }
        j++
    }
    yTitle = "Liczba przypadków"
    plotTitle = "Wykres zakażeń Covid-19"
    document.getElementById("date").innerText = stan_rekordu_na[Number(liczbaPrzypadkow.length) - 1]
    document.getElementById("cases").innerText = liczbaPrzypadkow[Number(liczbaPrzypadkow.length) - 1]
    document.getElementById("change").innerText = (1 - liczbaPrzypadkow[Number(liczbaPrzypadkow.length) - 1] / liczbaPrzypadkow[Number(liczbaPrzypadkow.length) - 2])
    document.getElementById("tests").innerText = (liczbaTestow[Number(liczbaTestow.length) - 1])
    plot("ogolne")
}

function wojewodztwo() {
    let wojewodztwoName = wojewodztwoInput.value
    liczbaPrzypadkowWoj = []
    stan_rekordu_naWoj = []
    sredniaLiczbaPrzypadkowWoj = []
    stanRekorduSredniaWoj = []
    let sum = 0
    let j = 0
    let index = []
    for (i in wojewodzkie) {
        if (wojewodzkie[i]["wojewodztwo"] === wojewodztwoName) {
            liczbaPrzypadkowWoj.push(wojewodzkie[i]["liczba_przypadkow"])
            stan_rekordu_naWoj.push(wojewodzkie[i]["stan_rekordu_na"])
            liczbaTestowWoj.push(wojewodzkie[i]["liczba_wykonanych_testow"])
            index.push(i)
            sum += Number(wojewodzkie[i]["liczba_przypadkow"])
            if (j > 5) {
                sredniaLiczbaPrzypadkowWoj.push(sum / 7)
                stanRekorduSredniaWoj.push(wojewodzkie[i]["stan_rekordu_na"])
                sum -= Number(wojewodzkie[index[0]]["liczba_przypadkow"])
                index.shift()
            }
            j++
        }
    }
    yTitle = "Liczba przypadków"
    plotTitle = "Wykres zakażeń Covid-19" + " dla województwa " + wojewodztwoName + "go"
    let change = 1 - (liczbaPrzypadkowWoj[Number(liczbaPrzypadkowWoj.length) - 1] / liczbaPrzypadkowWoj[Number(liczbaPrzypadkowWoj.length) - 2])
    if (change > 0) {
        document.getElementById("changeWoj").innerText = "+" + change
    } else {
        document.getElementById("changeWoj").innerText = change
    }
    document.getElementById("dateWoj").innerText = stan_rekordu_naWoj[Number(stan_rekordu_naWoj.length) - 1]
    document.getElementById("casesWoj").innerText = liczbaPrzypadkowWoj[Number(liczbaPrzypadkowWoj.length) - 1]
    document.getElementById("testsWoj").innerText = (liczbaTestowWoj[Number(liczbaTestowWoj.length) - 1])
    plot("wojewodzkie")
}

function powiat() {
    let powiatName = powiatInput.value
    liczbaPrzypadkowPow = []
    stan_rekordu_naPow = []
    sredniaLiczbaPrzypadkowPow = []
    stan_rekordu_naPow = []
    let sum = 0
    let j = 0
    let index = []
    let isCorrect = false
    for (i in powiatowe) {
        if (powiatowe[i]["powiat_miasto"] === powiatName) {
            isCorrect = true
            liczbaPrzypadkowPow.push(powiatowe[i]["liczba_przypadkow"])
            stan_rekordu_naPow.push(powiatowe[i]["stan_rekordu_na"])
            liczbaTestowPow.push(powiatowe[i]["liczba_wykonanych_testow"])
            index.push(i)
            sum += Number(powiatowe[i]["liczba_przypadkow"])
            if (j > 5) {
                sredniaLiczbaPrzypadkowPow.push(sum / 7)
                stanRekorduSredniaPow.push(powiatowe[i]["stan_rekordu_na"])
                sum -= Number(powiatowe[index[0]]["liczba_przypadkow"])
                index.shift()
            }
            j++
        }
    }
    if (isCorrect === true) {
        if (powiatName[0] === powiatName[0].toLowerCase()) {
            plotTitle = "Wykres zakażeń Covid-19" + " dla powiatu " + powiatName + "go"
        } else {
            plotTitle = "Wykres zakażeń Covid-19" + " dla miasta " + powiatName
        }
    } else {
        plotTitle = "Wykres zakażeń Covid-19"
    }
    yTitle = "Liczba przypadków"
    let change
    if (liczbaPrzypadkowPow[Number(liczbaPrzypadkowPow.length) - 2] !== 0 && liczbaPrzypadkowPow[Number(liczbaPrzypadkowPow.length) - 1]) {
        change =  1 - (liczbaPrzypadkowPow[Number(liczbaPrzypadkowPow.length) - 1] / liczbaPrzypadkowPow[Number(liczbaPrzypadkowPow.length) - 2])
    } else if (liczbaPrzypadkowPow[Number(liczbaPrzypadkowPow.length) - 1] === 0){
        change = liczbaPrzypadkowPow[Number(liczbaPrzypadkowPow.length) - 1] * (-1)
    } else {
        change = liczbaPrzypadkowPow[Number(liczbaPrzypadkowPow.length) - 2]
    }
    if (change === 0) {
        document.getElementById("changePow").innerText = 0 + "%"
    } else if (change > 0) {
        document.getElementById("changePow").innerText = "+" + change + "%"
    } else {
        document.getElementById("changePow").innerText = change + "%"
    }
    document.getElementById("datePow").innerText = stan_rekordu_naPow[Number(stan_rekordu_naPow.length) - 1]
    document.getElementById("casesPow").innerText = liczbaPrzypadkowPow[Number(liczbaPrzypadkowPow.length) - 1]
    document.getElementById("testsPow").innerText = (liczbaTestowPow[Number(liczbaTestowPow.length) - 1])
    plot("powiatowe")
}

function plot(input) {
    if (input === "ogolne") {
        let trace = {
            x: stan_rekordu_na,
            y: liczbaPrzypadkow,
            mode: "lines",
            name: "liczba dziennych zakażeń"
        }
        let trace2 = {
            x: stanRekorduSrednia,
            y: sredniaLiczbaPrzypadkow,
            mode: "lines",
            name: "średnia 7 dniowa"
        }
        let layout = {
            title: plotTitle,
            xaxis: {
                title: "data",
                tickmode: "auto",
                tickvals: stan_rekordu_na,
                tickformat: "%d/%m"
            }, yaxis: {
                title: yTitle
            }, paper_bgcolor: "#f5f5f5",
            plot_bgcolor: "f5f5f5"
        }
        let plotData = [trace, trace2]
        Plotly.newPlot("plot", plotData, layout)
    } else if (input === "wojewodzkie") {
        let trace = {
            x: stan_rekordu_naWoj,
            y: liczbaPrzypadkowWoj,
            mode: "lines",
            name: "liczba dziennych zakażeń"
        }
        let trace2 = {
            x: stanRekorduSredniaWoj,
            y: sredniaLiczbaPrzypadkowWoj,
            mode: "lines",
            name: "średnia 7 dniowa"
        }
        let layout = {
            title: plotTitle,
            xaxis: {
                title: "data",
                tickmode: "auto",
                tickvals: stan_rekordu_naWoj,
                tickformat: "%d/%m"
            }, yaxis: {
                title: yTitle
            }, paper_bgcolor: "#f5f5f5",
            plot_bgcolor: "f5f5f5"
        }
        let plotData = [trace, trace2]
        Plotly.newPlot("plotWoj", plotData, layout)
    } else if (input === "powiatowe") {
        let trace = {
            x: stan_rekordu_naPow,
            y: liczbaPrzypadkowPow,
            mode: "lines",
            name: "liczba dziennych zakażeń"
        }
        let trace2 = {
            x: stanRekorduSredniaPow,
            y: sredniaLiczbaPrzypadkowPow,
            mode: "lines",
            name: "średnia 7 dniowa"
        }
        let layout = {
            title: plotTitle,
            xaxis: {
                title: "data",
                tickmode: "auto",
                tickvals: stan_rekordu_naPow,
                tickformat: "%d/%m"
            }, yaxis: {
                title: yTitle
            }, paper_bgcolor: "#f5f5f5",
            plot_bgcolor: "f5f5f5"
        }
        let plotData = [trace, trace2]
        Plotly.newPlot("plotPow", plotData, layout)
    }
}