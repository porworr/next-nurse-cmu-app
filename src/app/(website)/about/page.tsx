import HomeIcon from '@mui/icons-material/HomeOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from "next/link";

export default function AboutPage() {
  return (
    <Container>
      <HomeIcon fontSize="large" color="secondary"/>
      <Typography variant="h4" color="primary">About Us</Typography>
      <Box>
        <Link href="/" replace>Back to Home page</Link>
      </Box>
      <Box mt={5}>
        <Button variant="contained" color="success" component={Link} href="/" replace>กลับสู่หน้าหลักนะคะพี่ๆ</Button>
      </Box>
    </Container>
  );
}