import React, { useContext } from "react";
import Amazon_logo from "../../assets/amazon_logo.png";
import Us_Flag from "../../assets/us_flag.jpeg";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";

function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <>
      <section className={styles.header_fixed}>
        <div className={styles.header__container}>
          <div className={styles.header__logo}>
            <Link to="/">
              <img src={Amazon_logo} alt="Amazon Logo" />
            </Link>

            <div className={styles.header__delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Canada</span>
              </div>
            </div>
          </div>

          <div className={styles.header__search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search Amazon" />
            <BsSearch size={40} />
          </div>

          <div className={styles.header__order}>
            <Link to="" className={styles.header_language}>
              <img src={Us_Flag} alt="us_flag" />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>

            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]} </p>
                    <span onClick={() => auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>

            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>

            <Link to="/cart" className={styles.header__cart}>
              <BiCart size={45} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
        <LowerHeader />
      </section>
    </>
  );
}

export default Header;
