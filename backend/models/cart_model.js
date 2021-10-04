const mongoose=require('mongoose')

const cartModel=new mongoose.Schema({
   /*img:
        type:String,
        required:true
    },*/
    email:{
        type:String,
        required:true
    },
    id:{
        type:String
    },
    items:[{
    title:{
        type:String,
       required:true
    },   
    price:{
        type:String,
      required:true
    },
    desc:{
        type:String,
      required:true
    }
   
    }],
   
    date:{
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model('Cart',cartModel)
