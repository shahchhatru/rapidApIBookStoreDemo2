import mongoose, {model, Schema, models} from 'mongoose'

const BookSchema = new Schema({
    title : {type : String, required : true},
    description : {type : String, required : true},
    price : {type : Number, required : true},
    author : {type : String, required : true},
    isbn : {type : Number,required : true, unique : true},
    availability : {type : Boolean, required : true, default : true}

}, {timestamps : true})


const Book = models?.Book || model('Book', BookSchema)

export default Book