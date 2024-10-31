import Link from "next/link";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.root}>
      <Link className={styles.link} href="/">支払い</Link>
      <Link className={styles.link} href="/account">アカウント連携</Link>
    </header>
  )
}
