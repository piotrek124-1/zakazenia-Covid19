files <- list.files("dataCSV")
i <- 0
frame = data.frame()

for (i in files) {
  csv <- gsub(" ", "", paste("dataCSV\\", i))
  data <- read.csv(csv, sep = ";", encoding = "Windows-1250")
  df <- data.frame(data)
  frame <- plyr::rbind.fill(frame, df)
}

fr <- list(liczba_przypadkow = frame$liczba_przypadkow, stan_rekordu_na = frame$stan_rekordu_na, powiat_miasto = frame$powiat_miasto, liczba_wykonanych_testow = frame$liczba_wykonanych_testow, liczba_osob_objetych_kwarantanna = frame$liczba_osob_objetych_kwarantanna, liczba_testow_z_wynikiem_pozytywnym = frame$liczba_testow_z_wynikiem_pozytywnym, liczba_zlecen_poz = frame$liczba_zlecen_poz, liczba_na_10_tys_mieszkancow = frame$liczba_na_10_tys_mieszkancow)
f <- list(liczba_przypadkow = frame$liczba_przypadkow, stan_rekordu_na = frame$stan_rekordu_na, powiat_miasto = frame$powiat_miasto)
write.csv(fr, file = "plotData\\powiaty_kompletne.csv", fileEncoding = "UTF-8")
write.csv(f, file = "plotData\\powiaty_zakazenia.csv", fileEncoding = "UTF-8")

filesWoj <- list.files("dataWoj")
i <- 0
frameWoj = data.frame()
stan_rekordu_na <- as.Date("2020-12-22")

for (i in filesWoj) {
  if (i < "20201224150439_rap_rcb_woj_eksport.csv") {
    csv <- gsub(" ", "", paste("dataWoj\\", i))
    data <- read.csv(csv, sep = ";", encoding = "UTF-8")
    df <- data.frame(data)
    frameWoj <- plyr::rbind.fill(frameWoj, df)
  } else if (i <= "20210127054534_rap_rcb_woj_eksport.csv" && i > "20201223060000_rap_rcb_woj_eksport.csv") {
    stan_rekordu_na <- as.Date(stan_rekordu_na)
    stan_rekordu_na <- stan_rekordu_na + 1
    stan_rekordu_na <- format(stan_rekordu_na, "%Y-%m-%d")
    csv <- gsub(" ", "", paste("dataWoj\\", i))
    data <- read.csv(csv, sep = ";", encoding = "Windows-1250")
    df <- data.frame(data)
    df$stan_rekordu_na <- stan_rekordu_na
    frameWoj <- plyr::rbind.fill(frameWoj, df)
  } else {
    csv <- gsub(" ", "", paste("dataWoj\\", i))
    data <- read.csv(csv, sep = ";", encoding = "Windows-1250")
    df <- data.frame(data)
    frameWoj <- plyr::rbind.fill(frameWoj, df)
  }
}

f <- list(liczba_przypadkow = frameWoj$liczba_przypadkow, stan_rekordu_na = frameWoj$stan_rekordu_na, wojewodztwo = frameWoj$wojewodztwo)
write.csv(frameWoj, file = "plotData\\wojewodztwa_kompletne.csv", fileEncoding = "UTF-8")
write.csv(f, file = "plotData\\wojewodztwa_zakazenia.csv", fileEncoding = "UTF-8")
i <- 0
frame2 <- read.csv("plotData//wojewodztwa_kompletne.csv", fileEncoding = "UTF-8")
frameSum <- filter(frame2, frame2$wojewodztwo == "Cały kraj")
write.csv(frameSum, file = "plotData\\ogolnopolskie.csv", fileEncoding = "UTF-8")
