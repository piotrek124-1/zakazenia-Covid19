var data = ["Cały kraj","dolnośląskie","kujawsko-pomorskie","lubelskie","lubuskie","łódzkie","małopolskie","mazowieckie","opolskie","podkarpackie","podlaskie","pomorskie","śląskie","świętokrzyskie","warmińsko-mazurskie","wielkopolskie","zachodniopomorskie"]
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
        var sum = 0
        var j = 0
        var index = []
        for (i in plotCsvData) {
            if (plotCsvData[i]["wojewodztwo"] === wojewodztwo) {
                index.push(i)
                sum += Number(plotCsvData[i]["liczba_przypadkow"])
                if (j > 5) {
                    liczbaPrzypadkow.push(sum / 7)
                    stan_rekordu_na.push(plotCsvData[i]["stan_rekordu_na"])
                    sum -= Number(plotCsvData[index[0]]["liczba_przypadkow"])
                    index.shift()
                }
                j++
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
        title: "Wykres zakażeń Covid-19 (średnia 7 dniowa)",
        xaxis: {
            title: "data",
            tickvals: tick,
            tickformat: "%d/%m"
        }, yaxis: {
            title: "Liczba przypadków (średnia 7 dniowa)"
        }
    }
    var plotData = [trace, trace2, trace3]
    Plotly.newPlot("plot", plotData, layout)
}
