import {model, models, Schema} from 'mongoose'

const OrderSchema = new Schema({
    name : {type : String, required : true},
    userId : {type : String, required : true},
    email : {type : String},
    city : {type : String},
    postalCode : {type : String},
    streetAddress : {type : String},
    country : {type : String},
    paid : {type : Boolean, default : false}
}, {timestamps : true})

const Order = models?.Order || model('Order', OrderSchema)

export default Order;