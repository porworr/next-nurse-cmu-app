import { deleteDepartment, findByIdDepartment, updateDepartment } from "@/app/services/department-service";
import { NextRequest, NextResponse } from "next/server";

// http://localhost:3000/api/department/1
// get by id
export async function GET(req: NextRequest,{params}:{params:{id:string}}) {
    try {
        const department = await findByIdDepartment(Number(params.id));
        if (!department) {
            return NextResponse.json({error: {status:404, message:"Department Page not found"}});
        }
        return NextResponse.json(department); 
    } catch (error) {
        return NextResponse.json({error: {status:500, message:"Something went wrong"}});
    }
    
}
// {params:{id:string}} ต้องชื่อตรงกับ folder ที่เราตั้งไว้


// http://localhost:3000/api/department/1
// update by id
export async function PUT(req: NextRequest,{params}:{params:{id:string}}) {
    try {
        const department = await findByIdDepartment(Number(params.id));
        if (!department) {
            return NextResponse.json({error: {status:404, message:"Department Page not found"}});
        }
        const departmentBody = await req.json();
        const updateData = await updateDepartment(Number(params.id), departmentBody);
        return NextResponse.json({
            message: "Success",
            data: updateData
        }); 
    } catch (error) {
        return NextResponse.json({error: {status:500, message:"Something went wrong"}});
    }
}

// http://localhost:3000/api/department/1
// delete by id
export async function DELETE(req: NextRequest,{params}:{params:{id:string}}) {
    try {
        const department = await findByIdDepartment(Number(params.id));
        if (!department) {
            return NextResponse.json({error: {status:404, message:"Department Page not found"}});
        }
        await deleteDepartment(Number(params.id));
        return NextResponse.json({
            message: "Success",
        }); 
    } catch (error) {
        return NextResponse.json({error: {status:500, message:"Something went wrong"}});
    }
}