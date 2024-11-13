
const express=require("express");
const router=express.Router();


const{createProduct}=require("../controller/prodContr");
const{getProduct}=require("../controller/prodContr");
const{updateProduct}=require("../controller/prodContr");
const{deleteProd}=require("../controller/prodContr");

router.post("/product/create",createProduct);
router.get("/product/get",getProduct);
router.put("/product/update/:id",updateProduct);
router.delete("/product/delete/:id",deleteProd);

module.exports=router;