//const { request, response } = require('express')
const { response, request } = require('express')
const express=require('express')
const router=express.Router()
const signUpTemplateCopy=require('../models/signup_model')
const sellData=require('../models/sell_model')
const orderData=require('../models/order_details')
const bcrypt=require('bcrypt');
const cartModel=require('../models/cart_model')

router.post('/signup',async (request,response)=>{
  const saltPass=await bcrypt.genSalt(10)
  const securePass=await bcrypt.hash(request.body.password,saltPass)

    let signedUpUser=new signUpTemplateCopy({
        name:request.body.name,
        email:request.body.email,
        password:securePass
    })
   // response.send("hii");
   signedUpUser.save()
    .then(data=>{
        response.send(data)
    })
    .catch(error=>{
        response.json(error)
    })
  //  response.json(signedUpUser)

});
router.post('/signin',(request,response)=>{
    var email=request.body.email;
    var password=request.body.password;
    signUpTemplateCopy.findOne({email: email}).then(
        user=>{
            if(!user) return response.status(400).json({msg: 'user does not exist'});
          //  else 
            //response.status(200).json({msg:"user exist"});
         
          bcrypt.compare(password,user.password).then(
                isMatch=>{
                    if(!isMatch) return response.status(400).json({msg:'invalid credential'});
                    else response.status(200).json({msg:"password is correct"});
                }
            )
        
        }
    )
    });



    


    //router.post('/sell',upload.single('imgfile'),(request,response,next)=>{
       
   router.post('/sell',(request,response)=>{
            
       
        let sellUser=new sellData({
            category:request.body.category,
            Title:request.body.Title,
            Description:request.body.Description,
            price:request.body.price,
            contact:request.body.contact//,
           // imgfile:request.body.imgfile
          

        })
     sellUser.save()
    .then(data=>{
        response.send(data)
    })
    .catch(error=>{
        response.json(error)
    })
  //response.send(sellUser);
   //console.log(sellUser);
    });
    router.post("/order",(request,response)=>{
        let orderstore=new orderData({
            firstname:request.body.firstname,
            Lastname:request.body.Lastname,
            phone:request.body.phone,
            email:request.body.email,
            address:request.body.address,
            City:request.body.City,
            State:request.body.State,
            zipcode:request.body.zipcode,
           Total:request.body.Total,
            NumOfItems:request.body.NumOfItems

        });
        orderstore.save()
    .then(data=>{
        response.send(data)
    })
    .catch(error=>{
        response.json(error)
    })
      
       
    });
    router.get('/getId/:email',(request,response)=>{
        var email=request.params.email;
      
       orderData.findOneAndUpdate({email: email}).then(user=>response.send(user._id));
        });
    router.post('/StoreCart',(request,response)=>{
        let cartDetail=new cartModel({
            //img:request.body.img
            email:request.body.email,
            id:request.body.id,
            items:[{
            title:request.body.title,
            price:request.body.price,
            desc:request.body.desc,
            //id:request.body.id,
            }]
        })
        cartDetail.save()
        .then(data=>{
            response.send(data)
        })
        .catch(error=>{
            response.json(error)
        })
          
    });

    router.post('/remove/:id',(request,response)=>{
        var id=request.params.id;
        cartModel.findOneAndRemove({id:id},function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                console.log("Removed User : ", docs);
            }
        })
    });

    
    router.get('/alluser',(request,response)=>{
        signUpTemplateCopy.find((error,data)=>{
            if (error) {
                return next(error)
            } else {
                response.json(data)
            }
        })
    })
    router.get('/allOrders',(request,response)=>{
        orderData.find((error,data)=>{
            if (error) {
                return next(error)
            } else {
                response.json(data)
            }
        })
    })
    router.get('/allSeller',(request,response)=>{
        sellData.find((error,data)=>{
            if (error) {
                return next(error)
            } else {
                response.json(data)
            }
        })
    })
        router.get('/totalOrders',(request,response)=>{
            orderData.count({}, function( err, count){
               // console.log( "Number of users:", count );
               response.json(count)
            })
        })
    
    
module.exports=router
