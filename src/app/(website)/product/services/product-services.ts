import { notFound, redirect } from "next/navigation";

export async function getProducts() {
    // const res = await fetch("https://api.codingthailand.com/api/course"); // static redering (cache ตลอดไป)
    // const res = await fetch("https://api.codingthailand.com/api/course", {next: {revalidate: 60}}); // ตั้ง cache ไว้ 60 วินาที
    const res = await fetch("https://api.codingthailand.com/api/course999", {cache: "no-store"}); // ไม่ cache
    if (!res.ok) {
        // redirect("/");
        // notFound();
        throw new Error("ไม่สามารถดึงข้อมูลได้")
    }
    return res.json();
}
