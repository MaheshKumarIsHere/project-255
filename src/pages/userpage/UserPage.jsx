import styles from "./userpage.module.css";

function UserPage() {
  return (
    <div className={styles.userpage}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <img src="/mala-logo-a.png" alt="logo" width={100} />
          <div className={styles.logoText}>
            <h3>Electronic Visa</h3>
            <p>eVisa Goverment of Malaysia</p>
          </div>
        </div>
        <div className={styles.right}>
          <img src="/mala-logo-a.png" alt="logo" width={100} />
        </div>
      </div>
      <div className={styles.box1}>
        <img src="/mala-logo-a.png" alt="logo" width={100} />
        <div>
          <img src="/mala-logo-a.png" alt="logo" width={50} height={50} />
          <div>
            <h3>MALAYSIA IMMIGRATIONS</h3>
            <p>[Section 2(1),Passport Act 1956]</p>
            <h3>MALAYSIA IMMIGRATIONS</h3>
          </div>
        </div>
      </div>
      <div>
        <h2>eVISA Holder Information.</h2>
      </div>
    </div>
  );
}

export default UserPage;
