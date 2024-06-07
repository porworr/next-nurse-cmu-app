import { prisma } from "@/lib/db";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";

export default async function StudentPage() {
  const students = await prisma.students.findMany({
    // include: { Departments: true },
    include: { Department: { select: { Name: true} } },
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
