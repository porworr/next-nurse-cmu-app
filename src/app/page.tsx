import AppLogo from "@/app/components/AppLogo";
import styles from "./page.module.css";
export default function Home() {
  const appPassword = process.env.APP_PASSWORD
  return (
    <main>
      <AppLogo title="Hello Logo" isBold/>
      <h3 className="title">
        {process.env.APP_NAME}
      </h3>
      {
        appPassword === "123456" && <p>OK!</p>
      }
      <p className={styles.title}>Home Page</p>
    </main>
  );
}
