const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname,'files','starter.txt'),(err,data)=>{
    if (err) throw err;
    console.log(data.toString()) //used tostring so we dont get buffer data or pass utf8 in the readfile as parameter
})

//exit on uncaught errors
process.on('uncaughtException',err => {
    console.error(`there was an uncaught error:${err}`)
    process.exit(1)
})

//write to a file
fs.writeFile(path.join(__dirname,'files','lorem.txt'),'i am writing something to the file',(err)=>{
    if (err) throw err;
    console.log('write complete') //used tostring so we dont get buffer data or pass utf8 in the readfile as parameter
})

//appendfile will create a file if it does not exits and append the text to the existing file

//to aviod callback hell

//const fsPromises = require('fs').promises;

/*const fileops = async () => {
    try {
        const data = await fsPromises.readfile(path,utf8)
    }
    catch(err){
        console.error(err)
    } 
}*/