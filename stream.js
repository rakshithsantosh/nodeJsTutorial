const fs = require('fs')

const rs = fs.createReadStream('./files/lorem.txt',{encoding:'utf8'})
const ws = fs.createWriteStream('./files/new-lorem.txt')

rs.on('data',(datachunk)=>{
    ws.write(datachunk)
})

//we can use pipe to do the same 
//rs.pipe(ws)