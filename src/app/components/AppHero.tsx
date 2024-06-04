import AppLogo from "./AppLogo";

export default function AppHero() {
    const title = "Hello Hero component";
    const myHero = <p>my hero</p>;
    const dateNow = new Date();
    const isShow = true;

  return (
    <>
    {
        isShow && <h1>{title}</h1>
    }
    {
        isShow && <AppLogo />
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