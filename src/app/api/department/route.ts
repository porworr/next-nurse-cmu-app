import { countAllDepartment, createDepartment, findAllWithPaginationDepartment} from "@/app/services/department-service";
import { NextRequest, NextResponse } from "next/server";

// http://localhost:3000/api/department?page=1&pageSize=3
export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const page = searchParams.get("page");
    const pageSize = searchParams.get("pageSize");

    const countDepartment = await countAllDepartment();
    const department = await findAllWithPaginationDepartment(Number(page), Number(pageSize));

    return NextResponse.json({ 
        totalRecord: countDepartment,
        data: department
    });
}

// http://localhost:3000/api/department
// export async function GET() {
//     const department = await findAllDepartment();
//     const countDepartment = await countAllDepartment();

//     return NextResponse.json({ 
//         totalRecord: countDepartment,
//         data: department
//     });
// }

// http://localhost:3000/api/department
export async function POST(req: NextRequest) {
    const department = await req.json()
    const newDepartment = await createDepartment(department)

    return NextResponse.json({ 
        message: "Success",
        data: newDepartment
    });
}