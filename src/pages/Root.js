import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import styles from "./Root.module.css";

const RootLayout = (props) => {
  return (
    <>
      <Navigation />
      <div className={styles.content}>
        <Outlet />
      </div>
    </>
  );
};
export default RootLayout;
