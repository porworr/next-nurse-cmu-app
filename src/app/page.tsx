import AppLogo from "./components/AppLogo";
import styles from "./page.module.css";
export default function Home() {
  return (
    <main>
      <h3 className="title">Hello World</h3>
      <p className={styles.title}>Home Page</p>
      <AppLogo title="Hello Logo" isBold/>
    </main>
  );
}
