"use client";
import styles from "./page.module.css";

export default function Home() {
  const handlePayPayPayment = async () => {
    const res = await fetch("/api/paypay", {
      method: "POST",
    })
    const json = await res.json()

    window.location.href = json.url
  }

  return (
    <div className={styles.main}>
      <h1>
        PayPay 決済テスト
      </h1>

      <button type="button" onClick={handlePayPayPayment}>
        支払う
      </button>
    </div>
  );
}
