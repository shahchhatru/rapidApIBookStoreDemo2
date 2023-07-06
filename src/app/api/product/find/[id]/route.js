import Product from "@/models/productModel.js" 
import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";

connect()

export async function GET(
    request, 
    { params }
  ) {
    try{
        const product = await Product.findById(params.id);
        return NextResponse.json(product)
    }
    catch(error){
        return NextResponse.json({error : error.message}, {status : 500})
    }
  }