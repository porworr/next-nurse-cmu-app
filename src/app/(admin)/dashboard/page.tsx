import { authOptions } from "@/app/api/auth/auth-options";
import { Typography } from "@mui/material";
import { getServerSession } from "next-auth";
import LogoutButton from "./components/LogoutButton";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      {
       session && (
          <Typography>Welcome! {session.user?.name} {session.user?.email}</Typography>
        ) 
      }
      <LogoutButton />
    </main>
  );
}