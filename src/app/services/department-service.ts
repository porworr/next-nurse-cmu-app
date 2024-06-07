import { prisma } from "@/lib/db";
import { Prisma } from "@prisma/client";

// find all department
export async function findAllDepartment() {
    return await prisma.department.findMany({
        orderBy: { Id: "desc" },
    });
}

// find all department with pagination
// for MUI data grid
export async function findAllWithPaginationDepartment(page = 0, pageSize = 3) {
    return await prisma.department.findMany({
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: { Id: "desc" },
    });
}

// count all department
export async function countAllDepartment() {
    return await prisma.department.count();
}

// find department by id
export async function findByIdDepartment(id: number) {
    return await prisma.department.findUnique({
        where: { Id: id },
    })
} 

// create department by id
export async function createDepartment(department: Prisma.DepartmentCreateInput) {
    return await prisma.department.create({
        data: department
    });
}

// update department by id
export async function updateDepartment(id: number, department: Prisma.DepartmentUpdateInput) {
    return await prisma.department.update({
        where: { Id: id },
        data: department
    });
}

// delete department by id
export async function deleteDepartment(id: number) {
    return await prisma.department.delete({
        where: { Id: id }
    });
}