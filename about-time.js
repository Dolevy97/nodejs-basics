import ms from 'ms'
import fs from 'fs'

aboutTime()

function aboutTime() {
    fs.readFile('data/timestamps.txt', 'utf-8', (err, data) => {
        if (err) return console.log('Cannot read file', err)
        let times = data.split('\r\n')
        const currentTimestamp = Date.now()
        const relTimes = times.map(time => {
            let timeStamp = time * 1000
            const diffInTime = currentTimestamp - timeStamp
            return `${ms(diffInTime, { long: true })} ago.`
        })
        console.log(relTimes)
    })
}