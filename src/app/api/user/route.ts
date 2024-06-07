import { hash, genSalt } from "bcrypt";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db"

// register user
// http://localhost:3000/api/user
export async function POST(request: NextRequest) {
    const jsonBody = await request.json() as any;

    //1. เช็คอีเมล์ซ้ำ
    const user = await prisma.users.findUnique({
        where: {Email: jsonBody.Email}
    });
    if (user) {
        return NextResponse.json({message: "มีอีเมล์นี้ในระบบแล้ว"}, {status: 400});
    }

    //2. เข้ารหัส (hash) password
    const salt = await genSalt(10);
    const hashedPassword = await hash(jsonBody.Password, salt);

    //3. เพิ่มลงไปที่ table
    await prisma.users.create({
        data: {
            Firstname: jsonBody.Firstname,
            Lastname: jsonBody.Lastname,
            Email: jsonBody.Email,
            Password: hashedPassword
        }
    });

    return NextResponse.json({message: "ลงทะเบียนสำเร็จ"});
}