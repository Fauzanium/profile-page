import styles from "./page.module.css";

const experiences = [
  { year: "2025", role: "Programming Staff Intern ICHIRO ITS" },
  { year: "2026", role: "Programming Staff Intern Bayucaraka ITS" },
];

export default function Experience() {
  return (
    <>
      <h1 className={styles.center_text}>Experience</h1>
      <div className={styles.timelinecontainer}>
        <div className={styles.timeline}>
          {experiences.map((item, idx) => (
            <div key={idx} className={styles.item}>
              <span className={styles.dot} />
              <h3 className={styles.year}>{item.year}</h3>
              <p className={styles.role}>{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
