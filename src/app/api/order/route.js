import Order from "@/models/orderModel.js" 
import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";

connect()

export async function GET(request) {
  
    const product = await Order.find();
    return NextResponse.json(product);
}

export async function POST(request){
    const reqBody = await request.json();
    const newOrder = new Order(reqBody)

    try{
        const savedOrder = await newOrder.save();
        return NextResponse.json(savedOrder)
    }
    catch(error){
        return NextResponse.json({error : error.message},{status : 400})
    }
}