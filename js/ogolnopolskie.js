// var csv = false
// if (csv === false) {
//     csvData = Plotly.d3.csv(src="plotData//ogolnopolskie.csv", function (error, data) {
//         plotCsvData = data
//         csv = true
//     })
// }
// var plotCsvData = []
// var liczbaPrzypadkow = [], stan_rekordu_na = []
// for (i in plotCsvData) {
//     liczbaPrzypadkow.push(plotCsvData[i]["liczba_przypadkow"])
//     stan_rekordu_na.push(plotCsvData[i]["stan_rekordu_na"])
// }
//
// var trace = {
//     x: stan_rekordu_na,
//     y: liczbaPrzypadkow,
//     mode: "lines",
//     name: "wykres"
// }
// var layout = {
//     title: "Wykres zakażeń Covid-19",
//     xaxis: {
//         title: "data",
//         tickvals: stan_rekordu_na,
//         tickformat: "%d/%m"
//     }, yaxis: {
//         title: "Liczba przypadków"
//     }
// }
// var plotData = [trace]
// Plotly.newPlot("plot", plotData, layout)
