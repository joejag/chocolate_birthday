import React from "react"
import { BARS } from "./bars"
import "./App.css"

// Images: https://pixabay.com/images/search/chocolate%20bar/
// https://www.dreamstime.com/photos-images/cadbury.html

interface BarSearchResult {
  year: number
  bars: string[]
  exact: boolean
}

const toSnakeCase = (string: string) => {
  return string
    .replace(/\W+/g, " ")
    .split(/ |\B(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join("_")
}

function App() {
  const [year, setYear] = React.useState<number | null>(null)

  const showChoc = (year: string) => {
    setYear(+year)
  }

  const findChoc = (year: number): BarSearchResult => {
    if (year in BARS) {
      return { year, bars: BARS[year], exact: true }
    }

    return { year: 1905, bars: BARS[1905], exact: false }
  }

  if (year === null) {
    return (
      <main>
        <h1>What is your birth year chocolate?</h1>
        <label htmlFor="year">Year</label>
        <select id="year" onChange={(e) => showChoc(e.target.value)}>
          {YEARS.map((year) => (
            <option key={year}>{year}</option>
          ))}
        </select>
      </main>
    )
  }

  const searchResults = findChoc(year)

  const fallBackImage = (ev: any) => {
    ev.target.src = "bars/dairy_milk.jpg"
  }

  return (
    <main>
      {searchResults.exact && <h1>In {year} these chocolate bars were launched</h1>}
      {!searchResults.exact && <h1>Close to that year, in {searchResults.year} these chocolate bars were launched</h1>}

      <ul>
        {searchResults.bars.map((bar) => (
          <li key={bar}>
            <img src={`bars/${toSnakeCase(bar)}.jpg`} alt="" onError={fallBackImage} />
            <h2>{bar}</h2>
          </li>
        ))}
      </ul>

      <h3>Check another year</h3>
      <label htmlFor="year">Year</label>
      <select id="year" onChange={(e) => showChoc(e.target.value)}>
        {YEARS.map((year) => (
          <option key={year}>{year}</option>
        ))}
      </select>
    </main>
  )
}

export default App

const THIS_YEAR = new Date().getUTCFullYear()
const YEARS = Array(THIS_YEAR - (THIS_YEAR - (new Date().getUTCFullYear() - 1899)))
  .fill("")
  .map((v, idx) => THIS_YEAR - idx)
