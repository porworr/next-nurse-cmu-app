import DepartmentEdit from "../components/DepartmentEdit";

export default function EditDepartmentPage({params}:{params:{id:string}}) {
  return (
    <main>
      <DepartmentEdit id={params.id} />
    </main>
  );
}