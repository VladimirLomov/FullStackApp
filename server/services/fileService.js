const fs = require('fs')
const File = require('../models/File')
const config = require('config')

class FileServices {

createDir(file) {
    
    const filePath =`${config.get('filePath')}/${file.user}/${file.path}`
    return new Promise(((resolve, reject)=>{
        try{
            if(!fs.existsSync(filePath)){ // если файл по такому пути существует то создавать папку
                fs.mkdirSync(filePath)
                console.log(file)
                return resolve({message:'File was created'})
            } else { //если файл по такому пути уже существует
                return reject({message:"File already exist"})

            }

        }catch(e) {
            return reject({message:'File error'})
        }
   
    }))
    
}

deleteFile(file) {
    const path = this.getPath(file)
    if (file.type ==='dir') {
        fs.rmdirSync(path)
       // fs.rmdirSync( `${config.get('filePath')}/${file.user}/${file.path}`)
    } else {
        fs.unlinkSync(path)
       // fs.unlinkSync( `${config.get('filePath')}/${file.user}/${file.path}`)
    }
    
}

getPath(file) {
    return `${config.get('filePath')}/${file.user}/${file.path}`
}

}

module.exports = new FileServices()

// file - объект той модели которую будем добавлять в бд