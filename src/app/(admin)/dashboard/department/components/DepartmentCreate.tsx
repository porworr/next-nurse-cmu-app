import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { http } from "@/app/services/http-service";
import { enqueueSnackbar } from "notistack";

function DepartmentCreate({ handleClose, mutate }: any) {

 const schema = yup.object().shape({
    Name: yup.string().required("ป้อนข้อมูลคณะด้วย")
 });


  const { handleSubmit, control } = useForm<any>({
    defaultValues: {
      Name: "",
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = async (myForm: any) => {
    const response = await http.post("http://localhost:3000/api/department", myForm);
    enqueueSnackbar(response.data.message, {variant: "success"});
    await mutate();
    handleClose();
  };

  return (
    <>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>เพิ่มข้อมูลคณะ</DialogTitle>
        <DialogContent>
          <Controller
            name="Name"
            control={control}
            render={({field: {onChange}, fieldState: {error} }) => (
              <TextField
                error={!!error}
                helperText={error ? error.message : null}
                onChange={onChange}
                defaultValue=""
                label="คณะ"
                type="text"
                fullWidth
                variant="standard"
              />      
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ยกเลิก</Button>
          <Button type="submit">บันทึก</Button>
        </DialogActions>
      </form>
    </>
  );
}

export default DepartmentCreate;
