import AppLogo from "@/app/(website)/components/AppLogo";
import styles from "./page.module.css";
import Link from "next/link";
import { Container, Typography } from "@mui/material";
export default function Home() {
  const appPassword = process.env.APP_PASSWORD
  return (
    <Container>
      <AppLogo title="Hello Logo" isBold/>
      <Typography variant="h3">
        {process.env.APP_NAME}
      </Typography>
      {
        appPassword === "123456" && <p>OK!</p>
      }
    </Container>
  );
}
