const mongoose=require('mongoose')

const SellTemplate=new mongoose.Schema({
    category:{
        type:String,
       required:true
    },   
    Title:{
        type:String,
      required:true
    },
    Description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model('SellTable',SellTemplate)