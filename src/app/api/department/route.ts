import { NextRequest, NextResponse } from "next/server";

// http://localhost:3000/api/department
export function GET() {
    return NextResponse.json({ 
        message: "department index" 
    });
}

// http://localhost:3000/api/department
export async function POST(req: NextRequest) {
    return NextResponse.json({ 
        message: "Success",
        data: await req.json()
    });
}