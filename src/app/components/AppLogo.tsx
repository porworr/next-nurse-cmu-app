"use client"

export default function AppLogo() {
    const handleClickMe = () => {
        alert("Hello click event");
    }
    return (
        <p>
          App Logo
          <button onClick={handleClickMe}>Click me</button>
        </p>
    )
}