import { utilService } from './util.service.js'

downloadCountryFlags()
function downloadCountryFlags() {
    const countries = getCountries()
    downloadFlags(countries)
        .then(() => {
            console.log('Your flags are ready')
        })
}
function getCountries() {
    var countries = []
    let allCountries = utilService.readJsonFile('data/countries.json')
    allCountries = allCountries.toSorted((c1, c2) => (c2.population - c1.population))
    for (var i = 0; i < 5; i++) {
        countries.push(allCountries[i])
    }
    return countries
}
function downloadFlags(countries) {
    const prms = countries.map(country => {
        return utilService.download(
            country.flags.png,
            `flags/${country.name.common}.png`
        )
    })
    return Promise.all(prms)
}