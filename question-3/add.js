// Question 3 (part 2): Create Log files
// Creates a Logs directory, moves into it and writes 10 log files.

const fs = require('fs')
const path = require('path')

const logsDir = path.join(__dirname, 'Logs')

// create the Logs directory if it does not exist
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir)
}

// change the current process to the Logs directory
process.chdir(logsDir)

// create 10 log files and write some text into each
for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`
    const filePath = path.join(process.cwd(), fileName)

    fs.writeFileSync(filePath, `This is log file number ${i}\n`)
    console.log(fileName)
}
