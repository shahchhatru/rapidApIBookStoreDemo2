import Product from "@/models/productModel.js" 
import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";

connect()

export async function GET(request) {
  
    const product = await Product.find();
    return NextResponse.json(product);
}

export async function POST(request){
    const reqBody = await request.json();
    const newProduct = new Product(reqBody)

    try{
        const savedProduct = await newProduct.save();
        return NextResponse.json(savedProduct)
    }
    catch(error){
        return NextResponse.json({error : error.message},{status : 400})
    }
}