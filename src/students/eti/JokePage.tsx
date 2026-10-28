import styles from "./styles.module.css";
import { PageProps } from "../../types";

export default function EtiJokePage({ onBack }: PageProps) {
  return (
    <div className={`joke-page ${styles.jokePage}`}>
      <section className={styles.jokeCard}>
        <span className={styles.bigEmoji} aria-hidden="true">🤵</span>
        <h2>חנות אחת תלתה שלט: ״כאן מוכרים חליפות לכל סוגי העבודה״</h2>
        <p>נכנס איש אחד ושאל את המוכר: ״יש לכם חליפה בשביל מחפשי עבודה?״</p>
        <button className={styles.backBtn} onClick={onBack}>← חזרה</button>
      </section>
    </div>
  );
}
