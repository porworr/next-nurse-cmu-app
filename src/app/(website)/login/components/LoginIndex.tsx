"use client";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { signIn } from "next-auth/react";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { useRouter } from "next/navigation";

function LoginIndex() {
  const router = useRouter();
  const schema = yup.object().shape({
    Email: yup
      .string()
      .required("ป้อนข้อมูลอีเมล์ด้วย")
      .email("รูปแบบอีเมล์ไม่ถูกต้อง"),
    Password: yup.string().required("ป้อนข้อมูลรหัสผ่านด้วย"),
  });

  const { handleSubmit, control } = useForm<any>({
    defaultValues: {
      Email: "",
      Password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (myForm: any) => {
    const {Email, Password} = myForm;
    const result = await signIn("credentials", {
      redirect: false,
      Email,
      Password
    });
    if (result?.ok) {
      router.replace("/dashboard");
    } else {
      // error
      enqueueSnackbar(result?.error, {variant: "error"});
    }
    return false;
  };

  return (
    <>
      <SnackbarProvider />
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login In
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Controller
              name="Email"
              control={control}
              render={({ field: { onChange }, fieldState: { error } }) => (
                <TextField
                  error={!!error}
                  helperText={error ? error.message : null}
                  onChange={onChange}
                  defaultValue=""
                  label="Email"
                  type="email"
                  fullWidth
                  margin="normal"
                />
              )}
            />

            <Controller
              name="Password"
              control={control}
              render={({ field: { onChange }, fieldState: { error } }) => (
                <TextField
                  error={!!error}
                  helperText={error ? error.message : null}
                  onChange={onChange}
                  defaultValue=""
                  label="Password"
                  type="password"
                  fullWidth
                  margin="normal"
                />
              )}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              เข้าระบบ
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
}

export default LoginIndex;