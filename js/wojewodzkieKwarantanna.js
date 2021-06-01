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
    csvData = Plotly.d3.csv("https://raw.githubusercontent.com/piotrek124-1/zakazenia-Covid19/main/plotData/wojewodztwa_kompletne.csv\n", function (error, data) {
        plotCsvData = data
        csv = true
    })
}
var osobyNaKwarantannie = [], stan_rekordu_na = [], wojewodztwoName

function plot() {
    function activeWojewodztwo(wojewodztwo) {
        osobyNaKwarantannie = []
        stan_rekordu_na = []
        for (i in plotCsvData) {
            if (plotCsvData[i]["wojewodztwo"] === wojewodztwo) {
                osobyNaKwarantannie.push(plotCsvData[i]["liczba_osob_objetych_kwarantanna"])
                stan_rekordu_na.push(plotCsvData[i]["stan_rekordu_na"])
            }
        }
        wojewodztwoName = wojewodztwo
    }

    activeWojewodztwo(document.getElementById("wojewodztwoSelect").value)
    var trace = {
        x: stan_rekordu_na,
        y: osobyNaKwarantannie,
        mode: "lines",
        name: wojewodztwoName
    }
    activeWojewodztwo(document.getElementById("wojewodztwoSelect2").value)
    var trace2 = {
        x: stan_rekordu_na,
        y: osobyNaKwarantannie,
        mode: "lines",
        name: wojewodztwoName
    }
    activeWojewodztwo(document.getElementById("wojewodztwoSelect3").value)
    var trace3 = {
        x: stan_rekordu_na,
        y: osobyNaKwarantannie,
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
        title: "Wykres liczby osób objętych kwarantanną",
        xaxis: {
            title: "data",
            tickvals: tick,
            tickformat: "%d/%m",
            rangeslider: {range: [stan_rekordu_na[0], stan_rekordu_na[stan_rekordu_na.lenght - 1]], bordercolor: "lightgrey", borderwidth: 1}
        }, yaxis: {
            title: "Liczba osób objętych kwarantanną"
        }, updatemenus: [{
            buttons: [{
                args: ["type", "scatter"],
                label: "liniowy",
                method: "restyle",
            },
                {
                    args: ["type", "bar"],
                    label: "słupkowy",
                    method: "restyle"
                }], x: 1, y: 1.25, yanchor: "top"
        }, {
            buttons: [{
                args: ["fill", "none"],
                label: "wypełnienie",
                method: "restyle",
                args2: ["fill", "tozeroy"]
            }], x: 0.94, y: 1.25, yanchor: "top", type: "buttons"
        }]
    }
    var plotData = [trace, trace2, trace3]
    Plotly.newPlot("plot", plotData, layout)
}
