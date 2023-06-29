const express=require('express');
const app=express();
app.use(express.json());
//get metho
app.get('/',(req,res)=>
{
   res.send("<h1>Sanjay Hello</h1>");
});

// api
const product=[
{
    id:1,
    name:"Sanjay"
},
{
    id:2,
    name:"Anu"
},
{
    id:3,
    name:"Fruity"
}
]

// port
app.listen(3000,()=>
{
    console.log("Server is Running");
});

// accessinfg api
app.get('/product',(req,res)=>
{
   res.json(product);
});


// accessing one element
app.get('/product/:id',(req,res)=>
{
  const newData=product.filter(item=> item.id.toString()=== req.params.id);
  return res.send(newData);
});

// post method

app.post('/addproducts',(req,res)=>
{
  const {id,name}= req.body;
  console.log(id,name);
  return res.send("Data received")
});