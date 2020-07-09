package main

import (
  "fmt"
  "encoding/json"
  "net/http"
  "io/ioutil"
  "strings"
)

type Global struct {
  NewConfirmed int
  TotalConfirmed int 
  NewDeaths int
  TotalDeaths int
  NewRecovered int
  TotalRecovered int
}

type Country struct {
  Country string
  CountryCode string
  Slug string
  NewConfirmed int
  TotalConfirmed int
  NewDeaths int
  TotalDeaths int
  NewRecovered int
  TotalRecovered int
  Date string
}


func main() {
  url := "https://api.covid19api.com/summary"
  method := "GET"

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)

  if err != nil {
    fmt.Println(err)
  }
  res, err := client.Do(req)
  defer res.Body.Close()
  body, err := ioutil.ReadAll(res.Body)

  
  globalJSON := string(body)
  parseado := globalJSON[:strings.IndexByte(globalJSON, '}')+1]
  parseado = parseado[10:]
  var global Global
  json.Unmarshal([]byte(parseado), &global)
  fmt.Printf("Ultimas estadísticas globales:\nNew Confirmed: %d\nTotal Confirmed: %d\nNew Deaths: %d\nTotalDeaths: %d\nNewRecovered: %d\nTotalRecovered: %d\n",
  global.NewConfirmed,global.TotalConfirmed,global.NewDeaths,global.TotalDeaths,global.NewRecovered,global.TotalRecovered)
}

