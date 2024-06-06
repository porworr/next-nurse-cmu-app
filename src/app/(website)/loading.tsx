import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loading() {
  return (
    <Container>
        <Box sx={
            {display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            height: "100vh"
            }}>
            <CircularProgress size={60}/>
        </Box>
    </Container>
  );
}