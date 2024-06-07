"use client";

import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";

import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Box from "@mui/material/Box";
import { fetcher, http } from "@/app/services/http-service";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import React from "react";

export default function DepartmentEdit({ id }: { id: string }) {
  const { data } = useSWR("http://localhost:3000/api/department/" + id, fetcher);
  const router = useRouter();

  const schema = yup.object().shape({
    Name: yup.string().required("ป้อนข้อมูลคณะด้วย"),
  });

  const {
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues: {
        Name: ""
    }
  });

  const onSubmit = async (myForm: any) => {
    await http.put("http://localhost:3000/api/department/" + id, {
      Name: myForm.Name,
    }); // {id:1, name: 'IT'}
    router.replace("/dashboard/department");
  };
  

  React.useEffect(() => {
    reset(data);
}, [reset, data]);

  return (
    <>
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        sx={{ mt: 3, width: 300 }}
      >
        <DialogTitle>แก้ไขข้อมูล</DialogTitle>
        <DialogContent>
          <Controller
            name="Name"
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <TextField
                type="text"
                helperText={error ? error.message : null}
                error={!!error}
                onChange={onChange}
                fullWidth
                variant="outlined"
                defaultValue={data?.name}
                value={value}
                onBlur={onBlur}
              />
            )}
          />
        </DialogContent>
        <DialogActions>
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            loading={isSubmitting}
            loadingIndicator="รอสักครู่..."
          >
            บันทึก
          </LoadingButton>
        </DialogActions>
      </Box>
    </>
  );
}
