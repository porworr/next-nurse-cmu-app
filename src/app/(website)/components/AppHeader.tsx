"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NextLink from "next/link";

import Button from "@mui/material/Button";
import { usePathname } from "next/navigation";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { ListItemIcon } from "@mui/material";

export default function AppHeader() {
  const pathname = usePathname();
  const [open, setState] = useState(false);

  const toggleDrawer = (open: any) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  return (
    <>
      <AppBar
        position="static"
        color="primary"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap", justifyContent: "space-between" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{
              mr: 2,
              display: {
                sm: "block",
                md: "none"
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h2" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            CodingThailand
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <Link
              underline={pathname == "/" ? "always" : "none"}
              component={NextLink}
              variant="button"
              color="inherit"
              href="/"
              replace
              sx={{ my: 1, mx: 1.5 }}
            >
              Home
            </Link>
            <Link
              underline={pathname == "/about" ? "always" : "none"}
              component={NextLink}
              variant="button"
              color="inherit"
              href="/about"
              sx={{ my: 1, mx: 1.5 }}
            >
              About Us
            </Link>
            <Link
              underline={pathname == "/contact" ? "always" : "none"}
              component={NextLink}
              variant="button"
              color="inherit"
              href="/contact"
              sx={{ my: 1, mx: 1.5 }}
            >
              Contact Us
            </Link>
            <Link
              underline={pathname == "/product" ? "always" : "none"}
              component={NextLink}
              variant="button"
              color="inherit"
              href="/product"
              sx={{ my: 1, mx: 1.5 }}
              // prefetch={false}
            >
              Product
            </Link>
            <Link
              underline={pathname == "/student" ? "always" : "none"}
              component={NextLink}
              variant="button"
              color="inherit"
              href="/student"
              sx={{ my: 1, mx: 1.5 }}
            >
              Student
            </Link>
            <Button
              LinkComponent={NextLink}
              href="/login"
              variant="outlined"
              color="inherit"
              sx={{ my: 1, mx: 1.5 }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="left">
        <Box
          sx={{
            p: 2,
            height: 1,
            backgroundColor: "#2A9BF3",
            width: "20rem",
          }}
        >
          {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
          <IconButton sx={{ mb: 2 }}>
            <CloseIcon onClick={toggleDrawer(false)} />
          </IconButton>

          <Divider sx={{ mb: 2 }} />

          <Box sx={{ mb: 2 }}>
            <ListItemButton component={NextLink} href="/" onClick={toggleDrawer(false)}>
              <ListItemIcon>
                <ArrowForwardIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>

            <ListItemButton component={NextLink} href="/about" onClick={toggleDrawer(false)}>
              <ListItemIcon>
                <ArrowForwardIcon />
              </ListItemIcon>
              <ListItemText primary="About Us" />
            </ListItemButton>

            <ListItemButton component={NextLink} href="/product" onClick={toggleDrawer(false)}>
              <ListItemIcon>
                <ArrowForwardIcon />
              </ListItemIcon>

              <ListItemText primary="Product" />
            </ListItemButton>

            <ListItemButton component={NextLink} href="/login" onClick={toggleDrawer(false)}>
              <ListItemIcon>
                <ArrowForwardIcon />
              </ListItemIcon>

              <ListItemText primary="Log In" />
            </ListItemButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}