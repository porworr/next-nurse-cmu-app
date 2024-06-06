import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";


export default function NotFound() {
  return (
    <Container sx={{pt: 2}}>
        <Alert color="error" variant="outlined">ไม่พบหน้าที่คุณกําลังค้นหา</Alert>
    </Container>
  );
}