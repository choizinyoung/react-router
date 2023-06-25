import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

//NavLink 동작하는거 보려면 무조건 isActive로 받아와야한다.

const Navigation = (props) => {
  return (
    <header>
      <nav>
        <ul className={styles.nav}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive && styles.active;
              }}
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "yellow" : "gray" };
              }}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => {
                return isActive && styles.active;
              }}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navigation;
