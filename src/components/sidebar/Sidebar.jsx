import { Link, NavLink } from "react-router";
import styles from "./sidebar.module.css";

const linksData = [
  {
    id: 1,
    title: "APPLICATION STATUS INQUIRY",
    href: "/",
  },
  {
    id: 2,
    title: "VIDEO TUTORIAL",
    href: "/video-tutorial",
  },
];

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.headerText}>
        <p>MYONLINE*FOREIGN</p>
        <p>MAIDS / FOREIGN WORKERS</p>
      </div>
      <ul>
        {linksData.map((link) => (
          <NavLink key={link.id} to={link.href}>
            <li>{link.title}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
