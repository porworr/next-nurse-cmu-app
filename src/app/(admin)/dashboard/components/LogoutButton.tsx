"use client"

import Button from "@mui/material/Button";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
    const Logout = () => {
        signOut({ callbackUrl: "/login" });
    }
    return (
        <Button
            variant="contained"
            onClick={Logout}
        >
            Logout
        </Button>
    );
}