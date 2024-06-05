import AppLogo from "@/app/(website)/components/AppLogo";
import styles from "./page.module.css";
import Link from "next/link";
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
      <p className={styles.title}>Menu</p>
      <div>
        <Link href="/about">About Page</Link>
      </div>
      <div>
        <Link href={{pathname: "/contact"}} prefetch={false}>Contact Page</Link>
      </div>
      <div>
        <Link href="/dashboard">Dashboard Page</Link>
      </div>
    </main>
  );
}
