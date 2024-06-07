"use client";

import { fetcher } from "@/app/services/http-service";
import useSWR from "swr";
export default function DepartmentIndex() {
  const { data, error } = useSWR("http://localhost:3000/api/department?page=1&pageSize=3", fetcher);
  return (
    <main>
      {JSON.stringify(data)}
    </main>
  );
}