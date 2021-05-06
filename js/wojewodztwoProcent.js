var data = ["Cały kraj","dolnośląskie","kujawsko-pomorskie","lubelskie","lubuskie","łódzkie","małopolskie","mazowieckie","opolskie","podkarpackie","podlaskie","pomorskie","śląskie","świętokrzyskie","warmińsko-mazurskie","wielkopolskie","zachodniopomorskie"]
var newPowiat = document.getElementById("wojewodztwoList")
for (i in data) {
    newPowiat = document.getElementById("wojewodztwoList").appendChild(document.createElement("option"))
    newPowiat.value = data[i]
}
newPowiat = document.getElementById("wojewodztwoSelect")
newPowiat.addEventListener("input", plot)
document.getElementById("wojewodztwoSelect2").addEventListener("input", plot)
document.getElementById("wojewodztwoSelect3").addEventListener("input", plot)
var csv = false
var plotCsvData = []
if (csv === false) {
    csvData = Plotly.d3.csv("https://raw.githubusercontent.com/piotrek124-1/zakazenia-Covid19/main/plotData/wojewodztwa_kompletne.csv", function (error, data) {
        plotCsvData = data
        csv = true
    })
}
var procent = [], stan_rekordu_na = [], wojewodztwoName

function plot() {
    function activeWojewodztwo(wojewodztwo) {
        procent = []
        stan_rekordu_na = []
        for (i in plotCsvData) {
            if (plotCsvData[i]["wojewodztwo"] === wojewodztwo) {
                procent.push(plotCsvData[i]["liczba_testow_z_wynikiem_pozytywnym"] / plotCsvData[i]["liczba_wykonanych_testow"] * 100)
                stan_rekordu_na.push(plotCsvData[i]["stan_rekordu_na"])
            }
        }
        wojewodztwoName = wojewodztwo
    }

    activeWojewodztwo(document.getElementById("wojewodztwoSelect").value)
    var trace = {
        x: stan_rekordu_na,
        y: procent,
        mode: "lines",
        name: wojewodztwoName
    }
    activeWojewodztwo(document.getElementById("wojewodztwoSelect2").value)
    var trace2 = {
        x: stan_rekordu_na,
        y: procent,
        mode: "lines",
        name: wojewodztwoName
    }
    activeWojewodztwo(document.getElementById("wojewodztwoSelect3").value)
    var trace3 = {
        x: stan_rekordu_na,
        y: procent,
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
        title: "Wykres procentowy pozytywnych testów na Covid-19",
        xaxis: {
            title: "data",
            tickvals: tick,
            tickformat: "%d/%m"
        }, yaxis: {
            title: "% pozytywnych wyników"
        }
    }
    var plotData = [trace, trace2, trace3]
    Plotly.newPlot("plot", plotData, layout)
}
