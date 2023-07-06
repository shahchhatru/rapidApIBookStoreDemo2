import Order from "@/models/orderModel.js" 
import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";

connect()

export async function GET(
    request, 
    { params }
  ) {
    try{
        const order = await Order.find({ userId: params.id });
        return NextResponse.json(order)
    }
    catch(error){
        return NextResponse.json({error : error.message}, {status : 500})
    }
  }