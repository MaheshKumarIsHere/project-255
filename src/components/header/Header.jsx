import { useEffect, useState } from "react";
import styles from "./header.module.css";

function Header() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [today, setToday] = useState(new Date());
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    setToday(new Date());
  }, []);

  useEffect(() => {
    if (hour >= 24) {
      setHour(0);
    }
    if (minute >= 60) {
      setHour((prev) => prev + 1);
      setMinute(0);
    }
    if (second >= 60) {
      setMinute((prev) => prev + 1);
      setSecond(0);
    }
    setTimeout(() => {
      setSecond((prev) => prev + 1);
    }, 1000);
  }, [second, minute, hour]);

  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.timer}>
          {`${hour <= 9 ? `0${hour}` : hour}`}:
          {`${minute <= 9 ? `0${minute}` : minute}`}:
          {`${second <= 9 ? `0${second}` : second}`}
        </div>
        <div className={styles.loggedIn}>
          {loggedIn && <p>You logged in as VISITOR</p>}
        </div>
        <div className={styles.currentDate}>
          <p>{today.toDateString()}</p>
          <hr />
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Header;
