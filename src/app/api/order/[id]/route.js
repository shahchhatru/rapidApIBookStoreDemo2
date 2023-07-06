import Order from "@/models/orderModel.js" 
import { connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";

connect()

export async function DELETE(
    request, 
    { params }
  ) {
    try{
        const deletedOrder = await Order.findByIdAndDelete(params.id);
        return NextResponse.json("The Order has been deleted")
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
        const updatedOrder = await Order.findByIdAndUpdate(
          params.id,
          {
            $set: reqBody,
          },
          { new: true }
        );

        return NextResponse.json(updatedOrder)

        }
  catch(error){
    return NextResponse.json({error : error.message}, {status : 500})
  }  

}