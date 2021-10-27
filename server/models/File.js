const {model, Schema, ObjectId} = require("mongoose")

const File = new Schema({
    name:{type: String, required:true},
    type:{type: String, required:true},
    accessLink:{type:String}, //ссылка доступа
    size:{type: Number, default:0},
    path:{type:String, default:''}, //путь к файлу
    date:{type: Date, default: Date.now()},
    user:{type:ObjectId, ref:'User'},
    parent:{type:ObjectId, ref:'File'},
    childs:[{type:ObjectId, ref:'File'}],
    

})

module.exports = model('File', File)

//parent ссылается на папку в которой он находится
//childs ссылается на все файлы которые лежат внутри папки