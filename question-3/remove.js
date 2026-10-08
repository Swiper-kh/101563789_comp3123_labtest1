// Question 3 (part 1): Remove Log files
// Deletes every file inside the Logs directory, then removes the directory.

const fs = require('fs')
const path = require('path')

const logsDir = path.join(__dirname, 'Logs')

if (fs.existsSync(logsDir)) {
    const files = fs.readdirSync(logsDir)

    files.forEach((file) => {
        console.log(`delete files...${file}`)
        fs.unlinkSync(path.join(logsDir, file))
    })

    fs.rmdirSync(logsDir)
} else {
    console.log('Logs directory does not exist')
}
