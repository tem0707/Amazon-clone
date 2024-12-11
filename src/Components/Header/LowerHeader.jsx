import React from "react";
import { HiMenu } from "react-icons/hi";
import styles from "./Header.module.css";

function LowerHeader() {
  return (
    <div className={styles.header__lower}>
      <ul>
        <li className={styles.menu}>
          <HiMenu />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Customer Services</li>
        <li>Registry</li>
        <li>Gift Card</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;
