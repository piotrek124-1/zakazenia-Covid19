let data = ["Cały kraj","dolnośląskie","kujawsko-pomorskie","lubelskie","lubuskie","łódzkie","małopolskie","mazowieckie","opolskie","podkarpackie","podlaskie","pomorskie","śląskie","świętokrzyskie","warmińsko-mazurskie","wielkopolskie","zachodniopomorskie"]
for (i in data) {
    wojewodztwoList = document.getElementById("wojewodztwoSelect").appendChild(document.createElement("option"))
    wojewodztwoList.innerHTML = data[i]
    wojewodztwoList2 = document.getElementById("wojewodztwoSelect2").appendChild(document.createElement("option"))
    wojewodztwoList2.innerHTML = data[i]
    wojewodztwoList3 = document.getElementById("wojewodztwoSelect3").appendChild(document.createElement("option"))
    wojewodztwoList3.innerHTML = data[i]
}
let newWojewodztwo = document.getElementById("wojewodztwoSelect")
newWojewodztwo.addEventListener("input", plot)
document.getElementById("wojewodztwoSelect2").addEventListener("input", plot)
document.getElementById("wojewodztwoSelect3").addEventListener("input", plot)
var csv = false
var plotCsvData = []
if (csv === false) {
    csvData = Plotly.d3.csv("https://raw.githubusercontent.com/piotrek124-1/zakazenia-Covid19/main/plotData/wojewodztwa_zakazenia.csv", function (error, data) {
        plotCsvData = data
        csv = true
    })
}
var liczbaPrzypadkow = [], stan_rekordu_na = [], wojewodztwoName

function plot() {
    function activeWojewodztwo(wojewodztwo) {
        liczbaPrzypadkow = []
        stan_rekordu_na = []
        for (i in plotCsvData) {
            if (plotCsvData[i]["wojewodztwo"] === wojewodztwo) {
                liczbaPrzypadkow.push(plotCsvData[i]["liczba_przypadkow"])
                stan_rekordu_na.push(plotCsvData[i]["stan_rekordu_na"])
            }
        }
        wojewodztwoName = wojewodztwo
    }

    activeWojewodztwo(document.getElementById("wojewodztwoSelect").value)
    var trace = {
        x: stan_rekordu_na,
        y: liczbaPrzypadkow,
        mode: "lines",
        name: wojewodztwoName
    }
    activeWojewodztwo(document.getElementById("wojewodztwoSelect2").value)
    var trace2 = {
        x: stan_rekordu_na,
        y: liczbaPrzypadkow,
        mode: "lines",
        name: wojewodztwoName
    }
    activeWojewodztwo(document.getElementById("wojewodztwoSelect3").value)
    var trace3 = {
        x: stan_rekordu_na,
        y: liczbaPrzypadkow,
        mode: "lines",
        name: wojewodztwoName
    }
    var tick = trace.x
    if (trace.x.length === 0) {
        if (trace2.x.length === 0) {
            tick = trace3.x
        } else {
            tick = trace2.x
        }
    }
    var layout = {
        title: "Wykres zakażeń Covid-19",
        xaxis: {
            title: "data",
            tickvals: tick,
            tickformat: "%d/%m"
        }, yaxis: {
            title: "Liczba przypadków"
        }
    }
    var plotData = [trace, trace2, trace3]
    Plotly.newPlot("plot", plotData, layout)
}
