import AppHero from "./components/AppHero";
import AppLogo from "./components/AppLogo";

export default function Home() {
  return (
    <main>
      <AppLogo title="Hello Logo" isBold={true} />
      {/* <AppLogo title="Hello Logo1" isBold />
      <AppLogo title="Hello Logo2" /> */}
      <hr />
      {/* <AppHero /> */}
    </main>
  );
}
