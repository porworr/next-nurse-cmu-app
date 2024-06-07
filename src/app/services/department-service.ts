import { prisma } from "@/lib/db";
import exp from "constants";


export async function findAllDepartment() {
    return await prisma.department.findMany({
        orderBy: { Id: "desc" },
    });
}

export async function countAllDepartment() {
    return await prisma.department.count();
}