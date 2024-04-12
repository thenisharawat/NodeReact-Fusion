const express = require("express");
const cors=require("cors")
const app = express();
require("./db/config");
const Person=require('./db/person');
const Product=require('./db/product')
app.use(express.json());
app.use(cors())
app.post("/register",async (req,resp)=>{
  let user=new Person(req.body)
  let result=await user.save()
  resp.send(result)
 
})

app.post("/login",async (req,resp)=>{
  let user=await Person.findOne(req.body).select("-password")
 
  if(req.body.password && req.body.email)
  {
    if(user)
    {
      resp.send(user)
    }
    else
    {
      resp.send({result:"No user Found"})
    }
  }
  else
  {
    resp.send({result:"No user Found"})
  }
})

app.post("/add-product",async (req,resp)=>{
  let product=new Product(req.body)
  let result=await product.save()
  resp.send(result)
})

app.get("/product",async (req,resp)=>{
  let products=await Product.find()
  if(products.length>0)
  {
    resp.send(products)
  }
  else
  {
    resp.send({result:"No Products Found"})
  }
})
app.delete("/product/:id",async (req,resp)=>{
  const result=await Product.deleteOne({_id:req.params.id})
  resp.send(result)
})
app.get("/product/:id",async (req,resp)=>{
  let result=await Product.findOne({_id:req.params.id})
  if(result)
  {
    resp.send(result)
  }
  else
  {
    resp.send({result:"No record found"})
  }
})
app.put("/product/:id",async (req,resp)=>{
  let result=await Product.updateOne({_id:req.params.id},{$set:req.body})
  resp.send(result)
})
app.get("/search/:key",async (req,resp)=>{
  let result=await Product.find({
    "$or":[
      {name:{$regex:req.params.key}},
      {price:{$regex:req.params.key}},
      {category:{$regex:req.params.key}},
      {company:{$regex:req.params.key}}
    ]
  })
  resp.send(result)
})
app.listen(5105,()=>{
  console.log('listening to port 5105..')
});
