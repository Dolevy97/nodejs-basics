import fs from 'fs'

sumFromFile('data/nums.txt')
    .then(sum => console.log('Sum:', sum))
    .catch(err => console.log('Cannot sum:', err))


function sumFromFile(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) reject(err)
            else {
                let numbers = data.trim().split('\r\n')
                const summedNumbers = numbers.reduce((acc, sum) => acc += parseInt(sum), 0)
                resolve(summedNumbers)
            }
        })
    })
}