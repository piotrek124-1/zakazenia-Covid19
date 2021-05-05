var liczbaPrzypadkow = [], stan_rekordu_na = [], yTitle = "liczba_przypadkow"
csvData = Plotly.d3.csv("https://raw.githubusercontent.com/piotrek124-1/zakazenia-Covid19/main/plotData/ogolnopolskie.csv", function (error, data) {
    plotCsvData = data
    for (i in plotCsvData) {
        liczbaPrzypadkow.push(plotCsvData[i]["liczba_przypadkow"])
        stan_rekordu_na.push(plotCsvData[i]["stan_rekordu_na"])
    }
    plot()
})
function wykres() {
    document.getElementById("wykres").className = "btn-info active"
    document.getElementById("srednia").className = "btn-info"
    document.getElementById("procent").className = "btn-info"
    liczbaPrzypadkow = []
    stan_rekordu_na = []
    for (i in plotCsvData) {
        liczbaPrzypadkow.push(plotCsvData[i]["liczba_przypadkow"])
        stan_rekordu_na.push(plotCsvData[i]["stan_rekordu_na"])
    }
    plot()
}
function srednia() {
    document.getElementById("wykres").className = "btn-info"
    document.getElementById("srednia").className = "btn-info active"
    document.getElementById("procent").className = "btn-info"
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
    yTitle = "Liczba przypadków (średnia 7 dniowa)"
    plot()
}
function procent() {
    document.getElementById("wykres").className = "btn-info"
    document.getElementById("srednia").className = "btn-info"
    document.getElementById("procent").className = "btn-info active"
    liczbaPrzypadkow = []
    stan_rekordu_na = []
    for (i in plotCsvData) {
        liczbaPrzypadkow.push(plotCsvData[i]["liczba_testow_z_wynikiem_pozytywnym"] / plotCsvData[i]["liczba_wykonanych_testow"] * 100)
        stan_rekordu_na.push(plotCsvData[i]["stan_rekordu_na"])
    }
    yTitle = "% pozytywnych wyników"
    plot()
}
function plot() {
    document.getElementById("wykres").addEventListener("click", wykres)
    document.getElementById("srednia").addEventListener("click", srednia)
    document.getElementById("procent").addEventListener("click", procent)

    var trace = {
        x: stan_rekordu_na,
        y: liczbaPrzypadkow,
        mode: "lines",
        name: "wykres"
    }
    var layout = {
        title: "Wykres zakażeń Covid-19",
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