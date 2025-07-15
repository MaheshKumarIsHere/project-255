import styles from "./videotutorial.module.css";

function VideoTutorial() {
  return (
    <div className={styles.main_conatiner}>
      <div className={styles.wrapper}>
        <div className={styles.video}>
          <h2>Video is not available right now!</h2>
        </div>
      </div>
    </div>
  );
}

export default VideoTutorial;
