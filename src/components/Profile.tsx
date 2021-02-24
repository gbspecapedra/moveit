import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.container}>
      <img src="https://github.com/gisabernardess.png" alt="Gisele Silva" />
      <div>
        <strong>Gisele Silva</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
