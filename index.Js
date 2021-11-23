const fs = require('fs')


//Blocking code execution
const readTxt = fs.readFileSync('C:\Users\RAGHURAM.G\OneDrive\Documents\projects\Node--JS/Running Js Outside The Browser/Hello.Txt', 'utf-8')
console.log(readTxt)

const writeTxt = `${readTxt}.\nCreated on ${Date.now()}`
fs.writeFileSync('C:\Users\RAGHURAM.G\OneDrive\Documents\projects\Node--JS', writeTxt)
console.log('writting is done')

//Non Blocking code Execution


const readTxt1 = fs.readFile('C:\Users\RAGHURAM.G\OneDrive\Documents\projects\Node--JS/Running Js Outside The Browser/Hello.Txt', 'utf-8' (err, data) => {
     console.log(data)
})