import { prisma } from "@/lib/db";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";

export default async function StudentPage() {
  const students = await prisma.students.findMany({
    // include: { Departments: true }, // เลือกทั้งหมดเลย
    include: { Department: { select: { Name: true} } }, // เลือกตาราง students แต่ในตาราง Department จะเลือกเฉพาะ Name
    // select: { 
    //   Id: true, 
    //   fname: true, 
    //   Department: { select: { Name: true } } 
    // }, // join เหมือนเดิมแต่ไม่ได้ใช้ include เลือกมาแสดงตรงๆได้เลยว่าจะแสดงข้อมูลไหนบ้าง
    orderBy: { Id: "desc" }
  });

  return (
    <Container>
      {
        students.length > 0 && (
          students.map((item) => {
            return (
              <>
                <Typography key={item.Id.toString()}> 
                  {item.Id.toString()} {item.fname} {item.tel} 
                  {item.Department?.Name}
                </Typography>
              </>
            )
          })
        )
      }
    </Container>
  );
}
