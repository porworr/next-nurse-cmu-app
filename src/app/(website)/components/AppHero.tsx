import AppLogo from "./AppLogo";

export default function AppHero() {
    const title = "Hello Hero component";
    const myHero = <p>my hero</p>;
    const dateNow = new Date();
    const isShow = true;
    const students = [
        {id: 1, fullname: "John Doe"},
        {id: 2, fullname: "Jane Doe"},
    ]

  return (
    <>
    <h1 style={{color: "#7D3C98", backgroundColor: "#D2B4DE",textAlign: "center",fontSize: "30"}}>Students list</h1>
    {
        students.map((item, index) => {
            return (<div key={item.id}> index = {index} id = {item.id} name: {item.fullname}</div>)
        })
    }
    {
        isShow && <h1>{title}</h1>
    }
    {
        isShow && <AppLogo title="Hello Logo" />
    }
    {
        isShow ? <p>true</p> : <p>false</p>
    }
        <h3>{title.toUpperCase()}</h3>
        {myHero}
        <p>{dateNow.toLocaleDateString()}</p>
        <p>{dateNow.getFullYear()}</p>
    </>
  );
}