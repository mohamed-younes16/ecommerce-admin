import prismadb from "@/lib/prismabd";
import { NextResponse } from "next/server";

export async function GET(
    req: Request,
    { params }: { params: { storeId: string } }
  ) {
    try {
      if (!params.storeId) {
        return new NextResponse("Store id is required", { status: 400 });
      }
  
      const products = await prismadb.product.findMany({
        where: {
          storeId: params.storeId
        }
      });
    
      return NextResponse.json(products);
    } catch (error) {
      console.log('[COLORS_GET]', error);
      return new NextResponse("Internal error", { status: 500 });
    }
  };