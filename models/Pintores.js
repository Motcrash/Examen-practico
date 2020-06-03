const mongoose = require('mongoose');
//Se crea un Schema (la base d e datos)

let Schema = mongoose.Schema;

//Creamos la coleccion 
let PintoresSchema = new Schema({
    nombre:{
        type:String,
        required:[true, 'Es necesario el nombre']
    },
    corriente:{
            type:String,
            required:[true, 'Es necesaria su corriente artistica']
    },
    nacionalidad:{
        type: String,
    },
    imagen:{
        type: String,
    },
    biografia:{
        type:String
    }
});

module.exports = mongoose.model('Pintores', PintoresSchema);