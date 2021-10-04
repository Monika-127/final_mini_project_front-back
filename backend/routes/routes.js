//const { request, response } = require('express')
const { response, request } = require('express')
const express=require('express')
const router=express.Router()
const signUpTemplateCopy=require('../models/signup_model')
const sellData=require('../models/sell_model')
const bcrypt=require('bcrypt');

router.post('/signup',async (request,response)=>{
  const saltPass=await bcrypt.genSalt(10)
  const securePass=await bcrypt.hash(request.body.password,saltPass)
    let signedUpUser=new signUpTemplateCopy({
        username:request.body.username,
        password:securePass
    })
   signedUpUser.save()
    .then(data=>{
        response.send(data)
    })
    .catch(error=>{
        response.json(error)
    })
    //response.json(signedUpUser)

});
router.post('/signin',(request,response)=>{
    var username=request.body.username;
    var password=request.body.password;
    signUpTemplateCopy.findOne({username: username}).then(
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
    router.post('/sell',(request,response)=>{
        let sellUser=new sellData({
            category:request.body.category,
            Title:request.body.Title,
            Description:request.body.Description,
            price:request.body.price,
            contact:request.body.contact
        })
      sellUser.save()
    .then(data=>{
        response.send(data)
    })
    .catch(error=>{
        response.json(error)
    })
  //  response.send(sellUser);
    })

module.exports=router