"use client"

type AppLogoProps = {
    title: string;
    isBold?: boolean;
}
export default function AppLogo({title, isBold}: AppLogoProps) {
    const handleClickMe = () => {
        alert("Hello click event");
    }
    return (
        <div>
            {
                isBold ? <p><strong>{title}</strong></p> : <p>{title}</p>
            }
          <button onClick={handleClickMe}>Click me</button>
        </div>
    )
}