import { countAllDepartment, findAllDepartment } from "@/app/services/department-service";
import { NextRequest, NextResponse } from "next/server";

// http://localhost:3000/api/department
export async function GET() {
    const department = await findAllDepartment();
    const countDepartment = await countAllDepartment();

    return NextResponse.json({ 
        totalRecord: countDepartment,
        data: department
    });
}

// http://localhost:3000/api/department
export async function POST(req: NextRequest) {
    return NextResponse.json({ 
        message: "Success",
        data: await req.json()
    });
}