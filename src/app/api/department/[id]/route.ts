import { NextRequest, NextResponse } from "next/server";

// http://localhost:3000/api/department/1
// get by id
export function GET(req: NextRequest,{params}:{params:{id:string}}) {
    return NextResponse.json({
        id: params.id
    });
}
// {params:{id:string}} ต้องชื่อตรงกับ folder ที่เราตั้งไว้


// http://localhost:3000/api/department/1
// update by id
export async function PUT(req: NextRequest,{params}:{params:{id:string}}) {
    return NextResponse.json({
        id: params.id,
        data: await req.json()
    });
}

// http://localhost:3000/api/department/1
// delete by id
export async function DELETE(req: NextRequest,{params}:{params:{id:string}}) {
    return NextResponse.json({
        id: params.id,
    });
}