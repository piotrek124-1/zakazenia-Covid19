var liczbaPrzypadkow = [], stan_rekordu_na = [], yTitle = "liczba_przypadkow", plotTitle = "Wykres zakażeń Covid-19"
csvData = Plotly.d3.csv("https://raw.githubusercontent.com/piotrek124-1/zakazenia-Covid19/main/plotData/ogolnopolskie.csv", function (error, data) {
    plotCsvData = data
    for (i in plotCsvData) {
        liczbaPrzypadkow.push(plotCsvData[i]["liczba_przypadkow"])
        stan_rekordu_na.push(plotCsvData[i]["stan_rekordu_na"])
    }
    plot()
})
function wykres() {
    document.getElementById("wykres").className = "btn active"
    document.getElementById("srednia").className = "btn"
    document.getElementById("procent").className = "btn"
    document.getElementById("kwarantanna").className = "btn"
    liczbaPrzypadkow = []
    stan_rekordu_na = []
    for (i in plotCsvData) {
        liczbaPrzypadkow.push(plotCsvData[i]["liczba_przypadkow"])
        stan_rekordu_na.push(plotCsvData[i]["stan_rekordu_na"])
    }
    yTitle = "Liczba przypadków"
    plotTitle = "Wykres zakażeń Covid-19"
    plot()
}
function srednia() {
    document.getElementById("wykres").className = "btn"
    document.getElementById("srednia").className = "btn active"
    document.getElementById("procent").className = "btn"
    document.getElementById("kwarantanna").className = "btn"
    liczbaPrzypadkow = []
    stan_rekordu_na = []
    var sum = 0
    var j = 0
    var index = []
    for (i in plotCsvData) {
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
    plotTitle = "Wykres zakażeń Covid-19 (średnia 7 dniowa)"
    yTitle = "Liczba przypadków (średnia 7 dniowa)"
    plot()
}
function procent() {
    document.getElementById("wykres").className = "btn"
    document.getElementById("srednia").className = "btn"
    document.getElementById("procent").className = "btn active"
    document.getElementById("kwarantanna").className = "btn"
    liczbaPrzypadkow = []
    stan_rekordu_na = []
    for (i in plotCsvData) {
        liczbaPrzypadkow.push(plotCsvData[i]["liczba_testow_z_wynikiem_pozytywnym"] / plotCsvData[i]["liczba_wykonanych_testow"] * 100)
        stan_rekordu_na.push(plotCsvData[i]["stan_rekordu_na"])
    }
    plotTitle = "Wykres procentowy pozytywnych testów na Covid-19"
    yTitle = "% pozytywnych wyników"
    plot()
}
function kwarantanna() {
    document.getElementById("wykres").className = "btn active"
    document.getElementById("srednia").className = "btn"
    document.getElementById("procent").className = "btn"
    document.getElementById("kwarantanna").className = "btn"
    liczbaPrzypadkow = []
    stan_rekordu_na = []
    for (i in plotCsvData) {
        liczbaPrzypadkow.push(plotCsvData[i]["liczba_osob_objetych_kwarantanna"])
        stan_rekordu_na.push(plotCsvData[i]["stan_rekordu_na"])
    }
    plotTitle = "Wykres liczby osób objętych kwarantanną"
    yTitle = "Liczba osób objętych kwarantanną"
    plot()
}
function plot() {
    document.getElementById("wykres").addEventListener("click", wykres)
    document.getElementById("srednia").addEventListener("click", srednia)
    document.getElementById("procent").addEventListener("click", procent)
    document.getElementById("kwarantanna").addEventListener("click", kwarantanna)

    var trace = {
        x: stan_rekordu_na,
        y: liczbaPrzypadkow,
        mode: "lines",
        name: "wykres"
    }
    var layout = {
        title: plotTitle,
        xaxis: {
            title: "data",
            tickvals: stan_rekordu_na,
            tickformat: "%d/%m"
        }, yaxis: {
            title: yTitle
        }
    }
    var plotData = [trace]
    Plotly.newPlot("plot", plotData, layout)
}
plot()