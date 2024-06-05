import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      About Page oK!
      <hr />
      <Link href="/" replace>Back to Home page</Link>
    </main>
  );
}