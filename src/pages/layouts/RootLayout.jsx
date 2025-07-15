import { Outlet } from "react-router";
import styles from "./rootlayout.module.css";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

function RootLayout() {
  return (
    <div>
      <Header />
      <div className={styles.homepage}>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
