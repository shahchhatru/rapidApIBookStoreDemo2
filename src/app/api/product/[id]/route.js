import Product from "@/models/productModel.js" 
import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";

connect()

export async function DELETE(
    request, 
    { params }
  ) {
    try{
        const deletedProduct = await Product.findByIdAndDelete(params.id);
        return NextResponse.json("The product has been deleted")
    }
    catch(error){
        return NextResponse.json({error : error.message}, {status : 500})
    }
   

  }
  export async function PUT(
    request, 
    { params }
  ) {
    try {
        const reqBody = await request.json()
        const updatedProduct = await Product.findByIdAndUpdate(
          params.id,
          {
            $set: reqBody,
          },
          { new: true }
        );

        return NextResponse.json(updatedProduct)

        }
  catch(error){
    return NextResponse.json({error : error.message}, {status : 500})
  }  

}