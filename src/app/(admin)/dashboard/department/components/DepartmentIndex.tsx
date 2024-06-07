"use client"

import { fetcher, http } from "@/app/services/http-service";
import { Delete, Edit } from "@mui/icons-material";
import { Button, Dialog } from "@mui/material";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import { DataGrid, GridActionsCellItem, GridColDef, GridRowId } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import useSWR from "swr";
import DepartmentCreate from "./DepartmentCreate";

export default function DepartmentIndex() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [paginationModel, setPaginationModel] = useState({
    page: 1,
    pageSize: 4
  });

  const {data, isLoading, error, mutate} = useSWR(`http://localhost:3000/api/department?page=${paginationModel.page}&pageSize=${paginationModel.pageSize}`, fetcher);

  if (isLoading) {
    return <CircularProgress />
  }

  if (error) {
    return <Alert color="error">{JSON.stringify(error)}</Alert>
  }

  const columns: GridColDef<any>[] = [
    { field: "Id", headerName: "รหัสคณะ", width: 300 },
    { field: "Name", headerName: "คณะ", width: 500 },
    { field: "Action", 
      type: "actions",
      headerName: "Action", 
      width: 200,
      getActions: (params) => [
        <GridActionsCellItem
          key={1}
          icon={<Edit color="info"/>}
          label="edit"
          onClick={editDepartment(params.id)}
        />,
        <GridActionsCellItem
          key={2}
          icon={<Delete color="error"/>}
          label="delete"
          onClick={deleteDepartment(params.id)}
        />  
      ]
    }
  ];

  const editDepartment = (id: GridRowId) => () => {
    router.replace("./department/"+id.toString());
    
  }

  const deleteDepartment = (id: GridRowId) => async () => {
    const res = await http.delete(`http://localhost:3000/api/department/${id}`);
    enqueueSnackbar(res.data.message, { variant: "success" });
    await mutate(); // update data grid
  }

  return (
    <Container>
      <Button variant="outlined" sx={{marginBottom: 2}} onClick={handleOpen}>เพิ่มข้อมูล</Button>

      <Dialog open={open} onClose={handleClose}>
        <DepartmentCreate handleClose={handleClose} mutate={mutate} />
      </Dialog>
      <TableContainer component={Paper}>
        {
          data && (
            <DataGrid 
              columns={columns}
              rows={data.data}
              rowCount={data.totalRecord}
              getRowId={(row) => row.Id}
              pagination
              paginationModel={paginationModel}
              onPaginationModelChange={setPaginationModel}
              paginationMode="server"
              loading={isLoading}
              pageSizeOptions={[3, 5, 10]}
              disableRowSelectionOnClick
            />
          )
        }
      </TableContainer>
    </Container>
  );
}
