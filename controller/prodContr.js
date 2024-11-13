
const product=require("../models/prodModel");

exports.createProduct=async(req,res)=>{
    try{
        //fetch data from req body
        const{title,price,description}=req.body;
        //create new product 
        const product=new product({
            title,price,description
        });
//save product into db
        const createProduct=await product.create();
        res.status(201).json(createProduct);
       
    }
    catch(error){
return res.status(500).json({
    error:"error",
});
    }
}


exports.getProduct=async(req,res)=>{
 try{
const product=await product.find();
 }
 catch(error){
    return res.status(500).json({
        error:"error",
    });
}
}

exports.updateProduct=async(req,res)=>{
try{
    const id=req.params.id;
    const updProduct=await product.findByIdAndUpdate(id,req.body,{new:true});
    res.status(201).json(updProduct);
}
catch(error){
    return res.status(500).json({
        error:"error",
    });
}
}

exports.deleteProd=async(req,res)=>{
    try{
        const id=req.params.id;
        const deleteProduct=await product.findByIdAndDelete(id);
        res.status(201).json({message:"product deleted"});
    }
    catch(error){
        return res.status(500).json({
            error:"error",
        });
    }
}