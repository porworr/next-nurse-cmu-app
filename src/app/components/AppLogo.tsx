"use client"

import React, { useEffect, useState } from "react";
type AppLogoProps = {
    title: string;
    isBold?: boolean;
}
export default function AppLogo({title, isBold}: AppLogoProps) {
    // let department = "CMU";
    const [department, setDepartment] = useState("CMU");
    const handleClickMe = () => {
        // alert("Hello click event");
        // department = "Nurse";
        setDepartment("Nurse");
    }
    useEffect(() => {
        console.log("ทำครั้งแรกและทุกครั้งที่ re-render app logo");
    });

    useEffect(() => {
        console.log("ทำครั้งแรกแค่ครั้งเดียวเท่านั้น");
    },[]);

    useEffect(() => {
        console.log("ทำครั้งแรก และ department มีอัปเดทค่า");
    },[department]);
        // alert("Hello use effect");
    return (
        <div>
            <h3>{department}</h3>
            {
                isBold ? <p><strong>{title}</strong></p> : <p>{title}</p>
            }
          <button onClick={handleClickMe}>Click me</button>
        </div>
    )
}