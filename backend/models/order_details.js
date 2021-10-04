const mongoose=require('mongoose')

const orderDetail=new mongoose.Schema({
   firstname:{
        type:String,
        required:true
    },
    Lastname:{
        type:String,
       required:true
    },   
    phone:{
        type:String,
      required:true
    },
    email:{
        type:String,
      required:true
    },
    address:{
        type:String,
      required:true
    },
    City:{
        type:String,
        required:true
    },
    State:{
        type:String,
        required:true
    },
    zipcode:{
        type:String,
        required:true
    },
    Total:{
        type:Number
    },
    NumOfItems:{
        type:Number
    },
    date:{
        type:Date,
        default:Date.now
    }
   

})
module.exports=mongoose.model('Order',orderDetail)