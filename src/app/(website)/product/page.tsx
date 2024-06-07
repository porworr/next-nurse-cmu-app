import Container from "@mui/material/Container";
import { getProducts } from "./service/product-service";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Image from "next/image";

export default async function ProductPage() {
  const res = await getProducts(); 
  return (
    <Container>
      {
        res.data && (
              <Grid container spacing={2} sx={{mt: 5}}>
                  {
                    res.data.map((item: any) => {
                      return (
                        <Grid item key={item.id} xs={12} sm={6}  md={4}>
                          <Paper>
                            <Image 
                              src={item.picture}
                              alt={item.detail}
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{width: "100%", height: 150}}
                              priority
                            />
                            <Typography variant="h5">{item.title}</Typography>
                            <Typography variant="body1">{item.detail}</Typography>
                          </Paper>
                        </Grid>
                      )
                    })
                  }
              </Grid>
        )
      }
    </Container>
  );
}
